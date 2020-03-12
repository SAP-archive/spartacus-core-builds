import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Currency } from '../../model/misc.model';
import { WindowRef } from '../../window/window-ref';
import { StateWithSiteContext } from '../store/state';
import { SiteContext } from './site-context.interface';
import { SiteContextConfig } from '../config/site-context-config';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CurrencyService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CurrencyService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjdXJyZW5jeS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEN1cnJlbmN5IH0gZnJvbSAnLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0b3JlL3N0YXRlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuLyoqXG4gKiBGYWNhZGUgdGhhdCBwcm92aWRlcyBlYXN5IGFjY2VzcyB0byBjdXJyZW55IHN0YXRlLCBhY3Rpb25zIGFuZCBzZWxlY3RvcnMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEN1cnJlbmN5U2VydmljZSBpbXBsZW1lbnRzIFNpdGVDb250ZXh0PEN1cnJlbmN5PiB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD47XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWc7XG4gICAgcHJpdmF0ZSBzZXNzaW9uU3RvcmFnZTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoU2l0ZUNvbnRleHQ+LCB3aW5SZWY6IFdpbmRvd1JlZiwgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZyk7XG4gICAgLyoqXG4gICAgICogUmVwcmVzZW50cyBhbGwgdGhlIGN1cnJlbmNpZXMgc3VwcG9ydGVkIGJ5IHRoZSBjdXJyZW50IHN0b3JlLlxuICAgICAqL1xuICAgIGdldEFsbCgpOiBPYnNlcnZhYmxlPEN1cnJlbmN5W10+O1xuICAgIC8qKlxuICAgICAqIFJlcHJlc2VudHMgdGhlIGlzb2NvZGUgb2YgdGhlIGFjdGl2ZSBjdXJyZW5jeS5cbiAgICAgKi9cbiAgICBnZXRBY3RpdmUoKTogT2JzZXJ2YWJsZTxzdHJpbmc+O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGFjdGl2ZSBsYW5ndWFnZS5cbiAgICAgKi9cbiAgICBzZXRBY3RpdmUoaXNvY29kZTogc3RyaW5nKTogaW1wb3J0KFwicnhqc1wiKS5TdWJzY3JpcHRpb247XG4gICAgLyoqXG4gICAgICogSW5pdGlhbHMgdGhlIGFjdGl2ZSBjdXJyZW5jeS4gVGhlIGFjdGl2ZSBjdXJyZW5jeSBpcyBlaXRoZXIgZ2l2ZW5cbiAgICAgKiBieSB0aGUgbGFzdCB2aXNpdCAoc3RvcmVkIGluIHNlc3Npb24gc3RvcmFnZSkgb3IgYnkgdGhlXG4gICAgICogZGVmYXVsdCBzZXNzaW9uIGN1cnJlbmN5IG9mIHRoZSBzdG9yZS5cbiAgICAgKi9cbiAgICBpbml0aWFsaXplKCk6IHZvaWQ7XG59XG4iXX0=