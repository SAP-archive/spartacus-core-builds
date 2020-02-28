import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OpenIdToken } from '../models/kyma-token-types.model';
import { StateWithKyma } from '../store/kyma-state';
import * as ɵngcc0 from '@angular/core';
export declare class KymaService {
    protected store: Store<StateWithKyma>;
    constructor(store: Store<StateWithKyma>);
    /**
     * Authorizes using the Kyma OAuth client with scope `openid`.
     *
     * @param username a username
     * @param password a password
     */
    authorizeOpenId(username: string, password: string): void;
    /**
     * Returns the `OpenIdToken`, which was previously retrieved using `authorizeOpenId` method.
     */
    getOpenIdToken(): Observable<OpenIdToken>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<KymaService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3ltYS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImt5bWEuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7QUFjQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9wZW5JZFRva2VuIH0gZnJvbSAnLi4vbW9kZWxzL2t5bWEtdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVXaXRoS3ltYSB9IGZyb20gJy4uL3N0b3JlL2t5bWEtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgS3ltYVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoS3ltYT47XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEt5bWE+KTtcbiAgICAvKipcbiAgICAgKiBBdXRob3JpemVzIHVzaW5nIHRoZSBLeW1hIE9BdXRoIGNsaWVudCB3aXRoIHNjb3BlIGBvcGVuaWRgLlxuICAgICAqXG4gICAgICogQHBhcmFtIHVzZXJuYW1lIGEgdXNlcm5hbWVcbiAgICAgKiBAcGFyYW0gcGFzc3dvcmQgYSBwYXNzd29yZFxuICAgICAqL1xuICAgIGF1dGhvcml6ZU9wZW5JZCh1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBgT3BlbklkVG9rZW5gLCB3aGljaCB3YXMgcHJldmlvdXNseSByZXRyaWV2ZWQgdXNpbmcgYGF1dGhvcml6ZU9wZW5JZGAgbWV0aG9kLlxuICAgICAqL1xuICAgIGdldE9wZW5JZFRva2VuKCk6IE9ic2VydmFibGU8T3BlbklkVG9rZW4+O1xufVxuIl19