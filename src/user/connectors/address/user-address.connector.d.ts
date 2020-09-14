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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserAddressConnector, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hZGRyZXNzLmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJ1c2VyLWFkZHJlc3MuY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7O0FBUUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVc2VyQWRkcmVzc0FkYXB0ZXIgfSBmcm9tICcuL3VzZXItYWRkcmVzcy5hZGFwdGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFkZHJlc3MsIEFkZHJlc3NWYWxpZGF0aW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVc2VyQWRkcmVzc0Nvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJBZGRyZXNzQWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBVc2VyQWRkcmVzc0FkYXB0ZXIpO1xuICAgIGdldEFsbCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgICBhZGQodXNlcklkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICB1cGRhdGUodXNlcklkOiBzdHJpbmcsIGFkZHJlc3NJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgdmVyaWZ5KHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxBZGRyZXNzVmFsaWRhdGlvbj47XG4gICAgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xufVxuIl19