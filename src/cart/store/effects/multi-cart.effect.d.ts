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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsibXVsdGktY2FydC5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7QUFVQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNdWx0aUNhcnRFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIGxvYWRDYXJ0MiQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuTG9hZE11bHRpQ2FydD47XG4gICAgY3JlYXRlQ2FydDIkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNyZWF0ZU11bHRpQ2FydD47XG4gICAgc2V0VGVtcENhcnQkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLlJlbW92ZVRlbXBDYXJ0PjtcbiAgICBtZXJnZUNhcnQyJDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5NZXJnZU11bHRpQ2FydD47XG4gICAgYWRkRW1haWwyJDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5BZGRFbWFpbFRvTXVsdGlDYXJ0PjtcbiAgICByZW1vdmVDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0PjtcbiAgICBwcm9jZXNzZXNJbmNyZW1lbnQkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNJbmNyZW1lbnQ+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zKTtcbn1cbiJdfQ==