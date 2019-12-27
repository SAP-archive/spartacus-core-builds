import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Product } from '../../model/product.model';
import { StateWithProduct } from '../store/product-state';
import { LoadingScopesService } from '../../occ/services/loading-scopes.service';
import { Actions } from '@ngrx/effects';
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
}
