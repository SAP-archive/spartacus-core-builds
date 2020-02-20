import { __decorate, __extends, __read, __values } from "tslib";
import { Injectable } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { PageRobotsMeta } from '../../cms/model/page.model';
import { PageMetaResolver } from '../../cms/page/page-meta.resolver';
import { FeatureConfigService } from '../../features-config/services/feature-config.service';
import { TranslationService } from '../../i18n/translation.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { ProductService } from '../facade/product.service';
import { ProductScope } from '../model/product-scope';
import * as i0 from "@angular/core";
import * as i1 from "../../routing/facade/routing.service";
import * as i2 from "../facade/product.service";
import * as i3 from "../../i18n/translation.service";
import * as i4 from "../../features-config/services/feature-config.service";
/**
 * Resolves the page data for the Product Detail Page
 * based on the `PageType.PRODUCT_PAGE`.
 *
 * The page title, heading, description, breadcrumbs and
 * first GALLERY image are resolved if available in the data.
 */
var ProductPageMetaResolver = /** @class */ (function (_super) {
    __extends(ProductPageMetaResolver, _super);
    function ProductPageMetaResolver(routingService, productService, translation, features) {
        var _this = _super.call(this) || this;
        _this.routingService = routingService;
        _this.productService = productService;
        _this.translation = translation;
        _this.features = features;
        _this.PRODUCT_SCOPE = _this.features && _this.features.isLevel('1.4') ? ProductScope.DETAILS : '';
        // reusable observable for product data based on the current page
        _this.product$ = _this.routingService.getRouterState().pipe(map(function (state) { return state.state.params['productCode']; }), filter(function (code) { return !!code; }), switchMap(function (code) { return _this.productService.get(code, _this.PRODUCT_SCOPE); }), filter(Boolean));
        _this.pageType = PageType.PRODUCT_PAGE;
        return _this;
    }
    /**
     * @deprecated since version 1.3
     *
     * The resolve method is no longer preferred and will be removed with release 2.0.
     * The caller `PageMetaService` service is improved to expect all individual resolvers
     * instead, so that the code is easier extensible.
     */
    ProductPageMetaResolver.prototype.resolve = function () {
        var _this = this;
        return this.product$.pipe(switchMap(function (p) {
            return combineLatest([
                _this.resolveHeading(p),
                _this.resolveTitle(p),
                _this.resolveDescription(p),
                _this.resolveBreadcrumbLabel().pipe(switchMap(function (label) { return _this.resolveBreadcrumbs(p, label); })),
                _this.resolveImage(p),
                _this.resolveRobots(p),
            ]);
        }), map(function (_a) {
            var _b = __read(_a, 6), heading = _b[0], title = _b[1], description = _b[2], breadcrumbs = _b[3], image = _b[4], robots = _b[5];
            return ({
                heading: heading,
                title: title,
                description: description,
                breadcrumbs: breadcrumbs,
                image: image,
                robots: robots,
            });
        }));
    };
    ProductPageMetaResolver.prototype.resolveHeading = function (product) {
        var _this = this;
        var product$ = product ? of(product) : this.product$;
        return product$.pipe(switchMap(function (p) {
            return _this.translation.translate('pageMetaResolver.product.heading', {
                heading: p.name,
            });
        }));
    };
    ProductPageMetaResolver.prototype.resolveTitle = function (product) {
        var _this = this;
        var product$ = product ? of(product) : this.product$;
        return product$.pipe(switchMap(function (p) {
            var title = p.name;
            title += _this.resolveFirstCategory(p);
            title += _this.resolveManufacturer(p);
            return _this.translation.translate('pageMetaResolver.product.title', {
                title: title,
            });
        }));
    };
    ProductPageMetaResolver.prototype.resolveDescription = function (product) {
        var _this = this;
        var product$ = product ? of(product) : this.product$;
        return product$.pipe(switchMap(function (p) {
            return _this.translation.translate('pageMetaResolver.product.description', {
                description: p.summary,
            });
        }));
    };
    /**
     * @deprecated since version 1.3
     * This method will be removed with with 2.0
     */
    ProductPageMetaResolver.prototype.resolveBreadcrumbLabel = function () {
        return this.translation.translate('common.home');
    };
    ProductPageMetaResolver.prototype.resolveBreadcrumbs = function (product, breadcrumbLabel) {
        var sources = product && breadcrumbLabel
            ? [of(product), of(breadcrumbLabel)]
            : [this.product$.pipe(), this.translation.translate('common.home')];
        return combineLatest(sources).pipe(map(function (_a) {
            var e_1, _b;
            var _c = __read(_a, 2), p = _c[0], label = _c[1];
            var breadcrumbs = [];
            breadcrumbs.push({ label: label, link: '/' });
            try {
                for (var _d = __values(p.categories || []), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var _f = _e.value, name_1 = _f.name, code = _f.code, url = _f.url;
                    breadcrumbs.push({
                        label: name_1 || code,
                        link: url,
                    });
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return breadcrumbs;
        }));
    };
    ProductPageMetaResolver.prototype.resolveImage = function (product) {
        var product$ = product ? of(product) : this.product$;
        return product$.pipe(map(function (p) {
            return p.images &&
                p.images.PRIMARY &&
                p.images.PRIMARY.zoom &&
                p.images.PRIMARY.zoom.url
                ? p.images.PRIMARY.zoom.url
                : null;
        }));
    };
    ProductPageMetaResolver.prototype.resolveFirstCategory = function (product) {
        var firstCategory;
        if (product.categories && product.categories.length > 0) {
            firstCategory = product.categories[0];
        }
        return firstCategory
            ? " | " + (firstCategory.name || firstCategory.code)
            : '';
    };
    ProductPageMetaResolver.prototype.resolveManufacturer = function (product) {
        return product.manufacturer ? " | " + product.manufacturer : '';
    };
    ProductPageMetaResolver.prototype.resolveRobots = function (product) {
        var product$ = product ? of(product) : this.product$;
        return product$.pipe(switchMap(function (p) {
            if (!p.purchasable) {
                return of([PageRobotsMeta.FOLLOW, PageRobotsMeta.NOINDEX]);
            }
            else {
                return of([PageRobotsMeta.FOLLOW, PageRobotsMeta.INDEX]);
            }
        }));
    };
    ProductPageMetaResolver.ctorParameters = function () { return [
        { type: RoutingService },
        { type: ProductService },
        { type: TranslationService },
        { type: FeatureConfigService }
    ]; };
    ProductPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function ProductPageMetaResolver_Factory() { return new ProductPageMetaResolver(i0.ɵɵinject(i1.RoutingService), i0.ɵɵinject(i2.ProductService), i0.ɵɵinject(i3.TranslationService), i0.ɵɵinject(i4.FeatureConfigService)); }, token: ProductPageMetaResolver, providedIn: "root" });
    ProductPageMetaResolver = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], ProductPageMetaResolver);
    return ProductPageMetaResolver;
}(PageMetaResolver));
export { ProductPageMetaResolver };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zZXJ2aWNlcy9wcm9kdWN0LXBhZ2UtbWV0YS5yZXNvbHZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQVksY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFRckUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDN0YsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDcEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7Ozs7QUFFdEQ7Ozs7OztHQU1HO0FBSUg7SUFBNkMsMkNBQWdCO0lBbUMzRCxpQ0FDWSxjQUE4QixFQUM5QixjQUE4QixFQUM5QixXQUErQixFQUMvQixRQUErQjtRQUozQyxZQU1FLGlCQUFPLFNBRVI7UUFQVyxvQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLGlCQUFXLEdBQVgsV0FBVyxDQUFvQjtRQUMvQixjQUFRLEdBQVIsUUFBUSxDQUF1QjtRQWhDeEIsbUJBQWEsR0FDOUIsS0FBSSxDQUFDLFFBQVEsSUFBSSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRTVFLGlFQUFpRTtRQUN6RCxjQUFRLEdBQUcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzFELEdBQUcsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFqQyxDQUFpQyxDQUFDLEVBQy9DLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEVBQU4sQ0FBTSxDQUFDLEVBQ3RCLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxLQUFJLENBQUMsYUFBYSxDQUFDLEVBQWpELENBQWlELENBQUMsRUFDcEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNoQixDQUFDO1FBMEJBLEtBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQzs7SUFDeEMsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILHlDQUFPLEdBQVA7UUFBQSxpQkFnQ0M7UUEvQkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDdkIsU0FBUyxDQUFDLFVBQUMsQ0FBVTtZQUNuQixPQUFBLGFBQWEsQ0FBQztnQkFDWixLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsS0FBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7Z0JBQ3BCLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLEtBQUksQ0FBQyxzQkFBc0IsRUFBRSxDQUFDLElBQUksQ0FDaEMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBakMsQ0FBaUMsQ0FBQyxDQUN0RDtnQkFDRCxLQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDcEIsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7YUFDdEIsQ0FBQztRQVRGLENBU0UsQ0FDSCxFQUNELEdBQUcsQ0FDRCxVQUFDLEVBT0E7Z0JBUEEsa0JBT0EsRUFQQyxlQUFPLEVBQUUsYUFBSyxFQUFFLG1CQUFXLEVBQUUsbUJBQVcsRUFBRSxhQUFLLEVBQUUsY0FBTTtZQU9uRCxPQUFBLENBQUM7Z0JBQ0wsT0FBTyxTQUFBO2dCQUNQLEtBQUssT0FBQTtnQkFDTCxXQUFXLGFBQUE7Z0JBQ1gsV0FBVyxhQUFBO2dCQUNYLEtBQUssT0FBQTtnQkFDTCxNQUFNLFFBQUE7YUFDUCxDQUFDO1FBUEksQ0FPSixDQUNILENBQ0YsQ0FBQztJQUNKLENBQUM7SUFTRCxnREFBYyxHQUFkLFVBQWUsT0FBaUI7UUFBaEMsaUJBU0M7UUFSQyxJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLFNBQVMsQ0FBQyxVQUFDLENBQVU7WUFDbkIsT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxrQ0FBa0MsRUFBRTtnQkFDN0QsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJO2FBQ2hCLENBQUM7UUFGRixDQUVFLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQVNELDhDQUFZLEdBQVosVUFBYSxPQUFpQjtRQUE5QixpQkFZQztRQVhDLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZELE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsU0FBUyxDQUFDLFVBQUMsQ0FBVTtZQUNuQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQ25CLEtBQUssSUFBSSxLQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEMsS0FBSyxJQUFJLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQyxPQUFPLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGdDQUFnQyxFQUFFO2dCQUNsRSxLQUFLLEVBQUUsS0FBSzthQUNiLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBU0Qsb0RBQWtCLEdBQWxCLFVBQW1CLE9BQWlCO1FBQXBDLGlCQVNDO1FBUkMsSUFBTSxRQUFRLEdBQXdCLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzVFLE9BQU8sUUFBUSxDQUFDLElBQUksQ0FDbEIsU0FBUyxDQUFDLFVBQUMsQ0FBVTtZQUNuQixPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLHNDQUFzQyxFQUFFO2dCQUNqRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLE9BQU87YUFDdkIsQ0FBQztRQUZGLENBRUUsQ0FDSCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0RBQXNCLEdBQXRCO1FBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBWUQsb0RBQWtCLEdBQWxCLFVBQ0UsT0FBaUIsRUFDakIsZUFBd0I7UUFFeEIsSUFBTSxPQUFPLEdBQ1gsT0FBTyxJQUFJLGVBQWU7WUFDeEIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFFeEUsT0FBTyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNoQyxHQUFHLENBQUMsVUFBQyxFQUE2Qjs7Z0JBQTdCLGtCQUE2QixFQUE1QixTQUFDLEVBQUUsYUFBSztZQUNaLElBQU0sV0FBVyxHQUFHLEVBQUUsQ0FBQztZQUN2QixXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs7Z0JBQzlDLEtBQWtDLElBQUEsS0FBQSxTQUFBLENBQUMsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFBLGdCQUFBLDRCQUFFO29CQUEzQyxJQUFBLGFBQW1CLEVBQWpCLGdCQUFJLEVBQUUsY0FBSSxFQUFFLFlBQUc7b0JBQzFCLFdBQVcsQ0FBQyxJQUFJLENBQUM7d0JBQ2YsS0FBSyxFQUFFLE1BQUksSUFBSSxJQUFJO3dCQUNuQixJQUFJLEVBQUUsR0FBRztxQkFDVixDQUFDLENBQUM7aUJBQ0o7Ozs7Ozs7OztZQUNELE9BQU8sV0FBVyxDQUFDO1FBQ3JCLENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBU0QsOENBQVksR0FBWixVQUFhLE9BQWlCO1FBQzVCLElBQU0sUUFBUSxHQUF3QixPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM1RSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLEdBQUcsQ0FBQyxVQUFDLENBQVU7WUFDYixPQUFBLENBQUMsQ0FBQyxNQUFNO2dCQUNSLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBTztnQkFDVixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxJQUFJO2dCQUN0QixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQVEsQ0FBQyxJQUFJLENBQUMsR0FBRztnQkFDOUIsQ0FBQyxDQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsT0FBUSxDQUFDLElBQUksQ0FBQyxHQUFHO2dCQUNsQyxDQUFDLENBQUMsSUFBSTtRQUxSLENBS1EsQ0FDVCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRU8sc0RBQW9CLEdBQTVCLFVBQTZCLE9BQWdCO1FBQzNDLElBQUksYUFBYSxDQUFDO1FBQ2xCLElBQUksT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkQsYUFBYSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLGFBQWE7WUFDbEIsQ0FBQyxDQUFDLFNBQU0sYUFBYSxDQUFDLElBQUksSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFFO1lBQ2xELENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDVCxDQUFDO0lBRU8scURBQW1CLEdBQTNCLFVBQTRCLE9BQWdCO1FBQzFDLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsUUFBTSxPQUFPLENBQUMsWUFBYyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDbEUsQ0FBQztJQVNELCtDQUFhLEdBQWIsVUFBYyxPQUFpQjtRQUM3QixJQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2RCxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQ2xCLFNBQVMsQ0FBQyxVQUFDLENBQVU7WUFDbkIsSUFBSSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2xCLE9BQU8sRUFBRSxDQUFDLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzthQUM1RDtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDMUQ7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBMU0yQixjQUFjO2dCQUNkLGNBQWM7Z0JBQ2pCLGtCQUFrQjtnQkFDcEIsb0JBQW9COzs7SUF2Q2hDLHVCQUF1QjtRQUhuQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csdUJBQXVCLENBK09uQztrQ0E3UUQ7Q0E2UUMsQUEvT0QsQ0FBNkMsZ0JBQWdCLEdBK081RDtTQS9PWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBhZ2VNZXRhLCBQYWdlUm9ib3RzTWV0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VNZXRhUmVzb2x2ZXIgfSBmcm9tICcuLi8uLi9jbXMvcGFnZS9wYWdlLW1ldGEucmVzb2x2ZXInO1xuaW1wb3J0IHtcbiAgUGFnZUJyZWFkY3J1bWJSZXNvbHZlcixcbiAgUGFnZURlc2NyaXB0aW9uUmVzb2x2ZXIsXG4gIFBhZ2VIZWFkaW5nUmVzb2x2ZXIsXG4gIFBhZ2VJbWFnZVJlc29sdmVyLFxuICBQYWdlVGl0bGVSZXNvbHZlcixcbn0gZnJvbSAnLi4vLi4vY21zL3BhZ2UvcGFnZS5yZXNvbHZlcnMnO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBUcmFuc2xhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvcHJvZHVjdC5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3RTY29wZSB9IGZyb20gJy4uL21vZGVsL3Byb2R1Y3Qtc2NvcGUnO1xuXG4vKipcbiAqIFJlc29sdmVzIHRoZSBwYWdlIGRhdGEgZm9yIHRoZSBQcm9kdWN0IERldGFpbCBQYWdlXG4gKiBiYXNlZCBvbiB0aGUgYFBhZ2VUeXBlLlBST0RVQ1RfUEFHRWAuXG4gKlxuICogVGhlIHBhZ2UgdGl0bGUsIGhlYWRpbmcsIGRlc2NyaXB0aW9uLCBicmVhZGNydW1icyBhbmRcbiAqIGZpcnN0IEdBTExFUlkgaW1hZ2UgYXJlIHJlc29sdmVkIGlmIGF2YWlsYWJsZSBpbiB0aGUgZGF0YS5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RQYWdlTWV0YVJlc29sdmVyIGV4dGVuZHMgUGFnZU1ldGFSZXNvbHZlclxuICBpbXBsZW1lbnRzXG4gICAgUGFnZUhlYWRpbmdSZXNvbHZlcixcbiAgICBQYWdlVGl0bGVSZXNvbHZlcixcbiAgICBQYWdlRGVzY3JpcHRpb25SZXNvbHZlcixcbiAgICBQYWdlQnJlYWRjcnVtYlJlc29sdmVyLFxuICAgIFBhZ2VJbWFnZVJlc29sdmVyIHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IFBST0RVQ1RfU0NPUEUgPVxuICAgIHRoaXMuZmVhdHVyZXMgJiYgdGhpcy5mZWF0dXJlcy5pc0xldmVsKCcxLjQnKSA/IFByb2R1Y3RTY29wZS5ERVRBSUxTIDogJyc7XG5cbiAgLy8gcmV1c2FibGUgb2JzZXJ2YWJsZSBmb3IgcHJvZHVjdCBkYXRhIGJhc2VkIG9uIHRoZSBjdXJyZW50IHBhZ2VcbiAgcHJpdmF0ZSBwcm9kdWN0JCA9IHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKS5waXBlKFxuICAgIG1hcChzdGF0ZSA9PiBzdGF0ZS5zdGF0ZS5wYXJhbXNbJ3Byb2R1Y3RDb2RlJ10pLFxuICAgIGZpbHRlcihjb2RlID0+ICEhY29kZSksXG4gICAgc3dpdGNoTWFwKGNvZGUgPT4gdGhpcy5wcm9kdWN0U2VydmljZS5nZXQoY29kZSwgdGhpcy5QUk9EVUNUX1NDT1BFKSksXG4gICAgZmlsdGVyKEJvb2xlYW4pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gICAgZmVhdHVyZXM6IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIDEuNFxuICAgKi9cbiAgY29uc3RydWN0b3IoXG4gICAgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb2R1Y3RTZXJ2aWNlOiBQcm9kdWN0U2VydmljZSxcbiAgICB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvZHVjdFNlcnZpY2U6IFByb2R1Y3RTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB0cmFuc2xhdGlvbjogVHJhbnNsYXRpb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmZWF0dXJlcz86IEZlYXR1cmVDb25maWdTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5wYWdlVHlwZSA9IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKlxuICAgKiBUaGUgcmVzb2x2ZSBtZXRob2QgaXMgbm8gbG9uZ2VyIHByZWZlcnJlZCBhbmQgd2lsbCBiZSByZW1vdmVkIHdpdGggcmVsZWFzZSAyLjAuXG4gICAqIFRoZSBjYWxsZXIgYFBhZ2VNZXRhU2VydmljZWAgc2VydmljZSBpcyBpbXByb3ZlZCB0byBleHBlY3QgYWxsIGluZGl2aWR1YWwgcmVzb2x2ZXJzXG4gICAqIGluc3RlYWQsIHNvIHRoYXQgdGhlIGNvZGUgaXMgZWFzaWVyIGV4dGVuc2libGUuXG4gICAqL1xuICByZXNvbHZlKCk6IE9ic2VydmFibGU8UGFnZU1ldGE+IHwgYW55IHtcbiAgICByZXR1cm4gdGhpcy5wcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgICAgICB0aGlzLnJlc29sdmVIZWFkaW5nKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZVRpdGxlKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZURlc2NyaXB0aW9uKHApLFxuICAgICAgICAgIHRoaXMucmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpLnBpcGUoXG4gICAgICAgICAgICBzd2l0Y2hNYXAobGFiZWwgPT4gdGhpcy5yZXNvbHZlQnJlYWRjcnVtYnMocCwgbGFiZWwpKVxuICAgICAgICAgICksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlSW1hZ2UocCksXG4gICAgICAgICAgdGhpcy5yZXNvbHZlUm9ib3RzKHApLFxuICAgICAgICBdKVxuICAgICAgKSxcbiAgICAgIG1hcChcbiAgICAgICAgKFtoZWFkaW5nLCB0aXRsZSwgZGVzY3JpcHRpb24sIGJyZWFkY3J1bWJzLCBpbWFnZSwgcm9ib3RzXTogW1xuICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICBzdHJpbmcsXG4gICAgICAgICAgc3RyaW5nLFxuICAgICAgICAgIGFueVtdLFxuICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICBzdHJpbmdbXVxuICAgICAgICBdKSA9PiAoe1xuICAgICAgICAgIGhlYWRpbmcsXG4gICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgYnJlYWRjcnVtYnMsXG4gICAgICAgICAgaW1hZ2UsXG4gICAgICAgICAgcm9ib3RzLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlSGVhZGluZygpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVIZWFkaW5nKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVIZWFkaW5nKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVIZWFkaW5nKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JCA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICAgIHRoaXMudHJhbnNsYXRpb24udHJhbnNsYXRlKCdwYWdlTWV0YVJlc29sdmVyLnByb2R1Y3QuaGVhZGluZycsIHtcbiAgICAgICAgICBoZWFkaW5nOiBwLm5hbWUsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVUaXRsZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVUaXRsZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlVGl0bGUocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZVRpdGxlKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JCA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgbGV0IHRpdGxlID0gcC5uYW1lO1xuICAgICAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVGaXJzdENhdGVnb3J5KHApO1xuICAgICAgICB0aXRsZSArPSB0aGlzLnJlc29sdmVNYW51ZmFjdHVyZXIocCk7XG4gICAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LnRpdGxlJywge1xuICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICByZXNvbHZlRGVzY3JpcHRpb24oKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlRGVzY3JpcHRpb24oKWAgaW5zdGVhZFxuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiB1bmlmaWVkLXNpZ25hdHVyZXNcbiAgcmVzb2x2ZURlc2NyaXB0aW9uKHByb2R1Y3Q6IFByb2R1Y3QpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIHJlc29sdmVEZXNjcmlwdGlvbihwcm9kdWN0PzogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgY29uc3QgcHJvZHVjdCQ6IE9ic2VydmFibGU8UHJvZHVjdD4gPSBwcm9kdWN0ID8gb2YocHJvZHVjdCkgOiB0aGlzLnByb2R1Y3QkO1xuICAgIHJldHVybiBwcm9kdWN0JC5waXBlKFxuICAgICAgc3dpdGNoTWFwKChwOiBQcm9kdWN0KSA9PlxuICAgICAgICB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgncGFnZU1ldGFSZXNvbHZlci5wcm9kdWN0LmRlc2NyaXB0aW9uJywge1xuICAgICAgICAgIGRlc2NyaXB0aW9uOiBwLnN1bW1hcnksXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIHJlbW92ZWQgd2l0aCB3aXRoIDIuMFxuICAgKi9cbiAgcmVzb2x2ZUJyZWFkY3J1bWJMYWJlbCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLnRyYW5zbGF0aW9uLnRyYW5zbGF0ZSgnY29tbW9uLmhvbWUnKTtcbiAgfVxuXG4gIHJlc29sdmVCcmVhZGNydW1icygpOiBPYnNlcnZhYmxlPGFueVtdPjtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb24gMS4zXG4gICAqIFdpdGggMi4wLCB0aGUgYXJndW1lbnQocykgd2lsbCBiZSByZW1vdmVkIGFuZCB0aGUgcmV0dXJuIHR5cGUgd2lsbCBjaGFuZ2UuIFVzZSBgcmVzb2x2ZUJyZWFkY3J1bWJzKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVCcmVhZGNydW1icyhcbiAgICBwcm9kdWN0OiBQcm9kdWN0LFxuICAgIGJyZWFkY3J1bWJMYWJlbDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+O1xuICByZXNvbHZlQnJlYWRjcnVtYnMoXG4gICAgcHJvZHVjdD86IFByb2R1Y3QsXG4gICAgYnJlYWRjcnVtYkxhYmVsPzogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8YW55W10+IHtcbiAgICBjb25zdCBzb3VyY2VzID1cbiAgICAgIHByb2R1Y3QgJiYgYnJlYWRjcnVtYkxhYmVsXG4gICAgICAgID8gW29mKHByb2R1Y3QpLCBvZihicmVhZGNydW1iTGFiZWwpXVxuICAgICAgICA6IFt0aGlzLnByb2R1Y3QkLnBpcGUoKSwgdGhpcy50cmFuc2xhdGlvbi50cmFuc2xhdGUoJ2NvbW1vbi5ob21lJyldO1xuXG4gICAgcmV0dXJuIGNvbWJpbmVMYXRlc3Qoc291cmNlcykucGlwZShcbiAgICAgIG1hcCgoW3AsIGxhYmVsXTogW1Byb2R1Y3QsIHN0cmluZ10pID0+IHtcbiAgICAgICAgY29uc3QgYnJlYWRjcnVtYnMgPSBbXTtcbiAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7IGxhYmVsOiBsYWJlbCwgbGluazogJy8nIH0pO1xuICAgICAgICBmb3IgKGNvbnN0IHsgbmFtZSwgY29kZSwgdXJsIH0gb2YgcC5jYXRlZ29yaWVzIHx8IFtdKSB7XG4gICAgICAgICAgYnJlYWRjcnVtYnMucHVzaCh7XG4gICAgICAgICAgICBsYWJlbDogbmFtZSB8fCBjb2RlLFxuICAgICAgICAgICAgbGluazogdXJsLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBicmVhZGNydW1icztcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHJlc29sdmVJbWFnZSgpOiBPYnNlcnZhYmxlPHN0cmluZz47XG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuM1xuICAgKiBXaXRoIDIuMCwgdGhlIGFyZ3VtZW50KHMpIHdpbGwgYmUgcmVtb3ZlZCBhbmQgdGhlIHJldHVybiB0eXBlIHdpbGwgY2hhbmdlLiBVc2UgYHJlc29sdmVJbWFnZSgpYCBpbnN0ZWFkXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IHVuaWZpZWQtc2lnbmF0dXJlc1xuICByZXNvbHZlSW1hZ2UocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgcmVzb2x2ZUltYWdlKHByb2R1Y3Q/OiBQcm9kdWN0KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcbiAgICBjb25zdCBwcm9kdWN0JDogT2JzZXJ2YWJsZTxQcm9kdWN0PiA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBtYXAoKHA6IFByb2R1Y3QpID0+XG4gICAgICAgIHAuaW1hZ2VzICYmXG4gICAgICAgIHAuaW1hZ2VzLlBSSU1BUlkgJiZcbiAgICAgICAgKDxhbnk+cC5pbWFnZXMuUFJJTUFSWSkuem9vbSAmJlxuICAgICAgICAoPGFueT5wLmltYWdlcy5QUklNQVJZKS56b29tLnVybFxuICAgICAgICAgID8gKDxhbnk+cC5pbWFnZXMuUFJJTUFSWSkuem9vbS51cmxcbiAgICAgICAgICA6IG51bGxcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZXNvbHZlRmlyc3RDYXRlZ29yeShwcm9kdWN0OiBQcm9kdWN0KTogc3RyaW5nIHtcbiAgICBsZXQgZmlyc3RDYXRlZ29yeTtcbiAgICBpZiAocHJvZHVjdC5jYXRlZ29yaWVzICYmIHByb2R1Y3QuY2F0ZWdvcmllcy5sZW5ndGggPiAwKSB7XG4gICAgICBmaXJzdENhdGVnb3J5ID0gcHJvZHVjdC5jYXRlZ29yaWVzWzBdO1xuICAgIH1cbiAgICByZXR1cm4gZmlyc3RDYXRlZ29yeVxuICAgICAgPyBgIHwgJHtmaXJzdENhdGVnb3J5Lm5hbWUgfHwgZmlyc3RDYXRlZ29yeS5jb2RlfWBcbiAgICAgIDogJyc7XG4gIH1cblxuICBwcml2YXRlIHJlc29sdmVNYW51ZmFjdHVyZXIocHJvZHVjdDogUHJvZHVjdCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHByb2R1Y3QubWFudWZhY3R1cmVyID8gYCB8ICR7cHJvZHVjdC5tYW51ZmFjdHVyZXJ9YCA6ICcnO1xuICB9XG5cbiAgcmVzb2x2ZVJvYm90cygpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+O1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgdmVyc2lvbiAxLjNcbiAgICogV2l0aCAyLjAsIHRoZSBhcmd1bWVudChzKSB3aWxsIGJlIHJlbW92ZWQgYW5kIHRoZSByZXR1cm4gdHlwZSB3aWxsIGNoYW5nZS4gVXNlIGByZXNvbHZlUm9ib3RzKClgIGluc3RlYWRcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdW5pZmllZC1zaWduYXR1cmVzXG4gIHJlc29sdmVSb2JvdHMocHJvZHVjdDogUHJvZHVjdCk6IE9ic2VydmFibGU8UGFnZVJvYm90c01ldGFbXT47XG4gIHJlc29sdmVSb2JvdHMocHJvZHVjdD86IFByb2R1Y3QpOiBPYnNlcnZhYmxlPFBhZ2VSb2JvdHNNZXRhW10+IHtcbiAgICBjb25zdCBwcm9kdWN0JCA9IHByb2R1Y3QgPyBvZihwcm9kdWN0KSA6IHRoaXMucHJvZHVjdCQ7XG4gICAgcmV0dXJuIHByb2R1Y3QkLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKHA6IFByb2R1Y3QpID0+IHtcbiAgICAgICAgaWYgKCFwLnB1cmNoYXNhYmxlKSB7XG4gICAgICAgICAgcmV0dXJuIG9mKFtQYWdlUm9ib3RzTWV0YS5GT0xMT1csIFBhZ2VSb2JvdHNNZXRhLk5PSU5ERVhdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YoW1BhZ2VSb2JvdHNNZXRhLkZPTExPVywgUGFnZVJvYm90c01ldGEuSU5ERVhdKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=