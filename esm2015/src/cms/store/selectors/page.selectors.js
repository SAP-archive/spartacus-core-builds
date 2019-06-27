/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { PageType } from '../../../model/cms.model';
import { StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
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
indexState => StateEntityLoaderSelectors.entityStateSelector(indexState, pageContext.id))));
/** @type {?} */
export const getPageStateIndexValue = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getPageStateIndexLoaderState(pageContext), (/**
 * @param {?} entity
 * @return {?}
 */
entity => StateLoaderSelectors.loaderValueSelector(entity))));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9wYWdlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3BELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsb0JBQW9CLEdBQ3JCLE1BQU0sNEJBQTRCLENBQUM7QUFLcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDOztNQUU1Qyx1QkFBdUI7Ozs7QUFBRyxDQUFDLEtBQWdCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFBOzs7TUFDdkUsY0FBYzs7Ozs7QUFBRyxDQUNyQixLQUFnQixFQUNoQixJQUFjLEVBQ2EsRUFBRTtJQUM3QixRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUN2QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtLQUNGO0lBQ0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUE7OztNQUVLLDZCQUE2Qjs7OztBQUE2QixDQUM5RCxJQUFVLEVBQ1YsRUFBRTs7VUFDSSxjQUFjLEdBQUcsSUFBSSxHQUFHLEVBQVU7SUFDeEMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtRQUN0QixLQUFLLE1BQU0sSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFDLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLElBQUksRUFBRSxFQUFFO2dCQUN6RCxjQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4QztTQUNGO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFBOzs7Ozs7QUFPQyxDQUFDLEtBQWUsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUk7O0FBTGpDLE1BQU0sT0FBTyxZQUFZLEdBR3JCLGNBQWMsQ0FDaEIsV0FBVyxPQUVaOzs7OztBQU9DLENBQUMsSUFBZSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSzs7QUFMakMsTUFBTSxPQUFPLGlCQUFpQixHQUcxQixjQUFjLENBQ2hCLFlBQVksT0FFYjs7QUFFRCxNQUFNLE9BQU8sa0NBQWtDOzs7O0FBQUcsQ0FDaEQsV0FBd0IsRUFDbUMsRUFBRSxDQUM3RCxjQUFjLENBQ1osaUJBQWlCOzs7O0FBQ2pCLENBQUMsS0FBZ0IsRUFBRSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQzlELENBQUE7O0FBRUgsTUFBTSxPQUFPLDRCQUE0Qjs7OztBQUFHLENBQzFDLFdBQXdCLEVBQzZCLEVBQUUsQ0FDdkQsY0FBYyxDQUNaLGtDQUFrQyxDQUFDLFdBQVcsQ0FBQzs7OztBQUMvQyxVQUFVLENBQUMsRUFBRSxDQUNYLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQzdFLENBQUE7O0FBRUgsTUFBTSxPQUFPLHNCQUFzQjs7OztBQUFHLENBQ3BDLFdBQXdCLEVBQ2dCLEVBQUUsQ0FDMUMsY0FBYyxDQUNaLDRCQUE0QixDQUFDLFdBQVcsQ0FBQzs7OztBQUN6QyxNQUFNLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFTLE1BQU0sQ0FBQyxFQUNuRSxDQUFBOztBQUVILE1BQU0sT0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLHVCQUF1QixDQUN4Qjs7QUFFRCxNQUFNLE9BQU8sV0FBVzs7OztBQUFHLENBQ3pCLFdBQXdCLEVBQ2MsRUFBRSxDQUN4QyxjQUFjLENBQ1osZUFBZSxFQUNmLHNCQUFzQixDQUFDLFdBQVcsQ0FBQzs7Ozs7QUFDbkMsQ0FBQyxRQUFnQyxFQUFFLFVBQWtCLEVBQUUsRUFBRSxDQUN2RCxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQ3ZCLENBQUE7O0FBRUgsTUFBTSxPQUFPLHFCQUFxQjs7OztBQUFHLENBQ25DLFdBQXdCLEVBQ2tCLEVBQUUsQ0FDNUMsY0FBYyxDQUNaLFdBQVcsQ0FBQyxXQUFXLENBQUM7Ozs7QUFDeEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxRQUFRLENBQUMsRUFDcEQsQ0FBQTs7QUFFSCxNQUFNLE9BQU8sNkJBQTZCOzs7OztBQUFHLENBQzNDLFdBQXdCLEVBQ3hCLFFBQWdCLEVBQ2lDLEVBQUU7SUFDbkQsT0FBTyxjQUFjLENBQ25CLFdBQVcsQ0FBQyxXQUFXLENBQUM7Ozs7SUFDeEIsTUFBTSxDQUFDLEVBQUU7UUFDUCxJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUNyRDtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgU3RhdGVFbnRpdHlMb2FkZXJTZWxlY3RvcnMsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RhdGUsIEluZGV4VHlwZSwgUGFnZVN0YXRlLCBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0Q21zU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3JzJztcblxuY29uc3QgZ2V0UGFnZUVudGl0aWVzU2VsZWN0b3IgPSAoc3RhdGU6IFBhZ2VTdGF0ZSkgPT4gc3RhdGUucGFnZURhdGEuZW50aXRpZXM7XG5jb25zdCBnZXRJbmRleEJ5VHlwZSA9IChcbiAgaW5kZXg6IEluZGV4VHlwZSxcbiAgdHlwZTogUGFnZVR5cGVcbik6IEVudGl0eUxvYWRlclN0YXRlPHN0cmluZz4gPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFBhZ2VUeXBlLkNPTlRFTlRfUEFHRToge1xuICAgICAgcmV0dXJuIGluZGV4LmNvbnRlbnQ7XG4gICAgfVxuICAgIGNhc2UgUGFnZVR5cGUuUFJPRFVDVF9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXgucHJvZHVjdDtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY2F0ZWdvcnk7XG4gICAgfVxuICAgIGNhc2UgUGFnZVR5cGUuQ0FUQUxPR19QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY2F0YWxvZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgZW50aXRpZXM6IHt9IH07XG59O1xuXG5jb25zdCBnZXRQYWdlQ29tcG9uZW50VHlwZXNTZWxlY3RvcjogKHBhZ2U6IFBhZ2UpID0+IHN0cmluZ1tdID0gKFxuICBwYWdlOiBQYWdlXG4pID0+IHtcbiAgY29uc3QgY29tcG9uZW50VHlwZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgaWYgKHBhZ2UgJiYgcGFnZS5zbG90cykge1xuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBPYmplY3Qua2V5cyhwYWdlLnNsb3RzKSkge1xuICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgcGFnZS5zbG90c1tzbG90XS5jb21wb25lbnRzIHx8IFtdKSB7XG4gICAgICAgIGNvbXBvbmVudFR5cGVzLmFkZChjb21wb25lbnQuZmxleFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gQXJyYXkuZnJvbShjb21wb25lbnRUeXBlcyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIFBhZ2VTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDbXNTdGF0ZSxcbiAgKHN0YXRlOiBDbXNTdGF0ZSkgPT4gc3RhdGUucGFnZVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4OiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIEluZGV4VHlwZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQYWdlU3RhdGUsXG4gIChwYWdlOiBQYWdlU3RhdGUpID0+IHBhZ2UuaW5kZXhcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGVJbmRleEVudGl0eUxvYWRlclN0YXRlID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBFbnRpdHlMb2FkZXJTdGF0ZTxzdHJpbmc+PiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlU3RhdGVJbmRleCxcbiAgICAoaW5kZXg6IEluZGV4VHlwZSkgPT4gZ2V0SW5kZXhCeVR5cGUoaW5kZXgsIHBhZ2VDb250ZXh0LnR5cGUpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGVJbmRleExvYWRlclN0YXRlID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBMb2FkZXJTdGF0ZTxzdHJpbmc+PiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlU3RhdGVJbmRleEVudGl0eUxvYWRlclN0YXRlKHBhZ2VDb250ZXh0KSxcbiAgICBpbmRleFN0YXRlID0+XG4gICAgICBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycy5lbnRpdHlTdGF0ZVNlbGVjdG9yKGluZGV4U3RhdGUsIHBhZ2VDb250ZXh0LmlkKVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZVN0YXRlSW5kZXhWYWx1ZSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgc3RyaW5nPiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlU3RhdGVJbmRleExvYWRlclN0YXRlKHBhZ2VDb250ZXh0KSxcbiAgICBlbnRpdHkgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyVmFsdWVTZWxlY3RvcjxzdHJpbmc+KGVudGl0eSlcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICB7IFtpZDogc3RyaW5nXTogUGFnZSB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFBhZ2VTdGF0ZSxcbiAgZ2V0UGFnZUVudGl0aWVzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlRGF0YSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgUGFnZT4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UGFnZUVudGl0aWVzLFxuICAgIGdldFBhZ2VTdGF0ZUluZGV4VmFsdWUocGFnZUNvbnRleHQpLFxuICAgIChlbnRpdGllczogeyBbaWQ6IHN0cmluZ106IFBhZ2UgfSwgaW5kZXhWYWx1ZTogc3RyaW5nKSA9PlxuICAgICAgZW50aXRpZXNbaW5kZXhWYWx1ZV1cbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VDb21wb25lbnRUeXBlcyA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgc3RyaW5nW10+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSxcbiAgICBwYWdlRGF0YSA9PiBnZXRQYWdlQ29tcG9uZW50VHlwZXNTZWxlY3RvcihwYWdlRGF0YSlcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRTbG90U2VsZWN0b3JGYWN0b3J5ID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gIHBvc2l0aW9uOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBDb250ZW50U2xvdERhdGE+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSxcbiAgICBlbnRpdHkgPT4ge1xuICAgICAgaWYgKGVudGl0eSkge1xuICAgICAgICByZXR1cm4gZW50aXR5LnNsb3RzW3Bvc2l0aW9uXSB8fCB7IGNvbXBvbmVudHM6IFtdIH07XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcbiJdfQ==