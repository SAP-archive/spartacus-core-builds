/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../utils/interceptor-util';
import { ConverterService } from '../../../util/converter.service';
import { TITLE_NORMALIZER, USER_SERIALIZER, USER_SIGN_UP_SERIALIZER, } from '../../../user/connectors/user/converters';
import { USER_NORMALIZER } from '../../../user/connectors/user/converters';
/** @type {?} */
var USER_ENDPOINT = 'users/';
/** @type {?} */
var FORGOT_PASSWORD_ENDPOINT = '/forgottenpasswordtokens';
/** @type {?} */
var RESET_PASSWORD_ENDPOINT = '/resetpassword';
/** @type {?} */
var UPDATE_EMAIL_ENDPOINT = '/login';
/** @type {?} */
var UPDATE_PASSWORD_ENDPOINT = '/password';
/** @type {?} */
var TITLES_ENDPOINT = 'titles';
var OccUserAdapter = /** @class */ (function () {
    function OccUserAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?=} userId
     * @return {?}
     */
    OccUserAdapter.prototype.getUserEndpoint = /**
     * @private
     * @param {?=} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var endpoint = userId ? "" + USER_ENDPOINT + userId : USER_ENDPOINT;
        return this.occEndpoints.getEndpoint(endpoint);
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserAdapter.prototype.load = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId);
        return this.http.get(url).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })), this.converter.pipeable(USER_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} user
     * @return {?}
     */
    OccUserAdapter.prototype.update = /**
     * @param {?} userId
     * @param {?} user
     * @return {?}
     */
    function (userId, user) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId);
        user = this.converter.convert(user, USER_SERIALIZER);
        return this.http
            .patch(url, user)
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    /**
     * @param {?} user
     * @return {?}
     */
    OccUserAdapter.prototype.register = /**
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
        user = this.converter.convert(user, USER_SIGN_UP_SERIALIZER);
        return this.http.post(url, user, { headers: headers }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })), this.converter.pipeable(USER_NORMALIZER));
    };
    /**
     * @param {?} userEmailAddress
     * @return {?}
     */
    OccUserAdapter.prototype.requestForgotPasswordEmail = /**
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
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    /**
     * @param {?} token
     * @param {?} newPassword
     * @return {?}
     */
    OccUserAdapter.prototype.resetPassword = /**
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
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    OccUserAdapter.prototype.updateEmail = /**
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    function (userId, currentPassword, newUserId) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId) + UPDATE_EMAIL_ENDPOINT;
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
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    OccUserAdapter.prototype.updatePassword = /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    function (userId, oldPassword, newPassword) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId) + UPDATE_PASSWORD_ENDPOINT;
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
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserAdapter.prototype.remove = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId);
        return this.http
            .delete(url)
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    /**
     * @return {?}
     */
    OccUserAdapter.prototype.loadTitles = /**
     * @return {?}
     */
    function () {
        return this.http
            .get(this.occEndpoints.getEndpoint(TITLES_ENDPOINT))
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error.json()); })), map((/**
         * @param {?} titleList
         * @return {?}
         */
        function (titleList) { return titleList.titles; })), this.converter.pipeableMany(TITLE_NORMALIZER));
    };
    OccUserAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccUserAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccUserAdapter;
}());
export { OccUserAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccUserAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccUserAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccUserAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXIuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMzRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixHQUNqQixNQUFNLDhCQUE4QixDQUFDO0FBQ3RDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZUFBZSxFQUNmLHVCQUF1QixHQUN4QixNQUFNLDBDQUEwQyxDQUFDO0FBRWxELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7SUFHckUsYUFBYSxHQUFHLFFBQVE7O0lBQ3hCLHdCQUF3QixHQUFHLDBCQUEwQjs7SUFDckQsdUJBQXVCLEdBQUcsZ0JBQWdCOztJQUMxQyxxQkFBcUIsR0FBRyxRQUFROztJQUNoQyx3QkFBd0IsR0FBRyxXQUFXOztJQUN0QyxlQUFlLEdBQUcsUUFBUTtBQUVoQztJQUVFLHdCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7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VUFBVTs7OztRQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUF4QixDQUF3QixFQUFDLEVBQ3BELEdBQUc7Ozs7UUFBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLFNBQVMsQ0FBQyxNQUFNLEVBQWhCLENBQWdCLEVBQUMsRUFDbEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FDOUMsQ0FBQztJQUNOLENBQUM7O2dCQXZIRixVQUFVOzs7O2dCQTNCRixVQUFVO2dCQUtWLG1CQUFtQjtnQkFLbkIsZ0JBQWdCOztJQXlJekIscUJBQUM7Q0FBQSxBQXhIRCxJQXdIQztTQXZIWSxjQUFjOzs7Ozs7SUFFdkIsOEJBQTBCOzs7OztJQUMxQixzQ0FBMkM7Ozs7O0lBQzNDLG1DQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGl0bGUsIFVzZXIsIFVzZXJTaWduVXAgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBVU0VfQ0xJRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi91dGlscy9pbnRlcmNlcHRvci11dGlsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIFRJVExFX05PUk1BTElaRVIsXG4gIFVTRVJfU0VSSUFMSVpFUixcbiAgVVNFUl9TSUdOX1VQX1NFUklBTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy91c2VyL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgVXNlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvdXNlci91c2VyLmFkYXB0ZXInO1xuaW1wb3J0IHsgVVNFUl9OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3VzZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2MtbW9kZWxzJztcblxuY29uc3QgVVNFUl9FTkRQT0lOVCA9ICd1c2Vycy8nO1xuY29uc3QgRk9SR09UX1BBU1NXT1JEX0VORFBPSU5UID0gJy9mb3Jnb3R0ZW5wYXNzd29yZHRva2Vucyc7XG5jb25zdCBSRVNFVF9QQVNTV09SRF9FTkRQT0lOVCA9ICcvcmVzZXRwYXNzd29yZCc7XG5jb25zdCBVUERBVEVfRU1BSUxfRU5EUE9JTlQgPSAnL2xvZ2luJztcbmNvbnN0IFVQREFURV9QQVNTV09SRF9FTkRQT0lOVCA9ICcvcGFzc3dvcmQnO1xuY29uc3QgVElUTEVTX0VORFBPSU5UID0gJ3RpdGxlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NVc2VyQWRhcHRlciBpbXBsZW1lbnRzIFVzZXJBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGdldFVzZXJFbmRwb2ludCh1c2VySWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gdXNlcklkID8gYCR7VVNFUl9FTkRQT0lOVH0ke3VzZXJJZH1gIDogVVNFUl9FTkRQT0lOVDtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoZW5kcG9pbnQpO1xuICB9XG5cbiAgbG9hZCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KHVzZXJJZCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLlVzZXI+KHVybCkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFVTRVJfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgdXBkYXRlKHVzZXJJZDogc3RyaW5nLCB1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KHVzZXJJZCk7XG4gICAgdXNlciA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQodXNlciwgVVNFUl9TRVJJQUxJWkVSKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucGF0Y2godXJsLCB1c2VyKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgcmVnaXN0ZXIodXNlcjogVXNlclNpZ25VcCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQoKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuICAgIHVzZXIgPSB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHVzZXIsIFVTRVJfU0lHTl9VUF9TRVJJQUxJWkVSKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdDxVc2VyPih1cmwsIHVzZXIsIHsgaGVhZGVycyB9KS5waXBlKFxuICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpLFxuICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoVVNFUl9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICByZXF1ZXN0Rm9yZ290UGFzc3dvcmRFbWFpbCh1c2VyRW1haWxBZGRyZXNzOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoRk9SR09UX1BBU1NXT1JEX0VORFBPSU5UKTtcbiAgICBjb25zdCBodHRwUGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKS5zZXQoXG4gICAgICAndXNlcklkJyxcbiAgICAgIHVzZXJFbWFpbEFkZHJlc3NcbiAgICApO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIGh0dHBQYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQodG9rZW46IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChSRVNFVF9QQVNTV09SRF9FTkRQT0lOVCk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbiAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHVybCwgeyB0b2tlbiwgbmV3UGFzc3dvcmQgfSwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgdXBkYXRlRW1haWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY3VycmVudFBhc3N3b3JkOiBzdHJpbmcsXG4gICAgbmV3VXNlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KHVzZXJJZCkgKyBVUERBVEVfRU1BSUxfRU5EUE9JTlQ7XG4gICAgY29uc3QgaHR0cFBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ3Bhc3N3b3JkJywgY3VycmVudFBhc3N3b3JkKVxuICAgICAgLnNldCgnbmV3TG9naW4nLCBuZXdVc2VySWQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQodXJsLCBodHRwUGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICB1cGRhdGVQYXNzd29yZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvbGRQYXNzd29yZDogc3RyaW5nLFxuICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KHVzZXJJZCkgKyBVUERBVEVfUEFTU1dPUkRfRU5EUE9JTlQ7XG4gICAgY29uc3QgaHR0cFBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ29sZCcsIG9sZFBhc3N3b3JkKVxuICAgICAgLnNldCgnbmV3JywgbmV3UGFzc3dvcmQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wdXQodXJsLCBodHRwUGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICByZW1vdmUodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQodXNlcklkKTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZGVsZXRlPFVzZXI+KHVybClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBsb2FkVGl0bGVzKCk6IE9ic2VydmFibGU8VGl0bGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlRpdGxlTGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoVElUTEVTX0VORFBPSU5UKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yLmpzb24oKSkpLFxuICAgICAgICBtYXAodGl0bGVMaXN0ID0+IHRpdGxlTGlzdC50aXRsZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoVElUTEVfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==