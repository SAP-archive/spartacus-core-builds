/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BadGatewayHandler } from './handlers/bad-gateway.handler';
import { BadRequestHandler } from './handlers/bad-request.handler';
import { ConflictHandler } from './handlers/conflict.handler';
import { ForbiddenHandler } from './handlers/forbidden.handler';
import { GatewayTimeoutHandler } from './handlers/gateway-timeout.handler';
import { HttpErrorHandler } from './handlers/http-error.handler';
import { InternalServerErrorHandler } from './handlers/internal-server-error.handler';
import { NotFoundHandler } from './handlers/not-found.handler';
import { UnknownErrorHandler } from './handlers/unknown-error.handler';
import { HttpErrorInterceptor } from './http-error.interceptor';
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
        useExisting: InternalServerErrorHandler,
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
        useExisting: HttpErrorInterceptor,
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXpELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRWhFLE1BQU0sT0FBTyxhQUFhLEdBQWU7SUFDdkM7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxtQkFBbUI7UUFDaEMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsaUJBQWlCO1FBQzlCLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLGlCQUFpQjtRQUM5QixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxlQUFlO1FBQzVCLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLGdCQUFnQjtRQUM3QixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsMEJBQTBCO1FBQ3ZDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLGVBQWU7UUFDNUIsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGOztBQUVELE1BQU0sT0FBTyxxQkFBcUIsR0FBZTtJQUMvQztRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIVFRQX0lOVEVSQ0VQVE9SUyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCYWRHYXRld2F5SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvYmFkLWdhdGV3YXkuaGFuZGxlcic7XG5pbXBvcnQgeyBCYWRSZXF1ZXN0SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvYmFkLXJlcXVlc3QuaGFuZGxlcic7XG5pbXBvcnQgeyBDb25mbGljdEhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2NvbmZsaWN0LmhhbmRsZXInO1xuaW1wb3J0IHsgRm9yYmlkZGVuSGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvZm9yYmlkZGVuLmhhbmRsZXInO1xuaW1wb3J0IHsgR2F0ZXdheVRpbWVvdXRIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9nYXRld2F5LXRpbWVvdXQuaGFuZGxlcic7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9odHRwLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgSW50ZXJuYWxTZXJ2ZXJFcnJvckhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2ludGVybmFsLXNlcnZlci1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IE5vdEZvdW5kSGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvbm90LWZvdW5kLmhhbmRsZXInO1xuaW1wb3J0IHsgVW5rbm93bkVycm9ySGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvdW5rbm93bi1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IEh0dHBFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi9odHRwLWVycm9yLmludGVyY2VwdG9yJztcblxuZXhwb3J0IGNvbnN0IGVycm9ySGFuZGxlcnM6IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBVbmtub3duRXJyb3JIYW5kbGVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSHR0cEVycm9ySGFuZGxlcixcbiAgICB1c2VFeGlzdGluZzogQmFkR2F0ZXdheUhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBCYWRSZXF1ZXN0SGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IENvbmZsaWN0SGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IEZvcmJpZGRlbkhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBHYXRld2F5VGltZW91dEhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBJbnRlcm5hbFNlcnZlckVycm9ySGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IE5vdEZvdW5kSGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBodHRwRXJyb3JJbnRlcmNlcHRvcnM6IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VFeGlzdGluZzogSHR0cEVycm9ySW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuIl19