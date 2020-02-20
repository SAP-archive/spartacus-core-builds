import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { OccConfig } from '../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/occ-config";
import * as i2 from "@angular/common/http";
var OccSitesConfigLoader = /** @class */ (function () {
    function OccSitesConfigLoader(config, http) {
        this.config = config;
        this.http = http;
        this.endpoint = 'basesites?fields=baseSites(uid,defaultLanguage(isocode),urlEncodingAttributes,urlPatterns,stores(currencies(isocode),defaultCurrency(isocode),languages(isocode),defaultLanguage(isocode)))';
    }
    Object.defineProperty(OccSitesConfigLoader.prototype, "baseEndpoint", {
        get: function () {
            return ((this.config.backend.occ.baseUrl || '') + this.config.backend.occ.prefix);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OccSitesConfigLoader.prototype, "url", {
        get: function () {
            return "" + this.baseEndpoint + this.endpoint;
        },
        enumerable: true,
        configurable: true
    });
    OccSitesConfigLoader.prototype.load = function () {
        if (!this.config || !this.config.backend || !this.config.backend.occ) {
            return throwError(new Error("Missing config for OCC backend!"));
        }
        return this.http
            .get(this.url)
            .pipe(map(function (_a) {
            var baseSites = _a.baseSites;
            return baseSites;
        }));
    };
    OccSitesConfigLoader.ctorParameters = function () { return [
        { type: OccConfig },
        { type: HttpClient }
    ]; };
    OccSitesConfigLoader.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccSitesConfigLoader_Factory() { return new OccSitesConfigLoader(i0.ɵɵinject(i1.OccConfig), i0.ɵɵinject(i2.HttpClient)); }, token: OccSitesConfigLoader, providedIn: "root" });
    OccSitesConfigLoader = __decorate([
        Injectable({ providedIn: 'root' })
    ], OccSitesConfigLoader);
    return OccSitesConfigLoader;
}());
export { OccSitesConfigLoader };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGVzLWNvbmZpZy1sb2FkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2NvbmZpZy1sb2FkZXIvb2NjLXNpdGVzLWNvbmZpZy1sb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUlqRDtJQUNFLDhCQUFzQixNQUFpQixFQUFZLElBQWdCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBWSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBRWhELGFBQVEsR0FDekIsNkxBQTZMLENBQUM7SUFIMUgsQ0FBQztJQUt2RSxzQkFBWSw4Q0FBWTthQUF4QjtZQUNFLE9BQU8sQ0FDTCxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FDekUsQ0FBQztRQUNKLENBQUM7OztPQUFBO0lBRUQsc0JBQVkscUNBQUc7YUFBZjtZQUNFLE9BQU8sS0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFVLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFFRCxtQ0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNwRSxPQUFPLFVBQVUsQ0FBQyxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUM7U0FDakU7UUFFRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFnQixJQUFJLENBQUMsR0FBRyxDQUFDO2FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQyxFQUFhO2dCQUFYLHdCQUFTO1lBQU8sT0FBQSxTQUFTO1FBQVQsQ0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOztnQkF2QjZCLFNBQVM7Z0JBQWtCLFVBQVU7OztJQUR4RCxvQkFBb0I7UUFEaEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLG9CQUFvQixDQXlCaEM7K0JBbENEO0NBa0NDLEFBekJELElBeUJDO1NBekJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCYXNlU2l0ZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NTaXRlc0NvbmZpZ0xvYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IE9jY0NvbmZpZywgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGVuZHBvaW50ID1cbiAgICAnYmFzZXNpdGVzP2ZpZWxkcz1iYXNlU2l0ZXModWlkLGRlZmF1bHRMYW5ndWFnZShpc29jb2RlKSx1cmxFbmNvZGluZ0F0dHJpYnV0ZXMsdXJsUGF0dGVybnMsc3RvcmVzKGN1cnJlbmNpZXMoaXNvY29kZSksZGVmYXVsdEN1cnJlbmN5KGlzb2NvZGUpLGxhbmd1YWdlcyhpc29jb2RlKSxkZWZhdWx0TGFuZ3VhZ2UoaXNvY29kZSkpKSc7XG5cbiAgcHJpdmF0ZSBnZXQgYmFzZUVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnKSArIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLnByZWZpeFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCB1cmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5iYXNlRW5kcG9pbnR9JHt0aGlzLmVuZHBvaW50fWA7XG4gIH1cblxuICBsb2FkKCk6IE9ic2VydmFibGU8QmFzZVNpdGVbXT4ge1xuICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQub2NjKSB7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihuZXcgRXJyb3IoYE1pc3NpbmcgY29uZmlnIGZvciBPQ0MgYmFja2VuZCFgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQmFzZVNpdGVzPih0aGlzLnVybClcbiAgICAgIC5waXBlKG1hcCgoeyBiYXNlU2l0ZXMgfSkgPT4gYmFzZVNpdGVzKSk7XG4gIH1cbn1cbiJdfQ==