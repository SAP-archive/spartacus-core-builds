import { __awaiter, __decorate, __param } from "tslib";
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
let ConfigInitializerService = class ConfigInitializerService {
    constructor(config, initializerGuard) {
        this.config = config;
        this.initializerGuard = initializerGuard;
        this.ongoingScopes$ = new BehaviorSubject(undefined);
    }
    /**
     * Returns true if config is stable, i.e. all CONFIG_INITIALIZERS resolved correctly
     */
    get isStable() {
        return (!this.initializerGuard ||
            (this.ongoingScopes$.value && this.ongoingScopes$.value.length === 0));
    }
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
    getStableConfig(...scopes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.isStable) {
                return this.config;
            }
            return this.ongoingScopes$
                .pipe(filter(ongoingScopes => ongoingScopes && this.areReady(scopes, ongoingScopes)), take(1), mapTo(this.config))
                .toPromise();
        });
    }
    /**
     * Removes provided scopes from currently ongoingScopes
     *
     * @param scopes
     */
    finishScopes(scopes) {
        const newScopes = [...this.ongoingScopes$.value];
        for (const scope of scopes) {
            newScopes.splice(newScopes.indexOf(scope), 1);
        }
        this.ongoingScopes$.next(newScopes);
    }
    /**
     * Return true if provided scopes are not part of ongoingScopes
     *
     * @param scopes
     * @param ongoingScopes
     */
    areReady(scopes, ongoingScopes) {
        if (!scopes.length) {
            return !ongoingScopes.length;
        }
        for (const scope of scopes) {
            for (const ongoingScope of ongoingScopes) {
                if (this.scopesOverlap(scope, ongoingScope)) {
                    return false;
                }
            }
        }
        return true;
    }
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
    scopesOverlap(a, b) {
        if (b.length > a.length) {
            [a, b] = [b, a];
        }
        return a.startsWith(b) && (a[b.length] || '.') === '.';
    }
    /**
     * @internal
     *
     * Not a part of a public API, used by APP_INITIALIZER to initialize all provided CONFIG_INITIALIZERS
     *
     */
    initialize(initializers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.ongoingScopes$.value) {
                // guard for double initialization
                return;
            }
            const ongoingScopes = [];
            const asyncConfigs = [];
            for (const initializer of initializers || []) {
                if (!initializer) {
                    continue;
                }
                if (!initializer.scopes || !initializer.scopes.length) {
                    throw new Error('CONFIG_INITIALIZER should provide scope!');
                }
                if (isDevMode() && !this.areReady(initializer.scopes, ongoingScopes)) {
                    console.warn('More than one CONFIG_INITIALIZER is initializing the same config scope.');
                }
                ongoingScopes.push(...initializer.scopes);
                asyncConfigs.push((() => __awaiter(this, void 0, void 0, function* () {
                    deepMerge(this.config, yield initializer.configFactory());
                    this.finishScopes(initializer.scopes);
                }))());
            }
            this.ongoingScopes$.next(ongoingScopes);
            if (asyncConfigs.length) {
                yield Promise.all(asyncConfigs);
            }
        });
    }
};
ConfigInitializerService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CONFIG_INITIALIZER_FORROOT_GUARD,] }] }
];
ConfigInitializerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigInitializerService_Factory() { return new ConfigInitializerService(i0.ɵɵinject(i1.Config), i0.ɵɵinject(i2.CONFIG_INITIALIZER_FORROOT_GUARD, 8)); }, token: ConfigInitializerService, providedIn: "root" });
ConfigInitializerService = __decorate([
    Injectable({
        providedIn: 'root',
    }),
    __param(0, Inject(Config)),
    __param(1, Optional()),
    __param(1, Inject(CONFIG_INITIALIZER_FORROOT_GUARD))
], ConfigInitializerService);
export { ConfigInitializerService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsZ0NBQWdDLEdBRWpDLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7O0FBRWhEOztHQUVHO0FBSUgsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFDbkMsWUFDNEIsTUFBVyxFQUczQixnQkFBZ0I7UUFIQSxXQUFNLEdBQU4sTUFBTSxDQUFLO1FBRzNCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBQTtRQUdsQixtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFXLFNBQVMsQ0FBQyxDQUFDO0lBRmpFLENBQUM7SUFJSjs7T0FFRztJQUNILElBQUksUUFBUTtRQUNWLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFDdEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQ3RFLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDRyxlQUFlLENBQUMsR0FB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Q0FDZixDQUFDLEdBQVMsRUFBRTtvQkFDVixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO29CQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUNMLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXhDLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQztLQUFBO0NBQ0YsQ0FBQTs7NENBOUlJLE1BQU0sU0FBQyxNQUFNOzRDQUNiLFFBQVEsWUFDUixNQUFNLFNBQUMsZ0NBQWdDOzs7QUFKL0Isd0JBQXdCO0lBSHBDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7SUFHRyxXQUFBLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNkLFdBQUEsUUFBUSxFQUFFLENBQUE7SUFDVixXQUFBLE1BQU0sQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFBO0dBSmhDLHdCQUF3QixDQWdKcEM7U0FoSlksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDT05GSUdfSU5JVElBTElaRVJfRk9SUk9PVF9HVUFSRCxcbiAgQ29uZmlnSW5pdGlhbGl6ZXIsXG59IGZyb20gJy4vY29uZmlnLWluaXRpYWxpemVyJztcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcFRvLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi4vdXRpbHMvZGVlcC1tZXJnZSc7XG5cbi8qKlxuICogUHJvdmlkZXMgc3VwcG9ydCBmb3IgQ09ORklHX0lOSVRJQUxJWkVSU1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDb25maWcpIHByb3RlY3RlZCBjb25maWc6IGFueSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQ09ORklHX0lOSVRJQUxJWkVSX0ZPUlJPT1RfR1VBUkQpXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpemVyR3VhcmRcbiAgKSB7fVxuXG4gIHByb3RlY3RlZCBvbmdvaW5nU2NvcGVzJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nW10+KHVuZGVmaW5lZCk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBjb25maWcgaXMgc3RhYmxlLCBpLmUuIGFsbCBDT05GSUdfSU5JVElBTElaRVJTIHJlc29sdmVkIGNvcnJlY3RseVxuICAgKi9cbiAgZ2V0IGlzU3RhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICAhdGhpcy5pbml0aWFsaXplckd1YXJkIHx8XG4gICAgICAodGhpcy5vbmdvaW5nU2NvcGVzJC52YWx1ZSAmJiB0aGlzLm9uZ29pbmdTY29wZXMkLnZhbHVlLmxlbmd0aCA9PT0gMClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlY29tbWVuZGVkIHdheSB0byBnZXQgY29uZmlnIGZvciBjb2RlIHRoYXQgY2FuIHJ1biBiZWZvcmUgYXBwIHdpbGwgZmluaXNoXG4gICAqIGluaXRpYWxpemF0aW9uIChBUFBfSU5JVElBTElaRVJTLCBzZWxlY3RlZCBzZXJ2aWNlIGNvbnN0cnVjdG9ycylcbiAgICpcbiAgICogVXNlZCB3aXRob3V0IHBhcmFtZXRlcnMgd2FpdHMgZm9yIHRoZSB3aG9sZSBjb25maWcgdG8gYmVjb21lIHN0YWJsZVxuICAgKlxuICAgKiBQYXJhbWV0ZXJzIGFsbG93IHRvIGRlc2NyaWJlIHdoaWNoIHBhcnQgb2YgdGhlIGNvbmZpZyBzaG91bGQgYmUgc3RhYmxlIHVzaW5nXG4gICAqIHN0cmluZyBkZXNjcmliaW5nIGNvbmZpZyBwYXJ0LCBlLmcuOlxuICAgKiAnc2l0ZUNvbnRleHQnLCAnc2l0ZUNvbnRleHQubGFuZ3VhZ2UnLCBldGMuXG4gICAqXG4gICAqIEBwYXJhbSBzY29wZXMgU3RyaW5nIGRlc2NyaWJpbmcgcGFydHMgb2YgdGhlIGNvbmZpZyB3ZSB3YW50IHRvIGJlIHN1cmUgYXJlIHN0YWJsZVxuICAgKi9cbiAgYXN5bmMgZ2V0U3RhYmxlQ29uZmlnKC4uLnNjb3Blczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIGlmICh0aGlzLmlzU3RhYmxlKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb25maWc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm9uZ29pbmdTY29wZXMkXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKFxuICAgICAgICAgIG9uZ29pbmdTY29wZXMgPT4gb25nb2luZ1Njb3BlcyAmJiB0aGlzLmFyZVJlYWR5KHNjb3Blcywgb25nb2luZ1Njb3BlcylcbiAgICAgICAgKSxcbiAgICAgICAgdGFrZSgxKSxcbiAgICAgICAgbWFwVG8odGhpcy5jb25maWcpXG4gICAgICApXG4gICAgICAudG9Qcm9taXNlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBwcm92aWRlZCBzY29wZXMgZnJvbSBjdXJyZW50bHkgb25nb2luZ1Njb3Blc1xuICAgKlxuICAgKiBAcGFyYW0gc2NvcGVzXG4gICAqL1xuICBwcm90ZWN0ZWQgZmluaXNoU2NvcGVzKHNjb3Blczogc3RyaW5nW10pIHtcbiAgICBjb25zdCBuZXdTY29wZXMgPSBbLi4udGhpcy5vbmdvaW5nU2NvcGVzJC52YWx1ZV07XG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcbiAgICAgIG5ld1Njb3Blcy5zcGxpY2UobmV3U2NvcGVzLmluZGV4T2Yoc2NvcGUpLCAxKTtcbiAgICB9XG4gICAgdGhpcy5vbmdvaW5nU2NvcGVzJC5uZXh0KG5ld1Njb3Blcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRydWUgaWYgcHJvdmlkZWQgc2NvcGVzIGFyZSBub3QgcGFydCBvZiBvbmdvaW5nU2NvcGVzXG4gICAqXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICogQHBhcmFtIG9uZ29pbmdTY29wZXNcbiAgICovXG4gIHByb3RlY3RlZCBhcmVSZWFkeShzY29wZXM6IHN0cmluZ1tdLCBvbmdvaW5nU2NvcGVzOiBzdHJpbmdbXSk6IGJvb2xlYW4ge1xuICAgIGlmICghc2NvcGVzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuICFvbmdvaW5nU2NvcGVzLmxlbmd0aDtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzY29wZSBvZiBzY29wZXMpIHtcbiAgICAgIGZvciAoY29uc3Qgb25nb2luZ1Njb3BlIG9mIG9uZ29pbmdTY29wZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2NvcGVzT3ZlcmxhcChzY29wZSwgb25nb2luZ1Njb3BlKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gc2NvcGVzIG92ZXJsYXAuXG4gICAqXG4gICAqIEV4YW1wbGUgb2Ygc2NvcGVzIHRoYXQgb3ZlcmxhcDpcbiAgICogJ3Rlc3QnIGFuZCAndGVzdCcsICd0ZXN0LmEnIGFuZCAndGVzdCcsICd0ZXN0JyBhbmQgJ3Rlc3QuYSdcbiAgICpcbiAgICogRXhhbXBsZSBvZiBzY29wZXMgdGhhdCBkbyBub3Qgb3ZlcmxhcDpcbiAgICogJ3Rlc3QnIGFuZCAndGVzdEEnLCAndGVzdC5hJyBhbmQgJ3Rlc3QuYicsICd0ZXN0Lm5lc3RlZCcgYW5kICd0ZXN0Lm5lc3QnXG4gICAqXG4gICAqIEBwYXJhbSBhIFNjb3BlQVxuICAgKiBAcGFyYW0gYiBTY29wZUJcbiAgICovXG4gIHByb3RlY3RlZCBzY29wZXNPdmVybGFwKGE6IHN0cmluZywgYjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKGIubGVuZ3RoID4gYS5sZW5ndGgpIHtcbiAgICAgIFthLCBiXSA9IFtiLCBhXTtcbiAgICB9XG4gICAgcmV0dXJuIGEuc3RhcnRzV2l0aChiKSAmJiAoYVtiLmxlbmd0aF0gfHwgJy4nKSA9PT0gJy4nO1xuICB9XG5cbiAgLyoqXG4gICAqIEBpbnRlcm5hbFxuICAgKlxuICAgKiBOb3QgYSBwYXJ0IG9mIGEgcHVibGljIEFQSSwgdXNlZCBieSBBUFBfSU5JVElBTElaRVIgdG8gaW5pdGlhbGl6ZSBhbGwgcHJvdmlkZWQgQ09ORklHX0lOSVRJQUxJWkVSU1xuICAgKlxuICAgKi9cbiAgYXN5bmMgaW5pdGlhbGl6ZShpbml0aWFsaXplcnM/OiBDb25maWdJbml0aWFsaXplcltdKSB7XG4gICAgaWYgKHRoaXMub25nb2luZ1Njb3BlcyQudmFsdWUpIHtcbiAgICAgIC8vIGd1YXJkIGZvciBkb3VibGUgaW5pdGlhbGl6YXRpb25cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBvbmdvaW5nU2NvcGVzOiBzdHJpbmdbXSA9IFtdO1xuXG4gICAgY29uc3QgYXN5bmNDb25maWdzOiBQcm9taXNlPHZvaWQ+W10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgaW5pdGlhbGl6ZXIgb2YgaW5pdGlhbGl6ZXJzIHx8IFtdKSB7XG4gICAgICBpZiAoIWluaXRpYWxpemVyKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKCFpbml0aWFsaXplci5zY29wZXMgfHwgIWluaXRpYWxpemVyLnNjb3Blcy5sZW5ndGgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDT05GSUdfSU5JVElBTElaRVIgc2hvdWxkIHByb3ZpZGUgc2NvcGUhJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rldk1vZGUoKSAmJiAhdGhpcy5hcmVSZWFkeShpbml0aWFsaXplci5zY29wZXMsIG9uZ29pbmdTY29wZXMpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTW9yZSB0aGFuIG9uZSBDT05GSUdfSU5JVElBTElaRVIgaXMgaW5pdGlhbGl6aW5nIHRoZSBzYW1lIGNvbmZpZyBzY29wZS4nXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIG9uZ29pbmdTY29wZXMucHVzaCguLi5pbml0aWFsaXplci5zY29wZXMpO1xuXG4gICAgICBhc3luY0NvbmZpZ3MucHVzaChcbiAgICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBkZWVwTWVyZ2UodGhpcy5jb25maWcsIGF3YWl0IGluaXRpYWxpemVyLmNvbmZpZ0ZhY3RvcnkoKSk7XG4gICAgICAgICAgdGhpcy5maW5pc2hTY29wZXMoaW5pdGlhbGl6ZXIuc2NvcGVzKTtcbiAgICAgICAgfSkoKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5vbmdvaW5nU2NvcGVzJC5uZXh0KG9uZ29pbmdTY29wZXMpO1xuXG4gICAgaWYgKGFzeW5jQ29uZmlncy5sZW5ndGgpIHtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKGFzeW5jQ29uZmlncyk7XG4gICAgfVxuICB9XG59XG4iXX0=