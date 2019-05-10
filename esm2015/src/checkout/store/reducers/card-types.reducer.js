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
        case fromAction.LOAD_CARD_TYPES_SUCCESS: {
            /** @type {?} */
            const cardTypes = action.payload;
            /** @type {?} */
            const entities = cardTypes.reduce((cardTypesEntities, name) => {
                return Object.assign({}, cardTypesEntities, { [name.code]: name });
            }, Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case fromAction.CHECKOUT_CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
/** @type {?} */
export const getCardTypesEntites = (state) => state.entities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL3JlZHVjZXJzL2NhcmQtdHlwZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxPQUFPLFlBQVksR0FBbUI7SUFDMUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBdUU7SUFFdkUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2tCQUNqQyxTQUFTLEdBQWUsTUFBTSxDQUFDLE9BQU87O2tCQUN0QyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDL0IsQ0FBQyxpQkFBK0MsRUFBRSxJQUFjLEVBQUUsRUFBRTtnQkFDbEUseUJBQ0ssaUJBQWlCLElBQ3BCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFDakI7WUFDSixDQUFDLG9CQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQseUJBQ0ssS0FBSyxJQUNSLFFBQVEsSUFDUjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN6QyxPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZFR5cGVzU3RhdGUgfSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FyZFR5cGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jYXJ0Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ2FyZFR5cGVzU3RhdGUgPSB7XG4gIGVudGl0aWVzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLkNhcmRUeXBlc0FjdGlvbiB8IGZyb21BY3Rpb24uQ2hlY2tvdXRNaXNjc0RhdGFBY3Rpb25cbik6IENhcmRUeXBlc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX0NBUkRfVFlQRVNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgY2FyZFR5cGVzOiBDYXJkVHlwZVtdID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICBjb25zdCBlbnRpdGllcyA9IGNhcmRUeXBlcy5yZWR1Y2UoXG4gICAgICAgIChjYXJkVHlwZXNFbnRpdGllczogeyBbY29kZTogc3RyaW5nXTogQ2FyZFR5cGUgfSwgbmFtZTogQ2FyZFR5cGUpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLi4uY2FyZFR5cGVzRW50aXRpZXMsXG4gICAgICAgICAgICBbbmFtZS5jb2RlXTogbmFtZSxcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgLi4uc3RhdGUuZW50aXRpZXMsXG4gICAgICAgIH1cbiAgICAgICk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBlbnRpdGllcyxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9uLkNIRUNLT1VUX0NMRUFSX01JU0NTX0RBVEE6IHtcbiAgICAgIHJldHVybiBpbml0aWFsU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0Q2FyZFR5cGVzRW50aXRlcyA9IChzdGF0ZTogQ2FyZFR5cGVzU3RhdGUpID0+IHN0YXRlLmVudGl0aWVzO1xuIl19