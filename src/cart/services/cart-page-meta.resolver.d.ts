import { Observable } from 'rxjs';
import { CmsService } from '../../cms/facade/cms.service';
import { Page, PageMeta, PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`
 * and the `CartPageTemplate`. If the cart page matches this template, the more generic
 * `ContentPageMetaResolver` is overriden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CartPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageRobotsResolver {
    protected cms: CmsService;
    cms$: Observable<Page>;
    constructor(cms: CmsService);
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    resolve(): Observable<PageMeta> | any;
    resolveTitle(): Observable<string>;
    /**
     * @deprecated since version 1.3
     * With 2.0, the argument(s) will be removed and the return type will change. Use `resolveTitle()` instead
     */
    resolveTitle(page: Page): Observable<string>;
    resolveRobots(): Observable<PageRobotsMeta[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartPageMetaResolver>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuZC50cyIsInNvdXJjZXMiOlsiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgUGFnZVJvYm90c1Jlc29sdmVyLCBQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgYWxsIENvbnRlbnQgUGFnZXMgYmFzZWQgb24gdGhlIGBQYWdlVHlwZS5DT05URU5UX1BBR0VgXG4gKiBhbmQgdGhlIGBDYXJ0UGFnZVRlbXBsYXRlYC4gSWYgdGhlIGNhcnQgcGFnZSBtYXRjaGVzIHRoaXMgdGVtcGxhdGUsIHRoZSBtb3JlIGdlbmVyaWNcbiAqIGBDb250ZW50UGFnZU1ldGFSZXNvbHZlcmAgaXMgb3ZlcnJpZGVuIGJ5IHRoaXMgcmVzb2x2ZXIuXG4gKlxuICogVGhlIHBhZ2UgdGl0bGUgYW5kIHJvYm90cyBhcmUgcmVzb2x2ZWQgaW4gdGhpcyBpbXBsZW1lbnRhdGlvbiBvbmx5LlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDYXJ0UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXIgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZVJvYm90c1Jlc29sdmVyIHtcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlO1xuICAgIGNtcyQ6IE9ic2VydmFibGU8UGFnZT47XG4gICAgY29uc3RydWN0b3IoY21zOiBDbXNTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqXG4gICAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAgICogaW5zdGVhZCwgc28gdGhhdCB0aGUgY29kZSBpcyBlYXNpZXIgZXh0ZW5zaWJsZS5cbiAgICAgKi9cbiAgICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHwgYW55O1xuICAgIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAgICovXG4gICAgcmVzb2x2ZVRpdGxlKHBhZ2U6IFBhZ2UpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgcmVzb2x2ZVJvYm90cygpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+O1xufVxuIl19