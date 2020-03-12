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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVuY2llcy5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsiY3VycmVuY2llcy5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDdXJyZW5jaWVzRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I7XG4gICAgcHJpdmF0ZSB3aW5SZWY7XG4gICAgbG9hZEN1cnJlbmNpZXMkOiBPYnNlcnZhYmxlPFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQ3VycmVuY2llc1N1Y2Nlc3MgfCBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEN1cnJlbmNpZXNGYWlsPjtcbiAgICBhY3RpdmF0ZUN1cnJlbmN5JDogT2JzZXJ2YWJsZTxTaXRlQ29udGV4dEFjdGlvbnMuQ3VycmVuY3lDaGFuZ2U+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yLCB3aW5SZWY6IFdpbmRvd1JlZik7XG59XG4iXX0=