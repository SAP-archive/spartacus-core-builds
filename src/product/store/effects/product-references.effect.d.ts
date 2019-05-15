import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductReferencesConnector } from '../../connectors/references/product-references.connector';
import * as productReferencesActions from './../actions/product-references.action';
export declare class ProductReferencesEffects {
    private actions$;
    private productReferencesConnector;
    loadProductReferences$: Observable<productReferencesActions.LoadProductReferencesSuccess | productReferencesActions.LoadProductReferencesFail>;
    constructor(actions$: Actions, productReferencesConnector: ProductReferencesConnector);
}
