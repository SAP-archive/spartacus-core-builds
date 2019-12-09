/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { ConverterService, } from '../../../../util/converter.service';
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
    { type: Injectable }
];
/** @nocollapse */
OccCartNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccCartNormalizer.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9jb252ZXJ0ZXJzL29jYy1jYXJ0LW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUVMLGdCQUFnQixHQUNqQixNQUFNLG9DQUFvQyxDQUFDO0FBSTVDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7SUFDNUIsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDOzs7Ozs7SUFFbkQsT0FBTyxDQUFDLE1BQWdCLEVBQUUsTUFBYTtRQUNyQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxxQkFBUSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUUsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDNUIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLG1CQUN4QyxLQUFLLElBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFDbEUsRUFBQyxDQUFDO1NBQ0w7UUFFRCxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7O0lBS08seUJBQXlCLENBQUMsTUFBVyxFQUFFLE1BQVk7UUFDekQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLHdCQUF3QixFQUFFO1lBQzdDLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQ3pELE1BQU0sQ0FBQyx3QkFBd0IsQ0FDaEMsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLDBCQUEwQixFQUFFO1lBQy9DLE1BQU0sQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQzNELE1BQU0sQ0FBQywwQkFBMEIsQ0FDbEMsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLHNCQUFzQixFQUFFO1lBQzNDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQ3ZELE1BQU0sQ0FBQyxzQkFBc0IsQ0FDOUIsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLHdCQUF3QixFQUFFO1lBQzdDLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQ3pELE1BQU0sQ0FBQyx3QkFBd0IsQ0FDaEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsUUFBZTtRQUMxQyxPQUFPLFFBQVEsQ0FBQyxNQUFNOzs7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O2tCQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUc7Ozs7WUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUM7WUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7WUF0REYsVUFBVTs7OztZQUpULGdCQUFnQjs7Ozs7OztJQU1KLHNDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NDYXJ0Tm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuQ2FydCwgQ2FydD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KHNvdXJjZTogT2NjLkNhcnQsIHRhcmdldD86IENhcnQpOiBDYXJ0IHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UuZW50cmllcykge1xuICAgICAgdGFyZ2V0LmVudHJpZXMgPSBzb3VyY2UuZW50cmllcy5tYXAoZW50cnkgPT4gKHtcbiAgICAgICAgLi4uZW50cnksXG4gICAgICAgIHByb2R1Y3Q6IHRoaXMuY29udmVydGVyLmNvbnZlcnQoZW50cnkucHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUR1cGxpY2F0ZVByb21vdGlvbnMoc291cmNlLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBkdXBsaWNhdGUgcHJvbW90aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSByZW1vdmVEdXBsaWNhdGVQcm9tb3Rpb25zKHNvdXJjZTogYW55LCB0YXJnZXQ6IENhcnQpOiB2b2lkIHtcbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMpIHtcbiAgICAgIHRhcmdldC5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UucG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zKSB7XG4gICAgICB0YXJnZXQucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UuYXBwbGllZE9yZGVyUHJvbW90aW9ucykge1xuICAgICAgdGFyZ2V0LmFwcGxpZWRPcmRlclByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UuYXBwbGllZE9yZGVyUHJvbW90aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMpIHtcbiAgICAgIHRhcmdldC5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRHVwbGljYXRlSXRlbXMoaXRlbUxpc3Q6IGFueVtdKTogYW55W10ge1xuICAgIHJldHVybiBpdGVtTGlzdC5maWx0ZXIoKHAsIGksIGEpID0+IHtcbiAgICAgIGNvbnN0IGIgPSBhLm1hcChlbCA9PiBKU09OLnN0cmluZ2lmeShlbCkpO1xuICAgICAgcmV0dXJuIGkgPT09IGIuaW5kZXhPZihKU09OLnN0cmluZ2lmeShwKSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==