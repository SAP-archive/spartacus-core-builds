/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { UserActions } from '../actions/index';
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
        case UserActions.LOAD_USER_CONSENTS_SUCCESS: {
            /** @type {?} */
            var consents = action.payload;
            return consents ? consents : initialState;
        }
        case UserActions.GIVE_USER_CONSENT_SUCCESS: {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50cy5yZWR1Y2VyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3VzZXIvc3RvcmUvcmVkdWNlcnMvdXNlci1jb25zZW50cy5yZWR1Y2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sa0JBQWtCLENBQUM7O0FBRS9DLE1BQU0sS0FBTyxZQUFZLEdBQXNCLEVBQUU7Ozs7OztBQUVqRCxNQUFNLFVBQVUsT0FBTyxDQUNyQixLQUFvQixFQUNwQixNQUFzQztJQUR0QyxzQkFBQSxFQUFBLG9CQUFvQjtJQUdwQixRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7UUFDbkIsS0FBSyxXQUFXLENBQUMsMEJBQTBCLENBQUMsQ0FBQzs7Z0JBQ3JDLFFBQVEsR0FBRyxNQUFNLENBQUMsT0FBTztZQUMvQixPQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUM7U0FDM0M7UUFFRCxLQUFLLFdBQVcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDOztnQkFDcEMsd0JBQXNCLEdBQUcsTUFBTSxDQUFDLGVBQWU7WUFDckQsT0FBTyxLQUFLLENBQUMsR0FBRzs7OztZQUFDLFVBQUEsZUFBZTtnQkFDOUIsT0FBQSxlQUFlLENBQUMsRUFBRSxLQUFLLHdCQUFzQixDQUFDLEVBQUU7b0JBQzlDLENBQUMsQ0FBQyx3QkFBc0I7b0JBQ3hCLENBQUMsQ0FBQyxlQUFlO1lBRm5CLENBRW1CLEVBQ3BCLENBQUM7U0FDSDtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY29uc2VudC5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQWN0aW9ucyB9IGZyb20gJy4uL2FjdGlvbnMvaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlOiBDb25zZW50VGVtcGxhdGVbXSA9IFtdO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlcihcbiAgc3RhdGUgPSBpbml0aWFsU3RhdGUsXG4gIGFjdGlvbjogVXNlckFjdGlvbnMuVXNlckNvbnNlbnRzQWN0aW9uXG4pOiBDb25zZW50VGVtcGxhdGVbXSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFVzZXJBY3Rpb25zLkxPQURfVVNFUl9DT05TRU5UU19TVUNDRVNTOiB7XG4gICAgICBjb25zdCBjb25zZW50cyA9IGFjdGlvbi5wYXlsb2FkO1xuICAgICAgcmV0dXJuIGNvbnNlbnRzID8gY29uc2VudHMgOiBpbml0aWFsU3RhdGU7XG4gICAgfVxuXG4gICAgY2FzZSBVc2VyQWN0aW9ucy5HSVZFX1VTRVJfQ09OU0VOVF9TVUNDRVNTOiB7XG4gICAgICBjb25zdCB1cGRhdGVkQ29uc2VudFRlbXBsYXRlID0gYWN0aW9uLmNvbnNlbnRUZW1wbGF0ZTtcbiAgICAgIHJldHVybiBzdGF0ZS5tYXAoY29uc2VudFRlbXBsYXRlID0+XG4gICAgICAgIGNvbnNlbnRUZW1wbGF0ZS5pZCA9PT0gdXBkYXRlZENvbnNlbnRUZW1wbGF0ZS5pZFxuICAgICAgICAgID8gdXBkYXRlZENvbnNlbnRUZW1wbGF0ZVxuICAgICAgICAgIDogY29uc2VudFRlbXBsYXRlXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdGF0ZTtcbn1cbiJdfQ==