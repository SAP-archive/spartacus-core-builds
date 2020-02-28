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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInVzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2Uuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9jZXNzIH0gZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIgfSBmcm9tICcuLi9zdG9yZS91c2VyLXN0YXRlJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvblByZWZlcmVuY2UgfSBmcm9tICcuLi8uLi9tb2RlbC9ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoVXNlciB8IFN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+O1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhVc2VyIHwgU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4pO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICAgKi9cbiAgICBnZXRQcmVmZXJlbmNlcygpOiBPYnNlcnZhYmxlPE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgZW5hYmxlZCBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMuXG4gICAgICovXG4gICAgZ2V0RW5hYmxlZFByZWZlcmVuY2VzKCk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPjtcbiAgICAvKipcbiAgICAgKiBMb2FkcyBhbGwgbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzLlxuICAgICAqL1xuICAgIGxvYWRQcmVmZXJlbmNlcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENsZWFyIGFsbCBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMuXG4gICAgICovXG4gICAgY2xlYXJQcmVmZXJlbmNlcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsb2FkaW5nIGZsYWcgZm9yIG5vdGlmaWNhdGlvbiBwcmVmZXJlbmNlcy5cbiAgICAgKi9cbiAgICBnZXRQcmVmZXJlbmNlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBVcGRhdGluZyBub3RpZmljYXRpb24gcHJlZmVyZW5jZXMuXG4gICAgICogQHBhcmFtIHByZWZlcmVuY2VzIGEgcHJlZmVyZW5jZSBsaXN0XG4gICAgICovXG4gICAgdXBkYXRlUHJlZmVyZW5jZXMocHJlZmVyZW5jZXM6IE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIGxvYWRpbmcgZmxhZyBmb3IgdXBkYXRpbmcgcHJlZmVyZW5jZXMuXG4gICAgICovXG4gICAgZ2V0VXBkYXRlUHJlZmVyZW5jZXNSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSB1cGRhdGUgbm90aWZpY2F0aW9uIHByZWZlcmVuY2VzIHByb2Nlc3Mgc3RhdGUuIFRoZSBzdGF0ZSBuZWVkcyB0byBiZVxuICAgICAqIHJlc2V0IGFmdGVyIHRoZSBwcm9jZXNzIGNvbmNsdWRlcywgcmVnYXJkbGVzcyBpZiBpdCdzIGEgc3VjY2VzcyBvciBhbiBlcnJvci5cbiAgICAgKi9cbiAgICByZXNldE5vdGlmaWNhdGlvblByZWZlcmVuY2VzKCk6IHZvaWQ7XG59XG4iXX0=