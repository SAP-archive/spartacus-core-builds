import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalMessageConfig } from '../../config/global-message-config';
import { GlobalMessageActions } from '../actions/index';
import { StateWithGlobalMessage } from '../global-message-state';
export declare class GlobalMessageEffect {
    private actions$;
    private store;
    private config;
    private platformId;
    removeDuplicated$: Observable<GlobalMessageActions.RemoveMessage>;
    hideAfterDelay$: Observable<GlobalMessageActions.RemoveMessage>;
    constructor(actions$: Actions, store: Store<StateWithGlobalMessage>, config: GlobalMessageConfig, platformId: any);
}
