import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import { StateWithSiteContext } from '../state';
export declare class LanguagesEffects {
    private actions$;
    private siteConnector;
    private winRef;
    private state;
    loadLanguages$: Observable<SiteContextActions.LoadLanguagesSuccess | SiteContextActions.LoadLanguagesFail>;
    persist$: Observable<void>;
    activateLanguage$: Observable<SiteContextActions.LanguageChange>;
    constructor(actions$: Actions, siteConnector: SiteConnector, winRef: WindowRef, state: Store<StateWithSiteContext>);
}
