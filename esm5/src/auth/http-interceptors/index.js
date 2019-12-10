/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthErrorInterceptor } from './auth-error.interceptor';
import { ClientTokenInterceptor } from './client-token.interceptor';
import { UserTokenInterceptor } from './user-token.interceptor';
import { TokenRevocationInterceptor } from './token-revocation.interceptor';
/** @type {?} */
export var interceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: ClientTokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: UserTokenInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: AuthErrorInterceptor,
        multi: true,
    },
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: TokenRevocationInterceptor,
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9odHRwLWludGVyY2VwdG9ycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBRTVFLE1BQU0sS0FBTyxZQUFZLEdBQWU7SUFDdEM7UUFDRSxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFdBQVcsRUFBRSxzQkFBc0I7UUFDbkMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsaUJBQWlCO1FBQzFCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQXV0aEVycm9ySW50ZXJjZXB0b3IgfSBmcm9tICcuL2F1dGgtZXJyb3IuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW5JbnRlcmNlcHRvciB9IGZyb20gJy4vY2xpZW50LXRva2VuLmludGVyY2VwdG9yJztcbmltcG9ydCB7IFVzZXJUb2tlbkludGVyY2VwdG9yIH0gZnJvbSAnLi91c2VyLXRva2VuLmludGVyY2VwdG9yJztcbmltcG9ydCB7IFRva2VuUmV2b2NhdGlvbkludGVyY2VwdG9yIH0gZnJvbSAnLi90b2tlbi1yZXZvY2F0aW9uLmludGVyY2VwdG9yJztcblxuZXhwb3J0IGNvbnN0IGludGVyY2VwdG9yczogUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgIHVzZUV4aXN0aW5nOiBDbGllbnRUb2tlbkludGVyY2VwdG9yLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlRXhpc3Rpbmc6IFVzZXJUb2tlbkludGVyY2VwdG9yLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlRXhpc3Rpbmc6IEF1dGhFcnJvckludGVyY2VwdG9yLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlRXhpc3Rpbmc6IFRva2VuUmV2b2NhdGlvbkludGVyY2VwdG9yLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcbiJdfQ==