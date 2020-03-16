import { __decorate } from "tslib";
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { ConfigInitializerService } from '../config/config-initializer/config-initializer.service';
import { ActiveCartService } from './facade/active-cart.service';
import { CartVoucherService, SelectiveCartService, WishListService, } from './facade/index';
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
                CartVoucherService,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3BCLGVBQWUsR0FDaEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdkUsTUFBTSxVQUFVLDJCQUEyQixDQUN6QywyQkFBNkQsRUFDN0QsVUFBb0M7SUFFcEMsSUFBTSxNQUFNLEdBQUc7UUFDYixPQUFBLFVBQVUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ3pDLDJCQUEyQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLENBQUMsQ0FBQztJQUZGLENBRUUsQ0FBQztJQUNMLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFLRDtJQUFBO0lBd0JBLENBQUM7bUJBeEJZLFVBQVU7SUFDZCxrQkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFVO1lBQ3BCLFNBQVMsRUFBRTtnQkFDVCxrQkFBa0I7Z0JBQ2xCLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixpQkFBaUI7Z0JBQ2pCLG9CQUFvQjtnQkFDcEI7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsV0FBVyxFQUFFLG9CQUFvQjtvQkFDakMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSwyQkFBMkI7b0JBQ3ZDLElBQUksRUFBRSxDQUFDLGdDQUFnQyxFQUFFLHdCQUF3QixDQUFDO29CQUNsRSxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O0lBdkJVLFVBQVU7UUFIdEIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLG9CQUFvQixDQUFDO1NBQ2pELENBQUM7T0FDVyxVQUFVLENBd0J0QjtJQUFELGlCQUFDO0NBQUEsQUF4QkQsSUF3QkM7U0F4QlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFQUF9JTklUSUFMSVpFUiwgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy1pbml0aWFsaXplci9jb25maWctaW5pdGlhbGl6ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgQ2FydFZvdWNoZXJTZXJ2aWNlLFxuICBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgV2lzaExpc3RTZXJ2aWNlLFxufSBmcm9tICcuL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvbXVsdGktY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9jYXJ0LXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBNdWx0aUNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbXVsdGktY2FydC1zdGF0ZS1wZXJzaXN0ZW5jZS5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvY2FydC1zdG9yZS5tb2R1bGUnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL211bHRpLWNhcnQtc3RvcmUubW9kdWxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcnRTdGF0ZVBlcnNpc3RlbmNlRmFjdG9yeShcbiAgY2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlOiBNdWx0aUNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSxcbiAgY29uZmlnSW5pdDogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT5cbiAgICBjb25maWdJbml0LmdldFN0YWJsZUNvbmZpZygnY29udGV4dCcpLnRoZW4oKCkgPT4ge1xuICAgICAgY2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLnN5bmMoKTtcbiAgICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NhcnRTdG9yZU1vZHVsZSwgTXVsdGlDYXJ0U3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYXJ0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDYXJ0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENhcnRWb3VjaGVyU2VydmljZSxcbiAgICAgICAgTXVsdGlDYXJ0U2VydmljZSxcbiAgICAgICAgV2lzaExpc3RTZXJ2aWNlLFxuICAgICAgICBBY3RpdmVDYXJ0U2VydmljZSxcbiAgICAgICAgU2VsZWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBDYXJ0UGFnZU1ldGFSZXNvbHZlcixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjYXJ0U3RhdGVQZXJzaXN0ZW5jZUZhY3RvcnksXG4gICAgICAgICAgZGVwczogW011bHRpQ2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLCBDb25maWdJbml0aWFsaXplclNlcnZpY2VdLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=