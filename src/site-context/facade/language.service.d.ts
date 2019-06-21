import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Language } from '../../model/misc.model';
import { WindowRef } from '../../window/window-ref';
import * as fromStore from '../store/index';
import { SiteContext } from './site-context.interface';
/**
 * Facade that provides easy access to language state, actions and selectors.
 */
export declare class LanguageService implements SiteContext<Language> {
    protected store: Store<fromStore.StateWithSiteContext>;
    private sessionStorage;
    constructor(store: Store<fromStore.StateWithSiteContext>, winRef: WindowRef);
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
    initialize(defaultLanguage: string): void;
}
