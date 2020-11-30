import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { OCC_USER_ID_ANONYMOUS, OCC_USER_ID_CURRENT, } from '../../../occ/utils/occ-constants';
import * as i0 from "@angular/core";
/**
 * This implementation is OCC specific.
 * Different backend might have completely different need regarding user id.
 * It might not need user id at all and work based on access_token.
 * To implement custom solution provide your own implementation and customize services that use UserIdService
 */
export class UserIdService {
    constructor() {
        this._userId = new BehaviorSubject(OCC_USER_ID_ANONYMOUS);
    }
    /**
     * Sets current user id.
     *
     * @param userId
     */
    setUserId(userId) {
        this._userId.next(userId);
    }
    /**
     * This function provides the userId the OCC calls should use, depending
     * on whether there is an active storefront session or not.
     *
     * It returns the userId of the current storefront user or 'anonymous'
     * in the case there are no signed in user in the storefront.
     *
     * The user id of a regular customer session is 'current'. In the case of an
     * asm customer emulation session, the userId will be the customerId.
     */
    getUserId() {
        return this._userId;
    }
    /**
     * @deprecated Use `takeUserId` method instead.
     *
     * Calls provided callback with current user id.
     *
     * @param cb callback function to invoke
     */
    invokeWithUserId(cb) {
        return this.getUserId()
            .pipe(take(1))
            .subscribe((id) => cb(id));
    }
    /**
     * Utility method if you need userId to perform single action (eg. dispatch call to API).
     *
     * @param loggedIn Set to true if you want the observable to emit id only for logged in user. Throws in case of anonymous user.
     *
     * @returns Observable that emits once and completes with the last userId value.
     */
    takeUserId(loggedIn = false) {
        return this.getUserId().pipe(take(1), map((userId) => {
            if (loggedIn && userId === OCC_USER_ID_ANONYMOUS) {
                throw new Error('Requested user id for logged user while user is not logged in.');
            }
            return userId;
        }));
    }
    /**
     * Sets user id to the default value for logged out user.
     */
    clearUserId() {
        this.setUserId(OCC_USER_ID_ANONYMOUS);
    }
    /**
     * Checks if the userId is of emulated user type.
     */
    isEmulated() {
        return this.getUserId().pipe(map((userId) => userId !== OCC_USER_ID_ANONYMOUS && userId !== OCC_USER_ID_CURRENT));
    }
}
UserIdService.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserIdService_Factory() { return new UserIdService(); }, token: UserIdService, providedIn: "root" });
UserIdService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC91c2VyLWF1dGgvZmFjYWRlL3VzZXItaWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxlQUFlLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQ2pFLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFFMUM7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8sYUFBYTtJQUgxQjtRQUlVLFlBQU8sR0FBdUIsSUFBSSxlQUFlLENBQ3ZELHFCQUFxQixDQUN0QixDQUFDO0tBNkVIO0lBM0VDOzs7O09BSUc7SUFDSSxTQUFTLENBQUMsTUFBYztRQUM1QixJQUFJLENBQUMsT0FBbUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLFNBQVM7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLGdCQUFnQixDQUFDLEVBQTJCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRTthQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksVUFBVSxDQUFDLFFBQVEsR0FBRyxLQUFLO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2IsSUFBSSxRQUFRLElBQUksTUFBTSxLQUFLLHFCQUFxQixFQUFFO2dCQUNoRCxNQUFNLElBQUksS0FBSyxDQUNiLGdFQUFnRSxDQUNqRSxDQUFDO2FBQ0g7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksV0FBVztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDMUIsR0FBRyxDQUNELENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDVCxNQUFNLEtBQUsscUJBQXFCLElBQUksTUFBTSxLQUFLLG1CQUFtQixDQUNyRSxDQUNGLENBQUM7SUFDSixDQUFDOzs7O1lBbEZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMsXG4gIE9DQ19VU0VSX0lEX0NVUlJFTlQsXG59IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcblxuLyoqXG4gKiBUaGlzIGltcGxlbWVudGF0aW9uIGlzIE9DQyBzcGVjaWZpYy5cbiAqIERpZmZlcmVudCBiYWNrZW5kIG1pZ2h0IGhhdmUgY29tcGxldGVseSBkaWZmZXJlbnQgbmVlZCByZWdhcmRpbmcgdXNlciBpZC5cbiAqIEl0IG1pZ2h0IG5vdCBuZWVkIHVzZXIgaWQgYXQgYWxsIGFuZCB3b3JrIGJhc2VkIG9uIGFjY2Vzc190b2tlbi5cbiAqIFRvIGltcGxlbWVudCBjdXN0b20gc29sdXRpb24gcHJvdmlkZSB5b3VyIG93biBpbXBsZW1lbnRhdGlvbiBhbmQgY3VzdG9taXplIHNlcnZpY2VzIHRoYXQgdXNlIFVzZXJJZFNlcnZpY2VcbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJJZFNlcnZpY2Uge1xuICBwcml2YXRlIF91c2VySWQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPihcbiAgICBPQ0NfVVNFUl9JRF9BTk9OWU1PVVNcbiAgKTtcblxuICAvKipcbiAgICogU2V0cyBjdXJyZW50IHVzZXIgaWQuXG4gICAqXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICovXG4gIHB1YmxpYyBzZXRVc2VySWQodXNlcklkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAodGhpcy5fdXNlcklkIGFzIEJlaGF2aW9yU3ViamVjdDxzdHJpbmc+KS5uZXh0KHVzZXJJZCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyB0aGUgdXNlcklkIHRoZSBPQ0MgY2FsbHMgc2hvdWxkIHVzZSwgZGVwZW5kaW5nXG4gICAqIG9uIHdoZXRoZXIgdGhlcmUgaXMgYW4gYWN0aXZlIHN0b3JlZnJvbnQgc2Vzc2lvbiBvciBub3QuXG4gICAqXG4gICAqIEl0IHJldHVybnMgdGhlIHVzZXJJZCBvZiB0aGUgY3VycmVudCBzdG9yZWZyb250IHVzZXIgb3IgJ2Fub255bW91cydcbiAgICogaW4gdGhlIGNhc2UgdGhlcmUgYXJlIG5vIHNpZ25lZCBpbiB1c2VyIGluIHRoZSBzdG9yZWZyb250LlxuICAgKlxuICAgKiBUaGUgdXNlciBpZCBvZiBhIHJlZ3VsYXIgY3VzdG9tZXIgc2Vzc2lvbiBpcyAnY3VycmVudCcuIEluIHRoZSBjYXNlIG9mIGFuXG4gICAqIGFzbSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiwgdGhlIHVzZXJJZCB3aWxsIGJlIHRoZSBjdXN0b21lcklkLlxuICAgKi9cbiAgcHVibGljIGdldFVzZXJJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGB0YWtlVXNlcklkYCBtZXRob2QgaW5zdGVhZC5cbiAgICpcbiAgICogQ2FsbHMgcHJvdmlkZWQgY2FsbGJhY2sgd2l0aCBjdXJyZW50IHVzZXIgaWQuXG4gICAqXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2VcbiAgICovXG4gIHB1YmxpYyBpbnZva2VXaXRoVXNlcklkKGNiOiAodXNlcklkOiBzdHJpbmcpID0+IGFueSk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXNlcklkKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChpZCkgPT4gY2IoaWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCBpZiB5b3UgbmVlZCB1c2VySWQgdG8gcGVyZm9ybSBzaW5nbGUgYWN0aW9uIChlZy4gZGlzcGF0Y2ggY2FsbCB0byBBUEkpLlxuICAgKlxuICAgKiBAcGFyYW0gbG9nZ2VkSW4gU2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdGhlIG9ic2VydmFibGUgdG8gZW1pdCBpZCBvbmx5IGZvciBsb2dnZWQgaW4gdXNlci4gVGhyb3dzIGluIGNhc2Ugb2YgYW5vbnltb3VzIHVzZXIuXG4gICAqXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGUgdGhhdCBlbWl0cyBvbmNlIGFuZCBjb21wbGV0ZXMgd2l0aCB0aGUgbGFzdCB1c2VySWQgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgdGFrZVVzZXJJZChsb2dnZWRJbiA9IGZhbHNlKTogT2JzZXJ2YWJsZTxzdHJpbmcgfCBuZXZlcj4ge1xuICAgIHJldHVybiB0aGlzLmdldFVzZXJJZCgpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgbWFwKCh1c2VySWQpID0+IHtcbiAgICAgICAgaWYgKGxvZ2dlZEluICYmIHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1JlcXVlc3RlZCB1c2VyIGlkIGZvciBsb2dnZWQgdXNlciB3aGlsZSB1c2VyIGlzIG5vdCBsb2dnZWQgaW4uJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXJJZDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVzZXIgaWQgdG8gdGhlIGRlZmF1bHQgdmFsdWUgZm9yIGxvZ2dlZCBvdXQgdXNlci5cbiAgICovXG4gIHB1YmxpYyBjbGVhclVzZXJJZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFVzZXJJZChPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgdXNlcklkIGlzIG9mIGVtdWxhdGVkIHVzZXIgdHlwZS5cbiAgICovXG4gIHB1YmxpYyBpc0VtdWxhdGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldFVzZXJJZCgpLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgICh1c2VySWQpID0+XG4gICAgICAgICAgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgJiYgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9DVVJSRU5UXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19