import { Translatable } from '../../i18n/translatable';
export declare const GLOBAL_MESSAGE_FEATURE = "global-message";
export interface StateWithGlobalMessage {
    [GLOBAL_MESSAGE_FEATURE]: GlobalMessageState;
}
export interface GlobalMessageEntities {
    [messageType: string]: Translatable[];
}
export interface GlobalMessageState {
    entities: GlobalMessageEntities;
}
