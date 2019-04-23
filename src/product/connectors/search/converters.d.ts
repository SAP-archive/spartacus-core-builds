import { InjectionToken } from '@angular/core';
import { SuggestionList } from '../../../occ/occ-models/occ.models';
import { Converter } from '../../../util/converter.service';
import { UIProductSearchPage } from '../../model/product-search-page';
export declare const PRODUCT_SEARCH_NORMALIZER: InjectionToken<Converter<any, UIProductSearchPage>>;
export declare const PRODUCT_SUGGESTIONS_LIST_NORMALIZER: InjectionToken<Converter<any, SuggestionList>>;
