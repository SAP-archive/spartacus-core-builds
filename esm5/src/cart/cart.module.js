/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { CartDataService } from './facade/cart-data.service';
import { CartService, CartVoucherService } from './facade/index';
import { CartPageMetaResolver } from './services/cart-page-meta.resolver';
import { CartStoreModule } from './store/cart-store.module';
import { MultiCartStoreModule } from './store/multi-cart-store.module';
import { MultiCartService } from './facade/multi-cart.service';
import { ActiveCartService } from './facade/active-cart.service';
var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    /**
     * @return {?}
     */
    CartModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CartModule,
            providers: [
                CartDataService,
                CartVoucherService,
                CartService,
                MultiCartService,
                ActiveCartService,
                {
                    provide: PageMetaResolver,
                    useExisting: CartPageMetaResolver,
                    multi: true,
                },
            ],
        };
    };
    CartModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CartStoreModule, MultiCartStoreModule],
                },] }
    ];
    return CartModule;
}());
export { CartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFakU7SUFBQTtJQXFCQSxDQUFDOzs7O0lBakJRLGtCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZixrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsZ0JBQWdCO2dCQUNoQixpQkFBaUI7Z0JBQ2pCO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFdBQVcsRUFBRSxvQkFBb0I7b0JBQ2pDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBcEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUM7aUJBQ2pEOztJQW1CRCxpQkFBQztDQUFBLEFBckJELElBcUJDO1NBbEJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0U2VydmljZSwgQ2FydFZvdWNoZXJTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2NhcnQtcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENhcnRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvY2FydC1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL211bHRpLWNhcnQtc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NhcnRTdG9yZU1vZHVsZSwgTXVsdGlDYXJ0U3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYXJ0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDYXJ0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENhcnREYXRhU2VydmljZSxcbiAgICAgICAgQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICAgICAgICBDYXJ0U2VydmljZSxcbiAgICAgICAgTXVsdGlDYXJ0U2VydmljZSxcbiAgICAgICAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBDYXJ0UGFnZU1ldGFSZXNvbHZlcixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19