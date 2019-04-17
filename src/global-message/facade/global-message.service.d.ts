import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GlobalMessage, GlobalMessageType } from '../models/global-message.model';
import { GlobalMessageEntities, StateWithGlobalMessage } from '../store/index';
export declare class GlobalMessageService {
    private store;
    constructor(store: Store<StateWithGlobalMessage>);
    /**
     * Get all global messages
     */
    get(): Observable<GlobalMessageEntities>;
    /**
     * Add one message into store
     * @param message: GlobalMessage object
     */
    add(message: GlobalMessage): void;
    /**
     * Remove message(s) from store
     * @param type: GlobalMessageType
     * @param index:optional. Without it, messages will be removed by type; otherwise,
     * message will be removed from list by index.
     */
    remove(type: GlobalMessageType, index?: number): void;
}
