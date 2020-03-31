import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { Converter, ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
let OccCartNormalizer = class OccCartNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source && source.entries) {
            target.entries = source.entries.map((entry) => (Object.assign(Object.assign({}, entry), { product: this.converter.convert(entry.product, PRODUCT_NORMALIZER) })));
        }
        this.removeDuplicatePromotions(source, target);
        return target;
    }
    /**
     * Remove all duplicate promotions
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
    removeDuplicateItems(itemList) {
        return itemList.filter((p, i, a) => {
            const b = a.map((el) => JSON.stringify(el));
            return i === b.indexOf(JSON.stringify(p));
        });
    }
};
OccCartNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
OccCartNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccCartNormalizer_Factory() { return new OccCartNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccCartNormalizer, providedIn: "root" });
OccCartNormalizer = __decorate([
    Injectable({ providedIn: 'root' })
], OccCartNormalizer);
export { OccCartNormalizer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9jb252ZXJ0ZXJzL29jYy1jYXJ0LW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBSTVDLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQzVCLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUVuRCxPQUFPLENBQUMsTUFBZ0IsRUFBRSxNQUFhO1FBQ3JDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHFCQUFTLE1BQWMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUM1QixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxpQ0FDMUMsS0FBSyxLQUNSLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLElBQ2xFLENBQUMsQ0FBQztTQUNMO1FBRUQsSUFBSSxDQUFDLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUMvQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSyx5QkFBeUIsQ0FBQyxNQUFXLEVBQUUsTUFBWTtRQUN6RCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsd0JBQXdCLEVBQUU7WUFDN0MsTUFBTSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDekQsTUFBTSxDQUFDLHdCQUF3QixDQUNoQyxDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsMEJBQTBCLEVBQUU7WUFDL0MsTUFBTSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDM0QsTUFBTSxDQUFDLDBCQUEwQixDQUNsQyxDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsc0JBQXNCLEVBQUU7WUFDM0MsTUFBTSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDdkQsTUFBTSxDQUFDLHNCQUFzQixDQUM5QixDQUFDO1NBQ0g7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsd0JBQXdCLEVBQUU7WUFDN0MsTUFBTSxDQUFDLHdCQUF3QixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FDekQsTUFBTSxDQUFDLHdCQUF3QixDQUNoQyxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRU8sb0JBQW9CLENBQUMsUUFBZTtRQUMxQyxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBOztZQXJEZ0MsZ0JBQWdCOzs7QUFEcEMsaUJBQWlCO0lBRDdCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixpQkFBaUIsQ0FzRDdCO1NBdERZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IFBST0RVQ1RfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9wcm9kdWN0L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHtcbiAgQ29udmVydGVyLFxuICBDb252ZXJ0ZXJTZXJ2aWNlLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgT2NjQ2FydE5vcm1hbGl6ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLkNhcnQsIENhcnQ+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2UpIHt9XG5cbiAgY29udmVydChzb3VyY2U6IE9jYy5DYXJ0LCB0YXJnZXQ/OiBDYXJ0KTogQ2FydCB7XG4gICAgaWYgKHRhcmdldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0YXJnZXQgPSB7IC4uLihzb3VyY2UgYXMgYW55KSB9O1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLmVudHJpZXMpIHtcbiAgICAgIHRhcmdldC5lbnRyaWVzID0gc291cmNlLmVudHJpZXMubWFwKChlbnRyeSkgPT4gKHtcbiAgICAgICAgLi4uZW50cnksXG4gICAgICAgIHByb2R1Y3Q6IHRoaXMuY29udmVydGVyLmNvbnZlcnQoZW50cnkucHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUR1cGxpY2F0ZVByb21vdGlvbnMoc291cmNlLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBkdXBsaWNhdGUgcHJvbW90aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSByZW1vdmVEdXBsaWNhdGVQcm9tb3Rpb25zKHNvdXJjZTogYW55LCB0YXJnZXQ6IENhcnQpOiB2b2lkIHtcbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMpIHtcbiAgICAgIHRhcmdldC5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UucG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zKSB7XG4gICAgICB0YXJnZXQucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UuYXBwbGllZE9yZGVyUHJvbW90aW9ucykge1xuICAgICAgdGFyZ2V0LmFwcGxpZWRPcmRlclByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UuYXBwbGllZE9yZGVyUHJvbW90aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMpIHtcbiAgICAgIHRhcmdldC5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRHVwbGljYXRlSXRlbXMoaXRlbUxpc3Q6IGFueVtdKTogYW55W10ge1xuICAgIHJldHVybiBpdGVtTGlzdC5maWx0ZXIoKHAsIGksIGEpID0+IHtcbiAgICAgIGNvbnN0IGIgPSBhLm1hcCgoZWwpID0+IEpTT04uc3RyaW5naWZ5KGVsKSk7XG4gICAgICByZXR1cm4gaSA9PT0gYi5pbmRleE9mKEpTT04uc3RyaW5naWZ5KHApKTtcbiAgICB9KTtcbiAgfVxufVxuIl19