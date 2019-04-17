/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const LOAD_USER_TOKEN = '[Auth] Load User Token';
/** @type {?} */
export const LOAD_USER_TOKEN_FAIL = '[Auth] Load User Token Fail';
/** @type {?} */
export const LOAD_USER_TOKEN_SUCCESS = '[Auth] Load User Token Success';
/** @type {?} */
export const REFRESH_USER_TOKEN = '[Auth] Refresh User Token';
/** @type {?} */
export const REFRESH_USER_TOKEN_FAIL = '[Auth] Refresh User Token Fail';
/** @type {?} */
export const REFRESH_USER_TOKEN_SUCCESS = '[Auth] Refresh User Token Success';
export class LoadUserToken {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN;
    }
}
if (false) {
    /** @type {?} */
    LoadUserToken.prototype.type;
    /** @type {?} */
    LoadUserToken.prototype.payload;
}
export class LoadUserTokenFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN_FAIL;
    }
}
if (false) {
    /** @type {?} */
    LoadUserTokenFail.prototype.type;
    /** @type {?} */
    LoadUserTokenFail.prototype.payload;
}
export class LoadUserTokenSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_USER_TOKEN_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    LoadUserTokenSuccess.prototype.type;
    /** @type {?} */
    LoadUserTokenSuccess.prototype.payload;
}
export class RefreshUserToken {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN;
    }
}
if (false) {
    /** @type {?} */
    RefreshUserToken.prototype.type;
    /** @type {?} */
    RefreshUserToken.prototype.payload;
}
export class RefreshUserTokenSuccess {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    RefreshUserTokenSuccess.prototype.type;
    /** @type {?} */
    RefreshUserTokenSuccess.prototype.payload;
}
export class RefreshUserTokenFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REFRESH_USER_TOKEN_FAIL;
    }
}
if (false) {
    /** @type {?} */
    RefreshUserTokenFail.prototype.type;
    /** @type {?} */
    RefreshUserTokenFail.prototype.payload;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9hY3Rpb25zL3VzZXItdG9rZW4uYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBR0EsTUFBTSxPQUFPLGVBQWUsR0FBRyx3QkFBd0I7O0FBQ3ZELE1BQU0sT0FBTyxvQkFBb0IsR0FBRyw2QkFBNkI7O0FBQ2pFLE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxnQ0FBZ0M7O0FBQ3ZFLE1BQU0sT0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBQzdELE1BQU0sT0FBTyx1QkFBdUIsR0FBRyxnQ0FBZ0M7O0FBQ3ZFLE1BQU0sT0FBTywwQkFBMEIsR0FBRyxtQ0FBbUM7QUFFN0UsTUFBTSxPQUFPLGFBQWE7Ozs7SUFFeEIsWUFBbUIsT0FBNkM7UUFBN0MsWUFBTyxHQUFQLE9BQU8sQ0FBc0M7UUFEdkQsU0FBSSxHQUFHLGVBQWUsQ0FBQztJQUNtQyxDQUFDO0NBQ3JFOzs7SUFGQyw2QkFBZ0M7O0lBQ3BCLGdDQUFvRDs7QUFHbEUsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUU1QixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsb0JBQW9CLENBQUM7SUFDSCxDQUFDO0NBQ3BDOzs7SUFGQyxpQ0FBcUM7O0lBQ3pCLG9DQUFtQjs7QUFHakMsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUUvQixZQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRDVCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUNBLENBQUM7Q0FDMUM7OztJQUZDLG9DQUF3Qzs7SUFDNUIsdUNBQXlCOztBQUd2QyxNQUFNLE9BQU8sZ0JBQWdCOzs7O0lBRTNCLFlBQW1CLE9BQWlEO1FBQWpELFlBQU8sR0FBUCxPQUFPLENBQTBDO1FBRDNELFNBQUksR0FBRyxrQkFBa0IsQ0FBQztJQUNvQyxDQUFDO0NBQ3pFOzs7SUFGQyxnQ0FBbUM7O0lBQ3ZCLG1DQUF3RDs7QUFHdEUsTUFBTSxPQUFPLHVCQUF1Qjs7OztJQUVsQyxZQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRDVCLFNBQUksR0FBRywwQkFBMEIsQ0FBQztJQUNILENBQUM7Q0FDMUM7OztJQUZDLHVDQUEyQzs7SUFDL0IsMENBQXlCOztBQUd2QyxNQUFNLE9BQU8sb0JBQW9COzs7O0lBRS9CLFlBQW1CLE9BQVk7UUFBWixZQUFPLEdBQVAsT0FBTyxDQUFLO1FBRHRCLFNBQUksR0FBRyx1QkFBdUIsQ0FBQztJQUNOLENBQUM7Q0FDcEM7OztJQUZDLG9DQUF3Qzs7SUFDNUIsdUNBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgVXNlclRva2VuIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Rva2VuLXR5cGVzLm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9UT0tFTiA9ICdbQXV0aF0gTG9hZCBVc2VyIFRva2VuJztcbmV4cG9ydCBjb25zdCBMT0FEX1VTRVJfVE9LRU5fRkFJTCA9ICdbQXV0aF0gTG9hZCBVc2VyIFRva2VuIEZhaWwnO1xuZXhwb3J0IGNvbnN0IExPQURfVVNFUl9UT0tFTl9TVUNDRVNTID0gJ1tBdXRoXSBMb2FkIFVzZXIgVG9rZW4gU3VjY2Vzcyc7XG5leHBvcnQgY29uc3QgUkVGUkVTSF9VU0VSX1RPS0VOID0gJ1tBdXRoXSBSZWZyZXNoIFVzZXIgVG9rZW4nO1xuZXhwb3J0IGNvbnN0IFJFRlJFU0hfVVNFUl9UT0tFTl9GQUlMID0gJ1tBdXRoXSBSZWZyZXNoIFVzZXIgVG9rZW4gRmFpbCc7XG5leHBvcnQgY29uc3QgUkVGUkVTSF9VU0VSX1RPS0VOX1NVQ0NFU1MgPSAnW0F1dGhdIFJlZnJlc2ggVXNlciBUb2tlbiBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIExvYWRVc2VyVG9rZW4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX1RPS0VOO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgcGFzc3dvcmQ6IHN0cmluZyB9KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgTG9hZFVzZXJUb2tlbkZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gTE9BRF9VU0VSX1RPS0VOX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBMb2FkVXNlclRva2VuU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBMT0FEX1VTRVJfVE9LRU5fU1VDQ0VTUztcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IFVzZXJUb2tlbikge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlZnJlc2hVc2VyVG9rZW4gaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVGUkVTSF9VU0VSX1RPS0VOO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogeyB1c2VySWQ6IHN0cmluZzsgcmVmcmVzaFRva2VuOiBzdHJpbmcgfSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlZnJlc2hVc2VyVG9rZW5TdWNjZXNzIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFRlJFU0hfVVNFUl9UT0tFTl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlclRva2VuKSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVmcmVzaFVzZXJUb2tlbkZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVGUkVTSF9VU0VSX1RPS0VOX0ZBSUw7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBhbnkpIHt9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXNlclRva2VuQWN0aW9uID1cbiAgfCBMb2FkVXNlclRva2VuXG4gIHwgTG9hZFVzZXJUb2tlbkZhaWxcbiAgfCBMb2FkVXNlclRva2VuU3VjY2Vzc1xuICB8IFJlZnJlc2hVc2VyVG9rZW5cbiAgfCBSZWZyZXNoVXNlclRva2VuRmFpbFxuICB8IFJlZnJlc2hVc2VyVG9rZW5TdWNjZXNzO1xuIl19