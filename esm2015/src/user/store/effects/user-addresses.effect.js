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
export class UserAddressesEffects {
    /**
     * @param {?} actions$
     * @param {?} userAddressConnector
     * @param {?} userService
     * @param {?} messageService
     */
    constructor(actions$, userAddressConnector, userService, messageService) {
        this.actions$ = actions$;
        this.userAddressConnector = userAddressConnector;
        this.userService = userService;
        this.messageService = messageService;
        this.loadUserAddresses$ = this.actions$.pipe(ofType(fromUserAddressesAction.LOAD_USER_ADDRESSES), map((action) => action.payload), mergeMap(payload => {
            return this.userAddressConnector.getAll(payload).pipe(map((addresses) => {
                return new fromUserAddressesAction.LoadUserAddressesSuccess(addresses);
            }), catchError(error => of(new fromUserAddressesAction.LoadUserAddressesFail(error))));
        }));
        this.addUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.ADD_USER_ADDRESS), map((action) => action.payload), mergeMap(payload => {
            return this.userAddressConnector
                .add(payload.userId, payload.address)
                .pipe(map((data) => {
                return new fromUserAddressesAction.AddUserAddressSuccess(data);
            }), catchError(error => of(new fromUserAddressesAction.AddUserAddressFail(error))));
        }));
        this.updateUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.UPDATE_USER_ADDRESS), map((action) => action.payload), mergeMap(payload => {
            return this.userAddressConnector
                .update(payload.userId, payload.addressId, payload.address)
                .pipe(map((data) => {
                // don't show the message if just setting address as default
                if (payload.address &&
                    Object.keys(payload.address).length === 1 &&
                    payload.address.defaultAddress) {
                    return new fromUserAddressesAction.LoadUserAddresses(USERID_CURRENT);
                }
                else {
                    return new fromUserAddressesAction.UpdateUserAddressSuccess(data);
                }
            }), catchError(error => of(new fromUserAddressesAction.UpdateUserAddressFail(error))));
        }));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.DELETE_USER_ADDRESS), map((action) => action.payload), mergeMap(payload => {
            return this.userAddressConnector
                .delete(payload.userId, payload.addressId)
                .pipe(map((data) => {
                return new fromUserAddressesAction.DeleteUserAddressSuccess(data);
            }), catchError(error => of(new fromUserAddressesAction.DeleteUserAddressFail(error))));
        }));
        /**
         *  Reload addresses and notify about add success
         */
        this.showGlobalMessageOnAddSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.ADD_USER_ADDRESS_SUCCESS), tap(() => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressAddSuccess');
        }));
        /**
         *  Reload addresses and notify about update success
         */
        this.showGlobalMessageOnUpdateSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.UPDATE_USER_ADDRESS_SUCCESS), tap(() => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressUpdateSuccess');
        }));
        /**
         *  Reload addresses and notify about delete success
         */
        this.showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.DELETE_USER_ADDRESS_SUCCESS), tap(() => {
            this.loadAddresses();
            this.showGlobalMessage('addressForm.userAddressDeleteSuccess');
        }));
    }
    /**
     * Show global confirmation message with provided text
     * @private
     * @param {?} text
     * @return {?}
     */
    showGlobalMessage(text) {
        // ----------
        // todo: handle automatic removal of outdated messages
        this.messageService.remove(GlobalMessageType.MSG_TYPE_ERROR);
        this.messageService.remove(GlobalMessageType.MSG_TYPE_CONFIRMATION);
        // ----------
        this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
    /**
     * @private
     * @return {?}
     */
    loadAddresses() {
        this.userService.loadAddresses();
    }
}
UserAddressesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserAddressesEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserAddressConnector },
    { type: UserService },
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
    UserAddressesEffects.prototype.userService;
    /**
     * @type {?}
     * @private
     */
    UserAddressesEffects.prototype.messageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLWFkZHJlc3Nlcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUNMLG9CQUFvQixFQUNwQixpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUN2RixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDakQsT0FBTyxLQUFLLHVCQUF1QixNQUFNLGtDQUFrQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUdsRSxNQUFNLE9BQU8sb0JBQW9COzs7Ozs7O0lBZ0kvQixZQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQyxFQUMxQyxXQUF3QixFQUN4QixjQUFvQztRQUhwQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsbUJBQWMsR0FBZCxjQUFjLENBQXNCO1FBbEk5Qyx1QkFBa0IsR0FFZCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDcEIsTUFBTSxDQUFDLHVCQUF1QixDQUFDLG1C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QkU7O0lBRUYsa0RBNkJFOztJQUVGLGtEQWtCRTs7Ozs7SUFLRiw4REFPRTs7Ozs7SUFLRixpRUFPRTs7Ozs7SUFLRixpRUFPRTs7Ozs7SUFHQSx3Q0FBeUI7Ozs7O0lBQ3pCLG9EQUFrRDs7Ozs7SUFDbEQsMkNBQWdDOzs7OztJQUNoQyw4Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2FkZHJlc3MvdXNlci1hZGRyZXNzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgKiBhcyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3VzZXItYWRkcmVzc2VzLmFjdGlvbic7XG5pbXBvcnQgeyBVU0VSSURfQ1VSUkVOVCB9IGZyb20gJy4uLy4uLy4uL29jYy91dGlscy9vY2MtY29uc3RhbnRzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJBZGRyZXNzZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRVc2VyQWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkxPQURfVVNFUl9BRERSRVNTRVMpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5Mb2FkVXNlckFkZHJlc3NlcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3IuZ2V0QWxsKHBheWxvYWQpLnBpcGUoXG4gICAgICAgIG1hcCgoYWRkcmVzc2VzOiBBZGRyZXNzW10pID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkxvYWRVc2VyQWRkcmVzc2VzU3VjY2VzcyhcbiAgICAgICAgICAgIGFkZHJlc3Nlc1xuICAgICAgICAgICk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkxvYWRVc2VyQWRkcmVzc2VzRmFpbChlcnJvcikpXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWRkVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uQUREX1VTRVJfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkFkZFVzZXJBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAuYWRkKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkFkZFVzZXJBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uQWRkVXNlckFkZHJlc3NGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgdXBkYXRlVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVVBEQVRFX1VTRVJfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVwZGF0ZVVzZXJBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAudXBkYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3NJZCwgcGF5bG9hZC5hZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgLy8gZG9uJ3Qgc2hvdyB0aGUgbWVzc2FnZSBpZiBqdXN0IHNldHRpbmcgYWRkcmVzcyBhcyBkZWZhdWx0XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgIHBheWxvYWQuYWRkcmVzcyAmJlxuICAgICAgICAgICAgICBPYmplY3Qua2V5cyhwYXlsb2FkLmFkZHJlc3MpLmxlbmd0aCA9PT0gMSAmJlxuICAgICAgICAgICAgICBwYXlsb2FkLmFkZHJlc3MuZGVmYXVsdEFkZHJlc3NcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkxvYWRVc2VyQWRkcmVzc2VzKFxuICAgICAgICAgICAgICAgIFVTRVJJRF9DVVJSRU5UXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVwZGF0ZVVzZXJBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgICBvZihuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVXBkYXRlVXNlckFkZHJlc3NGYWlsKGVycm9yKSlcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgZGVsZXRlVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFxuICAgIGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVzZXJBZGRyZXNzZXNBY3Rpb25cbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uREVMRVRFX1VTRVJfQUREUkVTUyksXG4gICAgbWFwKChhY3Rpb246IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkRlbGV0ZVVzZXJBZGRyZXNzKSA9PiBhY3Rpb24ucGF5bG9hZCksXG4gICAgbWVyZ2VNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAuZGVsZXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3NJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uRGVsZXRlVXNlckFkZHJlc3NTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5EZWxldGVVc2VyQWRkcmVzc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IGFkZCBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25BZGRTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uQUREX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdhZGRyZXNzRm9ybS51c2VyQWRkcmVzc0FkZFN1Y2Nlc3MnKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IHVwZGF0ZSBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25VcGRhdGVTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVVBEQVRFX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdhZGRyZXNzRm9ybS51c2VyQWRkcmVzc1VwZGF0ZVN1Y2Nlc3MnKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IGRlbGV0ZSBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25EZWxldGVTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uREVMRVRFX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdhZGRyZXNzRm9ybS51c2VyQWRkcmVzc0RlbGV0ZVN1Y2Nlc3MnKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWRkcmVzc0Nvbm5lY3RvcjogVXNlckFkZHJlc3NDb25uZWN0b3IsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93IGdsb2JhbCBjb25maXJtYXRpb24gbWVzc2FnZSB3aXRoIHByb3ZpZGVkIHRleHRcbiAgICovXG4gIHByaXZhdGUgc2hvd0dsb2JhbE1lc3NhZ2UodGV4dDogc3RyaW5nKSB7XG4gICAgLy8gLS0tLS0tLS0tLVxuICAgIC8vIHRvZG86IGhhbmRsZSBhdXRvbWF0aWMgcmVtb3ZhbCBvZiBvdXRkYXRlZCBtZXNzYWdlc1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04pO1xuICAgIC8vIC0tLS0tLS0tLS1cblxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgeyBrZXk6IHRleHQgfSxcbiAgICAgIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTlxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRBZGRyZXNzZXMoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5sb2FkQWRkcmVzc2VzKCk7XG4gIH1cbn1cbiJdfQ==