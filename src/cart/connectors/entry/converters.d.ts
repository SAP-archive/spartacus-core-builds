import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { CartModification } from '../../../occ/occ-models/occ.models';
export declare const CART_MODIFICATION_NORMALIZER: InjectionToken<Converter<any, CartModification>>;
