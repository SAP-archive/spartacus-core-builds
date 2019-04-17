/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var REGISTER_USER = '[User] Register User';
/** @type {?} */
export var REGISTER_USER_FAIL = '[User] Register User Fail';
/** @type {?} */
export var REGISTER_USER_SUCCESS = '[User] Register User Success';
var RegisterUser = /** @class */ (function () {
    function RegisterUser(payload) {
        this.payload = payload;
        this.type = REGISTER_USER;
    }
    return RegisterUser;
}());
export { RegisterUser };
if (false) {
    /** @type {?} */
    RegisterUser.prototype.type;
    /** @type {?} */
    RegisterUser.prototype.payload;
}
var RegisterUserFail = /** @class */ (function () {
    function RegisterUserFail(payload) {
        this.payload = payload;
        this.type = REGISTER_USER_FAIL;
    }
    return RegisterUserFail;
}());
export { RegisterUserFail };
if (false) {
    /** @type {?} */
    RegisterUserFail.prototype.type;
    /** @type {?} */
    RegisterUserFail.prototype.payload;
}
var RegisterUserSuccess = /** @class */ (function () {
    function RegisterUserSuccess() {
        this.type = REGISTER_USER_SUCCESS;
    }
    return RegisterUserSuccess;
}());
export { RegisterUserSuccess };
if (false) {
    /** @type {?} */
    RegisterUserSuccess.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1yZWdpc3Rlci5hY3Rpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9hY3Rpb25zL3VzZXItcmVnaXN0ZXIuYWN0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsTUFBTSxLQUFPLGFBQWEsR0FBRyxzQkFBc0I7O0FBQ25ELE1BQU0sS0FBTyxrQkFBa0IsR0FBRywyQkFBMkI7O0FBQzdELE1BQU0sS0FBTyxxQkFBcUIsR0FBRyw4QkFBOEI7QUFFbkU7SUFFRSxzQkFBbUIsT0FBNkI7UUFBN0IsWUFBTyxHQUFQLE9BQU8sQ0FBc0I7UUFEdkMsU0FBSSxHQUFHLGFBQWEsQ0FBQztJQUNxQixDQUFDO0lBQ3RELG1CQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7Ozs7SUFGQyw0QkFBOEI7O0lBQ2xCLCtCQUFvQzs7QUFHbEQ7SUFFRSwwQkFBbUIsT0FBWTtRQUFaLFlBQU8sR0FBUCxPQUFPLENBQUs7UUFEdEIsU0FBSSxHQUFHLGtCQUFrQixDQUFDO0lBQ0QsQ0FBQztJQUNyQyx1QkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsZ0NBQW1DOztJQUN2QixtQ0FBbUI7O0FBR2pDO0lBRUU7UUFEUyxTQUFJLEdBQUcscUJBQXFCLENBQUM7SUFDdkIsQ0FBQztJQUNsQiwwQkFBQztBQUFELENBQUMsQUFIRCxJQUdDOzs7O0lBRkMsbUNBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBVc2VyUmVnaXN0ZXJGb3JtRGF0YSB9IGZyb20gJy4uLy4uL21vZGVsL3VzZXIubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgUkVHSVNURVJfVVNFUiA9ICdbVXNlcl0gUmVnaXN0ZXIgVXNlcic7XG5leHBvcnQgY29uc3QgUkVHSVNURVJfVVNFUl9GQUlMID0gJ1tVc2VyXSBSZWdpc3RlciBVc2VyIEZhaWwnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX1VTRVJfU1VDQ0VTUyA9ICdbVXNlcl0gUmVnaXN0ZXIgVXNlciBTdWNjZXNzJztcblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlciBpbXBsZW1lbnRzIEFjdGlvbiB7XG4gIHJlYWRvbmx5IHR5cGUgPSBSRUdJU1RFUl9VU0VSO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcGF5bG9hZDogVXNlclJlZ2lzdGVyRm9ybURhdGEpIHt9XG59XG5cbmV4cG9ydCBjbGFzcyBSZWdpc3RlclVzZXJGYWlsIGltcGxlbWVudHMgQWN0aW9uIHtcbiAgcmVhZG9ubHkgdHlwZSA9IFJFR0lTVEVSX1VTRVJfRkFJTDtcbiAgY29uc3RydWN0b3IocHVibGljIHBheWxvYWQ6IGFueSkge31cbn1cblxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyVXNlclN1Y2Nlc3MgaW1wbGVtZW50cyBBY3Rpb24ge1xuICByZWFkb25seSB0eXBlID0gUkVHSVNURVJfVVNFUl9TVUNDRVNTO1xuICBjb25zdHJ1Y3RvcigpIHt9XG59XG5cbi8vIGFjdGlvbiB0eXBlc1xuZXhwb3J0IHR5cGUgVXNlclJlZ2lzdGVyQWN0aW9uID1cbiAgfCBSZWdpc3RlclVzZXJcbiAgfCBSZWdpc3RlclVzZXJGYWlsXG4gIHwgUmVnaXN0ZXJVc2VyU3VjY2VzcztcbiJdfQ==