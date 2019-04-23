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
const DEFAULT_SEARCH_CONFIG = {
    pageSize: 20,
};
export class OccProductSearchAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpoints
     * @param {?} converter
     */
    constructor(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @param {?} query
     * @param {?=} searchConfig
     * @return {?}
     */
    search(query, searchConfig = DEFAULT_SEARCH_CONFIG) {
        return this.http
            .get(this.getSearchEndpoint(query, searchConfig))
            .pipe(this.converter.pipeable(PRODUCT_SEARCH_NORMALIZER));
    }
    /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    loadSuggestions(term, pageSize = 3) {
        return this.http
            .get(this.getSuggestionEndpoint(term, pageSize.toString()))
            .pipe(this.converter.pipeable(PRODUCT_SUGGESTIONS_LIST_NORMALIZER));
    }
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @return {?}
     */
    getSearchEndpoint(query, searchConfig) {
        return this.occEndpoints.getUrl('productSearch', {
            query,
        }, {
            pageSize: searchConfig.pageSize,
            currentPage: searchConfig.currentPage,
            sort: searchConfig.sortCode,
        });
    }
    /**
     * @protected
     * @param {?} term
     * @param {?} max
     * @return {?}
     */
    getSuggestionEndpoint(term, max) {
        return this.occEndpoints.getUrl('productSuggestions', {
            term,
            max,
        });
    }
}
OccProductSearchAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccProductSearchAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9vY2Mvb2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFNM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFDTCx5QkFBeUIsRUFDekIsbUNBQW1DLEdBQ3BDLE1BQU0saUNBQWlDLENBQUM7O01BR25DLHFCQUFxQixHQUFpQjtJQUMxQyxRQUFRLEVBQUUsRUFBRTtDQUNiO0FBR0QsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBQ2xDLFlBQ1UsSUFBZ0IsRUFDaEIsWUFBaUMsRUFDL0IsU0FBMkI7UUFGN0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDL0IsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7Ozs7O0lBRUosTUFBTSxDQUNKLEtBQWEsRUFDYixlQUE2QixxQkFBcUI7UUFFbEQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFDO2FBQ2hELElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUNiLElBQVksRUFDWixXQUFtQixDQUFDO1FBRXBCLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQzthQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7Ozs7SUFFUyxpQkFBaUIsQ0FDekIsS0FBYSxFQUNiLFlBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQzdCLGVBQWUsRUFDZjtZQUNFLEtBQUs7U0FDTixFQUNEO1lBQ0UsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQy9CLFdBQVcsRUFBRSxZQUFZLENBQUMsV0FBVztZQUNyQyxJQUFJLEVBQUUsWUFBWSxDQUFDLFFBQVE7U0FDNUIsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVTLHFCQUFxQixDQUFDLElBQVksRUFBRSxHQUFXO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7WUFDcEQsSUFBSTtZQUNKLEdBQUc7U0FDSixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFoREYsVUFBVTs7OztZQWJGLFVBQVU7WUFDVixtQkFBbUI7WUFDbkIsZ0JBQWdCOzs7Ozs7O0lBY3JCLHVDQUF3Qjs7Ozs7SUFDeEIsK0NBQXlDOzs7OztJQUN6Qyw0Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQcm9kdWN0U2VhcmNoQWRhcHRlciB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvc2VhcmNoL3Byb2R1Y3Qtc2VhcmNoLmFkYXB0ZXInO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5pbXBvcnQgeyBTdWdnZXN0aW9uTGlzdCB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgUFJPRFVDVF9TRUFSQ0hfTk9STUFMSVpFUixcbiAgUFJPRFVDVF9TVUdHRVNUSU9OU19MSVNUX05PUk1BTElaRVIsXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMvc2VhcmNoL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgVUlQcm9kdWN0U2VhcmNoUGFnZSB9IGZyb20gJy4uL21vZGVsL3Byb2R1Y3Qtc2VhcmNoLXBhZ2UnO1xuXG5jb25zdCBERUZBVUxUX1NFQVJDSF9DT05GSUc6IFNlYXJjaENvbmZpZyA9IHtcbiAgcGFnZVNpemU6IDIwLFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RTZWFyY2hBZGFwdGVyIGltcGxlbWVudHMgUHJvZHVjdFNlYXJjaEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgc2VhcmNoKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgPSBERUZBVUxUX1NFQVJDSF9DT05GSUdcbiAgKTogT2JzZXJ2YWJsZTxVSVByb2R1Y3RTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmdldFNlYXJjaEVuZHBvaW50KHF1ZXJ5LCBzZWFyY2hDb25maWcpKVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoUFJPRFVDVF9TRUFSQ0hfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgbG9hZFN1Z2dlc3Rpb25zKFxuICAgIHRlcm06IHN0cmluZyxcbiAgICBwYWdlU2l6ZTogbnVtYmVyID0gM1xuICApOiBPYnNlcnZhYmxlPFN1Z2dlc3Rpb25MaXN0PiB7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldCh0aGlzLmdldFN1Z2dlc3Rpb25FbmRwb2ludCh0ZXJtLCBwYWdlU2l6ZS50b1N0cmluZygpKSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFBST0RVQ1RfU1VHR0VTVElPTlNfTElTVF9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2VhcmNoRW5kcG9pbnQoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZ1xuICApOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoXG4gICAgICAncHJvZHVjdFNlYXJjaCcsXG4gICAgICB7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGFnZVNpemU6IHNlYXJjaENvbmZpZy5wYWdlU2l6ZSxcbiAgICAgICAgY3VycmVudFBhZ2U6IHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSxcbiAgICAgICAgc29ydDogc2VhcmNoQ29uZmlnLnNvcnRDb2RlLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U3VnZ2VzdGlvbkVuZHBvaW50KHRlcm06IHN0cmluZywgbWF4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3Byb2R1Y3RTdWdnZXN0aW9ucycsIHtcbiAgICAgIHRlcm0sXG4gICAgICBtYXgsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==