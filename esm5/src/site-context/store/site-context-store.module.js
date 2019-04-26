/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigModule } from '../../config/config.module';
import { StateTransferType, } from '../../state/config/state-config';
import { effects } from './effects/index';
import { reducerProvider, reducerToken } from './reducers/index';
import { SITE_CONTEXT_FEATURE } from './state';
/**
 * @return {?}
 */
export function siteContextStoreConfigFactory() {
    var _a;
    // if we want to reuse SITE_CONTEXT_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
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
    SiteContextStoreModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        StoreModule.forFeature(SITE_CONTEXT_FEATURE, reducerToken),
                        EffectsModule.forFeature(effects),
                        ConfigModule.withConfigFactory(siteContextStoreConfigFactory),
                    ],
                    providers: [reducerProvider],
                },] }
    ];
    return SiteContextStoreModule;
}());
export { SiteContextStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvc2l0ZS1jb250ZXh0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sU0FBUyxDQUFDOzs7O0FBRS9DLE1BQU0sVUFBVSw2QkFBNkI7Ozs7UUFFckMsTUFBTSxHQUFHO1FBQ2IsS0FBSyxFQUFFO1lBQ0wsV0FBVyxFQUFFO2dCQUNYLElBQUksWUFBSSxHQUFDLG9CQUFvQixJQUFHLGlCQUFpQixDQUFDLGNBQWMsS0FBRTthQUNuRTtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQVVxQyxDQUFDOztnQkFWckMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsV0FBVyxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRSxZQUFZLENBQUM7d0JBQzFELGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO3dCQUNqQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLENBQUM7cUJBQzlEO29CQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztpQkFDN0I7O0lBQ29DLDZCQUFDO0NBQUEsQUFWdEMsSUFVc0M7U0FBekIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQge1xuICBTdGF0ZUNvbmZpZyxcbiAgU3RhdGVUcmFuc2ZlclR5cGUsXG59IGZyb20gJy4uLy4uL3N0YXRlL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQgeyByZWR1Y2VyUHJvdmlkZXIsIHJlZHVjZXJUb2tlbiB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0IHsgU0lURV9DT05URVhUX0ZFQVRVUkUgfSBmcm9tICcuL3N0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNpdGVDb250ZXh0U3RvcmVDb25maWdGYWN0b3J5KCk6IFN0YXRlQ29uZmlnIHtcbiAgLy8gaWYgd2Ugd2FudCB0byByZXVzZSBTSVRFX0NPTlRFWFRfRkVBVFVSRSBjb25zdCBpbiBjb25maWcsIHdlIGhhdmUgdG8gdXNlIGZhY3RvcnkgaW5zdGVhZCBvZiBwbGFpbiBvYmplY3RcbiAgY29uc3QgY29uZmlnID0ge1xuICAgIHN0YXRlOiB7XG4gICAgICBzc3JUcmFuc2Zlcjoge1xuICAgICAgICBrZXlzOiB7IFtTSVRFX0NPTlRFWFRfRkVBVFVSRV06IFN0YXRlVHJhbnNmZXJUeXBlLlRSQU5TRkVSX1NUQVRFIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFNJVEVfQ09OVEVYVF9GRUFUVVJFLCByZWR1Y2VyVG9rZW4pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZ0ZhY3Rvcnkoc2l0ZUNvbnRleHRTdG9yZUNvbmZpZ0ZhY3RvcnkpLFxuICBdLFxuICBwcm92aWRlcnM6IFtyZWR1Y2VyUHJvdmlkZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFN0b3JlTW9kdWxlIHt9XG4iXX0=