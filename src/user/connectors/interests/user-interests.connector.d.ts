import { UserInterestsAdapter } from './user-interests.adapter';
import { Observable } from 'rxjs';
import { ProductInterestSearchResult, ProductInterestEntryRelation, NotificationType } from '../../../model/product-interest.model';
import * as ɵngcc0 from '@angular/core';
export declare class UserInterestsConnector {
    protected adapter: UserInterestsAdapter;
    constructor(adapter: UserInterestsAdapter);
    getInterests(userId: string, pageSize?: number, currentPage?: number, sort?: string, productCode?: string, notificationType?: NotificationType): Observable<ProductInterestSearchResult>;
    removeInterest(userId: string, item: ProductInterestEntryRelation): Observable<any[]>;
    addInterest(userId: string, productCode: string, notificationType: NotificationType): Observable<any>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UserInterestsConnector, never>;
}

//# sourceMappingURL=user-interests.connector.d.ts.map