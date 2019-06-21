/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
import { ClientAuthenticationTokenService } from './../../services/client-authentication/client-authentication-token.service';
import * as fromActions from './../actions';
var ClientTokenEffect = /** @class */ (function () {
    function ClientTokenEffect(actions$, clientAuthenticationTokenService) {
        var _this = this;
        this.actions$ = actions$;
        this.clientAuthenticationTokenService = clientAuthenticationTokenService;
        this.loadClientToken$ = this.actions$.pipe(ofType(fromActions.LOAD_CLIENT_TOKEN), exhaustMap((/**
         * @return {?}
         */
        function () {
            return _this.clientAuthenticationTokenService
                .loadClientAuthenticationToken()
                .pipe(map((/**
             * @param {?} token
             * @return {?}
             */
            function (token) {
                return new fromActions.LoadClientTokenSuccess(token);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new fromActions.LoadClientTokenFail(makeHttpErrorSerializable(error)));
            })));
        })));
    }
    ClientTokenEffect.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ClientTokenEffect.ctorParameters = function () { return [
        { type: Actions },
        { type: ClientAuthenticationTokenService }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], ClientTokenEffect.prototype, "loadClientToken$", void 0);
    return ClientTokenEffect;
}());
export { ClientTokenEffect };
if (false) {
    /** @type {?} */
    ClientTokenEffect.prototype.loadClientToken$;
    /**
     * @type {?}
     * @private
     */
    ClientTokenEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ClientTokenEffect.prototype.clientAuthenticationTokenService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LXRva2VuLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hdXRoL3N0b3JlL2VmZmVjdHMvY2xpZW50LXRva2VuLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRzlFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLDRFQUE0RSxDQUFDO0FBQzlILE9BQU8sS0FBSyxXQUFXLE1BQU0sY0FBYyxDQUFDO0FBRTVDO0lBdUJFLDJCQUNVLFFBQWlCLEVBQ2pCLGdDQUFrRTtRQUY1RSxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUNBQWdDLEdBQWhDLGdDQUFnQyxDQUFrQztRQXRCNUUscUJBQWdCLEdBQWtDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNsRSxNQUFNLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLEVBQ3JDLFVBQVU7OztRQUFDO1lBQ1QsT0FBTyxLQUFJLENBQUMsZ0NBQWdDO2lCQUN6Qyw2QkFBNkIsRUFBRTtpQkFDL0IsSUFBSSxDQUNILEdBQUc7Ozs7WUFBQyxVQUFDLEtBQWtCO2dCQUNyQixPQUFPLElBQUksV0FBVyxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3ZELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQ0EsSUFBSSxXQUFXLENBQUMsbUJBQW1CLENBQ2pDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUNqQyxDQUNGO1lBSkQsQ0FJQyxFQUNGLENBQ0YsQ0FBQztRQUNOLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOztnQkExQkwsVUFBVTs7OztnQkFURixPQUFPO2dCQU1QLGdDQUFnQzs7SUFNdkM7UUFEQyxNQUFNLEVBQUU7MENBQ1MsVUFBVTsrREFrQjFCO0lBTUosd0JBQUM7Q0FBQSxBQTNCRCxJQTJCQztTQTFCWSxpQkFBaUI7OztJQUM1Qiw2Q0FtQkU7Ozs7O0lBR0EscUNBQXlCOzs7OztJQUN6Qiw2REFBMEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW5BY3Rpb24gfSBmcm9tICcuLi9hY3Rpb25zL2NsaWVudC10b2tlbi5hY3Rpb24nO1xuaW1wb3J0IHsgQ2xpZW50VG9rZW4gfSBmcm9tICcuLy4uLy4uL21vZGVscy90b2tlbi10eXBlcy5tb2RlbCc7XG5pbXBvcnQgeyBDbGllbnRBdXRoZW50aWNhdGlvblRva2VuU2VydmljZSB9IGZyb20gJy4vLi4vLi4vc2VydmljZXMvY2xpZW50LWF1dGhlbnRpY2F0aW9uL2NsaWVudC1hdXRoZW50aWNhdGlvbi10b2tlbi5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4vLi4vYWN0aW9ucyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDbGllbnRUb2tlbkVmZmVjdCB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQ2xpZW50VG9rZW4kOiBPYnNlcnZhYmxlPENsaWVudFRva2VuQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbnMuTE9BRF9DTElFTlRfVE9LRU4pLFxuICAgIGV4aGF1c3RNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuY2xpZW50QXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2VcbiAgICAgICAgLmxvYWRDbGllbnRBdXRoZW50aWNhdGlvblRva2VuKClcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgbWFwKCh0b2tlbjogQ2xpZW50VG9rZW4pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbnMuTG9hZENsaWVudFRva2VuU3VjY2Vzcyh0b2tlbik7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBmcm9tQWN0aW9ucy5Mb2FkQ2xpZW50VG9rZW5GYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VIdHRwRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgY2xpZW50QXV0aGVudGljYXRpb25Ub2tlblNlcnZpY2U6IENsaWVudEF1dGhlbnRpY2F0aW9uVG9rZW5TZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==