import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import { Priority } from '../../../../util/applicable';
import * as ɵngcc0 from '@angular/core';
export declare class InternalServerErrorHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(): void;
    getPriority(): Priority;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<InternalServerErrorHandler, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtc2VydmVyLmhhbmRsZXIuZC50cyIsInNvdXJjZXMiOlsiaW50ZXJuYWwtc2VydmVyLmhhbmRsZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7OztBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi4vaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IFByaW9yaXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9hcHBsaWNhYmxlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEludGVybmFsU2VydmVyRXJyb3JIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gICAgcmVzcG9uc2VTdGF0dXM6IEh0dHBSZXNwb25zZVN0YXR1cztcbiAgICBoYW5kbGVFcnJvcigpOiB2b2lkO1xuICAgIGdldFByaW9yaXR5KCk6IFByaW9yaXR5O1xufVxuIl19