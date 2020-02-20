import { Occ } from '../../../occ-models/occ.models';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { ProductInterestSearchResult } from '../../../../model/product-interest.model';
import * as ɵngcc0 from '@angular/core';
export declare class OccUserInterestsNormalizer implements Converter<Occ.ProductInterestSearchResult, ProductInterestSearchResult> {
    private converter;
    constructor(converter: ConverterService);
    convert(source: Occ.ProductInterestSearchResult, target?: ProductInterestSearchResult): ProductInterestSearchResult;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OccUserInterestsNormalizer>;
}

//# sourceMappingURL=occ-user-interests-normalizer.d.ts.map