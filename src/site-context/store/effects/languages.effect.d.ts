import { Observable } from 'rxjs';
import { Actions } from '@ngrx/effects';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
export declare class LanguagesEffects {
    private actions$;
    private siteConnector;
    private winRef;
    loadLanguages$: Observable<any>;
    activateLanguage$: Observable<any>;
    constructor(actions$: Actions, siteConnector: SiteConnector, winRef: WindowRef);
}
