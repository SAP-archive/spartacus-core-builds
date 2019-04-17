import { OccConfig } from '../../../occ/index';
import { Product } from '../../../occ/occ-models/occ.models';
export declare class ProductImageConverterService {
    protected config: OccConfig;
    constructor(config: OccConfig);
    convertList(list: Array<Product>): void;
    convertProduct(product: Product): void;
    /**
     * @desc
     * Creates the image structue we'd like to have. Instead of
     * having a singel list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     */
    populate(source: Array<any>): any;
}
