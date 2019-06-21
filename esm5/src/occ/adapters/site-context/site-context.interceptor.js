/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CurrencyService } from '../../../site-context/facade/currency.service';
import { LanguageService } from '../../../site-context/facade/language.service';
import { OccConfig } from '../../config/occ-config';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
var SiteContextInterceptor = /** @class */ (function () {
    function SiteContextInterceptor(languageService, currencyService, occEndpoints, config) {
        var _this = this;
        this.languageService = languageService;
        this.currencyService = currencyService;
        this.occEndpoints = occEndpoints;
        this.config = config;
        this.activeLang = this.config.site.language;
        this.activeCurr = this.config.site.currency;
        this.languageService
            .getActive()
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return (_this.activeLang = data); }));
        this.currencyService
            .getActive()
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return (_this.activeCurr = data); }));
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    SiteContextInterceptor.prototype.intercept = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        if (request.url.includes(this.occEndpoints.getBaseEndpoint())) {
            request = request.clone({
                setParams: {
                    lang: this.activeLang,
                    curr: this.activeCurr,
                },
            });
        }
        return next.handle(request);
    };
    SiteContextInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextInterceptor.ctorParameters = function () { return [
        { type: LanguageService },
        { type: CurrencyService },
        { type: OccEndpointsService },
        { type: OccConfig }
    ]; };
    return SiteContextInterceptor;
}());
export { SiteContextInterceptor };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNoRixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sK0NBQStDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRTNFO0lBS0UsZ0NBQ1UsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsWUFBaUMsRUFDakMsTUFBaUI7UUFKM0IsaUJBYUM7UUFaUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBUDNCLGVBQVUsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0MsZUFBVSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQVE3QyxJQUFJLENBQUMsZUFBZTthQUNqQixTQUFTLEVBQUU7YUFDWCxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsZUFBZTthQUNqQixTQUFTLEVBQUU7YUFDWCxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQXhCLENBQXdCLEVBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFRCwwQ0FBUzs7Ozs7SUFBVCxVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxFQUFFO1lBQzdELE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7aUJBQ3RCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBbENGLFVBQVU7Ozs7Z0JBSkYsZUFBZTtnQkFEZixlQUFlO2dCQUdmLG1CQUFtQjtnQkFEbkIsU0FBUzs7SUFzQ2xCLDZCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FsQ1ksc0JBQXNCOzs7SUFDakMsNENBQStDOztJQUMvQyw0Q0FBK0M7Ozs7O0lBRzdDLGlEQUF3Qzs7Ozs7SUFDeEMsaURBQXdDOzs7OztJQUN4Qyw4Q0FBeUM7Ozs7O0lBQ3pDLHdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9jdXJyZW5jeS5zZXJ2aWNlJztcbmltcG9ydCB7IExhbmd1YWdlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvbGFuZ3VhZ2Uuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBhY3RpdmVMYW5nOiBzdHJpbmcgPSB0aGlzLmNvbmZpZy5zaXRlLmxhbmd1YWdlO1xuICBhY3RpdmVDdXJyOiBzdHJpbmcgPSB0aGlzLmNvbmZpZy5zaXRlLmN1cnJlbmN5O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnXG4gICkge1xuICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiAodGhpcy5hY3RpdmVMYW5nID0gZGF0YSkpO1xuXG4gICAgdGhpcy5jdXJyZW5jeVNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+ICh0aGlzLmFjdGl2ZUN1cnIgPSBkYXRhKSk7XG4gIH1cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgaWYgKHJlcXVlc3QudXJsLmluY2x1ZGVzKHRoaXMub2NjRW5kcG9pbnRzLmdldEJhc2VFbmRwb2ludCgpKSkge1xuICAgICAgcmVxdWVzdCA9IHJlcXVlc3QuY2xvbmUoe1xuICAgICAgICBzZXRQYXJhbXM6IHtcbiAgICAgICAgICBsYW5nOiB0aGlzLmFjdGl2ZUxhbmcsXG4gICAgICAgICAgY3VycjogdGhpcy5hY3RpdmVDdXJyLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICB9XG59XG4iXX0=