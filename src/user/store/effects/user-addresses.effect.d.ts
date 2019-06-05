import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { GlobalMessageService } from '../../../global-message/index';
import { UserAddressConnector } from '../../connectors/address/user-address.connector';
import { UserAddressService } from '../../facade/user-address.service';
import * as fromUserAddressesAction from '../actions/user-addresses.action';
export declare class UserAddressesEffects {
    private actions$;
    private userAddressConnector;
    private userAddressService;
    private messageService;
    loadUserAddresses$: Observable<fromUserAddressesAction.UserAddressesAction>;
    addUserAddress$: Observable<fromUserAddressesAction.UserAddressesAction>;
    updateUserAddress$: Observable<fromUserAddressesAction.UserAddressesAction>;
    deleteUserAddress$: Observable<fromUserAddressesAction.UserAddressesAction>;
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
}
