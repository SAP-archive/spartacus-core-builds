/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { pluck } from 'rxjs/operators';
import { PRODUCT_SEARCH_PAGE_NORMALIZER, PRODUCT_SUGGESTION_NORMALIZER, } from '../../../product/connectors/search/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
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
        return this.occEndpoints.getUrl('productSearch', {}, {
            query,
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
        return this.occEndpoints.getUrl('productSuggestions', {}, { term, max });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3Byb2R1Y3Qvb2NjLXByb2R1Y3Qtc2VhcmNoLmFkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUt2QyxPQUFPLEVBQ0wsOEJBQThCLEVBQzlCLDZCQUE2QixHQUM5QixNQUFNLCtDQUErQyxDQUFDO0FBR3ZELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztNQUVyRSxxQkFBcUIsR0FBaUI7SUFDMUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjtBQUdELE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQUNsQyxZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7OztJQUVKLE1BQU0sQ0FDSixLQUFhLEVBQ2IsZUFBNkIscUJBQXFCO1FBRWxELE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsQ0FBQzthQUNoRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsOEJBQThCLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7Ozs7OztJQUVELGVBQWUsQ0FDYixJQUFZLEVBQ1osV0FBbUIsQ0FBQztRQUVwQixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7YUFDMUQsSUFBSSxDQUNILEtBQUssQ0FBQyxhQUFhLENBQUMsRUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsNkJBQTZCLENBQUMsQ0FDM0QsQ0FBQztJQUNOLENBQUM7Ozs7Ozs7SUFFUyxpQkFBaUIsQ0FDekIsS0FBYSxFQUNiLFlBQTBCO1FBRTFCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQzdCLGVBQWUsRUFDZixFQUFFLEVBQ0Y7WUFDRSxLQUFLO1lBQ0wsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQy9CLFdBQVcsRUFBRSxZQUFZLENBQUMsV0FBVztZQUNyQyxJQUFJLEVBQUUsWUFBWSxDQUFDLFFBQVE7U0FDNUIsQ0FDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVTLHFCQUFxQixDQUFDLElBQVksRUFBRSxHQUFXO1FBQ3ZELE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQzs7O1lBL0NGLFVBQVU7Ozs7WUFyQkYsVUFBVTtZQWVWLG1CQUFtQjtZQURuQixnQkFBZ0I7Ozs7Ozs7SUFVckIsdUNBQTBCOzs7OztJQUMxQiwrQ0FBMkM7Ozs7O0lBQzNDLDRDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBwbHVjayB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIFByb2R1Y3RTZWFyY2hQYWdlLFxuICBTdWdnZXN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LXNlYXJjaC5tb2RlbCc7XG5pbXBvcnQge1xuICBQUk9EVUNUX1NFQVJDSF9QQUdFX05PUk1BTElaRVIsXG4gIFBST0RVQ1RfU1VHR0VTVElPTl9OT1JNQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvc2VhcmNoL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgUHJvZHVjdFNlYXJjaEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9wcm9kdWN0L2Nvbm5lY3RvcnMvc2VhcmNoL3Byb2R1Y3Qtc2VhcmNoLmFkYXB0ZXInO1xuaW1wb3J0IHsgU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vcHJvZHVjdC9tb2RlbC9zZWFyY2gtY29uZmlnJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5jb25zdCBERUZBVUxUX1NFQVJDSF9DT05GSUc6IFNlYXJjaENvbmZpZyA9IHtcbiAgcGFnZVNpemU6IDIwLFxufTtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1Byb2R1Y3RTZWFyY2hBZGFwdGVyIGltcGxlbWVudHMgUHJvZHVjdFNlYXJjaEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHNlYXJjaChcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU2VhcmNoQ29uZmlnID0gREVGQVVMVF9TRUFSQ0hfQ09ORklHXG4gICk6IE9ic2VydmFibGU8UHJvZHVjdFNlYXJjaFBhZ2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0U2VhcmNoRW5kcG9pbnQocXVlcnksIHNlYXJjaENvbmZpZykpXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShQUk9EVUNUX1NFQVJDSF9QQUdFX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIGxvYWRTdWdnZXN0aW9ucyhcbiAgICB0ZXJtOiBzdHJpbmcsXG4gICAgcGFnZVNpemU6IG51bWJlciA9IDNcbiAgKTogT2JzZXJ2YWJsZTxTdWdnZXN0aW9uW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0KHRoaXMuZ2V0U3VnZ2VzdGlvbkVuZHBvaW50KHRlcm0sIHBhZ2VTaXplLnRvU3RyaW5nKCkpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHBsdWNrKCdzdWdnZXN0aW9ucycpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoUFJPRFVDVF9TVUdHRVNUSU9OX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldFNlYXJjaEVuZHBvaW50KFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTZWFyY2hDb25maWdcbiAgKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKFxuICAgICAgJ3Byb2R1Y3RTZWFyY2gnLFxuICAgICAge30sXG4gICAgICB7XG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBwYWdlU2l6ZTogc2VhcmNoQ29uZmlnLnBhZ2VTaXplLFxuICAgICAgICBjdXJyZW50UGFnZTogc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlLFxuICAgICAgICBzb3J0OiBzZWFyY2hDb25maWcuc29ydENvZGUsXG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdWdnZXN0aW9uRW5kcG9pbnQodGVybTogc3RyaW5nLCBtYXg6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncHJvZHVjdFN1Z2dlc3Rpb25zJywge30sIHsgdGVybSwgbWF4IH0pO1xuICB9XG59XG4iXX0=