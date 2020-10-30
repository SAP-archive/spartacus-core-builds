import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import { StateWithSiteContext } from '../state';
import * as ɵngcc0 from '@angular/core';
export declare class CurrenciesEffects {
    private actions$;
    private siteConnector;
    private winRef;
    private state;
    loadCurrencies$: Observable<SiteContextActions.LoadCurrenciesSuccess | SiteContextActions.LoadCurrenciesFail>;
    persist$: Observable<void>;
    activateCurrency$: Observable<SiteContextActions.CurrencyChange>;
    constructor(actions$: Actions, siteConnector: SiteConnector, winRef: WindowRef, state: Store<StateWithSiteContext>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CurrenciesEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CurrenciesEffects>;
}

//# sourceMappingURL=currencies.effect.d.ts.map