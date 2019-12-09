/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CurrencyService } from '../../../site-context/facade/currency.service';
import { LanguageService } from '../../../site-context/facade/language.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { SiteContextConfig } from '../../../site-context/config/site-context-config';
import { getContextParameterDefault } from '../../../site-context/config/context-config-utils';
import { CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from '../../../site-context/providers/context-ids';
import * as i0 from "@angular/core";
import * as i1 from "../../../site-context/facade/language.service";
import * as i2 from "../../../site-context/facade/currency.service";
import * as i3 from "../../services/occ-endpoints.service";
import * as i4 from "../../../site-context/config/site-context-config";
export class SiteContextInterceptor {
    /**
     * @param {?} languageService
     * @param {?} currencyService
     * @param {?} occEndpoints
     * @param {?} config
     */
    constructor(languageService, currencyService, occEndpoints, config) {
        this.languageService = languageService;
        this.currencyService = currencyService;
        this.occEndpoints = occEndpoints;
        this.config = config;
        this.activeLang = getContextParameterDefault(this.config, LANGUAGE_CONTEXT_ID);
        this.activeCurr = getContextParameterDefault(this.config, CURRENCY_CONTEXT_ID);
        this.languageService
            .getActive()
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => (this.activeLang = data)));
        this.currencyService.getActive().subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.activeCurr = data;
        }));
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    intercept(request, next) {
        if (request.url.includes(this.occEndpoints.getBaseEndpoint())) {
            request = request.clone({
                setParams: {
                    lang: this.activeLang,
                    curr: this.activeCurr,
                },
            });
        }
        return next.handle(request);
    }
}
SiteContextInterceptor.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
SiteContextInterceptor.ctorParameters = () => [
    { type: LanguageService },
    { type: CurrencyService },
    { type: OccEndpointsService },
    { type: SiteContextConfig }
];
/** @nocollapse */ SiteContextInterceptor.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SiteContextInterceptor_Factory() { return new SiteContextInterceptor(i0.ɵɵinject(i1.LanguageService), i0.ɵɵinject(i2.CurrencyService), i0.ɵɵinject(i3.OccEndpointsService), i0.ɵɵinject(i4.SiteContextConfig)); }, token: SiteContextInterceptor, providedIn: "root" });
if (false) {
    /** @type {?} */
    SiteContextInterceptor.prototype.activeLang;
    /** @type {?} */
    SiteContextInterceptor.prototype.activeCurr;
    /**
     * @type {?}
     * @private
     */
    SiteContextInterceptor.prototype.languageService;
    /**
     * @type {?}
     * @private
     */
    SiteContextInterceptor.prototype.currencyService;
    /**
     * @type {?}
     * @private
     */
    SiteContextInterceptor.prototype.occEndpoints;
    /**
     * @type {?}
     * @private
     */
    SiteContextInterceptor.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixtQkFBbUIsR0FDcEIsTUFBTSw2Q0FBNkMsQ0FBQzs7Ozs7O0FBR3JELE1BQU0sT0FBTyxzQkFBc0I7Ozs7Ozs7SUFJakMsWUFDVSxlQUFnQyxFQUNoQyxlQUFnQyxFQUNoQyxZQUFpQyxFQUNqQyxNQUF5QjtRQUh6QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUVqQyxJQUFJLENBQUMsVUFBVSxHQUFHLDBCQUEwQixDQUMxQyxJQUFJLENBQUMsTUFBTSxFQUNYLG1CQUFtQixDQUNwQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFVBQVUsR0FBRywwQkFBMEIsQ0FDMUMsSUFBSSxDQUFDLE1BQU0sRUFDWCxtQkFBbUIsQ0FDcEIsQ0FBQztRQUVGLElBQUksQ0FBQyxlQUFlO2FBQ2pCLFNBQVMsRUFBRTthQUNYLFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsRUFBQyxDQUFDO1FBRS9DLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRUQsU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFO1lBQzdELE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7aUJBQ3RCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBM0NGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7Ozs7WUFUekIsZUFBZTtZQURmLGVBQWU7WUFFZixtQkFBbUI7WUFDbkIsaUJBQWlCOzs7OztJQVN4Qiw0Q0FBbUI7O0lBQ25CLDRDQUFtQjs7Ozs7SUFHakIsaURBQXdDOzs7OztJQUN4QyxpREFBd0M7Ozs7O0lBQ3hDLDhDQUF5Qzs7Ozs7SUFDekMsd0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcbmltcG9ydCB7XG4gIENVUlJFTkNZX0NPTlRFWFRfSUQsXG4gIExBTkdVQUdFX0NPTlRFWFRfSUQsXG59IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9wcm92aWRlcnMvY29udGV4dC1pZHMnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBhY3RpdmVMYW5nOiBzdHJpbmc7XG4gIGFjdGl2ZUN1cnI6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICAgIHByaXZhdGUgY3VycmVuY3lTZXJ2aWNlOiBDdXJyZW5jeVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnXG4gICkge1xuICAgIHRoaXMuYWN0aXZlTGFuZyA9IGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KFxuICAgICAgdGhpcy5jb25maWcsXG4gICAgICBMQU5HVUFHRV9DT05URVhUX0lEXG4gICAgKTtcbiAgICB0aGlzLmFjdGl2ZUN1cnIgPSBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdChcbiAgICAgIHRoaXMuY29uZmlnLFxuICAgICAgQ1VSUkVOQ1lfQ09OVEVYVF9JRFxuICAgICk7XG5cbiAgICB0aGlzLmxhbmd1YWdlU2VydmljZVxuICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gKHRoaXMuYWN0aXZlTGFuZyA9IGRhdGEpKTtcblxuICAgIHRoaXMuY3VycmVuY3lTZXJ2aWNlLmdldEFjdGl2ZSgpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMuYWN0aXZlQ3VyciA9IGRhdGE7XG4gICAgfSk7XG4gIH1cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgaWYgKHJlcXVlc3QudXJsLmluY2x1ZGVzKHRoaXMub2NjRW5kcG9pbnRzLmdldEJhc2VFbmRwb2ludCgpKSkge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICBzZXRQYXJhbXM6IHtcbiAgICAgICAgICBsYW5nOiB0aGlzLmFjdGl2ZUxhbmcsXG4gICAgICAgICAgY3VycjogdGhpcy5hY3RpdmVDdXJyLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICB9XG59XG4iXX0=