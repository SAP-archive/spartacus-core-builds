/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { GlobalMessageService, GlobalMessageType, } from '../../../global-message/index';
import { OCC_USER_ID_CURRENT } from '../../../occ/utils/occ-constants';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserAddressConnector } from '../../connectors/address/user-address.connector';
import { UserAddressService } from '../../facade/user-address.service';
import { UserActions } from '../actions/index';
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
        this.loadUserAddresses$ = this.actions$.pipe(ofType(UserActions.LOAD_USER_ADDRESSES), map((/**
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
                return new UserActions.LoadUserAddressesSuccess(addresses);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.LoadUserAddressesFail(makeErrorSerializable(error))))));
        })));
        this.addUserAddress$ = this.actions$.pipe(ofType(UserActions.ADD_USER_ADDRESS), map((/**
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
                return new UserActions.AddUserAddressSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.AddUserAddressFail(makeErrorSerializable(error))))));
        })));
        this.updateUserAddress$ = this.actions$.pipe(ofType(UserActions.UPDATE_USER_ADDRESS), map((/**
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
            data => {
                // don't show the message if just setting address as default
                if (payload.address &&
                    Object.keys(payload.address).length === 1 &&
                    payload.address.defaultAddress) {
                    return new UserActions.LoadUserAddresses(OCC_USER_ID_CURRENT);
                }
                else {
                    return new UserActions.UpdateUserAddressSuccess(data);
                }
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.UpdateUserAddressFail(makeErrorSerializable(error))))));
        })));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(UserActions.DELETE_USER_ADDRESS), map((/**
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
            data => {
                return new UserActions.DeleteUserAddressSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.DeleteUserAddressFail(makeErrorSerializable(error))))));
        })));
        /**
         *  Reload addresses and notify about add success
         */
        this.showGlobalMessageOnAddSuccess$ = this.actions$.pipe(ofType(UserActions.ADD_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        () => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressAddSuccess');
        })));
        /**
         *  Reload addresses and notify about update success
         */
        this.showGlobalMessageOnUpdateSuccess$ = this.actions$.pipe(ofType(UserActions.UPDATE_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        () => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressUpdateSuccess');
        })));
        /**
         *  Reload addresses and notify about delete success
         */
        this.showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(ofType(UserActions.DELETE_USER_ADDRESS_SUCCESS), tap((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLWFkZHJlc3Nlcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7OztJQXNJL0IsWUFDVSxRQUFpQixFQUNqQixvQkFBMEMsRUFDMUMsa0JBQXNDLEVBQ3RDLGNBQW9DO1FBSHBDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQXhJOUMsdUJBQWtCLEdB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SUFFRixrREFzQkU7Ozs7O0lBS0YsOERBT0U7Ozs7O0lBS0YsaUVBT0U7Ozs7O0lBS0YsaUVBT0U7Ozs7O0lBR0Esd0NBQXlCOzs7OztJQUN6QixvREFBa0Q7Ozs7O0lBQ2xELGtEQUE4Qzs7Ozs7SUFDOUMsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IE9DQ19VU0VSX0lEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2FkZHJlc3MvdXNlci1hZGRyZXNzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWRkcmVzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvdXNlci1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJBZGRyZXNzZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyQWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfVVNFUl9BRERSRVNTRVMpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3NlcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3IuZ2V0QWxsKHBheWxvYWQpLnBpcGUoXG4gICAgICAgIG1hcCgoYWRkcmVzc2VzOiBBZGRyZXNzW10pID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzU3VjY2VzcyhhZGRyZXNzZXMpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRVc2VyQWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5BRERfVVNFUl9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuQWRkVXNlckFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzQ29ubmVjdG9yXG4gICAgICAgIC5hZGQocGF5bG9hZC51c2VySWQsIHBheWxvYWQuYWRkcmVzcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuQWRkVXNlckFkZHJlc3NTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5BZGRVc2VyQWRkcmVzc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZVVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlVQREFURV9VU0VSX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyQWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3JcbiAgICAgICAgLnVwZGF0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5hZGRyZXNzSWQsIHBheWxvYWQuYWRkcmVzcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gZG9uJ3Qgc2hvdyB0aGUgbWVzc2FnZSBpZiBqdXN0IHNldHRpbmcgYWRkcmVzcyBhcyBkZWZhdWx0XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHBheWxvYWQuYWRkcmVzcyAmJlxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwYXlsb2FkLmFkZHJlc3MpLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgICBwYXlsb2FkLmFkZHJlc3MuZGVmYXVsdEFkZHJlc3NcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzKE9DQ19VU0VSX0lEX0NVUlJFTlQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyQWRkcmVzc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyQWRkcmVzc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZVVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkRFTEVURV9VU0VSX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5EZWxldGVVc2VyQWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3JcbiAgICAgICAgLmRlbGV0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5hZGRyZXNzSWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuRGVsZXRlVXNlckFkZHJlc3NTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuRGVsZXRlVXNlckFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IGFkZCBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25BZGRTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuQUREX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdhZGRyZXNzRm9ybS51c2VyQWRkcmVzc0FkZFN1Y2Nlc3MnKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IHVwZGF0ZSBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25VcGRhdGVTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuVVBEQVRFX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdhZGRyZXNzRm9ybS51c2VyQWRkcmVzc1VwZGF0ZVN1Y2Nlc3MnKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IGRlbGV0ZSBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25EZWxldGVTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuREVMRVRFX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdhZGRyZXNzRm9ybS51c2VyQWRkcmVzc0RlbGV0ZVN1Y2Nlc3MnKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWRkcmVzc0Nvbm5lY3RvcjogVXNlckFkZHJlc3NDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFNob3cgZ2xvYmFsIGNvbmZpcm1hdGlvbiBtZXNzYWdlIHdpdGggcHJvdmlkZWQgdGV4dFxuICAgKi9cbiAgcHJpdmF0ZSBzaG93R2xvYmFsTWVzc2FnZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHsga2V5OiB0ZXh0IH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQWRkcmVzc2VzKCkge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWRBZGRyZXNzZXMoKTtcbiAgfVxufVxuIl19