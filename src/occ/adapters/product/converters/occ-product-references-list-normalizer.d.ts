import { ProductReference } from '../../../../model/product.model';
import { Occ } from '../../../occ-models/occ.models';
import { Converter, ConverterService } from '../../../../util/converter.service';
import * as ɵngcc0 from '@angular/core';
export declare class OccProductReferencesListNormalizer implements Converter<Occ.ProductReferenceList, ProductReference[]> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.ProductReferenceList, target?: ProductReference[]): ProductReference[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccProductReferencesListNormalizer>;
}

//# sourceMappingURL=occ-product-references-list-normalizer.d.ts.map