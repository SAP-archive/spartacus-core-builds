/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
export class OccCartNormalizer {
    /**
     * @param {?} converter
     */
    constructor(converter) {
        this.converter = converter;
    }
    /**
     * @param {?} source
     * @param {?=} target
     * @return {?}
     */
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, ((/** @type {?} */ (source))));
        }
        if (source && source.entries) {
            target.entries = source.entries.map((/**
             * @param {?} entry
             * @return {?}
             */
            entry => (Object.assign({}, entry, { product: this.converter.convert(entry.product, PRODUCT_NORMALIZER) }))));
        }
        this.removeDuplicatePromotions(source, target);
        return target;
    }
    /**
     * Remove all duplicate promotions
     * @private
     * @param {?} source
     * @param {?} target
     * @return {?}
     */
    removeDuplicatePromotions(source, target) {
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
    }
    /**
     * @private
     * @param {?} itemList
     * @return {?}
     */
    removeDuplicateItems(itemList) {
        return itemList.filter((/**
         * @param {?} p
         * @param {?} i
         * @param {?} a
         * @return {?}
         */
        (p, i, a) => {
            /** @type {?} */
            const b = a.map((/**
             * @param {?} el
             * @return {?}
             */
            el => JSON.stringify(el)));
            return i === b.indexOf(JSON.stringify(p));
        }));
    }
}
OccCartNormalizer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
OccCartNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
/** @nocollapse */ OccCartNormalizer.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function OccCartNormalizer_Factory() { return new OccCartNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccCartNormalizer, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccCartNormalizer.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9jb252ZXJ0ZXJzL29jYy1jYXJ0LW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUVMLGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDOzs7QUFJNUMsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUM1QixZQUFvQixTQUEyQjtRQUEzQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUFHLENBQUM7Ozs7OztJQUVuRCxPQUFPLENBQUMsTUFBZ0IsRUFBRSxNQUFhO1FBQ3JDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHFCQUFRLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUM1QixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRzs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsbUJBQ3hDLEtBQUssSUFDUixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUNsRSxFQUFDLENBQUM7U0FDTDtRQUVELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0MsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7SUFLTyx5QkFBeUIsQ0FBQyxNQUFXLEVBQUUsTUFBWTtRQUN6RCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsd0JBQXdCLEVBQUU7WUFDN0MsTUFBTSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDekQsTUFBTSxDQUFDLHdCQUF3QixDQUNoQyxDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsMEJBQTBCLEVBQUU7WUFDL0MsTUFBTSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDM0QsTUFBTSxDQUFDLDBCQUEwQixDQUNsQyxDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsc0JBQXNCLEVBQUU7WUFDM0MsTUFBTSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDdkQsTUFBTSxDQUFDLHNCQUFzQixDQUM5QixDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsd0JBQXdCLEVBQUU7WUFDN0MsTUFBTSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDekQsTUFBTSxDQUFDLHdCQUF3QixDQUNoQyxDQUFDO1NBQ0g7SUFDSCxDQUFDOzs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxRQUFlO1FBQzFDLE9BQU8sUUFBUSxDQUFDLE1BQU07Ozs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQzNCLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRzs7OztZQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFBQztZQUN6QyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQXRERixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O1lBSmhDLGdCQUFnQjs7Ozs7Ozs7SUFNSixzQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7XG4gIENvbnZlcnRlcixcbiAgQ29udmVydGVyU2VydmljZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY0NhcnROb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5DYXJ0LCBDYXJ0PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlKSB7fVxuXG4gIGNvbnZlcnQoc291cmNlOiBPY2MuQ2FydCwgdGFyZ2V0PzogQ2FydCk6IENhcnQge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5lbnRyaWVzKSB7XG4gICAgICB0YXJnZXQuZW50cmllcyA9IHNvdXJjZS5lbnRyaWVzLm1hcChlbnRyeSA9PiAoe1xuICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgcHJvZHVjdDogdGhpcy5jb252ZXJ0ZXIuY29udmVydChlbnRyeS5wcm9kdWN0LCBQUk9EVUNUX05PUk1BTElaRVIpLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlRHVwbGljYXRlUHJvbW90aW9ucyhzb3VyY2UsIHRhcmdldCk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGR1cGxpY2F0ZSBwcm9tb3Rpb25zXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZUR1cGxpY2F0ZVByb21vdGlvbnMoc291cmNlOiBhbnksIHRhcmdldDogQ2FydCk6IHZvaWQge1xuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLnBvdGVudGlhbE9yZGVyUHJvbW90aW9ucykge1xuICAgICAgdGFyZ2V0LnBvdGVudGlhbE9yZGVyUHJvbW90aW9ucyA9IHRoaXMucmVtb3ZlRHVwbGljYXRlSXRlbXMoXG4gICAgICAgIHNvdXJjZS5wb3RlbnRpYWxPcmRlclByb21vdGlvbnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMpIHtcbiAgICAgIHRhcmdldC5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucyA9IHRoaXMucmVtb3ZlRHVwbGljYXRlSXRlbXMoXG4gICAgICAgIHNvdXJjZS5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5hcHBsaWVkT3JkZXJQcm9tb3Rpb25zKSB7XG4gICAgICB0YXJnZXQuYXBwbGllZE9yZGVyUHJvbW90aW9ucyA9IHRoaXMucmVtb3ZlRHVwbGljYXRlSXRlbXMoXG4gICAgICAgIHNvdXJjZS5hcHBsaWVkT3JkZXJQcm9tb3Rpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucykge1xuICAgICAgdGFyZ2V0LmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyA9IHRoaXMucmVtb3ZlRHVwbGljYXRlSXRlbXMoXG4gICAgICAgIHNvdXJjZS5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnNcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVEdXBsaWNhdGVJdGVtcyhpdGVtTGlzdDogYW55W10pOiBhbnlbXSB7XG4gICAgcmV0dXJuIGl0ZW1MaXN0LmZpbHRlcigocCwgaSwgYSkgPT4ge1xuICAgICAgY29uc3QgYiA9IGEubWFwKGVsID0+IEpTT04uc3RyaW5naWZ5KGVsKSk7XG4gICAgICByZXR1cm4gaSA9PT0gYi5pbmRleE9mKEpTT04uc3RyaW5naWZ5KHApKTtcbiAgICB9KTtcbiAgfVxufVxuIl19