import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
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
    getConsignmentTracking(orderCode: string, consignmentCode: string, userId?: string): Observable<ConsignmentTracking>;
    cancel(userId: string, orderCode: string, cancelRequestInput: CancellationRequestEntryInputList): Observable<{}>;
    createReturnRequest(userId: string, returnRequestInput: ReturnRequestEntryInputList): Observable<ReturnRequest>;
    loadReturnRequestList(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<ReturnRequestList>;
    loadReturnRequestDetail(userId: string, returnRequestCode: string): Observable<ReturnRequest>;
    cancelReturnRequest(userId: string, returnRequestCode: string, returnRequestModification: ReturnRequestModification): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccUserOrderAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccUserOrderAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXVzZXItb3JkZXIuYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJvY2MtdXNlci1vcmRlci5hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbnNpZ25tZW50VHJhY2tpbmcgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zaWdubWVudC10cmFja2luZy5tb2RlbCc7XG5pbXBvcnQgeyBDYW5jZWxsYXRpb25SZXF1ZXN0RW50cnlJbnB1dExpc3QsIE9yZGVyLCBPcmRlckhpc3RvcnlMaXN0LCBSZXR1cm5SZXF1ZXN0LCBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QsIFJldHVyblJlcXVlc3RMaXN0LCBSZXR1cm5SZXF1ZXN0TW9kaWZpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgVXNlck9yZGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL3VzZXIvY29ubmVjdG9ycy9vcmRlci91c2VyLW9yZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NVc2VyT3JkZXJBZGFwdGVyIGltcGxlbWVudHMgVXNlck9yZGVyQWRhcHRlciB7XG4gICAgcHJvdGVjdGVkIGh0dHA6IEh0dHBDbGllbnQ7XG4gICAgcHJvdGVjdGVkIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50czogT2NjRW5kcG9pbnRzU2VydmljZSwgY29udmVydGVyOiBDb252ZXJ0ZXJTZXJ2aWNlLCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldE9yZGVyRW5kcG9pbnQodXNlcklkOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgbG9hZCh1c2VySWQ6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE9yZGVyPjtcbiAgICBsb2FkSGlzdG9yeSh1c2VySWQ6IHN0cmluZywgcGFnZVNpemU/OiBudW1iZXIsIGN1cnJlbnRQYWdlPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nKTogT2JzZXJ2YWJsZTxPcmRlckhpc3RvcnlMaXN0PjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAgICovXG4gICAgcHJpdmF0ZSBsZWdhY3lMb2FkO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICAgKi9cbiAgICBwcml2YXRlIGxlZ2FjeUxvYWRIaXN0b3J5O1xuICAgIGdldENvbnNpZ25tZW50VHJhY2tpbmcob3JkZXJDb2RlOiBzdHJpbmcsIGNvbnNpZ25tZW50Q29kZTogc3RyaW5nLCB1c2VySWQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnNpZ25tZW50VHJhY2tpbmc+O1xuICAgIGNhbmNlbCh1c2VySWQ6IHN0cmluZywgb3JkZXJDb2RlOiBzdHJpbmcsIGNhbmNlbFJlcXVlc3RJbnB1dDogQ2FuY2VsbGF0aW9uUmVxdWVzdEVudHJ5SW5wdXRMaXN0KTogT2JzZXJ2YWJsZTx7fT47XG4gICAgY3JlYXRlUmV0dXJuUmVxdWVzdCh1c2VySWQ6IHN0cmluZywgcmV0dXJuUmVxdWVzdElucHV0OiBSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dExpc3QpOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+O1xuICAgIGxvYWRSZXR1cm5SZXF1ZXN0TGlzdCh1c2VySWQ6IHN0cmluZywgcGFnZVNpemU/OiBudW1iZXIsIGN1cnJlbnRQYWdlPzogbnVtYmVyLCBzb3J0Pzogc3RyaW5nKTogT2JzZXJ2YWJsZTxSZXR1cm5SZXF1ZXN0TGlzdD47XG4gICAgbG9hZFJldHVyblJlcXVlc3REZXRhaWwodXNlcklkOiBzdHJpbmcsIHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJldHVyblJlcXVlc3Q+O1xuICAgIGNhbmNlbFJldHVyblJlcXVlc3QodXNlcklkOiBzdHJpbmcsIHJldHVyblJlcXVlc3RDb2RlOiBzdHJpbmcsIHJldHVyblJlcXVlc3RNb2RpZmljYXRpb246IFJldHVyblJlcXVlc3RNb2RpZmljYXRpb24pOiBPYnNlcnZhYmxlPHt9Pjtcbn1cbiJdfQ==