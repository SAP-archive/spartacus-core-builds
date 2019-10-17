import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/index';
import { UserConsentService } from '../../../user/facade/user-consent.service';
import { UserActions } from '../../../user/store/actions/index';
import { AnonymousConsentsConfig } from '../../config/anonymous-consents-config';
import { AnonymousConsentTemplatesConnector } from '../../connectors/anonymous-consent-templates.connector';
import { AnonymousConsentsService } from '../../facade/index';
import { AnonymousConsentsActions } from '../actions/index';
export declare class AnonymousConsentsEffects {
    private actions$;
    private anonymousConsentTemplatesConnector;
    private authService;
    private anonymousConsentsConfig;
    private anonymousConsentService;
    private userConsentService;
    handleLogoutAndLanguageChange$: Observable<AnonymousConsentsActions.LoadAnonymousConsentTemplates>;
    loadAnonymousConsentTemplates$: Observable<AnonymousConsentsActions.AnonymousConsentsActions>;
    transferAnonymousConsentsToUser$: Observable<UserActions.TransferAnonymousConsent | Observable<never>>;
    giveRequiredConsentsToUser$: Observable<UserActions.GiveUserConsent | Observable<never>>;
    constructor(actions$: Actions, anonymousConsentTemplatesConnector: AnonymousConsentTemplatesConnector, authService: AuthService, anonymousConsentsConfig: AnonymousConsentsConfig, anonymousConsentService: AnonymousConsentsService, userConsentService: UserConsentService);
}
