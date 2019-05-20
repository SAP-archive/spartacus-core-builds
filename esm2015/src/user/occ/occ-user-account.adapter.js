/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../occ/utils/interceptor-util';
import { ConverterService } from '../../util/converter.service';
import { TITLE_NORMALIZER, USER_REGISTER_FORM_SERIALIZER, } from '../connectors/account/converters';
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
/** @type {?} */
const TITLES_ENDPOINT = 'titles';
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
     * @return {?}
     */
    loadTitles() {
        return this.http
            .get(this.occEndpoints.getEndpoint(TITLES_ENDPOINT))
            .pipe(catchError((error) => throwError(error.json())), map(titleList => titleList.titles), this.converter.pipeableMany(TITLE_NORMALIZER));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItYWNjb3VudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvb2NjL29jYy11c2VyLWFjY291bnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDL0UsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsR0FDakIsTUFBTSxrQ0FBa0MsQ0FBQztBQUMxQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLDZCQUE2QixHQUM5QixNQUFNLGtDQUFrQyxDQUFDO0FBRTFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7TUFJN0QsYUFBYSxHQUFHLFFBQVE7O01BQ3hCLHdCQUF3QixHQUFHLDBCQUEwQjs7TUFDckQsdUJBQXVCLEdBQUcsZ0JBQWdCOztNQUMxQyxxQkFBcUIsR0FBRyxRQUFROztNQUNoQyx3QkFBd0IsR0FBRyxXQUFXOztNQUN0QywyQkFBMkIsR0FBRyxtQkFBbUI7O01BQ2pELGlCQUFpQixHQUFHLFdBQVc7O01BQy9CLGVBQWUsR0FBRyxRQUFRO0FBR2hDLE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUNoQyxZQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENB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QXdCLEVBQUUsc0JBQXNCLENBQUMsUUFBUSxFQUFFLENBQUM7O2NBQzdELE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztZQUM5QixjQUFjLEVBQUUsbUNBQW1DO1lBQ25ELGVBQWUsRUFBRSxVQUFVO1NBQzVCLENBQUM7UUFDRixPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFrQixHQUFHLEVBQUUsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7YUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQWMsRUFBRSxXQUFtQjs7Y0FDM0MsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGVBQWUsRUFBRSxVQUFVO1NBQzVCLENBQUM7O2NBQ0ksR0FBRyxHQUNQLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxNQUFNLEdBQUcsaUJBQWlCLEdBQUcsR0FBRyxHQUFHLFdBQVc7UUFDekUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7OztZQXpJRixVQUFVOzs7O1lBakNGLFVBQVU7WUFTVixtQkFBbUI7WUFLbkIsZ0JBQWdCOzs7Ozs7O0lBc0JyQixxQ0FBMEI7Ozs7O0lBQzFCLDZDQUEyQzs7Ozs7SUFDM0MsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaXRsZSwgVXNlciB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgQ29uc2VudFRlbXBsYXRlLFxuICBDb25zZW50VGVtcGxhdGVMaXN0LFxufSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9hZGRpdGlvbmFsLW9jYy5tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgSW50ZXJjZXB0b3JVdGlsLFxuICBVU0VfQ0xJRU5UX1RPS0VOLFxufSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQge1xuICBUSVRMRV9OT1JNQUxJWkVSLFxuICBVU0VSX1JFR0lTVEVSX0ZPUk1fU0VSSUFMSVpFUixcbn0gZnJvbSAnLi4vY29ubmVjdG9ycy9hY2NvdW50L2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgVXNlckFjY291bnRBZGFwdGVyIH0gZnJvbSAnLi4vY29ubmVjdG9ycy9hY2NvdW50L3VzZXItYWNjb3VudC5hZGFwdGVyJztcbmltcG9ydCB7IFVTRVJfTk9STUFMSVpFUiB9IGZyb20gJy4uL2Nvbm5lY3RvcnMvZGV0YWlscy9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJSZWdpc3RlckZvcm1EYXRhIH0gZnJvbSAnLi4vbW9kZWwvdXNlci5tb2RlbCc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscyc7XG5cbmNvbnN0IFVTRVJfRU5EUE9JTlQgPSAndXNlcnMvJztcbmNvbnN0IEZPUkdPVF9QQVNTV09SRF9FTkRQT0lOVCA9ICcvZm9yZ290dGVucGFzc3dvcmR0b2tlbnMnO1xuY29uc3QgUkVTRVRfUEFTU1dPUkRfRU5EUE9JTlQgPSAnL3Jlc2V0cGFzc3dvcmQnO1xuY29uc3QgVVBEQVRFX0VNQUlMX0VORFBPSU5UID0gJy9sb2dpbic7XG5jb25zdCBVUERBVEVfUEFTU1dPUkRfRU5EUE9JTlQgPSAnL3Bhc3N3b3JkJztcbmNvbnN0IENPTlNFTlRTX1RFTVBMQVRFU19FTkRQT0lOVCA9ICcvY29uc2VudHRlbXBsYXRlcyc7XG5jb25zdCBDT05TRU5UU19FTkRQT0lOVCA9ICcvY29uc2VudHMnO1xuY29uc3QgVElUTEVTX0VORFBPSU5UID0gJ3RpdGxlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBPY2NVc2VyQWNjb3VudEFkYXB0ZXIgaW1wbGVtZW50cyBVc2VyQWNjb3VudEFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIHByaXZhdGUgZ2V0VXNlckVuZHBvaW50KHVzZXJJZD86IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZW5kcG9pbnQgPSB1c2VySWQgPyBgJHtVU0VSX0VORFBPSU5UfSR7dXNlcklkfWAgOiBVU0VSX0VORFBPSU5UO1xuICAgIHJldHVybiB0aGlzLm9jY0VuZHBvaW50cy5nZXRFbmRwb2ludChlbmRwb2ludCk7XG4gIH1cbiAgcmVnaXN0ZXIodXNlcjogVXNlclJlZ2lzdGVyRm9ybURhdGEpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KCk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbiAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcbiAgICB1c2VyID0gdGhpcy5jb252ZXJ0ZXIuY29udmVydCh1c2VyLCBVU0VSX1JFR0lTVEVSX0ZPUk1fU0VSSUFMSVpFUik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnBvc3Q8VXNlcj4odXJsLCB1c2VyLCB7IGhlYWRlcnMgfSkucGlwZShcbiAgICAgIGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSxcbiAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFVTRVJfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG5cbiAgcmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwodXNlckVtYWlsQWRkcmVzczogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KEZPUkdPVF9QQVNTV09SRF9FTkRQT0lOVCk7XG4gICAgY29uc3QgaHR0cFBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KFxuICAgICAgJ3VzZXJJZCcsXG4gICAgICB1c2VyRW1haWxBZGRyZXNzXG4gICAgKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG4gICAgaGVhZGVycyA9IEludGVyY2VwdG9yVXRpbC5jcmVhdGVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgdHJ1ZSwgaGVhZGVycyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3QodXJsLCBodHRwUGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICByZXNldFBhc3N3b3JkKHRva2VuOiBzdHJpbmcsIG5ld1Bhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoUkVTRVRfUEFTU1dPUkRfRU5EUE9JTlQpO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG4gICAgaGVhZGVycyA9IEludGVyY2VwdG9yVXRpbC5jcmVhdGVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgdHJ1ZSwgaGVhZGVycyk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdCh1cmwsIHsgdG9rZW4sIG5ld1Bhc3N3b3JkIH0sIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUoY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHVwZGF0ZUVtYWlsKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGN1cnJlbnRQYXNzd29yZDogc3RyaW5nLFxuICAgIG5ld1VzZXJJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCh1c2VySWQpICsgVVBEQVRFX0VNQUlMX0VORFBPSU5UO1xuICAgIGNvbnN0IGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdwYXNzd29yZCcsIGN1cnJlbnRQYXNzd29yZClcbiAgICAgIC5zZXQoJ25ld0xvZ2luJywgbmV3VXNlcklkKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgdXBkYXRlUGFzc3dvcmQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkUGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCh1c2VySWQpICsgVVBEQVRFX1BBU1NXT1JEX0VORFBPSU5UO1xuICAgIGNvbnN0IGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdvbGQnLCBvbGRQYXNzd29yZClcbiAgICAgIC5zZXQoJ25ldycsIG5ld1Bhc3N3b3JkKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucHV0KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgcmVtb3ZlKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KHVzZXJJZCk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmRlbGV0ZTxVc2VyPih1cmwpXG4gICAgICAucGlwZShjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSkpO1xuICB9XG5cbiAgbG9hZFRpdGxlcygpOiBPYnNlcnZhYmxlPFRpdGxlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5UaXRsZUxpc3Q+KHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KFRJVExFU19FTkRQT0lOVCkpXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvci5qc29uKCkpKSxcbiAgICAgICAgbWFwKHRpdGxlTGlzdCA9PiB0aXRsZUxpc3QudGl0bGVzKSxcbiAgICAgICAgdGhpcy5jb252ZXJ0ZXIucGlwZWFibGVNYW55KFRJVExFX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgbG9hZENvbnNlbnRzKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVMaXN0PiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5nZXRVc2VyRW5kcG9pbnQoKSArIHVzZXJJZCArIENPTlNFTlRTX1RFTVBMQVRFU19FTkRQT0lOVDtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHsgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8Q29uc2VudFRlbXBsYXRlTGlzdD4odXJsLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cblxuICBnaXZlQ29uc2VudChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjb25zZW50VGVtcGxhdGVJZDogc3RyaW5nLFxuICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IG51bWJlclxuICApOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KCkgKyB1c2VySWQgKyBDT05TRU5UU19FTkRQT0lOVDtcbiAgICBjb25zdCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldCgnY29uc2VudFRlbXBsYXRlSWQnLCBjb25zZW50VGVtcGxhdGVJZClcbiAgICAgIC5zZXQoJ2NvbnNlbnRUZW1wbGF0ZVZlcnNpb24nLCBjb25zZW50VGVtcGxhdGVWZXJzaW9uLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PENvbnNlbnRUZW1wbGF0ZT4odXJsLCBodHRwUGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoZXJyb3IgPT4gdGhyb3dFcnJvcihlcnJvcikpKTtcbiAgfVxuXG4gIHdpdGhkcmF3Q29uc2VudCh1c2VySWQ6IHN0cmluZywgY29uc2VudENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDYWNoZS1Db250cm9sJzogJ25vLWNhY2hlJyxcbiAgICB9KTtcbiAgICBjb25zdCB1cmwgPVxuICAgICAgdGhpcy5nZXRVc2VyRW5kcG9pbnQoKSArIHVzZXJJZCArIENPTlNFTlRTX0VORFBPSU5UICsgJy8nICsgY29uc2VudENvZGU7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5kZWxldGUodXJsLCB7IGhlYWRlcnMgfSk7XG4gIH1cbn1cbiJdfQ==