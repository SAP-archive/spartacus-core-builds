/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { GlobalMessageService } from '../../facade/global-message.service';
import { ServerConfig } from '../../../config/server-config/server-config';
import { HttpResponseStatus } from '../../models/response-status.model';
import { HttpErrorHandler } from './http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../../config/server-config/server-config";
import * as i2 from "../../facade/global-message.service";
export class UnknownErrorHandler extends HttpErrorHandler {
    /**
     * @param {?} config
     * @param {?} globalMessageService
     */
    constructor(config, globalMessageService) {
        super(globalMessageService);
        this.config = config;
        this.globalMessageService = globalMessageService;
        this.responseStatus = HttpResponseStatus.UNKNOWN;
    }
    /**
     * @return {?}
     */
    handleError() {
        if (!this.config.production) {
            console.warn(`Unknown http response error: ${this.responseStatus}`);
        }
    }
}
UnknownErrorHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
UnknownErrorHandler.ctorParameters = () => [
    { type: ServerConfig },
    { type: GlobalMessageService }
];
/** @nocollapse */ UnknownErrorHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function UnknownErrorHandler_Factory() { return new UnknownErrorHandler(i0.ɵɵinject(i1.ServerConfig), i0.ɵɵinject(i2.GlobalMessageService)); }, token: UnknownErrorHandler, providedIn: "root" });
if (false) {
    /** @type {?} */
    UnknownErrorHandler.prototype.responseStatus;
    /**
     * @type {?}
     * @private
     */
    UnknownErrorHandler.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    UnknownErrorHandler.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidW5rbm93bi1lcnJvci5oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2h0dHAtaW50ZXJjZXB0b3JzL2hhbmRsZXJzL3Vua25vd24tZXJyb3IuaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFLeEQsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGdCQUFnQjs7Ozs7SUFDdkQsWUFDVSxNQUFvQixFQUNsQixvQkFBMEM7UUFFcEQsS0FBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFIcEIsV0FBTSxHQUFOLE1BQU0sQ0FBYztRQUNsQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBSXRELG1CQUFjLEdBQUcsa0JBQWtCLENBQUMsT0FBTyxDQUFDO0lBRDVDLENBQUM7Ozs7SUFHRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0NBQWdDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFDO1NBQ3JFO0lBQ0gsQ0FBQzs7O1lBaEJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQU5RLFlBQVk7WUFEWixvQkFBb0I7Ozs7O0lBZTNCLDZDQUE0Qzs7Ozs7SUFMMUMscUNBQTRCOzs7OztJQUM1QixtREFBb0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL2ZhY2FkZS9nbG9iYWwtbWVzc2FnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFNlcnZlckNvbmZpZyB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9zZXJ2ZXItY29uZmlnL3NlcnZlci1jb25maWcnO1xuaW1wb3J0IHsgSHR0cFJlc3BvbnNlU3RhdHVzIH0gZnJvbSAnLi4vLi4vbW9kZWxzL3Jlc3BvbnNlLXN0YXR1cy5tb2RlbCc7XG5pbXBvcnQgeyBIdHRwRXJyb3JIYW5kbGVyIH0gZnJvbSAnLi9odHRwLWVycm9yLmhhbmRsZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVW5rbm93bkVycm9ySGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogU2VydmVyQ29uZmlnLFxuICAgIHByb3RlY3RlZCBnbG9iYWxNZXNzYWdlU2VydmljZTogR2xvYmFsTWVzc2FnZVNlcnZpY2VcbiAgKSB7XG4gICAgc3VwZXIoZ2xvYmFsTWVzc2FnZVNlcnZpY2UpO1xuICB9XG4gIHJlc3BvbnNlU3RhdHVzID0gSHR0cFJlc3BvbnNlU3RhdHVzLlVOS05PV047XG5cbiAgaGFuZGxlRXJyb3IoKSB7XG4gICAgaWYgKCF0aGlzLmNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgICBjb25zb2xlLndhcm4oYFVua25vd24gaHR0cCByZXNwb25zZSBlcnJvcjogJHt0aGlzLnJlc3BvbnNlU3RhdHVzfWApO1xuICAgIH1cbiAgfVxufVxuIl19