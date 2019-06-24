/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { POINT_OF_SERVICE_NORMALIZER, STORE_COUNT_NORMALIZER, STORE_FINDER_SEARCH_PAGE_NORMALIZER, } from '../../../store-finder/connectors';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
/** @type {?} */
const STORES_ENDPOINT = 'stores';
export class OccStoreFinderAdapter {
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
     * @param {?} searchConfig
     * @param {?=} longitudeLatitude
     * @return {?}
     */
    search(query, searchConfig, longitudeLatitude) {
        return this.callOccFindStores(query, searchConfig, longitudeLatitude).pipe(this.converter.pipeable(STORE_FINDER_SEARCH_PAGE_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadCounts() {
        /** @type {?} */
        const storeCountUrl = this.getStoresEndpoint('storescounts');
        return this.http.get(storeCountUrl).pipe(map((/**
         * @param {?} __0
         * @return {?}
         */
        ({ countriesAndRegionsStoreCount }) => countriesAndRegionsStoreCount)), this.converter.pipeableMany(STORE_COUNT_NORMALIZER));
    }
    /**
     * @param {?} storeId
     * @return {?}
     */
    load(storeId) {
        /** @type {?} */
        const storeDetailsUrl = this.getStoresEndpoint(storeId);
        /** @type {?} */
        const params = { fields: 'FULL' };
        return this.http
            .get(storeDetailsUrl, { params })
            .pipe(this.converter.pipeable(POINT_OF_SERVICE_NORMALIZER));
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
        const url = this.getStoresEndpoint();
        /** @type {?} */
        let params = new HttpParams({
            fromString: 'fields=stores(name,displayName,openingHours(weekDayOpeningList(FULL),specialDayOpeningList(FULL)),' +
                'geoPoint(latitude,longitude),address(line1,line2,town,region(FULL),postalCode,phone,country,email), features),' +
                'pagination(DEFAULT),' +
                'sorts(DEFAULT)',
        });
        if (longitudeLatitude) {
            params = params.set('longitude', String(longitudeLatitude.longitude));
            params = params.set('latitude', String(longitudeLatitude.latitude));
        }
        else {
            params = params.set('query', query);
        }
        if (searchConfig.pageSize) {
            params = params.set('pageSize', String(searchConfig.pageSize));
        }
        if (searchConfig.currentPage) {
            params = params.set('currentPage', String(searchConfig.currentPage));
        }
        if (searchConfig.sort) {
            params = params.set('sort', searchConfig.sort);
        }
        return this.http.get(url, { params });
    }
    /**
     * @protected
     * @param {?=} url
     * @return {?}
     */
    getStoresEndpoint(url) {
        /** @type {?} */
        const baseUrl = this.occEndpoints.getEndpoint(STORES_ENDPOINT);
        return url ? baseUrl + '/' + url : baseUrl;
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
    OccStoreFinderAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccStoreFinderAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9zdG9yZS1maW5kZXIvb2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBT3JDLE9BQU8sRUFDTCwyQkFBMkIsRUFDM0Isc0JBQXNCLEVBQ3RCLG1DQUFtQyxHQUNwQyxNQUFNLGtDQUFrQyxDQUFDO0FBRzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDOztNQUVyRSxlQUFlLEdBQUcsUUFBUTtBQUdoQyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFDaEMsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7O0lBRUosTUFBTSxDQUNKLEtBQWEsRUFDYixZQUFxQyxFQUNyQyxpQkFBNEI7UUFFNUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUNBQW1DLENBQUMsQ0FDN0QsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxVQUFVOztjQUNGLGFBQWEsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDO1FBRTVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXFCLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDMUQsR0FBRzs7OztRQUFDLENBQUMsRUFBRSw2QkFBNkIsRUFBRSxFQUFFLEVBQUUsQ0FBQyw2QkFBNkIsRUFBQyxFQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxzQkFBc0IsQ0FBQyxDQUNwRCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFRCxJQUFJLENBQUMsT0FBZTs7Y0FDWixlQUFlLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQzs7Y0FDakQsTUFBTSxHQUFHLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRTtRQUVqQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFxQixlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQzthQUNwRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7Ozs7O0lBRVMsaUJBQWlCLENBQ3pCLEtBQWEsRUFDYixZQUFxQyxFQUNyQyxpQkFBNEI7O2NBRXRCLEdBQUcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7O1lBQ2hDLE1BQU0sR0FBZSxJQUFJLFVBQVUsQ0FBQztZQUN0QyxVQUFVLEVBQ1Isb0dBQW9HO2dCQUNwRyxnSEFBZ0g7Z0JBQ2hILHNCQUFzQjtnQkFDdEIsZ0JBQWdCO1NBQ25CLENBQUM7UUFFRixJQUFJLGlCQUFpQixFQUFFO1lBQ3JCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUN0RSxNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7U0FDckU7YUFBTTtZQUNMLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNyQztRQUNELElBQUksWUFBWSxDQUFDLFFBQVEsRUFBRTtZQUN6QixNQUFNLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsSUFBSSxZQUFZLENBQUMsV0FBVyxFQUFFO1lBQzVCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDdEU7UUFDRCxJQUFJLFlBQVksQ0FBQyxJQUFJLEVBQUU7WUFDckIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNoRDtRQUVELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQTRCLEdBQUcsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Ozs7O0lBRVMsaUJBQWlCLENBQUMsR0FBWTs7Y0FDaEMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUU5RCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM3QyxDQUFDOzs7WUF6RUYsVUFBVTs7OztZQXZCRixVQUFVO1lBbUJWLG1CQUFtQjtZQUZuQixnQkFBZ0I7Ozs7Ozs7SUFTckIscUNBQTBCOzs7OztJQUMxQiw2Q0FBMkM7Ozs7O0lBQzNDLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBHZW9Qb2ludCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgUG9pbnRPZlNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wb2ludC1vZi1zZXJ2aWNlLm1vZGVsJztcbmltcG9ydCB7XG4gIFN0b3JlQ291bnQsXG4gIFN0b3JlRmluZGVyU2VhcmNoUGFnZSxcbn0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvc3RvcmUtZmluZGVyLm1vZGVsJztcbmltcG9ydCB7XG4gIFBPSU5UX09GX1NFUlZJQ0VfTk9STUFMSVpFUixcbiAgU1RPUkVfQ09VTlRfTk9STUFMSVpFUixcbiAgU1RPUkVfRklOREVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3N0b3JlLWZpbmRlci9jb25uZWN0b3JzJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3N0b3JlLWZpbmRlci9jb25uZWN0b3JzL3N0b3JlLWZpbmRlci5hZGFwdGVyJztcbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUtZmluZGVyL21vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuY29uc3QgU1RPUkVTX0VORFBPSU5UID0gJ3N0b3Jlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NTdG9yZUZpbmRlckFkYXB0ZXIgaW1wbGVtZW50cyBTdG9yZUZpbmRlckFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHNlYXJjaChcbiAgICBxdWVyeTogc3RyaW5nLFxuICAgIHNlYXJjaENvbmZpZzogU3RvcmVGaW5kZXJTZWFyY2hDb25maWcsXG4gICAgbG9uZ2l0dWRlTGF0aXR1ZGU/OiBHZW9Qb2ludFxuICApOiBPYnNlcnZhYmxlPFN0b3JlRmluZGVyU2VhcmNoUGFnZT4ge1xuICAgIHJldHVybiB0aGlzLmNhbGxPY2NGaW5kU3RvcmVzKHF1ZXJ5LCBzZWFyY2hDb25maWcsIGxvbmdpdHVkZUxhdGl0dWRlKS5waXBlKFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoU1RPUkVfRklOREVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRDb3VudHMoKTogT2JzZXJ2YWJsZTxTdG9yZUNvdW50W10+IHtcbiAgICBjb25zdCBzdG9yZUNvdW50VXJsID0gdGhpcy5nZXRTdG9yZXNFbmRwb2ludCgnc3RvcmVzY291bnRzJyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPY2MuU3RvcmVDb3VudExpc3Q+KHN0b3JlQ291bnRVcmwpLnBpcGUoXG4gICAgICBtYXAoKHsgY291bnRyaWVzQW5kUmVnaW9uc1N0b3JlQ291bnQgfSkgPT4gY291bnRyaWVzQW5kUmVnaW9uc1N0b3JlQ291bnQpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KFNUT1JFX0NPVU5UX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIGxvYWQoc3RvcmVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxQb2ludE9mU2VydmljZT4ge1xuICAgIGNvbnN0IHN0b3JlRGV0YWlsc1VybCA9IHRoaXMuZ2V0U3RvcmVzRW5kcG9pbnQoc3RvcmVJZCk7XG4gICAgY29uc3QgcGFyYW1zID0geyBmaWVsZHM6ICdGVUxMJyB9O1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuUG9pbnRPZlNlcnZpY2U+KHN0b3JlRGV0YWlsc1VybCwgeyBwYXJhbXMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFBPSU5UX09GX1NFUlZJQ0VfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNhbGxPY2NGaW5kU3RvcmVzKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IEdlb1BvaW50XG4gICk6IE9ic2VydmFibGU8T2NjLlN0b3JlRmluZGVyU2VhcmNoUGFnZT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0U3RvcmVzRW5kcG9pbnQoKTtcbiAgICBsZXQgcGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzpcbiAgICAgICAgJ2ZpZWxkcz1zdG9yZXMobmFtZSxkaXNwbGF5TmFtZSxvcGVuaW5nSG91cnMod2Vla0RheU9wZW5pbmdMaXN0KEZVTEwpLHNwZWNpYWxEYXlPcGVuaW5nTGlzdChGVUxMKSksJyArXG4gICAgICAgICdnZW9Qb2ludChsYXRpdHVkZSxsb25naXR1ZGUpLGFkZHJlc3MobGluZTEsbGluZTIsdG93bixyZWdpb24oRlVMTCkscG9zdGFsQ29kZSxwaG9uZSxjb3VudHJ5LGVtYWlsKSwgZmVhdHVyZXMpLCcgK1xuICAgICAgICAncGFnaW5hdGlvbihERUZBVUxUKSwnICtcbiAgICAgICAgJ3NvcnRzKERFRkFVTFQpJyxcbiAgICB9KTtcblxuICAgIGlmIChsb25naXR1ZGVMYXRpdHVkZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnbG9uZ2l0dWRlJywgU3RyaW5nKGxvbmdpdHVkZUxhdGl0dWRlLmxvbmdpdHVkZSkpO1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnbGF0aXR1ZGUnLCBTdHJpbmcobG9uZ2l0dWRlTGF0aXR1ZGUubGF0aXR1ZGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcucGFnZVNpemUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgU3RyaW5nKHNlYXJjaENvbmZpZy5wYWdlU2l6ZSkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdjdXJyZW50UGFnZScsIFN0cmluZyhzZWFyY2hDb25maWcuY3VycmVudFBhZ2UpKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5zb3J0KSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdzb3J0Jywgc2VhcmNoQ29uZmlnLnNvcnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5TdG9yZUZpbmRlclNlYXJjaFBhZ2U+KHVybCwgeyBwYXJhbXMgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0U3RvcmVzRW5kcG9pbnQodXJsPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBiYXNlVXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoU1RPUkVTX0VORFBPSU5UKTtcblxuICAgIHJldHVybiB1cmwgPyBiYXNlVXJsICsgJy8nICsgdXJsIDogYmFzZVVybDtcbiAgfVxufVxuIl19