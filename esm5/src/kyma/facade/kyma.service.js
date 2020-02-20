import { __decorate } from "tslib";
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
    KymaService.prototype.authorizeOpenId = function (username, password) {
        this.store.dispatch(new KymaActions.LoadOpenIdToken({ username: username, password: password }));
    };
    /**
     * Returns the `OpenIdToken`, which was previously retrieved using `authorizeOpenId` method.
     */
    KymaService.prototype.getOpenIdToken = function () {
        return this.store.pipe(select(KymaSelectors.getOpenIdTokenValue));
    };
    KymaService.ctorParameters = function () { return [
        { type: Store }
    ]; };
    KymaService.ɵprov = i0.ɵɵdefineInjectable({ factory: function KymaService_Factory() { return new KymaService(i0.ɵɵinject(i1.Store)); }, token: KymaService, providedIn: "root" });
    KymaService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], KymaService);
    return KymaService;
}());
export { KymaService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2t5bWEvZmFjYWRlL2t5bWEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUc1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFckQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7QUFLekQ7SUFDRSxxQkFBc0IsS0FBMkI7UUFBM0IsVUFBSyxHQUFMLEtBQUssQ0FBc0I7SUFBRyxDQUFDO0lBRXJEOzs7OztPQUtHO0lBQ0gscUNBQWUsR0FBZixVQUFnQixRQUFnQixFQUFFLFFBQWdCO1FBQ2hELElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUNqQixJQUFJLFdBQVcsQ0FBQyxlQUFlLENBQUMsRUFBRSxRQUFRLFVBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQ3hELENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxvQ0FBYyxHQUFkO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUNwRSxDQUFDOztnQkFuQjRCLEtBQUs7OztJQUR2QixXQUFXO1FBSHZCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxXQUFXLENBcUJ2QjtzQkFoQ0Q7Q0FnQ0MsQUFyQkQsSUFxQkM7U0FyQlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPcGVuSWRUb2tlbiB9IGZyb20gJy4uL21vZGVscy9reW1hLXRva2VuLXR5cGVzLm1vZGVsJztcbmltcG9ydCB7IEt5bWFBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhLeW1hIH0gZnJvbSAnLi4vc3RvcmUva3ltYS1zdGF0ZSc7XG5pbXBvcnQgeyBLeW1hU2VsZWN0b3JzIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2luZGV4JztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEt5bWFTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhLeW1hPikge31cblxuICAvKipcbiAgICogQXV0aG9yaXplcyB1c2luZyB0aGUgS3ltYSBPQXV0aCBjbGllbnQgd2l0aCBzY29wZSBgb3BlbmlkYC5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJuYW1lIGEgdXNlcm5hbWVcbiAgICogQHBhcmFtIHBhc3N3b3JkIGEgcGFzc3dvcmRcbiAgICovXG4gIGF1dGhvcml6ZU9wZW5JZCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgIG5ldyBLeW1hQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4oeyB1c2VybmFtZSwgcGFzc3dvcmQgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGBPcGVuSWRUb2tlbmAsIHdoaWNoIHdhcyBwcmV2aW91c2x5IHJldHJpZXZlZCB1c2luZyBgYXV0aG9yaXplT3BlbklkYCBtZXRob2QuXG4gICAqL1xuICBnZXRPcGVuSWRUb2tlbigpOiBPYnNlcnZhYmxlPE9wZW5JZFRva2VuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShzZWxlY3QoS3ltYVNlbGVjdG9ycy5nZXRPcGVuSWRUb2tlblZhbHVlKSk7XG4gIH1cbn1cbiJdfQ==