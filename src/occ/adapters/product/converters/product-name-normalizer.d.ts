import { OccConfig } from '../../../config/occ-config';
import { Occ } from '../../../occ-models/occ.models';
import { Converter } from '../../../../util/converter.service';
import { Product } from '../../../../model/product.model';
import * as ɵngcc0 from '@angular/core';
export declare class ProductNameNormalizer implements Converter<Occ.Product, Product> {
    protected config: OccConfig;
    constructor(config: OccConfig);
    convert(source: Occ.Product, target?: Product): Product;
    protected normalize(name: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductNameNormalizer>;
}

//# sourceMappingURL=product-name-normalizer.d.ts.map