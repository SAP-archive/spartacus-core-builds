/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { getAuthState } from './feature.selector';
/** @type {?} */
var getUserTokenSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.token; });
var ɵ0 = getUserTokenSelector;
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.userToken; };
/** @type {?} */
export var getUserTokenState = createSelector(getAuthState, (ɵ1));
/** @type {?} */
export var getUserToken = createSelector(getUserTokenState, getUserTokenSelector);
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci10b2tlbi5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9zdG9yZS9zZWxlY3RvcnMvdXNlci10b2tlbi5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBRy9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7SUFFNUMsb0JBQW9COzs7O0FBQUcsVUFBQyxLQUFxQixJQUFLLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUE7Ozs7OztBQU9qRSxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsU0FBUyxFQUFmLENBQWU7O0FBTHZDLE1BQU0sS0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixZQUFZLE9BRWI7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FHckIsY0FBYyxDQUNoQixpQkFBaUIsRUFDakIsb0JBQW9CLENBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBVc2VyVG9rZW4gfSBmcm9tICcuLi8uLi9tb2RlbHMvdG9rZW4tdHlwZXMubW9kZWwnO1xuaW1wb3J0IHsgQXV0aFN0YXRlLCBTdGF0ZVdpdGhBdXRoLCBVc2VyVG9rZW5TdGF0ZSB9IGZyb20gJy4uL2F1dGgtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0QXV0aFN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuY29uc3QgZ2V0VXNlclRva2VuU2VsZWN0b3IgPSAoc3RhdGU6IFVzZXJUb2tlblN0YXRlKSA9PiBzdGF0ZS50b2tlbjtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXJUb2tlblN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBdXRoLFxuICBVc2VyVG9rZW5TdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRBdXRoU3RhdGUsXG4gIChzdGF0ZTogQXV0aFN0YXRlKSA9PiBzdGF0ZS51c2VyVG9rZW5cbik7XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyVG9rZW46IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aEF1dGgsXG4gIFVzZXJUb2tlblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRVc2VyVG9rZW5TdGF0ZSxcbiAgZ2V0VXNlclRva2VuU2VsZWN0b3Jcbik7XG4iXX0=