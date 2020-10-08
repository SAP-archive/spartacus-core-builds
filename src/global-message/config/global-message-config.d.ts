import { GlobalMessageType } from '../models/global-message.model';
import * as ɵngcc0 from '@angular/core';
export declare type GlobalMessageTypeConfig = {
    timeout?: number;
};
export declare abstract class GlobalMessageConfig {
    globalMessages: {
        [GlobalMessageType.MSG_TYPE_CONFIRMATION]?: GlobalMessageTypeConfig;
        [GlobalMessageType.MSG_TYPE_INFO]?: GlobalMessageTypeConfig;
        [GlobalMessageType.MSG_TYPE_ERROR]?: GlobalMessageTypeConfig;
        [GlobalMessageType.MSG_TYPE_WARNING]?: GlobalMessageTypeConfig;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlobalMessageConfig, never>;
}

//# sourceMappingURL=global-message-config.d.ts.map