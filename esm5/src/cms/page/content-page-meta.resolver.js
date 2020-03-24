import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { CmsService } from '../facade/cms.service';
import { PageMetaResolver } from './page-meta.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../facade/cms.service";
import * as i2 from "../../i18n/translation.service";
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`.
 * More specific resolvers for content pages can be implemented by making them more
 * specific, for example by using the page template (see `CartPageMetaResolver`).
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
var ContentPageMetaResolver = /** @class */ (function (_super) {
    __extends(ContentPageMetaResolver, _super);
    function ContentPageMetaResolver(cms, translation) {
        var _this = _super.call(this) || this;
        _this.cms = cms;
        _this.translation = translation;
        /** helper to provie access to the current CMS page */
        _this.cms$ = _this.cms
            .getCurrentPage()
            .pipe(filter(function (p) { return Boolean(p); }));
        _this.pageType = PageType.CONTENT_PAGE;
        return _this;
    }
    /**
     * Resolves the page title for the ContentPage by taking the title
     * from the backend data.
     */
    ContentPageMetaResolver.prototype.resolveTitle = function () {
        return this.cms$.pipe(map(function (p) { return p.title; }));
    };
    /**
     * Resolves a single breacrumb item to the home page for each `ContentPage`.
     * The home page label is resolved from the translation service.
     */
    ContentPageMetaResolver.prototype.resolveBreadcrumbs = function () {
        return this.translation
            .translate('common.home')
            .pipe(map(function (label) { return [{ label: label, link: '/' }]; }));
    };
    ContentPageMetaResolver.ctorParameters = function () { return [
        { type: CmsService },
        { type: TranslationService }
    ]; };
    ContentPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function ContentPageMetaResolver_Factory() { return new ContentPageMetaResolver(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.TranslationService)); }, token: ContentPageMetaResolver, providedIn: "root" });
    ContentPageMetaResolver = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ContentPageMetaResolver);
    return ContentPageMetaResolver;
}(PageMetaResolver));
export { ContentPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7O0FBR3hEOzs7Ozs7R0FNRztBQUlIO0lBQTZDLDJDQUFnQjtJQU8zRCxpQ0FDWSxHQUFlLEVBQ2YsV0FBK0I7UUFGM0MsWUFJRSxpQkFBTyxTQUVSO1FBTFcsU0FBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQVAzQyxzREFBc0Q7UUFDNUMsVUFBSSxHQUFxQixLQUFJLENBQUMsR0FBRzthQUN4QyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBVixDQUFVLENBQUMsQ0FBQyxDQUFDO1FBTy9CLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQzs7SUFDeEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILDhDQUFZLEdBQVo7UUFDRSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsb0RBQWtCLEdBQWxCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVzthQUNwQixTQUFTLENBQUMsYUFBYSxDQUFDO2FBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQXFCLEVBQWpELENBQWlELENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7O2dCQXZCZ0IsVUFBVTtnQkFDRixrQkFBa0I7OztJQVRoQyx1QkFBdUI7UUFIbkMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHVCQUF1QixDQWdDbkM7a0NBcEREO0NBb0RDLEFBaENELENBQTZDLGdCQUFnQixHQWdDNUQ7U0FoQ1ksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTWV0YSwgUGFnZSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsIFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi9wYWdlLnJlc29sdmVycyc7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgYWxsIENvbnRlbnQgUGFnZXMgYmFzZWQgb24gdGhlIGBQYWdlVHlwZS5DT05URU5UX1BBR0VgLlxuICogTW9yZSBzcGVjaWZpYyByZXNvbHZlcnMgZm9yIGNvbnRlbnQgcGFnZXMgY2FuIGJlIGltcGxlbWVudGVkIGJ5IG1ha2luZyB0aGVtIG1vcmVcbiAqIHNwZWNpZmljLCBmb3IgZXhhbXBsZSBieSB1c2luZyB0aGUgcGFnZSB0ZW1wbGF0ZSAoc2VlIGBDYXJ0UGFnZU1ldGFSZXNvbHZlcmApLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBhbmQgYnJlYWRjcnVtYnMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlQnJlYWRjcnVtYlJlc29sdmVyIHtcbiAgLyoqIGhlbHBlciB0byBwcm92aWUgYWNjZXNzIHRvIHRoZSBjdXJyZW50IENNUyBwYWdlICovXG4gIHByb3RlY3RlZCBjbXMkOiBPYnNlcnZhYmxlPFBhZ2U+ID0gdGhpcy5jbXNcbiAgICAuZ2V0Q3VycmVudFBhZ2UoKVxuICAgIC5waXBlKGZpbHRlcihwID0+IEJvb2xlYW4ocCkpKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgcGFnZSB0aXRsZSBmb3IgdGhlIENvbnRlbnRQYWdlIGJ5IHRha2luZyB0aGUgdGl0bGVcbiAgICogZnJvbSB0aGUgYmFja2VuZCBkYXRhLlxuICAgKi9cbiAgcmVzb2x2ZVRpdGxlKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zJC5waXBlKG1hcChwID0+IHAudGl0bGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhIHNpbmdsZSBicmVhY3J1bWIgaXRlbSB0byB0aGUgaG9tZSBwYWdlIGZvciBlYWNoIGBDb250ZW50UGFnZWAuXG4gICAqIFRoZSBob21lIHBhZ2UgbGFiZWwgaXMgcmVzb2x2ZWQgZnJvbSB0aGUgdHJhbnNsYXRpb24gc2VydmljZS5cbiAgICovXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPEJyZWFkY3J1bWJNZXRhW10+IHtcbiAgICByZXR1cm4gdGhpcy50cmFuc2xhdGlvblxuICAgICAgLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKVxuICAgICAgLnBpcGUobWFwKGxhYmVsID0+IFt7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH1dIGFzIEJyZWFkY3J1bWJNZXRhW10pKTtcbiAgfVxufVxuIl19