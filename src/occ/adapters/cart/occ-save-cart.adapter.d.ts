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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccSaveCartAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccSaveCartAdapter>;
}

//# sourceMappingURL=occ-save-cart.adapter.d.ts.map