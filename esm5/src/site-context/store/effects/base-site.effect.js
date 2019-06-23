/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { SiteConnector } from '../../connectors/site.connector';
import * as actions from '../actions/base-site.action';
var BaseSiteEffects = /** @class */ (function () {
    function BaseSiteEffects(actions$, siteConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadBaseSite$ = this.actions$.pipe(ofType(actions.LOAD_BASE_SITE), exhaustMap((/**
         * @return {?}
         */
        function () {
            return _this.siteConnector.getBaseSite().pipe(map((/**
             * @param {?} baseSite
             * @return {?}
             */
            function (baseSite) { return new actions.LoadBaseSiteSuccess(baseSite); })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new actions.LoadBaseSiteFail(makeErrorSerializable(error)));
            })));
        })));
    }
    BaseSiteEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    BaseSiteEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], BaseSiteEffects.prototype, "loadBaseSite$", void 0);
    return BaseSiteEffects;
}());
export { BaseSiteEffects };
if (false) {
    /** @type {?} */
    BaseSiteEffects.prototype.loadBaseSite$;
    /**
     * @type {?}
     * @private
     */
    BaseSiteEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    BaseSiteEffects.prototype.siteConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvZWZmZWN0cy9iYXNlLXNpdGUuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sS0FBSyxPQUFPLE1BQU0sNkJBQTZCLENBQUM7QUFFdkQ7SUFpQkUseUJBQ1UsUUFBaUIsRUFDakIsYUFBNEI7UUFGdEMsaUJBR0k7UUFGTSxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBaEJ0QyxrQkFBYSxHQUVULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxFQUM5QixVQUFVOzs7UUFBQztZQUNULE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQzFDLEdBQUc7Ozs7WUFBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLElBQUksT0FBTyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxFQUF6QyxDQUF5QyxFQUFDLEVBQzFELFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUE5RCxDQUE4RCxFQUMvRCxDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBcEJMLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFJUCxhQUFhOztJQU1wQjtRQURDLE1BQU0sRUFBRTswQ0FDTSxVQUFVOzBEQVl2QjtJQU1KLHNCQUFDO0NBQUEsQUFyQkQsSUFxQkM7U0FwQlksZUFBZTs7O0lBQzFCLHdDQWFFOzs7OztJQUdBLG1DQUF5Qjs7Ozs7SUFDekIsd0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBleGhhdXN0TWFwLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2Jhc2Utc2l0ZS5hY3Rpb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFzZVNpdGVFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRCYXNlU2l0ZSQ6IE9ic2VydmFibGU8XG4gICAgYWN0aW9ucy5Mb2FkQmFzZVNpdGVTdWNjZXNzIHwgYWN0aW9ucy5Mb2FkQmFzZVNpdGVGYWlsXG4gID4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGFjdGlvbnMuTE9BRF9CQVNFX1NJVEUpLFxuICAgIGV4aGF1c3RNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMuc2l0ZUNvbm5lY3Rvci5nZXRCYXNlU2l0ZSgpLnBpcGUoXG4gICAgICAgIG1hcChiYXNlU2l0ZSA9PiBuZXcgYWN0aW9ucy5Mb2FkQmFzZVNpdGVTdWNjZXNzKGJhc2VTaXRlKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihuZXcgYWN0aW9ucy5Mb2FkQmFzZVNpdGVGYWlsKG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I6IFNpdGVDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19