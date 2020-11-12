import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { BaseSite } from '../../model/misc.model';
import { SiteContextConfig } from '../config/site-context-config';
import { StateWithSiteContext } from '../store/state';
import { SiteContext } from './site-context.interface';
import * as ɵngcc0 from '@angular/core';
export declare class BaseSiteService implements SiteContext<BaseSite> {
    protected store: Store<StateWithSiteContext>;
    protected config: SiteContextConfig;
    constructor(store: Store<StateWithSiteContext>, config: SiteContextConfig);
    /**
     * Represents the current baseSite uid.
     */
    getActive(): Observable<string>;
    /**
     * Get all base sites data
     */
    getAll(): Observable<BaseSite[]>;
    /**
     * Get base site data based on site uid
     */
    get(siteUid?: string): Observable<BaseSite>;
    setActive(baseSite: string): Subscription;
    /**
     * Initializes the active baseSite.
     */
    initialize(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseSiteService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BaseSiteService>;
}

//# sourceMappingURL=base-site.service.d.ts.map