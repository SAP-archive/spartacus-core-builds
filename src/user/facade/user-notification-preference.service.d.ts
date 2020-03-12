import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
import { NotificationPreference } from '../../model/notification-preference.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserNotificationPreferenceService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>);
    /**
     * Returns all notification preferences.
     */
    getPreferences(): Observable<NotificationPreference[]>;
    /**
     * Returns all enabled notification preferences.
     */
    getEnabledPreferences(): Observable<NotificationPreference[]>;
    /**
     * Loads all notification preferences.
     */
    loadPreferences(): void;
    /**
     * Clear all notification preferences.
     */
    clearPreferences(): void;
    /**
     * Returns a loading flag for notification preferences.
     */
    getPreferencesLoading(): Observable<boolean>;
    /**
     * Updating notification preferences.
     * @param preferences a preference list
     */
    updatePreferences(preferences: NotificationPreference[]): void;
    /**
     * Returns a loading flag for updating preferences.
     */
    getUpdatePreferencesResultLoading(): Observable<boolean>;
    /**
     * Resets the update notification preferences process state. The state needs to be
     * reset after the process concludes, regardless if it's a success or an error.
     */
    resetNotificationPreferences(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserNotificationPreferenceService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2Uuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFN0YXRlV2l0aFByb2Nlc3MgfSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciB9IGZyb20gJy4uL3N0b3JlL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSB9IGZyb20gJy4uLy4uL21vZGVsL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj47XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFVzZXIgfCBTdGF0ZVdpdGhQcm9jZXNzPHZvaWQ+Pik7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzLlxuICAgICAqL1xuICAgIGdldFByZWZlcmVuY2VzKCk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBlbmFibGVkIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICAgKi9cbiAgICBnZXRFbmFibGVkUHJlZmVyZW5jZXMoKTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb25QcmVmZXJlbmNlW10+O1xuICAgIC8qKlxuICAgICAqIExvYWRzIGFsbCBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMuXG4gICAgICovXG4gICAgbG9hZFByZWZlcmVuY2VzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2xlYXIgYWxsIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICAgKi9cbiAgICBjbGVhclByZWZlcmVuY2VzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3Igbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzLlxuICAgICAqL1xuICAgIGdldFByZWZlcmVuY2VzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFVwZGF0aW5nIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICAgKiBAcGFyYW0gcHJlZmVyZW5jZXMgYSBwcmVmZXJlbmNlIGxpc3RcbiAgICAgKi9cbiAgICB1cGRhdGVQcmVmZXJlbmNlcyhwcmVmZXJlbmNlczogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgbG9hZGluZyBmbGFnIGZvciB1cGRhdGluZyBwcmVmZXJlbmNlcy5cbiAgICAgKi9cbiAgICBnZXRVcGRhdGVQcmVmZXJlbmNlc1Jlc3VsdExvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIHVwZGF0ZSBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMgcHJvY2VzcyBzdGF0ZS4gVGhlIHN0YXRlIG5lZWRzIHRvIGJlXG4gICAgICogcmVzZXQgYWZ0ZXIgdGhlIHByb2Nlc3MgY29uY2x1ZGVzLCByZWdhcmRsZXNzIGlmIGl0J3MgYSBzdWNjZXNzIG9yIGFuIGVycm9yLlxuICAgICAqL1xuICAgIHJlc2V0Tm90aWZpY2F0aW9uUHJlZmVyZW5jZXMoKTogdm9pZDtcbn1cbiJdfQ==