import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SaveCartAdapter } from '../../../cart/connectors/save-cart/save-cart.adapter';
import { SaveCartResult } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccSaveCartAdapter implements SaveCartAdapter {
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    protected converterService: ConverterService;
    constructor(http: HttpClient, occEndpointsService: OccEndpointsService, converterService: ConverterService);
    saveCart(userId: string, cartId: string, saveCartName?: string, saveCartDescription?: string): Observable<SaveCartResult>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccSaveCartAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccSaveCartAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLXNhdmUtY2FydC5hZGFwdGVyLmQudHMiLCJzb3VyY2VzIjpbIm9jYy1zYXZlLWNhcnQuYWRhcHRlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7O0FBTUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNhdmVDYXJ0QWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL2NhcnQvY29ubmVjdG9ycy9zYXZlLWNhcnQvc2F2ZS1jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgU2F2ZUNhcnRSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjU2F2ZUNhcnRBZGFwdGVyIGltcGxlbWVudHMgU2F2ZUNhcnRBZGFwdGVyIHtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlLCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlKTtcbiAgICBzYXZlQ2FydCh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIHNhdmVDYXJ0TmFtZT86IHN0cmluZywgc2F2ZUNhcnREZXNjcmlwdGlvbj86IHN0cmluZyk6IE9ic2VydmFibGU8U2F2ZUNhcnRSZXN1bHQ+O1xufVxuIl19