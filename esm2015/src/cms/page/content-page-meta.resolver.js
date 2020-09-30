import { Injectable } from '@angular/core';
import { combineLatest, defer } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { CmsService } from '../facade/cms.service';
import { PageMetaResolver } from './page-meta.resolver';
import { RoutingPageMetaResolver } from './routing/routing-page-meta.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../facade/cms.service";
import * as i2 from "../../i18n/translation.service";
import * as i3 from "./routing/routing-page-meta.resolver";
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`.
 * More specific resolvers for content pages can be implemented by making them more
 * specific, for example by using the page template (see `CartPageMetaResolver`).
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
export class ContentPageMetaResolver extends PageMetaResolver {
    constructor(cms, translation, routingPageMetaResolver) {
        super();
        this.cms = cms;
        this.translation = translation;
        this.routingPageMetaResolver = routingPageMetaResolver;
        /** helper to provide access to the current CMS page */
        this.cms$ = this.cms
            .getCurrentPage()
            .pipe(filter((p) => Boolean(p)));
        /**
         * Breadcrumb for the home page.
         */
        this.homeBreadcrumb$ = this.translation
            .translate('common.home')
            .pipe(map((label) => [{ label: label, link: '/' }]));
        /**
         * All the resolved breadcrumbs (including those from Angular child routes).
         */
        this.breadcrumbs$ = combineLatest([
            this.homeBreadcrumb$,
            defer(() => this.routingPageMetaResolver.resolveBreadcrumbs()),
        ]).pipe(map((breadcrumbs) => breadcrumbs.flat(), shareReplay({ bufferSize: 1, refCount: true })));
        this.pageType = PageType.CONTENT_PAGE;
    }
    /**
     * Resolves the page title for the ContentPage by taking the title
     * from the backend data.
     */
    resolveTitle() {
        return this.cms$.pipe(map((p) => p.title));
    }
    /**
     * Resolves a single breadcrumb item to the home page for each `ContentPage`.
     * The home page label is resolved from the translation service.
     */
    resolveBreadcrumbs() {
        return this.breadcrumbs$;
    }
}
ContentPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function ContentPageMetaResolver_Factory() { return new ContentPageMetaResolver(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.TranslationService), i0.ɵɵinject(i3.RoutingPageMetaResolver)); }, token: ContentPageMetaResolver, providedIn: "root" });
ContentPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ContentPageMetaResolver.ctorParameters = () => [
    { type: CmsService },
    { type: TranslationService },
    { type: RoutingPageMetaResolver }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jbXMvcGFnZS9jb250ZW50LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7Ozs7O0FBRS9FOzs7Ozs7R0FNRztBQUlILE1BQU0sT0FBTyx1QkFDWCxTQUFRLGdCQUFnQjtJQTZCeEIsWUFDWSxHQUFlLEVBQ2YsV0FBK0IsRUFDL0IsdUJBQWdEO1FBRTFELEtBQUssRUFBRSxDQUFDO1FBSkUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUNmLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQiw0QkFBdUIsR0FBdkIsdUJBQXVCLENBQXlCO1FBOUI1RCx1REFBdUQ7UUFDN0MsU0FBSSxHQUFxQixJQUFJLENBQUMsR0FBRzthQUN4QyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVuQzs7V0FFRztRQUNPLG9CQUFlLEdBRXJCLElBQUksQ0FBQyxXQUFXO2FBQ2pCLFNBQVMsQ0FBQyxhQUFhLENBQUM7YUFDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFxQixDQUFDLENBQUMsQ0FBQztRQUUzRTs7V0FFRztRQUNLLGlCQUFZLEdBQWlDLGFBQWEsQ0FBQztZQUNqRSxJQUFJLENBQUMsZUFBZTtZQUNwQixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDL0QsQ0FBQyxDQUFDLElBQUksQ0FDTCxHQUFHLENBQ0QsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsRUFDbkMsV0FBVyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FDL0MsQ0FDRixDQUFDO1FBUUEsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO0lBQ3hDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxZQUFZO1FBQ1YsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRDs7O09BR0c7SUFDSCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7WUF4REYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFmUSxVQUFVO1lBRlYsa0JBQWtCO1lBTWxCLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGRlZmVyLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTWV0YSwgUGFnZSB9IGZyb20gJy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vcGFnZS1tZXRhLnJlc29sdmVyJztcbmltcG9ydCB7IFBhZ2VCcmVhZGNydW1iUmVzb2x2ZXIsIFBhZ2VUaXRsZVJlc29sdmVyIH0gZnJvbSAnLi9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBSb3V0aW5nUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vcm91dGluZy9yb3V0aW5nLXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgYWxsIENvbnRlbnQgUGFnZXMgYmFzZWQgb24gdGhlIGBQYWdlVHlwZS5DT05URU5UX1BBR0VgLlxuICogTW9yZSBzcGVjaWZpYyByZXNvbHZlcnMgZm9yIGNvbnRlbnQgcGFnZXMgY2FuIGJlIGltcGxlbWVudGVkIGJ5IG1ha2luZyB0aGVtIG1vcmVcbiAqIHNwZWNpZmljLCBmb3IgZXhhbXBsZSBieSB1c2luZyB0aGUgcGFnZSB0ZW1wbGF0ZSAoc2VlIGBDYXJ0UGFnZU1ldGFSZXNvbHZlcmApLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBhbmQgYnJlYWRjcnVtYnMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRQYWdlTWV0YVJlc29sdmVyXG4gIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlQnJlYWRjcnVtYlJlc29sdmVyIHtcbiAgLyoqIGhlbHBlciB0byBwcm92aWRlIGFjY2VzcyB0byB0aGUgY3VycmVudCBDTVMgcGFnZSAqL1xuICBwcm90ZWN0ZWQgY21zJDogT2JzZXJ2YWJsZTxQYWdlPiA9IHRoaXMuY21zXG4gICAgLmdldEN1cnJlbnRQYWdlKClcbiAgICAucGlwZShmaWx0ZXIoKHApID0+IEJvb2xlYW4ocCkpKTtcblxuICAvKipcbiAgICogQnJlYWRjcnVtYiBmb3IgdGhlIGhvbWUgcGFnZS5cbiAgICovXG4gIHByb3RlY3RlZCBob21lQnJlYWRjcnVtYiQ6IE9ic2VydmFibGU8XG4gICAgQnJlYWRjcnVtYk1ldGFbXVxuICA+ID0gdGhpcy50cmFuc2xhdGlvblxuICAgIC50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJylcbiAgICAucGlwZShtYXAoKGxhYmVsKSA9PiBbeyBsYWJlbDogbGFiZWwsIGxpbms6ICcvJyB9XSBhcyBCcmVhZGNydW1iTWV0YVtdKSk7XG5cbiAgLyoqXG4gICAqIEFsbCB0aGUgcmVzb2x2ZWQgYnJlYWRjcnVtYnMgKGluY2x1ZGluZyB0aG9zZSBmcm9tIEFuZ3VsYXIgY2hpbGQgcm91dGVzKS5cbiAgICovXG4gIHByaXZhdGUgYnJlYWRjcnVtYnMkOiBPYnNlcnZhYmxlPEJyZWFkY3J1bWJNZXRhW10+ID0gY29tYmluZUxhdGVzdChbXG4gICAgdGhpcy5ob21lQnJlYWRjcnVtYiQsXG4gICAgZGVmZXIoKCkgPT4gdGhpcy5yb3V0aW5nUGFnZU1ldGFSZXNvbHZlci5yZXNvbHZlQnJlYWRjcnVtYnMoKSksXG4gIF0pLnBpcGUoXG4gICAgbWFwKFxuICAgICAgKGJyZWFkY3J1bWJzKSA9PiBicmVhZGNydW1icy5mbGF0KCksXG4gICAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXM6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHRyYW5zbGF0aW9uOiBUcmFuc2xhdGlvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdQYWdlTWV0YVJlc29sdmVyOiBSb3V0aW5nUGFnZU1ldGFSZXNvbHZlclxuICApIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMucGFnZVR5cGUgPSBQYWdlVHlwZS5DT05URU5UX1BBR0U7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXMgdGhlIHBhZ2UgdGl0bGUgZm9yIHRoZSBDb250ZW50UGFnZSBieSB0YWtpbmcgdGhlIHRpdGxlXG4gICAqIGZyb20gdGhlIGJhY2tlbmQgZGF0YS5cbiAgICovXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmNtcyQucGlwZShtYXAoKHApID0+IHAudGl0bGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyBhIHNpbmdsZSBicmVhZGNydW1iIGl0ZW0gdG8gdGhlIGhvbWUgcGFnZSBmb3IgZWFjaCBgQ29udGVudFBhZ2VgLlxuICAgKiBUaGUgaG9tZSBwYWdlIGxhYmVsIGlzIHJlc29sdmVkIGZyb20gdGhlIHRyYW5zbGF0aW9uIHNlcnZpY2UuXG4gICAqL1xuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxCcmVhZGNydW1iTWV0YVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYnJlYWRjcnVtYnMkO1xuICB9XG59XG4iXX0=