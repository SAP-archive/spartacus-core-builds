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
import { USERID_CURRENT } from '../../../occ/utils/occ-constants';
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
                    return new UserActions.LoadUserAddresses(USERID_CURRENT);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLWFkZHJlc3Nlcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DLE1BQU0sT0FBTyxvQkFBb0I7Ozs7Ozs7SUFzSS9CLFlBQ1UsUUFBaUIsRUFDakIsb0JBQTBDLEVBQzFDLGtCQUFzQyxFQUN0QyxjQUFvQztRQUhwQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUF4STlDLHVCQUFrQixHQUVk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LGtEQXNCRTs7Ozs7SUFLRiw4REFPRTs7Ozs7SUFLRixpRUFPRTs7Ozs7SUFLRixpRUFPRTs7Ozs7SUFHQSx3Q0FBeUI7Ozs7O0lBQ3pCLG9EQUFrRDs7Ozs7SUFDbEQsa0RBQThDOzs7OztJQUM5Qyw4Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgVVNFUklEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2FkZHJlc3MvdXNlci1hZGRyZXNzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWRkcmVzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvdXNlci1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJBZGRyZXNzZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyQWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfVVNFUl9BRERSRVNTRVMpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3NlcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3IuZ2V0QWxsKHBheWxvYWQpLnBpcGUoXG4gICAgICAgIG1hcCgoYWRkcmVzc2VzOiBBZGRyZXNzW10pID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzU3VjY2VzcyhhZGRyZXNzZXMpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKFxuICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRVc2VyQWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5BRERfVVNFUl9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuQWRkVXNlckFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzQ29ubmVjdG9yXG4gICAgICAgIC5hZGQocGF5bG9hZC51c2VySWQsIHBheWxvYWQuYWRkcmVzcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuQWRkVXNlckFkZHJlc3NTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5BZGRVc2VyQWRkcmVzc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZVVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlVQREFURV9VU0VSX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyQWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3JcbiAgICAgICAgLnVwZGF0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5hZGRyZXNzSWQsIHBheWxvYWQuYWRkcmVzcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gZG9uJ3Qgc2hvdyB0aGUgbWVzc2FnZSBpZiBqdXN0IHNldHRpbmcgYWRkcmVzcyBhcyBkZWZhdWx0XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHBheWxvYWQuYWRkcmVzcyAmJlxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwYXlsb2FkLmFkZHJlc3MpLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgICBwYXlsb2FkLmFkZHJlc3MuZGVmYXVsdEFkZHJlc3NcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzKFVTRVJJRF9DVVJSRU5UKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuVXBkYXRlVXNlckFkZHJlc3NTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuVXBkYXRlVXNlckFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBkZWxldGVVc2VyQWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5ERUxFVEVfVVNFUl9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuRGVsZXRlVXNlckFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzQ29ubmVjdG9yXG4gICAgICAgIC5kZWxldGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuYWRkcmVzc0lkKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkRlbGV0ZVVzZXJBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkRlbGV0ZVVzZXJBZGRyZXNzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCBhZGQgc3VjY2Vzc1xuICAgKi9cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBzaG93R2xvYmFsTWVzc2FnZU9uQWRkU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkFERF9VU0VSX0FERFJFU1NfU1VDQ0VTUyksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEFkZHJlc3NlcygpO1xuICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZSgnYWRkcmVzc0Zvcm0udXNlckFkZHJlc3NBZGRTdWNjZXNzJyk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCB1cGRhdGUgc3VjY2Vzc1xuICAgKi9cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBzaG93R2xvYmFsTWVzc2FnZU9uVXBkYXRlU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlVQREFURV9VU0VSX0FERFJFU1NfU1VDQ0VTUyksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEFkZHJlc3NlcygpO1xuICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZSgnYWRkcmVzc0Zvcm0udXNlckFkZHJlc3NVcGRhdGVTdWNjZXNzJyk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCBkZWxldGUgc3VjY2Vzc1xuICAgKi9cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBzaG93R2xvYmFsTWVzc2FnZU9uRGVsZXRlU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkRFTEVURV9VU0VSX0FERFJFU1NfU1VDQ0VTUyksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEFkZHJlc3NlcygpO1xuICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZSgnYWRkcmVzc0Zvcm0udXNlckFkZHJlc3NEZWxldGVTdWNjZXNzJyk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckFkZHJlc3NDb25uZWN0b3I6IFVzZXJBZGRyZXNzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93IGdsb2JhbCBjb25maXJtYXRpb24gbWVzc2FnZSB3aXRoIHByb3ZpZGVkIHRleHRcbiAgICovXG4gIHByaXZhdGUgc2hvd0dsb2JhbE1lc3NhZ2UodGV4dDogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7IGtleTogdGV4dCB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFkZHJlc3NlcygpIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5sb2FkQWRkcmVzc2VzKCk7XG4gIH1cbn1cbiJdfQ==