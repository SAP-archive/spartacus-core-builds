import { Injectable } from '@angular/core';
import { DateTimePickerFormatterService } from '../../../../util/date-time-picker-formatter.service';
import * as i0 from "@angular/core";
import * as i1 from "../../../../util/date-time-picker-formatter.service";
export class OccReplenishmentOrderFormSerializer {
    constructor(dateTimePickerFormatterService) {
        this.dateTimePickerFormatterService = dateTimePickerFormatterService;
    }
    convert(source, target) {
        if (target === undefined) {
            target = Object.assign({}, source);
        }
        if (source.replenishmentStartDate) {
            target.replenishmentStartDate = this.convertDate(source.replenishmentStartDate);
        }
        return target;
    }
    /**
     * Adds the current timestamp (including timezone offset) to a date string in the format YYYY-mm-dd
     * @Example
     * Converts 2021-10-15 to 2021-10-15T15:38:05-05:00
     */
    convertDate(date) {
        const localTime = new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        });
        const modelDate = `${date}T${localTime}`;
        return this.dateTimePickerFormatterService.toModel(modelDate);
    }
}
OccReplenishmentOrderFormSerializer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccReplenishmentOrderFormSerializer_Factory() { return new OccReplenishmentOrderFormSerializer(i0.ɵɵinject(i1.DateTimePickerFormatterService)); }, token: OccReplenishmentOrderFormSerializer, providedIn: "root" });
OccReplenishmentOrderFormSerializer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OccReplenishmentOrderFormSerializer.ctorParameters = () => [
    { type: DateTimePickerFormatterService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJlcGxlbmlzaG1lbnQtb3JkZXItZm9ybS1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L2NvbnZlcnRlcnMvb2NjLXJlcGxlbmlzaG1lbnQtb3JkZXItZm9ybS1zZXJpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scURBQXFELENBQUM7OztBQUdyRyxNQUFNLE9BQU8sbUNBQW1DO0lBRzlDLFlBQ1ksOEJBQThEO1FBQTlELG1DQUE4QixHQUE5Qiw4QkFBOEIsQ0FBZ0M7SUFDdkUsQ0FBQztJQUVKLE9BQU8sQ0FDTCxNQUFxQyxFQUNyQyxNQUFrQztRQUVsQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxxQkFBUyxNQUFjLENBQUUsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxDQUFDLHNCQUFzQixFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUM5QyxNQUFNLENBQUMsc0JBQXNCLENBQzlCLENBQUM7U0FDSDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssV0FBVyxDQUFDLElBQVk7UUFDOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUU7WUFDbEQsSUFBSSxFQUFFLFNBQVM7WUFDZixNQUFNLEVBQUUsU0FBUztZQUNqQixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQztRQUNILE1BQU0sU0FBUyxHQUFHLEdBQUcsSUFBSSxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7O1lBdENGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQUZ6Qiw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtIH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcmVwbGVuaXNobWVudC1vcmRlci5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBEYXRlVGltZVBpY2tlckZvcm1hdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2RhdGUtdGltZS1waWNrZXItZm9ybWF0dGVyLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY1JlcGxlbmlzaG1lbnRPcmRlckZvcm1TZXJpYWxpemVyXG4gIGltcGxlbWVudHNcbiAgICBDb252ZXJ0ZXI8T2NjLlNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0sIFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0+IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGRhdGVUaW1lUGlja2VyRm9ybWF0dGVyU2VydmljZTogRGF0ZVRpbWVQaWNrZXJGb3JtYXR0ZXJTZXJ2aWNlXG4gICkge31cblxuICBjb252ZXJ0KFxuICAgIHNvdXJjZTogT2NjLlNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0sXG4gICAgdGFyZ2V0PzogU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybVxuICApOiBTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtIHtcbiAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldCA9IHsgLi4uKHNvdXJjZSBhcyBhbnkpIH07XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5yZXBsZW5pc2htZW50U3RhcnREYXRlKSB7XG4gICAgICB0YXJnZXQucmVwbGVuaXNobWVudFN0YXJ0RGF0ZSA9IHRoaXMuY29udmVydERhdGUoXG4gICAgICAgIHNvdXJjZS5yZXBsZW5pc2htZW50U3RhcnREYXRlXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgY3VycmVudCB0aW1lc3RhbXAgKGluY2x1ZGluZyB0aW1lem9uZSBvZmZzZXQpIHRvIGEgZGF0ZSBzdHJpbmcgaW4gdGhlIGZvcm1hdCBZWVlZLW1tLWRkXG4gICAqIEBFeGFtcGxlXG4gICAqIENvbnZlcnRzIDIwMjEtMTAtMTUgdG8gMjAyMS0xMC0xNVQxNTozODowNS0wNTowMFxuICAgKi9cbiAgcHJpdmF0ZSBjb252ZXJ0RGF0ZShkYXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGxvY2FsVGltZSA9IG5ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKFtdLCB7XG4gICAgICBob3VyOiAnMi1kaWdpdCcsXG4gICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgIGhvdXIxMjogZmFsc2UsXG4gICAgfSk7XG4gICAgY29uc3QgbW9kZWxEYXRlID0gYCR7ZGF0ZX1UJHtsb2NhbFRpbWV9YDtcbiAgICByZXR1cm4gdGhpcy5kYXRlVGltZVBpY2tlckZvcm1hdHRlclNlcnZpY2UudG9Nb2RlbChtb2RlbERhdGUpO1xuICB9XG59XG4iXX0=