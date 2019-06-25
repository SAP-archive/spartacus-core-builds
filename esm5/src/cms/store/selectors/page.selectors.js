/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { createSelector } from '@ngrx/store';
import { PageType } from '../../../model/cms.model';
import { entityStateSelector, loaderValueSelector, } from '../../../state';
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
    function (indexState) { return entityStateSelector(indexState, pageContext.id); }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9wYWdlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBQy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVwRCxPQUFPLEVBRUwsbUJBQW1CLEVBRW5CLG1CQUFtQixHQUNwQixNQUFNLGdCQUFnQixDQUFDO0FBSXhCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7SUFFNUMsdUJBQXVCOzs7O0FBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQXZCLENBQXVCLENBQUE7OztJQUN2RSxjQUFjOzs7OztBQUFHLFVBQ3JCLEtBQWdCLEVBQ2hCLElBQWM7SUFFZCxRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUN2QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtLQUNGO0lBQ0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUE7OztJQUVLLDZCQUE2Qjs7OztBQUE2QixVQUM5RCxJQUFVOzs7UUFFSixjQUFjLEdBQUcsSUFB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QUNyRDtJQUNILENBQUMsRUFDRixDQUFDO0FBQ0osQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2VsZWN0b3IsIE1lbW9pemVkU2VsZWN0b3IgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHtcbiAgRW50aXR5TG9hZGVyU3RhdGUsXG4gIGVudGl0eVN0YXRlU2VsZWN0b3IsXG4gIExvYWRlclN0YXRlLFxuICBsb2FkZXJWYWx1ZVNlbGVjdG9yLFxufSBmcm9tICcuLi8uLi8uLi9zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdGF0ZSwgSW5kZXhUeXBlLCBQYWdlU3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuXG5jb25zdCBnZXRQYWdlRW50aXRpZXNTZWxlY3RvciA9IChzdGF0ZTogUGFnZVN0YXRlKSA9PiBzdGF0ZS5wYWdlRGF0YS5lbnRpdGllcztcbmNvbnN0IGdldEluZGV4QnlUeXBlID0gKFxuICBpbmRleDogSW5kZXhUeXBlLFxuICB0eXBlOiBQYWdlVHlwZVxuKTogRW50aXR5TG9hZGVyU3RhdGU8c3RyaW5nPiA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUGFnZVR5cGUuQ09OVEVOVF9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY29udGVudDtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5wcm9kdWN0O1xuICAgIH1cbiAgICBjYXNlIFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5jYXRlZ29yeTtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5DQVRBTE9HX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5jYXRhbG9nO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBlbnRpdGllczoge30gfTtcbn07XG5cbmNvbnN0IGdldFBhZ2VDb21wb25lbnRUeXBlc1NlbGVjdG9yOiAocGFnZTogUGFnZSkgPT4gc3RyaW5nW10gPSAoXG4gIHBhZ2U6IFBhZ2VcbikgPT4ge1xuICBjb25zdCBjb21wb25lbnRUeXBlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBpZiAocGFnZSAmJiBwYWdlLnNsb3RzKSB7XG4gICAgZm9yIChjb25zdCBzbG90IG9mIE9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBwYWdlLnNsb3RzW3Nsb3RdLmNvbXBvbmVudHMgfHwgW10pIHtcbiAgICAgICAgY29tcG9uZW50VHlwZXMuYWRkKGNvbXBvbmVudC5mbGV4VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBBcnJheS5mcm9tKGNvbXBvbmVudFR5cGVzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgUGFnZVN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICAoc3RhdGU6IENtc1N0YXRlKSA9PiBzdGF0ZS5wYWdlXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZVN0YXRlSW5kZXg6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgSW5kZXhUeXBlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFBhZ2VTdGF0ZSxcbiAgKHBhZ2U6IFBhZ2VTdGF0ZSkgPT4gcGFnZS5pbmRleFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4RW50aXR5TG9hZGVyU3RhdGUgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIEVudGl0eUxvYWRlclN0YXRlPHN0cmluZz4+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VTdGF0ZUluZGV4LFxuICAgIChpbmRleDogSW5kZXhUeXBlKSA9PiBnZXRJbmRleEJ5VHlwZShpbmRleCwgcGFnZUNvbnRleHQudHlwZSlcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4TG9hZGVyU3RhdGUgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIExvYWRlclN0YXRlPHN0cmluZz4+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VTdGF0ZUluZGV4RW50aXR5TG9hZGVyU3RhdGUocGFnZUNvbnRleHQpLFxuICAgIGluZGV4U3RhdGUgPT4gZW50aXR5U3RhdGVTZWxlY3RvcihpbmRleFN0YXRlLCBwYWdlQ29udGV4dC5pZClcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4VmFsdWUgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIHN0cmluZz4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UGFnZVN0YXRlSW5kZXhMb2FkZXJTdGF0ZShwYWdlQ29udGV4dCksXG4gICAgZW50aXR5ID0+IGxvYWRlclZhbHVlU2VsZWN0b3I8c3RyaW5nPihlbnRpdHkpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgeyBbaWQ6IHN0cmluZ106IFBhZ2UgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQYWdlU3RhdGUsXG4gIGdldFBhZ2VFbnRpdGllc1NlbGVjdG9yXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZURhdGEgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIFBhZ2U+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VFbnRpdGllcyxcbiAgICBnZXRQYWdlU3RhdGVJbmRleFZhbHVlKHBhZ2VDb250ZXh0KSxcbiAgICAoZW50aXRpZXM6IHsgW2lkOiBzdHJpbmddOiBQYWdlIH0sIGluZGV4VmFsdWU6IHN0cmluZykgPT5cbiAgICAgIGVudGl0aWVzW2luZGV4VmFsdWVdXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlQ29tcG9uZW50VHlwZXMgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIHN0cmluZ1tdPiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlRGF0YShwYWdlQ29udGV4dCksXG4gICAgcGFnZURhdGEgPT4gZ2V0UGFnZUNvbXBvbmVudFR5cGVzU2VsZWN0b3IocGFnZURhdGEpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICBwb3NpdGlvbjogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ29udGVudFNsb3REYXRhPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlRGF0YShwYWdlQ29udGV4dCksXG4gICAgZW50aXR5ID0+IHtcbiAgICAgIGlmIChlbnRpdHkpIHtcbiAgICAgICAgcmV0dXJuIGVudGl0eS5zbG90c1twb3NpdGlvbl0gfHwgeyBjb21wb25lbnRzOiBbXSB9O1xuICAgICAgfVxuICAgIH1cbiAgKTtcbn07XG4iXX0=