/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { ActiveCartService } from './facade/active-cart.service';
import { CartDataService } from './facade/cart-data.service';
import { CartService, CartVoucherService, WishListService, } from './facade/index';
import { MultiCartService } from './facade/multi-cart.service';
import { CartPageMetaResolver } from './services/cart-page-meta.resolver';
import { CartStoreModule } from './store/cart-store.module';
import { MultiCartStoreModule } from './store/multi-cart-store.module';
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
                WishListService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFDTCxXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLGVBQWUsR0FDaEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdkU7SUFBQTtJQXNCQSxDQUFDOzs7O0lBbEJRLGtCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZixrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakI7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsV0FBVyxFQUFFLG9CQUFvQjtvQkFDakMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFyQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLGVBQWUsRUFBRSxvQkFBb0IsQ0FBQztpQkFDakQ7O0lBb0JELGlCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0FuQlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQge1xuICBDYXJ0U2VydmljZSxcbiAgQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICBXaXNoTGlzdFNlcnZpY2UsXG59IGZyb20gJy4vZmFjYWRlL2luZGV4JztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2NhcnQtcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENhcnRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvY2FydC1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL211bHRpLWNhcnQtc3RvcmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NhcnRTdG9yZU1vZHVsZSwgTXVsdGlDYXJ0U3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYXJ0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDYXJ0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENhcnREYXRhU2VydmljZSxcbiAgICAgICAgQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICAgICAgICBDYXJ0U2VydmljZSxcbiAgICAgICAgTXVsdGlDYXJ0U2VydmljZSxcbiAgICAgICAgV2lzaExpc3RTZXJ2aWNlLFxuICAgICAgICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IENhcnRQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=