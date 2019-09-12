/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CheckoutActions } from '../actions/index';
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
        case CheckoutActions.LOAD_CARD_TYPES_SUCCESS: {
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
        case CheckoutActions.CHECKOUT_CLEAR_MISCS_DATA: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL3JlZHVjZXJzL2NhcmQtdHlwZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHbkQsTUFBTSxLQUFPLFlBQVksR0FBbUI7SUFDMUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFFMEM7SUFIMUMsc0JBQUEsRUFBQSxvQkFBb0I7SUFLcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssZUFBZSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2dCQUN0QyxTQUFTLEdBQWUsTUFBTSxDQUFDLE9BQU87O2dCQUN0QyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU07Ozs7O1lBQy9CLFVBQUMsaUJBQStDLEVBQUUsSUFBYzs7Z0JBQzlELDRCQUNLLGlCQUFpQixlQUNuQixJQUFJLENBQUMsSUFBSSxJQUFHLElBQUksT0FDakI7WUFDSixDQUFDLHdCQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQsNEJBQ0ssS0FBSyxJQUNSLFFBQVEsVUFBQSxJQUNSO1NBQ0g7UUFFRCxLQUFLLGVBQWUsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sWUFBWSxDQUFDO1NBQ3JCO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7O0FBRUQsTUFBTSxLQUFPLG1CQUFtQjs7OztBQUFHLFVBQUMsS0FBcUIsSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLEVBQWQsQ0FBYyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZFR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcbmltcG9ydCB7IENoZWNrb3V0QWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FyZFR5cGVzU3RhdGUgfSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENhcmRUeXBlc1N0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjpcbiAgICB8IENoZWNrb3V0QWN0aW9ucy5DYXJkVHlwZXNBY3Rpb25cbiAgICB8IENoZWNrb3V0QWN0aW9ucy5DaGVja291dENsZWFyTWlzY3NEYXRhXG4pOiBDYXJkVHlwZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIENoZWNrb3V0QWN0aW9ucy5MT0FEX0NBUkRfVFlQRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgY2FyZFR5cGVzOiBDYXJkVHlwZVtdID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IGNhcmRUeXBlcy5yZWR1Y2UoXG4gICAgICAgIChjYXJkVHlwZXNFbnRpdGllczogeyBbY29kZTogc3RyaW5nXTogQ2FyZFR5cGUgfSwgbmFtZTogQ2FyZFR5cGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY2FyZFR5cGVzRW50aXRpZXMsXG4gICAgICAgICAgICBbbmFtZS5jb2RlXTogbmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBDaGVja291dEFjdGlvbnMuQ0hFQ0tPVVRfQ0xFQVJfTUlTQ1NfREFUQToge1xuICAgICAgcmV0dXJuIGluaXRpYWxTdGF0ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRDYXJkVHlwZXNFbnRpdGVzID0gKHN0YXRlOiBDYXJkVHlwZXNTdGF0ZSkgPT4gc3RhdGUuZW50aXRpZXM7XG4iXX0=