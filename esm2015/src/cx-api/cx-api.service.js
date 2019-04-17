/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Optional } from '@angular/core';
import { AuthService } from '../auth/index';
import { CmsService } from '../cms/index';
import { RoutingService } from '../routing/index';
import { LanguageService, CurrencyService } from '../site-context/index';
import { ProductService, ProductSearchService, ProductReviewService, } from '../product/index';
import { UserService } from '../user/index';
import { TranslationService } from '../i18n/index';
import * as i0 from "@angular/core";
import * as i1 from "../auth/facade/auth.service";
import * as i2 from "../cms/facade/cms.service";
import * as i3 from "../routing/facade/routing.service";
import * as i4 from "../site-context/facade/currency.service";
import * as i5 from "../site-context/facade/language.service";
import * as i6 from "../product/facade/product.service";
import * as i7 from "../product/facade/product-search.service";
import * as i8 from "../product/facade/product-review.service";
import * as i9 from "../user/facade/user.service";
import * as i10 from "../i18n/translation.service";
export class CxApiService {
    /**
     * @param {?} auth
     * @param {?} cms
     * @param {?} routing
     * @param {?} currency
     * @param {?} language
     * @param {?} product
     * @param {?} productSearch
     * @param {?} productReview
     * @param {?} user
     * @param {?} translation
     */
    constructor(auth, cms, routing, currency, language, product, productSearch, productReview, user, translation) {
        this.auth = auth;
        this.cms = cms;
        this.routing = routing;
        this.currency = currency;
        this.language = language;
        this.product = product;
        this.productSearch = productSearch;
        this.productReview = productReview;
        this.user = user;
        this.translation = translation;
    }
}
CxApiService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CxApiService.ctorParameters = () => [
    { type: AuthService, decorators: [{ type: Optional }] },
    { type: CmsService, decorators: [{ type: Optional }] },
    { type: RoutingService, decorators: [{ type: Optional }] },
    { type: CurrencyService, decorators: [{ type: Optional }] },
    { type: LanguageService, decorators: [{ type: Optional }] },
    { type: ProductService, decorators: [{ type: Optional }] },
    { type: ProductSearchService, decorators: [{ type: Optional }] },
    { type: ProductReviewService, decorators: [{ type: Optional }] },
    { type: UserService, decorators: [{ type: Optional }] },
    { type: TranslationService, decorators: [{ type: Optional }] }
];
/** @nocollapse */ CxApiService.ngInjectableDef = i0.defineInjectable({ factory: function CxApiService_Factory() { return new CxApiService(i0.inject(i1.AuthService, 8), i0.inject(i2.CmsService, 8), i0.inject(i3.RoutingService, 8), i0.inject(i4.CurrencyService, 8), i0.inject(i5.LanguageService, 8), i0.inject(i6.ProductService, 8), i0.inject(i7.ProductSearchService, 8), i0.inject(i8.ProductReviewService, 8), i0.inject(i9.UserService, 8), i0.inject(i10.TranslationService, 8)); }, token: CxApiService, providedIn: "root" });
if (false) {
    /** @type {?} */
    CxApiService.prototype.auth;
    /** @type {?} */
    CxApiService.prototype.cms;
    /** @type {?} */
    CxApiService.prototype.routing;
    /** @type {?} */
    CxApiService.prototype.currency;
    /** @type {?} */
    CxApiService.prototype.language;
    /** @type {?} */
    CxApiService.prototype.product;
    /** @type {?} */
    CxApiService.prototype.productSearch;
    /** @type {?} */
    CxApiService.prototype.productReview;
    /** @type {?} */
    CxApiService.prototype.user;
    /** @type {?} */
    CxApiService.prototype.translation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3gtYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY3gtYXBpL2N4LWFwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDMUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDekUsT0FBTyxFQUNMLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsb0JBQW9CLEdBQ3JCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7Ozs7OztBQUtuRCxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7Ozs7OztJQUN2QixZQUNxQixJQUFpQixFQUNqQixHQUFlLEVBQ2YsT0FBdUIsRUFFdkIsUUFBeUIsRUFDekIsUUFBeUIsRUFFekIsT0FBdUIsRUFDdkIsYUFBbUMsRUFDbkMsYUFBbUMsRUFFbkMsSUFBaUIsRUFFakIsV0FBK0I7UUFiL0IsU0FBSSxHQUFKLElBQUksQ0FBYTtRQUNqQixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBQ2YsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFFdkIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFFekIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFDdkIsa0JBQWEsR0FBYixhQUFhLENBQXNCO1FBQ25DLGtCQUFhLEdBQWIsYUFBYSxDQUFzQjtRQUVuQyxTQUFJLEdBQUosSUFBSSxDQUFhO1FBRWpCLGdCQUFXLEdBQVgsV0FBVyxDQUFvQjtJQUNqRCxDQUFDOzs7WUFuQkwsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBZFEsV0FBVyx1QkFpQmYsUUFBUTtZQWhCSixVQUFVLHVCQWlCZCxRQUFRO1lBaEJKLGNBQWMsdUJBaUJsQixRQUFRO1lBaEJhLGVBQWUsdUJBa0JwQyxRQUFRO1lBbEJKLGVBQWUsdUJBbUJuQixRQUFRO1lBakJYLGNBQWMsdUJBbUJYLFFBQVE7WUFsQlgsb0JBQW9CLHVCQW1CakIsUUFBUTtZQWxCWCxvQkFBb0IsdUJBbUJqQixRQUFRO1lBakJKLFdBQVcsdUJBbUJmLFFBQVE7WUFsQkosa0JBQWtCLHVCQW9CdEIsUUFBUTs7Ozs7SUFiVCw0QkFBb0M7O0lBQ3BDLDJCQUFrQzs7SUFDbEMsK0JBQTBDOztJQUUxQyxnQ0FBNEM7O0lBQzVDLGdDQUE0Qzs7SUFFNUMsK0JBQTBDOztJQUMxQyxxQ0FBc0Q7O0lBQ3RELHFDQUFzRDs7SUFFdEQsNEJBQW9DOztJQUVwQyxtQ0FBa0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uL2Ntcy9pbmRleCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uL3JvdXRpbmcvaW5kZXgnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlLCBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICcuLi9zaXRlLWNvbnRleHQvaW5kZXgnO1xuaW1wb3J0IHtcbiAgUHJvZHVjdFNlcnZpY2UsXG4gIFByb2R1Y3RTZWFyY2hTZXJ2aWNlLFxuICBQcm9kdWN0UmV2aWV3U2VydmljZSxcbn0gZnJvbSAnLi4vcHJvZHVjdC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXIvaW5kZXgnO1xuaW1wb3J0IHsgVHJhbnNsYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDeEFwaVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgYXV0aDogQXV0aFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGNtczogQ21zU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcm91dGluZzogUm91dGluZ1NlcnZpY2UsXG4gICAgLy8gc2l0ZSBjb250ZXh0XG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGN1cnJlbmN5OiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIGxhbmd1YWdlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgLy8gcHJvZHVjdFxuICAgIEBPcHRpb25hbCgpIHB1YmxpYyBwcm9kdWN0OiBQcm9kdWN0U2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgcHJvZHVjdFNlYXJjaDogUHJvZHVjdFNlYXJjaFNlcnZpY2UsXG4gICAgQE9wdGlvbmFsKCkgcHVibGljIHByb2R1Y3RSZXZpZXc6IFByb2R1Y3RSZXZpZXdTZXJ2aWNlLFxuICAgIC8vIHVzZXJcbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdXNlcjogVXNlclNlcnZpY2UsXG4gICAgLy8gdHJhbnNsYXRpb25cbiAgICBAT3B0aW9uYWwoKSBwdWJsaWMgdHJhbnNsYXRpb246IFRyYW5zbGF0aW9uU2VydmljZVxuICApIHt9XG59XG4iXX0=