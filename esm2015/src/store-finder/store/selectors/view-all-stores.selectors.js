import { createSelector } from '@ngrx/store';
import { StateUtils } from '../../../state/utils/index';
import { getStoreFinderState } from './feature.selector';
const ɵ0 = (storesState) => storesState.viewAllStores;
export const getViewAllStoresState = createSelector(getStoreFinderState, ɵ0);
const ɵ1 = (state) => StateUtils.loaderValueSelector(state);
export const getViewAllStoresEntities = createSelector(getViewAllStoresState, ɵ1);
const ɵ2 = (state) => StateUtils.loaderLoadingSelector(state);
export const getViewAllStoresLoading = createSelector(getViewAllStoresState, ɵ2);
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvc2VsZWN0b3JzL3ZpZXctYWxsLXN0b3Jlcy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFDL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBT3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO1dBT3ZELENBQUMsV0FBd0IsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLGFBQWE7QUFMekQsTUFBTSxDQUFDLE1BQU0scUJBQXFCLEdBRzlCLGNBQWMsQ0FDaEIsbUJBQW1CLEtBRXBCLENBQUM7V0FLd0MsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNsRCxVQUFVLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO0FBSnZDLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQUdqQyxjQUFjLENBQUMscUJBQXFCLEtBRXZDLENBQUM7V0FLd0MsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNsRCxVQUFVLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO0FBSnpDLE1BQU0sQ0FBQyxNQUFNLHVCQUF1QixHQUdoQyxjQUFjLENBQUMscUJBQXFCLEtBRXZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgU3RhdGVXaXRoU3RvcmVGaW5kZXIsXG4gIFN0b3Jlc1N0YXRlLFxuICBWaWV3QWxsU3RvcmVzU3RhdGUsXG59IGZyb20gJy4uL3N0b3JlLWZpbmRlci1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRTdG9yZUZpbmRlclN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldFZpZXdBbGxTdG9yZXNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU3RvcmVGaW5kZXIsXG4gIExvYWRlclN0YXRlPFZpZXdBbGxTdG9yZXNTdGF0ZT5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0U3RvcmVGaW5kZXJTdGF0ZSxcbiAgKHN0b3Jlc1N0YXRlOiBTdG9yZXNTdGF0ZSkgPT4gc3RvcmVzU3RhdGUudmlld0FsbFN0b3Jlc1xuKTtcblxuZXhwb3J0IGNvbnN0IGdldFZpZXdBbGxTdG9yZXNFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoU3RvcmVGaW5kZXIsXG4gIFZpZXdBbGxTdG9yZXNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldFZpZXdBbGxTdG9yZXNTdGF0ZSwgKHN0YXRlKSA9PlxuICBTdGF0ZVV0aWxzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFN0b3JlRmluZGVyLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0Vmlld0FsbFN0b3Jlc1N0YXRlLCAoc3RhdGUpID0+XG4gIFN0YXRlVXRpbHMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcbiJdfQ==