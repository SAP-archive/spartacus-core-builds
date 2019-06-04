/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { createSelector } from '@ngrx/store';
import { entityStateSelector, loaderValueSelector, } from '../../../state';
import { getCmsState } from './feature.selectors';
import { PageType } from '../../../model/cms.model';
/** @type {?} */
export var getPageEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) {
    return state.pageData.entities;
});
/** @type {?} */
export var getIndexByType = (/**
 * @param {?} index
 * @param {?} type
 * @return {?}
 */
function (index, type) {
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
export var getPageComponentTypesSelector = (/**
 * @param {?} page
 * @return {?}
 */
function (page) {
    var e_1, _a, e_2, _b;
    /** @type {?} */
    var componentTypes = new Set();
    if (page && page.slots) {
        try {
            for (var _c = tslib_1.__values(Object.keys(page.slots)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var slot = _d.value;
                try {
                    for (var _e = tslib_1.__values(page.slots[slot].components || []), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var component = _f.value;
                        componentTypes.add(component.flexType);
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    return Array.from(componentTypes);
});
var ɵ0 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.page; };
/** @type {?} */
export var getPageState = createSelector(getCmsState, (ɵ0));
var ɵ1 = /**
 * @param {?} page
 * @return {?}
 */
function (page) { return page.index; };
/** @type {?} */
export var getPageStateIndex = createSelector(getPageState, (ɵ1));
/** @type {?} */
export var getIndex = (/**
 * @param {?} pageContext
 * @return {?}
 */
function (pageContext) {
    return createSelector(getPageStateIndex, (/**
     * @param {?} index
     * @return {?}
     */
    function (index) { return getIndexByType(index, pageContext.type); }));
});
/** @type {?} */
export var getIndexEntity = (/**
 * @param {?} pageContext
 * @return {?}
 */
function (pageContext) {
    return createSelector(getIndex(pageContext), (/**
     * @param {?} indexState
     * @return {?}
     */
    function (indexState) { return entityStateSelector(indexState, pageContext.id); }));
});
/** @type {?} */
export var getIndexValue = (/**
 * @param {?} pageContext
 * @return {?}
 */
function (pageContext) {
    return createSelector(getIndexEntity(pageContext), (/**
     * @param {?} entity
     * @return {?}
     */
    function (entity) { return loaderValueSelector(entity); }));
});
/** @type {?} */
export var getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
/** @type {?} */
export var getPageData = (/**
 * @param {?} pageContext
 * @return {?}
 */
function (pageContext) {
    return createSelector(getPageEntities, getIndexValue(pageContext), (/**
     * @param {?} entities
     * @param {?} indexValue
     * @return {?}
     */
    function (entities, indexValue) {
        return entities[indexValue];
    }));
});
/** @type {?} */
export var getPageComponentTypes = (/**
 * @param {?} pageContext
 * @return {?}
 */
function (pageContext) {
    return createSelector(getPageData(pageContext), (/**
     * @param {?} pageData
     * @return {?}
     */
    function (pageData) { return getPageComponentTypesSelector(pageData); }));
});
/** @type {?} */
export var currentSlotSelectorFactory = (/**
 * @param {?} pageContext
 * @param {?} position
 * @return {?}
 */
function (pageContext, position) {
    return createSelector(getPageData(pageContext), (/**
     * @param {?} entity
     * @return {?}
     */
    function (entity) {
        if (entity) {
            return entity.slots[position] || { components: [] };
        }
    }));
});
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9wYWdlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBSS9ELE9BQU8sRUFFTCxtQkFBbUIsRUFFbkIsbUJBQW1CLEdBQ3BCLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFcEQsTUFBTSxLQUFPLHVCQUF1Qjs7OztBQUFHLFVBQUMsS0FBZ0I7SUFDdEQsT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVE7QUFBdkIsQ0FBdUIsQ0FBQTs7QUFDekIsTUFBTSxLQUFPLGNBQWM7Ozs7O0FBQUcsVUFDNUIsS0FBZ0IsRUFDaEIsSUFBYztJQUVkLFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3RCO1FBQ0QsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3RCO1FBQ0QsS0FBSyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQ3ZCO1FBQ0QsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3RCO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzFCLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sNkJBQTZCOzs7O0FBQTZCLFVB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RUFBRSxFQUFFLENBQUM7U0FDckQ7SUFDSCxDQUFDLEVBQ0YsQ0FBQztBQUNKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBDbXNTdGF0ZSwgSW5kZXhUeXBlLCBQYWdlU3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHtcbiAgRW50aXR5TG9hZGVyU3RhdGUsXG4gIGVudGl0eVN0YXRlU2VsZWN0b3IsXG4gIExvYWRlclN0YXRlLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5cbmltcG9ydCB7IGdldENtc1N0YXRlIH0gZnJvbSAnLi9mZWF0dXJlLnNlbGVjdG9ycyc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlRW50aXRpZXNTZWxlY3RvciA9IChzdGF0ZTogUGFnZVN0YXRlKSA9PlxuICBzdGF0ZS5wYWdlRGF0YS5lbnRpdGllcztcbmV4cG9ydCBjb25zdCBnZXRJbmRleEJ5VHlwZSA9IChcbiAgaW5kZXg6IEluZGV4VHlwZSxcbiAgdHlwZTogUGFnZVR5cGVcbik6IEVudGl0eUxvYWRlclN0YXRlPHN0cmluZz4gPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFBhZ2VUeXBlLkNPTlRFTlRfUEFHRToge1xuICAgICAgcmV0dXJuIGluZGV4LmNvbnRlbnQ7XG4gICAgfVxuICAgIGNhc2UgUGFnZVR5cGUuUFJPRFVDVF9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXgucHJvZHVjdDtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY2F0ZWdvcnk7XG4gICAgfVxuICAgIGNhc2UgUGFnZVR5cGUuQ0FUQUxPR19QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY2F0YWxvZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgZW50aXRpZXM6IHt9IH07XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUNvbXBvbmVudFR5cGVzU2VsZWN0b3I6IChwYWdlOiBQYWdlKSA9PiBzdHJpbmdbXSA9IChcbiAgcGFnZTogUGFnZVxuKSA9PiB7XG4gIGNvbnN0IGNvbXBvbmVudFR5cGVzID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGlmIChwYWdlICYmIHBhZ2Uuc2xvdHMpIHtcbiAgICBmb3IgKGNvbnN0IHNsb3Qgb2YgT2JqZWN0LmtleXMocGFnZS5zbG90cykpIHtcbiAgICAgIGZvciAoY29uc3QgY29tcG9uZW50IG9mIHBhZ2Uuc2xvdHNbc2xvdF0uY29tcG9uZW50cyB8fCBbXSkge1xuICAgICAgICBjb21wb25lbnRUeXBlcy5hZGQoY29tcG9uZW50LmZsZXhUeXBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIEFycmF5LmZyb20oY29tcG9uZW50VHlwZXMpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZTogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICBQYWdlU3RhdGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0Q21zU3RhdGUsXG4gIChzdGF0ZTogQ21zU3RhdGUpID0+IHN0YXRlLnBhZ2Vcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGVJbmRleDogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICBJbmRleFR5cGVcbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UGFnZVN0YXRlLFxuICAocGFnZTogUGFnZVN0YXRlKSA9PiBwYWdlLmluZGV4XG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0SW5kZXggPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIEVudGl0eUxvYWRlclN0YXRlPHN0cmluZz4+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VTdGF0ZUluZGV4LFxuICAgIChpbmRleDogSW5kZXhUeXBlKSA9PiBnZXRJbmRleEJ5VHlwZShpbmRleCwgcGFnZUNvbnRleHQudHlwZSlcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldEluZGV4RW50aXR5ID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBMb2FkZXJTdGF0ZTxzdHJpbmc+PiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRJbmRleChwYWdlQ29udGV4dCksXG4gICAgaW5kZXhTdGF0ZSA9PiBlbnRpdHlTdGF0ZVNlbGVjdG9yKGluZGV4U3RhdGUsIHBhZ2VDb250ZXh0LmlkKVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0SW5kZXhWYWx1ZSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgc3RyaW5nPiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRJbmRleEVudGl0eShwYWdlQ29udGV4dCksXG4gICAgZW50aXR5ID0+IGxvYWRlclZhbHVlU2VsZWN0b3I8c3RyaW5nPihlbnRpdHkpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgeyBbaWQ6IHN0cmluZ106IFBhZ2UgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQYWdlU3RhdGUsXG4gIGdldFBhZ2VFbnRpdGllc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZURhdGEgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIFBhZ2U+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VFbnRpdGllcyxcbiAgICBnZXRJbmRleFZhbHVlKHBhZ2VDb250ZXh0KSxcbiAgICAoZW50aXRpZXM6IHsgW2lkOiBzdHJpbmddOiBQYWdlIH0sIGluZGV4VmFsdWU6IHN0cmluZykgPT5cbiAgICAgIGVudGl0aWVzW2luZGV4VmFsdWVdXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlQ29tcG9uZW50VHlwZXMgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIHN0cmluZ1tdPiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlRGF0YShwYWdlQ29udGV4dCksXG4gICAgcGFnZURhdGEgPT4gZ2V0UGFnZUNvbXBvbmVudFR5cGVzU2VsZWN0b3IocGFnZURhdGEpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBjdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICBwb3NpdGlvbjogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ29udGVudFNsb3REYXRhPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlRGF0YShwYWdlQ29udGV4dCksXG4gICAgZW50aXR5ID0+IHtcbiAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eS5zbG90c1twb3NpdGlvbl0gfHwgeyBjb21wb25lbnRzOiBbXSB9O1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG4iXX0=