/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserActions } from '../actions/index';
/** @type {?} */
export const initialState = [];
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case UserActions.LOAD_USER_CONSENTS_SUCCESS: {
            /** @type {?} */
            const consents = action.payload;
            return consents ? consents : initialState;
        }
        case UserActions.GIVE_USER_CONSENT_SUCCESS: {
            /** @type {?} */
            const updatedConsentTemplate = action.consentTemplate;
            return state.map((/**
             * @param {?} consentTemplate
             * @return {?}
             */
            consentTemplate => consentTemplate.id === updatedConsentTemplate.id
                ? updatedConsentTemplate
                : consentTemplate));
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvdXNlci1jb25zZW50cy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRS9DLE1BQU0sT0FBTyxZQUFZLEdBQXNCLEVBQUU7Ozs7OztBQUVqRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFLLEdBQUcsWUFBWSxFQUNwQixNQUFzQztJQUV0QyxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7a0JBQ3JDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTztZQUMvQixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDM0M7UUFFRCxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOztrQkFDcEMsc0JBQXNCLEdBQUcsTUFBTSxDQUFDLGVBQWU7WUFDckQsT0FBTyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLGVBQWUsQ0FBQyxFQUFFLENBQ2pDLGVBQWUsQ0FBQyxFQUFFLEtBQUssc0JBQXNCLENBQUMsRUFBRTtnQkFDOUMsQ0FBQyxDQUFDLHNCQUFzQjtnQkFDeEIsQ0FBQyxDQUFDLGVBQWUsRUFDcEIsQ0FBQztTQUNIO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IFVzZXJBY3Rpb25zIH0gZnJvbSAnLi4vYWN0aW9ucy9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGU6IENvbnNlbnRUZW1wbGF0ZVtdID0gW107XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VyKFxuICBzdGF0ZSA9IGluaXRpYWxTdGF0ZSxcbiAgYWN0aW9uOiBVc2VyQWN0aW9ucy5Vc2VyQ29uc2VudHNBY3Rpb25cbik6IENvbnNlbnRUZW1wbGF0ZVtdIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVXNlckFjdGlvbnMuTE9BRF9VU0VSX0NPTlNFTlRTX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IGNvbnNlbnRzID0gYWN0aW9uLnBheWxvYWQ7XG4gICAgICByZXR1cm4gY29uc2VudHMgPyBjb25zZW50cyA6IGluaXRpYWxTdGF0ZTtcbiAgICB9XG5cbiAgICBjYXNlIFVzZXJBY3Rpb25zLkdJVkVfVVNFUl9DT05TRU5UX1NVQ0NFU1M6IHtcbiAgICAgIGNvbnN0IHVwZGF0ZWRDb25zZW50VGVtcGxhdGUgPSBhY3Rpb24uY29uc2VudFRlbXBsYXRlO1xuICAgICAgcmV0dXJuIHN0YXRlLm1hcChjb25zZW50VGVtcGxhdGUgPT5cbiAgICAgICAgY29uc2VudFRlbXBsYXRlLmlkID09PSB1cGRhdGVkQ29uc2VudFRlbXBsYXRlLmlkXG4gICAgICAgICAgPyB1cGRhdGVkQ29uc2VudFRlbXBsYXRlXG4gICAgICAgICAgOiBjb25zZW50VGVtcGxhdGVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0YXRlO1xufVxuIl19