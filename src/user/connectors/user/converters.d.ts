import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { Title, User, UserSignUp } from '../../../model/misc.model';
export declare const USER_NORMALIZER: InjectionToken<Converter<any, User>>;
export declare const USER_SERIALIZER: InjectionToken<Converter<User, any>>;
export declare const USER_SIGN_UP_SERIALIZER: InjectionToken<Converter<UserSignUp, any>>;
export declare const TITLE_NORMALIZER: InjectionToken<Converter<any, Title>>;
