import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartVoucherAdapter } from '../../../cart/connectors/voucher/cart-voucher.adapter';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCartVoucherAdapter implements CartVoucherAdapter {
    protected http: HttpClient;
    protected occEndpoints: OccEndpointsService;
    protected converter: ConverterService;
    constructor(http: HttpClient, occEndpoints: OccEndpointsService, converter: ConverterService);
    protected getCartVoucherEndpoint(userId: string, cartId: any): string;
    protected getHeaders(userId: string): HttpHeaders;
    add(userId: string, cartId: string, voucherId: string): Observable<{}>;
    remove(userId: string, cartId: string, voucherId: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCartVoucherAdapter, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCartVoucherAdapter>;
}

//# sourceMappingURL=occ-cart-voucher.adapter.d.ts.map