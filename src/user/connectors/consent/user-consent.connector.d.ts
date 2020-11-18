import { Observable } from 'rxjs';
import { UserConsentAdapter } from './user-consent.adapter';
import { ConsentTemplate } from '../../../model/consent.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserConsentConnector {
    protected adapter: UserConsentAdapter;
    constructor(adapter: UserConsentAdapter);
    loadConsents(userId: string): Observable<ConsentTemplate[]>;
    giveConsent(userId: string, consentTemplateId: string, consentTemplateVersion: number): Observable<ConsentTemplate>;
    withdrawConsent(userId: string, consentCode: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserConsentConnector, never>;
}

//# sourceMappingURL=user-consent.connector.d.ts.map