/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/index';
/** @type {?} */
export const initialState = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromAction.LOAD_TITLES_SUCCESS: {
            /** @type {?} */
            const titles = action.payload;
            /** @type {?} */
            const entities = titles.reduce((titleEntities, name) => {
                return Object.assign({}, titleEntities, { [name.code]: name });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case fromAction.CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGl0bGVzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9zdG9yZS9yZWR1Y2Vycy90aXRsZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxPQUFPLFlBQVksR0FBZ0I7SUFDdkMsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBMkQ7SUFFM0QsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7O2tCQUM3QixNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU87O2tCQUN2QixRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FDNUIsQ0FBQyxhQUF3QyxFQUFFLElBQVcsRUFBRSxFQUFFO2dCQUN4RCx5QkFDSyxhQUFhLElBQ2hCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFDakI7WUFDSixDQUFDLG9CQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQseUJBQ0ssS0FBSyxJQUNSLFFBQVEsSUFDUjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUNoQyxPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGl0bGVzU3RhdGUgfSBmcm9tICcuLi91c2VyLXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBUaXRsZSB9IGZyb20gJy4uLy4uLy4uL29jYyc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IFRpdGxlc1N0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUFjdGlvbi5UaXRsZXNBY3Rpb24gfCBmcm9tQWN0aW9uLkNsZWFyTWlzY3NEYXRhXG4pOiBUaXRsZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9USVRMRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgdGl0bGVzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IHRpdGxlcy5yZWR1Y2UoXG4gICAgICAgICh0aXRsZUVudGl0aWVzOiB7IFtjb2RlOiBzdHJpbmddOiBUaXRsZSB9LCBuYW1lOiBUaXRsZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi50aXRsZUVudGl0aWVzLFxuICAgICAgICAgICAgW25hbWUuY29kZV06IG5hbWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5DTEVBUl9NSVNDU19EQVRBOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==