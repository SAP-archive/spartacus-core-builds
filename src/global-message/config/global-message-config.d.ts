import { GlobalMessageType } from '../models/global-message.model';
export declare type GlobalMessageTypeConfig = {
    timeout?: number;
};
export declare abstract class GlobalMessageConfig {
    globalMessages: {
        [GlobalMessageType.MSG_TYPE_CONFIRMATION]?: GlobalMessageTypeConfig;
        [GlobalMessageType.MSG_TYPE_INFO]?: GlobalMessageTypeConfig;
        [GlobalMessageType.MSG_TYPE_ERROR]?: GlobalMessageTypeConfig;
    };
}
