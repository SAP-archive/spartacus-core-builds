import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { GlobalMessageType } from '../../../models/global-message.model';
import { HttpResponseStatus } from '../../../models/response-status.model';
import { HttpErrorHandler } from '../http-error.handler';
import * as i0 from "@angular/core";
import * as i1 from "../../../facade/global-message.service";
var InternalServerErrorHandler = /** @class */ (function (_super) {
    __extends(InternalServerErrorHandler, _super);
    function InternalServerErrorHandler() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.responseStatus = HttpResponseStatus.INTERNAL_SERVER_ERROR;
        return _this;
    }
    InternalServerErrorHandler.prototype.handleError = function () {
        this.globalMessageService.add({ key: 'httpHandlers.internalServerError' }, GlobalMessageType.MSG_TYPE_ERROR);
    };
    InternalServerErrorHandler.prototype.getPriority = function () {
        return -10 /* LOW */;
    };
    InternalServerErrorHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function InternalServerErrorHandler_Factory() { return new InternalServerErrorHandler(i0.ɵɵinject(i1.GlobalMessageService)); }, token: InternalServerErrorHandler, providedIn: "root" });
    InternalServerErrorHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], InternalServerErrorHandler);
    return InternalServerErrorHandler;
}(HttpErrorHandler));
export { InternalServerErrorHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtc2VydmVyLmhhbmRsZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvZ2xvYmFsLW1lc3NhZ2UvaHR0cC1pbnRlcmNlcHRvcnMvaGFuZGxlcnMvaW50ZXJuYWwtc2VydmVyL2ludGVybmFsLXNlcnZlci5oYW5kbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7QUFNekQ7SUFBZ0QsOENBQWdCO0lBQWhFO1FBQUEscUVBYUM7UUFaQyxvQkFBYyxHQUFHLGtCQUFrQixDQUFDLHFCQUFxQixDQUFDOztLQVkzRDtJQVZDLGdEQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQixFQUFFLEdBQUcsRUFBRSxrQ0FBa0MsRUFBRSxFQUMzQyxpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7SUFDSixDQUFDO0lBRUQsZ0RBQVcsR0FBWDtRQUNFLHFCQUFvQjtJQUN0QixDQUFDOztJQVpVLDBCQUEwQjtRQUh0QyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csMEJBQTBCLENBYXRDO3FDQXRCRDtDQXNCQyxBQWJELENBQWdELGdCQUFnQixHQWEvRDtTQWJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL2dsb2JhbC1tZXNzYWdlLm1vZGVsJztcbmltcG9ydCB7IEh0dHBSZXNwb25zZVN0YXR1cyB9IGZyb20gJy4uLy4uLy4uL21vZGVscy9yZXNwb25zZS1zdGF0dXMubW9kZWwnO1xuaW1wb3J0IHsgSHR0cEVycm9ySGFuZGxlciB9IGZyb20gJy4uL2h0dHAtZXJyb3IuaGFuZGxlcic7XG5pbXBvcnQgeyBQcmlvcml0eSB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvaGFuZGxlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBJbnRlcm5hbFNlcnZlckVycm9ySGFuZGxlciBleHRlbmRzIEh0dHBFcnJvckhhbmRsZXIge1xuICByZXNwb25zZVN0YXR1cyA9IEh0dHBSZXNwb25zZVN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1I7XG5cbiAgaGFuZGxlRXJyb3IoKSB7XG4gICAgdGhpcy5nbG9iYWxNZXNzYWdlU2VydmljZS5hZGQoXG4gICAgICB7IGtleTogJ2h0dHBIYW5kbGVycy5pbnRlcm5hbFNlcnZlckVycm9yJyB9LFxuICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICApO1xuICB9XG5cbiAgZ2V0UHJpb3JpdHkoKTogUHJpb3JpdHkge1xuICAgIHJldHVybiBQcmlvcml0eS5MT1c7XG4gIH1cbn1cbiJdfQ==