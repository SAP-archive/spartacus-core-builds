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
 * generic `ContentPageMetaResolver` is overridden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
export class CartPageMetaResolver extends PageMetaResolver {
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
}
CartPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartPageMetaResolver_Factory() { return new CartPageMetaResolver(i0.ɵɵinject(i1.CmsService)); }, token: CartPageMetaResolver, providedIn: "root" });
CartPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CartPageMetaResolver.ctorParameters = () => [
    { type: CmsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jYXJ0L3NlcnZpY2VzL2NhcnQtcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQVEsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFLckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFFakQ7Ozs7OztHQU1HO0FBSUgsTUFBTSxPQUFPLG9CQUNYLFNBQVEsZ0JBQWdCO0lBTXhCLFlBQXNCLEdBQWU7UUFDbkMsS0FBSyxFQUFFLENBQUM7UUFEWSxRQUFHLEdBQUgsR0FBRyxDQUFZO1FBSjNCLFNBQUksR0FBcUIsSUFBSSxDQUFDLEdBQUc7YUFDeEMsY0FBYyxFQUFFO2FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBSWhDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUN0QyxJQUFJLENBQUMsWUFBWSxHQUFHLGtCQUFrQixDQUFDO0lBQ3pDLENBQUM7SUFFRDs7T0FFRztJQUNILFlBQVk7UUFDVixPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYTtRQUNYLE9BQU8sRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDOzs7O1lBNUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBbEJRLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHtcbiAgUGFnZVJvYm90c1Jlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIG1ldGFkYXRhIGZvciB0aGUgQ2FydCBwYWdlIChVc2luZyB0aGUgYFBhZ2VUeXBlLkNPTlRFTlRfUEFHRWBcbiAqIGFuZCB0aGUgYENhcnRQYWdlVGVtcGxhdGVgKS4gSWYgdGhlIGNhcnQgcGFnZSBtYXRjaGVzIHRoaXMgdGVtcGxhdGUsIHRoZSBtb3JlXG4gKiBnZW5lcmljIGBDb250ZW50UGFnZU1ldGFSZXNvbHZlcmAgaXMgb3ZlcnJpZGRlbiBieSB0aGlzIHJlc29sdmVyLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlIGFuZCByb2JvdHMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTWV0YVJlc29sdmVyXG4gIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlUm9ib3RzUmVzb2x2ZXIge1xuICBwcm90ZWN0ZWQgY21zJDogT2JzZXJ2YWJsZTxQYWdlPiA9IHRoaXMuY21zXG4gICAgLmdldEN1cnJlbnRQYWdlKClcbiAgICAucGlwZShmaWx0ZXIoKHBhZ2UpID0+ICEhcGFnZSkpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gICAgdGhpcy5wYWdlVGVtcGxhdGUgPSAnQ2FydFBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIHBhZ2UgdGl0bGUsIHdoaWNoIGlzIGRyaXZlbiBieSB0aGUgYmFja2VuZC5cbiAgICovXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNtcyQucGlwZShtYXAoKHApID0+IHAudGl0bGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHJvYm90cyBmb3IgdGhlIGNhcnQgcGFnZXMsIHdoaWNoIGRlZmF1bHQgdG8gTk9JTkRFWCBhbmQgTk9GT0xMT1cuXG4gICAqL1xuICByZXNvbHZlUm9ib3RzKCk6IE9ic2VydmFibGU8UGFnZVJvYm90c01ldGFbXT4ge1xuICAgIHJldHVybiBvZihbUGFnZVJvYm90c01ldGEuTk9GT0xMT1csIFBhZ2VSb2JvdHNNZXRhLk5PSU5ERVhdKTtcbiAgfVxufVxuIl19