import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BadGatewayHandler, BadRequestHandler, ConflictHandler, ForbiddenHandler, GatewayTimeoutHandler, HttpErrorHandler, InternalServerErrorHandler, NotFoundHandler, UnauthorizedErrorHandler, UnknownErrorHandler, } from './handlers/index';
import { HttpErrorInterceptor } from './http-error.interceptor';
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
    {
        provide: HttpErrorHandler,
        useExisting: UnauthorizedErrorHandler,
        multi: true,
    },
];
export const httpErrorInterceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpErrorInterceptor,
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixpQkFBaUIsRUFDakIsZUFBZSxFQUNmLGdCQUFnQixFQUNoQixxQkFBcUIsRUFDckIsZ0JBQWdCLEVBQ2hCLDBCQUEwQixFQUMxQixlQUFlLEVBQ2Ysd0JBQXdCLEVBQ3hCLG1CQUFtQixHQUNwQixNQUFNLGtCQUFrQixDQUFDO0FBQzFCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWhFLE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBZTtJQUN2QztRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLG1CQUFtQjtRQUNoQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxpQkFBaUI7UUFDOUIsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsaUJBQWlCO1FBQzlCLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLGVBQWU7UUFDNUIsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsZ0JBQWdCO1FBQzdCLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSwwQkFBMEI7UUFDdkMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsZUFBZTtRQUM1QixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSx3QkFBd0I7UUFDckMsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FBZTtJQUMvQztRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEJhZEdhdGV3YXlIYW5kbGVyLFxuICBCYWRSZXF1ZXN0SGFuZGxlcixcbiAgQ29uZmxpY3RIYW5kbGVyLFxuICBGb3JiaWRkZW5IYW5kbGVyLFxuICBHYXRld2F5VGltZW91dEhhbmRsZXIsXG4gIEh0dHBFcnJvckhhbmRsZXIsXG4gIEludGVybmFsU2VydmVyRXJyb3JIYW5kbGVyLFxuICBOb3RGb3VuZEhhbmRsZXIsXG4gIFVuYXV0aG9yaXplZEVycm9ySGFuZGxlcixcbiAgVW5rbm93bkVycm9ySGFuZGxlcixcbn0gZnJvbSAnLi9oYW5kbGVycy9pbmRleCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JJbnRlcmNlcHRvciB9IGZyb20gJy4vaHR0cC1lcnJvci5pbnRlcmNlcHRvcic7XG5cbmV4cG9ydCBjb25zdCBlcnJvckhhbmRsZXJzOiBQcm92aWRlcltdID0gW1xuICB7XG4gICAgcHJvdmlkZTogSHR0cEVycm9ySGFuZGxlcixcbiAgICB1c2VFeGlzdGluZzogVW5rbm93bkVycm9ySGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IEJhZEdhdGV3YXlIYW5kbGVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSHR0cEVycm9ySGFuZGxlcixcbiAgICB1c2VFeGlzdGluZzogQmFkUmVxdWVzdEhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBDb25mbGljdEhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBGb3JiaWRkZW5IYW5kbGVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSHR0cEVycm9ySGFuZGxlcixcbiAgICB1c2VFeGlzdGluZzogR2F0ZXdheVRpbWVvdXRIYW5kbGVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSHR0cEVycm9ySGFuZGxlcixcbiAgICB1c2VFeGlzdGluZzogSW50ZXJuYWxTZXJ2ZXJFcnJvckhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBOb3RGb3VuZEhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBVbmF1dGhvcml6ZWRFcnJvckhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaHR0cEVycm9ySW50ZXJjZXB0b3JzOiBQcm92aWRlcltdID0gW1xuICB7XG4gICAgcHJvdmlkZTogSFRUUF9JTlRFUkNFUFRPUlMsXG4gICAgdXNlRXhpc3Rpbmc6IEh0dHBFcnJvckludGVyY2VwdG9yLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcbiJdfQ==