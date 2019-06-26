/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { SiteContextActions } from '../actions/index';
/** @type {?} */
export const initialState = {
    entities: null,
    activeLanguage: null,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case SiteContextActions.LOAD_LANGUAGES_SUCCESS: {
            /** @type {?} */
            const languages = action.payload;
            /** @type {?} */
            const entities = languages.reduce((/**
             * @param {?} langEntities
             * @param {?} language
             * @return {?}
             */
            (langEntities, language) => {
                return Object.assign({}, langEntities, { [language.isocode]: language });
            }), Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case SiteContextActions.SET_ACTIVE_LANGUAGE: {
            /** @type {?} */
            const isocode = action.payload;
            return Object.assign({}, state, { activeLanguage: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3JlZHVjZXJzL2xhbmd1YWdlcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHdEQsTUFBTSxPQUFPLFlBQVksR0FBbUI7SUFDMUMsUUFBUSxFQUFFLElBQUk7SUFDZCxjQUFjLEVBQUUsSUFBSTtDQUNyQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBMEM7SUFFMUMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7a0JBQ3hDLFNBQVMsR0FBZSxNQUFNLENBQUMsT0FBTzs7a0JBQ3RDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTTs7Ozs7WUFDL0IsQ0FBQyxZQUE2QyxFQUFFLFFBQWtCLEVBQUUsRUFBRTtnQkFDcEUseUJBQ0ssWUFBWSxJQUNmLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsSUFDNUI7WUFDSixDQUFDLHFCQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQseUJBQ0ssS0FBSyxJQUNSLFFBQVEsSUFDUjtTQUNIO1FBRUQsS0FBSyxrQkFBa0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDOztrQkFDckMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPO1lBRTlCLHlCQUNLLEtBQUssSUFDUixjQUFjLEVBQUUsT0FBTyxJQUN2QjtTQUNIO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBMYW5ndWFnZXNTdGF0ZSB9IGZyb20gJy4uL3N0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogTGFuZ3VhZ2VzU3RhdGUgPSB7XG4gIGVudGl0aWVzOiBudWxsLFxuICBhY3RpdmVMYW5ndWFnZTogbnVsbCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBTaXRlQ29udGV4dEFjdGlvbnMuTGFuZ3VhZ2VzQWN0aW9uXG4pOiBMYW5ndWFnZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNpdGVDb250ZXh0QWN0aW9ucy5MT0FEX0xBTkdVQUdFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBsYW5ndWFnZXM6IExhbmd1YWdlW10gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0gbGFuZ3VhZ2VzLnJlZHVjZShcbiAgICAgICAgKGxhbmdFbnRpdGllczogeyBbaXNvY29kZTogc3RyaW5nXTogTGFuZ3VhZ2UgfSwgbGFuZ3VhZ2U6IExhbmd1YWdlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmxhbmdFbnRpdGllcyxcbiAgICAgICAgICAgIFtsYW5ndWFnZS5pc29jb2RlXTogbGFuZ3VhZ2UsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgU2l0ZUNvbnRleHRBY3Rpb25zLlNFVF9BQ1RJVkVfTEFOR1VBR0U6IHtcbiAgICAgIGNvbnN0IGlzb2NvZGUgPSBhY3Rpb24ucGF5bG9hZDtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGFjdGl2ZUxhbmd1YWdlOiBpc29jb2RlLFxuICAgICAgfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19