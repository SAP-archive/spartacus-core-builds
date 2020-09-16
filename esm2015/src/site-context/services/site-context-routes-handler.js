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
     *
     * @returns Promise that is resolved when the site context state is initialized (updated for the first time) based on the URL.
     */
    init() {
        return new Promise((resolve) => {
            this.router = this.injector.get(Router);
            this.location = this.injector.get(Location);
            const routingParams = this.siteContextParams.getUrlEncodingParameters();
            if (routingParams.length) {
                this.subscribeChanges(routingParams);
                this.subscribeRouting(resolve);
            }
            else {
                resolve();
            }
        });
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
     *
     * In particular, it's responsible for initializing the state of the context params
     * on page start, reading the values from the URL.
     *
     * @param onContextInitialized notify that the initialization of the context was done based on the URL
     */
    subscribeRouting(onContextInitialized) {
        let contextInitialized = false;
        this.subscription.add(this.router.events
            .pipe(filter((event) => event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationError ||
            event instanceof NavigationCancel))
            .subscribe((event) => {
            this.isNavigating = event instanceof NavigationStart;
            if (this.isNavigating) {
                this.setContextParamsFromRoute(event.url);
                if (!contextInitialized) {
                    contextInitialized = true;
                    onContextInitialized();
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXJvdXRlcy1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvc2l0ZS1jb250ZXh0L3NlcnZpY2VzL3NpdGUtY29udGV4dC1yb3V0ZXMtaGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsZUFBZSxFQUNmLGVBQWUsRUFDZixNQUFNLEdBRVAsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUt6RSxNQUFNLE9BQU8sd0JBQXdCO0lBQ25DLFlBQ1UsaUJBQTJDLEVBQzNDLFVBQW9DLEVBQ3BDLFFBQWtCO1FBRmxCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFDM0MsZUFBVSxHQUFWLFVBQVUsQ0FBMEI7UUFDcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUdwQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEMsa0JBQWEsR0FFakIsRUFBRSxDQUFDO1FBS1A7Ozs7V0FJRztRQUNLLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBaEIxQixDQUFDO0lBa0JKOzs7O09BSUc7SUFDSCxJQUFJO1FBQ0YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzdCLElBQUksQ0FB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QU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUN0RCxDQUFDO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7WUE1SEYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFMUSx3QkFBd0I7WUFDeEIsd0JBQXdCO1lBWlosUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5hdmlnYXRpb25DYW5jZWwsXG4gIE5hdmlnYXRpb25FbmQsXG4gIE5hdmlnYXRpb25FcnJvcixcbiAgTmF2aWdhdGlvblN0YXJ0LFxuICBSb3V0ZXIsXG4gIFJvdXRlckV2ZW50LFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFVybFNlcmlhbGl6ZXIgfSBmcm9tICcuL3NpdGUtY29udGV4dC11cmwtc2VyaWFsaXplcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFJvdXRlc0hhbmRsZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNpdGVDb250ZXh0UGFyYW1zOiBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJpYWxpemVyOiBTaXRlQ29udGV4dFVybFNlcmlhbGl6ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHByaXZhdGUgY29udGV4dFZhbHVlczoge1xuICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nO1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XG5cbiAgLyoqXG4gICAqIFRlbGxzIHdoZXRoZXIgdGhlcmUgaXMgYSBwZW5kaW5nIG5hdmlnYXRpb24gYXQgdGhlIG1vbWVudCwgc28gd2UgY2FuIGF2b2lkIGFuIGluZmluaXRlIGxvb3AgY2F1c2VkIGJ5IHRoZSBjeWNsaWMgZGVwZW5kZW5jeTpcbiAgICogLSBgc3Vic2NyaWJlQ2hhbmdlc2AgbWV0aG9kIHRyaWdnZXJzIGEgbmF2aWdhdGlvbiBvbiB1cGRhdGUgb2Ygc2l0ZSBjb250ZXh0IHN0YXRlXG4gICAqIC0gYHN1YnNjcmliZVJvdXRpbmdgIG1ldGhvZCB1cGRhdGVzIHRoZSBzaXRlIGNvbnRleHQgc3RhdGUgb24gbmF2aWdhdGlvblxuICAgKi9cbiAgcHJpdmF0ZSBpc05hdmlnYXRpbmcgPSBmYWxzZTtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHR3by13YXkgc3luY2hyb25pemF0aW9uIGJldHdlZW4gdGhlIHNpdGUgY29udGV4dCBzdGF0ZSBhbmQgdGhlIFVSTC5cbiAgICpcbiAgICogQHJldHVybnMgUHJvbWlzZSB0aGF0IGlzIHJlc29sdmVkIHdoZW4gdGhlIHNpdGUgY29udGV4dCBzdGF0ZSBpcyBpbml0aWFsaXplZCAodXBkYXRlZCBmb3IgdGhlIGZpcnN0IHRpbWUpIGJhc2VkIG9uIHRoZSBVUkwuXG4gICAqL1xuICBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgdGhpcy5yb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcik7XG5cbiAgICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLmluamVjdG9yLmdldDxMb2NhdGlvbj4oTG9jYXRpb24pO1xuICAgICAgY29uc3Qgcm91dGluZ1BhcmFtcyA9IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0VXJsRW5jb2RpbmdQYXJhbWV0ZXJzKCk7XG5cbiAgICAgIGlmIChyb3V0aW5nUGFyYW1zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLnN1YnNjcmliZUNoYW5nZXMocm91dGluZ1BhcmFtcyk7XG4gICAgICAgIHRoaXMuc3Vic2NyaWJlUm91dGluZyhyZXNvbHZlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZnRlciBlYWNoIGNoYW5nZSBvZiB0aGUgc2l0ZSBjb250ZXh0IHN0YXRlLCBpdCBtb2RpZmllcyB0aGUgY3VycmVudCBVUkwgaW4gcGxhY2UuXG4gICAqIEJ1dCBpdCBoYXBwZW5zIG9ubHkgZm9yIHRoZSBwYXJhbWV0ZXJzIGNvbmZpZ3VyZWQgdG8gYmUgcGVyc2lzdGVkIGluIHRoZSBVUkwuXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZUNoYW5nZXMocGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIHBhcmFtcy5mb3JFYWNoKChwYXJhbSkgPT4ge1xuICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtKTtcbiAgICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgICAgICBzZXJ2aWNlLmdldEFjdGl2ZSgpLnN1YnNjcmliZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIXRoaXMuaXNOYXZpZ2F0aW5nICYmXG4gICAgICAgICAgICAgIHRoaXMuY29udGV4dFZhbHVlc1twYXJhbV0gJiZcbiAgICAgICAgICAgICAgdGhpcy5jb250ZXh0VmFsdWVzW3BhcmFtXSAhPT0gdmFsdWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnJvdXRlci5wYXJzZVVybCh0aGlzLnJvdXRlci51cmwpO1xuICAgICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkID0gdGhpcy5yb3V0ZXIuc2VyaWFsaXplVXJsKHBhcnNlZCk7XG4gICAgICAgICAgICAgIHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKHNlcmlhbGl6ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0VmFsdWVzW3BhcmFtXSA9IHZhbHVlO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgZWFjaCBBbmd1bGFyIE5hdmlnYXRpb25TdGFydCBldmVudCBpdCB1cGRhdGVzIHRoZSBzaXRlIGNvbnRleHQgc3RhdGUgYmFzZWQgb25cbiAgICogc2l0ZSBjb250ZXh0IHBhcmFtcyBlbmNvZGVkIGluIHRoZSBhbnRpY2lwYXRlZCBVUkwuXG4gICAqXG4gICAqIEluIHBhcnRpY3VsYXIsIGl0J3MgcmVzcG9uc2libGUgZm9yIGluaXRpYWxpemluZyB0aGUgc3RhdGUgb2YgdGhlIGNvbnRleHQgcGFyYW1zXG4gICAqIG9uIHBhZ2Ugc3RhcnQsIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBVUkwuXG4gICAqXG4gICAqIEBwYXJhbSBvbkNvbnRleHRJbml0aWFsaXplZCBub3RpZnkgdGhhdCB0aGUgaW5pdGlhbGl6YXRpb24gb2YgdGhlIGNvbnRleHQgd2FzIGRvbmUgYmFzZWQgb24gdGhlIFVSTFxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpYmVSb3V0aW5nKG9uQ29udGV4dEluaXRpYWxpemVkOiBGdW5jdGlvbikge1xuICAgIGxldCBjb250ZXh0SW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgICAoZXZlbnQpID0+XG4gICAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0IHx8XG4gICAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCB8fFxuICAgICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvciB8fFxuICAgICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWxcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IFJvdXRlckV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5pc05hdmlnYXRpbmcgPSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydDtcbiAgICAgICAgICBpZiAodGhpcy5pc05hdmlnYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dFBhcmFtc0Zyb21Sb3V0ZShldmVudC51cmwpO1xuXG4gICAgICAgICAgICBpZiAoIWNvbnRleHRJbml0aWFsaXplZCkge1xuICAgICAgICAgICAgICBjb250ZXh0SW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICBvbkNvbnRleHRJbml0aWFsaXplZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHNpdGUgY29udGV4dCBzdGF0ZSBiYXNlZCBvbiB0aGUgY29udGV4dCBwYXJhbXMgZW5jb2RlZCBpbiB0aGUgZ2l2ZW4gVVJMXG4gICAqXG4gICAqIEBwYXJhbSB1cmwgVVJMIHdpdGggZW5jb2RlZCBjb250ZXh0IHBhcmFtc1xuICAgKi9cbiAgcHJpdmF0ZSBzZXRDb250ZXh0UGFyYW1zRnJvbVJvdXRlKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IHRoaXMuc2VyaWFsaXplci51cmxFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnModXJsKTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goKHBhcmFtKSA9PlxuICAgICAgdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5zZXRWYWx1ZShwYXJhbSwgcGFyYW1zW3BhcmFtXSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19