import { createSelector } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/loader/loader-group.selectors';
import { getAsmState } from './feature.selector';
var ɵ0 = function (state) { return state.customerSearchResult; };
export var getCustomerSearchResultsLoaderState = createSelector(getAsmState, ɵ0);
var ɵ1 = function (state) {
    return StateLoaderSelectors.loaderValueSelector(state);
};
export var getCustomerSearchResults = createSelector(getCustomerSearchResultsLoaderState, ɵ1);
var ɵ2 = function (state) {
    return StateLoaderSelectors.loaderLoadingSelector(state);
};
export var getCustomerSearchResultsLoading = createSelector(getCustomerSearchResultsLoaderState, ɵ2);
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VhcmNoLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hc20vc3RvcmUvc2VsZWN0b3JzL2N1c3RvbWVyLXNlYXJjaC5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFJMUYsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO1NBTy9DLFVBQUMsS0FBZSxJQUFLLE9BQUEsS0FBSyxDQUFDLG9CQUFvQixFQUExQixDQUEwQjtBQUxqRCxNQUFNLENBQUMsSUFBTSxtQ0FBbUMsR0FHNUMsY0FBYyxDQUNoQixXQUFXLEtBRVosQ0FBQztTQUtzRCxVQUFBLEtBQUs7SUFDM0QsT0FBQSxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUM7QUFBL0MsQ0FBK0M7QUFKakQsTUFBTSxDQUFDLElBQU0sd0JBQXdCLEdBR2pDLGNBQWMsQ0FBQyxtQ0FBbUMsS0FFckQsQ0FBQztTQUtzRCxVQUFBLEtBQUs7SUFDM0QsT0FBQSxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7QUFBakQsQ0FBaUQ7QUFKbkQsTUFBTSxDQUFDLElBQU0sK0JBQStCLEdBR3hDLGNBQWMsQ0FBQyxtQ0FBbUMsS0FFckQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgU3RhdGVMb2FkZXJTZWxlY3RvcnMgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLWdyb3VwLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ3VzdG9tZXJTZWFyY2hQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FzbS5tb2RlbHMnO1xuaW1wb3J0IHsgQXNtU3RhdGUsIFN0YXRlV2l0aEFzbSB9IGZyb20gJy4uL2FzbS1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRBc21TdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXN0b21lclNlYXJjaFJlc3VsdHNMb2FkZXJTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQXNtLFxuICBMb2FkZXJTdGF0ZTxDdXN0b21lclNlYXJjaFBhZ2U+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldEFzbVN0YXRlLFxuICAoc3RhdGU6IEFzbVN0YXRlKSA9PiBzdGF0ZS5jdXN0b21lclNlYXJjaFJlc3VsdFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1c3RvbWVyU2VhcmNoUmVzdWx0czogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQXNtLFxuICBDdXN0b21lclNlYXJjaFBhZ2Vcbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRDdXN0b21lclNlYXJjaFJlc3VsdHNMb2FkZXJTdGF0ZSwgc3RhdGUgPT5cbiAgU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyVmFsdWVTZWxlY3RvcihzdGF0ZSlcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXN0b21lclNlYXJjaFJlc3VsdHNMb2FkaW5nOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhBc20sXG4gIGJvb2xlYW5cbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRDdXN0b21lclNlYXJjaFJlc3VsdHNMb2FkZXJTdGF0ZSwgc3RhdGUgPT5cbiAgU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyTG9hZGluZ1NlbGVjdG9yKHN0YXRlKVxuKTtcbiJdfQ==