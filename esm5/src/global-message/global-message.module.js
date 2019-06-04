/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { GlobalMessageService } from './facade/global-message.service';
import { httpErrorInterceptors, errorHandlers, } from './http-interceptors/index';
import { GlobalMessageStoreModule } from './store/global-message-store.module';
var GlobalMessageModule = /** @class */ (function () {
    function GlobalMessageModule() {
    }
    /**
     * @return {?}
     */
    GlobalMessageModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: GlobalMessageModule,
            providers: tslib_1.__spread(errorHandlers, httpErrorInterceptors),
        };
    };
    GlobalMessageModule.decorators = [
        { type: NgModule, args: [{
                    imports: [GlobalMessageStoreModule],
                    providers: [GlobalMessageService],
                },] }
    ];
    return GlobalMessageModule;
}());
export { GlobalMessageModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLW1lc3NhZ2UubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2dsb2JhbC1tZXNzYWdlL2dsb2JhbC1tZXNzYWdlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZFLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsYUFBYSxHQUNkLE1BQU0sMkJBQTJCLENBQUM7QUFDbkMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFL0U7SUFBQTtJQVdBLENBQUM7Ozs7SUFOUSwyQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLG1CQUFNLGFBQWEsRUFBSyxxQkFBcUIsQ0FBQztTQUN4RCxDQUFDO0lBQ0osQ0FBQzs7Z0JBVkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLHdCQUF3QixDQUFDO29CQUNuQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztpQkFDbEM7O0lBUUQsMEJBQUM7Q0FBQSxBQVhELElBV0M7U0FQWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBHbG9iYWxNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2dsb2JhbC1tZXNzYWdlLnNlcnZpY2UnO1xuaW1wb3J0IHtcbiAgaHR0cEVycm9ySW50ZXJjZXB0b3JzLFxuICBlcnJvckhhbmRsZXJzLFxufSBmcm9tICcuL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4JztcbmltcG9ydCB7IEdsb2JhbE1lc3NhZ2VTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvZ2xvYmFsLW1lc3NhZ2Utc3RvcmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0dsb2JhbE1lc3NhZ2VTdG9yZU1vZHVsZV0sXG4gIHByb3ZpZGVyczogW0dsb2JhbE1lc3NhZ2VTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgR2xvYmFsTWVzc2FnZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogR2xvYmFsTWVzc2FnZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLmVycm9ySGFuZGxlcnMsIC4uLmh0dHBFcnJvckludGVyY2VwdG9yc10sXG4gICAgfTtcbiAgfVxufVxuIl19