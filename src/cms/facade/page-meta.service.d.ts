import { Observable } from 'rxjs';
import { FeatureConfigService } from '../../features-config/services/feature-config.service';
import { Page, PageMeta } from '../model/page.model';
import { PageMetaResolver } from '../page/page-meta.resolver';
import { CmsService } from './cms.service';
import * as ɵngcc0 from '@angular/core';
export declare class PageMetaService {
    protected resolvers: PageMetaResolver[];
    protected cms: CmsService;
    protected featureConfigService?: FeatureConfigService;
    constructor(resolvers: PageMetaResolver[], cms: CmsService, featureConfigService?: FeatureConfigService);
    /**
     * The list of resolver interfaces will be evaluated for the pageResolvers.
     *
     * TOOD: optimize browser vs SSR resolvers; image, robots and description
     *       aren't needed during browsing.
     * TODO: we can make the list of resolver types configurable
     */
    resolverMethods: {
        title: string;
        heading: string;
        description: string;
        breadcrumbs: string;
        image: string;
        robots: string;
    };
    getMeta(): Observable<PageMeta>;
    /**
     * If a pageResolver has implemented a resolver interface, the resolved data
     * is merged into the `PageMeta` object.
     * @param metaResolver
     */
    private resolve;
    /**
     * return the resolver with the best match
     * resovers can by default match on PageType and page template
     * but custom match comparisors can be implemented.
     */
    protected getMetaResolver(page: Page): PageMetaResolver;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PageMetaService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsicGFnZS1tZXRhLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UsIFBhZ2VNZXRhIH0gZnJvbSAnLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi4vcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4vY21zLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUGFnZU1ldGFTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZXJzOiBQYWdlTWV0YVJlc29sdmVyW107XG4gICAgcHJvdGVjdGVkIGNtczogQ21zU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZ1NlcnZpY2U/OiBGZWF0dXJlQ29uZmlnU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihyZXNvbHZlcnM6IFBhZ2VNZXRhUmVzb2x2ZXJbXSwgY21zOiBDbXNTZXJ2aWNlLCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiByZXNvbHZlciBpbnRlcmZhY2VzIHdpbGwgYmUgZXZhbHVhdGVkIGZvciB0aGUgcGFnZVJlc29sdmVycy5cbiAgICAgKlxuICAgICAqIFRPT0Q6IG9wdGltaXplIGJyb3dzZXIgdnMgU1NSIHJlc29sdmVyczsgaW1hZ2UsIHJvYm90cyBhbmQgZGVzY3JpcHRpb25cbiAgICAgKiAgICAgICBhcmVuJ3QgbmVlZGVkIGR1cmluZyBicm93c2luZy5cbiAgICAgKiBUT0RPOiB3ZSBjYW4gbWFrZSB0aGUgbGlzdCBvZiByZXNvbHZlciB0eXBlcyBjb25maWd1cmFibGVcbiAgICAgKi9cbiAgICByZXNvbHZlck1ldGhvZHM6IHtcbiAgICAgICAgdGl0bGU6IHN0cmluZztcbiAgICAgICAgaGVhZGluZzogc3RyaW5nO1xuICAgICAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgICAgICBicmVhZGNydW1iczogc3RyaW5nO1xuICAgICAgICBpbWFnZTogc3RyaW5nO1xuICAgICAgICByb2JvdHM6IHN0cmluZztcbiAgICB9O1xuICAgIGdldE1ldGEoKTogT2JzZXJ2YWJsZTxQYWdlTWV0YT47XG4gICAgLyoqXG4gICAgICogSWYgYSBwYWdlUmVzb2x2ZXIgaGFzIGltcGxlbWVudGVkIGEgcmVzb2x2ZXIgaW50ZXJmYWNlLCB0aGUgcmVzb2x2ZWQgZGF0YVxuICAgICAqIGlzIG1lcmdlZCBpbnRvIHRoZSBgUGFnZU1ldGFgIG9iamVjdC5cbiAgICAgKiBAcGFyYW0gbWV0YVJlc29sdmVyXG4gICAgICovXG4gICAgcHJpdmF0ZSByZXNvbHZlO1xuICAgIC8qKlxuICAgICAqIHJldHVybiB0aGUgcmVzb2x2ZXIgd2l0aCB0aGUgYmVzdCBtYXRjaFxuICAgICAqIHJlc292ZXJzIGNhbiBieSBkZWZhdWx0IG1hdGNoIG9uIFBhZ2VUeXBlIGFuZCBwYWdlIHRlbXBsYXRlXG4gICAgICogYnV0IGN1c3RvbSBtYXRjaCBjb21wYXJpc29ycyBjYW4gYmUgaW1wbGVtZW50ZWQuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldE1ldGFSZXNvbHZlcihwYWdlOiBQYWdlKTogUGFnZU1ldGFSZXNvbHZlcjtcbn1cbiJdfQ==