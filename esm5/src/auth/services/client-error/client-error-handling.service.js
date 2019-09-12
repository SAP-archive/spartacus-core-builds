/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { switchMap, take } from 'rxjs/operators';
import { AuthService } from '../../facade/auth.service';
var ClientErrorHandlingService = /** @class */ (function () {
    function ClientErrorHandlingService(authService) {
        this.authService = authService;
    }
    /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    ClientErrorHandlingService.prototype.handleExpiredClientToken = /**
     * @param {?} request
     * @param {?} next
     * @return {?}
     */
    function (request, next) {
        var _this = this;
        return this.authService.refreshClientToken().pipe(take(1), switchMap((/**
         * @param {?} token
         * @return {?}
         */
        function (token) {
            return next.handle(_this.createNewRequestWithNewToken(request, token));
        })));
    };
    /**
     * @protected
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    ClientErrorHandlingService.prototype.createNewRequestWithNewToken = /**
     * @protected
     * @param {?} request
     * @param {?} token
     * @return {?}
     */
    function (request, token) {
        request = request.clone({
            setHeaders: {
                Authorization: token.token_type + " " + token.access_token,
            },
        });
        return request;
    };
    ClientErrorHandlingService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientErrorHandlingService.ctorParameters = function () { return [
        { type: AuthService }
    ]; };
    return ClientErrorHandlingService;
}());
export { ClientErrorHandlingService };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    ClientErrorHandlingService.prototype.authService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zZXJ2aWNlcy9jbGllbnQtZXJyb3IvY2xpZW50LWVycm9yLWhhbmRsaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFHeEQ7SUFFRSxvQ0FBc0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBRyxDQUFDOzs7Ozs7SUFFM0MsNkRBQXdCOzs7OztJQUEvQixVQUNFLE9BQXlCLEVBQ3pCLElBQWlCO1FBRm5CLGlCQVVDO1FBTkMsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixFQUFFLENBQUMsSUFBSSxDQUMvQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQ1AsU0FBUzs7OztRQUFDLFVBQUMsS0FBa0I7WUFDM0IsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN4RSxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7OztJQUVTLGlFQUE0Qjs7Ozs7O0lBQXRDLFVBQ0UsT0FBeUIsRUFDekIsS0FBa0I7UUFFbEIsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdEIsVUFBVSxFQUFFO2dCQUNWLGFBQWEsRUFBSyxLQUFLLENBQUMsVUFBVSxTQUFJLEtBQUssQ0FBQyxZQUFjO2FBQzNEO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Z0JBMUJGLFVBQVU7Ozs7Z0JBSEYsV0FBVzs7SUE4QnBCLGlDQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0ExQlksMEJBQTBCOzs7Ozs7SUFDekIsaURBQWtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cFJlcXVlc3QsIEh0dHBIYW5kbGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vZmFjYWRlL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBDbGllbnRUb2tlbiB9IGZyb20gJy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbGllbnRFcnJvckhhbmRsaW5nU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpIHt9XG5cbiAgcHVibGljIGhhbmRsZUV4cGlyZWRDbGllbnRUb2tlbihcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIG5leHQ6IEh0dHBIYW5kbGVyXG4gICk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UucmVmcmVzaENsaWVudFRva2VuKCkucGlwZShcbiAgICAgIHRha2UoMSksXG4gICAgICBzd2l0Y2hNYXAoKHRva2VuOiBDbGllbnRUb2tlbikgPT4ge1xuICAgICAgICByZXR1cm4gbmV4dC5oYW5kbGUodGhpcy5jcmVhdGVOZXdSZXF1ZXN0V2l0aE5ld1Rva2VuKHJlcXVlc3QsIHRva2VuKSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlTmV3UmVxdWVzdFdpdGhOZXdUb2tlbihcbiAgICByZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+LFxuICAgIHRva2VuOiBDbGllbnRUb2tlblxuICApOiBIdHRwUmVxdWVzdDxhbnk+IHtcbiAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICBzZXRIZWFkZXJzOiB7XG4gICAgICAgIEF1dGhvcml6YXRpb246IGAke3Rva2VuLnRva2VuX3R5cGV9ICR7dG9rZW4uYWNjZXNzX3Rva2VufWAsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiByZXF1ZXN0O1xuICB9XG59XG4iXX0=