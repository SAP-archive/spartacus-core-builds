import { Product } from '../../../occ/occ-models/occ.models';
export declare class ProductReferenceConverterService {
    convertProduct(product: Product): void;
    /**
     * @desc
     * Creates the reference structue we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     */
    protected populate(source: Array<any>): any;
}
