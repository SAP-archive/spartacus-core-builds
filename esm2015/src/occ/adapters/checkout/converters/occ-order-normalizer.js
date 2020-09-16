import { Injectable } from '@angular/core';
import { ConverterService, } from '../../../../util/converter.service';
import { PRODUCT_NORMALIZER } from '../../../../product/connectors/product/converters';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/converter.service";
export class OccOrderNormalizer {
    constructor(converter) {
        this.converter = converter;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source.entries) {
            target.entries = source.entries.map((entry) => this.convertOrderEntry(entry));
        }
        if (source.consignments) {
            target.consignments = source.consignments.map((consignment) => (Object.assign(Object.assign({}, consignment), { entries: consignment.entries.map((entry) => (Object.assign(Object.assign({}, entry), { orderEntry: this.convertOrderEntry(entry.orderEntry) }))) })));
        }
        if (source.unconsignedEntries) {
            target.unconsignedEntries = source.unconsignedEntries.map((entry) => this.convertOrderEntry(entry));
        }
        return target;
    }
    convertOrderEntry(source) {
        return Object.assign(Object.assign({}, source), { product: this.converter.convert(source.product, PRODUCT_NORMALIZER) });
    }
}
OccOrderNormalizer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccOrderNormalizer_Factory() { return new OccOrderNormalizer(i0.ɵɵinject(i1.ConverterService)); }, token: OccOrderNormalizer, providedIn: "root" });
OccOrderNormalizer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OccOrderNormalizer.ctorParameters = () => [
    { type: ConverterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLW9yZGVyLW5vcm1hbGl6ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvY2hlY2tvdXQvY29udmVydGVycy9vY2Mtb3JkZXItbm9ybWFsaXplci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFFTCxnQkFBZ0IsR0FDakIsTUFBTSxvQ0FBb0MsQ0FBQztBQUU1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtREFBbUQsQ0FBQzs7O0FBR3ZGLE1BQU0sT0FBTyxrQkFBa0I7SUFDN0IsWUFBb0IsU0FBMkI7UUFBM0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFBRyxDQUFDO0lBRW5ELE9BQU8sQ0FBQyxNQUFpQixFQUFFLE1BQWM7UUFDdkMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0scUJBQVMsTUFBYyxDQUFFLENBQUM7U0FDakM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsTUFBTSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQzVDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLE1BQU0sQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLGlDQUMxRCxXQUFXLEtBQ2QsT0FBTyxFQUFFLFdBQVcsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxpQ0FDdkMsS0FBSyxLQUNSLFVBQVUsRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxJQUNwRCxDQUFDLElBQ0gsQ0FBQyxDQUFDO1NBQ0w7UUFFRCxJQUFJLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRTtZQUM3QixNQUFNLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ2xFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FDOUIsQ0FBQztTQUNIO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVPLGlCQUFpQixDQUFDLE1BQXNCO1FBQzlDLHVDQUNLLE1BQU0sS0FDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxJQUNuRTtJQUNKLENBQUM7Ozs7WUF2Q0YsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7O1lBTGhDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQge1xuICBDb252ZXJ0ZXIsXG4gIENvbnZlcnRlclNlcnZpY2UsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT3JkZXIsIE9yZGVyRW50cnkgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBQUk9EVUNUX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvcHJvZHVjdC9jb252ZXJ0ZXJzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NPcmRlck5vcm1hbGl6ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLk9yZGVyLCBPcmRlcj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSkge31cblxuICBjb252ZXJ0KHNvdXJjZTogT2NjLk9yZGVyLCB0YXJnZXQ/OiBPcmRlcik6IE9yZGVyIHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5lbnRyaWVzKSB7XG4gICAgICB0YXJnZXQuZW50cmllcyA9IHNvdXJjZS5lbnRyaWVzLm1hcCgoZW50cnkpID0+XG4gICAgICAgIHRoaXMuY29udmVydE9yZGVyRW50cnkoZW50cnkpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UuY29uc2lnbm1lbnRzKSB7XG4gICAgICB0YXJnZXQuY29uc2lnbm1lbnRzID0gc291cmNlLmNvbnNpZ25tZW50cy5tYXAoKGNvbnNpZ25tZW50KSA9PiAoe1xuICAgICAgICAuLi5jb25zaWdubWVudCxcbiAgICAgICAgZW50cmllczogY29uc2lnbm1lbnQuZW50cmllcy5tYXAoKGVudHJ5KSA9PiAoe1xuICAgICAgICAgIC4uLmVudHJ5LFxuICAgICAgICAgIG9yZGVyRW50cnk6IHRoaXMuY29udmVydE9yZGVyRW50cnkoZW50cnkub3JkZXJFbnRyeSksXG4gICAgICAgIH0pKSxcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLnVuY29uc2lnbmVkRW50cmllcykge1xuICAgICAgdGFyZ2V0LnVuY29uc2lnbmVkRW50cmllcyA9IHNvdXJjZS51bmNvbnNpZ25lZEVudHJpZXMubWFwKChlbnRyeSkgPT5cbiAgICAgICAgdGhpcy5jb252ZXJ0T3JkZXJFbnRyeShlbnRyeSlcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIHByaXZhdGUgY29udmVydE9yZGVyRW50cnkoc291cmNlOiBPY2MuT3JkZXJFbnRyeSk6IE9yZGVyRW50cnkge1xuICAgIHJldHVybiB7XG4gICAgICAuLi5zb3VyY2UsXG4gICAgICBwcm9kdWN0OiB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHNvdXJjZS5wcm9kdWN0LCBQUk9EVUNUX05PUk1BTElaRVIpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==