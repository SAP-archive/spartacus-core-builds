import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../actions/index';
export declare class MultiCartEffects {
    private actions$;
    loadCart2$: Observable<CartActions.LoadMultiCart>;
    createCart2$: Observable<CartActions.CreateMultiCart>;
    setFreshCart$: Observable<CartActions.ResetFreshCart>;
    mergeCart2$: Observable<CartActions.MergeMultiCart>;
    addEmail2$: Observable<CartActions.AddEmailToMultiCart>;
    removeCart$: Observable<CartActions.RemoveCart>;
    processesIncrement$: Observable<CartActions.CartProcessesIncrement>;
    constructor(actions$: Actions);
}
