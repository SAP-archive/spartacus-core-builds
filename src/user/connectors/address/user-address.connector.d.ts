import { UserAddressAdapter } from './user-address.adapter';
import { Observable } from 'rxjs';
import { Address, AddressValidation } from '../../../model/address.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserAddressConnector {
    protected adapter: UserAddressAdapter;
    constructor(adapter: UserAddressAdapter);
    getAll(userId: string): Observable<Address[]>;
    add(userId: string, address: Address): Observable<{}>;
    update(userId: string, addressId: string, address: Address): Observable<{}>;
    verify(userId: string, address: Address): Observable<AddressValidation>;
    delete(userId: string, addressId: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserAddressConnector>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzLmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJ1c2VyLWFkZHJlc3MuY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7O0FBUUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVXNlckFkZHJlc3NBZGFwdGVyIH0gZnJvbSAnLi91c2VyLWFkZHJlc3MuYWRhcHRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBZGRyZXNzLCBBZGRyZXNzVmFsaWRhdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgVXNlckFkZHJlc3NDb25uZWN0b3Ige1xuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBVc2VyQWRkcmVzc0FkYXB0ZXI7XG4gICAgY29uc3RydWN0b3IoYWRhcHRlcjogVXNlckFkZHJlc3NBZGFwdGVyKTtcbiAgICBnZXRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFkZHJlc3NbXT47XG4gICAgYWRkKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgdXBkYXRlKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzSWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8e30+O1xuICAgIHZlcmlmeSh1c2VySWQ6IHN0cmluZywgYWRkcmVzczogQWRkcmVzcyk6IE9ic2VydmFibGU8QWRkcmVzc1ZhbGlkYXRpb24+O1xuICAgIGRlbGV0ZSh1c2VySWQ6IHN0cmluZywgYWRkcmVzc0lkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9Pjtcbn1cbiJdfQ==