/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { KymaActions } from '../store/actions/index';
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
        this.store.dispatch(new KymaActions.LoadOpenIdToken({ username, password }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2t5bWEvZmFjYWRlL2t5bWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLekQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsWUFBc0IsS0FBMkI7UUFBM0IsVUFBSyxHQUFMLEtBQUssQ0FBc0I7SUFBRyxDQUFDOzs7Ozs7OztJQVFyRCxlQUFlLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjtRQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDOzs7OztJQUtELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7OztZQXZCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFUZ0IsS0FBSzs7Ozs7Ozs7SUFXUiw0QkFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzZWxlY3QsIFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgT3BlbklkVG9rZW4gfSBmcm9tICcuLi9tb2RlbHMva3ltYS10b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBLeW1hQWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoS3ltYSB9IGZyb20gJy4uL3N0b3JlL2t5bWEtc3RhdGUnO1xuaW1wb3J0IHsgS3ltYVNlbGVjdG9ycyB9IGZyb20gJy4uL3N0b3JlL3NlbGVjdG9ycy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBLeW1hU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoS3ltYT4pIHt9XG5cbiAgLyoqXG4gICAqIEF1dGhvcml6ZXMgdXNpbmcgdGhlIEt5bWEgT0F1dGggY2xpZW50IHdpdGggc2NvcGUgYG9wZW5pZGAuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VybmFtZSBhIHVzZXJuYW1lXG4gICAqIEBwYXJhbSBwYXNzd29yZCBhIHBhc3N3b3JkXG4gICAqL1xuICBhdXRob3JpemVPcGVuSWQodXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICBuZXcgS3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuKHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBgT3BlbklkVG9rZW5gLCB3aGljaCB3YXMgcHJldmlvdXNseSByZXRyaWV2ZWQgdXNpbmcgYGF1dGhvcml6ZU9wZW5JZGAgbWV0aG9kLlxuICAgKi9cbiAgZ2V0T3BlbklkVG9rZW4oKTogT2JzZXJ2YWJsZTxPcGVuSWRUb2tlbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoc2VsZWN0KEt5bWFTZWxlY3RvcnMuZ2V0T3BlbklkVG9rZW5WYWx1ZSkpO1xuICB9XG59XG4iXX0=