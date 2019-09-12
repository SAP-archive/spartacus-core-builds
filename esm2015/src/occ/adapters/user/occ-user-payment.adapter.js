/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { PAYMENT_DETAILS_NORMALIZER } from '../../../checkout/connectors/payment/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
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
     * @param {?} userId
     * @return {?}
     */
    loadAll(userId) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('paymentDetailsAll', { userId }) + '?saved=true';
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http.get(url, { headers }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))), map((/**
         * @param {?} methodList
         * @return {?}
         */
        methodList => methodList.payments)), this.converter.pipeableMany(PAYMENT_DETAILS_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    delete(userId, paymentMethodID) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('paymentDetail', {
            userId,
            paymentDetailId: paymentMethodID,
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
    }
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    setDefault(userId, paymentMethodID) {
        /** @type {?} */
        const url = this.occEndpoints.getUrl('paymentDetail', {
            userId,
            paymentDetailId: paymentMethodID,
        });
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, 
        // TODO: Remove billingAddress property
        { billingAddress: { titleCode: 'mr' }, defaultPayment: true }, { headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        (error) => throwError(error))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItcGF5bWVudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy11c2VyLXBheW1lbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUc3RixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUczRSxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7SUFDaEMsWUFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7OztJQUVKLE9BQU8sQ0FBQyxNQUFjOztjQUNkLEdBQUcsR0FDUCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEdBQUcsYUFBYTs7Y0FDckUsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxrQkFBa0I7U0FDbkMsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQXlCLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNqRSxVQUFVOzs7O1FBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBQyxFQUM3QyxHQUFHOzs7O1FBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFDLEVBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLDBCQUEwQixDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsTUFBYyxFQUFFLGVBQXVCOztjQUN0QyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO1lBQ3BELE1BQU07WUFDTixlQUFlLEVBQUUsZUFBZTtTQUNqQyxDQUFDOztjQUNJLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsa0JBQWtCO1NBQ25DLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDO2FBQ3hCLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQWMsRUFBRSxlQUF1Qjs7Y0FDMUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtZQUNwRCxNQUFNO1lBQ04sZUFBZSxFQUFFLGVBQWU7U0FDakMsQ0FBQzs7Y0FFSSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNuQyxDQUFDO1FBRUYsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEtBQUssQ0FDSixHQUFHO1FBQ0gsdUNBQXVDO1FBQ3ZDLEVBQUUsY0FBYyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsRUFDN0QsRUFBRSxPQUFPLEVBQUUsQ0FDWjthQUNBLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7O1lBdERGLFVBQVU7Ozs7WUFYRixVQUFVO1lBU1YsbUJBQW1CO1lBRm5CLGdCQUFnQjs7Ozs7OztJQU9yQixxQ0FBMEI7Ozs7O0lBQzFCLDZDQUEyQzs7Ozs7SUFDM0MsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQQVlNRU5UX0RFVEFJTFNfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2NoZWNrb3V0L2Nvbm5lY3RvcnMvcGF5bWVudC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFBheW1lbnREZXRhaWxzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyUGF5bWVudEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvcGF5bWVudC91c2VyLXBheW1lbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NVc2VyUGF5bWVudEFkYXB0ZXIgaW1wbGVtZW50cyBVc2VyUGF5bWVudEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzW10+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdwYXltZW50RGV0YWlsc0FsbCcsIHsgdXNlcklkIH0pICsgJz9zYXZlZD10cnVlJztcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmdldDxPY2MuUGF5bWVudERldGFpbHNMaXN0Pih1cmwsIHsgaGVhZGVycyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpLFxuICAgICAgbWFwKG1ldGhvZExpc3QgPT4gbWV0aG9kTGlzdC5wYXltZW50cyksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoUEFZTUVOVF9ERVRBSUxTX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIGRlbGV0ZSh1c2VySWQ6IHN0cmluZywgcGF5bWVudE1ldGhvZElEOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdwYXltZW50RGV0YWlsJywge1xuICAgICAgdXNlcklkLFxuICAgICAgcGF5bWVudERldGFpbElkOiBwYXltZW50TWV0aG9kSUQsXG4gICAgfSk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHNldERlZmF1bHQodXNlcklkOiBzdHJpbmcsIHBheW1lbnRNZXRob2RJRDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgncGF5bWVudERldGFpbCcsIHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIHBheW1lbnREZXRhaWxJZDogcGF5bWVudE1ldGhvZElELFxuICAgIH0pO1xuXG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoKFxuICAgICAgICB1cmwsXG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSBiaWxsaW5nQWRkcmVzcyBwcm9wZXJ0eVxuICAgICAgICB7IGJpbGxpbmdBZGRyZXNzOiB7IHRpdGxlQ29kZTogJ21yJyB9LCBkZWZhdWx0UGF5bWVudDogdHJ1ZSB9LFxuICAgICAgICB7IGhlYWRlcnMgfVxuICAgICAgKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxufVxuIl19