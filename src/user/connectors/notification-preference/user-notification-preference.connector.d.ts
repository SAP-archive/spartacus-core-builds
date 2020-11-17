import { Observable } from 'rxjs';
import { UserNotificationPreferenceAdapter } from './user-notification-preference.adapter';
import { NotificationPreference } from '../../../model/notification-preference.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserNotificationPreferenceConnector {
    protected adapter: UserNotificationPreferenceAdapter;
    constructor(adapter: UserNotificationPreferenceAdapter);
    loadAll(userId: string): Observable<NotificationPreference[]>;
    update(userId: string, preferences: NotificationPreference[]): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserNotificationPreferenceConnector, never>;
}

//# sourceMappingURL=user-notification-preference.connector.d.ts.map