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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsibXVsdGktY2FydC5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFVQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgTXVsdGlDYXJ0RWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBsb2FkQ2FydDIkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkxvYWRNdWx0aUNhcnQ+O1xuICAgIGNyZWF0ZUNhcnQyJDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5DcmVhdGVNdWx0aUNhcnQ+O1xuICAgIHNldFRlbXBDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5SZW1vdmVUZW1wQ2FydD47XG4gICAgbWVyZ2VDYXJ0MiQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuTWVyZ2VNdWx0aUNhcnQ+O1xuICAgIGFkZEVtYWlsMiQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQWRkRW1haWxUb011bHRpQ2FydD47XG4gICAgcmVtb3ZlQ2FydCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuUmVtb3ZlQ2FydD47XG4gICAgcHJvY2Vzc2VzSW5jcmVtZW50JDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5DYXJ0UHJvY2Vzc2VzSW5jcmVtZW50PjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucyk7XG59XG4iXX0=