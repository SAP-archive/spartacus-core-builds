import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class MultiCartEffects {
    private actions$;
    loadCart2$: Observable<CartActions.LoadMultiCart>;
    createCart2$: Observable<CartActions.CreateMultiCart>;
    setTempCart$: Observable<CartActions.RemoveTempCart>;
    mergeCart2$: Observable<CartActions.MergeMultiCart>;
    addEmail2$: Observable<CartActions.AddEmailToMultiCart>;
    removeCart$: Observable<CartActions.RemoveCart>;
    processesIncrement$: Observable<CartActions.CartProcessesIncrement>;
    constructor(actions$: Actions);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiCartEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MultiCartEffects>;
}

//# sourceMappingURL=multi-cart.effect.d.ts.map