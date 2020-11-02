import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Language } from '../../model/misc.model';
import { WindowRef } from '../../window/window-ref';
import { SiteContextConfig } from '../config/site-context-config';
import { StateWithSiteContext } from '../store/state';
import { SiteContext } from './site-context.interface';
/**
 * Facade that provides easy access to language state, actions and selectors.
 */
import * as ɵngcc0 from '@angular/core';
export declare class LanguageService implements SiteContext<Language> {
    protected store: Store<StateWithSiteContext>;
    protected config: SiteContextConfig;
    private sessionStorage;
    constructor(store: Store<StateWithSiteContext>, winRef: WindowRef, config: SiteContextConfig);
    /**
     * Represents all the languages supported by the current store.
     */
    getAll(): Observable<Language[]>;
    /**
     * Represents the isocode of the active language.
     */
    getActive(): Observable<string>;
    /**
     * Sets the active language.
     */
    setActive(isocode: string): import("rxjs").Subscription;
    /**
     * Initials the active language. The active language is either given
     * by the last visit (stored in session storage) or by the
     * default session language of the store.
     */
    initialize(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LanguageService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LanguageService>;
}

//# sourceMappingURL=language.service.d.ts.map