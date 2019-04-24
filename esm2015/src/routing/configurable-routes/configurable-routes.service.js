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
        const translatedRoutes = this.translateRoutes(router.config, this.currentRoutesTranslations);
        router.resetConfig(translatedRoutes);
    }
    /**
     * @param {?} routeName
     * @return {?}
     */
    getRouteTranslation(routeName) {
        /** @type {?} */
        const routesTranslations = this.currentRoutesTranslations;
        /** @type {?} */
        const result = routesTranslations && routesTranslations[routeName];
        if (!routesTranslations || result === undefined) {
            this.warn(`No route translation was configured for page '${routeName}' in language '${this.currentLanguageCode}'!`);
        }
        return result;
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
                const translatedChildrenRoutes = this.translateRoutes(route.children, routesTranslations);
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
     * @param {?} route
     * @param {?} key
     * @param {?} routesTranslations
     * @return {?}
     */
    getTranslatedPaths(route, key, routesTranslations) {
        /** @type {?} */
        const routeName = this.getConfigurable(route, key);
        /** @type {?} */
        const translation = this.getRouteTranslation(routeName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQVUsTUFBTSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBTXhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSzVELE1BQU0sT0FBTyx5QkFBeUI7Ozs7OztJQUNwQyxZQUNVLE1BQW9CLEVBQ3BCLFFBQWtCLEVBQ2xCLGtCQUFzQztRQUZ0QyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUcvQix3QkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQywyRkFBMkY7UUFVaEksZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLDBDQUEwQztJQVpuRSxDQUFDOzs7OztJQU1KLElBQVkseUJBQXlCO1FBQ25DLE9BQU8sbUJBQUEsSUFBSSxDQUFDLHFCQUFxQixDQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQ3pCLEVBQXNCLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBT0ssSUFBSTs7WUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFD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QUM5RSxrQkFBa0IsQ0FDbkIsQ0FBQztZQUNGLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxxRkFBcUY7UUFDckYsT0FBTyxDQUFDLFdBQVcsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xELENBQUM7Ozs7OztJQUVPLElBQUksQ0FBQyxHQUFHLElBQUk7UUFDbEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQzNCLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztTQUN2QjtJQUNILENBQUM7OztZQTNLRixVQUFVOzs7O1lBVkYsWUFBWTtZQUZBLFFBQVE7WUFRcEIsa0JBQWtCOzs7Ozs7O0lBWXpCLHdEQUE0Qzs7Ozs7SUFFNUMsMERBQTREOzs7OztJQVE1RCwrQ0FBMkI7Ozs7O0lBZnpCLDJDQUE0Qjs7Ozs7SUFDNUIsNkNBQTBCOzs7OztJQUMxQix1REFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVzLCBSb3V0ZXIsIFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFNlcnZlckNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZy9zZXJ2ZXItY29uZmlnL3NlcnZlci1jb25maWcnO1xuaW1wb3J0IHtcbiAgUm91dGVzVHJhbnNsYXRpb25zLFxuICBSb3V0ZVRyYW5zbGF0aW9uLFxuICBSb3V0ZXNDb25maWcsXG59IGZyb20gJy4vcm91dGVzLWNvbmZpZyc7XG5pbXBvcnQgeyBSb3V0ZXNDb25maWdMb2FkZXIgfSBmcm9tICcuL3JvdXRlcy1jb25maWctbG9hZGVyJztcblxudHlwZSBDb25maWd1cmFibGVSb3V0ZUtleSA9ICdjeFBhdGgnIHwgJ2N4UmVkaXJlY3RUbyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDb25maWd1cmFibGVSb3V0ZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IFNlcnZlckNvbmZpZyxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHJvdXRlc0NvbmZpZ0xvYWRlcjogUm91dGVzQ29uZmlnTG9hZGVyXG4gICkge31cblxuICBwcml2YXRlIHJlYWRvbmx5IGN1cnJlbnRMYW5ndWFnZUNvZGUgPSAnZW4nOyAvLyBUT0RPOiBoYXJkY29kZWQhIHNob3VsZCBiZSByZW1vdmVkIHdoZW4gbW9yZSBsYW5ndWFnZXMgYXJlIHN1cHBvcnRlZCBieSBsb2NhbGl6ZWQgcm91dGVzXG5cbiAgcHJpdmF0ZSBhbGxSb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc0NvbmZpZ1sndHJhbnNsYXRpb25zJ107XG5cbiAgcHJpdmF0ZSBnZXQgY3VycmVudFJvdXRlc1RyYW5zbGF0aW9ucygpOiBSb3V0ZXNUcmFuc2xhdGlvbnMge1xuICAgIHJldHVybiB0aGlzLmFsbFJvdXRlc1RyYW5zbGF0aW9uc1tcbiAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlQ29kZVxuICAgIF0gYXMgUm91dGVzVHJhbnNsYXRpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0Q2FsbGVkID0gZmFsc2U7IC8vIGd1YXJkIG5vdCB0byBjYWxsIGluaXQoKSBtb3JlIHRoYW4gb25jZVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXplcyBzZXJ2aWNlIHdpdGggZ2l2ZW4gdHJhbnNsYXRpb25zIGFuZCB0cmFuc2xhdGVzIGFsbCBleGlzdGluZyBSb3V0ZXMgaW4gdGhlIFJvdXRlci5cbiAgICovXG4gIGFzeW5jIGluaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLmluaXRDYWxsZWQpIHtcbiAgICAgIHRoaXMuaW5pdENhbGxlZCA9IHRydWU7XG4gICAgICBhd2FpdCB0aGlzLnJvdXRlc0NvbmZpZ0xvYWRlci5sb2FkKCk7XG4gICAgICB0aGlzLmFsbFJvdXRlc1RyYW5zbGF0aW9ucyA9IHRoaXMucm91dGVzQ29uZmlnTG9hZGVyLnJvdXRlc0NvbmZpZy50cmFuc2xhdGlvbnM7XG4gICAgICB0aGlzLnRyYW5zbGF0ZVJvdXRlckNvbmZpZygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdHJhbnNsYXRlUm91dGVyQ29uZmlnKCkge1xuICAgIC8vIFJvdXRlciBjb3VsZCBub3QgYmUgaW5qZWN0ZWQgaW4gY29uc3RydWN0b3IgZHVlIHRvIGN5Y2xpYyBkZXBlbmRlbmN5IHdpdGggQVBQX0lOSVRJQUxJWkVSOlxuICAgIGNvbnN0IHJvdXRlciA9IHRoaXMuaW5qZWN0b3IuZ2V0KFJvdXRlcik7XG5cbiAgICBjb25zdCB0cmFuc2xhdGVkUm91dGVzID0gdGhpcy50cmFuc2xhdGVSb3V0ZXMoXG4gICAgICByb3V0ZXIuY29uZmlnLFxuICAgICAgdGhpcy5jdXJyZW50Um91dGVzVHJhbnNsYXRpb25zXG4gICAgKTtcblxuICAgIHJvdXRlci5yZXNldENvbmZpZyh0cmFuc2xhdGVkUm91dGVzKTtcbiAgfVxuXG4gIGdldFJvdXRlVHJhbnNsYXRpb24ocm91dGVOYW1lOiBzdHJpbmcpOiBSb3V0ZVRyYW5zbGF0aW9uIHtcbiAgICBjb25zdCByb3V0ZXNUcmFuc2xhdGlvbnMgPSB0aGlzLmN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnM7XG5cbiAgICBjb25zdCByZXN1bHQgPSByb3V0ZXNUcmFuc2xhdGlvbnMgJiYgcm91dGVzVHJhbnNsYXRpb25zW3JvdXRlTmFtZV07XG4gICAgaWYgKCFyb3V0ZXNUcmFuc2xhdGlvbnMgfHwgcmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYE5vIHJvdXRlIHRyYW5zbGF0aW9uIHdhcyBjb25maWd1cmVkIGZvciBwYWdlICcke3JvdXRlTmFtZX0nIGluIGxhbmd1YWdlICcke1xuICAgICAgICAgIHRoaXMuY3VycmVudExhbmd1YWdlQ29kZVxuICAgICAgICB9JyFgXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZXMoXG4gICAgcm91dGVzOiBSb3V0ZXMsXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVzIHtcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcbiAgICByb3V0ZXMuZm9yRWFjaChyb3V0ZSA9PiB7XG4gICAgICBjb25zdCB0cmFuc2xhdGVkUm91dGVBbGlhc2VzID0gdGhpcy50cmFuc2xhdGVSb3V0ZShcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIGlmIChyb3V0ZS5jaGlsZHJlbiAmJiByb3V0ZS5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgY29uc3QgdHJhbnNsYXRlZENoaWxkcmVuUm91dGVzID0gdGhpcy50cmFuc2xhdGVSb3V0ZXMoXG4gICAgICAgICAgcm91dGUuY2hpbGRyZW4sXG4gICAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICAgICk7XG5cbiAgICAgICAgdHJhbnNsYXRlZFJvdXRlQWxpYXNlcy5mb3JFYWNoKHRyYW5zbGF0ZWRSb3V0ZUFsaWFzID0+IHtcbiAgICAgICAgICB0cmFuc2xhdGVkUm91dGVBbGlhcy5jaGlsZHJlbiA9IHRyYW5zbGF0ZWRDaGlsZHJlblJvdXRlcztcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICByZXN1bHQucHVzaCguLi50cmFuc2xhdGVkUm91dGVBbGlhc2VzKTtcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZShcbiAgICByb3V0ZTogUm91dGUsXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVzIHtcbiAgICBpZiAodGhpcy5pc0NvbmZpZ3VyYWJsZShyb3V0ZSwgJ2N4UGF0aCcpKSB7XG4gICAgICAvLyB3ZSBhc3N1bWUgdGhhdCAncGF0aCcgYW5kICdyZWRpcmVjdFRvJyBjYW5ub3QgYmUgYm90aCBjb25maWd1cmVkIGZvciBvbmUgcm91dGVcbiAgICAgIGlmICh0aGlzLmlzQ29uZmlndXJhYmxlKHJvdXRlLCAnY3hSZWRpcmVjdFRvJykpIHtcbiAgICAgICAgdGhpcy53YXJuKFxuICAgICAgICAgIGBBIHBhdGggc2hvdWxkIG5vdCBoYXZlIHNldCBib3RoIFwiY3hQYXRoXCIgYW5kIFwiY3hSZWRpcmVjdFRvXCIgcHJvcGVydGllcyEgUm91dGU6ICcke3JvdXRlfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVJvdXRlUGF0aChyb3V0ZSwgcm91dGVzVHJhbnNsYXRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NvbmZpZ3VyYWJsZShyb3V0ZSwgJ2N4UmVkaXJlY3RUbycpKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVSb3V0ZVJlZGlyZWN0VG8ocm91dGUsIHJvdXRlc1RyYW5zbGF0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtyb3V0ZV07IC8vIGlmIG5vdGhpbmcgaXMgY29uZmlndXJhYmxlLCBqdXN0IHBhc3MgdGhlIG9yaWdpbmFsIHJvdXRlXG4gIH1cblxuICBwcml2YXRlIGlzQ29uZmlndXJhYmxlKHJvdXRlOiBSb3V0ZSwga2V5OiBDb25maWd1cmFibGVSb3V0ZUtleSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0Q29uZmlndXJhYmxlKHJvdXRlLCBrZXkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb25maWd1cmFibGUocm91dGU6IFJvdXRlLCBrZXk6IENvbmZpZ3VyYWJsZVJvdXRlS2V5KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhW2tleV07XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlUGF0aChcbiAgICByb3V0ZTogUm91dGUsXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VHJhbnNsYXRlZFBhdGhzKHJvdXRlLCAnY3hQYXRoJywgcm91dGVzVHJhbnNsYXRpb25zKS5tYXAoXG4gICAgICB0cmFuc2xhdGVkUGF0aCA9PiB7XG4gICAgICAgIHJldHVybiB7IC4uLnJvdXRlLCBwYXRoOiB0cmFuc2xhdGVkUGF0aCB9O1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlUmVkaXJlY3RUbyhcbiAgICByb3V0ZTogUm91dGUsXG4gICAgdHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVbXSB7XG4gICAgY29uc3QgdHJhbnNsYXRlZFBhdGhzID0gdGhpcy5nZXRUcmFuc2xhdGVkUGF0aHMoXG4gICAgICByb3V0ZSxcbiAgICAgICdjeFJlZGlyZWN0VG8nLFxuICAgICAgdHJhbnNsYXRpb25zXG4gICAgKTtcbiAgICByZXR1cm4gdHJhbnNsYXRlZFBhdGhzLmxlbmd0aFxuICAgICAgPyBbeyAuLi5yb3V0ZSwgcmVkaXJlY3RUbzogdHJhbnNsYXRlZFBhdGhzWzBdIH1dIC8vIHRha2UgdGhlIGZpcnN0IHBhdGggZnJvbSBsaXN0IGJ5IGNvbnZlbnRpb25cbiAgICAgIDogW107XG4gIH1cblxuICBwcml2YXRlIGdldFRyYW5zbGF0ZWRQYXRocyhcbiAgICByb3V0ZTogUm91dGUsXG4gICAga2V5OiBDb25maWd1cmFibGVSb3V0ZUtleSxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBzdHJpbmdbXSB7XG4gICAgY29uc3Qgcm91dGVOYW1lID0gdGhpcy5nZXRDb25maWd1cmFibGUocm91dGUsIGtleSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb24gPSB0aGlzLmdldFJvdXRlVHJhbnNsYXRpb24ocm91dGVOYW1lKTtcbiAgICBpZiAodHJhbnNsYXRpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgQ291bGQgbm90IHRyYW5zbGF0ZSBrZXkgJyR7a2V5fScgb2Ygcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgYGR1ZSB0byB1bmRlZmluZWQga2V5ICcke3JvdXRlTmFtZX0nIGluIHJvdXRlcyB0cmFuc2xhdGlvbnNgLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIGlmICh0cmFuc2xhdGlvbiAmJiB0cmFuc2xhdGlvbi5wYXRocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBDb3VsZCBub3QgdHJhbnNsYXRlIGtleSAnJHtrZXl9JyBvZiByb3V0ZSAnJHtyb3V0ZU5hbWV9J2AsXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCAncGF0aHMnIGtleSBmb3IgJyR7cm91dGVOYW1lfScgcm91dGUgaW4gcm91dGVzIHRyYW5zbGF0aW9uc2AsXG4gICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICAvLyB0cmFuc2xhdGlvbiBvciB0cmFuc2xhdGlvbi5wYXRocyBjYW4gYmUgbnVsbCAtIHdoaWNoIG1lYW5zIHN3aXRjaGluZyBvZmYgdGhlIHJvdXRlXG4gICAgcmV0dXJuICh0cmFuc2xhdGlvbiAmJiB0cmFuc2xhdGlvbi5wYXRocykgfHwgW107XG4gIH1cblxuICBwcml2YXRlIHdhcm4oLi4uYXJncykge1xuICAgIGlmICghdGhpcy5jb25maWcucHJvZHVjdGlvbikge1xuICAgICAgY29uc29sZS53YXJuKC4uLmFyZ3MpO1xuICAgIH1cbiAgfVxufVxuIl19