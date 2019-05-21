import { OccConfig } from '../../../occ/config/occ-config';
import { Occ } from '../../../occ/occ-models/occ.models';
import { Converter } from '../../../util/converter.service';
import { Product } from '../../../model/product.model';
export declare class ProductNameNormalizer implements Converter<Occ.Product, Product> {
    protected config: OccConfig;
    constructor(config: OccConfig);
    convert(source: Occ.Product, target?: Product): Product;
    protected normalize(name: string): string;
}
