/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { createSelector } from '@ngrx/store';
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
    return createSelector(getIndex(pageContext), function (index) { return index.entities[pageContext.id] || {}; });
};
/** @type {?} */
export var getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
/** @type {?} */
export var getPageData = function (pageContext) {
    return createSelector(getPageEntities, getIndexEntity(pageContext), function (entities, entity) {
        return entities[entity.value];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9wYWdlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBUS9ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRXBELE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxVQUFDLEtBQWdCO0lBQ3RELE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRO0FBQXZCLENBQXVCOztBQUN6QixNQUFNLEtBQU8sY0FBYyxHQUFHLFVBQzVCLEtBQWdCLEVBQ2hCLElBQWM7SUFFZCxRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUN2QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtLQUNGO0lBQ0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMxQixDQUFDOztBQUVELE1BQU0sS0FBTyw2QkFBNkIsR0FBNkIsVUFDckUsSUFBVTs7O1FBRUosY0FBYyxHQUFHLElBQUksR0FBRyxFQUFVO0lBQ3hDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7O1lBQ3RCLEtBQW1CLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBdkMsSUFBTSxJQUFJLFdBQUE7O29CQUNiLEtBQXdCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7d0JBQXRELElBQU0sU0FBUyxXQUFBO3dCQUNsQixjQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDeEM7Ozs7Ozs7OzthQUNGOzs7Ozs7Ozs7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNwQyxDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBR3JCLGNBQWMsQ0FDaEIsV0FBVyxFQUNYLFVBQUMsS0FBZSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQ2hDOztBQUVELE1BQU0sS0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixZQUFZLEVBQ1osVUFBQyxJQUFlLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FDaEM7O0FBRUQsTUFBTSxLQUFPLFFBQVEsR0FBRyxVQUN0QixXQUF3QjtJQUV4QixPQUFBLGNBQWMsQ0FDWixpQkFBaUIsRUFDakIsVUFBQyxLQUFnQixJQUFLLE9BQUEsY0FBYyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQXZDLENBQXVDLENBQzlEO0FBSEQsQ0FHQzs7QUFFSCxNQUFNLEtBQU8sY0FBYyxHQUFHLFVBQzVCLFdBQXdCO0lBRXhCLE9BQUEsY0FBYyxDQUNaLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFDckIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQXBDLENBQW9DLENBQzlDO0FBSEQsQ0FHQzs7QUFFSCxNQUFNLEtBQU8sZUFBZSxHQUd4QixjQUFjLENBQ2hCLFlBQVksRUFDWix1QkFBdUIsQ0FDeEI7O0FBRUQsTUFBTSxLQUFPLFdBQVcsR0FBRyxVQUN6QixXQUF3QjtJQUV4QixPQUFBLGNBQWMsQ0FDWixlQUFlLEVBQ2YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUMzQixVQUFDLFFBQWdDLEVBQUUsTUFBMkI7UUFDNUQsT0FBQSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUF0QixDQUFzQixDQUN6QjtBQUxELENBS0M7O0FBRUgsTUFBTSxLQUFPLHFCQUFxQixHQUFHLFVBQ25DLFdBQXdCO0lBRXhCLE9BQUEsY0FBYyxDQUNaLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFDeEIsVUFBQSxRQUFRLElBQUksT0FBQSw2QkFBNkIsQ0FBQyxRQUFRLENBQUMsRUFBdkMsQ0FBdUMsQ0FDcEQ7QUFIRCxDQUdDOztBQUVILE1BQU0sS0FBTywwQkFBMEIsR0FBRyxVQUN4QyxXQUF3QixFQUN4QixRQUFnQjtJQUVoQixPQUFPLGNBQWMsQ0FDbkIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUN4QixVQUFBLE1BQU07UUFDSixJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQztTQUNyRDtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBDbXNTdGF0ZSwgSW5kZXhUeXBlLCBQYWdlU3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUsIExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuXG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUVudGl0aWVzU2VsZWN0b3IgPSAoc3RhdGU6IFBhZ2VTdGF0ZSkgPT5cbiAgc3RhdGUucGFnZURhdGEuZW50aXRpZXM7XG5leHBvcnQgY29uc3QgZ2V0SW5kZXhCeVR5cGUgPSAoXG4gIGluZGV4OiBJbmRleFR5cGUsXG4gIHR5cGU6IFBhZ2VUeXBlXG4pOiBFbnRpdHlMb2FkZXJTdGF0ZTxzdHJpbmc+ID0+IHtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBQYWdlVHlwZS5DT05URU5UX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5jb250ZW50O1xuICAgIH1cbiAgICBjYXNlIFBhZ2VUeXBlLlBST0RVQ1RfUEFHRToge1xuICAgICAgcmV0dXJuIGluZGV4LnByb2R1Y3Q7XG4gICAgfVxuICAgIGNhc2UgUGFnZVR5cGUuQ0FURUdPUllfUEFHRToge1xuICAgICAgcmV0dXJuIGluZGV4LmNhdGVnb3J5O1xuICAgIH1cbiAgICBjYXNlIFBhZ2VUeXBlLkNBVEFMT0dfUEFHRToge1xuICAgICAgcmV0dXJuIGluZGV4LmNhdGFsb2c7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IGVudGl0aWVzOiB7fSB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VDb21wb25lbnRUeXBlc1NlbGVjdG9yOiAocGFnZTogUGFnZSkgPT4gc3RyaW5nW10gPSAoXG4gIHBhZ2U6IFBhZ2VcbikgPT4ge1xuICBjb25zdCBjb21wb25lbnRUeXBlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBpZiAocGFnZSAmJiBwYWdlLnNsb3RzKSB7XG4gICAgZm9yIChjb25zdCBzbG90IG9mIE9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBwYWdlLnNsb3RzW3Nsb3RdLmNvbXBvbmVudHMgfHwgW10pIHtcbiAgICAgICAgY29tcG9uZW50VHlwZXMuYWRkKGNvbXBvbmVudC5mbGV4VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBBcnJheS5mcm9tKGNvbXBvbmVudFR5cGVzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgUGFnZVN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldENtc1N0YXRlLFxuICAoc3RhdGU6IENtc1N0YXRlKSA9PiBzdGF0ZS5wYWdlXG4pO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZVN0YXRlSW5kZXg6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgSW5kZXhUeXBlXG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFBhZ2VTdGF0ZSxcbiAgKHBhZ2U6IFBhZ2VTdGF0ZSkgPT4gcGFnZS5pbmRleFxuKTtcblxuZXhwb3J0IGNvbnN0IGdldEluZGV4ID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBFbnRpdHlMb2FkZXJTdGF0ZTxzdHJpbmc+PiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlU3RhdGVJbmRleCxcbiAgICAoaW5kZXg6IEluZGV4VHlwZSkgPT4gZ2V0SW5kZXhCeVR5cGUoaW5kZXgsIHBhZ2VDb250ZXh0LnR5cGUpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRJbmRleEVudGl0eSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgTG9hZGVyU3RhdGU8c3RyaW5nPj4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0SW5kZXgocGFnZUNvbnRleHQpLFxuICAgIGluZGV4ID0+IGluZGV4LmVudGl0aWVzW3BhZ2VDb250ZXh0LmlkXSB8fCB7fVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUVudGl0aWVzOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIHsgW2lkOiBzdHJpbmddOiBQYWdlIH1cbj4gPSBjcmVhdGVTZWxlY3RvcihcbiAgZ2V0UGFnZVN0YXRlLFxuICBnZXRQYWdlRW50aXRpZXNTZWxlY3RvclxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VEYXRhID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBQYWdlPiA9PlxuICBjcmVhdGVTZWxlY3RvcihcbiAgICBnZXRQYWdlRW50aXRpZXMsXG4gICAgZ2V0SW5kZXhFbnRpdHkocGFnZUNvbnRleHQpLFxuICAgIChlbnRpdGllczogeyBbaWQ6IHN0cmluZ106IFBhZ2UgfSwgZW50aXR5OiBMb2FkZXJTdGF0ZTxzdHJpbmc+KSA9PlxuICAgICAgZW50aXRpZXNbZW50aXR5LnZhbHVlXVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZUNvbXBvbmVudFR5cGVzID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBzdHJpbmdbXT4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UGFnZURhdGEocGFnZUNvbnRleHQpLFxuICAgIHBhZ2VEYXRhID0+IGdldFBhZ2VDb21wb25lbnRUeXBlc1NlbGVjdG9yKHBhZ2VEYXRhKVxuICApO1xuXG5leHBvcnQgY29uc3QgY3VycmVudFNsb3RTZWxlY3RvckZhY3RvcnkgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCxcbiAgcG9zaXRpb246IHN0cmluZ1xuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIENvbnRlbnRTbG90RGF0YT4gPT4ge1xuICByZXR1cm4gY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UGFnZURhdGEocGFnZUNvbnRleHQpLFxuICAgIGVudGl0eSA9PiB7XG4gICAgICBpZiAoZW50aXR5KSB7XG4gICAgICAgIHJldHVybiBlbnRpdHkuc2xvdHNbcG9zaXRpb25dIHx8IHsgY29tcG9uZW50czogW10gfTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuIl19