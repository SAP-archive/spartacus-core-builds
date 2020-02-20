var CartModule_1;
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
let CartModule = CartModule_1 = class CartModule {
    static forRoot() {
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
    }
};
CartModule = CartModule_1 = __decorate([
    NgModule({
        imports: [CartStoreModule, MultiCartStoreModule],
    })
], CartModule);
export { CartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixlQUFlLEVBQ2Ysb0JBQW9CLEdBQ3JCLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBS3ZFLElBQWEsVUFBVSxrQkFBdkIsTUFBYSxVQUFVO0lBQ3JCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVCxlQUFlO2dCQUNmLGtCQUFrQjtnQkFDbEIsV0FBVztnQkFDWCxnQkFBZ0I7Z0JBQ2hCLGVBQWU7Z0JBQ2YsaUJBQWlCO2dCQUNqQixvQkFBb0I7Z0JBQ3BCO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFdBQVcsRUFBRSxvQkFBb0I7b0JBQ2pDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFwQlksVUFBVTtJQUh0QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUM7S0FDakQsQ0FBQztHQUNXLFVBQVUsQ0FvQnRCO1NBcEJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ2FydFNlcnZpY2UsXG4gIENhcnRWb3VjaGVyU2VydmljZSxcbiAgV2lzaExpc3RTZXJ2aWNlLFxuICBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbn0gZnJvbSAnLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VydmljZSB9IGZyb20gJy4vZmFjYWRlL211bHRpLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvY2FydC1wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ2FydFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9jYXJ0LXN0b3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvbXVsdGktY2FydC1zdG9yZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2FydFN0b3JlTW9kdWxlLCBNdWx0aUNhcnRTdG9yZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENhcnRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhcnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ2FydERhdGFTZXJ2aWNlLFxuICAgICAgICBDYXJ0Vm91Y2hlclNlcnZpY2UsXG4gICAgICAgIENhcnRTZXJ2aWNlLFxuICAgICAgICBNdWx0aUNhcnRTZXJ2aWNlLFxuICAgICAgICBXaXNoTGlzdFNlcnZpY2UsXG4gICAgICAgIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgICAgICBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IENhcnRQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=