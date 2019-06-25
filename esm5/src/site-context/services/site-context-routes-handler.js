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
import { ContextPersistence } from '../config/site-context-config';
import * as i0 from "@angular/core";
import * as i1 from "./site-context-params.service";
import * as i2 from "./site-context-url-serializer";
var SiteContextRoutesHandler = /** @class */ (function () {
    function SiteContextRoutesHandler(siteContextParams, serializer, injector) {
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
    SiteContextRoutesHandler.prototype.init = /**
     * @return {?}
     */
    function () {
        this.router = this.injector.get(Router);
        this.location = this.injector.get(Location);
        /** @type {?} */
        var routingParams = this.siteContextParams.getContextParameters(ContextPersistence.ROUTE);
        if (routingParams.length) {
            this.setContextParamsFromRoute(this.router.url);
            this.subscribeChanges(routingParams);
            this.subscribeRouting();
        }
    };
    /**
     * @private
     * @param {?} params
     * @return {?}
     */
    SiteContextRoutesHandler.prototype.subscribeChanges = /**
     * @private
     * @param {?} params
     * @return {?}
     */
    function (params) {
        var _this = this;
        params.forEach((/**
         * @param {?} param
         * @return {?}
         */
        function (param) {
            /** @type {?} */
            var service = _this.siteContextParams.getSiteContextService(param);
            if (service) {
                _this.subscription.add(service.getActive().subscribe((/**
                 * @param {?} value
                 * @return {?}
                 */
                function (value) {
                    if (!_this.isNavigating &&
                        _this.contextValues[param] &&
                        _this.contextValues[param] !== value) {
                        /** @type {?} */
                        var parsed = _this.router.parseUrl(_this.router.url);
                        /** @type {?} */
                        var serialized = _this.router.serializeUrl(parsed);
                        _this.location.replaceState(serialized);
                    }
                    _this.contextValues[param] = value;
                })));
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    SiteContextRoutesHandler.prototype.subscribeRouting = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.subscription.add(this.router.events
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            return event instanceof NavigationStart ||
                event instanceof NavigationEnd ||
                event instanceof NavigationError ||
                event instanceof NavigationCancel;
        })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.isNavigating = event instanceof NavigationStart;
            if (_this.isNavigating) {
                _this.setContextParamsFromRoute(event.url);
            }
        })));
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    SiteContextRoutesHandler.prototype.setContextParamsFromRoute = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        var params = this.serializer.urlExtractContextParameters(url).params;
        Object.keys(params).forEach((/**
         * @param {?} param
         * @return {?}
         */
        function (param) {
            return _this.siteContextParams.setValue(param, params[param]);
        }));
    };
    /**
     * @return {?}
     */
    SiteContextRoutesHandler.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    SiteContextRoutesHandler.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SiteContextRoutesHandler.ctorParameters = function () { return [
        { type: SiteContextParamsService },
        { type: SiteContextUrlSerializer },
        { type: Injector }
    ]; };
    /** @nocollapse */ SiteContextRoutesHandler.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SiteContextRoutesHandler_Factory() { return new SiteContextRoutesHandler(i0.ɵɵinject(i1.SiteContextParamsService), i0.ɵɵinject(i2.SiteContextUrlSerializer), i0.ɵɵinject(i0.INJECTOR)); }, token: SiteContextRoutesHandler, providedIn: "root" });
    return SiteContextRoutesHandler;
}());
export { SiteContextRoutesHandler };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXJvdXRlcy1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcm91dGVzLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixlQUFlLEVBQ2YsZUFBZSxFQUNmLE1BQU0sR0FFUCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRW5FO0lBSUUsa0NBQ1UsaUJBQTJDLEVBQzNDLFVBQW9DLEVBQ3BDLFFBQWtCO1FBRmxCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFDM0MsZUFBVSxHQUFWLFVBQVUsQ0FBMEI7UUFDcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUdwQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEMsa0JBQWEsR0FFakIsRUFBRSxDQUFDO1FBSUMsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFWMUIsQ0FBQzs7OztJQVlKLHVDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQVMs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O2dCQXZGRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBRLHdCQUF3QjtnQkFFeEIsd0JBQXdCO2dCQWJaLFFBQVE7OzttQ0FBN0I7Q0F3R0MsQUF4RkQsSUF3RkM7U0FyRlksd0JBQXdCOzs7Ozs7SUFPbkMsZ0RBQTBDOzs7OztJQUUxQyxpREFFTzs7Ozs7SUFFUCwwQ0FBdUI7Ozs7O0lBQ3ZCLDRDQUEyQjs7Ozs7SUFDM0IsZ0RBQTZCOzs7OztJQWIzQixxREFBbUQ7Ozs7O0lBQ25ELDhDQUE0Qzs7Ozs7SUFDNUMsNENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgTmF2aWdhdGlvbkNhbmNlbCxcbiAgTmF2aWdhdGlvbkVuZCxcbiAgTmF2aWdhdGlvbkVycm9yLFxuICBOYXZpZ2F0aW9uU3RhcnQsXG4gIFJvdXRlcixcbiAgUm91dGVyRXZlbnQsXG59IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0VXJsU2VyaWFsaXplciB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyJztcbmltcG9ydCB7IENvbnRleHRQZXJzaXN0ZW5jZSB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0Um91dGVzSGFuZGxlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2l0ZUNvbnRleHRQYXJhbXM6IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSxcbiAgICBwcml2YXRlIHNlcmlhbGl6ZXI6IFNpdGVDb250ZXh0VXJsU2VyaWFsaXplcixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcHJpdmF0ZSBjb250ZXh0VmFsdWVzOiB7XG4gICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmc7XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xuICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbjtcbiAgcHJpdmF0ZSBpc05hdmlnYXRpbmcgPSBmYWxzZTtcblxuICBpbml0KCkge1xuICAgIHRoaXMucm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQ8Um91dGVyPihSb3V0ZXIpO1xuXG4gICAgdGhpcy5sb2NhdGlvbiA9IHRoaXMuaW5qZWN0b3IuZ2V0PExvY2F0aW9uPihMb2NhdGlvbik7XG4gICAgY29uc3Qgcm91dGluZ1BhcmFtcyA9IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0Q29udGV4dFBhcmFtZXRlcnMoXG4gICAgICBDb250ZXh0UGVyc2lzdGVuY2UuUk9VVEVcbiAgICApO1xuXG4gICAgaWYgKHJvdXRpbmdQYXJhbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldENvbnRleHRQYXJhbXNGcm9tUm91dGUodGhpcy5yb3V0ZXIudXJsKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlQ2hhbmdlcyhyb3V0aW5nUGFyYW1zKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlUm91dGluZygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlQ2hhbmdlcyhwYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgcGFyYW1zLmZvckVhY2gocGFyYW0gPT4ge1xuICAgICAgY29uc3Qgc2VydmljZSA9IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtKTtcbiAgICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgICAgICBzZXJ2aWNlLmdldEFjdGl2ZSgpLnN1YnNjcmliZSh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICF0aGlzLmlzTmF2aWdhdGluZyAmJlxuICAgICAgICAgICAgICB0aGlzLmNvbnRleHRWYWx1ZXNbcGFyYW1dICYmXG4gICAgICAgICAgICAgIHRoaXMuY29udGV4dFZhbHVlc1twYXJhbV0gIT09IHZhbHVlXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgY29uc3QgcGFyc2VkID0gdGhpcy5yb3V0ZXIucGFyc2VVcmwodGhpcy5yb3V0ZXIudXJsKTtcbiAgICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZCA9IHRoaXMucm91dGVyLnNlcmlhbGl6ZVVybChwYXJzZWQpO1xuICAgICAgICAgICAgICB0aGlzLmxvY2F0aW9uLnJlcGxhY2VTdGF0ZShzZXJpYWxpemVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY29udGV4dFZhbHVlc1twYXJhbV0gPSB2YWx1ZTtcbiAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVSb3V0aW5nKCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMucm91dGVyLmV2ZW50c1xuICAgICAgICAucGlwZShcbiAgICAgICAgICBmaWx0ZXIoXG4gICAgICAgICAgICBldmVudCA9PlxuICAgICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCB8fFxuICAgICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgfHxcbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IgfHxcbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBSb3V0ZXJFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNOYXZpZ2F0aW5nID0gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQ7XG4gICAgICAgICAgaWYgKHRoaXMuaXNOYXZpZ2F0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRleHRQYXJhbXNGcm9tUm91dGUoZXZlbnQudXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29udGV4dFBhcmFtc0Zyb21Sb3V0ZSh1cmw6IHN0cmluZykge1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSB0aGlzLnNlcmlhbGl6ZXIudXJsRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKHVybCk7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKHBhcmFtID0+XG4gICAgICB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLnNldFZhbHVlKHBhcmFtLCBwYXJhbXNbcGFyYW1dKVxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=