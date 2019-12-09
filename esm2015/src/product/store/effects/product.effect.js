/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { merge, of } from 'rxjs';
import { catchError, map, mergeMap, startWith, switchMapTo, } from 'rxjs/operators';
import { makeErrorSerializable } from '../../../util/serialization-utils';
import { ProductConnector } from '../../connectors/product/product.connector';
import { ProductActions } from '../actions/index';
import { SiteContextActions } from '../../../site-context/store/actions/index';
import { bufferDebounceTime } from '../../../util/buffer-debounce-time';
export class ProductEffects {
    /**
     * @param {?} actions$
     * @param {?} productConnector
     */
    constructor(actions$, productConnector) {
        this.actions$ = actions$;
        this.productConnector = productConnector;
        // we want to cancel all ongoing requests when currency or language changes,
        // that's why observe them and switch actions stream on each change
        this.contextSafeActions$ = this.actions$.pipe(ofType(SiteContextActions.CURRENCY_CHANGE, SiteContextActions.LANGUAGE_CHANGE), startWith({}), switchMapTo(this.actions$));
        this.loadProduct$ = createEffect((/**
         * @return {?}
         */
        () => (/**
         * @param {?=} __0
         * @return {?}
         */
        ({ scheduler, debounce = 0 } = {}) => this.contextSafeActions$.pipe(ofType(ProductActions.LOAD_PRODUCT), map((/**
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
            .map(this.productLoadEffect))))))));
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
    ProductEffects.prototype.contextSafeActions$;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC5lZmZlY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvZHVjdC9zdG9yZS9lZmZlY3RzL3Byb2R1Y3QuZWZmZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsS0FBSyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQ0wsVUFBVSxFQUNWLEdBQUcsRUFDSCxRQUFRLEVBQ1IsU0FBUyxFQUNULFdBQVcsR0FDWixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzlFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUd4RSxNQUFNLE9BQU8sY0FBYzs7Ozs7SUE0RHpCLFlBQ1UsUUFBaUIsRUFDakIsZ0JBQWtDO1FBRGxDLGFBQVEsR0FBUixRQUFRLENBQVM7UUFDakIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjs7O1FBM0RwQyx3QkFBbUIsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FDOUMsTUFBTSxDQUNKLGtCQUFrQixDQUFDLGVBQWUsRUFDbEMsa0JBQWtCLENBQUMsZUFBZSxDQUNuQyxFQUNELFNBQVMsQ0FBQyxFQUFFLENBQUMsRUFDYixXQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUMzQixDQUFDO1FBRUYsaUJBQVksR0FBRyxZQUFZOzs7UUFDekIsR0FBRyxFQUFFOzs7O1FBQUMsQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxFQUVyQyxFQUFFLENBQ0YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FDM0IsTUFBTSxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsRUFDbkMsR0FBRzs7OztRQUFDLENBQUMsTUFBa0MsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUMzQyxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU87WUFDcEIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSztTQUN6QixDQUFDLEVBQUM7UUFDSCxpRUFBaUU7UUFDakUsb0VBQW9FO1FBQ3BFLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsRUFDdkMsUUFBUTs7OztRQUFDLFFBQVEsQ0FBQyxFQUFFLENBQ2xCLEtBQUssQ0FDSCxHQUFHLElBQUksQ0FBQyxnQkFBZ0I7YUFDckIsT0FBTyxDQUFDLFFBQVEsQ0FBQzthQUNqQixHQUFHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQy9CLEVBQ0YsQ0FDRixDQUFBLEVBQ0osQ0FBQztJQThCQyxDQUFDOzs7Ozs7SUE1QkksaUJBQWlCLENBQ3ZCLFdBQThCO1FBSTlCLE9BQU8sV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzNCLEdBQUc7Ozs7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUNMLElBQUksY0FBYyxDQUFDLGtCQUFrQixpQkFDakMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxJQUFJLElBQUssSUFBSSxHQUNqQyxXQUFXLENBQUMsS0FBSyxDQUNsQixFQUNKLEVBQ0QsVUFBVTs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2pCLE9BQU8sRUFBRSxDQUNQLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FDaEMsV0FBVyxDQUFDLElBQUksRUFDaEIscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQzVCLFdBQVcsQ0FBQyxLQUFLLENBQ2xCLENBQ0YsQ0FBQztRQUNKLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUEzREYsVUFBVTs7OztZQWhCRixPQUFPO1lBVVAsZ0JBQWdCOzs7Ozs7O0lBVXZCLDZDQU9FOztJQUVGLHNDQXFCRTs7Ozs7SUE0QkEsa0NBQXlCOzs7OztJQUN6QiwwQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3Rpb25zLCBjcmVhdGVFZmZlY3QsIG9mVHlwZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgbWVyZ2UsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBjYXRjaEVycm9yLFxuICBtYXAsXG4gIG1lcmdlTWFwLFxuICBzdGFydFdpdGgsXG4gIHN3aXRjaE1hcFRvLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBtYWtlRXJyb3JTZXJpYWxpemFibGUgfSBmcm9tICcuLi8uLi8uLi91dGlsL3NlcmlhbGl6YXRpb24tdXRpbHMnO1xuaW1wb3J0IHsgUHJvZHVjdENvbm5lY3RvciB9IGZyb20gJy4uLy4uL2Nvbm5lY3RvcnMvcHJvZHVjdC9wcm9kdWN0LmNvbm5lY3Rvcic7XG5pbXBvcnQgeyBQcm9kdWN0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgU2NvcGVkUHJvZHVjdERhdGEgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL3Byb2R1Y3Qvc2NvcGVkLXByb2R1Y3QtZGF0YSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBidWZmZXJEZWJvdW5jZVRpbWUgfSBmcm9tICcuLi8uLi8uLi91dGlsL2J1ZmZlci1kZWJvdW5jZS10aW1lJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RFZmZlY3RzIHtcbiAgLy8gd2Ugd2FudCB0byBjYW5jZWwgYWxsIG9uZ29pbmcgcmVxdWVzdHMgd2hlbiBjdXJyZW5jeSBvciBsYW5ndWFnZSBjaGFuZ2VzLFxuICAvLyB0aGF0J3Mgd2h5IG9ic2VydmUgdGhlbSBhbmQgc3dpdGNoIGFjdGlvbnMgc3RyZWFtIG9uIGVhY2ggY2hhbmdlXG4gIHByaXZhdGUgY29udGV4dFNhZmVBY3Rpb25zJCA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoXG4gICAgICBTaXRlQ29udGV4dEFjdGlvbnMuQ1VSUkVOQ1lfQ0hBTkdFLFxuICAgICAgU2l0ZUNvbnRleHRBY3Rpb25zLkxBTkdVQUdFX0NIQU5HRVxuICAgICksXG4gICAgc3RhcnRXaXRoKHt9KSxcbiAgICBzd2l0Y2hNYXBUbyh0aGlzLmFjdGlvbnMkKVxuICApO1xuXG4gIGxvYWRQcm9kdWN0JCA9IGNyZWF0ZUVmZmVjdChcbiAgICAoKSA9PiAoeyBzY2hlZHVsZXIsIGRlYm91bmNlID0gMCB9ID0ge30pOiBPYnNlcnZhYmxlPFxuICAgICAgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsXG4gICAgPiA9PlxuICAgICAgdGhpcy5jb250ZXh0U2FmZUFjdGlvbnMkLnBpcGUoXG4gICAgICAgIG9mVHlwZShQcm9kdWN0QWN0aW9ucy5MT0FEX1BST0RVQ1QpLFxuICAgICAgICBtYXAoKGFjdGlvbjogUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3QpID0+ICh7XG4gICAgICAgICAgY29kZTogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgc2NvcGU6IGFjdGlvbi5tZXRhLnNjb3BlLFxuICAgICAgICB9KSksXG4gICAgICAgIC8vIHdlIGFyZSBncm91cGluZyBhbGwgbG9hZCBhY3Rpb25zIHRoYXQgaGFwcGVucyBhdCB0aGUgc2FtZSB0aW1lXG4gICAgICAgIC8vIHRvIG9wdGltaXplIGxvYWRpbmcgYW5kIHBhc3MgdGhlbSBhbGwgdG8gcHJvZHVjdENvbm5lY3Rvci5nZXRNYW55XG4gICAgICAgIGJ1ZmZlckRlYm91bmNlVGltZShkZWJvdW5jZSwgc2NoZWR1bGVyKSxcbiAgICAgICAgbWVyZ2VNYXAocHJvZHVjdHMgPT5cbiAgICAgICAgICBtZXJnZShcbiAgICAgICAgICAgIC4uLnRoaXMucHJvZHVjdENvbm5lY3RvclxuICAgICAgICAgICAgICAuZ2V0TWFueShwcm9kdWN0cylcbiAgICAgICAgICAgICAgLm1hcCh0aGlzLnByb2R1Y3RMb2FkRWZmZWN0KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICApO1xuXG4gIHByaXZhdGUgcHJvZHVjdExvYWRFZmZlY3QoXG4gICAgcHJvZHVjdExvYWQ6IFNjb3BlZFByb2R1Y3REYXRhXG4gICk6IE9ic2VydmFibGU8XG4gICAgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RTdWNjZXNzIHwgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsXG4gID4ge1xuICAgIHJldHVybiBwcm9kdWN0TG9hZC5kYXRhJC5waXBlKFxuICAgICAgbWFwKFxuICAgICAgICBkYXRhID0+XG4gICAgICAgICAgbmV3IFByb2R1Y3RBY3Rpb25zLkxvYWRQcm9kdWN0U3VjY2VzcyhcbiAgICAgICAgICAgIHsgY29kZTogcHJvZHVjdExvYWQuY29kZSwgLi4uZGF0YSB9LFxuICAgICAgICAgICAgcHJvZHVjdExvYWQuc2NvcGVcbiAgICAgICAgICApXG4gICAgICApLFxuICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiB7XG4gICAgICAgIHJldHVybiBvZihcbiAgICAgICAgICBuZXcgUHJvZHVjdEFjdGlvbnMuTG9hZFByb2R1Y3RGYWlsKFxuICAgICAgICAgICAgcHJvZHVjdExvYWQuY29kZSxcbiAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvciksXG4gICAgICAgICAgICBwcm9kdWN0TG9hZC5zY29wZVxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYWN0aW9ucyQ6IEFjdGlvbnMsXG4gICAgcHJpdmF0ZSBwcm9kdWN0Q29ubmVjdG9yOiBQcm9kdWN0Q29ubmVjdG9yXG4gICkge31cbn1cbiJdfQ==