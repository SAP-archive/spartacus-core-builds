import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class BaseSiteEffects {
    private actions$;
    private siteConnector;
    loadBaseSite$: Observable<SiteContextActions.LoadBaseSiteSuccess | SiteContextActions.LoadBaseSiteFail>;
    constructor(actions$: Actions, siteConnector: SiteConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<BaseSiteEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<BaseSiteEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLmVmZmVjdC5kLnRzIiwic291cmNlcyI6WyJiYXNlLXNpdGUuZWZmZWN0LmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0FBSUE7Ozs7Ozs7QUFLQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NpdGUuY29ubmVjdG9yJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQmFzZVNpdGVFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjtcbiAgICBsb2FkQmFzZVNpdGUkOiBPYnNlcnZhYmxlPFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQmFzZVNpdGVTdWNjZXNzIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRCYXNlU2l0ZUZhaWw+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yKTtcbn1cbiJdfQ==