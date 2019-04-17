import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../store/index';
import { Currency } from '../../occ/occ-models';
import { WindowRef } from '../../window/window-ref';
import { SiteContext } from './site-context.interface';
/**
 * Facade that provides easy access to curreny state, actions and selectors.
 */
export declare class CurrencyService implements SiteContext<Currency> {
    private store;
    private sessionStorage;
    constructor(store: Store<fromStore.StateWithSiteContext>, winRef: WindowRef);
    /**
     * Represents all the currencies supported by the current store.
     */
    getAll(): Observable<Currency[]>;
    /**
     * Represents the isocode of the active currency.
     */
    getActive(): Observable<string>;
    /**
     * Sets the active language.
     */
    setActive(isocode: string): import("rxjs").Subscription;
    /**
     * Initials the active currency. The active currency is either given
     * by the last visit (stored in session storage) or by the
     * default session currency of the store.
     */
    initialize(defaultCurrency: string): void;
}
