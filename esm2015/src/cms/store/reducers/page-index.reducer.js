/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions/page.action';
/** @type {?} */
export const initialState = undefined;
/**
 * @param {?} entityType
 * @return {?}
 */
export function reducer(entityType) {
    return (/**
     * @param {?=} state
     * @param {?=} action
     * @return {?}
     */
    (state = initialState, action) => {
        if (action.meta && action.meta.entityType === entityType) {
            switch (action.type) {
                case fromAction.LOAD_PAGE_DATA_SUCCESS: {
                    return action.payload.pageId;
                }
                case fromAction.LOAD_PAGE_DATA_FAIL: {
                    return initialState;
                }
                case fromAction.SET_PAGE_FAIL_INDEX: {
                    return action.payload;
                }
            }
        }
        return state;
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1pbmRleC5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2Ntcy9zdG9yZS9yZWR1Y2Vycy9wYWdlLWluZGV4LnJlZHVjZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sS0FBSyxVQUFVLE1BQU0sd0JBQXdCLENBQUM7O0FBRXJELE1BQU0sT0FBTyxZQUFZLEdBQUcsU0FBUzs7Ozs7QUFFckMsTUFBTSxVQUFVLE9BQU8sQ0FDckIsVUFBa0I7SUFRbEI7Ozs7O0lBQU8sQ0FDTCxLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUcrQixFQUN2QixFQUFFO1FBQ1YsSUFBSSxNQUFNLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsRUFBRTtZQUN4RCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ25CLEtBQUssVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7b0JBQ3RDLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUM7aUJBQzlCO2dCQUVELEtBQUssVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUM7b0JBQ25DLE9BQU8sWUFBWSxDQUFDO2lCQUNyQjtnQkFFRCxLQUFLLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUNuQyxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQ3ZCO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucy9wYWdlLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB1bmRlZmluZWQ7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBlbnRpdHlUeXBlOiBzdHJpbmdcbik6IChcbiAgc3RhdGU6IHN0cmluZyxcbiAgYWN0aW9uOlxuICAgIHwgZnJvbUFjdGlvbi5Mb2FkUGFnZURhdGFTdWNjZXNzXG4gICAgfCBmcm9tQWN0aW9uLkxvYWRQYWdlRGF0YUZhaWxcbiAgICB8IGZyb21BY3Rpb24uU2V0UGFnZUZhaWxJbmRleFxuKSA9PiBzdHJpbmcge1xuICByZXR1cm4gKFxuICAgIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICAgIGFjdGlvbjpcbiAgICAgIHwgZnJvbUFjdGlvbi5Mb2FkUGFnZURhdGFTdWNjZXNzXG4gICAgICB8IGZyb21BY3Rpb24uTG9hZFBhZ2VEYXRhRmFpbFxuICAgICAgfCBmcm9tQWN0aW9uLlNldFBhZ2VGYWlsSW5kZXhcbiAgKTogc3RyaW5nID0+IHtcbiAgICBpZiAoYWN0aW9uLm1ldGEgJiYgYWN0aW9uLm1ldGEuZW50aXR5VHlwZSA9PT0gZW50aXR5VHlwZSkge1xuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9QQUdFX0RBVEFfU1VDQ0VTUzoge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZC5wYWdlSWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9QQUdFX0RBVEFfRkFJTDoge1xuICAgICAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlIGZyb21BY3Rpb24uU0VUX1BBR0VfRkFJTF9JTkRFWDoge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24ucGF5bG9hZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG4gIH07XG59XG4iXX0=