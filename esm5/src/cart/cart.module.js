import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { ActiveCartService } from './facade/active-cart.service';
import { CartDataService } from './facade/cart-data.service';
import { CartService, CartVoucherService, WishListService, SelectiveCartService, } from './facade/index';
import { MultiCartService } from './facade/multi-cart.service';
import { CartPageMetaResolver } from './services/cart-page-meta.resolver';
import { CartStoreModule } from './store/cart-store.module';
import { MultiCartStoreModule } from './store/multi-cart-store.module';
var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule_1 = CartModule;
    CartModule.forRoot = function () {
        return {
            ngModule: CartModule_1,
            providers: [
                CartDataService,
                CartVoucherService,
                CartService,
                MultiCartService,
                WishListService,
                ActiveCartService,
                SelectiveCartService,
                {
                    provide: PageMetaResolver,
                    useExisting: CartPageMetaResolver,
                    multi: true,
                },
            ],
        };
    };
    var CartModule_1;
    CartModule = CartModule_1 = __decorate([
        NgModule({
            imports: [CartStoreModule, MultiCartStoreModule],
        })
    ], CartModule);
    return CartModule;
}());
export { CartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzdELE9BQU8sRUFDTCxXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLGVBQWUsRUFDZixvQkFBb0IsR0FDckIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFLdkU7SUFBQTtJQW9CQSxDQUFDO21CQXBCWSxVQUFVO0lBQ2Qsa0JBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZixrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsb0JBQW9CO2dCQUNwQjtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixXQUFXLEVBQUUsb0JBQW9CO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBbkJVLFVBQVU7UUFIdEIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLG9CQUFvQixDQUFDO1NBQ2pELENBQUM7T0FDVyxVQUFVLENBb0J0QjtJQUFELGlCQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FwQlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvYWN0aXZlLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9jYXJ0LWRhdGEuc2VydmljZSc7XG5pbXBvcnQge1xuICBDYXJ0U2VydmljZSxcbiAgQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICBXaXNoTGlzdFNlcnZpY2UsXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxufSBmcm9tICcuL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvbXVsdGktY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYXJ0LXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDYXJ0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2NhcnQtc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IE11bHRpQ2FydFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9tdWx0aS1jYXJ0LXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDYXJ0U3RvcmVNb2R1bGUsIE11bHRpQ2FydFN0b3JlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q2FydE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ2FydE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgICAgIENhcnRWb3VjaGVyU2VydmljZSxcbiAgICAgICAgQ2FydFNlcnZpY2UsXG4gICAgICAgIE11bHRpQ2FydFNlcnZpY2UsXG4gICAgICAgIFdpc2hMaXN0U2VydmljZSxcbiAgICAgICAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgICAgIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUGFnZU1ldGFSZXNvbHZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogQ2FydFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==