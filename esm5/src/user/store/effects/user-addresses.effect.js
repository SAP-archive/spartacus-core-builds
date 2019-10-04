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
var UserAddressesEffects = /** @class */ (function () {
    function UserAddressesEffects(actions$, userAddressConnector, userAddressService, messageService) {
        var _this = this;
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.userAddressService = userAddressService;
        this.messageService = messageService;
        this.loadUserAddresses$ = this.actions$.pipe(ofType(UserActions.LOAD_USER_ADDRESSES), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userAddressConnector.getAll(payload).pipe(map((/**
             * @param {?} addresses
             * @return {?}
             */
            function (addresses) {
                return new UserActions.LoadUserAddressesSuccess(addresses);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.LoadUserAddressesFail(makeErrorSerializable(error)));
            })));
        })));
        this.addUserAddress$ = this.actions$.pipe(ofType(UserActions.ADD_USER_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userAddressConnector
                .add(payload.userId, payload.address)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return new UserActions.AddUserAddressSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.AddUserAddressFail(makeErrorSerializable(error)));
            })));
        })));
        this.updateUserAddress$ = this.actions$.pipe(ofType(UserActions.UPDATE_USER_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userAddressConnector
                .update(payload.userId, payload.addressId, payload.address)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
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
            function (error) {
                return of(new UserActions.UpdateUserAddressFail(makeErrorSerializable(error)));
            })));
        })));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(UserActions.DELETE_USER_ADDRESS), map((/**
         * @param {?} action
         * @return {?}
         */
        function (action) { return action.payload; })), mergeMap((/**
         * @param {?} payload
         * @return {?}
         */
        function (payload) {
            return _this.userAddressConnector
                .delete(payload.userId, payload.addressId)
                .pipe(map((/**
             * @param {?} data
             * @return {?}
             */
            function (data) {
                return new UserActions.DeleteUserAddressSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.DeleteUserAddressFail(makeErrorSerializable(error)));
            })));
        })));
        /**
         *  Reload addresses and notify about add success
         */
        this.showGlobalMessageOnAddSuccess$ = this.actions$.pipe(ofType(UserActions.ADD_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressAddSuccess');
        })));
        /**
         *  Reload addresses and notify about update success
         */
        this.showGlobalMessageOnUpdateSuccess$ = this.actions$.pipe(ofType(UserActions.UPDATE_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressUpdateSuccess');
        })));
        /**
         *  Reload addresses and notify about delete success
         */
        this.showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(ofType(UserActions.DELETE_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressDeleteSuccess');
        })));
    }
    /**
     * Show global confirmation message with provided text
     */
    /**
     * Show global confirmation message with provided text
     * @private
     * @param {?} text
     * @return {?}
     */
    UserAddressesEffects.prototype.showGlobalMessage = /**
     * Show global confirmation message with provided text
     * @private
     * @param {?} text
     * @return {?}
     */
    function (text) {
        this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    };
    /**
     * @private
     * @return {?}
     */
    UserAddressesEffects.prototype.loadAddresses = /**
     * @private
     * @return {?}
     */
    function () {
        this.userAddressService.loadAddresses();
    };
    UserAddressesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserAddressesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAddressConnector },
        { type: UserAddressService },
        { type: GlobalMessageService }
    ]; };
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
    return UserAddressesEffects;
}());
export { UserAddressesEffects };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLWFkZHJlc3Nlcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0M7SUF1SUUsOEJBQ1UsUUFBaUIsRUFDakIsb0JBQTBDLEVBQzFDLGtCQUFzQyxFQUN0QyxjQUFvQztRQUo5QyxpQkFLSTtRQUpNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW9CO1FBQ3RDLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQXhJOUMsdUJBQWtCLEdBRWQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ3BCLE1BQU0sQ0FBQyxXQUFXLENBQUMsbUJB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QStCRTs7SUFFRixrREFzQkU7Ozs7O0lBS0YsOERBT0U7Ozs7O0lBS0YsaUVBT0U7Ozs7O0lBS0YsaUVBT0U7Ozs7O0lBR0Esd0NBQXlCOzs7OztJQUN6QixvREFBa0Q7Ozs7O0lBQ2xELGtEQUE4Qzs7Ozs7SUFDOUMsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQWRkcmVzc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvYWRkcmVzcy91c2VyLWFkZHJlc3MuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS91c2VyLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlckFkZHJlc3Nlc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFVzZXJBZGRyZXNzZXMkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuTE9BRF9VU0VSX0FERFJFU1NFUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3Rvci5nZXRBbGwocGF5bG9hZCkucGlwZShcbiAgICAgICAgbWFwKChhZGRyZXNzZXM6IEFkZHJlc3NbXSkgPT4ge1xuICAgICAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXNTdWNjZXNzKGFkZHJlc3Nlcyk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXNGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFkZFVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkFERF9VU0VSX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5BZGRVc2VyQWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3JcbiAgICAgICAgLmFkZChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5hZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5BZGRVc2VyQWRkcmVzc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IFVzZXJBY3Rpb25zLkFkZFVzZXJBZGRyZXNzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgdXBkYXRlVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuVVBEQVRFX1VTRVJfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLlVwZGF0ZVVzZXJBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAudXBkYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3NJZCwgcGF5bG9hZC5hZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBkb24ndCBzaG93IHRoZSBtZXNzYWdlIGlmIGp1c3Qgc2V0dGluZyBhZGRyZXNzIGFzIGRlZmF1bHRcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgcGF5bG9hZC5hZGRyZXNzICYmXG4gICAgICAgICAgICAgIE9iamVjdC5rZXlzKHBheWxvYWQuYWRkcmVzcykubGVuZ3RoID09PSAxICYmXG4gICAgICAgICAgICAgIHBheWxvYWQuYWRkcmVzcy5kZWZhdWx0QWRkcmVzc1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXMocGF5bG9hZC51c2VySWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyQWRkcmVzc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyQWRkcmVzc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZVVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkRFTEVURV9VU0VSX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5EZWxldGVVc2VyQWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3JcbiAgICAgICAgLmRlbGV0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5hZGRyZXNzSWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuRGVsZXRlVXNlckFkZHJlc3NTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuRGVsZXRlVXNlckFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IGFkZCBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25BZGRTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuQUREX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdhZGRyZXNzRm9ybS51c2VyQWRkcmVzc0FkZFN1Y2Nlc3MnKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IHVwZGF0ZSBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25VcGRhdGVTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuVVBEQVRFX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdhZGRyZXNzRm9ybS51c2VyQWRkcmVzc1VwZGF0ZVN1Y2Nlc3MnKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IGRlbGV0ZSBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25EZWxldGVTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuREVMRVRFX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdhZGRyZXNzRm9ybS51c2VyQWRkcmVzc0RlbGV0ZVN1Y2Nlc3MnKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWRkcmVzc0Nvbm5lY3RvcjogVXNlckFkZHJlc3NDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFNob3cgZ2xvYmFsIGNvbmZpcm1hdGlvbiBtZXNzYWdlIHdpdGggcHJvdmlkZWQgdGV4dFxuICAgKi9cbiAgcHJpdmF0ZSBzaG93R2xvYmFsTWVzc2FnZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHsga2V5OiB0ZXh0IH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQWRkcmVzc2VzKCkge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWRBZGRyZXNzZXMoKTtcbiAgfVxufVxuIl19