/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { OPEN_ID_TOKEN_DATA } from '../kyma-state';
/** @type {?} */
export const LOAD_OPEN_ID_TOKEN = '[Kyma] Load Open ID Token';
/** @type {?} */
export const LOAD_OPEN_ID_TOKEN_FAIL = '[Kyma] Load Open ID Token Fail';
/** @type {?} */
export const LOAD_OPEN_ID_TOKEN_SUCCESS = '[Kyma] Load Open ID Token Success';
export class LoadOpenIdToken extends LoaderLoadAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(OPEN_ID_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_OPEN_ID_TOKEN;
    }
}
if (false) {
    /** @type {?} */
    LoadOpenIdToken.prototype.type;
    /** @type {?} */
    LoadOpenIdToken.prototype.payload;
}
export class LoadOpenIdTokenFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(OPEN_ID_TOKEN_DATA, payload);
        this.payload = payload;
        this.type = LOAD_OPEN_ID_TOKEN_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadOpenIdTokenFail.prototype.type;
    /** @type {?} */
    LoadOpenIdTokenFail.prototype.payload;
}
export class LoadOpenIdTokenSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(OPEN_ID_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_OPEN_ID_TOKEN_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadOpenIdTokenSuccess.prototype.type;
    /** @type {?} */
    LoadOpenIdTokenSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMva3ltYS9zdG9yZS9hY3Rpb25zL29wZW4taWQtdG9rZW4uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUVuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRW5ELE1BQU0sT0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBQzdELE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxnQ0FBZ0M7O0FBQ3ZFLE1BQU0sT0FBTywwQkFBMEIsR0FBRyxtQ0FBbUM7QUFFN0UsTUFBTSxPQUFPLGVBQWdCLFNBQVEsZ0JBQWdCOzs7O0lBRW5ELFlBQW1CLE9BQStDO1FBQ2hFLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRFQsWUFBTyxHQUFQLE9BQU8sQ0FBd0M7UUFEekQsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBR25DLENBQUM7Q0FDRjs7O0lBSkMsK0JBQW1DOztJQUN2QixrQ0FBc0Q7O0FBS3BFLE1BQU0sT0FBTyxtQkFBb0IsU0FBUSxnQkFBZ0I7Ozs7SUFFdkQsWUFBbUIsT0FBWTtRQUM3QixLQUFLLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFEbEIsWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsdUJBQXVCLENBQUM7SUFHeEMsQ0FBQztDQUNGOzs7SUFKQyxtQ0FBd0M7O0lBQzVCLHNDQUFtQjs7QUFLakMsTUFBTSxPQUFPLHNCQUF1QixTQUFRLG1CQUFtQjs7OztJQUU3RCxZQUFtQixPQUFvQjtRQUNyQyxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQURULFlBQU8sR0FBUCxPQUFPLENBQWE7UUFEOUIsU0FBSSxHQUFHLDBCQUEwQixDQUFDO0lBRzNDLENBQUM7Q0FDRjs7O0lBSkMsc0NBQTJDOztJQUMvQix5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5pbXBvcnQgeyBPcGVuSWRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy9reW1hLXRva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IE9QRU5fSURfVE9LRU5fREFUQSB9IGZyb20gJy4uL2t5bWEtc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgTE9BRF9PUEVOX0lEX1RPS0VOID0gJ1tLeW1hXSBMb2FkIE9wZW4gSUQgVG9rZW4nO1xuZXhwb3J0IGNvbnN0IExPQURfT1BFTl9JRF9UT0tFTl9GQUlMID0gJ1tLeW1hXSBMb2FkIE9wZW4gSUQgVG9rZW4gRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9PUEVOX0lEX1RPS0VOX1NVQ0NFU1MgPSAnW0t5bWFdIExvYWQgT3BlbiBJRCBUb2tlbiBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRPcGVuSWRUb2tlbiBleHRlbmRzIExvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9PUEVOX0lEX1RPS0VOO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VybmFtZTogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nIH0pIHtcbiAgICBzdXBlcihPUEVOX0lEX1RPS0VOX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkT3BlbklkVG9rZW5GYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09QRU5fSURfVE9LRU5fRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge1xuICAgIHN1cGVyKE9QRU5fSURfVE9LRU5fREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRPcGVuSWRUb2tlblN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZXJTdWNjZXNzQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1BFTl9JRF9UT0tFTl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogT3BlbklkVG9rZW4pIHtcbiAgICBzdXBlcihPUEVOX0lEX1RPS0VOX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIE9wZW5JZFRva2VuQWN0aW9ucyA9XG4gIHwgTG9hZE9wZW5JZFRva2VuXG4gIHwgTG9hZE9wZW5JZFRva2VuRmFpbFxuICB8IExvYWRPcGVuSWRUb2tlblN1Y2Nlc3M7XG4iXX0=