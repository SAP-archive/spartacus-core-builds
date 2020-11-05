import { Injectable } from '@angular/core';
import { SiteAdapter } from './site.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./site.adapter";
export class SiteConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    getLanguages() {
        return this.adapter.loadLanguages();
    }
    getCurrencies() {
        return this.adapter.loadCurrencies();
    }
    getCountries(type) {
        return this.adapter.loadCountries(type);
    }
    getRegions(countryIsoCode) {
        return this.adapter.loadRegions(countryIsoCode);
    }
    getBaseSite(siteUid) {
        return this.adapter.loadBaseSite(siteUid);
    }
    getBaseSites() {
        return this.adapter.loadBaseSites();
    }
}
SiteConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function SiteConnector_Factory() { return new SiteConnector(i0.ɵɵinject(i1.SiteAdapter)); }, token: SiteConnector, providedIn: "root" });
SiteConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
SiteConnector.ctorParameters = () => [
    { type: SiteAdapter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9zaXRlLWNvbnRleHQvY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSzdDLE1BQU0sT0FBTyxhQUFhO0lBQ3hCLFlBQXNCLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7SUFBRyxDQUFDO0lBRTlDLFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUVELGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELFlBQVksQ0FBQyxJQUFrQjtRQUM3QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxVQUFVLENBQUMsY0FBc0I7UUFDL0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQWdCO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdEMsQ0FBQzs7OztZQTVCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDb3VudHJ5LCBDb3VudHJ5VHlwZSwgUmVnaW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlU2l0ZSwgQ3VycmVuY3ksIExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQWRhcHRlciB9IGZyb20gJy4vc2l0ZS5hZGFwdGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogU2l0ZUFkYXB0ZXIpIHt9XG5cbiAgZ2V0TGFuZ3VhZ2VzKCk6IE9ic2VydmFibGU8TGFuZ3VhZ2VbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZExhbmd1YWdlcygpO1xuICB9XG5cbiAgZ2V0Q3VycmVuY2llcygpOiBPYnNlcnZhYmxlPEN1cnJlbmN5W10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRDdXJyZW5jaWVzKCk7XG4gIH1cblxuICBnZXRDb3VudHJpZXModHlwZT86IENvdW50cnlUeXBlKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRDb3VudHJpZXModHlwZSk7XG4gIH1cblxuICBnZXRSZWdpb25zKGNvdW50cnlJc29Db2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlZ2lvbltdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkUmVnaW9ucyhjb3VudHJ5SXNvQ29kZSk7XG4gIH1cblxuICBnZXRCYXNlU2l0ZShzaXRlVWlkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxCYXNlU2l0ZT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEJhc2VTaXRlKHNpdGVVaWQpO1xuICB9XG5cbiAgZ2V0QmFzZVNpdGVzKCk6IE9ic2VydmFibGU8QmFzZVNpdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEJhc2VTaXRlcygpO1xuICB9XG59XG4iXX0=