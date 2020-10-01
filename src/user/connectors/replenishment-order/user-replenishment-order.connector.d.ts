import { Observable } from 'rxjs';
import { OrderHistoryList, ReplenishmentOrder, ReplenishmentOrderList } from '../../../model/index';
import { UserReplenishmentOrderAdapter } from './user-replenishment-order.adapter';
import * as ɵngcc0 from '@angular/core';
export declare class UserReplenishmentOrderConnector {
    protected adapter: UserReplenishmentOrderAdapter;
    constructor(adapter: UserReplenishmentOrderAdapter);
    load(userId: string, replenishmentOrderCode: string): Observable<ReplenishmentOrder>;
    loadReplenishmentDetailsHistory(userId: string, replenishmentOrderCode: string, pageSize?: number, currentPage?: number, sort?: string): Observable<OrderHistoryList>;
    cancelReplenishmentOrder(userId: string, replenishmentOrderCode: string): Observable<ReplenishmentOrder>;
    loadHistory(userId: string, pageSize?: number, currentPage?: number, sort?: string): Observable<ReplenishmentOrderList>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserReplenishmentOrderConnector, never>;
}

//# sourceMappingURL=user-replenishment-order.connector.d.ts.map