import { ReplenishmentOrderList } from '../../../model/replenishment-order.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderHistoryList, ReplenishmentOrder } from '../../../model/index';
import { UserReplenishmentOrderAdapter } from '../../../user/connectors/replenishment-order/user-replenishment-order.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccUserReplenishmentOrderAdapter implements UserReplenishmentOrderAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    load(userId: string, replenishmentOrderCode: string): Observable<ReplenishmentOrder>;
    loadReplenishmentDetailsHistory(userId: string, replenishmentOrderCode: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
    cancelReplenishmentOrder(userId: string, replenishmentOrderCode: string): Observable<ReplenishmentOrder>;
    loadHistory(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<ReplenishmentOrderList>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccUserReplenishmentOrderAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccUserReplenishmentOrderAdapter>;
}

//# sourceMappingURL=occ-user-replenishment-order.adapter.d.ts.map