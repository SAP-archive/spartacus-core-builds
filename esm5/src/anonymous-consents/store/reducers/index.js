/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken } from '@angular/core';
import { combineReducers, } from '@ngrx/store';
import { AuthActions } from '../../../auth/index';
import { SiteContextActions } from '../../../site-context/index';
import { loaderReducer } from '../../../state/utils/loader/loader.reducer';
import { ANONYMOUS_CONSENTS, } from '../anonymous-consents-state';
import * as fromAnonymousConsentsBanner from './anonymous-consents-banner.reducer';
import * as fromAnonymousConsentsUpdate from './anonymous-consents-update.reducer';
import * as fromAnonymousConsents from './anonymous-consents.reducer';
/**
 * @return {?}
 */
export function getReducers() {
    return {
        templates: loaderReducer(ANONYMOUS_CONSENTS),
        consents: fromAnonymousConsents.reducer,
        ui: combineReducers({
            bannerDismissed: fromAnonymousConsentsBanner.reducer,
            updated: fromAnonymousConsentsUpdate.reducer,
        }),
    };
}
/** @type {?} */
export var reducerToken = new InjectionToken('AnonymousConsentsReducers');
/** @type {?} */
export var reducerProvider = {
    provide: reducerToken,
    useFactory: getReducers,
};
/**
 * @param {?} reducer
 * @return {?}
 */
export function clearAnonymousConsentTemplates(reducer) {
    return (/**
     * @param {?} state
     * @param {?} action
     * @return {?}
     */
    function (state, action) {
        if (action.type === AuthActions.LOGOUT ||
            action.type === SiteContextActions.LANGUAGE_CHANGE) {
            state = tslib_1.__assign({}, state, { templates: undefined });
        }
        return reducer(state, action);
    });
}
/** @type {?} */
export var metaReducers = [
    clearAnonymousConsentTemplates,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYW5vbnltb3VzLWNvbnNlbnRzL3N0b3JlL3JlZHVjZXJzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBWSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBSUwsZUFBZSxHQUVoQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFbEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzNFLE9BQU8sRUFFTCxrQkFBa0IsR0FDbkIsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEtBQUssMkJBQTJCLE1BQU0scUNBQXFDLENBQUM7QUFDbkYsT0FBTyxLQUFLLDJCQUEyQixNQUFNLHFDQUFxQyxDQUFDO0FBQ25GLE9BQU8sS0FBSyxxQkFBcUIsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUV0RSxNQUFNLFVBQVUsV0FBVztJQUN6QixPQUFPO1FBQ0wsU0FBUyxFQUFFLGFBQWEsQ0FBb0Isa0JBQWtCLENBQUM7UUFDL0QsUUFBUSxFQUFFLHFCQUFxQixDQUFDLE9BQU87UUFDdkMsRUFBRSxFQUFFLGVBQWUsQ0FBQztZQUNsQixlQUFlLEVBQUUsMkJBQTJCLENBQUMsT0FBTztZQUNwRCxPQUFPLEVBQUUsMkJBQTJCLENBQUMsT0FBTztTQUM3QyxDQUFDO0tBQ0gsQ0FBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FFckIsSUFBSSxjQUFjLENBQ3BCLDJCQUEyQixDQUM1Qjs7QUFFRCxNQUFNLEtBQU8sZUFBZSxHQUFhO0lBQ3ZDLE9BQU8sRUFBRSxZQUFZO0lBQ3JCLFVBQVUsRUFBRSxXQUFXO0NBQ3hCOzs7OztBQUVELE1BQU0sVUFBVSw4QkFBOEIsQ0FDNUMsT0FBc0Q7SUFFdEQ7Ozs7O0lBQU8sVUFBUyxLQUFLLEVBQUUsTUFBTTtRQUMzQixJQUNFLE1BQU0sQ0FBQyxJQUFJLEtBQUssV0FBVyxDQUFDLE1BQU07WUFDbEMsTUFBTSxDQUFDLElBQUksS0FBSyxrQkFBa0IsQ0FBQyxlQUFlLEVBQ2xEO1lBQ0EsS0FBSyx3QkFDQSxLQUFLLElBQ1IsU0FBUyxFQUFFLFNBQVMsR0FDckIsQ0FBQztTQUNIO1FBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUMsRUFBQztBQUNKLENBQUM7O0FBRUQsTUFBTSxLQUFPLFlBQVksR0FBdUI7SUFDOUMsOEJBQThCO0NBQy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBBY3Rpb24sXG4gIEFjdGlvblJlZHVjZXIsXG4gIEFjdGlvblJlZHVjZXJNYXAsXG4gIGNvbWJpbmVSZWR1Y2VycyxcbiAgTWV0YVJlZHVjZXIsXG59IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IEF1dGhBY3Rpb25zIH0gZnJvbSAnLi4vLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IFNpdGVDb250ZXh0QWN0aW9ucyB9IGZyb20gJy4uLy4uLy4uL3NpdGUtY29udGV4dC9pbmRleCc7XG5pbXBvcnQgeyBsb2FkZXJSZWR1Y2VyIH0gZnJvbSAnLi4vLi4vLi4vc3RhdGUvdXRpbHMvbG9hZGVyL2xvYWRlci5yZWR1Y2VyJztcbmltcG9ydCB7XG4gIEFub255bW91c0NvbnNlbnRzU3RhdGUsXG4gIEFOT05ZTU9VU19DT05TRU5UUyxcbn0gZnJvbSAnLi4vYW5vbnltb3VzLWNvbnNlbnRzLXN0YXRlJztcbmltcG9ydCAqIGFzIGZyb21Bbm9ueW1vdXNDb25zZW50c0Jhbm5lciBmcm9tICcuL2Fub255bW91cy1jb25zZW50cy1iYW5uZXIucmVkdWNlcic7XG5pbXBvcnQgKiBhcyBmcm9tQW5vbnltb3VzQ29uc2VudHNVcGRhdGUgZnJvbSAnLi9hbm9ueW1vdXMtY29uc2VudHMtdXBkYXRlLnJlZHVjZXInO1xuaW1wb3J0ICogYXMgZnJvbUFub255bW91c0NvbnNlbnRzIGZyb20gJy4vYW5vbnltb3VzLWNvbnNlbnRzLnJlZHVjZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmVkdWNlcnMoKTogQWN0aW9uUmVkdWNlck1hcDxBbm9ueW1vdXNDb25zZW50c1N0YXRlPiB7XG4gIHJldHVybiB7XG4gICAgdGVtcGxhdGVzOiBsb2FkZXJSZWR1Y2VyPENvbnNlbnRUZW1wbGF0ZVtdPihBTk9OWU1PVVNfQ09OU0VOVFMpLFxuICAgIGNvbnNlbnRzOiBmcm9tQW5vbnltb3VzQ29uc2VudHMucmVkdWNlcixcbiAgICB1aTogY29tYmluZVJlZHVjZXJzKHtcbiAgICAgIGJhbm5lckRpc21pc3NlZDogZnJvbUFub255bW91c0NvbnNlbnRzQmFubmVyLnJlZHVjZXIsXG4gICAgICB1cGRhdGVkOiBmcm9tQW5vbnltb3VzQ29uc2VudHNVcGRhdGUucmVkdWNlcixcbiAgICB9KSxcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJUb2tlbjogSW5qZWN0aW9uVG9rZW48XG4gIEFjdGlvblJlZHVjZXJNYXA8QW5vbnltb3VzQ29uc2VudHNTdGF0ZT5cbj4gPSBuZXcgSW5qZWN0aW9uVG9rZW48QWN0aW9uUmVkdWNlck1hcDxBbm9ueW1vdXNDb25zZW50c1N0YXRlPj4oXG4gICdBbm9ueW1vdXNDb25zZW50c1JlZHVjZXJzJ1xuKTtcblxuZXhwb3J0IGNvbnN0IHJlZHVjZXJQcm92aWRlcjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGU6IHJlZHVjZXJUb2tlbixcbiAgdXNlRmFjdG9yeTogZ2V0UmVkdWNlcnMsXG59O1xuXG5leHBvcnQgZnVuY3Rpb24gY2xlYXJBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKFxuICByZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPEFub255bW91c0NvbnNlbnRzU3RhdGUsIEFjdGlvbj5cbik6IEFjdGlvblJlZHVjZXI8QW5vbnltb3VzQ29uc2VudHNTdGF0ZSwgQWN0aW9uPiB7XG4gIHJldHVybiBmdW5jdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgaWYgKFxuICAgICAgYWN0aW9uLnR5cGUgPT09IEF1dGhBY3Rpb25zLkxPR09VVCB8fFxuICAgICAgYWN0aW9uLnR5cGUgPT09IFNpdGVDb250ZXh0QWN0aW9ucy5MQU5HVUFHRV9DSEFOR0VcbiAgICApIHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdGVtcGxhdGVzOiB1bmRlZmluZWQsXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gcmVkdWNlcihzdGF0ZSwgYWN0aW9uKTtcbiAgfTtcbn1cblxuZXhwb3J0IGNvbnN0IG1ldGFSZWR1Y2VyczogTWV0YVJlZHVjZXI8YW55PltdID0gW1xuICBjbGVhckFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMsXG5dO1xuIl19