/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TITLE_NORMALIZER, USER_NORMALIZER, USER_SERIALIZER, USER_SIGN_UP_SERIALIZER, } from '../../../user/connectors/user/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../utils/interceptor-util';
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
const TITLES_ENDPOINT = 'titles';
export class OccUserAdapter {
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
     * @param {?} userId
     * @return {?}
     */
    load(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId);
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(USER_NORMALIZER));
    }
    /**
     * @param {?} userId
     * @param {?} user
     * @return {?}
     */
    update(userId, user) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId);
        user = this.converter.convert(user, USER_SERIALIZER);
        return this.http.patch(url, user);
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
        user = this.converter.convert(user, USER_SIGN_UP_SERIALIZER);
        return this.http
            .post(url, user, { headers })
            .pipe(this.converter.pipeable(USER_NORMALIZER));
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
        return this.http.post(url, httpParams, { headers });
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
        return this.http.post(url, { token, newPassword }, { headers });
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
        return this.http.put(url, httpParams, { headers });
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
        return this.http.put(url, httpParams, { headers });
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    remove(userId) {
        /** @type {?} */
        const url = this.getUserEndpoint(userId);
        return this.http.delete(url);
    }
    /**
     * @return {?}
     */
    loadTitles() {
        return this.http
            .get(this.occEndpoints.getEndpoint(TITLES_ENDPOINT))
            .pipe(map((/**
         * @param {?} titleList
         * @return {?}
         */
        titleList => titleList.titles)), this.converter.pipeableMany(TITLE_NORMALIZER));
    }
}
OccUserAdapter.decorators = [
    { type: Injectable }
];
/** @nocollapse */
OccUserAdapter.ctorParameters = () => [
    { type: HttpClient },
    { type: OccEndpointsService },
    { type: ConverterService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXIuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixlQUFlLEVBQ2YsdUJBQXVCLEdBQ3hCLE1BQU0sMENBQTBDLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsR0FDakIsTUFBTSw4QkFBOEIsQ0FBQzs7TUFFaEMsYUFBYSxHQUFHLFFBQVE7O01BQ3hCLHdCQUF3QixHQUFHLDBCQUEwQjs7TUFDckQsdUJBQXVCLEdBQUcsZ0JBQWdCOztNQUMxQyxxQkFBcUIsR0FBRyxRQUFROztNQUNoQyx3QkFBd0IsR0FBRyxXQUFXOztNQUN0QyxlQUFlLEdBQUcsUUFBUTtBQUdoQyxNQUFNLE9BQU8sY0FBYzs7Ozs7O0lBQ3pCLFlBQ1ksSUFBZ0IsRUFDaEIsWUFBaUMsRUFDakMsU0FBMkI7UUFGM0IsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixpQkFBWSxHQUFaLFlBQVksQ0FBcUI7UUFDakMsY0FBUyxHQUFULFNBQVMsQ0FBa0I7SUFDcEMsQ0FBQzs7Ozs7O0lBRUksZUFBZSxDQUFDLE1BQWU7O2NBQy9CLFFBQVEsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdB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QUFJLENBQ0gsR0FBRzs7OztRQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQyxFQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUM5QyxDQUFDO0lBQ04sQ0FBQzs7O1lBeEdGLFVBQVU7Ozs7WUEzQkYsVUFBVTtZQWNWLG1CQUFtQjtZQUZuQixnQkFBZ0I7Ozs7Ozs7SUFrQnJCLDhCQUEwQjs7Ozs7SUFDMUIsc0NBQTJDOzs7OztJQUMzQyxtQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyLCBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBUSVRMRV9OT1JNQUxJWkVSLFxuICBVU0VSX05PUk1BTElaRVIsXG4gIFVTRVJfU0VSSUFMSVpFUixcbiAgVVNFUl9TSUdOX1VQX1NFUklBTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy91c2VyL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgVXNlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvdXNlci91c2VyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NMSUVOVF9UT0tFTixcbn0gZnJvbSAnLi4vLi4vdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5cbmNvbnN0IFVTRVJfRU5EUE9JTlQgPSAndXNlcnMvJztcbmNvbnN0IEZPUkdPVF9QQVNTV09SRF9FTkRQT0lOVCA9ICcvZm9yZ290dGVucGFzc3dvcmR0b2tlbnMnO1xuY29uc3QgUkVTRVRfUEFTU1dPUkRfRU5EUE9JTlQgPSAnL3Jlc2V0cGFzc3dvcmQnO1xuY29uc3QgVVBEQVRFX0VNQUlMX0VORFBPSU5UID0gJy9sb2dpbic7XG5jb25zdCBVUERBVEVfUEFTU1dPUkRfRU5EUE9JTlQgPSAnL3Bhc3N3b3JkJztcbmNvbnN0IFRJVExFU19FTkRQT0lOVCA9ICd0aXRsZXMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlckFkYXB0ZXIgaW1wbGVtZW50cyBVc2VyQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRVc2VyRW5kcG9pbnQodXNlcklkPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IHVzZXJJZCA/IGAke1VTRVJfRU5EUE9JTlR9JHt1c2VySWR9YCA6IFVTRVJfRU5EUE9JTlQ7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGVuZHBvaW50KTtcbiAgfVxuXG4gIGxvYWQodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCh1c2VySWQpO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlVzZXI+KHVybClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFVTRVJfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgdXBkYXRlKHVzZXJJZDogc3RyaW5nLCB1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KHVzZXJJZCk7XG4gICAgdXNlciA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQodXNlciwgVVNFUl9TRVJJQUxJWkVSKTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKHVybCwgdXNlcik7XG4gIH1cblxuICByZWdpc3Rlcih1c2VyOiBVc2VyU2lnblVwKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSB0aGlzLmdldFVzZXJFbmRwb2ludCgpO1xuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSk7XG4gICAgaGVhZGVycyA9IEludGVyY2VwdG9yVXRpbC5jcmVhdGVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgdHJ1ZSwgaGVhZGVycyk7XG4gICAgdXNlciA9IHRoaXMuY29udmVydGVyLmNvbnZlcnQodXNlciwgVVNFUl9TSUdOX1VQX1NFUklBTElaRVIpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8VXNlcj4odXJsLCB1c2VyLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFVTRVJfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgcmVxdWVzdEZvcmdvdFBhc3N3b3JkRW1haWwodXNlckVtYWlsQWRkcmVzczogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KEZPUkdPVF9QQVNTV09SRF9FTkRQT0lOVCk7XG4gICAgY29uc3QgaHR0cFBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKCkuc2V0KFxuICAgICAgJ3VzZXJJZCcsXG4gICAgICB1c2VyRW1haWxBZGRyZXNzXG4gICAgKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG4gICAgaGVhZGVycyA9IEludGVyY2VwdG9yVXRpbC5jcmVhdGVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgdHJ1ZSwgaGVhZGVycyk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZCh0b2tlbjogc3RyaW5nLCBuZXdQYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KFJFU0VUX1BBU1NXT1JEX0VORFBPSU5UKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgeyB0b2tlbiwgbmV3UGFzc3dvcmQgfSwgeyBoZWFkZXJzIH0pO1xuICB9XG5cbiAgdXBkYXRlRW1haWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY3VycmVudFBhc3N3b3JkOiBzdHJpbmcsXG4gICAgbmV3VXNlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KHVzZXJJZCkgKyBVUERBVEVfRU1BSUxfRU5EUE9JTlQ7XG4gICAgY29uc3QgaHR0cFBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ3Bhc3N3b3JkJywgY3VycmVudFBhc3N3b3JkKVxuICAgICAgLnNldCgnbmV3TG9naW4nLCBuZXdVc2VySWQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pO1xuICB9XG5cbiAgdXBkYXRlUGFzc3dvcmQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkUGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCh1c2VySWQpICsgVVBEQVRFX1BBU1NXT1JEX0VORFBPSU5UO1xuICAgIGNvbnN0IGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdvbGQnLCBvbGRQYXNzd29yZClcbiAgICAgIC5zZXQoJ25ldycsIG5ld1Bhc3N3b3JkKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGh0dHBQYXJhbXMsIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIHJlbW92ZSh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCh1c2VySWQpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlPFVzZXI+KHVybCk7XG4gIH1cblxuICBsb2FkVGl0bGVzKCk6IE9ic2VydmFibGU8VGl0bGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlRpdGxlTGlzdD4odGhpcy5vY2NFbmRwb2ludHMuZ2V0RW5kcG9pbnQoVElUTEVTX0VORFBPSU5UKSlcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAodGl0bGVMaXN0ID0+IHRpdGxlTGlzdC50aXRsZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoVElUTEVfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cbn1cbiJdfQ==