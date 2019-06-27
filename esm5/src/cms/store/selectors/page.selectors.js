/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { createSelector } from '@ngrx/store';
import { PageType } from '../../../model/cms.model';
import { StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getCmsState } from './feature.selectors';
/** @type {?} */
var getPageEntitiesSelector = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.pageData.entities; });
var ɵ0 = getPageEntitiesSelector;
/** @type {?} */
var getIndexByType = (/**
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
var ɵ1 = getIndexByType;
/** @type {?} */
var getPageComponentTypesSelector = (/**
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
var ɵ2 = getPageComponentTypesSelector;
var ɵ3 = /**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.page; };
/** @type {?} */
export var getPageState = createSelector(getCmsState, (ɵ3));
var ɵ4 = /**
 * @param {?} page
 * @return {?}
 */
function (page) { return page.index; };
/** @type {?} */
export var getPageStateIndex = createSelector(getPageState, (ɵ4));
/** @type {?} */
export var getPageStateIndexEntityLoaderState = (/**
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
export var getPageStateIndexLoaderState = (/**
 * @param {?} pageContext
 * @return {?}
 */
function (pageContext) {
    return createSelector(getPageStateIndexEntityLoaderState(pageContext), (/**
     * @param {?} indexState
     * @return {?}
     */
    function (indexState) {
        return StateEntityLoaderSelectors.entityStateSelector(indexState, pageContext.id);
    }));
});
/** @type {?} */
export var getPageStateIndexValue = (/**
 * @param {?} pageContext
 * @return {?}
 */
function (pageContext) {
    return createSelector(getPageStateIndexLoaderState(pageContext), (/**
     * @param {?} entity
     * @return {?}
     */
    function (entity) { return StateLoaderSelectors.loaderValueSelector(entity); }));
});
/** @type {?} */
export var getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
/** @type {?} */
export var getPageData = (/**
 * @param {?} pageContext
 * @return {?}
 */
function (pageContext) {
    return createSelector(getPageEntities, getPageStateIndexValue(pageContext), (/**
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
export var getCurrentSlotSelectorFactory = (/**
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
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9wYWdlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUdwRCxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLG9CQUFvQixHQUNyQixNQUFNLDRCQUE0QixDQUFDO0FBS3BDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFNUMsdUJBQXVCOzs7O0FBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQXZCLENBQXVCLENBQUE7OztJQUN2RSxjQUFjOzs7OztBQUFHLFVBQ3JCLEtBQWdCLEVBQ2hCLElBQWM7SUFFZCxRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUN2QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtLQUNGO0lBQ0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUE7OztJQUVLLDZCQUE2Qjs7OztBQUE2QixVQUM5RCxJQUFVOzs7UUFFSixjQUFjLEdBQUcsSUFB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QVUsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUNyRDtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUgfSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9lbnRpdHktbG9hZGVyL2VudGl0eS1sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHtcbiAgU3RhdGVFbnRpdHlMb2FkZXJTZWxlY3RvcnMsXG4gIFN0YXRlTG9hZGVyU2VsZWN0b3JzLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZS91dGlscy9pbmRleCc7XG5pbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RhdGUsIEluZGV4VHlwZSwgUGFnZVN0YXRlLCBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgZ2V0Q21zU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3JzJztcblxuY29uc3QgZ2V0UGFnZUVudGl0aWVzU2VsZWN0b3IgPSAoc3RhdGU6IFBhZ2VTdGF0ZSkgPT4gc3RhdGUucGFnZURhdGEuZW50aXRpZXM7XG5jb25zdCBnZXRJbmRleEJ5VHlwZSA9IChcbiAgaW5kZXg6IEluZGV4VHlwZSxcbiAgdHlwZTogUGFnZVR5cGVcbik6IEVudGl0eUxvYWRlclN0YXRlPHN0cmluZz4gPT4ge1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIFBhZ2VUeXBlLkNPTlRFTlRfUEFHRToge1xuICAgICAgcmV0dXJuIGluZGV4LmNvbnRlbnQ7XG4gICAgfVxuICAgIGNhc2UgUGFnZVR5cGUuUFJPRFVDVF9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXgucHJvZHVjdDtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY2F0ZWdvcnk7XG4gICAgfVxuICAgIGNhc2UgUGFnZVR5cGUuQ0FUQUxPR19QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY2F0YWxvZztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHsgZW50aXRpZXM6IHt9IH07XG59O1xuXG5jb25zdCBnZXRQYWdlQ29tcG9uZW50VHlwZXNTZWxlY3RvcjogKHBhZ2U6IFBhZ2UpID0+IHN0cmluZ1tdID0gKFxuICBwYWdlOiBQYWdlXG4pID0+IHtcbiAgY29uc3QgY29tcG9uZW50VHlwZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgaWYgKHBhZ2UgJiYgcGFnZS5zbG90cykge1xuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBPYmplY3Qua2V5cyhwYWdlLnNsb3RzKSkge1xuICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgcGFnZS5zbG90c1tzbG90XS5jb21wb25lbnRzIHx8IFtdKSB7XG4gICAgICAgIGNvbXBvbmVudFR5cGVzLmFkZChjb21wb25lbnQuZmxleFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gQXJyYXkuZnJvbShjb21wb25lbnRUeXBlcyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIFBhZ2VTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDbXNTdGF0ZSxcbiAgKHN0YXRlOiBDbXNTdGF0ZSkgPT4gc3RhdGUucGFnZVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4OiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIEluZGV4VHlwZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQYWdlU3RhdGUsXG4gIChwYWdlOiBQYWdlU3RhdGUpID0+IHBhZ2UuaW5kZXhcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGVJbmRleEVudGl0eUxvYWRlclN0YXRlID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBFbnRpdHlMb2FkZXJTdGF0ZTxzdHJpbmc+PiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlU3RhdGVJbmRleCxcbiAgICAoaW5kZXg6IEluZGV4VHlwZSkgPT4gZ2V0SW5kZXhCeVR5cGUoaW5kZXgsIHBhZ2VDb250ZXh0LnR5cGUpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGVJbmRleExvYWRlclN0YXRlID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBMb2FkZXJTdGF0ZTxzdHJpbmc+PiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlU3RhdGVJbmRleEVudGl0eUxvYWRlclN0YXRlKHBhZ2VDb250ZXh0KSxcbiAgICBpbmRleFN0YXRlID0+XG4gICAgICBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycy5lbnRpdHlTdGF0ZVNlbGVjdG9yKGluZGV4U3RhdGUsIHBhZ2VDb250ZXh0LmlkKVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZVN0YXRlSW5kZXhWYWx1ZSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgc3RyaW5nPiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlU3RhdGVJbmRleExvYWRlclN0YXRlKHBhZ2VDb250ZXh0KSxcbiAgICBlbnRpdHkgPT4gU3RhdGVMb2FkZXJTZWxlY3RvcnMubG9hZGVyVmFsdWVTZWxlY3RvcjxzdHJpbmc+KGVudGl0eSlcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICB7IFtpZDogc3RyaW5nXTogUGFnZSB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFBhZ2VTdGF0ZSxcbiAgZ2V0UGFnZUVudGl0aWVzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlRGF0YSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgUGFnZT4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UGFnZUVudGl0aWVzLFxuICAgIGdldFBhZ2VTdGF0ZUluZGV4VmFsdWUocGFnZUNvbnRleHQpLFxuICAgIChlbnRpdGllczogeyBbaWQ6IHN0cmluZ106IFBhZ2UgfSwgaW5kZXhWYWx1ZTogc3RyaW5nKSA9PlxuICAgICAgZW50aXRpZXNbaW5kZXhWYWx1ZV1cbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VDb21wb25lbnRUeXBlcyA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgc3RyaW5nW10+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSxcbiAgICBwYWdlRGF0YSA9PiBnZXRQYWdlQ29tcG9uZW50VHlwZXNTZWxlY3RvcihwYWdlRGF0YSlcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldEN1cnJlbnRTbG90U2VsZWN0b3JGYWN0b3J5ID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gIHBvc2l0aW9uOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBDb250ZW50U2xvdERhdGE+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSxcbiAgICBlbnRpdHkgPT4ge1xuICAgICAgaWYgKGVudGl0eSkge1xuICAgICAgICByZXR1cm4gZW50aXR5LnNsb3RzW3Bvc2l0aW9uXSB8fCB7IGNvbXBvbmVudHM6IFtdIH07XG4gICAgICB9XG4gICAgfVxuICApO1xufTtcbiJdfQ==