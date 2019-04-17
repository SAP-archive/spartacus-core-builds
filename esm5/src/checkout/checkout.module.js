/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CheckoutService } from './facade/index';
import { CheckoutStoreModule } from './store/checkout-store.module';
import { PageMetaResolver } from '../cms/index';
import { CheckoutPageMetaResolver } from './services/checkout-page-meta.resolver';
var CheckoutModule = /** @class */ (function () {
    function CheckoutModule() {
    }
    CheckoutModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CheckoutStoreModule],
                    providers: [
                        CheckoutService,
                        {
                            provide: PageMetaResolver,
                            useExisting: CheckoutPageMetaResolver,
                            multi: true,
                        },
                    ],
                },] }
    ];
    return CheckoutModule;
}());
export { CheckoutModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L2NoZWNrb3V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2hELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRWxGO0lBQUE7SUFXNkIsQ0FBQzs7Z0JBWDdCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztvQkFDOUIsU0FBUyxFQUFFO3dCQUNULGVBQWU7d0JBQ2Y7NEJBQ0UsT0FBTyxFQUFFLGdCQUFnQjs0QkFDekIsV0FBVyxFQUFFLHdCQUF3Qjs0QkFDckMsS0FBSyxFQUFFLElBQUk7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7O0lBQzRCLHFCQUFDO0NBQUEsQUFYOUIsSUFXOEI7U0FBakIsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENoZWNrb3V0U2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL2NoZWNrb3V0LXN0b3JlLm1vZHVsZSc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vY21zL2luZGV4JztcbmltcG9ydCB7IENoZWNrb3V0UGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vc2VydmljZXMvY2hlY2tvdXQtcGFnZS1tZXRhLnJlc29sdmVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NoZWNrb3V0U3RvcmVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtcbiAgICBDaGVja291dFNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogUGFnZU1ldGFSZXNvbHZlcixcbiAgICAgIHVzZUV4aXN0aW5nOiBDaGVja291dFBhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDaGVja291dE1vZHVsZSB7fVxuIl19