import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from '../../../model/cart.model';
import { CheckoutCostCenterAdapter } from '../../../checkout/connectors/cost-center/checkout-cost-center.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export declare class OccCheckoutCostCenterAdapter implements CheckoutCostCenterAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    setCostCenter(userId: string, cartId: string, costCenterId: string): Observable<Cart>;
    protected getCartEndpoint(userId: string): string;
}
