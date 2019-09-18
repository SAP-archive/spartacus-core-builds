/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { TITLE_NORMALIZER, USER_NORMALIZER, USER_SERIALIZER, USER_SIGN_UP_SERIALIZER, } from '../../../user/connectors/user/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { InterceptorUtil, USE_CLIENT_TOKEN, } from '../../utils/interceptor-util';
var OccUserAdapter = /** @class */ (function () {
    function OccUserAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
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
        var url = this.occEndpoints.getUrl('user', { userId: userId });
        return this.http
            .get(url)
            .pipe(this.converter.pipeable(USER_NORMALIZER));
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
        var url = this.occEndpoints.getUrl('user', { userId: userId });
        user = this.converter.convert(user, USER_SERIALIZER);
        return this.http.patch(url, user);
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
        var url = this.occEndpoints.getUrl('userRegister');
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        user = this.converter.convert(user, USER_SIGN_UP_SERIALIZER);
        return this.http
            .post(url, user, { headers: headers })
            .pipe(this.converter.pipeable(USER_NORMALIZER));
    };
    /**
     * @param {?} guid
     * @param {?} password
     * @return {?}
     */
    OccUserAdapter.prototype.registerGuest = /**
     * @param {?} guid
     * @param {?} password
     * @return {?}
     */
    function (guid, password) {
        /** @type {?} */
        var url = this.occEndpoints.getUrl('userRegister');
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        /** @type {?} */
        var httpParams = new HttpParams()
            .set('guid', guid)
            .set('password', password);
        return this.http
            .post(url, httpParams, { headers: headers })
            .pipe(this.converter.pipeable(USER_NORMALIZER));
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
        var url = this.occEndpoints.getUrl('userForgotPassword');
        /** @type {?} */
        var httpParams = new HttpParams().set('userId', userEmailAddress);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http.post(url, httpParams, { headers: headers });
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
        var url = this.occEndpoints.getUrl('userResetPassword');
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/json',
        });
        headers = InterceptorUtil.createHeader(USE_CLIENT_TOKEN, true, headers);
        return this.http.post(url, { token: token, newPassword: newPassword }, { headers: headers });
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
        var url = this.occEndpoints.getUrl('userUpdateLoginId', { userId: userId });
        /** @type {?} */
        var httpParams = new HttpParams()
            .set('password', currentPassword)
            .set('newLogin', newUserId);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.put(url, httpParams, { headers: headers });
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
        var url = this.occEndpoints.getUrl('userUpdatePassword', { userId: userId });
        /** @type {?} */
        var httpParams = new HttpParams()
            .set('old', oldPassword)
            .set('new', newPassword);
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
        });
        return this.http.put(url, httpParams, { headers: headers });
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
        var url = this.occEndpoints.getUrl('user', { userId: userId });
        return this.http.delete(url);
    };
    /**
     * @return {?}
     */
    OccUserAdapter.prototype.loadTitles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = this.occEndpoints.getUrl('titles');
        return this.http.get(url).pipe(map((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXIuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixlQUFlLEVBQ2YsdUJBQXVCLEdBQ3hCLE1BQU0sMENBQTBDLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsR0FDakIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QztJQUVFLHdCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7O0lBRUosNkJBQUk7Ozs7SUFBSixVQUFLLE1BQWM7O1lBQ1gsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBVyxHQUFHLENBQUM7YUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENB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Q0FBQzs7WUFDcEIsT0FBTyxHQUFHLElBQUksV0FBVyxDQUFDO1lBQzlCLGNBQWMsRUFBRSxtQ0FBbUM7U0FDcEQsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7OztJQUVELCtCQUFNOzs7O0lBQU4sVUFBTyxNQUFjOztZQUNiLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO1FBQ3hELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQU8sR0FBRyxDQUFDLENBQUM7SUFDckMsQ0FBQzs7OztJQUVELG1DQUFVOzs7SUFBVjs7WUFDUSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDO1FBQzlDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQWdCLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDM0MsR0FBRzs7OztRQUFDLFVBQUEsU0FBUyxJQUFJLE9BQUEsU0FBUyxDQUFDLE1BQU0sRUFBaEIsQ0FBZ0IsRUFBQyxFQUNsQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUM5QyxDQUFDO0lBQ0osQ0FBQzs7Z0JBbEhGLFVBQVU7Ozs7Z0JBbkJGLFVBQVU7Z0JBY1YsbUJBQW1CO2dCQUZuQixnQkFBZ0I7O0lBMEh6QixxQkFBQztDQUFBLEFBbkhELElBbUhDO1NBbEhZLGNBQWM7Ozs7OztJQUV2Qiw4QkFBMEI7Ozs7O0lBQzFCLHNDQUEyQzs7Ozs7SUFDM0MsbUNBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaXRsZSwgVXNlciwgVXNlclNpZ25VcCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHtcbiAgVElUTEVfTk9STUFMSVpFUixcbiAgVVNFUl9OT1JNQUxJWkVSLFxuICBVU0VSX1NFUklBTElaRVIsXG4gIFVTRVJfU0lHTl9VUF9TRVJJQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvdXNlci9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL3VzZXIvdXNlci5hZGFwdGVyJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5pbXBvcnQge1xuICBJbnRlcmNlcHRvclV0aWwsXG4gIFVTRV9DTElFTlRfVE9LRU4sXG59IGZyb20gJy4uLy4uL3V0aWxzL2ludGVyY2VwdG9yLXV0aWwnO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1VzZXJBZGFwdGVyIGltcGxlbWVudHMgVXNlckFkYXB0ZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudCxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXI6IENvbnZlcnRlclNlcnZpY2VcbiAgKSB7fVxuXG4gIGxvYWQodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXInLCB7IHVzZXJJZCB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE9jYy5Vc2VyPih1cmwpXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShVU0VSX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHVwZGF0ZSh1c2VySWQ6IHN0cmluZywgdXNlcjogVXNlcik6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXInLCB7IHVzZXJJZCB9KTtcbiAgICB1c2VyID0gdGhpcy5jb252ZXJ0ZXIuY29udmVydCh1c2VyLCBVU0VSX1NFUklBTElaRVIpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucGF0Y2godXJsLCB1c2VyKTtcbiAgfVxuXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXJTaWduVXApOiBPYnNlcnZhYmxlPFVzZXI+IHtcbiAgICBjb25zdCB1cmw6IHN0cmluZyA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgndXNlclJlZ2lzdGVyJyk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbiAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcbiAgICB1c2VyID0gdGhpcy5jb252ZXJ0ZXIuY29udmVydCh1c2VyLCBVU0VSX1NJR05fVVBfU0VSSUFMSVpFUik7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAucG9zdDxVc2VyPih1cmwsIHVzZXIsIHsgaGVhZGVycyB9KVxuICAgICAgLnBpcGUodGhpcy5jb252ZXJ0ZXIucGlwZWFibGUoVVNFUl9OT1JNQUxJWkVSKSk7XG4gIH1cblxuICByZWdpc3Rlckd1ZXN0KGd1aWQ6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCd1c2VyUmVnaXN0ZXInKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSk7XG4gICAgaGVhZGVycyA9IEludGVyY2VwdG9yVXRpbC5jcmVhdGVIZWFkZXIoVVNFX0NMSUVOVF9UT0tFTiwgdHJ1ZSwgaGVhZGVycyk7XG5cbiAgICBjb25zdCBodHRwUGFyYW1zOiBIdHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldCgnZ3VpZCcsIGd1aWQpXG4gICAgICAuc2V0KCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PFVzZXI+KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShVU0VSX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXJGb3Jnb3RQYXNzd29yZCcpO1xuICAgIGNvbnN0IGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldChcbiAgICAgICd1c2VySWQnLFxuICAgICAgdXNlckVtYWlsQWRkcmVzc1xuICAgICk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGh0dHBQYXJhbXMsIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQodG9rZW46IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXJSZXNldFBhc3N3b3JkJyk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbiAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHsgdG9rZW4sIG5ld1Bhc3N3b3JkIH0sIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIHVwZGF0ZUVtYWlsKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGN1cnJlbnRQYXNzd29yZDogc3RyaW5nLFxuICAgIG5ld1VzZXJJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXJVcGRhdGVMb2dpbklkJywgeyB1c2VySWQgfSk7XG4gICAgY29uc3QgaHR0cFBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ3Bhc3N3b3JkJywgY3VycmVudFBhc3N3b3JkKVxuICAgICAgLnNldCgnbmV3TG9naW4nLCBuZXdVc2VySWQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pO1xuICB9XG5cbiAgdXBkYXRlUGFzc3dvcmQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkUGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXJVcGRhdGVQYXNzd29yZCcsIHsgdXNlcklkIH0pO1xuICAgIGNvbnN0IGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdvbGQnLCBvbGRQYXNzd29yZClcbiAgICAgIC5zZXQoJ25ldycsIG5ld1Bhc3N3b3JkKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGh0dHBQYXJhbXMsIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIHJlbW92ZSh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXInLCB7IHVzZXJJZCB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxVc2VyPih1cmwpO1xuICB9XG5cbiAgbG9hZFRpdGxlcygpOiBPYnNlcnZhYmxlPFRpdGxlW10+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3RpdGxlcycpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5UaXRsZUxpc3Q+KHVybCkucGlwZShcbiAgICAgIG1hcCh0aXRsZUxpc3QgPT4gdGl0bGVMaXN0LnRpdGxlcyksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoVElUTEVfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG59XG4iXX0=