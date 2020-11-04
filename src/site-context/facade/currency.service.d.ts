import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Currency } from '../../model/misc.model';
import { WindowRef } from '../../window/window-ref';
import { SiteContextConfig } from '../config/site-context-config';
import { StateWithSiteContext } from '../store/state';
import { SiteContext } from './site-context.interface';
/**
 * Facade that provides easy access to curreny state, actions and selectors.
 */
import * as ɵngcc0 from '@angular/core';
export declare class CurrencyService implements SiteContext<Currency> {
    protected store: Store<StateWithSiteContext>;
    protected config: SiteContextConfig;
    private sessionStorage;
    constructor(store: Store<StateWithSiteContext>, winRef: WindowRef, config: SiteContextConfig);
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
    initialize(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CurrencyService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CurrencyService>;
}

//# sourceMappingURL=currency.service.d.ts.map