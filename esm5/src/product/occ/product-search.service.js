/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
/** @type {?} */
var DEFAULT_SEARCH_CONFIG = {
    pageSize: 20,
};
var ProductSearchLoaderService = /** @class */ (function () {
    function ProductSearchLoaderService(http, occEndpoints) {
        this.http = http;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} fullQuery
     * @param {?=} searchConfig
     * @return {?}
     */
    ProductSearchLoaderService.prototype.loadSearch = /**
     * @param {?} fullQuery
     * @param {?=} searchConfig
     * @return {?}
     */
    function (fullQuery, searchConfig) {
        if (searchConfig === void 0) { searchConfig = DEFAULT_SEARCH_CONFIG; }
        return this.http
            .get(this.getSearchEndpoint(fullQuery, searchConfig))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    ProductSearchLoaderService.prototype.loadSuggestions = /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    function (term, pageSize) {
        if (pageSize === void 0) { pageSize = 3; }
        return this.http
            .get(this.getSuggestionEndpoint(term, pageSize.toString()))
            .pipe(catchError(function (error) { return throwError(error.json()); }));
    };
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @return {?}
     */
    ProductSearchLoaderService.prototype.getSearchEndpoint = /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @return {?}
     */
    function (query, searchConfig) {
        return this.occEndpoints.getUrl('productSearch', {
            query: query,
        }, {
            pageSize: searchConfig.pageSize,
            currentPage: searchConfig.currentPage,
            sort: searchConfig.sortCode,
        });
    };
    /**
     * @protected
     * @param {?} term
     * @param {?} max
     * @return {?}
     */
    ProductSearchLoaderService.prototype.getSuggestionEndpoint = /**
     * @protected
     * @param {?} term
     * @param {?} max
     * @return {?}
     */
    function (term, max) {
        return this.occEndpoints.getUrl('productSuggestions', {
            term: term,
            max: max,
        });
    };
    ProductSearchLoaderService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ProductSearchLoaderService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService }
    ]; };
    return ProductSearchLoaderService;
}());
export { ProductSearchLoaderService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductSearchLoaderService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    ProductSearchLoaderService.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1zZWFyY2guc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wcm9kdWN0L29jYy9wcm9kdWN0LXNlYXJjaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsVUFBVSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVE1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7SUFFekUscUJBQXFCLEdBQWlCO0lBQzFDLFFBQVEsRUFBRSxFQUFFO0NBQ2I7QUFFRDtJQUVFLG9DQUNVLElBQWdCLEVBQ2hCLFlBQWlDO1FBRGpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3hDLENBQUM7Ozs7OztJQUVKLCtDQUFVOzs7OztJQUFWLFVBQ0UsU0FBaUIsRUFDakIsWUFBa0Q7UUFBbEQsNkJBQUEsRUFBQSxvQ0FBa0Q7UUFFbEQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLEVBQXhCLENBQXdCLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7OztJQUVELG9EQUFlOzs7OztJQUFmLFVBQWdCLElBQVksRUFBRSxRQUFZO1FBQVoseUJBQUEsRUFBQSxZQUFZO1FBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7Ozs7O0lBRVMsc0RBQWlCOzs7Ozs7SUFBM0IsVUFDRSxLQUFhLEVBQ2IsWUFBMEI7UUFFMUIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FDN0IsZUFBZSxFQUNmO1lBQ0UsS0FBSyxPQUFBO1NBQ04sRUFDRDtZQUNFLFFBQVEsRUFBRSxZQUFZLENBQUMsUUFBUTtZQUMvQixXQUFXLEVBQUUsWUFBWSxDQUFDLFdBQVc7WUFDckMsSUFBSSxFQUFFLFlBQVksQ0FBQyxRQUFRO1NBQzVCLENBQ0YsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFFUywwREFBcUI7Ozs7OztJQUEvQixVQUFnQyxJQUFZLEVBQUUsR0FBVztRQUN2RCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLG9CQUFvQixFQUFFO1lBQ3BELElBQUksTUFBQTtZQUNKLEdBQUcsS0FBQTtTQUNKLENBQUMsQ0FBQztJQUNMLENBQUM7O2dCQTVDRixVQUFVOzs7O2dCQWpCRixVQUFVO2dCQVdWLG1CQUFtQjs7SUFtRDVCLGlDQUFDO0NBQUEsQUE3Q0QsSUE2Q0M7U0E1Q1ksMEJBQTBCOzs7Ozs7SUFFbkMsMENBQXdCOzs7OztJQUN4QixrREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7XG4gIFN1Z2dlc3Rpb25MaXN0LFxuICBQcm9kdWN0U2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuY29uc3QgREVGQVVMVF9TRUFSQ0hfQ09ORklHOiBTZWFyY2hDb25maWcgPSB7XG4gIHBhZ2VTaXplOiAyMCxcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0U2VhcmNoTG9hZGVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZVxuICApIHt9XG5cbiAgbG9hZFNlYXJjaChcbiAgICBmdWxsUXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZyA9IERFRkFVTFRfU0VBUkNIX0NPTkZJR1xuICApOiBPYnNlcnZhYmxlPFByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmdldFNlYXJjaEVuZHBvaW50KGZ1bGxRdWVyeSwgc2VhcmNoQ29uZmlnKSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSkpO1xuICB9XG5cbiAgbG9hZFN1Z2dlc3Rpb25zKHRlcm06IHN0cmluZywgcGFnZVNpemUgPSAzKTogT2JzZXJ2YWJsZTxTdWdnZXN0aW9uTGlzdD4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRTdWdnZXN0aW9uRW5kcG9pbnQodGVybSwgcGFnZVNpemUudG9TdHJpbmcoKSkpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTZWFyY2hFbmRwb2ludChcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybChcbiAgICAgICdwcm9kdWN0U2VhcmNoJyxcbiAgICAgIHtcbiAgICAgICAgcXVlcnksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYWdlU2l6ZTogc2VhcmNoQ29uZmlnLnBhZ2VTaXplLFxuICAgICAgICBjdXJyZW50UGFnZTogc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlLFxuICAgICAgICBzb3J0OiBzZWFyY2hDb25maWcuc29ydENvZGUsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdWdnZXN0aW9uRW5kcG9pbnQodGVybTogc3RyaW5nLCBtYXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncHJvZHVjdFN1Z2dlc3Rpb25zJywge1xuICAgICAgdGVybSxcbiAgICAgIG1heCxcbiAgICB9KTtcbiAgfVxufVxuIl19