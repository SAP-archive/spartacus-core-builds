import { Product, ProductReference } from '../../../occ/occ-models/occ.models';
import { Converter } from '../../../util/converter.service';
import { UIProduct, UIProductReferences } from '../../model/product-model';
export declare class ProductReferenceNormalizer implements Converter<Product, UIProduct> {
    convert(source: Product, target?: UIProduct): UIProduct;
    /**
     * @desc
     * Creates the reference structure we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     */
    protected normalize(source: ProductReference[]): UIProductReferences;
}
