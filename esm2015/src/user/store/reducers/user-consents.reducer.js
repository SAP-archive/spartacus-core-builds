/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromActions from '../actions/user-consents.action';
/** @type {?} */
export const initialState = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case fromActions.LOAD_USER_CONSENTS_SUCCESS: {
            /** @type {?} */
            const consents = action.payload;
            return consents ? consents : initialState;
        }
        case fromActions.GIVE_USER_CONSENT_SUCCESS: {
            /** @type {?} */
            const updatedConsentTemplate = action.consentTemplate;
            return state.map(consentTemplate => consentTemplate.id === updatedConsentTemplate.id
                ? updatedConsentTemplate
                : consentTemplate);
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvdXNlci1jb25zZW50cy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssV0FBVyxNQUFNLGlDQUFpQyxDQUFDOztBQUcvRCxNQUFNLE9BQU8sWUFBWSxHQUFzQixFQUFFOzs7Ozs7QUFFakQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBc0M7SUFFdEMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O2tCQUNyQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU87WUFDL0IsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQzNDO1FBRUQsS0FBSyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQzs7a0JBQ3BDLHNCQUFzQixHQUFHLE1BQU0sQ0FBQyxlQUFlO1lBQ3JELE9BQU8sS0FBSyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUNqQyxlQUFlLENBQUMsRUFBRSxLQUFLLHNCQUFzQixDQUFDLEVBQUU7Z0JBQzlDLENBQUMsQ0FBQyxzQkFBc0I7Z0JBQ3hCLENBQUMsQ0FBQyxlQUFlLENBQ3BCLENBQUM7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWNvbnNlbnRzLmFjdGlvbic7XG5pbXBvcnQgeyBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcblxuZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZTogQ29uc2VudFRlbXBsYXRlW10gPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvblxuKTogQ29uc2VudFRlbXBsYXRlW10ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9ucy5MT0FEX1VTRVJfQ09OU0VOVFNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgY29uc2VudHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiBjb25zZW50cyA/IGNvbnNlbnRzIDogaW5pdGlhbFN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbnMuR0lWRV9VU0VSX0NPTlNFTlRfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgdXBkYXRlZENvbnNlbnRUZW1wbGF0ZSA9IGFjdGlvbi5jb25zZW50VGVtcGxhdGU7XG4gICAgICByZXR1cm4gc3RhdGUubWFwKGNvbnNlbnRUZW1wbGF0ZSA9PlxuICAgICAgICBjb25zZW50VGVtcGxhdGUuaWQgPT09IHVwZGF0ZWRDb25zZW50VGVtcGxhdGUuaWRcbiAgICAgICAgICA/IHVwZGF0ZWRDb25zZW50VGVtcGxhdGVcbiAgICAgICAgICA6IGNvbnNlbnRUZW1wbGF0ZVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=