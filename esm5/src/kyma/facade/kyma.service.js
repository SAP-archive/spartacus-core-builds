/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { KymaActions } from '../store/actions/index';
import { KymaSelectors } from '../store/selectors/index';
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
        this.store.dispatch(new KymaActions.LoadOpenIdToken({ username: username, password: password }));
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
        return this.store.pipe(select(KymaSelectors.getOpenIdTokenValue));
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
    /** @nocollapse */ KymaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function KymaService_Factory() { return new KymaService(i0.ɵɵinject(i1.Store)); }, token: KymaService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2t5bWEvZmFjYWRlL2t5bWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFFekQ7SUFJRSxxQkFBc0IsS0FBMkI7UUFBM0IsVUFBSyxHQUFMLEtBQUssQ0FBc0I7SUFBRyxDQUFDO0lBRXJEOzs7OztPQUtHOzs7Ozs7OztJQUNILHFDQUFlOzs7Ozs7O0lBQWYsVUFBZ0IsUUFBZ0IsRUFBRSxRQUFnQjtRQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQUUsUUFBUSxVQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUN4RCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG9DQUFjOzs7O0lBQWQ7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7O2dCQXZCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVRnQixLQUFLOzs7c0JBRHRCO0NBZ0NDLEFBeEJELElBd0JDO1NBckJZLFdBQVc7Ozs7OztJQUNWLDRCQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPcGVuSWRUb2tlbiB9IGZyb20gJy4uL21vZGVscy9reW1hLXRva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IEt5bWFBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhLeW1hIH0gZnJvbSAnLi4vc3RvcmUva3ltYS1zdGF0ZSc7XG5pbXBvcnQgeyBLeW1hU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEt5bWFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhLeW1hPikge31cblxuICAvKipcbiAgICogQXV0aG9yaXplcyB1c2luZyB0aGUgS3ltYSBPQXV0aCBjbGllbnQgd2l0aCBzY29wZSBgb3BlbmlkYC5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJuYW1lIGEgdXNlcm5hbWVcbiAgICogQHBhcmFtIHBhc3N3b3JkIGEgcGFzc3dvcmRcbiAgICovXG4gIGF1dGhvcml6ZU9wZW5JZCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBLeW1hQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGBPcGVuSWRUb2tlbmAsIHdoaWNoIHdhcyBwcmV2aW91c2x5IHJldHJpZXZlZCB1c2luZyBgYXV0aG9yaXplT3BlbklkYCBtZXRob2QuXG4gICAqL1xuICBnZXRPcGVuSWRUb2tlbigpOiBPYnNlcnZhYmxlPE9wZW5JZFRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoS3ltYVNlbGVjdG9ycy5nZXRPcGVuSWRUb2tlblZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==