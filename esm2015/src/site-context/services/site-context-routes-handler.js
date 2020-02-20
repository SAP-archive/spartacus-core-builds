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
        this.isNavigating = false;
    }
    init() {
        this.router = this.injector.get(Router);
        this.location = this.injector.get(Location);
        const routingParams = this.siteContextParams.getUrlEncodingParameters();
        if (routingParams.length) {
            this.setContextParamsFromRoute(this.router.url);
            this.subscribeChanges(routingParams);
            this.subscribeRouting();
        }
    }
    subscribeChanges(params) {
        params.forEach(param => {
            const service = this.siteContextParams.getSiteContextService(param);
            if (service) {
                this.subscription.add(service.getActive().subscribe(value => {
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
    subscribeRouting() {
        this.subscription.add(this.router.events
            .pipe(filter(event => event instanceof NavigationStart ||
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
    setContextParamsFromRoute(url) {
        const { params } = this.serializer.urlExtractContextParameters(url);
        Object.keys(params).forEach(param => this.siteContextParams.setValue(param, params[param]));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXJvdXRlcy1oYW5kbGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcm91dGVzLWhhbmRsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEUsT0FBTyxFQUNMLGdCQUFnQixFQUNoQixhQUFhLEVBQ2IsZUFBZSxFQUNmLGVBQWUsRUFDZixNQUFNLEdBRVAsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUN6RSxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7OztBQUt6RSxJQUFhLHdCQUF3QixHQUFyQyxNQUFhLHdCQUF3QjtJQUNuQyxZQUNVLGlCQUEyQyxFQUMzQyxVQUFvQyxFQUNwQyxRQUFrQjtRQUZsQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBQzNDLGVBQVUsR0FBVixVQUFVLENBQTBCO1FBQ3BDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFHcEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWxDLGtCQUFhLEdBRWpCLEVBQUUsQ0FBQztRQUlDLGlCQUFZLEdBQUcsS0FBSyxDQUFDO0lBVjFCLENBQUM7SUFZSixJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBUyxNQUFNLENBQUMsQ0FBQztRQUVo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QUF3QjtJQUhwQyxVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csd0JBQXdCLENBbUZwQztTQW5GWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBOYXZpZ2F0aW9uQ2FuY2VsLFxuICBOYXZpZ2F0aW9uRW5kLFxuICBOYXZpZ2F0aW9uRXJyb3IsXG4gIE5hdmlnYXRpb25TdGFydCxcbiAgUm91dGVyLFxuICBSb3V0ZXJFdmVudCxcbn0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRSb3V0ZXNIYW5kbGVyIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBzaXRlQ29udGV4dFBhcmFtczogU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgc2VyaWFsaXplcjogU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cblxuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICBwcml2YXRlIGNvbnRleHRWYWx1ZXM6IHtcbiAgICBbcGFyYW06IHN0cmluZ106IHN0cmluZztcbiAgfSA9IHt9O1xuXG4gIHByaXZhdGUgcm91dGVyOiBSb3V0ZXI7XG4gIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uO1xuICBwcml2YXRlIGlzTmF2aWdhdGluZyA9IGZhbHNlO1xuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldDxSb3V0ZXI+KFJvdXRlcik7XG5cbiAgICB0aGlzLmxvY2F0aW9uID0gdGhpcy5pbmplY3Rvci5nZXQ8TG9jYXRpb24+KExvY2F0aW9uKTtcbiAgICBjb25zdCByb3V0aW5nUGFyYW1zID0gdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5nZXRVcmxFbmNvZGluZ1BhcmFtZXRlcnMoKTtcblxuICAgIGlmIChyb3V0aW5nUGFyYW1zLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRDb250ZXh0UGFyYW1zRnJvbVJvdXRlKHRoaXMucm91dGVyLnVybCk7XG4gICAgICB0aGlzLnN1YnNjcmliZUNoYW5nZXMocm91dGluZ1BhcmFtcyk7XG4gICAgICB0aGlzLnN1YnNjcmliZVJvdXRpbmcoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZUNoYW5nZXMocGFyYW1zOiBzdHJpbmdbXSkge1xuICAgIHBhcmFtcy5mb3JFYWNoKHBhcmFtID0+IHtcbiAgICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSk7XG4gICAgICBpZiAoc2VydmljZSkge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICAgICAgc2VydmljZS5nZXRBY3RpdmUoKS5zdWJzY3JpYmUodmFsdWUgPT4ge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAhdGhpcy5pc05hdmlnYXRpbmcgJiZcbiAgICAgICAgICAgICAgdGhpcy5jb250ZXh0VmFsdWVzW3BhcmFtXSAmJlxuICAgICAgICAgICAgICB0aGlzLmNvbnRleHRWYWx1ZXNbcGFyYW1dICE9PSB2YWx1ZVxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnNlZCA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHRoaXMucm91dGVyLnVybCk7XG4gICAgICAgICAgICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSB0aGlzLnJvdXRlci5zZXJpYWxpemVVcmwocGFyc2VkKTtcbiAgICAgICAgICAgICAgdGhpcy5sb2NhdGlvbi5yZXBsYWNlU3RhdGUoc2VyaWFsaXplZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvbnRleHRWYWx1ZXNbcGFyYW1dID0gdmFsdWU7XG4gICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlUm91dGluZygpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLnJvdXRlci5ldmVudHNcbiAgICAgICAgLnBpcGUoXG4gICAgICAgICAgZmlsdGVyKFxuICAgICAgICAgICAgZXZlbnQgPT5cbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQgfHxcbiAgICAgICAgICAgICAgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kIHx8XG4gICAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yIHx8XG4gICAgICAgICAgICAgIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbFxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAuc3Vic2NyaWJlKChldmVudDogUm91dGVyRXZlbnQpID0+IHtcbiAgICAgICAgICB0aGlzLmlzTmF2aWdhdGluZyA9IGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0O1xuICAgICAgICAgIGlmICh0aGlzLmlzTmF2aWdhdGluZykge1xuICAgICAgICAgICAgdGhpcy5zZXRDb250ZXh0UGFyYW1zRnJvbVJvdXRlKGV2ZW50LnVybCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNldENvbnRleHRQYXJhbXNGcm9tUm91dGUodXJsOiBzdHJpbmcpIHtcbiAgICBjb25zdCB7IHBhcmFtcyB9ID0gdGhpcy5zZXJpYWxpemVyLnVybEV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyh1cmwpO1xuICAgIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChwYXJhbSA9PlxuICAgICAgdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5zZXRWYWx1ZShwYXJhbSwgcGFyYW1zW3BhcmFtXSlcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19