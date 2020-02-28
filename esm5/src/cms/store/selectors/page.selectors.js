import { __values } from "tslib";
import { createSelector } from '@ngrx/store';
import { PageType } from '../../../model/cms.model';
import { StateEntityLoaderSelectors, StateLoaderSelectors, } from '../../../state/utils/index';
import { getCmsState } from './feature.selectors';
var getPageEntitiesSelector = function (state) { return state.pageData.entities; };
var ɵ0 = getPageEntitiesSelector;
var getIndexByType = function (index, type) {
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
var ɵ1 = getIndexByType;
var getPageComponentTypesSelector = function (page) {
    var e_1, _a, e_2, _b;
    var componentTypes = new Set();
    if (page && page.slots) {
        try {
            for (var _c = __values(Object.keys(page.slots)), _d = _c.next(); !_d.done; _d = _c.next()) {
                var slot = _d.value;
                try {
                    for (var _e = (e_2 = void 0, __values(page.slots[slot].components || [])), _f = _e.next(); !_f.done; _f = _e.next()) {
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
var ɵ2 = getPageComponentTypesSelector;
var ɵ3 = function (state) { return state.page; };
export var getPageState = createSelector(getCmsState, ɵ3);
var ɵ4 = function (page) { return page.index; };
export var getPageStateIndex = createSelector(getPageState, ɵ4);
export var getPageStateIndexEntityLoaderState = function (pageContext) {
    return createSelector(getPageStateIndex, function (index) {
        return getIndexByType(index, pageContext.type);
    });
};
export var getPageStateIndexLoaderState = function (pageContext) {
    return createSelector(getPageStateIndexEntityLoaderState(pageContext), function (indexState) {
        return StateEntityLoaderSelectors.entityStateSelector(indexState, pageContext.id);
    });
};
export var getPageStateIndexValue = function (pageContext) {
    return createSelector(getPageStateIndexLoaderState(pageContext), function (entity) {
        return StateLoaderSelectors.loaderValueSelector(entity);
    });
};
export var getPageEntities = createSelector(getPageState, getPageEntitiesSelector);
export var getPageData = function (pageContext) {
    return createSelector(getPageEntities, getPageStateIndexValue(pageContext), function (entities, indexValue) {
        return entities[indexValue];
    });
};
export var getPageComponentTypes = function (pageContext) {
    return createSelector(getPageData(pageContext), function (pageData) {
        return getPageComponentTypesSelector(pageData);
    });
};
export var getCurrentSlotSelectorFactory = function (pageContext, position) {
    return createSelector(getPageData(pageContext), function (entity) {
        if (entity) {
            return entity.slots[position] || { components: [] };
        }
    });
};
export { ɵ0, ɵ1, ɵ2, ɵ3, ɵ4 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3NlbGVjdG9ycy9wYWdlLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBb0IsTUFBTSxhQUFhLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBR3BELE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIsb0JBQW9CLEdBQ3JCLE1BQU0sNEJBQTRCLENBQUM7QUFLcEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRWxELElBQU0sdUJBQXVCLEdBQUcsVUFBQyxLQUFnQixJQUFLLE9BQUEsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQXZCLENBQXVCLENBQUM7O0FBQzlFLElBQU0sY0FBYyxHQUFHLFVBQ3JCLEtBQWdCLEVBQ2hCLElBQWM7SUFFZCxRQUFRLElBQUksRUFBRTtRQUNaLEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtRQUNELEtBQUssUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQzNCLE9BQU8sS0FBSyxDQUFDLFFBQVEsQ0FBQztTQUN2QjtRQUNELEtBQUssUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQzFCLE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQztTQUN0QjtLQUNGO0lBQ0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsQ0FBQztBQUMxQixDQUFDLENBQUM7O0FBRUYsSUFBTSw2QkFBNkIsR0FBNkIsVUFDOUQsSUFBVTs7SUFFVixJQUFNLGNBQWMsR0FBRyxJ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Q0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDO1NBQ3JEO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTZWxlY3RvciwgTWVtb2l6ZWRTZWxlY3RvciB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZyc7XG5pbXBvcnQgeyBFbnRpdHlMb2FkZXJTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS1sb2FkZXIvZW50aXR5LWxvYWRlci1zdGF0ZSc7XG5pbXBvcnQge1xuICBTdGF0ZUVudGl0eUxvYWRlclNlbGVjdG9ycyxcbiAgU3RhdGVMb2FkZXJTZWxlY3RvcnMsXG59IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2luZGV4JztcbmltcG9ydCB7IExvYWRlclN0YXRlIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci1zdGF0ZSc7XG5pbXBvcnQgeyBDb250ZW50U2xvdERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdGF0ZSwgSW5kZXhUeXBlLCBQYWdlU3RhdGUsIFN0YXRlV2l0aENtcyB9IGZyb20gJy4uL2Ntcy1zdGF0ZSc7XG5pbXBvcnQgeyBnZXRDbXNTdGF0ZSB9IGZyb20gJy4vZmVhdHVyZS5zZWxlY3RvcnMnO1xuXG5jb25zdCBnZXRQYWdlRW50aXRpZXNTZWxlY3RvciA9IChzdGF0ZTogUGFnZVN0YXRlKSA9PiBzdGF0ZS5wYWdlRGF0YS5lbnRpdGllcztcbmNvbnN0IGdldEluZGV4QnlUeXBlID0gKFxuICBpbmRleDogSW5kZXhUeXBlLFxuICB0eXBlOiBQYWdlVHlwZVxuKTogRW50aXR5TG9hZGVyU3RhdGU8c3RyaW5nPiA9PiB7XG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUGFnZVR5cGUuQ09OVEVOVF9QQUdFOiB7XG4gICAgICByZXR1cm4gaW5kZXguY29udGVudDtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5QUk9EVUNUX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5wcm9kdWN0O1xuICAgIH1cbiAgICBjYXNlIFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5jYXRlZ29yeTtcbiAgICB9XG4gICAgY2FzZSBQYWdlVHlwZS5DQVRBTE9HX1BBR0U6IHtcbiAgICAgIHJldHVybiBpbmRleC5jYXRhbG9nO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyBlbnRpdGllczoge30gfTtcbn07XG5cbmNvbnN0IGdldFBhZ2VDb21wb25lbnRUeXBlc1NlbGVjdG9yOiAocGFnZTogUGFnZSkgPT4gc3RyaW5nW10gPSAoXG4gIHBhZ2U6IFBhZ2VcbikgPT4ge1xuICBjb25zdCBjb21wb25lbnRUeXBlcyA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBpZiAocGFnZSAmJiBwYWdlLnNsb3RzKSB7XG4gICAgZm9yIChjb25zdCBzbG90IG9mIE9iamVjdC5rZXlzKHBhZ2Uuc2xvdHMpKSB7XG4gICAgICBmb3IgKGNvbnN0IGNvbXBvbmVudCBvZiBwYWdlLnNsb3RzW3Nsb3RdLmNvbXBvbmVudHMgfHwgW10pIHtcbiAgICAgICAgY29tcG9uZW50VHlwZXMuYWRkKGNvbXBvbmVudC5mbGV4VHlwZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBBcnJheS5mcm9tKGNvbXBvbmVudFR5cGVzKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlU3RhdGU6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgUGFnZVN0YXRlXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0Q21zU3RhdGUsIChzdGF0ZTogQ21zU3RhdGUpID0+IHN0YXRlLnBhZ2UpO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZVN0YXRlSW5kZXg6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgSW5kZXhUeXBlXG4+ID0gY3JlYXRlU2VsZWN0b3IoZ2V0UGFnZVN0YXRlLCAocGFnZTogUGFnZVN0YXRlKSA9PiBwYWdlLmluZGV4KTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4RW50aXR5TG9hZGVyU3RhdGUgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIEVudGl0eUxvYWRlclN0YXRlPHN0cmluZz4+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKGdldFBhZ2VTdGF0ZUluZGV4LCAoaW5kZXg6IEluZGV4VHlwZSkgPT5cbiAgICBnZXRJbmRleEJ5VHlwZShpbmRleCwgcGFnZUNvbnRleHQudHlwZSlcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4TG9hZGVyU3RhdGUgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIExvYWRlclN0YXRlPHN0cmluZz4+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKGdldFBhZ2VTdGF0ZUluZGV4RW50aXR5TG9hZGVyU3RhdGUocGFnZUNvbnRleHQpLCBpbmRleFN0YXRlID0+XG4gICAgU3RhdGVFbnRpdHlMb2FkZXJTZWxlY3RvcnMuZW50aXR5U3RhdGVTZWxlY3RvcihpbmRleFN0YXRlLCBwYWdlQ29udGV4dC5pZClcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGdldFBhZ2VTdGF0ZUluZGV4VmFsdWUgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIHN0cmluZz4gPT5cbiAgY3JlYXRlU2VsZWN0b3IoZ2V0UGFnZVN0YXRlSW5kZXhMb2FkZXJTdGF0ZShwYWdlQ29udGV4dCksIGVudGl0eSA9PlxuICAgIFN0YXRlTG9hZGVyU2VsZWN0b3JzLmxvYWRlclZhbHVlU2VsZWN0b3I8c3RyaW5nPihlbnRpdHkpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlRW50aXRpZXM6IE1lbW9pemVkU2VsZWN0b3I8XG4gIFN0YXRlV2l0aENtcyxcbiAgeyBbaWQ6IHN0cmluZ106IFBhZ2UgfVxuPiA9IGNyZWF0ZVNlbGVjdG9yKGdldFBhZ2VTdGF0ZSwgZ2V0UGFnZUVudGl0aWVzU2VsZWN0b3IpO1xuXG5leHBvcnQgY29uc3QgZ2V0UGFnZURhdGEgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIFBhZ2U+ID0+XG4gIGNyZWF0ZVNlbGVjdG9yKFxuICAgIGdldFBhZ2VFbnRpdGllcyxcbiAgICBnZXRQYWdlU3RhdGVJbmRleFZhbHVlKHBhZ2VDb250ZXh0KSxcbiAgICAoZW50aXRpZXM6IHsgW2lkOiBzdHJpbmddOiBQYWdlIH0sIGluZGV4VmFsdWU6IHN0cmluZykgPT5cbiAgICAgIGVudGl0aWVzW2luZGV4VmFsdWVdXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRQYWdlQ29tcG9uZW50VHlwZXMgPSAoXG4gIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuKTogTWVtb2l6ZWRTZWxlY3RvcjxTdGF0ZVdpdGhDbXMsIHN0cmluZ1tdPiA9PlxuICBjcmVhdGVTZWxlY3RvcihnZXRQYWdlRGF0YShwYWdlQ29udGV4dCksIHBhZ2VEYXRhID0+XG4gICAgZ2V0UGFnZUNvbXBvbmVudFR5cGVzU2VsZWN0b3IocGFnZURhdGEpXG4gICk7XG5cbmV4cG9ydCBjb25zdCBnZXRDdXJyZW50U2xvdFNlbGVjdG9yRmFjdG9yeSA9IChcbiAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0LFxuICBwb3NpdGlvbjogc3RyaW5nXG4pOiBNZW1vaXplZFNlbGVjdG9yPFN0YXRlV2l0aENtcywgQ29udGVudFNsb3REYXRhPiA9PiB7XG4gIHJldHVybiBjcmVhdGVTZWxlY3RvcihnZXRQYWdlRGF0YShwYWdlQ29udGV4dCksIGVudGl0eSA9PiB7XG4gICAgaWYgKGVudGl0eSkge1xuICAgICAgcmV0dXJuIGVudGl0eS5zbG90c1twb3NpdGlvbl0gfHwgeyBjb21wb25lbnRzOiBbXSB9O1xuICAgIH1cbiAgfSk7XG59O1xuIl19