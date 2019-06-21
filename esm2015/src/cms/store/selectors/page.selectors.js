/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { createSelector } from '@ngrx/store';
import { entityStateSelector, loaderValueSelector, } from '../../../state';
import { getCmsState } from './feature.selectors';
import { PageType } from '../../../model/cms.model';
/** @type {?} */
export const getPageEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.pageData.entities);
/** @type {?} */
export const getIndexByType = (/**
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
/** @type {?} */
export const getPageComponentTypesSelector = (/**
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
const ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
(state) => state.page;
/** @type {?} */
export const getPageState = createSelector(getCmsState, (ɵ0));
const ɵ1 = /**
 * @param {?} page
 * @return {?}
 */
(page) => page.index;
/** @type {?} */
export const getPageStateIndex = createSelector(getPageState, (ɵ1));
/** @type {?} */
export const getIndex = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getPageStateIndex, (/**
 * @param {?} index
 * @return {?}
 */
(index) => getIndexByType(index, pageContext.type))));
/** @type {?} */
export const getIndexEntity = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getIndex(pageContext), (/**
 * @param {?} indexState
 * @return {?}
 */
indexState => entityStateSelector(indexState, pageContext.id))));
/** @type {?} */
export const getIndexValue = (/**
 * @param {?} pageContext
 * @return {?}
 */
(pageContext) => createSelector(getIndexEntity(pageContext), (/**
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
(pageContext) => createSelector(getPageEntities, getIndexValue(pageContext), (/**
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
export const currentSlotSelectorFactory = (/**
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
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9wYWdlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFJL0QsT0FBTyxFQUVMLG1CQUFtQixFQUVuQixtQkFBbUIsR0FDcEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUl4QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztBQUVwRCxNQUFNLE9BQU8sdUJBQXVCOzs7O0FBQUcsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FDMUQsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUE7O0FBQ3pCLE1BQU0sT0FBTyxjQUFjOzs7OztBQUFHLENBQzVCLEtBQWdCLEVBQ2hCLElBQWMsRUFDYSxFQUFFO0lBQzdCLFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3RCO1FBQ0QsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3RCO1FBQ0QsS0FBSyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQ3ZCO1FBQ0QsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3RCO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzFCLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sNkJBQTZCOzs7O0FBQTZCLENBQ3JFLElBQVUsRUFDVixFQUFFOztVQUNJLGNBQWMsR0FBRyxJQUFJLEdBQUcsRUFBVTtJQUN4QyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1FBQ3RCLEtBQUssTUFBTSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDMUMsS0FBSyxNQUFNLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLEVBQUU7Z0JBQ3pELGNBQWMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3hDO1NBQ0Y7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNwQyxDQUFDLENBQUE7Ozs7O0FBT0MsQ0FBQyxLQUFlLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJOztBQUxqQyxNQUFNLE9BQU8sWUFBWSxHQUdyQixjQUFjLENBQ2hCLFdBQVcsT0FFWjs7Ozs7QUFPQyxDQUFDLElBQWUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUs7O0FBTGpDLE1BQU0sT0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixZQUFZLE9BRWI7O0FBRUQsTUFBTSxPQUFPLFFBQVE7Ozs7QUFBRyxDQUN0QixXQUF3QixFQUNtQyxFQUFFLENBQzdELGNBQWMsQ0FDWixpQkFBaUI7Ozs7QUFDakIsQ0FBQyxLQUFnQixFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFDOUQsQ0FBQTs7QUFFSCxNQUFNLE9BQU8sY0FBYzs7OztBQUFHLENBQzVCLFdBQXdCLEVBQzZCLEVBQUUsQ0FDdkQsY0FBYyxDQUNaLFFBQVEsQ0FBQyxXQUFXLENBQUM7Ozs7QUFDckIsVUFBVSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUM5RCxDQUFBOztBQUVILE1BQU0sT0FBTyxhQUFhOzs7O0FBQUcsQ0FDM0IsV0FBd0IsRUFDZ0IsRUFBRSxDQUMxQyxjQUFjLENBQ1osY0FBYyxDQUFDLFdBQVcsQ0FBQzs7OztBQUMzQixNQUFNLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFTLE1BQU0sQ0FBQyxFQUM5QyxDQUFBOztBQUVILE1BQU0sT0FBTyxlQUFlLEdBR3hCLGNBQWMsQ0FDaEIsWUFBWSxFQUNaLHVCQUF1QixDQUN4Qjs7QUFFRCxNQUFNLE9BQU8sV0FBVzs7OztBQUFHLENBQ3pCLFdBQXdCLEVBQ2MsRUFBRSxDQUN4QyxjQUFjLENBQ1osZUFBZSxFQUNmLGFBQWEsQ0FBQyxXQUFXLENBQUM7Ozs7O0FBQzFCLENBQUMsUUFBZ0MsRUFBRSxVQUFrQixFQUFFLEVBQUUsQ0FDdkQsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUN2QixDQUFBOztBQUVILE1BQU0sT0FBTyxxQkFBcUI7Ozs7QUFBRyxDQUNuQyxXQUF3QixFQUNrQixFQUFFLENBQzVDLGNBQWMsQ0FDWixXQUFXLENBQUMsV0FBVyxDQUFDOzs7O0FBQ3hCLFFBQVEsQ0FBQyxFQUFFLENBQUMsNkJBQTZCLENBQUMsUUFBUSxDQUFDLEVBQ3BELENBQUE7O0FBRUgsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7QUFBRyxDQUN4QyxXQUF3QixFQUN4QixRQUFnQixFQUNpQyxFQUFFO0lBQ25ELE9BQU8sY0FBYyxDQUNuQixXQUFXLENBQUMsV0FBVyxDQUFDOzs7O0lBQ3hCLE1BQU0sQ0FBQyxFQUFFO1FBQ1AsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUM7U0FDckQ7SUFDSCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBDbXNTdGF0ZSwgSW5kZXhUeXBlLCBQYWdlU3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHtcbiAgRW50aXR5TG9hZGVyU3RhdGUsXG4gIGVudGl0eVN0YXRlU2VsZWN0b3IsXG4gIExvYWRlclN0YXRlLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbmltcG9ydCB7IGdldENtc1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlRW50aXRpZXNTZWxlY3RvciA9IChzdGF0ZTogUGFnZVN0YXRlKSA9PlxuICBzdGF0ZS5wYWdlRGF0YS5lbnRpdGllcztcbmV4cG9ydCBjb25zdCBnZXRJbmRleEJ5VHlwZSA9IChcbiAgaW5kZXg6IEluZGV4VHlwZSxcbiAgdHlwZTogUGFnZVR5cGVcbik6IEVudGl0eUxvYWRlclN0YXRlPHN0cmluZz4gPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFBhZ2VUeXBlLkNPTlRFTlRfUEFHRToge1xuICAgICAgcmV0dXJuIGluZGV4LmNvbnRlbnQ7XG4gICAgfVxuICAgIGNhc2UgUGFnZVR5cGUuUFJPRFVDVF9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXgucHJvZHVjdDtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY2F0ZWdvcnk7XG4gICAgfVxuICAgIGNhc2UgUGFnZVR5cGUuQ0FUQUxPR19QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY2F0YWxvZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgZW50aXRpZXM6IHt9IH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUNvbXBvbmVudFR5cGVzU2VsZWN0b3I6IChwYWdlOiBQYWdlKSA9PiBzdHJpbmdbXSA9IChcbiAgcGFnZTogUGFnZVxuKSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudFR5cGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGlmIChwYWdlICYmIHBhZ2Uuc2xvdHMpIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgT2JqZWN0LmtleXMocGFnZS5zbG90cykpIHtcbiAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHBhZ2Uuc2xvdHNbc2xvdF0uY29tcG9uZW50cyB8fCBbXSkge1xuICAgICAgICBjb21wb25lbnRUeXBlcy5hZGQoY29tcG9uZW50LmZsZXhUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIEFycmF5LmZyb20oY29tcG9uZW50VHlwZXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICBQYWdlU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q21zU3RhdGUsXG4gIChzdGF0ZTogQ21zU3RhdGUpID0+IHN0YXRlLnBhZ2Vcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGVJbmRleDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICBJbmRleFR5cGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UGFnZVN0YXRlLFxuICAocGFnZTogUGFnZVN0YXRlKSA9PiBwYWdlLmluZGV4XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0SW5kZXggPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIEVudGl0eUxvYWRlclN0YXRlPHN0cmluZz4+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VTdGF0ZUluZGV4LFxuICAgIChpbmRleDogSW5kZXhUeXBlKSA9PiBnZXRJbmRleEJ5VHlwZShpbmRleCwgcGFnZUNvbnRleHQudHlwZSlcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldEluZGV4RW50aXR5ID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBMb2FkZXJTdGF0ZTxzdHJpbmc+PiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRJbmRleChwYWdlQ29udGV4dCksXG4gICAgaW5kZXhTdGF0ZSA9PiBlbnRpdHlTdGF0ZVNlbGVjdG9yKGluZGV4U3RhdGUsIHBhZ2VDb250ZXh0LmlkKVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0SW5kZXhWYWx1ZSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgc3RyaW5nPiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRJbmRleEVudGl0eShwYWdlQ29udGV4dCksXG4gICAgZW50aXR5ID0+IGxvYWRlclZhbHVlU2VsZWN0b3I8c3RyaW5nPihlbnRpdHkpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgeyBbaWQ6IHN0cmluZ106IFBhZ2UgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQYWdlU3RhdGUsXG4gIGdldFBhZ2VFbnRpdGllc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZURhdGEgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIFBhZ2U+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VFbnRpdGllcyxcbiAgICBnZXRJbmRleFZhbHVlKHBhZ2VDb250ZXh0KSxcbiAgICAoZW50aXRpZXM6IHsgW2lkOiBzdHJpbmddOiBQYWdlIH0sIGluZGV4VmFsdWU6IHN0cmluZykgPT5cbiAgICAgIGVudGl0aWVzW2luZGV4VmFsdWVdXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlQ29tcG9uZW50VHlwZXMgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIHN0cmluZ1tdPiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlRGF0YShwYWdlQ29udGV4dCksXG4gICAgcGFnZURhdGEgPT4gZ2V0UGFnZUNvbXBvbmVudFR5cGVzU2VsZWN0b3IocGFnZURhdGEpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICBwb3NpdGlvbjogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ29udGVudFNsb3REYXRhPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlRGF0YShwYWdlQ29udGV4dCksXG4gICAgZW50aXR5ID0+IHtcbiAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eS5zbG90c1twb3NpdGlvbl0gfHwgeyBjb21wb25lbnRzOiBbXSB9O1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG4iXX0=