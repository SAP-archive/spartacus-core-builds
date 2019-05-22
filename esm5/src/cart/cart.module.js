/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CartDataService, CartService } from './facade/index';
import { CartStoreModule } from './store/cart-store.module';
var CartModule = /** @class */ (function () {
    function CartModule() {
    }
    CartModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CartStoreModule],
                    providers: [CartDataService, CartService],
                },] }
    ];
    return CartModule;
}());
export { CartModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9jYXJ0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsZUFBZSxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RDtJQUFBO0lBSXlCLENBQUM7O2dCQUp6QixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsZUFBZSxDQUFDO29CQUMxQixTQUFTLEVBQUUsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDO2lCQUMxQzs7SUFDd0IsaUJBQUM7Q0FBQSxBQUoxQixJQUkwQjtTQUFiLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDYXJ0RGF0YVNlcnZpY2UsIENhcnRTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0IHsgQ2FydFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9jYXJ0LXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDYXJ0U3RvcmVNb2R1bGVdLFxuICBwcm92aWRlcnM6IFtDYXJ0RGF0YVNlcnZpY2UsIENhcnRTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydE1vZHVsZSB7fVxuIl19