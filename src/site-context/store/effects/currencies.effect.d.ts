import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
import { SiteContextActions } from '../actions/index';
import { StateWithSiteContext } from '../state';
import * as ɵngcc0 from '@angular/core';
export declare class CurrenciesEffects {
    private actions$;
    private siteConnector;
    private winRef;
    private state;
    loadCurrencies$: Observable<SiteContextActions.LoadCurrenciesSuccess | SiteContextActions.LoadCurrenciesFail>;
    persist$: Observable<void>;
    activateCurrency$: Observable<SiteContextActions.CurrencyChange>;
    constructor(actions$: Actions, siteConnector: SiteConnector, winRef: WindowRef, state: Store<StateWithSiteContext>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CurrenciesEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CurrenciesEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsiY3VycmVuY2llcy5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7QUFPQTs7Ozs7Ozs7Ozs7QUFTQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhTaXRlQ29udGV4dCB9IGZyb20gJy4uL3N0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEN1cnJlbmNpZXNFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgc2l0ZUNvbm5lY3RvcjtcbiAgICBwcml2YXRlIHdpblJlZjtcbiAgICBwcml2YXRlIHN0YXRlO1xuICAgIGxvYWRDdXJyZW5jaWVzJDogT2JzZXJ2YWJsZTxTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEN1cnJlbmNpZXNTdWNjZXNzIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRDdXJyZW5jaWVzRmFpbD47XG4gICAgcGVyc2lzdCQ6IE9ic2VydmFibGU8dm9pZD47XG4gICAgYWN0aXZhdGVDdXJyZW5jeSQ6IE9ic2VydmFibGU8U2l0ZUNvbnRleHRBY3Rpb25zLkN1cnJlbmN5Q2hhbmdlPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgc2l0ZUNvbm5lY3RvcjogU2l0ZUNvbm5lY3Rvciwgd2luUmVmOiBXaW5kb3dSZWYsIHN0YXRlOiBTdG9yZTxTdGF0ZVdpdGhTaXRlQ29udGV4dD4pO1xufVxuIl19