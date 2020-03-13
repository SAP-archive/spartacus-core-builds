import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideDefaultConfigFactory } from '../../config/config.module';
import { StateTransferType, } from '../../state/config/state-config';
import { effects } from './effects/index';
import { reducerProvider, reducerToken } from './reducers/index';
import { SITE_CONTEXT_FEATURE } from './state';
export function siteContextStoreConfigFactory() {
    var _a;
    // if we want to reuse SITE_CONTEXT_FEATURE const in config, we have to use factory instead of plain object
    var config = {
        state: {
            ssrTransfer: {
                keys: (_a = {}, _a[SITE_CONTEXT_FEATURE] = StateTransferType.TRANSFER_STATE, _a),
            },
        },
    };
    return config;
}
var SiteContextStoreModule = /** @class */ (function () {
    function SiteContextStoreModule() {
    }
    SiteContextStoreModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule,
                StoreModule.forFeature(SITE_CONTEXT_FEATURE, reducerToken),
                EffectsModule.forFeature(effects),
            ],
            providers: [
                provideDefaultConfigFactory(siteContextStoreConfigFactory),
                reducerProvider,
            ],
        })
    ], SiteContextStoreModule);
    return SiteContextStoreModule;
}());
export { SiteContextStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvc2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pFLE9BQU8sRUFFTCxpQkFBaUIsR0FDbEIsTUFBTSxpQ0FBaUMsQ0FBQztBQUN6QyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDMUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFL0MsTUFBTSxVQUFVLDZCQUE2Qjs7SUFDM0MsMkdBQTJHO0lBQzNHLElBQU0sTUFBTSxHQUFnQjtRQUMxQixLQUFLLEVBQUU7WUFDTCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSSxZQUFJLEdBQUMsb0JBQW9CLElBQUcsaUJBQWlCLENBQUMsY0FBYyxLQUFFO2FBQ25FO1NBQ0Y7S0FDRixDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQWNEO0lBQUE7SUFBcUMsQ0FBQztJQUF6QixzQkFBc0I7UUFabEMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixXQUFXLENBQUMsVUFBVSxDQUFDLG9CQUFvQixFQUFFLFlBQVksQ0FBQztnQkFDMUQsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7YUFDbEM7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsMkJBQTJCLENBQUMsNkJBQTZCLENBQUM7Z0JBQzFELGVBQWU7YUFDaEI7U0FDRixDQUFDO09BQ1csc0JBQXNCLENBQUc7SUFBRCw2QkFBQztDQUFBLEFBQXRDLElBQXNDO1NBQXpCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5IH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgU3RhdGVDb25maWcsXG4gIFN0YXRlVHJhbnNmZXJUeXBlLFxufSBmcm9tICcuLi8uLi9zdGF0ZS9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IGVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvaW5kZXgnO1xuaW1wb3J0IHsgcmVkdWNlclByb3ZpZGVyLCByZWR1Y2VyVG9rZW4gfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcbmltcG9ydCB7IFNJVEVfQ09OVEVYVF9GRUFUVVJFIH0gZnJvbSAnLi9zdGF0ZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaXRlQ29udGV4dFN0b3JlQ29uZmlnRmFjdG9yeSgpOiBTdGF0ZUNvbmZpZyB7XG4gIC8vIGlmIHdlIHdhbnQgdG8gcmV1c2UgU0lURV9DT05URVhUX0ZFQVRVUkUgY29uc3QgaW4gY29uZmlnLCB3ZSBoYXZlIHRvIHVzZSBmYWN0b3J5IGluc3RlYWQgb2YgcGxhaW4gb2JqZWN0XG4gIGNvbnN0IGNvbmZpZzogU3RhdGVDb25maWcgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgIHNzclRyYW5zZmVyOiB7XG4gICAgICAgIGtleXM6IHsgW1NJVEVfQ09OVEVYVF9GRUFUVVJFXTogU3RhdGVUcmFuc2ZlclR5cGUuVFJBTlNGRVJfU1RBVEUgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoU0lURV9DT05URVhUX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKGVmZmVjdHMpLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3Rvcnkoc2l0ZUNvbnRleHRTdG9yZUNvbmZpZ0ZhY3RvcnkpLFxuICAgIHJlZHVjZXJQcm92aWRlcixcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRTdG9yZU1vZHVsZSB7fVxuIl19