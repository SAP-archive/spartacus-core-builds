import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartAdapter } from '../../../cart/connectors/cart/cart.adapter';
import { Cart } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export declare class OccCartAdapter implements CartAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    protected getCartEndpoint(userId: string): string;
    loadAll(userId: string): Observable<Cart[]>;
    load(userId: string, cartId: string): Observable<Cart>;
    create(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<Cart>;
}
