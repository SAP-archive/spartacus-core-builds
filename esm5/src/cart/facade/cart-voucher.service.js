import { __decorate, __read } from "tslib";
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from '../../auth/index';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { CartActions } from '../store/actions/index';
import { ADD_VOUCHER_PROCESS_ID } from '../store/multi-cart-state';
import { ActiveCartService } from './active-cart.service';
var CartVoucherService = /** @class */ (function () {
    function CartVoucherService(store, authService, activeCartService) {
        this.store = store;
        this.authService = authService;
        this.activeCartService = activeCartService;
    }
    CartVoucherService.prototype.addVoucher = function (voucherId, cartId) {
        var _this = this;
        this.combineUserAndCartId(cartId).subscribe(function (_a) {
            var _b = __read(_a, 2), occUserId = _b[0], cartIdentifier = _b[1];
            return _this.store.dispatch(new CartActions.CartAddVoucher({
                userId: occUserId,
                cartId: cartIdentifier,
                voucherId: voucherId,
            }));
        });
    };
    CartVoucherService.prototype.removeVoucher = function (voucherId, cartId) {
        var _this = this;
        this.combineUserAndCartId(cartId).subscribe(function (_a) {
            var _b = __read(_a, 2), occUserId = _b[0], cartIdentifier = _b[1];
            return _this.store.dispatch(new CartActions.CartRemoveVoucher({
                userId: occUserId,
                cartId: cartIdentifier,
                voucherId: voucherId,
            }));
        });
    };
    CartVoucherService.prototype.getAddVoucherResultError = function () {
        return this.store.pipe(select(getProcessErrorFactory(ADD_VOUCHER_PROCESS_ID)));
    };
    CartVoucherService.prototype.getAddVoucherResultSuccess = function () {
        return this.store.pipe(select(getProcessSuccessFactory(ADD_VOUCHER_PROCESS_ID)));
    };
    CartVoucherService.prototype.getAddVoucherResultLoading = function () {
        return this.store.pipe(select(getProcessLoadingFactory(ADD_VOUCHER_PROCESS_ID)));
    };
    CartVoucherService.prototype.resetAddVoucherProcessingState = function () {
        this.store.dispatch(new CartActions.CartResetAddVoucher());
    };
    CartVoucherService.prototype.combineUserAndCartId = function (cartId) {
        if (cartId) {
            return this.authService.getOccUserId().pipe(take(1), map(function (userId) { return [userId, cartId]; }));
        }
        else {
            return combineLatest([
                this.authService.getOccUserId(),
                this.activeCartService.getActiveCartId(),
            ]).pipe(take(1));
        }
    };
    CartVoucherService.ctorParameters = function () { return [
        { type: Store },
        { type: AuthService },
        { type: ActiveCartService }
    ]; };
    CartVoucherService = __decorate([
        Injectable()
    ], CartVoucherService);
    return CartVoucherService;
}());
export { CartVoucherService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2FydC9mYWNhZGUvY2FydC12b3VjaGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUUvQyxPQUFPLEVBQ0wsc0JBQXNCLEVBQ3RCLHdCQUF3QixFQUN4Qix3QkFBd0IsR0FDekIsTUFBTSxpREFBaUQsQ0FBQztBQUN6RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDckQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQ7SUFDRSw0QkFDWSxLQUFxRCxFQUNyRCxXQUF3QixFQUN4QixpQkFBb0M7UUFGcEMsVUFBSyxHQUFMLEtBQUssQ0FBZ0Q7UUFDckQsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtJQUM3QyxDQUFDO0lBRUosdUNBQVUsR0FBVixVQUFXLFNBQWlCLEVBQUUsTUFBZTtRQUE3QyxpQkFVQztRQVRDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsVUFBQyxFQUEyQjtnQkFBM0Isa0JBQTJCLEVBQTFCLGlCQUFTLEVBQUUsc0JBQWM7WUFDckUsT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FDakIsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDO2dCQUM3QixNQUFNLEVBQUUsU0FBUztnQkFDakIsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLFNBQVMsRUFBRSxTQUFTO2FBQ3JCLENBQUMsQ0FDSDtRQU5ELENBTUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELDBDQUFhLEdBQWIsVUFBYyxTQUFpQixFQUFFLE1BQWU7UUFBaEQsaUJBVUM7UUFUQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUMsRUFBMkI7Z0JBQTNCLGtCQUEyQixFQUExQixpQkFBUyxFQUFFLHNCQUFjO1lBQ3JFLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDO2dCQUNoQyxNQUFNLEVBQUUsU0FBUztnQkFDakIsTUFBTSxFQUFFLGNBQWM7Z0JBQ3RCLFNBQVMsRUFBRSxTQUFTO2FBQ3JCLENBQUMsQ0FDSDtRQU5ELENBTUMsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELHFEQUF3QixHQUF4QjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxzQkFBc0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQ3ZELENBQUM7SUFDSixDQUFDO0lBRUQsdURBQTBCLEdBQTFCO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7SUFFRCx1REFBMEIsR0FBMUI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUN6RCxDQUFDO0lBQ0osQ0FBQztJQUVELDJEQUE4QixHQUE5QjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxDQUFDLG1CQUFtQixFQUFFLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU8saURBQW9CLEdBQTVCLFVBQTZCLE1BQWM7UUFDekMsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUN6QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRyxDQUFDLFVBQUEsTUFBTSxJQUFJLE9BQUEsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQWhCLENBQWdCLENBQUMsQ0FDaEMsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLGFBQWEsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEVBQUU7YUFDekMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQjtJQUNILENBQUM7O2dCQS9Ea0IsS0FBSztnQkFDQyxXQUFXO2dCQUNMLGlCQUFpQjs7SUFKckMsa0JBQWtCO1FBRDlCLFVBQVUsRUFBRTtPQUNBLGtCQUFrQixDQWtFOUI7SUFBRCx5QkFBQztDQUFBLEFBbEVELElBa0VDO1NBbEVZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHNlbGVjdCwgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbVByb2Nlc3NTdG9yZSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHtcbiAgZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5LFxuICBnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnksXG59IGZyb20gJy4uLy4uL3Byb2Nlc3Mvc3RvcmUvc2VsZWN0b3JzL3Byb2Nlc3Muc2VsZWN0b3JzJztcbmltcG9ydCB7IENhcnRBY3Rpb25zIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBBRERfVk9VQ0hFUl9QUk9DRVNTX0lEIH0gZnJvbSAnLi4vc3RvcmUvbXVsdGktY2FydC1zdGF0ZSc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSB9IGZyb20gJy4vYWN0aXZlLWNhcnQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYXJ0Vm91Y2hlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPGZyb21Qcm9jZXNzU3RvcmUuU3RhdGVXaXRoUHJvY2Vzczx2b2lkPj4sXG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlXG4gICkge31cblxuICBhZGRWb3VjaGVyKHZvdWNoZXJJZDogc3RyaW5nLCBjYXJ0SWQ/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmNvbWJpbmVVc2VyQW5kQ2FydElkKGNhcnRJZCkuc3Vic2NyaWJlKChbb2NjVXNlcklkLCBjYXJ0SWRlbnRpZmllcl0pID0+XG4gICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKFxuICAgICAgICBuZXcgQ2FydEFjdGlvbnMuQ2FydEFkZFZvdWNoZXIoe1xuICAgICAgICAgIHVzZXJJZDogb2NjVXNlcklkLFxuICAgICAgICAgIGNhcnRJZDogY2FydElkZW50aWZpZXIsXG4gICAgICAgICAgdm91Y2hlcklkOiB2b3VjaGVySWQsXG4gICAgICAgIH0pXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJlbW92ZVZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcsIGNhcnRJZD86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29tYmluZVVzZXJBbmRDYXJ0SWQoY2FydElkKS5zdWJzY3JpYmUoKFtvY2NVc2VySWQsIGNhcnRJZGVudGlmaWVyXSkgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0UmVtb3ZlVm91Y2hlcih7XG4gICAgICAgICAgdXNlcklkOiBvY2NVc2VySWQsXG4gICAgICAgICAgY2FydElkOiBjYXJ0SWRlbnRpZmllcixcbiAgICAgICAgICB2b3VjaGVySWQ6IHZvdWNoZXJJZCxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgZ2V0QWRkVm91Y2hlclJlc3VsdEVycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0Vycm9yRmFjdG9yeShBRERfVk9VQ0hFUl9QUk9DRVNTX0lEKSlcbiAgICApO1xuICB9XG5cbiAgZ2V0QWRkVm91Y2hlclJlc3VsdFN1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzU3VjY2Vzc0ZhY3RvcnkoQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCkpXG4gICAgKTtcbiAgfVxuXG4gIGdldEFkZFZvdWNoZXJSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KEFERF9WT1VDSEVSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICByZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2FydEFjdGlvbnMuQ2FydFJlc2V0QWRkVm91Y2hlcigpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tYmluZVVzZXJBbmRDYXJ0SWQoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFtzdHJpbmcsIHN0cmluZ10+IHtcbiAgICBpZiAoY2FydElkKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5nZXRPY2NVc2VySWQoKS5waXBlKFxuICAgICAgICB0YWtlKDEpLFxuICAgICAgICBtYXAodXNlcklkID0+IFt1c2VySWQsIGNhcnRJZF0pXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29tYmluZUxhdGVzdChbXG4gICAgICAgIHRoaXMuYXV0aFNlcnZpY2UuZ2V0T2NjVXNlcklkKCksXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlQ2FydElkKCksXG4gICAgICBdKS5waXBlKHRha2UoMSkpO1xuICAgIH1cbiAgfVxufVxuIl19