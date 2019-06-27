/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { UserActions } from '../actions/index';
/** @type {?} */
export var initialState = {
    entities: [],
    country: null,
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case UserActions.LOAD_REGIONS_SUCCESS: {
            /** @type {?} */
            var entities = action.payload.entities;
            /** @type {?} */
            var country = action.payload.country;
            if (entities) {
                return tslib_1.__assign({}, state, { entities: entities,
                    country: country });
            }
            return initialState;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaW9ucy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvcmVnaW9ucy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUcvQyxNQUFNLEtBQU8sWUFBWSxHQUFpQjtJQUN4QyxRQUFRLEVBQUUsRUFBRTtJQUNaLE9BQU8sRUFBRSxJQUFJO0NBQ2Q7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQWtFO0lBRGxFLHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztnQkFDL0IsUUFBUSxHQUFhLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUTs7Z0JBQzVDLE9BQU8sR0FBVyxNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU87WUFDOUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osNEJBQ0ssS0FBSyxJQUNSLFFBQVEsVUFBQTtvQkFDUixPQUFPLFNBQUEsSUFDUDthQUNIO1lBQ0QsT0FBTyxZQUFZLENBQUM7U0FDckI7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlZ2lvbiB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2FkZHJlc3MubW9kZWwnO1xuaW1wb3J0IHsgVXNlckFjdGlvbnMgfSBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IFJlZ2lvbnNTdGF0ZSB9IGZyb20gJy4uL3VzZXItc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBSZWdpb25zU3RhdGUgPSB7XG4gIGVudGl0aWVzOiBbXSxcbiAgY291bnRyeTogbnVsbCxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBVc2VyQWN0aW9ucy5SZWdpb25zQWN0aW9uIHwgVXNlckFjdGlvbnMuQ2xlYXJVc2VyTWlzY3NEYXRhXG4pOiBSZWdpb25zU3RhdGUge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBVc2VyQWN0aW9ucy5MT0FEX1JFR0lPTlNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgZW50aXRpZXM6IFJlZ2lvbltdID0gYWN0aW9uLnBheWxvYWQuZW50aXRpZXM7XG4gICAgICBjb25zdCBjb3VudHJ5OiBzdHJpbmcgPSBhY3Rpb24ucGF5bG9hZC5jb3VudHJ5O1xuICAgICAgaWYgKGVudGl0aWVzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgZW50aXRpZXMsXG4gICAgICAgICAgY291bnRyeSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19