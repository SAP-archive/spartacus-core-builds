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
                    return new UserActions.LoadUserAddresses(USERID_CURRENT);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLWFkZHJlc3Nlcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRS9DO0lBdUlFLDhCQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQyxFQUMxQyxrQkFBc0MsRUFDdEMsY0FBb0M7UUFKOUMsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUF4STlDLHVCQUFrQixHQUVkLElBQUksQ0FBQyxR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QUMvQixrREFrQkU7O0lBRUYsK0NBa0JFOztJQUVGLGtEQStCRTs7SUFFRixrREFzQkU7Ozs7O0lBS0YsOERBT0U7Ozs7O0lBS0YsaUVBT0U7Ozs7O0lBS0YsaUVBT0U7Ozs7O0lBR0Esd0NBQXlCOzs7OztJQUN6QixvREFBa0Q7Ozs7O0lBQ2xELGtEQUE4Qzs7Ozs7SUFDOUMsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFVTRVJJRF9DVVJSRU5UIH0gZnJvbSAnLi4vLi4vLi4vb2NjL3V0aWxzL29jYy1jb25zdGFudHMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL3VzZXItYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQWRkcmVzc2VzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkVXNlckFkZHJlc3NlcyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX1VTRVJfQUREUkVTU0VTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzQ29ubmVjdG9yLmdldEFsbChwYXlsb2FkKS5waXBlKFxuICAgICAgICBtYXAoKGFkZHJlc3NlczogQWRkcmVzc1tdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3Nlc1N1Y2Nlc3MoYWRkcmVzc2VzKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3Nlc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWRkVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuQUREX1VTRVJfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkFkZFVzZXJBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAuYWRkKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkFkZFVzZXJBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgVXNlckFjdGlvbnMuQWRkVXNlckFkZHJlc3NGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICB1cGRhdGVVc2VyQWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5VUERBVEVfVVNFUl9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuVXBkYXRlVXNlckFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzQ29ubmVjdG9yXG4gICAgICAgIC51cGRhdGUocGF5bG9hZC51c2VySWQsIHBheWxvYWQuYWRkcmVzc0lkLCBwYXlsb2FkLmFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIC8vIGRvbid0IHNob3cgdGhlIG1lc3NhZ2UgaWYganVzdCBzZXR0aW5nIGFkZHJlc3MgYXMgZGVmYXVsdFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBwYXlsb2FkLmFkZHJlc3MgJiZcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bG9hZC5hZGRyZXNzKS5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICAgcGF5bG9hZC5hZGRyZXNzLmRlZmF1bHRBZGRyZXNzXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3NlcyhVU0VSSURfQ1VSUkVOVCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZVVzZXJBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZVVzZXJBZGRyZXNzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZGVsZXRlVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIFVzZXJBY3Rpb25zLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuREVMRVRFX1VTRVJfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IFVzZXJBY3Rpb25zLkRlbGV0ZVVzZXJBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAuZGVsZXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3NJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5EZWxldGVVc2VyQWRkcmVzc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5EZWxldGVVc2VyQWRkcmVzc0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqICBSZWxvYWQgYWRkcmVzc2VzIGFuZCBub3RpZnkgYWJvdXQgYWRkIHN1Y2Nlc3NcbiAgICovXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgc2hvd0dsb2JhbE1lc3NhZ2VPbkFkZFN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5BRERfVVNFUl9BRERSRVNTX1NVQ0NFU1MpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRBZGRyZXNzZXMoKTtcbiAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoJ2FkZHJlc3NGb3JtLnVzZXJBZGRyZXNzQWRkU3VjY2VzcycpO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqICBSZWxvYWQgYWRkcmVzc2VzIGFuZCBub3RpZnkgYWJvdXQgdXBkYXRlIHN1Y2Nlc3NcbiAgICovXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgc2hvd0dsb2JhbE1lc3NhZ2VPblVwZGF0ZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5VUERBVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1MpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRBZGRyZXNzZXMoKTtcbiAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoJ2FkZHJlc3NGb3JtLnVzZXJBZGRyZXNzVXBkYXRlU3VjY2VzcycpO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqICBSZWxvYWQgYWRkcmVzc2VzIGFuZCBub3RpZnkgYWJvdXQgZGVsZXRlIHN1Y2Nlc3NcbiAgICovXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgc2hvd0dsb2JhbE1lc3NhZ2VPbkRlbGV0ZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5ERUxFVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1MpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRBZGRyZXNzZXMoKTtcbiAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoJ2FkZHJlc3NGb3JtLnVzZXJBZGRyZXNzRGVsZXRlU3VjY2VzcycpO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBZGRyZXNzQ29ubmVjdG9yOiBVc2VyQWRkcmVzc0Nvbm5lY3RvcixcbiAgICBwcml2YXRlIHVzZXJBZGRyZXNzU2VydmljZTogVXNlckFkZHJlc3NTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2hvdyBnbG9iYWwgY29uZmlybWF0aW9uIG1lc3NhZ2Ugd2l0aCBwcm92aWRlZCB0ZXh0XG4gICAqL1xuICBwcml2YXRlIHNob3dHbG9iYWxNZXNzYWdlKHRleHQ6IHN0cmluZykge1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgeyBrZXk6IHRleHQgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRBZGRyZXNzZXMoKSB7XG4gICAgdGhpcy51c2VyQWRkcmVzc1NlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICB9XG59XG4iXX0=