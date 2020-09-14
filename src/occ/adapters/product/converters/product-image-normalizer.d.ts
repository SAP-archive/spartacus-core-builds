import { OccConfig } from '../../../config/occ-config';
import { Occ } from '../../../occ-models/occ.models';
import { Converter } from '../../../../util/converter.service';
import { Product } from '../../../../model/product.model';
import { Images } from '../../../../model/image.model';
export declare class ProductImageNormalizer implements Converter<Occ.Product, Product> {
    protected config: OccConfig;
    constructor(config: OccConfig);
    convert(source: Occ.Product, target?: Product): Product;
    /**
     * @desc
     * Creates the image structure we'd like to have. Instead of
     * having a single list with all images despite type and format
     * we create a proper structure. With that we can do:
     * - images.primary.thumnail.url
     * - images.GALLERY[0].thumnail.url
     */
    normalize(source: Occ.Image[]): Images;
    /**
     * Traditionally, in an on-prem world, medias and other backend related calls
     * are hosted at the same platform, but in a cloud setup, applications are are
     * typically distributed cross different environments. For media, we use the
     * `backend.media.baseUrl` by default, but fallback to `backend.occ.baseUrl`
     * if none provided.
     */
    private normalizeImageUrl;
}
