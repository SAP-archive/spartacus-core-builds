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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFHNUQ7SUFDRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBRXJELHFDQUFNLEdBQU4sVUFDRSxLQUFhLEVBQ2IsWUFBMEIsRUFDMUIsaUJBQTRCLEVBQzVCLE1BQWU7UUFFZixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDN0UsQ0FBQztJQUVELHdDQUFTLEdBQVQ7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVELGtDQUFHLEdBQUgsVUFBSSxPQUFlO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Z0JBakI4QixrQkFBa0I7OztJQUR0QyxvQkFBb0I7UUFEaEMsVUFBVSxDQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxDQUFDO09BQ3RCLG9CQUFvQixDQW1CaEM7K0JBL0JEO0NBK0JDLEFBbkJELElBbUJDO1NBbkJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdlb1BvaW50IH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBQb2ludE9mU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVsL3BvaW50LW9mLXNlcnZpY2UubW9kZWwnO1xuaW1wb3J0IHtcbiAgU3RvcmVDb3VudCxcbiAgU3RvcmVGaW5kZXJTZWFyY2hQYWdlLFxufSBmcm9tICcuLi8uLi9tb2RlbC9zdG9yZS1maW5kZXIubW9kZWwnO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWRhcHRlciB9IGZyb20gJy4vc3RvcmUtZmluZGVyLmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFN0b3JlRmluZGVyQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFN0b3JlRmluZGVyQWRhcHRlcikge31cblxuICBzZWFyY2goXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IEdlb1BvaW50LFxuICAgIHJhZGl1cz86IG51bWJlclxuICApOiBPYnNlcnZhYmxlPFN0b3JlRmluZGVyU2VhcmNoUGFnZT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIuc2VhcmNoKHF1ZXJ5LCBzZWFyY2hDb25maWcsIGxvbmdpdHVkZUxhdGl0dWRlLCByYWRpdXMpO1xuICB9XG5cbiAgZ2V0Q291bnRzKCk6IE9ic2VydmFibGU8U3RvcmVDb3VudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQ291bnRzKCk7XG4gIH1cblxuICBnZXQoc3RvcmVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQb2ludE9mU2VydmljZT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZChzdG9yZUlkKTtcbiAgfVxufVxuIl19