import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/index';
import { UserConsentService } from '../../../user/facade/user-consent.service';
import { UserActions } from '../../../user/store/actions/index';
import { AnonymousConsentsConfig } from '../../config/anonymous-consents-config';
import { AnonymousConsentTemplatesConnector } from '../../connectors/anonymous-consent-templates.connector';
import { AnonymousConsentsService } from '../../facade/index';
import { AnonymousConsentsActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class AnonymousConsentsEffects {
    private actions$;
    private anonymousConsentTemplatesConnector;
    private authService;
    private anonymousConsentsConfig;
    private anonymousConsentService;
    private userConsentService;
    loadAnonymousConsentTemplates$: Observable<AnonymousConsentsActions.AnonymousConsentsActions>;
    transferAnonymousConsentsToUser$: Observable<UserActions.TransferAnonymousConsent | Observable<never>>;
    giveRequiredConsentsToUser$: Observable<UserActions.GiveUserConsent | Observable<never>>;
    constructor(actions$: Actions, anonymousConsentTemplatesConnector: AnonymousConsentTemplatesConnector, authService: AuthService, anonymousConsentsConfig: AnonymousConsentsConfig, anonymousConsentService: AnonymousConsentsService, userConsentService: UserConsentService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentsEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<AnonymousConsentsEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJhbm9ueW1vdXMtY29uc2VudHMuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7OztBQVdBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQ29uc2VudFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91c2VyL2ZhY2FkZS91c2VyLWNvbnNlbnQuc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3VzZXIvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9hbm9ueW1vdXMtY29uc2VudHMtY29uZmlnJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2Fub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0Nvbm5lY3RvcjtcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlO1xuICAgIHByaXZhdGUgYW5vbnltb3VzQ29uc2VudHNDb25maWc7XG4gICAgcHJpdmF0ZSBhbm9ueW1vdXNDb25zZW50U2VydmljZTtcbiAgICBwcml2YXRlIHVzZXJDb25zZW50U2VydmljZTtcbiAgICBsb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlcyQ6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkFub255bW91c0NvbnNlbnRzQWN0aW9ucz47XG4gICAgdHJhbnNmZXJBbm9ueW1vdXNDb25zZW50c1RvVXNlciQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuVHJhbnNmZXJBbm9ueW1vdXNDb25zZW50IHwgT2JzZXJ2YWJsZTxuZXZlcj4+O1xuICAgIGdpdmVSZXF1aXJlZENvbnNlbnRzVG9Vc2VyJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5HaXZlVXNlckNvbnNlbnQgfCBPYnNlcnZhYmxlPG5ldmVyPj47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIGFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3I6IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3IsIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSwgYW5vbnltb3VzQ29uc2VudHNDb25maWc6IEFub255bW91c0NvbnNlbnRzQ29uZmlnLCBhbm9ueW1vdXNDb25zZW50U2VydmljZTogQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlLCB1c2VyQ29uc2VudFNlcnZpY2U6IFVzZXJDb25zZW50U2VydmljZSk7XG59XG4iXX0=