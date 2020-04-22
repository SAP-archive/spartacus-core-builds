import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import { Priority } from '../../../../util/applicable';
import * as ɵngcc0 from '@angular/core';
export declare class ForbiddenHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(): void;
    getPriority(): Priority;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ForbiddenHandler, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yYmlkZGVuLmhhbmRsZXIuZC50cyIsInNvdXJjZXMiOlsiZm9yYmlkZGVuLmhhbmRsZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQUdBOzs7OztBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi4vaHR0cC1lcnJvci5oYW5kbGVyJztcbmltcG9ydCB7IFByaW9yaXR5IH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9hcHBsaWNhYmxlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZvcmJpZGRlbkhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgICByZXNwb25zZVN0YXR1czogSHR0cFJlc3BvbnNlU3RhdHVzO1xuICAgIGhhbmRsZUVycm9yKCk6IHZvaWQ7XG4gICAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHk7XG59XG4iXX0=