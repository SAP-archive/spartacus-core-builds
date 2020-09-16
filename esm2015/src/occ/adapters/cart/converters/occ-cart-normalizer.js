import { Injectable } from '@angular/core';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import { ConverterService, } from '../../../../util/converter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
export class OccCartNormalizer {
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
}
OccCartNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccCartNormalizer_Factory() { return new OccCartNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccCartNormalizer, providedIn: "root" });
OccCartNormalizer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OccCartNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtbm9ybWFsaXplci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9jYXJ0L2NvbnZlcnRlcnMvb2NjLWNhcnQtbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQ3ZGLE9BQU8sRUFFTCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQzs7O0FBSTVDLE1BQU0sT0FBTyxpQkFBaUI7SUFDNUIsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRW5ELE9BQU8sQ0FBQyxNQUFnQixFQUFFLE1BQWE7UUFDckMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0scUJBQVMsTUFBYyxDQUFFLENBQUM7U0FDakM7UUFFRCxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLGlDQUMxQyxLQUFLLEtBQ1IsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUMsSUFDbEUsQ0FBQyxDQUFDO1NBQ0w7UUFFRCxJQUFJLENBQUMseUJBQXlCLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQy9DLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7T0FFRztJQUNLLHlCQUF5QixDQUFDLE1BQVcsRUFBRSxNQUFZO1FBQ3pELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRTtZQUM3QyxNQUFNLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUN6RCxNQUFNLENBQUMsd0JBQXdCLENBQ2hDLENBQUM7U0FDSDtRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQywwQkFBMEIsRUFBRTtZQUMvQyxNQUFNLENBQUMsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUMzRCxNQUFNLENBQUMsMEJBQTBCLENBQ2xDLENBQUM7U0FDSDtRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRTtZQUMzQyxNQUFNLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUN2RCxNQUFNLENBQUMsc0JBQXNCLENBQzlCLENBQUM7U0FDSDtRQUVELElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRTtZQUM3QyxNQUFNLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUN6RCxNQUFNLENBQUMsd0JBQXdCLENBQ2hDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxRQUFlO1FBQzFDLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDakMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztZQXRERixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUFKaEMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgUFJPRFVDVF9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3Byb2R1Y3QvY29udmVydGVycyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NDYXJ0Tm9ybWFsaXplciBpbXBsZW1lbnRzIENvbnZlcnRlcjxPY2MuQ2FydCwgQ2FydD4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KHNvdXJjZTogT2NjLkNhcnQsIHRhcmdldD86IENhcnQpOiBDYXJ0IHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UuZW50cmllcykge1xuICAgICAgdGFyZ2V0LmVudHJpZXMgPSBzb3VyY2UuZW50cmllcy5tYXAoKGVudHJ5KSA9PiAoe1xuICAgICAgICAuLi5lbnRyeSxcbiAgICAgICAgcHJvZHVjdDogdGhpcy5jb252ZXJ0ZXIuY29udmVydChlbnRyeS5wcm9kdWN0LCBQUk9EVUNUX05PUk1BTElaRVIpLFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlRHVwbGljYXRlUHJvbW90aW9ucyhzb3VyY2UsIHRhcmdldCk7XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmUgYWxsIGR1cGxpY2F0ZSBwcm9tb3Rpb25zXG4gICAqL1xuICBwcml2YXRlIHJlbW92ZUR1cGxpY2F0ZVByb21vdGlvbnMoc291cmNlOiBhbnksIHRhcmdldDogQ2FydCk6IHZvaWQge1xuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLnBvdGVudGlhbE9yZGVyUHJvbW90aW9ucykge1xuICAgICAgdGFyZ2V0LnBvdGVudGlhbE9yZGVyUHJvbW90aW9ucyA9IHRoaXMucmVtb3ZlRHVwbGljYXRlSXRlbXMoXG4gICAgICAgIHNvdXJjZS5wb3RlbnRpYWxPcmRlclByb21vdGlvbnNcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZSAmJiBzb3VyY2UucG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnMpIHtcbiAgICAgIHRhcmdldC5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucyA9IHRoaXMucmVtb3ZlRHVwbGljYXRlSXRlbXMoXG4gICAgICAgIHNvdXJjZS5wb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uc1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlICYmIHNvdXJjZS5hcHBsaWVkT3JkZXJQcm9tb3Rpb25zKSB7XG4gICAgICB0YXJnZXQuYXBwbGllZE9yZGVyUHJvbW90aW9ucyA9IHRoaXMucmVtb3ZlRHVwbGljYXRlSXRlbXMoXG4gICAgICAgIHNvdXJjZS5hcHBsaWVkT3JkZXJQcm9tb3Rpb25zXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UgJiYgc291cmNlLmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucykge1xuICAgICAgdGFyZ2V0LmFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucyA9IHRoaXMucmVtb3ZlRHVwbGljYXRlSXRlbXMoXG4gICAgICAgIHNvdXJjZS5hcHBsaWVkUHJvZHVjdFByb21vdGlvbnNcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVEdXBsaWNhdGVJdGVtcyhpdGVtTGlzdDogYW55W10pOiBhbnlbXSB7XG4gICAgcmV0dXJuIGl0ZW1MaXN0LmZpbHRlcigocCwgaSwgYSkgPT4ge1xuICAgICAgY29uc3QgYiA9IGEubWFwKChlbCkgPT4gSlNPTi5zdHJpbmdpZnkoZWwpKTtcbiAgICAgIHJldHVybiBpID09PSBiLmluZGV4T2YoSlNPTi5zdHJpbmdpZnkocCkpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=