var CheckoutModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { CheckoutEventModule } from './events/checkout-event.module';
import { CheckoutPageMetaResolver } from './services/checkout-page-meta.resolver';
import { CheckoutStoreModule } from './store/checkout-store.module';
let CheckoutModule = CheckoutModule_1 = class CheckoutModule {
    static forRoot() {
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
    }
};
CheckoutModule = CheckoutModule_1 = __decorate([
    NgModule({
        imports: [CheckoutStoreModule, CheckoutEventModule],
    })
], CheckoutModule);
export { CheckoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3JFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBS3BFLElBQWEsY0FBYyxzQkFBM0IsTUFBYSxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGdCQUFnQjtvQkFDekIsV0FBVyxFQUFFLHdCQUF3QjtvQkFDckMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQWJZLGNBQWM7SUFIMUIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUM7S0FDcEQsQ0FBQztHQUNXLGNBQWMsQ0FhMUI7U0FiWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ2hlY2tvdXRFdmVudE1vZHVsZSB9IGZyb20gJy4vZXZlbnRzL2NoZWNrb3V0LWV2ZW50Lm1vZHVsZSc7XG5pbXBvcnQgeyBDaGVja291dFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2NoZWNrb3V0LXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDaGVja291dFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9jaGVja291dC1zdG9yZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2hlY2tvdXRTdG9yZU1vZHVsZSwgQ2hlY2tvdXRFdmVudE1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDaGVja291dE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ2hlY2tvdXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IENoZWNrb3V0UGFnZU1ldGFSZXNvbHZlcixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19