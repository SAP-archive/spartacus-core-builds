import { Injectable, Optional } from '@angular/core';
import { combineLatest, defer } from 'rxjs';
import { filter, map, shareReplay } from 'rxjs/operators';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { CmsService } from '../facade/cms.service';
import { BasePageMetaResolver } from './base-page-meta.resolver';
import { PageMetaResolver } from './page-meta.resolver';
import { RoutingPageMetaResolver } from './routing/routing-page-meta.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../facade/cms.service";
import * as i2 from "../../i18n/translation.service";
import * as i3 from "./routing/routing-page-meta.resolver";
import * as i4 from "./base-page-meta.resolver";
/**
 * Resolves the page data for all Content Pages based on the `PageType.CONTENT_PAGE`.
 * More specific resolvers for content pages can be implemented by making them more
 * specific, for example by using the page template (see `CartPageMetaResolver`).
 *
 * The page title, and breadcrumbs are resolved in this implementation only.
 */
export class ContentPageMetaResolver extends PageMetaResolver {
    /**
     * @deprecated since 3.1, we'll use the BasePageMetaResolver in future versions.
     */
    constructor(cmsService, translation, routingPageMetaResolver, basePageMetaResolver) {
        super();
        this.cmsService = cmsService;
        this.translation = translation;
        this.routingPageMetaResolver = routingPageMetaResolver;
        this.basePageMetaResolver = basePageMetaResolver;
        /**
         * Breadcrumb for the home page.
         *
         * @deprecated since 3.1, as we resolve the homeBreadcrumb$ from the `BasePageMetaResolver`
         */
        // TODO(#10467): drop the homeBreadcrumb$ property
        this.homeBreadcrumb$ = this.translation
            .translate('common.home')
            .pipe(map((label) => [{ label: label, link: '/' }]));
        /**
         * All the resolved breadcrumbs (including those from Angular child routes).
         *
         * @deprecated since 3.1, as we resolve the breadcrumbs$ from the `BasePageMetaResolver`
         */
        // TODO(#10467): drop the breadcrumbs$ property
        this.breadcrumbs$ = combineLatest([
            this.homeBreadcrumb$,
            defer(() => this.routingPageMetaResolver.resolveBreadcrumbs()),
        ]).pipe(map((breadcrumbs) => breadcrumbs.flat()), shareReplay({ bufferSize: 1, refCount: true }));
        /**
         * Helper to provide access to the current CMS page
         *
         * @deprecated since 3.1, as we resolve the cms page data from the `BasePageMetaResolver`
         */
        // TODO(#10467): drop the cms$ property
        this.cms$ = defer(() => this.cmsService.getCurrentPage().pipe(filter((p) => Boolean(p))));
        /**
         * @deprecated since 3.1, we'll start using the `BasePageMetaResolver` to resolve
         * the page title
         */
        // TODO(#10467): drop the title$ property
        this.title$ = this.cms$.pipe(map((p) => p.title));
        this.pageType = PageType.CONTENT_PAGE;
    }
    // TODO(#10467): resolve the title from the `BasePageMetaResolver.resolveTitle()` only
    resolveTitle() {
        return this.basePageMetaResolver
            ? this.basePageMetaResolver.resolveTitle()
            : this.title$;
    }
    /**
     * @override
     * Resolves a single breadcrumb item to the home page for each `ContentPage`.
     * The home page label is resolved from the translation service.
     */
    resolveBreadcrumbs() {
        return this.basePageMetaResolver
            ? this.basePageMetaResolver.resolveBreadcrumbs()
            : this.breadcrumbs$;
    }
    /**
     * @override
     * This is added in 3.1 and will be ignored if the `BasePageMetaResolver` is not
     * available.
     */
    // TODO(#10467) drop the 3.1 note.
    resolveRobots() {
        var _a;
        return (_a = this.basePageMetaResolver) === null || _a === void 0 ? void 0 : _a.resolveRobots();
    }
}
ContentPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function ContentPageMetaResolver_Factory() { return new ContentPageMetaResolver(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.TranslationService), i0.ɵɵinject(i3.RoutingPageMetaResolver), i0.ɵɵinject(i4.BasePageMetaResolver, 8)); }, token: ContentPageMetaResolver, providedIn: "root" });
ContentPageMetaResolver.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
ContentPageMetaResolver.ctorParameters = () => [
    { type: CmsService },
    { type: TranslationService },
    { type: RoutingPageMetaResolver },
    { type: BasePageMetaResolver, decorators: [{ type: Optional }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jbXMvcGFnZS9jb250ZW50LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQUUsYUFBYSxFQUFFLEtBQUssRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMxRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBTXhELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOzs7Ozs7QUFFL0U7Ozs7OztHQU1HO0FBSUgsTUFBTSxPQUFPLHVCQUNYLFNBQVEsZ0JBQWdCO0lBRXhCOztPQUVHO0lBQ0gsWUFDWSxVQUFzQixFQUN0QixXQUErQixFQUMvQix1QkFBZ0QsRUFDcEMsb0JBQTJDO1FBRWpFLEtBQUssRUFBRSxDQUFDO1FBTEUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDL0IsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNwQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXVCO1FBTW5FOzs7O1dBSUc7UUFDSCxrREFBa0Q7UUFDeEMsb0JBQWUsR0FFckIsSUFBSSxDQUFDLFdBQVc7YUFDakIsU0FBUyxDQUFDLGFBQWEsQ0FBQzthQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQXFCLENBQUMsQ0FBQyxDQUFDO1FBRTNFOzs7O1dBSUc7UUFDSCwrQ0FBK0M7UUFDckMsaUJBQVksR0FBaUMsYUFBYSxDQUFDO1lBQ25FLElBQUksQ0FBQyxlQUFlO1lBQ3BCLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztTQUMvRCxDQUFDLENBQUMsSUFBSSxDQUNMLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQ3hDLFdBQVcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQy9DLENBQUM7UUFFRjs7OztXQUlHO1FBQ0gsdUNBQXVDO1FBQzdCLFNBQUksR0FBcUIsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ2pFLENBQUM7UUFFRjs7O1dBR0c7UUFDSCx5Q0FBeUM7UUFDL0IsV0FBTSxHQUF1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBNUN6RSxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7SUFDeEMsQ0FBQztJQTZDRCxzRkFBc0Y7SUFDdEYsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLG9CQUFvQjtZQUM5QixDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksRUFBRTtZQUMxQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxvQkFBb0I7WUFDOUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxrQkFBa0IsRUFBRTtZQUNoRCxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGtDQUFrQztJQUNsQyxhQUFhOztRQUNYLGFBQU8sSUFBSSxDQUFDLG9CQUFvQiwwQ0FBRSxhQUFhLEdBQUc7SUFDcEQsQ0FBQzs7OztZQXhGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQXBCUSxVQUFVO1lBRlYsa0JBQWtCO1lBV2xCLHVCQUF1QjtZQVB2QixvQkFBb0IsdUJBNkJ4QixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgT3B0aW9uYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIGRlZmVyLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc2hhcmVSZXBsYXkgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iTWV0YSwgUGFnZSwgUGFnZVJvYm90c01ldGEgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IEJhc2VQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9iYXNlLXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHtcbiAgUGFnZUJyZWFkY3J1bWJSZXNvbHZlcixcbiAgUGFnZVJvYm90c1Jlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi9wYWdlLnJlc29sdmVycyc7XG5pbXBvcnQgeyBSb3V0aW5nUGFnZU1ldGFSZXNvbHZlciB9IGZyb20gJy4vcm91dGluZy9yb3V0aW5nLXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5cbi8qKlxuICogUmVzb2x2ZXMgdGhlIHBhZ2UgZGF0YSBmb3IgYWxsIENvbnRlbnQgUGFnZXMgYmFzZWQgb24gdGhlIGBQYWdlVHlwZS5DT05URU5UX1BBR0VgLlxuICogTW9yZSBzcGVjaWZpYyByZXNvbHZlcnMgZm9yIGNvbnRlbnQgcGFnZXMgY2FuIGJlIGltcGxlbWVudGVkIGJ5IG1ha2luZyB0aGVtIG1vcmVcbiAqIHNwZWNpZmljLCBmb3IgZXhhbXBsZSBieSB1c2luZyB0aGUgcGFnZSB0ZW1wbGF0ZSAoc2VlIGBDYXJ0UGFnZU1ldGFSZXNvbHZlcmApLlxuICpcbiAqIFRoZSBwYWdlIHRpdGxlLCBhbmQgYnJlYWRjcnVtYnMgYXJlIHJlc29sdmVkIGluIHRoaXMgaW1wbGVtZW50YXRpb24gb25seS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRlbnRQYWdlTWV0YVJlc29sdmVyXG4gIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLCBQYWdlUm9ib3RzUmVzb2x2ZXIge1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMy4xLCB3ZSdsbCB1c2UgdGhlIEJhc2VQYWdlTWV0YVJlc29sdmVyIGluIGZ1dHVyZSB2ZXJzaW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nUGFnZU1ldGFSZXNvbHZlcjogUm91dGluZ1BhZ2VNZXRhUmVzb2x2ZXIsXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIGJhc2VQYWdlTWV0YVJlc29sdmVyPzogQmFzZVBhZ2VNZXRhUmVzb2x2ZXJcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICB9XG5cbiAgLyoqXG4gICAqIEJyZWFkY3J1bWIgZm9yIHRoZSBob21lIHBhZ2UuXG4gICAqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDMuMSwgYXMgd2UgcmVzb2x2ZSB0aGUgaG9tZUJyZWFkY3J1bWIkIGZyb20gdGhlIGBCYXNlUGFnZU1ldGFSZXNvbHZlcmBcbiAgICovXG4gIC8vIFRPRE8oIzEwNDY3KTogZHJvcCB0aGUgaG9tZUJyZWFkY3J1bWIkIHByb3BlcnR5XG4gIHByb3RlY3RlZCBob21lQnJlYWRjcnVtYiQ6IE9ic2VydmFibGU8XG4gICAgQnJlYWRjcnVtYk1ldGFbXVxuICA+ID0gdGhpcy50cmFuc2xhdGlvblxuICAgIC50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJylcbiAgICAucGlwZShtYXAoKGxhYmVsKSA9PiBbeyBsYWJlbDogbGFiZWwsIGxpbms6ICcvJyB9XSBhcyBCcmVhZGNydW1iTWV0YVtdKSk7XG5cbiAgLyoqXG4gICAqIEFsbCB0aGUgcmVzb2x2ZWQgYnJlYWRjcnVtYnMgKGluY2x1ZGluZyB0aG9zZSBmcm9tIEFuZ3VsYXIgY2hpbGQgcm91dGVzKS5cbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMy4xLCBhcyB3ZSByZXNvbHZlIHRoZSBicmVhZGNydW1icyQgZnJvbSB0aGUgYEJhc2VQYWdlTWV0YVJlc29sdmVyYFxuICAgKi9cbiAgLy8gVE9ETygjMTA0NjcpOiBkcm9wIHRoZSBicmVhZGNydW1icyQgcHJvcGVydHlcbiAgcHJvdGVjdGVkIGJyZWFkY3J1bWJzJDogT2JzZXJ2YWJsZTxCcmVhZGNydW1iTWV0YVtdPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMuaG9tZUJyZWFkY3J1bWIkLFxuICAgIGRlZmVyKCgpID0+IHRoaXMucm91dGluZ1BhZ2VNZXRhUmVzb2x2ZXIucmVzb2x2ZUJyZWFkY3J1bWJzKCkpLFxuICBdKS5waXBlKFxuICAgIG1hcCgoYnJlYWRjcnVtYnMpID0+IGJyZWFkY3J1bWJzLmZsYXQoKSksXG4gICAgc2hhcmVSZXBsYXkoeyBidWZmZXJTaXplOiAxLCByZWZDb3VudDogdHJ1ZSB9KVxuICApO1xuXG4gIC8qKlxuICAgKiBIZWxwZXIgdG8gcHJvdmlkZSBhY2Nlc3MgdG8gdGhlIGN1cnJlbnQgQ01TIHBhZ2VcbiAgICpcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMy4xLCBhcyB3ZSByZXNvbHZlIHRoZSBjbXMgcGFnZSBkYXRhIGZyb20gdGhlIGBCYXNlUGFnZU1ldGFSZXNvbHZlcmBcbiAgICovXG4gIC8vIFRPRE8oIzEwNDY3KTogZHJvcCB0aGUgY21zJCBwcm9wZXJ0eVxuICBwcm90ZWN0ZWQgY21zJDogT2JzZXJ2YWJsZTxQYWdlPiA9IGRlZmVyKCgpID0+XG4gICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKCkucGlwZShmaWx0ZXIoKHApID0+IEJvb2xlYW4ocCkpKVxuICApO1xuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAzLjEsIHdlJ2xsIHN0YXJ0IHVzaW5nIHRoZSBgQmFzZVBhZ2VNZXRhUmVzb2x2ZXJgIHRvIHJlc29sdmVcbiAgICogdGhlIHBhZ2UgdGl0bGVcbiAgICovXG4gIC8vIFRPRE8oIzEwNDY3KTogZHJvcCB0aGUgdGl0bGUkIHByb3BlcnR5XG4gIHByb3RlY3RlZCB0aXRsZSQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuY21zJC5waXBlKG1hcCgocCkgPT4gcC50aXRsZSkpO1xuXG4gIC8vIFRPRE8oIzEwNDY3KTogcmVzb2x2ZSB0aGUgdGl0bGUgZnJvbSB0aGUgYEJhc2VQYWdlTWV0YVJlc29sdmVyLnJlc29sdmVUaXRsZSgpYCBvbmx5XG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLmJhc2VQYWdlTWV0YVJlc29sdmVyXG4gICAgICA/IHRoaXMuYmFzZVBhZ2VNZXRhUmVzb2x2ZXIucmVzb2x2ZVRpdGxlKClcbiAgICAgIDogdGhpcy50aXRsZSQ7XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqIFJlc29sdmVzIGEgc2luZ2xlIGJyZWFkY3J1bWIgaXRlbSB0byB0aGUgaG9tZSBwYWdlIGZvciBlYWNoIGBDb250ZW50UGFnZWAuXG4gICAqIFRoZSBob21lIHBhZ2UgbGFiZWwgaXMgcmVzb2x2ZWQgZnJvbSB0aGUgdHJhbnNsYXRpb24gc2VydmljZS5cbiAgICovXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPEJyZWFkY3J1bWJNZXRhW10+IHtcbiAgICByZXR1cm4gdGhpcy5iYXNlUGFnZU1ldGFSZXNvbHZlclxuICAgICAgPyB0aGlzLmJhc2VQYWdlTWV0YVJlc29sdmVyLnJlc29sdmVCcmVhZGNydW1icygpXG4gICAgICA6IHRoaXMuYnJlYWRjcnVtYnMkO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKiBUaGlzIGlzIGFkZGVkIGluIDMuMSBhbmQgd2lsbCBiZSBpZ25vcmVkIGlmIHRoZSBgQmFzZVBhZ2VNZXRhUmVzb2x2ZXJgIGlzIG5vdFxuICAgKiBhdmFpbGFibGUuXG4gICAqL1xuICAvLyBUT0RPKCMxMDQ2NykgZHJvcCB0aGUgMy4xIG5vdGUuXG4gIHJlc29sdmVSb2JvdHMoKTogT2JzZXJ2YWJsZTxQYWdlUm9ib3RzTWV0YVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYmFzZVBhZ2VNZXRhUmVzb2x2ZXI/LnJlc29sdmVSb2JvdHMoKTtcbiAgfVxufVxuIl19