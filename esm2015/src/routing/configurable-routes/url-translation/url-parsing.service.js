import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PRIMARY_OUTLET } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export class UrlParsingService {
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
}
UrlParsingService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UrlParsingService_Factory() { return new UrlParsingService(i0.ɵɵinject(i1.Router)); }, token: UrlParsingService, providedIn: "root" });
UrlParsingService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
UrlParsingService.ctorParameters = () => [
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXBhcnNpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vdXJsLXBhcnNpbmcuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQW1CLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7QUFHbEUsTUFBTSxPQUFPLGlCQUFpQjtJQUM1QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7SUFFdEMsa0JBQWtCLENBQUMsR0FBVztRQUM1QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVPLDhCQUE4QixDQUFDLElBQXFCO1FBQzFELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEQsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUNwRCxDQUFDLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNQLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7WUFmRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUFIekIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVcmxTZWdtZW50R3JvdXAsIFBSSU1BUllfT1VUTEVUIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBVcmxQYXJzaW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHt9XG5cbiAgZ2V0UHJpbWFyeVNlZ21lbnRzKHVybDogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHVybFRyZWUgPSB0aGlzLnJvdXRlci5wYXJzZVVybCh1cmwpO1xuICAgIHJldHVybiB0aGlzLl9nZXRQcmltYXJ5U2VnbWVudHNGcm9tVXJsVHJlZSh1cmxUcmVlLnJvb3QpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0UHJpbWFyeVNlZ21lbnRzRnJvbVVybFRyZWUodHJlZTogVXJsU2VnbWVudEdyb3VwKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gdHJlZS5zZWdtZW50cy5tYXAoKHMpID0+IHMucGF0aCk7XG4gICAgY29uc3QgY2hpbGRyZW5TZWdtZW50cyA9IHRyZWUuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdXG4gICAgICA/IHRoaXMuX2dldFByaW1hcnlTZWdtZW50c0Zyb21VcmxUcmVlKHRyZWUuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdKVxuICAgICAgOiBbXTtcbiAgICByZXR1cm4gc2VnbWVudHMuY29uY2F0KGNoaWxkcmVuU2VnbWVudHMpO1xuICB9XG59XG4iXX0=