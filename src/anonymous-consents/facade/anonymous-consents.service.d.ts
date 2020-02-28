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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentsService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvSUE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3RvcmUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4uLy4uL2F1dGgvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudCwgQ29uc2VudFRlbXBsYXRlIH0gZnJvbSAnLi4vLi4vbW9kZWwvaW5kZXgnO1xuaW1wb3J0IHsgU3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHMgfSBmcm9tICcuLi9zdG9yZS9hbm9ueW1vdXMtY29uc2VudHMtc3RhdGUnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgc3RvcmU6IFN0b3JlPFN0YXRlV2l0aEFub255bW91c0NvbnNlbnRzPjtcbiAgICBwcm90ZWN0ZWQgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlO1xuICAgIGNvbnN0cnVjdG9yKHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cz4sIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0cmlldmVzIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAgICovXG4gICAgbG9hZFRlbXBsYXRlcygpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENvbmRpdGlvbmFsbHkgdHJpZ2dlcnMgdGhlIGxvYWQgb2YgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcyBpZjpcbiAgICAgKiAgIC0gYGxvYWRJZk1pc3NpbmdgIHBhcmFtZXRlciBpcyBzZXQgdG8gYHRydWVgXG4gICAgICogICAtIHRoZSBgdGVtcGxhdGVzYCBpbiB0aGUgc3RvcmUgYXJlIGB1bmRlZmluZWRgXG4gICAgICpcbiAgICAgKiBPdGhld2lzZSBpdCBqdXN0IHJldHVybnMgdGhlIHZhbHVlIGZyb20gdGhlIHN0b3JlLlxuICAgICAqXG4gICAgICogQHBhcmFtIGxvYWRJZk1pc3Npbmcgc2V0dGluZyB0byBgdHJ1ZWAgd2lsbCB0cmlnZ2VyIHRoZSBsb2FkIG9mIHRoZSB0ZW1wbGF0ZXMgaWYgdGhlIGN1cnJlbnRseSBzdG9yZWQgdGVtcGxhdGVzIGFyZSBgdW5kZWZpbmVkYFxuICAgICAqL1xuICAgIGdldFRlbXBsYXRlcyhsb2FkSWZNaXNzaW5nPzogYm9vbGVhbik6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcyB3aXRoIHRoZSBnaXZlbiB0ZW1wbGF0ZSBjb2RlLlxuICAgICAqIEBwYXJhbSB0ZW1wbGF0ZUNvZGUgYSB0ZW1wbGF0ZSBjb2RlIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAgICovXG4gICAgZ2V0VGVtcGxhdGUodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBsb2FkaW5nIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICAgKi9cbiAgICBnZXRMb2FkVGVtcGxhdGVzTG9hZGluZygpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgc3VjY2VzcyBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAgICovXG4gICAgZ2V0TG9hZFRlbXBsYXRlc1N1Y2Nlc3MoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIGVycm9yIHN0YXR1cyBmb3IgdGhlIGFub255bW91cyBjb25zZW50IHRlbXBsYXRlcy5cbiAgICAgKi9cbiAgICBnZXRMb2FkVGVtcGxhdGVzRXJyb3IoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGxvYWRpbmcsIHN1Y2Nlc3MgYW5kIGVycm9yIGluZGljYXRvcnMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAgICovXG4gICAgcmVzZXRMb2FkVGVtcGxhdGVzU3RhdGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnRzLlxuICAgICAqL1xuICAgIGdldENvbnNlbnRzKCk6IE9ic2VydmFibGU8QW5vbnltb3VzQ29uc2VudFtdPjtcbiAgICAvKipcbiAgICAgKiBQdXRzIHRoZSBwcm92aWRlZCBhbm9ueW1vdXMgY29uc2VudHMgaW50byB0aGUgc3RvcmUuXG4gICAgICovXG4gICAgc2V0Q29uc2VudHMoY29uc2VudHM6IEFub255bW91c0NvbnNlbnRbXSk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgZm9yIHRoZSBnaXZlbiB0ZW1wbGF0ZSBJRC5cbiAgICAgKlxuICAgICAqIEFzIGEgc2lkZS1lZmZlY3QsIHRoZSBtZXRob2Qgd2lsbCBjYWxsIGBnZXRUZW1wbGF0ZXModHJ1ZSlgIHRvIGxvYWQgdGhlIHRlbXBsYXRlcyBpZiB0aG9zZSBhcmUgbm90IHByZXNlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVJZCBhIHRlbXBsYXRlIElEIGJ5IHdoaWNoIHRvIGZpbHRlciBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAgICovXG4gICAgZ2V0Q29uc2VudCh0ZW1wbGF0ZUlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnQ+O1xuICAgIC8qKlxuICAgICAqIEdpdmUgYSBjb25zZW50IGZvciB0aGUgZ2l2ZW4gYHRlbXBsYXRlQ29kZWBcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGZvciB3aGljaCB0byBnaXZlIHRoZSBjb25zZW50XG4gICAgICovXG4gICAgZ2l2ZUNvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldHMgYWxsIHRoZSBhbm9ueW1vdXMgY29uc2VudHMnIHN0YXRlIHRvIGdpdmVuLlxuICAgICAqL1xuICAgIGdpdmVBbGxDb25zZW50cygpOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgcHJvdmlkZWQgYGNvbnNlbnRgIGlzIGdpdmVuLlxuICAgICAqIEBwYXJhbSBjb25zZW50IGEgY29uc2VudCB0byB0ZXN0XG4gICAgICovXG4gICAgaXNDb25zZW50R2l2ZW4oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogV2l0aGRyYXcgYSBjb25zZW50IGZvciB0aGUgZ2l2ZW4gYHRlbXBsYXRlQ29kZWBcbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGZvciB3aGljaCB0byB3aXRoZHJhdyB0aGUgY29uc2VudFxuICAgICAqL1xuICAgIHdpdGhkcmF3Q29uc2VudCh0ZW1wbGF0ZUNvZGU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogU2V0cyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cycgc3RhdGUgdG8gd2l0aGRyYXduLlxuICAgICAqL1xuICAgIHdpdGhkcmF3QWxsQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGBjb25zZW50YCBpcyB3aXRoZHJhd24uXG4gICAgICogQHBhcmFtIGNvbnNlbnQgYSBjb25zZW50IHRvIHRlc3RcbiAgICAgKi9cbiAgICBpc0NvbnNlbnRXaXRoZHJhd24oY29uc2VudDogQW5vbnltb3VzQ29uc2VudCk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgZGlzbWlzc2VkIHN0YXRlIG9mIHRoZSBhbm9ueW1vdXMgY29uc2VudHMgYmFubmVyLlxuICAgICAqIEBwYXJhbSBkaXNtaXNzZWQgdGhlIGJhbm5lciB3aWxsIGJlIGRpc21pc3NlZCBpZiBgdHJ1ZWAgaXMgcGFzc2VkLCBvdGhlcndpc2UgaXQgd2lsbCBiZSB2aXNpYmxlLlxuICAgICAqL1xuICAgIHRvZ2dsZUJhbm5lckRpc21pc3NlZChkaXNtaXNzZWQ6IGJvb2xlYW4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBiYW5uZXIgd2FzIGRpc21pc3NlZCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gICAgICovXG4gICAgaXNCYW5uZXJEaXNtaXNzZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgY29uc2VudCB0ZW1wbGF0ZXMgd2VyZSB1cGRhdGVkIG9uIHRoZSBiYWNrLWVuZC5cbiAgICAgKiBJZiB0aGUgdGVtcGxhdGVzIGFyZSBub3QgcHJlc2VudCBpbiB0aGUgc3RvcmUsIGl0IHRyaWdnZXJzIHRoZSBsb2FkLlxuICAgICAqL1xuICAgIGdldFRlbXBsYXRlc1VwZGF0ZWQoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSBgdXBkYXRlZGAgc2xpY2Ugb2YgdGhlIHN0YXRlXG4gICAgICogQHBhcmFtIHVwZGF0ZWRcbiAgICAgKi9cbiAgICB0b2dnbGVUZW1wbGF0ZXNVcGRhdGVkKHVwZGF0ZWQ6IGJvb2xlYW4pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGVpdGhlciB0aGUgYmFubmVyIGlzIG5vdCBkaXNtaXNzZWQgb3IgaWYgdGhlIHRlbXBsYXRlcyB3ZXJlIHVwZGF0ZWQgb24gdGhlIGJhY2stZW5kLlxuICAgICAqIE90aGVyd2lzZSwgaXQgcmV0dXJucyBgZmFsc2VgLlxuICAgICAqL1xuICAgIGlzQmFubmVyVmlzaWJsZSgpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZXJlJ3MgYSBtaXNzbWF0Y2ggaW4gdGVtcGxhdGUgdmVyc2lvbnMgYmV0d2VlbiB0aGUgcHJvdmlkZWQgYGN1cnJlbnRUZW1wbGF0ZXNgIGFuZCBgbmV3VGVtcGxhdGVzYFxuICAgICAqIEBwYXJhbSBjdXJyZW50VGVtcGxhdGVzIGN1cnJlbnQgdGVtcGxhdGVzIHRvIGNoZWNrXG4gICAgICogQHBhcmFtIG5ld1RlbXBsYXRlcyBuZXcgdGVtcGxhdGVzIHRvIGNoZWNrXG4gICAgICovXG4gICAgZGV0ZWN0VXBkYXRlZFRlbXBsYXRlcyhjdXJyZW50VGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSwgbmV3VGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplcyB1c2luZyBgSlNPTi5zdHJpbmdpZnkoKWAgYW5kIGVuY29kZXMgdXNpbmcgYGVuY29kZVVSSUNvbXBvbmVudCgpYCBtZXRob2RzXG4gICAgICogQHBhcmFtIGNvbnNlbnRzIHRvIHNlcmlhbGl6ZSBhbmQgZW5jb2RlXG4gICAgICovXG4gICAgc2VyaWFsaXplQW5kRW5jb2RlKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogRGVjb2RlcyB1c2luZyBgZGVjb2RlVVJJQ29tcG9uZW50KClgIGFuZCBkZXNlcmlhbGl6ZXMgdXNpbmcgYEpTT04ucGFyc2UoKWBcbiAgICAgKiBAcGFyYW0gcmF3Q29uc2VudHMgdG8gZGVjb2RlIGFuIGRlc2VyaWFsaXplXG4gICAgICovXG4gICAgZGVjb2RlQW5kRGVzZXJpYWxpemUocmF3Q29uc2VudHM6IHN0cmluZyk6IEFub255bW91c0NvbnNlbnRbXTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIENvbXBhcmVzIHRoZSBnaXZlbiBgbmV3Q29uc2VudHNgIGFuZCBgcHJldmlvdXNDb25zZW50c2AgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZXJlIGFyZSBkaWZmZXJlbmNlcyAodGhlIGBuZXdDb25zZW50c2AgYXJlIHVwZGF0ZXMpLlxuICAgICAqIE90aGVyd2lzZSBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmV3Q29uc2VudHMgbmV3IGNvbnNlbnRzIHRvIGNvbXBhcmVcbiAgICAgKiBAcGFyYW0gcHJldmlvdXNDb25zZW50cyBvbGQgY29uc2VudHMgdG8gY29tcGFyZVxuICAgICAqL1xuICAgIGNvbnNlbnRzVXBkYXRlZChuZXdDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdLCBwcmV2aW91c0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiBib29sZWFuO1xufVxuIl19