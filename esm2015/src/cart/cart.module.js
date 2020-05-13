var CartModule_1;
import { __decorate } from "tslib";
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { ConfigInitializerService } from '../config/config-initializer/config-initializer.service';
import { CartEventModule } from './event/cart-event.module';
import { CartPageMetaResolver } from './services/cart-page-meta.resolver';
import { MultiCartStatePersistenceService } from './services/multi-cart-state-persistence.service';
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
        imports: [MultiCartStoreModule, CartEventModule],
    })
], CartModule);
export { CartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx5REFBeUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDNUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDbkcsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFdkUsTUFBTSxVQUFVLDJCQUEyQixDQUN6QywyQkFBNkQsRUFDN0QsVUFBb0M7SUFFcEMsTUFBTSxNQUFNLEdBQUcsR0FBRyxFQUFFLENBQ2xCLFVBQVUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUM5QywyQkFBMkIsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNyQyxDQUFDLENBQUMsQ0FBQztJQUNMLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFLRCxJQUFhLFVBQVUsa0JBQXZCLE1BQWEsVUFBVTtJQUNyQixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBVTtZQUNwQixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsV0FBVyxFQUFFLG9CQUFvQjtvQkFDakMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLGVBQWU7b0JBQ3hCLFVBQVUsRUFBRSwyQkFBMkI7b0JBQ3ZDLElBQUksRUFBRSxDQUFDLGdDQUFnQyxFQUFFLHdCQUF3QixDQUFDO29CQUNsRSxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBbkJZLFVBQVU7SUFIdEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsZUFBZSxDQUFDO0tBQ2pELENBQUM7R0FDVyxVQUFVLENBbUJ0QjtTQW5CWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDb25maWdJbml0aWFsaXplclNlcnZpY2UgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplci5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRFdmVudE1vZHVsZSB9IGZyb20gJy4vZXZlbnQvY2FydC1ldmVudC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2FydFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2NhcnQtcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IE11bHRpQ2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9tdWx0aS1jYXJ0LXN0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UnO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL211bHRpLWNhcnQtc3RvcmUubW9kdWxlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhcnRTdGF0ZVBlcnNpc3RlbmNlRmFjdG9yeShcbiAgY2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlOiBNdWx0aUNhcnRTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSxcbiAgY29uZmlnSW5pdDogQ29uZmlnSW5pdGlhbGl6ZXJTZXJ2aWNlXG4pIHtcbiAgY29uc3QgcmVzdWx0ID0gKCkgPT5cbiAgICBjb25maWdJbml0LmdldFN0YWJsZUNvbmZpZygnY29udGV4dCcpLnRoZW4oKCkgPT4ge1xuICAgICAgY2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLnN5bmMoKTtcbiAgICB9KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW011bHRpQ2FydFN0b3JlTW9kdWxlLCBDYXJ0RXZlbnRNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDYXJ0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDYXJ0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBDYXJ0UGFnZU1ldGFSZXNvbHZlcixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUixcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjYXJ0U3RhdGVQZXJzaXN0ZW5jZUZhY3RvcnksXG4gICAgICAgICAgZGVwczogW011bHRpQ2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLCBDb25maWdJbml0aWFsaXplclNlcnZpY2VdLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=