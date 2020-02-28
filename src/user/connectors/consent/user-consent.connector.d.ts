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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50LmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJ1c2VyLWNvbnNlbnQuY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7OztBQU1BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFVzZXJDb25zZW50QWRhcHRlciB9IGZyb20gJy4vdXNlci1jb25zZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyQ29uc2VudENvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJDb25zZW50QWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBVc2VyQ29uc2VudEFkYXB0ZXIpO1xuICAgIGxvYWRDb25zZW50cyh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICAgIGdpdmVDb25zZW50KHVzZXJJZDogc3RyaW5nLCBjb25zZW50VGVtcGxhdGVJZDogc3RyaW5nLCBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiBudW1iZXIpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZT47XG4gICAgd2l0aGRyYXdDb25zZW50KHVzZXJJZDogc3RyaW5nLCBjb25zZW50Q29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG59XG4iXX0=