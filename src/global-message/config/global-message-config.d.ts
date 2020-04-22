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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UtY29uZmlnLmQudHMiLCJzb3VyY2VzIjpbImdsb2JhbC1tZXNzYWdlLWNvbmZpZy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7OztBQVVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVR5cGUgfSBmcm9tICcuLi9tb2RlbHMvZ2xvYmFsLW1lc3NhZ2UubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgdHlwZSBHbG9iYWxNZXNzYWdlVHlwZUNvbmZpZyA9IHtcbiAgICB0aW1lb3V0PzogbnVtYmVyO1xufTtcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEdsb2JhbE1lc3NhZ2VDb25maWcge1xuICAgIGdsb2JhbE1lc3NhZ2VzOiB7XG4gICAgICAgIFtHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05dPzogR2xvYmFsTWVzc2FnZVR5cGVDb25maWc7XG4gICAgICAgIFtHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9JTkZPXT86IEdsb2JhbE1lc3NhZ2VUeXBlQ29uZmlnO1xuICAgICAgICBbR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JdPzogR2xvYmFsTWVzc2FnZVR5cGVDb25maWc7XG4gICAgICAgIFtHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9XQVJOSU5HXT86IEdsb2JhbE1lc3NhZ2VUeXBlQ29uZmlnO1xuICAgIH07XG59XG4iXX0=