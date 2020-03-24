import { Observable } from 'rxjs';
import { TranslationService } from '../../i18n/translation.service';
import { CmsService } from '../facade/cms.service';
import { BreadcrumbMeta, Page } from '../model/page.model';
import { PageMetaResolver } from './page-meta.resolver';
import { PageBreadcrumbResolver, PageTitleResolver } from './page.resolvers';
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`.
 * More specific resolvers for content pages can be implemented by making them more
 * specific, for example by using the page template (see `CartPageMetaResolver`).
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
import * as ɵngcc0 from '@angular/core';
export declare class ContentPageMetaResolver extends PageMetaResolver implements PageTitleResolver, PageBreadcrumbResolver {
    protected cms: CmsService;
    protected translation: TranslationService;
    /** helper to provie access to the current CMS page */
    protected cms$: Observable<Page>;
    constructor(cms: CmsService, translation: TranslationService);
    /**
     * Resolves the page title for the ContentPage by taking the title
     * from the backend data.
     */
    resolveTitle(): Observable<string>;
    /**
     * Resolves a single breacrumb item to the home page for each `ContentPage`.
     * The home page label is resolved from the translation service.
     */
    resolveBreadcrumbs(): Observable<BreadcrumbMeta[]>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ContentPageMetaResolver>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIuZC50cyIsInNvdXJjZXMiOlsiY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTWV0YSwgUGFnZSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsIFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi9wYWdlLnJlc29sdmVycyc7XG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIGFsbCBDb250ZW50IFBhZ2VzIGJhc2VkIG9uIHRoZSBgUGFnZVR5cGUuQ09OVEVOVF9QQUdFYC5cbiAqIE1vcmUgc3BlY2lmaWMgcmVzb2x2ZXJzIGZvciBjb250ZW50IHBhZ2VzIGNhbiBiZSBpbXBsZW1lbnRlZCBieSBtYWtpbmcgdGhlbSBtb3JlXG4gKiBzcGVjaWZpYywgZm9yIGV4YW1wbGUgYnkgdXNpbmcgdGhlIHBhZ2UgdGVtcGxhdGUgKHNlZSBgQ2FydFBhZ2VNZXRhUmVzb2x2ZXJgKS5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSwgYW5kIGJyZWFkY3J1bWJzIGFyZSByZXNvbHZlZCBpbiB0aGlzIGltcGxlbWVudGF0aW9uIG9ubHkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbnRlbnRQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlciBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlQnJlYWRjcnVtYlJlc29sdmVyIHtcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIC8qKiBoZWxwZXIgdG8gcHJvdmllIGFjY2VzcyB0byB0aGUgY3VycmVudCBDTVMgcGFnZSAqL1xuICAgIHByb3RlY3RlZCBjbXMkOiBPYnNlcnZhYmxlPFBhZ2U+O1xuICAgIGNvbnN0cnVjdG9yKGNtczogQ21zU2VydmljZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgdGhlIHBhZ2UgdGl0bGUgZm9yIHRoZSBDb250ZW50UGFnZSBieSB0YWtpbmcgdGhlIHRpdGxlXG4gICAgICogZnJvbSB0aGUgYmFja2VuZCBkYXRhLlxuICAgICAqL1xuICAgIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgYSBzaW5nbGUgYnJlYWNydW1iIGl0ZW0gdG8gdGhlIGhvbWUgcGFnZSBmb3IgZWFjaCBgQ29udGVudFBhZ2VgLlxuICAgICAqIFRoZSBob21lIHBhZ2UgbGFiZWwgaXMgcmVzb2x2ZWQgZnJvbSB0aGUgdHJhbnNsYXRpb24gc2VydmljZS5cbiAgICAgKi9cbiAgICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxCcmVhZGNydW1iTWV0YVtdPjtcbn1cbiJdfQ==