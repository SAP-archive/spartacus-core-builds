/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CurrencyService } from '../../../site-context/facade/currency.service';
import { LanguageService } from '../../../site-context/facade/language.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { SiteContextConfig } from '../../../site-context/config/site-context-config';
import { getContextParameterDefault } from '../../../site-context/config/context-config-utils';
import { CURRENCY_CONTEXT_ID, LANGUAGE_CONTEXT_ID, } from '../../../site-context/providers/context-service-map';
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
        this.currencyService
            .getActive()
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => (this.activeCurr = data)));
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
    { type: Injectable }
];
/** @nocollapse */
SiteContextInterceptor.ctorParameters = () => [
    { type: LanguageService },
    { type: CurrencyService },
    { type: OccEndpointsService },
    { type: SiteContextConfig }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckYsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDL0YsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixtQkFBbUIsR0FDcEIsTUFBTSxxREFBcUQsQ0FBQztBQUc3RCxNQUFNLE9BQU8sc0JBQXNCOzs7Ozs7O0lBSWpDLFlBQ1UsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsWUFBaUMsRUFDakMsTUFBeUI7UUFIekIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFFakMsSUFBSSxDQUFDLFVBQVUsR0FBRywwQkFBMEIsQ0FDMUMsSUFBSSxDQUFDLE1BQU0sRUFDWCxtQkFBbUIsQ0FDcEIsQ0FBQztRQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsMEJBQTBCLENBQzFDLElBQUksQ0FBQyxNQUFNLEVBQ1gsbUJBQW1CLENBQ3BCLENBQUM7UUFFRixJQUFJLENBQUMsZUFBZTthQUNqQixTQUFTLEVBQUU7YUFDWCxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsZUFBZTthQUNqQixTQUFTLEVBQUU7YUFDWCxTQUFTOzs7O1FBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFRCxTQUFTLENBQ1AsT0FBeUIsRUFDekIsSUFBaUI7UUFFakIsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUU7WUFDN0QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLFNBQVMsRUFBRTtvQkFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7b0JBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVTtpQkFDdEI7YUFDRixDQUFDLENBQUM7U0FDSjtRQUVELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUEzQ0YsVUFBVTs7OztZQVRGLGVBQWU7WUFEZixlQUFlO1lBRWYsbUJBQW1CO1lBQ25CLGlCQUFpQjs7OztJQVN4Qiw0Q0FBbUI7O0lBQ25CLDRDQUFtQjs7Ozs7SUFHakIsaURBQXdDOzs7OztJQUN4QyxpREFBd0M7Ozs7O0lBQ3hDLDhDQUF5Qzs7Ozs7SUFDekMsd0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgSHR0cEV2ZW50LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEludGVyY2VwdG9yLFxuICBIdHRwUmVxdWVzdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW5jeVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcbmltcG9ydCB7XG4gIENVUlJFTkNZX0NPTlRFWFRfSUQsXG4gIExBTkdVQUdFX0NPTlRFWFRfSUQsXG59IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLW1hcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dEludGVyY2VwdG9yIGltcGxlbWVudHMgSHR0cEludGVyY2VwdG9yIHtcbiAgYWN0aXZlTGFuZzogc3RyaW5nO1xuICBhY3RpdmVDdXJyOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsYW5ndWFnZVNlcnZpY2U6IExhbmd1YWdlU2VydmljZSxcbiAgICBwcml2YXRlIGN1cnJlbmN5U2VydmljZTogQ3VycmVuY3lTZXJ2aWNlLFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZ1xuICApIHtcbiAgICB0aGlzLmFjdGl2ZUxhbmcgPSBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdChcbiAgICAgIHRoaXMuY29uZmlnLFxuICAgICAgTEFOR1VBR0VfQ09OVEVYVF9JRFxuICAgICk7XG4gICAgdGhpcy5hY3RpdmVDdXJyID0gZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQoXG4gICAgICB0aGlzLmNvbmZpZyxcbiAgICAgIENVUlJFTkNZX0NPTlRFWFRfSURcbiAgICApO1xuXG4gICAgdGhpcy5sYW5ndWFnZVNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+ICh0aGlzLmFjdGl2ZUxhbmcgPSBkYXRhKSk7XG5cbiAgICB0aGlzLmN1cnJlbmN5U2VydmljZVxuICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gKHRoaXMuYWN0aXZlQ3VyciA9IGRhdGEpKTtcbiAgfVxuXG4gIGludGVyY2VwdChcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+IHtcbiAgICBpZiAocmVxdWVzdC51cmwuaW5jbHVkZXModGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpKSB7XG4gICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgIHNldFBhcmFtczoge1xuICAgICAgICAgIGxhbmc6IHRoaXMuYWN0aXZlTGFuZyxcbiAgICAgICAgICBjdXJyOiB0aGlzLmFjdGl2ZUN1cnIsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV4dC5oYW5kbGUocmVxdWVzdCk7XG4gIH1cbn1cbiJdfQ==