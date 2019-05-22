/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { SiteContextConfig, } from '../config/site-context-config';
import { ContextServiceMap } from '../providers/context-service-map';
export class SiteContextParamsService {
    /**
     * @param {?} config
     * @param {?} injector
     * @param {?} serviceMap
     */
    constructor(config, injector, serviceMap) {
        this.config = config;
        this.injector = injector;
        this.serviceMap = serviceMap;
    }
    /**
     * @param {?=} persistence
     * @return {?}
     */
    getContextParameters(persistence) {
        /** @type {?} */
        const contextConfig = this.config.siteContext.parameters;
        if (contextConfig) {
            /** @type {?} */
            const params = Object.keys(contextConfig);
            if (persistence) {
                return params.filter(key => contextConfig[key].persistence === persistence);
            }
            else {
                return params;
            }
        }
        return [];
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getParamValues(param) {
        return this.config.siteContext.parameters &&
            this.config.siteContext.parameters[param]
            ? this.config.siteContext.parameters[param].values
            : undefined;
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getParamDefaultValue(param) {
        return this.config.siteContext.parameters &&
            this.config.siteContext.parameters[param]
            ? this.config.siteContext.parameters[param].defaultValue
            : undefined;
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getSiteContextService(param) {
        if (this.serviceMap[param]) {
            return this.injector.get(this.serviceMap[param], null);
        }
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getValue(param) {
        /** @type {?} */
        let value;
        /** @type {?} */
        const service = this.getSiteContextService(param);
        if (service) {
            service
                .getActive()
                .subscribe(val => (value = val))
                .unsubscribe();
        }
        return value !== undefined ? value : this.getParamDefaultValue(param);
    }
    /**
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    setValue(param, value) {
        /** @type {?} */
        const service = this.getSiteContextService(param);
        if (service) {
            service.setActive(value);
        }
    }
}
SiteContextParamsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
SiteContextParamsService.ctorParameters = () => [
    { type: SiteContextConfig },
    { type: Injector },
    { type: ContextServiceMap }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    SiteContextParamsService.prototype.config;
    /**
     * @type {?}
     * @private
     */
    SiteContextParamsService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    SiteContextParamsService.prototype.serviceMap;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFFTCxpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUdyRSxNQUFNLE9BQU8sd0JBQXdCOzs7Ozs7SUFDbkMsWUFDVSxNQUF5QixFQUN6QixRQUFrQixFQUNsQixVQUE2QjtRQUY3QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQW1CO0lBQ3BDLENBQUM7Ozs7O0lBRUosb0JBQW9CLENBQUMsV0FBcUM7O2NBQ2xELGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1FBQ3hELElBQUksYUFBYSxFQUFFOztrQkFDWCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDekMsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUNsQixHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEtBQUssV0FBVyxDQUN0RCxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLENBQUM7YUFDZjtTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTTtZQUNsRCxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsS0FBYTtRQUNoQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVk7WUFDeEQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLEtBQWE7UUFDakMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDOzs7OztJQUVELFFBQVEsQ0FBQyxLQUFhOztZQUNoQixLQUFhOztjQUVYLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTztpQkFDSixTQUFTLEVBQUU7aUJBQ1gsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7aUJBQy9CLFdBQVcsRUFBRSxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RSxDQUFDOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYSxFQUFFLEtBQWE7O2NBQzdCLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7OztZQTlERixVQUFVOzs7O1lBTFQsaUJBQWlCO1lBSEUsUUFBUTtZQU1wQixpQkFBaUI7Ozs7Ozs7SUFLdEIsMENBQWlDOzs7OztJQUNqQyw0Q0FBMEI7Ozs7O0lBQzFCLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250ZXh0UGFyYW1QZXJzaXN0ZW5jZSxcbiAgU2l0ZUNvbnRleHRDb25maWcsXG59IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vZmFjYWRlL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udGV4dFNlcnZpY2VNYXAgfSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLW1hcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlTWFwOiBDb250ZXh0U2VydmljZU1hcFxuICApIHt9XG5cbiAgZ2V0Q29udGV4dFBhcmFtZXRlcnMocGVyc2lzdGVuY2U/OiBDb250ZXh0UGFyYW1QZXJzaXN0ZW5jZSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjb250ZXh0Q29uZmlnID0gdGhpcy5jb25maWcuc2l0ZUNvbnRleHQucGFyYW1ldGVycztcbiAgICBpZiAoY29udGV4dENvbmZpZykge1xuICAgICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoY29udGV4dENvbmZpZyk7XG4gICAgICBpZiAocGVyc2lzdGVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5maWx0ZXIoXG4gICAgICAgICAga2V5ID0+IGNvbnRleHRDb25maWdba2V5XS5wZXJzaXN0ZW5jZSA9PT0gcGVyc2lzdGVuY2VcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldFBhcmFtVmFsdWVzKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnNpdGVDb250ZXh0LnBhcmFtZXRlcnMgJiZcbiAgICAgIHRoaXMuY29uZmlnLnNpdGVDb250ZXh0LnBhcmFtZXRlcnNbcGFyYW1dXG4gICAgICA/IHRoaXMuY29uZmlnLnNpdGVDb250ZXh0LnBhcmFtZXRlcnNbcGFyYW1dLnZhbHVlc1xuICAgICAgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRQYXJhbURlZmF1bHRWYWx1ZShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuc2l0ZUNvbnRleHQucGFyYW1ldGVycyAmJlxuICAgICAgdGhpcy5jb25maWcuc2l0ZUNvbnRleHQucGFyYW1ldGVyc1twYXJhbV1cbiAgICAgID8gdGhpcy5jb25maWcuc2l0ZUNvbnRleHQucGFyYW1ldGVyc1twYXJhbV0uZGVmYXVsdFZhbHVlXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbTogc3RyaW5nKTogU2l0ZUNvbnRleHQ8YW55PiB7XG4gICAgaWYgKHRoaXMuc2VydmljZU1hcFtwYXJhbV0pIHtcbiAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxTaXRlQ29udGV4dDxhbnk+Pih0aGlzLnNlcnZpY2VNYXBbcGFyYW1dLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgIC5zdWJzY3JpYmUodmFsID0+ICh2YWx1ZSA9IHZhbCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLmdldFBhcmFtRGVmYXVsdFZhbHVlKHBhcmFtKTtcbiAgfVxuXG4gIHNldFZhbHVlKHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW0pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=