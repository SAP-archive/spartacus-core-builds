/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { OccMiscsService } from '../../../occ/miscs/miscs.service';
import * as fromAction from '../actions/titles.action';
var TitlesEffects = /** @class */ (function () {
    function TitlesEffects(actions$, occMiscsService) {
        var _this = this;
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadTitles$ = this.actions$.pipe(ofType(fromAction.LOAD_TITLES), switchMap(function () {
            return _this.occMiscsService.loadTitles().pipe(map(function (data) {
                /** @type {?} */
                var sortedTitles = _this.sortTitles(data.titles);
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
        { type: OccMiscsService }
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
    TitlesEffects.prototype.occMiscsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdGl0bGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVuRSxPQUFPLEtBQUssVUFBVSxNQUFNLDBCQUEwQixDQUFDO0FBRXZEO0lBMkJFLHVCQUNVLFFBQWlCLEVBQ2pCLGVBQWdDO1FBRjFDLGlCQUdJO1FBRk0sYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUExQjFDLGdCQUFXLEdBQXdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuRSxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUM5QixTQUFTLENBQUM7WUFDUixPQUFPLEtBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUMzQyxHQUFHLENBQUMsVUFBQSxJQUFJOztvQkFDQSxZQUFZLEdBQUcsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNqRCxPQUFPLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hELENBQUMsQ0FBQyxFQUNGLFVBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBeEMsQ0FBd0MsQ0FBQyxDQUM5RCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQWdCQyxDQUFDOzs7Ozs7SUFkSSxrQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsTUFBZTs7WUFDMUIsT0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOztZQUNyQyxRQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7O1lBRXhDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUNsQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUFuQyxDQUFtQyxDQUN6Qzs7WUFDSyxZQUFZLG9CQUFPLGNBQWMsR0FBRSxPQUFPLEVBQUUsUUFBUSxFQUFDO1FBQzNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7O2dCQXpCRixVQUFVOzs7O2dCQVBGLE9BQU87Z0JBR1AsZUFBZTs7SUFPdEI7UUFEQyxNQUFNLEVBQUU7MENBQ0ksVUFBVTtzREFXckI7SUFpQkosb0JBQUM7Q0FBQSxBQS9CRCxJQStCQztTQTlCWSxhQUFhOzs7SUFDeEIsb0NBWUU7Ozs7O0lBY0EsaUNBQXlCOzs7OztJQUN6Qix3Q0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgT2NjTWlzY3NTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL21pc2NzL21pc2NzLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy90aXRsZXMuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRpdGxlc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFRpdGxlcyQ6IE9ic2VydmFibGU8ZnJvbUFjdGlvbi5UaXRsZXNBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9uLkxPQURfVElUTEVTKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMub2NjTWlzY3NTZXJ2aWNlLmxvYWRUaXRsZXMoKS5waXBlKFxuICAgICAgICBtYXAoZGF0YSA9PiB7XG4gICAgICAgICAgY29uc3Qgc29ydGVkVGl0bGVzID0gdGhpcy5zb3J0VGl0bGVzKGRhdGEudGl0bGVzKTtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb24uTG9hZFRpdGxlc1N1Y2Nlc3Moc29ydGVkVGl0bGVzKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb24uTG9hZFRpdGxlc0ZhaWwoZXJyb3IpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBwcml2YXRlIHNvcnRUaXRsZXModGl0bGVzOiBUaXRsZVtdKSB7XG4gICAgY29uc3QgZHJUaXRsZSA9IHsgY29kZTogJ2RyJywgbmFtZTogJ0RyLicgfTtcbiAgICBjb25zdCByZXZUaXRsZSA9IHsgY29kZTogJ3JldicsIG5hbWU6ICdSZXYuJyB9O1xuXG4gICAgY29uc3QgZmlsdGVyZWRUaXRsZXMgPSB0aXRsZXMuZmlsdGVyKFxuICAgICAgdCA9PiB0LmNvZGUgIT09ICdkcicgJiYgdC5jb2RlICE9PSAncmV2J1xuICAgICk7XG4gICAgY29uc3Qgc29ydGVkVGl0bGVzID0gWy4uLmZpbHRlcmVkVGl0bGVzLCBkclRpdGxlLCByZXZUaXRsZV07XG4gICAgcmV0dXJuIHNvcnRlZFRpdGxlcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBvY2NNaXNjc1NlcnZpY2U6IE9jY01pc2NzU2VydmljZVxuICApIHt9XG59XG4iXX0=