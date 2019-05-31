/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { createSelector } from '@ngrx/store';
import { entityStateSelector, loaderValueSelector, } from '../../../state';
import { getCmsState } from './feature.selectors';
import { PageType } from '../../../model/cms.model';
/** @type {?} */
export var getPageEntitiesSelector = function (state) {
    return state.pageData.entities;
};
/** @type {?} */
export var getIndexByType = function (index, type) {
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
};
/** @type {?} */
export var getPageComponentTypesSelector = function (page) {
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
};
/** @type {?} */
export var getPageState = createSelector(getCmsState, function (state) { return state.page; });
/** @type {?} */
export var getPageStateIndex = createSelector(getPageState, function (page) { return page.index; });
/** @type {?} */
export var getIndex = function (pageContext) {
    return createSelector(getPageStateIndex, function (index) { return getIndexByType(index, pageContext.type); });
};
/** @type {?} */
export var getIndexEntity = function (pageContext) {
    return createSelector(getIndex(pageContext), function (indexState) { return entityStateSelector(indexState, pageContext.id); });
};
/** @type {?} */
export var getIndexValue = function (pageContext) {
    return createSelector(getIndexEntity(pageContext), function (entity) { return loaderValueSelector(entity); });
};
/** @type {?} */
export var getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
/** @type {?} */
export var getPageData = function (pageContext) {
    return createSelector(getPageEntities, getIndexValue(pageContext), function (entities, indexValue) {
        return entities[indexValue];
    });
};
/** @type {?} */
export var getPageComponentTypes = function (pageContext) {
    return createSelector(getPageData(pageContext), function (pageData) { return getPageComponentTypesSelector(pageData); });
};
/** @type {?} */
export var currentSlotSelectorFactory = function (pageContext, position) {
    return createSelector(getPageData(pageContext), function (entity) {
        if (entity) {
            return entity.slots[position] || { components: [] };
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9wYWdlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBSS9ELE9BQU8sRUFFTCxtQkFBbUIsRUFFbkIsbUJBQW1CLEdBQ3BCLE1BQU0sZ0JBQWdCLENBQUM7QUFJeEIsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFcEQsTUFBTSxLQUFPLHVCQUF1QixHQUFHLFVBQUMsS0FBZ0I7SUFDdEQsT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVE7QUFBdkIsQ0FBdUI7O0FBQ3pCLE1BQU0sS0FBTyxjQUFjLEdBQUcsVUFDNUIsS0FBZ0IsRUFDaEIsSUFBYztJQUVkLFFBQVEsSUFBSSxFQUFFO1FBQ1osS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3RCO1FBQ0QsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3RCO1FBQ0QsS0FBSyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDM0IsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO1NBQ3ZCO1FBQ0QsS0FBSyxRQUFRLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUIsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO1NBQ3RCO0tBQ0Y7SUFDRCxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzFCLENBQUM7O0FBRUQsTUFBTSxLQUFPLDZCQUE2QixHQUE2QixVQUNyRSxJQUFVOzs7UUFFSixjQUFj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TWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcblxuaW1wb3J0IHsgQ21zU3RhdGUsIEluZGV4VHlwZSwgUGFnZVN0YXRlLCBTdGF0ZVdpdGhDbXMgfSBmcm9tICcuLi9jbXMtc3RhdGUnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nJztcbmltcG9ydCB7XG4gIEVudGl0eUxvYWRlclN0YXRlLFxuICBlbnRpdHlTdGF0ZVNlbGVjdG9yLFxuICBMb2FkZXJTdGF0ZSxcbiAgbG9hZGVyVmFsdWVTZWxlY3Rvcixcbn0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUVudGl0aWVzU2VsZWN0b3IgPSAoc3RhdGU6IFBhZ2VTdGF0ZSkgPT5cbiAgc3RhdGUucGFnZURhdGEuZW50aXRpZXM7XG5leHBvcnQgY29uc3QgZ2V0SW5kZXhCeVR5cGUgPSAoXG4gIGluZGV4OiBJbmRleFR5cGUsXG4gIHR5cGU6IFBhZ2VUeXBlXG4pOiBFbnRpdHlMb2FkZXJTdGF0ZTxzdHJpbmc+ID0+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBQYWdlVHlwZS5DT05URU5UX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5jb250ZW50O1xuICAgIH1cbiAgICBjYXNlIFBhZ2VUeXBlLlBST0RVQ1RfUEFHRToge1xuICAgICAgcmV0dXJuIGluZGV4LnByb2R1Y3Q7XG4gICAgfVxuICAgIGNhc2UgUGFnZVR5cGUuQ0FURUdPUllfUEFHRToge1xuICAgICAgcmV0dXJuIGluZGV4LmNhdGVnb3J5O1xuICAgIH1cbiAgICBjYXNlIFBhZ2VUeXBlLkNBVEFMT0dfUEFHRToge1xuICAgICAgcmV0dXJuIGluZGV4LmNhdGFsb2c7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IGVudGl0aWVzOiB7fSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VDb21wb25lbnRUeXBlc1NlbGVjdG9yOiAocGFnZTogUGFnZSkgPT4gc3RyaW5nW10gPSAoXG4gIHBhZ2U6IFBhZ2VcbikgPT4ge1xuICBjb25zdCBjb21wb25lbnRUeXBlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBpZiAocGFnZSAmJiBwYWdlLnNsb3RzKSB7XG4gICAgZm9yIChjb25zdCBzbG90IG9mIE9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBwYWdlLnNsb3RzW3Nsb3RdLmNvbXBvbmVudHMgfHwgW10pIHtcbiAgICAgICAgY29tcG9uZW50VHlwZXMuYWRkKGNvbXBvbmVudC5mbGV4VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBBcnJheS5mcm9tKGNvbXBvbmVudFR5cGVzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgUGFnZVN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICAoc3RhdGU6IENtc1N0YXRlKSA9PiBzdGF0ZS5wYWdlXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZVN0YXRlSW5kZXg6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgSW5kZXhUeXBlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFBhZ2VTdGF0ZSxcbiAgKHBhZ2U6IFBhZ2VTdGF0ZSkgPT4gcGFnZS5pbmRleFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEluZGV4ID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBFbnRpdHlMb2FkZXJTdGF0ZTxzdHJpbmc+PiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlU3RhdGVJbmRleCxcbiAgICAoaW5kZXg6IEluZGV4VHlwZSkgPT4gZ2V0SW5kZXhCeVR5cGUoaW5kZXgsIHBhZ2VDb250ZXh0LnR5cGUpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRJbmRleEVudGl0eSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgTG9hZGVyU3RhdGU8c3RyaW5nPj4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0SW5kZXgocGFnZUNvbnRleHQpLFxuICAgIGluZGV4U3RhdGUgPT4gZW50aXR5U3RhdGVTZWxlY3RvcihpbmRleFN0YXRlLCBwYWdlQ29udGV4dC5pZClcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldEluZGV4VmFsdWUgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIHN0cmluZz4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0SW5kZXhFbnRpdHkocGFnZUNvbnRleHQpLFxuICAgIGVudGl0eSA9PiBsb2FkZXJWYWx1ZVNlbGVjdG9yPHN0cmluZz4oZW50aXR5KVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUVudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIHsgW2lkOiBzdHJpbmddOiBQYWdlIH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UGFnZVN0YXRlLFxuICBnZXRQYWdlRW50aXRpZXNTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VEYXRhID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBQYWdlPiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlRW50aXRpZXMsXG4gICAgZ2V0SW5kZXhWYWx1ZShwYWdlQ29udGV4dCksXG4gICAgKGVudGl0aWVzOiB7IFtpZDogc3RyaW5nXTogUGFnZSB9LCBpbmRleFZhbHVlOiBzdHJpbmcpID0+XG4gICAgICBlbnRpdGllc1tpbmRleFZhbHVlXVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUNvbXBvbmVudFR5cGVzID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBzdHJpbmdbXT4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UGFnZURhdGEocGFnZUNvbnRleHQpLFxuICAgIHBhZ2VEYXRhID0+IGdldFBhZ2VDb21wb25lbnRUeXBlc1NlbGVjdG9yKHBhZ2VEYXRhKVxuICApO1xuXG5leHBvcnQgY29uc3QgY3VycmVudFNsb3RTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgcG9zaXRpb246IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIENvbnRlbnRTbG90RGF0YT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UGFnZURhdGEocGFnZUNvbnRleHQpLFxuICAgIGVudGl0eSA9PiB7XG4gICAgICBpZiAoZW50aXR5KSB7XG4gICAgICAgIHJldHVybiBlbnRpdHkuc2xvdHNbcG9zaXRpb25dIHx8IHsgY29tcG9uZW50czogW10gfTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuIl19