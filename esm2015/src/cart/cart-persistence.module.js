import { APP_INITIALIZER, NgModule } from '@angular/core';
import { META_REDUCERS } from '@ngrx/store';
import { ConfigInitializerService } from '../config/config-initializer/config-initializer.service';
import { MultiCartStatePersistenceService } from './services/multi-cart-state-persistence.service';
import { activeCartInitialState } from './store/reducers/multi-cart.reducer';
export function cartStatePersistenceFactory(cartStatePersistenceService, configInit) {
    const result = () => configInit.getStableConfig('context').then(() => {
        cartStatePersistenceService.initSync();
    });
    return result;
}
/**
 * Before `MultiCartStatePersistenceService` restores the active cart id `ActiveCartService`
 * will use `current` cart instead of the one saved in browser. This meta reducer
 * sets the value on store initialization to null cart which holds active cart loading
 * until the data from storage is restored.
 */
export function uninitializeActiveCartMetaReducerFactory() {
    const metaReducer = (reducer) => (state, action) => {
        const newState = Object.assign({}, state);
        if (action.type === '@ngrx/store/init') {
            newState.cart = Object.assign(Object.assign({}, newState.cart), { active: activeCartInitialState });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wZXJzaXN0ZW5jZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jYXJ0L2NhcnQtcGVyc2lzdGVuY2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQThCLGFBQWEsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUU3RSxNQUFNLFVBQVUsMkJBQTJCLENBQ3pDLDJCQUE2RCxFQUM3RCxVQUFvQztJQUVwQyxNQUFNLE1BQU0sR0FBRyxHQUFHLEVBQUUsQ0FDbEIsVUFBVSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFO1FBQzlDLDJCQUEyQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLHdDQUF3QztJQUN0RCxNQUFNLFdBQVcsR0FBRyxDQUFDLE9BQTJCLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFO1FBQ3JFLE1BQU0sUUFBUSxxQkFBUSxLQUFLLENBQUUsQ0FBQztRQUM5QixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssa0JBQWtCLEVBQUU7WUFDdEMsUUFBUSxDQUFDLElBQUksbUNBQ1IsUUFBUSxDQUFDLElBQUksR0FDYixFQUFFLE1BQU0sRUFBRSxzQkFBc0IsRUFBRSxDQUN0QyxDQUFDO1NBQ0g7UUFDRCxPQUFPLE9BQU8sQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0lBQ0YsT0FBTyxXQUFXLENBQUM7QUFDckIsQ0FBQztBQUVEOzs7R0FHRztBQUVILE1BQU0sT0FBTyxxQkFBcUI7SUFDaEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHFCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSwyQkFBMkI7b0JBQ3ZDLElBQUksRUFBRSxDQUFDLGdDQUFnQyxFQUFFLHdCQUF3QixDQUFDO29CQUNsRSxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsYUFBYTtvQkFDdEIsVUFBVSxFQUFFLHdDQUF3QztvQkFDcEQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFuQkYsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvblJlZHVjZXIsIE1ldGFSZWR1Y2VyLCBNRVRBX1JFRFVDRVJTIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbXVsdGktY2FydC1zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlJztcbmltcG9ydCB7IGFjdGl2ZUNhcnRJbml0aWFsU3RhdGUgfSBmcm9tICcuL3N0b3JlL3JlZHVjZXJzL211bHRpLWNhcnQucmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJ0U3RhdGVQZXJzaXN0ZW5jZUZhY3RvcnkoXG4gIGNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZTogTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UsXG4gIGNvbmZpZ0luaXQ6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZVxuKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+XG4gICAgY29uZmlnSW5pdC5nZXRTdGFibGVDb25maWcoJ2NvbnRleHQnKS50aGVuKCgpID0+IHtcbiAgICAgIGNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZS5pbml0U3luYygpO1xuICAgIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG4vKipcbiAqIEJlZm9yZSBgTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2VgIHJlc3RvcmVzIHRoZSBhY3RpdmUgY2FydCBpZCBgQWN0aXZlQ2FydFNlcnZpY2VgXG4gKiB3aWxsIHVzZSBgY3VycmVudGAgY2FydCBpbnN0ZWFkIG9mIHRoZSBvbmUgc2F2ZWQgaW4gYnJvd3Nlci4gVGhpcyBtZXRhIHJlZHVjZXJcbiAqIHNldHMgdGhlIHZhbHVlIG9uIHN0b3JlIGluaXRpYWxpemF0aW9uIHRvIG51bGwgY2FydCB3aGljaCBob2xkcyBhY3RpdmUgY2FydCBsb2FkaW5nXG4gKiB1bnRpbCB0aGUgZGF0YSBmcm9tIHN0b3JhZ2UgaXMgcmVzdG9yZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmluaXRpYWxpemVBY3RpdmVDYXJ0TWV0YVJlZHVjZXJGYWN0b3J5KCk6IE1ldGFSZWR1Y2VyPGFueT4ge1xuICBjb25zdCBtZXRhUmVkdWNlciA9IChyZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPGFueT4pID0+IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgY29uc3QgbmV3U3RhdGUgPSB7IC4uLnN0YXRlIH07XG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQG5ncngvc3RvcmUvaW5pdCcpIHtcbiAgICAgIG5ld1N0YXRlLmNhcnQgPSB7XG4gICAgICAgIC4uLm5ld1N0YXRlLmNhcnQsXG4gICAgICAgIC4uLnsgYWN0aXZlOiBhY3RpdmVDYXJ0SW5pdGlhbFN0YXRlIH0sXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihuZXdTdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbiAgcmV0dXJuIG1ldGFSZWR1Y2VyO1xufVxuXG4vKipcbiAqIENvbXBsaW1lbnRhcnkgbW9kdWxlIGZvciBjYXJ0IHRvIHN0b3JlIGNhcnQgaWQgaW4gYnJvd3NlciBzdG9yYWdlLlxuICogVGhpcyBtYWtlcyBpdCBwb3NzaWJsZSB0byB3b3JrIG9uIHRoZSBzYW1lIGFub255bW91cyBjYXJ0IGV2ZW4gYWZ0ZXIgcGFnZSByZWZyZXNoLlxuICovXG5ATmdNb2R1bGUoKVxuZXhwb3J0IGNsYXNzIENhcnRQZXJzaXN0ZW5jZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q2FydFBlcnNpc3RlbmNlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDYXJ0UGVyc2lzdGVuY2VNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjYXJ0U3RhdGVQZXJzaXN0ZW5jZUZhY3RvcnksXG4gICAgICAgICAgZGVwczogW011bHRpQ2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLCBDb25maWdJbml0aWFsaXplclNlcnZpY2VdLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogTUVUQV9SRURVQ0VSUyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiB1bmluaXRpYWxpemVBY3RpdmVDYXJ0TWV0YVJlZHVjZXJGYWN0b3J5LFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=