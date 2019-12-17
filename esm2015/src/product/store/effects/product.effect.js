/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { ProductConnector } from '../../connectors/product/product.connector';
import { ProductActions } from '../actions/index';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { bufferDebounceTime } from '../../../util/buffer-debounce-time';
import { withdrawOn } from '../../../util/withdraw-on';
export class ProductEffects {
    /**
     * @param {?} actions$
     * @param {?} productConnector
     */
    constructor(actions$, productConnector) {
        this.actions$ = actions$;
        this.productConnector = productConnector;
        // we want to cancel all ongoing requests when currency or language changes,
        this.contextChange$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE, SiteContextActions.LANGUAGE_CHANGE));
        this.loadProduct$ = createEffect((/**
         * @return {?}
         */
        () => (/**
         * @param {?=} __0
         * @return {?}
         */
        ({ scheduler, debounce = 0 } = {}) => this.actions$.pipe(ofType(ProductActions.LOAD_PRODUCT), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => ({
            code: action.payload,
            scope: action.meta.scope,
        }))), 
        // we are grouping all load actions that happens at the same time
        // to optimize loading and pass them all to productConnector.getMany
        bufferDebounceTime(debounce, scheduler), mergeMap((/**
         * @param {?} products
         * @return {?}
         */
        products => merge(...this.productConnector
            .getMany(products)
            .map(this.productLoadEffect)))), withdrawOn(this.contextChange$)))));
    }
    /**
     * @private
     * @param {?} productLoad
     * @return {?}
     */
    productLoadEffect(productLoad) {
        return productLoad.data$.pipe(map((/**
         * @param {?} data
         * @return {?}
         */
        data => new ProductActions.LoadProductSuccess(Object.assign({ code: productLoad.code }, data), productLoad.scope))), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => {
            return of(new ProductActions.LoadProductFail(productLoad.code, makeErrorSerializable(error), productLoad.scope));
        })));
    }
}
ProductEffects.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductEffects.ctorParameters = () => [
    { type: Actions },
    { type: ProductConnector }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.contextChange$;
    /** @type {?} */
    ProductEffects.prototype.loadProduct$;
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProductEffects.prototype.productConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDL0UsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFFeEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3ZELE1BQU0sT0FBTyxjQUFjOzs7OztJQTBEekIsWUFDVSxRQUFpQixFQUNqQixnQkFBa0M7UUFEbEMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCOztRQTFEcEMsbUJBQWMsR0FBdUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQzdELE1BQU0sQ0FDSixrQkFBa0IsQ0FBQyxlQUFlLEVBQ2xDLGtCQUFrQixDQUFDLGVBQWUsQ0FDbkMsQ0FDRixDQUFDO1FBRUYsaUJBQVksR0FBRyxZQUFZOzs7UUFDekIsR0FBRyxFQUFFOzs7O1FBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUVyQyxFQUFFLENBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQ2hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFDLEVBQ25DLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQWtDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDM0MsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPO1lBQ3BCLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUs7U0FDekIsQ0FBQyxFQUFDO1FBQ0gsaUVBQWlFO1FBQ2pFLG9FQUFvRTtRQUNwRSxrQkFBa0IsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLEVBQ3ZDLFFBQVE7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRSxDQUNsQixLQUFLLENBQ0gsR0FBRyxJQUFJLENBQUMsZ0JBQWdCO2FBQ3JCLE9BQU8sQ0FBQyxRQUFRLENBQUM7YUFDakIsR0FBRyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUMvQixFQUNGLEVBQ0QsVUFBVSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FDaEMsQ0FBQSxFQUNKLENBQUM7SUE4QkMsQ0FBQzs7Ozs7O0lBNUJJLGlCQUFpQixDQUN2QixXQUE4QjtRQUk5QixPQUFPLFdBQVcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUMzQixHQUFHOzs7O1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FDTCxJQUFJLGNBQWMsQ0FBQyxrQkFBa0IsaUJBQ2pDLElBQUksRUFBRSxXQUFXLENBQUMsSUFBSSxJQUFLLElBQUksR0FDakMsV0FBVyxDQUFDLEtBQUssQ0FDbEIsRUFDSixFQUNELFVBQVU7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRTtZQUNqQixPQUFPLEVBQUUsQ0FDUCxJQUFJLGNBQWMsQ0FBQyxlQUFlLENBQ2hDLFdBQVcsQ0FBQyxJQUFJLEVBQ2hCLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxFQUM1QixXQUFXLENBQUMsS0FBSyxDQUNsQixDQUNGLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBekRGLFVBQVU7Ozs7WUFaRixPQUFPO1lBSVAsZ0JBQWdCOzs7Ozs7O0lBV3ZCLHdDQUtFOztJQUVGLHNDQXNCRTs7Ozs7SUE0QkEsa0NBQXlCOzs7OztJQUN6QiwwQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIG1lcmdlTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcbmltcG9ydCB7IFByb2R1Y3RDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3Byb2R1Y3QvcHJvZHVjdC5jb25uZWN0b3InO1xuaW1wb3J0IHsgUHJvZHVjdEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFNjb3BlZFByb2R1Y3REYXRhIH0gZnJvbSAnLi4vLi4vY29ubmVjdG9ycy9wcm9kdWN0L3Njb3BlZC1wcm9kdWN0LWRhdGEnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vc2l0ZS1jb250ZXh0L3N0b3JlL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgYnVmZmVyRGVib3VuY2VUaW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9idWZmZXItZGVib3VuY2UtdGltZSc7XG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyB3aXRoZHJhd09uIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC93aXRoZHJhdy1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcm9kdWN0RWZmZWN0cyB7XG4gIC8vIHdlIHdhbnQgdG8gY2FuY2VsIGFsbCBvbmdvaW5nIHJlcXVlc3RzIHdoZW4gY3VycmVuY3kgb3IgbGFuZ3VhZ2UgY2hhbmdlcyxcbiAgcHJpdmF0ZSBjb250ZXh0Q2hhbmdlJDogT2JzZXJ2YWJsZTxBY3Rpb24+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShcbiAgICAgIFNpdGVDb250ZXh0QWN0aW9ucy5DVVJSRU5DWV9DSEFOR0UsXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuTEFOR1VBR0VfQ0hBTkdFXG4gICAgKVxuICApO1xuXG4gIGxvYWRQcm9kdWN0JCA9IGNyZWF0ZUVmZmVjdChcbiAgICAoKSA9PiAoeyBzY2hlZHVsZXIsIGRlYm91bmNlID0gMCB9ID0ge30pOiBPYnNlcnZhYmxlPFxuICAgICAgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsXG4gICAgPiA9PlxuICAgICAgdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgICAgICBvZlR5cGUoUHJvZHVjdEFjdGlvbnMuTE9BRF9QUk9EVUNUKSxcbiAgICAgICAgbWFwKChhY3Rpb246IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0KSA9PiAoe1xuICAgICAgICAgIGNvZGU6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgICAgIHNjb3BlOiBhY3Rpb24ubWV0YS5zY29wZSxcbiAgICAgICAgfSkpLFxuICAgICAgICAvLyB3ZSBhcmUgZ3JvdXBpbmcgYWxsIGxvYWQgYWN0aW9ucyB0aGF0IGhhcHBlbnMgYXQgdGhlIHNhbWUgdGltZVxuICAgICAgICAvLyB0byBvcHRpbWl6ZSBsb2FkaW5nIGFuZCBwYXNzIHRoZW0gYWxsIHRvIHByb2R1Y3RDb25uZWN0b3IuZ2V0TWFueVxuICAgICAgICBidWZmZXJEZWJvdW5jZVRpbWUoZGVib3VuY2UsIHNjaGVkdWxlciksXG4gICAgICAgIG1lcmdlTWFwKHByb2R1Y3RzID0+XG4gICAgICAgICAgbWVyZ2UoXG4gICAgICAgICAgICAuLi50aGlzLnByb2R1Y3RDb25uZWN0b3JcbiAgICAgICAgICAgICAgLmdldE1hbnkocHJvZHVjdHMpXG4gICAgICAgICAgICAgIC5tYXAodGhpcy5wcm9kdWN0TG9hZEVmZmVjdClcbiAgICAgICAgICApXG4gICAgICAgICksXG4gICAgICAgIHdpdGhkcmF3T24odGhpcy5jb250ZXh0Q2hhbmdlJClcbiAgICAgIClcbiAgKTtcblxuICBwcml2YXRlIHByb2R1Y3RMb2FkRWZmZWN0KFxuICAgIHByb2R1Y3RMb2FkOiBTY29wZWRQcm9kdWN0RGF0YVxuICApOiBPYnNlcnZhYmxlPFxuICAgIFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0U3VjY2VzcyB8IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0RmFpbFxuICA+IHtcbiAgICByZXR1cm4gcHJvZHVjdExvYWQuZGF0YSQucGlwZShcbiAgICAgIG1hcChcbiAgICAgICAgZGF0YSA9PlxuICAgICAgICAgIG5ldyBQcm9kdWN0QWN0aW9ucy5Mb2FkUHJvZHVjdFN1Y2Nlc3MoXG4gICAgICAgICAgICB7IGNvZGU6IHByb2R1Y3RMb2FkLmNvZGUsIC4uLmRhdGEgfSxcbiAgICAgICAgICAgIHByb2R1Y3RMb2FkLnNjb3BlXG4gICAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT4ge1xuICAgICAgICByZXR1cm4gb2YoXG4gICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0RmFpbChcbiAgICAgICAgICAgIHByb2R1Y3RMb2FkLmNvZGUsXG4gICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpLFxuICAgICAgICAgICAgcHJvZHVjdExvYWQuc2NvcGVcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgcHJvZHVjdENvbm5lY3RvcjogUHJvZHVjdENvbm5lY3RvclxuICApIHt9XG59XG4iXX0=