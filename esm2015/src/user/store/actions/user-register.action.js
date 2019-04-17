/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const REGISTER_USER = '[User] Register User';
/** @type {?} */
export const REGISTER_USER_FAIL = '[User] Register User Fail';
/** @type {?} */
export const REGISTER_USER_SUCCESS = '[User] Register User Success';
export class RegisterUser {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_USER;
    }
}
if (false) {
    /** @type {?} */
    RegisterUser.prototype.type;
    /** @type {?} */
    RegisterUser.prototype.payload;
}
export class RegisterUserFail {
    /**
     * @param {?} payload
     */
    constructor(payload) {
        this.payload = payload;
        this.type = REGISTER_USER_FAIL;
    }
}
if (false) {
    /** @type {?} */
    RegisterUserFail.prototype.type;
    /** @type {?} */
    RegisterUserFail.prototype.payload;
}
export class RegisterUserSuccess {
    constructor() {
        this.type = REGISTER_USER_SUCCESS;
    }
}
if (false) {
    /** @type {?} */
    RegisterUserSuccess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsTUFBTSxPQUFPLGFBQWEsR0FBRyxzQkFBc0I7O0FBQ25ELE1BQU0sT0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBQzdELE1BQU0sT0FBTyxxQkFBcUIsR0FBRyw4QkFBOEI7QUFFbkUsTUFBTSxPQUFPLFlBQVk7Ozs7SUFFdkIsWUFBbUIsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7UUFEdkMsU0FBSSxHQUFHLGFBQWEsQ0FBQztJQUNxQixDQUFDO0NBQ3JEOzs7SUFGQyw0QkFBOEI7O0lBQ2xCLCtCQUFvQzs7QUFHbEQsTUFBTSxPQUFPLGdCQUFnQjs7OztJQUUzQixZQUFtQixPQUFZO1FBQVosWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUR0QixTQUFJLEdBQUcsa0JBQWtCLENBQUM7SUFDRCxDQUFDO0NBQ3BDOzs7SUFGQyxnQ0FBbUM7O0lBQ3ZCLG1DQUFtQjs7QUFHakMsTUFBTSxPQUFPLG1CQUFtQjtJQUU5QjtRQURTLFNBQUksR0FBRyxxQkFBcUIsQ0FBQztJQUN2QixDQUFDO0NBQ2pCOzs7SUFGQyxtQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5cbmltcG9ydCB7IFVzZXJSZWdpc3RlckZvcm1EYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvdXNlci5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSID0gJ1tVc2VyXSBSZWdpc3RlciBVc2VyJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9VU0VSX0ZBSUwgPSAnW1VzZXJdIFJlZ2lzdGVyIFVzZXIgRmFpbCc7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfVVNFUl9TVUNDRVNTID0gJ1tVc2VyXSBSZWdpc3RlciBVc2VyIFN1Y2Nlc3MnO1xuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX1VTRVI7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBwYXlsb2FkOiBVc2VyUmVnaXN0ZXJGb3JtRGF0YSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlckZhaWwgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfVVNFUl9GQUlMO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogYW55KSB7fVxufVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0ZXJVc2VyU3VjY2VzcyBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSX1NVQ0NFU1M7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cblxuLy8gYWN0aW9uIHR5cGVzXG5leHBvcnQgdHlwZSBVc2VyUmVnaXN0ZXJBY3Rpb24gPVxuICB8IFJlZ2lzdGVyVXNlclxuICB8IFJlZ2lzdGVyVXNlckZhaWxcbiAgfCBSZWdpc3RlclVzZXJTdWNjZXNzO1xuIl19