import { createSelector } from '@ngrx/store';
import { StateUtils } from '../../../state/utils/index';
import { getUserState } from './feature.selector';
const ɵ0 = (state) => state.orders;
export const getOrdersState = createSelector(getUserState, ɵ0);
const ɵ1 = (state) => StateUtils.loaderSuccessSelector(state);
export const getOrdersLoaded = createSelector(getOrdersState, ɵ1);
const ɵ2 = (state) => StateUtils.loaderValueSelector(state);
export const getOrders = createSelector(getOrdersState, ɵ2);
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1vcmRlcnMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL3VzZXItb3JkZXJzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUUvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFHeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO1dBS2pCLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU07QUFIbkUsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUd2QixjQUFjLENBQUMsWUFBWSxLQUFxQyxDQUFDO1dBS2xDLENBQUMsS0FBb0MsRUFBRSxFQUFFLENBQzFFLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7QUFKekMsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUd4QixjQUFjLENBQUMsY0FBYyxLQUVoQyxDQUFDO1dBS2lDLENBQUMsS0FBb0MsRUFBRSxFQUFFLENBQzFFLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7QUFKdkMsTUFBTSxDQUFDLE1BQU0sU0FBUyxHQUdsQixjQUFjLENBQUMsY0FBYyxLQUVoQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPcmRlckhpc3RvcnlMaXN0IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvb3JkZXIubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVVdGlscyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhVc2VyLCBVc2VyU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCB7IGdldFVzZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRPcmRlcnNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgTG9hZGVyU3RhdGU8T3JkZXJIaXN0b3J5TGlzdD5cbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRVc2VyU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5vcmRlcnMpO1xuXG5leHBvcnQgY29uc3QgZ2V0T3JkZXJzTG9hZGVkOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0T3JkZXJzU3RhdGUsIChzdGF0ZTogTG9hZGVyU3RhdGU8T3JkZXJIaXN0b3J5TGlzdD4pID0+XG4gIFN0YXRlVXRpbHMubG9hZGVyU3VjY2Vzc1NlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldE9yZGVyczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgT3JkZXJIaXN0b3J5TGlzdFxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldE9yZGVyc1N0YXRlLCAoc3RhdGU6IExvYWRlclN0YXRlPE9yZGVySGlzdG9yeUxpc3Q+KSA9PlxuICBTdGF0ZVV0aWxzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuIl19