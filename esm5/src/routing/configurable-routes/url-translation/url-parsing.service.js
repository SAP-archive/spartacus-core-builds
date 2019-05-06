/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PRIMARY_OUTLET } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
var UrlParsingService = /** @class */ (function () {
    function UrlParsingService(router) {
        this.router = router;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    UrlParsingService.prototype.getPrimarySegments = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        /** @type {?} */
        var urlTree = this.router.parseUrl(url);
        return this._getPrimarySegmentsFromUrlTree(urlTree.root);
    };
    /**
     * @private
     * @param {?} tree
     * @return {?}
     */
    UrlParsingService.prototype._getPrimarySegmentsFromUrlTree = /**
     * @private
     * @param {?} tree
     * @return {?}
     */
    function (tree) {
        /** @type {?} */
        var segments = tree.segments.map(function (s) { return s.path; });
        /** @type {?} */
        var childrenSegments = tree.children[PRIMARY_OUTLET]
            ? this._getPrimarySegmentsFromUrlTree(tree.children[PRIMARY_OUTLET])
            : [];
        return segments.concat(childrenSegments);
    };
    UrlParsingService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    UrlParsingService.ctorParameters = function () { return [
        { type: Router }
    ]; };
    /** @nocollapse */ UrlParsingService.ngInjectableDef = i0.defineInjectable({ factory: function UrlParsingService_Factory() { return new UrlParsingService(i0.inject(i1.Router)); }, token: UrlParsingService, providedIn: "root" });
    return UrlParsingService;
}());
export { UrlParsingService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    UrlParsingService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXBhcnNpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3VybC1wYXJzaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBbUIsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUVsRTtJQUVFLDJCQUFvQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFHLENBQUM7Ozs7O0lBRXRDLDhDQUFrQjs7OztJQUFsQixVQUFtQixHQUFXOztZQUN0QixPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3pDLE9BQU8sSUFBSSxDQUFDLDhCQUE4QixDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7Ozs7SUFFTywwREFBOEI7Ozs7O0lBQXRDLFVBQXVDLElBQXFCOztZQUNwRCxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsSUFBSSxFQUFOLENBQU0sQ0FBQzs7WUFDekMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUM7WUFDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ3BFLENBQUMsQ0FBQyxFQUFFO1FBQ04sT0FBTyxRQUFRLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDM0MsQ0FBQzs7Z0JBZkYsVUFBVSxTQUFDLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRTs7OztnQkFIekIsTUFBTTs7OzRCQURmO0NBb0JDLEFBaEJELElBZ0JDO1NBZlksaUJBQWlCOzs7Ozs7SUFDaEIsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVybFNlZ21lbnRHcm91cCwgUFJJTUFSWV9PVVRMRVQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFVybFBhcnNpbmdTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge31cblxuICBnZXRQcmltYXJ5U2VnbWVudHModXJsOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgdXJsVHJlZSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHVybCk7XG4gICAgcmV0dXJuIHRoaXMuX2dldFByaW1hcnlTZWdtZW50c0Zyb21VcmxUcmVlKHVybFRyZWUucm9vdCk7XG4gIH1cblxuICBwcml2YXRlIF9nZXRQcmltYXJ5U2VnbWVudHNGcm9tVXJsVHJlZSh0cmVlOiBVcmxTZWdtZW50R3JvdXApOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSB0cmVlLnNlZ21lbnRzLm1hcChzID0+IHMucGF0aCk7XG4gICAgY29uc3QgY2hpbGRyZW5TZWdtZW50cyA9IHRyZWUuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdXG4gICAgICA/IHRoaXMuX2dldFByaW1hcnlTZWdtZW50c0Zyb21VcmxUcmVlKHRyZWUuY2hpbGRyZW5bUFJJTUFSWV9PVVRMRVRdKVxuICAgICAgOiBbXTtcbiAgICByZXR1cm4gc2VnbWVudHMuY29uY2F0KGNoaWxkcmVuU2VnbWVudHMpO1xuICB9XG59XG4iXX0=