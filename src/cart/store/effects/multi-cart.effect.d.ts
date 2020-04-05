import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class MultiCartEffects {
    private actions$;
    setTempCart$: Observable<CartActions.RemoveTempCart>;
    mergeCart2$: Observable<CartActions.MergeMultiCart>;
    removeCart$: Observable<CartActions.RemoveCart>;
    processesIncrement$: Observable<CartActions.CartProcessesIncrement>;
    constructor(actions$: Actions);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiCartEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MultiCartEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsibXVsdGktY2FydC5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7Ozs7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNdWx0aUNhcnRFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHNldFRlbXBDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5SZW1vdmVUZW1wQ2FydD47XG4gICAgbWVyZ2VDYXJ0MiQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuTWVyZ2VNdWx0aUNhcnQ+O1xuICAgIHJlbW92ZUNhcnQkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLlJlbW92ZUNhcnQ+O1xuICAgIHByb2Nlc3Nlc0luY3JlbWVudCQ6IE9ic2VydmFibGU8Q2FydEFjdGlvbnMuQ2FydFByb2Nlc3Nlc0luY3JlbWVudD47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMpO1xufVxuIl19