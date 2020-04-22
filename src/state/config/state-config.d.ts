import * as ɵngcc0 from '@angular/core';
export declare enum StorageSyncType {
    NO_STORAGE = "NO_STORAGE",
    LOCAL_STORAGE = "LOCAL_STORAGE",
    SESSION_STORAGE = "SESSION_STORAGE"
}
export declare enum StateTransferType {
    TRANSFER_STATE = "SSR"
}
export declare abstract class StateConfig {
    state?: {
        storageSync?: {
            /**
             * A key name for the data stored in `localStorage`.
             * Default is `DEFAULT_LOCAL_STORAGE_KEY`.
             */
            localStorageKeyName?: string;
            /**
             * A key name for the data stored in `sessionStorage`.
             * Default is `DEFAULT_SESSION_STORAGE_KEY`.
             */
            sessionStorageKeyName?: string;
            /**
             * A set of state keys that should be synced with the specified browser's storage.
             */
            keys?: {
                [key: string]: StorageSyncType;
            };
            /**
             * A set of keys not to sync with the specified browser's storage.
             */
            excludeKeys?: {
                [key: string]: StorageSyncType;
            };
        };
        ssrTransfer?: {
            keys?: {
                /**
                 * A set of state keys that should be transferred from server.
                 */
                [key: string]: StateTransferType;
            };
        };
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StateConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUtY29uZmlnLmQudHMiLCJzb3VyY2VzIjpbInN0YXRlLWNvbmZpZy5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVjbGFyZSBlbnVtIFN0b3JhZ2VTeW5jVHlwZSB7XG4gICAgTk9fU1RPUkFHRSA9IFwiTk9fU1RPUkFHRVwiLFxuICAgIExPQ0FMX1NUT1JBR0UgPSBcIkxPQ0FMX1NUT1JBR0VcIixcbiAgICBTRVNTSU9OX1NUT1JBR0UgPSBcIlNFU1NJT05fU1RPUkFHRVwiXG59XG5leHBvcnQgZGVjbGFyZSBlbnVtIFN0YXRlVHJhbnNmZXJUeXBlIHtcbiAgICBUUkFOU0ZFUl9TVEFURSA9IFwiU1NSXCJcbn1cbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIFN0YXRlQ29uZmlnIHtcbiAgICBzdGF0ZT86IHtcbiAgICAgICAgc3RvcmFnZVN5bmM/OiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEga2V5IG5hbWUgZm9yIHRoZSBkYXRhIHN0b3JlZCBpbiBgbG9jYWxTdG9yYWdlYC5cbiAgICAgICAgICAgICAqIERlZmF1bHQgaXMgYERFRkFVTFRfTE9DQUxfU1RPUkFHRV9LRVlgLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2VLZXlOYW1lPzogc3RyaW5nO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBBIGtleSBuYW1lIGZvciB0aGUgZGF0YSBzdG9yZWQgaW4gYHNlc3Npb25TdG9yYWdlYC5cbiAgICAgICAgICAgICAqIERlZmF1bHQgaXMgYERFRkFVTFRfU0VTU0lPTl9TVE9SQUdFX0tFWWAuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlS2V5TmFtZT86IHN0cmluZztcbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgICogQSBzZXQgb2Ygc3RhdGUga2V5cyB0aGF0IHNob3VsZCBiZSBzeW5jZWQgd2l0aCB0aGUgc3BlY2lmaWVkIGJyb3dzZXIncyBzdG9yYWdlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBrZXlzPzoge1xuICAgICAgICAgICAgICAgIFtrZXk6IHN0cmluZ106IFN0b3JhZ2VTeW5jVHlwZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgc2V0IG9mIGtleXMgbm90IHRvIHN5bmMgd2l0aCB0aGUgc3BlY2lmaWVkIGJyb3dzZXIncyBzdG9yYWdlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBleGNsdWRlS2V5cz86IHtcbiAgICAgICAgICAgICAgICBba2V5OiBzdHJpbmddOiBTdG9yYWdlU3luY1R5cGU7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBzc3JUcmFuc2Zlcj86IHtcbiAgICAgICAgICAgIGtleXM/OiB7XG4gICAgICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgICAgICogQSBzZXQgb2Ygc3RhdGUga2V5cyB0aGF0IHNob3VsZCBiZSB0cmFuc2ZlcnJlZCBmcm9tIHNlcnZlci5cbiAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBba2V5OiBzdHJpbmddOiBTdGF0ZVRyYW5zZmVyVHlwZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfTtcbn1cbiJdfQ==