import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { CheckoutService } from './facade/checkout.service';
import { CheckoutPageMetaResolver } from './services/checkout-page-meta.resolver';
import { CheckoutStoreModule } from './store/checkout-store.module';
var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule_1 = CheckoutModule;
    CheckoutModule.forRoot = function () {
        return {
            ngModule: CheckoutModule_1,
            providers: [
                CheckoutService,
                {
                    provide: PageMetaResolver,
                    useExisting: CheckoutPageMetaResolver,
                    multi: true,
                },
            ],
        };
    };
    var CheckoutModule_1;
    CheckoutModule = CheckoutModule_1 = __decorate([
        NgModule({
            imports: [CheckoutStoreModule],
        })
    ], CheckoutModule);
    return CheckoutModule;
}());
export { CheckoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBS3BFO0lBQUE7SUFjQSxDQUFDO3VCQWRZLGNBQWM7SUFDbEIsc0JBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZ0JBQWM7WUFDeEIsU0FBUyxFQUFFO2dCQUNULGVBQWU7Z0JBQ2Y7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsV0FBVyxFQUFFLHdCQUF3QjtvQkFDckMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztJQWJVLGNBQWM7UUFIMUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDL0IsQ0FBQztPQUNXLGNBQWMsQ0FjMUI7SUFBRCxxQkFBQztDQUFBLEFBZEQsSUFjQztTQWRZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDaGVja291dFNlcnZpY2UgfSBmcm9tICcuL2ZhY2FkZS9jaGVja291dC5zZXJ2aWNlJztcbmltcG9ydCB7IENoZWNrb3V0UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvY2hlY2tvdXQtcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENoZWNrb3V0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2NoZWNrb3V0LXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDaGVja291dFN0b3JlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENoZWNrb3V0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDaGVja291dE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBDaGVja291dFNlcnZpY2UsXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIHVzZUV4aXN0aW5nOiBDaGVja291dFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICAgICAgbXVsdGk6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==