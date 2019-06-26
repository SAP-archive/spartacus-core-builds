/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CmsActions } from '../actions/index';
/** @type {?} */
export const initialState = { entities: {} };
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case CmsActions.LOAD_CMS_PAGE_DATA_SUCCESS: {
            /** @type {?} */
            const page = action.payload;
            return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [page.pageId]: page }) });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1kYXRhLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3JlZHVjZXJzL3BhZ2UtZGF0YS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFFQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRTlDLE1BQU0sT0FBTyxZQUFZLEdBQXNCLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRTs7Ozs7O0FBRS9ELE1BQU0sVUFBVSxPQUFPLENBQ3JCLEtBQUssR0FBRyxZQUFZLEVBQ3BCLE1BQXlDO0lBRXpDLFFBQVEsTUFBTSxDQUFDLElBQUksRUFBRTtRQUNuQixLQUFLLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDOztrQkFDcEMsSUFBSSxHQUFTLE1BQU0sQ0FBQyxPQUFPO1lBQ2pDLHlCQUFZLEtBQUssSUFBRSxRQUFRLG9CQUFPLEtBQUssQ0FBQyxRQUFRLElBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxPQUFLO1NBQzNFO0tBQ0Y7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHlTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS9lbnRpdHktc3RhdGUnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ21zQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBFbnRpdHlTdGF0ZTxQYWdlPiA9IHsgZW50aXRpZXM6IHt9IH07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBDbXNBY3Rpb25zLkxvYWRDbXNQYWdlRGF0YVN1Y2Nlc3Ncbik6IEVudGl0eVN0YXRlPFBhZ2U+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQ21zQWN0aW9ucy5MT0FEX0NNU19QQUdFX0RBVEFfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgcGFnZTogUGFnZSA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGVudGl0aWVzOiB7IC4uLnN0YXRlLmVudGl0aWVzLCBbcGFnZS5wYWdlSWRdOiBwYWdlIH0gfTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19