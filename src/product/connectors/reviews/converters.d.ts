import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { Review } from '../../../occ/occ-models/occ.models';
export declare const PRODUCT_REVIEWS_NORMALIZER: InjectionToken<Converter<any, Review[]>>;
export declare const PRODUCT_REVIEW_SERIALIZER: InjectionToken<Converter<Review, any>>;
