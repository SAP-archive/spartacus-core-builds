var CartModule_1;
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
    const result = () => configInit.getStableConfig('context').then(() => {
        cartStatePersistenceService.sync();
    });
    return result;
}
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
                {
                    provide: APP_INITIALIZER,
                    useFactory: cartStatePersistenceFactory,
                    deps: [MultiCartStatePersistenceService, ConfigInitializerService],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUNMLFdBQVcsRUFDWCxrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3BCLGVBQWUsR0FDaEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdkUsTUFBTSxVQUFVLDJCQUEyQixDQUN6QywyQkFBNkQsRUFDN0QsVUFBb0M7SUFFcEMsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQ2xCLFVBQVUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUM5QywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFLRCxJQUFhLFVBQVUsa0JBQXZCLE1BQWEsVUFBVTtJQUNyQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZixrQkFBa0I7Z0JBQ2xCLFdBQVc7Z0JBQ1gsZ0JBQWdCO2dCQUNoQixlQUFlO2dCQUNmLGlCQUFpQjtnQkFDakIsb0JBQW9CO2dCQUNwQjtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixXQUFXLEVBQUUsb0JBQW9CO29CQUNqQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjtnQkFDRDtvQkFDRSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsVUFBVSxFQUFFLDJCQUEyQjtvQkFDdkMsSUFBSSxFQUFFLENBQUMsZ0NBQWdDLEVBQUUsd0JBQXdCLENBQUM7b0JBQ2xFLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUExQlksVUFBVTtJQUh0QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLEVBQUUsb0JBQW9CLENBQUM7S0FDakQsQ0FBQztHQUNXLFVBQVUsQ0EwQnRCO1NBMUJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9hY3RpdmUtY2FydC5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnREYXRhU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2NhcnQtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIENhcnRTZXJ2aWNlLFxuICBDYXJ0Vm91Y2hlclNlcnZpY2UsXG4gIFNlbGVjdGl2ZUNhcnRTZXJ2aWNlLFxuICBXaXNoTGlzdFNlcnZpY2UsXG59IGZyb20gJy4vZmFjYWRlL2luZGV4JztcbmltcG9ydCB7IE11bHRpQ2FydFNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9tdWx0aS1jYXJ0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2NhcnQtcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IE11bHRpQ2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tdWx0aS1jYXJ0LXN0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9jYXJ0LXN0b3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvbXVsdGktY2FydC1zdG9yZS5tb2R1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FydFN0YXRlUGVyc2lzdGVuY2VGYWN0b3J5KFxuICBjYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2U6IE11bHRpQ2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLFxuICBjb25maWdJbml0OiBDb25maWdJbml0aWFsaXplclNlcnZpY2Vcbikge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PlxuICAgIGNvbmZpZ0luaXQuZ2V0U3RhYmxlQ29uZmlnKCdjb250ZXh0JykudGhlbigoKSA9PiB7XG4gICAgICBjYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2Uuc3luYygpO1xuICAgIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2FydFN0b3JlTW9kdWxlLCBNdWx0aUNhcnRTdG9yZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENhcnRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhcnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ2FydERhdGFTZXJ2aWNlLFxuICAgICAgICBDYXJ0Vm91Y2hlclNlcnZpY2UsXG4gICAgICAgIENhcnRTZXJ2aWNlLFxuICAgICAgICBNdWx0aUNhcnRTZXJ2aWNlLFxuICAgICAgICBXaXNoTGlzdFNlcnZpY2UsXG4gICAgICAgIEFjdGl2ZUNhcnRTZXJ2aWNlLFxuICAgICAgICBTZWxlY3RpdmVDYXJ0U2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IENhcnRQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNhcnRTdGF0ZVBlcnNpc3RlbmNlRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UsIENvbmZpZ0luaXRpYWxpemVyU2VydmljZV0sXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==