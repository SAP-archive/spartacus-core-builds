/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/page.action';
/** @type {?} */
export const initialState = undefined;
/**
 * @param {?} entityType
 * @return {?}
 */
export function reducer(entityType) {
    return (state = initialState, action) => {
        if (action.meta && action.meta.entityType === entityType) {
            switch (action.type) {
                case fromAction.LOAD_PAGE_DATA_SUCCESS: {
                    return action.payload.pageId;
                }
                case fromAction.LOAD_PAGE_DATA_FAIL: {
                    return initialState;
                }
            }
        }
        return state;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1pbmRleC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9wYWdlLWluZGV4LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7O0FBRXJELE1BQU0sT0FBTyxZQUFZLEdBQUcsU0FBUzs7Ozs7QUFFckMsTUFBTSxVQUFVLE9BQU8sQ0FDckIsVUFBa0I7SUFLbEIsT0FBTyxDQUNMLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQW9FLEVBQzVELEVBQUU7UUFDVixJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEtBQUssVUFBVSxFQUFFO1lBQ3hELFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDbkIsS0FBSyxVQUFVLENBQUMsc0JBQXNCLENBQUMsQ0FBQztvQkFDdEMsT0FBTyxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQztpQkFDOUI7Z0JBRUQsS0FBSyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDbkMsT0FBTyxZQUFZLENBQUM7aUJBQ3JCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9wYWdlLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBlbnRpdHlUeXBlOiBzdHJpbmdcbik6IChcbiAgc3RhdGU6IHN0cmluZyxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLkxvYWRQYWdlRGF0YVN1Y2Nlc3MgfCBmcm9tQWN0aW9uLkxvYWRQYWdlRGF0YUZhaWxcbikgPT4gc3RyaW5nIHtcbiAgcmV0dXJuIChcbiAgICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgICBhY3Rpb246IGZyb21BY3Rpb24uTG9hZFBhZ2VEYXRhU3VjY2VzcyB8IGZyb21BY3Rpb24uTG9hZFBhZ2VEYXRhRmFpbFxuICApOiBzdHJpbmcgPT4ge1xuICAgIGlmIChhY3Rpb24ubWV0YSAmJiBhY3Rpb24ubWV0YS5lbnRpdHlUeXBlID09PSBlbnRpdHlUeXBlKSB7XG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1BBR0VfREFUQV9TVUNDRVNTOiB7XG4gICAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkLnBhZ2VJZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1BBR0VfREFUQV9GQUlMOiB7XG4gICAgICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59XG4iXX0=