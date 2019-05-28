/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, exhaustMap } from 'rxjs/operators';
import * as actions from '../actions/base-site.action';
import { SiteConnector } from '../../connectors/site.connector';
var BaseSiteEffects = /** @class */ (function () {
    function BaseSiteEffects(actions$, siteConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadBaseSite$ = this.actions$.pipe(ofType(actions.LOAD_BASE_SITE), exhaustMap(function () {
            return _this.siteConnector.getBaseSite().pipe(map(function (baseSite) { return new actions.LoadBaseSiteSuccess(baseSite); }), catchError(function (error) { return of(new actions.LoadBaseSiteFail(error)); }));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvZWZmZWN0cy9iYXNlLXNpdGUuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0QsT0FBTyxLQUFLLE9BQU8sTUFBTSw2QkFBNkIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFaEU7SUFhRSx5QkFDVSxRQUFpQixFQUNqQixhQUE0QjtRQUZ0QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFadEMsa0JBQWEsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2pELE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQzlCLFVBQVUsQ0FBQztZQUNULE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQzFDLEdBQUcsQ0FBQyxVQUFBLFFBQVEsSUFBSSxPQUFBLElBQUksT0FBTyxDQUFDLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxFQUF6QyxDQUF5QyxDQUFDLEVBQzFELFVBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUF2QyxDQUF1QyxDQUFDLENBQzdELENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBS0MsQ0FBQzs7Z0JBaEJMLFVBQVU7Ozs7Z0JBTk0sT0FBTztnQkFJZixhQUFhOztJQUtwQjtRQURDLE1BQU0sRUFBRTswQ0FDTSxVQUFVOzBEQVF2QjtJQU1KLHNCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FoQlksZUFBZTs7O0lBQzFCLHdDQVNFOzs7OztJQUdBLG1DQUF5Qjs7Ozs7SUFDekIsd0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IG1hcCwgY2F0Y2hFcnJvciwgZXhoYXVzdE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zL2Jhc2Utc2l0ZS5hY3Rpb24nO1xuaW1wb3J0IHsgU2l0ZUNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvc2l0ZS5jb25uZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQmFzZVNpdGVFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRCYXNlU2l0ZSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoYWN0aW9ucy5MT0FEX0JBU0VfU0lURSksXG4gICAgZXhoYXVzdE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zaXRlQ29ubmVjdG9yLmdldEJhc2VTaXRlKCkucGlwZShcbiAgICAgICAgbWFwKGJhc2VTaXRlID0+IG5ldyBhY3Rpb25zLkxvYWRCYXNlU2l0ZVN1Y2Nlc3MoYmFzZVNpdGUpKSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgYWN0aW9ucy5Mb2FkQmFzZVNpdGVGYWlsKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHNpdGVDb25uZWN0b3I6IFNpdGVDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19