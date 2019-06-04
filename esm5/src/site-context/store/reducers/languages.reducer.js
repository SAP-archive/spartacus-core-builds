/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        case fromLanguages.SET_ACTIVE_LANGUAGE: {
            /** @type {?} */
            var isocode = action.payload;
            return tslib_1.__assign({}, state, { activeLanguage: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3JlZHVjZXJzL2xhbmd1YWdlcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxLQUFLLGFBQWEsTUFBTSw2QkFBNkIsQ0FBQzs7QUFJN0QsTUFBTSxLQUFPLFlBQVksR0FBbUI7SUFDMUMsUUFBUSxFQUFFLElBQUk7SUFDZCxjQUFjLEVBQUUsSUFBSTtDQUNyQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBcUM7SUFEckMsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssYUFBYSxDQUFDLHNCQUFzQixDQUFDLENBQUM7O2dCQUNuQyxTQUFTLEdBQWUsTUFBTSxDQUFDLE9BQU87O2dCQUN0QyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU07Ozs7O1lBQy9CLFVBQUMsWUFBNkMsRUFBRSxRQUFrQjs7Z0JBQ2hFLDRCQUNLLFlBQVksZUFDZCxRQUFRLENBQUMsT0FBTyxJQUFHLFFBQVEsT0FDNUI7WUFDSixDQUFDLHdCQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsVUFBQSxJQUNSO1NBQ0g7UUFFRCxLQUFLLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztnQkFDaEMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBRTlCLDRCQUNLLEtBQUssSUFDUixjQUFjLEVBQUUsT0FBTyxJQUN2QjtTQUNIO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcm9tTGFuZ3VhZ2VzIGZyb20gJy4uL2FjdGlvbnMvbGFuZ3VhZ2VzLmFjdGlvbic7XG5pbXBvcnQgeyBMYW5ndWFnZXNTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcbmltcG9ydCB7IExhbmd1YWdlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IExhbmd1YWdlc1N0YXRlID0ge1xuICBlbnRpdGllczogbnVsbCxcbiAgYWN0aXZlTGFuZ3VhZ2U6IG51bGwsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUxhbmd1YWdlcy5MYW5ndWFnZXNBY3Rpb25cbik6IExhbmd1YWdlc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUxhbmd1YWdlcy5MT0FEX0xBTkdVQUdFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBsYW5ndWFnZXM6IExhbmd1YWdlW10gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0gbGFuZ3VhZ2VzLnJlZHVjZShcbiAgICAgICAgKGxhbmdFbnRpdGllczogeyBbaXNvY29kZTogc3RyaW5nXTogTGFuZ3VhZ2UgfSwgbGFuZ3VhZ2U6IExhbmd1YWdlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmxhbmdFbnRpdGllcyxcbiAgICAgICAgICAgIFtsYW5ndWFnZS5pc29jb2RlXTogbGFuZ3VhZ2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUxhbmd1YWdlcy5TRVRfQUNUSVZFX0xBTkdVQUdFOiB7XG4gICAgICBjb25zdCBpc29jb2RlID0gYWN0aW9uLnBheWxvYWQ7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBhY3RpdmVMYW5ndWFnZTogaXNvY29kZSxcbiAgICAgIH07XG4gICAgfVxuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==