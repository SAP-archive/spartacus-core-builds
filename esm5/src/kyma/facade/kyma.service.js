/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromKymaActions from '../store/actions/index';
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
        this.store.dispatch(new fromKymaActions.LoadOpenIdToken({ username: username, password: password }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2t5bWEvZmFjYWRlL2t5bWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEtBQUssZUFBZSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBRXpEO0lBSUUscUJBQXNCLEtBQTJCO1FBQTNCLFVBQUssR0FBTCxLQUFLLENBQXNCO0lBQUcsQ0FBQztJQUVyRDs7Ozs7T0FLRzs7Ozs7Ozs7SUFDSCxxQ0FBZTs7Ozs7OztJQUFmLFVBQWdCLFFBQWdCLEVBQUUsUUFBZ0I7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FDNUQsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRzs7Ozs7SUFDSCxvQ0FBYzs7OztJQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOztnQkF2QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFUZ0IsS0FBSzs7O3NCQUR0QjtDQWdDQyxBQXhCRCxJQXdCQztTQXJCWSxXQUFXOzs7Ozs7SUFDViw0QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3BlbklkVG9rZW4gfSBmcm9tICcuLi9tb2RlbHMva3ltYS10b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgKiBhcyBmcm9tS3ltYUFjdGlvbnMgZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhLeW1hIH0gZnJvbSAnLi4vc3RvcmUva3ltYS1zdGF0ZSc7XG5pbXBvcnQgeyBLeW1hU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEt5bWFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhLeW1hPikge31cblxuICAvKipcbiAgICogQXV0aG9yaXplcyB1c2luZyB0aGUgS3ltYSBPQXV0aCBjbGllbnQgd2l0aCBzY29wZSBgb3BlbmlkYC5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJuYW1lIGEgdXNlcm5hbWVcbiAgICogQHBhcmFtIHBhc3N3b3JkIGEgcGFzc3dvcmRcbiAgICovXG4gIGF1dGhvcml6ZU9wZW5JZCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBmcm9tS3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBgT3BlbklkVG9rZW5gLCB3aGljaCB3YXMgcHJldmlvdXNseSByZXRyaWV2ZWQgdXNpbmcgYGF1dGhvcml6ZU9wZW5JZGAgbWV0aG9kLlxuICAgKi9cbiAgZ2V0T3BlbklkVG9rZW4oKTogT2JzZXJ2YWJsZTxPcGVuSWRUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KEt5bWFTZWxlY3RvcnMuZ2V0T3BlbklkVG9rZW5WYWx1ZSkpO1xuICB9XG59XG4iXX0=