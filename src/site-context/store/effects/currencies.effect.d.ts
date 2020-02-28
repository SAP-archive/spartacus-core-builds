import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class CurrenciesEffects {
    private actions$;
    private siteConnector;
    private winRef;
    loadCurrencies$: Observable<SiteContextActions.LoadCurrenciesSuccess | SiteContextActions.LoadCurrenciesFail>;
    activateCurrency$: Observable<SiteContextActions.CurrencyChange>;
    constructor(actions$: Actions, siteConnector: SiteConnector, winRef: WindowRef);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CurrenciesEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CurrenciesEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsiY3VycmVuY2llcy5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7OztBQU9BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NpdGUuY29ubmVjdG9yJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ3VycmVuY2llc0VmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yO1xuICAgIHByaXZhdGUgd2luUmVmO1xuICAgIGxvYWRDdXJyZW5jaWVzJDogT2JzZXJ2YWJsZTxTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEN1cnJlbmNpZXNTdWNjZXNzIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRDdXJyZW5jaWVzRmFpbD47XG4gICAgYWN0aXZhdGVDdXJyZW5jeSQ6IE9ic2VydmFibGU8U2l0ZUNvbnRleHRBY3Rpb25zLkN1cnJlbmN5Q2hhbmdlPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3Rvciwgd2luUmVmOiBXaW5kb3dSZWYpO1xufVxuIl19