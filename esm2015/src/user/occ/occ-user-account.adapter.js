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
import { ConverterService } from '../../util/converter.service';
import { USER_REGISTER_FORM_SERIALIZER } from '../connectors/account/converters';
import { USER_NORMALIZER } from '../connectors/details/converters';
/** @type {?} */
const USER_ENDPOINT = 'users/';
/** @type {?} */
const FORGOT_PASSWORD_ENDPOINT = '/forgottenpasswordtokens';
/** @type {?} */
const RESET_PASSWORD_ENDPOINT = '/resetpassword';
/** @type {?} */
const UPDATE_EMAIL_ENDPOINT = '/login';
/** @type {?} */
const UPDATE_PASSWORD_ENDPOINT = '/password';
/** @type {?} */
const CONSENTS_TEMPLATES_ENDPOINT = '/consenttemplates';
/** @type {?} */
const CONSENTS_ENDPOINT = '/consents';
export class OccUserAccountAdapter {
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
     * @param {?=} userId
     * @return {?}
     */
    getUserEndpoint(userId) {
        /** @type {?} */
        const endpoint = userId ? `${USER_ENDPOINT}${userId}` : USER_ENDPOINT;
        return this.occEndpoints.getEndpoint(endpoint);
    }
    /**
     * @param {?} user
     * @return {?}
     */
    register(user) {
        /** @type {?} */
        const url = this.getUserEndpoint();
        /** @type {?} */
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        user = this.converter.convert(user, USER_REGISTER_FORM_SERIALIZER);
        return this.http.post(url, user, { headers }).pipe(catchError((error) => throwError(error)), this.converter.pipeable(USER_NORMALIZER));
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
     * @param {?} userId
     * @param {?} currentPassword
     * @param {?} newUserId
     * @return {?}
     */
    updateEmail(userId, currentPassword, newUserId) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + UPDATE_EMAIL_ENDPOINT;
        /** @type {?} */
        const httpParams = new HttpParams()
            .set('password', currentPassword)
            .set('newLogin', newUserId);
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http
            .put(url, httpParams, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} oldPassword
     * @param {?} newPassword
     * @return {?}
     */
    updatePassword(userId, oldPassword, newPassword) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId) + UPDATE_PASSWORD_ENDPOINT;
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
    /**
     * @param {?} userId
     * @return {?}
     */
    remove(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId);
        return this.http
            .delete(url)
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    loadConsents(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + CONSENTS_TEMPLATES_ENDPOINT;
        /** @type {?} */
        const headers = new HttpHeaders({ 'Cache-Control': 'no-cache' });
        return this.http
            .get(url, { headers })
            .pipe(catchError((error) => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    giveConsent(userId, consentTemplateId, consentTemplateVersion) {
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + CONSENTS_ENDPOINT;
        /** @type {?} */
        const httpParams = new HttpParams()
            .set('consentTemplateId', consentTemplateId)
            .set('consentTemplateVersion', consentTemplateVersion.toString());
        /** @type {?} */
        const headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
        });
        return this.http
            .post(url, httpParams, { headers })
            .pipe(catchError(error => throwError(error)));
    }
    /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    withdrawConsent(userId, consentCode) {
        /** @type {?} */
        const headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
        });
        /** @type {?} */
        const url = this.getUserEndpoint() + userId + CONSENTS_ENDPOINT + '/' + consentCode;
        return this.http.delete(url, { headers });
    }
}
OccUserAccountAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserAccountAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccUserAccountAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccUserAccountAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccUserAccountAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItYWNjb3VudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvb2NjL29jYy11c2VyLWFjY291bnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQU01QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUMvRSxPQUFPLEVBQ0wsZUFBZSxFQUNmLGdCQUFnQixHQUNqQixNQUFNLGtDQUFrQyxDQUFDO0FBQzFDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWpGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7TUFHN0QsYUFBYSxHQUFHLFFBQVE7O01BQ3hCLHdCQUF3QixHQUFHLDBCQUEwQjs7TUFDckQsdUJBQXVCLEdBQUcsZ0JBQWdCOztNQUMxQyxxQkFBcUIsR0FBRyxRQUFROztNQUNoQyx3QkFBd0IsR0FBRyxXQUFXOztNQUN0QywyQkFBMkIsR0FBRyxtQkFBbUI7O01BQ2pELGlCQUFpQixHQUFHLFdBQVc7QUFHckMsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBQ2hDLFlBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFU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QUM7WUFDOUIsZUFBZSxFQUFFLFVBQVU7U0FDNUIsQ0FBQzs7Y0FDSSxHQUFHLEdBQ1AsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLE1BQU0sR0FBRyxpQkFBaUIsR0FBRyxHQUFHLEdBQUcsV0FBVztRQUN6RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBL0hGLFVBQVU7Ozs7WUE1QkYsVUFBVTtZQVNWLG1CQUFtQjtZQUtuQixnQkFBZ0I7Ozs7Ozs7SUFpQnJCLHFDQUEwQjs7Ozs7SUFDMUIsNkNBQTJDOzs7OztJQUMzQywwQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBDb25zZW50VGVtcGxhdGUsXG4gIENvbnNlbnRUZW1wbGF0ZUxpc3QsXG59IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2FkZGl0aW9uYWwtb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vb2NjL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DTElFTlRfVE9LRU4sXG59IGZyb20gJy4uLy4uL29jYy91dGlscy9pbnRlcmNlcHRvci11dGlsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVTRVJfUkVHSVNURVJfRk9STV9TRVJJQUxJWkVSIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9hY2NvdW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgVXNlckFjY291bnRBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9hY2NvdW50L3VzZXItYWNjb3VudC5hZGFwdGVyJztcbmltcG9ydCB7IFVTRVJfTk9STUFMSVpFUiB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvZGV0YWlscy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJSZWdpc3RlckZvcm1EYXRhIH0gZnJvbSAnLi4vbW9kZWwvdXNlci5tb2RlbCc7XG5cbmNvbnN0IFVTRVJfRU5EUE9JTlQgPSAndXNlcnMvJztcbmNvbnN0IEZPUkdPVF9QQVNTV09SRF9FTkRQT0lOVCA9ICcvZm9yZ290dGVucGFzc3dvcmR0b2tlbnMnO1xuY29uc3QgUkVTRVRfUEFTU1dPUkRfRU5EUE9JTlQgPSAnL3Jlc2V0cGFzc3dvcmQnO1xuY29uc3QgVVBEQVRFX0VNQUlMX0VORFBPSU5UID0gJy9sb2dpbic7XG5jb25zdCBVUERBVEVfUEFTU1dPUkRfRU5EUE9JTlQgPSAnL3Bhc3N3b3JkJztcbmNvbnN0IENPTlNFTlRTX1RFTVBMQVRFU19FTkRQT0lOVCA9ICcvY29uc2VudHRlbXBsYXRlcyc7XG5jb25zdCBDT05TRU5UU19FTkRQT0lOVCA9ICcvY29uc2VudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlckFjY291bnRBZGFwdGVyIGltcGxlbWVudHMgVXNlckFjY291bnRBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlXG4gICkge31cblxuICBwcml2YXRlIGdldFVzZXJFbmRwb2ludCh1c2VySWQ/OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IGVuZHBvaW50ID0gdXNlcklkID8gYCR7VVNFUl9FTkRQT0lOVH0ke3VzZXJJZH1gIDogVVNFUl9FTkRQT0lOVDtcbiAgICByZXR1cm4gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoZW5kcG9pbnQpO1xuICB9XG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXJSZWdpc3RlckZvcm1EYXRhKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVzZXJFbmRwb2ludCgpO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG4gICAgaGVhZGVycyA9IEludGVyY2VwdG9yVXRpbC5jcmVhdGVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgdHJ1ZSwgaGVhZGVycyk7XG4gICAgdXNlciA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQodXNlciwgVVNFUl9SRUdJU1RFUl9GT1JNX1NFUklBTElaRVIpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFVzZXI+KHVybCwgdXNlciwgeyBoZWFkZXJzIH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShVU0VSX05PUk1BTElaRVIpXG4gICAgKTtcbiAgfVxuXG4gIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChGT1JHT1RfUEFTU1dPUkRfRU5EUE9JTlQpO1xuICAgIGNvbnN0IGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldChcbiAgICAgICd1c2VySWQnLFxuICAgICAgdXNlckVtYWlsQWRkcmVzc1xuICAgICk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZCh0b2tlbjogc3RyaW5nLCBuZXdQYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KFJFU0VUX1BBU1NXT1JEX0VORFBPSU5UKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QodXJsLCB7IHRva2VuLCBuZXdQYXNzd29yZCB9LCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICB1cGRhdGVFbWFpbChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjdXJyZW50UGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdVc2VySWQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQodXNlcklkKSArIFVQREFURV9FTUFJTF9FTkRQT0lOVDtcbiAgICBjb25zdCBodHRwUGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldCgncGFzc3dvcmQnLCBjdXJyZW50UGFzc3dvcmQpXG4gICAgICAuc2V0KCduZXdMb2dpbicsIG5ld1VzZXJJZCk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnB1dCh1cmwsIGh0dHBQYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHVwZGF0ZVBhc3N3b3JkKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIG9sZFBhc3N3b3JkOiBzdHJpbmcsXG4gICAgbmV3UGFzc3dvcmQ6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQodXNlcklkKSArIFVQREFURV9QQVNTV09SRF9FTkRQT0lOVDtcbiAgICBjb25zdCBodHRwUGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldCgnb2xkJywgb2xkUGFzc3dvcmQpXG4gICAgICAuc2V0KCduZXcnLCBuZXdQYXNzd29yZCk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnB1dCh1cmwsIGh0dHBQYXJhbXMsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHJlbW92ZSh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCh1c2VySWQpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5kZWxldGU8VXNlcj4odXJsKVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIGxvYWRDb25zZW50cyh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlTGlzdD4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KCkgKyB1c2VySWQgKyBDT05TRU5UU19URU1QTEFURVNfRU5EUE9JTlQ7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7ICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PENvbnNlbnRUZW1wbGF0ZUxpc3Q+KHVybCwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgZ2l2ZUNvbnNlbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY29uc2VudFRlbXBsYXRlSWQ6IHN0cmluZyxcbiAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGU+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCgpICsgdXNlcklkICsgQ09OU0VOVFNfRU5EUE9JTlQ7XG4gICAgY29uc3QgaHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ2NvbnNlbnRUZW1wbGF0ZUlkJywgY29uc2VudFRlbXBsYXRlSWQpXG4gICAgICAuc2V0KCdjb25zZW50VGVtcGxhdGVWZXJzaW9uJywgY29uc2VudFRlbXBsYXRlVmVyc2lvbi50b1N0cmluZygpKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxDb25zZW50VGVtcGxhdGU+KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKGVycm9yID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICB3aXRoZHJhd0NvbnNlbnQodXNlcklkOiBzdHJpbmcsIGNvbnNlbnRDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgfSk7XG4gICAgY29uc3QgdXJsID1cbiAgICAgIHRoaXMuZ2V0VXNlckVuZHBvaW50KCkgKyB1c2VySWQgKyBDT05TRU5UU19FTkRQT0lOVCArICcvJyArIGNvbnNlbnRDb2RlO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwgeyBoZWFkZXJzIH0pO1xuICB9XG59XG4iXX0=