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
export class TitlesEffects {
    /**
     * @param {?} actions$
     * @param {?} occMiscsService
     */
    constructor(actions$, occMiscsService) {
        this.actions$ = actions$;
        this.occMiscsService = occMiscsService;
        this.loadTitles$ = this.actions$.pipe(ofType(fromAction.LOAD_TITLES), switchMap(() => {
            return this.occMiscsService.loadTitles().pipe(map(data => {
                /** @type {?} */
                const sortedTitles = this.sortTitles(data.titles);
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
    { type: OccMiscsService }
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
    TitlesEffects.prototype.occMiscsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL3N0b3JlL2VmZmVjdHMvdGl0bGVzLmVmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVuRSxPQUFPLEtBQUssVUFBVSxNQUFNLDBCQUEwQixDQUFDO0FBR3ZELE1BQU0sT0FBTyxhQUFhOzs7OztJQTBCeEIsWUFDVSxRQUFpQixFQUNqQixlQUFnQztRQURoQyxhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQTFCMUMsZ0JBQVcsR0FBd0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ25FLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLEVBQzlCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDYixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLENBQUMsSUFBSSxDQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7O3NCQUNILFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQ2pELE9BQU8sSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDeEQsQ0FBQyxDQUFDLEVBQ0YsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQzlELENBQUM7UUFDSixDQUFDLENBQUMsQ0FDSCxDQUFDO0lBZ0JDLENBQUM7Ozs7OztJQWRJLFVBQVUsQ0FBQyxNQUFlOztjQUMxQixPQUFPLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUU7O2NBQ3JDLFFBQVEsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTs7Y0FFeEMsY0FBYyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQ2xDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLENBQ3pDOztjQUNLLFlBQVksR0FBRyxDQUFDLEdBQUcsY0FBYyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7UUFDM0QsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQzs7O1lBekJGLFVBQVU7Ozs7WUFQRixPQUFPO1lBR1AsZUFBZTs7QUFPdEI7SUFEQyxNQUFNLEVBQUU7c0NBQ0ksVUFBVTtrREFXckI7OztJQVpGLG9DQVlFOzs7OztJQWNBLGlDQUF5Qjs7Ozs7SUFDekIsd0NBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aW9ucywgRWZmZWN0LCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE9jY01pc2NzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL29jYy9taXNjcy9taXNjcy5zZXJ2aWNlJztcbmltcG9ydCB7IFRpdGxlIH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvb2NjLm1vZGVscyc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvdGl0bGVzLmFjdGlvbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUaXRsZXNFZmZlY3RzIHtcbiAgQEVmZmVjdCgpXG4gIGxvYWRUaXRsZXMkOiBPYnNlcnZhYmxlPGZyb21BY3Rpb24uVGl0bGVzQWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoZnJvbUFjdGlvbi5MT0FEX1RJVExFUyksXG4gICAgc3dpdGNoTWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLm9jY01pc2NzU2VydmljZS5sb2FkVGl0bGVzKCkucGlwZShcbiAgICAgICAgbWFwKGRhdGEgPT4ge1xuICAgICAgICAgIGNvbnN0IHNvcnRlZFRpdGxlcyA9IHRoaXMuc29ydFRpdGxlcyhkYXRhLnRpdGxlcyk7XG4gICAgICAgICAgcmV0dXJuIG5ldyBmcm9tQWN0aW9uLkxvYWRUaXRsZXNTdWNjZXNzKHNvcnRlZFRpdGxlcyk7XG4gICAgICAgIH0pLFxuICAgICAgICBjYXRjaEVycm9yKGVycm9yID0+IG9mKG5ldyBmcm9tQWN0aW9uLkxvYWRUaXRsZXNGYWlsKGVycm9yKSkpXG4gICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgcHJpdmF0ZSBzb3J0VGl0bGVzKHRpdGxlczogVGl0bGVbXSkge1xuICAgIGNvbnN0IGRyVGl0bGUgPSB7IGNvZGU6ICdkcicsIG5hbWU6ICdEci4nIH07XG4gICAgY29uc3QgcmV2VGl0bGUgPSB7IGNvZGU6ICdyZXYnLCBuYW1lOiAnUmV2LicgfTtcblxuICAgIGNvbnN0IGZpbHRlcmVkVGl0bGVzID0gdGl0bGVzLmZpbHRlcihcbiAgICAgIHQgPT4gdC5jb2RlICE9PSAnZHInICYmIHQuY29kZSAhPT0gJ3JldidcbiAgICApO1xuICAgIGNvbnN0IHNvcnRlZFRpdGxlcyA9IFsuLi5maWx0ZXJlZFRpdGxlcywgZHJUaXRsZSwgcmV2VGl0bGVdO1xuICAgIHJldHVybiBzb3J0ZWRUaXRsZXM7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgb2NjTWlzY3NTZXJ2aWNlOiBPY2NNaXNjc1NlcnZpY2VcbiAgKSB7fVxufVxuIl19