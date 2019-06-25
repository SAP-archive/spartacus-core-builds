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
        this.store.dispatch(new fromKymaActions.LoadOpenIdToken({ username, password }));
    }
    /**
     * Returns the `OpenIdToken`, which was previously retrieved using `authorizeOpenId` method.
     * @return {?}
     */
    getOpenIdToken() {
        return this.store.pipe(select(KymaSelectors.getOpenIdTokenValue));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2t5bWEvZmFjYWRlL2t5bWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEtBQUssZUFBZSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7O0FBS3pELE1BQU0sT0FBTyxXQUFXOzs7O0lBQ3RCLFlBQXNCLEtBQTJCO1FBQTNCLFVBQUssR0FBTCxLQUFLLENBQXNCO0lBQUcsQ0FBQzs7Ozs7Ozs7SUFRckQsZUFBZSxDQUFDLFFBQWdCLEVBQUUsUUFBZ0I7UUFDaEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksZUFBZSxDQUFDLGVBQWUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUM1RCxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFLRCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOzs7WUF2QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVGdCLEtBQUs7Ozs7Ozs7O0lBV1IsNEJBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9wZW5JZFRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL2t5bWEtdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0ICogYXMgZnJvbUt5bWFBY3Rpb25zIGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoS3ltYSB9IGZyb20gJy4uL3N0b3JlL2t5bWEtc3RhdGUnO1xuaW1wb3J0IHsgS3ltYVNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBLeW1hU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoS3ltYT4pIHt9XG5cbiAgLyoqXG4gICAqIEF1dGhvcml6ZXMgdXNpbmcgdGhlIEt5bWEgT0F1dGggY2xpZW50IHdpdGggc2NvcGUgYG9wZW5pZGAuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VybmFtZSBhIHVzZXJuYW1lXG4gICAqIEBwYXJhbSBwYXNzd29yZCBhIHBhc3N3b3JkXG4gICAqL1xuICBhdXRob3JpemVPcGVuSWQodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgZnJvbUt5bWFBY3Rpb25zLkxvYWRPcGVuSWRUb2tlbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYE9wZW5JZFRva2VuYCwgd2hpY2ggd2FzIHByZXZpb3VzbHkgcmV0cmlldmVkIHVzaW5nIGBhdXRob3JpemVPcGVuSWRgIG1ldGhvZC5cbiAgICovXG4gIGdldE9wZW5JZFRva2VuKCk6IE9ic2VydmFibGU8T3BlbklkVG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChLeW1hU2VsZWN0b3JzLmdldE9wZW5JZFRva2VuVmFsdWUpKTtcbiAgfVxufVxuIl19