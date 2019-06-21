/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromActions from '../actions/user-consents.action';
/** @type {?} */
export var initialState = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case fromActions.LOAD_USER_CONSENTS_SUCCESS: {
            /** @type {?} */
            var consents = action.payload;
            return consents ? consents : initialState;
        }
        case fromActions.GIVE_USER_CONSENT_SUCCESS: {
            /** @type {?} */
            var updatedConsentTemplate_1 = action.consentTemplate;
            return state.map((/**
             * @param {?} consentTemplate
             * @return {?}
             */
            function (consentTemplate) {
                return consentTemplate.id === updatedConsentTemplate_1.id
                    ? updatedConsentTemplate_1
                    : consentTemplate;
            }));
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvdXNlci1jb25zZW50cy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEtBQUssV0FBVyxNQUFNLGlDQUFpQyxDQUFDOztBQUcvRCxNQUFNLEtBQU8sWUFBWSxHQUFzQixFQUFFOzs7Ozs7QUFFakQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBb0IsRUFDcEIsTUFBc0M7SUFEdEMsc0JBQUEsRUFBQSxvQkFBb0I7SUFHcEIsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssV0FBVyxDQUFDLDBCQUEwQixDQUFDLENBQUM7O2dCQUNyQyxRQUFRLEdBQUcsTUFBTSxDQUFDLE9BQU87WUFDL0IsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1NBQzNDO1FBRUQsS0FBSyxXQUFXLENBQUMseUJBQXlCLENBQUMsQ0FBQzs7Z0JBQ3BDLHdCQUFzQixHQUFHLE1BQU0sQ0FBQyxlQUFlO1lBQ3JELE9BQU8sS0FBSyxDQUFDLEdBQUc7Ozs7WUFBQyxVQUFBLGVBQWU7Z0JBQzlCLE9BQUEsZUFBZSxDQUFDLEVBQUUsS0FBSyx3QkFBc0IsQ0FBQyxFQUFFO29CQUM5QyxDQUFDLENBQUMsd0JBQXNCO29CQUN4QixDQUFDLENBQUMsZUFBZTtZQUZuQixDQUVtQixFQUNwQixDQUFDO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlci1jb25zZW50cy5hY3Rpb24nO1xuaW1wb3J0IHsgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENvbnNlbnRUZW1wbGF0ZVtdID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb25cbik6IENvbnNlbnRUZW1wbGF0ZVtdIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgZnJvbUFjdGlvbnMuTE9BRF9VU0VSX0NPTlNFTlRTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGNvbnNlbnRzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4gY29uc2VudHMgPyBjb25zZW50cyA6IGluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIGZyb21BY3Rpb25zLkdJVkVfVVNFUl9DT05TRU5UX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDb25zZW50VGVtcGxhdGUgPSBhY3Rpb24uY29uc2VudFRlbXBsYXRlO1xuICAgICAgcmV0dXJuIHN0YXRlLm1hcChjb25zZW50VGVtcGxhdGUgPT5cbiAgICAgICAgY29uc2VudFRlbXBsYXRlLmlkID09PSB1cGRhdGVkQ29uc2VudFRlbXBsYXRlLmlkXG4gICAgICAgICAgPyB1cGRhdGVkQ29uc2VudFRlbXBsYXRlXG4gICAgICAgICAgOiBjb25zZW50VGVtcGxhdGVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19