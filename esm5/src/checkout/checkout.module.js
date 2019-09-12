/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { CheckoutService } from './facade/checkout.service';
import { CheckoutPageMetaResolver } from './services/checkout-page-meta.resolver';
import { CheckoutStoreModule } from './store/checkout-store.module';
var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    /**
     * @return {?}
     */
    CheckoutModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: CheckoutModule,
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
    CheckoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CheckoutStoreModule],
                },] }
    ];
    return CheckoutModule;
}());
export { CheckoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRXBFO0lBQUE7SUFpQkEsQ0FBQzs7OztJQWJRLHNCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBYztZQUN4QixTQUFTLEVBQUU7Z0JBQ1QsZUFBZTtnQkFDZjtvQkFDRSxPQUFPLEVBQUUsZ0JBQWdCO29CQUN6QixXQUFXLEVBQUUsd0JBQXdCO29CQUNyQyxLQUFLLEVBQUUsSUFBSTtpQkFDWjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWhCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsbUJBQW1CLENBQUM7aUJBQy9COztJQWVELHFCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FkWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ2hlY2tvdXRTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvY2hlY2tvdXQuc2VydmljZSc7XG5pbXBvcnQgeyBDaGVja291dFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3NlcnZpY2VzL2NoZWNrb3V0LXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBDaGVja291dFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9jaGVja291dC1zdG9yZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ2hlY2tvdXRTdG9yZU1vZHVsZV0sXG59KVxuZXhwb3J0IGNsYXNzIENoZWNrb3V0TW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDaGVja291dE1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ2hlY2tvdXRNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ2hlY2tvdXRTZXJ2aWNlLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogUGFnZU1ldGFSZXNvbHZlcixcbiAgICAgICAgICB1c2VFeGlzdGluZzogQ2hlY2tvdXRQYWdlTWV0YVJlc29sdmVyLFxuICAgICAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=