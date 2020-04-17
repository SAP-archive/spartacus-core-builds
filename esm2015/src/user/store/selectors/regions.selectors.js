import { createSelector } from '@ngrx/store';
import { StateUtils } from '../../../state/utils/index';
import { getUserState } from './feature.selector';
const ɵ0 = (state) => state.regions;
export const getRegionsLoaderState = createSelector(getUserState, ɵ0);
const ɵ1 = (state) => {
    return StateUtils.loaderValueSelector(state).entities;
};
export const getAllRegions = createSelector(getRegionsLoaderState, ɵ1);
const ɵ2 = (state) => ({
    loaded: StateUtils.loaderSuccessSelector(state),
    loading: StateUtils.loaderLoadingSelector(state),
    regions: StateUtils.loaderValueSelector(state).entities,
    country: StateUtils.loaderValueSelector(state).country,
});
export const getRegionsDataAndLoading = createSelector(getRegionsLoaderState, ɵ2);
const ɵ3 = (state) => StateUtils.loaderValueSelector(state).country;
export const getRegionsCountry = createSelector(getRegionsLoaderState, ɵ3);
const ɵ4 = (state) => StateUtils.loaderLoadingSelector(state);
export const getRegionsLoading = createSelector(getRegionsLoaderState, ɵ4);
const ɵ5 = (state) => StateUtils.loaderSuccessSelector(state);
export const getRegionsLoaded = createSelector(getRegionsLoaderState, ɵ5);
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9zZWxlY3RvcnMvcmVnaW9ucy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztXQUtqQixDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPO0FBSHBFLE1BQU0sQ0FBQyxNQUFNLHFCQUFxQixHQUc5QixjQUFjLENBQUMsWUFBWSxLQUFzQyxDQUFDO1dBT3BFLENBQUMsS0FBZ0MsRUFBRSxFQUFFO0lBQ25DLE9BQU8sVUFBVSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQztBQUN4RCxDQUFDO0FBUEgsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUd0QixjQUFjLENBQ2hCLHFCQUFxQixLQUl0QixDQUFDO1dBWUEsQ0FBQyxLQUFnQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLE1BQU0sRUFBRSxVQUFVLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO0lBQy9DLE9BQU8sRUFBRSxVQUFVLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO0lBQ2hELE9BQU8sRUFBRSxVQUFVLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUTtJQUN2RCxPQUFPLEVBQUUsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87Q0FDdkQsQ0FBQztBQWZKLE1BQU0sQ0FBQyxNQUFNLHdCQUF3QixHQVFqQyxjQUFjLENBQ2hCLHFCQUFxQixLQU90QixDQUFDO1dBT0EsQ0FBQyxLQUFnQyxFQUFFLEVBQUUsQ0FDbkMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU87QUFOakQsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBRzFCLGNBQWMsQ0FDaEIscUJBQXFCLEtBR3RCLENBQUM7V0FLd0MsQ0FBQyxLQUFnQyxFQUFFLEVBQUUsQ0FDN0UsVUFBVSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztBQUp6QyxNQUFNLENBQUMsTUFBTSxpQkFBaUIsR0FHMUIsY0FBYyxDQUFDLHFCQUFxQixLQUV2QyxDQUFDO1dBS3dDLENBQUMsS0FBZ0MsRUFBRSxFQUFFLENBQzdFLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7QUFKekMsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBR3pCLGNBQWMsQ0FBQyxxQkFBcUIsS0FFdkMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgUmVnaW9uIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvYWRkcmVzcy5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IFJlZ2lvbnNTdGF0ZSwgU3RhdGVXaXRoVXNlciwgVXNlclN0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRVc2VyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVnaW9uc0xvYWRlclN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBMb2FkZXJTdGF0ZTxSZWdpb25zU3RhdGU+XG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0VXNlclN0YXRlLCAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUucmVnaW9ucyk7XG5cbmV4cG9ydCBjb25zdCBnZXRBbGxSZWdpb25zOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBSZWdpb25bXVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSZWdpb25zTG9hZGVyU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8UmVnaW9uc1N0YXRlPikgPT4ge1xuICAgIHJldHVybiBTdGF0ZVV0aWxzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpLmVudGl0aWVzO1xuICB9XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVnaW9uc0RhdGFBbmRMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICB7XG4gICAgbG9hZGVkOiBib29sZWFuO1xuICAgIGxvYWRpbmc6IGJvb2xlYW47XG4gICAgcmVnaW9uczogUmVnaW9uW107XG4gICAgY291bnRyeTogc3RyaW5nO1xuICB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFJlZ2lvbnNMb2FkZXJTdGF0ZSxcbiAgKHN0YXRlOiBMb2FkZXJTdGF0ZTxSZWdpb25zU3RhdGU+KSA9PiAoe1xuICAgIGxvYWRlZDogU3RhdGVVdGlscy5sb2FkZXJTdWNjZXNzU2VsZWN0b3Ioc3RhdGUpLFxuICAgIGxvYWRpbmc6IFN0YXRlVXRpbHMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKSxcbiAgICByZWdpb25zOiBTdGF0ZVV0aWxzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpLmVudGl0aWVzLFxuICAgIGNvdW50cnk6IFN0YXRlVXRpbHMubG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSkuY291bnRyeSxcbiAgfSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRSZWdpb25zQ291bnRyeTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgc3RyaW5nXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFJlZ2lvbnNMb2FkZXJTdGF0ZSxcbiAgKHN0YXRlOiBMb2FkZXJTdGF0ZTxSZWdpb25zU3RhdGU+KSA9PlxuICAgIFN0YXRlVXRpbHMubG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSkuY291bnRyeVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbnNMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0UmVnaW9uc0xvYWRlclN0YXRlLCAoc3RhdGU6IExvYWRlclN0YXRlPFJlZ2lvbnNTdGF0ZT4pID0+XG4gIFN0YXRlVXRpbHMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFJlZ2lvbnNMb2FkZWQ6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRSZWdpb25zTG9hZGVyU3RhdGUsIChzdGF0ZTogTG9hZGVyU3RhdGU8UmVnaW9uc1N0YXRlPikgPT5cbiAgU3RhdGVVdGlscy5sb2FkZXJTdWNjZXNzU2VsZWN0b3Ioc3RhdGUpXG4pO1xuIl19