/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
    SiteContextUrlSerializer.prototype.urlEncodingParameters;
    /**
     * @type {?}
     * @private
     */
    SiteContextUrlSerializer.prototype.siteContextParams;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXVybC1zZXJpYWxpemVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtdXJsLXNlcmlhbGl6ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxvQkFBb0IsRUFBVyxNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7Ozs7QUFFekUsb0NBRUM7Ozs7QUFFRCw0Q0FFQzs7O0lBREMsNkNBQTZCOzs7TUFHekIsUUFBUSxHQUFHLGVBQWU7O0FBR2hDLE1BQU0sT0FBTyx3QkFBeUIsU0FBUSxvQkFBb0I7Ozs7SUFPaEUsWUFBb0IsaUJBQTJDO1FBQzdELEtBQUssRUFBRSxDQUFDO1FBRFUsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUEwQjtRQUU3RCxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixFQUFFLENBQUM7SUFDakYsQ0FBQzs7OztJQVBELElBQUksa0JBQWtCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFPRCxLQUFLLENBQUMsR0FBVztRQUNmLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFOztrQkFDckIsYUFBYSxHQUFHLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLENBQUM7O2tCQUNyRCxNQUFNLEdBQUcsbUJBQUEsS0FBSyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQTBCO1lBQ3ZFLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ25FLE9BQU8sTUFBTSxDQUFDO1NBQ2Y7YUFBTTtZQUNMLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7Ozs7O0lBRUQsMkJBQTJCLENBQ3pCLEdBQVc7Y0FFTCxDQUFDLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDOztjQUU1QyxRQUFRLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFDbkMsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ3RCLFFBQVEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNsQjs7Y0FDSyxNQUFNLEdBQUcsRUFBRTs7WUFFYixPQUFPLEdBQUcsQ0FBQzs7WUFDWCxTQUFTLEdBQUcsQ0FBQztRQUNqQixPQUNFLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTTtZQUMzQyxTQUFTLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFDM0I7O2tCQUNNLFNBQVMsR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsT0FBTyxDQUFDOztrQkFDL0MsV0FBVyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO1lBRXBFLElBQUksV0FBVyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRTtnQkFDN0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDeEMsU0FBUyxFQUFFLENBQUM7YUFDYjtZQUNELE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxHQUFHLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxTQUFTLENBQUM7UUFDdkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7Ozs7O0lBRU8sK0JBQStCLENBQ3JDLE9BQStCLEVBQy9CLE1BQXNCO1FBRXRCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQTRCOztjQUM5QixNQUFNLEdBQUcsSUFBSSxDQUFDLCtCQUErQixDQUFDLElBQUksQ0FBQzs7Y0FDbkQsR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDOztjQUMzQixVQUFVLEdBQUcsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUM7UUFDaEUsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQzs7Ozs7SUFFRCwrQkFBK0IsQ0FDN0IsT0FBK0I7UUFFL0IsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDeEQsQ0FBQzs7Ozs7OztJQUVPLDJCQUEyQixDQUFDLEdBQVcsRUFBRSxNQUFzQjs7Y0FDL0QsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHFCQUFxQjthQUNoRCxHQUFHOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUU7WUFDWCxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdDLENBQUMsRUFBQzthQUNELElBQUksQ0FBQyxHQUFHLENBQUM7UUFFWixPQUFPLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDOzs7WUFyRkYsVUFBVTs7OztZQVpGLHdCQUF3Qjs7Ozs7OztJQWMvQix5REFBaUQ7Ozs7O0lBTXJDLHFEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZmF1bHRVcmxTZXJpYWxpemVyLCBVcmxUcmVlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSB9IGZyb20gJy4vc2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlJztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJhbVZhbHVlc01hcCB7XG4gIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVXJsVHJlZVdpdGhTaXRlQ29udGV4dCBleHRlbmRzIFVybFRyZWUge1xuICBzaXRlQ29udGV4dD86IFBhcmFtVmFsdWVzTWFwO1xufVxuXG5jb25zdCBVcmxTcGxpdCA9IC8oXlteIz9dKikoLiopLzsgLy8gdXNlZCB0byBzcGxpdCB1cmwgaW50byBwYXRoIGFuZCBxdWVyeS9mcmFnbWVudCBwYXJ0c1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRVcmxTZXJpYWxpemVyIGV4dGVuZHMgRGVmYXVsdFVybFNlcmlhbGl6ZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHVybEVuY29kaW5nUGFyYW1ldGVyczogc3RyaW5nW107XG5cbiAgZ2V0IGhhc0NvbnRleHRJblJvdXRlcygpIHtcbiAgICByZXR1cm4gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMubGVuZ3RoID4gMDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2l0ZUNvbnRleHRQYXJhbXM6IFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnMgPSB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFVybEVuY29kaW5nUGFyYW1ldGVycygpO1xuICB9XG5cbiAgcGFyc2UodXJsOiBzdHJpbmcpOiBVcmxUcmVlV2l0aFNpdGVDb250ZXh0IHtcbiAgICBpZiAodGhpcy5oYXNDb250ZXh0SW5Sb3V0ZXMpIHtcbiAgICAgIGNvbnN0IHVybFdpdGhQYXJhbXMgPSB0aGlzLnVybEV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyh1cmwpO1xuICAgICAgY29uc3QgcGFyc2VkID0gc3VwZXIucGFyc2UodXJsV2l0aFBhcmFtcy51cmwpIGFzIFVybFRyZWVXaXRoU2l0ZUNvbnRleHQ7XG4gICAgICB0aGlzLnVybFRyZWVJbmNsdWRlQ29udGV4dFBhcmFtZXRlcnMocGFyc2VkLCB1cmxXaXRoUGFyYW1zLnBhcmFtcyk7XG4gICAgICByZXR1cm4gcGFyc2VkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3VwZXIucGFyc2UodXJsKTtcbiAgICB9XG4gIH1cblxuICB1cmxFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnMoXG4gICAgdXJsOiBzdHJpbmdcbiAgKTogeyB1cmw6IHN0cmluZzsgcGFyYW1zOiBQYXJhbVZhbHVlc01hcCB9IHtcbiAgICBjb25zdCBbLCB1cmxQYXJ0LCBxdWVyeVBhcnRdID0gdXJsLm1hdGNoKFVybFNwbGl0KTtcblxuICAgIGNvbnN0IHNlZ21lbnRzID0gdXJsUGFydC5zcGxpdCgnLycpO1xuICAgIGlmIChzZWdtZW50c1swXSA9PT0gJycpIHtcbiAgICAgIHNlZ21lbnRzLnNoaWZ0KCk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtcyA9IHt9O1xuXG4gICAgbGV0IHBhcmFtSWQgPSAwO1xuICAgIGxldCBzZWdtZW50SWQgPSAwO1xuICAgIHdoaWxlIChcbiAgICAgIHBhcmFtSWQgPCB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVycy5sZW5ndGggJiZcbiAgICAgIHNlZ21lbnRJZCA8IHNlZ21lbnRzLmxlbmd0aFxuICAgICkge1xuICAgICAgY29uc3QgcGFyYW1OYW1lID0gdGhpcy51cmxFbmNvZGluZ1BhcmFtZXRlcnNbcGFyYW1JZF07XG4gICAgICBjb25zdCBwYXJhbVZhbHVlcyA9IHRoaXMuc2l0ZUNvbnRleHRQYXJhbXMuZ2V0UGFyYW1WYWx1ZXMocGFyYW1OYW1lKTtcblxuICAgICAgaWYgKHBhcmFtVmFsdWVzLmluY2x1ZGVzKHNlZ21lbnRzW3NlZ21lbnRJZF0pKSB7XG4gICAgICAgIHBhcmFtc1twYXJhbU5hbWVdID0gc2VnbWVudHNbc2VnbWVudElkXTtcbiAgICAgICAgc2VnbWVudElkKys7XG4gICAgICB9XG4gICAgICBwYXJhbUlkKys7XG4gICAgfVxuXG4gICAgdXJsID0gc2VnbWVudHMuc2xpY2UoT2JqZWN0LmtleXMocGFyYW1zKS5sZW5ndGgpLmpvaW4oJy8nKSArIHF1ZXJ5UGFydDtcbiAgICByZXR1cm4geyB1cmwsIHBhcmFtcyB9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cmxUcmVlSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKFxuICAgIHVybFRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHQsXG4gICAgcGFyYW1zOiBQYXJhbVZhbHVlc01hcFxuICApIHtcbiAgICB1cmxUcmVlLnNpdGVDb250ZXh0ID0gcGFyYW1zO1xuICB9XG5cbiAgc2VyaWFsaXplKHRyZWU6IFVybFRyZWVXaXRoU2l0ZUNvbnRleHQpOiBzdHJpbmcge1xuICAgIGNvbnN0IHBhcmFtcyA9IHRoaXMudXJsVHJlZUV4dHJhY3RDb250ZXh0UGFyYW1ldGVycyh0cmVlKTtcbiAgICBjb25zdCB1cmwgPSBzdXBlci5zZXJpYWxpemUodHJlZSk7XG4gICAgY29uc3Qgc2VyaWFsaXplZCA9IHRoaXMudXJsSW5jbHVkZUNvbnRleHRQYXJhbWV0ZXJzKHVybCwgcGFyYW1zKTtcbiAgICByZXR1cm4gc2VyaWFsaXplZDtcbiAgfVxuXG4gIHVybFRyZWVFeHRyYWN0Q29udGV4dFBhcmFtZXRlcnMoXG4gICAgdXJsVHJlZTogVXJsVHJlZVdpdGhTaXRlQ29udGV4dFxuICApOiBQYXJhbVZhbHVlc01hcCB7XG4gICAgcmV0dXJuIHVybFRyZWUuc2l0ZUNvbnRleHQgPyB1cmxUcmVlLnNpdGVDb250ZXh0IDoge307XG4gIH1cblxuICBwcml2YXRlIHVybEluY2x1ZGVDb250ZXh0UGFyYW1ldGVycyh1cmw6IHN0cmluZywgcGFyYW1zOiBQYXJhbVZhbHVlc01hcCkge1xuICAgIGNvbnN0IGNvbnRleHRSb3V0ZVBhcnQgPSB0aGlzLnVybEVuY29kaW5nUGFyYW1ldGVyc1xuICAgICAgLm1hcChwYXJhbSA9PiB7XG4gICAgICAgIHJldHVybiBwYXJhbXNbcGFyYW1dXG4gICAgICAgICAgPyBwYXJhbXNbcGFyYW1dXG4gICAgICAgICAgOiB0aGlzLnNpdGVDb250ZXh0UGFyYW1zLmdldFZhbHVlKHBhcmFtKTtcbiAgICAgIH0pXG4gICAgICAuam9pbignLycpO1xuXG4gICAgcmV0dXJuIGNvbnRleHRSb3V0ZVBhcnQgKyB1cmw7XG4gIH1cbn1cbiJdfQ==