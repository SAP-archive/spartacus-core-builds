import { __decorate } from "tslib";
import { Location } from '@angular/common';
import { Injectable, Injector, OnDestroy } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SiteContextParamsService } from './site-context-params.service';
import { SiteContextUrlSerializer } from './site-context-url-serializer';
import * as i0 from "@angular/core";
import * as i1 from "./site-context-params.service";
import * as i2 from "./site-context-url-serializer";
let SiteContextRoutesHandler = class SiteContextRoutesHandler {
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
};
SiteContextRoutesHandler.ctorParameters = () => [
    { type: SiteContextParamsService },
    { type: SiteContextUrlSerializer },
    { type: Injector }
];
SiteContextRoutesHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function SiteContextRoutesHandler_Factory() { return new SiteContextRoutesHandler(i0.ɵɵinject(i1.SiteContextParamsService), i0.ɵɵinject(i2.SiteContextUrlSerializer), i0.ɵɵinject(i0.INJECTOR)); }, token: SiteContextRoutesHandler, providedIn: "root" });
SiteContextRoutesHandler = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SiteContextRoutesHandler);
export { SiteContextRoutesHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXJvdXRlcy1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcm91dGVzLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsZUFBZSxFQUNmLGVBQWUsRUFDZixNQUFNLEdBRVAsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUt6RSxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQUNuQyxZQUNVLGlCQUEyQyxFQUMzQyxVQUFvQyxFQUNwQyxRQUFrQjtRQUZsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLGVBQVUsR0FBVixVQUFVLENBQTBCO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFHcEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxDLGtCQUFhLEdBRWpCLEVBQUUsQ0FBQztRQUtQOzs7O1dBSUc7UUFDSyxpQkFBWSxHQUFHLEtBQUssQ0FBQztJQWhCMUIsQ0FBQztJQWtCSjs7OztPQUlHO0lBQ0gsSUFBSTtRQUNGLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFTLE1BQU0sQ0FBQyxDQUFDO1lBRWhELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQVcsUUFBUSxDQUFDLENBQUM7WUFDdEQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLENBQUM7WUFFeEUsSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFO2dCQUN4QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNoQztpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQzthQUNYO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssZ0JBQWdCLENBQUMsTUFBZ0I7UUFDdkMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRSxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO29CQUN0QyxJQUNFLENBQUMsSUFBSSxDQUFDLFlBQVk7d0JBQ2xCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO3dCQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssRUFDbkM7d0JBQ0EsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckQsTUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQ3BELElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO3FCQUN4QztvQkFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDcEMsQ0FBQyxDQUFDLENBQ0gsQ0FBQzthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7Ozs7O09BUUc7SUFDSyxnQkFBZ0IsQ0FBQyxvQkFBOEI7UUFDckQsSUFBSSxrQkFBa0IsR0FBRyxLQUFLLENBQUM7UUFFL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTTthQUNmLElBQUksQ0FDSCxNQUFNLENBQ0osQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNSLEtBQUssWUFBWSxlQUFlO1lBQ2hDLEtBQUssWUFBWSxhQUFhO1lBQzlCLEtBQUssWUFBWSxlQUFlO1lBQ2hDLEtBQUssWUFBWSxnQkFBZ0IsQ0FDcEMsQ0FDRjthQUNBLFNBQVMsQ0FBQyxDQUFDLEtBQWtCLEVBQUUsRUFBRTtZQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssWUFBWSxlQUFlLENBQUM7WUFDckQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMseUJBQXlCLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUUxQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7b0JBQ3ZCLGtCQUFrQixHQUFHLElBQUksQ0FBQztvQkFDMUIsb0JBQW9CLEVBQUUsQ0FBQztpQkFDeEI7YUFDRjtRQUNILENBQUMsQ0FBQyxDQUNMLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNLLHlCQUF5QixDQUFDLEdBQVc7UUFDM0MsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDdEQsQ0FBQztJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0NBQ0YsQ0FBQTs7WUF4SDhCLHdCQUF3QjtZQUMvQix3QkFBd0I7WUFDMUIsUUFBUTs7O0FBSmpCLHdCQUF3QjtJQUhwQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csd0JBQXdCLENBMEhwQztTQTFIWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uQ2FuY2VsLFxuICBOYXZpZ2F0aW9uRW5kLFxuICBOYXZpZ2F0aW9uRXJyb3IsXG4gIE5hdmlnYXRpb25TdGFydCxcbiAgUm91dGVyLFxuICBSb3V0ZXJFdmVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaXRlQ29udGV4dFBhcmFtczogU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VyaWFsaXplcjogU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwcml2YXRlIGNvbnRleHRWYWx1ZXM6IHtcbiAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZztcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xuXG4gIC8qKlxuICAgKiBUZWxscyB3aGV0aGVyIHRoZXJlIGlzIGEgcGVuZGluZyBuYXZpZ2F0aW9uIGF0IHRoZSBtb21lbnQsIHNvIHdlIGNhbiBhdm9pZCBhbiBpbmZpbml0ZSBsb29wIGNhdXNlZCBieSB0aGUgY3ljbGljIGRlcGVuZGVuY3k6XG4gICAqIC0gYHN1YnNjcmliZUNoYW5nZXNgIG1ldGhvZCB0cmlnZ2VycyBhIG5hdmlnYXRpb24gb24gdXBkYXRlIG9mIHNpdGUgY29udGV4dCBzdGF0ZVxuICAgKiAtIGBzdWJzY3JpYmVSb3V0aW5nYCBtZXRob2QgdXBkYXRlcyB0aGUgc2l0ZSBjb250ZXh0IHN0YXRlIG9uIG5hdmlnYXRpb25cbiAgICovXG4gIHByaXZhdGUgaXNOYXZpZ2F0aW5nID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSB0d28td2F5IHN5bmNocm9uaXphdGlvbiBiZXR3ZWVuIHRoZSBzaXRlIGNvbnRleHQgc3RhdGUgYW5kIHRoZSBVUkwuXG4gICAqXG4gICAqIEByZXR1cm5zIFByb21pc2UgdGhhdCBpcyByZXNvbHZlZCB3aGVuIHRoZSBzaXRlIGNvbnRleHQgc3RhdGUgaXMgaW5pdGlhbGl6ZWQgKHVwZGF0ZWQgZm9yIHRoZSBmaXJzdCB0aW1lKSBiYXNlZCBvbiB0aGUgVVJMLlxuICAgKi9cbiAgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIHRoaXMucm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQ8Um91dGVyPihSb3V0ZXIpO1xuXG4gICAgICB0aGlzLmxvY2F0aW9uID0gdGhpcy5pbmplY3Rvci5nZXQ8TG9jYXRpb24+KExvY2F0aW9uKTtcbiAgICAgIGNvbnN0IHJvdXRpbmdQYXJhbXMgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFVybEVuY29kaW5nUGFyYW1ldGVycygpO1xuXG4gICAgICBpZiAocm91dGluZ1BhcmFtcy5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmVDaGFuZ2VzKHJvdXRpbmdQYXJhbXMpO1xuICAgICAgICB0aGlzLnN1YnNjcmliZVJvdXRpbmcocmVzb2x2ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgZWFjaCBjaGFuZ2Ugb2YgdGhlIHNpdGUgY29udGV4dCBzdGF0ZSwgaXQgbW9kaWZpZXMgdGhlIGN1cnJlbnQgVVJMIGluIHBsYWNlLlxuICAgKiBCdXQgaXQgaGFwcGVucyBvbmx5IGZvciB0aGUgcGFyYW1ldGVycyBjb25maWd1cmVkIHRvIGJlIHBlcnNpc3RlZCBpbiB0aGUgVVJMLlxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpYmVDaGFuZ2VzKHBhcmFtczogc3RyaW5nW10pIHtcbiAgICBwYXJhbXMuZm9yRWFjaCgocGFyYW0pID0+IHtcbiAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSk7XG4gICAgICBpZiAoc2VydmljZSkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICAgICAgc2VydmljZS5nZXRBY3RpdmUoKS5zdWJzY3JpYmUoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICF0aGlzLmlzTmF2aWdhdGluZyAmJlxuICAgICAgICAgICAgICB0aGlzLmNvbnRleHRWYWx1ZXNbcGFyYW1dICYmXG4gICAgICAgICAgICAgIHRoaXMuY29udGV4dFZhbHVlc1twYXJhbV0gIT09IHZhbHVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwodGhpcy5yb3V0ZXIudXJsKTtcbiAgICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZCA9IHRoaXMucm91dGVyLnNlcmlhbGl6ZVVybChwYXJzZWQpO1xuICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uLnJlcGxhY2VTdGF0ZShzZXJpYWxpemVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29udGV4dFZhbHVlc1twYXJhbV0gPSB2YWx1ZTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFmdGVyIGVhY2ggQW5ndWxhciBOYXZpZ2F0aW9uU3RhcnQgZXZlbnQgaXQgdXBkYXRlcyB0aGUgc2l0ZSBjb250ZXh0IHN0YXRlIGJhc2VkIG9uXG4gICAqIHNpdGUgY29udGV4dCBwYXJhbXMgZW5jb2RlZCBpbiB0aGUgYW50aWNpcGF0ZWQgVVJMLlxuICAgKlxuICAgKiBJbiBwYXJ0aWN1bGFyLCBpdCdzIHJlc3BvbnNpYmxlIGZvciBpbml0aWFsaXppbmcgdGhlIHN0YXRlIG9mIHRoZSBjb250ZXh0IHBhcmFtc1xuICAgKiBvbiBwYWdlIHN0YXJ0LCByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgVVJMLlxuICAgKlxuICAgKiBAcGFyYW0gb25Db250ZXh0SW5pdGlhbGl6ZWQgbm90aWZ5IHRoYXQgdGhlIGluaXRpYWxpemF0aW9uIG9mIHRoZSBjb250ZXh0IHdhcyBkb25lIGJhc2VkIG9uIHRoZSBVUkxcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaWJlUm91dGluZyhvbkNvbnRleHRJbml0aWFsaXplZDogRnVuY3Rpb24pIHtcbiAgICBsZXQgY29udGV4dEluaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgKGV2ZW50KSA9PlxuICAgICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCB8fFxuICAgICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgfHxcbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IgfHxcbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBSb3V0ZXJFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNOYXZpZ2F0aW5nID0gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQ7XG4gICAgICAgICAgaWYgKHRoaXMuaXNOYXZpZ2F0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRleHRQYXJhbXNGcm9tUm91dGUoZXZlbnQudXJsKTtcblxuICAgICAgICAgICAgaWYgKCFjb250ZXh0SW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgICAgY29udGV4dEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgb25Db250ZXh0SW5pdGlhbGl6ZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzaXRlIGNvbnRleHQgc3RhdGUgYmFzZWQgb24gdGhlIGNvbnRleHQgcGFyYW1zIGVuY29kZWQgaW4gdGhlIGdpdmVuIFVSTFxuICAgKlxuICAgKiBAcGFyYW0gdXJsIFVSTCB3aXRoIGVuY29kZWQgY29udGV4dCBwYXJhbXNcbiAgICovXG4gIHByaXZhdGUgc2V0Q29udGV4dFBhcmFtc0Zyb21Sb3V0ZSh1cmw6IHN0cmluZykge1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSB0aGlzLnNlcmlhbGl6ZXIudXJsRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKHVybCk7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChwYXJhbSkgPT5cbiAgICAgIHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuc2V0VmFsdWUocGFyYW0sIHBhcmFtc1twYXJhbV0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==