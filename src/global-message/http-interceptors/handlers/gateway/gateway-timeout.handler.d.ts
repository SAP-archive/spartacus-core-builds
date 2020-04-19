import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import { Priority } from '../../../../util/handler';
import * as ɵngcc0 from '@angular/core';
export declare class GatewayTimeoutHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(): void;
    getPriority(): Priority;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GatewayTimeoutHandler, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZXdheS10aW1lb3V0LmhhbmRsZXIuZC50cyIsInNvdXJjZXMiOlsiZ2F0ZXdheS10aW1lb3V0LmhhbmRsZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7OztBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi4vaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IFByaW9yaXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9oYW5kbGVyJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdhdGV3YXlUaW1lb3V0SGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICAgIHJlc3BvbnNlU3RhdHVzOiBIdHRwUmVzcG9uc2VTdGF0dXM7XG4gICAgaGFuZGxlRXJyb3IoKTogdm9pZDtcbiAgICBnZXRQcmlvcml0eSgpOiBQcmlvcml0eTtcbn1cbiJdfQ==