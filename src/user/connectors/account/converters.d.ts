import { InjectionToken } from '@angular/core';
import { Converter } from '../../../util/converter.service';
import { UserRegisterFormData } from '../../model/user.model';
export declare const USER_REGISTER_FORM_SERIALIZER: InjectionToken<Converter<UserRegisterFormData, any>>;
