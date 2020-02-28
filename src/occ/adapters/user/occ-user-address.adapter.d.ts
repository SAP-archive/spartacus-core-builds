import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Address, AddressValidation } from '../../../model/address.model';
import { UserAddressAdapter } from '../../../user/connectors/address/user-address.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccUserAddressAdapter implements UserAddressAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    loadAll(userId: string): Observable<Address[]>;
    add(userId: string, address: Address): Observable<{}>;
    update(userId: string, addressId: string, address: Address): Observable<{}>;
    verify(userId: string, address: Address): Observable<AddressValidation>;
    delete(userId: string, addressId: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccUserAddressAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccUserAddressAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItYWRkcmVzcy5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy11c2VyLWFkZHJlc3MuYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7OztBQVVBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBZGRyZXNzLCBBZGRyZXNzVmFsaWRhdGlvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgVXNlckFkZHJlc3NBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vdXNlci9jb25uZWN0b3JzL2FkZHJlc3MvdXNlci1hZGRyZXNzLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NVc2VyQWRkcmVzc0FkYXB0ZXIgaW1wbGVtZW50cyBVc2VyQWRkcmVzc0FkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSk7XG4gICAgbG9hZEFsbCh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QWRkcmVzc1tdPjtcbiAgICBhZGQodXNlcklkOiBzdHJpbmcsIGFkZHJlc3M6IEFkZHJlc3MpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICB1cGRhdGUodXNlcklkOiBzdHJpbmcsIGFkZHJlc3NJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgdmVyaWZ5KHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzOiBBZGRyZXNzKTogT2JzZXJ2YWJsZTxBZGRyZXNzVmFsaWRhdGlvbj47XG4gICAgZGVsZXRlKHVzZXJJZDogc3RyaW5nLCBhZGRyZXNzSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xufVxuIl19