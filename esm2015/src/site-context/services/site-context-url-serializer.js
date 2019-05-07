/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DefaultUrlSerializer } from '@angular/router';
import { Injectable } from '@angular/core';
import { SiteContextParamsService } from '../facade/site-context-params.service';
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
            this.config.siteContext.urlEncodingParameters || [];
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
            .map(param => {
            return params[param]
                ? params[param]
                : this.siteContextParams.getValue(param);
        })
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDakYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFFbEUsb0NBRUM7Ozs7QUFFRCw0Q0FFQzs7O0lBREMsNkNBQTZCOztBQUkvQixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsb0JBQW9COzs7OztJQU9oRSxZQUNVLGlCQUEyQyxFQUMzQyxNQUF5QjtRQUVqQyxLQUFLLEVBQUUsQ0FBQztRQUhBLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFDM0MsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFHakMsSUFBSSxDQUFDLHFCQUFxQjtZQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsSUFBSSxFQUFFLENBQUM7SUFDeEQsQ0FBQzs7OztJQVhELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFXRCxLQUFLLENBQUMsR0FBVztRQUNmLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFOztrQkFDckIsYUFBYSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUM7O2tCQUNyRCxNQUFNLEdBQUcsbUJBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFD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IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1WYWx1ZXNNYXAge1xuICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVybFRyZWVXaXRoU2l0ZUNvbnRleHQgZXh0ZW5kcyBVcmxUcmVlIHtcbiAgc2l0ZUNvbnRleHQ/OiBQYXJhbVZhbHVlc01hcDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0VXJsU2VyaWFsaXplciBleHRlbmRzIERlZmF1bHRVcmxTZXJpYWxpemVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSB1cmxFbmNvZGluZ1BhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXG4gIGdldCBoYXNDb250ZXh0SW5Sb3V0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHNpdGVDb250ZXh0UGFyYW1zOiBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnXG4gICkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMgPVxuICAgICAgdGhpcy5jb25maWcuc2l0ZUNvbnRleHQudXJsRW5jb2RpbmdQYXJhbWV0ZXJzIHx8IFtdO1xuICB9XG5cbiAgcGFyc2UodXJsOiBzdHJpbmcpOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0IHtcbiAgICBpZiAodGhpcy5oYXNDb250ZXh0SW5Sb3V0ZXMpIHtcbiAgICAgIGNvbnN0IHVybFdpdGhQYXJhbXMgPSB0aGlzLnVybEV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyh1cmwpO1xuICAgICAgY29uc3QgcGFyc2VkID0gc3VwZXIucGFyc2UodXJsV2l0aFBhcmFtcy51cmwpIGFzIFVybFRyZWVXaXRoU2l0ZUNvbnRleHQ7XG4gICAgICB0aGlzLnVybFRyZWVJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnMocGFyc2VkLCB1cmxXaXRoUGFyYW1zLnBhcmFtcyk7XG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIucGFyc2UodXJsKTtcbiAgICB9XG4gIH1cblxuICB1cmxFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnMoXG4gICAgdXJsOiBzdHJpbmdcbiAgKTogeyB1cmw6IHN0cmluZzsgcGFyYW1zOiBQYXJhbVZhbHVlc01hcCB9IHtcbiAgICBjb25zdCBzZWdtZW50cyA9IHVybC5zcGxpdCgnLycpO1xuICAgIGlmIChzZWdtZW50c1swXSA9PT0gJycpIHtcbiAgICAgIHNlZ21lbnRzLnNoaWZ0KCk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuXG4gICAgbGV0IHBhcmFtSWQgPSAwO1xuICAgIGxldCBzZWdtZW50SWQgPSAwO1xuICAgIHdoaWxlIChcbiAgICAgIHBhcmFtSWQgPCB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGggJiZcbiAgICAgIHNlZ21lbnRJZCA8IHNlZ21lbnRzLmxlbmd0aFxuICAgICkge1xuICAgICAgY29uc3QgcGFyYW1OYW1lID0gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnNbcGFyYW1JZF07XG4gICAgICBjb25zdCBwYXJhbVZhbHVlcyA9IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0UGFyYW1WYWx1ZXMocGFyYW1OYW1lKTtcblxuICAgICAgaWYgKHBhcmFtVmFsdWVzLmluY2x1ZGVzKHNlZ21lbnRzW3NlZ21lbnRJZF0pKSB7XG4gICAgICAgIHBhcmFtc1twYXJhbU5hbWVdID0gc2VnbWVudHNbc2VnbWVudElkXTtcbiAgICAgICAgc2VnbWVudElkKys7XG4gICAgICB9XG4gICAgICBwYXJhbUlkKys7XG4gICAgfVxuXG4gICAgdXJsID0gc2VnbWVudHMuc2xpY2UoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGgpLmpvaW4oJy8nKTtcbiAgICByZXR1cm4geyB1cmwsIHBhcmFtcyB9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cmxUcmVlSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybFRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHQsXG4gICAgcGFyYW1zOiBQYXJhbVZhbHVlc01hcFxuICApIHtcbiAgICB1cmxUcmVlLnNpdGVDb250ZXh0ID0gcGFyYW1zO1xuICB9XG5cbiAgc2VyaWFsaXplKHRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHQpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMudXJsVHJlZUV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyh0cmVlKTtcbiAgICBjb25zdCB1cmwgPSBzdXBlci5zZXJpYWxpemUodHJlZSk7XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IHRoaXMudXJsSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKHVybCwgcGFyYW1zKTtcbiAgICByZXR1cm4gc2VyaWFsaXplZDtcbiAgfVxuXG4gIHVybFRyZWVFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnMoXG4gICAgdXJsVHJlZTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dFxuICApOiBQYXJhbVZhbHVlc01hcCB7XG4gICAgcmV0dXJuIHVybFRyZWUuc2l0ZUNvbnRleHQgPyB1cmxUcmVlLnNpdGVDb250ZXh0IDoge307XG4gIH1cblxuICBwcml2YXRlIHVybEluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyh1cmw6IHN0cmluZywgcGFyYW1zOiBQYXJhbVZhbHVlc01hcCkge1xuICAgIGNvbnN0IGNvbnRleHRSb3V0ZVBhcnQgPSB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVyc1xuICAgICAgLm1hcChwYXJhbSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJhbXNbcGFyYW1dXG4gICAgICAgICAgPyBwYXJhbXNbcGFyYW1dXG4gICAgICAgICAgOiB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFZhbHVlKHBhcmFtKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignLycpO1xuXG4gICAgcmV0dXJuIGNvbnRleHRSb3V0ZVBhcnQgKyB1cmw7XG4gIH1cbn1cbiJdfQ==