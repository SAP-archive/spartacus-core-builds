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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQtZW50cnkuYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJvY2MtY2FydC1lbnRyeS5hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBDYXJ0RW50cnlBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vY2FydC9jb25uZWN0b3JzL2VudHJ5L2NhcnQtZW50cnkuYWRhcHRlcic7XG5pbXBvcnQgeyBGZWF0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2ZlYXR1cmVzLWNvbmZpZy9zZXJ2aWNlcy9mZWF0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnRNb2RpZmljYXRpb24gfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENvbnZlcnRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IE9jY0VuZHBvaW50c1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vY2MtZW5kcG9pbnRzLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT2NjQ2FydEVudHJ5QWRhcHRlciBpbXBsZW1lbnRzIENhcnRFbnRyeUFkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UsIGZlYXR1cmVDb25maWdTZXJ2aWNlPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Q2FydEVuZHBvaW50KHVzZXJJZDogc3RyaW5nKTogc3RyaW5nO1xuICAgIGFkZCh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIHByb2R1Y3RDb2RlOiBzdHJpbmcsIHF1YW50aXR5PzogbnVtYmVyKTogT2JzZXJ2YWJsZTxDYXJ0TW9kaWZpY2F0aW9uPjtcbiAgICB1cGRhdGUodXNlcklkOiBzdHJpbmcsIGNhcnRJZDogc3RyaW5nLCBlbnRyeU51bWJlcjogc3RyaW5nLCBxdHk6IG51bWJlciwgcGlja3VwU3RvcmU/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnRNb2RpZmljYXRpb24+O1xuICAgIHJlbW92ZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcsIGVudHJ5TnVtYmVyOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT47XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgICAqL1xuICAgIHByaXZhdGUgbGVnYWN5QWRkO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICAgKi9cbiAgICBwcml2YXRlIGxlZ2FjeVVwZGF0ZTtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAgICovXG4gICAgcHJpdmF0ZSBsZWdhY3lSZW1vdmU7XG59XG4iXX0=