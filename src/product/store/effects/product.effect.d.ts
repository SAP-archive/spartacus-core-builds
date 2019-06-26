import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { ProductConnector } from '../../connectors/product/product.connector';
import { ProductActions } from '../actions/index';
export declare class ProductEffects {
    private actions$;
    private productConnector;
    loadProduct$: Observable<ProductActions.LoadProductSuccess | ProductActions.LoadProductFail>;
    constructor(actions$: Actions, productConnector: ProductConnector);
}
