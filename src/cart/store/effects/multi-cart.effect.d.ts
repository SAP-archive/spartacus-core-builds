import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { CartActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class MultiCartEffects {
    private actions$;
    setTempCart$: Observable<CartActions.RemoveTempCart>;
    removeCart$: Observable<CartActions.RemoveCart>;
    processesIncrement$: Observable<CartActions.CartProcessesIncrement>;
    constructor(actions$: Actions);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MultiCartEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<MultiCartEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXVsdGktY2FydC5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsibXVsdGktY2FydC5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7Ozs7OztBQU1BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE11bHRpQ2FydEVmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgc2V0VGVtcENhcnQkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLlJlbW92ZVRlbXBDYXJ0PjtcbiAgICByZW1vdmVDYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0QWN0aW9ucy5SZW1vdmVDYXJ0PjtcbiAgICBwcm9jZXNzZXNJbmNyZW1lbnQkOiBPYnNlcnZhYmxlPENhcnRBY3Rpb25zLkNhcnRQcm9jZXNzZXNJbmNyZW1lbnQ+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zKTtcbn1cbiJdfQ==