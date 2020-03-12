import { Observable } from 'rxjs';
import { PageMetaResolver } from '../../cms';
import { PageMeta } from '../../cms/model/page.model';
import { TranslationService } from '../../i18n/translation.service';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../facade/product-search.service';
/**
 * Resolves the page data for the Search Result Page based on the
 * `PageType.CATEGORY_PAGE` and the `SearchResultsListPageTemplate` template.
 *
 * Only the page title is resolved in the implemenation.
 */
import * as ɵngcc0 from '@angular/core';
export declare class SearchPageMetaResolver extends PageMetaResolver implements PageMetaResolver {
    protected routingService: RoutingService;
    protected productSearchService: ProductSearchService;
    protected translation: TranslationService;
    total$: Observable<number>;
    query$: Observable<string>;
    constructor(routingService: RoutingService, productSearchService: ProductSearchService, translation: TranslationService);
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
    resolveTitle(total: number, query: string): Observable<string>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SearchPageMetaResolver>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci5kLnRzIiwic291cmNlcyI6WyJzZWFyY2gtcGFnZS1tZXRhLnJlc29sdmVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMnO1xuaW1wb3J0IHsgUGFnZU1ldGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC1zZWFyY2guc2VydmljZSc7XG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIHRoZSBTZWFyY2ggUmVzdWx0IFBhZ2UgYmFzZWQgb24gdGhlXG4gKiBgUGFnZVR5cGUuQ0FURUdPUllfUEFHRWAgYW5kIHRoZSBgU2VhcmNoUmVzdWx0c0xpc3RQYWdlVGVtcGxhdGVgIHRlbXBsYXRlLlxuICpcbiAqIE9ubHkgdGhlIHBhZ2UgdGl0bGUgaXMgcmVzb2x2ZWQgaW4gdGhlIGltcGxlbWVuYXRpb24uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNlYXJjaFBhZ2VNZXRhUmVzb2x2ZXIgZXh0ZW5kcyBQYWdlTWV0YVJlc29sdmVyIGltcGxlbWVudHMgUGFnZU1ldGFSZXNvbHZlciB7XG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlO1xuICAgIHRvdGFsJDogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIHF1ZXJ5JDogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIGNvbnN0cnVjdG9yKHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSwgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgICAqXG4gICAgICogVGhlIHJlc29sdmUgbWV0aG9kIGlzIG5vIGxvbmdlciBwcmVmZXJyZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCB3aXRoIHJlbGVhc2UgMi4wLlxuICAgICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAgICogaW5zdGVhZCwgc28gdGhhdCB0aGUgY29kZSBpcyBlYXNpZXIgZXh0ZW5zaWJsZS5cbiAgICAgKi9cbiAgICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHwgYW55O1xuICAgIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAgICovXG4gICAgcmVzb2x2ZVRpdGxlKHRvdGFsOiBudW1iZXIsIHF1ZXJ5OiBzdHJpbmcpOiBPYnNlcnZhYmxlPHN0cmluZz47XG59XG4iXX0=