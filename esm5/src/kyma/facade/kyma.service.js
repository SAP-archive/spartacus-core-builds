/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoadOpenIdToken } from '../store/actions/open-id-token.action';
import { getOpenIdTokenValue } from '../store/selectors/open-id-token.selectors';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
var KymaService = /** @class */ (function () {
    function KymaService(store) {
        this.store = store;
    }
    /**
     * Authorizes using the Kyma OAuth client with scope `openid`.
     *
     * @param username a username
     * @param password a password
     */
    /**
     * Authorizes using the Kyma OAuth client with scope `openid`.
     *
     * @param {?} username a username
     * @param {?} password a password
     * @return {?}
     */
    KymaService.prototype.authorizeOpenId = /**
     * Authorizes using the Kyma OAuth client with scope `openid`.
     *
     * @param {?} username a username
     * @param {?} password a password
     * @return {?}
     */
    function (username, password) {
        this.store.dispatch(new LoadOpenIdToken({ username: username, password: password }));
    };
    /**
     * Returns the `OpenIdToken`, which was previously retrieved using `authorizeOpenId` method.
     */
    /**
     * Returns the `OpenIdToken`, which was previously retrieved using `authorizeOpenId` method.
     * @return {?}
     */
    KymaService.prototype.getOpenIdToken = /**
     * Returns the `OpenIdToken`, which was previously retrieved using `authorizeOpenId` method.
     * @return {?}
     */
    function () {
        return this.store.pipe(select(getOpenIdTokenValue));
    };
    KymaService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    KymaService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    /** @nocollapse */ KymaService.ngInjectableDef = i0.defineInjectable({ factory: function KymaService_Factory() { return new KymaService(i0.inject(i1.Store)); }, token: KymaService, providedIn: "root" });
    return KymaService;
}());
export { KymaService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    KymaService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2t5bWEvZmFjYWRlL2t5bWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7OztBQUVqRjtJQUlFLHFCQUFzQixLQUEyQjtRQUEzQixVQUFLLEdBQUwsS0FBSyxDQUFzQjtJQUFHLENBQUM7SUFFckQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0gscUNBQWU7Ozs7Ozs7SUFBZixVQUFnQixRQUFnQixFQUFFLFFBQWdCO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG9DQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Z0JBckJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVGdCLEtBQUs7OztzQkFEdEI7Q0E4QkMsQUF0QkQsSUFzQkM7U0FuQlksV0FBVzs7Ozs7O0lBQ1YsNEJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9wZW5JZFRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL2t5bWEtdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgTG9hZE9wZW5JZFRva2VuIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9vcGVuLWlkLXRva2VuLmFjdGlvbic7XG5pbXBvcnQgeyBTdGF0ZVdpdGhLeW1hIH0gZnJvbSAnLi4vc3RvcmUva3ltYS1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRPcGVuSWRUb2tlblZhbHVlIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL29wZW4taWQtdG9rZW4uc2VsZWN0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEt5bWFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhLeW1hPikge31cblxuICAvKipcbiAgICogQXV0aG9yaXplcyB1c2luZyB0aGUgS3ltYSBPQXV0aCBjbGllbnQgd2l0aCBzY29wZSBgb3BlbmlkYC5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJuYW1lIGEgdXNlcm5hbWVcbiAgICogQHBhcmFtIHBhc3N3b3JkIGEgcGFzc3dvcmRcbiAgICovXG4gIGF1dGhvcml6ZU9wZW5JZCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgTG9hZE9wZW5JZFRva2VuKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBgT3BlbklkVG9rZW5gLCB3aGljaCB3YXMgcHJldmlvdXNseSByZXRyaWV2ZWQgdXNpbmcgYGF1dGhvcml6ZU9wZW5JZGAgbWV0aG9kLlxuICAgKi9cbiAgZ2V0T3BlbklkVG9rZW4oKTogT2JzZXJ2YWJsZTxPcGVuSWRUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KGdldE9wZW5JZFRva2VuVmFsdWUpKTtcbiAgfVxufVxuIl19