/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import { catchError, map, mergeMap, startWith, switchMapTo, } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { ProductConnector } from '../../connectors/product/product.connector';
import { ProductActions } from '../actions/index';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { bufferDebounceTime } from '../../../util/buffer-debounce-time';
var ProductEffects = /** @class */ (function () {
    function ProductEffects(actions$, productConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.productConnector = productConnector;
        // we want to cancel all ongoing requests when currency or language changes,
        // that's why observe them and switch actions stream on each change
        this.contextSafeActions$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE, SiteContextActions.LANGUAGE_CHANGE), startWith({}), switchMapTo(this.actions$));
        this.loadProduct$ = createEffect((/**
         * @return {?}
         */
        function () { return (/**
         * @param {?=} __0
         * @return {?}
         */
        function (_a) {
            var _b = _a === void 0 ? {} : _a, scheduler = _b.scheduler, _c = _b.debounce, debounce = _c === void 0 ? 0 : _c;
            return _this.contextSafeActions$.pipe(ofType(ProductActions.LOAD_PRODUCT), map((/**
             * @param {?} action
             * @return {?}
             */
            function (action) { return ({
                code: action.payload,
                scope: action.meta.scope,
            }); })), 
            // we are grouping all load actions that happens at the same time
            // to optimize loading and pass them all to productConnector.getMany
            bufferDebounceTime(debounce, scheduler), mergeMap((/**
             * @param {?} products
             * @return {?}
             */
            function (products) {
                return merge.apply(void 0, tslib_1.__spread(_this.productConnector
                    .getMany(products)
                    .map(_this.productLoadEffect)));
            })));
        }); }));
    }
    /**
     * @private
     * @param {?} productLoad
     * @return {?}
     */
    ProductEffects.prototype.productLoadEffect = /**
     * @private
     * @param {?} productLoad
     * @return {?}
     */
    function (productLoad) {
        return productLoad.data$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return new ProductActions.LoadProductSuccess(tslib_1.__assign({ code: productLoad.code }, data), productLoad.scope);
        })), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            return of(new ProductActions.LoadProductFail(productLoad.code, makeErrorSerializable(error), productLoad.scope));
        })));
    };
    ProductEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductConnector }
    ]; };
    return ProductEffects;
}());
export { ProductEffects };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.contextSafeActions$;
    /** @type {?} */
    ProductEffects.prototype.loadProduct$;
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.productConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLEtBQUssRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0MsT0FBTyxFQUNMLFVBQVUsRUFDVixHQUFHLEVBQ0gsUUFBUSxFQUNSLFNBQVMsRUFDVCxXQUFXLEdBQ1osTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFeEU7SUE2REUsd0JBQ1UsUUFBaUIsRUFDakIsZ0JBQWtDO1FBRjVDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCOzs7UUEzRHBDLHdCQUFtQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUM5QyxNQUFNLENBQ0osa0JBQWtCLENBQUMsZUFBZSxFQUNsQyxrQkFBa0IsQ0FBQyxlQUFlLENBQ25DLEVBQ0QsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQzNCLENBQUM7UUFFRixpQkFBWSxHQUFHLFlBQVk7OztRQUN6Qjs7OztRQUFNLFVBQUMsRUFBZ0M7Z0JBQWhDLDRCQUFnQyxFQUE5Qix3QkFBUyxFQUFFLGdCQUFZLEVBQVosaUNBQVk7WUFHOUIsT0FBQSxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUMzQixNQUFNLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxFQUNuQyxHQUFHOzs7O1lBQUMsVUFBQyxNQUFrQyxJQUFLLE9BQUEsQ0FBQztnQkFDM0MsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPO2dCQUNwQixLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2FBQ3pCLENBQUMsRUFIMEMsQ0FHMUMsRUFBQztZQUNILGlFQUFpRTtZQUNqRSxvRUFBb0U7WUFDcEUsa0JBQWtCLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxFQUN2QyxRQUFROzs7O1lBQUMsVUFBQSxRQUFRO2dCQUNmLE9BQUEsS0FBSyxnQ0FDQSxLQUFJLENBQUMsZ0JBQWdCO3FCQUNyQixPQUFPLENBQUMsUUFBUSxDQUFDO3FCQUNqQixHQUFHLENBQUMsS0FBSSxDQUFDLGlCQUFpQixDQUFDO1lBSGhDLENBSUMsRUFDRixDQUNGO1FBaEJELENBZ0JDLElBQUEsRUFDSixDQUFDO0lBOEJDLENBQUM7Ozs7OztJQTVCSSwwQ0FBaUI7Ozs7O0lBQXpCLFVBQ0UsV0FBOEI7UUFJOUIsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDM0IsR0FBRzs7OztRQUNELFVBQUEsSUFBSTtZQUNGLE9BQUEsSUFBSSxjQUFjLENBQUMsa0JBQWtCLG9CQUNqQyxJQUFJLEVBQUUsV0FBVyxDQUFDLElBQUksSUFBSyxJQUFJLEdBQ2pDLFdBQVcsQ0FBQyxLQUFLLENBQ2xCO1FBSEQsQ0FHQyxFQUNKLEVBQ0QsVUFBVTs7OztRQUFDLFVBQUEsS0FBSztZQUNkLE9BQU8sRUFBRSxDQUNQLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FDaEMsV0FBVyxDQUFDLElBQUksRUFDaEIscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQzVCLFdBQVcsQ0FBQyxLQUFLLENBQ2xCLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkEzREYsVUFBVTs7OztnQkFoQkYsT0FBTztnQkFVUCxnQkFBZ0I7O0lBdUV6QixxQkFBQztDQUFBLEFBakVELElBaUVDO1NBaEVZLGNBQWM7Ozs7OztJQUd6Qiw2Q0FPRTs7SUFFRixzQ0FxQkU7Ozs7O0lBNEJBLGtDQUF5Qjs7Ozs7SUFDekIsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgY3JlYXRlRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IG1lcmdlLCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHtcbiAgY2F0Y2hFcnJvcixcbiAgbWFwLFxuICBtZXJnZU1hcCxcbiAgc3RhcnRXaXRoLFxuICBzd2l0Y2hNYXBUbyxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFByb2R1Y3RDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5jb25uZWN0b3InO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFNjb3BlZFByb2R1Y3REYXRhIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wcm9kdWN0L3Njb3BlZC1wcm9kdWN0LWRhdGEnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgYnVmZmVyRGVib3VuY2VUaW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9idWZmZXItZGVib3VuY2UtdGltZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RWZmZWN0cyB7XG4gIC8vIHdlIHdhbnQgdG8gY2FuY2VsIGFsbCBvbmdvaW5nIHJlcXVlc3RzIHdoZW4gY3VycmVuY3kgb3IgbGFuZ3VhZ2UgY2hhbmdlcyxcbiAgLy8gdGhhdCdzIHdoeSBvYnNlcnZlIHRoZW0gYW5kIHN3aXRjaCBhY3Rpb25zIHN0cmVhbSBvbiBlYWNoIGNoYW5nZVxuICBwcml2YXRlIGNvbnRleHRTYWZlQWN0aW9ucyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkNVUlJFTkNZX0NIQU5HRSxcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0VcbiAgICApLFxuICAgIHN0YXJ0V2l0aCh7fSksXG4gICAgc3dpdGNoTWFwVG8odGhpcy5hY3Rpb25zJClcbiAgKTtcblxuICBsb2FkUHJvZHVjdCQgPSBjcmVhdGVFZmZlY3QoXG4gICAgKCkgPT4gKHsgc2NoZWR1bGVyLCBkZWJvdW5jZSA9IDAgfSA9IHt9KTogT2JzZXJ2YWJsZTxcbiAgICAgIFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0U3VjY2VzcyB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0RmFpbFxuICAgID4gPT5cbiAgICAgIHRoaXMuY29udGV4dFNhZmVBY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUKSxcbiAgICAgICAgbWFwKChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KSA9PiAoe1xuICAgICAgICAgIGNvZGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIHNjb3BlOiBhY3Rpb24ubWV0YS5zY29wZSxcbiAgICAgICAgfSkpLFxuICAgICAgICAvLyB3ZSBhcmUgZ3JvdXBpbmcgYWxsIGxvYWQgYWN0aW9ucyB0aGF0IGhhcHBlbnMgYXQgdGhlIHNhbWUgdGltZVxuICAgICAgICAvLyB0byBvcHRpbWl6ZSBsb2FkaW5nIGFuZCBwYXNzIHRoZW0gYWxsIHRvIHByb2R1Y3RDb25uZWN0b3IuZ2V0TWFueVxuICAgICAgICBidWZmZXJEZWJvdW5jZVRpbWUoZGVib3VuY2UsIHNjaGVkdWxlciksXG4gICAgICAgIG1lcmdlTWFwKHByb2R1Y3RzID0+XG4gICAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICAuLi50aGlzLnByb2R1Y3RDb25uZWN0b3JcbiAgICAgICAgICAgICAgLmdldE1hbnkocHJvZHVjdHMpXG4gICAgICAgICAgICAgIC5tYXAodGhpcy5wcm9kdWN0TG9hZEVmZmVjdClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgKTtcblxuICBwcml2YXRlIHByb2R1Y3RMb2FkRWZmZWN0KFxuICAgIHByb2R1Y3RMb2FkOiBTY29wZWRQcm9kdWN0RGF0YVxuICApOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0U3VjY2VzcyB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0RmFpbFxuICA+IHtcbiAgICByZXR1cm4gcHJvZHVjdExvYWQuZGF0YSQucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgZGF0YSA9PlxuICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3MoXG4gICAgICAgICAgICB7IGNvZGU6IHByb2R1Y3RMb2FkLmNvZGUsIC4uLmRhdGEgfSxcbiAgICAgICAgICAgIHByb2R1Y3RMb2FkLnNjb3BlXG4gICAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0RmFpbChcbiAgICAgICAgICAgIHByb2R1Y3RMb2FkLmNvZGUsXG4gICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgcHJvZHVjdExvYWQuc2NvcGVcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcHJvZHVjdENvbm5lY3RvcjogUHJvZHVjdENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=