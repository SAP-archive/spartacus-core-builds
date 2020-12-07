import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
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
        this._userId = new ReplaySubject(1);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1pZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvYXV0aC91c2VyLWF1dGgvZmFjYWRlL3VzZXItaWQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxhQUFhLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixtQkFBbUIsR0FDcEIsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFFMUM7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8sYUFBYTtJQUgxQjtRQUlVLFlBQU8sR0FBdUIsSUFBSSxhQUFhLENBQVMsQ0FBQyxDQUFDLENBQUM7S0E2RXBFO0lBM0VDOzs7O09BSUc7SUFDSSxTQUFTLENBQUMsTUFBYztRQUM1QixJQUFJLENBQUMsT0FBaUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLFNBQVM7UUFDZCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLGdCQUFnQixDQUFDLEVBQTJCO1FBQ2pELE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRTthQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2IsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ksVUFBVSxDQUFDLFFBQVEsR0FBRyxLQUFLO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDMUIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ2IsSUFBSSxRQUFRLElBQUksTUFBTSxLQUFLLHFCQUFxQixFQUFFO2dCQUNoRCxNQUFNLElBQUksS0FBSyxDQUNiLGdFQUFnRSxDQUNqRSxDQUFDO2FBQ0g7WUFDRCxPQUFPLE1BQU0sQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0ksV0FBVztRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksVUFBVTtRQUNmLE9BQU8sSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDMUIsR0FBRyxDQUNELENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FDVCxNQUFNLEtBQUsscUJBQXFCLElBQUksTUFBTSxLQUFLLG1CQUFtQixDQUNyRSxDQUNGLENBQUM7SUFDSixDQUFDOzs7O1lBaEZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFJlcGxheVN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgT0NDX1VTRVJfSURfQU5PTllNT1VTLFxuICBPQ0NfVVNFUl9JRF9DVVJSRU5ULFxufSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5cbi8qKlxuICogVGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBPQ0Mgc3BlY2lmaWMuXG4gKiBEaWZmZXJlbnQgYmFja2VuZCBtaWdodCBoYXZlIGNvbXBsZXRlbHkgZGlmZmVyZW50IG5lZWQgcmVnYXJkaW5nIHVzZXIgaWQuXG4gKiBJdCBtaWdodCBub3QgbmVlZCB1c2VyIGlkIGF0IGFsbCBhbmQgd29yayBiYXNlZCBvbiBhY2Nlc3NfdG9rZW4uXG4gKiBUbyBpbXBsZW1lbnQgY3VzdG9tIHNvbHV0aW9uIHByb3ZpZGUgeW91ciBvd24gaW1wbGVtZW50YXRpb24gYW5kIGN1c3RvbWl6ZSBzZXJ2aWNlcyB0aGF0IHVzZSBVc2VySWRTZXJ2aWNlXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VySWRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfdXNlcklkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSBuZXcgUmVwbGF5U3ViamVjdDxzdHJpbmc+KDEpO1xuXG4gIC8qKlxuICAgKiBTZXRzIGN1cnJlbnQgdXNlciBpZC5cbiAgICpcbiAgICogQHBhcmFtIHVzZXJJZFxuICAgKi9cbiAgcHVibGljIHNldFVzZXJJZCh1c2VySWQ6IHN0cmluZyk6IHZvaWQge1xuICAgICh0aGlzLl91c2VySWQgYXMgUmVwbGF5U3ViamVjdDxzdHJpbmc+KS5uZXh0KHVzZXJJZCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBmdW5jdGlvbiBwcm92aWRlcyB0aGUgdXNlcklkIHRoZSBPQ0MgY2FsbHMgc2hvdWxkIHVzZSwgZGVwZW5kaW5nXG4gICAqIG9uIHdoZXRoZXIgdGhlcmUgaXMgYW4gYWN0aXZlIHN0b3JlZnJvbnQgc2Vzc2lvbiBvciBub3QuXG4gICAqXG4gICAqIEl0IHJldHVybnMgdGhlIHVzZXJJZCBvZiB0aGUgY3VycmVudCBzdG9yZWZyb250IHVzZXIgb3IgJ2Fub255bW91cydcbiAgICogaW4gdGhlIGNhc2UgdGhlcmUgYXJlIG5vIHNpZ25lZCBpbiB1c2VyIGluIHRoZSBzdG9yZWZyb250LlxuICAgKlxuICAgKiBUaGUgdXNlciBpZCBvZiBhIHJlZ3VsYXIgY3VzdG9tZXIgc2Vzc2lvbiBpcyAnY3VycmVudCcuIEluIHRoZSBjYXNlIG9mIGFuXG4gICAqIGFzbSBjdXN0b21lciBlbXVsYXRpb24gc2Vzc2lvbiwgdGhlIHVzZXJJZCB3aWxsIGJlIHRoZSBjdXN0b21lcklkLlxuICAgKi9cbiAgcHVibGljIGdldFVzZXJJZCgpOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLl91c2VySWQ7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgVXNlIGB0YWtlVXNlcklkYCBtZXRob2QgaW5zdGVhZC5cbiAgICpcbiAgICogQ2FsbHMgcHJvdmlkZWQgY2FsbGJhY2sgd2l0aCBjdXJyZW50IHVzZXIgaWQuXG4gICAqXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayBmdW5jdGlvbiB0byBpbnZva2VcbiAgICovXG4gIHB1YmxpYyBpbnZva2VXaXRoVXNlcklkKGNiOiAodXNlcklkOiBzdHJpbmcpID0+IGFueSk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXNlcklkKClcbiAgICAgIC5waXBlKHRha2UoMSkpXG4gICAgICAuc3Vic2NyaWJlKChpZCkgPT4gY2IoaWQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCBpZiB5b3UgbmVlZCB1c2VySWQgdG8gcGVyZm9ybSBzaW5nbGUgYWN0aW9uIChlZy4gZGlzcGF0Y2ggY2FsbCB0byBBUEkpLlxuICAgKlxuICAgKiBAcGFyYW0gbG9nZ2VkSW4gU2V0IHRvIHRydWUgaWYgeW91IHdhbnQgdGhlIG9ic2VydmFibGUgdG8gZW1pdCBpZCBvbmx5IGZvciBsb2dnZWQgaW4gdXNlci4gVGhyb3dzIGluIGNhc2Ugb2YgYW5vbnltb3VzIHVzZXIuXG4gICAqXG4gICAqIEByZXR1cm5zIE9ic2VydmFibGUgdGhhdCBlbWl0cyBvbmNlIGFuZCBjb21wbGV0ZXMgd2l0aCB0aGUgbGFzdCB1c2VySWQgdmFsdWUuXG4gICAqL1xuICBwdWJsaWMgdGFrZVVzZXJJZChsb2dnZWRJbiA9IGZhbHNlKTogT2JzZXJ2YWJsZTxzdHJpbmcgfCBuZXZlcj4ge1xuICAgIHJldHVybiB0aGlzLmdldFVzZXJJZCgpLnBpcGUoXG4gICAgICB0YWtlKDEpLFxuICAgICAgbWFwKCh1c2VySWQpID0+IHtcbiAgICAgICAgaWYgKGxvZ2dlZEluICYmIHVzZXJJZCA9PT0gT0NDX1VTRVJfSURfQU5PTllNT1VTKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgJ1JlcXVlc3RlZCB1c2VyIGlkIGZvciBsb2dnZWQgdXNlciB3aGlsZSB1c2VyIGlzIG5vdCBsb2dnZWQgaW4uJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVzZXJJZDtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVzZXIgaWQgdG8gdGhlIGRlZmF1bHQgdmFsdWUgZm9yIGxvZ2dlZCBvdXQgdXNlci5cbiAgICovXG4gIHB1YmxpYyBjbGVhclVzZXJJZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFVzZXJJZChPQ0NfVVNFUl9JRF9BTk9OWU1PVVMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgdXNlcklkIGlzIG9mIGVtdWxhdGVkIHVzZXIgdHlwZS5cbiAgICovXG4gIHB1YmxpYyBpc0VtdWxhdGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmdldFVzZXJJZCgpLnBpcGUoXG4gICAgICBtYXAoXG4gICAgICAgICh1c2VySWQpID0+XG4gICAgICAgICAgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9BTk9OWU1PVVMgJiYgdXNlcklkICE9PSBPQ0NfVVNFUl9JRF9DVVJSRU5UXG4gICAgICApXG4gICAgKTtcbiAgfVxufVxuIl19