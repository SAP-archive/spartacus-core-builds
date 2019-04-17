/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { createSelector } from '@ngrx/store';
import { PageType } from '../../../occ/occ-models/occ.models';
import { getCmsState } from './feature.selectors';
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
            return entity.slots[position];
        }
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9wYWdlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQW9CLE1BQU0sYUFBYSxDQUFDO0FBTy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUU5RCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7O0FBRWxELE1BQU0sS0FBTyx1QkFBdUIsR0FBRyxVQUFDLEtBQWdCO0lBQ3RELE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRO0FBQXZCLENBQXVCOztBQUN6QixNQUFNLEtBQU8sY0FBYyxHQUFHLFVBQzVCLEtBQWdCLEVBQ2hCLElBQWM7SUFFZCxRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUN2QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtLQUNGO0lBQ0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMxQixDQUFDOztBQUVELE1BQU0sS0FBTyw2QkFBNkIsR0FBNkIsVUFDckUsSUFBVTs7O1FBRUosY0FBYyxHQUFHLElBQUksR0FBRyxFQUFVO0lBQ3hDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7O1lBQ3RCLEtBQW1CLElBQUEsS0FBQSxpQkFBQSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBdkMsSUFBTSxJQUFJLFdBQUE7O29CQUNiLEtBQXdCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsSUFBSSxFQUFFLENBQUEsZ0JBQUEsNEJBQUU7d0JBQXRELElBQU0sU0FBUyxXQUFBO3dCQUNsQixjQUFjLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDeEM7Ozs7Ozs7OzthQUNGOzs7Ozs7Ozs7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNwQyxDQUFDOztBQUVELE1BQU0sS0FBTyxZQUFZLEdBR3JCLGNBQWMsQ0FDaEIsV0FBVyxFQUNYLFVBQUMsS0FBZSxJQUFLLE9BQUEsS0FBSyxDQUFDLElBQUksRUFBVixDQUFVLENBQ2hDOztBQUVELE1BQU0sS0FBTyxpQkFBaUIsR0FHMUIsY0FBYyxDQUNoQixZQUFZLEVBQ1osVUFBQyxJQUFlLElBQUssT0FBQSxJQUFJLENBQUMsS0FBSyxFQUFWLENBQVUsQ0FDaEM7O0FBRUQsTUFBTSxLQUFPLFFBQVEsR0FBRyxVQUN0QixXQUF3QjtJQUV4QixPQUFBLGNBQWMsQ0FDWixpQkFBaUIsRUFDakIsVUFBQyxLQUFnQixJQUFLLE9BQUEsY0FBYyxDQUFDLEtBQUssRUFBRSxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQXZDLENBQXVDLENBQzlEO0FBSEQsQ0FHQzs7QUFFSCxNQUFNLEtBQU8sY0FBYyxHQUFHLFVBQzVCLFdBQXdCO0lBRXhCLE9BQUEsY0FBYyxDQUNaLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFDckIsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQXBDLENBQW9DLENBQzlDO0FBSEQsQ0FHQzs7QUFFSCxNQUFNLEtBQU8sZUFBZSxHQUd4QixjQUFjLENBQ2hCLFlBQVksRUFDWix1QkFBdUIsQ0FDeEI7O0FBRUQsTUFBTSxLQUFPLFdBQVcsR0FBRyxVQUN6QixXQUF3QjtJQUV4QixPQUFBLGNBQWMsQ0FDWixlQUFlLEVBQ2YsY0FBYyxDQUFDLFdBQVcsQ0FBQyxFQUMzQixVQUFDLFFBQWdDLEVBQUUsTUFBMkI7UUFDNUQsT0FBQSxRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUF0QixDQUFzQixDQUN6QjtBQUxELENBS0M7O0FBRUgsTUFBTSxLQUFPLHFCQUFxQixHQUFHLFVBQ25DLFdBQXdCO0lBRXhCLE9BQUEsY0FBYyxDQUNaLFdBQVcsQ0FBQyxXQUFXLENBQUMsRUFDeEIsVUFBQSxRQUFRLElBQUksT0FBQSw2QkFBNkIsQ0FBQyxRQUFRLENBQUMsRUFBdkMsQ0FBdUMsQ0FDcEQ7QUFIRCxDQUdDOztBQUVILE1BQU0sS0FBTywwQkFBMEIsR0FBRyxVQUN4QyxXQUF3QixFQUN4QixRQUFnQjtJQUVoQixPQUFPLGNBQWMsQ0FDbkIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxFQUN4QixVQUFBLE1BQU07UUFDSixJQUFJLE1BQU0sRUFBRTtZQUNWLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUMsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNlbGVjdG9yLCBNZW1vaXplZFNlbGVjdG9yIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuXG5pbXBvcnQgeyBDbXNTdGF0ZSwgUGFnZVN0YXRlLCBTdGF0ZVdpdGhDbXMsIEluZGV4VHlwZSB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcnO1xuaW1wb3J0IHsgRW50aXR5TG9hZGVyU3RhdGUsIExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvY29udGVudC1zbG90LWRhdGEubW9kZWwnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuaW1wb3J0IHsgZ2V0Q21zU3RhdGUgfSBmcm9tICcuL2ZlYXR1cmUuc2VsZWN0b3JzJztcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VFbnRpdGllc1NlbGVjdG9yID0gKHN0YXRlOiBQYWdlU3RhdGUpID0+XG4gIHN0YXRlLnBhZ2VEYXRhLmVudGl0aWVzO1xuZXhwb3J0IGNvbnN0IGdldEluZGV4QnlUeXBlID0gKFxuICBpbmRleDogSW5kZXhUeXBlLFxuICB0eXBlOiBQYWdlVHlwZVxuKTogRW50aXR5TG9hZGVyU3RhdGU8c3RyaW5nPiA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUGFnZVR5cGUuQ09OVEVOVF9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY29udGVudDtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5wcm9kdWN0O1xuICAgIH1cbiAgICBjYXNlIFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5jYXRlZ29yeTtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5DQVRBTE9HX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5jYXRhbG9nO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBlbnRpdGllczoge30gfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlQ29tcG9uZW50VHlwZXNTZWxlY3RvcjogKHBhZ2U6IFBhZ2UpID0+IHN0cmluZ1tdID0gKFxuICBwYWdlOiBQYWdlXG4pID0+IHtcbiAgY29uc3QgY29tcG9uZW50VHlwZXMgPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgaWYgKHBhZ2UgJiYgcGFnZS5zbG90cykge1xuICAgIGZvciAoY29uc3Qgc2xvdCBvZiBPYmplY3Qua2V5cyhwYWdlLnNsb3RzKSkge1xuICAgICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgcGFnZS5zbG90c1tzbG90XS5jb21wb25lbnRzIHx8IFtdKSB7XG4gICAgICAgIGNvbXBvbmVudFR5cGVzLmFkZChjb21wb25lbnQuZmxleFR5cGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gQXJyYXkuZnJvbShjb21wb25lbnRUeXBlcyk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZVN0YXRlOiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIFBhZ2VTdGF0ZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRDbXNTdGF0ZSxcbiAgKHN0YXRlOiBDbXNTdGF0ZSkgPT4gc3RhdGUucGFnZVxuKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4OiBNZW1vaXplZFNlbGVjdG9yPFxuICBTdGF0ZVdpdGhDbXMsXG4gIEluZGV4VHlwZVxuPiA9IGNyZWF0ZVNlbGVjdG9yKFxuICBnZXRQYWdlU3RhdGUsXG4gIChwYWdlOiBQYWdlU3RhdGUpID0+IHBhZ2UuaW5kZXhcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRJbmRleCA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgRW50aXR5TG9hZGVyU3RhdGU8c3RyaW5nPj4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UGFnZVN0YXRlSW5kZXgsXG4gICAgKGluZGV4OiBJbmRleFR5cGUpID0+IGdldEluZGV4QnlUeXBlKGluZGV4LCBwYWdlQ29udGV4dC50eXBlKVxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0SW5kZXhFbnRpdHkgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIExvYWRlclN0YXRlPHN0cmluZz4+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldEluZGV4KHBhZ2VDb250ZXh0KSxcbiAgICBpbmRleCA9PiBpbmRleC5lbnRpdGllc1twYWdlQ29udGV4dC5pZF0gfHwge31cbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VFbnRpdGllczogTWVtb2l6ZWRTZWxlY3RvcjxcbiAgU3RhdGVXaXRoQ21zLFxuICB7IFtpZDogc3RyaW5nXTogUGFnZSB9XG4+ID0gY3JlYXRlU2VsZWN0b3IoXG4gIGdldFBhZ2VTdGF0ZSxcbiAgZ2V0UGFnZUVudGl0aWVzU2VsZWN0b3Jcbik7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlRGF0YSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgUGFnZT4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoXG4gICAgZ2V0UGFnZUVudGl0aWVzLFxuICAgIGdldEluZGV4RW50aXR5KHBhZ2VDb250ZXh0KSxcbiAgICAoZW50aXRpZXM6IHsgW2lkOiBzdHJpbmddOiBQYWdlIH0sIGVudGl0eTogTG9hZGVyU3RhdGU8c3RyaW5nPikgPT5cbiAgICAgIGVudGl0aWVzW2VudGl0eS52YWx1ZV1cbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VDb21wb25lbnRUeXBlcyA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgc3RyaW5nW10+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSxcbiAgICBwYWdlRGF0YSA9PiBnZXRQYWdlQ29tcG9uZW50VHlwZXNTZWxlY3RvcihwYWdlRGF0YSlcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRTbG90U2VsZWN0b3JGYWN0b3J5ID0gKFxuICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQsXG4gIHBvc2l0aW9uOiBzdHJpbmdcbik6IE1lbW9pemVkU2VsZWN0b3I8U3RhdGVXaXRoQ21zLCBDb250ZW50U2xvdERhdGE+ID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VEYXRhKHBhZ2VDb250ZXh0KSxcbiAgICBlbnRpdHkgPT4ge1xuICAgICAgaWYgKGVudGl0eSkge1xuICAgICAgICByZXR1cm4gZW50aXR5LnNsb3RzW3Bvc2l0aW9uXTtcbiAgICAgIH1cbiAgICB9XG4gICk7XG59O1xuIl19