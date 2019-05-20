import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as fromActions from '../actions/index';
import { UserPaymentConnector } from '../../connectors/payment/user-payment.connector';
export declare class RegionsEffects {
    private actions$;
    private userPaymentConnector;
    loadRegions$: Observable<fromActions.RegionsAction>;
    constructor(actions$: Actions, userPaymentConnector: UserPaymentConnector);
}
