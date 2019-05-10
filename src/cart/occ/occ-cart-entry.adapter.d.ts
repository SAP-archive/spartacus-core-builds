import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { CartEntryAdapter } from '../connectors/entry/cart-entry.adapter';
import { ConverterService } from '../../util/converter.service';
import { CartModification } from '../../model/cart.model';
export declare class OccCartEntryAdapter implements CartEntryAdapter {
    protected http: HttpClient;
    private occEndpoints;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    protected getCartEndpoint(userId: string): string;
    add(userId: string, cartId: string, productCode: string, quantity?: number): Observable<CartModification>;
    update(userId: string, cartId: string, entryNumber: string, qty: number, pickupStore?: string): Observable<CartModification>;
    remove(userId: string, cartId: string, entryNumber: string): Observable<any>;
}
