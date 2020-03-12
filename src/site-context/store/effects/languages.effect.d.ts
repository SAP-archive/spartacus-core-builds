import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class LanguagesEffects {
    private actions$;
    private siteConnector;
    private winRef;
    loadLanguages$: Observable<SiteContextActions.LoadLanguagesSuccess | SiteContextActions.LoadLanguagesFail>;
    activateLanguage$: Observable<SiteContextActions.LanguageChange>;
    constructor(actions$: Actions, siteConnector: SiteConnector, winRef: WindowRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<LanguagesEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<LanguagesEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJsYW5ndWFnZXMuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUtBOzs7Ozs7Ozs7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NpdGUuY29ubmVjdG9yJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTGFuZ3VhZ2VzRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I7XG4gICAgcHJpdmF0ZSB3aW5SZWY7XG4gICAgbG9hZExhbmd1YWdlcyQ6IE9ic2VydmFibGU8U2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXNTdWNjZXNzIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRMYW5ndWFnZXNGYWlsPjtcbiAgICBhY3RpdmF0ZUxhbmd1YWdlJDogT2JzZXJ2YWJsZTxTaXRlQ29udGV4dEFjdGlvbnMuTGFuZ3VhZ2VDaGFuZ2U+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yLCB3aW5SZWY6IFdpbmRvd1JlZik7XG59XG4iXX0=