/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ServerConfig } from '../../config/server-config/server-config';
import { RoutesConfigLoader } from './routes-config-loader';
export class ConfigurableRoutesService {
    /**
     * @param {?} config
     * @param {?} injector
     * @param {?} routesConfigLoader
     */
    constructor(config, injector, routesConfigLoader) {
        this.config = config;
        this.injector = injector;
        this.routesConfigLoader = routesConfigLoader;
        this.currentLanguageCode = 'en'; // TODO: hardcoded! should be removed when more languages are supported by localized routes
        this.initCalled = false; // guard not to call init() more than once
    }
    /**
     * @private
     * @return {?}
     */
    get currentRoutesTranslations() {
        return (/** @type {?} */ (this.allRoutesTranslations[this.currentLanguageCode]));
    }
    // guard not to call init() more than once
    /**
     * Initializes service with given translations and translates all existing Routes in the Router.
     * @return {?}
     */
    init() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!this.initCalled) {
                this.initCalled = true;
                yield this.routesConfigLoader.load();
                this.allRoutesTranslations = this.routesConfigLoader.routesConfig.translations;
                this.translateRouterConfig();
            }
        });
    }
    /**
     * @private
     * @return {?}
     */
    translateRouterConfig() {
        // Router could not be injected in constructor due to cyclic dependency with APP_INITIALIZER:
        /** @type {?} */
        const router = this.injector.get(Router);
        /** @type {?} */
        let translatedRoutes = this.translateRoutes(router.config, this.currentRoutesTranslations);
        translatedRoutes = this.moveWildcardRouteToEnd(translatedRoutes);
        router.resetConfig(translatedRoutes);
    }
    /**
     * Move the Route with double asterisk (**) to the end of the list.
     * If there are more Routes with **, only the first will be left and other removed.
     *
     * Reason: When some custom Routes are injected after Spartacus' ones,
     *          then the Spartacus' wildcard Route needs being moved to the end -
     *          even after custom Routes - to make custom Routes discoverable.
     *          More than one wildcard Route is a sign of bad config, so redundant copies are removed.
     * @private
     * @param {?} routes
     * @return {?}
     */
    moveWildcardRouteToEnd(routes) {
        /** @type {?} */
        const firstWildcardRoute = routes.find(route => route.path === '**');
        return firstWildcardRoute
            ? routes.filter(route => route.path !== '**').concat(firstWildcardRoute)
            : routes;
    }
    /**
     * Returns the list of routes translations for given list of nested routes
     * using given object of routes translations.
     * @param {?} nestedRouteNames
     * @param {?=} routesTranslations
     * @return {?}
     */
    getNestedRoutesTranslations(nestedRouteNames, routesTranslations = this.currentRoutesTranslations) {
        return this.getNestedRoutesTranslationsRecursive(nestedRouteNames, routesTranslations, []);
    }
    /**
     * @private
     * @param {?} nestedRoutesNames
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    getNestedRoutesTranslationsRecursive(nestedRoutesNames, routesTranslations, accResult) {
        if (!nestedRoutesNames.length) {
            return accResult;
        }
        const [routeName, ...remainingRouteNames] = nestedRoutesNames;
        /** @type {?} */
        const translation = this.getRouteTranslation(routeName, routesTranslations);
        if (!translation) {
            return null;
        }
        if (remainingRouteNames.length) {
            /** @type {?} */
            const childrenTranslations = this.getChildrenRoutesTranslations(routeName, routesTranslations);
            if (!childrenTranslations) {
                this.warn(`No children routes translations were configured for page '${routeName}' in language '${this.currentLanguageCode}'!`);
                return null;
            }
            return this.getNestedRoutesTranslationsRecursive(remainingRouteNames, childrenTranslations, accResult.concat(translation));
        }
        return accResult.concat(translation);
    }
    /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    getChildrenRoutesTranslations(routeName, routesTranslations) {
        /** @type {?} */
        const routeTranslation = this.getRouteTranslation(routeName, routesTranslations);
        return routeTranslation && routeTranslation.children;
    }
    /**
     * @private
     * @param {?} routes
     * @param {?} routesTranslations
     * @return {?}
     */
    translateRoutes(routes, routesTranslations) {
        /** @type {?} */
        const result = [];
        routes.forEach(route => {
            /** @type {?} */
            const translatedRouteAliases = this.translateRoute(route, routesTranslations);
            if (route.children && route.children.length) {
                /** @type {?} */
                const translatedChildrenRoutes = this.translateChildrenRoutes(route, routesTranslations);
                translatedRouteAliases.forEach(translatedRouteAlias => {
                    translatedRouteAlias.children = translatedChildrenRoutes;
                });
            }
            result.push(...translatedRouteAliases);
        });
        return result;
    }
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    translateChildrenRoutes(route, routesTranslations) {
        if (this.isConfigurable(route, 'cxPath')) {
            /** @type {?} */
            const routeName = this.getConfigurable(route, 'cxPath');
            /** @type {?} */
            const childrenTranslations = this.getChildrenRoutesTranslations(routeName, routesTranslations);
            if (childrenTranslations === undefined) {
                this.warn(`Could not translate children routes of route '${routeName}'`, route, `due to undefined 'children' key for '${routeName}' route in routes translations`, routesTranslations);
                return [];
            }
            // null switches off the children routes:
            if (childrenTranslations === null) {
                return [];
            }
            return this.translateRoutes(route.children, childrenTranslations);
        }
        return route.children;
    }
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    translateRoute(route, routesTranslations) {
        if (this.isConfigurable(route, 'cxPath')) {
            // we assume that 'path' and 'redirectTo' cannot be both configured for one route
            if (this.isConfigurable(route, 'cxRedirectTo')) {
                this.warn(`A path should not have set both "cxPath" and "cxRedirectTo" properties! Route: '${route}`);
            }
            return this.translateRoutePath(route, routesTranslations);
        }
        if (this.isConfigurable(route, 'cxRedirectTo')) {
            return this.translateRouteRedirectTo(route, routesTranslations);
        }
        return [route]; // if nothing is configurable, just pass the original route
    }
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    isConfigurable(route, key) {
        return !!this.getConfigurable(route, key);
    }
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @return {?}
     */
    getConfigurable(route, key) {
        return route.data && route.data[key];
    }
    /**
     * @private
     * @param {?} route
     * @param {?} routesTranslations
     * @return {?}
     */
    translateRoutePath(route, routesTranslations) {
        return this.getTranslatedPaths(route, 'cxPath', routesTranslations).map(translatedPath => {
            return Object.assign({}, route, { path: translatedPath });
        });
    }
    /**
     * @private
     * @param {?} route
     * @param {?} translations
     * @return {?}
     */
    translateRouteRedirectTo(route, translations) {
        /** @type {?} */
        const translatedPaths = this.getTranslatedPaths(route, 'cxRedirectTo', translations);
        return translatedPaths.length
            ? [Object.assign({}, route, { redirectTo: translatedPaths[0] })] // take the first path from list by convention
            : [];
    }
    /**
     * @private
     * @param {?} routeName
     * @param {?} routesTranslations
     * @return {?}
     */
    getRouteTranslation(routeName, routesTranslations) {
        /** @type {?} */
        const result = routesTranslations && routesTranslations[routeName];
        if (!routesTranslations || result === undefined) {
            this.warn(`No route translation was configured for page '${routeName}' in language '${this.currentLanguageCode}'!`);
        }
        return result;
    }
    /**
     * @private
     * @param {?} route
     * @param {?} key
     * @param {?} routesTranslations
     * @return {?}
     */
    getTranslatedPaths(route, key, routesTranslations) {
        /** @type {?} */
        const routeName = this.getConfigurable(route, key);
        /** @type {?} */
        const translation = this.getRouteTranslation(routeName, routesTranslations);
        if (translation === undefined) {
            this.warn(`Could not translate key '${key}' of route '${routeName}'`, route, `due to undefined key '${routeName}' in routes translations`, routesTranslations);
            return [];
        }
        if (translation && translation.paths === undefined) {
            this.warn(`Could not translate key '${key}' of route '${routeName}'`, route, `due to undefined 'paths' key for '${routeName}' route in routes translations`, routesTranslations);
            return [];
        }
        // translation or translation.paths can be null - which means switching off the route
        return (translation && translation.paths) || [];
    }
    /**
     * @private
     * @param {...?} args
     * @return {?}
     */
    warn(...args) {
        if (!this.config.production) {
            console.warn(...args);
        }
    }
}
ConfigurableRoutesService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ConfigurableRoutesService.ctorParameters = () => [
    { type: ServerConfig },
    { type: Injector },
    { type: RoutesConfigLoader }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.currentLanguageCode;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.allRoutesTranslations;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.initCalled;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    ConfigurableRoutesService.prototype.routesConfigLoader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQVUsTUFBTSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBTXhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSzVELE1BQU0sT0FBTyx5QkFBeUI7Ozs7OztJQUNwQyxZQUNVLE1BQW9CLEVBQ3BCLFFBQWtCLEVBQ2xCLGtCQUFzQztRQUZ0QyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUcvQix3QkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQywyRkFBMkY7UUFVaEksZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLDBDQUEwQztJQVpuRSxDQUFDOzs7OztJQU1KLElBQVkseUJBQXlCO1FBQ25DLE9BQU8sbUJBQUEsSUFBSSxDQUFDLHFCQUFxQixDQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQ3pCLEVBQXNCLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBT0ssSUFBSTs7WUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFD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QUFJLENBQUMsSUFBSSxDQUNQLDRCQUE0QixHQUFHLGVBQWUsU0FBUyxHQUFHLEVBQzFELEtBQUssRUFDTCxxQ0FBcUMsU0FBUyxnQ0FBZ0MsRUFDOUUsa0JBQWtCLENBQ25CLENBQUM7WUFDRixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQscUZBQXFGO1FBQ3JGLE9BQU8sQ0FBQyxXQUFXLElBQUksV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNsRCxDQUFDOzs7Ozs7SUFFTyxJQUFJLENBQUMsR0FBRyxJQUFJO1FBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUMzQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7U0FDdkI7SUFDSCxDQUFDOzs7WUF6UkYsVUFBVTs7OztZQVZGLFlBQVk7WUFGQSxRQUFRO1lBUXBCLGtCQUFrQjs7Ozs7OztJQVl6Qix3REFBNEM7Ozs7O0lBRTVDLDBEQUE0RDs7Ozs7SUFRNUQsK0NBQTJCOzs7OztJQWZ6QiwyQ0FBNEI7Ozs7O0lBQzVCLDZDQUEwQjs7Ozs7SUFDMUIsdURBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyLCBSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBTZXJ2ZXJDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcvc2VydmVyLWNvbmZpZy9zZXJ2ZXItY29uZmlnJztcbmltcG9ydCB7XG4gIFJvdXRlc1RyYW5zbGF0aW9ucyxcbiAgUm91dGVUcmFuc2xhdGlvbixcbiAgUm91dGVzQ29uZmlnLFxufSBmcm9tICcuL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgUm91dGVzQ29uZmlnTG9hZGVyIH0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnLWxvYWRlcic7XG5cbnR5cGUgQ29uZmlndXJhYmxlUm91dGVLZXkgPSAnY3hQYXRoJyB8ICdjeFJlZGlyZWN0VG8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29uZmlndXJhYmxlUm91dGVzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBTZXJ2ZXJDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSByb3V0ZXNDb25maWdMb2FkZXI6IFJvdXRlc0NvbmZpZ0xvYWRlclxuICApIHt9XG5cbiAgcHJpdmF0ZSByZWFkb25seSBjdXJyZW50TGFuZ3VhZ2VDb2RlID0gJ2VuJzsgLy8gVE9ETzogaGFyZGNvZGVkISBzaG91bGQgYmUgcmVtb3ZlZCB3aGVuIG1vcmUgbGFuZ3VhZ2VzIGFyZSBzdXBwb3J0ZWQgYnkgbG9jYWxpemVkIHJvdXRlc1xuXG4gIHByaXZhdGUgYWxsUm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNDb25maWdbJ3RyYW5zbGF0aW9ucyddO1xuXG4gIHByaXZhdGUgZ2V0IGN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnMoKTogUm91dGVzVHJhbnNsYXRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5hbGxSb3V0ZXNUcmFuc2xhdGlvbnNbXG4gICAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZUNvZGVcbiAgICBdIGFzIFJvdXRlc1RyYW5zbGF0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgaW5pdENhbGxlZCA9IGZhbHNlOyAvLyBndWFyZCBub3QgdG8gY2FsbCBpbml0KCkgbW9yZSB0aGFuIG9uY2VcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgc2VydmljZSB3aXRoIGdpdmVuIHRyYW5zbGF0aW9ucyBhbmQgdHJhbnNsYXRlcyBhbGwgZXhpc3RpbmcgUm91dGVzIGluIHRoZSBSb3V0ZXIuXG4gICAqL1xuICBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgIGlmICghdGhpcy5pbml0Q2FsbGVkKSB7XG4gICAgICB0aGlzLmluaXRDYWxsZWQgPSB0cnVlO1xuICAgICAgYXdhaXQgdGhpcy5yb3V0ZXNDb25maWdMb2FkZXIubG9hZCgpO1xuICAgICAgdGhpcy5hbGxSb3V0ZXNUcmFuc2xhdGlvbnMgPSB0aGlzLnJvdXRlc0NvbmZpZ0xvYWRlci5yb3V0ZXNDb25maWcudHJhbnNsYXRpb25zO1xuICAgICAgdGhpcy50cmFuc2xhdGVSb3V0ZXJDb25maWcoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlckNvbmZpZygpIHtcbiAgICAvLyBSb3V0ZXIgY291bGQgbm90IGJlIGluamVjdGVkIGluIGNvbnN0cnVjdG9yIGR1ZSB0byBjeWNsaWMgZGVwZW5kZW5jeSB3aXRoIEFQUF9JTklUSUFMSVpFUjpcbiAgICBjb25zdCByb3V0ZXIgPSB0aGlzLmluamVjdG9yLmdldChSb3V0ZXIpO1xuXG4gICAgbGV0IHRyYW5zbGF0ZWRSb3V0ZXMgPSB0aGlzLnRyYW5zbGF0ZVJvdXRlcyhcbiAgICAgIHJvdXRlci5jb25maWcsXG4gICAgICB0aGlzLmN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICApO1xuICAgIHRyYW5zbGF0ZWRSb3V0ZXMgPSB0aGlzLm1vdmVXaWxkY2FyZFJvdXRlVG9FbmQodHJhbnNsYXRlZFJvdXRlcyk7XG5cbiAgICByb3V0ZXIucmVzZXRDb25maWcodHJhbnNsYXRlZFJvdXRlcyk7XG4gIH1cblxuICAvKipcbiAgICogTW92ZSB0aGUgUm91dGUgd2l0aCBkb3VibGUgYXN0ZXJpc2sgKCoqKSB0byB0aGUgZW5kIG9mIHRoZSBsaXN0LlxuICAgKiBJZiB0aGVyZSBhcmUgbW9yZSBSb3V0ZXMgd2l0aCAqKiwgb25seSB0aGUgZmlyc3Qgd2lsbCBiZSBsZWZ0IGFuZCBvdGhlciByZW1vdmVkLlxuICAgKlxuICAgKiBSZWFzb246IFdoZW4gc29tZSBjdXN0b20gUm91dGVzIGFyZSBpbmplY3RlZCBhZnRlciBTcGFydGFjdXMnIG9uZXMsXG4gICAqICAgICAgICAgIHRoZW4gdGhlIFNwYXJ0YWN1cycgd2lsZGNhcmQgUm91dGUgbmVlZHMgYmVpbmcgbW92ZWQgdG8gdGhlIGVuZCAtXG4gICAqICAgICAgICAgIGV2ZW4gYWZ0ZXIgY3VzdG9tIFJvdXRlcyAtIHRvIG1ha2UgY3VzdG9tIFJvdXRlcyBkaXNjb3ZlcmFibGUuXG4gICAqICAgICAgICAgIE1vcmUgdGhhbiBvbmUgd2lsZGNhcmQgUm91dGUgaXMgYSBzaWduIG9mIGJhZCBjb25maWcsIHNvIHJlZHVuZGFudCBjb3BpZXMgYXJlIHJlbW92ZWQuXG4gICAqL1xuICBwcml2YXRlIG1vdmVXaWxkY2FyZFJvdXRlVG9FbmQocm91dGVzOiBSb3V0ZXMpOiBSb3V0ZXMge1xuICAgIGNvbnN0IGZpcnN0V2lsZGNhcmRSb3V0ZSA9IHJvdXRlcy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdGggPT09ICcqKicpO1xuICAgIHJldHVybiBmaXJzdFdpbGRjYXJkUm91dGVcbiAgICAgID8gcm91dGVzLmZpbHRlcihyb3V0ZSA9PiByb3V0ZS5wYXRoICE9PSAnKionKS5jb25jYXQoZmlyc3RXaWxkY2FyZFJvdXRlKVxuICAgICAgOiByb3V0ZXM7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbGlzdCBvZiByb3V0ZXMgdHJhbnNsYXRpb25zIGZvciBnaXZlbiBsaXN0IG9mIG5lc3RlZCByb3V0ZXNcbiAgICogdXNpbmcgZ2l2ZW4gb2JqZWN0IG9mIHJvdXRlcyB0cmFuc2xhdGlvbnMuXG4gICAqL1xuICBnZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnMoXG4gICAgbmVzdGVkUm91dGVOYW1lczogc3RyaW5nW10sXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnMgPSB0aGlzLmN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVUcmFuc2xhdGlvbltdIHtcbiAgICByZXR1cm4gdGhpcy5nZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnNSZWN1cnNpdmUoXG4gICAgICBuZXN0ZWRSb3V0ZU5hbWVzLFxuICAgICAgcm91dGVzVHJhbnNsYXRpb25zLFxuICAgICAgW11cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnNSZWN1cnNpdmUoXG4gICAgbmVzdGVkUm91dGVzTmFtZXM6IHN0cmluZ1tdLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zLFxuICAgIGFjY1Jlc3VsdDogUm91dGVUcmFuc2xhdGlvbltdXG4gICk6IFJvdXRlVHJhbnNsYXRpb25bXSB7XG4gICAgaWYgKCFuZXN0ZWRSb3V0ZXNOYW1lcy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBhY2NSZXN1bHQ7XG4gICAgfVxuICAgIGNvbnN0IFtyb3V0ZU5hbWUsIC4uLnJlbWFpbmluZ1JvdXRlTmFtZXNdID0gbmVzdGVkUm91dGVzTmFtZXM7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdldFJvdXRlVHJhbnNsYXRpb24ocm91dGVOYW1lLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIGlmICghdHJhbnNsYXRpb24pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChyZW1haW5pbmdSb3V0ZU5hbWVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgY2hpbGRyZW5UcmFuc2xhdGlvbnMgPSB0aGlzLmdldENoaWxkcmVuUm91dGVzVHJhbnNsYXRpb25zKFxuICAgICAgICByb3V0ZU5hbWUsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIGlmICghY2hpbGRyZW5UcmFuc2xhdGlvbnMpIHtcbiAgICAgICAgdGhpcy53YXJuKFxuICAgICAgICAgIGBObyBjaGlsZHJlbiByb3V0ZXMgdHJhbnNsYXRpb25zIHdlcmUgY29uZmlndXJlZCBmb3IgcGFnZSAnJHtyb3V0ZU5hbWV9JyBpbiBsYW5ndWFnZSAnJHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlQ29kZVxuICAgICAgICAgIH0nIWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmdldE5lc3RlZFJvdXRlc1RyYW5zbGF0aW9uc1JlY3Vyc2l2ZShcbiAgICAgICAgcmVtYWluaW5nUm91dGVOYW1lcyxcbiAgICAgICAgY2hpbGRyZW5UcmFuc2xhdGlvbnMsXG4gICAgICAgIGFjY1Jlc3VsdC5jb25jYXQodHJhbnNsYXRpb24pXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gYWNjUmVzdWx0LmNvbmNhdCh0cmFuc2xhdGlvbik7XG4gIH1cblxuICBwcml2YXRlIGdldENoaWxkcmVuUm91dGVzVHJhbnNsYXRpb25zKFxuICAgIHJvdXRlTmFtZTogc3RyaW5nLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlc1RyYW5zbGF0aW9ucyB7XG4gICAgY29uc3Qgcm91dGVUcmFuc2xhdGlvbiA9IHRoaXMuZ2V0Um91dGVUcmFuc2xhdGlvbihcbiAgICAgIHJvdXRlTmFtZSxcbiAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICk7XG4gICAgcmV0dXJuIHJvdXRlVHJhbnNsYXRpb24gJiYgcm91dGVUcmFuc2xhdGlvbi5jaGlsZHJlbjtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGVzKFxuICAgIHJvdXRlczogUm91dGVzLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgcm91dGVzLmZvckVhY2gocm91dGUgPT4ge1xuICAgICAgY29uc3QgdHJhbnNsYXRlZFJvdXRlQWxpYXNlcyA9IHRoaXMudHJhbnNsYXRlUm91dGUoXG4gICAgICAgIHJvdXRlLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG4gICAgICBpZiAocm91dGUuY2hpbGRyZW4gJiYgcm91dGUuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zbGF0ZWRDaGlsZHJlblJvdXRlcyA9IHRoaXMudHJhbnNsYXRlQ2hpbGRyZW5Sb3V0ZXMoXG4gICAgICAgICAgcm91dGUsXG4gICAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHRyYW5zbGF0ZWRSb3V0ZUFsaWFzZXMuZm9yRWFjaCh0cmFuc2xhdGVkUm91dGVBbGlhcyA9PiB7XG4gICAgICAgICAgdHJhbnNsYXRlZFJvdXRlQWxpYXMuY2hpbGRyZW4gPSB0cmFuc2xhdGVkQ2hpbGRyZW5Sb3V0ZXM7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcmVzdWx0LnB1c2goLi4udHJhbnNsYXRlZFJvdXRlQWxpYXNlcyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlQ2hpbGRyZW5Sb3V0ZXMoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlcyB7XG4gICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFBhdGgnKSkge1xuICAgICAgY29uc3Qgcm91dGVOYW1lID0gdGhpcy5nZXRDb25maWd1cmFibGUocm91dGUsICdjeFBhdGgnKTtcbiAgICAgIGNvbnN0IGNoaWxkcmVuVHJhbnNsYXRpb25zID0gdGhpcy5nZXRDaGlsZHJlblJvdXRlc1RyYW5zbGF0aW9ucyhcbiAgICAgICAgcm91dGVOYW1lLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG5cbiAgICAgIGlmIChjaGlsZHJlblRyYW5zbGF0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgQ291bGQgbm90IHRyYW5zbGF0ZSBjaGlsZHJlbiByb3V0ZXMgb2Ygcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkICdjaGlsZHJlbicga2V5IGZvciAnJHtyb3V0ZU5hbWV9JyByb3V0ZSBpbiByb3V0ZXMgdHJhbnNsYXRpb25zYCxcbiAgICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgfVxuXG4gICAgICAvLyBudWxsIHN3aXRjaGVzIG9mZiB0aGUgY2hpbGRyZW4gcm91dGVzOlxuICAgICAgaWYgKGNoaWxkcmVuVHJhbnNsYXRpb25zID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVJvdXRlcyhyb3V0ZS5jaGlsZHJlbiwgY2hpbGRyZW5UcmFuc2xhdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gcm91dGUuY2hpbGRyZW47XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlKFxuICAgIHJvdXRlOiBSb3V0ZSxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZXMge1xuICAgIGlmICh0aGlzLmlzQ29uZmlndXJhYmxlKHJvdXRlLCAnY3hQYXRoJykpIHtcbiAgICAgIC8vIHdlIGFzc3VtZSB0aGF0ICdwYXRoJyBhbmQgJ3JlZGlyZWN0VG8nIGNhbm5vdCBiZSBib3RoIGNvbmZpZ3VyZWQgZm9yIG9uZSByb3V0ZVxuICAgICAgaWYgKHRoaXMuaXNDb25maWd1cmFibGUocm91dGUsICdjeFJlZGlyZWN0VG8nKSkge1xuICAgICAgICB0aGlzLndhcm4oXG4gICAgICAgICAgYEEgcGF0aCBzaG91bGQgbm90IGhhdmUgc2V0IGJvdGggXCJjeFBhdGhcIiBhbmQgXCJjeFJlZGlyZWN0VG9cIiBwcm9wZXJ0aWVzISBSb3V0ZTogJyR7cm91dGV9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMudHJhbnNsYXRlUm91dGVQYXRoKHJvdXRlLCByb3V0ZXNUcmFuc2xhdGlvbnMpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzQ29uZmlndXJhYmxlKHJvdXRlLCAnY3hSZWRpcmVjdFRvJykpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVJvdXRlUmVkaXJlY3RUbyhyb3V0ZSwgcm91dGVzVHJhbnNsYXRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gW3JvdXRlXTsgLy8gaWYgbm90aGluZyBpcyBjb25maWd1cmFibGUsIGp1c3QgcGFzcyB0aGUgb3JpZ2luYWwgcm91dGVcbiAgfVxuXG4gIHByaXZhdGUgaXNDb25maWd1cmFibGUocm91dGU6IFJvdXRlLCBrZXk6IENvbmZpZ3VyYWJsZVJvdXRlS2V5KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5nZXRDb25maWd1cmFibGUocm91dGUsIGtleSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbmZpZ3VyYWJsZShyb3V0ZTogUm91dGUsIGtleTogQ29uZmlndXJhYmxlUm91dGVLZXkpOiBzdHJpbmcge1xuICAgIHJldHVybiByb3V0ZS5kYXRhICYmIHJvdXRlLmRhdGFba2V5XTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGVQYXRoKFxuICAgIHJvdXRlOiBSb3V0ZSxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZVtdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRUcmFuc2xhdGVkUGF0aHMocm91dGUsICdjeFBhdGgnLCByb3V0ZXNUcmFuc2xhdGlvbnMpLm1hcChcbiAgICAgIHRyYW5zbGF0ZWRQYXRoID0+IHtcbiAgICAgICAgcmV0dXJuIHsgLi4ucm91dGUsIHBhdGg6IHRyYW5zbGF0ZWRQYXRoIH07XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGVSZWRpcmVjdFRvKFxuICAgIHJvdXRlOiBSb3V0ZSxcbiAgICB0cmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZVtdIHtcbiAgICBjb25zdCB0cmFuc2xhdGVkUGF0aHMgPSB0aGlzLmdldFRyYW5zbGF0ZWRQYXRocyhcbiAgICAgIHJvdXRlLFxuICAgICAgJ2N4UmVkaXJlY3RUbycsXG4gICAgICB0cmFuc2xhdGlvbnNcbiAgICApO1xuICAgIHJldHVybiB0cmFuc2xhdGVkUGF0aHMubGVuZ3RoXG4gICAgICA/IFt7IC4uLnJvdXRlLCByZWRpcmVjdFRvOiB0cmFuc2xhdGVkUGF0aHNbMF0gfV0gLy8gdGFrZSB0aGUgZmlyc3QgcGF0aCBmcm9tIGxpc3QgYnkgY29udmVudGlvblxuICAgICAgOiBbXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Um91dGVUcmFuc2xhdGlvbihcbiAgICByb3V0ZU5hbWU6IHN0cmluZyxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZVRyYW5zbGF0aW9uIHtcbiAgICBjb25zdCByZXN1bHQgPSByb3V0ZXNUcmFuc2xhdGlvbnMgJiYgcm91dGVzVHJhbnNsYXRpb25zW3JvdXRlTmFtZV07XG4gICAgaWYgKCFyb3V0ZXNUcmFuc2xhdGlvbnMgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYE5vIHJvdXRlIHRyYW5zbGF0aW9uIHdhcyBjb25maWd1cmVkIGZvciBwYWdlICcke3JvdXRlTmFtZX0nIGluIGxhbmd1YWdlICcke1xuICAgICAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlQ29kZVxuICAgICAgICB9JyFgXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUcmFuc2xhdGVkUGF0aHMoXG4gICAgcm91dGU6IFJvdXRlLFxuICAgIGtleTogQ29uZmlndXJhYmxlUm91dGVLZXksXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHJvdXRlTmFtZSA9IHRoaXMuZ2V0Q29uZmlndXJhYmxlKHJvdXRlLCBrZXkpO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZXRSb3V0ZVRyYW5zbGF0aW9uKHJvdXRlTmFtZSwgcm91dGVzVHJhbnNsYXRpb25zKTtcbiAgICBpZiAodHJhbnNsYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgQ291bGQgbm90IHRyYW5zbGF0ZSBrZXkgJyR7a2V5fScgb2Ygcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgYGR1ZSB0byB1bmRlZmluZWQga2V5ICcke3JvdXRlTmFtZX0nIGluIHJvdXRlcyB0cmFuc2xhdGlvbnNgLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmICh0cmFuc2xhdGlvbiAmJiB0cmFuc2xhdGlvbi5wYXRocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBDb3VsZCBub3QgdHJhbnNsYXRlIGtleSAnJHtrZXl9JyBvZiByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCAncGF0aHMnIGtleSBmb3IgJyR7cm91dGVOYW1lfScgcm91dGUgaW4gcm91dGVzIHRyYW5zbGF0aW9uc2AsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvLyB0cmFuc2xhdGlvbiBvciB0cmFuc2xhdGlvbi5wYXRocyBjYW4gYmUgbnVsbCAtIHdoaWNoIG1lYW5zIHN3aXRjaGluZyBvZmYgdGhlIHJvdXRlXG4gICAgcmV0dXJuICh0cmFuc2xhdGlvbiAmJiB0cmFuc2xhdGlvbi5wYXRocykgfHwgW107XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmICghdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19