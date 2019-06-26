import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
export declare class CurrenciesEffects {
    private actions$;
    private siteConnector;
    private winRef;
    loadCurrencies$: Observable<SiteContextActions.LoadCurrenciesSuccess | SiteContextActions.LoadCurrenciesFail>;
    activateCurrency$: Observable<SiteContextActions.CurrencyChange>;
    constructor(actions$: Actions, siteConnector: SiteConnector, winRef: WindowRef);
}
