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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1tZXRhLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsicGFnZS1tZXRhLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlLCBQYWdlTWV0YSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4uL3BhZ2UvcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuL2Ntcy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFBhZ2VNZXRhU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHJlc29sdmVyczogUGFnZU1ldGFSZXNvbHZlcltdO1xuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGZlYXR1cmVDb25maWdTZXJ2aWNlPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2U7XG4gICAgY29uc3RydWN0b3IocmVzb2x2ZXJzOiBQYWdlTWV0YVJlc29sdmVyW10sIGNtczogQ21zU2VydmljZSwgZmVhdHVyZUNvbmZpZ1NlcnZpY2U/OiBGZWF0dXJlQ29uZmlnU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogVGhlIGxpc3Qgb2YgcmVzb2x2ZXIgaW50ZXJmYWNlcyB3aWxsIGJlIGV2YWx1YXRlZCBmb3IgdGhlIHBhZ2VSZXNvbHZlcnMuXG4gICAgICpcbiAgICAgKiBUT09EOiBvcHRpbWl6ZSBicm93c2VyIHZzIFNTUiByZXNvbHZlcnM7IGltYWdlLCByb2JvdHMgYW5kIGRlc2NyaXB0aW9uXG4gICAgICogICAgICAgYXJlbid0IG5lZWRlZCBkdXJpbmcgYnJvd3NpbmcuXG4gICAgICogVE9ETzogd2UgY2FuIG1ha2UgdGhlIGxpc3Qgb2YgcmVzb2x2ZXIgdHlwZXMgY29uZmlndXJhYmxlXG4gICAgICovXG4gICAgcmVzb2x2ZXJNZXRob2RzOiB7XG4gICAgICAgIHRpdGxlOiBzdHJpbmc7XG4gICAgICAgIGhlYWRpbmc6IHN0cmluZztcbiAgICAgICAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgICAgICAgYnJlYWRjcnVtYnM6IHN0cmluZztcbiAgICAgICAgaW1hZ2U6IHN0cmluZztcbiAgICAgICAgcm9ib3RzOiBzdHJpbmc7XG4gICAgfTtcbiAgICBnZXRNZXRhKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+O1xuICAgIC8qKlxuICAgICAqIElmIGEgcGFnZVJlc29sdmVyIGhhcyBpbXBsZW1lbnRlZCBhIHJlc29sdmVyIGludGVyZmFjZSwgdGhlIHJlc29sdmVkIGRhdGFcbiAgICAgKiBpcyBtZXJnZWQgaW50byB0aGUgYFBhZ2VNZXRhYCBvYmplY3QuXG4gICAgICogQHBhcmFtIG1ldGFSZXNvbHZlclxuICAgICAqL1xuICAgIHByaXZhdGUgcmVzb2x2ZTtcbiAgICAvKipcbiAgICAgKiByZXR1cm4gdGhlIHJlc29sdmVyIHdpdGggdGhlIGJlc3QgbWF0Y2hcbiAgICAgKiByZXNvdmVycyBjYW4gYnkgZGVmYXVsdCBtYXRjaCBvbiBQYWdlVHlwZSBhbmQgcGFnZSB0ZW1wbGF0ZVxuICAgICAqIGJ1dCBjdXN0b20gbWF0Y2ggY29tcGFyaXNvcnMgY2FuIGJlIGltcGxlbWVudGVkLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRNZXRhUmVzb2x2ZXIocGFnZTogUGFnZSk6IFBhZ2VNZXRhUmVzb2x2ZXI7XG59XG4iXX0=