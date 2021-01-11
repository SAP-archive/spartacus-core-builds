import { Injectable, Optional } from '@angular/core';
import { of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { BasePageMetaResolver } from '../../cms/page/base-page-meta.resolver';
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
 *
 * @deprecated since 3.1, in future versions we'll drop this service as the logic
 * is no longer specific since we introduce backend driven robots.
 */
// TODO(#10467): Remove implementation
export class CartPageMetaResolver extends PageMetaResolver {
    constructor(cms, basePageMetaResolver) {
        super();
        this.cms = cms;
        this.basePageMetaResolver = basePageMetaResolver;
        // TODO(#10467): remove the cms property as it's no longer needed when we use the `BasePageMetaResolver`
        /**
         * @deprecated since 3.1, we'll use the BasePageMetaResolver to resolve the page title
         */
        this.cms$ = this.cms
            .getCurrentPage()
            .pipe(filter((page) => !!page));
        this.pageType = PageType.CONTENT_PAGE;
        this.pageTemplate = 'CartPageTemplate';
    }
    resolveTitle() {
        // TODO(#10467): resolve the title from the `BasePageMetaResolver.resolveTitle()` only
        return this.basePageMetaResolver
            ? this.basePageMetaResolver.resolveTitle()
            : this.cms$.pipe(map((p) => p.title));
    }
    /**
     * @Override Returns robots for the cart pages, which default to NOINDEX/NOFOLLOW.
     */
    // TODO(#10467): resolve robots from `BasePageMetaResolver` instead
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
    { type: CmsService },
    { type: BasePageMetaResolver, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jYXJ0L3NlcnZpY2VzL2NhcnQtcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFRLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBS3JFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBRWpEOzs7Ozs7Ozs7R0FTRztBQUNILHNDQUFzQztBQUl0QyxNQUFNLE9BQU8sb0JBQ1gsU0FBUSxnQkFBZ0I7SUFVeEIsWUFDWSxHQUFlLEVBQ0gsb0JBQTJDO1FBRWpFLEtBQUssRUFBRSxDQUFDO1FBSEUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNILHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBdUI7UUFPbkUsd0dBQXdHO1FBQ3hHOztXQUVHO1FBQ08sU0FBSSxHQUFxQixJQUFJLENBQUMsR0FBRzthQUN4QyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFWaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxZQUFZLEdBQUcsa0JBQWtCLENBQUM7SUFDekMsQ0FBQztJQVVELFlBQVk7UUFDVixzRkFBc0Y7UUFDdEYsT0FBTyxJQUFJLENBQUMsb0JBQW9CO1lBQzlCLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxFQUFFO1lBQzFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7T0FFRztJQUNILG1FQUFtRTtJQUNuRSxhQUFhO1FBQ1gsT0FBTyxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7Ozs7WUE1Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUF2QlEsVUFBVTtZQUVWLG9CQUFvQix1QkFtQ3hCLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBCYXNlUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL2Jhc2UtcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHtcbiAgUGFnZVJvYm90c1Jlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIG1ldGFkYXRhIGZvciB0aGUgQ2FydCBwYWdlIChVc2luZyB0aGUgYFBhZ2VUeXBlLkNPTlRFTlRfUEFHRWBcbiAqIGFuZCB0aGUgYENhcnRQYWdlVGVtcGxhdGVgKS4gSWYgdGhlIGNhcnQgcGFnZSBtYXRjaGVzIHRoaXMgdGVtcGxhdGUsIHRoZSBtb3JlXG4gKiBnZW5lcmljIGBDb250ZW50UGFnZU1ldGFSZXNvbHZlcmAgaXMgb3ZlcnJpZGRlbiBieSB0aGlzIHJlc29sdmVyLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlIGFuZCByb2JvdHMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSAzLjEsIGluIGZ1dHVyZSB2ZXJzaW9ucyB3ZSdsbCBkcm9wIHRoaXMgc2VydmljZSBhcyB0aGUgbG9naWNcbiAqIGlzIG5vIGxvbmdlciBzcGVjaWZpYyBzaW5jZSB3ZSBpbnRyb2R1Y2UgYmFja2VuZCBkcml2ZW4gcm9ib3RzLlxuICovXG4vLyBUT0RPKCMxMDQ2Nyk6IFJlbW92ZSBpbXBsZW1lbnRhdGlvblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcnRQYWdlTWV0YVJlc29sdmVyXG4gIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlUm9ib3RzUmVzb2x2ZXIge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMy4xLCB3ZSdsbCB1c2UgdGhlIEJhc2VQYWdlTWV0YVJlc29sdmVyIGluIGZ1dHVyZSB2ZXJzaW9ucyBhbmRcbiAgICogZHJvcCB0aGUgQ21zU2VydmljZSBmcm9tIHRoZSBjb25zdHJ1Y3RvciBhcyBpdCB3aWxsIG5vIGxvbmdlciBiZSB1c2VkLlxuICAgKi9cbiAgLy8gVE9ETygjMTA0NjcpOiBSZW1vdmUgZGVwcmVjYXRlZCBjb25zdHJ1Y3RvcnNcbiAgY29uc3RydWN0b3IoY21zOiBDbXNTZXJ2aWNlKTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgY29uc3RydWN0b3IoY21zOiBDbXNTZXJ2aWNlLCBiYXNlUGFnZU1ldGFSZXNvbHZlcj86IEJhc2VQYWdlTWV0YVJlc29sdmVyKTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgYmFzZVBhZ2VNZXRhUmVzb2x2ZXI/OiBCYXNlUGFnZU1ldGFSZXNvbHZlclxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gICAgdGhpcy5wYWdlVGVtcGxhdGUgPSAnQ2FydFBhZ2VUZW1wbGF0ZSc7XG4gIH1cblxuICAvLyBUT0RPKCMxMDQ2Nyk6IHJlbW92ZSB0aGUgY21zIHByb3BlcnR5IGFzIGl0J3Mgbm8gbG9uZ2VyIG5lZWRlZCB3aGVuIHdlIHVzZSB0aGUgYEJhc2VQYWdlTWV0YVJlc29sdmVyYFxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMy4xLCB3ZSdsbCB1c2UgdGhlIEJhc2VQYWdlTWV0YVJlc29sdmVyIHRvIHJlc29sdmUgdGhlIHBhZ2UgdGl0bGVcbiAgICovXG4gIHByb3RlY3RlZCBjbXMkOiBPYnNlcnZhYmxlPFBhZ2U+ID0gdGhpcy5jbXNcbiAgICAuZ2V0Q3VycmVudFBhZ2UoKVxuICAgIC5waXBlKGZpbHRlcigocGFnZSkgPT4gISFwYWdlKSk7XG5cbiAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgLy8gVE9ETygjMTA0NjcpOiByZXNvbHZlIHRoZSB0aXRsZSBmcm9tIHRoZSBgQmFzZVBhZ2VNZXRhUmVzb2x2ZXIucmVzb2x2ZVRpdGxlKClgIG9ubHlcbiAgICByZXR1cm4gdGhpcy5iYXNlUGFnZU1ldGFSZXNvbHZlclxuICAgICAgPyB0aGlzLmJhc2VQYWdlTWV0YVJlc29sdmVyLnJlc29sdmVUaXRsZSgpXG4gICAgICA6IHRoaXMuY21zJC5waXBlKG1hcCgocCkgPT4gcC50aXRsZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBPdmVycmlkZSBSZXR1cm5zIHJvYm90cyBmb3IgdGhlIGNhcnQgcGFnZXMsIHdoaWNoIGRlZmF1bHQgdG8gTk9JTkRFWC9OT0ZPTExPVy5cbiAgICovXG4gIC8vIFRPRE8oIzEwNDY3KTogcmVzb2x2ZSByb2JvdHMgZnJvbSBgQmFzZVBhZ2VNZXRhUmVzb2x2ZXJgIGluc3RlYWRcbiAgcmVzb2x2ZVJvYm90cygpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+IHtcbiAgICByZXR1cm4gb2YoW1BhZ2VSb2JvdHNNZXRhLk5PRk9MTE9XLCBQYWdlUm9ib3RzTWV0YS5OT0lOREVYXSk7XG4gIH1cbn1cbiJdfQ==