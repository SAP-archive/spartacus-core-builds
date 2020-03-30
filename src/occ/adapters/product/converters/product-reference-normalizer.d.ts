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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductReferenceNormalizer, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ProductReferenceNormalizer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1yZWZlcmVuY2Utbm9ybWFsaXplci5kLnRzIiwic291cmNlcyI6WyJwcm9kdWN0LXJlZmVyZW5jZS1ub3JtYWxpemVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7O0FBVUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPY2MgfSBmcm9tICcuLi8uLi8uLi9vY2MtbW9kZWxzL29jYy5tb2RlbHMnO1xuaW1wb3J0IHsgQ29udmVydGVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9jb252ZXJ0ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9kdWN0LCBQcm9kdWN0UmVmZXJlbmNlcyB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdFJlZmVyZW5jZU5vcm1hbGl6ZXIgaW1wbGVtZW50cyBDb252ZXJ0ZXI8T2NjLlByb2R1Y3QsIFByb2R1Y3Q+IHtcbiAgICBjb252ZXJ0KHNvdXJjZTogT2NjLlByb2R1Y3QsIHRhcmdldD86IFByb2R1Y3QpOiBQcm9kdWN0O1xuICAgIC8qKlxuICAgICAqIEBkZXNjXG4gICAgICogQ3JlYXRlcyB0aGUgcmVmZXJlbmNlIHN0cnVjdHVyZSB3ZSdkIGxpa2UgdG8gaGF2ZS4gSW5zdGVhZCBvZlxuICAgICAqIGhhdmluZyBhIHNpbmdsZSBsaXN0IHdpdGggYWxsIHJlZmVyZW5jZXMgd2UgY3JlYXRlIGEgcHJvcGVyIHN0cnVjdHVyZS5cbiAgICAgKiBXaXRoIHRoYXQgd2UgaGF2ZSBhIHNlbWFudGljIEFQSSBmb3IgdGhlIGNsaWVudHNcbiAgICAgKiAtIHByb2R1Y3QucmVmZXJlbmNlcy5TSU1JTEFSWzBdLmNvZGVcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgbm9ybWFsaXplKHNvdXJjZTogT2NjLlByb2R1Y3RSZWZlcmVuY2VbXSk6IFByb2R1Y3RSZWZlcmVuY2VzO1xufVxuIl19