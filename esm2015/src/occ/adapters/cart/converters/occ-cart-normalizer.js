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
            target.entries = source.entries.map(entry => (Object.assign(Object.assign({}, entry), { product: this.converter.convert(entry.product, PRODUCT_NORMALIZER) })));
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
            const b = a.map(el => JSON.stringify(el));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY2FydC9jb252ZXJ0ZXJzL29jYy1jYXJ0LW5vcm1hbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDdkYsT0FBTyxFQUNMLFNBQVMsRUFDVCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBSTVDLElBQWEsaUJBQWlCLEdBQTlCLE1BQWEsaUJBQWlCO0lBQzVCLFlBQW9CLFNBQTJCO1FBQTNCLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQUcsQ0FBQztJQUVuRCxPQUFPLENBQUMsTUFBZ0IsRUFBRSxNQUFhO1FBQ3JDLElBQUksTUFBTSxLQUFLLFNBQVMsRUFBRTtZQUN4QixNQUFNLHFCQUFTLE1BQWMsQ0FBRSxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUM1QixNQUFNLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsaUNBQ3hDLEtBQUssS0FDUixPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUNsRSxDQUFDLENBQUM7U0FDTDtRQUVELElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDL0MsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHO0lBQ0sseUJBQXlCLENBQUMsTUFBVyxFQUFFLE1BQVk7UUFDekQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLHdCQUF3QixFQUFFO1lBQzdDLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQ3pELE1BQU0sQ0FBQyx3QkFBd0IsQ0FDaEMsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLDBCQUEwQixFQUFFO1lBQy9DLE1BQU0sQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQzNELE1BQU0sQ0FBQywwQkFBMEIsQ0FDbEMsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLHNCQUFzQixFQUFFO1lBQzNDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQ3ZELE1BQU0sQ0FBQyxzQkFBc0IsQ0FDOUIsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLHdCQUF3QixFQUFFO1lBQzdDLE1BQU0sQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQ3pELE1BQU0sQ0FBQyx3QkFBd0IsQ0FDaEMsQ0FBQztTQUNIO0lBQ0gsQ0FBQztJQUVPLG9CQUFvQixDQUFDLFFBQWU7UUFDMUMsT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztDQUNGLENBQUE7O1lBckRnQyxnQkFBZ0I7OztBQURwQyxpQkFBaUI7SUFEN0IsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO0dBQ3RCLGlCQUFpQixDQXNEN0I7U0F0RFksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NDYXJ0Tm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuQ2FydCwgQ2FydD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KHNvdXJjZTogT2NjLkNhcnQsIHRhcmdldD86IENhcnQpOiBDYXJ0IHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UuZW50cmllcykge1xuICAgICAgdGFyZ2V0LmVudHJpZXMgPSBzb3VyY2UuZW50cmllcy5tYXAoZW50cnkgPT4gKHtcbiAgICAgICAgLi4uZW50cnksXG4gICAgICAgIHByb2R1Y3Q6IHRoaXMuY29udmVydGVyLmNvbnZlcnQoZW50cnkucHJvZHVjdCwgUFJPRFVDVF9OT1JNQUxJWkVSKSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUR1cGxpY2F0ZVByb21vdGlvbnMoc291cmNlLCB0YXJnZXQpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlIGFsbCBkdXBsaWNhdGUgcHJvbW90aW9uc1xuICAgKi9cbiAgcHJpdmF0ZSByZW1vdmVEdXBsaWNhdGVQcm9tb3Rpb25zKHNvdXJjZTogYW55LCB0YXJnZXQ6IENhcnQpOiB2b2lkIHtcbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMpIHtcbiAgICAgIHRhcmdldC5wb3RlbnRpYWxPcmRlclByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UucG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLnBvdGVudGlhbFByb2R1Y3RQcm9tb3Rpb25zKSB7XG4gICAgICB0YXJnZXQucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UuYXBwbGllZE9yZGVyUHJvbW90aW9ucykge1xuICAgICAgdGFyZ2V0LmFwcGxpZWRPcmRlclByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UuYXBwbGllZE9yZGVyUHJvbW90aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMpIHtcbiAgICAgIHRhcmdldC5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnMgPSB0aGlzLnJlbW92ZUR1cGxpY2F0ZUl0ZW1zKFxuICAgICAgICBzb3VyY2UuYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRHVwbGljYXRlSXRlbXMoaXRlbUxpc3Q6IGFueVtdKTogYW55W10ge1xuICAgIHJldHVybiBpdGVtTGlzdC5maWx0ZXIoKHAsIGksIGEpID0+IHtcbiAgICAgIGNvbnN0IGIgPSBhLm1hcChlbCA9PiBKU09OLnN0cmluZ2lmeShlbCkpO1xuICAgICAgcmV0dXJuIGkgPT09IGIuaW5kZXhPZihKU09OLnN0cmluZ2lmeShwKSk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==