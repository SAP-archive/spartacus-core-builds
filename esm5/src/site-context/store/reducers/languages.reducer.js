/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SiteContextActions } from '../actions/index';
/** @type {?} */
export var initialState = {
    entities: null,
    activeLanguage: null,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case SiteContextActions.LOAD_LANGUAGES_SUCCESS: {
            /** @type {?} */
            var languages = action.payload;
            /** @type {?} */
            var entities = languages.reduce((/**
             * @param {?} langEntities
             * @param {?} language
             * @return {?}
             */
            function (langEntities, language) {
                var _a;
                return tslib_1.__assign({}, langEntities, (_a = {}, _a[language.isocode] = language, _a));
            }), tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case SiteContextActions.SET_ACTIVE_LANGUAGE: {
            /** @type {?} */
            var isocode = action.payload;
            return tslib_1.__assign({}, state, { activeLanguage: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3JlZHVjZXJzL2xhbmd1YWdlcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBR3RELE1BQU0sS0FBTyxZQUFZLEdBQW1CO0lBQzFDLFFBQVEsRUFBRSxJQUFJO0lBQ2QsY0FBYyxFQUFFLElBQUk7Q0FDckI7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQTBDO0lBRDFDLHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLGtCQUFrQixDQUFDLHNCQUFzQixDQUFDLENBQUM7O2dCQUN4QyxTQUFTLEdBQWUsTUFBTSxDQUFDLE9BQU87O2dCQUN0QyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU07Ozs7O1lBQy9CLFVBQUMsWUFBNkMsRUFBRSxRQUFrQjs7Z0JBQ2hFLDRCQUNLLFlBQVksZUFDZCxRQUFRLENBQUMsT0FBTyxJQUFHLFFBQVEsT0FDNUI7WUFDSixDQUFDLHdCQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsVUFBQSxJQUNSO1NBQ0g7UUFFRCxLQUFLLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLENBQUM7O2dCQUNyQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87WUFFOUIsNEJBQ0ssS0FBSyxJQUNSLGNBQWMsRUFBRSxPQUFPLElBQ3ZCO1NBQ0g7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dEFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IExhbmd1YWdlc1N0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBMYW5ndWFnZXNTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IG51bGwsXG4gIGFjdGl2ZUxhbmd1YWdlOiBudWxsLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IFNpdGVDb250ZXh0QWN0aW9ucy5MYW5ndWFnZXNBY3Rpb25cbik6IExhbmd1YWdlc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU2l0ZUNvbnRleHRBY3Rpb25zLkxPQURfTEFOR1VBR0VTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGxhbmd1YWdlczogTGFuZ3VhZ2VbXSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBsYW5ndWFnZXMucmVkdWNlKFxuICAgICAgICAobGFuZ0VudGl0aWVzOiB7IFtpc29jb2RlOiBzdHJpbmddOiBMYW5ndWFnZSB9LCBsYW5ndWFnZTogTGFuZ3VhZ2UpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ubGFuZ0VudGl0aWVzLFxuICAgICAgICAgICAgW2xhbmd1YWdlLmlzb2NvZGVdOiBsYW5ndWFnZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBTaXRlQ29udGV4dEFjdGlvbnMuU0VUX0FDVElWRV9MQU5HVUFHRToge1xuICAgICAgY29uc3QgaXNvY29kZSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZlTGFuZ3VhZ2U6IGlzb2NvZGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=