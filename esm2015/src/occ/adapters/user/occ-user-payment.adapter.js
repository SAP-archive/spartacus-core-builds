/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConverterService } from '../../../util/converter.service';
import { PAYMENT_DETAILS_NORMALIZER } from '../../../checkout/connectors/payment/converters';
import { COUNTRY_NORMALIZER, REGION_NORMALIZER, } from '../../../user/connectors/payment/converters';
/** @type {?} */
const USER_ENDPOINT = 'users/';
/** @type {?} */
const PAYMENT_DETAILS_ENDPOINT = '/paymentdetails';
/** @type {?} */
const COUNTRIES_ENDPOINT = 'countries';
/** @type {?} */
const REGIONS_ENDPOINT = 'regions';
/** @type {?} */
const COUNTRIES_TYPE_BILLING = 'BILLING';
/** @type {?} */
const COUNTRIES_TYPE_SHIPPING = 'SHIPPING';
export class OccUserPaymentAdapter {
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
     * @private
     * @param {?} userId
     * @return {?}
     */
    getPaymentDetailsEndpoint(userId) {
        /** @type {?} */
        const endpoint = `${USER_ENDPOINT}${userId}${PAYMENT_DETAILS_ENDPOINT}`;
        return this.occEndpoints.getEndpoint(endpoint);
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadAll(userId) {
        /** @type {?} */
        const url = this.getPaymentDetailsEndpoint(userId) + '?saved=true';
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.get(url, { headers }).pipe(catchError((error) => throwError(error)), map(methodList => methodList.payments), this.converter.pipeableMany(PAYMENT_DETAILS_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    delete(userId, paymentMethodID) {
        /** @type {?} */
        const url = this.getPaymentDetailsEndpoint(userId) + `/${paymentMethodID}`;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    setDefault(userId, paymentMethodID) {
        /** @type {?} */
        const url = this.getPaymentDetailsEndpoint(userId) + `/${paymentMethodID}`;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, 
        // TODO: Remove billingAddress property
        { billingAddress: { titleCode: 'mr' }, defaultPayment: true }, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @return {?}
     */
    loadBillingCountries() {
        return this.http
            .get(this.occEndpoints.getEndpoint(COUNTRIES_ENDPOINT), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_BILLING),
        })
            .pipe(catchError((error) => throwError(error.json())), map(countryList => countryList.countries), this.converter.pipeableMany(COUNTRY_NORMALIZER));
    }
    /**
     * @return {?}
     */
    loadDeliveryCountries() {
        return this.http
            .get(this.occEndpoints.getEndpoint(COUNTRIES_ENDPOINT), {
            params: new HttpParams().set('type', COUNTRIES_TYPE_SHIPPING),
        })
            .pipe(catchError((error) => throwError(error.json())), map(countryList => countryList.countries), this.converter.pipeableMany(COUNTRY_NORMALIZER));
    }
    /**
     * @param {?} countryIsoCode
     * @return {?}
     */
    loadRegions(countryIsoCode) {
        /** @type {?} */
        const regionsEndpoint = `${COUNTRIES_ENDPOINT}/${countryIsoCode}/${REGIONS_ENDPOINT}`;
        return this.http
            .get(this.occEndpoints.getEndpoint(regionsEndpoint))
            .pipe(catchError((error) => throwError(error.json())), map(regionList => regionList.regions), this.converter.pipeableMany(REGION_NORMALIZER));
    }
}
OccUserPaymentAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserPaymentAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccUserPaymentAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccUserPaymentAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccUserPaymentAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItcGF5bWVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy11c2VyLXBheW1lbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFFN0YsT0FBTyxFQUNMLGtCQUFrQixFQUNsQixpQkFBaUIsR0FDbEIsTUFBTSw2Q0FBNkMsQ0FBQzs7TUFFL0MsYUFBYSxHQUFHLFFBQVE7O01BQ3hCLHdCQUF3QixHQUFHLGlCQUFpQjs7TUFDNUMsa0JBQWtCLEdBQUcsV0FBVzs7TUFDaEMsZ0JBQWdCLEdBQUcsU0FBUzs7TUFDNUIsc0JBQXNCLEdBQUcsU0FBUzs7TUFDbEMsdUJBQXVCLEdBQUcsVUFBVTtBQUcxQyxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFDaEMsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7SUFFSSx5QkFBeUIsQ0FBQyxNQUFj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QUU7WUFDdkUsTUFBTSxFQUFFLElBQUksVUFBVSxFQUFFLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQztTQUM5RCxDQUFDO2FBQ0QsSUFBSSxDQUNILFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQ3BELEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFDekMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsQ0FDaEQsQ0FBQztJQUNOLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLGNBQXNCOztjQUMxQixlQUFlLEdBQUcsR0FBRyxrQkFBa0IsSUFBSSxjQUFjLElBQUksZ0JBQWdCLEVBQUU7UUFDckYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBaUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDbkUsSUFBSSxDQUNILFVBQVUsQ0FBQyxDQUFDLEtBQVUsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQ3BELEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FDL0MsQ0FBQztJQUNOLENBQUM7OztZQXRGRixVQUFVOzs7O1lBckJGLFVBQVU7WUFDVixtQkFBbUI7WUFLbkIsZ0JBQWdCOzs7Ozs7O0lBa0JyQixxQ0FBMEI7Ozs7O0lBQzFCLDZDQUEyQzs7Ozs7SUFDM0MsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVXNlclBheW1lbnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3BheW1lbnQvdXNlci1wYXltZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBQYXltZW50RGV0YWlscyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUEFZTUVOVF9ERVRBSUxTX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9jaGVja291dC9jb25uZWN0b3JzL3BheW1lbnQvY29udmVydGVycyc7XG5pbXBvcnQgeyBDb3VudHJ5LCBSZWdpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7XG4gIENPVU5UUllfTk9STUFMSVpFUixcbiAgUkVHSU9OX05PUk1BTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9wYXltZW50L2NvbnZlcnRlcnMnO1xuXG5jb25zdCBVU0VSX0VORFBPSU5UID0gJ3VzZXJzLyc7XG5jb25zdCBQQVlNRU5UX0RFVEFJTFNfRU5EUE9JTlQgPSAnL3BheW1lbnRkZXRhaWxzJztcbmNvbnN0IENPVU5UUklFU19FTkRQT0lOVCA9ICdjb3VudHJpZXMnO1xuY29uc3QgUkVHSU9OU19FTkRQT0lOVCA9ICdyZWdpb25zJztcbmNvbnN0IENPVU5UUklFU19UWVBFX0JJTExJTkcgPSAnQklMTElORyc7XG5jb25zdCBDT1VOVFJJRVNfVFlQRV9TSElQUElORyA9ICdTSElQUElORyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NVc2VyUGF5bWVudEFkYXB0ZXIgaW1wbGVtZW50cyBVc2VyUGF5bWVudEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0UGF5bWVudERldGFpbHNFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSBgJHtVU0VSX0VORFBPSU5UfSR7dXNlcklkfSR7UEFZTUVOVF9ERVRBSUxTX0VORFBPSU5UfWA7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGVuZHBvaW50KTtcbiAgfVxuXG4gIGxvYWRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFBheW1lbnREZXRhaWxzRW5kcG9pbnQodXNlcklkKSArICc/c2F2ZWQ9dHJ1ZSc7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLlBheW1lbnREZXRhaWxzTGlzdD4odXJsLCB7IGhlYWRlcnMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgIG1hcChtZXRob2RMaXN0ID0+IG1ldGhvZExpc3QucGF5bWVudHMpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KFBBWU1FTlRfREVUQUlMU19OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBkZWxldGUodXNlcklkOiBzdHJpbmcsIHBheW1lbnRNZXRob2RJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0UGF5bWVudERldGFpbHNFbmRwb2ludCh1c2VySWQpICsgYC8ke3BheW1lbnRNZXRob2RJRH1gO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5kZWxldGUodXJsLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBzZXREZWZhdWx0KHVzZXJJZDogc3RyaW5nLCBwYXltZW50TWV0aG9kSUQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFBheW1lbnREZXRhaWxzRW5kcG9pbnQodXNlcklkKSArIGAvJHtwYXltZW50TWV0aG9kSUR9YDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2goXG4gICAgICAgIHVybCxcbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIGJpbGxpbmdBZGRyZXNzIHByb3BlcnR5XG4gICAgICAgIHsgYmlsbGluZ0FkZHJlc3M6IHsgdGl0bGVDb2RlOiAnbXInIH0sIGRlZmF1bHRQYXltZW50OiB0cnVlIH0sXG4gICAgICAgIHsgaGVhZGVycyB9XG4gICAgICApXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgbG9hZEJpbGxpbmdDb3VudHJpZXMoKTogT2JzZXJ2YWJsZTxDb3VudHJ5W10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5Db3VudHJ5TGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoQ09VTlRSSUVTX0VORFBPSU5UKSwge1xuICAgICAgICBwYXJhbXM6IG5ldyBIdHRwUGFyYW1zKCkuc2V0KCd0eXBlJywgQ09VTlRSSUVTX1RZUEVfQklMTElORyksXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSksXG4gICAgICAgIG1hcChjb3VudHJ5TGlzdCA9PiBjb3VudHJ5TGlzdC5jb3VudHJpZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ09VTlRSWV9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIGxvYWREZWxpdmVyeUNvdW50cmllcygpOiBPYnNlcnZhYmxlPENvdW50cnlbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLkNvdW50cnlMaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChDT1VOVFJJRVNfRU5EUE9JTlQpLCB7XG4gICAgICAgIHBhcmFtczogbmV3IEh0dHBQYXJhbXMoKS5zZXQoJ3R5cGUnLCBDT1VOVFJJRVNfVFlQRV9TSElQUElORyksXG4gICAgICB9KVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSksXG4gICAgICAgIG1hcChjb3VudHJ5TGlzdCA9PiBjb3VudHJ5TGlzdC5jb3VudHJpZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ09VTlRSWV9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIGxvYWRSZWdpb25zKGNvdW50cnlJc29Db2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlZ2lvbltdPiB7XG4gICAgY29uc3QgcmVnaW9uc0VuZHBvaW50ID0gYCR7Q09VTlRSSUVTX0VORFBPSU5UfS8ke2NvdW50cnlJc29Db2RlfS8ke1JFR0lPTlNfRU5EUE9JTlR9YDtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5SZWdpb25MaXN0Pih0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChyZWdpb25zRW5kcG9pbnQpKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IuanNvbigpKSksXG4gICAgICAgIG1hcChyZWdpb25MaXN0ID0+IHJlZ2lvbkxpc3QucmVnaW9ucyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShSRUdJT05fTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==