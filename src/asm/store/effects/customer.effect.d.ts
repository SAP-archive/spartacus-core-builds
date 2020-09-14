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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CustomerEffects, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<CustomerEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXIuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbImN1c3RvbWVyLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7O0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb25zIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBc21Db25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2FzbS5jb25uZWN0b3InO1xuaW1wb3J0IHsgQXNtQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ3VzdG9tZXJFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgYXNtQ29ubmVjdG9yO1xuICAgIGN1c3RvbWVyU2VhcmNoJDogT2JzZXJ2YWJsZTxBc21BY3Rpb25zLkN1c3RvbWVyQWN0aW9uPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgYXNtQ29ubmVjdG9yOiBBc21Db25uZWN0b3IpO1xufVxuIl19