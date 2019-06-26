import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
export declare class LanguagesEffects {
    private actions$;
    private siteConnector;
    private winRef;
    loadLanguages$: Observable<SiteContextActions.LoadLanguagesSuccess | SiteContextActions.LoadLanguagesFail>;
    activateLanguage$: Observable<SiteContextActions.LanguageChange>;
    constructor(actions$: Actions, siteConnector: SiteConnector, winRef: WindowRef);
}
