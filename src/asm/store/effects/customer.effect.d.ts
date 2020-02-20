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

//# sourceMappingURL=customer.effect.d.ts.map