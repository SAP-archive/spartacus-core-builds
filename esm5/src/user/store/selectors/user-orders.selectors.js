/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/index';
import { getUserState } from './feature.selector';
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.orders; };
/** @type {?} */
export var getOrdersState = createSelector(getUserState, (ɵ0));
var ɵ1 = /**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return StateLoaderSelectors.loaderSuccessSelector(state);
};
/** @type {?} */
export var getOrdersLoaded = createSelector(getOrdersState, (ɵ1));
var ɵ2 = /**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return StateLoaderSelectors.loaderValueSelector(state);
};
/** @type {?} */
export var getOrders = createSelector(getOrdersState, (ɵ2));
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL3VzZXItb3JkZXJzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7OztBQU9oRCxVQUFDLEtBQWdCLElBQUssT0FBQSxLQUFLLENBQUMsTUFBTSxFQUFaLENBQVk7O0FBTHBDLE1BQU0sS0FBTyxjQUFjLEdBR3ZCLGNBQWMsQ0FDaEIsWUFBWSxPQUViOzs7OztBQU9DLFVBQUMsS0FBb0M7SUFDbkMsT0FBQSxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7QUFBakQsQ0FBaUQ7O0FBTnJELE1BQU0sS0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsY0FBYyxPQUdmOzs7OztBQU9DLFVBQUMsS0FBb0M7SUFDbkMsT0FBQSxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7QUFBL0MsQ0FBK0M7O0FBTm5ELE1BQU0sS0FBTyxTQUFTLEdBR2xCLGNBQWMsQ0FDaEIsY0FBYyxPQUdmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVMb2FkZXJTZWxlY3RvcnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciwgVXNlclN0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRVc2VyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0T3JkZXJzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIExvYWRlclN0YXRlPE9yZGVySGlzdG9yeUxpc3Q+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFVzZXJTdGF0ZSxcbiAgKHN0YXRlOiBVc2VyU3RhdGUpID0+IHN0YXRlLm9yZGVyc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldE9yZGVyc0xvYWRlZDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRPcmRlcnNTdGF0ZSxcbiAgKHN0YXRlOiBMb2FkZXJTdGF0ZTxPcmRlckhpc3RvcnlMaXN0PikgPT5cbiAgICBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJTdWNjZXNzU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0T3JkZXJzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBPcmRlckhpc3RvcnlMaXN0XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldE9yZGVyc1N0YXRlLFxuICAoc3RhdGU6IExvYWRlclN0YXRlPE9yZGVySGlzdG9yeUxpc3Q+KSA9PlxuICAgIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuIl19