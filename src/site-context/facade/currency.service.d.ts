import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Currency } from '../../model/misc.model';
import { WindowRef } from '../../window/window-ref';
import { StateWithSiteContext } from '../store/state';
import { SiteContext } from './site-context.interface';
/**
 * Facade that provides easy access to curreny state, actions and selectors.
 */
export declare class CurrencyService implements SiteContext<Currency> {
    protected store: Store<StateWithSiteContext>;
    private sessionStorage;
    constructor(store: Store<StateWithSiteContext>, winRef: WindowRef);
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
