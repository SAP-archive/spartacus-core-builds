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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductImageNormalizer, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbWFnZS1ub3JtYWxpemVyLmQudHMiLCJzb3VyY2VzIjpbInByb2R1Y3QtaW1hZ2Utbm9ybWFsaXplci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IE9jYyB9IGZyb20gJy4uLy4uLy4uL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgeyBDb252ZXJ0ZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2NvbnZlcnRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmltcG9ydCB7IEltYWdlcyB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL2ltYWdlLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RJbWFnZU5vcm1hbGl6ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3QsIFByb2R1Y3Q+IHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWc7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBPY2NDb25maWcpO1xuICAgIGNvbnZlcnQoc291cmNlOiBPY2MuUHJvZHVjdCwgdGFyZ2V0PzogUHJvZHVjdCk6IFByb2R1Y3Q7XG4gICAgLyoqXG4gICAgICogQGRlc2NcbiAgICAgKiBDcmVhdGVzIHRoZSBpbWFnZSBzdHJ1Y3R1cmUgd2UnZCBsaWtlIHRvIGhhdmUuIEluc3RlYWQgb2ZcbiAgICAgKiBoYXZpbmcgYSBzaW5nbGUgbGlzdCB3aXRoIGFsbCBpbWFnZXMgZGVzcGl0ZSB0eXBlIGFuZCBmb3JtYXRcbiAgICAgKiB3ZSBjcmVhdGUgYSBwcm9wZXIgc3RydWN0dXJlLiBXaXRoIHRoYXQgd2UgY2FuIGRvOlxuICAgICAqIC0gaW1hZ2VzLnByaW1hcnkudGh1bW5haWwudXJsXG4gICAgICogLSBpbWFnZXMuR0FMTEVSWVswXS50aHVtbmFpbC51cmxcbiAgICAgKi9cbiAgICBub3JtYWxpemUoc291cmNlOiBPY2MuSW1hZ2VbXSk6IEltYWdlcztcbiAgICAvKipcbiAgICAgKiBUcmFkaXRpb25hbGx5LCBpbiBhbiBvbi1wcmVtIHdvcmxkLCBtZWRpYXMgYW5kIG90aGVyIGJhY2tlbmQgcmVsYXRlZCBjYWxsc1xuICAgICAqIGFyZSBob3N0ZWQgYXQgdGhlIHNhbWUgcGxhdGZvcm0sIGJ1dCBpbiBhIGNsb3VkIHNldHVwLCBhcHBsaWNhdGlvbnMgYXJlIGFyZVxuICAgICAqIHR5cGljYWxseSBkaXN0cmlidXRlZCBjcm9zcyBkaWZmZXJlbnQgZW52aXJvbm1lbnRzLiBGb3IgbWVkaWEsIHdlIHVzZSB0aGVcbiAgICAgKiBgYmFja2VuZC5tZWRpYS5iYXNlVXJsYCBieSBkZWZhdWx0LCBidXQgZmFsbGJhY2sgdG8gYGJhY2tlbmQub2NjLmJhc2VVcmxgXG4gICAgICogaWYgbm9uZSBwcm92aWRlZC5cbiAgICAgKi9cbiAgICBwcml2YXRlIG5vcm1hbGl6ZUltYWdlVXJsO1xufVxuIl19