/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as fromAction from '../actions/titles.action';
import { UserConnector } from '../../connectors/user/user.connector';
var TitlesEffects = /** @class */ (function () {
    function TitlesEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.loadTitles$ = this.actions$.pipe(ofType(fromAction.LOAD_TITLES), switchMap(function () {
            return _this.userAccountConnector.getTitles().pipe(map(function (titles) {
                /** @type {?} */
                var sortedTitles = _this.sortTitles(titles);
                return new fromAction.LoadTitlesSuccess(sortedTitles);
            }), catchError(function (error) { return of(new fromAction.LoadTitlesFail(error)); }));
        }));
    }
    /**
     * @private
     * @param {?} titles
     * @return {?}
     */
    TitlesEffects.prototype.sortTitles = /**
     * @private
     * @param {?} titles
     * @return {?}
     */
    function (titles) {
        /** @type {?} */
        var drTitle = { code: 'dr', name: 'Dr.' };
        /** @type {?} */
        var revTitle = { code: 'rev', name: 'Rev.' };
        /** @type {?} */
        var filteredTitles = titles.filter(function (t) { return t.code !== 'dr' && t.code !== 'rev'; });
        /** @type {?} */
        var sortedTitles = tslib_1.__spread(filteredTitles, [drTitle, revTitle]);
        return sortedTitles;
    };
    TitlesEffects.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    TitlesEffects.ctorParameters = function () { return [
        { type: Actions },
        { type: UserConnector }
    ]; };
    tslib_1.__decorate([
        Effect(),
        tslib_1.__metadata("design:type", Observable)
    ], TitlesEffects.prototype, "loadTitles$", void 0);
    return TitlesEffects;
}());
export { TitlesEffects };
if (false) {
    /** @type {?} */
    TitlesEffects.prototype.loadTitles$;
    /**
     * @type {?}
     * @private
     */
    TitlesEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    TitlesEffects.prototype.userAccountConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdGl0bGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sS0FBSyxVQUFVLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBRXJFO0lBMkJFLHVCQUNVLFFBQWlCLEVBQ2pCLG9CQUFtQztRQUY3QyxpQkFHSTtRQUZNLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFlO1FBMUI3QyxnQkFBVyxHQUF3QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDbkUsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsRUFDOUIsU0FBUyxDQUFDO1lBQ1IsT0FBTyxLQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUMvQyxHQUFHLENBQUMsVUFBQSxNQUFNOztvQkFDRixZQUFZLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUM7Z0JBQzVDLE9BQU8sSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQzlELENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBZ0JDLENBQUM7Ozs7OztJQWRJLGtDQUFVOzs7OztJQUFsQixVQUFtQixNQUFlOztZQUMxQixPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7O1lBQ3JDLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7WUFFeEMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ2xDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLEVBQW5DLENBQW1DLENBQ3pDOztZQUNLLFlBQVksb0JBQU8sY0FBYyxHQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUM7UUFDM0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7Z0JBekJGLFVBQVU7Ozs7Z0JBUEYsT0FBTztnQkFLUCxhQUFhOztJQUtwQjtRQURDLE1BQU0sRUFBRTswQ0FDSSxVQUFVO3NEQVdyQjtJQWlCSixvQkFBQztDQUFBLEFBL0JELElBK0JDO1NBOUJZLGFBQWE7OztJQUN4QixvQ0FZRTs7Ozs7SUFjQSxpQ0FBeUI7Ozs7O0lBQ3pCLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdGl0bGVzLmFjdGlvbic7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaXRsZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRUaXRsZXMkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb24uVGl0bGVzQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5MT0FEX1RJVExFUyksXG4gICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBY2NvdW50Q29ubmVjdG9yLmdldFRpdGxlcygpLnBpcGUoXG4gICAgICAgIG1hcCh0aXRsZXMgPT4ge1xuICAgICAgICAgIGNvbnN0IHNvcnRlZFRpdGxlcyA9IHRoaXMuc29ydFRpdGxlcyh0aXRsZXMpO1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbi5Mb2FkVGl0bGVzU3VjY2Vzcyhzb3J0ZWRUaXRsZXMpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbi5Mb2FkVGl0bGVzRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIHByaXZhdGUgc29ydFRpdGxlcyh0aXRsZXM6IFRpdGxlW10pIHtcbiAgICBjb25zdCBkclRpdGxlID0geyBjb2RlOiAnZHInLCBuYW1lOiAnRHIuJyB9O1xuICAgIGNvbnN0IHJldlRpdGxlID0geyBjb2RlOiAncmV2JywgbmFtZTogJ1Jldi4nIH07XG5cbiAgICBjb25zdCBmaWx0ZXJlZFRpdGxlcyA9IHRpdGxlcy5maWx0ZXIoXG4gICAgICB0ID0+IHQuY29kZSAhPT0gJ2RyJyAmJiB0LmNvZGUgIT09ICdyZXYnXG4gICAgKTtcbiAgICBjb25zdCBzb3J0ZWRUaXRsZXMgPSBbLi4uZmlsdGVyZWRUaXRsZXMsIGRyVGl0bGUsIHJldlRpdGxlXTtcbiAgICByZXR1cm4gc29ydGVkVGl0bGVzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBY2NvdW50Q29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==