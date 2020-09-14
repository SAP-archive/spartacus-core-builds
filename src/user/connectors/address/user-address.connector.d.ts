import { UserAddressAdapter } from './user-address.adapter';
import { Observable } from 'rxjs';
import { Address, AddressValidation } from '../../../model/address.model';
export declare class UserAddressConnector {
    protected adapter: UserAddressAdapter;
    constructor(adapter: UserAddressAdapter);
    getAll(userId: string): Observable<Address[]>;
    add(userId: string, address: Address): Observable<{}>;
    update(userId: string, addressId: string, address: Address): Observable<{}>;
    verify(userId: string, address: Address): Observable<AddressValidation>;
    delete(userId: string, addressId: string): Observable<{}>;
}
