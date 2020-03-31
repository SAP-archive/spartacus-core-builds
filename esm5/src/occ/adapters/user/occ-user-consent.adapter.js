import { __decorate } from "tslib";
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { CONSENT_TEMPLATE_NORMALIZER } from '../../../user/connectors/consent/converters';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
var OccUserConsentAdapter = /** @class */ (function () {
    function OccUserConsentAdapter(http, occEndpoints, converter) {
        this.http = http;
        this.occEndpoints = occEndpoints;
        this.converter = converter;
    }
    OccUserConsentAdapter.prototype.loadConsents = function (userId) {
        var url = this.occEndpoints.getUrl('consentTemplates', { userId: userId });
        var headers = new HttpHeaders({ 'Cache-Control': 'no-cache' });
        return this.http
            .get(url, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }), map(function (consentList) { return consentList.consentTemplates; }), this.converter.pipeableMany(CONSENT_TEMPLATE_NORMALIZER));
    };
    OccUserConsentAdapter.prototype.giveConsent = function (userId, consentTemplateId, consentTemplateVersion) {
        var url = this.occEndpoints.getUrl('consents', { userId: userId });
        var httpParams = new HttpParams()
            .set('consentTemplateId', consentTemplateId)
            .set('consentTemplateVersion', consentTemplateVersion.toString());
        var headers = new HttpHeaders({
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
        });
        return this.http
            .post(url, httpParams, { headers: headers })
            .pipe(catchError(function (error) { return throwError(error); }), this.converter.pipeable(CONSENT_TEMPLATE_NORMALIZER));
    };
    OccUserConsentAdapter.prototype.withdrawConsent = function (userId, consentCode) {
        var headers = new HttpHeaders({
            'Cache-Control': 'no-cache',
        });
        var url = this.occEndpoints.getUrl('consentDetail', {
            userId: userId,
            consentId: consentCode,
        });
        return this.http.delete(url, { headers: headers });
    };
    OccUserConsentAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: OccEndpointsService },
        { type: ConverterService }
    ]; };
    OccUserConsentAdapter = __decorate([
        Injectable()
    ], OccUserConsentAdapter);
    return OccUserConsentAdapter;
}());
export { OccUserConsentAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItY29uc2VudC5hZGFwdGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL29jYy9hZGFwdGVycy91c2VyL29jYy11c2VyLWNvbnNlbnQuYWRhcHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDM0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFFMUYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFHM0U7SUFDRSwrQkFDWSxJQUFnQixFQUNoQixZQUFpQyxFQUNqQyxTQUEyQjtRQUYzQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGlCQUFZLEdBQVosWUFBWSxDQUFxQjtRQUNqQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtJQUNwQyxDQUFDO0lBRUosNENBQVksR0FBWixVQUFhLE1BQWM7UUFDekIsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7UUFDckUsSUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxlQUFlLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztRQUNqRSxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsR0FBRyxDQUEwQixHQUFHLEVBQUUsRUFBRSxPQUFPLFNBQUEsRUFBRSxDQUFDO2FBQzlDLElBQUksQ0FDSCxVQUFVLENBQUMsVUFBQyxLQUFVLElBQUssT0FBQSxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQWpCLENBQWlCLENBQUMsRUFDN0MsR0FBRyxDQUFDLFVBQUMsV0FBVyxJQUFLLE9BQUEsV0FBVyxDQUFDLGdCQUFnQixFQUE1QixDQUE0QixDQUFDLEVBQ2xELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLDJCQUEyQixDQUFDLENBQ3pELENBQUM7SUFDTixDQUFDO0lBRUQsMkNBQVcsR0FBWCxVQUNFLE1BQWMsRUFDZCxpQkFBeUIsRUFDekIsc0JBQThCO1FBRTlCLElBQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFNLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRTthQUNoQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsaUJBQWlCLENBQUM7YUFDM0MsR0FBRyxDQUFDLHdCQUF3QixFQUFFLHNCQUFzQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDcEUsSUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsY0FBYyxFQUFFLG1DQUFtQztZQUNuRCxlQUFlLEVBQUUsVUFBVTtTQUM1QixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQyxJQUFJO2FBQ2IsSUFBSSxDQUFzQixHQUFHLEVBQUUsVUFBVSxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQzthQUN2RCxJQUFJLENBQ0gsVUFBVSxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixDQUFDLEVBQ3hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLDJCQUEyQixDQUFDLENBQ3JELENBQUM7SUFDTixDQUFDO0lBRUQsK0NBQWUsR0FBZixVQUFnQixNQUFjLEVBQUUsV0FBbUI7UUFDakQsSUFBTSxPQUFPLEdBQUcsSUFBSSxXQUFXLENBQUM7WUFDOUIsZUFBZSxFQUFFLFVBQVU7U0FDNUIsQ0FBQyxDQUFDO1FBQ0gsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO1lBQ3BELE1BQU0sUUFBQTtZQUNOLFNBQVMsRUFBRSxXQUFXO1NBQ3ZCLENBQUMsQ0FBQztRQUVILE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2dCQWhEaUIsVUFBVTtnQkFDRixtQkFBbUI7Z0JBQ3RCLGdCQUFnQjs7SUFKNUIscUJBQXFCO1FBRGpDLFVBQVUsRUFBRTtPQUNBLHFCQUFxQixDQW1EakM7SUFBRCw0QkFBQztDQUFBLEFBbkRELElBbURDO1NBbkRZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUGFyYW1zIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5pbXBvcnQgeyBDT05TRU5UX1RFTVBMQVRFX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvY29uc2VudC9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IFVzZXJDb25zZW50QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9jb25zZW50L3VzZXItY29uc2VudC5hZGFwdGVyJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE9jY1VzZXJDb25zZW50QWRhcHRlciBpbXBsZW1lbnRzIFVzZXJDb25zZW50QWRhcHRlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50LFxuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZVxuICApIHt9XG5cbiAgbG9hZENvbnNlbnRzKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnY29uc2VudFRlbXBsYXRlcycsIHsgdXNlcklkIH0pO1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoeyAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLmdldDxPY2MuQ29uc2VudFRlbXBsYXRlTGlzdD4odXJsLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcjogYW55KSA9PiB0aHJvd0Vycm9yKGVycm9yKSksXG4gICAgICAgIG1hcCgoY29uc2VudExpc3QpID0+IGNvbnNlbnRMaXN0LmNvbnNlbnRUZW1wbGF0ZXMpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZU1hbnkoQ09OU0VOVF9URU1QTEFURV9OT1JNQUxJWkVSKVxuICAgICAgKTtcbiAgfVxuXG4gIGdpdmVDb25zZW50KFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIGNvbnNlbnRUZW1wbGF0ZUlkOiBzdHJpbmcsXG4gICAgY29uc2VudFRlbXBsYXRlVmVyc2lvbjogbnVtYmVyXG4gICk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlPiB7XG4gICAgY29uc3QgdXJsID0gdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdjb25zZW50cycsIHsgdXNlcklkIH0pO1xuICAgIGNvbnN0IGh0dHBQYXJhbXMgPSBuZXcgSHR0cFBhcmFtcygpXG4gICAgICAuc2V0KCdjb25zZW50VGVtcGxhdGVJZCcsIGNvbnNlbnRUZW1wbGF0ZUlkKVxuICAgICAgLnNldCgnY29uc2VudFRlbXBsYXRlVmVyc2lvbicsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb24udG9TdHJpbmcoKSk7XG4gICAgY29uc3QgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBvc3Q8T2NjLkNvbnNlbnRUZW1wbGF0ZT4odXJsLCBodHRwUGFyYW1zLCB7IGhlYWRlcnMgfSlcbiAgICAgIC5waXBlKFxuICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT4gdGhyb3dFcnJvcihlcnJvcikpLFxuICAgICAgICB0aGlzLmNvbnZlcnRlci5waXBlYWJsZShDT05TRU5UX1RFTVBMQVRFX05PUk1BTElaRVIpXG4gICAgICApO1xuICB9XG5cbiAgd2l0aGRyYXdDb25zZW50KHVzZXJJZDogc3RyaW5nLCBjb25zZW50Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIGNvbnN0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgJ0NhY2hlLUNvbnRyb2wnOiAnbm8tY2FjaGUnLFxuICAgIH0pO1xuICAgIGNvbnN0IHVybCA9IHRoaXMub2NjRW5kcG9pbnRzLmdldFVybCgnY29uc2VudERldGFpbCcsIHtcbiAgICAgIHVzZXJJZCxcbiAgICAgIGNvbnNlbnRJZDogY29uc2VudENvZGUsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLmRlbGV0ZSh1cmwsIHsgaGVhZGVycyB9KTtcbiAgfVxufVxuIl19