import { __decorate } from "tslib";
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
let CartPageMetaResolver = class CartPageMetaResolver extends PageMetaResolver {
    constructor(cms) {
        super();
        this.cms = cms;
        this.cms$ = this.cms
            .getCurrentPage()
            .pipe(filter((page) => !!page));
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'CartPageTemplate';
    }
    /**
     * Resolves the page title, which is driven by the backend.
     */
    resolveTitle() {
        return this.cms$.pipe(map((p) => p.title));
    }
    /**
     * Returns robots for the cart pages, which default to NOINDEX and NOFOLLOW.
     */
    resolveRobots() {
        return of([PageRobotsMeta.NOFOLLOW, PageRobotsMeta.NOINDEX]);
    }
};
CartPageMetaResolver.ctorParameters = () => [
    { type: CmsService }
];
CartPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartPageMetaResolver_Factory() { return new CartPageMetaResolver(i0.ɵɵinject(i1.CmsService)); }, token: CartPageMetaResolver, providedIn: "root" });
CartPageMetaResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CartPageMetaResolver);
export { CartPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zZXJ2aWNlcy9jYXJ0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFELE9BQU8sRUFBUSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUVqRDs7Ozs7O0dBTUc7QUFJSCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLGdCQUFnQjtJQU14RCxZQUFzQixHQUFlO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBRFksUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUozQixTQUFJLEdBQXFCLElBQUksQ0FBQyxHQUFHO2FBQ3hDLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUloQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksR0FBRyxrQkFBa0IsQ0FBQztJQUN6QyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7T0FFRztJQUNILGFBQWE7UUFDWCxPQUFPLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUNGLENBQUE7O1lBbkI0QixVQUFVOzs7QUFOMUIsb0JBQW9CO0lBSGhDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxvQkFBb0IsQ0F5QmhDO1NBekJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VSb2JvdHNNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBQYWdlUm9ib3RzUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgbWV0YWRhdGEgZm9yIHRoZSBDYXJ0IHBhZ2UgKFVzaW5nIHRoZSBgUGFnZVR5cGUuQ09OVEVOVF9QQUdFYFxuICogYW5kIHRoZSBgQ2FydFBhZ2VUZW1wbGF0ZWApLiBJZiB0aGUgY2FydCBwYWdlIG1hdGNoZXMgdGhpcyB0ZW1wbGF0ZSwgdGhlIG1vcmVcbiAqIGdlbmVyaWMgYENvbnRlbnRQYWdlTWV0YVJlc29sdmVyYCBpcyBvdmVycmlkZW4gYnkgdGhpcyByZXNvbHZlci5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSBhbmQgcm9ib3RzIGFyZSByZXNvbHZlZCBpbiB0aGlzIGltcGxlbWVudGF0aW9uIG9ubHkuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJ0UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZVJvYm90c1Jlc29sdmVyIHtcbiAgcHJvdGVjdGVkIGNtcyQ6IE9ic2VydmFibGU8UGFnZT4gPSB0aGlzLmNtc1xuICAgIC5nZXRDdXJyZW50UGFnZSgpXG4gICAgLnBpcGUoZmlsdGVyKChwYWdlKSA9PiAhIXBhZ2UpKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICAgIHRoaXMucGFnZVRlbXBsYXRlID0gJ0NhcnRQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBwYWdlIHRpdGxlLCB3aGljaCBpcyBkcml2ZW4gYnkgdGhlIGJhY2tlbmQuXG4gICAqL1xuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMkLnBpcGUobWFwKChwKSA9PiBwLnRpdGxlKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyByb2JvdHMgZm9yIHRoZSBjYXJ0IHBhZ2VzLCB3aGljaCBkZWZhdWx0IHRvIE5PSU5ERVggYW5kIE5PRk9MTE9XLlxuICAgKi9cbiAgcmVzb2x2ZVJvYm90cygpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+IHtcbiAgICByZXR1cm4gb2YoW1BhZ2VSb2JvdHNNZXRhLk5PRk9MTE9XLCBQYWdlUm9ib3RzTWV0YS5OT0lOREVYXSk7XG4gIH1cbn1cbiJdfQ==