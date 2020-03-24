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
            .pipe(filter(page => !!page));
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'CartPageTemplate';
    }
    /**
     * Resolves the page title, which is driven by the backend.
     */
    resolveTitle() {
        return this.cms$.pipe(map(p => p.title));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9zZXJ2aWNlcy9jYXJ0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFELE9BQU8sRUFBUSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUtyRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7OztBQUVqRDs7Ozs7O0dBTUc7QUFJSCxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFxQixTQUFRLGdCQUFnQjtJQU14RCxZQUFzQixHQUFlO1FBQ25DLEtBQUssRUFBRSxDQUFDO1FBRFksUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUozQixTQUFJLEdBQXFCLElBQUksQ0FBQyxHQUFHO2FBQ3hDLGNBQWMsRUFBRTthQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFJOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUM7SUFDekMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYTtRQUNYLE9BQU8sRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0YsQ0FBQTs7WUFuQjRCLFVBQVU7OztBQU4xQixvQkFBb0I7SUFIaEMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLG9CQUFvQixDQXlCaEM7U0F6Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7XG4gIFBhZ2VSb2JvdHNSZXNvbHZlcixcbiAgUGFnZVRpdGxlUmVzb2x2ZXIsXG59IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBtZXRhZGF0YSBmb3IgdGhlIENhcnQgcGFnZSAoVXNpbmcgdGhlIGBQYWdlVHlwZS5DT05URU5UX1BBR0VgXG4gKiBhbmQgdGhlIGBDYXJ0UGFnZVRlbXBsYXRlYCkuIElmIHRoZSBjYXJ0IHBhZ2UgbWF0Y2hlcyB0aGlzIHRlbXBsYXRlLCB0aGUgbW9yZVxuICogZ2VuZXJpYyBgQ29udGVudFBhZ2VNZXRhUmVzb2x2ZXJgIGlzIG92ZXJyaWRlbiBieSB0aGlzIHJlc29sdmVyLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlIGFuZCByb2JvdHMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlUm9ib3RzUmVzb2x2ZXIge1xuICBwcm90ZWN0ZWQgY21zJDogT2JzZXJ2YWJsZTxQYWdlPiA9IHRoaXMuY21zXG4gICAgLmdldEN1cnJlbnRQYWdlKClcbiAgICAucGlwZShmaWx0ZXIocGFnZSA9PiAhIXBhZ2UpKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICAgIHRoaXMucGFnZVRlbXBsYXRlID0gJ0NhcnRQYWdlVGVtcGxhdGUnO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBwYWdlIHRpdGxlLCB3aGljaCBpcyBkcml2ZW4gYnkgdGhlIGJhY2tlbmQuXG4gICAqL1xuICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy5jbXMkLnBpcGUobWFwKHAgPT4gcC50aXRsZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgcm9ib3RzIGZvciB0aGUgY2FydCBwYWdlcywgd2hpY2ggZGVmYXVsdCB0byBOT0lOREVYIGFuZCBOT0ZPTExPVy5cbiAgICovXG4gIHJlc29sdmVSb2JvdHMoKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPiB7XG4gICAgcmV0dXJuIG9mKFtQYWdlUm9ib3RzTWV0YS5OT0ZPTExPVywgUGFnZVJvYm90c01ldGEuTk9JTkRFWF0pO1xuICB9XG59XG4iXX0=