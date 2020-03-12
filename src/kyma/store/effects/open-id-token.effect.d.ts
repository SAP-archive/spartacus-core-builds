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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3Blbi1pZC10b2tlbi5lZmZlY3QuZC50cyIsInNvdXJjZXMiOlsib3Blbi1pZC10b2tlbi5lZmZlY3QuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7OztBQU9BIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgS3ltYUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9reW1hLWNvbmZpZyc7XG5pbXBvcnQgeyBPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL29wZW4taWQtdG9rZW4vb3Blbi1pZC10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCB7IEt5bWFBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBPcGVuSWRUb2tlbkVmZmVjdCB7XG4gICAgcHJpdmF0ZSBhY3Rpb25zJDtcbiAgICBwcml2YXRlIG9wZW5JZFRva2VuU2VydmljZTtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICB0cmlnZ2VyT3BlbklkVG9rZW5Mb2FkaW5nJDogT2JzZXJ2YWJsZTxLeW1hQWN0aW9ucy5Mb2FkT3BlbklkVG9rZW4+O1xuICAgIGxvYWRPcGVuSWRUb2tlbiQ6IE9ic2VydmFibGU8S3ltYUFjdGlvbnMuT3BlbklkVG9rZW5BY3Rpb25zPjtcbiAgICBjb25zdHJ1Y3RvcihhY3Rpb25zJDogQWN0aW9ucywgb3BlbklkVG9rZW5TZXJ2aWNlOiBPcGVuSWRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSwgY29uZmlnOiBLeW1hQ29uZmlnKTtcbn1cbiJdfQ==