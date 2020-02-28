import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Language } from '../../model/misc.model';
import { WindowRef } from '../../window/window-ref';
import { StateWithSiteContext } from '../store/state';
import { SiteContext } from './site-context.interface';
import { SiteContextConfig } from '../config/site-context-config';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LanguageService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LanguageService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2Uuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJsYW5ndWFnZS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU3RhdGVXaXRoU2l0ZUNvbnRleHQgfSBmcm9tICcuLi9zdG9yZS9zdGF0ZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbi8qKlxuICogRmFjYWRlIHRoYXQgcHJvdmlkZXMgZWFzeSBhY2Nlc3MgdG8gbGFuZ3VhZ2Ugc3RhdGUsIGFjdGlvbnMgYW5kIHNlbGVjdG9ycy5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGFuZ3VhZ2VTZXJ2aWNlIGltcGxlbWVudHMgU2l0ZUNvbnRleHQ8TGFuZ3VhZ2U+IHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFNpdGVDb250ZXh0PjtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZztcbiAgICBwcml2YXRlIHNlc3Npb25TdG9yYWdlO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD4sIHdpblJlZjogV2luZG93UmVmLCBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBSZXByZXNlbnRzIGFsbCB0aGUgbGFuZ3VhZ2VzIHN1cHBvcnRlZCBieSB0aGUgY3VycmVudCBzdG9yZS5cbiAgICAgKi9cbiAgICBnZXRBbGwoKTogT2JzZXJ2YWJsZTxMYW5ndWFnZVtdPjtcbiAgICAvKipcbiAgICAgKiBSZXByZXNlbnRzIHRoZSBpc29jb2RlIG9mIHRoZSBhY3RpdmUgbGFuZ3VhZ2UuXG4gICAgICovXG4gICAgZ2V0QWN0aXZlKCk6IE9ic2VydmFibGU8c3RyaW5nPjtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBhY3RpdmUgbGFuZ3VhZ2UuXG4gICAgICovXG4gICAgc2V0QWN0aXZlKGlzb2NvZGU6IHN0cmluZyk6IGltcG9ydChcInJ4anNcIikuU3Vic2NyaXB0aW9uO1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxzIHRoZSBhY3RpdmUgbGFuZ3VhZ2UuIFRoZSBhY3RpdmUgbGFuZ3VhZ2UgaXMgZWl0aGVyIGdpdmVuXG4gICAgICogYnkgdGhlIGxhc3QgdmlzaXQgKHN0b3JlZCBpbiBzZXNzaW9uIHN0b3JhZ2UpIG9yIGJ5IHRoZVxuICAgICAqIGRlZmF1bHQgc2Vzc2lvbiBsYW5ndWFnZSBvZiB0aGUgc3RvcmUuXG4gICAgICovXG4gICAgaW5pdGlhbGl6ZSgpOiB2b2lkO1xufVxuIl19