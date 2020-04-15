import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartAdapter } from '../../../cart/connectors/cart/cart.adapter';
import { Cart } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCartAdapter implements CartAdapter {
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    protected converterService: ConverterService;
    constructor(http: HttpClient, occEndpointsService: OccEndpointsService, converterService: ConverterService);
    loadAll(userId: string): Observable<Cart[]>;
    load(userId: string, cartId: string): Observable<Cart>;
    create(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<Cart>;
    delete(userId: string, cartId: string): Observable<{}>;
    addEmail(userId: string, cartId: string, email: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCartAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCartAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJvY2MtY2FydC5hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NDYXJ0QWRhcHRlciBpbXBsZW1lbnRzIENhcnRBZGFwdGVyIHtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlLCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0W10+O1xuICAgIGxvYWQodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBjcmVhdGUodXNlcklkOiBzdHJpbmcsIG9sZENhcnRJZD86IHN0cmluZywgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBkZWxldGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgYWRkRW1haWwodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBlbWFpbDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG59XG4iXX0=