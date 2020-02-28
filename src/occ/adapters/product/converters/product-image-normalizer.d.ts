import { OccConfig } from '../../../config/occ-config';
import { Occ } from '../../../occ-models/occ.models';
import { Converter } from '../../../../util/converter.service';
import { Product } from '../../../../model/product.model';
import { Images } from '../../../../model/image.model';
import * as ɵngcc0 from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductImageNormalizer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3QtaW1hZ2Utbm9ybWFsaXplci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vbW9kZWwvcHJvZHVjdC5tb2RlbCc7XG5pbXBvcnQgeyBJbWFnZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9pbWFnZS5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBQcm9kdWN0SW1hZ2VOb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0LCBQcm9kdWN0PiB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogT2NjQ29uZmlnKTtcbiAgICBjb252ZXJ0KHNvdXJjZTogT2NjLlByb2R1Y3QsIHRhcmdldD86IFByb2R1Y3QpOiBQcm9kdWN0O1xuICAgIC8qKlxuICAgICAqIEBkZXNjXG4gICAgICogQ3JlYXRlcyB0aGUgaW1hZ2Ugc3RydWN0dXJlIHdlJ2QgbGlrZSB0byBoYXZlLiBJbnN0ZWFkIG9mXG4gICAgICogaGF2aW5nIGEgc2luZ2xlIGxpc3Qgd2l0aCBhbGwgaW1hZ2VzIGRlc3BpdGUgdHlwZSBhbmQgZm9ybWF0XG4gICAgICogd2UgY3JlYXRlIGEgcHJvcGVyIHN0cnVjdHVyZS4gV2l0aCB0aGF0IHdlIGNhbiBkbzpcbiAgICAgKiAtIGltYWdlcy5wcmltYXJ5LnRodW1uYWlsLnVybFxuICAgICAqIC0gaW1hZ2VzLkdBTExFUllbMF0udGh1bW5haWwudXJsXG4gICAgICovXG4gICAgbm9ybWFsaXplKHNvdXJjZTogT2NjLkltYWdlW10pOiBJbWFnZXM7XG4gICAgLyoqXG4gICAgICogVHJhZGl0aW9uYWxseSwgaW4gYW4gb24tcHJlbSB3b3JsZCwgbWVkaWFzIGFuZCBvdGhlciBiYWNrZW5kIHJlbGF0ZWQgY2FsbHNcbiAgICAgKiBhcmUgaG9zdGVkIGF0IHRoZSBzYW1lIHBsYXRmb3JtLCBidXQgaW4gYSBjbG91ZCBzZXR1cCwgYXBwbGljYXRpb25zIGFyZSBhcmVcbiAgICAgKiB0eXBpY2FsbHkgZGlzdHJpYnV0ZWQgY3Jvc3MgZGlmZmVyZW50IGVudmlyb25tZW50cy4gRm9yIG1lZGlhLCB3ZSB1c2UgdGhlXG4gICAgICogYGJhY2tlbmQubWVkaWEuYmFzZVVybGAgYnkgZGVmYXVsdCwgYnV0IGZhbGxiYWNrIHRvIGBiYWNrZW5kLm9jYy5iYXNlVXJsYFxuICAgICAqIGlmIG5vbmUgcHJvdmlkZWQuXG4gICAgICovXG4gICAgcHJpdmF0ZSBub3JtYWxpemVJbWFnZVVybDtcbn1cbiJdfQ==