import { Injectable } from '@angular/core';
import { TimeUtils } from '../../../../util/time-utils';
import * as i0 from "@angular/core";
export class OccReplenishmentOrderFormSerializer {
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
        return `${date}T${localTime}:00${TimeUtils.getLocalTimezoneOffset()}`;
    }
}
OccReplenishmentOrderFormSerializer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccReplenishmentOrderFormSerializer_Factory() { return new OccReplenishmentOrderFormSerializer(); }, token: OccReplenishmentOrderFormSerializer, providedIn: "root" });
OccReplenishmentOrderFormSerializer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJlcGxlbmlzaG1lbnQtb3JkZXItZm9ybS1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L2NvbnZlcnRlcnMvb2NjLXJlcGxlbmlzaG1lbnQtb3JkZXItZm9ybS1zZXJpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQU14RCxNQUFNLE9BQU8sbUNBQW1DO0lBRzlDLE9BQU8sQ0FDTCxNQUFxQyxFQUNyQyxNQUFrQztRQUVsQyxJQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7WUFDeEIsTUFBTSxxQkFBUyxNQUFjLENBQUUsQ0FBQztTQUNqQztRQUVELElBQUksTUFBTSxDQUFDLHNCQUFzQixFQUFFO1lBQ2pDLE1BQU0sQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUM5QyxNQUFNLENBQUMsc0JBQXNCLENBQzlCLENBQUM7U0FDSDtRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ssV0FBVyxDQUFDLElBQVk7UUFDOUIsTUFBTSxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLEVBQUU7WUFDbEQsSUFBSSxFQUFFLFNBQVM7WUFDZixNQUFNLEVBQUUsU0FBUztZQUNqQixNQUFNLEVBQUUsS0FBSztTQUNkLENBQUMsQ0FBQztRQUNILE9BQU8sR0FBRyxJQUFJLElBQUksU0FBUyxNQUFNLFNBQVMsQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLENBQUM7SUFDeEUsQ0FBQzs7OztZQWpDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGltZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC90aW1lLXV0aWxzJztcbmltcG9ydCB7IFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0gfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9yZXBsZW5pc2htZW50LW9yZGVyLm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NSZXBsZW5pc2htZW50T3JkZXJGb3JtU2VyaWFsaXplclxuICBpbXBsZW1lbnRzXG4gICAgQ29udmVydGVyPE9jYy5TY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtLCBTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtPiB7XG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSxcbiAgICB0YXJnZXQ/OiBTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtXG4gICk6IFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0ge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLnJlcGxlbmlzaG1lbnRTdGFydERhdGUpIHtcbiAgICAgIHRhcmdldC5yZXBsZW5pc2htZW50U3RhcnREYXRlID0gdGhpcy5jb252ZXJ0RGF0ZShcbiAgICAgICAgc291cmNlLnJlcGxlbmlzaG1lbnRTdGFydERhdGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBjdXJyZW50IHRpbWVzdGFtcCAoaW5jbHVkaW5nIHRpbWV6b25lIG9mZnNldCkgdG8gYSBkYXRlIHN0cmluZyBpbiB0aGUgZm9ybWF0IFlZWVktbW0tZGRcbiAgICogQEV4YW1wbGVcbiAgICogQ29udmVydHMgMjAyMS0xMC0xNSB0byAyMDIxLTEwLTE1VDE1OjM4OjA1LTA1OjAwXG4gICAqL1xuICBwcml2YXRlIGNvbnZlcnREYXRlKGRhdGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbG9jYWxUaW1lID0gbmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoW10sIHtcbiAgICAgIGhvdXI6ICcyLWRpZ2l0JyxcbiAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgaG91cjEyOiBmYWxzZSxcbiAgICB9KTtcbiAgICByZXR1cm4gYCR7ZGF0ZX1UJHtsb2NhbFRpbWV9OjAwJHtUaW1lVXRpbHMuZ2V0TG9jYWxUaW1lem9uZU9mZnNldCgpfWA7XG4gIH1cbn1cbiJdfQ==