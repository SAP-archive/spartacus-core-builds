import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageService } from '../../../global-message/index';
import { UserAddressConnector } from '../../connectors/address/user-address.connector';
import { UserAddressService } from '../../facade/user-address.service';
import { UserActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class UserAddressesEffects {
    private actions$;
    private userAddressConnector;
    private userAddressService;
    private messageService;
    loadUserAddresses$: Observable<UserActions.UserAddressesAction>;
    addUserAddress$: Observable<UserActions.UserAddressesAction>;
    updateUserAddress$: Observable<UserActions.UserAddressesAction>;
    deleteUserAddress$: Observable<UserActions.UserAddressesAction>;
    /**
     *  Reload addresses and notify about add success
     */
    showGlobalMessageOnAddSuccess$: Observable<never>;
    /**
     *  Reload addresses and notify about update success
     */
    showGlobalMessageOnUpdateSuccess$: Observable<never>;
    /**
     *  Reload addresses and notify about delete success
     */
    showGlobalMessageOnDeleteSuccess$: Observable<never>;
    constructor(actions$: Actions, userAddressConnector: UserAddressConnector, userAddressService: UserAddressService, messageService: GlobalMessageService);
    /**
     * Show global confirmation message with provided text
     */
    private showGlobalMessage;
    private loadAddresses;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserAddressesEffects>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<UserAddressesEffects>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbInVzZXItYWRkcmVzc2VzLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZ2xvYmFsLW1lc3NhZ2UvaW5kZXgnO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2FkZHJlc3MvdXNlci1hZGRyZXNzLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBVc2VyQWRkcmVzc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9mYWNhZGUvdXNlci1hZGRyZXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFVzZXJBZGRyZXNzZXNFZmZlY3RzIHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgdXNlckFkZHJlc3NDb25uZWN0b3I7XG4gICAgcHJpdmF0ZSB1c2VyQWRkcmVzc1NlcnZpY2U7XG4gICAgcHJpdmF0ZSBtZXNzYWdlU2VydmljZTtcbiAgICBsb2FkVXNlckFkZHJlc3NlcyQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvbj47XG4gICAgYWRkVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLlVzZXJBZGRyZXNzZXNBY3Rpb24+O1xuICAgIHVwZGF0ZVVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5Vc2VyQWRkcmVzc2VzQWN0aW9uPjtcbiAgICBkZWxldGVVc2VyQWRkcmVzcyQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvbj47XG4gICAgLyoqXG4gICAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCBhZGQgc3VjY2Vzc1xuICAgICAqL1xuICAgIHNob3dHbG9iYWxNZXNzYWdlT25BZGRTdWNjZXNzJDogT2JzZXJ2YWJsZTxuZXZlcj47XG4gICAgLyoqXG4gICAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCB1cGRhdGUgc3VjY2Vzc1xuICAgICAqL1xuICAgIHNob3dHbG9iYWxNZXNzYWdlT25VcGRhdGVTdWNjZXNzJDogT2JzZXJ2YWJsZTxuZXZlcj47XG4gICAgLyoqXG4gICAgICogIFJlbG9hZCBhZGRyZXNzZXMgYW5kIG5vdGlmeSBhYm91dCBkZWxldGUgc3VjY2Vzc1xuICAgICAqL1xuICAgIHNob3dHbG9iYWxNZXNzYWdlT25EZWxldGVTdWNjZXNzJDogT2JzZXJ2YWJsZTxuZXZlcj47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIHVzZXJBZGRyZXNzQ29ubmVjdG9yOiBVc2VyQWRkcmVzc0Nvbm5lY3RvciwgdXNlckFkZHJlc3NTZXJ2aWNlOiBVc2VyQWRkcmVzc1NlcnZpY2UsIG1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogU2hvdyBnbG9iYWwgY29uZmlybWF0aW9uIG1lc3NhZ2Ugd2l0aCBwcm92aWRlZCB0ZXh0XG4gICAgICovXG4gICAgcHJpdmF0ZSBzaG93R2xvYmFsTWVzc2FnZTtcbiAgICBwcml2YXRlIGxvYWRBZGRyZXNzZXM7XG59XG4iXX0=