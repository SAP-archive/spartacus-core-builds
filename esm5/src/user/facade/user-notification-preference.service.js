/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { OCC_USER_ID_CURRENT } from '../../occ/utils/occ-constants';
import { getProcessLoadingFactory } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID, } from '../store/user-state';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var UserNotificationPreferenceService = /** @class */ (function () {
    function UserNotificationPreferenceService(store) {
        this.store = store;
    }
    /**
     * Returns all notification preferences.
     */
    /**
     * Returns all notification preferences.
     * @return {?}
     */
    UserNotificationPreferenceService.prototype.getPreferences = /**
     * Returns all notification preferences.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getPreferences));
    };
    /**
     * Returns all enabled notification preferences.
     */
    /**
     * Returns all enabled notification preferences.
     * @return {?}
     */
    UserNotificationPreferenceService.prototype.getEnabledPreferences = /**
     * Returns all enabled notification preferences.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getEnabledPreferences));
    };
    /**
     * Loads all notification preferences.
     */
    /**
     * Loads all notification preferences.
     * @return {?}
     */
    UserNotificationPreferenceService.prototype.loadPreferences = /**
     * Loads all notification preferences.
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.LoadNotificationPreferences(OCC_USER_ID_CURRENT));
    };
    /**
     * Clear all notification preferences.
     */
    /**
     * Clear all notification preferences.
     * @return {?}
     */
    UserNotificationPreferenceService.prototype.clearPreferences = /**
     * Clear all notification preferences.
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.ClearNotificationPreferences());
    };
    /**
     * Returns a loading flag for notification preferences.
     */
    /**
     * Returns a loading flag for notification preferences.
     * @return {?}
     */
    UserNotificationPreferenceService.prototype.getPreferencesLoading = /**
     * Returns a loading flag for notification preferences.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(UsersSelectors.getPreferencesLoading));
    };
    /**
     * Updating notification preferences.
     * @param preferences a preference list
     */
    /**
     * Updating notification preferences.
     * @param {?} preferences a preference list
     * @return {?}
     */
    UserNotificationPreferenceService.prototype.updatePreferences = /**
     * Updating notification preferences.
     * @param {?} preferences a preference list
     * @return {?}
     */
    function (preferences) {
        this.store.dispatch(new UserActions.UpdateNotificationPreferences({
            userId: OCC_USER_ID_CURRENT,
            preferences: preferences,
        }));
    };
    /**
     * Returns a loading flag for updating preferences.
     */
    /**
     * Returns a loading flag for updating preferences.
     * @return {?}
     */
    UserNotificationPreferenceService.prototype.getUpdatePreferencesResultLoading = /**
     * Returns a loading flag for updating preferences.
     * @return {?}
     */
    function () {
        return this.store.select(getProcessLoadingFactory(UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID));
    };
    /**
     * Resets the update notification preferences process state. The state needs to be
     * reset after the process concludes, regardless if it's a success or an error.
     */
    /**
     * Resets the update notification preferences process state. The state needs to be
     * reset after the process concludes, regardless if it's a success or an error.
     * @return {?}
     */
    UserNotificationPreferenceService.prototype.resetNotificationPreferences = /**
     * Resets the update notification preferences process state. The state needs to be
     * reset after the process concludes, regardless if it's a success or an error.
     * @return {?}
     */
    function () {
        this.store.dispatch(new UserActions.ResetNotificationPreferences());
    };
    UserNotificationPreferenceService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    UserNotificationPreferenceService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ UserNotificationPreferenceService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UserNotificationPreferenceService_Factory() { return new UserNotificationPreferenceService(i0.ɵɵinject(i1.Store)); }, token: UserNotificationPreferenceService, providedIn: "root" });
    return UserNotificationPreferenceService;
}());
export { UserNotificationPreferenceService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    UserNotificationPreferenceService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFFTCwwQ0FBMEMsR0FDM0MsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBRzdCO0lBSUUsMkNBQXNCLEtBQW9EO1FBQXBELFVBQUssR0FBTCxLQUFLLENBQStDO0lBQUcsQ0FBQztJQUU5RTs7T0FFRzs7Ozs7SUFDSCwwREFBYzs7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGlFQUFxQjs7OztJQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILDJEQUFlOzs7O0lBQWY7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsMkJBQTJCLENBQUMsbUJBQW1CLENBQUMsQ0FDakUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw0REFBZ0I7Ozs7SUFBaEI7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILGlFQUFxQjs7OztJQUFyQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsNkRBQWlCOzs7OztJQUFqQixVQUFrQixXQUFxQztRQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsNkJBQTZCLENBQUM7WUFDNUMsTUFBTSxFQUFFLG1CQUFtQjtZQUMzQixXQUFXLEVBQUUsV0FBVztTQUN6QixDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCw2RUFBaUM7Ozs7SUFBakM7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN0Qix3QkFBd0IsQ0FBQywwQ0FBMEMsQ0FBQyxDQUNyRSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsd0VBQTRCOzs7OztJQUE1QjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDOztnQkF2RUYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFmZ0IsS0FBSzs7OzRDQUR0QjtDQXNGQyxBQXhFRCxJQXdFQztTQXJFWSxpQ0FBaUM7Ozs7OztJQUNoQyxrREFBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT0NDX1VTRVJfSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIFN0YXRlV2l0aFVzZXIsXG4gIFVQREFURV9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVNfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25QcmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvbm90aWZpY2F0aW9uLXByZWZlcmVuY2UubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4pIHt9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICovXG4gIGdldFByZWZlcmVuY2VzKCk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0UHJlZmVyZW5jZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBlbmFibGVkIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICovXG4gIGdldEVuYWJsZWRQcmVmZXJlbmNlcygpOiBPYnNlcnZhYmxlPE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldEVuYWJsZWRQcmVmZXJlbmNlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIGFsbCBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMuXG4gICAqL1xuICBsb2FkUHJlZmVyZW5jZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkTm90aWZpY2F0aW9uUHJlZmVyZW5jZXMoT0NDX1VTRVJfSURfQ1VSUkVOVClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMuXG4gICAqL1xuICBjbGVhclByZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyTm90aWZpY2F0aW9uUHJlZmVyZW5jZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3Igbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzLlxuICAgKi9cbiAgZ2V0UHJlZmVyZW5jZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFByZWZlcmVuY2VzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0aW5nIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICogQHBhcmFtIHByZWZlcmVuY2VzIGEgcHJlZmVyZW5jZSBsaXN0XG4gICAqL1xuICB1cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlczogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVOb3RpZmljYXRpb25QcmVmZXJlbmNlcyh7XG4gICAgICAgIHVzZXJJZDogT0NDX1VTRVJfSURfQ1VSUkVOVCxcbiAgICAgICAgcHJlZmVyZW5jZXM6IHByZWZlcmVuY2VzLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIHVwZGF0aW5nIHByZWZlcmVuY2VzLlxuICAgKi9cbiAgZ2V0VXBkYXRlUHJlZmVyZW5jZXNSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChcbiAgICAgIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeShVUERBVEVfTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VTX1BST0NFU1NfSUQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIHVwZGF0ZSBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMgcHJvY2VzcyBzdGF0ZS4gVGhlIHN0YXRlIG5lZWRzIHRvIGJlXG4gICAqIHJlc2V0IGFmdGVyIHRoZSBwcm9jZXNzIGNvbmNsdWRlcywgcmVnYXJkbGVzcyBpZiBpdCdzIGEgc3VjY2VzcyBvciBhbiBlcnJvci5cbiAgICovXG4gIHJlc2V0Tm90aWZpY2F0aW9uUHJlZmVyZW5jZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuUmVzZXROb3RpZmljYXRpb25QcmVmZXJlbmNlcygpKTtcbiAgfVxufVxuIl19