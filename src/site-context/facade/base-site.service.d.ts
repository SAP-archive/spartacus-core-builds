import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { BaseSite } from '../../model/misc.model';
import { StateWithSiteContext } from '../store/state';
import { SiteContext } from './site-context.interface';
import { SiteContextConfig } from '../config/site-context-config';
import * as ɵngcc0 from '@angular/core';
export declare class BaseSiteService implements SiteContext<string> {
    protected store: Store<StateWithSiteContext>;
    protected config: SiteContextConfig;
    constructor(store: Store<StateWithSiteContext>, config: SiteContextConfig);
    /**
     * Represents the current baseSite uid.
     */
    getActive(): Observable<string>;
    /**
     * We currently don't support switching baseSite at run time
     */
    getAll(): Observable<string[]>;
    setActive(baseSite: string): Subscription;
    /**
     * Initializes the active baseSite.
     */
    initialize(): void;
    /**
     * Get the base site details data
     */
    getBaseSiteData(): Observable<BaseSite>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseSiteService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BaseSiteService>;
}

//# sourceMappingURL=base-site.service.d.ts.map