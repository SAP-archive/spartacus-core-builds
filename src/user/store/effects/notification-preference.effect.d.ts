import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { UserNotificationPreferenceConnector } from '../../connectors/notification-preference/user-notification-preference.connector';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class NotificationPreferenceEffects {
    private actions$;
    private connector;
    loadPreferences$: Observable<UserActions.NotificationPreferenceAction>;
    updatePreferences$: Observable<UserActions.NotificationPreferenceAction>;
    constructor(actions$: Actions, connector: UserNotificationPreferenceConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NotificationPreferenceEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<NotificationPreferenceEffects>;
}

//# sourceMappingURL=notification-preference.effect.d.ts.map