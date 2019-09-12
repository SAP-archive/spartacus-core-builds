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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXIuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixlQUFlLEVBQ2YsdUJBQXVCLEdBQ3hCLE1BQU0sMENBQTBDLENBQUM7QUFFbEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUNMLGVBQWUsRUFDZixnQkFBZ0IsR0FDakIsTUFBTSw4QkFBOEIsQ0FBQztBQUN0QztJQUVFLHdCQUNZLElBQWdCLEVBQ2hCLFlBQWlDLEVBQ2pDLFNBQTJCO1FBRjNCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsaUJBQVksR0FBWixZQUFZLENBQXFCO1FBQ2pDLGNBQVMsR0FBVCxTQUFTLENBQWtCO0lBQ3BDLENBQUM7Ozs7O0lBRUosNkJBQUk7Ozs7SUFBSixVQUFLLE1BQWM7O1lBQ1gsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FBVyxHQUFHLENBQUM7YUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENB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QUMsVUFBQSxTQUFTLElBQUksT0FBQSxTQUFTLENBQUMsTUFBTSxFQUFoQixDQUFnQixFQUFDLEVBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLGdCQUFnQixDQUFDLENBQzlDLENBQUM7SUFDSixDQUFDOztnQkFsR0YsVUFBVTs7OztnQkFuQkYsVUFBVTtnQkFjVixtQkFBbUI7Z0JBRm5CLGdCQUFnQjs7SUEwR3pCLHFCQUFDO0NBQUEsQUFuR0QsSUFtR0M7U0FsR1ksY0FBYzs7Ozs7O0lBRXZCLDhCQUEwQjs7Ozs7SUFDMUIsc0NBQTJDOzs7OztJQUMzQyxtQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyLCBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQge1xuICBUSVRMRV9OT1JNQUxJWkVSLFxuICBVU0VSX05PUk1BTElaRVIsXG4gIFVTRVJfU0VSSUFMSVpFUixcbiAgVVNFUl9TSUdOX1VQX1NFUklBTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy91c2VyL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgVXNlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvdXNlci91c2VyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7XG4gIEludGVyY2VwdG9yVXRpbCxcbiAgVVNFX0NMSUVOVF9UT0tFTixcbn0gZnJvbSAnLi4vLi4vdXRpbHMvaW50ZXJjZXB0b3ItdXRpbCc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlckFkYXB0ZXIgaW1wbGVtZW50cyBVc2VyQWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgndXNlcicsIHsgdXNlcklkIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5nZXQ8T2NjLlVzZXI+KHVybClcbiAgICAgIC5waXBlKHRoaXMuY29udmVydGVyLnBpcGVhYmxlKFVTRVJfTk9STUFMSVpFUikpO1xuICB9XG5cbiAgdXBkYXRlKHVzZXJJZDogc3RyaW5nLCB1c2VyOiBVc2VyKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgndXNlcicsIHsgdXNlcklkIH0pO1xuICAgIHVzZXIgPSB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHVzZXIsIFVTRVJfU0VSSUFMSVpFUik7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wYXRjaCh1cmwsIHVzZXIpO1xuICB9XG5cbiAgcmVnaXN0ZXIodXNlcjogVXNlclNpZ25VcCk6IE9ic2VydmFibGU8VXNlcj4ge1xuICAgIGNvbnN0IHVybDogc3RyaW5nID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCd1c2VyUmVnaXN0ZXInKTtcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0pO1xuICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuICAgIHVzZXIgPSB0aGlzLmNvbnZlcnRlci5jb252ZXJ0KHVzZXIsIFVTRVJfU0lHTl9VUF9TRVJJQUxJWkVSKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PFVzZXI+KHVybCwgdXNlciwgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZSh0aGlzLmNvbnZlcnRlci5waXBlYWJsZShVU0VSX05PUk1BTElaRVIpKTtcbiAgfVxuXG4gIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXJGb3Jnb3RQYXNzd29yZCcpO1xuICAgIGNvbnN0IGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpLnNldChcbiAgICAgICd1c2VySWQnLFxuICAgICAgdXNlckVtYWlsQWRkcmVzc1xuICAgICk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIGhlYWRlcnMgPSBJbnRlcmNlcHRvclV0aWwuY3JlYXRlSGVhZGVyKFVTRV9DTElFTlRfVE9LRU4sIHRydWUsIGhlYWRlcnMpO1xuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIGh0dHBQYXJhbXMsIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIHJlc2V0UGFzc3dvcmQodG9rZW46IHN0cmluZywgbmV3UGFzc3dvcmQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXJSZXNldFBhc3N3b3JkJyk7XG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9KTtcbiAgICBoZWFkZXJzID0gSW50ZXJjZXB0b3JVdGlsLmNyZWF0ZUhlYWRlcihVU0VfQ0xJRU5UX1RPS0VOLCB0cnVlLCBoZWFkZXJzKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHsgdG9rZW4sIG5ld1Bhc3N3b3JkIH0sIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIHVwZGF0ZUVtYWlsKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGN1cnJlbnRQYXNzd29yZDogc3RyaW5nLFxuICAgIG5ld1VzZXJJZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXJVcGRhdGVMb2dpbklkJywgeyB1c2VySWQgfSk7XG4gICAgY29uc3QgaHR0cFBhcmFtczogSHR0cFBhcmFtcyA9IG5ldyBIdHRwUGFyYW1zKClcbiAgICAgIC5zZXQoJ3Bhc3N3b3JkJywgY3VycmVudFBhc3N3b3JkKVxuICAgICAgLnNldCgnbmV3TG9naW4nLCBuZXdVc2VySWQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAucHV0KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pO1xuICB9XG5cbiAgdXBkYXRlUGFzc3dvcmQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgb2xkUGFzc3dvcmQ6IHN0cmluZyxcbiAgICBuZXdQYXNzd29yZDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXJVcGRhdGVQYXNzd29yZCcsIHsgdXNlcklkIH0pO1xuICAgIGNvbnN0IGh0dHBQYXJhbXM6IEh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdvbGQnLCBvbGRQYXNzd29yZClcbiAgICAgIC5zZXQoJ25ldycsIG5ld1Bhc3N3b3JkKTtcbiAgICBjb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJyxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnB1dCh1cmwsIGh0dHBQYXJhbXMsIHsgaGVhZGVycyB9KTtcbiAgfVxuXG4gIHJlbW92ZSh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3VzZXInLCB7IHVzZXJJZCB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZTxVc2VyPih1cmwpO1xuICB9XG5cbiAgbG9hZFRpdGxlcygpOiBPYnNlcnZhYmxlPFRpdGxlW10+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ3RpdGxlcycpO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0PE9jYy5UaXRsZUxpc3Q+KHVybCkucGlwZShcbiAgICAgIG1hcCh0aXRsZUxpc3QgPT4gdGl0bGVMaXN0LnRpdGxlcyksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoVElUTEVfTk9STUFMSVpFUilcbiAgICApO1xuICB9XG59XG4iXX0=