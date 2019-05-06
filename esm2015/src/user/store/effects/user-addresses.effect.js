/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap, take } from 'rxjs/operators';
import * as fromUserAddressesAction from '../actions/user-addresses.action';
import { GlobalMessageService, GlobalMessageType, } from '../../../global-message/index';
import { UserService } from '../../facade/index';
import { OccUserService } from '../../occ/index';
export class UserAddressesEffects {
    /**
     * @param {?} actions$
     * @param {?} occUserService
     * @param {?} userService
     * @param {?} messageService
     */
    constructor(actions$, occUserService, userService, messageService) {
        this.actions$ = actions$;
        this.occUserService = occUserService;
        this.userService = userService;
        this.messageService = messageService;
        this.loadUserAddresses$ = this.actions$.pipe(ofType(fromUserAddressesAction.LOAD_USER_ADDRESSES), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService.loadUserAddresses(payload).pipe(map((addressesList) => {
                return new fromUserAddressesAction.LoadUserAddressesSuccess(addressesList.addresses);
            }), catchError(error => of(new fromUserAddressesAction.LoadUserAddressesFail(error))));
        }));
        this.addUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.ADD_USER_ADDRESS), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService
                .addUserAddress(payload.userId, payload.address)
                .pipe(map((data) => {
                return new fromUserAddressesAction.AddUserAddressSuccess(data);
            }), catchError(error => of(new fromUserAddressesAction.AddUserAddressFail(error))));
        }));
        this.updateUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.UPDATE_USER_ADDRESS), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService
                .updateUserAddress(payload.userId, payload.addressId, payload.address)
                .pipe(map((data) => {
                return new fromUserAddressesAction.UpdateUserAddressSuccess(data);
            }), catchError(error => of(new fromUserAddressesAction.UpdateUserAddressFail(error))));
        }));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(fromUserAddressesAction.DELETE_USER_ADDRESS), map((action) => action.payload), mergeMap(payload => {
            return this.occUserService
                .deleteUserAddress(payload.userId, payload.addressId)
                .pipe(map((data) => {
                return new fromUserAddressesAction.DeleteUserAddressSuccess(data);
            }), catchError(error => of(new fromUserAddressesAction.DeleteUserAddressFail(error))));
        }));
        /**
         *  Reload addresses and notify about add success
         */
        this.showGlobalMessageOnAddSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.ADD_USER_ADDRESS_SUCCESS), tap(() => {
            this.loadAddresses();
            this.showGlobalMessage('New address was added successfully!');
        }));
        /**
         *  Reload addresses and notify about update success
         */
        this.showGlobalMessageOnUpdateSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.UPDATE_USER_ADDRESS_SUCCESS), tap(() => {
            this.loadAddresses();
            this.showGlobalMessage('Address updated successfully!');
        }));
        /**
         *  Reload addresses and notify about delete success
         */
        this.showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(ofType(fromUserAddressesAction.DELETE_USER_ADDRESS_SUCCESS), tap(() => {
            this.loadAddresses();
            this.showGlobalMessage('Address deleted successfully!');
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
        this.messageService.add(text, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    }
    /**
     * @private
     * @return {?}
     */
    loadAddresses() {
        this.userService
            .get()
            .pipe(take(1))
            .subscribe(({ uid }) => {
            this.userService.loadAddresses(uid);
        });
    }
}
UserAddressesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
UserAddressesEffects.ctorParameters = () => [
    { type: Actions },
    { type: OccUserService },
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
    UserAddressesEffects.prototype.occUserService;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLWFkZHJlc3Nlcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXRFLE9BQU8sS0FBSyx1QkFBdUIsTUFBTSxrQ0FBa0MsQ0FBQztBQUU1RSxPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLGlCQUFpQixHQUNsQixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7OztJQXFIL0IsWUFDVSxRQUFpQixFQUNqQixjQUE4QixFQUM5QixXQUF3QixFQUN4QixjQUFvQztRQUhwQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUF2SDlDLHVCQUFrQixHQUVkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsdUJBQXVCLENBQUMsbUJBQW1CLENBQUMsRUFDbkQsR0FBRyxDQUFDLENBQUMsTUFBaUQsRUFB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Qzs7Ozs7SUFDaEMsOENBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwLCB0YXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdXNlci1hZGRyZXNzZXMuYWN0aW9uJztcbmltcG9ydCB7IEFkZHJlc3NMaXN0LCBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHtcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgeyBPY2NVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL29jYy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQWRkcmVzc2VzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkVXNlckFkZHJlc3NlcyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5MT0FEX1VTRVJfQUREUkVTU0VTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uTG9hZFVzZXJBZGRyZXNzZXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9jY1VzZXJTZXJ2aWNlLmxvYWRVc2VyQWRkcmVzc2VzKHBheWxvYWQpLnBpcGUoXG4gICAgICAgIG1hcCgoYWRkcmVzc2VzTGlzdDogQWRkcmVzc0xpc3QpID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkxvYWRVc2VyQWRkcmVzc2VzU3VjY2VzcyhcbiAgICAgICAgICAgIGFkZHJlc3Nlc0xpc3QuYWRkcmVzc2VzXG4gICAgICAgICAgKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uTG9hZFVzZXJBZGRyZXNzZXNGYWlsKGVycm9yKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBhZGRVc2VyQWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5BRERfVVNFUl9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uQWRkVXNlckFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcChwYXlsb2FkID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9jY1VzZXJTZXJ2aWNlXG4gICAgICAgIC5hZGRVc2VyQWRkcmVzcyhwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5hZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5BZGRVc2VyQWRkcmVzc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkFkZFVzZXJBZGRyZXNzRmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZVVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVQREFURV9VU0VSX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5VcGRhdGVVc2VyQWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjVXNlclNlcnZpY2VcbiAgICAgICAgLnVwZGF0ZVVzZXJBZGRyZXNzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3NJZCwgcGF5bG9hZC5hZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5VcGRhdGVVc2VyQWRkcmVzc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YobmV3IGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLlVwZGF0ZVVzZXJBZGRyZXNzRmFpbChlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGRlbGV0ZVVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkRFTEVURV9VU0VSX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5EZWxldGVVc2VyQWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKHBheWxvYWQgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjVXNlclNlcnZpY2VcbiAgICAgICAgLmRlbGV0ZVVzZXJBZGRyZXNzKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3NJZClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKChkYXRhOiBhbnkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uRGVsZXRlVXNlckFkZHJlc3NTdWNjZXNzKGRhdGEpO1xuICAgICAgICAgIH0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKG5ldyBmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5EZWxldGVVc2VyQWRkcmVzc0ZhaWwoZXJyb3IpKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIC8qKlxuICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IGFkZCBzdWNjZXNzXG4gICAqL1xuICBARWZmZWN0KHsgZGlzcGF0Y2g6IGZhbHNlIH0pXG4gIHNob3dHbG9iYWxNZXNzYWdlT25BZGRTdWNjZXNzJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbVVzZXJBZGRyZXNzZXNBY3Rpb24uQUREX1VTRVJfQUREUkVTU19TVUNDRVNTKSxcbiAgICB0YXAoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkQWRkcmVzc2VzKCk7XG4gICAgICB0aGlzLnNob3dHbG9iYWxNZXNzYWdlKCdOZXcgYWRkcmVzcyB3YXMgYWRkZWQgc3VjY2Vzc2Z1bGx5IScpO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqICBSZWxvYWQgYWRkcmVzc2VzIGFuZCBub3RpZnkgYWJvdXQgdXBkYXRlIHN1Y2Nlc3NcbiAgICovXG4gIEBFZmZlY3QoeyBkaXNwYXRjaDogZmFsc2UgfSlcbiAgc2hvd0dsb2JhbE1lc3NhZ2VPblVwZGF0ZVN1Y2Nlc3MkID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tVXNlckFkZHJlc3Nlc0FjdGlvbi5VUERBVEVfVVNFUl9BRERSRVNTX1NVQ0NFU1MpLFxuICAgIHRhcCgoKSA9PiB7XG4gICAgICB0aGlzLmxvYWRBZGRyZXNzZXMoKTtcbiAgICAgIHRoaXMuc2hvd0dsb2JhbE1lc3NhZ2UoJ0FkZHJlc3MgdXBkYXRlZCBzdWNjZXNzZnVsbHkhJyk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCBkZWxldGUgc3VjY2Vzc1xuICAgKi9cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBzaG93R2xvYmFsTWVzc2FnZU9uRGVsZXRlU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21Vc2VyQWRkcmVzc2VzQWN0aW9uLkRFTEVURV9VU0VSX0FERFJFU1NfU1VDQ0VTUyksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEFkZHJlc3NlcygpO1xuICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZSgnQWRkcmVzcyBkZWxldGVkIHN1Y2Nlc3NmdWxseSEnKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvY2NVc2VyU2VydmljZTogT2NjVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93IGdsb2JhbCBjb25maXJtYXRpb24gbWVzc2FnZSB3aXRoIHByb3ZpZGVkIHRleHRcbiAgICovXG4gIHByaXZhdGUgc2hvd0dsb2JhbE1lc3NhZ2UodGV4dDogc3RyaW5nKSB7XG4gICAgLy8gLS0tLS0tLS0tLVxuICAgIC8vIHRvZG86IGhhbmRsZSBhdXRvbWF0aWMgcmVtb3ZhbCBvZiBvdXRkYXRlZCBtZXNzYWdlc1xuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UucmVtb3ZlKEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0VSUk9SKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLnJlbW92ZShHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9DT05GSVJNQVRJT04pO1xuICAgIC8vIC0tLS0tLS0tLS1cblxuICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuYWRkKHRleHQsIEdsb2JhbE1lc3NhZ2VUeXBlLk1TR19UWVBFX0NPTkZJUk1BVElPTik7XG4gIH1cblxuICBwcml2YXRlIGxvYWRBZGRyZXNzZXMoKSB7XG4gICAgdGhpcy51c2VyU2VydmljZVxuICAgICAgLmdldCgpXG4gICAgICAucGlwZSh0YWtlKDEpKVxuICAgICAgLnN1YnNjcmliZSgoeyB1aWQgfTogVXNlcikgPT4ge1xuICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvYWRBZGRyZXNzZXModWlkKTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=