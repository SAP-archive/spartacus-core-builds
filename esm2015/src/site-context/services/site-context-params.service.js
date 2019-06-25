/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { SiteContextConfig, } from '../config/site-context-config';
import { ContextServiceMap } from '../providers/context-service-map';
import { getContextParameter, getContextParameterDefault, } from '../config/context-config-utils';
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
        const contextConfig = this.config.context && this.config.context.parameters;
        if (contextConfig) {
            /** @type {?} */
            const params = Object.keys(contextConfig);
            if (persistence) {
                return params.filter((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => contextConfig[key].persistence === persistence));
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
    getParameter(param) {
        return getContextParameter(this.config, param);
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getParamValues(param) {
        return this.getParameter(param).values || [];
    }
    /**
     * @param {?} param
     * @return {?}
     */
    getParamDefaultValue(param) {
        return getContextParameterDefault(this.config, param);
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
                .subscribe((/**
             * @param {?} val
             * @return {?}
             */
            val => (value = val)))
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFHTCxpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLDBCQUEwQixHQUMzQixNQUFNLGdDQUFnQyxDQUFDO0FBR3hDLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQUNuQyxZQUNVLE1BQXlCLEVBQ3pCLFFBQWtCLEVBQ2xCLFVBQTZCO1FBRjdCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7SUFDcEMsQ0FBQzs7Ozs7SUFFSixvQkFBb0IsQ0FBQyxXQUF5Qzs7Y0FDdEQsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVU7UUFDM0UsSUFBSSxhQUFhLEVBQUU7O2tCQUNYLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN6QyxJQUFJLFdBQVcsRUFBRTtnQkFDZixPQUFPLE1BQU0sQ0FBQyxNQUFNOzs7O2dCQUNsQixHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUN0RCxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLENBQUM7YUFDZjtTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFhO1FBQ3hCLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsb0JBQW9CLENBQUMsS0FBYTtRQUNoQyxPQUFPLDBCQUEwQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxLQUFhO1FBQ2pDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFtQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYTs7WUFDaEIsS0FBYTs7Y0FFWCxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU87aUJBQ0osU0FBUyxFQUFFO2lCQUNYLFNBQVM7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFDO2lCQUMvQixXQUFXLEVBQUUsQ0FBQztTQUNsQjtRQUVELE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQWEsRUFBRSxLQUFhOztjQUM3QixPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7WUE1REYsVUFBVTs7OztZQVRULGlCQUFpQjtZQUpFLFFBQVE7WUFPcEIsaUJBQWlCOzs7Ozs7O0lBU3RCLDBDQUFpQzs7Ozs7SUFDakMsNENBQTBCOzs7OztJQUMxQiw4Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29udGV4dFBhcmFtZXRlcixcbiAgQ29udGV4dFBlcnNpc3RlbmNlLFxuICBTaXRlQ29udGV4dENvbmZpZyxcbn0gZnJvbSAnLi4vY29uZmlnL3NpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHQgfSBmcm9tICcuLi9mYWNhZGUvc2l0ZS1jb250ZXh0LmludGVyZmFjZSc7XG5pbXBvcnQgeyBDb250ZXh0U2VydmljZU1hcCB9IGZyb20gJy4uL3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtbWFwJztcbmltcG9ydCB7XG4gIGdldENvbnRleHRQYXJhbWV0ZXIsXG4gIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0LFxufSBmcm9tICcuLi9jb25maWcvY29udGV4dC1jb25maWctdXRpbHMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgc2VydmljZU1hcDogQ29udGV4dFNlcnZpY2VNYXBcbiAgKSB7fVxuXG4gIGdldENvbnRleHRQYXJhbWV0ZXJzKHBlcnNpc3RlbmNlPzogQ29udGV4dFBlcnNpc3RlbmNlIHwgc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNvbnRleHRDb25maWcgPSB0aGlzLmNvbmZpZy5jb250ZXh0ICYmIHRoaXMuY29uZmlnLmNvbnRleHQucGFyYW1ldGVycztcbiAgICBpZiAoY29udGV4dENvbmZpZykge1xuICAgICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoY29udGV4dENvbmZpZyk7XG4gICAgICBpZiAocGVyc2lzdGVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5maWx0ZXIoXG4gICAgICAgICAga2V5ID0+IGNvbnRleHRDb25maWdba2V5XS5wZXJzaXN0ZW5jZSA9PT0gcGVyc2lzdGVuY2VcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldFBhcmFtZXRlcihwYXJhbTogc3RyaW5nKTogQ29udGV4dFBhcmFtZXRlciB7XG4gICAgcmV0dXJuIGdldENvbnRleHRQYXJhbWV0ZXIodGhpcy5jb25maWcsIHBhcmFtKTtcbiAgfVxuXG4gIGdldFBhcmFtVmFsdWVzKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFyYW1ldGVyKHBhcmFtKS52YWx1ZXMgfHwgW107XG4gIH1cblxuICBnZXRQYXJhbURlZmF1bHRWYWx1ZShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQodGhpcy5jb25maWcsIHBhcmFtKTtcbiAgfVxuXG4gIGdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbTogc3RyaW5nKTogU2l0ZUNvbnRleHQ8YW55PiB7XG4gICAgaWYgKHRoaXMuc2VydmljZU1hcFtwYXJhbV0pIHtcbiAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxTaXRlQ29udGV4dDxhbnk+Pih0aGlzLnNlcnZpY2VNYXBbcGFyYW1dLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgIC5zdWJzY3JpYmUodmFsID0+ICh2YWx1ZSA9IHZhbCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLmdldFBhcmFtRGVmYXVsdFZhbHVlKHBhcmFtKTtcbiAgfVxuXG4gIHNldFZhbHVlKHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW0pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=