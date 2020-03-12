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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLWNhcnQuYWRhcHRlci5kLnRzIiwic291cmNlcyI6WyJvY2MtY2FydC5hZGFwdGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBT0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ2FydEFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9jYXJ0L2Nvbm5lY3RvcnMvY2FydC9jYXJ0LmFkYXB0ZXInO1xuaW1wb3J0IHsgRmVhdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9mZWF0dXJlcy1jb25maWcvc2VydmljZXMvZmVhdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDYXJ0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5pbXBvcnQgeyBDb252ZXJ0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBPY2NFbmRwb2ludHNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb2NjLWVuZHBvaW50cy5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9jY0NhcnRBZGFwdGVyIGltcGxlbWVudHMgQ2FydEFkYXB0ZXIge1xuICAgIHByb3RlY3RlZCBodHRwOiBIdHRwQ2xpZW50O1xuICAgIHByb3RlY3RlZCBvY2NFbmRwb2ludHNTZXJ2aWNlOiBPY2NFbmRwb2ludHNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjb252ZXJ0ZXJTZXJ2aWNlOiBDb252ZXJ0ZXJTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBmZWF0dXJlQ29uZmlnU2VydmljZT86IEZlYXR1cmVDb25maWdTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKGh0dHA6IEh0dHBDbGllbnQsIG9jY0VuZHBvaW50c1NlcnZpY2U6IE9jY0VuZHBvaW50c1NlcnZpY2UsIGNvbnZlcnRlclNlcnZpY2U6IENvbnZlcnRlclNlcnZpY2UsIGZlYXR1cmVDb25maWdTZXJ2aWNlPzogRmVhdHVyZUNvbmZpZ1NlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0Q2FydEVuZHBvaW50KHVzZXJJZDogc3RyaW5nKTogc3RyaW5nO1xuICAgIGxvYWRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnRbXT47XG4gICAgbG9hZCh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGNyZWF0ZSh1c2VySWQ6IHN0cmluZywgb2xkQ2FydElkPzogc3RyaW5nLCB0b01lcmdlQ2FydEd1aWQ/OiBzdHJpbmcpOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGRlbGV0ZSh1c2VySWQ6IHN0cmluZywgY2FydElkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPHt9PjtcbiAgICAvKipcbiAgICAgKiBAZGVwcmVjYXRlZCBTaW5jZSAxLjFcbiAgICAgKiBVc2UgY29uZmlndXJhYmxlIGVuZHBvaW50cy5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM0MTI1XG4gICAgICovXG4gICAgcHJpdmF0ZSBsZWdhY3lMb2FkQWxsO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuMVxuICAgICAqIFVzZSBjb25maWd1cmFibGUgZW5kcG9pbnRzLlxuICAgICAqIFJlbW92ZSBpc3N1ZTogIzQxMjVcbiAgICAgKi9cbiAgICBwcml2YXRlIGxlZ2FjeUxvYWQ7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS4xXG4gICAgICogVXNlIGNvbmZpZ3VyYWJsZSBlbmRwb2ludHMuXG4gICAgICogUmVtb3ZlIGlzc3VlOiAjNDEyNVxuICAgICAqL1xuICAgIHByaXZhdGUgbGVnYWN5Q3JlYXRlO1xuICAgIGFkZEVtYWlsKHVzZXJJZDogc3RyaW5nLCBjYXJ0SWQ6IHN0cmluZywgZW1haWw6IHN0cmluZyk6IE9ic2VydmFibGU8e30+O1xufVxuIl19