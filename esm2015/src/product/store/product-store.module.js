/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducerToken, reducerProvider, metaReducers } from './reducers/index';
import { effects } from './effects/index';
import { PRODUCT_FEATURE } from './product-state';
import { ProductConverterModule } from './converters/index';
import { ProductOccModule } from '../occ/product-occ.module';
import { ConfigModule } from '../../config/config.module';
/**
 * @return {?}
 */
export function productStoreConfigFactory() {
    // if we want to reuse PRODUCT_FEATURE const in config, we have to use factory instead of plain object
    /** @type {?} */
    const config = {
        state: { ssrTransfer: { keys: { [PRODUCT_FEATURE]: true } } },
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
                    ProductConverterModule,
                    StoreModule.forFeature(PRODUCT_FEATURE, reducerToken, { metaReducers }),
                    EffectsModule.forFeature(effects),
                    ConfigModule.withConfigFactory(productStoreConfigFactory),
                ],
                providers: [reducerProvider],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9wcm9kdWN0LXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUMxQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFbEQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDNUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBRzFELE1BQU0sVUFBVSx5QkFBeUI7OztVQUVqQyxNQUFNLEdBQUc7UUFDYixLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUU7S0FDOUQ7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBY0QsTUFBTSxPQUFPLGtCQUFrQjs7O1lBWjlCLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtvQkFDWixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsc0JBQXNCO29CQUN0QixXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxZQUFZLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQztvQkFDdkUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUM7b0JBQ2pDLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsQ0FBQztpQkFDMUQ7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBTdG9yZU1vZHVsZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcblxuaW1wb3J0IHsgcmVkdWNlclRva2VuLCByZWR1Y2VyUHJvdmlkZXIsIG1ldGFSZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0IHsgZWZmZWN0cyB9IGZyb20gJy4vZWZmZWN0cy9pbmRleCc7XG5pbXBvcnQgeyBQUk9EVUNUX0ZFQVRVUkUgfSBmcm9tICcuL3Byb2R1Y3Qtc3RhdGUnO1xuXG5pbXBvcnQgeyBQcm9kdWN0Q29udmVydGVyTW9kdWxlIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RPY2NNb2R1bGUgfSBmcm9tICcuLi9vY2MvcHJvZHVjdC1vY2MubW9kdWxlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnIH0gZnJvbSAnLi4vLi4vc3RhdGUvY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm9kdWN0U3RvcmVDb25maWdGYWN0b3J5KCk6IFN0YXRlQ29uZmlnIHtcbiAgLy8gaWYgd2Ugd2FudCB0byByZXVzZSBQUk9EVUNUX0ZFQVRVUkUgY29uc3QgaW4gY29uZmlnLCB3ZSBoYXZlIHRvIHVzZSBmYWN0b3J5IGluc3RlYWQgb2YgcGxhaW4gb2JqZWN0XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBzdGF0ZTogeyBzc3JUcmFuc2ZlcjogeyBrZXlzOiB7IFtQUk9EVUNUX0ZFQVRVUkVdOiB0cnVlIH0gfSB9LFxuICB9O1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgUHJvZHVjdE9jY01vZHVsZSxcbiAgICBQcm9kdWN0Q29udmVydGVyTW9kdWxlLFxuICAgIFN0b3JlTW9kdWxlLmZvckZlYXR1cmUoUFJPRFVDVF9GRUFUVVJFLCByZWR1Y2VyVG9rZW4sIHsgbWV0YVJlZHVjZXJzIH0pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yRmVhdHVyZShlZmZlY3RzKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZ0ZhY3RvcnkocHJvZHVjdFN0b3JlQ29uZmlnRmFjdG9yeSksXG4gIF0sXG4gIHByb3ZpZGVyczogW3JlZHVjZXJQcm92aWRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RTdG9yZU1vZHVsZSB7fVxuIl19