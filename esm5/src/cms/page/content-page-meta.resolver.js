import { __decorate, __extends, __read } from "tslib";
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
var ContentPageMetaResolver = /** @class */ (function (_super) {
    __extends(ContentPageMetaResolver, _super);
    function ContentPageMetaResolver(cms, translation) {
        var _this = _super.call(this) || this;
        _this.cms = cms;
        _this.translation = translation;
        _this.cms$ = _this.cms
            .getCurrentPage()
            .pipe(filter(function (p) { return !!p; }));
        _this.pageType = PageType.CONTENT_PAGE;
        return _this;
    }
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    ContentPageMetaResolver.prototype.resolve = function () {
        var _this = this;
        return this.cms$.pipe(switchMap(function (page) {
            return combineLatest([
                _this.resolveTitle(page),
                _this.resolveBreadcrumbLabel().pipe(switchMap(function (label) { return _this.resolveBreadcrumbs(page, label); })),
            ]);
        }), map(function (_a) {
            var _b = __read(_a, 2), title = _b[0], breadcrumbs = _b[1];
            return ({ title: title, breadcrumbs: breadcrumbs });
        }));
    };
    ContentPageMetaResolver.prototype.resolveTitle = function (page) {
        return page ? of(page.title) : this.cms$.pipe(map(function (p) { return p.title; }));
    };
    /**
     * @deprecated since version 1.3
     * This method will removed with with 2.0
     */
    ContentPageMetaResolver.prototype.resolveBreadcrumbLabel = function () {
        return this.translation.translate('common.home');
    };
    ContentPageMetaResolver.prototype.resolveBreadcrumbs = function (_page, breadcrumbLabel) {
        if (breadcrumbLabel) {
            return of([{ label: breadcrumbLabel, link: '/' }]);
        }
        else {
            return this.translation
                .translate('common.home')
                .pipe(map(function (label) { return [{ label: label, link: '/' }]; }));
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3BhZ2UvY29udGVudC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7OztBQUd4RDs7Ozs7O0dBTUc7QUFJSDtJQUE2QywyQ0FBZ0I7SUFNM0QsaUNBQ1ksR0FBZSxFQUNmLFdBQStCO1FBRjNDLFlBSUUsaUJBQU8sU0FFUjtRQUxXLFNBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixpQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFObkMsVUFBSSxHQUFxQixLQUFJLENBQUMsR0FBRzthQUN0QyxjQUFjLEVBQUU7YUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLEVBQUgsQ0FBRyxDQUFDLENBQUMsQ0FBQztRQU94QixLQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxZQUFZLENBQUM7O0lBQ3hDLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCx5Q0FBTyxHQUFQO1FBQUEsaUJBWUM7UUFYQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUNuQixTQUFTLENBQUMsVUFBQyxJQUFVO1lBQ25CLE9BQUEsYUFBYSxDQUFDO2dCQUNaLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDO2dCQUN2QixLQUFJLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxJQUFJLENBQ2hDLFNBQVMsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FDekQ7YUFDRixDQUFDO1FBTEYsQ0FLRSxDQUNILEVBQ0QsR0FBRyxDQUFDLFVBQUMsRUFBcUM7Z0JBQXJDLGtCQUFxQyxFQUFwQyxhQUFLLEVBQUUsbUJBQVc7WUFBdUIsT0FBQSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUsQ0FBQztRQUF4QixDQUF3QixDQUFDLENBQ3pFLENBQUM7SUFDSixDQUFDO0lBU0QsOENBQVksR0FBWixVQUFhLElBQVc7UUFDdEIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEVBQVAsQ0FBTyxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0RBQXNCLEdBQXRCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBU0Qsb0RBQWtCLEdBQWxCLFVBQ0UsS0FBWSxFQUNaLGVBQXdCO1FBRXhCLElBQUksZUFBZSxFQUFFO1lBQ25CLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDcEQ7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDLFdBQVc7aUJBQ3BCLFNBQVMsQ0FBQyxhQUFhLENBQUM7aUJBQ3hCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOztnQkFqRWdCLFVBQVU7Z0JBQ0Ysa0JBQWtCOzs7SUFSaEMsdUJBQXVCO1FBSG5DLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyx1QkFBdUIsQ0F5RW5DO2tDQTdGRDtDQTZGQyxBQXpFRCxDQUE2QyxnQkFBZ0IsR0F5RTVEO1NBekVZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vaTE4bi90cmFuc2xhdGlvbi5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSwgUGFnZU1ldGEgfSBmcm9tICcuLi9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuL3BhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQgeyBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLCBQYWdlVGl0bGVSZXNvbHZlciB9IGZyb20gJy4vcGFnZS5yZXNvbHZlcnMnO1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIGFsbCBDb250ZW50IFBhZ2VzIGJhc2VkIG9uIHRoZSBgUGFnZVR5cGUuQ09OVEVOVF9QQUdFYC5cbiAqIE1vcmUgc3BlY2lmaWMgcmVzb2x2ZXJzIGZvciBjb250ZW50IHBhZ2VzIGNhbiBiZSBpbXBsZW1lbnRlZCBieSBtYWtpbmcgdGhlbSBtb3JlXG4gKiBzcGVjaWZpYywgZm9yIGV4YW1wbGUgYnkgdXNpbmcgdGhlIHBhZ2UgdGVtcGxhdGUgKHNlZSBgQ2FydFBhZ2VNZXRhUmVzb2x2ZXJgKS5cbiAqXG4gKiBUaGUgcGFnZSB0aXRsZSwgYW5kIGJyZWFkY3J1bWJzIGFyZSByZXNvbHZlZCBpbiB0aGlzIGltcGxlbWVudGF0aW9uIG9ubHkuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDb250ZW50UGFnZU1ldGFSZXNvbHZlciBleHRlbmRzIFBhZ2VNZXRhUmVzb2x2ZXJcbiAgaW1wbGVtZW50cyBQYWdlVGl0bGVSZXNvbHZlciwgUGFnZUJyZWFkY3J1bWJSZXNvbHZlciB7XG4gIHByaXZhdGUgY21zJDogT2JzZXJ2YWJsZTxQYWdlPiA9IHRoaXMuY21zXG4gICAgLmdldEN1cnJlbnRQYWdlKClcbiAgICAucGlwZShmaWx0ZXIocCA9PiAhIXApKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLkNPTlRFTlRfUEFHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKlxuICAgKiBUaGUgcmVzb2x2ZSBtZXRob2QgaXMgbm8gbG9uZ2VyIHByZWZlcnJlZCBhbmQgd2lsbCBiZSByZW1vdmVkIHdpdGggcmVsZWFzZSAyLjAuXG4gICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAqIGluc3RlYWQsIHNvIHRoYXQgdGhlIGNvZGUgaXMgZWFzaWVyIGV4dGVuc2libGUuXG4gICAqL1xuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHwgYW55IHtcbiAgICByZXR1cm4gdGhpcy5jbXMkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHBhZ2U6IFBhZ2UpID0+XG4gICAgICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICAgIHRoaXMucmVzb2x2ZVRpdGxlKHBhZ2UpLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAobGFiZWwgPT4gdGhpcy5yZXNvbHZlQnJlYWRjcnVtYnMocGFnZSwgbGFiZWwpKVxuICAgICAgICAgICksXG4gICAgICAgIF0pXG4gICAgICApLFxuICAgICAgbWFwKChbdGl0bGUsIGJyZWFkY3J1bWJzXTogW3N0cmluZywgYW55W11dKSA9PiAoeyB0aXRsZSwgYnJlYWRjcnVtYnMgfSkpXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlVGl0bGUocGFnZTogUGFnZSk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZVRpdGxlKHBhZ2U/OiBQYWdlKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gcGFnZSA/IG9mKHBhZ2UudGl0bGUpIDogdGhpcy5jbXMkLnBpcGUobWFwKHAgPT4gcC50aXRsZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgcmVtb3ZlZCB3aXRoIHdpdGggMi4wXG4gICAqL1xuICByZXNvbHZlQnJlYWRjcnVtYkxhYmVsKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdjb21tb24uaG9tZScpO1xuICB9XG5cbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKCk6IE9ic2VydmFibGU8YW55W10+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlQnJlYWRjcnVtYnMoKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZUJyZWFkY3J1bWJzKF9wYWdlOiBQYWdlLCBicmVhZGNydW1iTGFiZWw6IHN0cmluZyk6IE9ic2VydmFibGU8YW55W10+O1xuICByZXNvbHZlQnJlYWRjcnVtYnMoXG4gICAgX3BhZ2U/OiBQYWdlLFxuICAgIGJyZWFkY3J1bWJMYWJlbD86IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPGFueVtdPiB7XG4gICAgaWYgKGJyZWFkY3J1bWJMYWJlbCkge1xuICAgICAgcmV0dXJuIG9mKFt7IGxhYmVsOiBicmVhZGNydW1iTGFiZWwsIGxpbms6ICcvJyB9XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uXG4gICAgICAgIC50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJylcbiAgICAgICAgLnBpcGUobWFwKGxhYmVsID0+IFt7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH1dKSk7XG4gICAgfVxuICB9XG59XG4iXX0=