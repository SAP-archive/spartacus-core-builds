import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import { Priority } from '../../../../util/applicable';
import * as ɵngcc0 from '@angular/core';
export declare class ConflictHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    handleError(): void;
    getPriority(): Priority;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ConflictHandler, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmxpY3QuaGFuZGxlci5kLnRzIiwic291cmNlcyI6WyJjb25mbGljdC5oYW5kbGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFHQTs7Ozs7QUFJQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4uL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5pbXBvcnQgeyBQcmlvcml0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvYXBwbGljYWJsZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBDb25mbGljdEhhbmRsZXIgZXh0ZW5kcyBIdHRwRXJyb3JIYW5kbGVyIHtcbiAgICByZXNwb25zZVN0YXR1czogSHR0cFJlc3BvbnNlU3RhdHVzO1xuICAgIGhhbmRsZUVycm9yKCk6IHZvaWQ7XG4gICAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHk7XG59XG4iXX0=