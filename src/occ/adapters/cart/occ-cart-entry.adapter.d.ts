import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartEntryAdapter } from '../../../cart/connectors/entry/cart-entry.adapter';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { CartModification } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCartEntryAdapter implements CartEntryAdapter {
    protected http: HttpClient;
    protected occEndpointsService: OccEndpointsService;
    protected converterService: ConverterService;
    protected featureConfigService?: FeatureConfigService;
    constructor(http: HttpClient, occEndpointsService: OccEndpointsService, converterService: ConverterService, featureConfigService?: FeatureConfigService);
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    protected getCartEndpoint(userId: string): string;
    add(userId: string, cartId: string, productCode: string, quantity?: number): Observable<CartModification>;
    update(userId: string, cartId: string, entryNumber: string, qty: number, pickupStore?: string): Observable<CartModification>;
    remove(userId: string, cartId: string, entryNumber: string): Observable<any>;
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    private legacyAdd;
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    private legacyUpdate;
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    private legacyRemove;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCartEntryAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCartEntryAdapter>;
}

//# sourceMappingURL=occ-cart-entry.adapter.d.ts.map