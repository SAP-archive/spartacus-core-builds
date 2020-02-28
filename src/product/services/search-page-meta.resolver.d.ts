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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhcmNoLXBhZ2UtbWV0YS5yZXNvbHZlci5kLnRzIiwic291cmNlcyI6WyJzZWFyY2gtcGFnZS1tZXRhLnJlc29sdmVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vLi4vY21zJztcbmltcG9ydCB7IFBhZ2VNZXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBkYXRhIGZvciB0aGUgU2VhcmNoIFJlc3VsdCBQYWdlIGJhc2VkIG9uIHRoZVxuICogYFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0VgIGFuZCB0aGUgYFNlYXJjaFJlc3VsdHNMaXN0UGFnZVRlbXBsYXRlYCB0ZW1wbGF0ZS5cbiAqXG4gKiBPbmx5IHRoZSBwYWdlIHRpdGxlIGlzIHJlc29sdmVkIGluIHRoZSBpbXBsZW1lbmF0aW9uLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTZWFyY2hQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlciBpbXBsZW1lbnRzIFBhZ2VNZXRhUmVzb2x2ZXIge1xuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZTtcbiAgICB0b3RhbCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgICBxdWVyeSQ6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICBjb25zdHJ1Y3Rvcihyb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsIHByb2R1Y3RTZWFyY2hTZXJ2aWNlOiBQcm9kdWN0U2VhcmNoU2VydmljZSwgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICAgKlxuICAgICAqIFRoZSByZXNvbHZlIG1ldGhvZCBpcyBubyBsb25nZXIgcHJlZmVycmVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgd2l0aCByZWxlYXNlIDIuMC5cbiAgICAgKiBUaGUgY2FsbGVyIGBQYWdlTWV0YVNlcnZpY2VgIHNlcnZpY2UgaXMgaW1wcm92ZWQgdG8gZXhwZWN0IGFsbCBpbmRpdmlkdWFsIHJlc29sdmVyc1xuICAgICAqIGluc3RlYWQsIHNvIHRoYXQgdGhlIGNvZGUgaXMgZWFzaWVyIGV4dGVuc2libGUuXG4gICAgICovXG4gICAgcmVzb2x2ZSgpOiBPYnNlcnZhYmxlPFBhZ2VNZXRhPiB8IGFueTtcbiAgICByZXNvbHZlVGl0bGUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlVGl0bGUoKWAgaW5zdGVhZFxuICAgICAqL1xuICAgIHJlc29sdmVUaXRsZSh0b3RhbDogbnVtYmVyLCBxdWVyeTogc3RyaW5nKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xufVxuIl19