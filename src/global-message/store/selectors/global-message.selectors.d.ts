import { MemoizedSelector } from '@ngrx/store';
import { StateWithGlobalMessage, GlobalMessageEntities } from '../global-message-state';
import { Translatable } from '../../../i18n/translatable';
import { GlobalMessageType } from '../../models/global-message.model';
export declare const getGlobalMessageEntities: MemoizedSelector<StateWithGlobalMessage, GlobalMessageEntities>;
export declare const getGlobalMessageEntitiesByType: (type: GlobalMessageType) => MemoizedSelector<any, Translatable[]>;
export declare const getGlobalMessageCountByType: (type: GlobalMessageType) => MemoizedSelector<any, number>;
