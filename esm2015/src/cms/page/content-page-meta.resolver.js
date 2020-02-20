import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
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
let ContentPageMetaResolver = class ContentPageMetaResolver extends PageMetaResolver {
    constructor(cms, translation) {
        super();
        this.cms = cms;
        this.translation = translation;
        this.cms$ = this.cms
            .getCurrentPage()
            .pipe(filter(p => !!p));
        this.pageType = PageType.CONTENT_PAGE;
    }
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    resolve() {
        return this.cms$.pipe(switchMap((page) => combineLatest([
            this.resolveTitle(page),
            this.resolveBreadcrumbLabel().pipe(switchMap(label => this.resolveBreadcrumbs(page, label))),
        ])), map(([title, breadcrumbs]) => ({ title, breadcrumbs })));
    }
    resolveTitle(page) {
        return page ? of(page.title) : this.cms$.pipe(map(p => p.title));
    }
    /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     */
    resolveBreadcrumbLabel() {
        return this.translation.translate('common.home');
    }
    resolveBreadcrumbs(_page, breadcrumbLabel) {
        if (breadcrumbLabel) {
            return of([{ label: breadcrumbLabel, link: '/' }]);
        }
        else {
            return this.translation
                .translate('common.home')
                .pipe(map(label => [{ label: label, link: '/' }]));
        }
    }
};
ContentPageMetaResolver.ctorParameters = () => [
    { type: CmsService },
    { type: TranslationService }
];
ContentPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function ContentPageMetaResolver_Factory() { return new ContentPageMetaResolver(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.TranslationService)); }, token: ContentPageMetaResolver, providedIn: "root" });
ContentPageMetaResolver = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ContentPageMetaResolver);
export { ContentPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUd4RDs7Ozs7O0dBTUc7QUFJSCxJQUFhLHVCQUF1QixHQUFwQyxNQUFhLHVCQUF3QixTQUFRLGdCQUFnQjtJQU0zRCxZQUNZLEdBQWUsRUFDZixXQUErQjtRQUV6QyxLQUFLLEVBQUUsQ0FBQztRQUhFLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFObkMsU0FBSSxHQUFxQixJQUFJLENBQUMsR0FBRzthQUN0QyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBT3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQ25CLFNBQVMsQ0FBQyxDQUFDLElBQVUsRUFBRSxFQUFFLENBQ3ZCLGFBQWEsQ0FBQztZQUNaLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLElBQUksQ0FDaEMsU0FBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUN6RDtTQUNGLENBQUMsQ0FDSCxFQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBa0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQ3pFLENBQUM7SUFDSixDQUFDO0lBU0QsWUFBWSxDQUFDLElBQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRDs7O09BR0c7SUFDSCxzQkFBc0I7UUFDcEIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBU0Qsa0JBQWtCLENBQ2hCLEtBQVksRUFDWixlQUF3QjtRQUV4QixJQUFJLGVBQWUsRUFBRTtZQUNuQixPQUFPLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ3BEO2FBQU07WUFDTCxPQUFPLElBQUksQ0FBQyxXQUFXO2lCQUNwQixTQUFTLENBQUMsYUFBYSxDQUFDO2lCQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3REO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbEVrQixVQUFVO1lBQ0Ysa0JBQWtCOzs7QUFSaEMsdUJBQXVCO0lBSG5DLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyx1QkFBdUIsQ0F5RW5DO1NBekVZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZU1ldGEgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLCBQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4vcGFnZS5yZXNvbHZlcnMnO1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIGFsbCBDb250ZW50IFBhZ2VzIGJhc2VkIG9uIHRoZSBgUGFnZVR5cGUuQ09OVEVOVF9QQUdFYC5cbiAqIE1vcmUgc3BlY2lmaWMgcmVzb2x2ZXJzIGZvciBjb250ZW50IHBhZ2VzIGNhbiBiZSBpbXBsZW1lbnRlZCBieSBtYWtpbmcgdGhlbSBtb3JlXG4gKiBzcGVjaWZpYywgZm9yIGV4YW1wbGUgYnkgdXNpbmcgdGhlIHBhZ2UgdGVtcGxhdGUgKHNlZSBgQ2FydFBhZ2VNZXRhUmVzb2x2ZXJgKS5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSwgYW5kIGJyZWFkY3J1bWJzIGFyZSByZXNvbHZlZCBpbiB0aGlzIGltcGxlbWVudGF0aW9uIG9ubHkuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gIHByaXZhdGUgY21zJDogT2JzZXJ2YWJsZTxQYWdlPiA9IHRoaXMuY21zXG4gICAgLmdldEN1cnJlbnRQYWdlKClcbiAgICAucGlwZShmaWx0ZXIocCA9PiAhIXApKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKlxuICAgKiBUaGUgcmVzb2x2ZSBtZXRob2QgaXMgbm8gbG9uZ2VyIHByZWZlcnJlZCBhbmQgd2lsbCBiZSByZW1vdmVkIHdpdGggcmVsZWFzZSAyLjAuXG4gICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAqIGluc3RlYWQsIHNvIHRoYXQgdGhlIGNvZGUgaXMgZWFzaWVyIGV4dGVuc2libGUuXG4gICAqL1xuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHwgYW55IHtcbiAgICByZXR1cm4gdGhpcy5jbXMkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2U6IFBhZ2UpID0+XG4gICAgICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgIHRoaXMucmVzb2x2ZVRpdGxlKHBhZ2UpLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAobGFiZWwgPT4gdGhpcy5yZXNvbHZlQnJlYWRjcnVtYnMocGFnZSwgbGFiZWwpKVxuICAgICAgICAgICksXG4gICAgICAgIF0pXG4gICAgICApLFxuICAgICAgbWFwKChbdGl0bGUsIGJyZWFkY3J1bWJzXTogW3N0cmluZywgYW55W11dKSA9PiAoeyB0aXRsZSwgYnJlYWRjcnVtYnMgfSkpXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlVGl0bGUocGFnZTogUGFnZSk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZVRpdGxlKHBhZ2U/OiBQYWdlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gcGFnZSA/IG9mKHBhZ2UudGl0bGUpIDogdGhpcy5jbXMkLnBpcGUobWFwKHAgPT4gcC50aXRsZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgcmVtb3ZlZCB3aXRoIHdpdGggMi4wXG4gICAqL1xuICByZXNvbHZlQnJlYWRjcnVtYkxhYmVsKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjb21tb24uaG9tZScpO1xuICB9XG5cbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKCk6IE9ic2VydmFibGU8YW55W10+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlQnJlYWRjcnVtYnMoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKF9wYWdlOiBQYWdlLCBicmVhZGNydW1iTGFiZWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+O1xuICByZXNvbHZlQnJlYWRjcnVtYnMoXG4gICAgX3BhZ2U/OiBQYWdlLFxuICAgIGJyZWFkY3J1bWJMYWJlbD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgaWYgKGJyZWFkY3J1bWJMYWJlbCkge1xuICAgICAgcmV0dXJuIG9mKFt7IGxhYmVsOiBicmVhZGNydW1iTGFiZWwsIGxpbms6ICcvJyB9XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uXG4gICAgICAgIC50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJylcbiAgICAgICAgLnBpcGUobWFwKGxhYmVsID0+IFt7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH1dKSk7XG4gICAgfVxuICB9XG59XG4iXX0=