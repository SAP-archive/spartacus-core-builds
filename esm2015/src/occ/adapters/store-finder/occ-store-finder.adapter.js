/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { STORE_FINDER_SEARCH_PAGE_NORMALIZER, STORE_COUNT_NORMALIZER, POINT_OF_SERVICE_NORMALIZER, } from '../../../store-finder/connectors';
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
        return this.callOccFindStores(query, searchConfig, longitudeLatitude).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error.json()))), this.converter.pipeable(STORE_FINDER_SEARCH_PAGE_NORMALIZER));
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
        ({ countriesAndRegionsStoreCount }) => countriesAndRegionsStoreCount)), catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error.json()))), this.converter.pipeableMany(STORE_COUNT_NORMALIZER));
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
        return this.http.get(storeDetailsUrl, { params }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error.json()))), this.converter.pipeable(POINT_OF_SERVICE_NORMALIZER));
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
        return this.http.get(url, { params }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => {
            if (error.json) {
                return throwError(error.json());
            }
            return throwError(error);
        })));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy9zdG9yZS1maW5kZXIvb2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR2pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBSTNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBRW5FLE9BQU8sRUFDTCxtQ0FBbUMsRUFDbkMsc0JBQXNCLEVBQ3RCLDJCQUEyQixHQUM1QixNQUFNLGtDQUFrQyxDQUFDOztNQU1wQyxlQUFlLEdBQUcsUUFBUTtBQUdoQyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFDaEMsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7O0lBRUosTUFBTSxDQUNKLEtBQWEsRUFDYixZQUFxQyxFQUNyQyxpQkFBNEI7UUFFNUIsT0FBTyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FDeEUsVUFBVTs7OztRQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FB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QUksRUFBRSxDQUFDLENBQUM7YUFDakM7WUFDRCxPQUFPLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMzQixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRVMsaUJBQWlCLENBQUMsR0FBWTs7Y0FDaEMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUU5RCxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUM3QyxDQUFDOzs7WUFuRkYsVUFBVTs7OztZQXZCRixVQUFVO1lBS1YsbUJBQW1CO1lBSW5CLGdCQUFnQjs7Ozs7OztJQWlCckIscUNBQTBCOzs7OztJQUMxQiw2Q0FBMkM7Ozs7O0lBQzNDLDBDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyB0aHJvd0Vycm9yLCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFN0b3JlRmluZGVyU2VhcmNoQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUtZmluZGVyL21vZGVsJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUG9pbnRPZlNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wb2ludC1vZi1zZXJ2aWNlLm1vZGVsJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3N0b3JlLWZpbmRlci9jb25uZWN0b3JzL3N0b3JlLWZpbmRlci5hZGFwdGVyJztcbmltcG9ydCB7IEdlb1BvaW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHtcbiAgU1RPUkVfRklOREVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIsXG4gIFNUT1JFX0NPVU5UX05PUk1BTElaRVIsXG4gIFBPSU5UX09GX1NFUlZJQ0VfTk9STUFMSVpFUixcbn0gZnJvbSAnLi4vLi4vLi4vc3RvcmUtZmluZGVyL2Nvbm5lY3RvcnMnO1xuaW1wb3J0IHtcbiAgU3RvcmVGaW5kZXJTZWFyY2hQYWdlLFxuICBTdG9yZUNvdW50LFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9zdG9yZS1maW5kZXIubW9kZWwnO1xuXG5jb25zdCBTVE9SRVNfRU5EUE9JTlQgPSAnc3RvcmVzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1N0b3JlRmluZGVyQWRhcHRlciBpbXBsZW1lbnRzIFN0b3JlRmluZGVyQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgc2VhcmNoKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IEdlb1BvaW50XG4gICk6IE9ic2VydmFibGU8U3RvcmVGaW5kZXJTZWFyY2hQYWdlPiB7XG4gICAgcmV0dXJuIHRoaXMuY2FsbE9jY0ZpbmRTdG9yZXMocXVlcnksIHNlYXJjaENvbmZpZywgbG9uZ2l0dWRlTGF0aXR1ZGUpLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoU1RPUkVfRklOREVSX1NFQVJDSF9QQUdFX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIGxvYWRDb3VudHMoKTogT2JzZXJ2YWJsZTxTdG9yZUNvdW50W10+IHtcbiAgICBjb25zdCBzdG9yZUNvdW50VXJsID0gdGhpcy5nZXRTdG9yZXNFbmRwb2ludCgnc3RvcmVzY291bnRzJyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPY2MuU3RvcmVDb3VudExpc3Q+KHN0b3JlQ291bnRVcmwpLnBpcGUoXG4gICAgICBtYXAoKHsgY291bnRyaWVzQW5kUmVnaW9uc1N0b3JlQ291bnQgfSkgPT4gY291bnRyaWVzQW5kUmVnaW9uc1N0b3JlQ291bnQpLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSxcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShTVE9SRV9DT1VOVF9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBsb2FkKHN0b3JlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UG9pbnRPZlNlcnZpY2U+IHtcbiAgICBjb25zdCBzdG9yZURldGFpbHNVcmwgPSB0aGlzLmdldFN0b3Jlc0VuZHBvaW50KHN0b3JlSWQpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHsgZmllbGRzOiAnRlVMTCcgfTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5Qb2ludE9mU2VydmljZT4oc3RvcmVEZXRhaWxzVXJsLCB7IHBhcmFtcyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSxcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFBPSU5UX09GX1NFUlZJQ0VfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgcHJvdGVjdGVkIGNhbGxPY2NGaW5kU3RvcmVzKFxuICAgIHF1ZXJ5OiBzdHJpbmcsXG4gICAgc2VhcmNoQ29uZmlnOiBTdG9yZUZpbmRlclNlYXJjaENvbmZpZyxcbiAgICBsb25naXR1ZGVMYXRpdHVkZT86IEdlb1BvaW50XG4gICk6IE9ic2VydmFibGU8T2NjLlN0b3JlRmluZGVyU2VhcmNoUGFnZT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0U3RvcmVzRW5kcG9pbnQoKTtcbiAgICBsZXQgcGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoe1xuICAgICAgZnJvbVN0cmluZzpcbiAgICAgICAgJ2ZpZWxkcz1zdG9yZXMobmFtZSxkaXNwbGF5TmFtZSxvcGVuaW5nSG91cnMod2Vla0RheU9wZW5pbmdMaXN0KEZVTEwpLHNwZWNpYWxEYXlPcGVuaW5nTGlzdChGVUxMKSksJyArXG4gICAgICAgICdnZW9Qb2ludChsYXRpdHVkZSxsb25naXR1ZGUpLGFkZHJlc3MobGluZTEsbGluZTIsdG93bixyZWdpb24oRlVMTCkscG9zdGFsQ29kZSxwaG9uZSxjb3VudHJ5LGVtYWlsKSwgZmVhdHVyZXMpLCcgK1xuICAgICAgICAncGFnaW5hdGlvbihERUZBVUxUKSwnICtcbiAgICAgICAgJ3NvcnRzKERFRkFVTFQpJyxcbiAgICB9KTtcblxuICAgIGlmIChsb25naXR1ZGVMYXRpdHVkZSkge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnbG9uZ2l0dWRlJywgU3RyaW5nKGxvbmdpdHVkZUxhdGl0dWRlLmxvbmdpdHVkZSkpO1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgnbGF0aXR1ZGUnLCBTdHJpbmcobG9uZ2l0dWRlTGF0aXR1ZGUubGF0aXR1ZGUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFyYW1zID0gcGFyYW1zLnNldCgncXVlcnknLCBxdWVyeSk7XG4gICAgfVxuICAgIGlmIChzZWFyY2hDb25maWcucGFnZVNpemUpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcy5zZXQoJ3BhZ2VTaXplJywgU3RyaW5nKHNlYXJjaENvbmZpZy5wYWdlU2l6ZSkpO1xuICAgIH1cbiAgICBpZiAoc2VhcmNoQ29uZmlnLmN1cnJlbnRQYWdlKSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdjdXJyZW50UGFnZScsIFN0cmluZyhzZWFyY2hDb25maWcuY3VycmVudFBhZ2UpKTtcbiAgICB9XG4gICAgaWYgKHNlYXJjaENvbmZpZy5zb3J0KSB7XG4gICAgICBwYXJhbXMgPSBwYXJhbXMuc2V0KCdzb3J0Jywgc2VhcmNoQ29uZmlnLnNvcnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5TdG9yZUZpbmRlclNlYXJjaFBhZ2U+KHVybCwgeyBwYXJhbXMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHtcbiAgICAgICAgaWYgKGVycm9yLmpzb24pIHtcbiAgICAgICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycm9yKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRTdG9yZXNFbmRwb2ludCh1cmw/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGJhc2VVcmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChTVE9SRVNfRU5EUE9JTlQpO1xuXG4gICAgcmV0dXJuIHVybCA/IGJhc2VVcmwgKyAnLycgKyB1cmwgOiBiYXNlVXJsO1xuICB9XG59XG4iXX0=