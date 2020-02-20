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

//# sourceMappingURL=user-notification-preference.service.d.ts.map