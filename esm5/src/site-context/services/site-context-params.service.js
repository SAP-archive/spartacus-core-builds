/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { SiteContextConfig, } from '../config/site-context-config';
import { ContextServiceMap } from '../providers/context-service-map';
var SiteContextParamsService = /** @class */ (function () {
    function SiteContextParamsService(config, injector, serviceMap) {
        this.config = config;
        this.injector = injector;
        this.serviceMap = serviceMap;
    }
    /**
     * @param {?=} persistence
     * @return {?}
     */
    SiteContextParamsService.prototype.getContextParameters = /**
     * @param {?=} persistence
     * @return {?}
     */
    function (persistence) {
        /** @type {?} */
        var contextConfig = this.config.siteContext.parameters;
        if (contextConfig) {
            /** @type {?} */
            var params = Object.keys(contextConfig);
            if (persistence) {
                return params.filter((/**
                 * @param {?} key
                 * @return {?}
                 */
                function (key) { return contextConfig[key].persistence === persistence; }));
            }
            else {
                return params;
            }
        }
        return [];
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SiteContextParamsService.prototype.getParamValues = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.config.siteContext.parameters &&
            this.config.siteContext.parameters[param]
            ? this.config.siteContext.parameters[param].values
            : undefined;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SiteContextParamsService.prototype.getParamDefaultValue = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return this.config.siteContext.parameters &&
            this.config.siteContext.parameters[param]
            ? this.config.siteContext.parameters[param].defaultValue
            : undefined;
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SiteContextParamsService.prototype.getSiteContextService = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        if (this.serviceMap[param]) {
            return this.injector.get(this.serviceMap[param], null);
        }
    };
    /**
     * @param {?} param
     * @return {?}
     */
    SiteContextParamsService.prototype.getValue = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        /** @type {?} */
        var value;
        /** @type {?} */
        var service = this.getSiteContextService(param);
        if (service) {
            service
                .getActive()
                .subscribe((/**
             * @param {?} val
             * @return {?}
             */
            function (val) { return (value = val); }))
                .unsubscribe();
        }
        return value !== undefined ? value : this.getParamDefaultValue(param);
    };
    /**
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    SiteContextParamsService.prototype.setValue = /**
     * @param {?} param
     * @param {?} value
     * @return {?}
     */
    function (param, value) {
        /** @type {?} */
        var service = this.getSiteContextService(param);
        if (service) {
            service.setActive(value);
        }
    };
    SiteContextParamsService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    SiteContextParamsService.ctorParameters = function () { return [
        { type: SiteContextConfig },
        { type: Injector },
        { type: ContextServiceMap }
    ]; };
    return SiteContextParamsService;
}());
export { SiteContextParamsService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFFTCxpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUVyRTtJQUVFLGtDQUNVLE1BQXlCLEVBQ3pCLFFBQWtCLEVBQ2xCLFVBQTZCO1FBRjdCLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBQ3pCLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDbEIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7SUFDcEMsQ0FBQzs7Ozs7SUFFSix1REFBb0I7Ozs7SUFBcEIsVUFBcUIsV0FBcUM7O1lBQ2xELGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVO1FBQ3hELElBQUksYUFBYSxFQUFFOztnQkFDWCxNQUFNLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUM7WUFDekMsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsT0FBTyxNQUFNLENBQUMsTUFBTTs7OztnQkFDbEIsVUFBQSxHQUFHLElBQUksT0FBQSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxLQUFLLFdBQVcsRUFBOUMsQ0FBOEMsRUFDdEQsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLE9BQU8sTUFBTSxDQUFDO2FBQ2Y7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7Ozs7SUFFRCxpREFBYzs7OztJQUFkLFVBQWUsS0FBYTtRQUMxQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLFVBQVU7WUFDdkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQztZQUN6QyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU07WUFDbEQsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELHVEQUFvQjs7OztJQUFwQixVQUFxQixLQUFhO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsVUFBVTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsWUFBWTtZQUN4RCxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQ2hCLENBQUM7Ozs7O0lBRUQsd0RBQXFCOzs7O0lBQXJCLFVBQXNCLEtBQWE7UUFDakMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDOzs7OztJQUVELDJDQUFROzs7O0lBQVIsVUFBUyxLQUFhOztZQUNoQixLQUFhOztZQUVYLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTztpQkFDSixTQUFTLEVBQUU7aUJBQ1gsU0FBUzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQWIsQ0FBYSxFQUFDO2lCQUMvQixXQUFXLEVBQUUsQ0FBQztTQUNsQjtRQUVELE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7O0lBRUQsMkNBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsS0FBYTs7WUFDN0IsT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Z0JBOURGLFVBQVU7Ozs7Z0JBTFQsaUJBQWlCO2dCQUhFLFFBQVE7Z0JBTXBCLGlCQUFpQjs7SUFpRTFCLCtCQUFDO0NBQUEsQUEvREQsSUErREM7U0E5RFksd0JBQXdCOzs7Ozs7SUFFakMsMENBQWlDOzs7OztJQUNqQyw0Q0FBMEI7Ozs7O0lBQzFCLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250ZXh0UGFyYW1QZXJzaXN0ZW5jZSxcbiAgU2l0ZUNvbnRleHRDb25maWcsXG59IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vZmFjYWRlL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udGV4dFNlcnZpY2VNYXAgfSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLW1hcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlTWFwOiBDb250ZXh0U2VydmljZU1hcFxuICApIHt9XG5cbiAgZ2V0Q29udGV4dFBhcmFtZXRlcnMocGVyc2lzdGVuY2U/OiBDb250ZXh0UGFyYW1QZXJzaXN0ZW5jZSk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjb250ZXh0Q29uZmlnID0gdGhpcy5jb25maWcuc2l0ZUNvbnRleHQucGFyYW1ldGVycztcbiAgICBpZiAoY29udGV4dENvbmZpZykge1xuICAgICAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoY29udGV4dENvbmZpZyk7XG4gICAgICBpZiAocGVyc2lzdGVuY2UpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy5maWx0ZXIoXG4gICAgICAgICAga2V5ID0+IGNvbnRleHRDb25maWdba2V5XS5wZXJzaXN0ZW5jZSA9PT0gcGVyc2lzdGVuY2VcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldFBhcmFtVmFsdWVzKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnNpdGVDb250ZXh0LnBhcmFtZXRlcnMgJiZcbiAgICAgIHRoaXMuY29uZmlnLnNpdGVDb250ZXh0LnBhcmFtZXRlcnNbcGFyYW1dXG4gICAgICA/IHRoaXMuY29uZmlnLnNpdGVDb250ZXh0LnBhcmFtZXRlcnNbcGFyYW1dLnZhbHVlc1xuICAgICAgOiB1bmRlZmluZWQ7XG4gIH1cblxuICBnZXRQYXJhbURlZmF1bHRWYWx1ZShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcuc2l0ZUNvbnRleHQucGFyYW1ldGVycyAmJlxuICAgICAgdGhpcy5jb25maWcuc2l0ZUNvbnRleHQucGFyYW1ldGVyc1twYXJhbV1cbiAgICAgID8gdGhpcy5jb25maWcuc2l0ZUNvbnRleHQucGFyYW1ldGVyc1twYXJhbV0uZGVmYXVsdFZhbHVlXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbTogc3RyaW5nKTogU2l0ZUNvbnRleHQ8YW55PiB7XG4gICAgaWYgKHRoaXMuc2VydmljZU1hcFtwYXJhbV0pIHtcbiAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxTaXRlQ29udGV4dDxhbnk+Pih0aGlzLnNlcnZpY2VNYXBbcGFyYW1dLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgIC5zdWJzY3JpYmUodmFsID0+ICh2YWx1ZSA9IHZhbCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLmdldFBhcmFtRGVmYXVsdFZhbHVlKHBhcmFtKTtcbiAgfVxuXG4gIHNldFZhbHVlKHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW0pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=