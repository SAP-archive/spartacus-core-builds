import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductReferencesConnector } from '../../connectors/references/product-references.connector';
import { ProductActions } from '../actions/index';
export declare class ProductReferencesEffects {
    private actions$;
    private productReferencesConnector;
    loadProductReferences$: Observable<ProductActions.LoadProductReferencesSuccess | ProductActions.LoadProductReferencesFail>;
    constructor(actions$: Actions, productReferencesConnector: ProductReferencesConnector);
}
