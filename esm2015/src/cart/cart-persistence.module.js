import { APP_INITIALIZER, NgModule } from '@angular/core';
import { META_REDUCERS } from '@ngrx/store';
import { ConfigInitializerService } from '../config/config-initializer/config-initializer.service';
import { MultiCartStatePersistenceService } from './services/multi-cart-state-persistence.service';
export function cartStatePersistenceFactory(cartStatePersistenceService, configInit) {
    const result = () => configInit.getStableConfig('context').then(() => {
        cartStatePersistenceService.initSync();
    });
    return result;
}
/**
 * Before `MultiCartStatePersistenceService` restores the active cart id `ActiveCartService`
 * will use `current` cart instead of the one saved in browser. This meta reducer
 * sets the value on store initialization to undefined cart which holds active cart loading
 * until the data from storage is restored.
 */
export function uninitializeActiveCartMetaReducerFactory() {
    const metaReducer = (reducer) => (state, action) => {
        const newState = Object.assign({}, state);
        if (action.type === '@ngrx/store/init') {
            newState.cart = Object.assign(Object.assign({}, newState.cart), { active: undefined });
        }
        return reducer(newState, action);
    };
    return metaReducer;
}
/**
 * Complimentary module for cart to store cart id in browser storage.
 * This makes it possible to work on the same anonymous cart even after page refresh.
 */
export class CartPersistenceModule {
    static forRoot() {
        return {
            ngModule: CartPersistenceModule,
            providers: [
                {
                    provide: APP_INITIALIZER,
                    useFactory: cartStatePersistenceFactory,
                    deps: [MultiCartStatePersistenceService, ConfigInitializerService],
                    multi: true,
                },
                {
                    provide: META_REDUCERS,
                    useFactory: uninitializeActiveCartMetaReducerFactory,
                    multi: true,
                },
            ],
        };
    }
}
CartPersistenceModule.decorators = [
    { type: NgModule }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wZXJzaXN0ZW5jZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jYXJ0L2NhcnQtcGVyc2lzdGVuY2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQThCLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUVuRyxNQUFNLFVBQVUsMkJBQTJCLENBQ3pDLDJCQUE2RCxFQUM3RCxVQUFvQztJQUVwQyxNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FDbEIsVUFBVSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQzlDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLHdDQUF3QztJQUN0RCxNQUFNLFdBQVcsR0FBRyxDQUFDLE9BQTJCLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3JFLE1BQU0sUUFBUSxxQkFBUSxLQUFLLENBQUUsQ0FBQztRQUM5QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssa0JBQWtCLEVBQUU7WUFDdEMsUUFBUSxDQUFDLElBQUksbUNBQVEsUUFBUSxDQUFDLElBQUksR0FBSyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBRSxDQUFDO1NBQ2hFO1FBQ0QsT0FBTyxPQUFPLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQztJQUNGLE9BQU8sV0FBVyxDQUFDO0FBQ3JCLENBQUM7QUFFRDs7O0dBR0c7QUFFSCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsMkJBQTJCO29CQUN2QyxJQUFJLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSx3QkFBd0IsQ0FBQztvQkFDbEUsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGFBQWE7b0JBQ3RCLFVBQVUsRUFBRSx3Q0FBd0M7b0JBQ3BELEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBbkJGLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25SZWR1Y2VyLCBNZXRhUmVkdWNlciwgTUVUQV9SRURVQ0VSUyB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL211bHRpLWNhcnQtc3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJ0U3RhdGVQZXJzaXN0ZW5jZUZhY3RvcnkoXG4gIGNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZTogTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UsXG4gIGNvbmZpZ0luaXQ6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZVxuKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+XG4gICAgY29uZmlnSW5pdC5nZXRTdGFibGVDb25maWcoJ2NvbnRleHQnKS50aGVuKCgpID0+IHtcbiAgICAgIGNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZS5pbml0U3luYygpO1xuICAgIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEJlZm9yZSBgTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2VgIHJlc3RvcmVzIHRoZSBhY3RpdmUgY2FydCBpZCBgQWN0aXZlQ2FydFNlcnZpY2VgXG4gKiB3aWxsIHVzZSBgY3VycmVudGAgY2FydCBpbnN0ZWFkIG9mIHRoZSBvbmUgc2F2ZWQgaW4gYnJvd3Nlci4gVGhpcyBtZXRhIHJlZHVjZXJcbiAqIHNldHMgdGhlIHZhbHVlIG9uIHN0b3JlIGluaXRpYWxpemF0aW9uIHRvIHVuZGVmaW5lZCBjYXJ0IHdoaWNoIGhvbGRzIGFjdGl2ZSBjYXJ0IGxvYWRpbmdcbiAqIHVudGlsIHRoZSBkYXRhIGZyb20gc3RvcmFnZSBpcyByZXN0b3JlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVuaW5pdGlhbGl6ZUFjdGl2ZUNhcnRNZXRhUmVkdWNlckZhY3RvcnkoKTogTWV0YVJlZHVjZXI8YW55PiB7XG4gIGNvbnN0IG1ldGFSZWR1Y2VyID0gKHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8YW55PikgPT4gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBjb25zdCBuZXdTdGF0ZSA9IHsgLi4uc3RhdGUgfTtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdAbmdyeC9zdG9yZS9pbml0Jykge1xuICAgICAgbmV3U3RhdGUuY2FydCA9IHsgLi4ubmV3U3RhdGUuY2FydCwgLi4ueyBhY3RpdmU6IHVuZGVmaW5lZCB9IH07XG4gICAgfVxuICAgIHJldHVybiByZWR1Y2VyKG5ld1N0YXRlLCBhY3Rpb24pO1xuICB9O1xuICByZXR1cm4gbWV0YVJlZHVjZXI7XG59XG5cbi8qKlxuICogQ29tcGxpbWVudGFyeSBtb2R1bGUgZm9yIGNhcnQgdG8gc3RvcmUgY2FydCBpZCBpbiBicm93c2VyIHN0b3JhZ2UuXG4gKiBUaGlzIG1ha2VzIGl0IHBvc3NpYmxlIHRvIHdvcmsgb24gdGhlIHNhbWUgYW5vbnltb3VzIGNhcnQgZXZlbiBhZnRlciBwYWdlIHJlZnJlc2guXG4gKi9cbkBOZ01vZHVsZSgpXG5leHBvcnQgY2xhc3MgQ2FydFBlcnNpc3RlbmNlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYXJ0UGVyc2lzdGVuY2VNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhcnRQZXJzaXN0ZW5jZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNhcnRTdGF0ZVBlcnNpc3RlbmNlRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UsIENvbmZpZ0luaXRpYWxpemVyU2VydmljZV0sXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBNRVRBX1JFRFVDRVJTLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IHVuaW5pdGlhbGl6ZUFjdGl2ZUNhcnRNZXRhUmVkdWNlckZhY3RvcnksXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==