/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SiteContextParamsService } from './site-context-params.service';
import { Subscription } from 'rxjs';
import { SiteContextUrlSerializer } from './site-context-url-serializer';
import * as i0 from "@angular/core";
import * as i1 from "./site-context-params.service";
import * as i2 from "./site-context-url-serializer";
export class SiteContextRoutesHandler {
    /**
     * @param {?} siteContextParams
     * @param {?} serializer
     * @param {?} injector
     */
    constructor(siteContextParams, serializer, injector) {
        this.siteContextParams = siteContextParams;
        this.serializer = serializer;
        this.injector = injector;
        this.subscription = new Subscription();
        this.contextValues = {};
        this.isNavigating = false;
    }
    /**
     * @return {?}
     */
    init() {
        this.router = this.injector.get(Router);
        this.location = this.injector.get(Location);
        /** @type {?} */
        const routingParams = this.siteContextParams.getUrlEncodingParameters();
        if (routingParams.length) {
            this.setContextParamsFromRoute(this.router.url);
            this.subscribeChanges(routingParams);
            this.subscribeRouting();
        }
    }
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    subscribeChanges(params) {
        params.forEach((/**
         * @param {?} param
         * @return {?}
         */
        param => {
            /** @type {?} */
            const service = this.siteContextParams.getSiteContextService(param);
            if (service) {
                this.subscription.add(service.getActive().subscribe((/**
                 * @param {?} value
                 * @return {?}
                 */
                value => {
                    if (!this.isNavigating &&
                        this.contextValues[param] &&
                        this.contextValues[param] !== value) {
                        /** @type {?} */
                        const parsed = this.router.parseUrl(this.router.url);
                        /** @type {?} */
                        const serialized = this.router.serializeUrl(parsed);
                        this.location.replaceState(serialized);
                    }
                    this.contextValues[param] = value;
                })));
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    subscribeRouting() {
        this.subscription.add(this.router.events
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        event => event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationError ||
            event instanceof NavigationCancel)))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.isNavigating = event instanceof NavigationStart;
            if (this.isNavigating) {
                this.setContextParamsFromRoute(event.url);
            }
        })));
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    setContextParamsFromRoute(url) {
        const { params } = this.serializer.urlExtractContextParameters(url);
        Object.keys(params).forEach((/**
         * @param {?} param
         * @return {?}
         */
        param => this.siteContextParams.setValue(param, params[param])));
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
SiteContextRoutesHandler.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SiteContextRoutesHandler.ctorParameters = () => [
    { type: SiteContextParamsService },
    { type: SiteContextUrlSerializer },
    { type: Injector }
];
/** @nocollapse */ SiteContextRoutesHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SiteContextRoutesHandler_Factory() { return new SiteContextRoutesHandler(i0.ɵɵinject(i1.SiteContextParamsService), i0.ɵɵinject(i2.SiteContextUrlSerializer), i0.ɵɵinject(i0.INJECTOR)); }, token: SiteContextRoutesHandler, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SiteContextRoutesHandler.prototype.subscription;
    /**
     * @type {?}
     * @private
     */
    SiteContextRoutesHandler.prototype.contextValues;
    /**
     * @type {?}
     * @private
     */
    SiteContextRoutesHandler.prototype.router;
    /**
     * @type {?}
     * @private
     */
    SiteContextRoutesHandler.prototype.location;
    /**
     * @type {?}
     * @private
     */
    SiteContextRoutesHandler.prototype.isNavigating;
    /**
     * @type {?}
     * @private
     */
    SiteContextRoutesHandler.prototype.siteContextParams;
    /**
     * @type {?}
     * @private
     */
    SiteContextRoutesHandler.prototype.serializer;
    /**
     * @type {?}
     * @private
     */
    SiteContextRoutesHandler.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXJvdXRlcy1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcm91dGVzLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixlQUFlLEVBQ2YsZUFBZSxFQUNmLE1BQU0sR0FFUCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBS3pFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQUNuQyxZQUNVLGlCQUEyQyxFQUMzQyxVQUFvQyxFQUNwQyxRQUFrQjtRQUZsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLGVBQVUsR0FBVixVQUFVLENBQTBCO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFHcEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxDLGtCQUFhLEdBRWpCLEVBQUUsQ0FBQztRQUlDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBVjFCLENBQUM7Ozs7SUFZSixJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBUyxNQUFNLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFXLFFBQVEsQ0FBQyxDQUFDOztjQUNoRCxhQUFhLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFO1FBRXZFLElBQUksYUFBYSxDQUFDLE1BQU0sRUFBRTtZQUN4QixJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7Ozs7SUFFTyxnQkFBZ0IsQ0FBQyxNQUFnQjtRQUN2QyxNQUFNLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFOztrQkFDZixPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztZQUNuRSxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVM7Ozs7Z0JBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3BDLElBQ0UsQ0FBQyxJQUFJLENBQUMsWUFBWTt3QkFDbEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7d0JBQ3pCLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxFQUNuQzs7OEJBQ00sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDOzs4QkFDOUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQzt3QkFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQ3hDO29CQUNELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUNwQyxDQUFDLEVBQUMsQ0FDSCxDQUFDO2FBQ0g7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRU8sZ0JBQWdCO1FBQ3RCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07YUFDZixJQUFJLENBQ0gsTUFBTTs7OztRQUNKLEtBQUssQ0FBQyxFQUFFLENBQ04sS0FBSyxZQUFZLGVBQWU7WUFDaEMsS0FBSyxZQUFZLGFBQWE7WUFDOUIsS0FBSyxZQUFZLGVBQWU7WUFDaEMsS0FBSyxZQUFZLGdCQUFnQixFQUNwQyxDQUNGO2FBQ0EsU0FBUzs7OztRQUFDLENBQUMsS0FBa0IsRUFBRSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxZQUFZLGVBQWUsQ0FBQztZQUNyRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDM0M7UUFDSCxDQUFDLEVBQUMsQ0FDTCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8seUJBQXlCLENBQUMsR0FBVztjQUNyQyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUMsR0FBRyxDQUFDO1FBQ25FLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFLENBQ2xDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUN0RCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7OztZQXJGRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFOUSx3QkFBd0I7WUFFeEIsd0JBQXdCO1lBYlosUUFBUTs7Ozs7Ozs7SUF5QjNCLGdEQUEwQzs7Ozs7SUFFMUMsaURBRU87Ozs7O0lBRVAsMENBQXVCOzs7OztJQUN2Qiw0Q0FBMkI7Ozs7O0lBQzNCLGdEQUE2Qjs7Ozs7SUFiM0IscURBQW1EOzs7OztJQUNuRCw4Q0FBNEM7Ozs7O0lBQzVDLDRDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIE5hdmlnYXRpb25DYW5jZWwsXG4gIE5hdmlnYXRpb25FbmQsXG4gIE5hdmlnYXRpb25FcnJvcixcbiAgTmF2aWdhdGlvblN0YXJ0LFxuICBSb3V0ZXIsXG4gIFJvdXRlckV2ZW50LFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFVybFNlcmlhbGl6ZXIgfSBmcm9tICcuL3NpdGUtY29udGV4dC11cmwtc2VyaWFsaXplcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFJvdXRlc0hhbmRsZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNpdGVDb250ZXh0UGFyYW1zOiBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJpYWxpemVyOiBTaXRlQ29udGV4dFVybFNlcmlhbGl6ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHByaXZhdGUgY29udGV4dFZhbHVlczoge1xuICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nO1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XG4gIHByaXZhdGUgaXNOYXZpZ2F0aW5nID0gZmFsc2U7XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKTtcblxuICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLmluamVjdG9yLmdldDxMb2NhdGlvbj4oTG9jYXRpb24pO1xuICAgIGNvbnN0IHJvdXRpbmdQYXJhbXMgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFVybEVuY29kaW5nUGFyYW1ldGVycygpO1xuXG4gICAgaWYgKHJvdXRpbmdQYXJhbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldENvbnRleHRQYXJhbXNGcm9tUm91dGUodGhpcy5yb3V0ZXIudXJsKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlQ2hhbmdlcyhyb3V0aW5nUGFyYW1zKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlUm91dGluZygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlQ2hhbmdlcyhwYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgcGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtKTtcbiAgICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgICAgICBzZXJ2aWNlLmdldEFjdGl2ZSgpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICF0aGlzLmlzTmF2aWdhdGluZyAmJlxuICAgICAgICAgICAgICB0aGlzLmNvbnRleHRWYWx1ZXNbcGFyYW1dICYmXG4gICAgICAgICAgICAgIHRoaXMuY29udGV4dFZhbHVlc1twYXJhbV0gIT09IHZhbHVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwodGhpcy5yb3V0ZXIudXJsKTtcbiAgICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZCA9IHRoaXMucm91dGVyLnNlcmlhbGl6ZVVybChwYXJzZWQpO1xuICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uLnJlcGxhY2VTdGF0ZShzZXJpYWxpemVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29udGV4dFZhbHVlc1twYXJhbV0gPSB2YWx1ZTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVSb3V0aW5nKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgICBldmVudCA9PlxuICAgICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCB8fFxuICAgICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgfHxcbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IgfHxcbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBSb3V0ZXJFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNOYXZpZ2F0aW5nID0gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQ7XG4gICAgICAgICAgaWYgKHRoaXMuaXNOYXZpZ2F0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRleHRQYXJhbXNGcm9tUm91dGUoZXZlbnQudXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29udGV4dFBhcmFtc0Zyb21Sb3V0ZSh1cmw6IHN0cmluZykge1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSB0aGlzLnNlcmlhbGl6ZXIudXJsRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKHVybCk7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtID0+XG4gICAgICB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLnNldFZhbHVlKHBhcmFtLCBwYXJhbXNbcGFyYW1dKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=