/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { POINT_OF_SERVICE_NORMALIZER, STORE_COUNT_NORMALIZER, STORE_FINDER_SEARCH_PAGE_NORMALIZER, } from '../../../store-finder/connectors';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export class OccStoreFinderAdapter {
    /**
     * @param {?} http
     * @param {?} occEndpointsService
     * @param {?} converterService
     */
    constructor(http, occEndpointsService, converterService) {
        this.http = http;
        this.occEndpointsService = occEndpointsService;
        this.converterService = converterService;
    }
    /**
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    search(query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude).pipe(this.converterService.pipeable(STORE_FINDER_SEARCH_PAGE_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadCounts() {
        return this.http
            .get(this.occEndpointsService.getUrl('storescounts'))
            .pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ countriesAndRegionsStoreCount }) => countriesAndRegionsStoreCount)), this.converterService.pipeableMany(STORE_COUNT_NORMALIZER));
    }
    /**
     * @param {?} storeId
     * @return {?}
     */
    load(storeId) {
        return this.http
            .get(this.occEndpointsService.getUrl('store', { storeId }))
            .pipe(this.converterService.pipeable(POINT_OF_SERVICE_NORMALIZER));
    }
    /**
     * @protected
     * @param {?} query
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    callOccFindStores(query, searchConfig, longitudeLatitude) {
        /** @type {?} */
        const params = {};
        if (longitudeLatitude) {
            params['longitude'] = String(longitudeLatitude.longitude);
            params['latitude'] = String(longitudeLatitude.latitude);
        }
        else {
            params['query'] = query;
        }
        if (searchConfig.pageSize) {
            params['pageSize'] = String(searchConfig.pageSize);
        }
        if (searchConfig.currentPage) {
            params['currentPage'] = String(searchConfig.currentPage);
        }
        if (searchConfig.sort) {
            params['sort'] = searchConfig.sort;
        }
        return this.http.get(this.occEndpointsService.getUrl('stores', undefined, params));
    }
}
OccStoreFinderAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccStoreFinderAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccStoreFinderAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccStoreFinderAdapter.prototype.occEndpointsService;
    /**
     * @type {?}
     * @protected
     */
    OccStoreFinderAdapter.prototype.converterService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9zdG9yZS1maW5kZXIvb2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFPckMsT0FBTyxFQUNMLDJCQUEyQixFQUMzQixzQkFBc0IsRUFDdEIsbUNBQW1DLEdBQ3BDLE1BQU0sa0NBQWtDLENBQUM7QUFHMUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHM0UsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBQ2hDLFlBQ1ksSUFBZ0IsRUFDaEIsbUJBQXdDLEVBQ3hDLGdCQUFrQztRQUZsQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtJQUMzQyxDQUFDOzs7Ozs7O0lBRUosTUFBTSxDQUNKLEtBQWEsRUFDYixZQUFxQyxFQUNyQyxpQkFBNEI7UUFFNUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FDeEUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUNwRSxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFxQixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3hFLElBQUksQ0FDSCxHQUFHOzs7O1FBQ0QsQ0FBQyxFQUFFLDZCQUE2QixFQUFFLEVBQUUsRUFBRSxDQUFDLDZCQUE2QixFQUNyRSxFQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsc0JBQXNCLENBQUMsQ0FDM0QsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRUQsSUFBSSxDQUFDLE9BQWU7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQ3REO2FBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7Ozs7Ozs7O0lBRVMsaUJBQWlCLENBQ3pCLEtBQWEsRUFDYixZQUFxQyxFQUNyQyxpQkFBNEI7O2NBRXRCLE1BQU0sR0FBRyxFQUFFO1FBRWpCLElBQUksaUJBQWlCLEVBQUU7WUFDckIsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsVUFBVSxDQUFDLEdBQUcsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3pEO2FBQU07WUFDTCxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDO1NBQ3pCO1FBQ0QsSUFBSSxZQUFZLENBQUMsUUFBUSxFQUFFO1lBQ3pCLE1BQU0sQ0FBQyxVQUFVLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3BEO1FBQ0QsSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQzVCLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFEO1FBQ0QsSUFBSSxZQUFZLENBQUMsSUFBSSxFQUFFO1lBQ3JCLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDO1NBQ3BDO1FBRUQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FDbEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUM3RCxDQUFDO0lBQ0osQ0FBQzs7O1lBL0RGLFVBQVU7Ozs7WUFyQkYsVUFBVTtZQW1CVixtQkFBbUI7WUFGbkIsZ0JBQWdCOzs7Ozs7O0lBT3JCLHFDQUEwQjs7Ozs7SUFDMUIsb0RBQWtEOzs7OztJQUNsRCxpREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgR2VvUG9pbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvcG9pbnQtb2Ytc2VydmljZS5tb2RlbCc7XG5pbXBvcnQge1xuICBTdG9yZUNvdW50LFxuICBTdG9yZUZpbmRlclNlYXJjaFBhZ2UsXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL3N0b3JlLWZpbmRlci5tb2RlbCc7XG5pbXBvcnQge1xuICBQT0lOVF9PRl9TRVJWSUNFX05PUk1BTElaRVIsXG4gIFNUT1JFX0NPVU5UX05PUk1BTElaRVIsXG4gIFNUT1JFX0ZJTkRFUl9TRUFSQ0hfUEFHRV9OT1JNQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi9zdG9yZS1maW5kZXIvY29ubmVjdG9ycyc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS1maW5kZXIvY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3N0b3JlLWZpbmRlci9tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NTdG9yZUZpbmRlckFkYXB0ZXIgaW1wbGVtZW50cyBTdG9yZUZpbmRlckFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgc2VhcmNoKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IEdlb1BvaW50XG4gICk6IE9ic2VydmFibGU8U3RvcmVGaW5kZXJTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbE9jY0ZpbmRTdG9yZXMocXVlcnksIHNlYXJjaENvbmZpZywgbG9uZ2l0dWRlTGF0aXR1ZGUpLnBpcGUoXG4gICAgICB0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGUoU1RPUkVfRklOREVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRDb3VudHMoKTogT2JzZXJ2YWJsZTxTdG9yZUNvdW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5TdG9yZUNvdW50TGlzdD4odGhpcy5vY2NFbmRwb2ludHNTZXJ2aWNlLmdldFVybCgnc3RvcmVzY291bnRzJykpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKFxuICAgICAgICAgICh7IGNvdW50cmllc0FuZFJlZ2lvbnNTdG9yZUNvdW50IH0pID0+IGNvdW50cmllc0FuZFJlZ2lvbnNTdG9yZUNvdW50XG4gICAgICAgICksXG4gICAgICAgIHRoaXMuY29udmVydGVyU2VydmljZS5waXBlYWJsZU1hbnkoU1RPUkVfQ09VTlRfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICBsb2FkKHN0b3JlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UG9pbnRPZlNlcnZpY2U+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5Qb2ludE9mU2VydmljZT4oXG4gICAgICAgIHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRVcmwoJ3N0b3JlJywgeyBzdG9yZUlkIH0pXG4gICAgICApXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlclNlcnZpY2UucGlwZWFibGUoUE9JTlRfT0ZfU0VSVklDRV9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY2FsbE9jY0ZpbmRTdG9yZXMoXG4gICAgcXVlcnk6IHN0cmluZyxcbiAgICBzZWFyY2hDb25maWc6IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnLFxuICAgIGxvbmdpdHVkZUxhdGl0dWRlPzogR2VvUG9pbnRcbiAgKTogT2JzZXJ2YWJsZTxPY2MuU3RvcmVGaW5kZXJTZWFyY2hQYWdlPiB7XG4gICAgY29uc3QgcGFyYW1zID0ge307XG5cbiAgICBpZiAobG9uZ2l0dWRlTGF0aXR1ZGUpIHtcbiAgICAgIHBhcmFtc1snbG9uZ2l0dWRlJ10gPSBTdHJpbmcobG9uZ2l0dWRlTGF0aXR1ZGUubG9uZ2l0dWRlKTtcbiAgICAgIHBhcmFtc1snbGF0aXR1ZGUnXSA9IFN0cmluZyhsb25naXR1ZGVMYXRpdHVkZS5sYXRpdHVkZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhcmFtc1sncXVlcnknXSA9IHF1ZXJ5O1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLnBhZ2VTaXplKSB7XG4gICAgICBwYXJhbXNbJ3BhZ2VTaXplJ10gPSBTdHJpbmcoc2VhcmNoQ29uZmlnLnBhZ2VTaXplKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSkge1xuICAgICAgcGFyYW1zWydjdXJyZW50UGFnZSddID0gU3RyaW5nKHNlYXJjaENvbmZpZy5jdXJyZW50UGFnZSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcuc29ydCkge1xuICAgICAgcGFyYW1zWydzb3J0J10gPSBzZWFyY2hDb25maWcuc29ydDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPY2MuU3RvcmVGaW5kZXJTZWFyY2hQYWdlPihcbiAgICAgIHRoaXMub2NjRW5kcG9pbnRzU2VydmljZS5nZXRVcmwoJ3N0b3JlcycsIHVuZGVmaW5lZCwgcGFyYW1zKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==