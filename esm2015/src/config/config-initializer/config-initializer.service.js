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
export class ConfigInitializerService {
    /**
     * @param {?} config
     * @param {?} initializerGuard
     */
    constructor(config, initializerGuard) {
        this.config = config;
        this.initializerGuard = initializerGuard;
        this.ongoingScopes$ = new BehaviorSubject(undefined);
    }
    /**
     * Returns true if config is stable, i.e. all CONFIG_INITIALIZERS resolved correctly
     * @return {?}
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
     * @param {...?} scopes String describing parts of the config we want to be sure are stable
     * @return {?}
     */
    getStableConfig(...scopes) {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!ConfigInitializerService} */ function* () {
            if (this.isStable) {
                return this.config;
            }
            return this.ongoingScopes$
                .pipe(filter((/**
             * @param {?} ongoingScopes
             * @return {?}
             */
            ongoingScopes => ongoingScopes && this.areReady(scopes, ongoingScopes))), take(1), mapTo(this.config))
                .toPromise();
        });
    }
    /**
     * Removes provided scopes from currently ongoingScopes
     *
     * @protected
     * @param {?} scopes
     * @return {?}
     */
    finishScopes(scopes) {
        /** @type {?} */
        const newScopes = [...this.ongoingScopes$.value];
        for (const scope of scopes) {
            newScopes.splice(newScopes.indexOf(scope), 1);
        }
        this.ongoingScopes$.next(newScopes);
    }
    /**
     * Return true if provided scopes are not part of ongoingScopes
     *
     * @protected
     * @param {?} scopes
     * @param {?} ongoingScopes
     * @return {?}
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
     * @protected
     * @param {?} a ScopeA
     * @param {?} b ScopeB
     * @return {?}
     */
    scopesOverlap(a, b) {
        if (b.length > a.length) {
            [a, b] = [b, a];
        }
        return a.startsWith(b) && (a[b.length] || '.') === '.';
    }
    /**
     * \@internal
     *
     * Not a part of a public API, used by APP_INITIALIZER to initialize all provided CONFIG_INITIALIZERS
     *
     * @param {?=} initializers
     * @return {?}
     */
    initialize(initializers) {
        return tslib_1.__awaiter(this, void 0, void 0, /** @this {!ConfigInitializerService} */ function* () {
            if (this.ongoingScopes$.value) {
                // guard for double initialization
                return;
            }
            /** @type {?} */
            const ongoingScopes = [];
            /** @type {?} */
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
                asyncConfigs.push(((/**
                 * @return {?}
                 */
                () => tslib_1.__awaiter(this, void 0, void 0, /** @this {!ConfigInitializerService} */ function* () {
                    deepMerge(this.config, yield initializer.configFactory());
                    this.finishScopes(initializer.scopes);
                })))());
            }
            this.ongoingScopes$.next(ongoingScopes);
            if (asyncConfigs.length) {
                yield Promise.all(asyncConfigs);
            }
        });
    }
}
ConfigInitializerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
ConfigInitializerService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CONFIG_INITIALIZER_FORROOT_GUARD,] }] }
];
/** @nocollapse */ ConfigInitializerService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ConfigInitializerService_Factory() { return new ConfigInitializerService(i0.ɵɵinject(i1.Config), i0.ɵɵinject(i2.CONFIG_INITIALIZER_FORROOT_GUARD, 8)); }, token: ConfigInitializerService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEUsT0FBTyxFQUNMLGdDQUFnQyxHQUVqQyxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQVFoRCxNQUFNLE9BQU8sd0JBQXdCOzs7OztJQUNuQyxZQUM0QixNQUFXLEVBRzNCLGdCQUFnQjtRQUhBLFdBQU0sR0FBTixNQUFNLENBQUs7UUFHM0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFBO1FBR2xCLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQVcsU0FBUyxDQUFDLENBQUM7SUFGakUsQ0FBQzs7Ozs7SUFPSixJQUFJLFFBQVE7UUFDVixPQUFPLENBQ0wsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCO1lBQ3RCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUN0RSxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUFjSyxlQUFlLENBQUMsR0FBRyxNQUFnQjs7WUFDdkMsSUFBSSxJQUFJLENB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LGFBQWEsRUFBRSxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUEsRUFBQyxFQUFFLENBQ0wsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFeEMsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUN2QixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDO0tBQUE7OztZQWxKRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7NENBR0ksTUFBTSxTQUFDLE1BQU07NENBQ2IsUUFBUSxZQUNSLE1BQU0sU0FBQyxnQ0FBZ0M7Ozs7Ozs7O0lBSTFDLGtEQUFvRTs7Ozs7SUFObEUsMENBQXFDOzs7OztJQUNyQyxvREFFMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIGlzRGV2TW9kZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJELFxuICBDb25maWdJbml0aWFsaXplcixcbn0gZnJvbSAnLi9jb25maWctaW5pdGlhbGl6ZXInO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwVG8sIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi91dGlscy9kZWVwLW1lcmdlJztcblxuLyoqXG4gKiBQcm92aWRlcyBzdXBwb3J0IGZvciBDT05GSUdfSU5JVElBTElaRVJTXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWdJbml0aWFsaXplclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KENvbmZpZykgcHJvdGVjdGVkIGNvbmZpZzogYW55LFxuICAgIEBPcHRpb25hbCgpXG4gICAgQEluamVjdChDT05GSUdfSU5JVElBTElaRVJfRk9SUk9PVF9HVUFSRClcbiAgICBwcm90ZWN0ZWQgaW5pdGlhbGl6ZXJHdWFyZFxuICApIHt9XG5cbiAgcHJvdGVjdGVkIG9uZ29pbmdTY29wZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4odW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGNvbmZpZyBpcyBzdGFibGUsIGkuZS4gYWxsIENPTkZJR19JTklUSUFMSVpFUlMgcmVzb2x2ZWQgY29ycmVjdGx5XG4gICAqL1xuICBnZXQgaXNTdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICF0aGlzLmluaXRpYWxpemVyR3VhcmQgfHxcbiAgICAgICh0aGlzLm9uZ29pbmdTY29wZXMkLnZhbHVlICYmIHRoaXMub25nb2luZ1Njb3BlcyQudmFsdWUubGVuZ3RoID09PSAwKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVjb21tZW5kZWQgd2F5IHRvIGdldCBjb25maWcgZm9yIGNvZGUgdGhhdCBjYW4gcnVuIGJlZm9yZSBhcHAgd2lsbCBmaW5pc2hcbiAgICogaW5pdGlhbGl6YXRpb24gKEFQUF9JTklUSUFMSVpFUlMsIHNlbGVjdGVkIHNlcnZpY2UgY29uc3RydWN0b3JzKVxuICAgKlxuICAgKiBVc2VkIHdpdGhvdXQgcGFyYW1ldGVycyB3YWl0cyBmb3IgdGhlIHdob2xlIGNvbmZpZyB0byBiZWNvbWUgc3RhYmxlXG4gICAqXG4gICAqIFBhcmFtZXRlcnMgYWxsb3cgdG8gZGVzY3JpYmUgd2hpY2ggcGFydCBvZiB0aGUgY29uZmlnIHNob3VsZCBiZSBzdGFibGUgdXNpbmdcbiAgICogc3RyaW5nIGRlc2NyaWJpbmcgY29uZmlnIHBhcnQsIGUuZy46XG4gICAqICdzaXRlQ29udGV4dCcsICdzaXRlQ29udGV4dC5sYW5ndWFnZScsIGV0Yy5cbiAgICpcbiAgICogQHBhcmFtIHNjb3BlcyBTdHJpbmcgZGVzY3JpYmluZyBwYXJ0cyBvZiB0aGUgY29uZmlnIHdlIHdhbnQgdG8gYmUgc3VyZSBhcmUgc3RhYmxlXG4gICAqL1xuICBhc3luYyBnZXRTdGFibGVDb25maWcoLi4uc2NvcGVzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHRoaXMuaXNTdGFibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub25nb2luZ1Njb3BlcyRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgb25nb2luZ1Njb3BlcyA9PiBvbmdvaW5nU2NvcGVzICYmIHRoaXMuYXJlUmVhZHkoc2NvcGVzLCBvbmdvaW5nU2NvcGVzKVxuICAgICAgICApLFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXBUbyh0aGlzLmNvbmZpZylcbiAgICAgIClcbiAgICAgIC50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHByb3ZpZGVkIHNjb3BlcyBmcm9tIGN1cnJlbnRseSBvbmdvaW5nU2NvcGVzXG4gICAqXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIHByb3RlY3RlZCBmaW5pc2hTY29wZXMoc2NvcGVzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IG5ld1Njb3BlcyA9IFsuLi50aGlzLm9uZ29pbmdTY29wZXMkLnZhbHVlXTtcbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgbmV3U2NvcGVzLnNwbGljZShuZXdTY29wZXMuaW5kZXhPZihzY29wZSksIDEpO1xuICAgIH1cbiAgICB0aGlzLm9uZ29pbmdTY29wZXMkLm5leHQobmV3U2NvcGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiBwcm92aWRlZCBzY29wZXMgYXJlIG5vdCBwYXJ0IG9mIG9uZ29pbmdTY29wZXNcbiAgICpcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKiBAcGFyYW0gb25nb2luZ1Njb3Blc1xuICAgKi9cbiAgcHJvdGVjdGVkIGFyZVJlYWR5KHNjb3Blczogc3RyaW5nW10sIG9uZ29pbmdTY29wZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgaWYgKCFzY29wZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gIW9uZ29pbmdTY29wZXMubGVuZ3RoO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgZm9yIChjb25zdCBvbmdvaW5nU2NvcGUgb2Ygb25nb2luZ1Njb3Blcykge1xuICAgICAgICBpZiAodGhpcy5zY29wZXNPdmVybGFwKHNjb3BlLCBvbmdvaW5nU2NvcGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHR3byBzY29wZXMgb3ZlcmxhcC5cbiAgICpcbiAgICogRXhhbXBsZSBvZiBzY29wZXMgdGhhdCBvdmVybGFwOlxuICAgKiAndGVzdCcgYW5kICd0ZXN0JywgJ3Rlc3QuYScgYW5kICd0ZXN0JywgJ3Rlc3QnIGFuZCAndGVzdC5hJ1xuICAgKlxuICAgKiBFeGFtcGxlIG9mIHNjb3BlcyB0aGF0IGRvIG5vdCBvdmVybGFwOlxuICAgKiAndGVzdCcgYW5kICd0ZXN0QScsICd0ZXN0LmEnIGFuZCAndGVzdC5iJywgJ3Rlc3QubmVzdGVkJyBhbmQgJ3Rlc3QubmVzdCdcbiAgICpcbiAgICogQHBhcmFtIGEgU2NvcGVBXG4gICAqIEBwYXJhbSBiIFNjb3BlQlxuICAgKi9cbiAgcHJvdGVjdGVkIHNjb3Blc092ZXJsYXAoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoYi5sZW5ndGggPiBhLmxlbmd0aCkge1xuICAgICAgW2EsIGJdID0gW2IsIGFdO1xuICAgIH1cbiAgICByZXR1cm4gYS5zdGFydHNXaXRoKGIpICYmIChhW2IubGVuZ3RoXSB8fCAnLicpID09PSAnLic7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqXG4gICAqIE5vdCBhIHBhcnQgb2YgYSBwdWJsaWMgQVBJLCB1c2VkIGJ5IEFQUF9JTklUSUFMSVpFUiB0byBpbml0aWFsaXplIGFsbCBwcm92aWRlZCBDT05GSUdfSU5JVElBTElaRVJTXG4gICAqXG4gICAqL1xuICBhc3luYyBpbml0aWFsaXplKGluaXRpYWxpemVycz86IENvbmZpZ0luaXRpYWxpemVyW10pIHtcbiAgICBpZiAodGhpcy5vbmdvaW5nU2NvcGVzJC52YWx1ZSkge1xuICAgICAgLy8gZ3VhcmQgZm9yIGRvdWJsZSBpbml0aWFsaXphdGlvblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9uZ29pbmdTY29wZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBhc3luY0NvbmZpZ3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpbml0aWFsaXplciBvZiBpbml0aWFsaXplcnMgfHwgW10pIHtcbiAgICAgIGlmICghaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoIWluaXRpYWxpemVyLnNjb3BlcyB8fCAhaW5pdGlhbGl6ZXIuc2NvcGVzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NPTkZJR19JTklUSUFMSVpFUiBzaG91bGQgcHJvdmlkZSBzY29wZSEnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGV2TW9kZSgpICYmICF0aGlzLmFyZVJlYWR5KGluaXRpYWxpemVyLnNjb3Blcywgb25nb2luZ1Njb3BlcykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdNb3JlIHRoYW4gb25lIENPTkZJR19JTklUSUFMSVpFUiBpcyBpbml0aWFsaXppbmcgdGhlIHNhbWUgY29uZmlnIHNjb3BlLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgb25nb2luZ1Njb3Blcy5wdXNoKC4uLmluaXRpYWxpemVyLnNjb3Blcyk7XG5cbiAgICAgIGFzeW5jQ29uZmlncy5wdXNoKFxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGRlZXBNZXJnZSh0aGlzLmNvbmZpZywgYXdhaXQgaW5pdGlhbGl6ZXIuY29uZmlnRmFjdG9yeSgpKTtcbiAgICAgICAgICB0aGlzLmZpbmlzaFNjb3Blcyhpbml0aWFsaXplci5zY29wZXMpO1xuICAgICAgICB9KSgpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLm9uZ29pbmdTY29wZXMkLm5leHQob25nb2luZ1Njb3Blcyk7XG5cbiAgICBpZiAoYXN5bmNDb25maWdzLmxlbmd0aCkge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYXN5bmNDb25maWdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==