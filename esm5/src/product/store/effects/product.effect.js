/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, catchError, mergeMap, switchMap, groupBy } from 'rxjs/operators';
import * as actions from '../actions/index';
import { ProductConnector } from '../../connectors/product/product.connector';
var ProductEffects = /** @class */ (function () {
    function ProductEffects(actions$, productConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.productConnector = productConnector;
        this.loadProduct$ = this.actions$.pipe(ofType(actions.LOAD_PRODUCT), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), groupBy((/**
         * @param {?} productCode
         * @return {?}
         */
        function (productCode) { return productCode; })), mergeMap((/**
         * @param {?} group
         * @return {?}
         */
        function (group) {
            return group.pipe(switchMap((/**
             * @param {?} productCode
             * @return {?}
             */
            function (productCode) {
                return _this.productConnector.get(productCode).pipe(map((/**
                 * @param {?} product
                 * @return {?}
                 */
                function (product) {
                    return new actions.LoadProductSuccess(product);
                })), catchError((/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    return of(new actions.LoadProductFail(productCode, error));
                })));
            })));
        })));
    }
    ProductEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: ProductConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ProductEffects.prototype, "loadProduct$", void 0);
    return ProductEffects;
}());
export { ProductEffects };
if (false) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvRSxPQUFPLEtBQUssT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRTlFO0lBeUJFLHdCQUNVLFFBQWlCLEVBQ2pCLGdCQUFrQztRQUY1QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQXhCNUMsaUJBQVksR0FFUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFDNUIsR0FBRzs7OztRQUFDLFVBQUMsTUFBMkIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ3BELE9BQU87Ozs7UUFBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLFdBQVcsRUFBWCxDQUFXLEVBQUMsRUFDbkMsUUFBUTs7OztRQUFDLFVBQUEsS0FBSztZQUNaLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FDUixTQUFTOzs7O1lBQUMsVUFBQSxXQUFXO2dCQUNuQixPQUFPLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNoRCxHQUFHOzs7O2dCQUFDLFVBQUEsT0FBTztvQkFDVCxPQUFPLElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O2dCQUFDLFVBQUEsS0FBSztvQkFDZCxPQUFBLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUFuRCxDQUFtRCxFQUNwRCxDQUNGLENBQUM7WUFDSixDQUFDLEVBQUMsQ0FDSDtRQVhELENBV0MsRUFDRixDQUNGLENBQUM7SUFLQyxDQUFDOztnQkE1QkwsVUFBVTs7OztnQkFQTSxPQUFPO2dCQUtmLGdCQUFnQjs7SUFLdkI7UUFEQyxNQUFNLEVBQUU7MENBQ0ssVUFBVTt3REFvQnRCO0lBTUoscUJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQTVCWSxjQUFjOzs7SUFDekIsc0NBcUJFOzs7OztJQUdBLGtDQUF5Qjs7Ozs7SUFDekIsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgbWVyZ2VNYXAsIHN3aXRjaE1hcCwgZ3JvdXBCeSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFByb2R1Y3RDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5jb25uZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFByb2R1Y3QkOiBPYnNlcnZhYmxlPFxuICAgIGFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzIHwgYWN0aW9ucy5Mb2FkUHJvZHVjdEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoYWN0aW9ucy5MT0FEX1BST0RVQ1QpLFxuICAgIG1hcCgoYWN0aW9uOiBhY3Rpb25zLkxvYWRQcm9kdWN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZ3JvdXBCeShwcm9kdWN0Q29kZSA9PiBwcm9kdWN0Q29kZSksXG4gICAgbWVyZ2VNYXAoZ3JvdXAgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwcm9kdWN0Q29kZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdENvbm5lY3Rvci5nZXQocHJvZHVjdENvZGUpLnBpcGUoXG4gICAgICAgICAgICBtYXAocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgYWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3MocHJvZHVjdCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgb2YobmV3IGFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsKHByb2R1Y3RDb2RlLCBlcnJvcikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHByb2R1Y3RDb25uZWN0b3I6IFByb2R1Y3RDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19