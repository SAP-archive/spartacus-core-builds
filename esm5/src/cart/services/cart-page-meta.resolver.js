import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageType } from '../../model/cms.model';
import * as i0 from "@angular/core";
import * as i1 from "../../cms/facade/cms.service";
/**
 * Resolves the page metadata for the Cart page (Using the `PageType.CONTENT_PAGE`
 * and the `CartPageTemplate`). If the cart page matches this template, the more
 * generic `ContentPageMetaResolver` is overriden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
var CartPageMetaResolver = /** @class */ (function (_super) {
    __extends(CartPageMetaResolver, _super);
    function CartPageMetaResolver(cms) {
        var _this = _super.call(this) || this;
        _this.cms = cms;
        _this.cms$ = _this.cms
            .getCurrentPage()
            .pipe(filter(function (page) { return !!page; }));
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'CartPageTemplate';
        return _this;
    }
    /**
     * Resolves the page title, which is driven by the backend.
     */
    CartPageMetaResolver.prototype.resolveTitle = function () {
        return this.cms$.pipe(map(function (p) { return p.title; }));
    };
    /**
     * Returns robots for the cart pages, which default to NOINDEX and NOFOLLOW.
     */
    CartPageMetaResolver.prototype.resolveRobots = function () {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    };
    CartPageMetaResolver.ctorParameters = function () { return [
        { type: CmsService }
    ]; };
    CartPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartPageMetaResolver_Factory() { return new CartPageMetaResolver(i0.ɵɵinject(i1.CmsService)); }, token: CartPageMetaResolver, providedIn: "root" });
    CartPageMetaResolver = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CartPageMetaResolver);
    return CartPageMetaResolver;
}(PageMetaResolver));
export { CartPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zZXJ2aWNlcy9jYXJ0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFELE9BQU8sRUFBUSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUVqRDs7Ozs7O0dBTUc7QUFJSDtJQUEwQyx3Q0FBZ0I7SUFNeEQsOEJBQXNCLEdBQWU7UUFBckMsWUFDRSxpQkFBTyxTQUdSO1FBSnFCLFNBQUcsR0FBSCxHQUFHLENBQVk7UUFKM0IsVUFBSSxHQUFxQixLQUFJLENBQUMsR0FBRzthQUN4QyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFDLElBQUksSUFBSyxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLENBQUMsQ0FBQztRQUloQyxLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDdEMsS0FBSSxDQUFDLFlBQVksR0FBRyxrQkFBa0IsQ0FBQzs7SUFDekMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkNBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLEtBQUssRUFBUCxDQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNILDRDQUFhLEdBQWI7UUFDRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQzs7Z0JBbEIwQixVQUFVOzs7SUFOMUIsb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxvQkFBb0IsQ0F5QmhDOytCQS9DRDtDQStDQyxBQXpCRCxDQUEwQyxnQkFBZ0IsR0F5QnpEO1NBekJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlUm9ib3RzUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgbWV0YWRhdGEgZm9yIHRoZSBDYXJ0IHBhZ2UgKFVzaW5nIHRoZSBgUGFnZVR5cGUuQ09OVEVOVF9QQUdFYFxuICogYW5kIHRoZSBgQ2FydFBhZ2VUZW1wbGF0ZWApLiBJZiB0aGUgY2FydCBwYWdlIG1hdGNoZXMgdGhpcyB0ZW1wbGF0ZSwgdGhlIG1vcmVcbiAqIGdlbmVyaWMgYENvbnRlbnRQYWdlTWV0YVJlc29sdmVyYCBpcyBvdmVycmlkZW4gYnkgdGhpcyByZXNvbHZlci5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSBhbmQgcm9ib3RzIGFyZSByZXNvbHZlZCBpbiB0aGlzIGltcGxlbWVudGF0aW9uIG9ubHkuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZVJvYm90c1Jlc29sdmVyIHtcbiAgcHJvdGVjdGVkIGNtcyQ6IE9ic2VydmFibGU8UGFnZT4gPSB0aGlzLmNtc1xuICAgIC5nZXRDdXJyZW50UGFnZSgpXG4gICAgLnBpcGUoZmlsdGVyKChwYWdlKSA9PiAhIXBhZ2UpKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICAgIHRoaXMucGFnZVRlbXBsYXRlID0gJ0NhcnRQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBwYWdlIHRpdGxlLCB3aGljaCBpcyBkcml2ZW4gYnkgdGhlIGJhY2tlbmQuXG4gICAqL1xuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMkLnBpcGUobWFwKChwKSA9PiBwLnRpdGxlKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByb2JvdHMgZm9yIHRoZSBjYXJ0IHBhZ2VzLCB3aGljaCBkZWZhdWx0IHRvIE5PSU5ERVggYW5kIE5PRk9MTE9XLlxuICAgKi9cbiAgcmVzb2x2ZVJvYm90cygpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+IHtcbiAgICByZXR1cm4gb2YoW1BhZ2VSb2JvdHNNZXRhLk5PRk9MTE9XLCBQYWdlUm9ib3RzTWV0YS5OT0lOREVYXSk7XG4gIH1cbn1cbiJdfQ==