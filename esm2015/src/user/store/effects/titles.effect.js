/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            error => of(new fromAction.LoadTitlesFail(error)))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdGl0bGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sS0FBSyxVQUFVLE1BQU0sMEJBQTBCLENBQUM7QUFFdkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBR3JFLE1BQU0sT0FBTyxhQUFhOzs7OztJQTBCeEIsWUFDVSxRQUFpQixFQUNqQixvQkFBbUM7UUFEbkMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQWU7UUExQjdDLGdCQUFXLEdBQXdDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNuRSxNQUFNLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxFQUM5QixTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQy9DLEdBQUc7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRTs7c0JBQ0wsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxPQUFPLElBQUksVUFBVSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ3hELENBQUMsRUFBQyxFQUNGLFVBQVU7Ozs7WUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLFVBQVUsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBQyxDQUM5RCxDQUFDO1FBQ0osQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQWdCQyxDQUFDOzs7Ozs7SUFkSSxVQUFVLENBQUMsTUFBZTs7Y0FDMUIsT0FBTyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFOztjQUNyQyxRQUFRLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7O2NBRXhDLGNBQWMsR0FBRyxNQUFNLENBQUMsTUFBTTs7OztRQUNsQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxFQUN6Qzs7Y0FDSyxZQUFZLEdBQUcsQ0FBQyxHQUFHLGNBQWMsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDO1FBQzNELE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7OztZQXpCRixVQUFVOzs7O1lBUEYsT0FBTztZQUtQLGFBQWE7O0FBS3BCO0lBREMsTUFBTSxFQUFFO3NDQUNJLFVBQVU7a0RBV3JCOzs7SUFaRixvQ0FZRTs7Ozs7SUFjQSxpQ0FBeUI7Ozs7O0lBQ3pCLDZDQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGlvbnMsIEVmZmVjdCwgb2ZUeXBlIH0gZnJvbSAnQG5ncngvZWZmZWN0cyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdGl0bGVzLmFjdGlvbic7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgVXNlckNvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvdXNlci91c2VyLmNvbm5lY3Rvcic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaXRsZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRUaXRsZXMkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb24uVGl0bGVzQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5MT0FEX1RJVExFUyksXG4gICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnVzZXJBY2NvdW50Q29ubmVjdG9yLmdldFRpdGxlcygpLnBpcGUoXG4gICAgICAgIG1hcCh0aXRsZXMgPT4ge1xuICAgICAgICAgIGNvbnN0IHNvcnRlZFRpdGxlcyA9IHRoaXMuc29ydFRpdGxlcyh0aXRsZXMpO1xuICAgICAgICAgIHJldHVybiBuZXcgZnJvbUFjdGlvbi5Mb2FkVGl0bGVzU3VjY2Vzcyhzb3J0ZWRUaXRsZXMpO1xuICAgICAgICB9KSxcbiAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihuZXcgZnJvbUFjdGlvbi5Mb2FkVGl0bGVzRmFpbChlcnJvcikpKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIHByaXZhdGUgc29ydFRpdGxlcyh0aXRsZXM6IFRpdGxlW10pIHtcbiAgICBjb25zdCBkclRpdGxlID0geyBjb2RlOiAnZHInLCBuYW1lOiAnRHIuJyB9O1xuICAgIGNvbnN0IHJldlRpdGxlID0geyBjb2RlOiAncmV2JywgbmFtZTogJ1Jldi4nIH07XG5cbiAgICBjb25zdCBmaWx0ZXJlZFRpdGxlcyA9IHRpdGxlcy5maWx0ZXIoXG4gICAgICB0ID0+IHQuY29kZSAhPT0gJ2RyJyAmJiB0LmNvZGUgIT09ICdyZXYnXG4gICAgKTtcbiAgICBjb25zdCBzb3J0ZWRUaXRsZXMgPSBbLi4uZmlsdGVyZWRUaXRsZXMsIGRyVGl0bGUsIHJldlRpdGxlXTtcbiAgICByZXR1cm4gc29ydGVkVGl0bGVzO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBhY3Rpb25zJDogQWN0aW9ucyxcbiAgICBwcml2YXRlIHVzZXJBY2NvdW50Q29ubmVjdG9yOiBVc2VyQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==