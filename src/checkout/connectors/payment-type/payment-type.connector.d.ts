import { Observable } from 'rxjs';
import { PaymentTypeAdapter } from './payment-type.adapter';
import { PaymentType } from '../../../model/cart.model';
import * as ɵngcc0 from '@angular/core';
export declare class PaymentTypeConnector {
    protected adapter: PaymentTypeAdapter;
    constructor(adapter: PaymentTypeAdapter);
    getPaymentTypes(): Observable<PaymentType[]>;
    setPaymentType(userId: string, cartId: string, typeCode: string, poNumber?: string): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PaymentTypeConnector, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC10eXBlLmNvbm5lY3Rvci5kLnRzIiwic291cmNlcyI6WyJwYXltZW50LXR5cGUuY29ubmVjdG9yLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7O0FBS0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBQYXltZW50VHlwZUFkYXB0ZXIgfSBmcm9tICcuL3BheW1lbnQtdHlwZS5hZGFwdGVyJztcbmltcG9ydCB7IFBheW1lbnRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQYXltZW50VHlwZUNvbm5lY3RvciB7XG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IFBheW1lbnRUeXBlQWRhcHRlcjtcbiAgICBjb25zdHJ1Y3RvcihhZGFwdGVyOiBQYXltZW50VHlwZUFkYXB0ZXIpO1xuICAgIGdldFBheW1lbnRUeXBlcygpOiBPYnNlcnZhYmxlPFBheW1lbnRUeXBlW10+O1xuICAgIHNldFBheW1lbnRUeXBlKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgdHlwZUNvZGU6IHN0cmluZywgcG9OdW1iZXI/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG59XG4iXX0=