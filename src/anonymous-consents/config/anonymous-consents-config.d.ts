import { OccConfig } from '../../occ/config/occ-config';
import * as ɵngcc0 from '@angular/core';
export declare abstract class AnonymousConsentsConfig extends OccConfig {
    anonymousConsents?: {
        /**
         * Specify the consent template ID to be show on the registration page.
         */
        registerConsent?: string;
        /**
         * Show the legal description at the top of the anonymous consents dialog.
         */
        showLegalDescriptionInDialog?: boolean;
        /**
         * Specify the list of consent template IDs that are required and which can't be toggled off.
         */
        requiredConsents?: string[];
        /**
         * Consent management page configuration.
         */
        consentManagementPage?: {
            /**
             * Show all anonymous consents on the consent management page.
             */
            showAnonymousConsents?: boolean;
            /**
             * A list of consent template IDs that should be hidden on the consent management page.
             */
            hideConsents?: string[];
        };
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AnonymousConsentsConfig, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLWNvbmZpZy5kLnRzIiwic291cmNlcyI6WyJhbm9ueW1vdXMtY29uc2VudHMtY29uZmlnLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGFic3RyYWN0IGNsYXNzIEFub255bW91c0NvbnNlbnRzQ29uZmlnIGV4dGVuZHMgT2NjQ29uZmlnIHtcbiAgICBhbm9ueW1vdXNDb25zZW50cz86IHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNwZWNpZnkgdGhlIGNvbnNlbnQgdGVtcGxhdGUgSUQgdG8gYmUgc2hvdyBvbiB0aGUgcmVnaXN0cmF0aW9uIHBhZ2UuXG4gICAgICAgICAqL1xuICAgICAgICByZWdpc3RlckNvbnNlbnQ/OiBzdHJpbmc7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaG93IHRoZSBsZWdhbCBkZXNjcmlwdGlvbiBhdCB0aGUgdG9wIG9mIHRoZSBhbm9ueW1vdXMgY29uc2VudHMgZGlhbG9nLlxuICAgICAgICAgKi9cbiAgICAgICAgc2hvd0xlZ2FsRGVzY3JpcHRpb25JbkRpYWxvZz86IGJvb2xlYW47XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTcGVjaWZ5IHRoZSBsaXN0IG9mIGNvbnNlbnQgdGVtcGxhdGUgSURzIHRoYXQgYXJlIHJlcXVpcmVkIGFuZCB3aGljaCBjYW4ndCBiZSB0b2dnbGVkIG9mZi5cbiAgICAgICAgICovXG4gICAgICAgIHJlcXVpcmVkQ29uc2VudHM/OiBzdHJpbmdbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbnNlbnQgbWFuYWdlbWVudCBwYWdlIGNvbmZpZ3VyYXRpb24uXG4gICAgICAgICAqL1xuICAgICAgICBjb25zZW50TWFuYWdlbWVudFBhZ2U/OiB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIFNob3cgYWxsIGFub255bW91cyBjb25zZW50cyBvbiB0aGUgY29uc2VudCBtYW5hZ2VtZW50IHBhZ2UuXG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHNob3dBbm9ueW1vdXNDb25zZW50cz86IGJvb2xlYW47XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEEgbGlzdCBvZiBjb25zZW50IHRlbXBsYXRlIElEcyB0aGF0IHNob3VsZCBiZSBoaWRkZW4gb24gdGhlIGNvbnNlbnQgbWFuYWdlbWVudCBwYWdlLlxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBoaWRlQ29uc2VudHM/OiBzdHJpbmdbXTtcbiAgICAgICAgfTtcbiAgICB9O1xufVxuIl19