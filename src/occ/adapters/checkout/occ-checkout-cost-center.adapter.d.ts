import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckoutCostCenterAdapter } from '../../../checkout/connectors/cost-center/checkout-cost-center.adapter';
import { Cart } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCheckoutCostCenterAdapter implements CheckoutCostCenterAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    setCostCenter(userId: string, cartId: string, costCenterId: string): Observable<Cart>;
    protected getCartEndpoint(userId: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCheckoutCostCenterAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCheckoutCostCenterAdapter>;
}

//# sourceMappingURL=occ-checkout-cost-center.adapter.d.ts.map