/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Inject, Injectable, isDevMode, Optional } from '@angular/core';
import { CONFIG_INITIALIZER_FORROOT_GUARD, } from './config-initializer';
import { Config } from '../config.module';
import { BehaviorSubject } from 'rxjs';
import { filter, mapTo, take } from 'rxjs/operators';
import { deepMerge } from '../utils/deep-merge';
import * as i0 from "@angular/core";
import * as i1 from "../config.module";
import * as i2 from "./config-initializer";
/**
 * Provides support for CONFIG_INITIALIZERS
 */
var ConfigInitializerService = /** @class */ (function () {
    function ConfigInitializerService(config, initializerGuard) {
        this.config = config;
        this.initializerGuard = initializerGuard;
        this.ongoingScopes$ = new BehaviorSubject(undefined);
    }
    Object.defineProperty(ConfigInitializerService.prototype, "isStable", {
        /**
         * Returns true if config is stable, i.e. all CONFIG_INITIALIZERS resolved correctly
         */
        get: /**
         * Returns true if config is stable, i.e. all CONFIG_INITIALIZERS resolved correctly
         * @return {?}
         */
        function () {
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
     * @param {...?} scopes String describing parts of the config we want to be sure are stable
     * @return {?}
     */
    ConfigInitializerService.prototype.getStableConfig = /**
     * Recommended way to get config for code that can run before app will finish
     * initialization (APP_INITIALIZERS, selected service constructors)
     *
     * Used without parameters waits for the whole config to become stable
     *
     * Parameters allow to describe which part of the config should be stable using
     * string describing config part, e.g.:
     * 'siteContext', 'siteContext.language', etc.
     *
     * @param {...?} scopes String describing parts of the config we want to be sure are stable
     * @return {?}
     */
    function () {
        var scopes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            scopes[_i] = arguments[_i];
        }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                if (this.isStable) {
                    return [2 /*return*/, this.config];
                }
                return [2 /*return*/, this.ongoingScopes$
                        .pipe(filter((/**
                     * @param {?} ongoingScopes
                     * @return {?}
                     */
                    function (ongoingScopes) { return ongoingScopes && _this.areReady(scopes, ongoingScopes); })), take(1), mapTo(this.config))
                        .toPromise()];
            });
        });
    };
    /**
     * Removes provided scopes from currently ongoingScopes
     *
     * @param scopes
     */
    /**
     * Removes provided scopes from currently ongoingScopes
     *
     * @protected
     * @param {?} scopes
     * @return {?}
     */
    ConfigInitializerService.prototype.finishScopes = /**
     * Removes provided scopes from currently ongoingScopes
     *
     * @protected
     * @param {?} scopes
     * @return {?}
     */
    function (scopes) {
        var e_1, _a;
        /** @type {?} */
        var newScopes = tslib_1.__spread(this.ongoingScopes$.value);
        try {
            for (var scopes_1 = tslib_1.__values(scopes), scopes_1_1 = scopes_1.next(); !scopes_1_1.done; scopes_1_1 = scopes_1.next()) {
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
    /**
     * Return true if provided scopes are not part of ongoingScopes
     *
     * @protected
     * @param {?} scopes
     * @param {?} ongoingScopes
     * @return {?}
     */
    ConfigInitializerService.prototype.areReady = /**
     * Return true if provided scopes are not part of ongoingScopes
     *
     * @protected
     * @param {?} scopes
     * @param {?} ongoingScopes
     * @return {?}
     */
    function (scopes, ongoingScopes) {
        var e_2, _a, e_3, _b;
        if (!scopes.length) {
            return !ongoingScopes.length;
        }
        try {
            for (var scopes_2 = tslib_1.__values(scopes), scopes_2_1 = scopes_2.next(); !scopes_2_1.done; scopes_2_1 = scopes_2.next()) {
                var scope = scopes_2_1.value;
                try {
                    for (var ongoingScopes_1 = (e_3 = void 0, tslib_1.__values(ongoingScopes)), ongoingScopes_1_1 = ongoingScopes_1.next(); !ongoingScopes_1_1.done; ongoingScopes_1_1 = ongoingScopes_1.next()) {
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
    /**
     * Check if two scopes overlap.
     *
     * Example of scopes that overlap:
     * 'test' and 'test', 'test.a' and 'test', 'test' and 'test.a'
     *
     * Example of scopes that do not overlap:
     * 'test' and 'testA', 'test.a' and 'test.b', 'test.nested' and 'test.nest'
     *
     * @protected
     * @param {?} a ScopeA
     * @param {?} b ScopeB
     * @return {?}
     */
    ConfigInitializerService.prototype.scopesOverlap = /**
     * Check if two scopes overlap.
     *
     * Example of scopes that overlap:
     * 'test' and 'test', 'test.a' and 'test', 'test' and 'test.a'
     *
     * Example of scopes that do not overlap:
     * 'test' and 'testA', 'test.a' and 'test.b', 'test.nested' and 'test.nest'
     *
     * @protected
     * @param {?} a ScopeA
     * @param {?} b ScopeB
     * @return {?}
     */
    function (a, b) {
        var _a;
        if (b.length > a.length) {
            _a = tslib_1.__read([b, a], 2), a = _a[0], b = _a[1];
        }
        return a.startsWith(b) && (a[b.length] || '.') === '.';
    };
    /**
     * @internal
     *
     * Not a part of a public API, used by APP_INITIALIZER to initialize all provided CONFIG_INITIALIZERS
     *
     */
    /**
     * \@internal
     *
     * Not a part of a public API, used by APP_INITIALIZER to initialize all provided CONFIG_INITIALIZERS
     *
     * @param {?=} initializers
     * @return {?}
     */
    ConfigInitializerService.prototype.initialize = /**
     * \@internal
     *
     * Not a part of a public API, used by APP_INITIALIZER to initialize all provided CONFIG_INITIALIZERS
     *
     * @param {?=} initializers
     * @return {?}
     */
    function (initializers) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var ongoingScopes, asyncConfigs, _loop_1, this_1, _a, _b, initializer;
            var e_4, _c;
            var _this = this;
            return tslib_1.__generator(this, function (_d) {
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
                            ongoingScopes.push.apply(ongoingScopes, tslib_1.__spread(initializer.scopes));
                            asyncConfigs.push(((/**
                             * @return {?}
                             */
                            function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var _a, _b;
                                return tslib_1.__generator(this, function (_c) {
                                    switch (_c.label) {
                                        case 0:
                                            _a = deepMerge;
                                            _b = [this.config];
                                            return [4 /*yield*/, initializer.configFactory()];
                                        case 1:
                                            _a.apply(void 0, _b.concat([_c.sent()]));
                                            this.finishScopes(initializer.scopes);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))());
                        };
                        this_1 = this;
                        try {
                            for (_a = tslib_1.__values(initializers || []), _b = _a.next(); !_b.done; _b = _a.next()) {
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
    ConfigInitializerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    ConfigInitializerService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CONFIG_INITIALIZER_FORROOT_GUARD,] }] }
    ]; };
    /** @nocollapse */ ConfigInitializerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigInitializerService_Factory() { return new ConfigInitializerService(i0.ɵɵinject(i1.Config), i0.ɵɵinject(i2.CONFIG_INITIALIZER_FORROOT_GUARD, 8)); }, token: ConfigInitializerService, providedIn: "root" });
    return ConfigInitializerService;
}());
export { ConfigInitializerService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ConfigInitializerService.prototype.ongoingScopes$;
    /**
     * @type {?}
     * @protected
     */
    ConfigInitializerService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    ConfigInitializerService.prototype.initializerGuard;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUNMLGdDQUFnQyxHQUVqQyxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQUtoRDtJQUlFLGtDQUM0QixNQUFXLEVBRzNCLGdCQUFnQjtRQUhBLFdBQU0sR0FBTixNQUFNLENBQUs7UUFHM0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFBO1FBR2xCLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQVcsU0FBUyxDQUFDLENBQUM7SUFGakUsQ0FBQztJQU9KLHNCQUFJLDhDQUFRO1FBSFo7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO2dCQUN0QixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FDdEUsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7Ozs7Ozs7Ozs7Ozs7O0lBQ0csa0RBQWU7Ozs7Ozs7Ozs7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WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIGlzRGV2TW9kZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJELFxuICBDb25maWdJbml0aWFsaXplcixcbn0gZnJvbSAnLi9jb25maWctaW5pdGlhbGl6ZXInO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwVG8sIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi91dGlscy9kZWVwLW1lcmdlJztcblxuLyoqXG4gKiBQcm92aWRlcyBzdXBwb3J0IGZvciBDT05GSUdfSU5JVElBTElaRVJTXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWdJbml0aWFsaXplclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENvbmZpZykgcHJvdGVjdGVkIGNvbmZpZzogYW55LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChDT05GSUdfSU5JVElBTElaRVJfRk9SUk9PVF9HVUFSRClcbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGl6ZXJHdWFyZFxuICApIHt9XG5cbiAgcHJvdGVjdGVkIG9uZ29pbmdTY29wZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4odW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGNvbmZpZyBpcyBzdGFibGUsIGkuZS4gYWxsIENPTkZJR19JTklUSUFMSVpFUlMgcmVzb2x2ZWQgY29ycmVjdGx5XG4gICAqL1xuICBnZXQgaXNTdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICF0aGlzLmluaXRpYWxpemVyR3VhcmQgfHxcbiAgICAgICh0aGlzLm9uZ29pbmdTY29wZXMkLnZhbHVlICYmIHRoaXMub25nb2luZ1Njb3BlcyQudmFsdWUubGVuZ3RoID09PSAwKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVjb21tZW5kZWQgd2F5IHRvIGdldCBjb25maWcgZm9yIGNvZGUgdGhhdCBjYW4gcnVuIGJlZm9yZSBhcHAgd2lsbCBmaW5pc2hcbiAgICogaW5pdGlhbGl6YXRpb24gKEFQUF9JTklUSUFMSVpFUlMsIHNlbGVjdGVkIHNlcnZpY2UgY29uc3RydWN0b3JzKVxuICAgKlxuICAgKiBVc2VkIHdpdGhvdXQgcGFyYW1ldGVycyB3YWl0cyBmb3IgdGhlIHdob2xlIGNvbmZpZyB0byBiZWNvbWUgc3RhYmxlXG4gICAqXG4gICAqIFBhcmFtZXRlcnMgYWxsb3cgdG8gZGVzY3JpYmUgd2hpY2ggcGFydCBvZiB0aGUgY29uZmlnIHNob3VsZCBiZSBzdGFibGUgdXNpbmdcbiAgICogc3RyaW5nIGRlc2NyaWJpbmcgY29uZmlnIHBhcnQsIGUuZy46XG4gICAqICdzaXRlQ29udGV4dCcsICdzaXRlQ29udGV4dC5sYW5ndWFnZScsIGV0Yy5cbiAgICpcbiAgICogQHBhcmFtIHNjb3BlcyBTdHJpbmcgZGVzY3JpYmluZyBwYXJ0cyBvZiB0aGUgY29uZmlnIHdlIHdhbnQgdG8gYmUgc3VyZSBhcmUgc3RhYmxlXG4gICAqL1xuICBhc3luYyBnZXRTdGFibGVDb25maWcoLi4uc2NvcGVzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHRoaXMuaXNTdGFibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub25nb2luZ1Njb3BlcyRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgb25nb2luZ1Njb3BlcyA9PiBvbmdvaW5nU2NvcGVzICYmIHRoaXMuYXJlUmVhZHkoc2NvcGVzLCBvbmdvaW5nU2NvcGVzKVxuICAgICAgICApLFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXBUbyh0aGlzLmNvbmZpZylcbiAgICAgIClcbiAgICAgIC50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHByb3ZpZGVkIHNjb3BlcyBmcm9tIGN1cnJlbnRseSBvbmdvaW5nU2NvcGVzXG4gICAqXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIHByb3RlY3RlZCBmaW5pc2hTY29wZXMoc2NvcGVzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IG5ld1Njb3BlcyA9IFsuLi50aGlzLm9uZ29pbmdTY29wZXMkLnZhbHVlXTtcbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgbmV3U2NvcGVzLnNwbGljZShuZXdTY29wZXMuaW5kZXhPZihzY29wZSksIDEpO1xuICAgIH1cbiAgICB0aGlzLm9uZ29pbmdTY29wZXMkLm5leHQobmV3U2NvcGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiBwcm92aWRlZCBzY29wZXMgYXJlIG5vdCBwYXJ0IG9mIG9uZ29pbmdTY29wZXNcbiAgICpcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKiBAcGFyYW0gb25nb2luZ1Njb3Blc1xuICAgKi9cbiAgcHJvdGVjdGVkIGFyZVJlYWR5KHNjb3Blczogc3RyaW5nW10sIG9uZ29pbmdTY29wZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgaWYgKCFzY29wZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gIW9uZ29pbmdTY29wZXMubGVuZ3RoO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgZm9yIChjb25zdCBvbmdvaW5nU2NvcGUgb2Ygb25nb2luZ1Njb3Blcykge1xuICAgICAgICBpZiAodGhpcy5zY29wZXNPdmVybGFwKHNjb3BlLCBvbmdvaW5nU2NvcGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHR3byBzY29wZXMgb3ZlcmxhcC5cbiAgICpcbiAgICogRXhhbXBsZSBvZiBzY29wZXMgdGhhdCBvdmVybGFwOlxuICAgKiAndGVzdCcgYW5kICd0ZXN0JywgJ3Rlc3QuYScgYW5kICd0ZXN0JywgJ3Rlc3QnIGFuZCAndGVzdC5hJ1xuICAgKlxuICAgKiBFeGFtcGxlIG9mIHNjb3BlcyB0aGF0IGRvIG5vdCBvdmVybGFwOlxuICAgKiAndGVzdCcgYW5kICd0ZXN0QScsICd0ZXN0LmEnIGFuZCAndGVzdC5iJywgJ3Rlc3QubmVzdGVkJyBhbmQgJ3Rlc3QubmVzdCdcbiAgICpcbiAgICogQHBhcmFtIGEgU2NvcGVBXG4gICAqIEBwYXJhbSBiIFNjb3BlQlxuICAgKi9cbiAgcHJvdGVjdGVkIHNjb3Blc092ZXJsYXAoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoYi5sZW5ndGggPiBhLmxlbmd0aCkge1xuICAgICAgW2EsIGJdID0gW2IsIGFdO1xuICAgIH1cbiAgICByZXR1cm4gYS5zdGFydHNXaXRoKGIpICYmIChhW2IubGVuZ3RoXSB8fCAnLicpID09PSAnLic7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqXG4gICAqIE5vdCBhIHBhcnQgb2YgYSBwdWJsaWMgQVBJLCB1c2VkIGJ5IEFQUF9JTklUSUFMSVpFUiB0byBpbml0aWFsaXplIGFsbCBwcm92aWRlZCBDT05GSUdfSU5JVElBTElaRVJTXG4gICAqXG4gICAqL1xuICBhc3luYyBpbml0aWFsaXplKGluaXRpYWxpemVycz86IENvbmZpZ0luaXRpYWxpemVyW10pIHtcbiAgICBpZiAodGhpcy5vbmdvaW5nU2NvcGVzJC52YWx1ZSkge1xuICAgICAgLy8gZ3VhcmQgZm9yIGRvdWJsZSBpbml0aWFsaXphdGlvblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9uZ29pbmdTY29wZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBhc3luY0NvbmZpZ3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpbml0aWFsaXplciBvZiBpbml0aWFsaXplcnMgfHwgW10pIHtcbiAgICAgIGlmICghaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoIWluaXRpYWxpemVyLnNjb3BlcyB8fCAhaW5pdGlhbGl6ZXIuc2NvcGVzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NPTkZJR19JTklUSUFMSVpFUiBzaG91bGQgcHJvdmlkZSBzY29wZSEnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGV2TW9kZSgpICYmICF0aGlzLmFyZVJlYWR5KGluaXRpYWxpemVyLnNjb3Blcywgb25nb2luZ1Njb3BlcykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdNb3JlIHRoYW4gb25lIENPTkZJR19JTklUSUFMSVpFUiBpcyBpbml0aWFsaXppbmcgdGhlIHNhbWUgY29uZmlnIHNjb3BlLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgb25nb2luZ1Njb3Blcy5wdXNoKC4uLmluaXRpYWxpemVyLnNjb3Blcyk7XG5cbiAgICAgIGFzeW5jQ29uZmlncy5wdXNoKFxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGRlZXBNZXJnZSh0aGlzLmNvbmZpZywgYXdhaXQgaW5pdGlhbGl6ZXIuY29uZmlnRmFjdG9yeSgpKTtcbiAgICAgICAgICB0aGlzLmZpbmlzaFNjb3Blcyhpbml0aWFsaXplci5zY29wZXMpO1xuICAgICAgICB9KSgpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLm9uZ29pbmdTY29wZXMkLm5leHQob25nb2luZ1Njb3Blcyk7XG5cbiAgICBpZiAoYXN5bmNDb25maWdzLmxlbmd0aCkge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYXN5bmNDb25maWdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==