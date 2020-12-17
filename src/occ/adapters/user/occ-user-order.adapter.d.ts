import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConsignmentTracking } from '../../../model/consignment-tracking.model';
import { CancellationRequestEntryInputList, Order, OrderHistoryList, ReturnRequest, ReturnRequestEntryInputList, ReturnRequestList, ReturnRequestModification } from '../../../model/order.model';
import { UserOrderAdapter } from '../../../user/connectors/order/user-order.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccUserOrderAdapter implements UserOrderAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load(userId: string, orderCode: string): Observable<Order>;
    loadHistory(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
    getConsignmentTracking(orderCode: string, consignmentCode: string, userId?: string): Observable<ConsignmentTracking>;
    cancel(userId: string, orderCode: string, cancelRequestInput: CancellationRequestEntryInputList): Observable<{}>;
    createReturnRequest(userId: string, returnRequestInput: ReturnRequestEntryInputList): Observable<ReturnRequest>;
    loadReturnRequestList(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<ReturnRequestList>;
    loadReturnRequestDetail(userId: string, returnRequestCode: string): Observable<ReturnRequest>;
    cancelReturnRequest(userId: string, returnRequestCode: string, returnRequestModification: ReturnRequestModification): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccUserOrderAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccUserOrderAdapter>;
}

//# sourceMappingURL=occ-user-order.adapter.d.ts.map