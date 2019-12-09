/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthErrorInterceptor } from './auth-error.interceptor';
import { ClientTokenInterceptor } from './client-token.interceptor';
import { CustomerSupportAgentTokenInterceptor } from './csagent-token.interceptor';
import { UserTokenInterceptor } from './user-token.interceptor';
/** @type {?} */
export var interceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: CustomerSupportAgentTokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: ClientTokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: UserTokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthErrorInterceptor,
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9odHRwLWludGVyY2VwdG9ycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDbkYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRWhFLE1BQU0sS0FBTyxZQUFZLEdBQWU7SUFDdEM7UUFDRSxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFFBQVEsRUFBRSxvQ0FBb0M7UUFDOUMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsUUFBUSxFQUFFLG9CQUFvQjtRQUM5QixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aEVycm9ySW50ZXJjZXB0b3IgfSBmcm9tICcuL2F1dGgtZXJyb3IuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW5JbnRlcmNlcHRvciB9IGZyb20gJy4vY2xpZW50LXRva2VuLmludGVyY2VwdG9yJztcbmltcG9ydCB7IEN1c3RvbWVyU3VwcG9ydEFnZW50VG9rZW5JbnRlcmNlcHRvciB9IGZyb20gJy4vY3NhZ2VudC10b2tlbi5pbnRlcmNlcHRvcic7XG5pbXBvcnQgeyBVc2VyVG9rZW5JbnRlcmNlcHRvciB9IGZyb20gJy4vdXNlci10b2tlbi5pbnRlcmNlcHRvcic7XG5cbmV4cG9ydCBjb25zdCBpbnRlcmNlcHRvcnM6IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VDbGFzczogQ3VzdG9tZXJTdXBwb3J0QWdlbnRUb2tlbkludGVyY2VwdG9yLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlQ2xhc3M6IENsaWVudFRva2VuSW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VDbGFzczogVXNlclRva2VuSW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VDbGFzczogQXV0aEVycm9ySW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuIl19