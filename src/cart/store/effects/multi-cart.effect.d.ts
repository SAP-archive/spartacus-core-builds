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
    setLoading$: Observable<CartActions.SetCartLoading>;
    constructor(actions$: Actions);
}
