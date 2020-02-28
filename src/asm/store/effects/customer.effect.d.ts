import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AsmConnector } from '../../connectors/asm.connector';
import { AsmActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class CustomerEffects {
    private actions$;
    private asmConnector;
    customerSearch$: Observable<AsmActions.CustomerAction>;
    constructor(actions$: Actions, asmConnector: AsmConnector);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CustomerEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbImN1c3RvbWVyLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7O0FBS0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXNtQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hc20uY29ubmVjdG9yJztcbmltcG9ydCB7IEFzbUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEN1c3RvbWVyRWZmZWN0cyB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIGFzbUNvbm5lY3RvcjtcbiAgICBjdXN0b21lclNlYXJjaCQ6IE9ic2VydmFibGU8QXNtQWN0aW9ucy5DdXN0b21lckFjdGlvbj47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIGFzbUNvbm5lY3RvcjogQXNtQ29ubmVjdG9yKTtcbn1cbiJdfQ==