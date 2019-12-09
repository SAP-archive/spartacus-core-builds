/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NOTIFICATION_PREFERENCE_NORMALIZER, NOTIFICATION_PREFERENCE_SERIALIZER, } from '../../../user/connectors/notification-preference';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
/** @type {?} */
var headers = new HttpHeaders({
    'Content-Type': 'application/json',
});
var OccUserNotificationPreferenceAdapter = /** @class */ (function () {
    function OccUserNotificationPreferenceAdapter(http, converter, occEndpoints) {
        this.http = http;
        this.converter = converter;
        this.occEndpoints = occEndpoints;
    }
    /**
     * @param {?} userId
     * @return {?}
     */
    OccUserNotificationPreferenceAdapter.prototype.loadAll = /**
     * @param {?} userId
     * @return {?}
     */
    function (userId) {
        return this.http
            .get(this.occEndpoints.getUrl('notificationPreference', { userId: userId }), {
            headers: headers,
        })
            .pipe(map((/**
         * @param {?} list
         * @return {?}
         */
        function (list) { return list.preferences; })), this.converter.pipeableMany(NOTIFICATION_PREFERENCE_NORMALIZER), catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    /**
     * @param {?} userId
     * @param {?} preferences
     * @return {?}
     */
    OccUserNotificationPreferenceAdapter.prototype.update = /**
     * @param {?} userId
     * @param {?} preferences
     * @return {?}
     */
    function (userId, preferences) {
        preferences = this.converter.convert(preferences, NOTIFICATION_PREFERENCE_SERIALIZER);
        return this.http
            .patch(this.occEndpoints.getUrl('notificationPreference', { userId: userId }), { preferences: preferences }, { headers: headers })
            .pipe(catchError((/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return throwError(error); })));
    };
    OccUserNotificationPreferenceAdapter.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    OccUserNotificationPreferenceAdapter.ctorParameters = function () { return [
        { type: HttpClient },
        { type: ConverterService },
        { type: OccEndpointsService }
    ]; };
    return OccUserNotificationPreferenceAdapter;
}());
export { OccUserNotificationPreferenceAdapter };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    OccUserNotificationPreferenceAdapter.prototype.http;
    /**
     * @type {?}
     * @protected
     */
    OccUserNotificationPreferenceAdapter.prototype.converter;
    /**
     * @type {?}
     * @protected
     */
    OccUserNotificationPreferenceAdapter.prototype.occEndpoints;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvdXNlci9vY2MtdXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFjLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM5QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBS2pELE9BQU8sRUFDTCxrQ0FBa0MsRUFDbEMsa0NBQWtDLEdBQ25DLE1BQU0sa0RBQWtELENBQUM7QUFFMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7O0lBRXJFLE9BQU8sR0FBRyxJQUFJLFdBQVcsQ0FBQztJQUM5QixjQUFjLEVBQUUsa0JBQWtCO0NBQ25DLENBQUM7QUFFRjtJQUdFLDhDQUNZLElBQWdCLEVBQ2hCLFNBQTJCLEVBQzNCLFlBQWlDO1FBRmpDLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsY0FBUyxHQUFULFNBQVMsQ0FBa0I7UUFDM0IsaUJBQVksR0FBWixZQUFZLENBQXFCO0lBQzFDLENBQUM7Ozs7O0lBRUosc0RBQU87Ozs7SUFBUCxVQUFRLE1BQWM7UUFDcEIsT0FBTyxJQUFJLENBQUMsSUFBSTthQUNiLEdBQUcsQ0FDRixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsRUFDOUQ7WUFDRSxPQUFPLFNBQUE7U0FDUixDQUNGO2FBQ0EsSUFBSSxDQUNILEdBQUc7Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxXQUFXLEVBQWhCLENBQWdCLEVBQUMsRUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsa0NBQWtDLENBQUMsRUFDL0QsVUFBVTs7OztRQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixFQUFDLENBQzlDLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFFRCxxREFBTTs7Ozs7SUFBTixVQUNFLE1BQWMsRUFDZCxXQUFxQztRQUVyQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQ2xDLFdBQVcsRUFDWCxrQ0FBa0MsQ0FDbkMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDLElBQUk7YUFDYixLQUFLLENBQ0osSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLEVBQzlELEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxFQUM1QixFQUFFLE9BQU8sU0FBQSxFQUFFLENBQ1o7YUFDQSxJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUMsS0FBVSxJQUFLLE9BQUEsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFqQixDQUFpQixFQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOztnQkF2Q0YsVUFBVTs7OztnQkFwQkYsVUFBVTtnQkFhVixnQkFBZ0I7Z0JBQ2hCLG1CQUFtQjs7SUE4QzVCLDJDQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0F2Q1ksb0NBQW9DOzs7Ozs7SUFHN0Msb0RBQTBCOzs7OztJQUMxQix5REFBcUM7Ozs7O0lBQ3JDLDREQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSxcbiAgTm90aWZpY2F0aW9uUHJlZmVyZW5jZUxpc3QsXG59IGZyb20gJy4uLy4uLy4uL21vZGVsL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLm1vZGVsJztcbmltcG9ydCB7XG4gIE5PVElGSUNBVElPTl9QUkVGRVJFTkNFX05PUk1BTElaRVIsXG4gIE5PVElGSUNBVElPTl9QUkVGRVJFTkNFX1NFUklBTElaRVIsXG59IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZSc7XG5pbXBvcnQgeyBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi91c2VyL2Nvbm5lY3RvcnMvbm90aWZpY2F0aW9uLXByZWZlcmVuY2UvdXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5hZGFwdGVyJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuXG5jb25zdCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcbiAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbn0pO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgT2NjVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyXG4gIGltcGxlbWVudHMgVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQsXG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzOiBPY2NFbmRwb2ludHNTZXJ2aWNlXG4gICkge31cblxuICBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb25QcmVmZXJlbmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5odHRwXG4gICAgICAuZ2V0PE5vdGlmaWNhdGlvblByZWZlcmVuY2VMaXN0PihcbiAgICAgICAgdGhpcy5vY2NFbmRwb2ludHMuZ2V0VXJsKCdub3RpZmljYXRpb25QcmVmZXJlbmNlJywgeyB1c2VySWQgfSksXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICB9XG4gICAgICApXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKGxpc3QgPT4gbGlzdC5wcmVmZXJlbmNlcyksXG4gICAgICAgIHRoaXMuY29udmVydGVyLnBpcGVhYmxlTWFueShOT1RJRklDQVRJT05fUFJFRkVSRU5DRV9OT1JNQUxJWkVSKSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3I6IGFueSkgPT4gdGhyb3dFcnJvcihlcnJvcikpXG4gICAgICApO1xuICB9XG5cbiAgdXBkYXRlKFxuICAgIHVzZXJJZDogc3RyaW5nLFxuICAgIHByZWZlcmVuY2VzOiBOb3RpZmljYXRpb25QcmVmZXJlbmNlW11cbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHByZWZlcmVuY2VzID0gdGhpcy5jb252ZXJ0ZXIuY29udmVydChcbiAgICAgIHByZWZlcmVuY2VzLFxuICAgICAgTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VfU0VSSUFMSVpFUlxuICAgICk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cFxuICAgICAgLnBhdGNoKFxuICAgICAgICB0aGlzLm9jY0VuZHBvaW50cy5nZXRVcmwoJ25vdGlmaWNhdGlvblByZWZlcmVuY2UnLCB7IHVzZXJJZCB9KSxcbiAgICAgICAgeyBwcmVmZXJlbmNlczogcHJlZmVyZW5jZXMgfSxcbiAgICAgICAgeyBoZWFkZXJzIH1cbiAgICAgIClcbiAgICAgIC5waXBlKGNhdGNoRXJyb3IoKGVycm9yOiBhbnkpID0+IHRocm93RXJyb3IoZXJyb3IpKSk7XG4gIH1cbn1cbiJdfQ==