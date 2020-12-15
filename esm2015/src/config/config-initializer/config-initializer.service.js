import { __awaiter } from "tslib";
import { Inject, Injectable, isDevMode, Optional } from '@angular/core';
import { CONFIG_INITIALIZER_FORROOT_GUARD, } from './config-initializer';
import { BehaviorSubject } from 'rxjs';
import { filter, mapTo, take } from 'rxjs/operators';
import { deepMerge } from '../utils/deep-merge';
import { Config, RootConfig } from '../config-tokens';
import { of } from 'rxjs/internal/observable/of';
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
    getStable(...scopes) {
        if (this.isStable) {
            return of(this.config);
        }
        return this.ongoingScopes$.pipe(filter((ongoingScopes) => ongoingScopes && this.areReady(scopes, ongoingScopes)), take(1), mapTo(this.config));
    }
    /**
     * @deprecated since 3.0, use getStable() instead
     */
    getStableConfig(...scopes) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.getStable(...scopes).toPromise();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFDTCxnQ0FBZ0MsR0FFakMsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQUVqRDs7R0FFRztBQUlILE1BQU0sT0FBTyx3QkFBd0I7SUFDbkMsWUFDNEIsTUFBVyxFQUczQixnQkFBZ0IsRUFDSSxVQUFlO1FBSm5CLFdBQU0sR0FBTixNQUFNLENBQUs7UUFHM0IscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFBO1FBQ0ksZUFBVSxHQUFWLFVBQVUsQ0FBSztRQUdyQyxtQkFBYyxHQUFHLElBQUksZUFBZSxDQUFXLFNBQVMsQ0FBQyxDQUFDO0lBRmpFLENBQUM7SUFJSjs7T0FFRztJQUNILElBQUksUUFBUTtRQUNWLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxnQkFBZ0I7WUFDdEIsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQ3RFLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7Ozs7O09BV0c7SUFDSCxTQUFTLENBQUMsR0FBRyxNQUFnQjtRQUMzQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FDN0IsTUFBTSxDQUNKLENBQUMsYUFBYSxFQUFFLEVBQUUsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQ3pFLEVBQ0QsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQ25CLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDRyxlQUFlLENBQUMsR0FBRyxNQUFnQjs7WUFDdkMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0MsQ0FBQztLQUFBO0lBRUQ7Ozs7T0FJRztJQUNPLFlBQVksQ0FBQyxNQUFnQjtRQUNyQyxNQUFNLFNBQVMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRCxLQUFLLE1BQU0sS0FBSyxJQUFJLE1BQU0sRUFBRTtZQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDL0M7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDTyxRQUFRLENBQUMsTUFBZ0IsRUFBRSxhQUF1QjtRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUNsQixPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQztTQUM5QjtRQUNELEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1lBQzFCLEtBQUssTUFBTSxZQUFZLElBQUksYUFBYSxFQUFFO2dCQUN4QyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxFQUFFO29CQUMzQyxPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO1NBQ0Y7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7T0FXRztJQUNPLGFBQWEsQ0FBQyxDQUFTLEVBQUUsQ0FBUztRQUMxQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRTtZQUN2QixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqQjtRQUNELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssR0FBRyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNHLFVBQVUsQ0FBQyxZQUFrQzs7WUFDakQsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRTtnQkFDN0Isa0NBQWtDO2dCQUNsQyxPQUFPO2FBQ1I7WUFFRCxNQUFNLGFBQWEsR0FBYSxFQUFFLENBQUM7WUFFbkMsTUFBTSxZQUFZLEdBQW9CLEVBQUUsQ0FBQztZQUV6QyxLQUFLLE1BQU0sV0FBVyxJQUFJLFlBQVksSUFBSSxFQUFFLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxXQUFXLEVBQUU7b0JBQ2hCLFNBQVM7aUJBQ1Y7Z0JBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtvQkFDckQsTUFBTSxJQUFJLEtBQUssQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO2lCQUM3RDtnQkFFRCxJQUFJLFNBQVMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxFQUFFO29CQUNwRSxPQUFPLENBQUMsSUFBSSxDQUNWLHlFQUF5RSxDQUMxRSxDQUFDO2lCQUNIO2dCQUVELGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBRTFDLFlBQVksQ0FBQyxJQUFJLENBQ2YsQ0FBQyxHQUFTLEVBQUU7b0JBQ1YsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztvQkFDNUQseUNBQXlDO29CQUN6QyxTQUFTLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO29CQUM5Qyw0Q0FBNEM7b0JBQzVDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLGlCQUFpQixDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4QyxDQUFDLENBQUEsQ0FBQyxFQUFFLENBQ0wsQ0FBQzthQUNIO1lBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFFeEMsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUN2QixNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDO0tBQUE7Ozs7WUE1SkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7NENBR0ksTUFBTSxTQUFDLE1BQU07NENBQ2IsUUFBUSxZQUNSLE1BQU0sU0FBQyxnQ0FBZ0M7NENBRXZDLE1BQU0sU0FBQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBpc0Rldk1vZGUsIE9wdGlvbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDT05GSUdfSU5JVElBTElaRVJfRk9SUk9PVF9HVUFSRCxcbiAgQ29uZmlnSW5pdGlhbGl6ZXIsXG59IGZyb20gJy4vY29uZmlnLWluaXRpYWxpemVyJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXBUbywgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4uL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHsgQ29uZmlnLCBSb290Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnLXRva2Vucyc7XG5pbXBvcnQgeyBvZiB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9vZic7XG5cbi8qKlxuICogUHJvdmlkZXMgc3VwcG9ydCBmb3IgQ09ORklHX0lOSVRJQUxJWkVSU1xuICovXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChDb25maWcpIHByb3RlY3RlZCBjb25maWc6IGFueSxcbiAgICBAT3B0aW9uYWwoKVxuICAgIEBJbmplY3QoQ09ORklHX0lOSVRJQUxJWkVSX0ZPUlJPT1RfR1VBUkQpXG4gICAgcHJvdGVjdGVkIGluaXRpYWxpemVyR3VhcmQsXG4gICAgQEluamVjdChSb290Q29uZmlnKSBwcm90ZWN0ZWQgcm9vdENvbmZpZzogYW55XG4gICkge31cblxuICBwcm90ZWN0ZWQgb25nb2luZ1Njb3BlcyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZ1tdPih1bmRlZmluZWQpO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgY29uZmlnIGlzIHN0YWJsZSwgaS5lLiBhbGwgQ09ORklHX0lOSVRJQUxJWkVSUyByZXNvbHZlZCBjb3JyZWN0bHlcbiAgICovXG4gIGdldCBpc1N0YWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgIXRoaXMuaW5pdGlhbGl6ZXJHdWFyZCB8fFxuICAgICAgKHRoaXMub25nb2luZ1Njb3BlcyQudmFsdWUgJiYgdGhpcy5vbmdvaW5nU2NvcGVzJC52YWx1ZS5sZW5ndGggPT09IDApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWNvbW1lbmRlZCB3YXkgdG8gZ2V0IGNvbmZpZyBmb3IgY29kZSB0aGF0IGNhbiBydW4gYmVmb3JlIGFwcCB3aWxsIGZpbmlzaFxuICAgKiBpbml0aWFsaXphdGlvbiAoQVBQX0lOSVRJQUxJWkVSUywgc2VsZWN0ZWQgc2VydmljZSBjb25zdHJ1Y3RvcnMpXG4gICAqXG4gICAqIFVzZWQgd2l0aG91dCBwYXJhbWV0ZXJzIHdhaXRzIGZvciB0aGUgd2hvbGUgY29uZmlnIHRvIGJlY29tZSBzdGFibGVcbiAgICpcbiAgICogUGFyYW1ldGVycyBhbGxvdyB0byBkZXNjcmliZSB3aGljaCBwYXJ0IG9mIHRoZSBjb25maWcgc2hvdWxkIGJlIHN0YWJsZSB1c2luZ1xuICAgKiBzdHJpbmcgZGVzY3JpYmluZyBjb25maWcgcGFydCwgZS5nLjpcbiAgICogJ3NpdGVDb250ZXh0JywgJ3NpdGVDb250ZXh0Lmxhbmd1YWdlJywgZXRjLlxuICAgKlxuICAgKiBAcGFyYW0gc2NvcGVzIFN0cmluZyBkZXNjcmliaW5nIHBhcnRzIG9mIHRoZSBjb25maWcgd2Ugd2FudCB0byBiZSBzdXJlIGFyZSBzdGFibGVcbiAgICovXG4gIGdldFN0YWJsZSguLi5zY29wZXM6IHN0cmluZ1tdKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBpZiAodGhpcy5pc1N0YWJsZSkge1xuICAgICAgcmV0dXJuIG9mKHRoaXMuY29uZmlnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub25nb2luZ1Njb3BlcyQucGlwZShcbiAgICAgIGZpbHRlcihcbiAgICAgICAgKG9uZ29pbmdTY29wZXMpID0+IG9uZ29pbmdTY29wZXMgJiYgdGhpcy5hcmVSZWFkeShzY29wZXMsIG9uZ29pbmdTY29wZXMpXG4gICAgICApLFxuICAgICAgdGFrZSgxKSxcbiAgICAgIG1hcFRvKHRoaXMuY29uZmlnKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMy4wLCB1c2UgZ2V0U3RhYmxlKCkgaW5zdGVhZFxuICAgKi9cbiAgYXN5bmMgZ2V0U3RhYmxlQ29uZmlnKC4uLnNjb3Blczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldFN0YWJsZSguLi5zY29wZXMpLnRvUHJvbWlzZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgcHJvdmlkZWQgc2NvcGVzIGZyb20gY3VycmVudGx5IG9uZ29pbmdTY29wZXNcbiAgICpcbiAgICogQHBhcmFtIHNjb3Blc1xuICAgKi9cbiAgcHJvdGVjdGVkIGZpbmlzaFNjb3BlcyhzY29wZXM6IHN0cmluZ1tdKSB7XG4gICAgY29uc3QgbmV3U2NvcGVzID0gWy4uLnRoaXMub25nb2luZ1Njb3BlcyQudmFsdWVdO1xuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgICBuZXdTY29wZXMuc3BsaWNlKG5ld1Njb3Blcy5pbmRleE9mKHNjb3BlKSwgMSk7XG4gICAgfVxuICAgIHRoaXMub25nb2luZ1Njb3BlcyQubmV4dChuZXdTY29wZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0cnVlIGlmIHByb3ZpZGVkIHNjb3BlcyBhcmUgbm90IHBhcnQgb2Ygb25nb2luZ1Njb3Blc1xuICAgKlxuICAgKiBAcGFyYW0gc2NvcGVzXG4gICAqIEBwYXJhbSBvbmdvaW5nU2NvcGVzXG4gICAqL1xuICBwcm90ZWN0ZWQgYXJlUmVhZHkoc2NvcGVzOiBzdHJpbmdbXSwgb25nb2luZ1Njb3Blczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBpZiAoIXNjb3Blcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiAhb25nb2luZ1Njb3Blcy5sZW5ndGg7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgc2NvcGUgb2Ygc2NvcGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IG9uZ29pbmdTY29wZSBvZiBvbmdvaW5nU2NvcGVzKSB7XG4gICAgICAgIGlmICh0aGlzLnNjb3Blc092ZXJsYXAoc2NvcGUsIG9uZ29pbmdTY29wZSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdHdvIHNjb3BlcyBvdmVybGFwLlxuICAgKlxuICAgKiBFeGFtcGxlIG9mIHNjb3BlcyB0aGF0IG92ZXJsYXA6XG4gICAqICd0ZXN0JyBhbmQgJ3Rlc3QnLCAndGVzdC5hJyBhbmQgJ3Rlc3QnLCAndGVzdCcgYW5kICd0ZXN0LmEnXG4gICAqXG4gICAqIEV4YW1wbGUgb2Ygc2NvcGVzIHRoYXQgZG8gbm90IG92ZXJsYXA6XG4gICAqICd0ZXN0JyBhbmQgJ3Rlc3RBJywgJ3Rlc3QuYScgYW5kICd0ZXN0LmInLCAndGVzdC5uZXN0ZWQnIGFuZCAndGVzdC5uZXN0J1xuICAgKlxuICAgKiBAcGFyYW0gYSBTY29wZUFcbiAgICogQHBhcmFtIGIgU2NvcGVCXG4gICAqL1xuICBwcm90ZWN0ZWQgc2NvcGVzT3ZlcmxhcChhOiBzdHJpbmcsIGI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmIChiLmxlbmd0aCA+IGEubGVuZ3RoKSB7XG4gICAgICBbYSwgYl0gPSBbYiwgYV07XG4gICAgfVxuICAgIHJldHVybiBhLnN0YXJ0c1dpdGgoYikgJiYgKGFbYi5sZW5ndGhdIHx8ICcuJykgPT09ICcuJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAaW50ZXJuYWxcbiAgICpcbiAgICogTm90IGEgcGFydCBvZiBhIHB1YmxpYyBBUEksIHVzZWQgYnkgQVBQX0lOSVRJQUxJWkVSIHRvIGluaXRpYWxpemUgYWxsIHByb3ZpZGVkIENPTkZJR19JTklUSUFMSVpFUlNcbiAgICpcbiAgICovXG4gIGFzeW5jIGluaXRpYWxpemUoaW5pdGlhbGl6ZXJzPzogQ29uZmlnSW5pdGlhbGl6ZXJbXSkge1xuICAgIGlmICh0aGlzLm9uZ29pbmdTY29wZXMkLnZhbHVlKSB7XG4gICAgICAvLyBndWFyZCBmb3IgZG91YmxlIGluaXRpYWxpemF0aW9uXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3Qgb25nb2luZ1Njb3Blczogc3RyaW5nW10gPSBbXTtcblxuICAgIGNvbnN0IGFzeW5jQ29uZmlnczogUHJvbWlzZTx2b2lkPltdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGluaXRpYWxpemVyIG9mIGluaXRpYWxpemVycyB8fCBbXSkge1xuICAgICAgaWYgKCFpbml0aWFsaXplcikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICghaW5pdGlhbGl6ZXIuc2NvcGVzIHx8ICFpbml0aWFsaXplci5zY29wZXMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ09ORklHX0lOSVRJQUxJWkVSIHNob3VsZCBwcm92aWRlIHNjb3BlIScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXNEZXZNb2RlKCkgJiYgIXRoaXMuYXJlUmVhZHkoaW5pdGlhbGl6ZXIuc2NvcGVzLCBvbmdvaW5nU2NvcGVzKSkge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ01vcmUgdGhhbiBvbmUgQ09ORklHX0lOSVRJQUxJWkVSIGlzIGluaXRpYWxpemluZyB0aGUgc2FtZSBjb25maWcgc2NvcGUuJ1xuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBvbmdvaW5nU2NvcGVzLnB1c2goLi4uaW5pdGlhbGl6ZXIuc2NvcGVzKTtcblxuICAgICAgYXN5bmNDb25maWdzLnB1c2goXG4gICAgICAgIChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgY29uc3QgaW5pdGlhbGl6ZXJDb25maWcgPSBhd2FpdCBpbml0aWFsaXplci5jb25maWdGYWN0b3J5KCk7XG4gICAgICAgICAgLy8gY29udHJpYnV0ZSBjb25maWd1cmF0aW9uIHRvIHJvb3RDb25maWdcbiAgICAgICAgICBkZWVwTWVyZ2UodGhpcy5yb290Q29uZmlnLCBpbml0aWFsaXplckNvbmZpZyk7XG4gICAgICAgICAgLy8gY29udHJpYnV0ZSBjb25maWd1cmF0aW9uIHRvIGdsb2JhbCBjb25maWdcbiAgICAgICAgICBkZWVwTWVyZ2UodGhpcy5jb25maWcsIGluaXRpYWxpemVyQ29uZmlnKTtcbiAgICAgICAgICB0aGlzLmZpbmlzaFNjb3Blcyhpbml0aWFsaXplci5zY29wZXMpO1xuICAgICAgICB9KSgpXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLm9uZ29pbmdTY29wZXMkLm5leHQob25nb2luZ1Njb3Blcyk7XG5cbiAgICBpZiAoYXN5bmNDb25maWdzLmxlbmd0aCkge1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYXN5bmNDb25maWdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==