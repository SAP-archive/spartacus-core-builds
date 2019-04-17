/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { CurrencyService } from '../facade/currency.service';
import { LanguageService } from '../facade/language.service';
import { OccConfig } from '../../occ/config/occ-config';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
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
            .subscribe(function (data) { return (_this.activeLang = data); });
        this.currencyService
            .getActive()
            .subscribe(function (data) { return (_this.activeCurr = data); });
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
        if (request.url.indexOf(this.occEndpoints.getBaseEndpoint()) > -1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9vY2Mvc2l0ZS1jb250ZXh0LmludGVyY2VwdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBUzNDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRS9FO0lBS0UsZ0NBQ1UsZUFBZ0MsRUFDaEMsZUFBZ0MsRUFDaEMsWUFBaUMsRUFDakMsTUFBaUI7UUFKM0IsaUJBYUM7UUFaUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBUDNCLGVBQVUsR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0MsZUFBVSxHQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQVE3QyxJQUFJLENBQUMsZUFBZTthQUNqQixTQUFTLEVBQUU7YUFDWCxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztRQUUvQyxJQUFJLENBQUMsZUFBZTthQUNqQixTQUFTLEVBQUU7YUFDWCxTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxDQUFDLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7Ozs7SUFFRCwwQ0FBUzs7Ozs7SUFBVCxVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2pFLE9BQU8sR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDO2dCQUN0QixTQUFTLEVBQUU7b0JBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVO29CQUNyQixJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVU7aUJBQ3RCO2FBQ0YsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7Z0JBbENGLFVBQVU7Ozs7Z0JBSkYsZUFBZTtnQkFEZixlQUFlO2dCQUdmLG1CQUFtQjtnQkFEbkIsU0FBUzs7SUFzQ2xCLDZCQUFDO0NBQUEsQUFuQ0QsSUFtQ0M7U0FsQ1ksc0JBQXNCOzs7SUFDakMsNENBQStDOztJQUMvQyw0Q0FBK0M7Ozs7O0lBRzdDLGlEQUF3Qzs7Ozs7SUFDeEMsaURBQXdDOzs7OztJQUN4Qyw4Q0FBeUM7Ozs7O0lBQ3pDLHdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ3VycmVuY3lTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2N1cnJlbmN5LnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL2xhbmd1YWdlLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBhY3RpdmVMYW5nOiBzdHJpbmcgPSB0aGlzLmNvbmZpZy5zaXRlLmxhbmd1YWdlO1xuICBhY3RpdmVDdXJyOiBzdHJpbmcgPSB0aGlzLmNvbmZpZy5zaXRlLmN1cnJlbmN5O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbGFuZ3VhZ2VTZXJ2aWNlOiBMYW5ndWFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjdXJyZW5jeVNlcnZpY2U6IEN1cnJlbmN5U2VydmljZSxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogT2NjQ29uZmlnXG4gICkge1xuICAgIHRoaXMubGFuZ3VhZ2VTZXJ2aWNlXG4gICAgICAuZ2V0QWN0aXZlKClcbiAgICAgIC5zdWJzY3JpYmUoZGF0YSA9PiAodGhpcy5hY3RpdmVMYW5nID0gZGF0YSkpO1xuXG4gICAgdGhpcy5jdXJyZW5jeVNlcnZpY2VcbiAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgLnN1YnNjcmliZShkYXRhID0+ICh0aGlzLmFjdGl2ZUN1cnIgPSBkYXRhKSk7XG4gIH1cblxuICBpbnRlcmNlcHQoXG4gICAgcmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PixcbiAgICBuZXh0OiBIdHRwSGFuZGxlclxuICApOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgaWYgKHJlcXVlc3QudXJsLmluZGV4T2YodGhpcy5vY2NFbmRwb2ludHMuZ2V0QmFzZUVuZHBvaW50KCkpID4gLTEpIHtcbiAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgc2V0UGFyYW1zOiB7XG4gICAgICAgICAgbGFuZzogdGhpcy5hY3RpdmVMYW5nLFxuICAgICAgICAgIGN1cnI6IHRoaXMuYWN0aXZlQ3VycixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgfVxufVxuIl19