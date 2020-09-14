import { Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserActions } from '../actions/index';
import { UserInterestsConnector } from '../../connectors/interests/user-interests.connector';
export declare class ProductInterestsEffect {
    private actions$;
    private userInterestsConnector;
    constructor(actions$: Actions, userInterestsConnector: UserInterestsConnector);
    loadProductInteres$: Observable<UserActions.ProductInterestsAction>;
    removeProductInterest$: Observable<Action>;
    addProductInterest$: Observable<Action>;
}
