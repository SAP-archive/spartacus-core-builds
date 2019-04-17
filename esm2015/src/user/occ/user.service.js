/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../occ/utils/interceptor-util';
/** @type {?} */
const USER_ENDPOINT = 'users/';
/** @type {?} */
const ADDRESSES_VERIFICATION_ENDPOINT = '/addresses/verification';
/** @type {?} */
const ADDRESSES_ENDPOINT = '/addresses';
/** @type {?} */
const PAYMENT_DETAILS_ENDPOINT = '/paymentdetails';
/** @type {?} */
const FORGOT_PASSWORD_ENDPOINT = '/forgottenpasswordtokens';
/** @type {?} */
const RESET_PASSWORD_ENDPOINT = '/resetpassword';
/** @type {?} */
const UPDATE_PASSWORD_ENDPOINT = '/password';
export class OccUserService {
    // some extending from baseservice is not working here...
    /**
     * @param {?} http
     * @param {?} occEndpoints
     */
    constructor(http, occEndpoints) {
        this.http = http;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadUser(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId;
        return this.http
            .get(url)
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} username
     * @param {?} user
     * @return {?}
     */
    updateUserDetails(username, user) {
        /** @type {?} */
        const url = this.getUserEndpoint() + username;
        return this.http
            .patch(url, user)
            .pipe(catchError(error => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    verifyAddress(userId, address) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + ADDRESSES_VERIFICATION_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .post(url, address, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadUserAddresses(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .get(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    addUserAddress(userId, address) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .post(url, address, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    updateUserAddress(userId, addressId, address) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, address, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    deleteUserAddress(userId, addressId) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT + '/' + addressId;
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
     * @return {?}
     */
    loadUserPaymentMethods(userId) {
        /** @type {?} */
        const url = `${this.getUserEndpoint()}${userId}${PAYMENT_DETAILS_ENDPOINT}?saved=true`;
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .get(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    deleteUserPaymentMethod(userId, paymentMethodID) {
        /** @type {?} */
        const url = `${this.getUserEndpoint()}${userId}${PAYMENT_DETAILS_ENDPOINT}/${paymentMethodID}`;
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
    setDefaultUserPaymentMethod(userId, paymentMethodID) {
        /** @type {?} */
        const url = `${this.getUserEndpoint()}${userId}${PAYMENT_DETAILS_ENDPOINT}/${paymentMethodID}`;
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
     * @param {?} user
     * @return {?}
     */
    registerUser(user) {
        /** @type {?} */
        const url = this.getUserEndpoint();
        /** @type {?} */
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http
            .post(url, user, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    requestForgotPasswordEmail(userEmailAddress) {
        /** @type {?} */
        const url = this.occEndpoints.getEndpoint(FORGOT_PASSWORD_ENDPOINT);
        /** @type {?} */
        const httpParams = new HttpParams().set('userId', userEmailAddress);
        /** @type {?} */
        let headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http
            .post(url, httpParams, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    resetPassword(token, newPassword) {
        /** @type {?} */
        const url = this.occEndpoints.getEndpoint(RESET_PASSWORD_ENDPOINT);
        /** @type {?} */
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http
            .post(url, { token, newPassword }, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @protected
     * @return {?}
     */
    getUserEndpoint() {
        return this.occEndpoints.getEndpoint(USER_ENDPOINT);
    }
    /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    updatePassword(userId, oldPassword, newPassword) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + UPDATE_PASSWORD_ENDPOINT;
        /** @type {?} */
        const httpParams = new HttpParams()
            .set('old', oldPassword)
            .set('new', newPassword);
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .put(url, httpParams, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
}
OccUserService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserService.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccUserService.prototype.http;
    /**
     * @type {?}
     * @private
     */
    OccUserService.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvb2NjL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVE1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixHQUNqQixNQUFNLGtDQUFrQyxDQUFDOztNQUdwQyxhQUFhLEdBQUcsUUFBUTs7TUFDeEIsK0JBQStCLEdBQUcseUJBQXlCOztNQUMzRCxrQkFBa0IsR0FBRyxZQUFZOztNQUNqQyx3QkFBd0IsR0FBRyxpQkFBaUI7O01BQzVDLHdCQUF3QixHQUFHLDBCQUEwQjs7TUFDckQsdUJBQXVCLEdBQUcsZ0JBQWdCOztNQUMxQyx3QkFBd0IsR0FBRyxXQUFXO0FBRzVDLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUFFekIsWUFDWSxJQUFnQixFQUNsQixZQUFpQztRQUQvQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2xCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtJQUN4QyxDQUFDOzs7OztJQUVKLFFBQVEsQ0FBQyxNQUFjOztjQUNmLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUcsTUFBTTtRQUMzQyxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFPLEdBQUcsQ0FBQzthQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxLQUFVLEVBQUUsRUFBRSxDQUFDLFVB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LEVBQ2QsV0FBbUIsRUFDbkIsV0FBbUI7O2NBRWIsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxNQUFNLEdBQUcsd0JBQXdCOztjQUNoRSxVQUFVLEdBQWUsSUFBSSxVQUFVLEVBQUU7YUFDNUMsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7YUFDdkIsR0FBRyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUM7O2NBQ3BCLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsbUNBQW1DO1NBQ3BELENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQzthQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBVSxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7OztZQTdMRixVQUFVOzs7O1lBMUJGLFVBQVU7WUFXVixtQkFBbUI7Ozs7Ozs7SUFtQnhCLDhCQUEwQjs7Ozs7SUFDMUIsc0NBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgQWRkcmVzcyxcbiAgQWRkcmVzc0xpc3QsXG4gIEFkZHJlc3NWYWxpZGF0aW9uLFxuICBQYXltZW50RGV0YWlsc0xpc3QsXG4gIFVzZXIsXG59IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NMSUVOVF9UT0tFTixcbn0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuaW1wb3J0IHsgVXNlclJlZ2lzdGVyRm9ybURhdGEgfSBmcm9tICcuLi9tb2RlbC91c2VyLm1vZGVsJztcblxuY29uc3QgVVNFUl9FTkRQT0lOVCA9ICd1c2Vycy8nO1xuY29uc3QgQUREUkVTU0VTX1ZFUklGSUNBVElPTl9FTkRQT0lOVCA9ICcvYWRkcmVzc2VzL3ZlcmlmaWNhdGlvbic7XG5jb25zdCBBRERSRVNTRVNfRU5EUE9JTlQgPSAnL2FkZHJlc3Nlcyc7XG5jb25zdCBQQVlNRU5UX0RFVEFJTFNfRU5EUE9JTlQgPSAnL3BheW1lbnRkZXRhaWxzJztcbmNvbnN0IEZPUkdPVF9QQVNTV09SRF9FTkRQT0lOVCA9ICcvZm9yZ290dGVucGFzc3dvcmR0b2tlbnMnO1xuY29uc3QgUkVTRVRfUEFTU1dPUkRfRU5EUE9JTlQgPSAnL3Jlc2V0cGFzc3dvcmQnO1xuY29uc3QgVVBEQVRFX1BBU1NXT1JEX0VORFBPSU5UID0gJy9wYXNzd29yZCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NVc2VyU2VydmljZSB7XG4gIC8vIHNvbWUgZXh0ZW5kaW5nIGZyb20gYmFzZXNlcnZpY2UgaXMgbm90IHdvcmtpbmcgaGVyZS4uLlxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZVxuICApIHt9XG5cbiAgbG9hZFVzZXIodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCgpICsgdXNlcklkO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8VXNlcj4odXJsKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXJEZXRhaWxzKHVzZXJuYW1lOiBzdHJpbmcsIHVzZXI6IFVzZXIpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQoKSArIHVzZXJuYW1lO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaCh1cmwsIHVzZXIpXG4gICAgICAucGlwZShjYXRjaEVycm9yKGVycm9yID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICB2ZXJpZnlBZGRyZXNzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGFkZHJlc3M6IEFkZHJlc3NcbiAgKTogT2JzZXJ2YWJsZTxBZGRyZXNzVmFsaWRhdGlvbj4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICB0aGlzLmdldFVzZXJFbmRwb2ludCgpICsgdXNlcklkICsgQUREUkVTU0VTX1ZFUklGSUNBVElPTl9FTkRQT0lOVDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxBZGRyZXNzVmFsaWRhdGlvbj4odXJsLCBhZGRyZXNzLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBsb2FkVXNlckFkZHJlc3Nlcyh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QWRkcmVzc0xpc3Q+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCgpICsgdXNlcklkICsgQUREUkVTU0VTX0VORFBPSU5UO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8QWRkcmVzc0xpc3Q+KHVybCwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgYWRkVXNlckFkZHJlc3ModXNlcklkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQoKSArIHVzZXJJZCArIEFERFJFU1NFU19FTkRQT0lOVDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIGFkZHJlc3MsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXJBZGRyZXNzKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGFkZHJlc3NJZDogc3RyaW5nLFxuICAgIGFkZHJlc3M6IEFkZHJlc3NcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9XG4gICAgICB0aGlzLmdldFVzZXJFbmRwb2ludCgpICsgdXNlcklkICsgQUREUkVTU0VTX0VORFBPSU5UICsgJy8nICsgYWRkcmVzc0lkO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wYXRjaCh1cmwsIGFkZHJlc3MsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIGRlbGV0ZVVzZXJBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdGhpcy5nZXRVc2VyRW5kcG9pbnQoKSArIHVzZXJJZCArIEFERFJFU1NFU19FTkRQT0lOVCArICcvJyArIGFkZHJlc3NJZDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZGVsZXRlKHVybCwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgbG9hZFVzZXJQYXltZW50TWV0aG9kcyh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8UGF5bWVudERldGFpbHNMaXN0PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5nZXRVc2VyRW5kcG9pbnQoKX0ke3VzZXJJZH0ke1BBWU1FTlRfREVUQUlMU19FTkRQT0lOVH0/c2F2ZWQ9dHJ1ZWA7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxQYXltZW50RGV0YWlsc0xpc3Q+KHVybCwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgZGVsZXRlVXNlclBheW1lbnRNZXRob2QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGF5bWVudE1ldGhvZElEOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuZ2V0VXNlckVuZHBvaW50KCl9JHt1c2VySWR9JHtQQVlNRU5UX0RFVEFJTFNfRU5EUE9JTlR9LyR7cGF5bWVudE1ldGhvZElEfWA7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHNldERlZmF1bHRVc2VyUGF5bWVudE1ldGhvZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBwYXltZW50TWV0aG9kSUQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gYCR7dGhpcy5nZXRVc2VyRW5kcG9pbnQoKX0ke3VzZXJJZH0ke1BBWU1FTlRfREVUQUlMU19FTkRQT0lOVH0vJHtwYXltZW50TWV0aG9kSUR9YDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2goXG4gICAgICAgIHVybCxcbiAgICAgICAgLy8gVE9ETzogUmVtb3ZlIGJpbGxpbmdBZGRyZXNzIHByb3BlcnR5XG4gICAgICAgIHsgYmlsbGluZ0FkZHJlc3M6IHsgdGl0bGVDb2RlOiAnbXInIH0sIGRlZmF1bHRQYXltZW50OiB0cnVlIH0sXG4gICAgICAgIHsgaGVhZGVycyB9XG4gICAgICApXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgcmVnaXN0ZXJVc2VyKHVzZXI6IFVzZXJSZWdpc3RlckZvcm1EYXRhKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVzZXJFbmRwb2ludCgpO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG4gICAgaGVhZGVycyA9IEludGVyY2VwdG9yVXRpbC5jcmVhdGVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgdHJ1ZSwgaGVhZGVycyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxVc2VyPih1cmwsIHVzZXIsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChGT1JHT1RfUEFTU1dPUkRfRU5EUE9JTlQpO1xuICAgIGNvbnN0IGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldChcbiAgICAgICd1c2VySWQnLFxuICAgICAgdXNlckVtYWlsQWRkcmVzc1xuICAgICk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZCh0b2tlbjogc3RyaW5nLCBuZXdQYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KFJFU0VUX1BBU1NXT1JEX0VORFBPSU5UKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QodXJsLCB7IHRva2VuLCBuZXdQYXNzd29yZCB9LCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0VXNlckVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KFVTRVJfRU5EUE9JTlQpO1xuICB9XG5cbiAgdXBkYXRlUGFzc3dvcmQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkUGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCgpICsgdXNlcklkICsgVVBEQVRFX1BBU1NXT1JEX0VORFBPSU5UO1xuICAgIGNvbnN0IGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdvbGQnLCBvbGRQYXNzd29yZClcbiAgICAgIC5zZXQoJ25ldycsIG5ld1Bhc3N3b3JkKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG59XG4iXX0=