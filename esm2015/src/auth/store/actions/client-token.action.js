/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CLIENT_TOKEN_DATA } from '../auth-state';
import { LoaderLoadAction, LoaderFailAction, LoaderSuccessAction, } from '../../../state/utils/loader/loader.action';
/** @type {?} */
export const LOAD_CLIENT_TOKEN = '[Token] Create Client Token';
/** @type {?} */
export const LOAD_CLIENT_TOKEN_FAIL = '[Token] Create Client Token Fail';
/** @type {?} */
export const LOAD_CLIENT_TOKEN_SUCCESS = '[Token] Create Client Token Success';
export class LoadClientToken extends LoaderLoadAction {
    constructor() {
        super(CLIENT_TOKEN_DATA);
        this.type = LOAD_CLIENT_TOKEN;
    }
}
if (false) {
    /** @type {?} */
    LoadClientToken.prototype.type;
}
export class LoadClientTokenFail extends LoaderFailAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CLIENT_TOKEN_DATA, payload);
        this.payload = payload;
        this.type = LOAD_CLIENT_TOKEN_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadClientTokenFail.prototype.type;
    /** @type {?} */
    LoadClientTokenFail.prototype.payload;
}
export class LoadClientTokenSuccess extends LoaderSuccessAction {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        super(CLIENT_TOKEN_DATA);
        this.payload = payload;
        this.type = LOAD_CLIENT_TOKEN_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadClientTokenSuccess.prototype.type;
    /** @type {?} */
    LoadClientTokenSuccess.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL3N0b3JlL2FjdGlvbnMvY2xpZW50LXRva2VuLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxELE9BQU8sRUFDTCxnQkFBZ0IsRUFDaEIsZ0JBQWdCLEVBQ2hCLG1CQUFtQixHQUNwQixNQUFNLDJDQUEyQyxDQUFDOztBQUVuRCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsNkJBQTZCOztBQUM5RCxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsa0NBQWtDOztBQUN4RSxNQUFNLE9BQU8seUJBQXlCLEdBQUcscUNBQXFDO0FBRTlFLE1BQU0sT0FBTyxlQUFnQixTQUFRLGdCQUFnQjtJQUVuRDtRQUNFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRmxCLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQUdsQyxDQUFDO0NBQ0Y7OztJQUpDLCtCQUFrQzs7QUFNcEMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjs7OztJQUV2RCxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURqQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUd2QyxDQUFDO0NBQ0Y7OztJQUpDLG1DQUF1Qzs7SUFDM0Isc0NBQW1COztBQUtqQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsbUJBQW1COzs7O0lBRTdELFlBQW1CLE9BQW9CO1FBQ3JDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRFIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUQ5QixTQUFJLEdBQUcseUJBQXlCLENBQUM7SUFHMUMsQ0FBQztDQUNGOzs7SUFKQyxzQ0FBMEM7O0lBQzlCLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENMSUVOVF9UT0tFTl9EQVRBIH0gZnJvbSAnLi4vYXV0aC1zdGF0ZSc7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQge1xuICBMb2FkZXJMb2FkQWN0aW9uLFxuICBMb2FkZXJGYWlsQWN0aW9uLFxuICBMb2FkZXJTdWNjZXNzQWN0aW9uLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NMSUVOVF9UT0tFTiA9ICdbVG9rZW5dIENyZWF0ZSBDbGllbnQgVG9rZW4nO1xuZXhwb3J0IGNvbnN0IExPQURfQ0xJRU5UX1RPS0VOX0ZBSUwgPSAnW1Rva2VuXSBDcmVhdGUgQ2xpZW50IFRva2VuIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfQ0xJRU5UX1RPS0VOX1NVQ0NFU1MgPSAnW1Rva2VuXSBDcmVhdGUgQ2xpZW50IFRva2VuIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZENsaWVudFRva2VuIGV4dGVuZHMgTG9hZGVyTG9hZEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NMSUVOVF9UT0tFTjtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoQ0xJRU5UX1RPS0VOX0RBVEEpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2xpZW50VG9rZW5GYWlsIGV4dGVuZHMgTG9hZGVyRmFpbEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NMSUVOVF9UT0tFTl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7XG4gICAgc3VwZXIoQ0xJRU5UX1RPS0VOX0RBVEEsIHBheWxvYWQpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkQ2xpZW50VG9rZW5TdWNjZXNzIGV4dGVuZHMgTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NMSUVOVF9UT0tFTl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2xpZW50VG9rZW4pIHtcbiAgICBzdXBlcihDTElFTlRfVE9LRU5fREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2xpZW50VG9rZW5BY3Rpb24gPVxuICB8IExvYWRDbGllbnRUb2tlblxuICB8IExvYWRDbGllbnRUb2tlbkZhaWxcbiAgfCBMb2FkQ2xpZW50VG9rZW5TdWNjZXNzO1xuIl19