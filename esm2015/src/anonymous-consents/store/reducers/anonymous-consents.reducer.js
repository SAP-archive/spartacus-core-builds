/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ANONYMOUS_CONSENT_STATUS, } from '../../../model/consent.model';
import { AnonymousConsentsActions } from '../actions/index';
/** @type {?} */
export const initialState = [];
/**
 * @param {?} consents
 * @param {?} templateCode
 * @param {?} status
 * @return {?}
 */
export function toggleConsentStatus(consents, templateCode, status) {
    if (!consents) {
        return [];
    }
    return consents.map((/**
     * @param {?} consent
     * @return {?}
     */
    consent => {
        if (consent.templateCode === templateCode) {
            consent = Object.assign({}, consent, { consentState: status });
        }
        return consent;
    }));
}
/**
 * @param {?=} state
 * @param {?=} action
 * @return {?}
 */
export function reducer(state = initialState, action) {
    switch (action.type) {
        case AnonymousConsentsActions.GIVE_ANONYMOUS_CONSENT: {
            return toggleConsentStatus(state, action.templateCode, ANONYMOUS_CONSENT_STATUS.GIVEN);
        }
        case AnonymousConsentsActions.WITHDRAW_ANONYMOUS_CONSENT: {
            return toggleConsentStatus(state, action.templateCode, ANONYMOUS_CONSENT_STATUS.WITHDRAWN);
        }
        case AnonymousConsentsActions.SET_ANONYMOUS_CONSENTS: {
            return action.payload;
        }
    }
    return state;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnJlZHVjZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYW5vbnltb3VzLWNvbnNlbnRzL3N0b3JlL3JlZHVjZXJzL2Fub255bW91cy1jb25zZW50cy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsd0JBQXdCLEdBQ3pCLE1BQU0sOEJBQThCLENBQUM7QUFDdEMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRTVELE1BQU0sT0FBTyxZQUFZLEdBQXVCLEVBQUU7Ozs7Ozs7QUFFbEQsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxRQUE0QixFQUM1QixZQUFvQixFQUNwQixNQUFnQztJQUVoQyxJQUFJLENBQUMsUUFBUSxFQUFFO1FBQ2IsT0FBTyxFQUFFLENBQUM7S0FDWDtJQUVELE9BQU8sUUFBUSxDQUFDLEdBQUc7Ozs7SUFBQyxPQUFPLENBQUMsRUFBRTtRQUM1QixJQUFJLE9BQU8sQ0FBQyxZQUFZLEtBQUssWUFBWSxFQUFFO1lBQ3pDLE9BQU8scUJBQ0YsT0FBTyxJQUNWLFlBQVksRUFBRSxNQUFNLEdBQ3JCLENBQUM7U0FDSDtRQUNELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLE9BQU8sQ0FDckIsS0FBSyxHQUFHLFlBQVksRUFDcEIsTUFBeUQ7SUFFekQsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ25CLEtBQUssd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztZQUNwRCxPQUFPLG1CQUFtQixDQUN4QixLQUFLLEVBQ0wsTUFBTSxDQUFDLFlBQVksRUFDbkIsd0JBQXdCLENBQUMsS0FBSyxDQUMvQixDQUFDO1NBQ0g7UUFFRCxLQUFLLHdCQUF3QixDQUFDLDBCQUEwQixDQUFDLENBQUM7WUFDeEQsT0FBTyxtQkFBbUIsQ0FDeEIsS0FBSyxFQUNMLE1BQU0sQ0FBQyxZQUFZLEVBQ25CLHdCQUF3QixDQUFDLFNBQVMsQ0FDbkMsQ0FBQztTQUNIO1FBRUQsS0FBSyx3QkFBd0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1lBQ3BELE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztTQUN2QjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQW5vbnltb3VzQ29uc2VudCxcbiAgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLFxufSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBBbm9ueW1vdXNDb25zZW50W10gPSBbXTtcblxuZXhwb3J0IGZ1bmN0aW9uIHRvZ2dsZUNvbnNlbnRTdGF0dXMoXG4gIGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10sXG4gIHRlbXBsYXRlQ29kZTogc3RyaW5nLFxuICBzdGF0dXM6IEFOT05ZTU9VU19DT05TRU5UX1NUQVRVU1xuKTogQW5vbnltb3VzQ29uc2VudFtdIHtcbiAgaWYgKCFjb25zZW50cykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBjb25zZW50cy5tYXAoY29uc2VudCA9PiB7XG4gICAgaWYgKGNvbnNlbnQudGVtcGxhdGVDb2RlID09PSB0ZW1wbGF0ZUNvZGUpIHtcbiAgICAgIGNvbnNlbnQgPSB7XG4gICAgICAgIC4uLmNvbnNlbnQsXG4gICAgICAgIGNvbnNlbnRTdGF0ZTogc3RhdHVzLFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbnNlbnQ7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkFub255bW91c0NvbnNlbnRzQWN0aW9uc1xuKTogQW5vbnltb3VzQ29uc2VudFtdIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLkdJVkVfQU5PTllNT1VTX0NPTlNFTlQ6IHtcbiAgICAgIHJldHVybiB0b2dnbGVDb25zZW50U3RhdHVzKFxuICAgICAgICBzdGF0ZSxcbiAgICAgICAgYWN0aW9uLnRlbXBsYXRlQ29kZSxcbiAgICAgICAgQU5PTllNT1VTX0NPTlNFTlRfU1RBVFVTLkdJVkVOXG4gICAgICApO1xuICAgIH1cblxuICAgIGNhc2UgQW5vbnltb3VzQ29uc2VudHNBY3Rpb25zLldJVEhEUkFXX0FOT05ZTU9VU19DT05TRU5UOiB7XG4gICAgICByZXR1cm4gdG9nZ2xlQ29uc2VudFN0YXR1cyhcbiAgICAgICAgc3RhdGUsXG4gICAgICAgIGFjdGlvbi50ZW1wbGF0ZUNvZGUsXG4gICAgICAgIEFOT05ZTU9VU19DT05TRU5UX1NUQVRVUy5XSVRIRFJBV05cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY2FzZSBBbm9ueW1vdXNDb25zZW50c0FjdGlvbnMuU0VUX0FOT05ZTU9VU19DT05TRU5UUzoge1xuICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==