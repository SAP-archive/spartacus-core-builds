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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzZXMuZWZmZWN0LmQudHMiLCJzb3VyY2VzIjpbInVzZXItYWRkcmVzc2VzLmVmZmVjdC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgR2xvYmFsTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9nbG9iYWwtbWVzc2FnZS9pbmRleCc7XG5pbXBvcnQgeyBVc2VyQWRkcmVzc0Nvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvYWRkcmVzcy91c2VyLWFkZHJlc3MuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBZGRyZXNzU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS91c2VyLWFkZHJlc3Muc2VydmljZSc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlckFkZHJlc3Nlc0VmZmVjdHMge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSB1c2VyQWRkcmVzc0Nvbm5lY3RvcjtcbiAgICBwcml2YXRlIHVzZXJBZGRyZXNzU2VydmljZTtcbiAgICBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlO1xuICAgIGxvYWRVc2VyQWRkcmVzc2VzJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5Vc2VyQWRkcmVzc2VzQWN0aW9uPjtcbiAgICBhZGRVc2VyQWRkcmVzcyQ6IE9ic2VydmFibGU8VXNlckFjdGlvbnMuVXNlckFkZHJlc3Nlc0FjdGlvbj47XG4gICAgdXBkYXRlVXNlckFkZHJlc3MkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLlVzZXJBZGRyZXNzZXNBY3Rpb24+O1xuICAgIGRlbGV0ZVVzZXJBZGRyZXNzJDogT2JzZXJ2YWJsZTxVc2VyQWN0aW9ucy5Vc2VyQWRkcmVzc2VzQWN0aW9uPjtcbiAgICAvKipcbiAgICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IGFkZCBzdWNjZXNzXG4gICAgICovXG4gICAgc2hvd0dsb2JhbE1lc3NhZ2VPbkFkZFN1Y2Nlc3MkOiBPYnNlcnZhYmxlPG5ldmVyPjtcbiAgICAvKipcbiAgICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IHVwZGF0ZSBzdWNjZXNzXG4gICAgICovXG4gICAgc2hvd0dsb2JhbE1lc3NhZ2VPblVwZGF0ZVN1Y2Nlc3MkOiBPYnNlcnZhYmxlPG5ldmVyPjtcbiAgICAvKipcbiAgICAgKiAgUmVsb2FkIGFkZHJlc3NlcyBhbmQgbm90aWZ5IGFib3V0IGRlbGV0ZSBzdWNjZXNzXG4gICAgICovXG4gICAgc2hvd0dsb2JhbE1lc3NhZ2VPbkRlbGV0ZVN1Y2Nlc3MkOiBPYnNlcnZhYmxlPG5ldmVyPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgdXNlckFkZHJlc3NDb25uZWN0b3I6IFVzZXJBZGRyZXNzQ29ubmVjdG9yLCB1c2VyQWRkcmVzc1NlcnZpY2U6IFVzZXJBZGRyZXNzU2VydmljZSwgbWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBTaG93IGdsb2JhbCBjb25maXJtYXRpb24gbWVzc2FnZSB3aXRoIHByb3ZpZGVkIHRleHRcbiAgICAgKi9cbiAgICBwcml2YXRlIHNob3dHbG9iYWxNZXNzYWdlO1xuICAgIHByaXZhdGUgbG9hZEFkZHJlc3Nlcztcbn1cbiJdfQ==