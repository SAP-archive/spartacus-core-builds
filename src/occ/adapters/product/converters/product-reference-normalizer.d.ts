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

//# sourceMappingURL=product-reference-normalizer.d.ts.map