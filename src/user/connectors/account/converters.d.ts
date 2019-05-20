import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { UserRegisterFormData } from '../../model/user.model';
import { Title } from '../../../model/misc.model';
export declare const USER_REGISTER_FORM_SERIALIZER: InjectionToken<Converter<UserRegisterFormData, any>>;
export declare const TITLE_NORMALIZER: InjectionToken<Converter<any, Title>>;
