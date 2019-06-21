/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { GlobalMessageService, GlobalMessageType, } from '../../../global-message/index';
import { UserAddressConnector } from '../../connectors/address/user-address.connector';
import { UserAddressService } from '../../facade/user-address.service';
import * as fromUserAddressesAction from '../actions/user-addresses.action';
import { USERID_CURRENT } from '../../../occ/utils/occ-constants';
export class UserAddressesEffects {
    /**
     * @param {?} actions$
     * @param {?} userAddressConnector
     * @param {?} userAddressService
     * @param {?} messageService
     */
    constructor(actions$, userAddressConnector, userAddressService, messageService) {
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.userAddressService = userAddressService;
        this.messageService = messageService;
        this.loadUserAddresses$ = this.actions$.pipe(ofType(fromUserAddressesAction.LOAD_USER_ADDRESSES), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userAddressConnector.getAll(payload).pipe(map((/**
             * @param {?} addresses
             * @return {?}
             */
            (addresses) => {
                return new fromUserAddressesAction.LoadUserAddressesSuccess(addresses);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromUserAddressesAction.LoadUserAddressesFail(error)))));
        })));
        this.addUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.ADD_USER_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userAddressConnector
                .add(payload.userId, payload.address)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                return new fromUserAddressesAction.AddUserAddressSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromUserAddressesAction.AddUserAddressFail(error)))));
        })));
        this.updateUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.UPDATE_USER_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userAddressConnector
                .update(payload.userId, payload.addressId, payload.address)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                // don't show the message if just setting address as default
                if (payload.address &&
                    Object.keys(payload.address).length === 1 &&
                    payload.address.defaultAddress) {
                    return new fromUserAddressesAction.LoadUserAddresses(USERID_CURRENT);
                }
                else {
                    return new fromUserAddressesAction.UpdateUserAddressSuccess(data);
                }
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromUserAddressesAction.UpdateUserAddressFail(error)))));
        })));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.DELETE_USER_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userAddressConnector
                .delete(payload.userId, payload.addressId)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            (data) => {
                return new fromUserAddressesAction.DeleteUserAddressSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromUserAddressesAction.DeleteUserAddressFail(error)))));
        })));
        /**
         *  Reload addresses and notify about add success
         */
        this.showGlobalMessageOnAddSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.ADD_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        () => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressAddSuccess');
        })));
        /**
         *  Reload addresses and notify about update success
         */
        this.showGlobalMessageOnUpdateSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.UPDATE_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        () => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressUpdateSuccess');
        })));
        /**
         *  Reload addresses and notify about delete success
         */
        this.showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.DELETE_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        () => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressDeleteSuccess');
        })));
    }
    /**
     * Show global confirmation message with provided text
     * @private
     * @param {?} text
     * @return {?}
     */
    showGlobalMessage(text) {
        this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
    /**
     * @private
     * @return {?}
     */
    loadAddresses() {
        this.userAddressService.loadAddresses();
    }
}
UserAddressesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserAddressesEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserAddressConnector },
    { type: UserAddressService },
    { type: GlobalMessageService }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserAddressesEffects.prototype, "loadUserAddresses$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserAddressesEffects.prototype, "addUserAddress$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserAddressesEffects.prototype, "updateUserAddress$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], UserAddressesEffects.prototype, "deleteUserAddress$", void 0);
tslib_1.__decorate([
    Effect({ dispatch: false }),
    tslib_1.__metadata("design:type", Object)
], UserAddressesEffects.prototype, "showGlobalMessageOnAddSuccess$", void 0);
tslib_1.__decorate([
    Effect({ dispatch: false }),
    tslib_1.__metadata("design:type", Object)
], UserAddressesEffects.prototype, "showGlobalMessageOnUpdateSuccess$", void 0);
tslib_1.__decorate([
    Effect({ dispatch: false }),
    tslib_1.__metadata("design:type", Object)
], UserAddressesEffects.prototype, "showGlobalMessageOnDeleteSuccess$", void 0);
if (false) {
    /** @type {?} */
    UserAddressesEffects.prototype.loadUserAddresses$;
    /** @type {?} */
    UserAddressesEffects.prototype.addUserAddress$;
    /** @type {?} */
    UserAddressesEffects.prototype.updateUserAddress$;
    /** @type {?} */
    UserAddressesEffects.prototype.deleteUserAddress$;
    /**
     *  Reload addresses and notify about add success
     * @type {?}
     */
    UserAddressesEffects.prototype.showGlobalMessageOnAddSuccess$;
    /**
     *  Reload addresses and notify about update success
     * @type {?}
     */
    UserAddressesEffects.prototype.showGlobalMessageOnUpdateSuccess$;
    /**
     *  Reload addresses and notify about delete success
     * @type {?}
     */
    UserAddressesEffects.prototype.showGlobalMessageOnDeleteSuccess$;
    /**
     * @type {?}
     * @private
     */
    UserAddressesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    UserAddressesEffects.prototype.userAddressConnector;
    /**
     * @type {?}
     * @private
     */
    UserAddressesEffects.prototype.userAddressService;
    /**
     * @type {?}
     * @private
     */
    UserAddressesEffects.prototype.messageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLWFkZHJlc3Nlcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEtBQUssdUJBQXVCLE1BQU0sa0NBQWtDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR2xFLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7SUFnSS9CLFlBQ1UsUUFBaUIsRUFDakIsb0JBQTBDLEVBQzFDLGtCQUFzQyxFQUN0QyxjQUFvQztRQUhwQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFsSTlDLHVCQUFrQixHQUVkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsdUJBQXVC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QUN6QixvREFBa0Q7Ozs7O0lBQ2xELGtEQUE4Qzs7Ozs7SUFDOUMsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL3VzZXItYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdXNlci1hZGRyZXNzZXMuYWN0aW9uJztcbmltcG9ydCB7IFVTRVJJRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckFkZHJlc3Nlc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFVzZXJBZGRyZXNzZXMkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uTE9BRF9VU0VSX0FERFJFU1NFUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkxvYWRVc2VyQWRkcmVzc2VzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3Rvci5nZXRBbGwocGF5bG9hZCkucGlwZShcbiAgICAgICAgbWFwKChhZGRyZXNzZXM6IEFkZHJlc3NbXSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uTG9hZFVzZXJBZGRyZXNzZXNTdWNjZXNzKFxuICAgICAgICAgICAgYWRkcmVzc2VzXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uTG9hZFVzZXJBZGRyZXNzZXNGYWlsKGVycm9yKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRVc2VyQWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5BRERfVVNFUl9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uQWRkVXNlckFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzQ29ubmVjdG9yXG4gICAgICAgIC5hZGQocGF5bG9hZC51c2VySWQsIHBheWxvYWQuYWRkcmVzcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uQWRkVXNlckFkZHJlc3NTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5BZGRVc2VyQWRkcmVzc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVVc2VyQWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5VUERBVEVfVVNFUl9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVXBkYXRlVXNlckFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzQ29ubmVjdG9yXG4gICAgICAgIC51cGRhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuYWRkcmVzc0lkLCBwYXlsb2FkLmFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICAvLyBkb24ndCBzaG93IHRoZSBtZXNzYWdlIGlmIGp1c3Qgc2V0dGluZyBhZGRyZXNzIGFzIGRlZmF1bHRcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgcGF5bG9hZC5hZGRyZXNzICYmXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBheWxvYWQuYWRkcmVzcykubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICAgIHBheWxvYWQuYWRkcmVzcy5kZWZhdWx0QWRkcmVzc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uTG9hZFVzZXJBZGRyZXNzZXMoXG4gICAgICAgICAgICAgICAgVVNFUklEX0NVUlJFTlRcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVXBkYXRlVXNlckFkZHJlc3NTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5VcGRhdGVVc2VyQWRkcmVzc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBkZWxldGVVc2VyQWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5ERUxFVEVfVVNFUl9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uRGVsZXRlVXNlckFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzQ29ubmVjdG9yXG4gICAgICAgIC5kZWxldGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuYWRkcmVzc0lkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5EZWxldGVVc2VyQWRkcmVzc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkRlbGV0ZVVzZXJBZGRyZXNzRmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqICBSZWxvYWQgYWRkcmVzc2VzIGFuZCBub3RpZnkgYWJvdXQgYWRkIHN1Y2Nlc3NcbiAgICovXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgc2hvd0dsb2JhbE1lc3NhZ2VPbkFkZFN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5BRERfVVNFUl9BRERSRVNTX1NVQ0NFU1MpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRBZGRyZXNzZXMoKTtcbiAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoJ2FkZHJlc3NGb3JtLnVzZXJBZGRyZXNzQWRkU3VjY2VzcycpO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqICBSZWxvYWQgYWRkcmVzc2VzIGFuZCBub3RpZnkgYWJvdXQgdXBkYXRlIHN1Y2Nlc3NcbiAgICovXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgc2hvd0dsb2JhbE1lc3NhZ2VPblVwZGF0ZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5VUERBVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1MpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRBZGRyZXNzZXMoKTtcbiAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoJ2FkZHJlc3NGb3JtLnVzZXJBZGRyZXNzVXBkYXRlU3VjY2VzcycpO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqICBSZWxvYWQgYWRkcmVzc2VzIGFuZCBub3RpZnkgYWJvdXQgZGVsZXRlIHN1Y2Nlc3NcbiAgICovXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgc2hvd0dsb2JhbE1lc3NhZ2VPbkRlbGV0ZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5ERUxFVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1MpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRBZGRyZXNzZXMoKTtcbiAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoJ2FkZHJlc3NGb3JtLnVzZXJBZGRyZXNzRGVsZXRlU3VjY2VzcycpO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBZGRyZXNzQ29ubmVjdG9yOiBVc2VyQWRkcmVzc0Nvbm5lY3RvcixcbiAgICBwcml2YXRlIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2hvdyBnbG9iYWwgY29uZmlybWF0aW9uIG1lc3NhZ2Ugd2l0aCBwcm92aWRlZCB0ZXh0XG4gICAqL1xuICBwcml2YXRlIHNob3dHbG9iYWxNZXNzYWdlKHRleHQ6IHN0cmluZykge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgeyBrZXk6IHRleHQgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRBZGRyZXNzZXMoKSB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICB9XG59XG4iXX0=