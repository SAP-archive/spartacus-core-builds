import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { StatePersistenceService } from '../../state/index';
import { AnonymousConsentsService } from '../facade/index';
import { LoadAnonymousConsentTemplatesSuccess } from '../store/actions/anonymous-consents-group';
import { getAnonymousConsentState } from '../store/selectors/feature.selector';
import * as i0 from "@angular/core";
import * as i1 from "../../state/services/state-persistence.service";
import * as i2 from "@ngrx/store";
import * as i3 from "../facade/anonymous-consents.service";
/**
 * Responsible for saving the anonymous consents data in browser storage.
 */
export class AnonymousConsentsStatePersistenceService {
    constructor(statePersistenceService, store, anonymousConsentsService) {
        this.statePersistenceService = statePersistenceService;
        this.store = store;
        this.anonymousConsentsService = anonymousConsentsService;
        this.subscription = new Subscription();
        /**
         * Identifier used for storage key.
         */
        this.key = 'anonymous-consents';
    }
    /**
     * Initializes the synchronization between state and browser storage.
     */
    initSync() {
        this.subscription.add(this.statePersistenceService.syncWithStorage({
            key: this.key,
            state$: this.getAuthState(),
            onRead: (state) => this.onRead(state),
        }));
    }
    /**
     * Gets and transforms state from different sources into the form that should
     * be saved in storage.
     */
    getAuthState() {
        return this.store.select(getAnonymousConsentState);
    }
    /**
     * Function called on each browser storage read.
     * Used to update state from browser -> state.
     */
    onRead(state) {
        const templates = state === null || state === void 0 ? void 0 : state.templates;
        const consents = state === null || state === void 0 ? void 0 : state.consents;
        const ui = state === null || state === void 0 ? void 0 : state.ui;
        // templates
        if (templates === null || templates === void 0 ? void 0 : templates.success) {
            this.store.dispatch(new LoadAnonymousConsentTemplatesSuccess(templates.value));
        }
        // consents
        if (consents) {
            this.anonymousConsentsService.setConsents(consents);
        }
        // ui
        if (ui) {
            this.anonymousConsentsService.toggleBannerDismissed(ui === null || ui === void 0 ? void 0 : ui.bannerDismissed);
            this.anonymousConsentsService.toggleTemplatesUpdated(ui === null || ui === void 0 ? void 0 : ui.updated);
        }
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AnonymousConsentsStatePersistenceService.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentsStatePersistenceService_Factory() { return new AnonymousConsentsStatePersistenceService(i0.ɵɵinject(i1.StatePersistenceService), i0.ɵɵinject(i2.Store), i0.ɵɵinject(i3.AnonymousConsentsService)); }, token: AnonymousConsentsStatePersistenceService, providedIn: "root" });
AnonymousConsentsStatePersistenceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AnonymousConsentsStatePersistenceService.ctorParameters = () => [
    { type: StatePersistenceService },
    { type: Store },
    { type: AnonymousConsentsService }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLXN0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9hbm9ueW1vdXMtY29uc2VudHMvc2VydmljZXMvYW5vbnltb3VzLWNvbnNlbnRzLXN0YXRlLXBlcnNpc3RlbmNlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN0RCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ3BDLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0QsT0FBTyxFQUFFLG9DQUFvQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFLakcsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7Ozs7O0FBTy9FOztHQUVHO0FBSUgsTUFBTSxPQUFPLHdDQUF3QztJQUduRCxZQUNZLHVCQUFnRCxFQUNoRCxLQUF3QyxFQUN4Qyx3QkFBa0Q7UUFGbEQsNEJBQXVCLEdBQXZCLHVCQUF1QixDQUF5QjtRQUNoRCxVQUFLLEdBQUwsS0FBSyxDQUFtQztRQUN4Qyw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBTHBELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVE1Qzs7V0FFRztRQUNPLFFBQUcsR0FBRyxvQkFBb0IsQ0FBQztJQUxsQyxDQUFDO0lBT0o7O09BRUc7SUFDSSxRQUFRO1FBQ2IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlLENBQUM7WUFDM0MsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDM0IsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztTQUN0QyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDTyxZQUFZO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sTUFBTSxDQUFDLEtBQW1DO1FBQ2xELE1BQU0sU0FBUyxHQUFHLEtBQUssYUFBTCxLQUFLLHVCQUFMLEtBQUssQ0FBRSxTQUFTLENBQUM7UUFDbkMsTUFBTSxRQUFRLEdBQUcsS0FBSyxhQUFMLEtBQUssdUJBQUwsS0FBSyxDQUFFLFFBQVEsQ0FBQztRQUNqQyxNQUFNLEVBQUUsR0FBRyxLQUFLLGFBQUwsS0FBSyx1QkFBTCxLQUFLLENBQUUsRUFBRSxDQUFDO1FBRXJCLFlBQVk7UUFDWixJQUFJLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxPQUFPLEVBQUU7WUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQ2pCLElBQUksb0NBQW9DLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUMxRCxDQUFDO1NBQ0g7UUFFRCxXQUFXO1FBQ1gsSUFBSSxRQUFRLEVBQUU7WUFDWixJQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3JEO1FBRUQsS0FBSztRQUNMLElBQUksRUFBRSxFQUFFO1lBQ04sSUFBSSxDQUFDLHdCQUF3QixDQUFDLHFCQUFxQixDQUFDLEVBQUUsYUFBRixFQUFFLHVCQUFGLEVBQUUsQ0FBRSxlQUFlLENBQUMsQ0FBQztZQUN6RSxJQUFJLENBQUMsd0JBQXdCLENBQUMsc0JBQXNCLENBQUMsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ25FO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUFwRUYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFuQlEsdUJBQXVCO1lBRnZCLEtBQUs7WUFHTCx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTdGF0ZVBlcnNpc3RlbmNlU2VydmljZSB9IGZyb20gJy4uLy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9pbmRleCc7XG5pbXBvcnQgeyBMb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1N1Y2Nlc3MgfSBmcm9tICcuLi9zdG9yZS9hY3Rpb25zL2Fub255bW91cy1jb25zZW50cy1ncm91cCc7XG5pbXBvcnQge1xuICBBbm9ueW1vdXNDb25zZW50c1N0YXRlLFxuICBTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cyxcbn0gZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xuaW1wb3J0IHsgZ2V0QW5vbnltb3VzQ29uc2VudFN0YXRlIH0gZnJvbSAnLi4vc3RvcmUvc2VsZWN0b3JzL2ZlYXR1cmUuc2VsZWN0b3InO1xuXG4vKipcbiAqIEFub255bW91cyBjb25zZW50cyBzdGF0ZSBzeW5jZWQgdG8gYnJvd3NlciBzdG9yYWdlLlxuICovXG5leHBvcnQgdHlwZSBTeW5jZWRBbm9ueW1vdXNDb25zZW50c1N0YXRlID0gUGFydGlhbDxBbm9ueW1vdXNDb25zZW50c1N0YXRlPjtcblxuLyoqXG4gKiBSZXNwb25zaWJsZSBmb3Igc2F2aW5nIHRoZSBhbm9ueW1vdXMgY29uc2VudHMgZGF0YSBpbiBicm93c2VyIHN0b3JhZ2UuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50c1N0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgc3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2U6IFN0YXRlUGVyc2lzdGVuY2VTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHM+LFxuICAgIHByb3RlY3RlZCBhbm9ueW1vdXNDb25zZW50c1NlcnZpY2U6IEFub255bW91c0NvbnNlbnRzU2VydmljZVxuICApIHt9XG5cbiAgLyoqXG4gICAqIElkZW50aWZpZXIgdXNlZCBmb3Igc3RvcmFnZSBrZXkuXG4gICAqL1xuICBwcm90ZWN0ZWQga2V5ID0gJ2Fub255bW91cy1jb25zZW50cyc7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBzeW5jaHJvbml6YXRpb24gYmV0d2VlbiBzdGF0ZSBhbmQgYnJvd3NlciBzdG9yYWdlLlxuICAgKi9cbiAgcHVibGljIGluaXRTeW5jKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuc3RhdGVQZXJzaXN0ZW5jZVNlcnZpY2Uuc3luY1dpdGhTdG9yYWdlKHtcbiAgICAgICAga2V5OiB0aGlzLmtleSxcbiAgICAgICAgc3RhdGUkOiB0aGlzLmdldEF1dGhTdGF0ZSgpLFxuICAgICAgICBvblJlYWQ6IChzdGF0ZSkgPT4gdGhpcy5vblJlYWQoc3RhdGUpLFxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYW5kIHRyYW5zZm9ybXMgc3RhdGUgZnJvbSBkaWZmZXJlbnQgc291cmNlcyBpbnRvIHRoZSBmb3JtIHRoYXQgc2hvdWxkXG4gICAqIGJlIHNhdmVkIGluIHN0b3JhZ2UuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0QXV0aFN0YXRlKCk6IE9ic2VydmFibGU8U3luY2VkQW5vbnltb3VzQ29uc2VudHNTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLnN0b3JlLnNlbGVjdChnZXRBbm9ueW1vdXNDb25zZW50U3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIGNhbGxlZCBvbiBlYWNoIGJyb3dzZXIgc3RvcmFnZSByZWFkLlxuICAgKiBVc2VkIHRvIHVwZGF0ZSBzdGF0ZSBmcm9tIGJyb3dzZXIgLT4gc3RhdGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgb25SZWFkKHN0YXRlOiBTeW5jZWRBbm9ueW1vdXNDb25zZW50c1N0YXRlKSB7XG4gICAgY29uc3QgdGVtcGxhdGVzID0gc3RhdGU/LnRlbXBsYXRlcztcbiAgICBjb25zdCBjb25zZW50cyA9IHN0YXRlPy5jb25zZW50cztcbiAgICBjb25zdCB1aSA9IHN0YXRlPy51aTtcblxuICAgIC8vIHRlbXBsYXRlc1xuICAgIGlmICh0ZW1wbGF0ZXM/LnN1Y2Nlc3MpIHtcbiAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goXG4gICAgICAgIG5ldyBMb2FkQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc1N1Y2Nlc3ModGVtcGxhdGVzLnZhbHVlKVxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjb25zZW50c1xuICAgIGlmIChjb25zZW50cykge1xuICAgICAgdGhpcy5hbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uuc2V0Q29uc2VudHMoY29uc2VudHMpO1xuICAgIH1cblxuICAgIC8vIHVpXG4gICAgaWYgKHVpKSB7XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS50b2dnbGVCYW5uZXJEaXNtaXNzZWQodWk/LmJhbm5lckRpc21pc3NlZCk7XG4gICAgICB0aGlzLmFub255bW91c0NvbnNlbnRzU2VydmljZS50b2dnbGVUZW1wbGF0ZXNVcGRhdGVkKHVpPy51cGRhdGVkKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=