/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromLanguages from '../actions/languages.action';
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
        case fromLanguages.LOAD_LANGUAGES_SUCCESS: {
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
        case fromLanguages.SET_ACTIVE_LANGUAGE: {
            /** @type {?} */
            const isocode = action.payload;
            return Object.assign({}, state, { activeLanguage: isocode });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2VzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc2l0ZS1jb250ZXh0L3N0b3JlL3JlZHVjZXJzL2xhbmd1YWdlcy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssYUFBYSxNQUFNLDZCQUE2QixDQUFDOztBQUk3RCxNQUFNLE9BQU8sWUFBWSxHQUFtQjtJQUMxQyxRQUFRLEVBQUUsSUFBSTtJQUNkLGNBQWMsRUFBRSxJQUFJO0NBQ3JCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUFxQztJQUVyQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxhQUFhLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs7a0JBQ25DLFNBQVMsR0FBZSxNQUFNLENBQUMsT0FBTzs7a0JBQ3RDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTTs7Ozs7WUFDL0IsQ0FBQyxZQUE2QyxFQUFFLFFBQWtCLEVBQUUsRUFBRTtnQkFDcEUseUJBQ0ssWUFBWSxJQUNmLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsSUFDNUI7WUFDSixDQUFDLHFCQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQseUJBQ0ssS0FBSyxJQUNSLFFBQVEsSUFDUjtTQUNIO1FBRUQsS0FBSyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7a0JBQ2hDLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTztZQUU5Qix5QkFDSyxLQUFLLElBQ1IsY0FBYyxFQUFFLE9BQU8sSUFDdkI7U0FDSDtLQUNGO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbUxhbmd1YWdlcyBmcm9tICcuLi9hY3Rpb25zL2xhbmd1YWdlcy5hY3Rpb24nO1xuaW1wb3J0IHsgTGFuZ3VhZ2VzU3RhdGUgfSBmcm9tICcuLi9zdGF0ZSc7XG5pbXBvcnQgeyBMYW5ndWFnZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL21pc2MubW9kZWwnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBMYW5ndWFnZXNTdGF0ZSA9IHtcbiAgZW50aXRpZXM6IG51bGwsXG4gIGFjdGl2ZUxhbmd1YWdlOiBudWxsLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21MYW5ndWFnZXMuTGFuZ3VhZ2VzQWN0aW9uXG4pOiBMYW5ndWFnZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21MYW5ndWFnZXMuTE9BRF9MQU5HVUFHRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgbGFuZ3VhZ2VzOiBMYW5ndWFnZVtdID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IGxhbmd1YWdlcy5yZWR1Y2UoXG4gICAgICAgIChsYW5nRW50aXRpZXM6IHsgW2lzb2NvZGU6IHN0cmluZ106IExhbmd1YWdlIH0sIGxhbmd1YWdlOiBMYW5ndWFnZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5sYW5nRW50aXRpZXMsXG4gICAgICAgICAgICBbbGFuZ3VhZ2UuaXNvY29kZV06IGxhbmd1YWdlLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21MYW5ndWFnZXMuU0VUX0FDVElWRV9MQU5HVUFHRToge1xuICAgICAgY29uc3QgaXNvY29kZSA9IGFjdGlvbi5wYXlsb2FkO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgYWN0aXZlTGFuZ3VhZ2U6IGlzb2NvZGUsXG4gICAgICB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=