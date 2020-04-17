import { createSelector } from '@ngrx/store';
import { StateUtils } from '../../../state/utils/index';
import { getCmsState } from './feature.selectors';
const ɵ0 = (state) => state.components;
export const getComponentsState = createSelector(getCmsState, ɵ0);
export const componentsContextSelectorFactory = (uid) => {
    return createSelector(getComponentsState, (componentsState) => StateUtils.entitySelector(componentsState, uid));
};
export const componentsLoaderStateSelectorFactory = (uid, context) => {
    return createSelector(componentsContextSelectorFactory(uid), (componentsContext) => (componentsContext &&
        componentsContext.pageContext &&
        componentsContext.pageContext[context]) ||
        StateUtils.initialLoaderState);
};
export const componentsContextExistsSelectorFactory = (uid, context) => {
    return createSelector(componentsLoaderStateSelectorFactory(uid, context), (loaderState) => StateUtils.loaderValueSelector(loaderState) || false);
};
export const componentsDataSelectorFactory = (uid) => {
    return createSelector(componentsContextSelectorFactory(uid), (state) => state ? state.component : undefined);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9jb21wb25lbnRzLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFvQixNQUFNLGFBQWEsQ0FBQztBQUUvRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFeEQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO1dBS2xCLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsVUFBVTtBQUgzRCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FHM0IsY0FBYyxDQUFDLFdBQVcsS0FBOEIsQ0FBQztBQUU3RCxNQUFNLENBQUMsTUFBTSxnQ0FBZ0MsR0FBRyxDQUM5QyxHQUFXLEVBQ3dDLEVBQUU7SUFDckQsT0FBTyxjQUFjLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUM1RCxVQUFVLENBQUMsY0FBYyxDQUFDLGVBQWUsRUFBRSxHQUFHLENBQUMsQ0FDaEQsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG9DQUFvQyxHQUFHLENBQ2xELEdBQVcsRUFDWCxPQUFlLEVBQ2tELEVBQUU7SUFDbkUsT0FBTyxjQUFjLENBQ25CLGdDQUFnQyxDQUFDLEdBQUcsQ0FBQyxFQUNyQyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FDcEIsQ0FBQyxpQkFBaUI7UUFDaEIsaUJBQWlCLENBQUMsV0FBVztRQUM3QixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDekMsVUFBVSxDQUFDLGtCQUFrQixDQUNoQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sc0NBQXNDLEdBQUcsQ0FDcEQsR0FBVyxFQUNYLE9BQWUsRUFDMEIsRUFBRTtJQUMzQyxPQUFPLGNBQWMsQ0FDbkIsb0NBQW9DLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxFQUNsRCxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxJQUFJLEtBQUssQ0FDdEUsQ0FBQztBQUNKLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLDZCQUE2QixHQUFHLENBQzNDLEdBQVcsRUFDbUMsRUFBRTtJQUNoRCxPQUFPLGNBQWMsQ0FBQyxnQ0FBZ0MsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ3JFLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUNwQyxDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUcsQ0FDdkMsR0FBVyxFQUNYLE9BQWUsRUFDK0IsRUFBRTtJQUNoRCxPQUFPLGNBQWMsQ0FDbkIsNkJBQTZCLENBQUMsR0FBRyxDQUFDLEVBQ2xDLHNDQUFzQyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsRUFDcEQsQ0FBQyxjQUFjLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDekIsSUFBSSxjQUFjLElBQUksTUFBTSxFQUFFO1lBQzVCLE9BQU8sY0FBYyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxPQUFPLFNBQVMsQ0FBQztTQUNsQjtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgU3RhdGVVdGlscyB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IENvbXBvbmVudHNDb250ZXh0LCBDb21wb25lbnRzU3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29tcG9uZW50c1N0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIENvbXBvbmVudHNTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldENtc1N0YXRlLCAoc3RhdGUpID0+IHN0YXRlLmNvbXBvbmVudHMpO1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50c0NvbnRleHRTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHVpZDogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ29tcG9uZW50c0NvbnRleHQ+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKGdldENvbXBvbmVudHNTdGF0ZSwgKGNvbXBvbmVudHNTdGF0ZSkgPT5cbiAgICBTdGF0ZVV0aWxzLmVudGl0eVNlbGVjdG9yKGNvbXBvbmVudHNTdGF0ZSwgdWlkKVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHNMb2FkZXJTdGF0ZVNlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmcsXG4gIGNvbnRleHQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIFN0YXRlVXRpbHMuTG9hZGVyU3RhdGU8Ym9vbGVhbj4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGNvbXBvbmVudHNDb250ZXh0U2VsZWN0b3JGYWN0b3J5KHVpZCksXG4gICAgKGNvbXBvbmVudHNDb250ZXh0KSA9PlxuICAgICAgKGNvbXBvbmVudHNDb250ZXh0ICYmXG4gICAgICAgIGNvbXBvbmVudHNDb250ZXh0LnBhZ2VDb250ZXh0ICYmXG4gICAgICAgIGNvbXBvbmVudHNDb250ZXh0LnBhZ2VDb250ZXh0W2NvbnRleHRdKSB8fFxuICAgICAgU3RhdGVVdGlscy5pbml0aWFsTG9hZGVyU3RhdGVcbiAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wb25lbnRzQ29udGV4dEV4aXN0c1NlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmcsXG4gIGNvbnRleHQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIGJvb2xlYW4+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGNvbXBvbmVudHNMb2FkZXJTdGF0ZVNlbGVjdG9yRmFjdG9yeSh1aWQsIGNvbnRleHQpLFxuICAgIChsb2FkZXJTdGF0ZSkgPT4gU3RhdGVVdGlscy5sb2FkZXJWYWx1ZVNlbGVjdG9yKGxvYWRlclN0YXRlKSB8fCBmYWxzZVxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXBvbmVudHNEYXRhU2VsZWN0b3JGYWN0b3J5ID0gKFxuICB1aWQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIENtc0NvbXBvbmVudD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoY29tcG9uZW50c0NvbnRleHRTZWxlY3RvckZhY3RvcnkodWlkKSwgKHN0YXRlKSA9PlxuICAgIHN0YXRlID8gc3RhdGUuY29tcG9uZW50IDogdW5kZWZpbmVkXG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgY29tcG9uZW50c1NlbGVjdG9yRmFjdG9yeSA9IChcbiAgdWlkOiBzdHJpbmcsXG4gIGNvbnRleHQ6IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIENtc0NvbXBvbmVudD4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgY29tcG9uZW50c0RhdGFTZWxlY3RvckZhY3RvcnkodWlkKSxcbiAgICBjb21wb25lbnRzQ29udGV4dEV4aXN0c1NlbGVjdG9yRmFjdG9yeSh1aWQsIGNvbnRleHQpLFxuICAgIChjb21wb25lbnRTdGF0ZSwgZXhpc3RzKSA9PiB7XG4gICAgICBpZiAoY29tcG9uZW50U3RhdGUgJiYgZXhpc3RzKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnRTdGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcbiJdfQ==