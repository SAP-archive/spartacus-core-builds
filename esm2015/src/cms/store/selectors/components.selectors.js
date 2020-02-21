import { createSelector } from '@ngrx/store';
import { initialLoaderState, StateEntitySelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getCmsState } from './feature.selectors';
const ɵ0 = state => state.components;
export const getComponentsState = createSelector(getCmsState, ɵ0);
export const componentsContextSelectorFactory = (uid) => {
    return createSelector(getComponentsState, componentsState => StateEntitySelectors.entitySelector(componentsState, uid));
};
export const componentsLoaderStateSelectorFactory = (uid, context) => {
    return createSelector(componentsContextSelectorFactory(uid), componentsContext => (componentsContext &&
        componentsContext.pageContext &&
        componentsContext.pageContext[context]) ||
        initialLoaderState);
};
export const componentsContextExistsSelectorFactory = (uid, context) => {
    return createSelector(componentsLoaderStateSelectorFactory(uid, context), loaderState => StateLoaderSelectors.loaderValueSelector(loaderState) || false);
};
export const componentsDataSelectorFactory = (uid) => {
    return createSelector(componentsContextSelectorFactory(uid), state => (state ? state.component : undefined));
};
export const componentsSelectorFactory = (uid, context) => {
    return createSelector(componentsDataSelectorFactory(uid), componentsContextExistsSelectorFactory(uid, context), (componentState, exists) => {
        if (componentState && exists) {
            return componentState;
        }
        else {
            return undefined;
        }
    });
};
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9jb21wb25lbnRzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUUvRCxPQUFPLEVBQ0wsa0JBQWtCLEVBRWxCLG9CQUFvQixFQUNwQixvQkFBb0IsR0FDckIsTUFBTSw0QkFBNEIsQ0FBQztBQUVwQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7V0FPaEQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVTtBQUwzQixNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FHM0IsY0FBYyxDQUNoQixXQUFXLEtBRVosQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLGdDQUFnQyxHQUFHLENBQzlDLEdBQVcsRUFDd0MsRUFBRTtJQUNyRCxPQUFPLGNBQWMsQ0FDbkIsa0JBQWtCLEVBQ2xCLGVBQWUsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FDN0UsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG9DQUFvQyxHQUFHLENBQ2xELEdBQVcsRUFDWCxPQUFlLEVBQ3VDLEVBQUU7SUFDeEQsT0FBTyxjQUFjLENBQ25CLGdDQUFnQyxDQUFDLEdBQUcsQ0FBQyxFQUNyQyxpQkFBaUIsQ0FBQyxFQUFFLENBQ2xCLENBQUMsaUJBQWlCO1FBQ2hCLGlCQUFpQixDQUFDLFdBQVc7UUFDN0IsaUJBQWlCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLGtCQUFrQixDQUNyQixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sc0NBQXNDLEdBQUcsQ0FDcEQsR0FBVyxFQUNYLE9BQWUsRUFDMEIsRUFBRTtJQUMzQyxPQUFPLGNBQWMsQ0FDbkIsb0NBQW9DLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUNsRCxXQUFXLENBQUMsRUFBRSxDQUNaLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FDakUsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFHLENBQzNDLEdBQVcsRUFDbUMsRUFBRTtJQUNoRCxPQUFPLGNBQWMsQ0FDbkIsZ0NBQWdDLENBQUMsR0FBRyxDQUFDLEVBQ3JDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUMvQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUcsQ0FDdkMsR0FBVyxFQUNYLE9BQWUsRUFDK0IsRUFBRTtJQUNoRCxPQUFPLGNBQWMsQ0FDbkIsNkJBQTZCLENBQUMsR0FBRyxDQUFDLEVBQ2xDLHNDQUFzQyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFDcEQsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDekIsSUFBSSxjQUFjLElBQUksTUFBTSxFQUFFO1lBQzVCLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHtcbiAgaW5pdGlhbExvYWRlclN0YXRlLFxuICBMb2FkZXJTdGF0ZSxcbiAgU3RhdGVFbnRpdHlTZWxlY3RvcnMsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBDb21wb25lbnRzQ29udGV4dCwgQ29tcG9uZW50c1N0YXRlLCBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0Q21zU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3JzJztcblxuZXhwb3J0IGNvbnN0IGdldENvbXBvbmVudHNTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICBDb21wb25lbnRzU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q21zU3RhdGUsXG4gIHN0YXRlID0+IHN0YXRlLmNvbXBvbmVudHNcbik7XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzQ29udGV4dFNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBDb21wb25lbnRzQ29udGV4dD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0Q29tcG9uZW50c1N0YXRlLFxuICAgIGNvbXBvbmVudHNTdGF0ZSA9PiBTdGF0ZUVudGl0eVNlbGVjdG9ycy5lbnRpdHlTZWxlY3Rvcihjb21wb25lbnRzU3RhdGUsIHVpZClcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzTG9hZGVyU3RhdGVTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nLFxuICBjb250ZXh0OiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBMb2FkZXJTdGF0ZTxib29sZWFuPj4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgY29tcG9uZW50c0NvbnRleHRTZWxlY3RvckZhY3RvcnkodWlkKSxcbiAgICBjb21wb25lbnRzQ29udGV4dCA9PlxuICAgICAgKGNvbXBvbmVudHNDb250ZXh0ICYmXG4gICAgICAgIGNvbXBvbmVudHNDb250ZXh0LnBhZ2VDb250ZXh0ICYmXG4gICAgICAgIGNvbXBvbmVudHNDb250ZXh0LnBhZ2VDb250ZXh0W2NvbnRleHRdKSB8fFxuICAgICAgaW5pdGlhbExvYWRlclN0YXRlXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50c0NvbnRleHRFeGlzdHNTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nLFxuICBjb250ZXh0OiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBib29sZWFuPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBjb21wb25lbnRzTG9hZGVyU3RhdGVTZWxlY3RvckZhY3RvcnkodWlkLCBjb250ZXh0KSxcbiAgICBsb2FkZXJTdGF0ZSA9PlxuICAgICAgU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyVmFsdWVTZWxlY3Rvcihsb2FkZXJTdGF0ZSkgfHwgZmFsc2VcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzRGF0YVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBDbXNDb21wb25lbnQ+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGNvbXBvbmVudHNDb250ZXh0U2VsZWN0b3JGYWN0b3J5KHVpZCksXG4gICAgc3RhdGUgPT4gKHN0YXRlID8gc3RhdGUuY29tcG9uZW50IDogdW5kZWZpbmVkKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHNTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nLFxuICBjb250ZXh0OiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBDbXNDb21wb25lbnQ+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGNvbXBvbmVudHNEYXRhU2VsZWN0b3JGYWN0b3J5KHVpZCksXG4gICAgY29tcG9uZW50c0NvbnRleHRFeGlzdHNTZWxlY3RvckZhY3RvcnkodWlkLCBjb250ZXh0KSxcbiAgICAoY29tcG9uZW50U3RhdGUsIGV4aXN0cykgPT4ge1xuICAgICAgaWYgKGNvbXBvbmVudFN0YXRlICYmIGV4aXN0cykge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50U3RhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG4iXX0=