import { Location } from '@angular/common';
import { Injectable, Injector } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SiteContextParamsService } from './site-context-params.service';
import { SiteContextUrlSerializer } from './site-context-url-serializer';
import * as i0 from "@angular/core";
import * as i1 from "./site-context-params.service";
import * as i2 from "./site-context-url-serializer";
export class SiteContextRoutesHandler {
    constructor(siteContextParams, serializer, injector) {
        this.siteContextParams = siteContextParams;
        this.serializer = serializer;
        this.injector = injector;
        this.subscription = new Subscription();
        this.contextValues = {};
        /**
         * Tells whether there is a pending navigation at the moment, so we can avoid an infinite loop caused by the cyclic dependency:
         * - `subscribeChanges` method triggers a navigation on update of site context state
         * - `subscribeRouting` method updates the site context state on navigation
         */
        this.isNavigating = false;
    }
    /**
     * Initializes the two-way synchronization between the site context state and the URL.
     */
    init() {
        this.router = this.injector.get(Router);
        this.location = this.injector.get(Location);
        const routingParams = this.siteContextParams.getUrlEncodingParameters();
        if (routingParams.length) {
            this.setContextParamsFromRoute(this.location.path(true));
            this.subscribeChanges(routingParams);
            this.subscribeRouting();
        }
    }
    /**
     * After each change of the site context state, it modifies the current URL in place.
     * But it happens only for the parameters configured to be persisted in the URL.
     */
    subscribeChanges(params) {
        params.forEach((param) => {
            const service = this.siteContextParams.getSiteContextService(param);
            if (service) {
                this.subscription.add(service.getActive().subscribe((value) => {
                    if (!this.isNavigating &&
                        this.contextValues[param] &&
                        this.contextValues[param] !== value) {
                        const parsed = this.router.parseUrl(this.router.url);
                        const serialized = this.router.serializeUrl(parsed);
                        this.location.replaceState(serialized);
                    }
                    this.contextValues[param] = value;
                }));
            }
        });
    }
    /**
     * After each Angular NavigationStart event it updates the site context state based on
     * site context params encoded in the anticipated URL.
     */
    subscribeRouting() {
        this.subscription.add(this.router.events
            .pipe(filter((event) => event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationError ||
            event instanceof NavigationCancel))
            .subscribe((event) => {
            this.isNavigating = event instanceof NavigationStart;
            if (this.isNavigating) {
                this.setContextParamsFromRoute(event.url);
            }
        }));
    }
    /**
     * Updates the site context state based on the context params encoded in the given URL
     *
     * @param url URL with encoded context params
     */
    setContextParamsFromRoute(url) {
        const { params } = this.serializer.urlExtractContextParameters(url);
        Object.keys(params).forEach((param) => this.siteContextParams.setValue(param, params[param]));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
SiteContextRoutesHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function SiteContextRoutesHandler_Factory() { return new SiteContextRoutesHandler(i0.ɵɵinject(i1.SiteContextParamsService), i0.ɵɵinject(i2.SiteContextUrlSerializer), i0.ɵɵinject(i0.INJECTOR)); }, token: SiteContextRoutesHandler, providedIn: "root" });
SiteContextRoutesHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
SiteContextRoutesHandler.ctorParameters = () => [
    { type: SiteContextParamsService },
    { type: SiteContextUrlSerializer },
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXJvdXRlcy1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvc2l0ZS1jb250ZXh0L3NlcnZpY2VzL3NpdGUtY29udGV4dC1yb3V0ZXMtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsZUFBZSxFQUNmLGVBQWUsRUFDZixNQUFNLEdBRVAsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUt6RSxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQ1UsaUJBQTJDLEVBQzNDLFVBQW9DLEVBQ3BDLFFBQWtCO1FBRmxCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFDM0MsZUFBVSxHQUFWLFVBQVUsQ0FBMEI7UUFDcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUdwQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEMsa0JBQWEsR0FFakIsRUFBRSxDQUFDO1FBS1A7Ozs7V0FJRztRQUNLLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBaEIxQixDQUFDO0lBa0JKOztPQUVHO0lBQ0gsSUFBSTtRQUNGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQVMsTUFBTSxD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V0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7OztZQTNHRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUxRLHdCQUF3QjtZQUN4Qix3QkFBd0I7WUFaWixRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgTmF2aWdhdGlvbkNhbmNlbCxcbiAgTmF2aWdhdGlvbkVuZCxcbiAgTmF2aWdhdGlvbkVycm9yLFxuICBOYXZpZ2F0aW9uU3RhcnQsXG4gIFJvdXRlcixcbiAgUm91dGVyRXZlbnQsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0VXJsU2VyaWFsaXplciB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0Um91dGVzSGFuZGxlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2l0ZUNvbnRleHRQYXJhbXM6IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSxcbiAgICBwcml2YXRlIHNlcmlhbGl6ZXI6IFNpdGVDb250ZXh0VXJsU2VyaWFsaXplcixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcHJpdmF0ZSBjb250ZXh0VmFsdWVzOiB7XG4gICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmc7XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xuICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbjtcblxuICAvKipcbiAgICogVGVsbHMgd2hldGhlciB0aGVyZSBpcyBhIHBlbmRpbmcgbmF2aWdhdGlvbiBhdCB0aGUgbW9tZW50LCBzbyB3ZSBjYW4gYXZvaWQgYW4gaW5maW5pdGUgbG9vcCBjYXVzZWQgYnkgdGhlIGN5Y2xpYyBkZXBlbmRlbmN5OlxuICAgKiAtIGBzdWJzY3JpYmVDaGFuZ2VzYCBtZXRob2QgdHJpZ2dlcnMgYSBuYXZpZ2F0aW9uIG9uIHVwZGF0ZSBvZiBzaXRlIGNvbnRleHQgc3RhdGVcbiAgICogLSBgc3Vic2NyaWJlUm91dGluZ2AgbWV0aG9kIHVwZGF0ZXMgdGhlIHNpdGUgY29udGV4dCBzdGF0ZSBvbiBuYXZpZ2F0aW9uXG4gICAqL1xuICBwcml2YXRlIGlzTmF2aWdhdGluZyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyB0aGUgdHdvLXdheSBzeW5jaHJvbml6YXRpb24gYmV0d2VlbiB0aGUgc2l0ZSBjb250ZXh0IHN0YXRlIGFuZCB0aGUgVVJMLlxuICAgKi9cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKTtcblxuICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLmluamVjdG9yLmdldDxMb2NhdGlvbj4oTG9jYXRpb24pO1xuICAgIGNvbnN0IHJvdXRpbmdQYXJhbXMgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFVybEVuY29kaW5nUGFyYW1ldGVycygpO1xuXG4gICAgaWYgKHJvdXRpbmdQYXJhbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldENvbnRleHRQYXJhbXNGcm9tUm91dGUodGhpcy5sb2NhdGlvbi5wYXRoKHRydWUpKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlQ2hhbmdlcyhyb3V0aW5nUGFyYW1zKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlUm91dGluZygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBlYWNoIGNoYW5nZSBvZiB0aGUgc2l0ZSBjb250ZXh0IHN0YXRlLCBpdCBtb2RpZmllcyB0aGUgY3VycmVudCBVUkwgaW4gcGxhY2UuXG4gICAqIEJ1dCBpdCBoYXBwZW5zIG9ubHkgZm9yIHRoZSBwYXJhbWV0ZXJzIGNvbmZpZ3VyZWQgdG8gYmUgcGVyc2lzdGVkIGluIHRoZSBVUkwuXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZUNoYW5nZXMocGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIHBhcmFtcy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtKTtcbiAgICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgICAgICBzZXJ2aWNlLmdldEFjdGl2ZSgpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIXRoaXMuaXNOYXZpZ2F0aW5nICYmXG4gICAgICAgICAgICAgIHRoaXMuY29udGV4dFZhbHVlc1twYXJhbV0gJiZcbiAgICAgICAgICAgICAgdGhpcy5jb250ZXh0VmFsdWVzW3BhcmFtXSAhPT0gdmFsdWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnJvdXRlci5wYXJzZVVybCh0aGlzLnJvdXRlci51cmwpO1xuICAgICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkID0gdGhpcy5yb3V0ZXIuc2VyaWFsaXplVXJsKHBhcnNlZCk7XG4gICAgICAgICAgICAgIHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKHNlcmlhbGl6ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0VmFsdWVzW3BhcmFtXSA9IHZhbHVlO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgZWFjaCBBbmd1bGFyIE5hdmlnYXRpb25TdGFydCBldmVudCBpdCB1cGRhdGVzIHRoZSBzaXRlIGNvbnRleHQgc3RhdGUgYmFzZWQgb25cbiAgICogc2l0ZSBjb250ZXh0IHBhcmFtcyBlbmNvZGVkIGluIHRoZSBhbnRpY2lwYXRlZCBVUkwuXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZVJvdXRpbmcoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgIChldmVudCkgPT5cbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQgfHxcbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8XG4gICAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yIHx8XG4gICAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbFxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogUm91dGVyRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTmF2aWdhdGluZyA9IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0O1xuICAgICAgICAgIGlmICh0aGlzLmlzTmF2aWdhdGluZykge1xuICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0UGFyYW1zRnJvbVJvdXRlKGV2ZW50LnVybCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc2l0ZSBjb250ZXh0IHN0YXRlIGJhc2VkIG9uIHRoZSBjb250ZXh0IHBhcmFtcyBlbmNvZGVkIGluIHRoZSBnaXZlbiBVUkxcbiAgICpcbiAgICogQHBhcmFtIHVybCBVUkwgd2l0aCBlbmNvZGVkIGNvbnRleHQgcGFyYW1zXG4gICAqL1xuICBwcml2YXRlIHNldENvbnRleHRQYXJhbXNGcm9tUm91dGUodXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gdGhpcy5zZXJpYWxpemVyLnVybEV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyh1cmwpO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaCgocGFyYW0pID0+XG4gICAgICB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLnNldFZhbHVlKHBhcmFtLCBwYXJhbXNbcGFyYW1dKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=