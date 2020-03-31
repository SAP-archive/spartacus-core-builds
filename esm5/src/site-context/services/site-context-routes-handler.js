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
var SiteContextRoutesHandler = /** @class */ (function () {
    function SiteContextRoutesHandler(siteContextParams, serializer, injector) {
        this.siteContextParams = siteContextParams;
        this.serializer = serializer;
        this.injector = injector;
        this.subscription = new Subscription();
        this.contextValues = {};
        this.isNavigating = false;
    }
    SiteContextRoutesHandler.prototype.init = function () {
        this.router = this.injector.get(Router);
        this.location = this.injector.get(Location);
        var routingParams = this.siteContextParams.getUrlEncodingParameters();
        if (routingParams.length) {
            this.setContextParamsFromRoute(this.router.url);
            this.subscribeChanges(routingParams);
            this.subscribeRouting();
        }
    };
    SiteContextRoutesHandler.prototype.subscribeChanges = function (params) {
        var _this = this;
        params.forEach(function (param) {
            var service = _this.siteContextParams.getSiteContextService(param);
            if (service) {
                _this.subscription.add(service.getActive().subscribe(function (value) {
                    if (!_this.isNavigating &&
                        _this.contextValues[param] &&
                        _this.contextValues[param] !== value) {
                        var parsed = _this.router.parseUrl(_this.router.url);
                        var serialized = _this.router.serializeUrl(parsed);
                        _this.location.replaceState(serialized);
                    }
                    _this.contextValues[param] = value;
                }));
            }
        });
    };
    SiteContextRoutesHandler.prototype.subscribeRouting = function () {
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
    SiteContextRoutesHandler.prototype.setContextParamsFromRoute = function (url) {
        var _this = this;
        var params = this.serializer.urlExtractContextParameters(url).params;
        Object.keys(params).forEach(function (param) {
            return _this.siteContextParams.setValue(param, params[param]);
        });
    };
    SiteContextRoutesHandler.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SiteContextRoutesHandler.ctorParameters = function () { return [
        { type: SiteContextParamsService },
        { type: SiteContextUrlSerializer },
        { type: Injector }
    ]; };
    SiteContextRoutesHandler.ɵprov = i0.ɵɵdefineInjectable({ factory: function SiteContextRoutesHandler_Factory() { return new SiteContextRoutesHandler(i0.ɵɵinject(i1.SiteContextParamsService), i0.ɵɵinject(i2.SiteContextUrlSerializer), i0.ɵɵinject(i0.INJECTOR)); }, token: SiteContextRoutesHandler, providedIn: "root" });
    SiteContextRoutesHandler = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SiteContextRoutesHandler);
    return SiteContextRoutesHandler;
}());
export { SiteContextRoutesHandler };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXJvdXRlcy1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcm91dGVzLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsZUFBZSxFQUNmLGVBQWUsRUFDZixNQUFNLEdBRVAsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUt6RTtJQUNFLGtDQUNVLGlCQUEyQyxFQUMzQyxVQUFvQyxFQUNwQyxRQUFrQjtRQUZsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLGVBQVUsR0FBVixVQUFVLENBQTBCO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFHcEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxDLGtCQUFhLEdBRWpCLEVBQUUsQ0FBQztRQUlDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBVjFCLENBQUM7SUFZSix1Q0FBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBUyxNQUFNLENBQUMsQ0FBQztRQUVoRCxJQUFJLENBQUMsUUFBUSxHQUFHLElB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QUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLHdCQUF3QixDQW1GcEM7bUNBckdEO0NBcUdDLEFBbkZELElBbUZDO1NBbkZZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIE5hdmlnYXRpb25DYW5jZWwsXG4gIE5hdmlnYXRpb25FbmQsXG4gIE5hdmlnYXRpb25FcnJvcixcbiAgTmF2aWdhdGlvblN0YXJ0LFxuICBSb3V0ZXIsXG4gIFJvdXRlckV2ZW50LFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFVybFNlcmlhbGl6ZXIgfSBmcm9tICcuL3NpdGUtY29udGV4dC11cmwtc2VyaWFsaXplcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFJvdXRlc0hhbmRsZXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNpdGVDb250ZXh0UGFyYW1zOiBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBzZXJpYWxpemVyOiBTaXRlQ29udGV4dFVybFNlcmlhbGl6ZXIsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuXG4gIHByaXZhdGUgY29udGV4dFZhbHVlczoge1xuICAgIFtwYXJhbTogc3RyaW5nXTogc3RyaW5nO1xuICB9ID0ge307XG5cbiAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcjtcbiAgcHJpdmF0ZSBsb2NhdGlvbjogTG9jYXRpb247XG4gIHByaXZhdGUgaXNOYXZpZ2F0aW5nID0gZmFsc2U7XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLnJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0PFJvdXRlcj4oUm91dGVyKTtcblxuICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLmluamVjdG9yLmdldDxMb2NhdGlvbj4oTG9jYXRpb24pO1xuICAgIGNvbnN0IHJvdXRpbmdQYXJhbXMgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFVybEVuY29kaW5nUGFyYW1ldGVycygpO1xuXG4gICAgaWYgKHJvdXRpbmdQYXJhbXMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldENvbnRleHRQYXJhbXNGcm9tUm91dGUodGhpcy5yb3V0ZXIudXJsKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlQ2hhbmdlcyhyb3V0aW5nUGFyYW1zKTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlUm91dGluZygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlQ2hhbmdlcyhwYXJhbXM6IHN0cmluZ1tdKSB7XG4gICAgcGFyYW1zLmZvckVhY2goKHBhcmFtKSA9PiB7XG4gICAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5nZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW0pO1xuICAgICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgICAgIHNlcnZpY2UuZ2V0QWN0aXZlKCkuc3Vic2NyaWJlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhdGhpcy5pc05hdmlnYXRpbmcgJiZcbiAgICAgICAgICAgICAgdGhpcy5jb250ZXh0VmFsdWVzW3BhcmFtXSAmJlxuICAgICAgICAgICAgICB0aGlzLmNvbnRleHRWYWx1ZXNbcGFyYW1dICE9PSB2YWx1ZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHRoaXMucm91dGVyLnVybCk7XG4gICAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSB0aGlzLnJvdXRlci5zZXJpYWxpemVVcmwocGFyc2VkKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5yZXBsYWNlU3RhdGUoc2VyaWFsaXplZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRWYWx1ZXNbcGFyYW1dID0gdmFsdWU7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlUm91dGluZygpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgKGV2ZW50KSA9PlxuICAgICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydCB8fFxuICAgICAgICAgICAgICBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQgfHxcbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3IgfHxcbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBSb3V0ZXJFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuaXNOYXZpZ2F0aW5nID0gZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQ7XG4gICAgICAgICAgaWYgKHRoaXMuaXNOYXZpZ2F0aW5nKSB7XG4gICAgICAgICAgICB0aGlzLnNldENvbnRleHRQYXJhbXNGcm9tUm91dGUoZXZlbnQudXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29udGV4dFBhcmFtc0Zyb21Sb3V0ZSh1cmw6IHN0cmluZykge1xuICAgIGNvbnN0IHsgcGFyYW1zIH0gPSB0aGlzLnNlcmlhbGl6ZXIudXJsRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKHVybCk7XG4gICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChwYXJhbSkgPT5cbiAgICAgIHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuc2V0VmFsdWUocGFyYW0sIHBhcmFtc1twYXJhbV0pXG4gICAgKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==