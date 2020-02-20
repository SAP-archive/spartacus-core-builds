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

//# sourceMappingURL=occ-user-address.adapter.d.ts.map