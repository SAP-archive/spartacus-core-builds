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
var UserNotificationPreferenceService = /** @class */ (function () {
    function UserNotificationPreferenceService(store) {
        this.store = store;
    }
    /**
     * Returns all notification preferences.
     */
    UserNotificationPreferenceService.prototype.getPreferences = function () {
        return this.store.pipe(select(UsersSelectors.getPreferences));
    };
    /**
     * Returns all enabled notification preferences.
     */
    UserNotificationPreferenceService.prototype.getEnabledPreferences = function () {
        return this.store.pipe(select(UsersSelectors.getEnabledPreferences));
    };
    /**
     * Loads all notification preferences.
     */
    UserNotificationPreferenceService.prototype.loadPreferences = function () {
        this.store.dispatch(new UserActions.LoadNotificationPreferences(OCC_USER_ID_CURRENT));
    };
    /**
     * Clear all notification preferences.
     */
    UserNotificationPreferenceService.prototype.clearPreferences = function () {
        this.store.dispatch(new UserActions.ClearNotificationPreferences());
    };
    /**
     * Returns a loading flag for notification preferences.
     */
    UserNotificationPreferenceService.prototype.getPreferencesLoading = function () {
        return this.store.pipe(select(UsersSelectors.getPreferencesLoading));
    };
    /**
     * Updating notification preferences.
     * @param preferences a preference list
     */
    UserNotificationPreferenceService.prototype.updatePreferences = function (preferences) {
        this.store.dispatch(new UserActions.UpdateNotificationPreferences({
            userId: OCC_USER_ID_CURRENT,
            preferences: preferences,
        }));
    };
    /**
     * Returns a loading flag for updating preferences.
     */
    UserNotificationPreferenceService.prototype.getUpdatePreferencesResultLoading = function () {
        return this.store.select(getProcessLoadingFactory(UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID));
    };
    /**
     * Resets the update notification preferences process state. The state needs to be
     * reset after the process concludes, regardless if it's a success or an error.
     */
    UserNotificationPreferenceService.prototype.resetNotificationPreferences = function () {
        this.store.dispatch(new UserActions.ResetNotificationPreferences());
    };
    UserNotificationPreferenceService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    UserNotificationPreferenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserNotificationPreferenceService_Factory() { return new UserNotificationPreferenceService(i0.ɵɵinject(i1.Store)); }, token: UserNotificationPreferenceService, providedIn: "root" });
    UserNotificationPreferenceService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UserNotificationPreferenceService);
    return UserNotificationPreferenceService;
}());
export { UserNotificationPreferenceService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvZmFjYWRlL3VzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUU1QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVwRSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUMzRixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFFTCwwQ0FBMEMsR0FDM0MsTUFBTSxxQkFBcUIsQ0FBQzs7O0FBTTdCO0lBQ0UsMkNBQXNCLEtBQW9EO1FBQXBELFVBQUssR0FBTCxLQUFLLENBQStDO0lBQUcsQ0FBQztJQUU5RTs7T0FFRztJQUNILDBEQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUNoRSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpRUFBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7T0FFRztJQUNILDJEQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsMkJBQTJCLENBQUMsbUJBQW1CLENBQUMsQ0FDakUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNILDREQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpRUFBcUIsR0FBckI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7O09BR0c7SUFDSCw2REFBaUIsR0FBakIsVUFBa0IsV0FBcUM7UUFDckQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLDZCQUE2QixDQUFDO1lBQzVDLE1BQU0sRUFBRSxtQkFBbUI7WUFDM0IsV0FBVyxFQUFFLFdBQVc7U0FDekIsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCw2RUFBaUMsR0FBakM7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUN0Qix3QkFBd0IsQ0FBQywwQ0FBMEMsQ0FBQyxDQUNyRSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILHdFQUE0QixHQUE1QjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLDRCQUE0QixFQUFFLENBQUMsQ0FBQztJQUN0RSxDQUFDOztnQkFuRTRCLEtBQUs7OztJQUR2QixpQ0FBaUM7UUFIN0MsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGlDQUFpQyxDQXFFN0M7NENBdEZEO0NBc0ZDLEFBckVELElBcUVDO1NBckVZLGlDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPQ0NfVVNFUl9JRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgU3RhdGVXaXRoUHJvY2VzcyB9IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvcHJvY2Vzcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRQcm9jZXNzTG9hZGluZ0ZhY3RvcnkgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgVXNlcnNTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgU3RhdGVXaXRoVXNlcixcbiAgVVBEQVRFX05PVElGSUNBVElPTl9QUkVGRVJFTkNFU19QUk9DRVNTX0lELFxufSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblByZWZlcmVuY2UgfSBmcm9tICcuLi8uLi9tb2RlbC9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+Pikge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzLlxuICAgKi9cbiAgZ2V0UHJlZmVyZW5jZXMoKTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb25QcmVmZXJlbmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRQcmVmZXJlbmNlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGVuYWJsZWQgbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzLlxuICAgKi9cbiAgZ2V0RW5hYmxlZFByZWZlcmVuY2VzKCk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0RW5hYmxlZFByZWZlcmVuY2VzKSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgYWxsIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICovXG4gIGxvYWRQcmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWROb3RpZmljYXRpb25QcmVmZXJlbmNlcyhPQ0NfVVNFUl9JRF9DVVJSRU5UKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXIgYWxsIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICovXG4gIGNsZWFyUHJlZmVyZW5jZXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuQ2xlYXJOb3RpZmljYXRpb25QcmVmZXJlbmNlcygpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbG9hZGluZyBmbGFnIGZvciBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMuXG4gICAqL1xuICBnZXRQcmVmZXJlbmNlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0UHJlZmVyZW5jZXNMb2FkaW5nKSk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRpbmcgbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzLlxuICAgKiBAcGFyYW0gcHJlZmVyZW5jZXMgYSBwcmVmZXJlbmNlIGxpc3RcbiAgICovXG4gIHVwZGF0ZVByZWZlcmVuY2VzKHByZWZlcmVuY2VzOiBOb3RpZmljYXRpb25QcmVmZXJlbmNlW10pOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZU5vdGlmaWNhdGlvblByZWZlcmVuY2VzKHtcbiAgICAgICAgdXNlcklkOiBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxuICAgICAgICBwcmVmZXJlbmNlczogcHJlZmVyZW5jZXMsXG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgdXBkYXRpbmcgcHJlZmVyZW5jZXMuXG4gICAqL1xuICBnZXRVcGRhdGVQcmVmZXJlbmNlc1Jlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KFxuICAgICAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFVQREFURV9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVNfUFJPQ0VTU19JRClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgdXBkYXRlIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcyBwcm9jZXNzIHN0YXRlLiBUaGUgc3RhdGUgbmVlZHMgdG8gYmVcbiAgICogcmVzZXQgYWZ0ZXIgdGhlIHByb2Nlc3MgY29uY2x1ZGVzLCByZWdhcmRsZXNzIGlmIGl0J3MgYSBzdWNjZXNzIG9yIGFuIGVycm9yLlxuICAgKi9cbiAgcmVzZXROb3RpZmljYXRpb25QcmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5SZXNldE5vdGlmaWNhdGlvblByZWZlcmVuY2VzKCkpO1xuICB9XG59XG4iXX0=