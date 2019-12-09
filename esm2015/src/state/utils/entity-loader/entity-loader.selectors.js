/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { initialLoaderState } from '../loader/loader.reducer';
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
export function entityStateSelector(state, id) {
    return state.entities[id] || initialLoaderState;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
export function entityValueSelector(state, id) {
    /** @type {?} */
    const entityState = entityStateSelector(state, id);
    return entityState.value;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
export function entityLoadingSelector(state, id) {
    /** @type {?} */
    const entityState = entityStateSelector(state, id);
    return entityState.loading;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
export function entityErrorSelector(state, id) {
    /** @type {?} */
    const entityState = entityStateSelector(state, id);
    return entityState.error;
}
/**
 * @template T
 * @param {?} state
 * @param {?} id
 * @return {?}
 */
export function entitySuccessSelector(state, id) {
    /** @type {?} */
    const entityState = entityStateSelector(state, id);
    return entityState.success;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW50aXR5LWxvYWRlci5zZWxlY3RvcnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc3RhdGUvdXRpbHMvZW50aXR5LWxvYWRlci9lbnRpdHktbG9hZGVyLnNlbGVjdG9ycy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7QUFHOUQsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxLQUEyQixFQUMzQixFQUFVO0lBRVYsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLGtCQUFrQixDQUFDO0FBQ2xELENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLEtBQTJCLEVBQzNCLEVBQVU7O1VBRUosV0FBVyxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7SUFDbEQsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO0FBQzNCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLEtBQTJCLEVBQzNCLEVBQVU7O1VBRUosV0FBVyxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7SUFDbEQsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDO0FBQzdCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQ2pDLEtBQTJCLEVBQzNCLEVBQVU7O1VBRUosV0FBVyxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7SUFDbEQsT0FBTyxXQUFXLENBQUMsS0FBSyxDQUFDO0FBQzNCLENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUscUJBQXFCLENBQ25DLEtBQTJCLEVBQzNCLEVBQVU7O1VBRUosV0FBVyxHQUFHLG1CQUFtQixDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7SUFDbEQsT0FBTyxXQUFXLENBQUMsT0FBTyxDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2FkZXJTdGF0ZSB9IGZyb20gJy4uL2xvYWRlci9sb2FkZXItc3RhdGUnO1xuaW1wb3J0IHsgaW5pdGlhbExvYWRlclN0YXRlIH0gZnJvbSAnLi4vbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcbmltcG9ydCB7IEVudGl0eUxvYWRlclN0YXRlIH0gZnJvbSAnLi9lbnRpdHktbG9hZGVyLXN0YXRlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVN0YXRlU2VsZWN0b3I8VD4oXG4gIHN0YXRlOiBFbnRpdHlMb2FkZXJTdGF0ZTxUPixcbiAgaWQ6IHN0cmluZ1xuKTogTG9hZGVyU3RhdGU8VD4ge1xuICByZXR1cm4gc3RhdGUuZW50aXRpZXNbaWRdIHx8IGluaXRpYWxMb2FkZXJTdGF0ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eVZhbHVlU2VsZWN0b3I8VD4oXG4gIHN0YXRlOiBFbnRpdHlMb2FkZXJTdGF0ZTxUPixcbiAgaWQ6IHN0cmluZ1xuKTogVCB7XG4gIGNvbnN0IGVudGl0eVN0YXRlID0gZW50aXR5U3RhdGVTZWxlY3RvcihzdGF0ZSwgaWQpO1xuICByZXR1cm4gZW50aXR5U3RhdGUudmFsdWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlMb2FkaW5nU2VsZWN0b3I8VD4oXG4gIHN0YXRlOiBFbnRpdHlMb2FkZXJTdGF0ZTxUPixcbiAgaWQ6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gIGNvbnN0IGVudGl0eVN0YXRlID0gZW50aXR5U3RhdGVTZWxlY3RvcihzdGF0ZSwgaWQpO1xuICByZXR1cm4gZW50aXR5U3RhdGUubG9hZGluZztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVudGl0eUVycm9yU2VsZWN0b3I8VD4oXG4gIHN0YXRlOiBFbnRpdHlMb2FkZXJTdGF0ZTxUPixcbiAgaWQ6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gIGNvbnN0IGVudGl0eVN0YXRlID0gZW50aXR5U3RhdGVTZWxlY3RvcihzdGF0ZSwgaWQpO1xuICByZXR1cm4gZW50aXR5U3RhdGUuZXJyb3I7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbnRpdHlTdWNjZXNzU2VsZWN0b3I8VD4oXG4gIHN0YXRlOiBFbnRpdHlMb2FkZXJTdGF0ZTxUPixcbiAgaWQ6IHN0cmluZ1xuKTogYm9vbGVhbiB7XG4gIGNvbnN0IGVudGl0eVN0YXRlID0gZW50aXR5U3RhdGVTZWxlY3RvcihzdGF0ZSwgaWQpO1xuICByZXR1cm4gZW50aXR5U3RhdGUuc3VjY2Vzcztcbn1cbiJdfQ==