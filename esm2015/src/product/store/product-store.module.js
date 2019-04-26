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
import { ProductOccModule } from '../occ/product-occ.module';
import { effects } from './effects/index';
import { PRODUCT_FEATURE } from './product-state';
import { metaReducers, reducerProvider, reducerToken } from './reducers/index';
/**
 * @return {?}
 */
export function productStoreConfigFactory() {
    // if we want to reuse PRODUCT_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    const config = {
        state: {
            ssrTransfer: {
                keys: { [PRODUCT_FEATURE]: StateTransferType.TRANSFER_STATE },
            },
        },
    };
    return config;
}
export class ProductStoreModule {
}
ProductStoreModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    HttpClientModule,
                    ProductOccModule,
                    StoreModule.forFeature(PRODUCT_FEATURE, reducerToken, { metaReducers }),
                    EffectsModule.forFeature(effects),
                    ConfigModule.withConfigFactory(productStoreConfigFactory),
                ],
                providers: [reducerProvider],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9wcm9kdWN0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBRUwsaUJBQWlCLEdBQ2xCLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7OztBQUUvRSxNQUFNLFVBQVUseUJBQXlCOzs7VUFFakMsTUFBTSxHQUFHO1FBQ2IsS0FBSyxFQUFFO1lBQ0wsV0FBVyxFQUFFO2dCQUNYLElBQUksRUFBRSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUUsaUJBQWlCLENBQUMsY0FBYyxFQUFFO2FBQzlEO1NBQ0Y7S0FDRjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFhRCxNQUFNLE9BQU8sa0JBQWtCOzs7WUFYOUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGdCQUFnQjtvQkFDaEIsZ0JBQWdCO29CQUNoQixXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQztvQkFDdkUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQ2pDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDMUQ7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQge1xuICBTdGF0ZUNvbmZpZyxcbiAgU3RhdGVUcmFuc2ZlclR5cGUsXG59IGZyb20gJy4uLy4uL3N0YXRlL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgUHJvZHVjdE9jY01vZHVsZSB9IGZyb20gJy4uL29jYy9wcm9kdWN0LW9jYy5tb2R1bGUnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQgeyBQUk9EVUNUX0ZFQVRVUkUgfSBmcm9tICcuL3Byb2R1Y3Qtc3RhdGUnO1xuaW1wb3J0IHsgbWV0YVJlZHVjZXJzLCByZWR1Y2VyUHJvdmlkZXIsIHJlZHVjZXJUb2tlbiB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvZHVjdFN0b3JlQ29uZmlnRmFjdG9yeSgpOiBTdGF0ZUNvbmZpZyB7XG4gIC8vIGlmIHdlIHdhbnQgdG8gcmV1c2UgUFJPRFVDVF9GRUFUVVJFIGNvbnN0IGluIGNvbmZpZywgd2UgaGF2ZSB0byB1c2UgZmFjdG9yeSBpbnN0ZWFkIG9mIHBsYWluIG9iamVjdFxuICBjb25zdCBjb25maWcgPSB7XG4gICAgc3RhdGU6IHtcbiAgICAgIHNzclRyYW5zZmVyOiB7XG4gICAgICAgIGtleXM6IHsgW1BST0RVQ1RfRkVBVFVSRV06IFN0YXRlVHJhbnNmZXJUeXBlLlRSQU5TRkVSX1NUQVRFIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBQcm9kdWN0T2NjTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoUFJPRFVDVF9GRUFUVVJFLCByZWR1Y2VyVG9rZW4sIHsgbWV0YVJlZHVjZXJzIH0pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZ0ZhY3RvcnkocHJvZHVjdFN0b3JlQ29uZmlnRmFjdG9yeSksXG4gIF0sXG4gIHByb3ZpZGVyczogW3JlZHVjZXJQcm92aWRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTdG9yZU1vZHVsZSB7fVxuIl19