import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SiteAdapter } from './site.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./site.adapter";
let SiteConnector = class SiteConnector {
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
    getBaseSite() {
        return this.adapter.loadBaseSite();
    }
};
SiteConnector.ctorParameters = () => [
    { type: SiteAdapter }
];
SiteConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function SiteConnector_Factory() { return new SiteConnector(i0.ɵɵinject(i1.SiteAdapter)); }, token: SiteConnector, providedIn: "root" });
SiteConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SiteConnector);
export { SiteConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLN0MsSUFBYSxhQUFhLEdBQTFCLE1BQWEsYUFBYTtJQUN4QixZQUFzQixPQUFvQjtRQUFwQixZQUFPLEdBQVAsT0FBTyxDQUFhO0lBQUcsQ0FBQztJQUU5QyxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxZQUFZLENBQUMsSUFBa0I7UUFDN0IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsVUFBVSxDQUFDLGNBQXNCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQztDQUNGLENBQUE7O1lBckJnQyxXQUFXOzs7QUFEL0IsYUFBYTtJQUh6QixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csYUFBYSxDQXNCekI7U0F0QlksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvdW50cnksIENvdW50cnlUeXBlLCBSZWdpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IEJhc2VTaXRlLCBDdXJyZW5jeSwgTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFNpdGVBZGFwdGVyIH0gZnJvbSAnLi9zaXRlLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhZGFwdGVyOiBTaXRlQWRhcHRlcikge31cblxuICBnZXRMYW5ndWFnZXMoKTogT2JzZXJ2YWJsZTxMYW5ndWFnZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkTGFuZ3VhZ2VzKCk7XG4gIH1cblxuICBnZXRDdXJyZW5jaWVzKCk6IE9ic2VydmFibGU8Q3VycmVuY3lbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEN1cnJlbmNpZXMoKTtcbiAgfVxuXG4gIGdldENvdW50cmllcyh0eXBlPzogQ291bnRyeVR5cGUpOiBPYnNlcnZhYmxlPENvdW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZENvdW50cmllcyh0eXBlKTtcbiAgfVxuXG4gIGdldFJlZ2lvbnMoY291bnRyeUlzb0NvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8UmVnaW9uW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlKTtcbiAgfVxuXG4gIGdldEJhc2VTaXRlKCk6IE9ic2VydmFibGU8QmFzZVNpdGU+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRCYXNlU2l0ZSgpO1xuICB9XG59XG4iXX0=