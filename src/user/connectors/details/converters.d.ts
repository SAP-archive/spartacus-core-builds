import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { User } from '../../../model/misc.model';
export declare const USER_NORMALIZER: InjectionToken<Converter<any, User>>;
export declare const USER_SERIALIZER: InjectionToken<Converter<User, any>>;
