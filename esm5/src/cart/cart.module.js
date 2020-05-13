import { __decorate } from "tslib";
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { ConfigInitializerService } from '../config/config-initializer/config-initializer.service';
import { CartEventModule } from './event/cart-event.module';
import { CartPageMetaResolver } from './services/cart-page-meta.resolver';
import { MultiCartStatePersistenceService } from './services/multi-cart-state-persistence.service';
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
            imports: [MultiCartStoreModule, CartEventModule],
        })
    ], CartModule);
    return CartModule;
}());
export { CartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ25HLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUNuRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUV2RSxNQUFNLFVBQVUsMkJBQTJCLENBQ3pDLDJCQUE2RCxFQUM3RCxVQUFvQztJQUVwQyxJQUFNLE1BQU0sR0FBRztRQUNiLE9BQUEsVUFBVSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDekMsMkJBQTJCLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckMsQ0FBQyxDQUFDO0lBRkYsQ0FFRSxDQUFDO0lBQ0wsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUtEO0lBQUE7SUFtQkEsQ0FBQzttQkFuQlksVUFBVTtJQUNkLGtCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVU7WUFDcEIsU0FBUyxFQUFFO2dCQUNUO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFdBQVcsRUFBRSxvQkFBb0I7b0JBQ2pDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2dCQUNEO29CQUNFLE9BQU8sRUFBRSxlQUFlO29CQUN4QixVQUFVLEVBQUUsMkJBQTJCO29CQUN2QyxJQUFJLEVBQUUsQ0FBQyxnQ0FBZ0MsRUFBRSx3QkFBd0IsQ0FBQztvQkFDbEUsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztJQWxCVSxVQUFVO1FBSHRCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixFQUFFLGVBQWUsQ0FBQztTQUNqRCxDQUFDO09BQ1csVUFBVSxDQW1CdEI7SUFBRCxpQkFBQztDQUFBLEFBbkJELElBbUJDO1NBbkJZLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUFBfSU5JVElBTElaRVIsIE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydEV2ZW50TW9kdWxlIH0gZnJvbSAnLi9ldmVudC9jYXJ0LWV2ZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBDYXJ0UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvY2FydC1wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL211bHRpLWNhcnQtc3RhdGUtcGVyc2lzdGVuY2Uuc2VydmljZSc7XG5pbXBvcnQgeyBNdWx0aUNhcnRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvbXVsdGktY2FydC1zdG9yZS5tb2R1bGUnO1xuXG5leHBvcnQgZnVuY3Rpb24gY2FydFN0YXRlUGVyc2lzdGVuY2VGYWN0b3J5KFxuICBjYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2U6IE11bHRpQ2FydFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLFxuICBjb25maWdJbml0OiBDb25maWdJbml0aWFsaXplclNlcnZpY2Vcbikge1xuICBjb25zdCByZXN1bHQgPSAoKSA9PlxuICAgIGNvbmZpZ0luaXQuZ2V0U3RhYmxlQ29uZmlnKCdjb250ZXh0JykudGhlbigoKSA9PiB7XG4gICAgICBjYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2Uuc3luYygpO1xuICAgIH0pO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbTXVsdGlDYXJ0U3RvcmVNb2R1bGUsIENhcnRFdmVudE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENhcnRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENhcnRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENhcnRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IENhcnRQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNhcnRTdGF0ZVBlcnNpc3RlbmNlRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbTXVsdGlDYXJ0U3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2UsIENvbmZpZ0luaXRpYWxpemVyU2VydmljZV0sXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==