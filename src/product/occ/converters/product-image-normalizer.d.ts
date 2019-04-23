import { Image, OccConfig } from '../../../occ';
import { Product } from '../../../occ/occ-models/occ.models';
import { Converter } from '../../../util/converter.service';
import { UIImages, UIProduct } from '../../model/product-model';
export declare class ProductImageNormalizer implements Converter<Product, UIProduct> {
    protected config: OccConfig;
    constructor(config: OccConfig);
    convert(source: Product, target?: UIProduct): UIProduct;
    /**
     * @deprecated Use `convert(source, target?) => target` instead
     *
     * TODO: Should be removed when all use cases will be refactored
     */
    convertList(list: Array<Product>): void;
    /**
     * @deprecated Use `convert(source, target?) => target` instead
     *
     * TODO: Should be removed when all use cases will be refactored
     */
    convertProduct(product: any): void;
    /**
     * @desc
     * Creates the image structure we'd like to have. Instead of
     * having a single list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     */
    normalize(source: Image[]): UIImages;
}
