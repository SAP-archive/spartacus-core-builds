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
var UserAddressesEffects = /** @class */ (function () {
    function UserAddressesEffects(actions$, userAddressConnector, userAddressService, messageService) {
        var _this = this;
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.userAddressService = userAddressService;
        this.messageService = messageService;
        this.loadUserAddresses$ = this.actions$.pipe(ofType(fromUserAddressesAction.LOAD_USER_ADDRESSES), map((/**
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
                return new fromUserAddressesAction.LoadUserAddressesSuccess(addresses);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromUserAddressesAction.LoadUserAddressesFail(error));
            })));
        })));
        this.addUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.ADD_USER_ADDRESS), map((/**
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
                return new fromUserAddressesAction.AddUserAddressSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromUserAddressesAction.AddUserAddressFail(error));
            })));
        })));
        this.updateUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.UPDATE_USER_ADDRESS), map((/**
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
                    return new fromUserAddressesAction.LoadUserAddresses(USERID_CURRENT);
                }
                else {
                    return new fromUserAddressesAction.UpdateUserAddressSuccess(data);
                }
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromUserAddressesAction.UpdateUserAddressFail(error));
            })));
        })));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.DELETE_USER_ADDRESS), map((/**
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
                return new fromUserAddressesAction.DeleteUserAddressSuccess(data);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromUserAddressesAction.DeleteUserAddressFail(error));
            })));
        })));
        /**
         *  Reload addresses and notify about add success
         */
        this.showGlobalMessageOnAddSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.ADD_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressAddSuccess');
        })));
        /**
         *  Reload addresses and notify about update success
         */
        this.showGlobalMessageOnUpdateSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.UPDATE_USER_ADDRESS_SUCCESS), tap((/**
         * @return {?}
         */
        function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressUpdateSuccess');
        })));
        /**
         *  Reload addresses and notify about delete success
         */
        this.showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.DELETE_USER_ADDRESS_SUCCESS), tap((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLWFkZHJlc3Nlcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN2RSxPQUFPLEtBQUssdUJBQXVCLE1BQU0sa0NBQWtDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRWxFO0lBaUlFLDhCQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQyxFQUMxQyxrQkFBc0MsRUFDdEMsY0FBb0M7UUFKOUMsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUFsSTlDLHVCQUFrQixHQUVkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsdUJBQXVCLENBQUMsbUJBQW1C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Ozs7OztJQUtGLGlFQU9FOzs7OztJQUdBLHdDQUF5Qjs7Ozs7SUFDekIsb0RBQWtEOzs7OztJQUNsRCxrREFBOEM7Ozs7O0lBQzlDLDhDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBtZXJnZU1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQWRkcmVzc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvYWRkcmVzcy91c2VyLWFkZHJlc3MuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS91c2VyLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3VzZXItYWRkcmVzc2VzLmFjdGlvbic7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJBZGRyZXNzZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyQWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkxPQURfVVNFUl9BRERSRVNTRVMpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5Mb2FkVXNlckFkZHJlc3NlcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3IuZ2V0QWxsKHBheWxvYWQpLnBpcGUoXG4gICAgICAgIG1hcCgoYWRkcmVzc2VzOiBBZGRyZXNzW10pID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkxvYWRVc2VyQWRkcmVzc2VzU3VjY2VzcyhcbiAgICAgICAgICAgIGFkZHJlc3Nlc1xuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkxvYWRVc2VyQWRkcmVzc2VzRmFpbChlcnJvcikpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWRkVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uQUREX1VTRVJfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkFkZFVzZXJBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAuYWRkKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkFkZFVzZXJBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uQWRkVXNlckFkZHJlc3NGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgdXBkYXRlVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVVBEQVRFX1VTRVJfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVwZGF0ZVVzZXJBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAudXBkYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3NJZCwgcGF5bG9hZC5hZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gZG9uJ3Qgc2hvdyB0aGUgbWVzc2FnZSBpZiBqdXN0IHNldHRpbmcgYWRkcmVzcyBhcyBkZWZhdWx0XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHBheWxvYWQuYWRkcmVzcyAmJlxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwYXlsb2FkLmFkZHJlc3MpLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgICBwYXlsb2FkLmFkZHJlc3MuZGVmYXVsdEFkZHJlc3NcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkxvYWRVc2VyQWRkcmVzc2VzKFxuICAgICAgICAgICAgICAgIFVTRVJJRF9DVVJSRU5UXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVwZGF0ZVVzZXJBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVXBkYXRlVXNlckFkZHJlc3NGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZGVsZXRlVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uREVMRVRFX1VTRVJfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkRlbGV0ZVVzZXJBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAuZGVsZXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3NJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uRGVsZXRlVXNlckFkZHJlc3NTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5EZWxldGVVc2VyQWRkcmVzc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IGFkZCBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25BZGRTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uQUREX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdhZGRyZXNzRm9ybS51c2VyQWRkcmVzc0FkZFN1Y2Nlc3MnKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IHVwZGF0ZSBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25VcGRhdGVTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVVBEQVRFX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdhZGRyZXNzRm9ybS51c2VyQWRkcmVzc1VwZGF0ZVN1Y2Nlc3MnKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IGRlbGV0ZSBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25EZWxldGVTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uREVMRVRFX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdhZGRyZXNzRm9ybS51c2VyQWRkcmVzc0RlbGV0ZVN1Y2Nlc3MnKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWRkcmVzc0Nvbm5lY3RvcjogVXNlckFkZHJlc3NDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSxcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIFNob3cgZ2xvYmFsIGNvbmZpcm1hdGlvbiBtZXNzYWdlIHdpdGggcHJvdmlkZWQgdGV4dFxuICAgKi9cbiAgcHJpdmF0ZSBzaG93R2xvYmFsTWVzc2FnZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHsga2V5OiB0ZXh0IH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQWRkcmVzc2VzKCkge1xuICAgIHRoaXMudXNlckFkZHJlc3NTZXJ2aWNlLmxvYWRBZGRyZXNzZXMoKTtcbiAgfVxufVxuIl19