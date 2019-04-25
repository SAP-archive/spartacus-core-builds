import { OccConfig } from '../../../occ/config/occ-config';
import { Image } from '../../../occ/occ-models';
import { Product } from '../../../occ/occ-models/occ.models';
import { Converter } from '../../../util/converter.service';
import { UIImages, UIProduct } from '../../model/product';
export declare class ProductImageNormalizer implements Converter<Product, UIProduct> {
    protected config: OccConfig;
    constructor(config: OccConfig);
    convert(source: Product, target?: UIProduct): UIProduct;
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
