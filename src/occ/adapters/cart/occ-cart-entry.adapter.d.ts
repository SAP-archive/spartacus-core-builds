import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartEntryAdapter } from '../../../cart/connectors/entry/cart-entry.adapter';
import { CartModification } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCartEntryAdapter implements CartEntryAdapter {
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    protected converterService: ConverterService;
    constructor(http: HttpClient, occEndpointsService: OccEndpointsService, converterService: ConverterService);
    add(userId: string, cartId: string, productCode: string, quantity?: number): Observable<CartModification>;
    update(userId: string, cartId: string, entryNumber: string, qty: number, pickupStore?: string): Observable<CartModification>;
    remove(userId: string, cartId: string, entryNumber: string): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCartEntryAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCartEntryAdapter>;
}

//# sourceMappingURL=occ-cart-entry.adapter.d.ts.map