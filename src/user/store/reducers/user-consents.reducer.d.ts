import * as fromActions from '../actions/user-consents.action';
import { ConsentTemplate } from '../../../model/consent.model';
export declare const initialState: ConsentTemplate[];
export declare function reducer(state: ConsentTemplate[], action: fromActions.UserConsentsAction): ConsentTemplate[];
