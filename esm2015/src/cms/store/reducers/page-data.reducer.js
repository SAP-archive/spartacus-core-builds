/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromAction from '../actions';
/** @type {?} */
export const initialState = { entities: {} };
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromAction.LOAD_PAGE_DATA_SUCCESS: {
            /** @type {?} */
            const page = action.payload;
            return Object.assign({}, state, { entities: Object.assign({}, state.entities, { [page.pageId]: page }) });
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZS1kYXRhLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL3N0b3JlL3JlZHVjZXJzL3BhZ2UtZGF0YS5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssVUFBVSxNQUFNLFlBQVksQ0FBQzs7QUFJekMsTUFBTSxPQUFPLFlBQVksR0FBc0IsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFOzs7Ozs7QUFFL0QsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBc0M7SUFFdEMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssVUFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7O2tCQUNoQyxJQUFJLEdBQVMsTUFBTSxDQUFDLE9BQU87WUFDakMseUJBQVksS0FBSyxJQUFFLFFBQVEsb0JBQU8sS0FBSyxDQUFDLFFBQVEsSUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLE9BQUs7U0FDM0U7S0FDRjtJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21BY3Rpb24gZnJvbSAnLi4vYWN0aW9ucyc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBFbnRpdHlTdGF0ZSB9IGZyb20gJy4uLy4uLy4uL3N0YXRlL3V0aWxzL2VudGl0eS9lbnRpdHktc3RhdGUnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBFbnRpdHlTdGF0ZTxQYWdlPiA9IHsgZW50aXRpZXM6IHt9IH07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9uLkxvYWRQYWdlRGF0YVN1Y2Nlc3Ncbik6IEVudGl0eVN0YXRlPFBhZ2U+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbi5MT0FEX1BBR0VfREFUQV9TVUNDRVNTOiB7XG4gICAgICBjb25zdCBwYWdlOiBQYWdlID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgZW50aXRpZXM6IHsgLi4uc3RhdGUuZW50aXRpZXMsIFtwYWdlLnBhZ2VJZF06IHBhZ2UgfSB9O1xuICAgIH1cbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=