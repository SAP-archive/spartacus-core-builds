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
export var errorHandlers = [
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
export var httpErrorInterceptors = [
    {
        provide: HTTP_INTERCEPTORS,
        useExisting: HttpErrorInterceptor,
        multi: true,
    },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFekQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDbkUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQzlELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUN2RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVoRSxNQUFNLENBQUMsSUFBTSxhQUFhLEdBQWU7SUFDdkM7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxtQkFBbUI7UUFDaEMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsaUJBQWlCO1FBQzlCLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLGlCQUFpQjtRQUM5QixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxlQUFlO1FBQzVCLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLGdCQUFnQjtRQUM3QixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxxQkFBcUI7UUFDbEMsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsMEJBQTBCO1FBQ3ZDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLGVBQWU7UUFDNUIsS0FBSyxFQUFFLElBQUk7S0FDWjtDQUNGLENBQUM7QUFFRixNQUFNLENBQUMsSUFBTSxxQkFBcUIsR0FBZTtJQUMvQztRQUNFLE9BQU8sRUFBRSxpQkFBaUI7UUFDMUIsV0FBVyxFQUFFLG9CQUFvQjtRQUNqQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEhUVFBfSU5URVJDRVBUT1JTIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJhZEdhdGV3YXlIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9iYWQtZ2F0ZXdheS5oYW5kbGVyJztcbmltcG9ydCB7IEJhZFJlcXVlc3RIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9iYWQtcmVxdWVzdC5oYW5kbGVyJztcbmltcG9ydCB7IENvbmZsaWN0SGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvY29uZmxpY3QuaGFuZGxlcic7XG5pbXBvcnQgeyBGb3JiaWRkZW5IYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9mb3JiaWRkZW4uaGFuZGxlcic7XG5pbXBvcnQgeyBHYXRld2F5VGltZW91dEhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2dhdGV3YXktdGltZW91dC5oYW5kbGVyJztcbmltcG9ydCB7IEh0dHBFcnJvckhhbmRsZXIgfSBmcm9tICcuL2hhbmRsZXJzL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5pbXBvcnQgeyBJbnRlcm5hbFNlcnZlckVycm9ySGFuZGxlciB9IGZyb20gJy4vaGFuZGxlcnMvaW50ZXJuYWwtc2VydmVyLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgTm90Rm91bmRIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy9ub3QtZm91bmQuaGFuZGxlcic7XG5pbXBvcnQgeyBVbmtub3duRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9oYW5kbGVycy91bmtub3duLWVycm9yLmhhbmRsZXInO1xuaW1wb3J0IHsgSHR0cEVycm9ySW50ZXJjZXB0b3IgfSBmcm9tICcuL2h0dHAtZXJyb3IuaW50ZXJjZXB0b3InO1xuXG5leHBvcnQgY29uc3QgZXJyb3JIYW5kbGVyczogUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IFVua25vd25FcnJvckhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBCYWRHYXRld2F5SGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IEJhZFJlcXVlc3RIYW5kbGVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSHR0cEVycm9ySGFuZGxlcixcbiAgICB1c2VFeGlzdGluZzogQ29uZmxpY3RIYW5kbGVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSHR0cEVycm9ySGFuZGxlcixcbiAgICB1c2VFeGlzdGluZzogRm9yYmlkZGVuSGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IEdhdGV3YXlUaW1lb3V0SGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IEludGVybmFsU2VydmVyRXJyb3JIYW5kbGVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSHR0cEVycm9ySGFuZGxlcixcbiAgICB1c2VFeGlzdGluZzogTm90Rm91bmRIYW5kbGVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGh0dHBFcnJvckludGVyY2VwdG9yczogUHJvdmlkZXJbXSA9IFtcbiAge1xuICAgIHByb3ZpZGU6IEhUVFBfSU5URVJDRVBUT1JTLFxuICAgIHVzZUV4aXN0aW5nOiBIdHRwRXJyb3JJbnRlcmNlcHRvcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG4iXX0=