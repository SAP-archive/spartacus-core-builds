import { Occ } from '../../../occ-models/occ.models';
import { Converter, ConverterService } from '../../../../util/converter.service';
import { ProductSearchPage } from '../../../../model/product-search.model';
export declare class OccProductSearchPageNormalizer implements Converter<Occ.ProductSearchPage, ProductSearchPage> {
    private converterService;
    constructor(converterService: ConverterService);
    convert(source: Occ.ProductSearchPage, target?: ProductSearchPage): ProductSearchPage;
}
