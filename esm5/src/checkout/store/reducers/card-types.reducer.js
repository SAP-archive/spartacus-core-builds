/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import * as fromAction from '../actions/index';
/** @type {?} */
export var initialState = {
    entities: {},
};
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromAction.LOAD_CARD_TYPES_SUCCESS: {
            /** @type {?} */
            var cardTypes = action.payload;
            /** @type {?} */
            var entities = cardTypes.reduce((/**
             * @param {?} cardTypesEntities
             * @param {?} name
             * @return {?}
             */
            function (cardTypesEntities, name) {
                var _a;
                return tslib_1.__assign({}, cardTypesEntities, (_a = {}, _a[name.code] = name, _a));
            }), tslib_1.__assign({}, state.entities));
            return tslib_1.__assign({}, state, { entities: entities });
        }
        case fromAction.CHECKOUT_CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
/** @type {?} */
export var getCardTypesEntites = (/**
 * @param {?} state
 * @return {?}
 */
function (state) { return state.entities; });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL3JlZHVjZXJzL2NhcmQtdHlwZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sS0FBSyxVQUFVLE1BQU0sa0JBQWtCLENBQUM7O0FBRy9DLE1BQU0sS0FBTyxZQUFZLEdBQW1CO0lBQzFDLFFBQVEsRUFBRSxFQUFFO0NBQ2I7Ozs7OztBQUVELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQW9CLEVBQ3BCLE1BQXVFO0lBRHZFLHNCQUFBLEVBQUEsb0JBQW9CO0lBR3BCLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDOztnQkFDakMsU0FBUyxHQUFlLE1BQU0sQ0FBQyxPQUFPOztnQkFDdEMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxNQUFNOzs7OztZQUMvQixVQUFDLGlCQUErQyxFQUFFLElBQWM7O2dCQUM5RCw0QkFDSyxpQkFBaUIsZUFDbkIsSUFBSSxDQUFDLElBQUksSUFBRyxJQUFJLE9BQ2pCO1lBQ0osQ0FBQyx3QkFFSSxLQUFLLENBQUMsUUFBUSxFQUVwQjtZQUVELDRCQUNLLEtBQUssSUFDUixRQUFRLFVBQUEsSUFDUjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN6QyxPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sS0FBTyxtQkFBbUI7Ozs7QUFBRyxVQUFDLEtBQXFCLElBQUssT0FBQSxLQUFLLENBQUMsUUFBUSxFQUFkLENBQWMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcmRUeXBlc1N0YXRlIH0gZnJvbSAnLi4vY2hlY2tvdXQtc3RhdGUnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbiBmcm9tICcuLi9hY3Rpb25zL2luZGV4JztcbmltcG9ydCB7IENhcmRUeXBlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY2FydC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENhcmRUeXBlc1N0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUFjdGlvbi5DYXJkVHlwZXNBY3Rpb24gfCBmcm9tQWN0aW9uLkNoZWNrb3V0TWlzY3NEYXRhQWN0aW9uXG4pOiBDYXJkVHlwZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9DQVJEX1RZUEVTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGNhcmRUeXBlczogQ2FyZFR5cGVbXSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBjYXJkVHlwZXMucmVkdWNlKFxuICAgICAgICAoY2FyZFR5cGVzRW50aXRpZXM6IHsgW2NvZGU6IHN0cmluZ106IENhcmRUeXBlIH0sIG5hbWU6IENhcmRUeXBlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNhcmRUeXBlc0VudGl0aWVzLFxuICAgICAgICAgICAgW25hbWUuY29kZV06IG5hbWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5DSEVDS09VVF9DTEVBUl9NSVNDU19EQVRBOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldENhcmRUeXBlc0VudGl0ZXMgPSAoc3RhdGU6IENhcmRUeXBlc1N0YXRlKSA9PiBzdGF0ZS5lbnRpdGllcztcbiJdfQ==