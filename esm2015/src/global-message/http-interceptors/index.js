/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { HttpErrorHandler } from './handlers/http-error.handler';
import { UnknownErrorHandler } from './handlers/unknown-error.handler';
import { BadGatewayHandler } from './handlers/bad-gateway.handler';
import { BadRequestHandler } from './handlers/bad-request.handler';
import { ConflictHandler } from './handlers/conflict.handler';
import { ForbiddenHandler } from './handlers/forbidden.handler';
import { GatewayTimeoutHandler } from './handlers/gateway-timeout.handler';
import { NotFoundHandler } from './handlers/not-found.handler';
/** @type {?} */
export const errorHandlers = [
    {
        provide: HttpErrorHandler,
        useExisting: UnknownErrorHandler,
        multi: true,
    },
    {
        provide: HttpErrorHandler,
        useExisting: BadGatewayHandler,
        multi: true,
    },
    {
        provide: HttpErrorHandler,
        useExisting: BadRequestHandler,
        multi: true,
    },
    {
        provide: HttpErrorHandler,
        useExisting: ConflictHandler,
        multi: true,
    },
    {
        provide: HttpErrorHandler,
        useExisting: ForbiddenHandler,
        multi: true,
    },
    {
        provide: HttpErrorHandler,
        useExisting: GatewayTimeoutHandler,
        multi: true,
    },
    {
        provide: HttpErrorHandler,
        useExisting: NotFoundHandler,
        multi: true,
    },
];
/** @type {?} */
export const httpErrorInterceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: HttpErrorInterceptor,
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7O0FBRS9ELE1BQU0sT0FBTyxhQUFhLEdBQWU7SUFDdkM7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxtQkFBbUI7UUFDaEMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsaUJBQWlCO1FBQzlCLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLGlCQUFpQjtRQUM5QixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxlQUFlO1FBQzVCLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLGdCQUFnQjtRQUM3QixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsZUFBZTtRQUM1QixLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0Y7O0FBRUQsTUFBTSxPQUFPLHFCQUFxQixHQUFlO0lBQy9DO1FBQ0UsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgSHR0cEVycm9ySW50ZXJjZXB0b3IgfSBmcm9tICcuL2h0dHAtZXJyb3IuaW50ZXJjZXB0b3InO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IFVua25vd25FcnJvckhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL3Vua25vd24tZXJyb3IuaGFuZGxlcic7XG5pbXBvcnQgeyBCYWRHYXRld2F5SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvYmFkLWdhdGV3YXkuaGFuZGxlcic7XG5pbXBvcnQgeyBCYWRSZXF1ZXN0SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvYmFkLXJlcXVlc3QuaGFuZGxlcic7XG5pbXBvcnQgeyBDb25mbGljdEhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2NvbmZsaWN0LmhhbmRsZXInO1xuaW1wb3J0IHsgRm9yYmlkZGVuSGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvZm9yYmlkZGVuLmhhbmRsZXInO1xuaW1wb3J0IHsgR2F0ZXdheVRpbWVvdXRIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9nYXRld2F5LXRpbWVvdXQuaGFuZGxlcic7XG5pbXBvcnQgeyBOb3RGb3VuZEhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL25vdC1mb3VuZC5oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IGVycm9ySGFuZGxlcnM6IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBVbmtub3duRXJyb3JIYW5kbGVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSHR0cEVycm9ySGFuZGxlcixcbiAgICB1c2VFeGlzdGluZzogQmFkR2F0ZXdheUhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBCYWRSZXF1ZXN0SGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IENvbmZsaWN0SGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IEZvcmJpZGRlbkhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBHYXRld2F5VGltZW91dEhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBOb3RGb3VuZEhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaHR0cEVycm9ySW50ZXJjZXB0b3JzOiBQcm92aWRlcltdID0gW1xuICB7XG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlQ2xhc3M6IEh0dHBFcnJvckludGVyY2VwdG9yLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcbiJdfQ==