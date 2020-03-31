import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
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
        this.loadUserAddresses$ = this.actions$.pipe(ofType(UserActions.LOAD_USER_ADDRESSES), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector.getAll(payload).pipe(map(function (addresses) {
                return new UserActions.LoadUserAddressesSuccess(addresses);
            }), catchError(function (error) {
                return of(new UserActions.LoadUserAddressesFail(makeErrorSerializable(error)));
            }));
        }));
        this.addUserAddress$ = this.actions$.pipe(ofType(UserActions.ADD_USER_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector
                .add(payload.userId, payload.address)
                .pipe(map(function (data) {
                return new UserActions.AddUserAddressSuccess(data);
            }), catchError(function (error) {
                return of(new UserActions.AddUserAddressFail(makeErrorSerializable(error)));
            }));
        }));
        this.updateUserAddress$ = this.actions$.pipe(ofType(UserActions.UPDATE_USER_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector
                .update(payload.userId, payload.addressId, payload.address)
                .pipe(map(function (data) {
                // don't show the message if just setting address as default
                if (payload.address &&
                    Object.keys(payload.address).length === 1 &&
                    payload.address.defaultAddress) {
                    return new UserActions.LoadUserAddresses(payload.userId);
                }
                else {
                    return new UserActions.UpdateUserAddressSuccess(data);
                }
            }), catchError(function (error) {
                return of(new UserActions.UpdateUserAddressFail(makeErrorSerializable(error)));
            }));
        }));
        this.deleteUserAddress$ = this.actions$.pipe(ofType(UserActions.DELETE_USER_ADDRESS), map(function (action) { return action.payload; }), mergeMap(function (payload) {
            return _this.userAddressConnector
                .delete(payload.userId, payload.addressId)
                .pipe(map(function (data) {
                return new UserActions.DeleteUserAddressSuccess(data);
            }), catchError(function (error) {
                return of(new UserActions.DeleteUserAddressFail(makeErrorSerializable(error)));
            }));
        }));
        /**
         *  Reload addresses and notify about add success
         */
        this.showGlobalMessageOnAddSuccess$ = this.actions$.pipe(ofType(UserActions.ADD_USER_ADDRESS_SUCCESS), tap(function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressAddSuccess');
        }));
        /**
         *  Reload addresses and notify about update success
         */
        this.showGlobalMessageOnUpdateSuccess$ = this.actions$.pipe(ofType(UserActions.UPDATE_USER_ADDRESS_SUCCESS), tap(function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressUpdateSuccess');
        }));
        /**
         *  Reload addresses and notify about delete success
         */
        this.showGlobalMessageOnDeleteSuccess$ = this.actions$.pipe(ofType(UserActions.DELETE_USER_ADDRESS_SUCCESS), tap(function () {
            _this.loadAddresses();
            _this.showGlobalMessage('addressForm.userAddressDeleteSuccess');
        }));
    }
    /**
     * Show global confirmation message with provided text
     */
    UserAddressesEffects.prototype.showGlobalMessage = function (text) {
        this.messageService.add({ key: text }, GlobalMessageType.MSG_TYPE_CONFIRMATION);
    };
    UserAddressesEffects.prototype.loadAddresses = function () {
        this.userAddressService.loadAddresses();
    };
    UserAddressesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserAddressConnector },
        { type: UserAddressService },
        { type: GlobalMessageService }
    ]; };
    __decorate([
        Effect()
    ], UserAddressesEffects.prototype, "loadUserAddresses$", void 0);
    __decorate([
        Effect()
    ], UserAddressesEffects.prototype, "addUserAddress$", void 0);
    __decorate([
        Effect()
    ], UserAddressesEffects.prototype, "updateUserAddress$", void 0);
    __decorate([
        Effect()
    ], UserAddressesEffects.prototype, "deleteUserAddress$", void 0);
    __decorate([
        Effect({ dispatch: false })
    ], UserAddressesEffects.prototype, "showGlobalMessageOnAddSuccess$", void 0);
    __decorate([
        Effect({ dispatch: false })
    ], UserAddressesEffects.prototype, "showGlobalMessageOnUpdateSuccess$", void 0);
    __decorate([
        Effect({ dispatch: false })
    ], UserAddressesEffects.prototype, "showGlobalMessageOnDeleteSuccess$", void 0);
    UserAddressesEffects = __decorate([
        Injectable()
    ], UserAddressesEffects);
    return UserAddressesEffects;
}());
export { UserAddressesEffects };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy91c2VyLWFkZHJlc3Nlcy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hFLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0sK0JBQStCLENBQUM7QUFFdkMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0saURBQWlELENBQUM7QUFDdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRy9DO0lBc0lFLDhCQUNVLFFBQWlCLEVBQ2pCLG9CQUEwQyxFQUMxQyxrQkFBc0MsRUFDdEMsY0FBb0M7UUFKOUMsaUJBS0k7UUFKTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUN0QyxtQkFBYyxHQUFkLGNBQWMsQ0FBc0I7UUF4STlDLHVCQUFrQixHQUVkLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLEVBQ3ZD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QUFDLDJCQUEyQixDQUFDLEVBQy9DLEdBQUcsQ0FBQztZQUNGLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixLQUFJLENBQUMsaUJBQWlCLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBT0MsQ0FBQztJQUVKOztPQUVHO0lBQ0ssZ0RBQWlCLEdBQXpCLFVBQTBCLElBQVk7UUFDcEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQ3JCLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUNiLGlCQUFpQixDQUFDLHFCQUFxQixDQUN4QyxDQUFDO0lBQ0osQ0FBQztJQUVPLDRDQUFhLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzFDLENBQUM7O2dCQWxCbUIsT0FBTztnQkFDSyxvQkFBb0I7Z0JBQ3RCLGtCQUFrQjtnQkFDdEIsb0JBQW9COztJQXhJOUM7UUFEQyxNQUFNLEVBQUU7b0VBa0JQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7aUVBa0JQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7b0VBK0JQO0lBR0Y7UUFEQyxNQUFNLEVBQUU7b0VBc0JQO0lBTUY7UUFEQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7Z0ZBTzFCO0lBTUY7UUFEQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7bUZBTzFCO0lBTUY7UUFEQyxNQUFNLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUM7bUZBTzFCO0lBcElTLG9CQUFvQjtRQURoQyxVQUFVLEVBQUU7T0FDQSxvQkFBb0IsQ0EwSmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTFKRCxJQTBKQztTQTFKWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgbWVyZ2VNYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9hZGRyZXNzL3VzZXItYWRkcmVzcy5jb25uZWN0b3InO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL3VzZXItYWRkcmVzcy5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyQWRkcmVzc2VzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkVXNlckFkZHJlc3NlcyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX1VTRVJfQUREUkVTU0VTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3IuZ2V0QWxsKHBheWxvYWQpLnBpcGUoXG4gICAgICAgIG1hcCgoYWRkcmVzc2VzOiBBZGRyZXNzW10pID0+IHtcbiAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkxvYWRVc2VyQWRkcmVzc2VzU3VjY2VzcyhhZGRyZXNzZXMpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgb2YoXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFVzZXJBZGRyZXNzZXNGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFkZFVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkFERF9VU0VSX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5BZGRVc2VyQWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAuYWRkKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3MpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZGF0YTogYW55KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLkFkZFVzZXJBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5BZGRVc2VyQWRkcmVzc0ZhaWwobWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKSkpXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHVwZGF0ZVVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxcbiAgICBVc2VyQWN0aW9ucy5Vc2VyQWRkcmVzc2VzQWN0aW9uXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlVQREFURV9VU0VSX0FERFJFU1MpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5VcGRhdGVVc2VyQWRkcmVzcykgPT4gYWN0aW9uLnBheWxvYWQpLFxuICAgIG1lcmdlTWFwKChwYXlsb2FkKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWRkcmVzc0Nvbm5lY3RvclxuICAgICAgICAudXBkYXRlKHBheWxvYWQudXNlcklkLCBwYXlsb2FkLmFkZHJlc3NJZCwgcGF5bG9hZC5hZGRyZXNzKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBtYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIC8vIGRvbid0IHNob3cgdGhlIG1lc3NhZ2UgaWYganVzdCBzZXR0aW5nIGFkZHJlc3MgYXMgZGVmYXVsdFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBwYXlsb2FkLmFkZHJlc3MgJiZcbiAgICAgICAgICAgICAgT2JqZWN0LmtleXMocGF5bG9hZC5hZGRyZXNzKS5sZW5ndGggPT09IDEgJiZcbiAgICAgICAgICAgICAgcGF5bG9hZC5hZGRyZXNzLmRlZmF1bHRBZGRyZXNzXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVXNlckFkZHJlc3NlcyhwYXlsb2FkLnVzZXJJZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbmV3IFVzZXJBY3Rpb25zLlVwZGF0ZVVzZXJBZGRyZXNzU3VjY2VzcyhkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBjYXRjaEVycm9yKChlcnJvcikgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuVXBkYXRlVXNlckFkZHJlc3NGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIEBFZmZlY3QoKVxuICBkZWxldGVVc2VyQWRkcmVzcyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5ERUxFVEVfVVNFUl9BRERSRVNTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuRGVsZXRlVXNlckFkZHJlc3MpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBtZXJnZU1hcCgocGF5bG9hZCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFkZHJlc3NDb25uZWN0b3JcbiAgICAgICAgLmRlbGV0ZShwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5hZGRyZXNzSWQpXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5EZWxldGVVc2VyQWRkcmVzc1N1Y2Nlc3MoZGF0YSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcigoZXJyb3IpID0+XG4gICAgICAgICAgICBvZihcbiAgICAgICAgICAgICAgbmV3IFVzZXJBY3Rpb25zLkRlbGV0ZVVzZXJBZGRyZXNzRmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCBhZGQgc3VjY2Vzc1xuICAgKi9cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBzaG93R2xvYmFsTWVzc2FnZU9uQWRkU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkFERF9VU0VSX0FERFJFU1NfU1VDQ0VTUyksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEFkZHJlc3NlcygpO1xuICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZSgnYWRkcmVzc0Zvcm0udXNlckFkZHJlc3NBZGRTdWNjZXNzJyk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCB1cGRhdGUgc3VjY2Vzc1xuICAgKi9cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBzaG93R2xvYmFsTWVzc2FnZU9uVXBkYXRlU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLlVQREFURV9VU0VSX0FERFJFU1NfU1VDQ0VTUyksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEFkZHJlc3NlcygpO1xuICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZSgnYWRkcmVzc0Zvcm0udXNlckFkZHJlc3NVcGRhdGVTdWNjZXNzJyk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCBkZWxldGUgc3VjY2Vzc1xuICAgKi9cbiAgQEVmZmVjdCh7IGRpc3BhdGNoOiBmYWxzZSB9KVxuICBzaG93R2xvYmFsTWVzc2FnZU9uRGVsZXRlU3VjY2VzcyQgPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkRFTEVURV9VU0VSX0FERFJFU1NfU1VDQ0VTUyksXG4gICAgdGFwKCgpID0+IHtcbiAgICAgIHRoaXMubG9hZEFkZHJlc3NlcygpO1xuICAgICAgdGhpcy5zaG93R2xvYmFsTWVzc2FnZSgnYWRkcmVzc0Zvcm0udXNlckFkZHJlc3NEZWxldGVTdWNjZXNzJyk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckFkZHJlc3NDb25uZWN0b3I6IFVzZXJBZGRyZXNzQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBTaG93IGdsb2JhbCBjb25maXJtYXRpb24gbWVzc2FnZSB3aXRoIHByb3ZpZGVkIHRleHRcbiAgICovXG4gIHByaXZhdGUgc2hvd0dsb2JhbE1lc3NhZ2UodGV4dDogc3RyaW5nKSB7XG4gICAgdGhpcy5tZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7IGtleTogdGV4dCB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfQ09ORklSTUFUSU9OXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEFkZHJlc3NlcygpIHtcbiAgICB0aGlzLnVzZXJBZGRyZXNzU2VydmljZS5sb2FkQWRkcmVzc2VzKCk7XG4gIH1cbn1cbiJdfQ==