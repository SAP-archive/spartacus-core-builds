import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { AsmConnector } from '../../connectors/asm.connector';
import { AsmActions } from '../actions/index';
export declare class CustomerEffects {
    private actions$;
    private asmConnector;
    customerSearch$: Observable<AsmActions.CustomerAction>;
    constructor(actions$: Actions, asmConnector: AsmConnector);
}
