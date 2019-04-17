import { Observable } from 'rxjs';
import { SiteContext } from './site-context.interface';
import { Store } from '@ngrx/store';
import { StateWithSiteContext } from '../store/state';
export declare class BaseSiteService implements SiteContext<string> {
    private store;
    constructor(store: Store<StateWithSiteContext>);
    /**
     * Represents the current baseSite.
     */
    getActive(): Observable<string>;
    /**
     * We currently don't support switching baseSite at run time
     */
    getAll(): Observable<string[]>;
    setActive(baseSite: string): import("rxjs").Subscription;
    /**
     * Initializes the active baseSite.
     */
    initialize(defaultBaseSite: string): void;
}
