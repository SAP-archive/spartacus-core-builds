import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map, shareReplay, startWith } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
/**
 * Service to expose all parameters for the router, including child routes.
 * This is convenient in case the parent route (component) requires awareness
 * of child routes parameters.
 */
export class RoutingParamsService {
    constructor(router) {
        this.router = router;
        this.navigationEndEvent$ = this.router.events.pipe(filter((event) => event instanceof NavigationEnd));
        this.params$ = this.navigationEndEvent$.pipe(
        // tslint:disable-next-line: deprecation (https://github.com/ReactiveX/rxjs/issues/4772)
        startWith(undefined), // emit value for consumer who subscribed lately after NavigationEnd event
        map(() => this.findAllParam(this.router.routerState.snapshot.root)), shareReplay({ refCount: true, bufferSize: 1 }));
    }
    /**
     * Get the list of all parameters of the full route. This includes
     * active child routes.
     */
    getParams() {
        return this.params$;
    }
    findAllParam(route) {
        let params = {};
        route.children.forEach((c) => c.paramMap.keys.forEach((key) => (params[key] = c.paramMap.get(key))));
        route.children.forEach((c) => (params = Object.assign(Object.assign({}, params), this.findAllParam(c))));
        return params;
    }
}
RoutingParamsService.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutingParamsService_Factory() { return new RoutingParamsService(i0.ɵɵinject(i1.Router)); }, token: RoutingParamsService, providedIn: "root" });
RoutingParamsService.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
RoutingParamsService.ctorParameters = () => [
    { type: Router }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1wYXJhbXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmctcGFyYW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQTBCLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVoRixPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7OztBQUVyRTs7OztHQUlHO0FBRUgsTUFBTSxPQUFPLG9CQUFvQjtJQWMvQixZQUFzQixNQUFjO1FBQWQsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQWIxQix3QkFBbUIsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQ3JELE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxZQUFZLGFBQWEsQ0FBQyxDQUNsRCxDQUFDO1FBRWlCLFlBQU8sR0FFckIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUk7UUFDaEMsd0ZBQXdGO1FBQ3hGLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRSwwRUFBMEU7UUFDaEcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQ25FLFdBQVcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQy9DLENBQUM7SUFFcUMsQ0FBQztJQUV4Qzs7O09BR0c7SUFDSCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUFFUyxZQUFZLENBQ3BCLEtBQTZCO1FBRTdCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNoQixLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQzNCLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUN0RSxDQUFDO1FBQ0YsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ3BCLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sbUNBQVEsTUFBTSxHQUFLLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FBQyxDQUN6RCxDQUFDO1FBQ0YsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7OztZQXBDRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7WUFUYyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCwgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzaGFyZVJlcGxheSwgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vKipcbiAqIFNlcnZpY2UgdG8gZXhwb3NlIGFsbCBwYXJhbWV0ZXJzIGZvciB0aGUgcm91dGVyLCBpbmNsdWRpbmcgY2hpbGQgcm91dGVzLlxuICogVGhpcyBpcyBjb252ZW5pZW50IGluIGNhc2UgdGhlIHBhcmVudCByb3V0ZSAoY29tcG9uZW50KSByZXF1aXJlcyBhd2FyZW5lc3NcbiAqIG9mIGNoaWxkIHJvdXRlcyBwYXJhbWV0ZXJzLlxuICovXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFJvdXRpbmdQYXJhbXNTZXJ2aWNlIHtcbiAgcHJvdGVjdGVkIG5hdmlnYXRpb25FbmRFdmVudCQgPSB0aGlzLnJvdXRlci5ldmVudHMucGlwZShcbiAgICBmaWx0ZXIoKGV2ZW50KSA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXG4gICk7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHBhcmFtcyQ6IE9ic2VydmFibGU8e1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcbiAgfT4gPSB0aGlzLm5hdmlnYXRpb25FbmRFdmVudCQucGlwZShcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGRlcHJlY2F0aW9uIChodHRwczovL2dpdGh1Yi5jb20vUmVhY3RpdmVYL3J4anMvaXNzdWVzLzQ3NzIpXG4gICAgc3RhcnRXaXRoKHVuZGVmaW5lZCksIC8vIGVtaXQgdmFsdWUgZm9yIGNvbnN1bWVyIHdobyBzdWJzY3JpYmVkIGxhdGVseSBhZnRlciBOYXZpZ2F0aW9uRW5kIGV2ZW50XG4gICAgbWFwKCgpID0+IHRoaXMuZmluZEFsbFBhcmFtKHRoaXMucm91dGVyLnJvdXRlclN0YXRlLnNuYXBzaG90LnJvb3QpKSxcbiAgICBzaGFyZVJlcGxheSh7IHJlZkNvdW50OiB0cnVlLCBidWZmZXJTaXplOiAxIH0pXG4gICk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIGxpc3Qgb2YgYWxsIHBhcmFtZXRlcnMgb2YgdGhlIGZ1bGwgcm91dGUuIFRoaXMgaW5jbHVkZXNcbiAgICogYWN0aXZlIGNoaWxkIHJvdXRlcy5cbiAgICovXG4gIGdldFBhcmFtcygpOiBPYnNlcnZhYmxlPHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0+IHtcbiAgICByZXR1cm4gdGhpcy5wYXJhbXMkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpbmRBbGxQYXJhbShcbiAgICByb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdFxuICApOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICBsZXQgcGFyYW1zID0ge307XG4gICAgcm91dGUuY2hpbGRyZW4uZm9yRWFjaCgoYykgPT5cbiAgICAgIGMucGFyYW1NYXAua2V5cy5mb3JFYWNoKChrZXkpID0+IChwYXJhbXNba2V5XSA9IGMucGFyYW1NYXAuZ2V0KGtleSkpKVxuICAgICk7XG4gICAgcm91dGUuY2hpbGRyZW4uZm9yRWFjaChcbiAgICAgIChjKSA9PiAocGFyYW1zID0geyAuLi5wYXJhbXMsIC4uLnRoaXMuZmluZEFsbFBhcmFtKGMpIH0pXG4gICAgKTtcbiAgICByZXR1cm4gcGFyYW1zO1xuICB9XG59XG4iXX0=