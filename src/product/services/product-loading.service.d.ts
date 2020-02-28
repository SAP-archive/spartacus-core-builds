import { Actions } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { LoadingScopesService } from '../../occ/services/loading-scopes.service';
import { StateWithProduct } from '../store/product-state';
import * as ɵngcc0 from '@angular/core';
export declare class ProductLoadingService {
    protected store: Store<StateWithProduct>;
    protected loadingScopes: LoadingScopesService;
    protected actions$: Actions;
    protected platformId: any;
    protected products: {
        [code: string]: {
            [scope: string]: Observable<Product>;
        };
    };
    constructor(store: Store<StateWithProduct>, loadingScopes: LoadingScopesService, actions$: Actions, platformId: any);
    get(productCode: string, scopes: string[]): Observable<Product>;
    protected initProductScopes(productCode: string, scopes: string[]): void;
    protected getScopesIndex(scopes: string[]): string;
    /**
     * Creates observable for providing specified product data for the scope
     *
     * @param productCode
     * @param scope
     */
    protected getProductForScope(productCode: string, scope: string): Observable<Product>;
    /**
     * Returns reload triggers for product per scope
     *
     * @param productCode
     * @param scope
     */
    protected getProductReloadTriggers(productCode: string, scope: string): Observable<boolean>[];
    /**
     * Generic method that returns stream triggering reload by maxAge
     *
     * Could be refactored to separate service in future to use in other
     * max age reload implementations
     *
     * @param loadStart$ Stream that emits on load start
     * @param loadFinish$ Stream that emits on load finish
     * @param maxAge max age
     */
    private getMaxAgeTrigger;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductLoadingService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC1sb2FkaW5nLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdUNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGluZ1Njb3Blc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9vY2Mvc2VydmljZXMvbG9hZGluZy1zY29wZXMuc2VydmljZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhQcm9kdWN0IH0gZnJvbSAnLi4vc3RvcmUvcHJvZHVjdC1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0TG9hZGluZ1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoUHJvZHVjdD47XG4gICAgcHJvdGVjdGVkIGxvYWRpbmdTY29wZXM6IExvYWRpbmdTY29wZXNTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBhY3Rpb25zJDogQWN0aW9ucztcbiAgICBwcm90ZWN0ZWQgcGxhdGZvcm1JZDogYW55O1xuICAgIHByb3RlY3RlZCBwcm9kdWN0czoge1xuICAgICAgICBbY29kZTogc3RyaW5nXToge1xuICAgICAgICAgICAgW3Njb3BlOiBzdHJpbmddOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuICAgICAgICB9O1xuICAgIH07XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aFByb2R1Y3Q+LCBsb2FkaW5nU2NvcGVzOiBMb2FkaW5nU2NvcGVzU2VydmljZSwgYWN0aW9ucyQ6IEFjdGlvbnMsIHBsYXRmb3JtSWQ6IGFueSk7XG4gICAgZ2V0KHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3Blczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPFByb2R1Y3Q+O1xuICAgIHByb3RlY3RlZCBpbml0UHJvZHVjdFNjb3Blcyhwcm9kdWN0Q29kZTogc3RyaW5nLCBzY29wZXM6IHN0cmluZ1tdKTogdm9pZDtcbiAgICBwcm90ZWN0ZWQgZ2V0U2NvcGVzSW5kZXgoc2NvcGVzOiBzdHJpbmdbXSk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIG9ic2VydmFibGUgZm9yIHByb3ZpZGluZyBzcGVjaWZpZWQgcHJvZHVjdCBkYXRhIGZvciB0aGUgc2NvcGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwcm9kdWN0Q29kZVxuICAgICAqIEBwYXJhbSBzY29wZVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRQcm9kdWN0Rm9yU2NvcGUocHJvZHVjdENvZGU6IHN0cmluZywgc2NvcGU6IHN0cmluZyk6IE9ic2VydmFibGU8UHJvZHVjdD47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyByZWxvYWQgdHJpZ2dlcnMgZm9yIHByb2R1Y3QgcGVyIHNjb3BlXG4gICAgICpcbiAgICAgKiBAcGFyYW0gcHJvZHVjdENvZGVcbiAgICAgKiBAcGFyYW0gc2NvcGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0UHJvZHVjdFJlbG9hZFRyaWdnZXJzKHByb2R1Y3RDb2RlOiBzdHJpbmcsIHNjb3BlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGJvb2xlYW4+W107XG4gICAgLyoqXG4gICAgICogR2VuZXJpYyBtZXRob2QgdGhhdCByZXR1cm5zIHN0cmVhbSB0cmlnZ2VyaW5nIHJlbG9hZCBieSBtYXhBZ2VcbiAgICAgKlxuICAgICAqIENvdWxkIGJlIHJlZmFjdG9yZWQgdG8gc2VwYXJhdGUgc2VydmljZSBpbiBmdXR1cmUgdG8gdXNlIGluIG90aGVyXG4gICAgICogbWF4IGFnZSByZWxvYWQgaW1wbGVtZW50YXRpb25zXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbG9hZFN0YXJ0JCBTdHJlYW0gdGhhdCBlbWl0cyBvbiBsb2FkIHN0YXJ0XG4gICAgICogQHBhcmFtIGxvYWRGaW5pc2gkIFN0cmVhbSB0aGF0IGVtaXRzIG9uIGxvYWQgZmluaXNoXG4gICAgICogQHBhcmFtIG1heEFnZSBtYXggYWdlXG4gICAgICovXG4gICAgcHJpdmF0ZSBnZXRNYXhBZ2VUcmlnZ2VyO1xufVxuIl19