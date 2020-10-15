import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class MultiCartEffects {
    private actions$;
    setTempCart$: Observable<CartActions.RemoveCart>;
    processesIncrement$: Observable<CartActions.CartProcessesIncrement>;
    constructor(actions$: Actions);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiCartEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MultiCartEffects>;
}

//# sourceMappingURL=multi-cart.effect.d.ts.map