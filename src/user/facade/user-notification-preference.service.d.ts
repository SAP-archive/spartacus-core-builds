import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/facade/auth.service';
import { NotificationPreference } from '../../model/notification-preference.model';
import { StateWithProcess } from '../../process/store/process-state';
import { StateWithUser } from '../store/user-state';
export declare class UserNotificationPreferenceService {
    protected store: Store<StateWithUser | StateWithProcess<void>>;
    protected authService: AuthService;
    constructor(store: Store<StateWithUser | StateWithProcess<void>>, authService: AuthService);
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
}
