import { Actions } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { OpenIdAuthenticationTokenService } from '../../services/open-id-token/open-id-token.service';
import { KymaActions } from '../actions/index';
import * as ɵngcc0 from '@angular/core';
export declare class OpenIdTokenEffect {
    private actions$;
    private openIdTokenService;
    triggerOpenIdTokenLoading$: Observable<KymaActions.LoadOpenIdToken>;
    loadOpenIdToken$: Observable<KymaActions.OpenIdTokenActions>;
    constructor(actions$: Actions, openIdTokenService: OpenIdAuthenticationTokenService);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<OpenIdTokenEffect, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<OpenIdTokenEffect>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsib3Blbi1pZC10b2tlbi5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7Ozs7QUFNQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvb3Blbi1pZC10b2tlbi9vcGVuLWlkLXRva2VuLnNlcnZpY2UnO1xuaW1wb3J0IHsgS3ltYUFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE9wZW5JZFRva2VuRWZmZWN0IHtcbiAgICBwcml2YXRlIGFjdGlvbnMkO1xuICAgIHByaXZhdGUgb3BlbklkVG9rZW5TZXJ2aWNlO1xuICAgIHRyaWdnZXJPcGVuSWRUb2tlbkxvYWRpbmckOiBPYnNlcnZhYmxlPEt5bWFBY3Rpb25zLkxvYWRPcGVuSWRUb2tlbj47XG4gICAgbG9hZE9wZW5JZFRva2VuJDogT2JzZXJ2YWJsZTxLeW1hQWN0aW9ucy5PcGVuSWRUb2tlbkFjdGlvbnM+O1xuICAgIGNvbnN0cnVjdG9yKGFjdGlvbnMkOiBBY3Rpb25zLCBvcGVuSWRUb2tlblNlcnZpY2U6IE9wZW5JZEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlKTtcbn1cbiJdfQ==