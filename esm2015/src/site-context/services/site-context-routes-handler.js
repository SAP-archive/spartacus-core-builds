/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        const routingParams = this.siteContextParams.getContextParameters('route');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXJvdXRlcy1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcm91dGVzLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixlQUFlLEVBQ2YsZUFBZSxFQUNmLE1BQU0sR0FFUCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBS3pFLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQUNuQyxZQUNVLGlCQUEyQyxFQUMzQyxVQUFvQyxFQUNwQyxRQUFrQjtRQUZsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLGVBQVUsR0FBVixVQUFVLENBQTBCO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFHcEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxDLGtCQUFhLEdBRWpCLEVBQUUsQ0FBQztRQUlDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBVjFCLENBQUM7Ozs7SUFZSixJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBUyxNQUFNLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMs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QWJaLFFBQVE7Ozs7Ozs7O0lBeUIzQixnREFBMEM7Ozs7O0lBRTFDLGlEQUVPOzs7OztJQUVQLDBDQUF1Qjs7Ozs7SUFDdkIsNENBQTJCOzs7OztJQUMzQixnREFBNkI7Ozs7O0lBYjNCLHFEQUFtRDs7Ozs7SUFDbkQsOENBQTRDOzs7OztJQUM1Qyw0Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uQ2FuY2VsLFxuICBOYXZpZ2F0aW9uRW5kLFxuICBOYXZpZ2F0aW9uRXJyb3IsXG4gIE5hdmlnYXRpb25TdGFydCxcbiAgUm91dGVyLFxuICBSb3V0ZXJFdmVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaXRlQ29udGV4dFBhcmFtczogU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VyaWFsaXplcjogU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwcml2YXRlIGNvbnRleHRWYWx1ZXM6IHtcbiAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZztcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xuICBwcml2YXRlIGlzTmF2aWdhdGluZyA9IGZhbHNlO1xuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcik7XG5cbiAgICB0aGlzLmxvY2F0aW9uID0gdGhpcy5pbmplY3Rvci5nZXQ8TG9jYXRpb24+KExvY2F0aW9uKTtcbiAgICBjb25zdCByb3V0aW5nUGFyYW1zID0gdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5nZXRDb250ZXh0UGFyYW1ldGVycygncm91dGUnKTtcblxuICAgIGlmIChyb3V0aW5nUGFyYW1zLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRDb250ZXh0UGFyYW1zRnJvbVJvdXRlKHRoaXMucm91dGVyLnVybCk7XG4gICAgICB0aGlzLnN1YnNjcmliZUNoYW5nZXMocm91dGluZ1BhcmFtcyk7XG4gICAgICB0aGlzLnN1YnNjcmliZVJvdXRpbmcoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZUNoYW5nZXMocGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIHBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSk7XG4gICAgICBpZiAoc2VydmljZSkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICAgICAgc2VydmljZS5nZXRBY3RpdmUoKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhdGhpcy5pc05hdmlnYXRpbmcgJiZcbiAgICAgICAgICAgICAgdGhpcy5jb250ZXh0VmFsdWVzW3BhcmFtXSAmJlxuICAgICAgICAgICAgICB0aGlzLmNvbnRleHRWYWx1ZXNbcGFyYW1dICE9PSB2YWx1ZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHRoaXMucm91dGVyLnVybCk7XG4gICAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSB0aGlzLnJvdXRlci5zZXJpYWxpemVVcmwocGFyc2VkKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5yZXBsYWNlU3RhdGUoc2VyaWFsaXplZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRWYWx1ZXNbcGFyYW1dID0gdmFsdWU7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlUm91dGluZygpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgZXZlbnQgPT5cbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQgfHxcbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8XG4gICAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yIHx8XG4gICAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbFxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogUm91dGVyRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTmF2aWdhdGluZyA9IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0O1xuICAgICAgICAgIGlmICh0aGlzLmlzTmF2aWdhdGluZykge1xuICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0UGFyYW1zRnJvbVJvdXRlKGV2ZW50LnVybCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldENvbnRleHRQYXJhbXNGcm9tUm91dGUodXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gdGhpcy5zZXJpYWxpemVyLnVybEV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyh1cmwpO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChwYXJhbSA9PlxuICAgICAgdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5zZXRWYWx1ZShwYXJhbSwgcGFyYW1zW3BhcmFtXSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19