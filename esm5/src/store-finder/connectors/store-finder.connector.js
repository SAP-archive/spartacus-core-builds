import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { StoreFinderAdapter } from './store-finder.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./store-finder.adapter";
var StoreFinderConnector = /** @class */ (function () {
    function StoreFinderConnector(adapter) {
        this.adapter = adapter;
    }
    StoreFinderConnector.prototype.search = function (query, searchConfig, longitudeLatitude, radius) {
        return this.adapter.search(query, searchConfig, longitudeLatitude, radius);
    };
    StoreFinderConnector.prototype.getCounts = function () {
        return this.adapter.loadCounts();
    };
    StoreFinderConnector.prototype.get = function (storeId) {
        return this.adapter.load(storeId);
    };
    StoreFinderConnector.ctorParameters = function () { return [
        { type: StoreFinderAdapter }
    ]; };
    StoreFinderConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function StoreFinderConnector_Factory() { return new StoreFinderConnector(i0.ɵɵinject(i1.StoreFinderAdapter)); }, token: StoreFinderConnector, providedIn: "root" });
    StoreFinderConnector = __decorate([
        Injectable({ providedIn: 'root' })
    ], StoreFinderConnector);
    return StoreFinderConnector;
}());
export { StoreFinderConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFTNUQ7SUFDRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBRXJELHFDQUFNLEdBQU4sVUFDRSxLQUFhLEVBQ2IsWUFBcUMsRUFDckMsaUJBQTRCLEVBQzVCLE1BQWU7UUFFZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELHdDQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELGtDQUFHLEdBQUgsVUFBSSxPQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBakI4QixrQkFBa0I7OztJQUR0QyxvQkFBb0I7UUFEaEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLG9CQUFvQixDQW1CaEM7K0JBL0JEO0NBK0JDLEFBbkJELElBbUJDO1NBbkJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFkYXB0ZXIgfSBmcm9tICcuL3N0b3JlLWZpbmRlci5hZGFwdGVyJztcbmltcG9ydCB7IFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcG9pbnQtb2Ytc2VydmljZS5tb2RlbCc7XG5pbXBvcnQgeyBHZW9Qb2ludCB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgU3RvcmVDb3VudCxcbiAgU3RvcmVGaW5kZXJTZWFyY2hQYWdlLFxufSBmcm9tICcuLi8uLi9tb2RlbC9zdG9yZS1maW5kZXIubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFN0b3JlRmluZGVyQWRhcHRlcikge31cblxuICBzZWFyY2goXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnQsXG4gICAgcmFkaXVzPzogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8U3RvcmVGaW5kZXJTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5zZWFyY2gocXVlcnksIHNlYXJjaENvbmZpZywgbG9uZ2l0dWRlTGF0aXR1ZGUsIHJhZGl1cyk7XG4gIH1cblxuICBnZXRDb3VudHMoKTogT2JzZXJ2YWJsZTxTdG9yZUNvdW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRDb3VudHMoKTtcbiAgfVxuXG4gIGdldChzdG9yZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBvaW50T2ZTZXJ2aWNlPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkKHN0b3JlSWQpO1xuICB9XG59XG4iXX0=