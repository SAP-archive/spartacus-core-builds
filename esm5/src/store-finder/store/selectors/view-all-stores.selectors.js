import { createSelector } from '@ngrx/store';
import { StateLoaderSelectors } from '../../../state/utils/index';
import { getStoreFinderState } from './feature.selector';
var ɵ0 = function (storesState) { return storesState.viewAllStores; };
export var getViewAllStoresState = createSelector(getStoreFinderState, ɵ0);
var ɵ1 = function (state) {
    return StateLoaderSelectors.loaderValueSelector(state);
};
export var getViewAllStoresEntities = createSelector(getViewAllStoresState, ɵ1);
var ɵ2 = function (state) {
    return StateLoaderSelectors.loaderLoadingSelector(state);
};
export var getViewAllStoresLoading = createSelector(getViewAllStoresState, ɵ2);
export { ɵ0, ɵ1, ɵ2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy1hbGwtc3RvcmVzLnNlbGVjdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zdG9yZS1maW5kZXIvc3RvcmUvc2VsZWN0b3JzL3ZpZXctYWxsLXN0b3Jlcy5zZWxlY3RvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFDL0QsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7U0FPdkQsVUFBQyxXQUF3QixJQUFLLE9BQUEsV0FBVyxDQUFDLGFBQWEsRUFBekIsQ0FBeUI7QUFMekQsTUFBTSxDQUFDLElBQU0scUJBQXFCLEdBRzlCLGNBQWMsQ0FDaEIsbUJBQW1CLEtBRXBCLENBQUM7U0FLd0MsVUFBQSxLQUFLO0lBQzdDLE9BQUEsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsS0FBSyxDQUFDO0FBQS9DLENBQStDO0FBSmpELE1BQU0sQ0FBQyxJQUFNLHdCQUF3QixHQUdqQyxjQUFjLENBQUMscUJBQXFCLEtBRXZDLENBQUM7U0FLd0MsVUFBQSxLQUFLO0lBQzdDLE9BQUEsb0JBQW9CLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO0FBQWpELENBQWlEO0FBSm5ELE1BQU0sQ0FBQyxJQUFNLHVCQUF1QixHQUdoQyxjQUFjLENBQUMscUJBQXFCLEtBRXZDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFN0YXRlTG9hZGVyU2VsZWN0b3JzIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvaW5kZXgnO1xuaW1wb3J0IHsgTG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9sb2FkZXIvbG9hZGVyLXN0YXRlJztcbmltcG9ydCB7XG4gIFN0YXRlV2l0aFN0b3JlRmluZGVyLFxuICBTdG9yZXNTdGF0ZSxcbiAgVmlld0FsbFN0b3Jlc1N0YXRlLFxufSBmcm9tICcuLi9zdG9yZS1maW5kZXItc3RhdGUnO1xuaW1wb3J0IHsgZ2V0U3RvcmVGaW5kZXJTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3Rvcic7XG5cbmV4cG9ydCBjb25zdCBnZXRWaWV3QWxsU3RvcmVzU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFN0b3JlRmluZGVyLFxuICBMb2FkZXJTdGF0ZTxWaWV3QWxsU3RvcmVzU3RhdGU+XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFN0b3JlRmluZGVyU3RhdGUsXG4gIChzdG9yZXNTdGF0ZTogU3RvcmVzU3RhdGUpID0+IHN0b3Jlc1N0YXRlLnZpZXdBbGxTdG9yZXNcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRWaWV3QWxsU3RvcmVzRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFN0b3JlRmluZGVyLFxuICBWaWV3QWxsU3RvcmVzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihnZXRWaWV3QWxsU3RvcmVzU3RhdGUsIHN0YXRlID0+XG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3Ioc3RhdGUpXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0Vmlld0FsbFN0b3Jlc0xvYWRpbmc6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aFN0b3JlRmluZGVyLFxuICBib29sZWFuXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0Vmlld0FsbFN0b3Jlc1N0YXRlLCBzdGF0ZSA9PlxuICBTdGF0ZUxvYWRlclNlbGVjdG9ycy5sb2FkZXJMb2FkaW5nU2VsZWN0b3Ioc3RhdGUpXG4pO1xuIl19