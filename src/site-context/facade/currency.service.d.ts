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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY3kuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjdXJyZW5jeS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDdXJyZW5jeSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU3RhdGVXaXRoU2l0ZUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbi8qKlxuICogRmFjYWRlIHRoYXQgcHJvdmlkZXMgZWFzeSBhY2Nlc3MgdG8gY3VycmVueSBzdGF0ZSwgYWN0aW9ucyBhbmQgc2VsZWN0b3JzLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDdXJyZW5jeVNlcnZpY2UgaW1wbGVtZW50cyBTaXRlQ29udGV4dDxDdXJyZW5jeT4ge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoU2l0ZUNvbnRleHQ+O1xuICAgIHByb3RlY3RlZCBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnO1xuICAgIHByaXZhdGUgc2Vzc2lvblN0b3JhZ2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0Piwgd2luUmVmOiBXaW5kb3dSZWYsIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWcpO1xuICAgIC8qKlxuICAgICAqIFJlcHJlc2VudHMgYWxsIHRoZSBjdXJyZW5jaWVzIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBzdG9yZS5cbiAgICAgKi9cbiAgICBnZXRBbGwoKTogT2JzZXJ2YWJsZTxDdXJyZW5jeVtdPjtcbiAgICAvKipcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBpc29jb2RlIG9mIHRoZSBhY3RpdmUgY3VycmVuY3kuXG4gICAgICovXG4gICAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhY3RpdmUgbGFuZ3VhZ2UuXG4gICAgICovXG4gICAgc2V0QWN0aXZlKGlzb2NvZGU6IHN0cmluZyk6IGltcG9ydChcInJ4anNcIikuU3Vic2NyaXB0aW9uO1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxzIHRoZSBhY3RpdmUgY3VycmVuY3kuIFRoZSBhY3RpdmUgY3VycmVuY3kgaXMgZWl0aGVyIGdpdmVuXG4gICAgICogYnkgdGhlIGxhc3QgdmlzaXQgKHN0b3JlZCBpbiBzZXNzaW9uIHN0b3JhZ2UpIG9yIGJ5IHRoZVxuICAgICAqIGRlZmF1bHQgc2Vzc2lvbiBjdXJyZW5jeSBvZiB0aGUgc3RvcmUuXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZSgpOiB2b2lkO1xufVxuIl19