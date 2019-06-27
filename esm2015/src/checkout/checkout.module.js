/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { PageMetaResolver } from '../cms/page/page-meta.resolver';
import { CheckoutService } from './facade/checkout.service';
import { CheckoutPageMetaResolver } from './services/checkout-page-meta.resolver';
import { CheckoutStoreModule } from './store/checkout-store.module';
export class CheckoutModule {
    /**
     * @return {?}
     */
    static forRoot() {
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
    }
}
CheckoutModule.decorators = [
    { type: NgModule, args: [{
                imports: [CheckoutStoreModule],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzVELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBS3BFLE1BQU0sT0FBTyxjQUFjOzs7O0lBQ3pCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFNBQVMsRUFBRTtnQkFDVCxlQUFlO2dCQUNmO29CQUNFLE9BQU8sRUFBRSxnQkFBZ0I7b0JBQ3pCLFdBQVcsRUFBRSx3QkFBd0I7b0JBQ3JDLEtBQUssRUFBRSxJQUFJO2lCQUNaO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBaEJGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQzthQUMvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2NoZWNrb3V0LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2hlY2tvdXRQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9zZXJ2aWNlcy9jaGVja291dC1wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ2hlY2tvdXRTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvY2hlY2tvdXQtc3RvcmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NoZWNrb3V0U3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q2hlY2tvdXRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENoZWNrb3V0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIENoZWNrb3V0U2VydmljZSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICAgICAgdXNlRXhpc3Rpbmc6IENoZWNrb3V0UGFnZU1ldGFSZXNvbHZlcixcbiAgICAgICAgICBtdWx0aTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19