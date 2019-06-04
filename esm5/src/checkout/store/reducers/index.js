/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken } from '@angular/core';
import { CHECKOUT_DETAILS, } from '../checkout-state';
import * as fromAction from '../actions/index';
import { LOGOUT } from '../../../auth/store/actions/index';
import { CURRENCY_CHANGE, LANGUAGE_CHANGE, } from '../../../site-context/store/actions/index';
import * as fromAddressVerification from './address-verification.reducer';
import * as fromCardTypes from './card-types.reducer';
import * as fromCheckout from './checkout.reducer';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        steps: loaderReducer(CHECKOUT_DETAILS, fromCheckout.reducer),
        cardTypes: fromCardTypes.reducer,
        addressVerification: fromAddressVerification.reducer,
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('CheckoutReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearCheckoutState(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        switch (action.type) {
            case LANGUAGE_CHANGE: {
                action = new fromAction.CheckoutClearMiscsData();
                break;
            }
            case CURRENCY_CHANGE: {
                action = new fromAction.ClearSupportedDeliveryModes();
                break;
            }
            case LOGOUT: {
                action = new fromAction.ClearCheckoutData();
                break;
            }
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export var metaReducers = [clearCheckoutState];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY2hlY2tvdXQvc3RvcmUvcmVkdWNlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQVksTUFBTSxlQUFlLENBQUM7QUFJekQsT0FBTyxFQUVMLGdCQUFnQixHQUVqQixNQUFNLG1CQUFtQixDQUFDO0FBQzNCLE9BQU8sS0FBSyxVQUFVLE1BQU0sa0JBQWtCLENBQUM7QUFDL0MsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzNELE9BQU8sRUFDTCxlQUFlLEVBQ2YsZUFBZSxHQUNoQixNQUFNLDJDQUEyQyxDQUFDO0FBRW5ELE9BQU8sS0FBSyx1QkFBdUIsTUFBTSxnQ0FBZ0MsQ0FBQztBQUMxRSxPQUFPLEtBQUssYUFBYSxNQUFNLHNCQUFzQixDQUFDO0FBQ3RELE9BQU8sS0FBSyxZQUFZLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7O0FBRTNFLE1BQU0sVUFBVSxXQUFXO0lBQ3pCLE9BQU87UUFDTCxLQUFLLEVBQUUsYUFBYSxDQUNsQixnQkFBZ0IsRUFDaEIsWUFBWSxDQUFDLE9BQU8sQ0FDckI7UUFDRCxTQUFTLEVBQUUsYUFBYSxDQUFDLE9BQU87UUFDaEMsbUJBQW1CLEVBQUUsdUJBQXVCLENBQUMsT0FBTztLQUNyRCxDQUFDO0FBQ0osQ0FBQzs7QUFFRCxNQUFNLEtBQU8sWUFBWSxHQUVyQixJQUFJLGNBQWMsQ0FBa0Msa0JBQWtCLENBQUM7O0FBRTNFLE1BQU0sS0FBTyxlQUFlLEdBQWE7SUFDdkMsT0FBTyxFQUFFLFlBQVk7SUFDckIsVUFBVSxFQUFFLFdBQVc7Q0FDeEI7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUNoQyxPQUFxQztJQUVyQzs7Ozs7SUFBTyxVQUFTLEtBQUssRUFBRSxNQUFNO1FBQzNCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNuQixLQUFLLGVBQWUsQ0FBQyxDQUFDO2dCQUNwQixNQUFNLEdBQUcsSUFBSSxVQUFVLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztnQkFDakQsTUFBTTthQUNQO1lBQ0QsS0FBSyxlQUFlLENBQUMsQ0FBQztnQkFDcEIsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLDJCQUEyQixFQUFFLENBQUM7Z0JBQ3RELE1BQU07YUFDUDtZQUNELEtBQUssTUFBTSxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxHQUFHLElBQUksVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzVDLE1BQU07YUFDUDtTQUNGO1FBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsRUFBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FBaUMsQ0FBQyxrQkFBa0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBBY3Rpb25SZWR1Y2VyTWFwLCBNZXRhUmVkdWNlciwgQWN0aW9uUmVkdWNlciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHtcbiAgQ2hlY2tvdXRTdGF0ZSxcbiAgQ0hFQ0tPVVRfREVUQUlMUyxcbiAgQ2hlY2tvdXRTdGVwc1N0YXRlLFxufSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgTE9HT1VUIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9zdG9yZS9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7XG4gIENVUlJFTkNZX0NIQU5HRSxcbiAgTEFOR1VBR0VfQ0hBTkdFLFxufSBmcm9tICcuLi8uLi8uLi9zaXRlLWNvbnRleHQvc3RvcmUvYWN0aW9ucy9pbmRleCc7XG5cbmltcG9ydCAqIGFzIGZyb21BZGRyZXNzVmVyaWZpY2F0aW9uIGZyb20gJy4vYWRkcmVzcy12ZXJpZmljYXRpb24ucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tQ2FyZFR5cGVzIGZyb20gJy4vY2FyZC10eXBlcy5yZWR1Y2VyJztcbmltcG9ydCAqIGFzIGZyb21DaGVja291dCBmcm9tICcuL2NoZWNrb3V0LnJlZHVjZXInO1xuaW1wb3J0IHsgbG9hZGVyUmVkdWNlciB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXIucmVkdWNlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWR1Y2VycygpOiBBY3Rpb25SZWR1Y2VyTWFwPENoZWNrb3V0U3RhdGU+IHtcbiAgcmV0dXJuIHtcbiAgICBzdGVwczogbG9hZGVyUmVkdWNlcjxDaGVja291dFN0ZXBzU3RhdGU+KFxuICAgICAgQ0hFQ0tPVVRfREVUQUlMUyxcbiAgICAgIGZyb21DaGVja291dC5yZWR1Y2VyXG4gICAgKSxcbiAgICBjYXJkVHlwZXM6IGZyb21DYXJkVHlwZXMucmVkdWNlcixcbiAgICBhZGRyZXNzVmVyaWZpY2F0aW9uOiBmcm9tQWRkcmVzc1ZlcmlmaWNhdGlvbi5yZWR1Y2VyLFxuICB9O1xufVxuXG5leHBvcnQgY29uc3QgcmVkdWNlclRva2VuOiBJbmplY3Rpb25Ub2tlbjxcbiAgQWN0aW9uUmVkdWNlck1hcDxDaGVja291dFN0YXRlPlxuPiA9IG5ldyBJbmplY3Rpb25Ub2tlbjxBY3Rpb25SZWR1Y2VyTWFwPENoZWNrb3V0U3RhdGU+PignQ2hlY2tvdXRSZWR1Y2VycycpO1xuXG5leHBvcnQgY29uc3QgcmVkdWNlclByb3ZpZGVyOiBQcm92aWRlciA9IHtcbiAgcHJvdmlkZTogcmVkdWNlclRva2VuLFxuICB1c2VGYWN0b3J5OiBnZXRSZWR1Y2Vycyxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhckNoZWNrb3V0U3RhdGUoXG4gIHJlZHVjZXI6IEFjdGlvblJlZHVjZXI8Q2hlY2tvdXRTdGF0ZT5cbik6IEFjdGlvblJlZHVjZXI8Q2hlY2tvdXRTdGF0ZT4ge1xuICByZXR1cm4gZnVuY3Rpb24oc3RhdGUsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgTEFOR1VBR0VfQ0hBTkdFOiB7XG4gICAgICAgIGFjdGlvbiA9IG5ldyBmcm9tQWN0aW9uLkNoZWNrb3V0Q2xlYXJNaXNjc0RhdGEoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIENVUlJFTkNZX0NIQU5HRToge1xuICAgICAgICBhY3Rpb24gPSBuZXcgZnJvbUFjdGlvbi5DbGVhclN1cHBvcnRlZERlbGl2ZXJ5TW9kZXMoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlIExPR09VVDoge1xuICAgICAgICBhY3Rpb24gPSBuZXcgZnJvbUFjdGlvbi5DbGVhckNoZWNrb3V0RGF0YSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBtZXRhUmVkdWNlcnM6IE1ldGFSZWR1Y2VyPENoZWNrb3V0U3RhdGU+W10gPSBbY2xlYXJDaGVja291dFN0YXRlXTtcbiJdfQ==