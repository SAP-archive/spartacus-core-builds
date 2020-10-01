import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CheckoutReplenishmentOrderAdapter } from '../../../checkout/index';
import { ReplenishmentOrder, ScheduleReplenishmentForm } from '../../../model/replenishment-order.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCheckoutReplenishmentOrderAdapter implements CheckoutReplenishmentOrderAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    scheduleReplenishmentOrder(cartId: string, scheduleReplenishmentForm: ScheduleReplenishmentForm, termsChecked: boolean, userId: string): Observable<ReplenishmentOrder>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCheckoutReplenishmentOrderAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCheckoutReplenishmentOrderAdapter>;
}

//# sourceMappingURL=occ-checkout-replenishment-order.adapter.d.ts.map