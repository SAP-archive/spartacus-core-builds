import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import { StateWithSiteContext } from '../state';
import * as ɵngcc0 from '@angular/core';
export declare class LanguagesEffects {
    private actions$;
    private siteConnector;
    private winRef;
    private state;
    loadLanguages$: Observable<SiteContextActions.LoadLanguagesSuccess | SiteContextActions.LoadLanguagesFail>;
    persist$: Observable<void>;
    activateLanguage$: Observable<SiteContextActions.LanguageChange>;
    constructor(actions$: Actions, siteConnector: SiteConnector, winRef: WindowRef, state: Store<StateWithSiteContext>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LanguagesEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LanguagesEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJsYW5ndWFnZXMuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7O0FBU0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NpdGUuY29ubmVjdG9yJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoU2l0ZUNvbnRleHQgfSBmcm9tICcuLi9zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBMYW5ndWFnZXNFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjtcbiAgICBwcml2YXRlIHdpblJlZjtcbiAgICBwcml2YXRlIHN0YXRlO1xuICAgIGxvYWRMYW5ndWFnZXMkOiBPYnNlcnZhYmxlPFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkTGFuZ3VhZ2VzU3VjY2VzcyB8IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkTGFuZ3VhZ2VzRmFpbD47XG4gICAgcGVyc2lzdCQ6IE9ic2VydmFibGU8dm9pZD47XG4gICAgYWN0aXZhdGVMYW5ndWFnZSQ6IE9ic2VydmFibGU8U2l0ZUNvbnRleHRBY3Rpb25zLkxhbmd1YWdlQ2hhbmdlPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3Rvciwgd2luUmVmOiBXaW5kb3dSZWYsIHN0YXRlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD4pO1xufVxuIl19