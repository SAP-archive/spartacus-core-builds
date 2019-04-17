import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as actions from '../actions/index';
import * as converters from '../converters/index';
import { ProductLoaderService } from '../../occ/product.service';
export declare class ProductEffects {
    private actions$;
    private occProductService;
    private productImageConverter;
    private productReferenceConverterService;
    loadProduct$: Observable<actions.LoadProductSuccess | actions.LoadProductFail>;
    constructor(actions$: Actions, occProductService: ProductLoaderService, productImageConverter: converters.ProductImageConverterService, productReferenceConverterService: converters.ProductReferenceConverterService);
}
