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
import { SiteContextActions } from '../actions/index';
export class BaseSiteEffects {
    /**
     * @param {?} actions$
     * @param {?} siteConnector
     */
    constructor(actions$, siteConnector) {
        this.actions$ = actions$;
        this.siteConnector = siteConnector;
        this.loadBaseSite$ = this.actions$.pipe(ofType(SiteContextActions.LOAD_BASE_SITE), exhaustMap((/**
         * @return {?}
         */
        () => {
            return this.siteConnector.getBaseSite().pipe(map((/**
             * @param {?} baseSite
             * @return {?}
             */
            baseSite => new SiteContextActions.LoadBaseSiteSuccess(baseSite))), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new SiteContextActions.LoadBaseSiteFail(makeErrorSerializable(error))))));
        })));
    }
}
BaseSiteEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
BaseSiteEffects.ctorParameters = () => [
    { type: Actions },
    { type: SiteConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], BaseSiteEffects.prototype, "loadBaseSite$", void 0);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS1zaXRlLmVmZmVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc3RvcmUvZWZmZWN0cy9iYXNlLXNpdGUuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDeEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR3RELE1BQU0sT0FBTyxlQUFlOzs7OztJQW9CMUIsWUFDVSxRQUFpQixFQUNqQixhQUE0QjtRQUQ1QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2pCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBcEJ0QyxrQkFBYSxHQUVULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsa0JBQWtCLENBQUMsY0FBYyxDQUFDLEVBQ3pDLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQzFDLEdBQUc7Ozs7WUFBQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksa0JBQWtCLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEVBQUMsRUFDckUsVUFBVTs7OztZQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2pCLEVBQUUsQ0FDQSxJQUFJLGtCQUFrQixDQUFDLGdCQUFnQixDQUNyQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FDN0IsQ0FDRixFQUNGLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFLQyxDQUFDOzs7WUF4QkwsVUFBVTs7OztZQVBGLE9BQU87WUFJUCxhQUFhOztBQU1wQjtJQURDLE1BQU0sRUFBRTtzQ0FDTSxVQUFVO3NEQWdCdkI7OztJQWpCRix3Q0FpQkU7Ozs7O0lBR0EsbUNBQXlCOzs7OztJQUN6Qix3Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIGV4aGF1c3RNYXAsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IG1ha2VFcnJvclNlcmlhbGl6YWJsZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvc2VyaWFsaXphdGlvbi11dGlscyc7XG5pbXBvcnQgeyBTaXRlQ29ubmVjdG9yIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9zaXRlLmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEJhc2VTaXRlRWZmZWN0cyB7XG4gIEBFZmZlY3QoKVxuICBsb2FkQmFzZVNpdGUkOiBPYnNlcnZhYmxlPFxuICAgIFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQmFzZVNpdGVTdWNjZXNzIHwgU2l0ZUNvbnRleHRBY3Rpb25zLkxvYWRCYXNlU2l0ZUZhaWxcbiAgPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoU2l0ZUNvbnRleHRBY3Rpb25zLkxPQURfQkFTRV9TSVRFKSxcbiAgICBleGhhdXN0TWFwKCgpID0+IHtcbiAgICAgIHJldHVybiB0aGlzLnNpdGVDb25uZWN0b3IuZ2V0QmFzZVNpdGUoKS5waXBlKFxuICAgICAgICBtYXAoYmFzZVNpdGUgPT4gbmV3IFNpdGVDb250ZXh0QWN0aW9ucy5Mb2FkQmFzZVNpdGVTdWNjZXNzKGJhc2VTaXRlKSksXG4gICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICBvZihcbiAgICAgICAgICAgIG5ldyBTaXRlQ29udGV4dEFjdGlvbnMuTG9hZEJhc2VTaXRlRmFpbChcbiAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgICB9KVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBzaXRlQ29ubmVjdG9yOiBTaXRlQ29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==