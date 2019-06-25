/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CheckoutActions } from '../actions/index';
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
        case CheckoutActions.LOAD_CARD_TYPES_SUCCESS: {
            /** @type {?} */
            const cardTypes = action.payload;
            /** @type {?} */
            const entities = cardTypes.reduce((/**
             * @param {?} cardTypesEntities
             * @param {?} name
             * @return {?}
             */
            (cardTypesEntities, name) => {
                return Object.assign({}, cardTypesEntities, { [name.code]: name });
            }), Object.assign({}, state.entities));
            return Object.assign({}, state, { entities });
        }
        case CheckoutActions.CHECKOUT_CLEAR_MISCS_DATA: {
            return initialState;
        }
    }
    return state;
}
/** @type {?} */
export const getCardTypesEntites = (/**
 * @param {?} state
 * @return {?}
 */
(state) => state.entities);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC10eXBlcy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2NoZWNrb3V0L3N0b3JlL3JlZHVjZXJzL2NhcmQtdHlwZXMucmVkdWNlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtCQUFrQixDQUFDOztBQUduRCxNQUFNLE9BQU8sWUFBWSxHQUFtQjtJQUMxQyxRQUFRLEVBQUUsRUFBRTtDQUNiOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUUwQztJQUUxQyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxlQUFlLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs7a0JBQ3RDLFNBQVMsR0FBZSxNQUFNLENBQUMsT0FBTzs7a0JBQ3RDLFFBQVEsR0FBRyxTQUFTLENBQUMsTUFBTTs7Ozs7WUFDL0IsQ0FBQyxpQkFBK0MsRUFBRSxJQUFjLEVBQUUsRUFBRTtnQkFDbEUseUJBQ0ssaUJBQWlCLElBQ3BCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksSUFDakI7WUFDSixDQUFDLHFCQUVJLEtBQUssQ0FBQyxRQUFRLEVBRXBCO1lBRUQseUJBQ0ssS0FBSyxJQUNSLFFBQVEsSUFDUjtTQUNIO1FBRUQsS0FBSyxlQUFlLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM5QyxPQUFPLFlBQVksQ0FBQztTQUNyQjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDOztBQUVELE1BQU0sT0FBTyxtQkFBbUI7Ozs7QUFBRyxDQUFDLEtBQXFCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJkVHlwZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NhcnQubW9kZWwnO1xuaW1wb3J0IHsgQ2hlY2tvdXRBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5pbXBvcnQgeyBDYXJkVHlwZXNTdGF0ZSB9IGZyb20gJy4uL2NoZWNrb3V0LXN0YXRlJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ2FyZFR5cGVzU3RhdGUgPSB7XG4gIGVudGl0aWVzOiB7fSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOlxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNhcmRUeXBlc0FjdGlvblxuICAgIHwgQ2hlY2tvdXRBY3Rpb25zLkNoZWNrb3V0Q2xlYXJNaXNjc0RhdGFcbik6IENhcmRUeXBlc1N0YXRlIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ2hlY2tvdXRBY3Rpb25zLkxPQURfQ0FSRF9UWVBFU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBjYXJkVHlwZXM6IENhcmRUeXBlW10gPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIGNvbnN0IGVudGl0aWVzID0gY2FyZFR5cGVzLnJlZHVjZShcbiAgICAgICAgKGNhcmRUeXBlc0VudGl0aWVzOiB7IFtjb2RlOiBzdHJpbmddOiBDYXJkVHlwZSB9LCBuYW1lOiBDYXJkVHlwZSkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5jYXJkVHlwZXNFbnRpdGllcyxcbiAgICAgICAgICAgIFtuYW1lLmNvZGVdOiBuYW1lLFxuICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAuLi5zdGF0ZS5lbnRpdGllcyxcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGVudGl0aWVzLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICBjYXNlIENoZWNrb3V0QWN0aW9ucy5DSEVDS09VVF9DTEVBUl9NSVNDU19EQVRBOiB7XG4gICAgICByZXR1cm4gaW5pdGlhbFN0YXRlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldENhcmRUeXBlc0VudGl0ZXMgPSAoc3RhdGU6IENhcmRUeXBlc1N0YXRlKSA9PiBzdGF0ZS5lbnRpdGllcztcbiJdfQ==