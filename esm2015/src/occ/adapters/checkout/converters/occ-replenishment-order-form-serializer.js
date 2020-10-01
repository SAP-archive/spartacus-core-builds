import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class OccReplenishmentOrderFormSerializer {
    constructor() { }
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
     * Converts the date string to the Standard ISO 8601 format
     */
    convertDate(date) {
        const dateTime = '00:00:00';
        return new Date(date).toISOString().split('T')[0] + 'T' + dateTime + 'Z';
    }
}
OccReplenishmentOrderFormSerializer.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccReplenishmentOrderFormSerializer_Factory() { return new OccReplenishmentOrderFormSerializer(); }, token: OccReplenishmentOrderFormSerializer, providedIn: "root" });
OccReplenishmentOrderFormSerializer.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OccReplenishmentOrderFormSerializer.ctorParameters = () => [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXJlcGxlbmlzaG1lbnQtb3JkZXItZm9ybS1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvb2NjL2FkYXB0ZXJzL2NoZWNrb3V0L2NvbnZlcnRlcnMvb2NjLXJlcGxlbmlzaG1lbnQtb3JkZXItZm9ybS1zZXJpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBTTNDLE1BQU0sT0FBTyxtQ0FBbUM7SUFHOUMsZ0JBQWUsQ0FBQztJQUVoQixPQUFPLENBQ0wsTUFBcUMsRUFDckMsTUFBa0M7UUFFbEMsSUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3hCLE1BQU0scUJBQVMsTUFBYyxDQUFFLENBQUM7U0FDakM7UUFFRCxJQUFJLE1BQU0sQ0FBQyxzQkFBc0IsRUFBRTtZQUNqQyxNQUFNLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FDOUMsTUFBTSxDQUFDLHNCQUFzQixDQUM5QixDQUFDO1NBQ0g7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSyxXQUFXLENBQUMsSUFBWTtRQUM5QixNQUFNLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDNUIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLFFBQVEsR0FBRyxHQUFHLENBQUM7SUFDM0UsQ0FBQzs7OztZQTdCRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3JlcGxlbmlzaG1lbnQtb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIE9jY1JlcGxlbmlzaG1lbnRPcmRlckZvcm1TZXJpYWxpemVyXG4gIGltcGxlbWVudHNcbiAgICBDb252ZXJ0ZXI8T2NjLlNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0sIFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0+IHtcbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIGNvbnZlcnQoXG4gICAgc291cmNlOiBPY2MuU2NoZWR1bGVSZXBsZW5pc2htZW50Rm9ybSxcbiAgICB0YXJnZXQ/OiBTY2hlZHVsZVJlcGxlbmlzaG1lbnRGb3JtXG4gICk6IFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0ge1xuICAgIGlmICh0YXJnZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0ID0geyAuLi4oc291cmNlIGFzIGFueSkgfTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLnJlcGxlbmlzaG1lbnRTdGFydERhdGUpIHtcbiAgICAgIHRhcmdldC5yZXBsZW5pc2htZW50U3RhcnREYXRlID0gdGhpcy5jb252ZXJ0RGF0ZShcbiAgICAgICAgc291cmNlLnJlcGxlbmlzaG1lbnRTdGFydERhdGVcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyB0aGUgZGF0ZSBzdHJpbmcgdG8gdGhlIFN0YW5kYXJkIElTTyA4NjAxIGZvcm1hdFxuICAgKi9cbiAgcHJpdmF0ZSBjb252ZXJ0RGF0ZShkYXRlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGRhdGVUaW1lID0gJzAwOjAwOjAwJztcbiAgICByZXR1cm4gbmV3IERhdGUoZGF0ZSkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdICsgJ1QnICsgZGF0ZVRpbWUgKyAnWic7XG4gIH1cbn1cbiJdfQ==