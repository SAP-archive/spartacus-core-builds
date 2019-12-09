/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';
import { UserActions } from '../actions/index';
import { UserInterestsConnector } from '../../connectors/interests/user-interests.connector';
import { makeErrorSerializable } from '../../../util/serialization-utils';
export class ProductInterestsEffect {
    /**
     * @param {?} actions$
     * @param {?} userInterestsConnector
     */
    constructor(actions$, userInterestsConnector) {
        this.actions$ = actions$;
        this.userInterestsConnector = userInterestsConnector;
        this.loadProductInteres$ = this.actions$.pipe(ofType(UserActions.LOAD_PRODUCT_INTERESTS), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => {
            return this.userInterestsConnector
                .getInterests(payload.userId, payload.pageSize, payload.currentPage, payload.sort, payload.productCode, payload.notificationType)
                .pipe(map((/**
             * @param {?} interests
             * @return {?}
             */
            (interests) => {
                return new UserActions.LoadProductInterestsSuccess(interests);
            })), catchError((/**
             * @param {?} error
             * @return {?}
             */
            error => of(new UserActions.LoadProductInterestsFail(makeErrorSerializable(error))))));
        })));
        this.removeProductInterest$ = this.actions$.pipe(ofType(UserActions.REMOVE_PRODUCT_INTEREST), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.userInterestsConnector
            .removeInterest(payload.userId, payload.item)
            .pipe(switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => [
            new UserActions.LoadProductInterests(payload.singleDelete
                ? {
                    userId: payload.userId,
                    productCode: payload.item.product.code,
                    notificationType: payload.item.productInterestEntry[0].interestType,
                }
                : { userId: payload.userId }),
            new UserActions.RemoveProductInterestSuccess(data),
        ])), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UserActions.RemoveProductInterestFail(makeErrorSerializable(error)))))))));
        this.addProductInterest$ = this.actions$.pipe(ofType(UserActions.ADD_PRODUCT_INTEREST), map((/**
         * @param {?} action
         * @return {?}
         */
        (action) => action.payload)), switchMap((/**
         * @param {?} payload
         * @return {?}
         */
        payload => this.userInterestsConnector
            .addInterest(payload.userId, payload.productCode, payload.notificationType)
            .pipe(switchMap((/**
         * @param {?} res
         * @return {?}
         */
        (res) => [
            new UserActions.LoadProductInterests({
                userId: payload.userId,
                productCode: payload.productCode,
                notificationType: payload.notificationType,
            }),
            new UserActions.AddProductInterestSuccess(res),
        ])), catchError((/**
         * @param {?} error
         * @return {?}
         */
        error => of(new UserActions.AddProductInterestFail(makeErrorSerializable(error)))))))));
    }
}
ProductInterestsEffect.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ProductInterestsEffect.ctorParameters = () => [
    { type: Actions },
    { type: UserInterestsConnector }
];
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ProductInterestsEffect.prototype, "loadProductInteres$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ProductInterestsEffect.prototype, "removeProductInterest$", void 0);
tslib_1.__decorate([
    Effect(),
    tslib_1.__metadata("design:type", Observable)
], ProductInterestsEffect.prototype, "addProductInterest$", void 0);
if (false) {
    /** @type {?} */
    ProductInterestsEffect.prototype.loadProductInteres$;
    /** @type {?} */
    ProductInterestsEffect.prototype.removeProductInterest$;
    /** @type {?} */
    ProductInterestsEffect.prototype.addProductInterest$;
    /**
     * @type {?}
     * @private
     */
    ProductInterestsEffect.prototype.actions$;
    /**
     * @type {?}
     * @private
     */
    ProductInterestsEffect.prototype.userInterestsConnector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1pbnRlcmVzdHMuZWZmZWN0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvZWZmZWN0cy9wcm9kdWN0LWludGVyZXN0cy5lZmZlY3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0scURBQXFELENBQUM7QUFDN0YsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFHMUUsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFDakMsWUFDVSxRQUFpQixFQUNqQixzQkFBOEM7UUFEOUMsYUFBUSxHQUFSLFFBQVEsQ0FBUztRQUNqQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBSXhELHdCQUFtQixHQUVmLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUNwQixNQUFNLENBQUMsV0FBVyxDQUFDLHNCQUFzQixDQUFDLEVBQzFDLEdBQUc7Ozs7UUFBQyxDQUFDLE1BQXdDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUMsRUFDakUsU0FBUzs7OztRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2xCLE9BQU8sSUFBSSxDQUFDLHNCQUFzQjtpQkFDL0IsWUFBWSxDQUNYLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLFFB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SixDQUNGLENBQUM7SUE5RkMsQ0FBQzs7O1lBTEwsVUFBVTs7OztZQVRNLE9BQU87WUFNZixzQkFBc0I7O0FBVzdCO0lBREMsTUFBTSxFQUFFO3NDQUNZLFVBQVU7bUVBNEI3QjtBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNlLFVBQVU7c0VBNkJoQztBQUdGO0lBREMsTUFBTSxFQUFFO3NDQUNZLFVBQVU7bUVBNEI3Qjs7O0lBNUZGLHFEQTZCRTs7SUFFRix3REE4QkU7O0lBRUYscURBNkJFOzs7OztJQWhHQSwwQ0FBeUI7Ozs7O0lBQ3pCLHdEQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRWZmZWN0LCBBY3Rpb25zLCBvZlR5cGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9wcm9kdWN0LWludGVyZXN0Lm1vZGVsJztcbmltcG9ydCB7IFVzZXJJbnRlcmVzdHNDb25uZWN0b3IgfSBmcm9tICcuLi8uLi9jb25uZWN0b3JzL2ludGVyZXN0cy91c2VyLWludGVyZXN0cy5jb25uZWN0b3InO1xuaW1wb3J0IHsgbWFrZUVycm9yU2VyaWFsaXphYmxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9zZXJpYWxpemF0aW9uLXV0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RJbnRlcmVzdHNFZmZlY3Qge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGFjdGlvbnMkOiBBY3Rpb25zLFxuICAgIHByaXZhdGUgdXNlckludGVyZXN0c0Nvbm5lY3RvcjogVXNlckludGVyZXN0c0Nvbm5lY3RvclxuICApIHt9XG5cbiAgQEVmZmVjdCgpXG4gIGxvYWRQcm9kdWN0SW50ZXJlcyQ6IE9ic2VydmFibGU8XG4gICAgVXNlckFjdGlvbnMuUHJvZHVjdEludGVyZXN0c0FjdGlvblxuICA+ID0gdGhpcy5hY3Rpb25zJC5waXBlKFxuICAgIG9mVHlwZShVc2VyQWN0aW9ucy5MT0FEX1BST0RVQ1RfSU5URVJFU1RTKSxcbiAgICBtYXAoKGFjdGlvbjogVXNlckFjdGlvbnMuTG9hZFByb2R1Y3RJbnRlcmVzdHMpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PiB7XG4gICAgICByZXR1cm4gdGhpcy51c2VySW50ZXJlc3RzQ29ubmVjdG9yXG4gICAgICAgIC5nZXRJbnRlcmVzdHMoXG4gICAgICAgICAgcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgcGF5bG9hZC5wYWdlU2l6ZSxcbiAgICAgICAgICBwYXlsb2FkLmN1cnJlbnRQYWdlLFxuICAgICAgICAgIHBheWxvYWQuc29ydCxcbiAgICAgICAgICBwYXlsb2FkLnByb2R1Y3RDb2RlLFxuICAgICAgICAgIHBheWxvYWQubm90aWZpY2F0aW9uVHlwZVxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIG1hcCgoaW50ZXJlc3RzOiBQcm9kdWN0SW50ZXJlc3RTZWFyY2hSZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVXNlckFjdGlvbnMuTG9hZFByb2R1Y3RJbnRlcmVzdHNTdWNjZXNzKGludGVyZXN0cyk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkUHJvZHVjdEludGVyZXN0c0ZhaWwoXG4gICAgICAgICAgICAgICAgbWFrZUVycm9yU2VyaWFsaXphYmxlKGVycm9yKVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgIH0pXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIHJlbW92ZVByb2R1Y3RJbnRlcmVzdCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuUkVNT1ZFX1BST0RVQ1RfSU5URVJFU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5SZW1vdmVQcm9kdWN0SW50ZXJlc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy51c2VySW50ZXJlc3RzQ29ubmVjdG9yXG4gICAgICAgIC5yZW1vdmVJbnRlcmVzdChwYXlsb2FkLnVzZXJJZCwgcGF5bG9hZC5pdGVtKVxuICAgICAgICAucGlwZShcbiAgICAgICAgICBzd2l0Y2hNYXAoZGF0YSA9PiBbXG4gICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuTG9hZFByb2R1Y3RJbnRlcmVzdHMoXG4gICAgICAgICAgICAgIHBheWxvYWQuc2luZ2xlRGVsZXRlXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiBwYXlsb2FkLml0ZW0ucHJvZHVjdC5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBub3RpZmljYXRpb25UeXBlOlxuICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQuaXRlbS5wcm9kdWN0SW50ZXJlc3RFbnRyeVswXS5pbnRlcmVzdFR5cGUsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiB7IHVzZXJJZDogcGF5bG9hZC51c2VySWQgfVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5SZW1vdmVQcm9kdWN0SW50ZXJlc3RTdWNjZXNzKGRhdGEpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIGNhdGNoRXJyb3IoZXJyb3IgPT5cbiAgICAgICAgICAgIG9mKFxuICAgICAgICAgICAgICBuZXcgVXNlckFjdGlvbnMuUmVtb3ZlUHJvZHVjdEludGVyZXN0RmFpbChcbiAgICAgICAgICAgICAgICBtYWtlRXJyb3JTZXJpYWxpemFibGUoZXJyb3IpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICApXG4gICk7XG5cbiAgQEVmZmVjdCgpXG4gIGFkZFByb2R1Y3RJbnRlcmVzdCQ6IE9ic2VydmFibGU8QWN0aW9uPiA9IHRoaXMuYWN0aW9ucyQucGlwZShcbiAgICBvZlR5cGUoVXNlckFjdGlvbnMuQUREX1BST0RVQ1RfSU5URVJFU1QpLFxuICAgIG1hcCgoYWN0aW9uOiBVc2VyQWN0aW9ucy5BZGRQcm9kdWN0SW50ZXJlc3QpID0+IGFjdGlvbi5wYXlsb2FkKSxcbiAgICBzd2l0Y2hNYXAocGF5bG9hZCA9PlxuICAgICAgdGhpcy51c2VySW50ZXJlc3RzQ29ubmVjdG9yXG4gICAgICAgIC5hZGRJbnRlcmVzdChcbiAgICAgICAgICBwYXlsb2FkLnVzZXJJZCxcbiAgICAgICAgICBwYXlsb2FkLnByb2R1Y3RDb2RlLFxuICAgICAgICAgIHBheWxvYWQubm90aWZpY2F0aW9uVHlwZVxuICAgICAgICApXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIHN3aXRjaE1hcCgocmVzOiBhbnkpID0+IFtcbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5Mb2FkUHJvZHVjdEludGVyZXN0cyh7XG4gICAgICAgICAgICAgIHVzZXJJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICAgIHByb2R1Y3RDb2RlOiBwYXlsb2FkLnByb2R1Y3RDb2RlLFxuICAgICAgICAgICAgICBub3RpZmljYXRpb25UeXBlOiBwYXlsb2FkLm5vdGlmaWNhdGlvblR5cGUsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5BZGRQcm9kdWN0SW50ZXJlc3RTdWNjZXNzKHJlcyksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PlxuICAgICAgICAgICAgb2YoXG4gICAgICAgICAgICAgIG5ldyBVc2VyQWN0aW9ucy5BZGRQcm9kdWN0SW50ZXJlc3RGYWlsKFxuICAgICAgICAgICAgICAgIG1ha2VFcnJvclNlcmlhbGl6YWJsZShlcnJvcilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIClcbiAgKTtcbn1cbiJdfQ==