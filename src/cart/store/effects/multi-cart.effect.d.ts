import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class MultiCartEffects {
    private actions$;
    setTempCart$: Observable<CartActions.RemoveTempCart>;
    mergeCart2$: Observable<CartActions.MergeMultiCart>;
    addEmail2$: Observable<CartActions.AddEmailToMultiCart>;
    removeCart$: Observable<CartActions.RemoveCart>;
    processesIncrement$: Observable<CartActions.CartProcessesIncrement>;
    constructor(actions$: Actions);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiCartEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MultiCartEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsibXVsdGktY2FydC5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTXVsdGlDYXJ0RWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBzZXRUZW1wQ2FydCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuUmVtb3ZlVGVtcENhcnQ+O1xuICAgIG1lcmdlQ2FydDIkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLk1lcmdlTXVsdGlDYXJ0PjtcbiAgICBhZGRFbWFpbDIkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkFkZEVtYWlsVG9NdWx0aUNhcnQ+O1xuICAgIHJlbW92ZUNhcnQkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLlJlbW92ZUNhcnQ+O1xuICAgIHByb2Nlc3Nlc0luY3JlbWVudCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0luY3JlbWVudD47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMpO1xufVxuIl19