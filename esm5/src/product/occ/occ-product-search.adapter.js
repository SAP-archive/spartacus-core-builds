/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { PRODUCT_SEARCH_NORMALIZER, PRODUCT_SUGGESTIONS_LIST_NORMALIZER, } from '../connectors/search/converters';
/** @type {?} */
var DEFAULT_SEARCH_CONFIG = {
    pageSize: 20,
};
var OccProductSearchAdapter = /** @class */ (function () {
    function OccProductSearchAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    OccProductSearchAdapter.prototype.search = /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    function (query, searchConfig) {
        if (searchConfig === void 0) { searchConfig = DEFAULT_SEARCH_CONFIG; }
        return this.http
            .get(this.getSearchEndpoint(query, searchConfig))
            .pipe(this.converter.pipeable(PRODUCT_SEARCH_NORMALIZER));
    };
    /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    OccProductSearchAdapter.prototype.loadSuggestions = /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    function (term, pageSize) {
        if (pageSize === void 0) { pageSize = 3; }
        return this.http
            .get(this.getSuggestionEndpoint(term, pageSize.toString()))
            .pipe(this.converter.pipeable(PRODUCT_SUGGESTIONS_LIST_NORMALIZER));
    };
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @return {?}
     */
    OccProductSearchAdapter.prototype.getSearchEndpoint = /**
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
    OccProductSearchAdapter.prototype.getSuggestionEndpoint = /**
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
    OccProductSearchAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccProductSearchAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccProductSearchAdapter;
}());
export { OccProductSearchAdapter };
if (false) {
    /**
     * @type {?}
     * @private
     */
    OccProductSearchAdapter.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccProductSearchAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccProductSearchAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9vY2Mvb2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsbUNBQW1DLEdBQ3BDLE1BQU0saUNBQWlDLENBQUM7O0lBR25DLHFCQUFxQixHQUFpQjtJQUMxQyxRQUFRLEVBQUUsRUFBRTtDQUNiO0FBRUQ7SUFFRSxpQ0FDVSxJQUFnQixFQUNoQixZQUFpQyxFQUMvQixTQUEyQjtRQUY3QixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7SUFFSix3Q0FBTTs7Ozs7SUFBTixVQUNFLEtBQWEsRUFDYixZQUFrRDtRQUFsRCw2QkFBQSxFQUFBLG9DQUFrRDtRQUVsRCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDOzs7Ozs7SUFFRCxpREFBZTs7Ozs7SUFBZixVQUNFLElBQVksRUFDWixRQUFvQjtRQUFwQix5QkFBQSxFQUFBLFlBQW9CO1FBRXBCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7Ozs7SUFFUyxtREFBaUI7Ozs7OztJQUEzQixVQUNFLEtBQWEsRUFDYixZQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUM3QixlQUFlLEVBQ2Y7WUFDRSxLQUFLLE9BQUE7U0FDTixFQUNEO1lBQ0UsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQy9CLFdBQVcsRUFBRSxZQUFZLENBQUMsV0FBVztZQUNyQyxJQUFJLEVBQUUsWUFBWSxDQUFDLFFBQVE7U0FDNUIsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVTLHVEQUFxQjs7Ozs7O0lBQS9CLFVBQWdDLElBQVksRUFBRSxHQUFXO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7WUFDcEQsSUFBSSxNQUFBO1lBQ0osR0FBRyxLQUFBO1NBQ0osQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBaERGLFVBQVU7Ozs7Z0JBYkYsVUFBVTtnQkFDVixtQkFBbUI7Z0JBQ25CLGdCQUFnQjs7SUE0RHpCLDhCQUFDO0NBQUEsQUFqREQsSUFpREM7U0FoRFksdUJBQXVCOzs7Ozs7SUFFaEMsdUNBQXdCOzs7OztJQUN4QiwrQ0FBeUM7Ozs7O0lBQ3pDLDRDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9zZWFyY2gvcHJvZHVjdC1zZWFyY2guYWRhcHRlcic7XG5pbXBvcnQgeyBTZWFyY2hDb25maWcgfSBmcm9tICcuLi9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IFN1Z2dlc3Rpb25MaXN0IH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBQUk9EVUNUX1NFQVJDSF9OT1JNQUxJWkVSLFxuICBQUk9EVUNUX1NVR0dFU1RJT05TX0xJU1RfTk9STUFMSVpFUixcbn0gZnJvbSAnLi4vY29ubmVjdG9ycy9zZWFyY2gvY29udmVydGVycyc7XG5pbXBvcnQgeyBVSVByb2R1Y3RTZWFyY2hQYWdlIH0gZnJvbSAnLi4vbW9kZWwvcHJvZHVjdC1zZWFyY2gtcGFnZSc7XG5cbmNvbnN0IERFRkFVTFRfU0VBUkNIX0NPTkZJRzogU2VhcmNoQ29uZmlnID0ge1xuICBwYWdlU2l6ZTogMjAsXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFNlYXJjaEFkYXB0ZXIgaW1wbGVtZW50cyBQcm9kdWN0U2VhcmNoQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBzZWFyY2goXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZyA9IERFRkFVTFRfU0VBUkNIX0NPTkZJR1xuICApOiBPYnNlcnZhYmxlPFVJUHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0U2VhcmNoRW5kcG9pbnQocXVlcnksIHNlYXJjaENvbmZpZykpXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShQUk9EVUNUX1NFQVJDSF9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBsb2FkU3VnZ2VzdGlvbnMoXG4gICAgdGVybTogc3RyaW5nLFxuICAgIHBhZ2VTaXplOiBudW1iZXIgPSAzXG4gICk6IE9ic2VydmFibGU8U3VnZ2VzdGlvbkxpc3Q+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0U3VnZ2VzdGlvbkVuZHBvaW50KHRlcm0sIHBhZ2VTaXplLnRvU3RyaW5nKCkpKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUFJPRFVDVF9TVUdHRVNUSU9OU19MSVNUX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTZWFyY2hFbmRwb2ludChcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnXG4gICk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybChcbiAgICAgICdwcm9kdWN0U2VhcmNoJyxcbiAgICAgIHtcbiAgICAgICAgcXVlcnksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYWdlU2l6ZTogc2VhcmNoQ29uZmlnLnBhZ2VTaXplLFxuICAgICAgICBjdXJyZW50UGFnZTogc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlLFxuICAgICAgICBzb3J0OiBzZWFyY2hDb25maWcuc29ydENvZGUsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdWdnZXN0aW9uRW5kcG9pbnQodGVybTogc3RyaW5nLCBtYXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncHJvZHVjdFN1Z2dlc3Rpb25zJywge1xuICAgICAgdGVybSxcbiAgICAgIG1heCxcbiAgICB9KTtcbiAgfVxufVxuIl19