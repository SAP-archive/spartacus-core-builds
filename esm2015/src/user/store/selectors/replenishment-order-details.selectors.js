import { createSelector } from '@ngrx/store';
import { StateUtils } from '../../../state/utils/index';
import { getUserState } from './feature.selector';
const ɵ0 = (state) => state.replenishmentOrder;
export const getReplenishmentOrderState = createSelector(getUserState, ɵ0);
const ɵ1 = (state) => StateUtils.loaderValueSelector(state);
export const getReplenishmentOrderDetailsValue = createSelector(getReplenishmentOrderState, ɵ1);
const ɵ2 = (state) => StateUtils.loaderLoadingSelector(state);
export const getReplenishmentOrderDetailsLoading = createSelector(getReplenishmentOrderState, ɵ2);
const ɵ3 = (state) => StateUtils.loaderSuccessSelector(state);
export const getReplenishmentOrderDetailsSuccess = createSelector(getReplenishmentOrderState, ɵ3);
const ɵ4 = (state) => StateUtils.loaderErrorSelector(state);
export const getReplenishmentOrderDetailsError = createSelector(getReplenishmentOrderState, ɵ4);
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwbGVuaXNobWVudC1vcmRlci1kZXRhaWxzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3VzZXIvc3RvcmUvc2VsZWN0b3JzL3JlcGxlbmlzaG1lbnQtb3JkZXItZGV0YWlscy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFFL0QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztXQU9oRCxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxrQkFBa0I7QUFMaEQsTUFBTSxDQUFDLE1BQU0sMEJBQTBCLEdBR25DLGNBQWMsQ0FDaEIsWUFBWSxLQUViLENBQUM7V0FPQSxDQUFDLEtBQXNDLEVBQUUsRUFBRSxDQUN6QyxVQUFVLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO0FBTnpDLE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUcxQyxjQUFjLENBQ2hCLDBCQUEwQixLQUczQixDQUFDO1dBT0EsQ0FBQyxLQUFzQyxFQUFFLEVBQUUsQ0FDekMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztBQU4zQyxNQUFNLENBQUMsTUFBTSxtQ0FBbUMsR0FHNUMsY0FBYyxDQUNoQiwwQkFBMEIsS0FHM0IsQ0FBQztXQU9BLENBQUMsS0FBc0MsRUFBRSxFQUFFLENBQ3pDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7QUFOM0MsTUFBTSxDQUFDLE1BQU0sbUNBQW1DLEdBRzVDLGNBQWMsQ0FDaEIsMEJBQTBCLEtBRzNCLENBQUM7V0FPQSxDQUFDLEtBQXNDLEVBQUUsRUFBRSxDQUN6QyxVQUFVLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO0FBTnpDLE1BQU0sQ0FBQyxNQUFNLGlDQUFpQyxHQUcxQyxjQUFjLENBQ2hCLDBCQUEwQixLQUczQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBSZXBsZW5pc2htZW50T3JkZXIgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9yZXBsZW5pc2htZW50LW9yZGVyLm1vZGVsJztcbmltcG9ydCB7IFN0YXRlVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgU3RhdGVXaXRoVXNlciwgVXNlclN0YXRlIH0gZnJvbSAnLi4vdXNlci1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRVc2VyU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVwbGVuaXNobWVudE9yZGVyU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIExvYWRlclN0YXRlPFJlcGxlbmlzaG1lbnRPcmRlcj5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0VXNlclN0YXRlLFxuICAoc3RhdGU6IFVzZXJTdGF0ZSkgPT4gc3RhdGUucmVwbGVuaXNobWVudE9yZGVyXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVwbGVuaXNobWVudE9yZGVyRGV0YWlsc1ZhbHVlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhVc2VyLFxuICBSZXBsZW5pc2htZW50T3JkZXJcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UmVwbGVuaXNobWVudE9yZGVyU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8UmVwbGVuaXNobWVudE9yZGVyPikgPT5cbiAgICBTdGF0ZVV0aWxzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVwbGVuaXNobWVudE9yZGVyRGV0YWlsc0xvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFVzZXIsXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UmVwbGVuaXNobWVudE9yZGVyU3RhdGUsXG4gIChzdGF0ZTogTG9hZGVyU3RhdGU8UmVwbGVuaXNobWVudE9yZGVyPikgPT5cbiAgICBTdGF0ZVV0aWxzLmxvYWRlckxvYWRpbmdTZWxlY3RvcihzdGF0ZSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRSZXBsZW5pc2htZW50T3JkZXJEZXRhaWxzU3VjY2VzczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSZXBsZW5pc2htZW50T3JkZXJTdGF0ZSxcbiAgKHN0YXRlOiBMb2FkZXJTdGF0ZTxSZXBsZW5pc2htZW50T3JkZXI+KSA9PlxuICAgIFN0YXRlVXRpbHMubG9hZGVyU3VjY2Vzc1NlbGVjdG9yKHN0YXRlKVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFJlcGxlbmlzaG1lbnRPcmRlckRldGFpbHNFcnJvcjogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoVXNlcixcbiAgYm9vbGVhblxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRSZXBsZW5pc2htZW50T3JkZXJTdGF0ZSxcbiAgKHN0YXRlOiBMb2FkZXJTdGF0ZTxSZXBsZW5pc2htZW50T3JkZXI+KSA9PlxuICAgIFN0YXRlVXRpbHMubG9hZGVyRXJyb3JTZWxlY3RvcihzdGF0ZSlcbik7XG4iXX0=