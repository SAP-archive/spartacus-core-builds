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

//# sourceMappingURL=user-addresses.effect.d.ts.map