import { createSelector } from '@ngrx/store';
import { StateUtils } from '../../../state/utils/index';
import { getStoreFinderState } from './feature.selector';
const ɵ0 = (storesState) => storesState.findStores;
export const getFindStoresState = createSelector(getStoreFinderState, ɵ0);
const ɵ1 = (state) => StateUtils.loaderValueSelector(state);
export const getFindStoresEntities = createSelector(getFindStoresState, ɵ1);
const ɵ2 = (state) => StateUtils.loaderLoadingSelector(state);
export const getStoresLoading = createSelector(getFindStoresState, ɵ2);
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmluZC1zdG9yZXMuc2VsZWN0b3JzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9zdG9yZS9zZWxlY3RvcnMvZmluZC1zdG9yZXMuc2VsZWN0b3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQU94RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztXQU92RCxDQUFDLFdBQXdCLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVO0FBTHRELE1BQU0sQ0FBQyxNQUFNLGtCQUFrQixHQUczQixjQUFjLENBQ2hCLG1CQUFtQixLQUVwQixDQUFDO1dBS3FDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDL0MsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQztBQUp2QyxNQUFNLENBQUMsTUFBTSxxQkFBcUIsR0FHOUIsY0FBYyxDQUFDLGtCQUFrQixLQUVwQyxDQUFDO1dBS3FDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FDL0MsVUFBVSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztBQUp6QyxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FHekIsY0FBYyxDQUFDLGtCQUFrQixLQUVwQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7XG4gIEZpbmRTdG9yZXNTdGF0ZSxcbiAgU3RhdGVXaXRoU3RvcmVGaW5kZXIsXG4gIFN0b3Jlc1N0YXRlLFxufSBmcm9tICcuLi9zdG9yZS1maW5kZXItc3RhdGUnO1xuaW1wb3J0IHsgZ2V0U3RvcmVGaW5kZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRGaW5kU3RvcmVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFN0b3JlRmluZGVyLFxuICBMb2FkZXJTdGF0ZTxGaW5kU3RvcmVzU3RhdGU+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFN0b3JlRmluZGVyU3RhdGUsXG4gIChzdG9yZXNTdGF0ZTogU3RvcmVzU3RhdGUpID0+IHN0b3Jlc1N0YXRlLmZpbmRTdG9yZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRGaW5kU3RvcmVzRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFN0b3JlRmluZGVyLFxuICBGaW5kU3RvcmVzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRGaW5kU3RvcmVzU3RhdGUsIChzdGF0ZSkgPT5cbiAgU3RhdGVVdGlscy5sb2FkZXJWYWx1ZVNlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFN0b3Jlc0xvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFN0b3JlRmluZGVyLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0RmluZFN0b3Jlc1N0YXRlLCAoc3RhdGUpID0+XG4gIFN0YXRlVXRpbHMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcbiJdfQ==