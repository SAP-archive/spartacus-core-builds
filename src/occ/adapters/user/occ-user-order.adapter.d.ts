import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { ConsignmentTracking } from '../../../model/consignment-tracking.model';
import { Order, OrderHistoryList, ReturnRequest, ReturnRequestEntryInputList, ReturnRequestList, CancellationRequestEntryInputList, ReturnRequestModification } from '../../../model/order.model';
import { UserOrderAdapter } from '../../../user/connectors/order/user-order.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
export declare class OccUserOrderAdapter implements UserOrderAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    protected featureConfigService?: FeatureConfigService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService, featureConfigService?: FeatureConfigService);
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    protected getOrderEndpoint(userId: string): string;
    load(userId: string, orderCode: string): Observable<Order>;
    loadHistory(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    private legacyLoad;
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    private legacyLoadHistory;
    getConsignmentTracking(orderCode: string, consignmentCode: string): Observable<ConsignmentTracking>;
    cancel(userId: string, orderCode: string, cancelRequestInput: CancellationRequestEntryInputList): Observable<{}>;
    createReturnRequest(userId: string, returnRequestInput: ReturnRequestEntryInputList): Observable<ReturnRequest>;
    loadReturnRequestList(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<ReturnRequestList>;
    loadReturnRequestDetail(userId: string, returnRequestCode: string): Observable<ReturnRequest>;
    cancelReturnRequest(userId: string, returnRequestCode: string, returnRequestModification: ReturnRequestModification): Observable<{}>;
}
