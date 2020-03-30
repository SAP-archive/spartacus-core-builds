import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from '../../auth/index';
import { AnonymousConsent, ConsentTemplate } from '../../model/index';
import { StateWithAnonymousConsents } from '../store/anonymous-consents-state';
import * as ɵngcc0 from '@angular/core';
export declare class AnonymousConsentsService {
    protected store: Store<StateWithAnonymousConsents>;
    protected authService: AuthService;
    constructor(store: Store<StateWithAnonymousConsents>, authService: AuthService);
    /**
     * Retrieves the anonymous consent templates.
     */
    loadTemplates(): void;
    /**
     * Conditionally triggers the load of the anonymous consent templates if:
     *   - `loadIfMissing` parameter is set to `true`
     *   - the `templates` in the store are `undefined`
     *
     * Othewise it just returns the value from the store.
     *
     * @param loadIfMissing setting to `true` will trigger the load of the templates if the currently stored templates are `undefined`
     */
    getTemplates(loadIfMissing?: boolean): Observable<ConsentTemplate[]>;
    /**
     * Returns the anonymous consent templates with the given template code.
     * @param templateCode a template code by which to filter anonymous consent templates.
     */
    getTemplate(templateCode: string): Observable<ConsentTemplate>;
    /**
     * Returns an indicator for the loading status for the anonymous consent templates.
     */
    getLoadTemplatesLoading(): Observable<boolean>;
    /**
     * Returns an indicator for the success status for the anonymous consent templates.
     */
    getLoadTemplatesSuccess(): Observable<boolean>;
    /**
     * Returns an indicator for the error status for the anonymous consent templates.
     */
    getLoadTemplatesError(): Observable<boolean>;
    /**
     * Resets the loading, success and error indicators for the anonymous consent templates.
     */
    resetLoadTemplatesState(): void;
    /**
     * Returns all the anonymous consents.
     */
    getConsents(): Observable<AnonymousConsent[]>;
    /**
     * Puts the provided anonymous consents into the store.
     */
    setConsents(consents: AnonymousConsent[]): void;
    /**
     * Returns the anonymous consent for the given template ID.
     *
     * As a side-effect, the method will call `getTemplates(true)` to load the templates if those are not present.
     *
     * @param templateId a template ID by which to filter anonymous consent templates.
     */
    getConsent(templateId: string): Observable<AnonymousConsent>;
    /**
     * Give a consent for the given `templateCode`
     * @param templateCode for which to give the consent
     */
    giveConsent(templateCode: string): void;
    /**
     * Sets all the anonymous consents' state to given.
     */
    giveAllConsents(): Observable<ConsentTemplate[]>;
    /**
     * Returns `true` if the provided `consent` is given.
     * @param consent a consent to test
     */
    isConsentGiven(consent: AnonymousConsent): boolean;
    /**
     * Withdraw a consent for the given `templateCode`
     * @param templateCode for which to withdraw the consent
     */
    withdrawConsent(templateCode: string): void;
    /**
     * Sets all the anonymous consents' state to withdrawn.
     */
    withdrawAllConsents(): Observable<ConsentTemplate[]>;
    /**
     * Returns `true` if the provided `consent` is withdrawn.
     * @param consent a consent to test
     */
    isConsentWithdrawn(consent: AnonymousConsent): boolean;
    /**
     * Toggles the dismissed state of the anonymous consents banner.
     * @param dismissed the banner will be dismissed if `true` is passed, otherwise it will be visible.
     */
    toggleBannerDismissed(dismissed: boolean): void;
    /**
     * Returns `true` if the banner was dismissed, `false` otherwise.
     */
    isBannerDismissed(): Observable<boolean>;
    /**
     * Returns `true` if the consent templates were updated on the back-end.
     * If the templates are not present in the store, it triggers the load.
     */
    getTemplatesUpdated(): Observable<boolean>;
    /**
     * Toggles the `updated` slice of the state
     * @param updated
     */
    toggleTemplatesUpdated(updated: boolean): void;
    /**
     * Returns `true` if either the banner is not dismissed or if the templates were updated on the back-end.
     * Otherwise, it returns `false`.
     */
    isBannerVisible(): Observable<boolean>;
    /**
     * Returns `true` if there's a missmatch in template versions between the provided `currentTemplates` and `newTemplates`
     * @param currentTemplates current templates to check
     * @param newTemplates new templates to check
     */
    detectUpdatedTemplates(currentTemplates: ConsentTemplate[], newTemplates: ConsentTemplate[]): boolean;
    /**
     * Serializes using `JSON.stringify()` and encodes using `encodeURIComponent()` methods
     * @param consents to serialize and encode
     */
    serializeAndEncode(consents: AnonymousConsent[]): string;
    /**
     * Decodes using `decodeURIComponent()` and deserializes using `JSON.parse()`
     * @param rawConsents to decode an deserialize
     */
    decodeAndDeserialize(rawConsents: string): AnonymousConsent[];
    /**
     *
     * Compares the given `newConsents` and `previousConsents` and returns `true` if there are differences (the `newConsents` are updates).
     * Otherwise it returns `false`.
     *
     * @param newConsents new consents to compare
     * @param previousConsents old consents to compare
     */
    consentsUpdated(newConsents: AnonymousConsent[], previousConsents: AnonymousConsent[]): boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentsService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvSUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZSB9IGZyb20gJ0BuZ3J4L3N0b3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vYXV0aC9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9pbmRleCc7XG5pbXBvcnQgeyBTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cyB9IGZyb20gJy4uL3N0b3JlL2Fub255bW91cy1jb25zZW50cy1zdGF0ZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBzdG9yZTogU3RvcmU8U3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHM+O1xuICAgIHByb3RlY3RlZCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2U7XG4gICAgY29uc3RydWN0b3Ioc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEFub255bW91c0NvbnNlbnRzPiwgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZXMgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICAgKi9cbiAgICBsb2FkVGVtcGxhdGVzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ29uZGl0aW9uYWxseSB0cmlnZ2VycyB0aGUgbG9hZCBvZiB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzIGlmOlxuICAgICAqICAgLSBgbG9hZElmTWlzc2luZ2AgcGFyYW1ldGVyIGlzIHNldCB0byBgdHJ1ZWBcbiAgICAgKiAgIC0gdGhlIGB0ZW1wbGF0ZXNgIGluIHRoZSBzdG9yZSBhcmUgYHVuZGVmaW5lZGBcbiAgICAgKlxuICAgICAqIE90aGV3aXNlIGl0IGp1c3QgcmV0dXJucyB0aGUgdmFsdWUgZnJvbSB0aGUgc3RvcmUuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbG9hZElmTWlzc2luZyBzZXR0aW5nIHRvIGB0cnVlYCB3aWxsIHRyaWdnZXIgdGhlIGxvYWQgb2YgdGhlIHRlbXBsYXRlcyBpZiB0aGUgY3VycmVudGx5IHN0b3JlZCB0ZW1wbGF0ZXMgYXJlIGB1bmRlZmluZWRgXG4gICAgICovXG4gICAgZ2V0VGVtcGxhdGVzKGxvYWRJZk1pc3Npbmc/OiBib29sZWFuKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzIHdpdGggdGhlIGdpdmVuIHRlbXBsYXRlIGNvZGUuXG4gICAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBhIHRlbXBsYXRlIGNvZGUgYnkgd2hpY2ggdG8gZmlsdGVyIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICAgKi9cbiAgICBnZXRUZW1wbGF0ZSh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIGxvYWRpbmcgc3RhdHVzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgICAqL1xuICAgIGdldExvYWRUZW1wbGF0ZXNMb2FkaW5nKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBzdWNjZXNzIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICAgKi9cbiAgICBnZXRMb2FkVGVtcGxhdGVzU3VjY2VzcygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgZXJyb3Igc3RhdHVzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgICAqL1xuICAgIGdldExvYWRUZW1wbGF0ZXNFcnJvcigpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJlc2V0cyB0aGUgbG9hZGluZywgc3VjY2VzcyBhbmQgZXJyb3IgaW5kaWNhdG9ycyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICAgKi9cbiAgICByZXNldExvYWRUZW1wbGF0ZXNTdGF0ZSgpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIHRoZSBhbm9ueW1vdXMgY29uc2VudHMuXG4gICAgICovXG4gICAgZ2V0Q29uc2VudHMoKTogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50W10+O1xuICAgIC8qKlxuICAgICAqIFB1dHMgdGhlIHByb3ZpZGVkIGFub255bW91cyBjb25zZW50cyBpbnRvIHRoZSBzdG9yZS5cbiAgICAgKi9cbiAgICBzZXRDb25zZW50cyhjb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbm9ueW1vdXMgY29uc2VudCBmb3IgdGhlIGdpdmVuIHRlbXBsYXRlIElELlxuICAgICAqXG4gICAgICogQXMgYSBzaWRlLWVmZmVjdCwgdGhlIG1ldGhvZCB3aWxsIGNhbGwgYGdldFRlbXBsYXRlcyh0cnVlKWAgdG8gbG9hZCB0aGUgdGVtcGxhdGVzIGlmIHRob3NlIGFyZSBub3QgcHJlc2VudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUlkIGEgdGVtcGxhdGUgSUQgYnkgd2hpY2ggdG8gZmlsdGVyIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICAgKi9cbiAgICBnZXRDb25zZW50KHRlbXBsYXRlSWQ6IHN0cmluZyk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudD47XG4gICAgLyoqXG4gICAgICogR2l2ZSBhIGNvbnNlbnQgZm9yIHRoZSBnaXZlbiBgdGVtcGxhdGVDb2RlYFxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIGdpdmUgdGhlIGNvbnNlbnRcbiAgICAgKi9cbiAgICBnaXZlQ29uc2VudCh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0cyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cycgc3RhdGUgdG8gZ2l2ZW4uXG4gICAgICovXG4gICAgZ2l2ZUFsbENvbnNlbnRzKCk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBgY29uc2VudGAgaXMgZ2l2ZW4uXG4gICAgICogQHBhcmFtIGNvbnNlbnQgYSBjb25zZW50IHRvIHRlc3RcbiAgICAgKi9cbiAgICBpc0NvbnNlbnRHaXZlbihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50KTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBXaXRoZHJhdyBhIGNvbnNlbnQgZm9yIHRoZSBnaXZlbiBgdGVtcGxhdGVDb2RlYFxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgZm9yIHdoaWNoIHRvIHdpdGhkcmF3IHRoZSBjb25zZW50XG4gICAgICovXG4gICAgd2l0aGRyYXdDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTZXRzIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnRzJyBzdGF0ZSB0byB3aXRoZHJhd24uXG4gICAgICovXG4gICAgd2l0aGRyYXdBbGxDb25zZW50cygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvdmlkZWQgYGNvbnNlbnRgIGlzIHdpdGhkcmF3bi5cbiAgICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gdGVzdFxuICAgICAqL1xuICAgIGlzQ29uc2VudFdpdGhkcmF3bihjb25zZW50OiBBbm9ueW1vdXNDb25zZW50KTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBkaXNtaXNzZWQgc3RhdGUgb2YgdGhlIGFub255bW91cyBjb25zZW50cyBiYW5uZXIuXG4gICAgICogQHBhcmFtIGRpc21pc3NlZCB0aGUgYmFubmVyIHdpbGwgYmUgZGlzbWlzc2VkIGlmIGB0cnVlYCBpcyBwYXNzZWQsIG90aGVyd2lzZSBpdCB3aWxsIGJlIHZpc2libGUuXG4gICAgICovXG4gICAgdG9nZ2xlQmFubmVyRGlzbWlzc2VkKGRpc21pc3NlZDogYm9vbGVhbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGJhbm5lciB3YXMgZGlzbWlzc2VkLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICAgKi9cbiAgICBpc0Jhbm5lckRpc21pc3NlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBjb25zZW50IHRlbXBsYXRlcyB3ZXJlIHVwZGF0ZWQgb24gdGhlIGJhY2stZW5kLlxuICAgICAqIElmIHRoZSB0ZW1wbGF0ZXMgYXJlIG5vdCBwcmVzZW50IGluIHRoZSBzdG9yZSwgaXQgdHJpZ2dlcnMgdGhlIGxvYWQuXG4gICAgICovXG4gICAgZ2V0VGVtcGxhdGVzVXBkYXRlZCgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGB1cGRhdGVkYCBzbGljZSBvZiB0aGUgc3RhdGVcbiAgICAgKiBAcGFyYW0gdXBkYXRlZFxuICAgICAqL1xuICAgIHRvZ2dsZVRlbXBsYXRlc1VwZGF0ZWQodXBkYXRlZDogYm9vbGVhbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgZWl0aGVyIHRoZSBiYW5uZXIgaXMgbm90IGRpc21pc3NlZCBvciBpZiB0aGUgdGVtcGxhdGVzIHdlcmUgdXBkYXRlZCBvbiB0aGUgYmFjay1lbmQuXG4gICAgICogT3RoZXJ3aXNlLCBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAgICovXG4gICAgaXNCYW5uZXJWaXNpYmxlKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlcmUncyBhIG1pc3NtYXRjaCBpbiB0ZW1wbGF0ZSB2ZXJzaW9ucyBiZXR3ZWVuIHRoZSBwcm92aWRlZCBgY3VycmVudFRlbXBsYXRlc2AgYW5kIGBuZXdUZW1wbGF0ZXNgXG4gICAgICogQHBhcmFtIGN1cnJlbnRUZW1wbGF0ZXMgY3VycmVudCB0ZW1wbGF0ZXMgdG8gY2hlY2tcbiAgICAgKiBAcGFyYW0gbmV3VGVtcGxhdGVzIG5ldyB0ZW1wbGF0ZXMgdG8gY2hlY2tcbiAgICAgKi9cbiAgICBkZXRlY3RVcGRhdGVkVGVtcGxhdGVzKGN1cnJlbnRUZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdLCBuZXdUZW1wbGF0ZXM6IENvbnNlbnRUZW1wbGF0ZVtdKTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBTZXJpYWxpemVzIHVzaW5nIGBKU09OLnN0cmluZ2lmeSgpYCBhbmQgZW5jb2RlcyB1c2luZyBgZW5jb2RlVVJJQ29tcG9uZW50KClgIG1ldGhvZHNcbiAgICAgKiBAcGFyYW0gY29uc2VudHMgdG8gc2VyaWFsaXplIGFuZCBlbmNvZGVcbiAgICAgKi9cbiAgICBzZXJpYWxpemVBbmRFbmNvZGUoY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBEZWNvZGVzIHVzaW5nIGBkZWNvZGVVUklDb21wb25lbnQoKWAgYW5kIGRlc2VyaWFsaXplcyB1c2luZyBgSlNPTi5wYXJzZSgpYFxuICAgICAqIEBwYXJhbSByYXdDb25zZW50cyB0byBkZWNvZGUgYW4gZGVzZXJpYWxpemVcbiAgICAgKi9cbiAgICBkZWNvZGVBbmREZXNlcmlhbGl6ZShyYXdDb25zZW50czogc3RyaW5nKTogQW5vbnltb3VzQ29uc2VudFtdO1xuICAgIC8qKlxuICAgICAqXG4gICAgICogQ29tcGFyZXMgdGhlIGdpdmVuIGBuZXdDb25zZW50c2AgYW5kIGBwcmV2aW91c0NvbnNlbnRzYCBhbmQgcmV0dXJucyBgdHJ1ZWAgaWYgdGhlcmUgYXJlIGRpZmZlcmVuY2VzICh0aGUgYG5ld0NvbnNlbnRzYCBhcmUgdXBkYXRlcykuXG4gICAgICogT3RoZXJ3aXNlIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBuZXdDb25zZW50cyBuZXcgY29uc2VudHMgdG8gY29tcGFyZVxuICAgICAqIEBwYXJhbSBwcmV2aW91c0NvbnNlbnRzIG9sZCBjb25zZW50cyB0byBjb21wYXJlXG4gICAgICovXG4gICAgY29uc2VudHNVcGRhdGVkKG5ld0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10sIHByZXZpb3VzQ29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSk6IGJvb2xlYW47XG59XG4iXX0=