/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { RoutesConfigLoader } from '../routes-config-loader';
import { UrlParsingService } from './url-parsing.service';
import { removeLeadingSlash, isParam, getParamName } from './path-utils';
export class RouteRecognizerService {
    /**
     * @param {?} routesConfigLoader
     * @param {?} urlParser
     */
    constructor(routesConfigLoader, urlParser) {
        this.routesConfigLoader = routesConfigLoader;
        this.urlParser = urlParser;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    recognizeByDefaultUrl(url) {
        url = removeLeadingSlash(url); // url will be compared with paths translations which do not have leading slash
        // url will be compared with paths translations which do not have leading slash
        /** @type {?} */
        const routesTranslations = this.defaultRoutesTranslations;
        /** @type {?} */
        const urlSegments = this.urlParser.getPrimarySegments(url);
        /** @type {?} */
        const recognizedNestedRoutes = this.getNestedRoutesRecursive(urlSegments, routesTranslations, []);
        return recognizedNestedRoutes;
    }
    /**
     * @private
     * @param {?} remainingUrlSegments
     * @param {?} routesTranslations
     * @param {?} accResult
     * @return {?}
     */
    getNestedRoutesRecursive(remainingUrlSegments, routesTranslations, accResult) {
        if (!routesTranslations) {
            return remainingUrlSegments.length ? null : accResult;
        }
        /** @type {?} */
        const routeNames = Object.keys(routesTranslations);
        /** @type {?} */
        const routeNamesLength = routeNames.length;
        for (let i = 0; i < routeNamesLength; i++) {
            /** @type {?} */
            const routeName = routeNames[i];
            /** @type {?} */
            const routeTranslation = routesTranslations && routesTranslations[routeName];
            /** @type {?} */
            const paths = routeTranslation.paths || [];
            /** @type {?} */
            const pathsLength = paths.length;
            for (let j = 0; j < pathsLength; j++) {
                /** @type {?} */
                const path = paths[j];
                /** @type {?} */
                const pathSegments = this.urlParser.getPrimarySegments(path);
                /** @type {?} */
                const params = this.extractParamsIfPathMatchesUrlPrefix(remainingUrlSegments, pathSegments);
                // if some path is matching, try to recognize remaining segments
                if (params) {
                    /** @type {?} */
                    const result = this.getNestedRoutesRecursive(remainingUrlSegments.slice(pathSegments.length), routeTranslation.children, accResult.concat({ name: routeName, params }));
                    // if remaining segments were successfuly matched, return result. otherwise continue loop for other paths and routes
                    if (result) {
                        return result;
                    }
                }
            }
        }
        return remainingUrlSegments.length ? null : accResult;
    }
    /**
     * @private
     * @param {?} urlSegments
     * @param {?} pathSegments
     * @return {?}
     */
    extractParamsIfPathMatchesUrlPrefix(urlSegments, pathSegments) {
        /** @type {?} */
        const params = {};
        /** @type {?} */
        const pathSegmentsLength = pathSegments.length;
        /** @type {?} */
        const urlSegmentsLength = urlSegments.length;
        if (urlSegmentsLength < pathSegmentsLength) {
            return null;
        }
        for (let i = 0; i < pathSegmentsLength; i++) {
            /** @type {?} */
            const pathSegment = pathSegments[i];
            /** @type {?} */
            const urlSegment = urlSegments[i];
            if (isParam(pathSegment)) {
                /** @type {?} */
                const paramName = getParamName(pathSegment);
                params[paramName] = urlSegment;
            }
            else {
                if (pathSegment !== urlSegment) {
                    return null;
                }
            }
        }
        return params;
    }
    /**
     * @private
     * @return {?}
     */
    get defaultRoutesTranslations() {
        return (/** @type {?} */ (this.routesConfigLoader.routesConfig.translations
            .default));
    }
}
RouteRecognizerService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
RouteRecognizerService.ctorParameters = () => [
    { type: RoutesConfigLoader },
    { type: UrlParsingService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    RouteRecognizerService.prototype.routesConfigLoader;
    /**
     * @type {?}
     * @private
     */
    RouteRecognizerService.prototype.urlParser;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUtcmVjb2duaXplci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3JvdXRpbmcvY29uZmlndXJhYmxlLXJvdXRlcy91cmwtdHJhbnNsYXRpb24vcm91dGUtcmVjb2duaXplci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sY0FBYyxDQUFDO0FBR3pFLE1BQU0sT0FBTyxzQkFBc0I7Ozs7O0lBQ2pDLFlBQ1Usa0JBQXNDLEVBQ3RDLFNBQTRCO1FBRDVCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBb0I7UUFDdEMsY0FBUyxHQUFULFNBQVMsQ0FBbUI7SUFDbkMsQ0FBQzs7Ozs7SUFFSixxQkFBcUIsQ0FBQyxHQUFXO1FBQy9CLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLCtFQUErRTs7O2NBQ3hHLGtCQUFrQixHQUFHLElBQUksQ0FBQyx5QkFBeUI7O2NBQ25ELFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQzs7Y0FDcEQsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUMxRCxXQUFXLEVBQ1gsa0JBQWtCLEVBQ2xCLEVBQUUsQ0FDSDtRQUVELE9BQU8sc0JBQXNCLENBQUM7SUFDaEMsQ0FBQzs7Ozs7Ozs7SUFFTyx3QkFBd0IsQ0FDOUIsb0JBQThCLEVBQzlCLGtCQUFzQyxFQUN0QyxTQUE2QztRQUU3QyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDdkIs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cm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlc0NvbmZpZ0xvYWRlciB9IGZyb20gJy4uL3JvdXRlcy1jb25maWctbG9hZGVyJztcbmltcG9ydCB7IFVybFBhcnNpbmdTZXJ2aWNlIH0gZnJvbSAnLi91cmwtcGFyc2luZy5zZXJ2aWNlJztcbmltcG9ydCB7IFJvdXRlc1RyYW5zbGF0aW9ucyB9IGZyb20gJy4uL3JvdXRlcy1jb25maWcnO1xuaW1wb3J0IHsgcmVtb3ZlTGVhZGluZ1NsYXNoLCBpc1BhcmFtLCBnZXRQYXJhbU5hbWUgfSBmcm9tICcuL3BhdGgtdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm91dGVSZWNvZ25pemVyU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVzQ29uZmlnTG9hZGVyOiBSb3V0ZXNDb25maWdMb2FkZXIsXG4gICAgcHJpdmF0ZSB1cmxQYXJzZXI6IFVybFBhcnNpbmdTZXJ2aWNlXG4gICkge31cblxuICByZWNvZ25pemVCeURlZmF1bHRVcmwodXJsOiBzdHJpbmcpOiB7IG5hbWU6IHN0cmluZzsgcGFyYW1zOiBvYmplY3QgfVtdIHtcbiAgICB1cmwgPSByZW1vdmVMZWFkaW5nU2xhc2godXJsKTsgLy8gdXJsIHdpbGwgYmUgY29tcGFyZWQgd2l0aCBwYXRocyB0cmFuc2xhdGlvbnMgd2hpY2ggZG8gbm90IGhhdmUgbGVhZGluZyBzbGFzaFxuICAgIGNvbnN0IHJvdXRlc1RyYW5zbGF0aW9ucyA9IHRoaXMuZGVmYXVsdFJvdXRlc1RyYW5zbGF0aW9ucztcbiAgICBjb25zdCB1cmxTZWdtZW50cyA9IHRoaXMudXJsUGFyc2VyLmdldFByaW1hcnlTZWdtZW50cyh1cmwpO1xuICAgIGNvbnN0IHJlY29nbml6ZWROZXN0ZWRSb3V0ZXMgPSB0aGlzLmdldE5lc3RlZFJvdXRlc1JlY3Vyc2l2ZShcbiAgICAgIHVybFNlZ21lbnRzLFxuICAgICAgcm91dGVzVHJhbnNsYXRpb25zLFxuICAgICAgW11cbiAgICApO1xuXG4gICAgcmV0dXJuIHJlY29nbml6ZWROZXN0ZWRSb3V0ZXM7XG4gIH1cblxuICBwcml2YXRlIGdldE5lc3RlZFJvdXRlc1JlY3Vyc2l2ZShcbiAgICByZW1haW5pbmdVcmxTZWdtZW50czogc3RyaW5nW10sXG4gICAgcm91dGVzVHJhbnNsYXRpb25zOiBSb3V0ZXNUcmFuc2xhdGlvbnMsXG4gICAgYWNjUmVzdWx0OiB7IG5hbWU6IHN0cmluZzsgcGFyYW1zOiBvYmplY3QgfVtdXG4gICk6IHsgbmFtZTogc3RyaW5nOyBwYXJhbXM6IG9iamVjdCB9W10ge1xuICAgIGlmICghcm91dGVzVHJhbnNsYXRpb25zKSB7XG4gICAgICByZXR1cm4gcmVtYWluaW5nVXJsU2VnbWVudHMubGVuZ3RoID8gbnVsbCA6IGFjY1Jlc3VsdDtcbiAgICB9XG4gICAgY29uc3Qgcm91dGVOYW1lcyA9IE9iamVjdC5rZXlzKHJvdXRlc1RyYW5zbGF0aW9ucyk7XG4gICAgY29uc3Qgcm91dGVOYW1lc0xlbmd0aCA9IHJvdXRlTmFtZXMubGVuZ3RoO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZU5hbWVzTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHJvdXRlTmFtZSA9IHJvdXRlTmFtZXNbaV07XG4gICAgICBjb25zdCByb3V0ZVRyYW5zbGF0aW9uID1cbiAgICAgICAgcm91dGVzVHJhbnNsYXRpb25zICYmIHJvdXRlc1RyYW5zbGF0aW9uc1tyb3V0ZU5hbWVdO1xuICAgICAgY29uc3QgcGF0aHMgPSByb3V0ZVRyYW5zbGF0aW9uLnBhdGhzIHx8IFtdO1xuICAgICAgY29uc3QgcGF0aHNMZW5ndGggPSBwYXRocy5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBhdGhzTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHBhdGhzW2pdO1xuICAgICAgICBjb25zdCBwYXRoU2VnbWVudHMgPSB0aGlzLnVybFBhcnNlci5nZXRQcmltYXJ5U2VnbWVudHMocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMuZXh0cmFjdFBhcmFtc0lmUGF0aE1hdGNoZXNVcmxQcmVmaXgoXG4gICAgICAgICAgcmVtYWluaW5nVXJsU2VnbWVudHMsXG4gICAgICAgICAgcGF0aFNlZ21lbnRzXG4gICAgICAgICk7XG4gICAgICAgIC8vIGlmIHNvbWUgcGF0aCBpcyBtYXRjaGluZywgdHJ5IHRvIHJlY29nbml6ZSByZW1haW5pbmcgc2VnbWVudHNcbiAgICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZ2V0TmVzdGVkUm91dGVzUmVjdXJzaXZlKFxuICAgICAgICAgICAgcmVtYWluaW5nVXJsU2VnbWVudHMuc2xpY2UocGF0aFNlZ21lbnRzLmxlbmd0aCksXG4gICAgICAgICAgICByb3V0ZVRyYW5zbGF0aW9uLmNoaWxkcmVuLFxuICAgICAgICAgICAgYWNjUmVzdWx0LmNvbmNhdCh7IG5hbWU6IHJvdXRlTmFtZSwgcGFyYW1zIH0pXG4gICAgICAgICAgKTtcbiAgICAgICAgICAvLyBpZiByZW1haW5pbmcgc2VnbWVudHMgd2VyZSBzdWNjZXNzZnVseSBtYXRjaGVkLCByZXR1cm4gcmVzdWx0LiBvdGhlcndpc2UgY29udGludWUgbG9vcCBmb3Igb3RoZXIgcGF0aHMgYW5kIHJvdXRlc1xuICAgICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbWFpbmluZ1VybFNlZ21lbnRzLmxlbmd0aCA/IG51bGwgOiBhY2NSZXN1bHQ7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3RQYXJhbXNJZlBhdGhNYXRjaGVzVXJsUHJlZml4KFxuICAgIHVybFNlZ21lbnRzOiBzdHJpbmdbXSxcbiAgICBwYXRoU2VnbWVudHM6IHN0cmluZ1tdXG4gICk6IG9iamVjdCB7XG4gICAgY29uc3QgcGFyYW1zID0ge307XG4gICAgY29uc3QgcGF0aFNlZ21lbnRzTGVuZ3RoID0gcGF0aFNlZ21lbnRzLmxlbmd0aDtcbiAgICBjb25zdCB1cmxTZWdtZW50c0xlbmd0aCA9IHVybFNlZ21lbnRzLmxlbmd0aDtcbiAgICBpZiAodXJsU2VnbWVudHNMZW5ndGggPCBwYXRoU2VnbWVudHNMZW5ndGgpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFNlZ21lbnRzTGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhdGhTZWdtZW50ID0gcGF0aFNlZ21lbnRzW2ldO1xuICAgICAgY29uc3QgdXJsU2VnbWVudCA9IHVybFNlZ21lbnRzW2ldO1xuXG4gICAgICBpZiAoaXNQYXJhbShwYXRoU2VnbWVudCkpIHtcbiAgICAgICAgY29uc3QgcGFyYW1OYW1lID0gZ2V0UGFyYW1OYW1lKHBhdGhTZWdtZW50KTtcbiAgICAgICAgcGFyYW1zW3BhcmFtTmFtZV0gPSB1cmxTZWdtZW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHBhdGhTZWdtZW50ICE9PSB1cmxTZWdtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhcmFtcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGRlZmF1bHRSb3V0ZXNUcmFuc2xhdGlvbnMoKTogUm91dGVzVHJhbnNsYXRpb25zIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXNDb25maWdMb2FkZXIucm91dGVzQ29uZmlnLnRyYW5zbGF0aW9uc1xuICAgICAgLmRlZmF1bHQgYXMgUm91dGVzVHJhbnNsYXRpb25zO1xuICB9XG59XG4iXX0=