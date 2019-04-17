/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromLanguages from '../actions/languages.action';
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
        case fromLanguages.LOAD_LANGUAGES_SUCCESS: {
            /** @type {?} */
            var languages = action.payload;
            /** @type {?} */
            var entities = languages.reduce(function (langEntities, language) {
                var _a;
                return tslib_1.__assign({}, langEntities, (_a = {}, _a[language.isocode] = language, _a));
            }, tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case fromLanguages.SET_ACTIVE_LANGUAGE: {
            /** @type {?} */
            var isocode = action.payload;
            return tslib_1.__assign({}, state, { activeLanguage: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3JlZHVjZXJzL2xhbmd1YWdlcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLGFBQWEsTUFBTSw2QkFBNkIsQ0FBQzs7QUFJN0QsTUFBTSxLQUFPLFlBQVksR0FBbUI7SUFDMUMsUUFBUSxFQUFFLElBQUk7SUFDZCxjQUFjLEVBQUUsSUFBSTtDQUNyQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBcUM7SUFEckMsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7O2dCQUNuQyxTQUFTLEdBQWUsTUFBTSxDQUFDLE9BQU87O2dCQUN0QyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDL0IsVUFBQyxZQUE2QyxFQUFFLFFBQWtCOztnQkFDaEUsNEJBQ0ssWUFBWSxlQUNkLFFBQVEsQ0FBQyxPQUFPLElBQUcsUUFBUSxPQUM1QjtZQUNKLENBQUMsdUJBRUksS0FBSyxDQUFDLFFBQVEsRUFFcEI7WUFFRCw0QkFDSyxLQUFLLElBQ1IsUUFBUSxVQUFBLElBQ1I7U0FDSDtRQUVELEtBQUssYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7O2dCQUNoQyxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU87WUFFOUIsNEJBQ0ssS0FBSyxJQUNSLGNBQWMsRUFBRSxPQUFPLElBQ3ZCO1NBQ0g7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21MYW5ndWFnZXMgZnJvbSAnLi4vYWN0aW9ucy9sYW5ndWFnZXMuYWN0aW9uJztcbmltcG9ydCB7IExhbmd1YWdlc1N0YXRlIH0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2UgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogTGFuZ3VhZ2VzU3RhdGUgPSB7XG4gIGVudGl0aWVzOiBudWxsLFxuICBhY3RpdmVMYW5ndWFnZTogbnVsbCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tTGFuZ3VhZ2VzLkxhbmd1YWdlc0FjdGlvblxuKTogTGFuZ3VhZ2VzU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tTGFuZ3VhZ2VzLkxPQURfTEFOR1VBR0VTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGxhbmd1YWdlczogTGFuZ3VhZ2VbXSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBsYW5ndWFnZXMucmVkdWNlKFxuICAgICAgICAobGFuZ0VudGl0aWVzOiB7IFtpc29jb2RlOiBzdHJpbmddOiBMYW5ndWFnZSB9LCBsYW5ndWFnZTogTGFuZ3VhZ2UpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4ubGFuZ0VudGl0aWVzLFxuICAgICAgICAgICAgW2xhbmd1YWdlLmlzb2NvZGVdOiBsYW5ndWFnZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tTGFuZ3VhZ2VzLlNFVF9BQ1RJVkVfTEFOR1VBR0U6IHtcbiAgICAgIGNvbnN0IGlzb2NvZGUgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZUxhbmd1YWdlOiBpc29jb2RlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19