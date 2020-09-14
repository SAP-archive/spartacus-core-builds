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
     * Dispatches an action to trigger the check
     * whether the anonymous consent version have been updated
     */
    private checkConsentVersions;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlJQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN0b3JlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuLi8uLi9hdXRoL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQsIENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL21vZGVsL2luZGV4JztcbmltcG9ydCB7IFN0YXRlV2l0aEFub255bW91c0NvbnNlbnRzIH0gZnJvbSAnLi4vc3RvcmUvYW5vbnltb3VzLWNvbnNlbnRzLXN0YXRlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFub255bW91c0NvbnNlbnRzU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHN0b3JlOiBTdG9yZTxTdGF0ZVdpdGhBbm9ueW1vdXNDb25zZW50cz47XG4gICAgcHJvdGVjdGVkIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZTtcbiAgICBjb25zdHJ1Y3RvcihzdG9yZTogU3RvcmU8U3RhdGVXaXRoQW5vbnltb3VzQ29uc2VudHM+LCBhdXRoU2VydmljZTogQXV0aFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlcyB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgICAqL1xuICAgIGxvYWRUZW1wbGF0ZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDb25kaXRpb25hbGx5IHRyaWdnZXJzIHRoZSBsb2FkIG9mIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMgaWY6XG4gICAgICogICAtIGBsb2FkSWZNaXNzaW5nYCBwYXJhbWV0ZXIgaXMgc2V0IHRvIGB0cnVlYFxuICAgICAqICAgLSB0aGUgYHRlbXBsYXRlc2AgaW4gdGhlIHN0b3JlIGFyZSBgdW5kZWZpbmVkYFxuICAgICAqXG4gICAgICogT3RoZXdpc2UgaXQganVzdCByZXR1cm5zIHRoZSB2YWx1ZSBmcm9tIHRoZSBzdG9yZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBsb2FkSWZNaXNzaW5nIHNldHRpbmcgdG8gYHRydWVgIHdpbGwgdHJpZ2dlciB0aGUgbG9hZCBvZiB0aGUgdGVtcGxhdGVzIGlmIHRoZSBjdXJyZW50bHkgc3RvcmVkIHRlbXBsYXRlcyBhcmUgYHVuZGVmaW5lZGBcbiAgICAgKi9cbiAgICBnZXRUZW1wbGF0ZXMobG9hZElmTWlzc2luZz86IGJvb2xlYW4pOiBPYnNlcnZhYmxlPENvbnNlbnRUZW1wbGF0ZVtdPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMgd2l0aCB0aGUgZ2l2ZW4gdGVtcGxhdGUgY29kZS5cbiAgICAgKiBAcGFyYW0gdGVtcGxhdGVDb2RlIGEgdGVtcGxhdGUgY29kZSBieSB3aGljaCB0byBmaWx0ZXIgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgICAqL1xuICAgIGdldFRlbXBsYXRlKHRlbXBsYXRlQ29kZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGU+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gaW5kaWNhdG9yIGZvciB0aGUgbG9hZGluZyBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAgICovXG4gICAgZ2V0TG9hZFRlbXBsYXRlc0xvYWRpbmcoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIGluZGljYXRvciBmb3IgdGhlIHN1Y2Nlc3Mgc3RhdHVzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgICAqL1xuICAgIGdldExvYWRUZW1wbGF0ZXNTdWNjZXNzKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBpbmRpY2F0b3IgZm9yIHRoZSBlcnJvciBzdGF0dXMgZm9yIHRoZSBhbm9ueW1vdXMgY29uc2VudCB0ZW1wbGF0ZXMuXG4gICAgICovXG4gICAgZ2V0TG9hZFRlbXBsYXRlc0Vycm9yKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmVzZXRzIHRoZSBsb2FkaW5nLCBzdWNjZXNzIGFuZCBlcnJvciBpbmRpY2F0b3JzIGZvciB0aGUgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgICAqL1xuICAgIHJlc2V0TG9hZFRlbXBsYXRlc1N0YXRlKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgdGhlIGFub255bW91cyBjb25zZW50cy5cbiAgICAgKi9cbiAgICBnZXRDb25zZW50cygpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnRbXT47XG4gICAgLyoqXG4gICAgICogUHV0cyB0aGUgcHJvdmlkZWQgYW5vbnltb3VzIGNvbnNlbnRzIGludG8gdGhlIHN0b3JlLlxuICAgICAqL1xuICAgIHNldENvbnNlbnRzKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFub255bW91cyBjb25zZW50IGZvciB0aGUgZ2l2ZW4gdGVtcGxhdGUgSUQuXG4gICAgICpcbiAgICAgKiBBcyBhIHNpZGUtZWZmZWN0LCB0aGUgbWV0aG9kIHdpbGwgY2FsbCBgZ2V0VGVtcGxhdGVzKHRydWUpYCB0byBsb2FkIHRoZSB0ZW1wbGF0ZXMgaWYgdGhvc2UgYXJlIG5vdCBwcmVzZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHRlbXBsYXRlSWQgYSB0ZW1wbGF0ZSBJRCBieSB3aGljaCB0byBmaWx0ZXIgYW5vbnltb3VzIGNvbnNlbnQgdGVtcGxhdGVzLlxuICAgICAqL1xuICAgIGdldENvbnNlbnQodGVtcGxhdGVJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50PjtcbiAgICAvKipcbiAgICAgKiBHaXZlIGEgY29uc2VudCBmb3IgdGhlIGdpdmVuIGB0ZW1wbGF0ZUNvZGVgXG4gICAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBmb3Igd2hpY2ggdG8gZ2l2ZSB0aGUgY29uc2VudFxuICAgICAqL1xuICAgIGdpdmVDb25zZW50KHRlbXBsYXRlQ29kZTogc3RyaW5nKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBTZXRzIGFsbCB0aGUgYW5vbnltb3VzIGNvbnNlbnRzJyBzdGF0ZSB0byBnaXZlbi5cbiAgICAgKi9cbiAgICBnaXZlQWxsQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHByb3ZpZGVkIGBjb25zZW50YCBpcyBnaXZlbi5cbiAgICAgKiBAcGFyYW0gY29uc2VudCBhIGNvbnNlbnQgdG8gdGVzdFxuICAgICAqL1xuICAgIGlzQ29uc2VudEdpdmVuKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdpdGhkcmF3IGEgY29uc2VudCBmb3IgdGhlIGdpdmVuIGB0ZW1wbGF0ZUNvZGVgXG4gICAgICogQHBhcmFtIHRlbXBsYXRlQ29kZSBmb3Igd2hpY2ggdG8gd2l0aGRyYXcgdGhlIGNvbnNlbnRcbiAgICAgKi9cbiAgICB3aXRoZHJhd0NvbnNlbnQodGVtcGxhdGVDb2RlOiBzdHJpbmcpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFNldHMgYWxsIHRoZSBhbm9ueW1vdXMgY29uc2VudHMnIHN0YXRlIHRvIHdpdGhkcmF3bi5cbiAgICAgKi9cbiAgICB3aXRoZHJhd0FsbENvbnNlbnRzKCk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBwcm92aWRlZCBgY29uc2VudGAgaXMgd2l0aGRyYXduLlxuICAgICAqIEBwYXJhbSBjb25zZW50IGEgY29uc2VudCB0byB0ZXN0XG4gICAgICovXG4gICAgaXNDb25zZW50V2l0aGRyYXduKGNvbnNlbnQ6IEFub255bW91c0NvbnNlbnQpOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGRpc21pc3NlZCBzdGF0ZSBvZiB0aGUgYW5vbnltb3VzIGNvbnNlbnRzIGJhbm5lci5cbiAgICAgKiBAcGFyYW0gZGlzbWlzc2VkIHRoZSBiYW5uZXIgd2lsbCBiZSBkaXNtaXNzZWQgaWYgYHRydWVgIGlzIHBhc3NlZCwgb3RoZXJ3aXNlIGl0IHdpbGwgYmUgdmlzaWJsZS5cbiAgICAgKi9cbiAgICB0b2dnbGVCYW5uZXJEaXNtaXNzZWQoZGlzbWlzc2VkOiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgYmFubmVyIHdhcyBkaXNtaXNzZWQsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICAgICAqL1xuICAgIGlzQmFubmVyRGlzbWlzc2VkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGNvbnNlbnQgdGVtcGxhdGVzIHdlcmUgdXBkYXRlZCBvbiB0aGUgYmFjay1lbmQuXG4gICAgICogSWYgdGhlIHRlbXBsYXRlcyBhcmUgbm90IHByZXNlbnQgaW4gdGhlIHN0b3JlLCBpdCB0cmlnZ2VycyB0aGUgbG9hZC5cbiAgICAgKi9cbiAgICBnZXRUZW1wbGF0ZXNVcGRhdGVkKCk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogVG9nZ2xlcyB0aGUgYHVwZGF0ZWRgIHNsaWNlIG9mIHRoZSBzdGF0ZVxuICAgICAqIEBwYXJhbSB1cGRhdGVkXG4gICAgICovXG4gICAgdG9nZ2xlVGVtcGxhdGVzVXBkYXRlZCh1cGRhdGVkOiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBlaXRoZXIgdGhlIGJhbm5lciBpcyBub3QgZGlzbWlzc2VkIG9yIGlmIHRoZSB0ZW1wbGF0ZXMgd2VyZSB1cGRhdGVkIG9uIHRoZSBiYWNrLWVuZC5cbiAgICAgKiBPdGhlcndpc2UsIGl0IHJldHVybnMgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBpc0Jhbm5lclZpc2libGUoKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBEaXNwYXRjaGVzIGFuIGFjdGlvbiB0byB0cmlnZ2VyIHRoZSBjaGVja1xuICAgICAqIHdoZXRoZXIgdGhlIGFub255bW91cyBjb25zZW50IHZlcnNpb24gaGF2ZSBiZWVuIHVwZGF0ZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGNoZWNrQ29uc2VudFZlcnNpb25zO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZXJlJ3MgYSBtaXNzbWF0Y2ggaW4gdGVtcGxhdGUgdmVyc2lvbnMgYmV0d2VlbiB0aGUgcHJvdmlkZWQgYGN1cnJlbnRUZW1wbGF0ZXNgIGFuZCBgbmV3VGVtcGxhdGVzYFxuICAgICAqIEBwYXJhbSBjdXJyZW50VGVtcGxhdGVzIGN1cnJlbnQgdGVtcGxhdGVzIHRvIGNoZWNrXG4gICAgICogQHBhcmFtIG5ld1RlbXBsYXRlcyBuZXcgdGVtcGxhdGVzIHRvIGNoZWNrXG4gICAgICovXG4gICAgZGV0ZWN0VXBkYXRlZFRlbXBsYXRlcyhjdXJyZW50VGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSwgbmV3VGVtcGxhdGVzOiBDb25zZW50VGVtcGxhdGVbXSk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogU2VyaWFsaXplcyB1c2luZyBgSlNPTi5zdHJpbmdpZnkoKWAgYW5kIGVuY29kZXMgdXNpbmcgYGVuY29kZVVSSUNvbXBvbmVudCgpYCBtZXRob2RzXG4gICAgICogQHBhcmFtIGNvbnNlbnRzIHRvIHNlcmlhbGl6ZSBhbmQgZW5jb2RlXG4gICAgICovXG4gICAgc2VyaWFsaXplQW5kRW5jb2RlKGNvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogRGVjb2RlcyB1c2luZyBgZGVjb2RlVVJJQ29tcG9uZW50KClgIGFuZCBkZXNlcmlhbGl6ZXMgdXNpbmcgYEpTT04ucGFyc2UoKWBcbiAgICAgKiBAcGFyYW0gcmF3Q29uc2VudHMgdG8gZGVjb2RlIGFuIGRlc2VyaWFsaXplXG4gICAgICovXG4gICAgZGVjb2RlQW5kRGVzZXJpYWxpemUocmF3Q29uc2VudHM6IHN0cmluZyk6IEFub255bW91c0NvbnNlbnRbXTtcbiAgICAvKipcbiAgICAgKlxuICAgICAqIENvbXBhcmVzIHRoZSBnaXZlbiBgbmV3Q29uc2VudHNgIGFuZCBgcHJldmlvdXNDb25zZW50c2AgYW5kIHJldHVybnMgYHRydWVgIGlmIHRoZXJlIGFyZSBkaWZmZXJlbmNlcyAodGhlIGBuZXdDb25zZW50c2AgYXJlIHVwZGF0ZXMpLlxuICAgICAqIE90aGVyd2lzZSBpdCByZXR1cm5zIGBmYWxzZWAuXG4gICAgICpcbiAgICAgKiBAcGFyYW0gbmV3Q29uc2VudHMgbmV3IGNvbnNlbnRzIHRvIGNvbXBhcmVcbiAgICAgKiBAcGFyYW0gcHJldmlvdXNDb25zZW50cyBvbGQgY29uc2VudHMgdG8gY29tcGFyZVxuICAgICAqL1xuICAgIGNvbnNlbnRzVXBkYXRlZChuZXdDb25zZW50czogQW5vbnltb3VzQ29uc2VudFtdLCBwcmV2aW91c0NvbnNlbnRzOiBBbm9ueW1vdXNDb25zZW50W10pOiBib29sZWFuO1xufVxuIl19