/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as fromActions from '../actions/user-consents.action';
/** @type {?} */
export const initialState = {
    consentTemplates: [],
};
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
            /** @type {?} */
            const updatedTemplates = state.consentTemplates.map(consentTemplate => consentTemplate.id === updatedConsentTemplate.id
                ? updatedConsentTemplate
                : consentTemplate);
            return {
                consentTemplates: updatedTemplates,
            };
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvdXNlci1jb25zZW50cy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEtBQUssV0FBVyxNQUFNLGlDQUFpQyxDQUFDOztBQUUvRCxNQUFNLE9BQU8sWUFBWSxHQUF3QjtJQUMvQyxnQkFBZ0IsRUFBRSxFQUFFO0NBQ3JCOzs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUFzQztJQUV0QyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7a0JBQ3JDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTztZQUMvQixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDM0M7UUFFRCxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOztrQkFDcEMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLGVBQWU7O2tCQUMvQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQ3BFLGVBQWUsQ0FBQyxFQUFFLEtBQUssc0JBQXNCLENBQUMsRUFBRTtnQkFDOUMsQ0FBQyxDQUFDLHNCQUFzQjtnQkFDeEIsQ0FBQyxDQUFDLGVBQWUsQ0FDcEI7WUFDRCxPQUFPO2dCQUNMLGdCQUFnQixFQUFFLGdCQUFnQjthQUNuQyxDQUFDO1NBQ0g7S0FDRjtJQUVELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZUxpc3QgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9hZGRpdGlvbmFsLW9jYy5tb2RlbHMnO1xuaW1wb3J0ICogYXMgZnJvbUFjdGlvbnMgZnJvbSAnLi4vYWN0aW9ucy91c2VyLWNvbnNlbnRzLmFjdGlvbic7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENvbnNlbnRUZW1wbGF0ZUxpc3QgPSB7XG4gIGNvbnNlbnRUZW1wbGF0ZXM6IFtdLFxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZXIoXG4gIHN0YXRlID0gaW5pdGlhbFN0YXRlLFxuICBhY3Rpb246IGZyb21BY3Rpb25zLlVzZXJDb25zZW50c0FjdGlvblxuKTogQ29uc2VudFRlbXBsYXRlTGlzdCB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIGZyb21BY3Rpb25zLkxPQURfVVNFUl9DT05TRU5UU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBjb25zZW50cyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIGNvbnNlbnRzID8gY29uc2VudHMgOiBpbml0aWFsU3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSBmcm9tQWN0aW9ucy5HSVZFX1VTRVJfQ09OU0VOVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCB1cGRhdGVkQ29uc2VudFRlbXBsYXRlID0gYWN0aW9uLmNvbnNlbnRUZW1wbGF0ZTtcbiAgICAgIGNvbnN0IHVwZGF0ZWRUZW1wbGF0ZXMgPSBzdGF0ZS5jb25zZW50VGVtcGxhdGVzLm1hcChjb25zZW50VGVtcGxhdGUgPT5cbiAgICAgICAgY29uc2VudFRlbXBsYXRlLmlkID09PSB1cGRhdGVkQ29uc2VudFRlbXBsYXRlLmlkXG4gICAgICAgICAgPyB1cGRhdGVkQ29uc2VudFRlbXBsYXRlXG4gICAgICAgICAgOiBjb25zZW50VGVtcGxhdGVcbiAgICAgICk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb25zZW50VGVtcGxhdGVzOiB1cGRhdGVkVGVtcGxhdGVzLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc3RhdGU7XG59XG4iXX0=