import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { OccConfig } from '../config/occ-config';
import * as i0 from "@angular/core";
import * as i1 from "../config/occ-config";
import * as i2 from "@angular/common/http";
export class OccSitesConfigLoader {
    constructor(config, http) {
        this.config = config;
        this.http = http;
        this.endpoint = 'basesites?fields=baseSites(uid,defaultLanguage(isocode),urlEncodingAttributes,urlPatterns,stores(currencies(isocode),defaultCurrency(isocode),languages(isocode),defaultLanguage(isocode)))';
    }
    get baseEndpoint() {
        return ((this.config.backend.occ.baseUrl || '') + this.config.backend.occ.prefix);
    }
    get url() {
        return `${this.baseEndpoint}${this.endpoint}`;
    }
    load() {
        if (!this.config || !this.config.backend || !this.config.backend.occ) {
            return throwError(new Error(`Missing config for OCC backend!`));
        }
        return this.http
            .get(this.url)
            .pipe(map(({ baseSites }) => baseSites));
    }
}
OccSitesConfigLoader.ɵprov = i0.ɵɵdefineInjectable({ factory: function OccSitesConfigLoader_Factory() { return new OccSitesConfigLoader(i0.ɵɵinject(i1.OccConfig), i0.ɵɵinject(i2.HttpClient)); }, token: OccSitesConfigLoader, providedIn: "root" });
OccSitesConfigLoader.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
OccSitesConfigLoader.ctorParameters = () => [
    { type: OccConfig },
    { type: HttpClient }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNpdGVzLWNvbmZpZy1sb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvY29uZmlnLWxvYWRlci9vY2Mtc2l0ZXMtY29uZmlnLWxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFJakQsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFzQixNQUFpQixFQUFZLElBQWdCO1FBQTdDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFBWSxTQUFJLEdBQUosSUFBSSxDQUFZO1FBRWhELGFBQVEsR0FDekIsNkxBQTZMLENBQUM7SUFIMUgsQ0FBQztJQUt2RSxJQUFZLFlBQVk7UUFDdEIsT0FBTyxDQUNMLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUN6RSxDQUFDO0lBQ0osQ0FBQztJQUVELElBQVksR0FBRztRQUNiLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDcEUsT0FBTyxVQUFVLENBQUMsSUFBSSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDO1NBQ2pFO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBZ0IsSUFBSSxDQUFDLEdBQUcsQ0FBQzthQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7O1lBekJGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7OztZQUh6QixTQUFTO1lBTFQsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBCYXNlU2l0ZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBPY2NTaXRlc0NvbmZpZ0xvYWRlciB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjb25maWc6IE9jY0NvbmZpZywgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQpIHt9XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGVuZHBvaW50ID1cbiAgICAnYmFzZXNpdGVzP2ZpZWxkcz1iYXNlU2l0ZXModWlkLGRlZmF1bHRMYW5ndWFnZShpc29jb2RlKSx1cmxFbmNvZGluZ0F0dHJpYnV0ZXMsdXJsUGF0dGVybnMsc3RvcmVzKGN1cnJlbmNpZXMoaXNvY29kZSksZGVmYXVsdEN1cnJlbmN5KGlzb2NvZGUpLGxhbmd1YWdlcyhpc29jb2RlKSxkZWZhdWx0TGFuZ3VhZ2UoaXNvY29kZSkpKSc7XG5cbiAgcHJpdmF0ZSBnZXQgYmFzZUVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5iYXNlVXJsIHx8ICcnKSArIHRoaXMuY29uZmlnLmJhY2tlbmQub2NjLnByZWZpeFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCB1cmwoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYCR7dGhpcy5iYXNlRW5kcG9pbnR9JHt0aGlzLmVuZHBvaW50fWA7XG4gIH1cblxuICBsb2FkKCk6IE9ic2VydmFibGU8QmFzZVNpdGVbXT4ge1xuICAgIGlmICghdGhpcy5jb25maWcgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQgfHwgIXRoaXMuY29uZmlnLmJhY2tlbmQub2NjKSB7XG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihuZXcgRXJyb3IoYE1pc3NpbmcgY29uZmlnIGZvciBPQ0MgYmFja2VuZCFgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQmFzZVNpdGVzPih0aGlzLnVybClcbiAgICAgIC5waXBlKG1hcCgoeyBiYXNlU2l0ZXMgfSkgPT4gYmFzZVNpdGVzKSk7XG4gIH1cbn1cbiJdfQ==