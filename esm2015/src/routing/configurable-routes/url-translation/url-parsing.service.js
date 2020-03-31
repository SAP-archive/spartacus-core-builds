import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PRIMARY_OUTLET } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
let UrlParsingService = class UrlParsingService {
    constructor(router) {
        this.router = router;
    }
    getPrimarySegments(url) {
        const urlTree = this.router.parseUrl(url);
        return this._getPrimarySegmentsFromUrlTree(urlTree.root);
    }
    _getPrimarySegmentsFromUrlTree(tree) {
        const segments = tree.segments.map((s) => s.path);
        const childrenSegments = tree.children[PRIMARY_OUTLET]
            ? this._getPrimarySegmentsFromUrlTree(tree.children[PRIMARY_OUTLET])
            : [];
        return segments.concat(childrenSegments);
    }
};
UrlParsingService.ctorParameters = () => [
    { type: Router }
];
UrlParsingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UrlParsingService_Factory() { return new UrlParsingService(i0.ɵɵinject(i1.Router)); }, token: UrlParsingService, providedIn: "root" });
UrlParsingService = __decorate([
    Injectable({ providedIn: 'root' })
], UrlParsingService);
export { UrlParsingService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXBhcnNpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3VybC1wYXJzaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBbUIsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUdsRSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUM1QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFdEMsa0JBQWtCLENBQUMsR0FBVztRQUM1QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVPLDhCQUE4QixDQUFDLElBQXFCO1FBQzFELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUNwRCxDQUFDLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRixDQUFBOztZQWQ2QixNQUFNOzs7QUFEdkIsaUJBQWlCO0lBRDdCLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixpQkFBaUIsQ0FlN0I7U0FmWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXJsU2VnbWVudEdyb3VwLCBQUklNQVJZX09VVExFVCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVXJsUGFyc2luZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIGdldFByaW1hcnlTZWdtZW50cyh1cmw6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB1cmxUcmVlID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwodXJsKTtcbiAgICByZXR1cm4gdGhpcy5fZ2V0UHJpbWFyeVNlZ21lbnRzRnJvbVVybFRyZWUodXJsVHJlZS5yb290KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFByaW1hcnlTZWdtZW50c0Zyb21VcmxUcmVlKHRyZWU6IFVybFNlZ21lbnRHcm91cCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzZWdtZW50cyA9IHRyZWUuc2VnbWVudHMubWFwKChzKSA9PiBzLnBhdGgpO1xuICAgIGNvbnN0IGNoaWxkcmVuU2VnbWVudHMgPSB0cmVlLmNoaWxkcmVuW1BSSU1BUllfT1VUTEVUXVxuICAgICAgPyB0aGlzLl9nZXRQcmltYXJ5U2VnbWVudHNGcm9tVXJsVHJlZSh0cmVlLmNoaWxkcmVuW1BSSU1BUllfT1VUTEVUXSlcbiAgICAgIDogW107XG4gICAgcmV0dXJuIHNlZ21lbnRzLmNvbmNhdChjaGlsZHJlblNlZ21lbnRzKTtcbiAgfVxufVxuIl19