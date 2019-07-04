/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { DefaultUrlSerializer } from '@angular/router';
import { Injectable } from '@angular/core';
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
export class SiteContextUrlSerializer extends DefaultUrlSerializer {
    /**
     * @param {?} siteContextParams
     */
    constructor(siteContextParams) {
        super();
        this.siteContextParams = siteContextParams;
        this.urlEncodingParameters = this.siteContextParams.getUrlEncodingParameters();
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
    { type: SiteContextParamsService }
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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFFekUsb0NBRUM7Ozs7QUFFRCw0Q0FFQzs7O0lBREMsNkNBQTZCOztBQUkvQixNQUFNLE9BQU8sd0JBQXlCLFNBQVEsb0JBQW9COzs7O0lBT2hFLFlBQW9CLGlCQUEyQztRQUM3RCxLQUFLLEVBQUUsQ0FBQztRQURVLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBMEI7UUFFN0QsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0lBQ2pGLENBQUM7Ozs7SUFQRCxJQUFJLGtCQUFrQjtRQUNwQixPQUFPLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBT0QsS0FBSyxDQUFDLEdBQVc7UUFDZixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTs7a0JBQ3JCLGFBQWEsR0FBRyxJQUFJLENBQUMsMkJBQTJCLENBQUMsR0FBRyxDQUFDOztrQkFDckQsTUFBTSxHQUFHLG1CQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxFQUEwQjtZQUN2RSxJQUFJLENBQUMsK0JBQStCLENBQUMsTUFBTSxFQUFFLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRSxPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDekI7SUFDSCxDQUFDOzs7OztJQUVELDJCQUEyQixDQUN6QixHQUFXOztjQUVMLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztRQUMvQixJQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDdEIsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2xCOztjQUNLLE1BQU0sR0FBRyxFQUFFOztZQUViLE9BQU8sR0FBRyxDQUFDOztZQUNYLFNBQVMsR0FBRyxDQUFDO1FBQ2pCLE9BQ0UsT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNO1lBQzNDLFNBQVMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUMzQjs7a0JBQ00sU0FBUyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUM7O2tCQUMvQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7WUFFcEUsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFO2dCQUM3QyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUN4QyxTQUFTLEVBQUUsQ0FBQzthQUNiO1lBQ0QsT0FBTyxFQUFFLENBQUM7U0FDWDtRQUVELEdBQUcsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzNELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7OztJQUVPLCtCQUErQixDQUNyQyxPQUErQixFQUMvQixNQUFzQjtRQUV0QixPQUFPLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUMvQixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUE0Qjs7Y0FDOUIsTUFBTSxHQUFHLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxJQUFJLENBQUM7O2NBQ25ELEdBQUcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzs7Y0FDM0IsVUFBVSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDO1FBQ2hFLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBRUQsK0JBQStCLENBQzdCLE9BQStCO1FBRS9CLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hELENBQUM7Ozs7Ozs7SUFFTywyQkFBMkIsQ0FBQyxHQUFXLEVBQUUsTUFBc0I7O2NBQy9ELGdCQUFnQixHQUFHLElBQUksQ0FBQyxxQkFBcUI7YUFDaEQsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1gsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNsQixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDZixDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUM7YUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDO1FBRVosT0FBTyxnQkFBZ0IsR0FBRyxHQUFHLENBQUM7SUFDaEMsQ0FBQzs7O1lBbkZGLFVBQVU7Ozs7WUFWRix3QkFBd0I7Ozs7Ozs7SUFZL0IseURBQWlEOzs7OztJQU1yQyxxREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZWZhdWx0VXJsU2VyaWFsaXplciwgVXJsVHJlZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UgfSBmcm9tICcuL3NpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1WYWx1ZXNNYXAge1xuICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVybFRyZWVXaXRoU2l0ZUNvbnRleHQgZXh0ZW5kcyBVcmxUcmVlIHtcbiAgc2l0ZUNvbnRleHQ/OiBQYXJhbVZhbHVlc01hcDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0VXJsU2VyaWFsaXplciBleHRlbmRzIERlZmF1bHRVcmxTZXJpYWxpemVyIHtcbiAgcHJpdmF0ZSByZWFkb25seSB1cmxFbmNvZGluZ1BhcmFtZXRlcnM6IHN0cmluZ1tdO1xuXG4gIGdldCBoYXNDb250ZXh0SW5Sb3V0ZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzLmxlbmd0aCA+IDA7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNpdGVDb250ZXh0UGFyYW1zOiBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2UpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzID0gdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5nZXRVcmxFbmNvZGluZ1BhcmFtZXRlcnMoKTtcbiAgfVxuXG4gIHBhcnNlKHVybDogc3RyaW5nKTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dCB7XG4gICAgaWYgKHRoaXMuaGFzQ29udGV4dEluUm91dGVzKSB7XG4gICAgICBjb25zdCB1cmxXaXRoUGFyYW1zID0gdGhpcy51cmxFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnModXJsKTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHN1cGVyLnBhcnNlKHVybFdpdGhQYXJhbXMudXJsKSBhcyBVcmxUcmVlV2l0aFNpdGVDb250ZXh0O1xuICAgICAgdGhpcy51cmxUcmVlSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKHBhcnNlZCwgdXJsV2l0aFBhcmFtcy5wYXJhbXMpO1xuICAgICAgcmV0dXJuIHBhcnNlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHN1cGVyLnBhcnNlKHVybCk7XG4gICAgfVxuICB9XG5cbiAgdXJsRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybDogc3RyaW5nXG4gICk6IHsgdXJsOiBzdHJpbmc7IHBhcmFtczogUGFyYW1WYWx1ZXNNYXAgfSB7XG4gICAgY29uc3Qgc2VnbWVudHMgPSB1cmwuc3BsaXQoJy8nKTtcbiAgICBpZiAoc2VnbWVudHNbMF0gPT09ICcnKSB7XG4gICAgICBzZWdtZW50cy5zaGlmdCgpO1xuICAgIH1cbiAgICBjb25zdCBwYXJhbXMgPSB7fTtcblxuICAgIGxldCBwYXJhbUlkID0gMDtcbiAgICBsZXQgc2VnbWVudElkID0gMDtcbiAgICB3aGlsZSAoXG4gICAgICBwYXJhbUlkIDwgdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoICYmXG4gICAgICBzZWdtZW50SWQgPCBzZWdtZW50cy5sZW5ndGhcbiAgICApIHtcbiAgICAgIGNvbnN0IHBhcmFtTmFtZSA9IHRoaXMudXJsRW5jb2RpbmdQYXJhbWV0ZXJzW3BhcmFtSWRdO1xuICAgICAgY29uc3QgcGFyYW1WYWx1ZXMgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFBhcmFtVmFsdWVzKHBhcmFtTmFtZSk7XG5cbiAgICAgIGlmIChwYXJhbVZhbHVlcy5pbmNsdWRlcyhzZWdtZW50c1tzZWdtZW50SWRdKSkge1xuICAgICAgICBwYXJhbXNbcGFyYW1OYW1lXSA9IHNlZ21lbnRzW3NlZ21lbnRJZF07XG4gICAgICAgIHNlZ21lbnRJZCsrO1xuICAgICAgfVxuICAgICAgcGFyYW1JZCsrO1xuICAgIH1cblxuICAgIHVybCA9IHNlZ21lbnRzLnNsaWNlKE9iamVjdC5rZXlzKHBhcmFtcykubGVuZ3RoKS5qb2luKCcvJyk7XG4gICAgcmV0dXJuIHsgdXJsLCBwYXJhbXMgfTtcbiAgfVxuXG4gIHByaXZhdGUgdXJsVHJlZUluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyhcbiAgICB1cmxUcmVlOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0LFxuICAgIHBhcmFtczogUGFyYW1WYWx1ZXNNYXBcbiAgKSB7XG4gICAgdXJsVHJlZS5zaXRlQ29udGV4dCA9IHBhcmFtcztcbiAgfVxuXG4gIHNlcmlhbGl6ZSh0cmVlOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0KTogc3RyaW5nIHtcbiAgICBjb25zdCBwYXJhbXMgPSB0aGlzLnVybFRyZWVFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnModHJlZSk7XG4gICAgY29uc3QgdXJsID0gc3VwZXIuc2VyaWFsaXplKHRyZWUpO1xuICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSB0aGlzLnVybEluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyh1cmwsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHNlcmlhbGl6ZWQ7XG4gIH1cblxuICB1cmxUcmVlRXh0cmFjdENvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybFRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHRcbiAgKTogUGFyYW1WYWx1ZXNNYXAge1xuICAgIHJldHVybiB1cmxUcmVlLnNpdGVDb250ZXh0ID8gdXJsVHJlZS5zaXRlQ29udGV4dCA6IHt9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cmxJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnModXJsOiBzdHJpbmcsIHBhcmFtczogUGFyYW1WYWx1ZXNNYXApIHtcbiAgICBjb25zdCBjb250ZXh0Um91dGVQYXJ0ID0gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnNcbiAgICAgIC5tYXAocGFyYW0gPT4ge1xuICAgICAgICByZXR1cm4gcGFyYW1zW3BhcmFtXVxuICAgICAgICAgID8gcGFyYW1zW3BhcmFtXVxuICAgICAgICAgIDogdGhpcy5zaXRlQ29udGV4dFBhcmFtcy5nZXRWYWx1ZShwYXJhbSk7XG4gICAgICB9KVxuICAgICAgLmpvaW4oJy8nKTtcblxuICAgIHJldHVybiBjb250ZXh0Um91dGVQYXJ0ICsgdXJsO1xuICB9XG59XG4iXX0=