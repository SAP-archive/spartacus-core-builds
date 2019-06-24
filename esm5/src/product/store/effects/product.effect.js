/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, groupBy, map, mergeMap, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { ProductConnector } from '../../connectors/product/product.connector';
import * as actions from '../actions/index';
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
                    return of(new actions.LoadProductFail(productCode, makeErrorSerializable(error)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEtBQUssT0FBTyxNQUFNLGtCQUFrQixDQUFDO0FBRTVDO0lBOEJFLHdCQUNVLFFBQWlCLEVBQ2pCLGdCQUFrQztRQUY1QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQTdCNUMsaUJBQVksR0FFUixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFDNUIsR0FBRzs7OztRQUFDLFVBQUMsTUFBMkIsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ3BELE9BQU87Ozs7UUFBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLFdBQVcsRUFBWCxDQUFXLEVBQUMsRUFDbkMsUUFBUTs7OztRQUFDLFVBQUEsS0FBSztZQUNaLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FDUixTQUFTOzs7O1lBQUMsVUFBQSxXQUFXO2dCQUNuQixPQUFPLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUNoRCxHQUFHOzs7O2dCQUFDLFVBQUEsT0FBTztvQkFDVCxPQUFPLElBQUksT0FBTyxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqRCxDQUFDLEVBQUMsRUFDRixVQUFVOzs7O2dCQUFDLFVBQUEsS0FBSztvQkFDZCxPQUFBLEVBQUUsQ0FDQSxJQUFJLE9BQU8sQ0FBQyxlQUFlLENBQ3pCLFdBQVcsRUFDWCxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtnQkFMRCxDQUtDLEVBQ0YsQ0FDRixDQUFDO1lBQ0osQ0FBQyxFQUFDLENBQ0g7UUFoQkQsQ0FnQkMsRUFDRixDQUNGLENBQUM7SUFLQyxDQUFDOztnQkFqQ0wsVUFBVTs7OztnQkFQRixPQUFPO2dCQUlQLGdCQUFnQjs7SUFNdkI7UUFEQyxNQUFNLEVBQUU7MENBQ0ssVUFBVTt3REF5QnRCO0lBTUoscUJBQUM7Q0FBQSxBQWxDRCxJQWtDQztTQWpDWSxjQUFjOzs7SUFDekIsc0NBMEJFOzs7OztJQUdBLGtDQUF5Qjs7Ozs7SUFDekIsMENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBncm91cEJ5LCBtYXAsIG1lcmdlTWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgUHJvZHVjdENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcHJvZHVjdC9wcm9kdWN0LmNvbm5lY3Rvcic7XG5pbXBvcnQgKiBhcyBhY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJvZHVjdEVmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFByb2R1Y3QkOiBPYnNlcnZhYmxlPFxuICAgIGFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzIHwgYWN0aW9ucy5Mb2FkUHJvZHVjdEZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoYWN0aW9ucy5MT0FEX1BST0RVQ1QpLFxuICAgIG1hcCgoYWN0aW9uOiBhY3Rpb25zLkxvYWRQcm9kdWN0KSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgZ3JvdXBCeShwcm9kdWN0Q29kZSA9PiBwcm9kdWN0Q29kZSksXG4gICAgbWVyZ2VNYXAoZ3JvdXAgPT5cbiAgICAgIGdyb3VwLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChwcm9kdWN0Q29kZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucHJvZHVjdENvbm5lY3Rvci5nZXQocHJvZHVjdENvZGUpLnBpcGUoXG4gICAgICAgICAgICBtYXAocHJvZHVjdCA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgYWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3MocHJvZHVjdCk7XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgICAgbmV3IGFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsKFxuICAgICAgICAgICAgICAgICAgcHJvZHVjdENvZGUsXG4gICAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHByb2R1Y3RDb25uZWN0b3I6IFByb2R1Y3RDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19