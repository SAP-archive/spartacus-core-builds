import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AuthService } from '../../auth/facade/auth.service';
import { getProcessLoadingFactory } from '../../process/store/selectors/process.selectors';
import { UserActions } from '../store/actions/index';
import { UsersSelectors } from '../store/selectors/index';
import { UPDATE_NOTIFICATION_PREFERENCES_PROCESS_ID, } from '../store/user-state';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "../../auth/facade/auth.service";
export class UserNotificationPreferenceService {
    constructor(store, authService) {
        this.store = store;
        this.authService = authService;
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
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.LoadNotificationPreferences(userId));
        });
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
        this.authService.invokeWithUserId((userId) => {
            this.store.dispatch(new UserActions.UpdateNotificationPreferences({
                userId,
                preferences: preferences,
            }));
        });
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
}
UserNotificationPreferenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserNotificationPreferenceService_Factory() { return new UserNotificationPreferenceService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.AuthService)); }, token: UserNotificationPreferenceService, providedIn: "root" });
UserNotificationPreferenceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
UserNotificationPreferenceService.ctorParameters = () => [
    { type: Store },
    { type: AuthService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvdXNlci9mYWNhZGUvdXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRzdELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQzNGLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUVMLDBDQUEwQyxHQUMzQyxNQUFNLHFCQUFxQixDQUFDOzs7O0FBSzdCLE1BQU0sT0FBTyxpQ0FBaUM7SUFDNUMsWUFDWSxLQUFvRCxFQUNwRCxXQUF3QjtRQUR4QixVQUFLLEdBQUwsS0FBSyxDQUErQztRQUNwRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNqQyxDQUFDO0lBRUo7O09BRUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVEOztPQUVHO0lBQ0gscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQywyQkFBMkIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQzNFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRDs7T0FFRztJQUNILHFCQUFxQjtRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQkFBaUIsQ0FBQyxXQUFxQztRQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDM0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLDZCQUE2QixDQUFDO2dCQUM1QyxNQUFNO2dCQUNOLFdBQVcsRUFBRSxXQUFXO2FBQ3pCLENBQUMsQ0FDSCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBaUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FDdEIsd0JBQXdCLENBQUMsMENBQTBDLENBQUMsQ0FDckUsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCw0QkFBNEI7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxXQUFXLENBQUMsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7Ozs7WUE1RUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFmZ0IsS0FBSztZQUViLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2ZhY2FkZS9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSB9IGZyb20gJy4uLy4uL21vZGVsL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5IH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9zZWxlY3RvcnMvcHJvY2Vzcy5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFVzZXJzU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcbmltcG9ydCB7XG4gIFN0YXRlV2l0aFVzZXIsXG4gIFVQREFURV9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVNfUFJPQ0VTU19JRCxcbn0gZnJvbSAnLi4vc3RvcmUvdXNlci1zdGF0ZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+PixcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzLlxuICAgKi9cbiAgZ2V0UHJlZmVyZW5jZXMoKTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb25QcmVmZXJlbmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChVc2Vyc1NlbGVjdG9ycy5nZXRQcmVmZXJlbmNlcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYWxsIGVuYWJsZWQgbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzLlxuICAgKi9cbiAgZ2V0RW5hYmxlZFByZWZlcmVuY2VzKCk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoVXNlcnNTZWxlY3RvcnMuZ2V0RW5hYmxlZFByZWZlcmVuY2VzKSk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgYWxsIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICovXG4gIGxvYWRQcmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICB0aGlzLmF1dGhTZXJ2aWNlLmludm9rZVdpdGhVc2VySWQoKHVzZXJJZCkgPT4ge1xuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgVXNlckFjdGlvbnMuTG9hZE5vdGlmaWNhdGlvblByZWZlcmVuY2VzKHVzZXJJZCkpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFyIGFsbCBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMuXG4gICAqL1xuICBjbGVhclByZWZlcmVuY2VzKCk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IFVzZXJBY3Rpb25zLkNsZWFyTm90aWZpY2F0aW9uUHJlZmVyZW5jZXMoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3Igbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzLlxuICAgKi9cbiAgZ2V0UHJlZmVyZW5jZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KFVzZXJzU2VsZWN0b3JzLmdldFByZWZlcmVuY2VzTG9hZGluZykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0aW5nIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICogQHBhcmFtIHByZWZlcmVuY2VzIGEgcHJlZmVyZW5jZSBsaXN0XG4gICAqL1xuICB1cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlczogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdKTogdm9pZCB7XG4gICAgdGhpcy5hdXRoU2VydmljZS5pbnZva2VXaXRoVXNlcklkKCh1c2VySWQpID0+IHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVOb3RpZmljYXRpb25QcmVmZXJlbmNlcyh7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHByZWZlcmVuY2VzOiBwcmVmZXJlbmNlcyxcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgdXBkYXRpbmcgcHJlZmVyZW5jZXMuXG4gICAqL1xuICBnZXRVcGRhdGVQcmVmZXJlbmNlc1Jlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUuc2VsZWN0KFxuICAgICAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KFVQREFURV9OT1RJRklDQVRJT05fUFJFRkVSRU5DRVNfUFJPQ0VTU19JRClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgdXBkYXRlIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcyBwcm9jZXNzIHN0YXRlLiBUaGUgc3RhdGUgbmVlZHMgdG8gYmVcbiAgICogcmVzZXQgYWZ0ZXIgdGhlIHByb2Nlc3MgY29uY2x1ZGVzLCByZWdhcmRsZXNzIGlmIGl0J3MgYSBzdWNjZXNzIG9yIGFuIGVycm9yLlxuICAgKi9cbiAgcmVzZXROb3RpZmljYXRpb25QcmVmZXJlbmNlcygpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKG5ldyBVc2VyQWN0aW9ucy5SZXNldE5vdGlmaWNhdGlvblByZWZlcmVuY2VzKCkpO1xuICB9XG59XG4iXX0=