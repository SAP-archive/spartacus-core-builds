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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9nbG9iYWwtbWVzc2FnZS9odHRwLWludGVyY2VwdG9ycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsZ0JBQWdCLEVBQ2hCLHFCQUFxQixFQUNyQixnQkFBZ0IsRUFDaEIsMEJBQTBCLEVBQzFCLGVBQWUsRUFDZix3QkFBd0IsRUFDeEIsbUJBQW1CLEdBQ3BCLE1BQU0sa0JBQWtCLENBQUM7QUFDMUIsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFaEUsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFlO0lBQ3ZDO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsbUJBQW1CO1FBQ2hDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLGlCQUFpQjtRQUM5QixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxpQkFBaUI7UUFDOUIsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUsZUFBZTtRQUM1QixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxnQkFBZ0I7UUFDN0IsS0FBSyxFQUFFLElBQUk7S0FDWjtJQUNEO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLDBCQUEwQjtRQUN2QyxLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0Q7UUFDRSxPQUFPLEVBQUUsZ0JBQWdCO1FBQ3pCLFdBQVcsRUFBRSxlQUFlO1FBQzVCLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRDtRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsV0FBVyxFQUFFLHdCQUF3QjtRQUNyQyxLQUFLLEVBQUUsSUFBSTtLQUNaO0NBQ0YsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUFlO0lBQy9DO1FBQ0UsT0FBTyxFQUFFLGlCQUFpQjtRQUMxQixXQUFXLEVBQUUsb0JBQW9CO1FBQ2pDLEtBQUssRUFBRSxJQUFJO0tBQ1o7Q0FDRixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFRUUF9JTlRFUkNFUFRPUlMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQmFkR2F0ZXdheUhhbmRsZXIsXG4gIEJhZFJlcXVlc3RIYW5kbGVyLFxuICBDb25mbGljdEhhbmRsZXIsXG4gIEZvcmJpZGRlbkhhbmRsZXIsXG4gIEdhdGV3YXlUaW1lb3V0SGFuZGxlcixcbiAgSHR0cEVycm9ySGFuZGxlcixcbiAgSW50ZXJuYWxTZXJ2ZXJFcnJvckhhbmRsZXIsXG4gIE5vdEZvdW5kSGFuZGxlcixcbiAgVW5hdXRob3JpemVkRXJyb3JIYW5kbGVyLFxuICBVbmtub3duRXJyb3JIYW5kbGVyLFxufSBmcm9tICcuL2hhbmRsZXJzL2luZGV4JztcbmltcG9ydCB7IEh0dHBFcnJvckludGVyY2VwdG9yIH0gZnJvbSAnLi9odHRwLWVycm9yLmludGVyY2VwdG9yJztcblxuZXhwb3J0IGNvbnN0IGVycm9ySGFuZGxlcnM6IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBVbmtub3duRXJyb3JIYW5kbGVyLFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogSHR0cEVycm9ySGFuZGxlcixcbiAgICB1c2VFeGlzdGluZzogQmFkR2F0ZXdheUhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBCYWRSZXF1ZXN0SGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IENvbmZsaWN0SGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IEZvcmJpZGRlbkhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBHYXRld2F5VGltZW91dEhhbmRsZXIsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBwcm92aWRlOiBIdHRwRXJyb3JIYW5kbGVyLFxuICAgIHVzZUV4aXN0aW5nOiBJbnRlcm5hbFNlcnZlckVycm9ySGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IE5vdEZvdW5kSGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIHByb3ZpZGU6IEh0dHBFcnJvckhhbmRsZXIsXG4gICAgdXNlRXhpc3Rpbmc6IFVuYXV0aG9yaXplZEVycm9ySGFuZGxlcixcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBodHRwRXJyb3JJbnRlcmNlcHRvcnM6IFByb3ZpZGVyW10gPSBbXG4gIHtcbiAgICBwcm92aWRlOiBIVFRQX0lOVEVSQ0VQVE9SUyxcbiAgICB1c2VFeGlzdGluZzogSHR0cEVycm9ySW50ZXJjZXB0b3IsXG4gICAgbXVsdGk6IHRydWUsXG4gIH0sXG5dO1xuIl19