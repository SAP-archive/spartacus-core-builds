/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserNotificationPreferenceConnector } from '../../connectors/notification-preference/user-notification-preference.connector';
import { UserActions } from '../actions/index';
var NotificationPreferenceEffects = /** @class */ (function () {
    function NotificationPreferenceEffects(actions$, connector) {
        var _this = this;
        this.actions$ = actions$;
        this.connector = connector;
        this.loadPreferences$ = this.actions$.pipe(ofType(UserActions.LOAD_NOTIFICATION_PREFERENCES), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.connector.loadAll(payload).pipe(map((/**
             * @param {?} preferences
             * @return {?}
             */
            function (preferences) {
                return new UserActions.LoadNotificationPreferencesSuccess(preferences);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.LoadNotificationPreferencesFail(makeErrorSerializable(error)));
            })));
        })));
        this.updatePreferences$ = this.actions$.pipe(ofType(UserActions.UPDATE_NOTIFICATION_PREFERENCES), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.connector.update(payload.userId, payload.preferences).pipe(map((/**
             * @return {?}
             */
            function () {
                return new UserActions.UpdateNotificationPreferencesSuccess(payload.preferences);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.UpdateNotificationPreferencesFail(makeErrorSerializable(error)));
            })));
        })));
    }
    NotificationPreferenceEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NotificationPreferenceEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserNotificationPreferenceConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], NotificationPreferenceEffects.prototype, "loadPreferences$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], NotificationPreferenceEffects.prototype, "updatePreferences$", void 0);
    return NotificationPreferenceEffects;
}());
export { NotificationPreferenceEffects };
if (false) {
    /** @type {?} */
    NotificationPreferenceEffects.prototype.loadPreferences$;
    /** @type {?} */
    NotificationPreferenceEffects.prototype.updatePreferences$;
    /**
     * @type {?}
     * @private
     */
    NotificationPreferenceEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    NotificationPreferenceEffects.prototype.connector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXByZWZlcmVuY2UuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDdEksT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DO0lBa0RFLHVDQUNVLFFBQWlCLEVBQ2pCLFNBQThDO1FBRnhELGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixjQUFTLEdBQVQsU0FBUyxDQUFxQztRQWpEeEQscUJBQWdCLEdBRVosSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsNkJBQTZCLENBQUMsRUFDakQsR0FBRzs7OztRQUFDLFVBQUMsTUFBK0MsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQ3hFLFNBQVM7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZixPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FDbEMsR0FBRzs7OztZQUNELFVBQUEsV0FBVztnQkFDVCxPQUFBLElBQUksV0FBVyxDQUFDLGtDQUFrQyxDQUFDLFdBQVcsQ0FBQztZQUEvRCxDQUErRCxFQUNsRSxFQUNELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsK0JBQStCLENBQzdDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUM3QixDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0Y7UUFaRCxDQVlDLEVBQ0YsQ0FDRixDQUFDO1FBR0YsdUJBQWtCLEdBRWQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsK0JBQStCLENBQUMsRUFDbkQsR0FBRzs7OztRQUFDLFVBQUMsTUFBaUQsSUFBSyxPQUFBLE1BQU0sQ0FBQyxPQUFPLEVBQWQsQ0FBYyxFQUFDLEVBQzFFLFFBQVE7Ozs7UUFBQyxVQUFBLE9BQU87WUFDZCxPQUFBLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FDN0QsR0FBRzs7O1lBQ0Q7Z0JBQ0UsT0FBQSxJQUFJLFdBQVcsQ0FBQyxvQ0FBb0MsQ0FDbEQsT0FBTyxDQUFDLFdBQVcsQ0FDcEI7WUFGRCxDQUVDLEVBQ0osRUFDRCxVQUFVOzs7O1lBQUMsVUFBQSxLQUFLO2dCQUNkLE9BQUEsRUFBRSxDQUNBLElBQUksV0FBVyxDQUFDLGlDQUFpQyxDQUMvQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRjtZQUpELENBSUMsRUFDRixDQUNGO1FBZEQsQ0FjQyxFQUNGLENBQ0YsQ0FBQztJQUtDLENBQUM7O2dCQXJETCxVQUFVOzs7O2dCQVBGLE9BQU87Z0JBSVAsbUNBQW1DOztJQU0xQztRQURDLE1BQU0sRUFBRTswQ0FDUyxVQUFVOzJFQW9CMUI7SUFHRjtRQURDLE1BQU0sRUFBRTswQ0FDVyxVQUFVOzZFQXNCNUI7SUFNSixvQ0FBQztDQUFBLEFBdERELElBc0RDO1NBckRZLDZCQUE2Qjs7O0lBQ3hDLHlEQXFCRTs7SUFFRiwyREF1QkU7Ozs7O0lBR0EsaURBQXlCOzs7OztJQUN6QixrREFBc0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvbm90aWZpY2F0aW9uLXByZWZlcmVuY2UvdXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvblByZWZlcmVuY2VFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRQcmVmZXJlbmNlcyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX05PVElGSUNBVElPTl9QUkVGRVJFTkNFUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWROb3RpZmljYXRpb25QcmVmZXJlbmNlcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIHN3aXRjaE1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNvbm5lY3Rvci5sb2FkQWxsKHBheWxvYWQpLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICBwcmVmZXJlbmNlcyA9PlxuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWROb3RpZmljYXRpb25QcmVmZXJlbmNlc1N1Y2Nlc3MocHJlZmVyZW5jZXMpXG4gICAgICAgICksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkTm90aWZpY2F0aW9uUHJlZmVyZW5jZXNGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVQcmVmZXJlbmNlcyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5VUERBVEVfTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuVXBkYXRlTm90aWZpY2F0aW9uUHJlZmVyZW5jZXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+XG4gICAgICB0aGlzLmNvbm5lY3Rvci51cGRhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQucHJlZmVyZW5jZXMpLnBpcGUoXG4gICAgICAgIG1hcChcbiAgICAgICAgICAoKSA9PlxuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZU5vdGlmaWNhdGlvblByZWZlcmVuY2VzU3VjY2VzcyhcbiAgICAgICAgICAgICAgcGF5bG9hZC5wcmVmZXJlbmNlc1xuICAgICAgICAgICAgKVxuICAgICAgICApLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuVXBkYXRlTm90aWZpY2F0aW9uUHJlZmVyZW5jZXNGYWlsKFxuICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBjb25uZWN0b3I6IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==