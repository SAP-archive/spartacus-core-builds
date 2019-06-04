/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { GlobalMessageService, GlobalMessageType, } from '../../../global-message/index';
import { UserAddressConnector } from '../../connectors/address/user-address.connector';
import { UserService } from '../../facade/index';
import * as fromUserAddressesAction from '../actions/user-addresses.action';
import { USERID_CURRENT } from '../../../occ/utils/occ-constants';
var UserAddressesEffects = /** @class */ (function () {
    function UserAddressesEffects(actions$, userAddressConnector, userService, messageService) {
        var _this = this;
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.userService = userService;
        this.messageService = messageService;
        this.loadUserAddresses$ = this.actions$.pipe(ofType(fromUserAddressesAction.LOAD_USER_ADDRESSES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector.getAll(payload).pipe(map(function (addresses) {
                return new fromUserAddressesAction.LoadUserAddressesSuccess(addresses);
            }), catchError(function (error) {
                return of(new fromUserAddressesAction.LoadUserAddressesFail(error));
            }));
        }));
        this.addUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.ADD_USER_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector
                .add(payload.userId, payload.address)
                .pipe(map(function (data) {
                return new fromUserAddressesAction.AddUserAddressSuccess(data);
            }), catchError(function (error) {
                return of(new fromUserAddressesAction.AddUserAddressFail(error));
            }));
        }));
        this.updateUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.UPDATE_USER_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector
                .update(payload.userId, payload.addressId, payload.address)
                .pipe(map(function (data) {
                // don't show the message if just setting address as default
                if (payload.address &&
                    Object.keys(payload.address).length === 1 &&
                    payload.address.defaultAddress) {
                    return new fromUserAddressesAction.LoadUserAddresses(USERID_CURRENT);
                }
                else {
                    return new fromUserAddressesAction.UpdateUserAddressSuccess(data);
                }
            }), catchError(function (error) {
                return of(new fromUserAddressesAction.UpdateUserAddressFail(error));
            }));
        }));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.DELETE_USER_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector
                .delete(payload.userId, payload.addressId)
                .pipe(map(function (data) {
                return new fromUserAddressesAction.DeleteUserAddressSuccess(data);
            }), catchError(function (error) {
                return of(new fromUserAddressesAction.DeleteUserAddressFail(error));
            }));
        }));
        /**
         *  Reload addresses and notify about add success
         */
        this.showGlobalMessageOnAddSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.ADD_USER_ADDRESS_SUCCESS), tap(function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressAddSuccess');
        }));
        /**
         *  Reload addresses and notify about update success
         */
        this.showGlobalMessageOnUpdateSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.UPDATE_USER_ADDRESS_SUCCESS), tap(function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressUpdateSuccess');
        }));
        /**
         *  Reload addresses and notify about delete success
         */
        this.showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.DELETE_USER_ADDRESS_SUCCESS), tap(function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressDeleteSuccess');
        }));
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
        // ----------
        // todo: handle automatic removal of outdated messages
        this.messageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
        this.messageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
        // ----------
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
        this.userService.loadAddresses();
    };
    UserAddressesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    UserAddressesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAddressConnector },
        { type: UserService },
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
    UserAddressesEffects.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    UserAddressesEffects.prototype.messageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLWFkZHJlc3Nlcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxLQUFLLHVCQUF1QixNQUFNLGtDQUFrQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVsRTtJQWlJRSw4QkFDVSxRQUFpQixFQUNqQixvQkFBMEMsRUFDMUMsV0FBd0IsRUFDeEIsY0FBb0M7UUFKOUMsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQXNCO1FBbEk5Qyx1QkFBa0IsR0FFZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHVCQUF1QixDQUFDLG1CQUFtQixDQUFDLEVB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QTFKWSxvQkFBb0I7OztJQUMvQixrREFrQkU7O0lBRUYsK0NBa0JFOztJQUVGLGtEQTZCRTs7SUFFRixrREFrQkU7Ozs7O0lBS0YsOERBT0U7Ozs7O0lBS0YsaUVBT0U7Ozs7O0lBS0YsaUVBT0U7Ozs7O0lBR0Esd0NBQXlCOzs7OztJQUN6QixvREFBa0Q7Ozs7O0lBQ2xELDJDQUFnQzs7Ozs7SUFDaEMsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBHbG9iYWxNZXNzYWdlU2VydmljZSxcbiAgR2xvYmFsTWVzc2FnZVR5cGUsXG59IGZyb20gJy4uLy4uLy4uL2dsb2JhbC1tZXNzYWdlL2luZGV4JztcbmltcG9ydCB7IEFkZHJlc3MgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9hZGRyZXNzLm1vZGVsJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvaW5kZXgnO1xuaW1wb3J0ICogYXMgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy91c2VyLWFkZHJlc3Nlcy5hY3Rpb24nO1xuaW1wb3J0IHsgVVNFUklEX0NVUlJFTlQgfSBmcm9tICcuLi8uLi8uLi9vY2MvdXRpbHMvb2NjLWNvbnN0YW50cyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQWRkcmVzc2VzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkVXNlckFkZHJlc3NlcyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5MT0FEX1VTRVJfQUREUkVTU0VTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uTG9hZFVzZXJBZGRyZXNzZXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBZGRyZXNzQ29ubmVjdG9yLmdldEFsbChwYXlsb2FkKS5waXBlKFxuICAgICAgICBtYXAoKGFkZHJlc3NlczogQWRkcmVzc1tdKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5Mb2FkVXNlckFkZHJlc3Nlc1N1Y2Nlc3MoXG4gICAgICAgICAgICBhZGRyZXNzZXNcbiAgICAgICAgICApO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5Mb2FkVXNlckFkZHJlc3Nlc0ZhaWwoZXJyb3IpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFkZFVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkFERF9VU0VSX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5BZGRVc2VyQWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3JcbiAgICAgICAgLmFkZChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5hZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5BZGRVc2VyQWRkcmVzc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkFkZFVzZXJBZGRyZXNzRmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZVVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVQREFURV9VU0VSX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5VcGRhdGVVc2VyQWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3JcbiAgICAgICAgLnVwZGF0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5hZGRyZXNzSWQsIHBheWxvYWQuYWRkcmVzcylcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIC8vIGRvbid0IHNob3cgdGhlIG1lc3NhZ2UgaWYganVzdCBzZXR0aW5nIGFkZHJlc3MgYXMgZGVmYXVsdFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBwYXlsb2FkLmFkZHJlc3MgJiZcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bG9hZC5hZGRyZXNzKS5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICAgcGF5bG9hZC5hZGRyZXNzLmRlZmF1bHRBZGRyZXNzXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5Mb2FkVXNlckFkZHJlc3NlcyhcbiAgICAgICAgICAgICAgICBVU0VSSURfQ1VSUkVOVFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5VcGRhdGVVc2VyQWRkcmVzc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVwZGF0ZVVzZXJBZGRyZXNzRmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZVVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkRFTEVURV9VU0VSX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5EZWxldGVVc2VyQWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3JcbiAgICAgICAgLmRlbGV0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5hZGRyZXNzSWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkRlbGV0ZVVzZXJBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uRGVsZXRlVXNlckFkZHJlc3NGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCBhZGQgc3VjY2Vzc1xuICAgKi9cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBzaG93R2xvYmFsTWVzc2FnZU9uQWRkU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkFERF9VU0VSX0FERFJFU1NfU1VDQ0VTUyksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEFkZHJlc3NlcygpO1xuICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZSgnYWRkcmVzc0Zvcm0udXNlckFkZHJlc3NBZGRTdWNjZXNzJyk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCB1cGRhdGUgc3VjY2Vzc1xuICAgKi9cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBzaG93R2xvYmFsTWVzc2FnZU9uVXBkYXRlU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVQREFURV9VU0VSX0FERFJFU1NfU1VDQ0VTUyksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEFkZHJlc3NlcygpO1xuICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZSgnYWRkcmVzc0Zvcm0udXNlckFkZHJlc3NVcGRhdGVTdWNjZXNzJyk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCBkZWxldGUgc3VjY2Vzc1xuICAgKi9cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBzaG93R2xvYmFsTWVzc2FnZU9uRGVsZXRlU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkRFTEVURV9VU0VSX0FERFJFU1NfU1VDQ0VTUyksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEFkZHJlc3NlcygpO1xuICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZSgnYWRkcmVzc0Zvcm0udXNlckFkZHJlc3NEZWxldGVTdWNjZXNzJyk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckFkZHJlc3NDb25uZWN0b3I6IFVzZXJBZGRyZXNzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICAvKipcbiAgICogU2hvdyBnbG9iYWwgY29uZmlybWF0aW9uIG1lc3NhZ2Ugd2l0aCBwcm92aWRlZCB0ZXh0XG4gICAqL1xuICBwcml2YXRlIHNob3dHbG9iYWxNZXNzYWdlKHRleHQ6IHN0cmluZykge1xuICAgIC8vIC0tLS0tLS0tLS1cbiAgICAvLyB0b2RvOiBoYW5kbGUgYXV0b21hdGljIHJlbW92YWwgb2Ygb3V0ZGF0ZWQgbWVzc2FnZXNcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUik7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5yZW1vdmUoR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OKTtcbiAgICAvLyAtLS0tLS0tLS0tXG5cbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgIHsga2V5OiB0ZXh0IH0sXG4gICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT05cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQWRkcmVzc2VzKCkge1xuICAgIHRoaXMudXNlclNlcnZpY2UubG9hZEFkZHJlc3NlcygpO1xuICB9XG59XG4iXX0=