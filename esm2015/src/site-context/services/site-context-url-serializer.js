/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DefaultUrlSerializer } from '@angular/router';
import { Injectable } from '@angular/core';
import { SiteContextParamsService } from './site-context-params.service';
import { SiteContextConfig } from '../config/site-context-config';
/**
 * @record
 */
export function ParamValuesMap() { }
/**
 * @record
 */
export function UrlTreeWithSiteContext() { }
if (false) {
    /** @type {?|undefined} */
    UrlTreeWithSiteContext.prototype.siteContext;
}
export class SiteContextUrlSerializer extends DefaultUrlSerializer {
    /**
     * @param {?} siteContextParams
     * @param {?} config
     */
    constructor(siteContextParams, config) {
        super();
        this.siteContextParams = siteContextParams;
        this.config = config;
        this.urlEncodingParameters =
            (this.config.context && this.config.context.urlEncodingParameters) || [];
    }
    /**
     * @return {?}
     */
    get hasContextInRoutes() {
        return this.urlEncodingParameters.length > 0;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    parse(url) {
        if (this.hasContextInRoutes) {
            /** @type {?} */
            const urlWithParams = this.urlExtractContextParameters(url);
            /** @type {?} */
            const parsed = (/** @type {?} */ (super.parse(urlWithParams.url)));
            this.urlTreeIncludeContextParameters(parsed, urlWithParams.params);
            return parsed;
        }
        else {
            return super.parse(url);
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    urlExtractContextParameters(url) {
        /** @type {?} */
        const segments = url.split('/');
        if (segments[0] === '') {
            segments.shift();
        }
        /** @type {?} */
        const params = {};
        /** @type {?} */
        let paramId = 0;
        /** @type {?} */
        let segmentId = 0;
        while (paramId < this.urlEncodingParameters.length &&
            segmentId < segments.length) {
            /** @type {?} */
            const paramName = this.urlEncodingParameters[paramId];
            /** @type {?} */
            const paramValues = this.siteContextParams.getParamValues(paramName);
            if (paramValues.includes(segments[segmentId])) {
                params[paramName] = segments[segmentId];
                segmentId++;
            }
            paramId++;
        }
        url = segments.slice(Object.keys(params).length).join('/');
        return { url, params };
    }
    /**
     * @private
     * @param {?} urlTree
     * @param {?} params
     * @return {?}
     */
    urlTreeIncludeContextParameters(urlTree, params) {
        urlTree.siteContext = params;
    }
    /**
     * @param {?} tree
     * @return {?}
     */
    serialize(tree) {
        /** @type {?} */
        const params = this.urlTreeExtractContextParameters(tree);
        /** @type {?} */
        const url = super.serialize(tree);
        /** @type {?} */
        const serialized = this.urlIncludeContextParameters(url, params);
        return serialized;
    }
    /**
     * @param {?} urlTree
     * @return {?}
     */
    urlTreeExtractContextParameters(urlTree) {
        return urlTree.siteContext ? urlTree.siteContext : {};
    }
    /**
     * @private
     * @param {?} url
     * @param {?} params
     * @return {?}
     */
    urlIncludeContextParameters(url, params) {
        /** @type {?} */
        const contextRoutePart = this.urlEncodingParameters
            .map((/**
         * @param {?} param
         * @return {?}
         */
        param => {
            return params[param]
                ? params[param]
                : this.siteContextParams.getValue(param);
        }))
            .join('/');
        return contextRoutePart + url;
    }
}
SiteContextUrlSerializer.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextUrlSerializer.ctorParameters = () => [
    { type: SiteContextParamsService },
    { type: SiteContextConfig }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SiteContextUrlSerializer.prototype.urlEncodingParameters;
    /**
     * @type {?}
     * @private
     */
    SiteContextUrlSerializer.prototype.siteContextParams;
    /**
     * @type {?}
     * @private
     */
    SiteContextUrlSerializer.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFFbEUsb0NBRUM7Ozs7QUFFRCw0Q0FFQzs7O0lBREMsNkNBQTZCOztBQUkvQixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsb0JBQW9COzs7OztJQU9oRSxZQUNVLGlCQUEyQyxFQUMzQyxNQUF5QjtRQUVqQyxLQUFLLEVBQUUsQ0FBQztRQUhBLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFDM0MsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFHakMsSUFBSSxDQUFDLHFCQUFxQjtZQUN4QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzdFLENBQUM7Ozs7SUFYRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBV0QsS0FBSyxDQUFDLEdBQVc7UUFDZixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTs7a0JBQ3JCLGFBQWEsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsR0FBRyxDQUFDOztrQkFDckQsTUFBTSxHQUFHLG1CQUFB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dCI6WyJpbXBvcnQgeyBEZWZhdWx0VXJsU2VyaWFsaXplciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJhbVZhbHVlc01hcCB7XG4gIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsVHJlZVdpdGhTaXRlQ29udGV4dCBleHRlbmRzIFVybFRyZWUge1xuICBzaXRlQ29udGV4dD86IFBhcmFtVmFsdWVzTWFwO1xufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyIGV4dGVuZHMgRGVmYXVsdFVybFNlcmlhbGl6ZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHVybEVuY29kaW5nUGFyYW1ldGVyczogc3RyaW5nW107XG5cbiAgZ2V0IGhhc0NvbnRleHRJblJvdXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2l0ZUNvbnRleHRQYXJhbXM6IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWdcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVycyA9XG4gICAgICAodGhpcy5jb25maWcuY29udGV4dCAmJiB0aGlzLmNvbmZpZy5jb250ZXh0LnVybEVuY29kaW5nUGFyYW1ldGVycykgfHwgW107XG4gIH1cblxuICBwYXJzZSh1cmw6IHN0cmluZyk6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHQge1xuICAgIGlmICh0aGlzLmhhc0NvbnRleHRJblJvdXRlcykge1xuICAgICAgY29uc3QgdXJsV2l0aFBhcmFtcyA9IHRoaXMudXJsRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKHVybCk7XG4gICAgICBjb25zdCBwYXJzZWQgPSBzdXBlci5wYXJzZSh1cmxXaXRoUGFyYW1zLnVybCkgYXMgVXJsVHJlZVdpdGhTaXRlQ29udGV4dDtcbiAgICAgIHRoaXMudXJsVHJlZUluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyhwYXJzZWQsIHVybFdpdGhQYXJhbXMucGFyYW1zKTtcbiAgICAgIHJldHVybiBwYXJzZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdXBlci5wYXJzZSh1cmwpO1xuICAgIH1cbiAgfVxuXG4gIHVybEV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyhcbiAgICB1cmw6IHN0cmluZ1xuICApOiB7IHVybDogc3RyaW5nOyBwYXJhbXM6IFBhcmFtVmFsdWVzTWFwIH0ge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gdXJsLnNwbGl0KCcvJyk7XG4gICAgaWYgKHNlZ21lbnRzWzBdID09PSAnJykge1xuICAgICAgc2VnbWVudHMuc2hpZnQoKTtcbiAgICB9XG4gICAgY29uc3QgcGFyYW1zID0ge307XG5cbiAgICBsZXQgcGFyYW1JZCA9IDA7XG4gICAgbGV0IHNlZ21lbnRJZCA9IDA7XG4gICAgd2hpbGUgKFxuICAgICAgcGFyYW1JZCA8IHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCAmJlxuICAgICAgc2VnbWVudElkIDwgc2VnbWVudHMubGVuZ3RoXG4gICAgKSB7XG4gICAgICBjb25zdCBwYXJhbU5hbWUgPSB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVyc1twYXJhbUlkXTtcbiAgICAgIGNvbnN0IHBhcmFtVmFsdWVzID0gdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5nZXRQYXJhbVZhbHVlcyhwYXJhbU5hbWUpO1xuXG4gICAgICBpZiAocGFyYW1WYWx1ZXMuaW5jbHVkZXMoc2VnbWVudHNbc2VnbWVudElkXSkpIHtcbiAgICAgICAgcGFyYW1zW3BhcmFtTmFtZV0gPSBzZWdtZW50c1tzZWdtZW50SWRdO1xuICAgICAgICBzZWdtZW50SWQrKztcbiAgICAgIH1cbiAgICAgIHBhcmFtSWQrKztcbiAgICB9XG5cbiAgICB1cmwgPSBzZWdtZW50cy5zbGljZShPYmplY3Qua2V5cyhwYXJhbXMpLmxlbmd0aCkuam9pbignLycpO1xuICAgIHJldHVybiB7IHVybCwgcGFyYW1zIH07XG4gIH1cblxuICBwcml2YXRlIHVybFRyZWVJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnMoXG4gICAgdXJsVHJlZTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dCxcbiAgICBwYXJhbXM6IFBhcmFtVmFsdWVzTWFwXG4gICkge1xuICAgIHVybFRyZWUuc2l0ZUNvbnRleHQgPSBwYXJhbXM7XG4gIH1cblxuICBzZXJpYWxpemUodHJlZTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dCk6IHN0cmluZyB7XG4gICAgY29uc3QgcGFyYW1zID0gdGhpcy51cmxUcmVlRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKHRyZWUpO1xuICAgIGNvbnN0IHVybCA9IHN1cGVyLnNlcmlhbGl6ZSh0cmVlKTtcbiAgICBjb25zdCBzZXJpYWxpemVkID0gdGhpcy51cmxJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnModXJsLCBwYXJhbXMpO1xuICAgIHJldHVybiBzZXJpYWxpemVkO1xuICB9XG5cbiAgdXJsVHJlZUV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyhcbiAgICB1cmxUcmVlOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0XG4gICk6IFBhcmFtVmFsdWVzTWFwIHtcbiAgICByZXR1cm4gdXJsVHJlZS5zaXRlQ29udGV4dCA/IHVybFRyZWUuc2l0ZUNvbnRleHQgOiB7fTtcbiAgfVxuXG4gIHByaXZhdGUgdXJsSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKHVybDogc3RyaW5nLCBwYXJhbXM6IFBhcmFtVmFsdWVzTWFwKSB7XG4gICAgY29uc3QgY29udGV4dFJvdXRlUGFydCA9IHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzXG4gICAgICAubWFwKHBhcmFtID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcmFtc1twYXJhbV1cbiAgICAgICAgICA/IHBhcmFtc1twYXJhbV1cbiAgICAgICAgICA6IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0VmFsdWUocGFyYW0pO1xuICAgICAgfSlcbiAgICAgIC5qb2luKCcvJyk7XG5cbiAgICByZXR1cm4gY29udGV4dFJvdXRlUGFydCArIHVybDtcbiAgfVxufVxuIl19