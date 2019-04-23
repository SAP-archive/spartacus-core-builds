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
var USER_ENDPOINT = 'users/';
/** @type {?} */
var ADDRESSES_VERIFICATION_ENDPOINT = '/addresses/verification';
/** @type {?} */
var ADDRESSES_ENDPOINT = '/addresses';
/** @type {?} */
var PAYMENT_DETAILS_ENDPOINT = '/paymentdetails';
/** @type {?} */
var FORGOT_PASSWORD_ENDPOINT = '/forgottenpasswordtokens';
/** @type {?} */
var RESET_PASSWORD_ENDPOINT = '/resetpassword';
/** @type {?} */
var UPDATE_EMAIL_ENDPOINT = '/login';
/** @type {?} */
var UPDATE_PASSWORD_ENDPOINT = '/password';
var OccUserService = /** @class */ (function () {
    // some extending from baseservice is not working here...
    function OccUserService(http, occEndpoints) {
        this.http = http;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserService.prototype.loadUser = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId;
        return this.http
            .get(url)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} username
     * @param {?} user
     * @return {?}
     */
    OccUserService.prototype.updateUserDetails = /**
     * @param {?} username
     * @param {?} user
     * @return {?}
     */
    function (username, user) {
        /** @type {?} */
        var url = this.getUserEndpoint() + username;
        return this.http
            .patch(url, user)
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    OccUserService.prototype.verifyAddress = /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    function (userId, address) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + ADDRESSES_VERIFICATION_ENDPOINT;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .post(url, address, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserService.prototype.loadUserAddresses = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .get(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    OccUserService.prototype.addUserAddress = /**
     * @param {?} userId
     * @param {?} address
     * @return {?}
     */
    function (userId, address) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .post(url, address, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    OccUserService.prototype.updateUserAddress = /**
     * @param {?} userId
     * @param {?} addressId
     * @param {?} address
     * @return {?}
     */
    function (userId, addressId, address) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, address, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    OccUserService.prototype.deleteUserAddress = /**
     * @param {?} userId
     * @param {?} addressId
     * @return {?}
     */
    function (userId, addressId) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + ADDRESSES_ENDPOINT + '/' + addressId;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserService.prototype.loadUserPaymentMethods = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = "" + this.getUserEndpoint() + userId + PAYMENT_DETAILS_ENDPOINT + "?saved=true";
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .get(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    OccUserService.prototype.deleteUserPaymentMethod = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        /** @type {?} */
        var url = "" + this.getUserEndpoint() + userId + PAYMENT_DETAILS_ENDPOINT + "/" + paymentMethodID;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .delete(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    OccUserService.prototype.setDefaultUserPaymentMethod = /**
     * @param {?} userId
     * @param {?} paymentMethodID
     * @return {?}
     */
    function (userId, paymentMethodID) {
        /** @type {?} */
        var url = "" + this.getUserEndpoint() + userId + PAYMENT_DETAILS_ENDPOINT + "/" + paymentMethodID;
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        return this.http
            .patch(url, 
        // TODO: Remove billingAddress property
        { billingAddress: { titleCode: 'mr' }, defaultPayment: true }, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} user
     * @return {?}
     */
    OccUserService.prototype.registerUser = /**
     * @param {?} user
     * @return {?}
     */
    function (user) {
        /** @type {?} */
        var url = this.getUserEndpoint();
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http
            .post(url, user, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    OccUserService.prototype.requestForgotPasswordEmail = /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    function (userEmailAddress) {
        /** @type {?} */
        var url = this.occEndpoints.getEndpoint(FORGOT_PASSWORD_ENDPOINT);
        /** @type {?} */
        var httpParams = new HttpParams().set('userId', userEmailAddress);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http
            .post(url, httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    OccUserService.prototype.resetPassword = /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    function (token, newPassword) {
        /** @type {?} */
        var url = this.occEndpoints.getEndpoint(RESET_PASSWORD_ENDPOINT);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http
            .post(url, { token: token, newPassword: newPassword }, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    OccUserService.prototype.updateEmail = /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    function (userId, currentPassword, newUserId) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + UPDATE_EMAIL_ENDPOINT;
        /** @type {?} */
        var httpParams = new HttpParams()
            .set('password', currentPassword)
            .set('newLogin', newUserId);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .put(url, httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    /**
     * @protected
     * @return {?}
     */
    OccUserService.prototype.getUserEndpoint = /**
     * @protected
     * @return {?}
     */
    function () {
        return this.occEndpoints.getEndpoint(USER_ENDPOINT);
    };
    /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    OccUserService.prototype.updatePassword = /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    function (userId, oldPassword, newPassword) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + UPDATE_PASSWORD_ENDPOINT;
        /** @type {?} */
        var httpParams = new HttpParams()
            .set('old', oldPassword)
            .set('new', newPassword);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .put(url, httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }));
    };
    OccUserService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccUserService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService }
    ]; };
    return OccUserService;
}());
export { OccUserService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvb2NjL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVE1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixHQUNqQixNQUFNLGtDQUFrQyxDQUFDOztJQUdwQyxhQUFhLEdBQUcsUUFBUTs7SUFDeEIsK0JBQStCLEdBQUcseUJBQXlCOztJQUMzRCxrQkFBa0IsR0FBRyxZQUFZOztJQUNqQyx3QkFBd0IsR0FBRyxpQkFBaUI7O0lBQzVDLHdCQUF3QixHQUFHLDBCQUEwQjs7SUFDckQsdUJBQXVCLEdBQUcsZ0JBQWdCOztJQUMxQyxxQkFBcUIsR0FBRyxRQUFROztJQUNoQyx3QkFBd0IsR0FBRyxXQUFXO0FBRTVDO0lBRUUseURBQXlEO0lBQ3pELHdCQUNZLElBQWdCLEVBQ2xCLFlBQWlDO1FBRC9CLFNBQUksR0FBSixJQUFJLENBQVk7UUFDbEIsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQ3hDLENBQUM7Ozs7O0lBRUosaUNBQVE7Ozs7SUFBUixVQUFTLE1BQWM7O1lBQ2YsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxNQUFNO1FBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQU8sR0FBRyxDQUFDO2FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxV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LFVBQVUsRUFBRTthQUM1QyxHQUFHLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQzthQUN2QixHQUFHLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQzs7WUFDcEIsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFDLEtBQVUsSUFBSyxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Z0JBOU1GLFVBQVU7Ozs7Z0JBM0JGLFVBQVU7Z0JBV1YsbUJBQW1COztJQStONUIscUJBQUM7Q0FBQSxBQS9NRCxJQStNQztTQTlNWSxjQUFjOzs7Ozs7SUFHdkIsOEJBQTBCOzs7OztJQUMxQixzQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBBZGRyZXNzLFxuICBBZGRyZXNzTGlzdCxcbiAgQWRkcmVzc1ZhbGlkYXRpb24sXG4gIFBheW1lbnREZXRhaWxzTGlzdCxcbiAgVXNlcixcbn0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBVU0VfQ0xJRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBVc2VyUmVnaXN0ZXJGb3JtRGF0YSB9IGZyb20gJy4uL21vZGVsL3VzZXIubW9kZWwnO1xuXG5jb25zdCBVU0VSX0VORFBPSU5UID0gJ3VzZXJzLyc7XG5jb25zdCBBRERSRVNTRVNfVkVSSUZJQ0FUSU9OX0VORFBPSU5UID0gJy9hZGRyZXNzZXMvdmVyaWZpY2F0aW9uJztcbmNvbnN0IEFERFJFU1NFU19FTkRQT0lOVCA9ICcvYWRkcmVzc2VzJztcbmNvbnN0IFBBWU1FTlRfREVUQUlMU19FTkRQT0lOVCA9ICcvcGF5bWVudGRldGFpbHMnO1xuY29uc3QgRk9SR09UX1BBU1NXT1JEX0VORFBPSU5UID0gJy9mb3Jnb3R0ZW5wYXNzd29yZHRva2Vucyc7XG5jb25zdCBSRVNFVF9QQVNTV09SRF9FTkRQT0lOVCA9ICcvcmVzZXRwYXNzd29yZCc7XG5jb25zdCBVUERBVEVfRU1BSUxfRU5EUE9JTlQgPSAnL2xvZ2luJztcbmNvbnN0IFVQREFURV9QQVNTV09SRF9FTkRQT0lOVCA9ICcvcGFzc3dvcmQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlclNlcnZpY2Uge1xuICAvLyBzb21lIGV4dGVuZGluZyBmcm9tIGJhc2VzZXJ2aWNlIGlzIG5vdCB3b3JraW5nIGhlcmUuLi5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJpdmF0ZSBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWRVc2VyKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQoKSArIHVzZXJJZDtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PFVzZXI+KHVybClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICB1cGRhdGVVc2VyRGV0YWlscyh1c2VybmFtZTogc3RyaW5nLCB1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KCkgKyB1c2VybmFtZTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2godXJsLCB1c2VyKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgdmVyaWZ5QWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzOiBBZGRyZXNzXG4gICk6IE9ic2VydmFibGU8QWRkcmVzc1ZhbGlkYXRpb24+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdGhpcy5nZXRVc2VyRW5kcG9pbnQoKSArIHVzZXJJZCArIEFERFJFU1NFU19WRVJJRklDQVRJT05fRU5EUE9JTlQ7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8QWRkcmVzc1ZhbGlkYXRpb24+KHVybCwgYWRkcmVzcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgbG9hZFVzZXJBZGRyZXNzZXModXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFkZHJlc3NMaXN0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQoKSArIHVzZXJJZCArIEFERFJFU1NFU19FTkRQT0lOVDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PEFkZHJlc3NMaXN0Pih1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIGFkZFVzZXJBZGRyZXNzKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KCkgKyB1c2VySWQgKyBBRERSRVNTRVNfRU5EUE9JTlQ7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QodXJsLCBhZGRyZXNzLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICB1cGRhdGVVc2VyQWRkcmVzcyhcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzSWQ6IHN0cmluZyxcbiAgICBhZGRyZXNzOiBBZGRyZXNzXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdGhpcy5nZXRVc2VyRW5kcG9pbnQoKSArIHVzZXJJZCArIEFERFJFU1NFU19FTkRQT0lOVCArICcvJyArIGFkZHJlc3NJZDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2godXJsLCBhZGRyZXNzLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBkZWxldGVVc2VyQWRkcmVzcyh1c2VySWQ6IHN0cmluZywgYWRkcmVzc0lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID1cbiAgICAgIHRoaXMuZ2V0VXNlckVuZHBvaW50KCkgKyB1c2VySWQgKyBBRERSRVNTRVNfRU5EUE9JTlQgKyAnLycgKyBhZGRyZXNzSWQ7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIGxvYWRVc2VyUGF5bWVudE1ldGhvZHModXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFBheW1lbnREZXRhaWxzTGlzdD4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuZ2V0VXNlckVuZHBvaW50KCl9JHt1c2VySWR9JHtQQVlNRU5UX0RFVEFJTFNfRU5EUE9JTlR9P3NhdmVkPXRydWVgO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8UGF5bWVudERldGFpbHNMaXN0Pih1cmwsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIGRlbGV0ZVVzZXJQYXltZW50TWV0aG9kKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHBheW1lbnRNZXRob2RJRDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSBgJHt0aGlzLmdldFVzZXJFbmRwb2ludCgpfSR7dXNlcklkfSR7UEFZTUVOVF9ERVRBSUxTX0VORFBPSU5UfS8ke3BheW1lbnRNZXRob2RJRH1gO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5kZWxldGUodXJsLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBzZXREZWZhdWx0VXNlclBheW1lbnRNZXRob2QoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgcGF5bWVudE1ldGhvZElEOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IGAke3RoaXMuZ2V0VXNlckVuZHBvaW50KCl9JHt1c2VySWR9JHtQQVlNRU5UX0RFVEFJTFNfRU5EUE9JTlR9LyR7cGF5bWVudE1ldGhvZElEfWA7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoKFxuICAgICAgICB1cmwsXG4gICAgICAgIC8vIFRPRE86IFJlbW92ZSBiaWxsaW5nQWRkcmVzcyBwcm9wZXJ0eVxuICAgICAgICB7IGJpbGxpbmdBZGRyZXNzOiB7IHRpdGxlQ29kZTogJ21yJyB9LCBkZWZhdWx0UGF5bWVudDogdHJ1ZSB9LFxuICAgICAgICB7IGhlYWRlcnMgfVxuICAgICAgKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHJlZ2lzdGVyVXNlcih1c2VyOiBVc2VyUmVnaXN0ZXJGb3JtRGF0YSk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQoKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8VXNlcj4odXJsLCB1c2VyLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoRk9SR09UX1BBU1NXT1JEX0VORFBPSU5UKTtcbiAgICBjb25zdCBodHRwUGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoXG4gICAgICAndXNlcklkJyxcbiAgICAgIHVzZXJFbWFpbEFkZHJlc3NcbiAgICApO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIGh0dHBQYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQodG9rZW46IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChSRVNFVF9QQVNTV09SRF9FTkRQT0lOVCk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbiAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHVybCwgeyB0b2tlbiwgbmV3UGFzc3dvcmQgfSwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgdXBkYXRlRW1haWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY3VycmVudFBhc3N3b3JkOiBzdHJpbmcsXG4gICAgbmV3VXNlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KCkgKyB1c2VySWQgKyBVUERBVEVfRU1BSUxfRU5EUE9JTlQ7XG4gICAgY29uc3QgaHR0cFBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ3Bhc3N3b3JkJywgY3VycmVudFBhc3N3b3JkKVxuICAgICAgLnNldCgnbmV3TG9naW4nLCBuZXdVc2VySWQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQodXJsLCBodHRwUGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0VXNlckVuZHBvaW50KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KFVTRVJfRU5EUE9JTlQpO1xuICB9XG5cbiAgdXBkYXRlUGFzc3dvcmQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkUGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCgpICsgdXNlcklkICsgVVBEQVRFX1BBU1NXT1JEX0VORFBPSU5UO1xuICAgIGNvbnN0IGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdvbGQnLCBvbGRQYXNzd29yZClcbiAgICAgIC5zZXQoJ25ldycsIG5ld1Bhc3N3b3JkKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG59XG4iXX0=