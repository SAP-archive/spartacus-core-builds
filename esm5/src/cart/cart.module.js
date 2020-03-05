import { __decorate } from "tslib";
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { ConfigInitializerService } from '../config/config-initializer/config-initializer.service';
import { ActiveCartService } from './facade/active-cart.service';
import { CartDataService } from './facade/cart-data.service';
import { CartService, CartVoucherService, SelectiveCartService, WishListService, } from './facade/index';
import { MultiCartService } from './facade/multi-cart.service';
import { CartPageMetaResolver } from './services/cart-page-meta.resolver';
import { MultiCartStatePersistenceService } from './services/multi-cart-state-persistence.service';
import { CartStoreModule } from './store/cart-store.module';
import { MultiCartStoreModule } from './store/multi-cart-store.module';
export function cartStatePersistenceFactory(cartStatePersistenceService, configInit) {
    var result = function () {
        return configInit.getStableConfig('context').then(function () {
            cartStatePersistenceService.sync();
        });
    };
    return result;
}
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
                {
                    provide: APP_INITIALIZER,
                    useFactory: cartStatePersistenceFactory,
                    deps: [MultiCartStatePersistenceService, ConfigInitializerService],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsV0FBVyxFQUNYLGtCQUFrQixFQUNsQixvQkFBb0IsRUFDcEIsZUFBZSxHQUNoQixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV2RSxNQUFNLFVBQVUsMkJBQTJCLENBQ3pDLDJCQUE2RCxFQUM3RCxVQUFvQztJQUVwQyxJQUFNLE1BQU0sR0FBRztRQUNiLE9BQUEsVUFBVSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekMsMkJBQTJCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsQ0FBQyxDQUFDO0lBRkYsQ0FFRSxDQUFDO0lBQ0wsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUtEO0lBQUE7SUEwQkEsQ0FBQzttQkExQlksVUFBVTtJQUNkLGtCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2Ysa0JBQWtCO2dCQUNsQixXQUFXO2dCQUNYLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLG9CQUFvQjtnQkFDcEI7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsV0FBVyxFQUFFLG9CQUFvQjtvQkFDakMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSwyQkFBMkI7b0JBQ3ZDLElBQUksRUFBRSxDQUFDLGdDQUFnQyxFQUFFLHdCQUF3QixDQUFDO29CQUNsRSxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBekJVLFVBQVU7UUFIdEIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLG9CQUFvQixDQUFDO1NBQ2pELENBQUM7T0FDVyxVQUFVLENBMEJ0QjtJQUFELGlCQUFDO0NBQUEsQUExQkQsSUEwQkM7U0ExQlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydERhdGFTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvY2FydC1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ2FydFNlcnZpY2UsXG4gIENhcnRWb3VjaGVyU2VydmljZSxcbiAgU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gIFdpc2hMaXN0U2VydmljZSxcbn0gZnJvbSAnLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U2VydmljZSB9IGZyb20gJy4vZmFjYWRlL211bHRpLWNhcnQuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvY2FydC1wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL211bHRpLWNhcnQtc3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2NhcnQtc3RvcmUubW9kdWxlJztcbmltcG9ydCB7IE11bHRpQ2FydFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9tdWx0aS1jYXJ0LXN0b3JlLm1vZHVsZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXJ0U3RhdGVQZXJzaXN0ZW5jZUZhY3RvcnkoXG4gIGNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZTogTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UsXG4gIGNvbmZpZ0luaXQ6IENvbmZpZ0luaXRpYWxpemVyU2VydmljZVxuKSB7XG4gIGNvbnN0IHJlc3VsdCA9ICgpID0+XG4gICAgY29uZmlnSW5pdC5nZXRTdGFibGVDb25maWcoJ2NvbnRleHQnKS50aGVuKCgpID0+IHtcbiAgICAgIGNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZS5zeW5jKCk7XG4gICAgfSk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDYXJ0U3RvcmVNb2R1bGUsIE11bHRpQ2FydFN0b3JlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q2FydE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ2FydE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDYXJ0RGF0YVNlcnZpY2UsXG4gICAgICAgIENhcnRWb3VjaGVyU2VydmljZSxcbiAgICAgICAgQ2FydFNlcnZpY2UsXG4gICAgICAgIE11bHRpQ2FydFNlcnZpY2UsXG4gICAgICAgIFdpc2hMaXN0U2VydmljZSxcbiAgICAgICAgQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgICAgIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUGFnZU1ldGFSZXNvbHZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogQ2FydFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBBUFBfSU5JVElBTElaRVIsXG4gICAgICAgICAgdXNlRmFjdG9yeTogY2FydFN0YXRlUGVyc2lzdGVuY2VGYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtNdWx0aUNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSwgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlXSxcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19