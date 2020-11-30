import { Observable } from 'rxjs';
import { ConsignmentTracking } from '../../../model/consignment-tracking.model';
import { CancellationRequestEntryInputList, Order, OrderHistoryList, ReturnRequest, ReturnRequestEntryInputList, ReturnRequestList, ReturnRequestModification } from '../../../model/order.model';
import { UserOrderAdapter } from './user-order.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class UserOrderConnector {
    protected adapter: UserOrderAdapter;
    constructor(adapter: UserOrderAdapter);
    get(userId: string, orderCode: string): Observable<Order>;
    getHistory(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
    getConsignmentTracking(orderCode: string, consignmentCode: string, userId?: string): Observable<ConsignmentTracking>;
    cancel(userId: string, orderCode: string, cancelRequestInput: CancellationRequestEntryInputList): Observable<{}>;
    return(userId: string, returnRequestInput: ReturnRequestEntryInputList): Observable<ReturnRequest>;
    getReturnRequestDetail(userId: string, returnRequestCode: string): Observable<ReturnRequest>;
    getReturnRequestList(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<ReturnRequestList>;
    cancelReturnRequest(userId: string, returnRequestCode: string, returnRequestModification: ReturnRequestModification): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserOrderConnector, never>;
}

//# sourceMappingURL=user-order.connector.d.ts.map