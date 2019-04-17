/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, } from '@angular/router';
import { filter } from 'rxjs/operators';
import { SiteContextParamsService } from '../facade/site-context-params.service';
import { Subscription } from 'rxjs';
import { SiteContextUrlSerializer } from './site-context-url-serializer';
import * as i0 from "@angular/core";
import * as i1 from "../facade/site-context-params.service";
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
        var routingParams = this.siteContextParams.getContextParameters('route');
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
        params.forEach(function (param) {
            /** @type {?} */
            var service = _this.siteContextParams.getSiteContextService(param);
            if (service) {
                _this.subscription.add(service.getActive().subscribe(function (value) {
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
                }));
            }
        });
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
            .pipe(filter(function (event) {
            return event instanceof NavigationStart ||
                event instanceof NavigationEnd ||
                event instanceof NavigationError ||
                event instanceof NavigationCancel;
        }))
            .subscribe(function (event) {
            _this.isNavigating = event instanceof NavigationStart;
            if (_this.isNavigating) {
                _this.setContextParamsFromRoute(event.url);
            }
        }));
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
        Object.keys(params).forEach(function (param) {
            return _this.siteContextParams.setValue(param, params[param]);
        });
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
    /** @nocollapse */ SiteContextRoutesHandler.ngInjectableDef = i0.defineInjectable({ factory: function SiteContextRoutesHandler_Factory() { return new SiteContextRoutesHandler(i0.inject(i1.SiteContextParamsService), i0.inject(i2.SiteContextUrlSerializer), i0.inject(i0.INJECTOR)); }, token: SiteContextRoutesHandler, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXJvdXRlcy1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcm91dGVzLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGFBQWEsRUFDYixlQUFlLEVBQ2YsZUFBZSxFQUNmLE1BQU0sR0FFUCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7O0FBRXpFO0lBSUUsa0NBQ1UsaUJBQTJDLEVBQzNDLFVBQW9DLEVBQ3BDLFFBQWtCO1FBRmxCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFDM0MsZUFBVSxHQUFWLFVBQVUsQ0FBMEI7UUFDcEMsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUdwQixpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFbEMsa0JBQWEsR0FFakIsRUFBRSxDQUFDO1FBSUMsaUJBQVksR0FBRyxLQUFLLENBQUM7SUFWMUIsQ0FBQzs7OztJQVlKLHVDQUFJOzs7SUFBSjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQVMsTUFBTSxDQUFDLENBQUM7UUFFaEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJ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QjtnQkFiWixRQUFROzs7bUNBQTdCO0NBcUdDLEFBdEZELElBc0ZDO1NBbkZZLHdCQUF3Qjs7Ozs7O0lBT25DLGdEQUEwQzs7Ozs7SUFFMUMsaURBRU87Ozs7O0lBRVAsMENBQXVCOzs7OztJQUN2Qiw0Q0FBMkI7Ozs7O0lBQzNCLGdEQUE2Qjs7Ozs7SUFiM0IscURBQW1EOzs7OztJQUNuRCw4Q0FBNEM7Ozs7O0lBQzVDLDRDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIE5hdmlnYXRpb25DYW5jZWwsXG4gIE5hdmlnYXRpb25FbmQsXG4gIE5hdmlnYXRpb25FcnJvcixcbiAgTmF2aWdhdGlvblN0YXJ0LFxuICBSb3V0ZXIsXG4gIFJvdXRlckV2ZW50LFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0VXJsU2VyaWFsaXplciB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0Um91dGVzSGFuZGxlciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2l0ZUNvbnRleHRQYXJhbXM6IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSxcbiAgICBwcml2YXRlIHNlcmlhbGl6ZXI6IFNpdGVDb250ZXh0VXJsU2VyaWFsaXplcixcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG5cbiAgcHJpdmF0ZSBjb250ZXh0VmFsdWVzOiB7XG4gICAgW3BhcmFtOiBzdHJpbmddOiBzdHJpbmc7XG4gIH0gPSB7fTtcblxuICBwcml2YXRlIHJvdXRlcjogUm91dGVyO1xuICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbjtcbiAgcHJpdmF0ZSBpc05hdmlnYXRpbmcgPSBmYWxzZTtcblxuICBpbml0KCkge1xuICAgIHRoaXMucm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQ8Um91dGVyPihSb3V0ZXIpO1xuXG4gICAgdGhpcy5sb2NhdGlvbiA9IHRoaXMuaW5qZWN0b3IuZ2V0PExvY2F0aW9uPihMb2NhdGlvbik7XG4gICAgY29uc3Qgcm91dGluZ1BhcmFtcyA9IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0Q29udGV4dFBhcmFtZXRlcnMoJ3JvdXRlJyk7XG5cbiAgICBpZiAocm91dGluZ1BhcmFtcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2V0Q29udGV4dFBhcmFtc0Zyb21Sb3V0ZSh0aGlzLnJvdXRlci51cmwpO1xuICAgICAgdGhpcy5zdWJzY3JpYmVDaGFuZ2VzKHJvdXRpbmdQYXJhbXMpO1xuICAgICAgdGhpcy5zdWJzY3JpYmVSb3V0aW5nKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzdWJzY3JpYmVDaGFuZ2VzKHBhcmFtczogc3RyaW5nW10pIHtcbiAgICBwYXJhbXMuZm9yRWFjaChwYXJhbSA9PiB7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5nZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW0pO1xuICAgICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgICAgIHNlcnZpY2UuZ2V0QWN0aXZlKCkuc3Vic2NyaWJlKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgIXRoaXMuaXNOYXZpZ2F0aW5nICYmXG4gICAgICAgICAgICAgIHRoaXMuY29udGV4dFZhbHVlc1twYXJhbV0gJiZcbiAgICAgICAgICAgICAgdGhpcy5jb250ZXh0VmFsdWVzW3BhcmFtXSAhPT0gdmFsdWVcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICBjb25zdCBwYXJzZWQgPSB0aGlzLnJvdXRlci5wYXJzZVVybCh0aGlzLnJvdXRlci51cmwpO1xuICAgICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkID0gdGhpcy5yb3V0ZXIuc2VyaWFsaXplVXJsKHBhcnNlZCk7XG4gICAgICAgICAgICAgIHRoaXMubG9jYXRpb24ucmVwbGFjZVN0YXRlKHNlcmlhbGl6ZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb250ZXh0VmFsdWVzW3BhcmFtXSA9IHZhbHVlO1xuICAgICAgICAgIH0pXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZVJvdXRpbmcoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5yb3V0ZXIuZXZlbnRzXG4gICAgICAgIC5waXBlKFxuICAgICAgICAgIGZpbHRlcihcbiAgICAgICAgICAgIGV2ZW50ID0+XG4gICAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0IHx8XG4gICAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZCB8fFxuICAgICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvciB8fFxuICAgICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWxcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IFJvdXRlckV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5pc05hdmlnYXRpbmcgPSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydDtcbiAgICAgICAgICBpZiAodGhpcy5pc05hdmlnYXRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Q29udGV4dFBhcmFtc0Zyb21Sb3V0ZShldmVudC51cmwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb250ZXh0UGFyYW1zRnJvbVJvdXRlKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgeyBwYXJhbXMgfSA9IHRoaXMuc2VyaWFsaXplci51cmxFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnModXJsKTtcbiAgICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2gocGFyYW0gPT5cbiAgICAgIHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuc2V0VmFsdWUocGFyYW0sIHBhcmFtc1twYXJhbV0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==