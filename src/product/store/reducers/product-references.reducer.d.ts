import { ProductReference } from '../../../model/product.model';
import * as fromProductReferences from '../actions/product-references.action';
import { ProductReferencesState } from '../product-state';
export declare const initialState: ProductReferencesState;
export declare function reducer(state: ProductReferencesState, action: fromProductReferences.ProductReferencesAction): ProductReferencesState;
export declare const getProductReferenceList: (state: ProductReferencesState) => ProductReference[];
export declare const getProductReferenceProductCode: (state: ProductReferencesState) => string;
