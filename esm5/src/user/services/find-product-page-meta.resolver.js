import { __decorate, __extends, __read } from "tslib";
import { Injectable } from '@angular/core';
import { of, combineLatest } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageMetaResolver, } from '../../cms/page';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductSearchService } from '../../product/facade/product-search.service';
import { AuthService } from '../../auth/facade/auth.service';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../../product/facade/product-search.service";
import * as i3 from "../../i18n/translation.service";
import * as i4 from "../../auth/facade/auth.service";
var FindProductPageMetaResolver = /** @class */ (function (_super) {
    __extends(FindProductPageMetaResolver, _super);
    function FindProductPageMetaResolver(routingService, productSearchService, translation, authService) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productSearchService = productSearchService;
        _this.translation = translation;
        _this.authService = authService;
        _this.totalAndCode$ = combineLatest([
            _this.productSearchService.getResults().pipe(filter(function (data) { return !!(data && data.pagination); }), map(function (results) { return results.pagination.totalResults; })),
            _this.routingService.getRouterState().pipe(map(function (state) { return state.state.queryParams['couponcode']; }), filter(Boolean)),
        ]);
        _this.pageType = PageType.CONTENT_PAGE;
        _this.pageTemplate = 'SearchResultsListPageTemplate';
        return _this;
    }
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    FindProductPageMetaResolver.prototype.resolve = function () {
        return combineLatest([this.resolveTitle(), this.resolveBreadcrumbs()]).pipe(map(function (_a) {
            var _b = __read(_a, 2), title = _b[0], breadcrumbs = _b[1];
            return ({
                title: title,
                breadcrumbs: breadcrumbs,
            });
        }));
    };
    FindProductPageMetaResolver.prototype.resolveBreadcrumbs = function () {
        var breadcrumbs = [{ label: 'Home', link: '/' }];
        this.authService.isUserLoggedIn().subscribe(function (login) {
            if (login)
                breadcrumbs.push({ label: 'My Coupons', link: '/my-account/coupons' });
        });
        return of(breadcrumbs);
    };
    FindProductPageMetaResolver.prototype.resolveTitle = function () {
        var _this = this;
        return this.totalAndCode$.pipe(switchMap(function (_a) {
            var _b = __read(_a, 2), total = _b[0], code = _b[1];
            return _this.translation.translate('pageMetaResolver.search.findProductTitle', {
                count: total,
                coupon: code,
            });
        }));
    };
    FindProductPageMetaResolver.prototype.getScore = function (page) {
        var score = 0;
        if (this.pageType) {
            score += page.type === this.pageType ? 1 : -1;
        }
        if (this.pageTemplate) {
            score += page.template === this.pageTemplate ? 1 : -1;
        }
        this.routingService
            .getRouterState()
            .pipe(map(function (state) {
            return state.state.queryParams;
        }), filter(Boolean))
            .subscribe(function (queryParams) {
            if (queryParams) {
                score += queryParams['couponcode'] ? 1 : -1;
            }
        })
            .unsubscribe();
        return score;
    };
    FindProductPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductSearchService },
        { type: TranslationService },
        { type: AuthService }
    ]; };
    FindProductPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function FindProductPageMetaResolver_Factory() { return new FindProductPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductSearchService), i0.ɵɵinject(i3.TranslationService), i0.ɵɵinject(i4.AuthService)); }, token: FindProductPageMetaResolver, providedIn: "root" });
    FindProductPageMetaResolver = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], FindProductPageMetaResolver);
    return FindProductPageMetaResolver;
}(PageMetaResolver));
export { FindProductPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3NlcnZpY2VzL2ZpbmQtcHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLEVBQUUsRUFBRSxhQUFhLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUNMLGdCQUFnQixHQUdqQixNQUFNLGdCQUFnQixDQUFDO0FBRXhCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOzs7Ozs7QUFLN0Q7SUFBaUQsK0NBQWdCO0lBYS9ELHFDQUNZLGNBQThCLEVBQzlCLG9CQUEwQyxFQUMxQyxXQUErQixFQUMvQixXQUF3QjtRQUpwQyxZQU1FLGlCQUFPLFNBR1I7UUFSVyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsMEJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxpQkFBVyxHQUFYLFdBQVcsQ0FBb0I7UUFDL0IsaUJBQVcsR0FBWCxXQUFXLENBQWE7UUFmcEMsbUJBQWEsR0FBOEIsYUFBYSxDQUFDO1lBQ3ZELEtBQUksQ0FBQyxvQkFBb0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQ3pD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QUMsT0FBTyxDQUFDLENBQ2hCO2FBQ0EsU0FBUyxDQUFDLFVBQUMsV0FBZ0I7WUFDMUIsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsS0FBSyxJQUFJLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM3QztRQUNILENBQUMsQ0FBQzthQUNELFdBQVcsRUFBRSxDQUFDO1FBQ2pCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBdEUyQixjQUFjO2dCQUNSLG9CQUFvQjtnQkFDN0Isa0JBQWtCO2dCQUNsQixXQUFXOzs7SUFqQnpCLDJCQUEyQjtRQUh2QyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csMkJBQTJCLENBcUZ2QztzQ0F2R0Q7Q0F1R0MsQUFyRkQsQ0FBaUQsZ0JBQWdCLEdBcUZoRTtTQXJGWSwyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiwgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIFBhZ2VNZXRhUmVzb2x2ZXIsXG4gIFBhZ2VUaXRsZVJlc29sdmVyLFxuICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxufSBmcm9tICcuLi8uLi9jbXMvcGFnZSc7XG5pbXBvcnQgeyBQYWdlTWV0YSwgUGFnZSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uU2VydmljZSB9IGZyb20gJy4uLy4uL2kxOG4vdHJhbnNsYXRpb24uc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoU2VydmljZSB9IGZyb20gJy4uLy4uL3Byb2R1Y3QvZmFjYWRlL3Byb2R1Y3Qtc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgRmluZFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzIFBhZ2VUaXRsZVJlc29sdmVyLCBQYWdlQnJlYWRjcnVtYlJlc29sdmVyIHtcbiAgdG90YWxBbmRDb2RlJDogT2JzZXJ2YWJsZTxbbnVtYmVyLCBhbnldPiA9IGNvbWJpbmVMYXRlc3QoW1xuICAgIHRoaXMucHJvZHVjdFNlYXJjaFNlcnZpY2UuZ2V0UmVzdWx0cygpLnBpcGUoXG4gICAgICBmaWx0ZXIoZGF0YSA9PiAhIShkYXRhICYmIGRhdGEucGFnaW5hdGlvbikpLFxuICAgICAgbWFwKHJlc3VsdHMgPT4gcmVzdWx0cy5wYWdpbmF0aW9uLnRvdGFsUmVzdWx0cylcbiAgICApLFxuICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgICAgbWFwKHN0YXRlID0+IHN0YXRlLnN0YXRlLnF1ZXJ5UGFyYW1zWydjb3Vwb25jb2RlJ10pLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgKSxcbiAgXSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlYXJjaFNlcnZpY2U6IFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnBhZ2VUeXBlID0gUGFnZVR5cGUuQ09OVEVOVF9QQUdFO1xuICAgIHRoaXMucGFnZVRlbXBsYXRlID0gJ1NlYXJjaFJlc3VsdHNMaXN0UGFnZVRlbXBsYXRlJztcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKlxuICAgKiBUaGUgcmVzb2x2ZSBtZXRob2QgaXMgbm8gbG9uZ2VyIHByZWZlcnJlZCBhbmQgd2lsbCBiZSByZW1vdmVkIHdpdGggcmVsZWFzZSAyLjAuXG4gICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAqIGluc3RlYWQsIHNvIHRoYXQgdGhlIGNvZGUgaXMgZWFzaWVyIGV4dGVuc2libGUuXG4gICAqL1xuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHtcbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChbdGhpcy5yZXNvbHZlVGl0bGUoKSwgdGhpcy5yZXNvbHZlQnJlYWRjcnVtYnMoKV0pLnBpcGUoXG4gICAgICBtYXAoKFt0aXRsZSwgYnJlYWRjcnVtYnNdOiBbc3RyaW5nLCBhbnlbXV0pID0+ICh7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBicmVhZGNydW1icyxcbiAgICAgIH0pKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlQnJlYWRjcnVtYnMoKTogT2JzZXJ2YWJsZTxhbnlbXT4ge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJzID0gW3sgbGFiZWw6ICdIb21lJywgbGluazogJy8nIH1dO1xuICAgIHRoaXMuYXV0aFNlcnZpY2UuaXNVc2VyTG9nZ2VkSW4oKS5zdWJzY3JpYmUobG9naW4gPT4ge1xuICAgICAgaWYgKGxvZ2luKVxuICAgICAgICBicmVhZGNydW1icy5wdXNoKHsgbGFiZWw6ICdNeSBDb3Vwb25zJywgbGluazogJy9teS1hY2NvdW50L2NvdXBvbnMnIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIG9mKGJyZWFkY3J1bWJzKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRvdGFsQW5kQ29kZSQucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoW3RvdGFsLCBjb2RlXTogW251bWJlciwgc3RyaW5nXSkgPT5cbiAgICAgICAgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ3BhZ2VNZXRhUmVzb2x2ZXIuc2VhcmNoLmZpbmRQcm9kdWN0VGl0bGUnLCB7XG4gICAgICAgICAgY291bnQ6IHRvdGFsLFxuICAgICAgICAgIGNvdXBvbjogY29kZSxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0U2NvcmUocGFnZTogUGFnZSk6IG51bWJlciB7XG4gICAgbGV0IHNjb3JlID0gMDtcbiAgICBpZiAodGhpcy5wYWdlVHlwZSkge1xuICAgICAgc2NvcmUgKz0gcGFnZS50eXBlID09PSB0aGlzLnBhZ2VUeXBlID8gMSA6IC0xO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYWdlVGVtcGxhdGUpIHtcbiAgICAgIHNjb3JlICs9IHBhZ2UudGVtcGxhdGUgPT09IHRoaXMucGFnZVRlbXBsYXRlID8gMSA6IC0xO1xuICAgIH1cbiAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlXG4gICAgICAuZ2V0Um91dGVyU3RhdGUoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcChzdGF0ZSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHN0YXRlLnN0YXRlLnF1ZXJ5UGFyYW1zO1xuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKEJvb2xlYW4pXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChxdWVyeVBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIGlmIChxdWVyeVBhcmFtcykge1xuICAgICAgICAgIHNjb3JlICs9IHF1ZXJ5UGFyYW1zWydjb3Vwb25jb2RlJ10gPyAxIDogLTE7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICByZXR1cm4gc2NvcmU7XG4gIH1cbn1cbiJdfQ==