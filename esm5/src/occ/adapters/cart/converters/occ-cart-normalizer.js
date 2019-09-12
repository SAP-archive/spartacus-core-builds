/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { ConverterService, } from '../../../../util/converter.service';
var OccCartNormalizer = /** @class */ (function () {
    function OccCartNormalizer(converter) {
        this.converter = converter;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    OccCartNormalizer.prototype.convert = /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    function (source, target) {
        var _this = this;
        if (target === undefined) {
            target = tslib_1.__assign({}, ((/** @type {?} */ (source))));
        }
        if (source && source.entries) {
            target.entries = source.entries.map((/**
             * @param {?} entry
             * @return {?}
             */
            function (entry) { return (tslib_1.__assign({}, entry, { product: _this.converter.convert(entry.product, PRODUCT_NORMALIZER) })); }));
        }
        this.removeDuplicatePromotions(source, target);
        return target;
    };
    /**
     * Remove all duplicate promotions
     */
    /**
     * Remove all duplicate promotions
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    OccCartNormalizer.prototype.removeDuplicatePromotions = /**
     * Remove all duplicate promotions
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    function (source, target) {
        if (source && source.potentialOrderPromotions) {
            target.potentialOrderPromotions = this.removeDuplicateItems(source.potentialOrderPromotions);
        }
        if (source && source.potentialProductPromotions) {
            target.potentialProductPromotions = this.removeDuplicateItems(source.potentialProductPromotions);
        }
        if (source && source.appliedOrderPromotions) {
            target.appliedOrderPromotions = this.removeDuplicateItems(source.appliedOrderPromotions);
        }
        if (source && source.appliedProductPromotions) {
            target.appliedProductPromotions = this.removeDuplicateItems(source.appliedProductPromotions);
        }
    };
    /**
     * @private
     * @param {?} itemList
     * @return {?}
     */
    OccCartNormalizer.prototype.removeDuplicateItems = /**
     * @private
     * @param {?} itemList
     * @return {?}
     */
    function (itemList) {
        return itemList.filter((/**
         * @param {?} p
         * @param {?} i
         * @param {?} a
         * @return {?}
         */
        function (p, i, a) {
            /** @type {?} */
            var b = a.map((/**
             * @param {?} el
             * @return {?}
             */
            function (el) { return JSON.stringify(el); }));
            return i === b.indexOf(JSON.stringify(p));
        }));
    };
    OccCartNormalizer.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccCartNormalizer.ctorParameters = function () { return [
        { type: ConverterService }
    ]; };
    return OccCartNormalizer;
}());
export { OccCartNormalizer };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccCartNormalizer.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9jb252ZXJ0ZXJzL29jYy1jYXJ0LW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZGLE9BQU8sRUFFTCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQztBQUc1QztJQUVFLDJCQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUVuRCxtQ0FBTzs7Ozs7SUFBUCxVQUFRLE1BQWdCLEVBQUUsTUFBYTtRQUF2QyxpQkFjQztRQWJDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHdCQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUM1QixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsc0JBQ3hDLEtBQUssSUFDUixPQUFPLEVBQUUsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUNsRSxFQUgyQyxDQUczQyxFQUFDLENBQUM7U0FDTDtRQUVELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0MsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHOzs7Ozs7OztJQUNLLHFEQUF5Qjs7Ozs7OztJQUFqQyxVQUFrQyxNQUFXLEVBQUUsTUFBWTtRQUN6RCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsd0JBQXdCLEVBQUU7WUFDN0MsTUFBTSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDekQsTUFBTSxDQUFDLHdCQUF3QixDQUNoQyxDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsMEJBQTBCLEVBQUU7WUFDL0MsTUFBTSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDM0QsTUFBTSxDQUFDLDBCQUEwQixDQUNsQyxDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsc0JBQXNCLEVBQUU7WUFDM0MsTUFBTSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDdkQsTUFBTSxDQUFDLHNCQUFzQixDQUM5QixDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsd0JBQXdCLEVBQUU7WUFDN0MsTUFBTSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDekQsTUFBTSxDQUFDLHdCQUF3QixDQUNoQyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7SUFFTyxnREFBb0I7Ozs7O0lBQTVCLFVBQTZCLFFBQWU7UUFDMUMsT0FBTyxRQUFRLENBQUMsTUFBTTs7Ozs7O1FBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7O2dCQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLEVBQUUsSUFBSSxPQUFBLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQWxCLENBQWtCLEVBQUM7WUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOztnQkF0REYsVUFBVTs7OztnQkFKVCxnQkFBZ0I7O0lBMkRsQix3QkFBQztDQUFBLEFBdkRELElBdURDO1NBdERZLGlCQUFpQjs7Ozs7O0lBQ2hCLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDYXJ0Tm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuQ2FydCwgQ2FydD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KHNvdXJjZTogT2NjLkNhcnQsIHRhcmdldD86IENhcnQpOiBDYXJ0IHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UuZW50cmllcykge1xuICAgICAgdGFyZ2V0LmVudHJpZXMgPSBzb3VyY2UuZW50cmllcy5tYXAoZW50cnkgPT4gKHtcbiAgICAgICAgLi4uZW50cnksXG4gICAgICAgIHByb2R1Y3Q6IHRoaXMuY29udmVydGVyLmNvbnZlcnQoZW50cnkucHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUR1cGxpY2F0ZVByb21vdGlvbnMoc291cmNlLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBkdXBsaWNhdGUgcHJvbW90aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSByZW1vdmVEdXBsaWNhdGVQcm9tb3Rpb25zKHNvdXJjZTogYW55LCB0YXJnZXQ6IENhcnQpOiB2b2lkIHtcbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMpIHtcbiAgICAgIHRhcmdldC5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UucG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zKSB7XG4gICAgICB0YXJnZXQucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UuYXBwbGllZE9yZGVyUHJvbW90aW9ucykge1xuICAgICAgdGFyZ2V0LmFwcGxpZWRPcmRlclByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UuYXBwbGllZE9yZGVyUHJvbW90aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMpIHtcbiAgICAgIHRhcmdldC5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRHVwbGljYXRlSXRlbXMoaXRlbUxpc3Q6IGFueVtdKTogYW55W10ge1xuICAgIHJldHVybiBpdGVtTGlzdC5maWx0ZXIoKHAsIGksIGEpID0+IHtcbiAgICAgIGNvbnN0IGIgPSBhLm1hcChlbCA9PiBKU09OLnN0cmluZ2lmeShlbCkpO1xuICAgICAgcmV0dXJuIGkgPT09IGIuaW5kZXhPZihKU09OLnN0cmluZ2lmeShwKSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==