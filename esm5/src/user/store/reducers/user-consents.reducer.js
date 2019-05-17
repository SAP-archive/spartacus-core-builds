/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromActions from '../actions/user-consents.action';
/** @type {?} */
export var initialState = {
    consentTemplates: [],
};
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
            /** @type {?} */
            var updatedTemplates = state.consentTemplates.map(function (consentTemplate) {
                return consentTemplate.id === updatedConsentTemplate_1.id
                    ? updatedConsentTemplate_1
                    : consentTemplate;
            });
            return {
                consentTemplates: updatedTemplates,
            };
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvdXNlci1jb25zZW50cy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssV0FBVyxNQUFNLGlDQUFpQyxDQUFDOztBQUUvRCxNQUFNLEtBQU8sWUFBWSxHQUF3QjtJQUMvQyxnQkFBZ0IsRUFBRSxFQUFFO0NBQ3JCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUFzQztJQUR0QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7Z0JBQ3JDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTztZQUMvQixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDM0M7UUFFRCxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOztnQkFDcEMsd0JBQXNCLEdBQUcsTUFBTSxDQUFDLGVBQWU7O2dCQUMvQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLFVBQUEsZUFBZTtnQkFDakUsT0FBQSxlQUFlLENBQUMsRUFBRSxLQUFLLHdCQUFzQixDQUFDLEVBQUU7b0JBQzlDLENBQUMsQ0FBQyx3QkFBc0I7b0JBQ3hCLENBQUMsQ0FBQyxlQUFlO1lBRm5CLENBRW1CLENBQ3BCO1lBQ0QsT0FBTztnQkFDTCxnQkFBZ0IsRUFBRSxnQkFBZ0I7YUFDbkMsQ0FBQztTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zZW50VGVtcGxhdGVMaXN0IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvYWRkaXRpb25hbC1vY2MubW9kZWxzJztcbmltcG9ydCAqIGFzIGZyb21BY3Rpb25zIGZyb20gJy4uL2FjdGlvbnMvdXNlci1jb25zZW50cy5hY3Rpb24nO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDb25zZW50VGVtcGxhdGVMaXN0ID0ge1xuICBjb25zZW50VGVtcGxhdGVzOiBbXSxcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBmcm9tQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb25cbik6IENvbnNlbnRUZW1wbGF0ZUxpc3Qge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBmcm9tQWN0aW9ucy5MT0FEX1VTRVJfQ09OU0VOVFNfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgY29uc2VudHMgPSBhY3Rpb24ucGF5bG9hZDtcbiAgICAgIHJldHVybiBjb25zZW50cyA/IGNvbnNlbnRzIDogaW5pdGlhbFN0YXRlO1xuICAgIH1cblxuICAgIGNhc2UgZnJvbUFjdGlvbnMuR0lWRV9VU0VSX0NPTlNFTlRfU1VDQ0VTUzoge1xuICAgICAgY29uc3QgdXBkYXRlZENvbnNlbnRUZW1wbGF0ZSA9IGFjdGlvbi5jb25zZW50VGVtcGxhdGU7XG4gICAgICBjb25zdCB1cGRhdGVkVGVtcGxhdGVzID0gc3RhdGUuY29uc2VudFRlbXBsYXRlcy5tYXAoY29uc2VudFRlbXBsYXRlID0+XG4gICAgICAgIGNvbnNlbnRUZW1wbGF0ZS5pZCA9PT0gdXBkYXRlZENvbnNlbnRUZW1wbGF0ZS5pZFxuICAgICAgICAgID8gdXBkYXRlZENvbnNlbnRUZW1wbGF0ZVxuICAgICAgICAgIDogY29uc2VudFRlbXBsYXRlXG4gICAgICApO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29uc2VudFRlbXBsYXRlczogdXBkYXRlZFRlbXBsYXRlcyxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19