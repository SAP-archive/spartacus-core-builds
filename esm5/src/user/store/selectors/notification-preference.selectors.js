/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getUserState } from './feature.selector';
import { loaderValueSelector, loaderLoadingSelector, } from '../../../state/utils/loader/loader.selectors';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.notificationPreferences; };
/** @type {?} */
export var getPreferencesLoaderState = createSelector(getUserState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return loaderValueSelector(state); };
/** @type {?} */
export var getPreferences = createSelector(getPreferencesLoaderState, (ɵ1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return loaderValueSelector(state).filter((/**
     * @param {?} p
     * @return {?}
     */
    function (p) { return p.enabled; }));
};
/** @type {?} */
export var getEnabledPreferences = createSelector(getPreferencesLoaderState, (ɵ2));
var ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return loaderLoadingSelector(state); };
/** @type {?} */
export var getPreferencesLoading = createSelector(getPreferencesLoaderState, (ɵ3));
export { ɵ0, ɵ1, ɵ2, ɵ3 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLXByZWZlcmVuY2Uuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFJL0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFDTCxtQkFBbUIsRUFDbkIscUJBQXFCLEdBQ3RCLE1BQU0sOENBQThDLENBQUM7Ozs7O0FBT3BELFVBQUMsS0FBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyx1QkFBdUIsRUFBN0IsQ0FBNkI7O0FBTHJELE1BQU0sS0FBTyx5QkFBeUIsR0FHbEMsY0FBYyxDQUNoQixZQUFZLE9BRWI7Ozs7O0FBT0MsVUFBQyxLQUE0QyxJQUFLLE9BQUEsbUJBQW1CLENBQUMsS0FBSyxDQUFDLEVBQTFCLENBQTBCOztBQUw5RSxNQUFNLEtBQU8sY0FBYyxHQUd2QixjQUFjLENBQ2hCLHlCQUF5QixPQUUxQjs7Ozs7QUFPQyxVQUFDLEtBQTRDO0lBQzNDLE9BQUEsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTs7OztJQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sRUFBVCxDQUFTLEVBQUM7QUFBakQsQ0FBaUQ7O0FBTnJELE1BQU0sS0FBTyxxQkFBcUIsR0FHOUIsY0FBYyxDQUNoQix5QkFBeUIsT0FHMUI7Ozs7O0FBT0MsVUFBQyxLQUE0QyxJQUFLLE9BQUEscUJBQXFCLENBQUMsS0FBSyxDQUFDLEVBQTVCLENBQTRCOztBQUxoRixNQUFNLEtBQU8scUJBQXFCLEdBRzlCLGNBQWMsQ0FDaEIseUJBQXlCLE9BRTFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25QcmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbm90aWZpY2F0aW9uLXByZWZlcmVuY2UubW9kZWwnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIsIFVzZXJTdGF0ZSB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgZ2V0VXNlclN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcbmltcG9ydCB7XG4gIGxvYWRlclZhbHVlU2VsZWN0b3IsXG4gIGxvYWRlckxvYWRpbmdTZWxlY3Rvcixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5zZWxlY3RvcnMnO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJlZmVyZW5jZXNMb2FkZXJTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgTG9hZGVyU3RhdGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPlxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyU3RhdGUsXG4gIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5ub3RpZmljYXRpb25QcmVmZXJlbmNlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFByZWZlcmVuY2VzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBOb3RpZmljYXRpb25QcmVmZXJlbmNlW11cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UHJlZmVyZW5jZXNMb2FkZXJTdGF0ZSxcbiAgKHN0YXRlOiBMb2FkZXJTdGF0ZTxOb3RpZmljYXRpb25QcmVmZXJlbmNlW10+KSA9PiBsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEVuYWJsZWRQcmVmZXJlbmNlczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByZWZlcmVuY2VzTG9hZGVyU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPikgPT5cbiAgICBsb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKS5maWx0ZXIocCA9PiBwLmVuYWJsZWQpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UHJlZmVyZW5jZXNMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFByZWZlcmVuY2VzTG9hZGVyU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8Tm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdPikgPT4gbG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcbiJdfQ==