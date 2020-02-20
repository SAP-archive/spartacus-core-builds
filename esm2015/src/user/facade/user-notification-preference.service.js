import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { OCC_USER_ID_CURRENT } from '../../occ/utils/occ-constants';
import { getProcessLoadingFactory } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID, } from '../store/user-state';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
let UserNotificationPreferenceService = class UserNotificationPreferenceService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Returns all notification preferences.
     */
    getPreferences() {
        return this.store.pipe(select(UsersSelectors.getPreferences));
    }
    /**
     * Returns all enabled notification preferences.
     */
    getEnabledPreferences() {
        return this.store.pipe(select(UsersSelectors.getEnabledPreferences));
    }
    /**
     * Loads all notification preferences.
     */
    loadPreferences() {
        this.store.dispatch(new UserActions.LoadNotificationPreferences(OCC_USER_ID_CURRENT));
    }
    /**
     * Clear all notification preferences.
     */
    clearPreferences() {
        this.store.dispatch(new UserActions.ClearNotificationPreferences());
    }
    /**
     * Returns a loading flag for notification preferences.
     */
    getPreferencesLoading() {
        return this.store.pipe(select(UsersSelectors.getPreferencesLoading));
    }
    /**
     * Updating notification preferences.
     * @param preferences a preference list
     */
    updatePreferences(preferences) {
        this.store.dispatch(new UserActions.UpdateNotificationPreferences({
            userId: OCC_USER_ID_CURRENT,
            preferences: preferences,
        }));
    }
    /**
     * Returns a loading flag for updating preferences.
     */
    getUpdatePreferencesResultLoading() {
        return this.store.select(getProcessLoadingFactory(UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID));
    }
    /**
     * Resets the update notification preferences process state. The state needs to be
     * reset after the process concludes, regardless if it's a success or an error.
     */
    resetNotificationPreferences() {
        this.store.dispatch(new UserActions.ResetNotificationPreferences());
    }
};
UserNotificationPreferenceService.ctorParameters = () => [
    { type: Store }
];
UserNotificationPreferenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserNotificationPreferenceService_Factory() { return new UserNotificationPreferenceService(i0.ɵɵinject(i1.Store)); }, token: UserNotificationPreferenceService, providedIn: "root" });
UserNotificationPreferenceService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], UserNotificationPreferenceService);
export { UserNotificationPreferenceService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFFTCwwQ0FBMEMsR0FDM0MsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBTTdCLElBQWEsaUNBQWlDLEdBQTlDLE1BQWEsaUNBQWlDO0lBQzVDLFlBQXNCLEtBQW9EO1FBQXBELFVBQUssR0FBTCxLQUFLLENBQStDO0lBQUcsQ0FBQztJQUU5RTs7T0FFRztJQUNILGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLDJCQUEyQixDQUFDLG1CQUFtQixDQUFDLENBQ2pFLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQkFBZ0I7UUFDZCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlCQUFpQixDQUFDLFdBQXFDO1FBQ3JELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyw2QkFBNkIsQ0FBQztZQUM1QyxNQUFNLEVBQUUsbUJBQW1CO1lBQzNCLFdBQVcsRUFBRSxXQUFXO1NBQ3pCLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQWlDO1FBQy9CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQ3RCLHdCQUF3QixDQUFDLDBDQUEwQyxDQUFDLENBQ3JFLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNEJBQTRCO1FBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDO0NBQ0YsQ0FBQTs7WUFwRThCLEtBQUs7OztBQUR2QixpQ0FBaUM7SUFIN0MsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGlDQUFpQyxDQXFFN0M7U0FyRVksaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBVc2Vyc1NlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5pbXBvcnQge1xuICBTdGF0ZVdpdGhVc2VyLFxuICBVUERBVEVfTk9USUZJQ0FUSU9OX1BSRUZFUkVOQ0VTX1BST0NFU1NfSUQsXG59IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSB9IGZyb20gJy4uLy4uL21vZGVsL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+KSB7fVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFsbCBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMuXG4gICAqL1xuICBnZXRQcmVmZXJlbmNlcygpOiBPYnNlcnZhYmxlPE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFByZWZlcmVuY2VzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgZW5hYmxlZCBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMuXG4gICAqL1xuICBnZXRFbmFibGVkUHJlZmVyZW5jZXMoKTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb25QcmVmZXJlbmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRFbmFibGVkUHJlZmVyZW5jZXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhbGwgbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzLlxuICAgKi9cbiAgbG9hZFByZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZE5vdGlmaWNhdGlvblByZWZlcmVuY2VzKE9DQ19VU0VSX0lEX0NVUlJFTlQpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhciBhbGwgbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzLlxuICAgKi9cbiAgY2xlYXJQcmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5DbGVhck5vdGlmaWNhdGlvblByZWZlcmVuY2VzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICovXG4gIGdldFByZWZlcmVuY2VzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRQcmVmZXJlbmNlc0xvYWRpbmcpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGluZyBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMuXG4gICAqIEBwYXJhbSBwcmVmZXJlbmNlcyBhIHByZWZlcmVuY2UgbGlzdFxuICAgKi9cbiAgdXBkYXRlUHJlZmVyZW5jZXMocHJlZmVyZW5jZXM6IE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXSk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgVXNlckFjdGlvbnMuVXBkYXRlTm90aWZpY2F0aW9uUHJlZmVyZW5jZXMoe1xuICAgICAgICB1c2VySWQ6IE9DQ19VU0VSX0lEX0NVUlJFTlQsXG4gICAgICAgIHByZWZlcmVuY2VzOiBwcmVmZXJlbmNlcyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGluZyBmbGFnIGZvciB1cGRhdGluZyBwcmVmZXJlbmNlcy5cbiAgICovXG4gIGdldFVwZGF0ZVByZWZlcmVuY2VzUmVzdWx0TG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5zZWxlY3QoXG4gICAgICBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkoVVBEQVRFX05PVElGSUNBVElPTl9QUkVGRVJFTkNFU19QUk9DRVNTX0lEKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmVzZXRzIHRoZSB1cGRhdGUgbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzIHByb2Nlc3Mgc3RhdGUuIFRoZSBzdGF0ZSBuZWVkcyB0byBiZVxuICAgKiByZXNldCBhZnRlciB0aGUgcHJvY2VzcyBjb25jbHVkZXMsIHJlZ2FyZGxlc3MgaWYgaXQncyBhIHN1Y2Nlc3Mgb3IgYW4gZXJyb3IuXG4gICAqL1xuICByZXNldE5vdGlmaWNhdGlvblByZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLlJlc2V0Tm90aWZpY2F0aW9uUHJlZmVyZW5jZXMoKSk7XG4gIH1cbn1cbiJdfQ==