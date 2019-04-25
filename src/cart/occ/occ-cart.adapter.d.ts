import { CartAdapter } from '../connectors/cart/cart.adapter';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OccEndpointsService } from '../../occ/services/occ-endpoints.service';
import { ConverterService } from '../../util/converter.service';
import { UICart } from '../model/cart';
export declare class OccCartAdapter implements CartAdapter {
    protected http: HttpClient;
    private occEndpoints;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    protected getCartEndpoint(userId: string): string;
    loadAll(userId: string, details?: boolean): Observable<UICart[]>;
    load(userId: string, cartId: string, details?: boolean): Observable<UICart>;
    create(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<UICart>;
}
