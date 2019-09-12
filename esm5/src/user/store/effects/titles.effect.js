/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import { UserActions } from '../actions/index';
var TitlesEffects = /** @class */ (function () {
    function TitlesEffects(actions$, userAccountConnector) {
        var _this = this;
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.loadTitles$ = this.actions$.pipe(ofType(UserActions.LOAD_TITLES), switchMap((/**
         * @return {?}
         */
        function () {
            return _this.userAccountConnector.getTitles().pipe(map((/**
             * @param {?} titles
             * @return {?}
             */
            function (titles) {
                /** @type {?} */
                var sortedTitles = _this.sortTitles(titles);
                return new UserActions.LoadTitlesSuccess(sortedTitles);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                return of(new UserActions.LoadTitlesFail(makeErrorSerializable(error)));
            })));
        })));
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
        var filteredTitles = titles.filter((/**
         * @param {?} t
         * @return {?}
         */
        function (t) { return t.code !== 'dr' && t.code !== 'rev'; }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdGl0bGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0M7SUE2QkUsdUJBQ1UsUUFBaUIsRUFDakIsb0JBQW1DO1FBRjdDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUE1QjdDLGdCQUFXLEdBQXlDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwRSxNQUFNLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUMvQixTQUFTOzs7UUFBQztZQUNSLE9BQU8sS0FBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FDL0MsR0FBRzs7OztZQUFDLFVBQUEsTUFBTTs7b0JBQ0YsWUFBWSxHQUFHLEtBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxPQUFPLElBQUksV0FBVyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3pELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxVQUFBLEtBQUs7Z0JBQ2QsT0FBQSxFQUFFLENBQUMsSUFBSSxXQUFXLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFBaEUsQ0FBZ0UsRUFDakUsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQWdCQyxDQUFDOzs7Ozs7SUFkSSxrQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsTUFBZTs7WUFDMUIsT0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOztZQUNyQyxRQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7O1lBRXhDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTTs7OztRQUNsQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFuQyxDQUFtQyxFQUN6Qzs7WUFDSyxZQUFZLG9CQUFPLGNBQWMsR0FBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1FBQzNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7O2dCQTNCRixVQUFVOzs7O2dCQVJGLE9BQU87Z0JBS1AsYUFBYTs7SUFNcEI7UUFEQyxNQUFNLEVBQUU7MENBQ0ksVUFBVTtzREFhckI7SUFpQkosb0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztTQWhDWSxhQUFhOzs7SUFDeEIsb0NBY0U7Ozs7O0lBY0EsaUNBQXlCOzs7OztJQUN6Qiw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaXRsZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRUaXRsZXMkOiBPYnNlcnZhYmxlPFVzZXJBY3Rpb25zLlRpdGxlc0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKFVzZXJBY3Rpb25zLkxPQURfVElUTEVTKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFjY291bnRDb25uZWN0b3IuZ2V0VGl0bGVzKCkucGlwZShcbiAgICAgICAgbWFwKHRpdGxlcyA9PiB7XG4gICAgICAgICAgY29uc3Qgc29ydGVkVGl0bGVzID0gdGhpcy5zb3J0VGl0bGVzKHRpdGxlcyk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBVc2VyQWN0aW9ucy5Mb2FkVGl0bGVzU3VjY2Vzcyhzb3J0ZWRUaXRsZXMpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgIG9mKG5ldyBVc2VyQWN0aW9ucy5Mb2FkVGl0bGVzRmFpbChtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpKSlcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIHByaXZhdGUgc29ydFRpdGxlcyh0aXRsZXM6IFRpdGxlW10pIHtcbiAgICBjb25zdCBkclRpdGxlID0geyBjb2RlOiAnZHInLCBuYW1lOiAnRHIuJyB9O1xuICAgIGNvbnN0IHJldlRpdGxlID0geyBjb2RlOiAncmV2JywgbmFtZTogJ1Jldi4nIH07XG5cbiAgICBjb25zdCBmaWx0ZXJlZFRpdGxlcyA9IHRpdGxlcy5maWx0ZXIoXG4gICAgICB0ID0+IHQuY29kZSAhPT0gJ2RyJyAmJiB0LmNvZGUgIT09ICdyZXYnXG4gICAgKTtcbiAgICBjb25zdCBzb3J0ZWRUaXRsZXMgPSBbLi4uZmlsdGVyZWRUaXRsZXMsIGRyVGl0bGUsIHJldlRpdGxlXTtcbiAgICByZXR1cm4gc29ydGVkVGl0bGVzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBY2NvdW50Q29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==