/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, catchError, tap, exhaustMap } from 'rxjs/operators';
import * as actions from '../actions/languages.action';
import { WindowRef } from '../../../window/window-ref';
import { SiteConnector } from '../../connectors/site.connector';
var LanguagesEffects = /** @class */ (function () {
    function LanguagesEffects(actions$, siteConnector, winRef) {
        var _this = this;
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.winRef = winRef;
        this.loadLanguages$ = this.actions$.pipe(ofType(actions.LOAD_LANGUAGES), exhaustMap(function () {
            return _this.siteConnector.getLanguages().pipe(map(function (languages) { return new actions.LoadLanguagesSuccess(languages); }), catchError(function (error) { return of(new actions.LoadLanguagesFail(error)); }));
        }));
        this.activateLanguage$ = this.actions$.pipe(ofType(actions.SET_ACTIVE_LANGUAGE), tap(function (action) {
            if (_this.winRef.sessionStorage) {
                _this.winRef.sessionStorage.setItem('language', action.payload);
            }
        }), map(function () { return new actions.LanguageChange(); }));
    }
    LanguagesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    LanguagesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: SiteConnector },
        { type: WindowRef }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], LanguagesEffects.prototype, "loadLanguages$", void 0);
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], LanguagesEffects.prototype, "activateLanguage$", void 0);
    return LanguagesEffects;
}());
export { LanguagesEffects };
if (false) {
    /** @type {?} */
    LanguagesEffects.prototype.loadLanguages$;
    /** @type {?} */
    LanguagesEffects.prototype.activateLanguage$;
    /**
     * @type {?}
     * @private
     */
    LanguagesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    LanguagesEffects.prototype.siteConnector;
    /**
     * @type {?}
     * @private
     */
    LanguagesEffects.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvZWZmZWN0cy9sYW5ndWFnZXMuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWxFLE9BQU8sS0FBSyxPQUFPLE1BQU0sNkJBQTZCLENBQUM7QUFDdkQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVoRTtJQXdCRSwwQkFDVSxRQUFpQixFQUNqQixhQUE0QixFQUM1QixNQUFpQjtRQUgzQixpQkFJSTtRQUhNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQXhCM0IsbUJBQWMsR0FBb0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2xELE1BQU0sQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQzlCLFVBQVUsQ0FBQztZQUNULE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQzNDLEdBQUcsQ0FBQyxVQUFBLFNBQVMsSUFBSSxPQUFBLElBQUksT0FBTyxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxFQUEzQyxDQUEyQyxDQUFDLEVBQzdELFVBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQzlELENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO1FBR0Ysc0JBQWlCLEdBQW9CLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNyRCxNQUFNLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLEVBQ25DLEdBQUcsQ0FBQyxVQUFDLE1BQWlDO1lBQ3BDLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUU7Z0JBQzlCLEtBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2hFO1FBQ0gsQ0FBQyxDQUFDLEVBQ0YsR0FBRyxDQUFDLGNBQU0sT0FBQSxJQUFJLE9BQU8sQ0FBQyxjQUFjLEVBQUUsRUFBNUIsQ0FBNEIsQ0FBQyxDQUN4QyxDQUFDO0lBTUMsQ0FBQzs7Z0JBNUJMLFVBQVU7Ozs7Z0JBUE0sT0FBTztnQkFLZixhQUFhO2dCQURiLFNBQVM7O0lBTWhCO1FBREMsTUFBTSxFQUFFOzBDQUNPLFVBQVU7NERBUXhCO0lBR0Y7UUFEQyxNQUFNLEVBQUU7MENBQ1UsVUFBVTsrREFRM0I7SUFPSix1QkFBQztDQUFBLEFBN0JELElBNkJDO1NBNUJZLGdCQUFnQjs7O0lBQzNCLDBDQVNFOztJQUVGLDZDQVNFOzs7OztJQUdBLG9DQUF5Qjs7Ozs7SUFDekIseUNBQW9DOzs7OztJQUNwQyxrQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBFZmZlY3QsIEFjdGlvbnMsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgbWFwLCBjYXRjaEVycm9yLCB0YXAsIGV4aGF1c3RNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy9sYW5ndWFnZXMuYWN0aW9uJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFNpdGVDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3NpdGUuY29ubmVjdG9yJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIExhbmd1YWdlc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZExhbmd1YWdlcyQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoYWN0aW9ucy5MT0FEX0xBTkdVQUdFUyksXG4gICAgZXhoYXVzdE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5zaXRlQ29ubmVjdG9yLmdldExhbmd1YWdlcygpLnBpcGUoXG4gICAgICAgIG1hcChsYW5ndWFnZXMgPT4gbmV3IGFjdGlvbnMuTG9hZExhbmd1YWdlc1N1Y2Nlc3MobGFuZ3VhZ2VzKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGFjdGlvbnMuTG9hZExhbmd1YWdlc0ZhaWwoZXJyb3IpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBARWZmZWN0KClcbiAgYWN0aXZhdGVMYW5ndWFnZSQ6IE9ic2VydmFibGU8YW55PiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoYWN0aW9ucy5TRVRfQUNUSVZFX0xBTkdVQUdFKSxcbiAgICB0YXAoKGFjdGlvbjogYWN0aW9ucy5TZXRBY3RpdmVMYW5ndWFnZSkgPT4ge1xuICAgICAgaWYgKHRoaXMud2luUmVmLnNlc3Npb25TdG9yYWdlKSB7XG4gICAgICAgIHRoaXMud2luUmVmLnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2xhbmd1YWdlJywgYWN0aW9uLnBheWxvYWQpO1xuICAgICAgfVxuICAgIH0pLFxuICAgIG1hcCgoKSA9PiBuZXcgYWN0aW9ucy5MYW5ndWFnZUNoYW5nZSgpKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yLFxuICAgIHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7fVxufVxuIl19