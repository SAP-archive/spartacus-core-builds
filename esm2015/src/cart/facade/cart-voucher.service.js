import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { UserIdService } from '../../auth/index';
import { getProcessErrorFactory, getProcessLoadingFactory, getProcessSuccessFactory, } from '../../process/store/selectors/process.selectors';
import { CartActions } from '../store/actions/index';
import { ADD_VOUCHER_PROCESS_ID } from '../store/multi-cart-state';
import { ActiveCartService } from './active-cart.service';
import * as i0 from "@angular/core";
import * as i1 from "@ngrx/store";
import * as i2 from "./active-cart.service";
import * as i3 from "../../auth/user-auth/facade/user-id.service";
export class CartVoucherService {
    constructor(store, activeCartService, userIdService) {
        this.store = store;
        this.activeCartService = activeCartService;
        this.userIdService = userIdService;
    }
    addVoucher(voucherId, cartId) {
        this.combineUserAndCartId(cartId).subscribe(([occUserId, cartIdentifier]) => this.store.dispatch(new CartActions.CartAddVoucher({
            userId: occUserId,
            cartId: cartIdentifier,
            voucherId: voucherId,
        })));
    }
    removeVoucher(voucherId, cartId) {
        this.combineUserAndCartId(cartId).subscribe(([occUserId, cartIdentifier]) => this.store.dispatch(new CartActions.CartRemoveVoucher({
            userId: occUserId,
            cartId: cartIdentifier,
            voucherId: voucherId,
        })));
    }
    // TODO(#7241): Remove when switching to event system for add voucher
    /**
     * Get add voucher process error flag
     * @deprecated since 2.0
     */
    getAddVoucherResultError() {
        return this.store.pipe(select(getProcessErrorFactory(ADD_VOUCHER_PROCESS_ID)));
    }
    // TODO(#7241): Remove when switching to event system for add voucher
    /**
     * Get add voucher process success flag
     * @deprecated since 2.0
     */
    getAddVoucherResultSuccess() {
        return this.store.pipe(select(getProcessSuccessFactory(ADD_VOUCHER_PROCESS_ID)));
    }
    // TODO(#7241): Remove when switching to event system for add voucher
    /**
     * Get add voucher process loading flag
     * @deprecated since 2.0
     */
    getAddVoucherResultLoading() {
        return this.store.pipe(select(getProcessLoadingFactory(ADD_VOUCHER_PROCESS_ID)));
    }
    // TODO(#7241): Remove when switching to event system for add voucher
    /**
     * Reset add voucher process
     * @deprecated since 2.0
     */
    resetAddVoucherProcessingState() {
        this.store.dispatch(new CartActions.CartResetAddVoucher());
    }
    combineUserAndCartId(cartId) {
        if (cartId) {
            return this.userIdService.getUserId().pipe(take(1), map((userId) => [userId, cartId]));
        }
        else {
            return combineLatest([
                this.userIdService.getUserId(),
                this.activeCartService.getActiveCartId(),
            ]).pipe(take(1));
        }
    }
}
CartVoucherService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CartVoucherService_Factory() { return new CartVoucherService(i0.ɵɵinject(i1.Store), i0.ɵɵinject(i2.ActiveCartService), i0.ɵɵinject(i3.UserIdService)); }, token: CartVoucherService, providedIn: "root" });
CartVoucherService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CartVoucherService.ctorParameters = () => [
    { type: Store },
    { type: ActiveCartService },
    { type: UserIdService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FydC12b3VjaGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jYXJ0L2ZhY2FkZS9jYXJ0LXZvdWNoZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzVDLE9BQU8sRUFBRSxhQUFhLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFakQsT0FBTyxFQUNMLHNCQUFzQixFQUN0Qix3QkFBd0IsRUFDeEIsd0JBQXdCLEdBQ3pCLE1BQU0saURBQWlELENBQUM7QUFDekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUsxRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFlBQ1ksS0FBcUQsRUFDckQsaUJBQW9DLEVBQ3BDLGFBQTRCO1FBRjVCLFVBQUssR0FBTCxLQUFLLENBQWdEO1FBQ3JELHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQWU7SUFDckMsQ0FBQztJQUVKLFVBQVUsQ0FBQyxTQUFpQixFQUFFLE1BQWU7UUFDM0MsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FDMUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGNBQWMsQ0FBQztZQUM3QixNQUFNLEVBQUUsU0FBUztZQUNqQixNQUFNLEVBQUUsY0FBYztZQUN0QixTQUFTLEVBQUUsU0FBUztTQUNyQixDQUFDLENBQ0gsQ0FDRixDQUFDO0lBQ0osQ0FBQztJQUVELGFBQWEsQ0FBQyxTQUFpQixFQUFFLE1BQWU7UUFDOUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLGNBQWMsQ0FBQyxFQUFFLEVBQUUsQ0FDMUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDO1lBQ2hDLE1BQU0sRUFBRSxTQUFTO1lBQ2pCLE1BQU0sRUFBRSxjQUFjO1lBQ3RCLFNBQVMsRUFBRSxTQUFTO1NBQ3JCLENBQUMsQ0FDSCxDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQscUVBQXFFO0lBQ3JFOzs7T0FHRztJQUNILHdCQUF3QjtRQUN0QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsc0JBQXNCLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUN2RCxDQUFDO0lBQ0osQ0FBQztJQUVELHFFQUFxRTtJQUNyRTs7O09BR0c7SUFDSCwwQkFBMEI7UUFDeEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHdCQUF3QixDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FDekQsQ0FBQztJQUNKLENBQUM7SUFFRCxxRUFBcUU7SUFDckU7OztPQUdHO0lBQ0gsMEJBQTBCO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQ3pELENBQUM7SUFDSixDQUFDO0lBRUQscUVBQXFFO0lBQ3JFOzs7T0FHRztJQUNILDhCQUE4QjtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLENBQUM7SUFDN0QsQ0FBQztJQUVPLG9CQUFvQixDQUFDLE1BQWM7UUFDekMsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUN4QyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUNsQyxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8sYUFBYSxDQUFDO2dCQUNuQixJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRTtnQkFDOUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsRUFBRTthQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7OztZQXhGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQWhCZ0IsS0FBSztZQVliLGlCQUFpQjtZQVRqQixhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgc2VsZWN0LCBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVzZXJJZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCAqIGFzIGZyb21Qcm9jZXNzU3RvcmUgZnJvbSAnLi4vLi4vcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0YXRlJztcbmltcG9ydCB7XG4gIGdldFByb2Nlc3NFcnJvckZhY3RvcnksXG4gIGdldFByb2Nlc3NMb2FkaW5nRmFjdG9yeSxcbiAgZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5LFxufSBmcm9tICcuLi8uLi9wcm9jZXNzL3N0b3JlL3NlbGVjdG9ycy9wcm9jZXNzLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBDYXJ0QWN0aW9ucyB9IGZyb20gJy4uL3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQUREX1ZPVUNIRVJfUFJPQ0VTU19JRCB9IGZyb20gJy4uL3N0b3JlL211bHRpLWNhcnQtc3RhdGUnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UgfSBmcm9tICcuL2FjdGl2ZS1jYXJ0LnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2FydFZvdWNoZXJTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxmcm9tUHJvY2Vzc1N0b3JlLlN0YXRlV2l0aFByb2Nlc3M8dm9pZD4+LFxuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHVzZXJJZFNlcnZpY2U6IFVzZXJJZFNlcnZpY2VcbiAgKSB7fVxuXG4gIGFkZFZvdWNoZXIodm91Y2hlcklkOiBzdHJpbmcsIGNhcnRJZD86IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuY29tYmluZVVzZXJBbmRDYXJ0SWQoY2FydElkKS5zdWJzY3JpYmUoKFtvY2NVc2VySWQsIGNhcnRJZGVudGlmaWVyXSkgPT5cbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBDYXJ0QWN0aW9ucy5DYXJ0QWRkVm91Y2hlcih7XG4gICAgICAgICAgdXNlcklkOiBvY2NVc2VySWQsXG4gICAgICAgICAgY2FydElkOiBjYXJ0SWRlbnRpZmllcixcbiAgICAgICAgICB2b3VjaGVySWQ6IHZvdWNoZXJJZCxcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgcmVtb3ZlVm91Y2hlcih2b3VjaGVySWQ6IHN0cmluZywgY2FydElkPzogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5jb21iaW5lVXNlckFuZENhcnRJZChjYXJ0SWQpLnN1YnNjcmliZSgoW29jY1VzZXJJZCwgY2FydElkZW50aWZpZXJdKSA9PlxuICAgICAgdGhpcy5zdG9yZS5kaXNwYXRjaChcbiAgICAgICAgbmV3IENhcnRBY3Rpb25zLkNhcnRSZW1vdmVWb3VjaGVyKHtcbiAgICAgICAgICB1c2VySWQ6IG9jY1VzZXJJZCxcbiAgICAgICAgICBjYXJ0SWQ6IGNhcnRJZGVudGlmaWVyLFxuICAgICAgICAgIHZvdWNoZXJJZDogdm91Y2hlcklkLFxuICAgICAgICB9KVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICAvLyBUT0RPKCM3MjQxKTogUmVtb3ZlIHdoZW4gc3dpdGNoaW5nIHRvIGV2ZW50IHN5c3RlbSBmb3IgYWRkIHZvdWNoZXJcbiAgLyoqXG4gICAqIEdldCBhZGQgdm91Y2hlciBwcm9jZXNzIGVycm9yIGZsYWdcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMi4wXG4gICAqL1xuICBnZXRBZGRWb3VjaGVyUmVzdWx0RXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUucGlwZShcbiAgICAgIHNlbGVjdChnZXRQcm9jZXNzRXJyb3JGYWN0b3J5KEFERF9WT1VDSEVSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvLyBUT0RPKCM3MjQxKTogUmVtb3ZlIHdoZW4gc3dpdGNoaW5nIHRvIGV2ZW50IHN5c3RlbSBmb3IgYWRkIHZvdWNoZXJcbiAgLyoqXG4gICAqIEdldCBhZGQgdm91Y2hlciBwcm9jZXNzIHN1Y2Nlc3MgZmxhZ1xuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjBcbiAgICovXG4gIGdldEFkZFZvdWNoZXJSZXN1bHRTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc1N1Y2Nlc3NGYWN0b3J5KEFERF9WT1VDSEVSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvLyBUT0RPKCM3MjQxKTogUmVtb3ZlIHdoZW4gc3dpdGNoaW5nIHRvIGV2ZW50IHN5c3RlbSBmb3IgYWRkIHZvdWNoZXJcbiAgLyoqXG4gICAqIEdldCBhZGQgdm91Y2hlciBwcm9jZXNzIGxvYWRpbmcgZmxhZ1xuICAgKiBAZGVwcmVjYXRlZCBzaW5jZSAyLjBcbiAgICovXG4gIGdldEFkZFZvdWNoZXJSZXN1bHRMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnBpcGUoXG4gICAgICBzZWxlY3QoZ2V0UHJvY2Vzc0xvYWRpbmdGYWN0b3J5KEFERF9WT1VDSEVSX1BST0NFU1NfSUQpKVxuICAgICk7XG4gIH1cblxuICAvLyBUT0RPKCM3MjQxKTogUmVtb3ZlIHdoZW4gc3dpdGNoaW5nIHRvIGV2ZW50IHN5c3RlbSBmb3IgYWRkIHZvdWNoZXJcbiAgLyoqXG4gICAqIFJlc2V0IGFkZCB2b3VjaGVyIHByb2Nlc3NcbiAgICogQGRlcHJlY2F0ZWQgc2luY2UgMi4wXG4gICAqL1xuICByZXNldEFkZFZvdWNoZXJQcm9jZXNzaW5nU3RhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5zdG9yZS5kaXNwYXRjaChuZXcgQ2FydEFjdGlvbnMuQ2FydFJlc2V0QWRkVm91Y2hlcigpKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tYmluZVVzZXJBbmRDYXJ0SWQoY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFtzdHJpbmcsIHN0cmluZ10+IHtcbiAgICBpZiAoY2FydElkKSB7XG4gICAgICByZXR1cm4gdGhpcy51c2VySWRTZXJ2aWNlLmdldFVzZXJJZCgpLnBpcGUoXG4gICAgICAgIHRha2UoMSksXG4gICAgICAgIG1hcCgodXNlcklkKSA9PiBbdXNlcklkLCBjYXJ0SWRdKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgICB0aGlzLnVzZXJJZFNlcnZpY2UuZ2V0VXNlcklkKCksXG4gICAgICAgIHRoaXMuYWN0aXZlQ2FydFNlcnZpY2UuZ2V0QWN0aXZlQ2FydElkKCksXG4gICAgICBdKS5waXBlKHRha2UoMSkpO1xuICAgIH1cbiAgfVxufVxuIl19