import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NotificationPreference } from '../../../model/notification-preference.model';
import { UserNotificationPreferenceAdapter } from '../../../user/connectors/notification-preference/user-notification-preference.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export declare class OccUserNotificationPreferenceAdapter implements UserNotificationPreferenceAdapter {
    protected http: HttpClient;
    protected converter: ConverterService;
    protected occEndpoints: OccEndpointsService;
    constructor(http: HttpClient, converter: ConverterService, occEndpoints: OccEndpointsService);
    loadAll(userId: string): Observable<NotificationPreference[]>;
    update(userId: string, preferences: NotificationPreference[]): Observable<{}>;
}
