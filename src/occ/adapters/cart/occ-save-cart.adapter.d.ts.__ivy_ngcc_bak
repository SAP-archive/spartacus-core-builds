import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaveCartAdapter } from '../../../cart/connectors/save-cart/save-cart.adapter';
import { SaveCartResult } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export declare class OccSaveCartAdapter implements SaveCartAdapter {
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    protected converterService: ConverterService;
    constructor(http: HttpClient, occEndpointsService: OccEndpointsService, converterService: ConverterService);
    saveCart(userId: string, cartId: string, saveCartName?: string, saveCartDescription?: string): Observable<SaveCartResult>;
}
