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
        const segments = tree.segments.map(s => s.path);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXBhcnNpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3VybC1wYXJzaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBbUIsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUdsRSxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUM1QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFdEMsa0JBQWtCLENBQUMsR0FBVztRQUM1QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVPLDhCQUE4QixDQUFDLElBQXFCO1FBQzFELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BFLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDUCxPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzQyxDQUFDO0NBQ0YsQ0FBQTs7WUFkNkIsTUFBTTs7O0FBRHZCLGlCQUFpQjtJQUQ3QixVQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7R0FDdEIsaUJBQWlCLENBZTdCO1NBZlksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVybFNlZ21lbnRHcm91cCwgUFJJTUFSWV9PVVRMRVQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFVybFBhcnNpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBnZXRQcmltYXJ5U2VnbWVudHModXJsOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgdXJsVHJlZSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHVybCk7XG4gICAgcmV0dXJuIHRoaXMuX2dldFByaW1hcnlTZWdtZW50c0Zyb21VcmxUcmVlKHVybFRyZWUucm9vdCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQcmltYXJ5U2VnbWVudHNGcm9tVXJsVHJlZSh0cmVlOiBVcmxTZWdtZW50R3JvdXApOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSB0cmVlLnNlZ21lbnRzLm1hcChzID0+IHMucGF0aCk7XG4gICAgY29uc3QgY2hpbGRyZW5TZWdtZW50cyA9IHRyZWUuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdXG4gICAgICA/IHRoaXMuX2dldFByaW1hcnlTZWdtZW50c0Zyb21VcmxUcmVlKHRyZWUuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdKVxuICAgICAgOiBbXTtcbiAgICByZXR1cm4gc2VnbWVudHMuY29uY2F0KGNoaWxkcmVuU2VnbWVudHMpO1xuICB9XG59XG4iXX0=