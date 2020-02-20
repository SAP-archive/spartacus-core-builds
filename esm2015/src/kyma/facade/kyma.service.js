import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { KymaActions } from '../store/actions/index';
import { KymaSelectors } from '../store/selectors/index';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
let KymaService = class KymaService {
    constructor(store) {
        this.store = store;
    }
    /**
     * Authorizes using the Kyma OAuth client with scope `openid`.
     *
     * @param username a username
     * @param password a password
     */
    authorizeOpenId(username, password) {
        this.store.dispatch(new KymaActions.LoadOpenIdToken({ username, password }));
    }
    /**
     * Returns the `OpenIdToken`, which was previously retrieved using `authorizeOpenId` method.
     */
    getOpenIdToken() {
        return this.store.pipe(select(KymaSelectors.getOpenIdTokenValue));
    }
};
KymaService.ctorParameters = () => [
    { type: Store }
];
KymaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function KymaService_Factory() { return new KymaService(i0.ɵɵinject(i1.Store)); }, token: KymaService, providedIn: "root" });
KymaService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], KymaService);
export { KymaService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2t5bWEvZmFjYWRlL2t5bWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLekQsSUFBYSxXQUFXLEdBQXhCLE1BQWEsV0FBVztJQUN0QixZQUFzQixLQUEyQjtRQUEzQixVQUFLLEdBQUwsS0FBSyxDQUFzQjtJQUFHLENBQUM7SUFFckQ7Ozs7O09BS0c7SUFDSCxlQUFlLENBQUMsUUFBZ0IsRUFBRSxRQUFnQjtRQUNoRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsZUFBZSxDQUFDLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1osT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0NBQ0YsQ0FBQTs7WUFwQjhCLEtBQUs7OztBQUR2QixXQUFXO0lBSHZCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxXQUFXLENBcUJ2QjtTQXJCWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9wZW5JZFRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL2t5bWEtdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgS3ltYUFjdGlvbnMgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aEt5bWEgfSBmcm9tICcuLi9zdG9yZS9reW1hLXN0YXRlJztcbmltcG9ydCB7IEt5bWFTZWxlY3RvcnMgfSBmcm9tICcuLi9zdG9yZS9zZWxlY3RvcnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgS3ltYVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEt5bWE+KSB7fVxuXG4gIC8qKlxuICAgKiBBdXRob3JpemVzIHVzaW5nIHRoZSBLeW1hIE9BdXRoIGNsaWVudCB3aXRoIHNjb3BlIGBvcGVuaWRgLlxuICAgKlxuICAgKiBAcGFyYW0gdXNlcm5hbWUgYSB1c2VybmFtZVxuICAgKiBAcGFyYW0gcGFzc3dvcmQgYSBwYXNzd29yZFxuICAgKi9cbiAgYXV0aG9yaXplT3BlbklkKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgbmV3IEt5bWFBY3Rpb25zLkxvYWRPcGVuSWRUb2tlbih7IHVzZXJuYW1lLCBwYXNzd29yZCB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYE9wZW5JZFRva2VuYCwgd2hpY2ggd2FzIHByZXZpb3VzbHkgcmV0cmlldmVkIHVzaW5nIGBhdXRob3JpemVPcGVuSWRgIG1ldGhvZC5cbiAgICovXG4gIGdldE9wZW5JZFRva2VuKCk6IE9ic2VydmFibGU8T3BlbklkVG9rZW4+IHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZS5waXBlKHNlbGVjdChLeW1hU2VsZWN0b3JzLmdldE9wZW5JZFRva2VuVmFsdWUpKTtcbiAgfVxufVxuIl19