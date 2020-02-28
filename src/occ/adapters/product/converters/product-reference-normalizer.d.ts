import { Occ } from '../../../occ-models/occ.models';
import { Converter } from '../../../../util/converter.service';
import { Product, ProductReferences } from '../../../../model/product.model';
import * as ɵngcc0 from '@angular/core';
export declare class ProductReferenceNormalizer implements Converter<Occ.Product, Product> {
    convert(source: Occ.Product, target?: Product): Product;
    /**
     * @desc
     * Creates the reference structure we'd like to have. Instead of
     * having a single list with all references we create a proper structure.
     * With that we have a semantic API for the clients
     * - product.references.SIMILAR[0].code
     */
    protected normalize(source: Occ.ProductReference[]): ProductReferences;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReferenceNormalizer>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductReferenceNormalizer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Utbm9ybWFsaXplci5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJlZmVyZW5jZS1ub3JtYWxpemVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7O0FBVUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdCwgUHJvZHVjdFJlZmVyZW5jZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbC9wcm9kdWN0Lm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFByb2R1Y3RSZWZlcmVuY2VOb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0LCBQcm9kdWN0PiB7XG4gICAgY29udmVydChzb3VyY2U6IE9jYy5Qcm9kdWN0LCB0YXJnZXQ/OiBQcm9kdWN0KTogUHJvZHVjdDtcbiAgICAvKipcbiAgICAgKiBAZGVzY1xuICAgICAqIENyZWF0ZXMgdGhlIHJlZmVyZW5jZSBzdHJ1Y3R1cmUgd2UnZCBsaWtlIHRvIGhhdmUuIEluc3RlYWQgb2ZcbiAgICAgKiBoYXZpbmcgYSBzaW5nbGUgbGlzdCB3aXRoIGFsbCByZWZlcmVuY2VzIHdlIGNyZWF0ZSBhIHByb3BlciBzdHJ1Y3R1cmUuXG4gICAgICogV2l0aCB0aGF0IHdlIGhhdmUgYSBzZW1hbnRpYyBBUEkgZm9yIHRoZSBjbGllbnRzXG4gICAgICogLSBwcm9kdWN0LnJlZmVyZW5jZXMuU0lNSUxBUlswXS5jb2RlXG4gICAgICovXG4gICAgcHJvdGVjdGVkIG5vcm1hbGl6ZShzb3VyY2U6IE9jYy5Qcm9kdWN0UmVmZXJlbmNlW10pOiBQcm9kdWN0UmVmZXJlbmNlcztcbn1cbiJdfQ==