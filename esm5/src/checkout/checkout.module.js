import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { CheckoutEventModule } from './events/checkout-event.module';
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
            imports: [CheckoutStoreModule, CheckoutEventModule],
        })
    ], CheckoutModule);
    return CheckoutModule;
}());
export { CheckoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDckUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDbEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFLcEU7SUFBQTtJQWFBLENBQUM7dUJBYlksY0FBYztJQUNsQixzQkFBTyxHQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsV0FBVyxFQUFFLHdCQUF3QjtvQkFDckMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztJQVpVLGNBQWM7UUFIMUIsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUM7U0FDcEQsQ0FBQztPQUNXLGNBQWMsQ0FhMUI7SUFBRCxxQkFBQztDQUFBLEFBYkQsSUFhQztTQWJZLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDaGVja291dEV2ZW50TW9kdWxlIH0gZnJvbSAnLi9ldmVudHMvY2hlY2tvdXQtZXZlbnQubW9kdWxlJztcbmltcG9ydCB7IENoZWNrb3V0UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvY2hlY2tvdXQtcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENoZWNrb3V0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2NoZWNrb3V0LXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDaGVja291dFN0b3JlTW9kdWxlLCBDaGVja291dEV2ZW50TW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2hlY2tvdXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENoZWNrb3V0TW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDaGVja291dE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUGFnZU1ldGFSZXNvbHZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogQ2hlY2tvdXRQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=