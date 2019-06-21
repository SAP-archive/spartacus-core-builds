/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import { ConverterService } from '../../../util/converter.service';
import { CONSENT_TEMPLATE_NORMALIZER } from '../../../user/connectors/consent/converters';
/** @type {?} */
var USER_ENDPOINT = 'users/';
/** @type {?} */
var CONSENTS_TEMPLATES_ENDPOINT = '/consenttemplates';
/** @type {?} */
var CONSENTS_ENDPOINT = '/consents';
var OccUserConsentAdapter = /** @class */ (function () {
    function OccUserConsentAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    /**
     * @private
     * @param {?=} userId
     * @return {?}
     */
    OccUserConsentAdapter.prototype.getUserEndpoint = /**
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
    OccUserConsentAdapter.prototype.loadConsents = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        /** @type {?} */
        var url = this.getUserEndpoint(userId) + CONSENTS_TEMPLATES_ENDPOINT;
        /** @type {?} */
        var headers = new HttpHeaders({ 'Cache-Control': 'no-cache' });
        return this.http.get(url, { headers: headers }).pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })), map((/**
         * @param {?} consentList
         * @return {?}
         */
        function (consentList) { return consentList.consentTemplates; })), this.converter.pipeableMany(CONSENT_TEMPLATE_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    OccUserConsentAdapter.prototype.giveConsent = /**
     * @param {?} userId
     * @param {?} consentTemplateId
     * @param {?} consentTemplateVersion
     * @return {?}
     */
    function (userId, consentTemplateId, consentTemplateVersion) {
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + CONSENTS_ENDPOINT;
        /** @type {?} */
        var httpParams = new HttpParams()
            .set('consentTemplateId', consentTemplateId)
            .set('consentTemplateVersion', consentTemplateVersion.toString());
        /** @type {?} */
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
        });
        return this.http
            .post(url, httpParams, { headers: headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })), this.converter.pipeable(CONSENT_TEMPLATE_NORMALIZER));
    };
    /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    OccUserConsentAdapter.prototype.withdrawConsent = /**
     * @param {?} userId
     * @param {?} consentCode
     * @return {?}
     */
    function (userId, consentCode) {
        /** @type {?} */
        var headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
        });
        /** @type {?} */
        var url = this.getUserEndpoint() + userId + CONSENTS_ENDPOINT + '/' + consentCode;
        return this.http.delete(url, { headers: headers });
    };
    OccUserConsentAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccUserConsentAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    return OccUserConsentAdapter;
}());
export { OccUserConsentAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccUserConsentAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccUserConsentAdapter.prototype.occEndpoints;
    /**
     * @type {?}
     * @protected
     */
    OccUserConsentAdapter.prototype.converter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItY29uc2VudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy11c2VyLWNvbnNlbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFJbkUsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7O0lBRXBGLGFBQWEsR0FBRyxRQUFROztJQUN4QiwyQkFBMkIsR0FBRyxtQkFBbUI7O0lBQ2pELGlCQUFpQixHQUFHLFdBQVc7QUFFckM7SUFFRSwrQkFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDOzs7Ozs7SUFFSSwrQ0FBZTs7Ozs7SUFBdkIsVUFBd0IsTUFBZTs7WUFDL0IsUUFBUSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBRyxhQUFhLEdBQUcsTUFBUSxDQUFDLENBQUMsQ0FBQyxhQUFhO1FBQ3JFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakQsQ0FBQzs7Ozs7SUFFRCw0Q0FBWTs7OztJQUFaLFVBQWEsTUFBYzs7WUFDbkIsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEdBQUcsMkJBQTJCOztZQUNoRSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDaEUsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBMEIsR0FBRyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDbEUsVUFBVTs7OztRQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixFQUFDLEVBQzdDLEdBQUc7Ozs7UUFBQyxVQUFBLFdBQVcsSUFBSSxPQUFBLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBNUIsQ0FBNEIsRUFBQyxFQUNoRCxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQywyQkFBMkIsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVELDJDQUFXOzs7Ozs7SUFBWCxVQUNFLE1BQWMsRUFDZCxpQkFBeUIsRUFDekIsc0JBQThCOztZQUV4QixHQUFHLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLE1BQU0sR0FBRyxpQkFBaUI7O1lBQ3pELFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRTthQUNoQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUM7YUFDM0MsR0FBRyxDQUFDLHdCQUF3QixFQUFFLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxDQUFDOztZQUM3RCxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztZQUNuRCxlQUFlLEVBQUUsVUFBVTtTQUM1QixDQUFDO1FBQ0YsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLElBQUksQ0FBc0IsR0FBRyxFQUFFLFVBQVUsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUM7YUFDdkQsSUFBSSxDQUNILFVBQVU7Ozs7UUFBQyxVQUFBLEtBQUssSUFBSSxPQUFBLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxFQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQywyQkFBMkIsQ0FBQyxDQUNyRCxDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRUQsK0NBQWU7Ozs7O0lBQWYsVUFBZ0IsTUFBYyxFQUFFLFdBQW1COztZQUMzQyxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsZUFBZSxFQUFFLFVBQVU7U0FDNUIsQ0FBQzs7WUFDSSxHQUFHLEdBQ1AsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFHLE1BQU0sR0FBRyxpQkFBaUIsR0FBRyxHQUFHLEdBQUcsV0FBVztRQUN6RSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDOztnQkFuREYsVUFBVTs7OztnQkFmRixVQUFVO2dCQUlWLG1CQUFtQjtnQkFDbkIsZ0JBQWdCOztJQThEekIsNEJBQUM7Q0FBQSxBQXBERCxJQW9EQztTQW5EWSxxQkFBcUI7Ozs7OztJQUU5QixxQ0FBMEI7Ozs7O0lBQzFCLDZDQUEyQzs7Ozs7SUFDM0MsMENBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCB0aHJvd0Vycm9yIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJDb25zZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jb25zZW50L3VzZXItY29uc2VudC5hZGFwdGVyJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENPTlNFTlRfVEVNUExBVEVfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jb25zZW50L2NvbnZlcnRlcnMnO1xuXG5jb25zdCBVU0VSX0VORFBPSU5UID0gJ3VzZXJzLyc7XG5jb25zdCBDT05TRU5UU19URU1QTEFURVNfRU5EUE9JTlQgPSAnL2NvbnNlbnR0ZW1wbGF0ZXMnO1xuY29uc3QgQ09OU0VOVFNfRU5EUE9JTlQgPSAnL2NvbnNlbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1VzZXJDb25zZW50QWRhcHRlciBpbXBsZW1lbnRzIFVzZXJDb25zZW50QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgcHJpdmF0ZSBnZXRVc2VyRW5kcG9pbnQodXNlcklkPzogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBlbmRwb2ludCA9IHVzZXJJZCA/IGAke1VTRVJfRU5EUE9JTlR9JHt1c2VySWR9YCA6IFVTRVJfRU5EUE9JTlQ7XG4gICAgcmV0dXJuIHRoaXMub2NjRW5kcG9pbnRzLmdldEVuZHBvaW50KGVuZHBvaW50KTtcbiAgfVxuXG4gIGxvYWRDb25zZW50cyh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICBjb25zdCB1cmwgPSB0aGlzLmdldFVzZXJFbmRwb2ludCh1c2VySWQpICsgQ09OU0VOVFNfVEVNUExBVEVTX0VORFBPSU5UO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQ8T2NjLkNvbnNlbnRUZW1wbGF0ZUxpc3Q+KHVybCwgeyBoZWFkZXJzIH0pLnBpcGUoXG4gICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSksXG4gICAgICBtYXAoY29uc2VudExpc3QgPT4gY29uc2VudExpc3QuY29uc2VudFRlbXBsYXRlcyksXG4gICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ09OU0VOVF9URU1QTEFURV9OT1JNQUxJWkVSKVxuICAgICk7XG4gIH1cblxuICBnaXZlQ29uc2VudChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBjb25zZW50VGVtcGxhdGVJZDogc3RyaW5nLFxuICAgIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IG51bWJlclxuICApOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMuZ2V0VXNlckVuZHBvaW50KCkgKyB1c2VySWQgKyBDT05TRU5UU19FTkRQT0lOVDtcbiAgICBjb25zdCBodHRwUGFyYW1zID0gbmV3IEh0dHBQYXJhbXMoKVxuICAgICAgLnNldCgnY29uc2VudFRlbXBsYXRlSWQnLCBjb25zZW50VGVtcGxhdGVJZClcbiAgICAgIC5zZXQoJ2NvbnNlbnRUZW1wbGF0ZVZlcnNpb24nLCBjb25zZW50VGVtcGxhdGVWZXJzaW9uLnRvU3RyaW5nKCkpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnLFxuICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHBcbiAgICAgIC5wb3N0PE9jYy5Db25zZW50VGVtcGxhdGU+KHVybCwgaHR0cFBhcmFtcywgeyBoZWFkZXJzIH0pXG4gICAgICAucGlwZShcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB0aHJvd0Vycm9yKGVycm9yKSksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlKENPTlNFTlRfVEVNUExBVEVfTk9STUFMSVpFUilcbiAgICAgICk7XG4gIH1cblxuICB3aXRoZHJhd0NvbnNlbnQodXNlcklkOiBzdHJpbmcsIGNvbnNlbnRDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PiB7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgfSk7XG4gICAgY29uc3QgdXJsID1cbiAgICAgIHRoaXMuZ2V0VXNlckVuZHBvaW50KCkgKyB1c2VySWQgKyBDT05TRU5UU19FTkRQT0lOVCArICcvJyArIGNvbnNlbnRDb2RlO1xuICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCwgeyBoZWFkZXJzIH0pO1xuICB9XG59XG4iXX0=