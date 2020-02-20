import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class LanguagesEffects {
    private actions$;
    private siteConnector;
    private winRef;
    loadLanguages$: Observable<SiteContextActions.LoadLanguagesSuccess | SiteContextActions.LoadLanguagesFail>;
    activateLanguage$: Observable<SiteContextActions.LanguageChange>;
    constructor(actions$: Actions, siteConnector: SiteConnector, winRef: WindowRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LanguagesEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LanguagesEffects>;
}

//# sourceMappingURL=languages.effect.d.ts.map