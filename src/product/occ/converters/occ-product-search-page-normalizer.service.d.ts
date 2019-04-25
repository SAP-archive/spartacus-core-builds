import { ProductSearchPage } from '../../../occ/occ-models/occ.models';
import { Converter, ConverterService } from '../../../util/converter.service';
import { UIProductSearchPage } from '../../model/product-search-page';
export declare class OccProductSearchPageNormalizer implements Converter<ProductSearchPage, UIProductSearchPage> {
    private converterService;
    constructor(converterService: ConverterService);
    convert(source: ProductSearchPage, target?: UIProductSearchPage): UIProductSearchPage;
}
