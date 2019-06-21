/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { PRODUCT_SEARCH_PAGE_NORMALIZER, PRODUCT_SUGGESTION_NORMALIZER, } from '../../../product/connectors/search/converters';
import { pluck } from 'rxjs/operators';
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
            .pipe(this.converter.pipeable(PRODUCT_SEARCH_PAGE_NORMALIZER));
    }
    /**
     * @param {?} term
     * @param {?=} pageSize
     * @return {?}
     */
    loadSuggestions(term, pageSize = 3) {
        return this.http
            .get(this.getSuggestionEndpoint(term, pageSize.toString()))
            .pipe(pluck('suggestions'), this.converter.pipeableMany(PRODUCT_SUGGESTION_NORMALIZER));
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
     * @protected
     */
    OccProductSearchAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccProductSearchAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccProductSearchAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3Qvb2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFDTCw4QkFBOEIsRUFDOUIsNkJBQTZCLEdBQzlCLE1BQU0sK0NBQStDLENBQUM7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGdCQUFnQixDQUFDOztNQU1qQyxxQkFBcUIsR0FBaUI7SUFDMUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjtBQUdELE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQUNsQyxZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7OztJQUVKLE1BQU0sQ0FDSixLQUFhLEVBQ2IsZUFBNkIscUJBQXFCO1FBRWxELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FDYixJQUFZLEVBQ1osV0FBbUIsQ0FBQztRQUVwQixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDMUQsSUFBSSxDQUNILEtBQUssQ0FBQyxhQUFhLENBQUMsRUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsNkJBQTZCLENBQUMsQ0FDM0QsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7SUFFUyxpQkFBaUIsQ0FDekIsS0FBYSxFQUNiLFlBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQzdCLGVBQWUsRUFDZjtZQUNFLEtBQUs7U0FDTixFQUNEO1lBQ0UsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQy9CLFdBQVcsRUFBRSxZQUFZLENBQUMsV0FBVztZQUNyQyxJQUFJLEVBQUUsWUFBWSxDQUFDLFFBQVE7U0FDNUIsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVTLHFCQUFxQixDQUFDLElBQVksRUFBRSxHQUFXO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUU7WUFDcEQsSUFBSTtZQUNKLEdBQUc7U0FDSixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUFuREYsVUFBVTs7OztZQWpCRixVQUFVO1lBQ1YsbUJBQW1CO1lBQ25CLGdCQUFnQjs7Ozs7OztJQWtCckIsdUNBQTBCOzs7OztJQUMxQiwrQ0FBMkM7Ozs7O0lBQzNDLDRDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFByb2R1Y3RTZWFyY2hBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9jb25uZWN0b3JzL3NlYXJjaC9wcm9kdWN0LXNlYXJjaC5hZGFwdGVyJztcbmltcG9ydCB7IFNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvbW9kZWwvc2VhcmNoLWNvbmZpZyc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFBST0RVQ1RfU0VBUkNIX1BBR0VfTk9STUFMSVpFUixcbiAgUFJPRFVDVF9TVUdHRVNUSU9OX05PUk1BTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3Byb2R1Y3QvY29ubmVjdG9ycy9zZWFyY2gvY29udmVydGVycyc7XG5pbXBvcnQgeyBwbHVjayB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIFN1Z2dlc3Rpb24sXG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5cbmNvbnN0IERFRkFVTFRfU0VBUkNIX0NPTkZJRzogU2VhcmNoQ29uZmlnID0ge1xuICBwYWdlU2l6ZTogMjAsXG59O1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjUHJvZHVjdFNlYXJjaEFkYXB0ZXIgaW1wbGVtZW50cyBQcm9kdWN0U2VhcmNoQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgc2VhcmNoKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWcgPSBERUZBVUxUX1NFQVJDSF9DT05GSUdcbiAgKTogT2JzZXJ2YWJsZTxQcm9kdWN0U2VhcmNoUGFnZT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRTZWFyY2hFbmRwb2ludChxdWVyeSwgc2VhcmNoQ29uZmlnKSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFBST0RVQ1RfU0VBUkNIX1BBR0VfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgbG9hZFN1Z2dlc3Rpb25zKFxuICAgIHRlcm06IHN0cmluZyxcbiAgICBwYWdlU2l6ZTogbnVtYmVyID0gM1xuICApOiBPYnNlcnZhYmxlPFN1Z2dlc3Rpb25bXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQodGhpcy5nZXRTdWdnZXN0aW9uRW5kcG9pbnQodGVybSwgcGFnZVNpemUudG9TdHJpbmcoKSkpXG4gICAgICAucGlwZShcbiAgICAgICAgcGx1Y2soJ3N1Z2dlc3Rpb25zJyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShQUk9EVUNUX1NVR0dFU1RJT05fTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U2VhcmNoRW5kcG9pbnQoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFNlYXJjaENvbmZpZ1xuICApOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoXG4gICAgICAncHJvZHVjdFNlYXJjaCcsXG4gICAgICB7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgcGFnZVNpemU6IHNlYXJjaENvbmZpZy5wYWdlU2l6ZSxcbiAgICAgICAgY3VycmVudFBhZ2U6IHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSxcbiAgICAgICAgc29ydDogc2VhcmNoQ29uZmlnLnNvcnRDb2RlLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U3VnZ2VzdGlvbkVuZHBvaW50KHRlcm06IHN0cmluZywgbWF4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3Byb2R1Y3RTdWdnZXN0aW9ucycsIHtcbiAgICAgIHRlcm0sXG4gICAgICBtYXgsXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==