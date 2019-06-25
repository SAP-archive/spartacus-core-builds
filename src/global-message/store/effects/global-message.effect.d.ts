import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalMessageConfig } from '../../config/global-message-config';
import * as GlobalMessageActions from '../actions/global-message.actions';
import { StateWithGlobalMessage } from '../global-message-state';
export declare class GlobalMessageEffect {
    private actions$;
    private store;
    private config;
    hideAfterDelay$: Observable<GlobalMessageActions.RemoveMessage>;
    constructor(actions$: Actions, store: Store<StateWithGlobalMessage>, config: GlobalMessageConfig);
}
