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
                    return new UserActions.LoadUserAddresses(payload.userId);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLWFkZHJlc3Nlcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHL0MsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7OztJQXNJL0IsWUFDVSxRQUFpQixFQUNqQixvQkFBMEMsRUFDMUMsa0JBQXNDLEVBQ3RDLGNBQW9DO1FBSHBDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQXhJOUMsdUJBQWtCLEdBRWQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxX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RUFPRTs7Ozs7SUFLRixpRUFPRTs7Ozs7SUFHQSx3Q0FBeUI7Ozs7O0lBQ3pCLG9EQUFrRDs7Ozs7SUFDbEQsa0RBQThDOzs7OztJQUM5Qyw4Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL3VzZXItYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQWRkcmVzc2VzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkVXNlckFkZHJlc3NlcyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX1VTRVJfQUREUkVTU0VTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzQ29ubmVjdG9yLmdldEFsbChwYXlsb2FkKS5waXBlKFxuICAgICAgICBtYXAoKGFkZHJlc3NlczogQWRkcmVzc1tdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3Nlc1N1Y2Nlc3MoYWRkcmVzc2VzKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3Nlc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWRkVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuQUREX1VTRVJfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkFkZFVzZXJBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAuYWRkKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkFkZFVzZXJBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgVXNlckFjdGlvbnMuQWRkVXNlckFkZHJlc3NGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVVc2VyQWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5VUERBVEVfVVNFUl9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuVXBkYXRlVXNlckFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzQ29ubmVjdG9yXG4gICAgICAgIC51cGRhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuYWRkcmVzc0lkLCBwYXlsb2FkLmFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIGRvbid0IHNob3cgdGhlIG1lc3NhZ2UgaWYganVzdCBzZXR0aW5nIGFkZHJlc3MgYXMgZGVmYXVsdFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBwYXlsb2FkLmFkZHJlc3MgJiZcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bG9hZC5hZGRyZXNzKS5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICAgcGF5bG9hZC5hZGRyZXNzLmRlZmF1bHRBZGRyZXNzXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3NlcyhwYXlsb2FkLnVzZXJJZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZVVzZXJBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZVVzZXJBZGRyZXNzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZGVsZXRlVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuREVMRVRFX1VTRVJfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkRlbGV0ZVVzZXJBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAuZGVsZXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3NJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5EZWxldGVVc2VyQWRkcmVzc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5EZWxldGVVc2VyQWRkcmVzc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqICBSZWxvYWQgYWRkcmVzc2VzIGFuZCBub3RpZnkgYWJvdXQgYWRkIHN1Y2Nlc3NcbiAgICovXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgc2hvd0dsb2JhbE1lc3NhZ2VPbkFkZFN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5BRERfVVNFUl9BRERSRVNTX1NVQ0NFU1MpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRBZGRyZXNzZXMoKTtcbiAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoJ2FkZHJlc3NGb3JtLnVzZXJBZGRyZXNzQWRkU3VjY2VzcycpO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqICBSZWxvYWQgYWRkcmVzc2VzIGFuZCBub3RpZnkgYWJvdXQgdXBkYXRlIHN1Y2Nlc3NcbiAgICovXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgc2hvd0dsb2JhbE1lc3NhZ2VPblVwZGF0ZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5VUERBVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1MpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRBZGRyZXNzZXMoKTtcbiAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoJ2FkZHJlc3NGb3JtLnVzZXJBZGRyZXNzVXBkYXRlU3VjY2VzcycpO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqICBSZWxvYWQgYWRkcmVzc2VzIGFuZCBub3RpZnkgYWJvdXQgZGVsZXRlIHN1Y2Nlc3NcbiAgICovXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgc2hvd0dsb2JhbE1lc3NhZ2VPbkRlbGV0ZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5ERUxFVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1MpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRBZGRyZXNzZXMoKTtcbiAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoJ2FkZHJlc3NGb3JtLnVzZXJBZGRyZXNzRGVsZXRlU3VjY2VzcycpO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBZGRyZXNzQ29ubmVjdG9yOiBVc2VyQWRkcmVzc0Nvbm5lY3RvcixcbiAgICBwcml2YXRlIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2hvdyBnbG9iYWwgY29uZmlybWF0aW9uIG1lc3NhZ2Ugd2l0aCBwcm92aWRlZCB0ZXh0XG4gICAqL1xuICBwcml2YXRlIHNob3dHbG9iYWxNZXNzYWdlKHRleHQ6IHN0cmluZykge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgeyBrZXk6IHRleHQgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRBZGRyZXNzZXMoKSB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICB9XG59XG4iXX0=