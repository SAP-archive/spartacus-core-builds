import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as actions from '../actions/index';
import { ProductConnector } from '../../connectors/product/product.connector';
export declare class ProductEffects {
    private actions$;
    private productConnector;
    loadProduct$: Observable<actions.LoadProductSuccess | actions.LoadProductFail>;
    constructor(actions$: Actions, productConnector: ProductConnector);
}
