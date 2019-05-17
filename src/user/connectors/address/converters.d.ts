import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { Address, AddressValidation } from '../../../model/address.model';
export declare const ADDRESS_NORMALIZER: InjectionToken<Converter<any, Address>>;
export declare const ADDRESS_SERIALIZER: InjectionToken<Converter<Address, any>>;
export declare const ADDRESS_VALIDATION_NORMALIZER: InjectionToken<Converter<any, AddressValidation>>;
