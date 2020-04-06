import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideDefaultConfigFactory } from '../../config/config.module';
import { StorageSyncType } from '../../state/index';
import { StateModule } from '../../state/state.module';
import { ANONYMOUS_CONSENTS_STORE_FEATURE } from './anonymous-consents-state';
import { effects } from './effects/index';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
export function anonymousConsentsStoreConfigFactory() {
    var _a;
    var config = {
        state: {
            storageSync: {
                keys: (_a = {},
                    _a[ANONYMOUS_CONSENTS_STORE_FEATURE] = StorageSyncType.LOCAL_STORAGE,
                    _a),
            },
        },
    };
    return config;
}
var AnonymousConsentsStoreModule = /** @class */ (function () {
    function AnonymousConsentsStoreModule() {
    }
    AnonymousConsentsStoreModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                StateModule,
                StoreModule.forFeature(ANONYMOUS_CONSENTS_STORE_FEATURE, reducerToken, {
                    metaReducers: metaReducers,
                }),
                EffectsModule.forFeature(effects),
            ],
            providers: [
                provideDefaultConfigFactory(anonymousConsentsStoreConfigFactory),
                reducerProvider,
            ],
        })
    ], AnonymousConsentsStoreModule);
    return AnonymousConsentsStoreModule;
}());
export { AnonymousConsentsStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvc3RvcmUvYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3pFLE9BQU8sRUFBZSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9FLE1BQU0sVUFBVSxtQ0FBbUM7O0lBQ2pELElBQU0sTUFBTSxHQUFnQjtRQUMxQixLQUFLLEVBQUU7WUFDTCxXQUFXLEVBQUU7Z0JBQ1gsSUFBSTtvQkFDRixHQUFDLGdDQUFnQyxJQUFHLGVBQWUsQ0FBQyxhQUFhO3VCQUNsRTthQUNGO1NBQ0Y7S0FDRixDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQWdCRDtJQUFBO0lBQTJDLENBQUM7SUFBL0IsNEJBQTRCO1FBZHhDLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxZQUFZO2dCQUNaLFdBQVc7Z0JBQ1gsV0FBVyxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsRUFBRSxZQUFZLEVBQUU7b0JBQ3JFLFlBQVksY0FBQTtpQkFDYixDQUFDO2dCQUNGLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2FBQ2xDO1lBQ0QsU0FBUyxFQUFFO2dCQUNULDJCQUEyQixDQUFDLG1DQUFtQyxDQUFDO2dCQUNoRSxlQUFlO2FBQ2hCO1NBQ0YsQ0FBQztPQUNXLDRCQUE0QixDQUFHO0lBQUQsbUNBQUM7Q0FBQSxBQUE1QyxJQUE0QztTQUEvQiw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5IH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RhdGVDb25maWcsIFN0b3JhZ2VTeW5jVHlwZSB9IGZyb20gJy4uLy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUubW9kdWxlJztcbmltcG9ydCB7IEFOT05ZTU9VU19DT05TRU5UU19TVE9SRV9GRUFUVVJFIH0gZnJvbSAnLi9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQgeyBtZXRhUmVkdWNlcnMsIHJlZHVjZXJQcm92aWRlciwgcmVkdWNlclRva2VuIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBhbm9ueW1vdXNDb25zZW50c1N0b3JlQ29uZmlnRmFjdG9yeSgpOiBTdGF0ZUNvbmZpZyB7XG4gIGNvbnN0IGNvbmZpZzogU3RhdGVDb25maWcgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgIHN0b3JhZ2VTeW5jOiB7XG4gICAgICAgIGtleXM6IHtcbiAgICAgICAgICBbQU5PTllNT1VTX0NPTlNFTlRTX1NUT1JFX0ZFQVRVUkVdOiBTdG9yYWdlU3luY1R5cGUuTE9DQUxfU1RPUkFHRSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKEFOT05ZTU9VU19DT05TRU5UU19TVE9SRV9GRUFUVVJFLCByZWR1Y2VyVG9rZW4sIHtcbiAgICAgIG1ldGFSZWR1Y2VycyxcbiAgICB9KSxcbiAgICBFZmZlY3RzTW9kdWxlLmZvckZlYXR1cmUoZWZmZWN0cyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeShhbm9ueW1vdXNDb25zZW50c1N0b3JlQ29uZmlnRmFjdG9yeSksXG4gICAgcmVkdWNlclByb3ZpZGVyLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c1N0b3JlTW9kdWxlIHt9XG4iXX0=