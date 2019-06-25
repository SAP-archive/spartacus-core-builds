/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { PageType } from '../../../model/cms.model';
import { entityStateSelector, loaderValueSelector, } from '../../../state';
import { getCmsState } from './feature.selectors';
/** @type {?} */
const getPageEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.pageData.entities);
const ɵ0 = getPageEntitiesSelector;
/** @type {?} */
const getIndexByType = (/**
 * @param {?} index
 * @param {?} type
 * @return {?}
 */
(index, type) => {
    switch (type) {
        case PageType.CONTENT_PAGE: {
            return index.content;
        }
        case PageType.PRODUCT_PAGE: {
            return index.product;
        }
        case PageType.CATEGORY_PAGE: {
            return index.category;
        }
        case PageType.CATALOG_PAGE: {
            return index.catalog;
        }
    }
    return { entities: {} };
});
const ɵ1 = getIndexByType;
/** @type {?} */
const getPageComponentTypesSelector = (/**
 * @param {?} page
 * @return {?}
 */
(page) => {
    /** @type {?} */
    const componentTypes = new Set();
    if (page && page.slots) {
        for (const slot of Object.keys(page.slots)) {
            for (const component of page.slots[slot].components || []) {
                componentTypes.add(component.flexType);
            }
        }
    }
    return Array.from(componentTypes);
});
const ɵ2 = getPageComponentTypesSelector;
const ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.page;
/** @type {?} */
export const getPageState = createSelector(getCmsState, (ɵ3));
const ɵ4 = /**
 * @param {?} page
 * @return {?}
 */
(page) => page.index;
/** @type {?} */
export const getPageStateIndex = createSelector(getPageState, (ɵ4));
/** @type {?} */
export const getPageStateIndexEntityLoaderState = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getPageStateIndex, (/**
 * @param {?} index
 * @return {?}
 */
(index) => getIndexByType(index, pageContext.type))));
/** @type {?} */
export const getPageStateIndexLoaderState = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getPageStateIndexEntityLoaderState(pageContext), (/**
 * @param {?} indexState
 * @return {?}
 */
indexState => entityStateSelector(indexState, pageContext.id))));
/** @type {?} */
export const getPageStateIndexValue = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getPageStateIndexLoaderState(pageContext), (/**
 * @param {?} entity
 * @return {?}
 */
entity => loaderValueSelector(entity))));
/** @type {?} */
export const getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
/** @type {?} */
export const getPageData = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getPageEntities, getPageStateIndexValue(pageContext), (/**
 * @param {?} entities
 * @param {?} indexValue
 * @return {?}
 */
(entities, indexValue) => entities[indexValue])));
/** @type {?} */
export const getPageComponentTypes = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getPageData(pageContext), (/**
 * @param {?} pageData
 * @return {?}
 */
pageData => getPageComponentTypesSelector(pageData))));
/** @type {?} */
export const getCurrentSlotSelectorFactory = (/**
 * @param {?} pageContext
 * @param {?} position
 * @return {?}
 */
(pageContext, position) => {
    return createSelector(getPageData(pageContext), (/**
     * @param {?} entity
     * @return {?}
     */
    entity => {
        if (entity) {
            return entity.slots[position] || { components: [] };
        }
    }));
});
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9wYWdlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRXBELE9BQU8sRUFFTCxtQkFBbUIsRUFFbkIsbUJBQW1CLEdBQ3BCLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUU1Qyx1QkFBdUI7Ozs7QUFBRyxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFBOzs7TUFDdkUsY0FBYzs7Ozs7QUFBRyxDQUNyQixLQUFnQixFQUNoQixJQUFjLEVBQ2EsRUFBRTtJQUM3QixRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUN2QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtLQUNGO0lBQ0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUE7OztNQUVLLDZCQUE2Qjs7OztBQUE2QixDQUM5RCxJQUFVLEVBQ1YsRUFBRTs7VUFDSSxjQUFjLEdBQUcsSUFBSSxHQUFHLEVBQVU7SUFDeEMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUN0QixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFDLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFO2dCQUN6RCxjQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4QztTQUNGO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBOzs7Ozs7QUFPQyxDQUFDLEtBQWUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUk7O0FBTGpDLE1BQU0sT0FBTyxZQUFZLEdBR3JCLGNBQWMsQ0FDaEIsV0FBVyxPQUVaOzs7OztBQU9DLENBQUMsSUFBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSzs7QUFMakMsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFlBQVksT0FFYjs7QUFFRCxNQUFNLE9BQU8sa0NBQWtDOzs7O0FBQUcsQ0FDaEQsV0FBd0IsRUFDbUMsRUFBRSxDQUM3RCxjQUFjLENBQ1osaUJBQWlCOzs7O0FBQ2pCLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQzlELENBQUE7O0FBRUgsTUFBTSxPQUFPLDRCQUE0Qjs7OztBQUFHLENBQzFDLFdBQXdCLEVBQzZCLEVBQUUsQ0FDdkQsY0FBYyxDQUNaLGtDQUFrQyxDQUFDLFdBQVcsQ0FBQzs7OztBQUMvQyxVQUFVLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQzlELENBQUE7O0FBRUgsTUFBTSxPQUFPLHNCQUFzQjs7OztBQUFHLENBQ3BDLFdBQXdCLEVBQ2dCLEVBQUUsQ0FDMUMsY0FBYyxDQUNaLDRCQUE0QixDQUFDLFdBQVcsQ0FBQzs7OztBQUN6QyxNQUFNLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFTLE1BQU0sQ0FBQyxFQUM5QyxDQUFBOztBQUVILE1BQU0sT0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLHVCQUF1QixDQUN4Qjs7QUFFRCxNQUFNLE9BQU8sV0FBVzs7OztBQUFHLENBQ3pCLFdBQXdCLEVBQ2MsRUFBRSxDQUN4QyxjQUFjLENBQ1osZUFBZSxFQUNmLHNCQUFzQixDQUFDLFdBQVcsQ0FBQzs7Ozs7QUFDbkMsQ0FBQyxRQUFnQyxFQUFFLFVBQWtCLEVBQUUsRUFBRSxDQUN2RCxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQ3ZCLENBQUE7O0FBRUgsTUFBTSxPQUFPLHFCQUFxQjs7OztBQUFHLENBQ25DLFdBQXdCLEVBQ2tCLEVBQUUsQ0FDNUMsY0FBYyxDQUNaLFdBQVcsQ0FBQyxXQUFXLENBQUM7Ozs7QUFDeEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxRQUFRLENBQUMsRUFDcEQsQ0FBQTs7QUFFSCxNQUFNLE9BQU8sNkJBQTZCOzs7OztBQUFHLENBQzNDLFdBQXdCLEVBQ3hCLFFBQWdCLEVBQ2lDLEVBQUU7SUFDbkQsT0FBTyxjQUFjLENBQ25CLFdBQVcsQ0FBQyxXQUFXLENBQUM7Ozs7SUFDeEIsTUFBTSxDQUFDLEVBQUU7UUFDUCxJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUNyRDtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHtcbiAgRW50aXR5TG9hZGVyU3RhdGUsXG4gIGVudGl0eVN0YXRlU2VsZWN0b3IsXG4gIExvYWRlclN0YXRlLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdGF0ZSwgSW5kZXhUeXBlLCBQYWdlU3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuXG5jb25zdCBnZXRQYWdlRW50aXRpZXNTZWxlY3RvciA9IChzdGF0ZTogUGFnZVN0YXRlKSA9PiBzdGF0ZS5wYWdlRGF0YS5lbnRpdGllcztcbmNvbnN0IGdldEluZGV4QnlUeXBlID0gKFxuICBpbmRleDogSW5kZXhUeXBlLFxuICB0eXBlOiBQYWdlVHlwZVxuKTogRW50aXR5TG9hZGVyU3RhdGU8c3RyaW5nPiA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUGFnZVR5cGUuQ09OVEVOVF9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY29udGVudDtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5wcm9kdWN0O1xuICAgIH1cbiAgICBjYXNlIFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5jYXRlZ29yeTtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5DQVRBTE9HX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5jYXRhbG9nO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBlbnRpdGllczoge30gfTtcbn07XG5cbmNvbnN0IGdldFBhZ2VDb21wb25lbnRUeXBlc1NlbGVjdG9yOiAocGFnZTogUGFnZSkgPT4gc3RyaW5nW10gPSAoXG4gIHBhZ2U6IFBhZ2VcbikgPT4ge1xuICBjb25zdCBjb21wb25lbnRUeXBlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBpZiAocGFnZSAmJiBwYWdlLnNsb3RzKSB7XG4gICAgZm9yIChjb25zdCBzbG90IG9mIE9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBwYWdlLnNsb3RzW3Nsb3RdLmNvbXBvbmVudHMgfHwgW10pIHtcbiAgICAgICAgY29tcG9uZW50VHlwZXMuYWRkKGNvbXBvbmVudC5mbGV4VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBBcnJheS5mcm9tKGNvbXBvbmVudFR5cGVzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgUGFnZVN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICAoc3RhdGU6IENtc1N0YXRlKSA9PiBzdGF0ZS5wYWdlXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZVN0YXRlSW5kZXg6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgSW5kZXhUeXBlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFBhZ2VTdGF0ZSxcbiAgKHBhZ2U6IFBhZ2VTdGF0ZSkgPT4gcGFnZS5pbmRleFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4RW50aXR5TG9hZGVyU3RhdGUgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIEVudGl0eUxvYWRlclN0YXRlPHN0cmluZz4+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VTdGF0ZUluZGV4LFxuICAgIChpbmRleDogSW5kZXhUeXBlKSA9PiBnZXRJbmRleEJ5VHlwZShpbmRleCwgcGFnZUNvbnRleHQudHlwZSlcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4TG9hZGVyU3RhdGUgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIExvYWRlclN0YXRlPHN0cmluZz4+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VTdGF0ZUluZGV4RW50aXR5TG9hZGVyU3RhdGUocGFnZUNvbnRleHQpLFxuICAgIGluZGV4U3RhdGUgPT4gZW50aXR5U3RhdGVTZWxlY3RvcihpbmRleFN0YXRlLCBwYWdlQ29udGV4dC5pZClcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4VmFsdWUgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIHN0cmluZz4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UGFnZVN0YXRlSW5kZXhMb2FkZXJTdGF0ZShwYWdlQ29udGV4dCksXG4gICAgZW50aXR5ID0+IGxvYWRlclZhbHVlU2VsZWN0b3I8c3RyaW5nPihlbnRpdHkpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgeyBbaWQ6IHN0cmluZ106IFBhZ2UgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQYWdlU3RhdGUsXG4gIGdldFBhZ2VFbnRpdGllc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZURhdGEgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIFBhZ2U+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VFbnRpdGllcyxcbiAgICBnZXRQYWdlU3RhdGVJbmRleFZhbHVlKHBhZ2VDb250ZXh0KSxcbiAgICAoZW50aXRpZXM6IHsgW2lkOiBzdHJpbmddOiBQYWdlIH0sIGluZGV4VmFsdWU6IHN0cmluZykgPT5cbiAgICAgIGVudGl0aWVzW2luZGV4VmFsdWVdXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlQ29tcG9uZW50VHlwZXMgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIHN0cmluZ1tdPiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlRGF0YShwYWdlQ29udGV4dCksXG4gICAgcGFnZURhdGEgPT4gZ2V0UGFnZUNvbXBvbmVudFR5cGVzU2VsZWN0b3IocGFnZURhdGEpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICBwb3NpdGlvbjogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ29udGVudFNsb3REYXRhPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlRGF0YShwYWdlQ29udGV4dCksXG4gICAgZW50aXR5ID0+IHtcbiAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eS5zbG90c1twb3NpdGlvbl0gfHwgeyBjb21wb25lbnRzOiBbXSB9O1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG4iXX0=