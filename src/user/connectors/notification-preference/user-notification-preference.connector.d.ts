import { Observable } from 'rxjs';
import { UserNotificationPreferenceAdapter } from './user-notification-preference.adapter';
import { NotificationPreference } from '../../../model/notification-preference.model';
export declare class UserNotificationPreferenceConnector {
    protected adapter: UserNotificationPreferenceAdapter;
    constructor(adapter: UserNotificationPreferenceAdapter);
    loadAll(userId: string): Observable<NotificationPreference[]>;
    update(userId: string, preferences: NotificationPreference[]): Observable<{}>;
}
