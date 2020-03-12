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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserConsentConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50LmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJ1c2VyLWNvbnNlbnQuY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlckNvbnNlbnRBZGFwdGVyIH0gZnJvbSAnLi91c2VyLWNvbnNlbnQuYWRhcHRlcic7XG5pbXBvcnQgeyBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJDb25zZW50Q29ubmVjdG9yIHtcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogVXNlckNvbnNlbnRBZGFwdGVyO1xuICAgIGNvbnN0cnVjdG9yKGFkYXB0ZXI6IFVzZXJDb25zZW50QWRhcHRlcik7XG4gICAgbG9hZENvbnNlbnRzKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT47XG4gICAgZ2l2ZUNvbnNlbnQodXNlcklkOiBzdHJpbmcsIGNvbnNlbnRUZW1wbGF0ZUlkOiBzdHJpbmcsIGNvbnNlbnRUZW1wbGF0ZVZlcnNpb246IG51bWJlcik6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlPjtcbiAgICB3aXRoZHJhd0NvbnNlbnQodXNlcklkOiBzdHJpbmcsIGNvbnNlbnRDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9Pjtcbn1cbiJdfQ==