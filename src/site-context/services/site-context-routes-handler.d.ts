import { Injector, OnDestroy } from '@angular/core';
import { SiteContextParamsService } from './site-context-params.service';
import { SiteContextUrlSerializer } from './site-context-url-serializer';
import * as ɵngcc0 from '@angular/core';
export declare class SiteContextRoutesHandler implements OnDestroy {
    private siteContextParams;
    private serializer;
    private injector;
    constructor(siteContextParams: SiteContextParamsService, serializer: SiteContextUrlSerializer, injector: Injector);
    private subscription;
    private contextValues;
    private router;
    private location;
    /**
     * Tells whether there is a pending navigation at the moment, so we can avoid an infinite loop caused by the cyclic dependency:
     * - `subscribeChanges` method triggers a navigation on update of site context state
     * - `subscribeRouting` method updates the site context state on navigation
     */
    private isNavigating;
    /**
     * Initializes the two-way synchronization between the site context state and the URL.
     *
     * @returns Promise that is resolved when the site context state is initialized (updated for the first time) based on the URL.
     */
    init(): Promise<void>;
    /**
     * After each change of the site context state, it modifies the current URL in place.
     * But it happens only for the parameters configured to be persisted in the URL.
     */
    private subscribeChanges;
    /**
     * After each Angular NavigationStart event it updates the site context state based on
     * site context params encoded in the anticipated URL.
     *
     * In particular, it's responsible for initializing the state of the context params
     * on page start, reading the values from the URL.
     *
     * @param onContextInitialized notify that the initialization of the context was done based on the URL
     */
    private subscribeRouting;
    /**
     * Updates the site context state based on the context params encoded in the given URL
     *
     * @param url URL with encoded context params
     */
    private setContextParamsFromRoute;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SiteContextRoutesHandler, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXJvdXRlcy1oYW5kbGVyLmQudHMiLCJzb3VyY2VzIjpbInNpdGUtY29udGV4dC1yb3V0ZXMtaGFuZGxlci5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXInO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgICBwcml2YXRlIHNpdGVDb250ZXh0UGFyYW1zO1xuICAgIHByaXZhdGUgc2VyaWFsaXplcjtcbiAgICBwcml2YXRlIGluamVjdG9yO1xuICAgIGNvbnN0cnVjdG9yKHNpdGVDb250ZXh0UGFyYW1zOiBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UsIHNlcmlhbGl6ZXI6IFNpdGVDb250ZXh0VXJsU2VyaWFsaXplciwgaW5qZWN0b3I6IEluamVjdG9yKTtcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbjtcbiAgICBwcml2YXRlIGNvbnRleHRWYWx1ZXM7XG4gICAgcHJpdmF0ZSByb3V0ZXI7XG4gICAgcHJpdmF0ZSBsb2NhdGlvbjtcbiAgICAvKipcbiAgICAgKiBUZWxscyB3aGV0aGVyIHRoZXJlIGlzIGEgcGVuZGluZyBuYXZpZ2F0aW9uIGF0IHRoZSBtb21lbnQsIHNvIHdlIGNhbiBhdm9pZCBhbiBpbmZpbml0ZSBsb29wIGNhdXNlZCBieSB0aGUgY3ljbGljIGRlcGVuZGVuY3k6XG4gICAgICogLSBgc3Vic2NyaWJlQ2hhbmdlc2AgbWV0aG9kIHRyaWdnZXJzIGEgbmF2aWdhdGlvbiBvbiB1cGRhdGUgb2Ygc2l0ZSBjb250ZXh0IHN0YXRlXG4gICAgICogLSBgc3Vic2NyaWJlUm91dGluZ2AgbWV0aG9kIHVwZGF0ZXMgdGhlIHNpdGUgY29udGV4dCBzdGF0ZSBvbiBuYXZpZ2F0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSBpc05hdmlnYXRpbmc7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZXMgdGhlIHR3by13YXkgc3luY2hyb25pemF0aW9uIGJldHdlZW4gdGhlIHNpdGUgY29udGV4dCBzdGF0ZSBhbmQgdGhlIFVSTC5cbiAgICAgKlxuICAgICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZSBzaXRlIGNvbnRleHQgc3RhdGUgaXMgaW5pdGlhbGl6ZWQgKHVwZGF0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lKSBiYXNlZCBvbiB0aGUgVVJMLlxuICAgICAqL1xuICAgIGluaXQoKTogUHJvbWlzZTx2b2lkPjtcbiAgICAvKipcbiAgICAgKiBBZnRlciBlYWNoIGNoYW5nZSBvZiB0aGUgc2l0ZSBjb250ZXh0IHN0YXRlLCBpdCBtb2RpZmllcyB0aGUgY3VycmVudCBVUkwgaW4gcGxhY2UuXG4gICAgICogQnV0IGl0IGhhcHBlbnMgb25seSBmb3IgdGhlIHBhcmFtZXRlcnMgY29uZmlndXJlZCB0byBiZSBwZXJzaXN0ZWQgaW4gdGhlIFVSTC5cbiAgICAgKi9cbiAgICBwcml2YXRlIHN1YnNjcmliZUNoYW5nZXM7XG4gICAgLyoqXG4gICAgICogQWZ0ZXIgZWFjaCBBbmd1bGFyIE5hdmlnYXRpb25TdGFydCBldmVudCBpdCB1cGRhdGVzIHRoZSBzaXRlIGNvbnRleHQgc3RhdGUgYmFzZWQgb25cbiAgICAgKiBzaXRlIGNvbnRleHQgcGFyYW1zIGVuY29kZWQgaW4gdGhlIGFudGljaXBhdGVkIFVSTC5cbiAgICAgKlxuICAgICAqIEluIHBhcnRpY3VsYXIsIGl0J3MgcmVzcG9uc2libGUgZm9yIGluaXRpYWxpemluZyB0aGUgc3RhdGUgb2YgdGhlIGNvbnRleHQgcGFyYW1zXG4gICAgICogb24gcGFnZSBzdGFydCwgcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIFVSTC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBvbkNvbnRleHRJbml0aWFsaXplZCBub3RpZnkgdGhhdCB0aGUgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGNvbnRleHQgd2FzIGRvbmUgYmFzZWQgb24gdGhlIFVSTFxuICAgICAqL1xuICAgIHByaXZhdGUgc3Vic2NyaWJlUm91dGluZztcbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBzaXRlIGNvbnRleHQgc3RhdGUgYmFzZWQgb24gdGhlIGNvbnRleHQgcGFyYW1zIGVuY29kZWQgaW4gdGhlIGdpdmVuIFVSTFxuICAgICAqXG4gICAgICogQHBhcmFtIHVybCBVUkwgd2l0aCBlbmNvZGVkIGNvbnRleHQgcGFyYW1zXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZXRDb250ZXh0UGFyYW1zRnJvbVJvdXRlO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=