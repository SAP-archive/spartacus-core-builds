import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CartAdapter } from '../../../cart/connectors/cart/cart.adapter';
import { FeatureConfigService } from '../../../features-config/services/feature-config.service';
import { Cart } from '../../../model/cart.model';
import { ConverterService } from '../../../util/converter.service';
import { OccEndpointsService } from '../../services/occ-endpoints.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccCartAdapter implements CartAdapter {
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
    loadAll(userId: string): Observable<Cart[]>;
    load(userId: string, cartId: string): Observable<Cart>;
    create(userId: string, oldCartId?: string, toMergeCartGuid?: string): Observable<Cart>;
    delete(userId: string, cartId: string): Observable<{}>;
    /**
     * @deprecated Since 1.1
     * Use configurable endpoints.
     * Remove issue: #4125
     */
    private legacyLoadAll;
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
    private legacyCreate;
    addEmail(userId: string, cartId: string, email: string): Observable<{}>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccCartAdapter>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OccCartAdapter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJvY2MtY2FydC5hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENhcnRBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL2NhcnQvY2FydC5hZGFwdGVyJztcbmltcG9ydCB7IEZlYXR1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vZmVhdHVyZXMtY29uZmlnL3NlcnZpY2VzL2ZlYXR1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FydCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ29udmVydGVyU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2NjRW5kcG9pbnRzU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29jYy1lbmRwb2ludHMuc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPY2NDYXJ0QWRhcHRlciBpbXBsZW1lbnRzIENhcnRBZGFwdGVyIHtcbiAgICBwcm90ZWN0ZWQgaHR0cDogSHR0cENsaWVudDtcbiAgICBwcm90ZWN0ZWQgb2NjRW5kcG9pbnRzU2VydmljZTogT2NjRW5kcG9pbnRzU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY29udmVydGVyU2VydmljZTogQ29udmVydGVyU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgZmVhdHVyZUNvbmZpZ1NlcnZpY2U/OiBGZWF0dXJlQ29uZmlnU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihodHRwOiBIdHRwQ2xpZW50LCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlLCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlLCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldENhcnRFbmRwb2ludCh1c2VySWQ6IHN0cmluZyk6IHN0cmluZztcbiAgICBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0W10+O1xuICAgIGxvYWQodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBjcmVhdGUodXNlcklkOiBzdHJpbmcsIG9sZENhcnRJZD86IHN0cmluZywgdG9NZXJnZUNhcnRHdWlkPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBkZWxldGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgICAqL1xuICAgIHByaXZhdGUgbGVnYWN5TG9hZEFsbDtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAgICovXG4gICAgcHJpdmF0ZSBsZWdhY3lMb2FkO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICAgKi9cbiAgICBwcml2YXRlIGxlZ2FjeUNyZWF0ZTtcbiAgICBhZGRFbWFpbCh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGVtYWlsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9Pjtcbn1cbiJdfQ==