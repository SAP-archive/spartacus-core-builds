import { InjectionToken } from '@angular/core';
import { Suggestion } from '../../../occ/occ-models/occ.models';
import { Converter } from '../../../util/converter.service';
import { UIProductSearchPage } from '../../model/product-search-page';
export declare const PRODUCT_SEARCH_PAGE_NORMALIZER: InjectionToken<Converter<any, UIProductSearchPage>>;
export declare const PRODUCT_SUGGESTION_NORMALIZER: InjectionToken<Converter<any, Suggestion>>;
