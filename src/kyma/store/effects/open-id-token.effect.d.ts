import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { KymaConfig } from '../../config/kyma-config';
import { OpenIdAuthenticationTokenService } from '../../services/open-id-token/open-id-token.service';
import { KymaActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class OpenIdTokenEffect {
    private actions$;
    private openIdTokenService;
    private config;
    triggerOpenIdTokenLoading$: Observable<KymaActions.LoadOpenIdToken>;
    loadOpenIdToken$: Observable<KymaActions.OpenIdTokenActions>;
    constructor(actions$: Actions, openIdTokenService: OpenIdAuthenticationTokenService, config: KymaConfig);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OpenIdTokenEffect>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OpenIdTokenEffect>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsib3Blbi1pZC10b2tlbi5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7OztBQU9BOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEt5bWFDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcva3ltYS1jb25maWcnO1xuaW1wb3J0IHsgT3BlbklkQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9vcGVuLWlkLXRva2VuL29wZW4taWQtdG9rZW4uc2VydmljZSc7XG5pbXBvcnQgeyBLeW1hQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgT3BlbklkVG9rZW5FZmZlY3Qge1xuICAgIHByaXZhdGUgYWN0aW9ucyQ7XG4gICAgcHJpdmF0ZSBvcGVuSWRUb2tlblNlcnZpY2U7XG4gICAgcHJpdmF0ZSBjb25maWc7XG4gICAgdHJpZ2dlck9wZW5JZFRva2VuTG9hZGluZyQ6IE9ic2VydmFibGU8S3ltYUFjdGlvbnMuTG9hZE9wZW5JZFRva2VuPjtcbiAgICBsb2FkT3BlbklkVG9rZW4kOiBPYnNlcnZhYmxlPEt5bWFBY3Rpb25zLk9wZW5JZFRva2VuQWN0aW9ucz47XG4gICAgY29uc3RydWN0b3IoYWN0aW9ucyQ6IEFjdGlvbnMsIG9wZW5JZFRva2VuU2VydmljZTogT3BlbklkQXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2UsIGNvbmZpZzogS3ltYUNvbmZpZyk7XG59XG4iXX0=