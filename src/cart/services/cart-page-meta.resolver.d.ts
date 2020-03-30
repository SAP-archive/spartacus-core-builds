import { Observable } from 'rxjs';
import { CmsService } from '../../cms/facade/cms.service';
import { Page, PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { PageRobotsResolver, PageTitleResolver } from '../../cms/page/page.resolvers';
/**
 * Resolves the page metadata for the Cart page (Using the `PageType.CONTENT_PAGE`
 * and the `CartPageTemplate`). If the cart page matches this template, the more
 * generic `ContentPageMetaResolver` is overriden by this resolver.
 *
 * The page title and robots are resolved in this implementation only.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CartPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageRobotsResolver {
    protected cms: CmsService;
    protected cms$: Observable<Page>;
    constructor(cms: CmsService);
    /**
     * Resolves the page title, which is driven by the backend.
     */
    resolveTitle(): Observable<string>;
    /**
     * Returns robots for the cart pages, which default to NOINDEX and NOFOLLOW.
     */
    resolveRobots(): Observable<PageRobotsMeta[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CartPageMetaResolver, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuZC50cyIsInNvdXJjZXMiOlsiY2FydC1wYWdlLW1ldGEucmVzb2x2ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztBQVlBOzs7Ozs7Ozs7Ozs7O0FBWUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgUGFnZVJvYm90c1Jlc29sdmVyLCBQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4uLy4uL2Ntcy9wYWdlL3BhZ2UucmVzb2x2ZXJzJztcbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgbWV0YWRhdGEgZm9yIHRoZSBDYXJ0IHBhZ2UgKFVzaW5nIHRoZSBgUGFnZVR5cGUuQ09OVEVOVF9QQUdFYFxuICogYW5kIHRoZSBgQ2FydFBhZ2VUZW1wbGF0ZWApLiBJZiB0aGUgY2FydCBwYWdlIG1hdGNoZXMgdGhpcyB0ZW1wbGF0ZSwgdGhlIG1vcmVcbiAqIGdlbmVyaWMgYENvbnRlbnRQYWdlTWV0YVJlc29sdmVyYCBpcyBvdmVycmlkZW4gYnkgdGhpcyByZXNvbHZlci5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSBhbmQgcm9ib3RzIGFyZSByZXNvbHZlZCBpbiB0aGlzIGltcGxlbWVudGF0aW9uIG9ubHkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcnRQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlciBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlUm9ib3RzUmVzb2x2ZXIge1xuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNtcyQ6IE9ic2VydmFibGU8UGFnZT47XG4gICAgY29uc3RydWN0b3IoY21zOiBDbXNTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyB0aGUgcGFnZSB0aXRsZSwgd2hpY2ggaXMgZHJpdmVuIGJ5IHRoZSBiYWNrZW5kLlxuICAgICAqL1xuICAgIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyByb2JvdHMgZm9yIHRoZSBjYXJ0IHBhZ2VzLCB3aGljaCBkZWZhdWx0IHRvIE5PSU5ERVggYW5kIE5PRk9MTE9XLlxuICAgICAqL1xuICAgIHJlc29sdmVSb2JvdHMoKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPjtcbn1cbiJdfQ==