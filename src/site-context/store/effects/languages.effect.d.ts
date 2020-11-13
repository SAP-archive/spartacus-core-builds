import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import { StateWithSiteContext } from '../state';
import * as ɵngcc0 from '@angular/core';
export declare class LanguagesEffects {
    private actions$;
    private siteConnector;
    private winRef;
    private state;
    loadLanguages$: Observable<SiteContextActions.LoadLanguagesSuccess | SiteContextActions.LoadLanguagesFail>;
    persist$: Observable<void>;
    activateLanguage$: Observable<SiteContextActions.LanguageChange>;
    constructor(actions$: Actions, siteConnector: SiteConnector, winRef: WindowRef, state: Store<StateWithSiteContext>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LanguagesEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LanguagesEffects>;
}

//# sourceMappingURL=languages.effect.d.ts.map