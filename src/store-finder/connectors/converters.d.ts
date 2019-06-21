import { Converter } from '../../util/converter.service';
import { PointOfService } from '../../model/point-of-service.model';
import { InjectionToken } from '@angular/core';
import { StoreFinderSearchPage, StoreCount } from '../../model/store-finder.model';
export declare const POINT_OF_SERVICE_NORMALIZER: InjectionToken<Converter<any, PointOfService>>;
export declare const STORE_FINDER_SEARCH_PAGE_NORMALIZER: InjectionToken<Converter<any, StoreFinderSearchPage>>;
export declare const STORE_COUNT_NORMALIZER: InjectionToken<Converter<any, StoreCount>>;
