import { __awaiter } from "tslib";
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
export class ConfigInitializerService {
    constructor(config, initializerGuard, rootConfig) {
        this.config = config;
        this.initializerGuard = initializerGuard;
        this.rootConfig = rootConfig;
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
                .pipe(filter((ongoingScopes) => ongoingScopes && this.areReady(scopes, ongoingScopes)), take(1), mapTo(this.config))
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
                    const initializerConfig = yield initializer.configFactory();
                    // contribute configuration to rootConfig
                    deepMerge(this.rootConfig, initializerConfig);
                    // contribute configuration to global config
                    deepMerge(this.config, initializerConfig);
                    this.finishScopes(initializer.scopes);
                }))());
            }
            this.ongoingScopes$.next(ongoingScopes);
            if (asyncConfigs.length) {
                yield Promise.all(asyncConfigs);
            }
        });
    }
}
ConfigInitializerService.ɵprov = i0.ɵɵdefineInjectable({ factory: function ConfigInitializerService_Factory() { return new ConfigInitializerService(i0.ɵɵinject(i1.Config), i0.ɵɵinject(i2.CONFIG_INITIALIZER_FORROOT_GUARD, 8), i0.ɵɵinject(i1.RootConfig)); }, token: ConfigInitializerService, providedIn: "root" });
ConfigInitializerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ConfigInitializerService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [Config,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [CONFIG_INITIALIZER_FORROOT_GUARD,] }] },
    { type: undefined, decorators: [{ type: Inject, args: [RootConfig,] }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFDTCxnQ0FBZ0MsR0FFakMsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRXREOztHQUVHO0FBSUgsTUFBTSxPQUFPLHdCQUF3QjtJQUNuQyxZQUM0QixNQUFXLEVBRzNCLGdCQUFnQixFQUNJLFVBQWU7UUFKbkIsV0FBTSxHQUFOLE1BQU0sQ0FBSztRQUczQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQUE7UUFDSSxlQUFVLEdBQVYsVUFBVSxDQUFLO1FBR3JDLG1CQUFjLEdBQUcsSUFBSSxlQUFlLENBQVcsU0FBUyxDQUFDLENBQUM7SUFGakUsQ0FBQztJQUlKOztPQUVHO0lBQ0gsSUFBSSxRQUFRO1FBQ1YsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLGdCQUFnQjtZQUN0QixDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FDdEUsQ0FBQztJQUNK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QUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUUxQyxZQUFZLENBQUMsSUFBSSxDQUNmLENBQUMsR0FBUyxFQUFFO29CQUNWLE1BQU0saUJBQWlCLEdBQUcsTUFBTSxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7b0JBQzVELHlDQUF5QztvQkFDekMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztvQkFDOUMsNENBQTRDO29CQUM1QyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO29CQUMxQyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEMsQ0FBQyxDQUFBLENBQUMsRUFBRSxDQUNMLENBQUM7YUFDSDtZQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBRXhDLElBQUksWUFBWSxDQUFDLE1BQU0sRUFBRTtnQkFDdkIsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQztLQUFBOzs7O1lBeEpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OzRDQUdJLE1BQU0sU0FBQyxNQUFNOzRDQUNiLFFBQVEsWUFDUixNQUFNLFNBQUMsZ0NBQWdDOzRDQUV2QyxNQUFNLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgaXNEZXZNb2RlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ09ORklHX0lOSVRJQUxJWkVSX0ZPUlJPT1RfR1VBUkQsXG4gIENvbmZpZ0luaXRpYWxpemVyLFxufSBmcm9tICcuL2NvbmZpZy1pbml0aWFsaXplcic7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwVG8sIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuLi91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IENvbmZpZywgUm9vdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy10b2tlbnMnO1xuXG4vKipcbiAqIFByb3ZpZGVzIHN1cHBvcnQgZm9yIENPTkZJR19JTklUSUFMSVpFUlNcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoQ29uZmlnKSBwcm90ZWN0ZWQgY29uZmlnOiBhbnksXG4gICAgQE9wdGlvbmFsKClcbiAgICBASW5qZWN0KENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJEKVxuICAgIHByb3RlY3RlZCBpbml0aWFsaXplckd1YXJkLFxuICAgIEBJbmplY3QoUm9vdENvbmZpZykgcHJvdGVjdGVkIHJvb3RDb25maWc6IGFueVxuICApIHt9XG5cbiAgcHJvdGVjdGVkIG9uZ29pbmdTY29wZXMkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxzdHJpbmdbXT4odW5kZWZpbmVkKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGNvbmZpZyBpcyBzdGFibGUsIGkuZS4gYWxsIENPTkZJR19JTklUSUFMSVpFUlMgcmVzb2x2ZWQgY29ycmVjdGx5XG4gICAqL1xuICBnZXQgaXNTdGFibGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgICF0aGlzLmluaXRpYWxpemVyR3VhcmQgfHxcbiAgICAgICh0aGlzLm9uZ29pbmdTY29wZXMkLnZhbHVlICYmIHRoaXMub25nb2luZ1Njb3BlcyQudmFsdWUubGVuZ3RoID09PSAwKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVjb21tZW5kZWQgd2F5IHRvIGdldCBjb25maWcgZm9yIGNvZGUgdGhhdCBjYW4gcnVuIGJlZm9yZSBhcHAgd2lsbCBmaW5pc2hcbiAgICogaW5pdGlhbGl6YXRpb24gKEFQUF9JTklUSUFMSVpFUlMsIHNlbGVjdGVkIHNlcnZpY2UgY29uc3RydWN0b3JzKVxuICAgKlxuICAgKiBVc2VkIHdpdGhvdXQgcGFyYW1ldGVycyB3YWl0cyBmb3IgdGhlIHdob2xlIGNvbmZpZyB0byBiZWNvbWUgc3RhYmxlXG4gICAqXG4gICAqIFBhcmFtZXRlcnMgYWxsb3cgdG8gZGVzY3JpYmUgd2hpY2ggcGFydCBvZiB0aGUgY29uZmlnIHNob3VsZCBiZSBzdGFibGUgdXNpbmdcbiAgICogc3RyaW5nIGRlc2NyaWJpbmcgY29uZmlnIHBhcnQsIGUuZy46XG4gICAqICdzaXRlQ29udGV4dCcsICdzaXRlQ29udGV4dC5sYW5ndWFnZScsIGV0Yy5cbiAgICpcbiAgICogQHBhcmFtIHNjb3BlcyBTdHJpbmcgZGVzY3JpYmluZyBwYXJ0cyBvZiB0aGUgY29uZmlnIHdlIHdhbnQgdG8gYmUgc3VyZSBhcmUgc3RhYmxlXG4gICAqL1xuICBhc3luYyBnZXRTdGFibGVDb25maWcoLi4uc2NvcGVzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XG4gICAgaWYgKHRoaXMuaXNTdGFibGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbmZpZztcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub25nb2luZ1Njb3BlcyRcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgKG9uZ29pbmdTY29wZXMpID0+XG4gICAgICAgICAgICBvbmdvaW5nU2NvcGVzICYmIHRoaXMuYXJlUmVhZHkoc2NvcGVzLCBvbmdvaW5nU2NvcGVzKVxuICAgICAgICApLFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXBUbyh0aGlzLmNvbmZpZylcbiAgICAgIClcbiAgICAgIC50b1Byb21pc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHByb3ZpZGVkIHNjb3BlcyBmcm9tIGN1cnJlbnRseSBvbmdvaW5nU2NvcGVzXG4gICAqXG4gICAqIEBwYXJhbSBzY29wZXNcbiAgICovXG4gIHByb3RlY3RlZCBmaW5pc2hTY29wZXMoc2NvcGVzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IG5ld1Njb3BlcyA9IFsuLi50aGlzLm9uZ29pbmdTY29wZXMkLnZhbHVlXTtcbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgbmV3U2NvcGVzLnNwbGljZShuZXdTY29wZXMuaW5kZXhPZihzY29wZSksIDEpO1xuICAgIH1cbiAgICB0aGlzLm9uZ29pbmdTY29wZXMkLm5leHQobmV3U2NvcGVzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdHJ1ZSBpZiBwcm92aWRlZCBzY29wZXMgYXJlIG5vdCBwYXJ0IG9mIG9uZ29pbmdTY29wZXNcbiAgICpcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKiBAcGFyYW0gb25nb2luZ1Njb3Blc1xuICAgKi9cbiAgcHJvdGVjdGVkIGFyZVJlYWR5KHNjb3Blczogc3RyaW5nW10sIG9uZ29pbmdTY29wZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgaWYgKCFzY29wZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gIW9uZ29pbmdTY29wZXMubGVuZ3RoO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHNjb3BlIG9mIHNjb3Blcykge1xuICAgICAgZm9yIChjb25zdCBvbmdvaW5nU2NvcGUgb2Ygb25nb2luZ1Njb3Blcykge1xuICAgICAgICBpZiAodGhpcy5zY29wZXNPdmVybGFwKHNjb3BlLCBvbmdvaW5nU2NvcGUpKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHR3byBzY29wZXMgb3ZlcmxhcC5cbiAgICpcbiAgICogRXhhbXBsZSBvZiBzY29wZXMgdGhhdCBvdmVybGFwOlxuICAgKiAndGVzdCcgYW5kICd0ZXN0JywgJ3Rlc3QuYScgYW5kICd0ZXN0JywgJ3Rlc3QnIGFuZCAndGVzdC5hJ1xuICAgKlxuICAgKiBFeGFtcGxlIG9mIHNjb3BlcyB0aGF0IGRvIG5vdCBvdmVybGFwOlxuICAgKiAndGVzdCcgYW5kICd0ZXN0QScsICd0ZXN0LmEnIGFuZCAndGVzdC5iJywgJ3Rlc3QubmVzdGVkJyBhbmQgJ3Rlc3QubmVzdCdcbiAgICpcbiAgICogQHBhcmFtIGEgU2NvcGVBXG4gICAqIEBwYXJhbSBiIFNjb3BlQlxuICAgKi9cbiAgcHJvdGVjdGVkIHNjb3Blc092ZXJsYXAoYTogc3RyaW5nLCBiOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoYi5sZW5ndGggPiBhLmxlbmd0aCkge1xuICAgICAgW2EsIGJdID0gW2IsIGFdO1xuICAgIH1cbiAgICByZXR1cm4gYS5zdGFydHNXaXRoKGIpICYmIChhW2IubGVuZ3RoXSB8fCAnLicpID09PSAnLic7XG4gIH1cblxuICAvKipcbiAgICogQGludGVybmFsXG4gICAqXG4gICAqIE5vdCBhIHBhcnQgb2YgYSBwdWJsaWMgQVBJLCB1c2VkIGJ5IEFQUF9JTklUSUFMSVpFUiB0byBpbml0aWFsaXplIGFsbCBwcm92aWRlZCBDT05GSUdfSU5JVElBTElaRVJTXG4gICAqXG4gICAqL1xuICBhc3luYyBpbml0aWFsaXplKGluaXRpYWxpemVycz86IENvbmZpZ0luaXRpYWxpemVyW10pIHtcbiAgICBpZiAodGhpcy5vbmdvaW5nU2NvcGVzJC52YWx1ZSkge1xuICAgICAgLy8gZ3VhcmQgZm9yIGRvdWJsZSBpbml0aWFsaXphdGlvblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9uZ29pbmdTY29wZXM6IHN0cmluZ1tdID0gW107XG5cbiAgICBjb25zdCBhc3luY0NvbmZpZ3M6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBpbml0aWFsaXplciBvZiBpbml0aWFsaXplcnMgfHwgW10pIHtcbiAgICAgIGlmICghaW5pdGlhbGl6ZXIpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoIWluaXRpYWxpemVyLnNjb3BlcyB8fCAhaW5pdGlhbGl6ZXIuc2NvcGVzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NPTkZJR19JTklUSUFMSVpFUiBzaG91bGQgcHJvdmlkZSBzY29wZSEnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGV2TW9kZSgpICYmICF0aGlzLmFyZVJlYWR5KGluaXRpYWxpemVyLnNjb3Blcywgb25nb2luZ1Njb3BlcykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdNb3JlIHRoYW4gb25lIENPTkZJR19JTklUSUFMSVpFUiBpcyBpbml0aWFsaXppbmcgdGhlIHNhbWUgY29uZmlnIHNjb3BlLidcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgb25nb2luZ1Njb3Blcy5wdXNoKC4uLmluaXRpYWxpemVyLnNjb3Blcyk7XG5cbiAgICAgIGFzeW5jQ29uZmlncy5wdXNoKFxuICAgICAgICAoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGluaXRpYWxpemVyQ29uZmlnID0gYXdhaXQgaW5pdGlhbGl6ZXIuY29uZmlnRmFjdG9yeSgpO1xuICAgICAgICAgIC8vIGNvbnRyaWJ1dGUgY29uZmlndXJhdGlvbiB0byByb290Q29uZmlnXG4gICAgICAgICAgZGVlcE1lcmdlKHRoaXMucm9vdENvbmZpZywgaW5pdGlhbGl6ZXJDb25maWcpO1xuICAgICAgICAgIC8vIGNvbnRyaWJ1dGUgY29uZmlndXJhdGlvbiB0byBnbG9iYWwgY29uZmlnXG4gICAgICAgICAgZGVlcE1lcmdlKHRoaXMuY29uZmlnLCBpbml0aWFsaXplckNvbmZpZyk7XG4gICAgICAgICAgdGhpcy5maW5pc2hTY29wZXMoaW5pdGlhbGl6ZXIuc2NvcGVzKTtcbiAgICAgICAgfSkoKVxuICAgICAgKTtcbiAgICB9XG4gICAgdGhpcy5vbmdvaW5nU2NvcGVzJC5uZXh0KG9uZ29pbmdTY29wZXMpO1xuXG4gICAgaWYgKGFzeW5jQ29uZmlncy5sZW5ndGgpIHtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKGFzeW5jQ29uZmlncyk7XG4gICAgfVxuICB9XG59XG4iXX0=