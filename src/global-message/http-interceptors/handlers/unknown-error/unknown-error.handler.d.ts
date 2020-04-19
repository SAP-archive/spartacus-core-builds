import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import { Priority } from '../../../../util/handler';
/**
 * Unknown Error Handler works as an fallback, to handle errors that were
 * not handled by any other error handlers
 */
import * as ɵngcc0 from '@angular/core';
export declare class UnknownErrorHandler extends HttpErrorHandler {
    responseStatus: HttpResponseStatus;
    /**
     * hasMatch always returns true, to mach all errors
     */
    hasMatch(_errorResponse: any): boolean;
    handleError(): void;
    /**
     * Fallback priority assures that the handler is used as a last resort
     */
    getPriority(): Priority;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<UnknownErrorHandler, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1lcnJvci5oYW5kbGVyLmQudHMiLCJzb3VyY2VzIjpbInVua25vd24tZXJyb3IuaGFuZGxlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7QUFXQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4uL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5pbXBvcnQgeyBQcmlvcml0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvaGFuZGxlcic7XG4vKipcbiAqIFVua25vd24gRXJyb3IgSGFuZGxlciB3b3JrcyBhcyBhbiBmYWxsYmFjaywgdG8gaGFuZGxlIGVycm9ycyB0aGF0IHdlcmVcbiAqIG5vdCBoYW5kbGVkIGJ5IGFueSBvdGhlciBlcnJvciBoYW5kbGVyc1xuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBVbmtub3duRXJyb3JIYW5kbGVyIGV4dGVuZHMgSHR0cEVycm9ySGFuZGxlciB7XG4gICAgcmVzcG9uc2VTdGF0dXM6IEh0dHBSZXNwb25zZVN0YXR1cztcbiAgICAvKipcbiAgICAgKiBoYXNNYXRjaCBhbHdheXMgcmV0dXJucyB0cnVlLCB0byBtYWNoIGFsbCBlcnJvcnNcbiAgICAgKi9cbiAgICBoYXNNYXRjaChfZXJyb3JSZXNwb25zZTogYW55KTogYm9vbGVhbjtcbiAgICBoYW5kbGVFcnJvcigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIEZhbGxiYWNrIHByaW9yaXR5IGFzc3VyZXMgdGhhdCB0aGUgaGFuZGxlciBpcyB1c2VkIGFzIGEgbGFzdCByZXNvcnRcbiAgICAgKi9cbiAgICBnZXRQcmlvcml0eSgpOiBQcmlvcml0eTtcbn1cbiJdfQ==