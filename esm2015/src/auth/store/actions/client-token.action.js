/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { StateLoaderActions } from '../../../state/utils/index';
import { CLIENT_TOKEN_DATA } from '../auth-state';
/** @type {?} */
export const LOAD_CLIENT_TOKEN = '[Token] Load Client Token';
/** @type {?} */
export const LOAD_CLIENT_TOKEN_FAIL = '[Token] Load Client Token Fail';
/** @type {?} */
export const LOAD_CLIENT_TOKEN_SUCCESS = '[Token] Load Client Token Success';
export class LoadClientToken extends StateLoaderActions.LoaderLoadAction {
    constructor() {
        super(CLIENT_TOKEN_DATA);
        this.type = LOAD_CLIENT_TOKEN;
    }
}
if (false) {
    /** @type {?} */
    LoadClientToken.prototype.type;
}
export class LoadClientTokenFail extends StateLoaderActions.LoaderFailAction {
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
export class LoadClientTokenSuccess extends StateLoaderActions.LoaderSuccessAction {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmFjdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL3N0b3JlL2FjdGlvbnMvY2xpZW50LXRva2VuLmFjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUVsRCxNQUFNLE9BQU8saUJBQWlCLEdBQUcsMkJBQTJCOztBQUM1RCxNQUFNLE9BQU8sc0JBQXNCLEdBQUcsZ0NBQWdDOztBQUN0RSxNQUFNLE9BQU8seUJBQXlCLEdBQUcsbUNBQW1DO0FBRTVFLE1BQU0sT0FBTyxlQUFnQixTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjtJQUV0RTtRQUNFLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRmxCLFNBQUksR0FBRyxpQkFBaUIsQ0FBQztJQUdsQyxDQUFDO0NBQ0Y7OztJQUpDLCtCQUFrQzs7QUFNcEMsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGtCQUFrQixDQUFDLGdCQUFnQjs7OztJQUUxRSxZQUFtQixPQUFZO1FBQzdCLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQURqQixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyxzQkFBc0IsQ0FBQztJQUd2QyxDQUFDO0NBQ0Y7OztJQUpDLG1DQUF1Qzs7SUFDM0Isc0NBQW1COztBQUtqQyxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsa0JBQWtCLENBQUMsbUJBQW1COzs7O0lBRWhGLFlBQW1CLE9BQW9CO1FBQ3JDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRFIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtRQUQ5QixTQUFJLEdBQUcseUJBQXlCLENBQUM7SUFHMUMsQ0FBQztDQUNGOzs7SUFKQyxzQ0FBMEM7O0lBQzlCLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0YXRlTG9hZGVyQWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IENsaWVudFRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IENMSUVOVF9UT0tFTl9EQVRBIH0gZnJvbSAnLi4vYXV0aC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBMT0FEX0NMSUVOVF9UT0tFTiA9ICdbVG9rZW5dIExvYWQgQ2xpZW50IFRva2VuJztcbmV4cG9ydCBjb25zdCBMT0FEX0NMSUVOVF9UT0tFTl9GQUlMID0gJ1tUb2tlbl0gTG9hZCBDbGllbnQgVG9rZW4gRmFpbCc7XG5leHBvcnQgY29uc3QgTE9BRF9DTElFTlRfVE9LRU5fU1VDQ0VTUyA9ICdbVG9rZW5dIExvYWQgQ2xpZW50IFRva2VuIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgTG9hZENsaWVudFRva2VuIGV4dGVuZHMgU3RhdGVMb2FkZXJBY3Rpb25zLkxvYWRlckxvYWRBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9DTElFTlRfVE9LRU47XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKENMSUVOVF9UT0tFTl9EQVRBKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZENsaWVudFRva2VuRmFpbCBleHRlbmRzIFN0YXRlTG9hZGVyQWN0aW9ucy5Mb2FkZXJGYWlsQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IExPQURfQ0xJRU5UX1RPS0VOX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHtcbiAgICBzdXBlcihDTElFTlRfVE9LRU5fREFUQSwgcGF5bG9hZCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIExvYWRDbGllbnRUb2tlblN1Y2Nlc3MgZXh0ZW5kcyBTdGF0ZUxvYWRlckFjdGlvbnMuTG9hZGVyU3VjY2Vzc0FjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX0NMSUVOVF9UT0tFTl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogQ2xpZW50VG9rZW4pIHtcbiAgICBzdXBlcihDTElFTlRfVE9LRU5fREFUQSk7XG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQ2xpZW50VG9rZW5BY3Rpb24gPVxuICB8IExvYWRDbGllbnRUb2tlblxuICB8IExvYWRDbGllbnRUb2tlbkZhaWxcbiAgfCBMb2FkQ2xpZW50VG9rZW5TdWNjZXNzO1xuIl19