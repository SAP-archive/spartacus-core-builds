import { Injectable, Injector } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { ActivatedRoutesService } from '../../../routing/services/activated-routes.service';
import { DefaultRoutePageMetaResolver } from './default-route-page-meta.resolver';
import * as i0 from "@angular/core";
import * as i1 from "../../../routing/services/activated-routes.service";
/**
 * Resolves the page meta based on the Angular Activated Routes
 */
export class RoutingPageMetaResolver {
    constructor(activatedRoutesService, injector) {
        this.activatedRoutesService = activatedRoutesService;
        this.injector = injector;
        /**
         * Array of activated routes, excluding the special Angular `root` route.
         */
        this.routes$ = this.activatedRoutesService.routes$.pipe(
        // drop the first route - the special `root` route:
        map((routes) => (routes = routes.slice(1, routes.length))));
        /**
         * Array of activated routes together with precalculated extras:
         *
         * - route's page meta resolver
         * - route's absolute string URL
         *
         * In case when there is no page meta resolver configured for a specific route,
         * it inherits its parent's resolver.
         *
         * When there is no page meta resolver configured for the highest parent in the hierarchy,
         * it uses the `DefaultRoutePageMetaResolver`.
         */
        this.routesWithExtras$ = this.routes$.pipe(map((routes) => routes.reduce((results, route) => {
            var _a;
            const parent = results.length
                ? results[results.length - 1]
                : {
                    route: null,
                    resolver: this.injector.get(DefaultRoutePageMetaResolver),
                    url: '',
                };
            const resolver = (_a = this.getResolver(route)) !== null && _a !== void 0 ? _a : parent.resolver; // fallback to parent's resolver
            const urlPart = this.getUrlPart(route);
            const url = parent.url + (urlPart ? `/${urlPart}` : ''); // don't add slash for a route with path '', to avoid double slash ...//...
            return results.concat({ route, resolver, url });
        }, [])), shareReplay({ bufferSize: 1, refCount: true }));
    }
    /**
     * Array of breadcrumbs defined for all the activated routes (from the root route to the leaf route).
     * It emits on every completed routing navigation.
     */
    resolveBreadcrumbs(options) {
        return this.routesWithExtras$.pipe(map((routesWithExtras) => (options === null || options === void 0 ? void 0 : options.includeCurrentRoute) ? routesWithExtras
            : this.trimCurrentRoute(routesWithExtras)), switchMap((routesWithExtras) => routesWithExtras.length
            ? combineLatest(routesWithExtras.map((routeWithExtras) => this.resolveRouteBreadcrumb(routeWithExtras)))
            : of([])), map((breadcrumbArrays) => breadcrumbArrays.flat()));
    }
    /**
     * Returns the instance of the RoutePageMetaResolver configured for the given activated route.
     * Returns null in case there the resolver can't be injected or is undefined.
     *
     * @param route route to resolve
     */
    getResolver(route) {
        const pageMetaConfig = this.getPageMetaConfig(route);
        if (typeof pageMetaConfig !== 'string' && (pageMetaConfig === null || pageMetaConfig === void 0 ? void 0 : pageMetaConfig.resolver)) {
            return this.injector.get(pageMetaConfig.resolver, null);
        }
        return null;
    }
    /**
     * Resolvers breadcrumb for a specific route
     */
    resolveRouteBreadcrumb({ route, resolver, url, }) {
        const breadcrumbResolver = resolver;
        if (typeof breadcrumbResolver.resolveBreadcrumbs === 'function') {
            return breadcrumbResolver.resolveBreadcrumbs({
                route,
                url,
                pageMetaConfig: this.getPageMetaConfig(route),
            });
        }
        return of([]);
    }
    /**
     * By default in breadcrumbs list we don't want to show a link to the current page, so this function
     * trims the last breadcrumb (the breadcrumb of the current route).
     *
     * This function also handles special case when the current route has a configured empty path ('' route).
     * The '' routes are often a _technical_ routes to organize other routes, assign common guards for its children, etc.
     * It shouldn't happen that '' route has a defined breadcrumb config.
     *
     * In that case, we trim not only the last route ('' route), but also its parent route with non-empty path
     * (which likely defines the breadcrumb config).
     */
    trimCurrentRoute(routesWithExtras) {
        // If the last route is '', we trim:
        // - the '' route
        // - all parent '' routes (until we meet route with non-empty path)
        var _a, _b;
        let i = routesWithExtras.length - 1;
        while (((_b = (_a = routesWithExtras[i]) === null || _a === void 0 ? void 0 : _a.route) === null || _b === void 0 ? void 0 : _b.url.length) === 0 && i >= 0) {
            i--;
        }
        // Finally we trim the last route (the one with non-empty path)
        return routesWithExtras.slice(0, i);
    }
    /**
     * Returns the URL path for the given activated route in a string format.
     * (ActivatedRouteSnapshot#url contains an array of `UrlSegment`s, not a string)
     */
    getUrlPart(route) {
        return route.url.map((urlSegment) => urlSegment.path).join('/');
    }
    /**
     * Returns the breadcrumb config placed in the route's `data` configuration.
     */
    getPageMetaConfig(route) {
        var _a, _b;
        // Note: we use `route.routeConfig.data` (not `route.data`) to save us from
        // an edge case bug. In Angular, by design the `data` of ActivatedRoute is inherited
        // from the parent route, if only the child has an empty path ''.
        // But in any case we don't want the page meta configs to be inherited, so we
        // read data from the original `routeConfig` which is static.
        //
        // Note: we may inherit the parent's page meta resolver in case we don't define it,
        // but we don't want to inherit parent's page meta config!
        return (_b = (_a = route === null || route === void 0 ? void 0 : route.routeConfig) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.cxPageMeta;
    }
}
RoutingPageMetaResolver.ɵprov = i0.ɵɵdefineInjectable({ factory: function RoutingPageMetaResolver_Factory() { return new RoutingPageMetaResolver(i0.ɵɵinject(i1.ActivatedRoutesService), i0.ɵɵinject(i0.INJECTOR)); }, token: RoutingPageMetaResolver, providedIn: "root" });
RoutingPageMetaResolver.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
RoutingPageMetaResolver.ctorParameters = () => [
    { type: ActivatedRoutesService },
    { type: Injector }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy1wYWdlLW1ldGEucmVzb2x2ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jbXMvcGFnZS9yb3V0aW5nL3JvdXRpbmctcGFnZS1tZXRhLnJlc29sdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXJELE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxHQUFHLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRTVGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDOzs7QUFxQmxGOztHQUVHO0FBRUgsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUNZLHNCQUE4QyxFQUM5QyxRQUFrQjtRQURsQiwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLGFBQVEsR0FBUixRQUFRLENBQVU7UUFHOUI7O1dBRUc7UUFDZ0IsWUFBTyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLENBQUMsSUFBSTtRQUNuRSxtREFBbUQ7UUFDbkQsR0FBRyxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUMzRCxDQUFDO1FBRUY7Ozs7Ozs7Ozs7O1dBV0c7UUFDZ0Isc0JBQWlCLEdBRWhDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUNuQixHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUNiLE1BQU0sQ0FBQyxNQUFNLENBQW9C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eyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzaGFyZVJlcGxheSwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGVzU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvc2VydmljZXMvYWN0aXZhdGVkLXJvdXRlcy5zZXJ2aWNlJztcbmltcG9ydCB7IEJyZWFkY3J1bWJNZXRhIH0gZnJvbSAnLi4vLi4vbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBEZWZhdWx0Um91dGVQYWdlTWV0YVJlc29sdmVyIH0gZnJvbSAnLi9kZWZhdWx0LXJvdXRlLXBhZ2UtbWV0YS5yZXNvbHZlcic7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90V2l0aFBhZ2VNZXRhLFxuICBSb3V0ZUJyZWFkY3J1bWJSZXNvbHZlcixcbiAgUm91dGVQYWdlTWV0YUNvbmZpZyxcbn0gZnJvbSAnLi9yb3V0ZS1wYWdlLW1ldGEubW9kZWwnO1xuXG4vLyBQUklWQVRFXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlV2l0aEV4dHJhcyB7XG4gIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90V2l0aFBhZ2VNZXRhO1xuICByZXNvbHZlcjogYW55O1xuICB1cmw6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSb3V0aW5nUmVzb2x2ZUJyZWFkY3J1bWJzT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBJbmNsdWRlcyB0aGUgY3VycmVudCByb3V0ZSBpbiB0aGUgYnJlYWRjcnVtYnMuXG4gICAqL1xuICBpbmNsdWRlQ3VycmVudFJvdXRlPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyB0aGUgcGFnZSBtZXRhIGJhc2VkIG9uIHRoZSBBbmd1bGFyIEFjdGl2YXRlZCBSb3V0ZXNcbiAqL1xuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBSb3V0aW5nUGFnZU1ldGFSZXNvbHZlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZXNTZXJ2aWNlOiBBY3RpdmF0ZWRSb3V0ZXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBhY3RpdmF0ZWQgcm91dGVzLCBleGNsdWRpbmcgdGhlIHNwZWNpYWwgQW5ndWxhciBgcm9vdGAgcm91dGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcm91dGVzJCA9IHRoaXMuYWN0aXZhdGVkUm91dGVzU2VydmljZS5yb3V0ZXMkLnBpcGUoXG4gICAgLy8gZHJvcCB0aGUgZmlyc3Qgcm91dGUgLSB0aGUgc3BlY2lhbCBgcm9vdGAgcm91dGU6XG4gICAgbWFwKChyb3V0ZXMpID0+IChyb3V0ZXMgPSByb3V0ZXMuc2xpY2UoMSwgcm91dGVzLmxlbmd0aCkpKVxuICApO1xuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBhY3RpdmF0ZWQgcm91dGVzIHRvZ2V0aGVyIHdpdGggcHJlY2FsY3VsYXRlZCBleHRyYXM6XG4gICAqXG4gICAqIC0gcm91dGUncyBwYWdlIG1ldGEgcmVzb2x2ZXJcbiAgICogLSByb3V0ZSdzIGFic29sdXRlIHN0cmluZyBVUkxcbiAgICpcbiAgICogSW4gY2FzZSB3aGVuIHRoZXJlIGlzIG5vIHBhZ2UgbWV0YSByZXNvbHZlciBjb25maWd1cmVkIGZvciBhIHNwZWNpZmljIHJvdXRlLFxuICAgKiBpdCBpbmhlcml0cyBpdHMgcGFyZW50J3MgcmVzb2x2ZXIuXG4gICAqXG4gICAqIFdoZW4gdGhlcmUgaXMgbm8gcGFnZSBtZXRhIHJlc29sdmVyIGNvbmZpZ3VyZWQgZm9yIHRoZSBoaWdoZXN0IHBhcmVudCBpbiB0aGUgaGllcmFyY2h5LFxuICAgKiBpdCB1c2VzIHRoZSBgRGVmYXVsdFJvdXRlUGFnZU1ldGFSZXNvbHZlcmAuXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcm91dGVzV2l0aEV4dHJhcyQ6IE9ic2VydmFibGU8XG4gICAgUm91dGVXaXRoRXh0cmFzW11cbiAgPiA9IHRoaXMucm91dGVzJC5waXBlKFxuICAgIG1hcCgocm91dGVzKSA9PlxuICAgICAgcm91dGVzLnJlZHVjZTxSb3V0ZVdpdGhFeHRyYXNbXT4oKHJlc3VsdHMsIHJvdXRlKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmVudCA9IHJlc3VsdHMubGVuZ3RoXG4gICAgICAgICAgPyByZXN1bHRzW3Jlc3VsdHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICA6IHtcbiAgICAgICAgICAgICAgcm91dGU6IG51bGwsXG4gICAgICAgICAgICAgIHJlc29sdmVyOiB0aGlzLmluamVjdG9yLmdldChEZWZhdWx0Um91dGVQYWdlTWV0YVJlc29sdmVyKSxcbiAgICAgICAgICAgICAgdXJsOiAnJyxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY29uc3QgcmVzb2x2ZXIgPSB0aGlzLmdldFJlc29sdmVyKHJvdXRlKSA/PyBwYXJlbnQucmVzb2x2ZXI7IC8vIGZhbGxiYWNrIHRvIHBhcmVudCdzIHJlc29sdmVyXG5cbiAgICAgICAgY29uc3QgdXJsUGFydCA9IHRoaXMuZ2V0VXJsUGFydChyb3V0ZSk7XG4gICAgICAgIGNvbnN0IHVybCA9IHBhcmVudC51cmwgKyAodXJsUGFydCA/IGAvJHt1cmxQYXJ0fWAgOiAnJyk7IC8vIGRvbid0IGFkZCBzbGFzaCBmb3IgYSByb3V0ZSB3aXRoIHBhdGggJycsIHRvIGF2b2lkIGRvdWJsZSBzbGFzaCAuLi4vLy4uLlxuXG4gICAgICAgIHJldHVybiByZXN1bHRzLmNvbmNhdCh7IHJvdXRlLCByZXNvbHZlciwgdXJsIH0pO1xuICAgICAgfSwgW10pXG4gICAgKSxcbiAgICBzaGFyZVJlcGxheSh7IGJ1ZmZlclNpemU6IDEsIHJlZkNvdW50OiB0cnVlIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqIEFycmF5IG9mIGJyZWFkY3J1bWJzIGRlZmluZWQgZm9yIGFsbCB0aGUgYWN0aXZhdGVkIHJvdXRlcyAoZnJvbSB0aGUgcm9vdCByb3V0ZSB0byB0aGUgbGVhZiByb3V0ZSkuXG4gICAqIEl0IGVtaXRzIG9uIGV2ZXJ5IGNvbXBsZXRlZCByb3V0aW5nIG5hdmlnYXRpb24uXG4gICAqL1xuICByZXNvbHZlQnJlYWRjcnVtYnMoXG4gICAgb3B0aW9ucz86IFJvdXRpbmdSZXNvbHZlQnJlYWRjcnVtYnNPcHRpb25zXG4gICk6IE9ic2VydmFibGU8QnJlYWRjcnVtYk1ldGFbXT4ge1xuICAgIHJldHVybiB0aGlzLnJvdXRlc1dpdGhFeHRyYXMkLnBpcGUoXG4gICAgICBtYXAoKHJvdXRlc1dpdGhFeHRyYXMpID0+XG4gICAgICAgIG9wdGlvbnM/LmluY2x1ZGVDdXJyZW50Um91dGVcbiAgICAgICAgICA/IHJvdXRlc1dpdGhFeHRyYXNcbiAgICAgICAgICA6IHRoaXMudHJpbUN1cnJlbnRSb3V0ZShyb3V0ZXNXaXRoRXh0cmFzKVxuICAgICAgKSxcbiAgICAgIHN3aXRjaE1hcCgocm91dGVzV2l0aEV4dHJhcykgPT5cbiAgICAgICAgcm91dGVzV2l0aEV4dHJhcy5sZW5ndGhcbiAgICAgICAgICA/IGNvbWJpbmVMYXRlc3QoXG4gICAgICAgICAgICAgIHJvdXRlc1dpdGhFeHRyYXMubWFwKChyb3V0ZVdpdGhFeHRyYXMpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNvbHZlUm91dGVCcmVhZGNydW1iKHJvdXRlV2l0aEV4dHJhcylcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogb2YoW10pXG4gICAgICApLFxuICAgICAgbWFwKChicmVhZGNydW1iQXJyYXlzKSA9PiBicmVhZGNydW1iQXJyYXlzLmZsYXQoKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluc3RhbmNlIG9mIHRoZSBSb3V0ZVBhZ2VNZXRhUmVzb2x2ZXIgY29uZmlndXJlZCBmb3IgdGhlIGdpdmVuIGFjdGl2YXRlZCByb3V0ZS5cbiAgICogUmV0dXJucyBudWxsIGluIGNhc2UgdGhlcmUgdGhlIHJlc29sdmVyIGNhbid0IGJlIGluamVjdGVkIG9yIGlzIHVuZGVmaW5lZC5cbiAgICpcbiAgICogQHBhcmFtIHJvdXRlIHJvdXRlIHRvIHJlc29sdmVcbiAgICovXG4gIHByb3RlY3RlZCBnZXRSZXNvbHZlcihyb3V0ZTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdFdpdGhQYWdlTWV0YSk6IGFueSB7XG4gICAgY29uc3QgcGFnZU1ldGFDb25maWcgPSB0aGlzLmdldFBhZ2VNZXRhQ29uZmlnKHJvdXRlKTtcblxuICAgIGlmICh0eXBlb2YgcGFnZU1ldGFDb25maWcgIT09ICdzdHJpbmcnICYmIHBhZ2VNZXRhQ29uZmlnPy5yZXNvbHZlcikge1xuICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0KHBhZ2VNZXRhQ29uZmlnLnJlc29sdmVyLCBudWxsKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICAvKipcbiAgICogUmVzb2x2ZXJzIGJyZWFkY3J1bWIgZm9yIGEgc3BlY2lmaWMgcm91dGVcbiAgICovXG4gIHByb3RlY3RlZCByZXNvbHZlUm91dGVCcmVhZGNydW1iKHtcbiAgICByb3V0ZSxcbiAgICByZXNvbHZlcixcbiAgICB1cmwsXG4gIH06IFJvdXRlV2l0aEV4dHJhcyk6IE9ic2VydmFibGU8QnJlYWRjcnVtYk1ldGFbXT4ge1xuICAgIGNvbnN0IGJyZWFkY3J1bWJSZXNvbHZlciA9IHJlc29sdmVyIGFzIFJvdXRlQnJlYWRjcnVtYlJlc29sdmVyO1xuXG4gICAgaWYgKHR5cGVvZiBicmVhZGNydW1iUmVzb2x2ZXIucmVzb2x2ZUJyZWFkY3J1bWJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gYnJlYWRjcnVtYlJlc29sdmVyLnJlc29sdmVCcmVhZGNydW1icyh7XG4gICAgICAgIHJvdXRlLFxuICAgICAgICB1cmwsXG4gICAgICAgIHBhZ2VNZXRhQ29uZmlnOiB0aGlzLmdldFBhZ2VNZXRhQ29uZmlnKHJvdXRlKSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gb2YoW10pO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ5IGRlZmF1bHQgaW4gYnJlYWRjcnVtYnMgbGlzdCB3ZSBkb24ndCB3YW50IHRvIHNob3cgYSBsaW5rIHRvIHRoZSBjdXJyZW50IHBhZ2UsIHNvIHRoaXMgZnVuY3Rpb25cbiAgICogdHJpbXMgdGhlIGxhc3QgYnJlYWRjcnVtYiAodGhlIGJyZWFkY3J1bWIgb2YgdGhlIGN1cnJlbnQgcm91dGUpLlxuICAgKlxuICAgKiBUaGlzIGZ1bmN0aW9uIGFsc28gaGFuZGxlcyBzcGVjaWFsIGNhc2Ugd2hlbiB0aGUgY3VycmVudCByb3V0ZSBoYXMgYSBjb25maWd1cmVkIGVtcHR5IHBhdGggKCcnIHJvdXRlKS5cbiAgICogVGhlICcnIHJvdXRlcyBhcmUgb2Z0ZW4gYSBfdGVjaG5pY2FsXyByb3V0ZXMgdG8gb3JnYW5pemUgb3RoZXIgcm91dGVzLCBhc3NpZ24gY29tbW9uIGd1YXJkcyBmb3IgaXRzIGNoaWxkcmVuLCBldGMuXG4gICAqIEl0IHNob3VsZG4ndCBoYXBwZW4gdGhhdCAnJyByb3V0ZSBoYXMgYSBkZWZpbmVkIGJyZWFkY3J1bWIgY29uZmlnLlxuICAgKlxuICAgKiBJbiB0aGF0IGNhc2UsIHdlIHRyaW0gbm90IG9ubHkgdGhlIGxhc3Qgcm91dGUgKCcnIHJvdXRlKSwgYnV0IGFsc28gaXRzIHBhcmVudCByb3V0ZSB3aXRoIG5vbi1lbXB0eSBwYXRoXG4gICAqICh3aGljaCBsaWtlbHkgZGVmaW5lcyB0aGUgYnJlYWRjcnVtYiBjb25maWcpLlxuICAgKi9cbiAgcHJpdmF0ZSB0cmltQ3VycmVudFJvdXRlKFxuICAgIHJvdXRlc1dpdGhFeHRyYXM6IFJvdXRlV2l0aEV4dHJhc1tdXG4gICk6IFJvdXRlV2l0aEV4dHJhc1tdIHtcbiAgICAvLyBJZiB0aGUgbGFzdCByb3V0ZSBpcyAnJywgd2UgdHJpbTpcbiAgICAvLyAtIHRoZSAnJyByb3V0ZVxuICAgIC8vIC0gYWxsIHBhcmVudCAnJyByb3V0ZXMgKHVudGlsIHdlIG1lZXQgcm91dGUgd2l0aCBub24tZW1wdHkgcGF0aClcblxuICAgIGxldCBpID0gcm91dGVzV2l0aEV4dHJhcy5sZW5ndGggLSAxO1xuICAgIHdoaWxlIChyb3V0ZXNXaXRoRXh0cmFzW2ldPy5yb3V0ZT8udXJsLmxlbmd0aCA9PT0gMCAmJiBpID49IDApIHtcbiAgICAgIGktLTtcbiAgICB9XG5cbiAgICAvLyBGaW5hbGx5IHdlIHRyaW0gdGhlIGxhc3Qgcm91dGUgKHRoZSBvbmUgd2l0aCBub24tZW1wdHkgcGF0aClcbiAgICByZXR1cm4gcm91dGVzV2l0aEV4dHJhcy5zbGljZSgwLCBpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBVUkwgcGF0aCBmb3IgdGhlIGdpdmVuIGFjdGl2YXRlZCByb3V0ZSBpbiBhIHN0cmluZyBmb3JtYXQuXG4gICAqIChBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90I3VybCBjb250YWlucyBhbiBhcnJheSBvZiBgVXJsU2VnbWVudGBzLCBub3QgYSBzdHJpbmcpXG4gICAqL1xuICBwcml2YXRlIGdldFVybFBhcnQocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpOiBzdHJpbmcge1xuICAgIHJldHVybiByb3V0ZS51cmwubWFwKCh1cmxTZWdtZW50KSA9PiB1cmxTZWdtZW50LnBhdGgpLmpvaW4oJy8nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBicmVhZGNydW1iIGNvbmZpZyBwbGFjZWQgaW4gdGhlIHJvdXRlJ3MgYGRhdGFgIGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0UGFnZU1ldGFDb25maWcoXG4gICAgcm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3RXaXRoUGFnZU1ldGFcbiAgKTogUm91dGVQYWdlTWV0YUNvbmZpZyB7XG4gICAgLy8gTm90ZTogd2UgdXNlIGByb3V0ZS5yb3V0ZUNvbmZpZy5kYXRhYCAobm90IGByb3V0ZS5kYXRhYCkgdG8gc2F2ZSB1cyBmcm9tXG4gICAgLy8gYW4gZWRnZSBjYXNlIGJ1Zy4gSW4gQW5ndWxhciwgYnkgZGVzaWduIHRoZSBgZGF0YWAgb2YgQWN0aXZhdGVkUm91dGUgaXMgaW5oZXJpdGVkXG4gICAgLy8gZnJvbSB0aGUgcGFyZW50IHJvdXRlLCBpZiBvbmx5IHRoZSBjaGlsZCBoYXMgYW4gZW1wdHkgcGF0aCAnJy5cbiAgICAvLyBCdXQgaW4gYW55IGNhc2Ugd2UgZG9uJ3Qgd2FudCB0aGUgcGFnZSBtZXRhIGNvbmZpZ3MgdG8gYmUgaW5oZXJpdGVkLCBzbyB3ZVxuICAgIC8vIHJlYWQgZGF0YSBmcm9tIHRoZSBvcmlnaW5hbCBgcm91dGVDb25maWdgIHdoaWNoIGlzIHN0YXRpYy5cbiAgICAvL1xuICAgIC8vIE5vdGU6IHdlIG1heSBpbmhlcml0IHRoZSBwYXJlbnQncyBwYWdlIG1ldGEgcmVzb2x2ZXIgaW4gY2FzZSB3ZSBkb24ndCBkZWZpbmUgaXQsXG4gICAgLy8gYnV0IHdlIGRvbid0IHdhbnQgdG8gaW5oZXJpdCBwYXJlbnQncyBwYWdlIG1ldGEgY29uZmlnIVxuICAgIHJldHVybiByb3V0ZT8ucm91dGVDb25maWc/LmRhdGE/LmN4UGFnZU1ldGE7XG4gIH1cbn1cbiJdfQ==