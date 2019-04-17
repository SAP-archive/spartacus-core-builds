/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PRIMARY_OUTLET } from '@angular/router';
export class UrlParsingService {
    /**
     * @param {?} router
     */
    constructor(router) {
        this.router = router;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    getPrimarySegments(url) {
        /** @type {?} */
        const urlTree = this.router.parseUrl(url);
        return this._getPrimarySegmentsFromUrlTree(urlTree.root);
    }
    /**
     * @private
     * @param {?} tree
     * @return {?}
     */
    _getPrimarySegmentsFromUrlTree(tree) {
        /** @type {?} */
        const segments = tree.segments.map(s => s.path);
        /** @type {?} */
        const childrenSegments = tree.children[PRIMARY_OUTLET]
            ? this._getPrimarySegmentsFromUrlTree(tree.children[PRIMARY_OUTLET])
            : [];
        return segments.concat(childrenSegments);
    }
}
UrlParsingService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UrlParsingService.ctorParameters = () => [
    { type: Router }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    UrlParsingService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXBhcnNpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3VybC1wYXJzaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBbUIsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHbEUsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUM1QixZQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7Ozs7O0lBRXRDLGtCQUFrQixDQUFDLEdBQVc7O2NBQ3RCLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDekMsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7OztJQUVPLDhCQUE4QixDQUFDLElBQXFCOztjQUNwRCxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztjQUN6QyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQztZQUNwRCxDQUFDLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFDLEVBQUU7UUFDTixPQUFPLFFBQVEsQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUFmRixVQUFVOzs7O1lBSEYsTUFBTTs7Ozs7OztJQUtELG1DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBVcmxTZWdtZW50R3JvdXAsIFBSSU1BUllfT1VUTEVUIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVybFBhcnNpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBnZXRQcmltYXJ5U2VnbWVudHModXJsOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgdXJsVHJlZSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHVybCk7XG4gICAgcmV0dXJuIHRoaXMuX2dldFByaW1hcnlTZWdtZW50c0Zyb21VcmxUcmVlKHVybFRyZWUucm9vdCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQcmltYXJ5U2VnbWVudHNGcm9tVXJsVHJlZSh0cmVlOiBVcmxTZWdtZW50R3JvdXApOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSB0cmVlLnNlZ21lbnRzLm1hcChzID0+IHMucGF0aCk7XG4gICAgY29uc3QgY2hpbGRyZW5TZWdtZW50cyA9IHRyZWUuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdXG4gICAgICA/IHRoaXMuX2dldFByaW1hcnlTZWdtZW50c0Zyb21VcmxUcmVlKHRyZWUuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdKVxuICAgICAgOiBbXTtcbiAgICByZXR1cm4gc2VnbWVudHMuY29uY2F0KGNoaWxkcmVuU2VnbWVudHMpO1xuICB9XG59XG4iXX0=