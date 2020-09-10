import { createSelector } from '@ngrx/store';
import { StateUtils } from '../../../state/utils/index';
import { getUserState } from './feature.selector';
const ɵ0 = (state) => state.costCenters;
export const getCostCentersState = createSelector(getUserState, ɵ0);
const ɵ1 = (state) => StateUtils.loaderValueSelector(state);
export const getCostCenters = createSelector(getCostCentersState, ɵ1);
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb3N0LWNlbnRlci5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9zZWxlY3RvcnMvdXNlci1jb3N0LWNlbnRlci5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztXQUtqQixDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXO0FBSHhFLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUc1QixjQUFjLENBQUMsWUFBWSxLQUEwQyxDQUFDO1dBS2xDLENBQUMsS0FBZ0MsRUFBRSxFQUFFLENBQzNFLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7QUFKdkMsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUd2QixjQUFjLENBQUMsbUJBQW1CLEtBRXJDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IENvc3RDZW50ZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9vcmctdW5pdC5tb2RlbCc7XG5pbXBvcnQgeyBTdGF0ZVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7IFN0YXRlV2l0aFVzZXIsIFVzZXJTdGF0ZSB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuaW1wb3J0IHsgZ2V0VXNlclN0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9yJztcblxuZXhwb3J0IGNvbnN0IGdldENvc3RDZW50ZXJzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIExvYWRlclN0YXRlPENvc3RDZW50ZXJbXT5cbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRVc2VyU3RhdGUsIChzdGF0ZTogVXNlclN0YXRlKSA9PiBzdGF0ZS5jb3N0Q2VudGVycyk7XG5cbmV4cG9ydCBjb25zdCBnZXRDb3N0Q2VudGVyczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgQ29zdENlbnRlcltdXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q29zdENlbnRlcnNTdGF0ZSwgKHN0YXRlOiBMb2FkZXJTdGF0ZTxDb3N0Q2VudGVyW10+KSA9PlxuICBTdGF0ZVV0aWxzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuIl19