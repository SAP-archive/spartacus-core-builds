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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL3JlZHVjZXJzL2NhcmQtdHlwZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxLQUFLLFVBQVUsTUFBTSxrQkFBa0IsQ0FBQzs7QUFHL0MsTUFBTSxPQUFPLFlBQVksR0FBbUI7SUFDMUMsUUFBUSxFQUFFLEVBQUU7Q0FDYjs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBdUU7SUFFdkUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7O2tCQUNqQyxTQUFTLEdBQWUsTUFBTSxDQUFDLE9BQU87O2tCQUN0QyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FDL0IsQ0FBQyxpQkFBK0MsRUFBRSxJQUFjLEVBQUUsRUFBRTtnQkFDbEUseUJBQ0ssaUJBQWlCLElBQ3BCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFDakI7WUFDSixDQUFDLG9CQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQseUJBQ0ssS0FBSyxJQUNSLFFBQVEsSUFDUjtTQUNIO1FBRUQsS0FBSyxVQUFVLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN6QyxPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sT0FBTyxtQkFBbUIsR0FBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyZFR5cGVzU3RhdGUgfSBmcm9tICcuLi9jaGVja291dC1zdGF0ZSc7XG5pbXBvcnQgKiBhcyBmcm9tQWN0aW9uIGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuaW1wb3J0IHsgQ2FyZFR5cGUgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENhcmRUeXBlc1N0YXRlID0ge1xuICBlbnRpdGllczoge30sXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogZnJvbUFjdGlvbi5DYXJkVHlwZXNBY3Rpb24gfCBmcm9tQWN0aW9uLkNoZWNrb3V0TWlzY3NEYXRhQWN0aW9uXG4pOiBDYXJkVHlwZXNTdGF0ZSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb24uTE9BRF9DQVJEX1RZUEVTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGNhcmRUeXBlczogQ2FyZFR5cGVbXSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgY29uc3QgZW50aXRpZXMgPSBjYXJkVHlwZXMucmVkdWNlKFxuICAgICAgICAoY2FyZFR5cGVzRW50aXRpZXM6IHsgW2NvZGU6IHN0cmluZ106IENhcmRUeXBlIH0sIG5hbWU6IENhcmRUeXBlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLmNhcmRUeXBlc0VudGl0aWVzLFxuICAgICAgICAgICAgW25hbWUuY29kZV06IG5hbWUsXG4gICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIC4uLnN0YXRlLmVudGl0aWVzLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgZW50aXRpZXMsXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbi5DSEVDS09VVF9DTEVBUl9NSVNDU19EQVRBOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldENhcmRUeXBlc0VudGl0ZXMgPSAoc3RhdGU6IENhcmRUeXBlc1N0YXRlKSA9PiBzdGF0ZS5lbnRpdGllcztcbiJdfQ==