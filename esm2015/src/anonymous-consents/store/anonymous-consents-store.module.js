/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigModule } from '../../config/index';
import { StorageSyncType } from '../../state/index';
import { StateModule } from '../../state/state.module';
import { ANONYMOUS_CONSENTS_STORE_FEATURE } from './anonymous-consents-state';
import { effects } from './effects/index';
import { reducerProvider, reducerToken } from './reducers/index';
/**
 * @return {?}
 */
export function anonymousConsentsStoreConfigFactory() {
    /** @type {?} */
    const config = {
        state: {
            storageSync: {
                keys: {
                    'anonymous-consents': StorageSyncType.LOCAL_STORAGE,
                },
            },
        },
    };
    return config;
}
export class AnonymousConsentsStoreModule {
}
AnonymousConsentsStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    StateModule,
                    StoreModule.forFeature(ANONYMOUS_CONSENTS_STORE_FEATURE, reducerToken),
                    EffectsModule.forFeature(effects),
                    ConfigModule.withConfigFactory(anonymousConsentsStoreConfigFactory),
                ],
                providers: [reducerProvider],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNsRCxPQUFPLEVBQWUsZUFBZSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzlFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDOzs7O0FBRWpFLE1BQU0sVUFBVSxtQ0FBbUM7O1VBQzNDLE1BQU0sR0FBZ0I7UUFDMUIsS0FBSyxFQUFFO1lBQ0wsV0FBVyxFQUFFO2dCQUNYLElBQUksRUFBRTtvQkFDSixvQkFBb0IsRUFBRSxlQUFlLENBQUMsYUFBYTtpQkFDcEQ7YUFDRjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBYUQsTUFBTSxPQUFPLDRCQUE0Qjs7O1lBWHhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixtQkFBbUI7b0JBQ25CLFdBQVc7b0JBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsRUFBRSxZQUFZLENBQUM7b0JBQ3RFLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO29CQUNqQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsbUNBQW1DLENBQUM7aUJBQ3BFO2dCQUNELFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQzthQUM3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7IFN0YXRlQ29uZmlnLCBTdG9yYWdlU3luY1R5cGUgfSBmcm9tICcuLi8uLi9zdGF0ZS9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBBTk9OWU1PVVNfQ09OU0VOVFNfU1RPUkVfRkVBVFVSRSB9IGZyb20gJy4vYW5vbnltb3VzLWNvbnNlbnRzLXN0YXRlJztcbmltcG9ydCB7IGVmZmVjdHMgfSBmcm9tICcuL2VmZmVjdHMvaW5kZXgnO1xuaW1wb3J0IHsgcmVkdWNlclByb3ZpZGVyLCByZWR1Y2VyVG9rZW4gfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIGFub255bW91c0NvbnNlbnRzU3RvcmVDb25maWdGYWN0b3J5KCk6IFN0YXRlQ29uZmlnIHtcbiAgY29uc3QgY29uZmlnOiBTdGF0ZUNvbmZpZyA9IHtcbiAgICBzdGF0ZToge1xuICAgICAgc3RvcmFnZVN5bmM6IHtcbiAgICAgICAga2V5czoge1xuICAgICAgICAgICdhbm9ueW1vdXMtY29uc2VudHMnOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIFN0YXRlTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoQU5PTllNT1VTX0NPTlNFTlRTX1NUT1JFX0ZFQVRVUkUsIHJlZHVjZXJUb2tlbiksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JGZWF0dXJlKGVmZmVjdHMpLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnRmFjdG9yeShhbm9ueW1vdXNDb25zZW50c1N0b3JlQ29uZmlnRmFjdG9yeSksXG4gIF0sXG4gIHByb3ZpZGVyczogW3JlZHVjZXJQcm92aWRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzU3RvcmVNb2R1bGUge31cbiJdfQ==