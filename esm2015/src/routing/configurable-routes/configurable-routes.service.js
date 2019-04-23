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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhYmxlLXJvdXRlcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy9jb25maWd1cmFibGUtcm91dGVzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRCxPQUFPLEVBQVUsTUFBTSxFQUFTLE1BQU0saUJBQWlCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBTXhFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSzVELE1BQU0sT0FBTyx5QkFBeUI7Ozs7OztJQUNwQyxZQUNVLE1BQW9CLEVBQ3BCLFFBQWtCLEVBQ2xCLGtCQUFzQztRQUZ0QyxXQUFNLEdBQU4sTUFBTSxDQUFjO1FBQ3BCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFvQjtRQUcvQix3QkFBbUIsR0FBRyxJQUFJLENBQUMsQ0FBQywyRkFBMkY7UUFVaEksZUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLDBDQUEwQztJQVpuRSxDQUFDOzs7OztJQU1KLElBQVkseUJBQXlCO1FBQ25DLE9BQU8sbUJBQUEsSUFBSSxDQUFDLHFCQUFxQixDQUMvQixJQUFJLENBQUMsbUJBQW1CLENBQ3pCLEVBQXNCLENBQUM7SUFDMUIsQ0FBQzs7Ozs7O0lBT0ssSUFBSTs7WUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtnQkFDcEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3ZCLE1BQU0sSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFD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Q0FBQzs7O1lBeFFGLFVBQVU7Ozs7WUFWRixZQUFZO1lBRkEsUUFBUTtZQVFwQixrQkFBa0I7Ozs7Ozs7SUFZekIsd0RBQTRDOzs7OztJQUU1QywwREFBNEQ7Ozs7O0lBUTVELCtDQUEyQjs7Ozs7SUFmekIsMkNBQTRCOzs7OztJQUM1Qiw2Q0FBMEI7Ozs7O0lBQzFCLHVEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMsIFJvdXRlciwgUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2VydmVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnL3NlcnZlci1jb25maWcvc2VydmVyLWNvbmZpZyc7XG5pbXBvcnQge1xuICBSb3V0ZXNUcmFuc2xhdGlvbnMsXG4gIFJvdXRlVHJhbnNsYXRpb24sXG4gIFJvdXRlc0NvbmZpZyxcbn0gZnJvbSAnLi9yb3V0ZXMtY29uZmlnJztcbmltcG9ydCB7IFJvdXRlc0NvbmZpZ0xvYWRlciB9IGZyb20gJy4vcm91dGVzLWNvbmZpZy1sb2FkZXInO1xuXG50eXBlIENvbmZpZ3VyYWJsZVJvdXRlS2V5ID0gJ2N4UGF0aCcgfCAnY3hSZWRpcmVjdFRvJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENvbmZpZ3VyYWJsZVJvdXRlc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogU2VydmVyQ29uZmlnLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcm91dGVzQ29uZmlnTG9hZGVyOiBSb3V0ZXNDb25maWdMb2FkZXJcbiAgKSB7fVxuXG4gIHByaXZhdGUgcmVhZG9ubHkgY3VycmVudExhbmd1YWdlQ29kZSA9ICdlbic7IC8vIFRPRE86IGhhcmRjb2RlZCEgc2hvdWxkIGJlIHJlbW92ZWQgd2hlbiBtb3JlIGxhbmd1YWdlcyBhcmUgc3VwcG9ydGVkIGJ5IGxvY2FsaXplZCByb3V0ZXNcblxuICBwcml2YXRlIGFsbFJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzQ29uZmlnWyd0cmFuc2xhdGlvbnMnXTtcblxuICBwcml2YXRlIGdldCBjdXJyZW50Um91dGVzVHJhbnNsYXRpb25zKCk6IFJvdXRlc1RyYW5zbGF0aW9ucyB7XG4gICAgcmV0dXJuIHRoaXMuYWxsUm91dGVzVHJhbnNsYXRpb25zW1xuICAgICAgdGhpcy5jdXJyZW50TGFuZ3VhZ2VDb2RlXG4gICAgXSBhcyBSb3V0ZXNUcmFuc2xhdGlvbnM7XG4gIH1cblxuICBwcml2YXRlIGluaXRDYWxsZWQgPSBmYWxzZTsgLy8gZ3VhcmQgbm90IHRvIGNhbGwgaW5pdCgpIG1vcmUgdGhhbiBvbmNlXG5cbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHNlcnZpY2Ugd2l0aCBnaXZlbiB0cmFuc2xhdGlvbnMgYW5kIHRyYW5zbGF0ZXMgYWxsIGV4aXN0aW5nIFJvdXRlcyBpbiB0aGUgUm91dGVyLlxuICAgKi9cbiAgYXN5bmMgaW5pdCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBpZiAoIXRoaXMuaW5pdENhbGxlZCkge1xuICAgICAgdGhpcy5pbml0Q2FsbGVkID0gdHJ1ZTtcbiAgICAgIGF3YWl0IHRoaXMucm91dGVzQ29uZmlnTG9hZGVyLmxvYWQoKTtcbiAgICAgIHRoaXMuYWxsUm91dGVzVHJhbnNsYXRpb25zID0gdGhpcy5yb3V0ZXNDb25maWdMb2FkZXIucm91dGVzQ29uZmlnLnRyYW5zbGF0aW9ucztcbiAgICAgIHRoaXMudHJhbnNsYXRlUm91dGVyQ29uZmlnKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZXJDb25maWcoKSB7XG4gICAgLy8gUm91dGVyIGNvdWxkIG5vdCBiZSBpbmplY3RlZCBpbiBjb25zdHJ1Y3RvciBkdWUgdG8gY3ljbGljIGRlcGVuZGVuY3kgd2l0aCBBUFBfSU5JVElBTElaRVI6XG4gICAgY29uc3Qgcm91dGVyID0gdGhpcy5pbmplY3Rvci5nZXQoUm91dGVyKTtcblxuICAgIGNvbnN0IHRyYW5zbGF0ZWRSb3V0ZXMgPSB0aGlzLnRyYW5zbGF0ZVJvdXRlcyhcbiAgICAgIHJvdXRlci5jb25maWcsXG4gICAgICB0aGlzLmN1cnJlbnRSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICApO1xuXG4gICAgcm91dGVyLnJlc2V0Q29uZmlnKHRyYW5zbGF0ZWRSb3V0ZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxpc3Qgb2Ygcm91dGVzIHRyYW5zbGF0aW9ucyBmb3IgZ2l2ZW4gbGlzdCBvZiBuZXN0ZWQgcm91dGVzXG4gICAqIHVzaW5nIGdpdmVuIG9iamVjdCBvZiByb3V0ZXMgdHJhbnNsYXRpb25zLlxuICAgKi9cbiAgZ2V0TmVzdGVkUm91dGVzVHJhbnNsYXRpb25zKFxuICAgIG5lc3RlZFJvdXRlTmFtZXM6IHN0cmluZ1tdLFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zID0gdGhpcy5jdXJyZW50Um91dGVzVHJhbnNsYXRpb25zXG4gICk6IFJvdXRlVHJhbnNsYXRpb25bXSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0TmVzdGVkUm91dGVzVHJhbnNsYXRpb25zUmVjdXJzaXZlKFxuICAgICAgbmVzdGVkUm91dGVOYW1lcyxcbiAgICAgIHJvdXRlc1RyYW5zbGF0aW9ucyxcbiAgICAgIFtdXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0TmVzdGVkUm91dGVzVHJhbnNsYXRpb25zUmVjdXJzaXZlKFxuICAgIG5lc3RlZFJvdXRlc05hbWVzOiBzdHJpbmdbXSxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9ucyxcbiAgICBhY2NSZXN1bHQ6IFJvdXRlVHJhbnNsYXRpb25bXVxuICApOiBSb3V0ZVRyYW5zbGF0aW9uW10ge1xuICAgIGlmICghbmVzdGVkUm91dGVzTmFtZXMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gYWNjUmVzdWx0O1xuICAgIH1cbiAgICBjb25zdCBbcm91dGVOYW1lLCAuLi5yZW1haW5pbmdSb3V0ZU5hbWVzXSA9IG5lc3RlZFJvdXRlc05hbWVzO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uID0gdGhpcy5nZXRSb3V0ZVRyYW5zbGF0aW9uKHJvdXRlTmFtZSwgcm91dGVzVHJhbnNsYXRpb25zKTtcbiAgICBpZiAoIXRyYW5zbGF0aW9uKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocmVtYWluaW5nUm91dGVOYW1lcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuVHJhbnNsYXRpb25zID0gdGhpcy5nZXRDaGlsZHJlblJvdXRlc1RyYW5zbGF0aW9ucyhcbiAgICAgICAgcm91dGVOYW1lLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG4gICAgICBpZiAoIWNoaWxkcmVuVHJhbnNsYXRpb25zKSB7XG4gICAgICAgIHRoaXMud2FybihcbiAgICAgICAgICBgTm8gY2hpbGRyZW4gcm91dGVzIHRyYW5zbGF0aW9ucyB3ZXJlIGNvbmZpZ3VyZWQgZm9yIHBhZ2UgJyR7cm91dGVOYW1lfScgaW4gbGFuZ3VhZ2UgJyR7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZUNvZGVcbiAgICAgICAgICB9JyFgXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5nZXROZXN0ZWRSb3V0ZXNUcmFuc2xhdGlvbnNSZWN1cnNpdmUoXG4gICAgICAgIHJlbWFpbmluZ1JvdXRlTmFtZXMsXG4gICAgICAgIGNoaWxkcmVuVHJhbnNsYXRpb25zLFxuICAgICAgICBhY2NSZXN1bHQuY29uY2F0KHRyYW5zbGF0aW9uKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjY1Jlc3VsdC5jb25jYXQodHJhbnNsYXRpb24pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGlsZHJlblJvdXRlc1RyYW5zbGF0aW9ucyhcbiAgICByb3V0ZU5hbWU6IHN0cmluZyxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZXNUcmFuc2xhdGlvbnMge1xuICAgIGNvbnN0IHJvdXRlVHJhbnNsYXRpb24gPSB0aGlzLmdldFJvdXRlVHJhbnNsYXRpb24oXG4gICAgICByb3V0ZU5hbWUsXG4gICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICApO1xuICAgIHJldHVybiByb3V0ZVRyYW5zbGF0aW9uICYmIHJvdXRlVHJhbnNsYXRpb24uY2hpbGRyZW47XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlcyhcbiAgICByb3V0ZXM6IFJvdXRlcyxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZXMge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIHJvdXRlcy5mb3JFYWNoKHJvdXRlID0+IHtcbiAgICAgIGNvbnN0IHRyYW5zbGF0ZWRSb3V0ZUFsaWFzZXMgPSB0aGlzLnRyYW5zbGF0ZVJvdXRlKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICApO1xuICAgICAgaWYgKHJvdXRlLmNoaWxkcmVuICYmIHJvdXRlLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICBjb25zdCB0cmFuc2xhdGVkQ2hpbGRyZW5Sb3V0ZXMgPSB0aGlzLnRyYW5zbGF0ZUNoaWxkcmVuUm91dGVzKFxuICAgICAgICAgIHJvdXRlLFxuICAgICAgICAgIHJvdXRlc1RyYW5zbGF0aW9uc1xuICAgICAgICApO1xuICAgICAgICB0cmFuc2xhdGVkUm91dGVBbGlhc2VzLmZvckVhY2godHJhbnNsYXRlZFJvdXRlQWxpYXMgPT4ge1xuICAgICAgICAgIHRyYW5zbGF0ZWRSb3V0ZUFsaWFzLmNoaWxkcmVuID0gdHJhbnNsYXRlZENoaWxkcmVuUm91dGVzO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdC5wdXNoKC4uLnRyYW5zbGF0ZWRSb3V0ZUFsaWFzZXMpO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZUNoaWxkcmVuUm91dGVzKFxuICAgIHJvdXRlOiBSb3V0ZSxcbiAgICByb3V0ZXNUcmFuc2xhdGlvbnM6IFJvdXRlc1RyYW5zbGF0aW9uc1xuICApOiBSb3V0ZXMge1xuICAgIGlmICh0aGlzLmlzQ29uZmlndXJhYmxlKHJvdXRlLCAnY3hQYXRoJykpIHtcbiAgICAgIGNvbnN0IHJvdXRlTmFtZSA9IHRoaXMuZ2V0Q29uZmlndXJhYmxlKHJvdXRlLCAnY3hQYXRoJyk7XG4gICAgICBjb25zdCBjaGlsZHJlblRyYW5zbGF0aW9ucyA9IHRoaXMuZ2V0Q2hpbGRyZW5Sb3V0ZXNUcmFuc2xhdGlvbnMoXG4gICAgICAgIHJvdXRlTmFtZSxcbiAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICApO1xuXG4gICAgICBpZiAoY2hpbGRyZW5UcmFuc2xhdGlvbnMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLndhcm4oXG4gICAgICAgICAgYENvdWxkIG5vdCB0cmFuc2xhdGUgY2hpbGRyZW4gcm91dGVzIG9mIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgICByb3V0ZSxcbiAgICAgICAgICBgZHVlIHRvIHVuZGVmaW5lZCAnY2hpbGRyZW4nIGtleSBmb3IgJyR7cm91dGVOYW1lfScgcm91dGUgaW4gcm91dGVzIHRyYW5zbGF0aW9uc2AsXG4gICAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICAgICk7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cblxuICAgICAgLy8gbnVsbCBzd2l0Y2hlcyBvZmYgdGhlIGNoaWxkcmVuIHJvdXRlczpcbiAgICAgIGlmIChjaGlsZHJlblRyYW5zbGF0aW9ucyA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVSb3V0ZXMocm91dGUuY2hpbGRyZW4sIGNoaWxkcmVuVHJhbnNsYXRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvdXRlLmNoaWxkcmVuO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2xhdGVSb3V0ZShcbiAgICByb3V0ZTogUm91dGUsXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVzIHtcbiAgICBpZiAodGhpcy5pc0NvbmZpZ3VyYWJsZShyb3V0ZSwgJ2N4UGF0aCcpKSB7XG4gICAgICAvLyB3ZSBhc3N1bWUgdGhhdCAncGF0aCcgYW5kICdyZWRpcmVjdFRvJyBjYW5ub3QgYmUgYm90aCBjb25maWd1cmVkIGZvciBvbmUgcm91dGVcbiAgICAgIGlmICh0aGlzLmlzQ29uZmlndXJhYmxlKHJvdXRlLCAnY3hSZWRpcmVjdFRvJykpIHtcbiAgICAgICAgdGhpcy53YXJuKFxuICAgICAgICAgIGBBIHBhdGggc2hvdWxkIG5vdCBoYXZlIHNldCBib3RoIFwiY3hQYXRoXCIgYW5kIFwiY3hSZWRpcmVjdFRvXCIgcHJvcGVydGllcyEgUm91dGU6ICcke3JvdXRlfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLnRyYW5zbGF0ZVJvdXRlUGF0aChyb3V0ZSwgcm91dGVzVHJhbnNsYXRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pc0NvbmZpZ3VyYWJsZShyb3V0ZSwgJ2N4UmVkaXJlY3RUbycpKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFuc2xhdGVSb3V0ZVJlZGlyZWN0VG8ocm91dGUsIHJvdXRlc1RyYW5zbGF0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIFtyb3V0ZV07IC8vIGlmIG5vdGhpbmcgaXMgY29uZmlndXJhYmxlLCBqdXN0IHBhc3MgdGhlIG9yaWdpbmFsIHJvdXRlXG4gIH1cblxuICBwcml2YXRlIGlzQ29uZmlndXJhYmxlKHJvdXRlOiBSb3V0ZSwga2V5OiBDb25maWd1cmFibGVSb3V0ZUtleSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuZ2V0Q29uZmlndXJhYmxlKHJvdXRlLCBrZXkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb25maWd1cmFibGUocm91dGU6IFJvdXRlLCBrZXk6IENvbmZpZ3VyYWJsZVJvdXRlS2V5KTogc3RyaW5nIHtcbiAgICByZXR1cm4gcm91dGUuZGF0YSAmJiByb3V0ZS5kYXRhW2tleV07XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlUGF0aChcbiAgICByb3V0ZTogUm91dGUsXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VHJhbnNsYXRlZFBhdGhzKHJvdXRlLCAnY3hQYXRoJywgcm91dGVzVHJhbnNsYXRpb25zKS5tYXAoXG4gICAgICB0cmFuc2xhdGVkUGF0aCA9PiB7XG4gICAgICAgIHJldHVybiB7IC4uLnJvdXRlLCBwYXRoOiB0cmFuc2xhdGVkUGF0aCB9O1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHRyYW5zbGF0ZVJvdXRlUmVkaXJlY3RUbyhcbiAgICByb3V0ZTogUm91dGUsXG4gICAgdHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVbXSB7XG4gICAgY29uc3QgdHJhbnNsYXRlZFBhdGhzID0gdGhpcy5nZXRUcmFuc2xhdGVkUGF0aHMoXG4gICAgICByb3V0ZSxcbiAgICAgICdjeFJlZGlyZWN0VG8nLFxuICAgICAgdHJhbnNsYXRpb25zXG4gICAgKTtcbiAgICByZXR1cm4gdHJhbnNsYXRlZFBhdGhzLmxlbmd0aFxuICAgICAgPyBbeyAuLi5yb3V0ZSwgcmVkaXJlY3RUbzogdHJhbnNsYXRlZFBhdGhzWzBdIH1dIC8vIHRha2UgdGhlIGZpcnN0IHBhdGggZnJvbSBsaXN0IGJ5IGNvbnZlbnRpb25cbiAgICAgIDogW107XG4gIH1cblxuICBwcml2YXRlIGdldFJvdXRlVHJhbnNsYXRpb24oXG4gICAgcm91dGVOYW1lOiBzdHJpbmcsXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnNcbiAgKTogUm91dGVUcmFuc2xhdGlvbiB7XG4gICAgY29uc3QgcmVzdWx0ID0gcm91dGVzVHJhbnNsYXRpb25zICYmIHJvdXRlc1RyYW5zbGF0aW9uc1tyb3V0ZU5hbWVdO1xuICAgIGlmICghcm91dGVzVHJhbnNsYXRpb25zIHx8IHJlc3VsdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLndhcm4oXG4gICAgICAgIGBObyByb3V0ZSB0cmFuc2xhdGlvbiB3YXMgY29uZmlndXJlZCBmb3IgcGFnZSAnJHtyb3V0ZU5hbWV9JyBpbiBsYW5ndWFnZSAnJHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRMYW5ndWFnZUNvZGVcbiAgICAgICAgfSchYFxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VHJhbnNsYXRlZFBhdGhzKFxuICAgIHJvdXRlOiBSb3V0ZSxcbiAgICBrZXk6IENvbmZpZ3VyYWJsZVJvdXRlS2V5LFxuICAgIHJvdXRlc1RyYW5zbGF0aW9uczogUm91dGVzVHJhbnNsYXRpb25zXG4gICk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCByb3V0ZU5hbWUgPSB0aGlzLmdldENvbmZpZ3VyYWJsZShyb3V0ZSwga2V5KTtcbiAgICBjb25zdCB0cmFuc2xhdGlvbiA9IHRoaXMuZ2V0Um91dGVUcmFuc2xhdGlvbihyb3V0ZU5hbWUsIHJvdXRlc1RyYW5zbGF0aW9ucyk7XG4gICAgaWYgKHRyYW5zbGF0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMud2FybihcbiAgICAgICAgYENvdWxkIG5vdCB0cmFuc2xhdGUga2V5ICcke2tleX0nIG9mIHJvdXRlICcke3JvdXRlTmFtZX0nYCxcbiAgICAgICAgcm91dGUsXG4gICAgICAgIGBkdWUgdG8gdW5kZWZpbmVkIGtleSAnJHtyb3V0ZU5hbWV9JyBpbiByb3V0ZXMgdHJhbnNsYXRpb25zYCxcbiAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zXG4gICAgICApO1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICBpZiAodHJhbnNsYXRpb24gJiYgdHJhbnNsYXRpb24ucGF0aHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy53YXJuKFxuICAgICAgICBgQ291bGQgbm90IHRyYW5zbGF0ZSBrZXkgJyR7a2V5fScgb2Ygcm91dGUgJyR7cm91dGVOYW1lfSdgLFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgYGR1ZSB0byB1bmRlZmluZWQgJ3BhdGhzJyBrZXkgZm9yICcke3JvdXRlTmFtZX0nIHJvdXRlIGluIHJvdXRlcyB0cmFuc2xhdGlvbnNgLFxuICAgICAgICByb3V0ZXNUcmFuc2xhdGlvbnNcbiAgICAgICk7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgLy8gdHJhbnNsYXRpb24gb3IgdHJhbnNsYXRpb24ucGF0aHMgY2FuIGJlIG51bGwgLSB3aGljaCBtZWFucyBzd2l0Y2hpbmcgb2ZmIHRoZSByb3V0ZVxuICAgIHJldHVybiAodHJhbnNsYXRpb24gJiYgdHJhbnNsYXRpb24ucGF0aHMpIHx8IFtdO1xuICB9XG5cbiAgcHJpdmF0ZSB3YXJuKC4uLmFyZ3MpIHtcbiAgICBpZiAoIXRoaXMuY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICAgIGNvbnNvbGUud2FybiguLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==