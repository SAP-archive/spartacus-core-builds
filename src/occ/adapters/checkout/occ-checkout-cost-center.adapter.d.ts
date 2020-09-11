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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNoZWNrb3V0LWNvc3QtY2VudGVyLmFkYXB0ZXIuZC50cyIsInNvdXJjZXMiOlsib2NjLWNoZWNrb3V0LWNvc3QtY2VudGVyLmFkYXB0ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDaGVja291dENvc3RDZW50ZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2hlY2tvdXQvY29ubmVjdG9ycy9jb3N0LWNlbnRlci9jaGVja291dC1jb3N0LWNlbnRlci5hZGFwdGVyJztcbmltcG9ydCB7IENhcnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjQ2hlY2tvdXRDb3N0Q2VudGVyQWRhcHRlciBpbXBsZW1lbnRzIENoZWNrb3V0Q29zdENlbnRlckFkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBvY2NFbmRwb2ludHM6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbnZlcnRlcjogQ29udmVydGVyU2VydmljZSk7XG4gICAgc2V0Q29zdENlbnRlcih1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGNvc3RDZW50ZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBwcm90ZWN0ZWQgZ2V0Q2FydEVuZHBvaW50KHVzZXJJZDogc3RyaW5nKTogc3RyaW5nO1xufVxuIl19