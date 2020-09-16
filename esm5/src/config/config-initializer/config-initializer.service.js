import { __awaiter, __decorate, __generator, __param, __read, __spread, __values } from "tslib";
import { Inject, Injectable, isDevMode, Optional } from '@angular/core';
import { CONFIG_INITIALIZER_FORROOT_GUARD, } from './config-initializer';
import { BehaviorSubject } from 'rxjs';
import { filter, mapTo, take } from 'rxjs/operators';
import { deepMerge } from '../utils/deep-merge';
import { Config, RootConfig } from '../config-tokens';
import * as i0 from "@angular/core";
import * as i1 from "../config-tokens";
import * as i2 from "./config-initializer";
/**
 * Provides support for CONFIG_INITIALIZERS
 */
var ConfigInitializerService = /** @class */ (function () {
    function ConfigInitializerService(config, initializerGuard, rootConfig) {
        this.config = config;
        this.initializerGuard = initializerGuard;
        this.rootConfig = rootConfig;
        this.ongoingScopes$ = new BehaviorSubject(undefined);
    }
    Object.defineProperty(ConfigInitializerService.prototype, "isStable", {
        /**
         * Returns true if config is stable, i.e. all CONFIG_INITIALIZERS resolved correctly
         */
        get: function () {
            return (!this.initializerGuard ||
                (this.ongoingScopes$.value && this.ongoingScopes$.value.length === 0));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Recommended way to get config for code that can run before app will finish
     * initialization (APP_INITIALIZERS, selected service constructors)
     *
     * Used without parameters waits for the whole config to become stable
     *
     * Parameters allow to describe which part of the config should be stable using
     * string describing config part, e.g.:
     * 'siteContext', 'siteContext.language', etc.
     *
     * @param scopes String describing parts of the config we want to be sure are stable
     */
    ConfigInitializerService.prototype.getStableConfig = function () {
        var scopes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scopes[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.isStable) {
                    return [2 /*return*/, this.config];
                }
                return [2 /*return*/, this.ongoingScopes$
                        .pipe(filter(function (ongoingScopes) {
                        return ongoingScopes && _this.areReady(scopes, ongoingScopes);
                    }), take(1), mapTo(this.config))
                        .toPromise()];
            });
        });
    };
    /**
     * Removes provided scopes from currently ongoingScopes
     *
     * @param scopes
     */
    ConfigInitializerService.prototype.finishScopes = function (scopes) {
        var e_1, _a;
        var newScopes = __spread(this.ongoingScopes$.value);
        try {
            for (var scopes_1 = __values(scopes), scopes_1_1 = scopes_1.next(); !scopes_1_1.done; scopes_1_1 = scopes_1.next()) {
                var scope = scopes_1_1.value;
                newScopes.splice(newScopes.indexOf(scope), 1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (scopes_1_1 && !scopes_1_1.done && (_a = scopes_1.return)) _a.call(scopes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.ongoingScopes$.next(newScopes);
    };
    /**
     * Return true if provided scopes are not part of ongoingScopes
     *
     * @param scopes
     * @param ongoingScopes
     */
    ConfigInitializerService.prototype.areReady = function (scopes, ongoingScopes) {
        var e_2, _a, e_3, _b;
        if (!scopes.length) {
            return !ongoingScopes.length;
        }
        try {
            for (var scopes_2 = __values(scopes), scopes_2_1 = scopes_2.next(); !scopes_2_1.done; scopes_2_1 = scopes_2.next()) {
                var scope = scopes_2_1.value;
                try {
                    for (var ongoingScopes_1 = (e_3 = void 0, __values(ongoingScopes)), ongoingScopes_1_1 = ongoingScopes_1.next(); !ongoingScopes_1_1.done; ongoingScopes_1_1 = ongoingScopes_1.next()) {
                        var ongoingScope = ongoingScopes_1_1.value;
                        if (this.scopesOverlap(scope, ongoingScope)) {
                            return false;
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (ongoingScopes_1_1 && !ongoingScopes_1_1.done && (_b = ongoingScopes_1.return)) _b.call(ongoingScopes_1);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (scopes_2_1 && !scopes_2_1.done && (_a = scopes_2.return)) _a.call(scopes_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return true;
    };
    /**
     * Check if two scopes overlap.
     *
     * Example of scopes that overlap:
     * 'test' and 'test', 'test.a' and 'test', 'test' and 'test.a'
     *
     * Example of scopes that do not overlap:
     * 'test' and 'testA', 'test.a' and 'test.b', 'test.nested' and 'test.nest'
     *
     * @param a ScopeA
     * @param b ScopeB
     */
    ConfigInitializerService.prototype.scopesOverlap = function (a, b) {
        var _a;
        if (b.length > a.length) {
            _a = __read([b, a], 2), a = _a[0], b = _a[1];
        }
        return a.startsWith(b) && (a[b.length] || '.') === '.';
    };
    /**
     * @internal
     *
     * Not a part of a public API, used by APP_INITIALIZER to initialize all provided CONFIG_INITIALIZERS
     *
     */
    ConfigInitializerService.prototype.initialize = function (initializers) {
        return __awaiter(this, void 0, void 0, function () {
            var ongoingScopes, asyncConfigs, _loop_1, this_1, _a, _b, initializer;
            var e_4, _c;
            var _this = this;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (this.ongoingScopes$.value) {
                            // guard for double initialization
                            return [2 /*return*/];
                        }
                        ongoingScopes = [];
                        asyncConfigs = [];
                        _loop_1 = function (initializer) {
                            if (!initializer) {
                                return "continue";
                            }
                            if (!initializer.scopes || !initializer.scopes.length) {
                                throw new Error('CONFIG_INITIALIZER should provide scope!');
                            }
                            if (isDevMode() && !this_1.areReady(initializer.scopes, ongoingScopes)) {
                                console.warn('More than one CONFIG_INITIALIZER is initializing the same config scope.');
                            }
                            ongoingScopes.push.apply(ongoingScopes, __spread(initializer.scopes));
                            asyncConfigs.push((function () { return __awaiter(_this, void 0, void 0, function () {
                                var initializerConfig;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, initializer.configFactory()];
                                        case 1:
                                            initializerConfig = _a.sent();
                                            // contribute configuration to rootConfig
                                            deepMerge(this.rootConfig, initializerConfig);
                                            // contribute configuration to global config
                                            deepMerge(this.config, initializerConfig);
                                            this.finishScopes(initializer.scopes);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })());
                        };
                        this_1 = this;
                        try {
                            for (_a = __values(initializers || []), _b = _a.next(); !_b.done; _b = _a.next()) {
                                initializer = _b.value;
                                _loop_1(initializer);
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                        this.ongoingScopes$.next(ongoingScopes);
                        if (!asyncConfigs.length) return [3 /*break*/, 2];
                        return [4 /*yield*/, Promise.all(asyncConfigs)];
                    case 1:
                        _d.sent();
                        _d.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ConfigInitializerService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CONFIG_INITIALIZER_FORROOT_GUARD,] }] },
        { type: undefined, decorators: [{ type: Inject, args: [RootConfig,] }] }
    ]; };
    ConfigInitializerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigInitializerService_Factory() { return new ConfigInitializerService(i0.ɵɵinject(i1.Config), i0.ɵɵinject(i2.CONFIG_INITIALIZER_FORROOT_GUARD, 8), i0.ɵɵinject(i1.RootConfig)); }, token: ConfigInitializerService, providedIn: "root" });
    ConfigInitializerService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __param(0, Inject(Config)),
        __param(1, Optional()),
        __param(1, Inject(CONFIG_INITIALIZER_FORROOT_GUARD)),
        __param(2, Inject(RootConfig))
    ], ConfigInitializerService);
    return ConfigInitializerService;
}());
export { ConfigInitializerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsZ0NBQWdDLEdBRWpDLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDaEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUV0RDs7R0FFRztBQUlIO0lBQ0Usa0NBQzRCLE1BQVcsRUFHM0IsZ0JBQWdCLEVBQ0ksVUFBZTtRQUpuQixXQUFNLEdBQU4sTUFBTSxDQUFLO1FBRzNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBQTtRQUNJLGVBQVUsR0FBVixVQUFVLENBQUs7UUFHckMsbUJBQWMsR0FBRyxJQUFJLGVBQWUsQ0FBVyxTQUFTLENBQUMsQ0FBQztJQUZqRSxDQUFDO0lBT0osc0JBQUksOENBQVE7UUFIWjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtnQkFDdEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQ3RFLENBQUM7UUFDSixDQUFDOzs7T0FBQTtJQUVEOzs7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QUMsQ0FBQTtRQUNkLFdBQUEsUUFBUSxFQUFFLENBQUE7UUFDVixXQUFBLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO1FBRXhDLFdBQUEsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFBO09BTlYsd0JBQXdCLENBc0pwQzttQ0F0S0Q7Q0FzS0MsQUF0SkQsSUFzSkM7U0F0Slksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDT05GSUdfSU5JVElBTElaRVJfRk9SUk9PVF9HVUFSRCxcbiAgQ29uZmlnSW5pdGlhbGl6ZXIsXG59IGZyb20gJy4vY29uZmlnLWluaXRpYWxpemVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXBUbywgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgQ29uZmlnLCBSb290Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnLXRva2Vucyc7XG5cbi8qKlxuICogUHJvdmlkZXMgc3VwcG9ydCBmb3IgQ09ORklHX0lOSVRJQUxJWkVSU1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDb25maWcpIHByb3RlY3RlZCBjb25maWc6IGFueSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQ09ORklHX0lOSVRJQUxJWkVSX0ZPUlJPT1RfR1VBUkQpXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpemVyR3VhcmQsXG4gICAgQEluamVjdChSb290Q29uZmlnKSBwcm90ZWN0ZWQgcm9vdENvbmZpZzogYW55XG4gICkge31cblxuICBwcm90ZWN0ZWQgb25nb2luZ1Njb3BlcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZ1tdPih1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgY29uZmlnIGlzIHN0YWJsZSwgaS5lLiBhbGwgQ09ORklHX0lOSVRJQUxJWkVSUyByZXNvbHZlZCBjb3JyZWN0bHlcbiAgICovXG4gIGdldCBpc1N0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgIXRoaXMuaW5pdGlhbGl6ZXJHdWFyZCB8fFxuICAgICAgKHRoaXMub25nb2luZ1Njb3BlcyQudmFsdWUgJiYgdGhpcy5vbmdvaW5nU2NvcGVzJC52YWx1ZS5sZW5ndGggPT09IDApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvbW1lbmRlZCB3YXkgdG8gZ2V0IGNvbmZpZyBmb3IgY29kZSB0aGF0IGNhbiBydW4gYmVmb3JlIGFwcCB3aWxsIGZpbmlzaFxuICAgKiBpbml0aWFsaXphdGlvbiAoQVBQX0lOSVRJQUxJWkVSUywgc2VsZWN0ZWQgc2VydmljZSBjb25zdHJ1Y3RvcnMpXG4gICAqXG4gICAqIFVzZWQgd2l0aG91dCBwYXJhbWV0ZXJzIHdhaXRzIGZvciB0aGUgd2hvbGUgY29uZmlnIHRvIGJlY29tZSBzdGFibGVcbiAgICpcbiAgICogUGFyYW1ldGVycyBhbGxvdyB0byBkZXNjcmliZSB3aGljaCBwYXJ0IG9mIHRoZSBjb25maWcgc2hvdWxkIGJlIHN0YWJsZSB1c2luZ1xuICAgKiBzdHJpbmcgZGVzY3JpYmluZyBjb25maWcgcGFydCwgZS5nLjpcbiAgICogJ3NpdGVDb250ZXh0JywgJ3NpdGVDb250ZXh0Lmxhbmd1YWdlJywgZXRjLlxuICAgKlxuICAgKiBAcGFyYW0gc2NvcGVzIFN0cmluZyBkZXNjcmliaW5nIHBhcnRzIG9mIHRoZSBjb25maWcgd2Ugd2FudCB0byBiZSBzdXJlIGFyZSBzdGFibGVcbiAgICovXG4gIGFzeW5jIGdldFN0YWJsZUNvbmZpZyguLi5zY29wZXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcbiAgICBpZiAodGhpcy5pc1N0YWJsZSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29uZmlnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5vbmdvaW5nU2NvcGVzJFxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihcbiAgICAgICAgICAob25nb2luZ1Njb3BlcykgPT5cbiAgICAgICAgICAgIG9uZ29pbmdTY29wZXMgJiYgdGhpcy5hcmVSZWFkeShzY29wZXMsIG9uZ29pbmdTY29wZXMpXG4gICAgICAgICksXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIG1hcFRvKHRoaXMuY29uZmlnKVxuICAgICAgKVxuICAgICAgLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgcHJvdmlkZWQgc2NvcGVzIGZyb20gY3VycmVudGx5IG9uZ29pbmdTY29wZXNcbiAgICpcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKi9cbiAgcHJvdGVjdGVkIGZpbmlzaFNjb3BlcyhzY29wZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgbmV3U2NvcGVzID0gWy4uLnRoaXMub25nb2luZ1Njb3BlcyQudmFsdWVdO1xuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgICBuZXdTY29wZXMuc3BsaWNlKG5ld1Njb3Blcy5pbmRleE9mKHNjb3BlKSwgMSk7XG4gICAgfVxuICAgIHRoaXMub25nb2luZ1Njb3BlcyQubmV4dChuZXdTY29wZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHByb3ZpZGVkIHNjb3BlcyBhcmUgbm90IHBhcnQgb2Ygb25nb2luZ1Njb3Blc1xuICAgKlxuICAgKiBAcGFyYW0gc2NvcGVzXG4gICAqIEBwYXJhbSBvbmdvaW5nU2NvcGVzXG4gICAqL1xuICBwcm90ZWN0ZWQgYXJlUmVhZHkoc2NvcGVzOiBzdHJpbmdbXSwgb25nb2luZ1Njb3Blczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBpZiAoIXNjb3Blcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAhb25nb2luZ1Njb3Blcy5sZW5ndGg7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IG9uZ29pbmdTY29wZSBvZiBvbmdvaW5nU2NvcGVzKSB7XG4gICAgICAgIGlmICh0aGlzLnNjb3Blc092ZXJsYXAoc2NvcGUsIG9uZ29pbmdTY29wZSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdHdvIHNjb3BlcyBvdmVybGFwLlxuICAgKlxuICAgKiBFeGFtcGxlIG9mIHNjb3BlcyB0aGF0IG92ZXJsYXA6XG4gICAqICd0ZXN0JyBhbmQgJ3Rlc3QnLCAndGVzdC5hJyBhbmQgJ3Rlc3QnLCAndGVzdCcgYW5kICd0ZXN0LmEnXG4gICAqXG4gICAqIEV4YW1wbGUgb2Ygc2NvcGVzIHRoYXQgZG8gbm90IG92ZXJsYXA6XG4gICAqICd0ZXN0JyBhbmQgJ3Rlc3RBJywgJ3Rlc3QuYScgYW5kICd0ZXN0LmInLCAndGVzdC5uZXN0ZWQnIGFuZCAndGVzdC5uZXN0J1xuICAgKlxuICAgKiBAcGFyYW0gYSBTY29wZUFcbiAgICogQHBhcmFtIGIgU2NvcGVCXG4gICAqL1xuICBwcm90ZWN0ZWQgc2NvcGVzT3ZlcmxhcChhOiBzdHJpbmcsIGI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChiLmxlbmd0aCA+IGEubGVuZ3RoKSB7XG4gICAgICBbYSwgYl0gPSBbYiwgYV07XG4gICAgfVxuICAgIHJldHVybiBhLnN0YXJ0c1dpdGgoYikgJiYgKGFbYi5sZW5ndGhdIHx8ICcuJykgPT09ICcuJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICpcbiAgICogTm90IGEgcGFydCBvZiBhIHB1YmxpYyBBUEksIHVzZWQgYnkgQVBQX0lOSVRJQUxJWkVSIHRvIGluaXRpYWxpemUgYWxsIHByb3ZpZGVkIENPTkZJR19JTklUSUFMSVpFUlNcbiAgICpcbiAgICovXG4gIGFzeW5jIGluaXRpYWxpemUoaW5pdGlhbGl6ZXJzPzogQ29uZmlnSW5pdGlhbGl6ZXJbXSkge1xuICAgIGlmICh0aGlzLm9uZ29pbmdTY29wZXMkLnZhbHVlKSB7XG4gICAgICAvLyBndWFyZCBmb3IgZG91YmxlIGluaXRpYWxpemF0aW9uXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb25nb2luZ1Njb3Blczogc3RyaW5nW10gPSBbXTtcblxuICAgIGNvbnN0IGFzeW5jQ29uZmlnczogUHJvbWlzZTx2b2lkPltdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGluaXRpYWxpemVyIG9mIGluaXRpYWxpemVycyB8fCBbXSkge1xuICAgICAgaWYgKCFpbml0aWFsaXplcikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICghaW5pdGlhbGl6ZXIuc2NvcGVzIHx8ICFpbml0aWFsaXplci5zY29wZXMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ09ORklHX0lOSVRJQUxJWkVSIHNob3VsZCBwcm92aWRlIHNjb3BlIScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEZXZNb2RlKCkgJiYgIXRoaXMuYXJlUmVhZHkoaW5pdGlhbGl6ZXIuc2NvcGVzLCBvbmdvaW5nU2NvcGVzKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ01vcmUgdGhhbiBvbmUgQ09ORklHX0lOSVRJQUxJWkVSIGlzIGluaXRpYWxpemluZyB0aGUgc2FtZSBjb25maWcgc2NvcGUuJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBvbmdvaW5nU2NvcGVzLnB1c2goLi4uaW5pdGlhbGl6ZXIuc2NvcGVzKTtcblxuICAgICAgYXN5bmNDb25maWdzLnB1c2goXG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5pdGlhbGl6ZXJDb25maWcgPSBhd2FpdCBpbml0aWFsaXplci5jb25maWdGYWN0b3J5KCk7XG4gICAgICAgICAgLy8gY29udHJpYnV0ZSBjb25maWd1cmF0aW9uIHRvIHJvb3RDb25maWdcbiAgICAgICAgICBkZWVwTWVyZ2UodGhpcy5yb290Q29uZmlnLCBpbml0aWFsaXplckNvbmZpZyk7XG4gICAgICAgICAgLy8gY29udHJpYnV0ZSBjb25maWd1cmF0aW9uIHRvIGdsb2JhbCBjb25maWdcbiAgICAgICAgICBkZWVwTWVyZ2UodGhpcy5jb25maWcsIGluaXRpYWxpemVyQ29uZmlnKTtcbiAgICAgICAgICB0aGlzLmZpbmlzaFNjb3Blcyhpbml0aWFsaXplci5zY29wZXMpO1xuICAgICAgICB9KSgpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLm9uZ29pbmdTY29wZXMkLm5leHQob25nb2luZ1Njb3Blcyk7XG5cbiAgICBpZiAoYXN5bmNDb25maWdzLmxlbmd0aCkge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYXN5bmNDb25maWdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==