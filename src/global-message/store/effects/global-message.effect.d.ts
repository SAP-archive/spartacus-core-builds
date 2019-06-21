import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as GlobalMessageActions from '../actions/global-message.actions';
import { GlobalMessageConfig } from '../../config/global-message-config';
import { GlobalMessage } from '../../models/global-message.model';
export declare class GlobalMessageEffect {
    private actions$;
    private store;
    private config;
    hideAfterDelay$: Observable<GlobalMessageActions.RemoveMessage>;
    constructor(actions$: Actions, store: Store<GlobalMessage>, config: GlobalMessageConfig);
}
