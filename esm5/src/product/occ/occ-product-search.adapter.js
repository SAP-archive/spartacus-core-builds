/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { PRODUCT_SEARCH_PAGE_NORMALIZER, PRODUCT_SUGGESTION_NORMALIZER, } from '../connectors/search/converters';
import { pluck } from 'rxjs/operators';
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
            .pipe(this.converter.pipeable(PRODUCT_SEARCH_PAGE_NORMALIZER));
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
            .pipe(pluck('suggestions'), this.converter.pipeableMany(PRODUCT_SUGGESTION_NORMALIZER));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9vY2Mvb2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFDTCw4QkFBOEIsRUFDOUIsNkJBQTZCLEdBQzlCLE1BQU0saUNBQWlDLENBQUM7QUFDekMsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOztJQU1qQyxxQkFBcUIsR0FBaUI7SUFDMUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjtBQUVEO0lBRUUsaUNBQ1UsSUFBZ0IsRUFDaEIsWUFBaUMsRUFDL0IsU0FBMkI7UUFGN0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDL0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7Ozs7O0lBRUosd0NBQU07Ozs7O0lBQU4sVUFDRSxLQUFhLEVBQ2IsWUFBa0Q7UUFBbEQsNkJBQUEsRUFBQSxvQ0FBa0Q7UUFFbEQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRUQsaURBQWU7Ozs7O0lBQWYsVUFDRSxJQUFZLEVBQ1osUUFBb0I7UUFBcEIseUJBQUEsRUFBQSxZQUFvQjtRQUVwQixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDMUQsSUFBSSxDQUNILEtBQUssQ0FBQyxhQUFhLENBQUMsRUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsNkJBQTZCLENBQUMsQ0FDM0QsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7SUFFUyxtREFBaUI7Ozs7OztJQUEzQixVQUNFLEtBQWEsRUFDYixZQUEwQjtRQUUxQixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUM3QixlQUFlLEVBQ2Y7WUFDRSxLQUFLLE9BQUE7U0FDTixFQUNEO1lBQ0UsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQy9CLFdBQVcsRUFBRSxZQUFZLENBQUMsV0FBVztZQUNyQyxJQUFJLEVBQUUsWUFBWSxDQUFDLFFBQVE7U0FDNUIsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVTLHVEQUFxQjs7Ozs7O0lBQS9CLFVBQWdDLElBQVksRUFBRSxHQUFXO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7WUFDcEQsSUFBSSxNQUFBO1lBQ0osR0FBRyxLQUFBO1NBQ0osQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBbkRGLFVBQVU7Ozs7Z0JBakJGLFVBQVU7Z0JBQ1YsbUJBQW1CO2dCQUNuQixnQkFBZ0I7O0lBbUV6Qiw4QkFBQztDQUFBLEFBcERELElBb0RDO1NBbkRZLHVCQUF1Qjs7Ozs7O0lBRWhDLHVDQUF3Qjs7Ozs7SUFDeEIsK0NBQXlDOzs7OztJQUN6Qyw0Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoQWRhcHRlciB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvc2VhcmNoL3Byb2R1Y3Qtc2VhcmNoLmFkYXB0ZXInO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBQUk9EVUNUX1NFQVJDSF9QQUdFX05PUk1BTElaRVIsXG4gIFBST0RVQ1RfU1VHR0VTVElPTl9OT1JNQUxJWkVSLFxufSBmcm9tICcuLi9jb25uZWN0b3JzL3NlYXJjaC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IHBsdWNrIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgU3VnZ2VzdGlvbixcbiAgUHJvZHVjdFNlYXJjaFBhZ2UsXG59IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLm1vZGVsJztcblxuY29uc3QgREVGQVVMVF9TRUFSQ0hfQ09ORklHOiBTZWFyY2hDb25maWcgPSB7XG4gIHBhZ2VTaXplOiAyMCxcbn07XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NQcm9kdWN0U2VhcmNoQWRhcHRlciBpbXBsZW1lbnRzIFByb2R1Y3RTZWFyY2hBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHNlYXJjaChcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnID0gREVGQVVMVF9TRUFSQ0hfQ09ORklHXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0U2VhcmNoRW5kcG9pbnQocXVlcnksIHNlYXJjaENvbmZpZykpXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShQUk9EVUNUX1NFQVJDSF9QQUdFX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGxvYWRTdWdnZXN0aW9ucyhcbiAgICB0ZXJtOiBzdHJpbmcsXG4gICAgcGFnZVNpemU6IG51bWJlciA9IDNcbiAgKTogT2JzZXJ2YWJsZTxTdWdnZXN0aW9uW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0U3VnZ2VzdGlvbkVuZHBvaW50KHRlcm0sIHBhZ2VTaXplLnRvU3RyaW5nKCkpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHBsdWNrKCdzdWdnZXN0aW9ucycpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoUFJPRFVDVF9TVUdHRVNUSU9OX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlYXJjaEVuZHBvaW50KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKFxuICAgICAgJ3Byb2R1Y3RTZWFyY2gnLFxuICAgICAge1xuICAgICAgICBxdWVyeSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHBhZ2VTaXplOiBzZWFyY2hDb25maWcucGFnZVNpemUsXG4gICAgICAgIGN1cnJlbnRQYWdlOiBzZWFyY2hDb25maWcuY3VycmVudFBhZ2UsXG4gICAgICAgIHNvcnQ6IHNlYXJjaENvbmZpZy5zb3J0Q29kZSxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFN1Z2dlc3Rpb25FbmRwb2ludCh0ZXJtOiBzdHJpbmcsIG1heDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdwcm9kdWN0U3VnZ2VzdGlvbnMnLCB7XG4gICAgICB0ZXJtLFxuICAgICAgbWF4LFxuICAgIH0pO1xuICB9XG59XG4iXX0=