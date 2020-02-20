import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigModule } from '../../config/config.module';
import { StateTransferType, } from '../../state/config/state-config';
import { StateModule } from '../../state/state.module';
import { CMS_FEATURE } from './cms-state';
import { effects } from './effects/index';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
export function cmsStoreConfigFactory() {
    var _a;
    // if we want to reuse CMS_FEATURE const in config, we have to use factory instead of plain object
    var config = {
        state: {
            ssrTransfer: {
                keys: (_a = {}, _a[CMS_FEATURE] = StateTransferType.TRANSFER_STATE, _a),
            },
        },
    };
    return config;
}
var CmsStoreModule = /** @class */ (function () {
    function CmsStoreModule() {
    }
    CmsStoreModule = __decorate([
        NgModule({
            imports: [
                CommonModule,
                HttpClientModule,
                StateModule,
                StoreModule.forFeature(CMS_FEATURE, reducerToken, { metaReducers: metaReducers }),
                EffectsModule.forFeature(effects),
                ConfigModule.withConfigFactory(cmsStoreConfigFactory),
            ],
            providers: [reducerProvider],
        })
    ], CmsStoreModule);
    return CmsStoreModule;
}());
export { CmsStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXN0b3JlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jbXMvc3RvcmUvY21zLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9FLE1BQU0sVUFBVSxxQkFBcUI7O0lBQ25DLGtHQUFrRztJQUNsRyxJQUFNLE1BQU0sR0FBZ0I7UUFDMUIsS0FBSyxFQUFFO1lBQ0wsV0FBVyxFQUFFO2dCQUNYLElBQUksWUFBSSxHQUFDLFdBQVcsSUFBRyxpQkFBaUIsQ0FBQyxjQUFjLEtBQUU7YUFDMUQ7U0FDRjtLQUNGLENBQUM7SUFDRixPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBYUQ7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGNBQWM7UUFYMUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLFlBQVk7Z0JBQ1osZ0JBQWdCO2dCQUNoQixXQUFXO2dCQUNYLFdBQVcsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxFQUFFLFlBQVksY0FBQSxFQUFFLENBQUM7Z0JBQ25FLGFBQWEsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDO2dCQUNqQyxZQUFZLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUM7YUFDdEQ7WUFDRCxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDN0IsQ0FBQztPQUNXLGNBQWMsQ0FBRztJQUFELHFCQUFDO0NBQUEsQUFBOUIsSUFBOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHtcbiAgU3RhdGVDb25maWcsXG4gIFN0YXRlVHJhbnNmZXJUeXBlLFxufSBmcm9tICcuLi8uLi9zdGF0ZS9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IFN0YXRlTW9kdWxlIH0gZnJvbSAnLi4vLi4vc3RhdGUvc3RhdGUubW9kdWxlJztcbmltcG9ydCB7IENNU19GRUFUVVJFIH0gZnJvbSAnLi9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQgeyBtZXRhUmVkdWNlcnMsIHJlZHVjZXJQcm92aWRlciwgcmVkdWNlclRva2VuIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjbXNTdG9yZUNvbmZpZ0ZhY3RvcnkoKTogU3RhdGVDb25maWcge1xuICAvLyBpZiB3ZSB3YW50IHRvIHJldXNlIENNU19GRUFUVVJFIGNvbnN0IGluIGNvbmZpZywgd2UgaGF2ZSB0byB1c2UgZmFjdG9yeSBpbnN0ZWFkIG9mIHBsYWluIG9iamVjdFxuICBjb25zdCBjb25maWc6IFN0YXRlQ29uZmlnID0ge1xuICAgIHN0YXRlOiB7XG4gICAgICBzc3JUcmFuc2Zlcjoge1xuICAgICAgICBrZXlzOiB7IFtDTVNfRkVBVFVSRV06IFN0YXRlVHJhbnNmZXJUeXBlLlRSQU5TRkVSX1NUQVRFIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKENNU19GRUFUVVJFLCByZWR1Y2VyVG9rZW4sIHsgbWV0YVJlZHVjZXJzIH0pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZ0ZhY3RvcnkoY21zU3RvcmVDb25maWdGYWN0b3J5KSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbcmVkdWNlclByb3ZpZGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgQ21zU3RvcmVNb2R1bGUge31cbiJdfQ==