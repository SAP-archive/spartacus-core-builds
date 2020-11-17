import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserNotificationPreferenceConnector } from '../../connectors/notification-preference/user-notification-preference.connector';
import { UserActions } from '../actions/index';
export declare class NotificationPreferenceEffects {
    private actions$;
    private connector;
    loadPreferences$: Observable<UserActions.NotificationPreferenceAction>;
    updatePreferences$: Observable<UserActions.NotificationPreferenceAction>;
    constructor(actions$: Actions, connector: UserNotificationPreferenceConnector);
}
