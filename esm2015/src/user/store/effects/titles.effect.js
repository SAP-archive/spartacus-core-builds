/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { makeHttpErrorSerializable } from '../../../util/serialization-utils';
import { UserConnector } from '../../connectors/user/user.connector';
import * as fromAction from '../actions/titles.action';
export class TitlesEffects {
    /**
     * @param {?} actions$
     * @param {?} userAccountConnector
     */
    constructor(actions$, userAccountConnector) {
        this.actions$ = actions$;
        this.userAccountConnector = userAccountConnector;
        this.loadTitles$ = this.actions$.pipe(ofType(fromAction.LOAD_TITLES), switchMap((/**
         * @return {?}
         */
        () => {
            return this.userAccountConnector.getTitles().pipe(map((/**
             * @param {?} titles
             * @return {?}
             */
            titles => {
                /** @type {?} */
                const sortedTitles = this.sortTitles(titles);
                return new fromAction.LoadTitlesSuccess(sortedTitles);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new fromAction.LoadTitlesFail(makeHttpErrorSerializable(error))))));
        })));
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
        const filteredTitles = titles.filter((/**
         * @param {?} t
         * @return {?}
         */
        t => t.code !== 'dr' && t.code !== 'rev'));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdGl0bGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTVELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNyRSxPQUFPLEtBQUssVUFBVSxNQUFNLDBCQUEwQixDQUFDO0FBR3ZELE1BQU0sT0FBTyxhQUFhOzs7OztJQTRCeEIsWUFDVSxRQUFpQixFQUNqQixvQkFBbUM7UUFEbkMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUE1QjdDLGdCQUFXLEdBQXdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuRSxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUM5QixTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQy9DLEdBQUc7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRTs7c0JBQ0wsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxPQUFPLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUNqQixFQUFFLENBQUMsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFDcEUsQ0FDRixDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQWdCQyxDQUFDOzs7Ozs7SUFkSSxVQUFVLENBQUMsTUFBZTs7Y0FDMUIsT0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOztjQUNyQyxRQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7O2NBRXhDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTTs7OztRQUNsQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUN6Qzs7Y0FDSyxZQUFZLEdBQUcsQ0FBQyxHQUFHLGNBQWMsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBQzNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7OztZQTNCRixVQUFVOzs7O1lBUkYsT0FBTztZQUtQLGFBQWE7O0FBTXBCO0lBREMsTUFBTSxFQUFFO3NDQUNJLFVBQVU7a0RBYXJCOzs7SUFkRixvQ0FjRTs7Ozs7SUFjQSxpQ0FBeUI7Ozs7O0lBQ3pCLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgbWFrZUh0dHBFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBVc2VyQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy91c2VyL3VzZXIuY29ubmVjdG9yJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy90aXRsZXMuYWN0aW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRpdGxlc0VmZmVjdHMge1xuICBARWZmZWN0KClcbiAgbG9hZFRpdGxlcyQ6IE9ic2VydmFibGU8ZnJvbUFjdGlvbi5UaXRsZXNBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShmcm9tQWN0aW9uLkxPQURfVElUTEVTKSxcbiAgICBzd2l0Y2hNYXAoKCkgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudXNlckFjY291bnRDb25uZWN0b3IuZ2V0VGl0bGVzKCkucGlwZShcbiAgICAgICAgbWFwKHRpdGxlcyA9PiB7XG4gICAgICAgICAgY29uc3Qgc29ydGVkVGl0bGVzID0gdGhpcy5zb3J0VGl0bGVzKHRpdGxlcyk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9uLkxvYWRUaXRsZXNTdWNjZXNzKHNvcnRlZFRpdGxlcyk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+XG4gICAgICAgICAgb2YobmV3IGZyb21BY3Rpb24uTG9hZFRpdGxlc0ZhaWwobWFrZUh0dHBFcnJvclNlcmlhbGl6YWJsZShlcnJvcikpKVxuICAgICAgICApXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgcHJpdmF0ZSBzb3J0VGl0bGVzKHRpdGxlczogVGl0bGVbXSkge1xuICAgIGNvbnN0IGRyVGl0bGUgPSB7IGNvZGU6ICdkcicsIG5hbWU6ICdEci4nIH07XG4gICAgY29uc3QgcmV2VGl0bGUgPSB7IGNvZGU6ICdyZXYnLCBuYW1lOiAnUmV2LicgfTtcblxuICAgIGNvbnN0IGZpbHRlcmVkVGl0bGVzID0gdGl0bGVzLmZpbHRlcihcbiAgICAgIHQgPT4gdC5jb2RlICE9PSAnZHInICYmIHQuY29kZSAhPT0gJ3JldidcbiAgICApO1xuICAgIGNvbnN0IHNvcnRlZFRpdGxlcyA9IFsuLi5maWx0ZXJlZFRpdGxlcywgZHJUaXRsZSwgcmV2VGl0bGVdO1xuICAgIHJldHVybiBzb3J0ZWRUaXRsZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckFjY291bnRDb25uZWN0b3I6IFVzZXJDb25uZWN0b3JcbiAgKSB7fVxufVxuIl19