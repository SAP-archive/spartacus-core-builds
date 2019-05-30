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
export class TitlesEffects {
    /**
     * @param {?} actions$
     * @param {?} userAccountConnector
     */
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.loadTitles$ = this.actions$.pipe(ofType(fromAction.LOAD_TITLES), switchMap(() => {
            return this.userAccountConnector.getTitles().pipe(map(titles => {
                /** @type {?} */
                const sortedTitles = this.sortTitles(titles);
                return new fromAction.LoadTitlesSuccess(sortedTitles);
            }), catchError(error => of(new fromAction.LoadTitlesFail(error))));
        }));
    }
    /**
     * @private
     * @param {?} titles
     * @return {?}
     */
    sortTitles(titles) {
        /** @type {?} */
        const drTitle = { code: 'dr', name: 'Dr.' };
        /** @type {?} */
        const revTitle = { code: 'rev', name: 'Rev.' };
        /** @type {?} */
        const filteredTitles = titles.filter(t => t.code !== 'dr' && t.code !== 'rev');
        /** @type {?} */
        const sortedTitles = [...filteredTitles, drTitle, revTitle];
        return sortedTitles;
    }
}
TitlesEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
TitlesEffects.ctorParameters = () => [
    { type: Actions },
    { type: UserConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], TitlesEffects.prototype, "loadTitles$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdGl0bGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sS0FBSyxVQUFVLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR3JFLE1BQU0sT0FBTyxhQUFhOzs7OztJQTBCeEIsWUFDVSxRQUFpQixFQUNqQixvQkFBbUM7UUFEbkMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUExQjdDLGdCQUFXLEdBQXdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuRSxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUM5QixTQUFTLENBQUMsR0FBRyxFQUFFO1lBQ2IsT0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUMvQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7O3NCQUNMLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQztnQkFDNUMsT0FBTyxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4RCxDQUFDLENBQUMsRUFDRixVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FDOUQsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUNILENBQUM7SUFnQkMsQ0FBQzs7Ozs7O0lBZEksVUFBVSxDQUFDLE1BQWU7O2NBQzFCLE9BQU8sR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRTs7Y0FDckMsUUFBUSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFOztjQUV4QyxjQUFjLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDbEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FDekM7O2NBQ0ssWUFBWSxHQUFHLENBQUMsR0FBRyxjQUFjLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztRQUMzRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDOzs7WUF6QkYsVUFBVTs7OztZQVBGLE9BQU87WUFLUCxhQUFhOztBQUtwQjtJQURDLE1BQU0sRUFBRTtzQ0FDSSxVQUFVO2tEQVdyQjs7O0lBWkYsb0NBWUU7Ozs7O0lBY0EsaUNBQXlCOzs7OztJQUN6Qiw2Q0FBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL3RpdGxlcy5hY3Rpb24nO1xuaW1wb3J0IHsgVGl0bGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9taXNjLm1vZGVsJztcbmltcG9ydCB7IFVzZXJDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3InO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGl0bGVzRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkVGl0bGVzJDogT2JzZXJ2YWJsZTxmcm9tQWN0aW9uLlRpdGxlc0FjdGlvbj4gPSB0aGlzLmFjdGlvbnMkLnBpcGUoXG4gICAgb2ZUeXBlKGZyb21BY3Rpb24uTE9BRF9USVRMRVMpLFxuICAgIHN3aXRjaE1hcCgoKSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VyQWNjb3VudENvbm5lY3Rvci5nZXRUaXRsZXMoKS5waXBlKFxuICAgICAgICBtYXAodGl0bGVzID0+IHtcbiAgICAgICAgICBjb25zdCBzb3J0ZWRUaXRsZXMgPSB0aGlzLnNvcnRUaXRsZXModGl0bGVzKTtcbiAgICAgICAgICByZXR1cm4gbmV3IGZyb21BY3Rpb24uTG9hZFRpdGxlc1N1Y2Nlc3Moc29ydGVkVGl0bGVzKTtcbiAgICAgICAgfSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4gb2YobmV3IGZyb21BY3Rpb24uTG9hZFRpdGxlc0ZhaWwoZXJyb3IpKSlcbiAgICAgICk7XG4gICAgfSlcbiAgKTtcblxuICBwcml2YXRlIHNvcnRUaXRsZXModGl0bGVzOiBUaXRsZVtdKSB7XG4gICAgY29uc3QgZHJUaXRsZSA9IHsgY29kZTogJ2RyJywgbmFtZTogJ0RyLicgfTtcbiAgICBjb25zdCByZXZUaXRsZSA9IHsgY29kZTogJ3JldicsIG5hbWU6ICdSZXYuJyB9O1xuXG4gICAgY29uc3QgZmlsdGVyZWRUaXRsZXMgPSB0aXRsZXMuZmlsdGVyKFxuICAgICAgdCA9PiB0LmNvZGUgIT09ICdkcicgJiYgdC5jb2RlICE9PSAncmV2J1xuICAgICk7XG4gICAgY29uc3Qgc29ydGVkVGl0bGVzID0gWy4uLmZpbHRlcmVkVGl0bGVzLCBkclRpdGxlLCByZXZUaXRsZV07XG4gICAgcmV0dXJuIHNvcnRlZFRpdGxlcztcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSB1c2VyQWNjb3VudENvbm5lY3RvcjogVXNlckNvbm5lY3RvclxuICApIHt9XG59XG4iXX0=