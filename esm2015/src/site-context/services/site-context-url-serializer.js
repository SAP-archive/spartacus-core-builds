/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { DefaultUrlSerializer } from '@angular/router';
import { SiteContextParamsService } from './site-context-params.service';
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
/** @type {?} */
const UrlSplit = /(^[^#?]*)(.*)/;
// used to split url into path and query/fragment parts
export class SiteContextUrlSerializer extends DefaultUrlSerializer {
    /**
     * @param {?} siteContextParams
     */
    constructor(siteContextParams) {
        super();
        this.siteContextParams = siteContextParams;
    }
    /**
     * @private
     * @return {?}
     */
    get urlEncodingParameters() {
        return this.siteContextParams.getUrlEncodingParameters();
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
        const [, urlPart, queryPart] = url.match(UrlSplit);
        /** @type {?} */
        const segments = urlPart.split('/');
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
        url = segments.slice(Object.keys(params).length).join('/') + queryPart;
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
    { type: SiteContextParamsService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SiteContextUrlSerializer.prototype.siteContextParams;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLG9CQUFvQixFQUFXLE1BQU0saUJBQWlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFFekUsb0NBRUM7Ozs7QUFFRCw0Q0FFQzs7O0lBREMsNkNBQTZCOzs7TUFHekIsUUFBUSxHQUFHLGVBQWU7O0FBR2hDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxvQkFBb0I7Ozs7SUFTaEUsWUFBb0IsaUJBQTJDO1FBQzdELEtBQUssRUFBRSxDQUFDO1FBRFUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtJQUUvRCxDQUFDOzs7OztJQVZELElBQVkscUJBQXFCO1FBQy9CLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDM0QsQ0FBQzs7OztJQUVELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFNRCxLQUFLLENBQUMsR0FBVztRQUNmLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFOztrQkFDckIsYUFBYSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUM7O2tCQUNyRCxNQUFNLEdBQUcsbUJBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQTBCO1lBQ3ZFLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRUQsMkJBQTJCLENBQ3pCLEdBQVc7Y0FFTCxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDOztjQUU1QyxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbkMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3RCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsQjs7Y0FDSyxNQUFNLEdBQUcsRUFBRTs7WUFFYixPQUFPLEdBQUcsQ0FBQzs7WUFDWCxTQUFTLEdBQUcsQ0FBQztRQUNqQixPQUNFLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTTtZQUMzQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFDM0I7O2tCQUNNLFNBQVMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDOztrQkFDL0MsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1lBRXBFLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRTtnQkFDN0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDeEMsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNELE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDdkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7O0lBRU8sK0JBQStCLENBQ3JDLE9BQStCLEVBQy9CLE1BQXNCO1FBRXRCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQTRCOztjQUM5QixNQUFNLEdBQUcsSUFBSSxDQUFDLCtCQUErQixDQUFDLElBQUksQ0FBQzs7Y0FDbkQsR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDOztjQUMzQixVQUFVLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7UUFDaEUsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCwrQkFBK0IsQ0FDN0IsT0FBK0I7UUFFL0IsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEQsQ0FBQzs7Ozs7OztJQUVPLDJCQUEyQixDQUFDLEdBQVcsRUFBRSxNQUFzQjs7Y0FDL0QsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQjthQUNoRCxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQzthQUNELElBQUksQ0FBQyxHQUFHLENBQUM7UUFFWixPQUFPLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDOzs7WUF0RkYsVUFBVTs7OztZQVpGLHdCQUF3Qjs7Ozs7OztJQXNCbkIscURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGVmYXVsdFVybFNlcmlhbGl6ZXIsIFVybFRyZWUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIH0gZnJvbSAnLi9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBhcmFtVmFsdWVzTWFwIHtcbiAgW25hbWU6IHN0cmluZ106IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxUcmVlV2l0aFNpdGVDb250ZXh0IGV4dGVuZHMgVXJsVHJlZSB7XG4gIHNpdGVDb250ZXh0PzogUGFyYW1WYWx1ZXNNYXA7XG59XG5cbmNvbnN0IFVybFNwbGl0ID0gLyheW14jP10qKSguKikvOyAvLyB1c2VkIHRvIHNwbGl0IHVybCBpbnRvIHBhdGggYW5kIHF1ZXJ5L2ZyYWdtZW50IHBhcnRzXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFVybFNlcmlhbGl6ZXIgZXh0ZW5kcyBEZWZhdWx0VXJsU2VyaWFsaXplciB7XG4gIHByaXZhdGUgZ2V0IHVybEVuY29kaW5nUGFyYW1ldGVycygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0VXJsRW5jb2RpbmdQYXJhbWV0ZXJzKCk7XG4gIH1cblxuICBnZXQgaGFzQ29udGV4dEluUm91dGVzKCkge1xuICAgIHJldHVybiB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGggPiAwO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzaXRlQ29udGV4dFBhcmFtczogU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHBhcnNlKHVybDogc3RyaW5nKTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dCB7XG4gICAgaWYgKHRoaXMuaGFzQ29udGV4dEluUm91dGVzKSB7XG4gICAgICBjb25zdCB1cmxXaXRoUGFyYW1zID0gdGhpcy51cmxFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnModXJsKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHN1cGVyLnBhcnNlKHVybFdpdGhQYXJhbXMudXJsKSBhcyBVcmxUcmVlV2l0aFNpdGVDb250ZXh0O1xuICAgICAgdGhpcy51cmxUcmVlSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKHBhcnNlZCwgdXJsV2l0aFBhcmFtcy5wYXJhbXMpO1xuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1cGVyLnBhcnNlKHVybCk7XG4gICAgfVxuICB9XG5cbiAgdXJsRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybDogc3RyaW5nXG4gICk6IHsgdXJsOiBzdHJpbmc7IHBhcmFtczogUGFyYW1WYWx1ZXNNYXAgfSB7XG4gICAgY29uc3QgWywgdXJsUGFydCwgcXVlcnlQYXJ0XSA9IHVybC5tYXRjaChVcmxTcGxpdCk7XG5cbiAgICBjb25zdCBzZWdtZW50cyA9IHVybFBhcnQuc3BsaXQoJy8nKTtcbiAgICBpZiAoc2VnbWVudHNbMF0gPT09ICcnKSB7XG4gICAgICBzZWdtZW50cy5zaGlmdCgpO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgIGxldCBwYXJhbUlkID0gMDtcbiAgICBsZXQgc2VnbWVudElkID0gMDtcbiAgICB3aGlsZSAoXG4gICAgICBwYXJhbUlkIDwgdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoICYmXG4gICAgICBzZWdtZW50SWQgPCBzZWdtZW50cy5sZW5ndGhcbiAgICApIHtcbiAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzW3BhcmFtSWRdO1xuICAgICAgY29uc3QgcGFyYW1WYWx1ZXMgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFBhcmFtVmFsdWVzKHBhcmFtTmFtZSk7XG5cbiAgICAgIGlmIChwYXJhbVZhbHVlcy5pbmNsdWRlcyhzZWdtZW50c1tzZWdtZW50SWRdKSkge1xuICAgICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IHNlZ21lbnRzW3NlZ21lbnRJZF07XG4gICAgICAgIHNlZ21lbnRJZCsrO1xuICAgICAgfVxuICAgICAgcGFyYW1JZCsrO1xuICAgIH1cblxuICAgIHVybCA9IHNlZ21lbnRzLnNsaWNlKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoKS5qb2luKCcvJykgKyBxdWVyeVBhcnQ7XG4gICAgcmV0dXJuIHsgdXJsLCBwYXJhbXMgfTtcbiAgfVxuXG4gIHByaXZhdGUgdXJsVHJlZUluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyhcbiAgICB1cmxUcmVlOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0LFxuICAgIHBhcmFtczogUGFyYW1WYWx1ZXNNYXBcbiAgKSB7XG4gICAgdXJsVHJlZS5zaXRlQ29udGV4dCA9IHBhcmFtcztcbiAgfVxuXG4gIHNlcmlhbGl6ZSh0cmVlOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0KTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLnVybFRyZWVFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnModHJlZSk7XG4gICAgY29uc3QgdXJsID0gc3VwZXIuc2VyaWFsaXplKHRyZWUpO1xuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSB0aGlzLnVybEluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyh1cmwsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gIH1cblxuICB1cmxUcmVlRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybFRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHRcbiAgKTogUGFyYW1WYWx1ZXNNYXAge1xuICAgIHJldHVybiB1cmxUcmVlLnNpdGVDb250ZXh0ID8gdXJsVHJlZS5zaXRlQ29udGV4dCA6IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cmxJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnModXJsOiBzdHJpbmcsIHBhcmFtczogUGFyYW1WYWx1ZXNNYXApIHtcbiAgICBjb25zdCBjb250ZXh0Um91dGVQYXJ0ID0gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgIC5tYXAocGFyYW0gPT4ge1xuICAgICAgICByZXR1cm4gcGFyYW1zW3BhcmFtXVxuICAgICAgICAgID8gcGFyYW1zW3BhcmFtXVxuICAgICAgICAgIDogdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5nZXRWYWx1ZShwYXJhbSk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJy8nKTtcblxuICAgIHJldHVybiBjb250ZXh0Um91dGVQYXJ0ICsgdXJsO1xuICB9XG59XG4iXX0=