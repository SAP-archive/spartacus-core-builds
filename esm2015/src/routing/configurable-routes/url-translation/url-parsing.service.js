/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PRIMARY_OUTLET } from '@angular/router';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
UrlParsingService.ctorParameters = () => [
    { type: Router }
];
/** @nocollapse */ UrlParsingService.ngInjectableDef = i0.defineInjectable({ factory: function UrlParsingService_Factory() { return new UrlParsingService(i0.inject(i1.Router)); }, token: UrlParsingService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    UrlParsingService.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXJsLXBhcnNpbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9yb3V0aW5nL2NvbmZpZ3VyYWJsZS1yb3V0ZXMvdXJsLXRyYW5zbGF0aW9uL3VybC1wYXJzaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBbUIsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQUdsRSxNQUFNLE9BQU8saUJBQWlCOzs7O0lBQzVCLFlBQW9CLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQUcsQ0FBQzs7Ozs7SUFFdEMsa0JBQWtCLENBQUMsR0FBVzs7Y0FDdEIsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUN6QyxPQUFPLElBQUksQ0FBQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7O0lBRU8sOEJBQThCLENBQUMsSUFBcUI7O2NBQ3BELFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7O2NBQ3pDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3BELENBQUMsQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNwRSxDQUFDLENBQUMsRUFBRTtRQUNOLE9BQU8sUUFBUSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzNDLENBQUM7OztZQWZGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFIekIsTUFBTTs7Ozs7Ozs7SUFLRCxtQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgVXJsU2VnbWVudEdyb3VwLCBQUklNQVJZX09VVExFVCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgVXJsUGFyc2luZ1NlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIGdldFByaW1hcnlTZWdtZW50cyh1cmw6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB1cmxUcmVlID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwodXJsKTtcbiAgICByZXR1cm4gdGhpcy5fZ2V0UHJpbWFyeVNlZ21lbnRzRnJvbVVybFRyZWUodXJsVHJlZS5yb290KTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldFByaW1hcnlTZWdtZW50c0Zyb21VcmxUcmVlKHRyZWU6IFVybFNlZ21lbnRHcm91cCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBzZWdtZW50cyA9IHRyZWUuc2VnbWVudHMubWFwKHMgPT4gcy5wYXRoKTtcbiAgICBjb25zdCBjaGlsZHJlblNlZ21lbnRzID0gdHJlZS5jaGlsZHJlbltQUklNQVJZX09VVExFVF1cbiAgICAgID8gdGhpcy5fZ2V0UHJpbWFyeVNlZ21lbnRzRnJvbVVybFRyZWUodHJlZS5jaGlsZHJlbltQUklNQVJZX09VVExFVF0pXG4gICAgICA6IFtdO1xuICAgIHJldHVybiBzZWdtZW50cy5jb25jYXQoY2hpbGRyZW5TZWdtZW50cyk7XG4gIH1cbn1cbiJdfQ==