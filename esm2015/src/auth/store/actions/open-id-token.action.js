/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { LoaderFailAction, LoaderLoadAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
import { OPEN_ID_TOKEN_DATA } from '../auth-state';
/** @type {?} */
export const LOAD_OPEN_ID_TOKEN = '[Token] Create Open ID Token';
/** @type {?} */
export const LOAD_OPEN_ID_TOKEN_FAIL = '[Token] Create Open ID Token Fail';
/** @type {?} */
export const LOAD_OPEN_ID_TOKEN_SUCCESS = '[Token] Create Open ID Token Success';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9hY3Rpb25zL29wZW4taWQtdG9rZW4uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGdCQUFnQixFQUNoQixtQkFBbUIsR0FDcEIsTUFBTSwyQ0FBMkMsQ0FBQztBQUVuRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRW5ELE1BQU0sT0FBTyxrQkFBa0IsR0FBRyw4QkFBOEI7O0FBQ2hFLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxtQ0FBbUM7O0FBQzFFLE1BQU0sT0FBTywwQkFBMEIsR0FDckMsc0NBQXNDO0FBRXhDLE1BQU0sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjs7OztJQUVuRCxZQUFtQixPQUErQztRQUNoRSxLQUFLLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQURULFlBQU8sR0FBUCxPQUFPLENBQXdDO1FBRHpELFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUduQyxDQUFDO0NBQ0Y7OztJQUpDLCtCQUFtQzs7SUFDdkIsa0NBQXNEOztBQUtwRSxNQUFNLE9BQU8sbUJBQW9CLFNBQVEsZ0JBQWdCOzs7O0lBRXZELFlBQW1CLE9BQVk7UUFDN0IsS0FBSyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBRGxCLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLHVCQUF1QixDQUFDO0lBR3hDLENBQUM7Q0FDRjs7O0lBSkMsbUNBQXdDOztJQUM1QixzQ0FBbUI7O0FBS2pDLE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxtQkFBbUI7Ozs7SUFFN0QsWUFBbUIsT0FBb0I7UUFDckMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFEVCxZQUFPLEdBQVAsT0FBTyxDQUFhO1FBRDlCLFNBQUksR0FBRywwQkFBMEIsQ0FBQztJQUczQyxDQUFDO0NBQ0Y7OztJQUpDLHNDQUEyQzs7SUFDL0IseUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgTG9hZGVyRmFpbEFjdGlvbixcbiAgTG9hZGVyTG9hZEFjdGlvbixcbiAgTG9hZGVyU3VjY2Vzc0FjdGlvbixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5hY3Rpb24nO1xuaW1wb3J0IHsgT3BlbklkVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgT1BFTl9JRF9UT0tFTl9EQVRBIH0gZnJvbSAnLi4vYXV0aC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX09QRU5fSURfVE9LRU4gPSAnW1Rva2VuXSBDcmVhdGUgT3BlbiBJRCBUb2tlbic7XG5leHBvcnQgY29uc3QgTE9BRF9PUEVOX0lEX1RPS0VOX0ZBSUwgPSAnW1Rva2VuXSBDcmVhdGUgT3BlbiBJRCBUb2tlbiBGYWlsJztcbmV4cG9ydCBjb25zdCBMT0FEX09QRU5fSURfVE9LRU5fU1VDQ0VTUyA9XG4gICdbVG9rZW5dIENyZWF0ZSBPcGVuIElEIFRva2VuIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZE9wZW5JZFRva2VuIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX09QRU5fSURfVE9LRU47XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiB7IHVzZXJuYW1lOiBzdHJpbmc7IHBhc3N3b3JkOiBzdHJpbmcgfSkge1xuICAgIHN1cGVyKE9QRU5fSURfVE9LRU5fREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRPcGVuSWRUb2tlbkZhaWwgZXh0ZW5kcyBMb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfT1BFTl9JRF9UT0tFTl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoT1BFTl9JRF9UT0tFTl9EQVRBLCBwYXlsb2FkKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZE9wZW5JZFRva2VuU3VjY2VzcyBleHRlbmRzIExvYWRlclN1Y2Nlc3NBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9PUEVOX0lEX1RPS0VOX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBPcGVuSWRUb2tlbikge1xuICAgIHN1cGVyKE9QRU5fSURfVE9LRU5fREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgT3BlbklkVG9rZW5BY3Rpb25zID1cbiAgfCBMb2FkT3BlbklkVG9rZW5cbiAgfCBMb2FkT3BlbklkVG9rZW5GYWlsXG4gIHwgTG9hZE9wZW5JZFRva2VuU3VjY2VzcztcbiJdfQ==