/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { LoadOpenIdToken } from '../store/actions/open-id-token.action';
import { getOpenIdTokenValue } from '../store/selectors/open-id-token.selectors';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
export class KymaService {
    /**
     * @param {?} store
     */
    constructor(store) {
        this.store = store;
    }
    /**
     * Authorizes using the Kyma OAuth client with scope `openid`.
     *
     * @param {?} username a username
     * @param {?} password a password
     * @return {?}
     */
    authorizeOpenId(username, password) {
        this.store.dispatch(new LoadOpenIdToken({ username, password }));
    }
    /**
     * Returns the `OpenIdToken`, which was previously retrieved using `authorizeOpenId` method.
     * @return {?}
     */
    getOpenIdToken() {
        return this.store.pipe(select(getOpenIdTokenValue));
    }
}
KymaService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
KymaService.ctorParameters = () => [
    { type: Store }
];
/** @nocollapse */ KymaService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function KymaService_Factory() { return new KymaService(i0.ɵɵinject(i1.Store)); }, token: KymaService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    KymaService.prototype.store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2t5bWEvZmFjYWRlL2t5bWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFeEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNENBQTRDLENBQUM7OztBQUtqRixNQUFNLE9BQU8sV0FBVzs7OztJQUN0QixZQUFzQixLQUEyQjtRQUEzQixVQUFLLEdBQUwsS0FBSyxDQUFzQjtJQUFHLENBQUM7Ozs7Ozs7O0lBUXJELGVBQWUsQ0FBQyxRQUFnQixFQUFFLFFBQWdCO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksZUFBZSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUtELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7O1lBckJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRnQixLQUFLOzs7Ozs7OztJQVdSLDRCQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPcGVuSWRUb2tlbiB9IGZyb20gJy4uL21vZGVscy9reW1hLXRva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IExvYWRPcGVuSWRUb2tlbiB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvb3Blbi1pZC10b2tlbi5hY3Rpb24nO1xuaW1wb3J0IHsgU3RhdGVXaXRoS3ltYSB9IGZyb20gJy4uL3N0b3JlL2t5bWEtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0T3BlbklkVG9rZW5WYWx1ZSB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9vcGVuLWlkLXRva2VuLnNlbGVjdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBLeW1hU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoS3ltYT4pIHt9XG5cbiAgLyoqXG4gICAqIEF1dGhvcml6ZXMgdXNpbmcgdGhlIEt5bWEgT0F1dGggY2xpZW50IHdpdGggc2NvcGUgYG9wZW5pZGAuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VybmFtZSBhIHVzZXJuYW1lXG4gICAqIEBwYXJhbSBwYXNzd29yZCBhIHBhc3N3b3JkXG4gICAqL1xuICBhdXRob3JpemVPcGVuSWQodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2gobmV3IExvYWRPcGVuSWRUb2tlbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYE9wZW5JZFRva2VuYCwgd2hpY2ggd2FzIHByZXZpb3VzbHkgcmV0cmlldmVkIHVzaW5nIGBhdXRob3JpemVPcGVuSWRgIG1ldGhvZC5cbiAgICovXG4gIGdldE9wZW5JZFRva2VuKCk6IE9ic2VydmFibGU8T3BlbklkVG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChnZXRPcGVuSWRUb2tlblZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==