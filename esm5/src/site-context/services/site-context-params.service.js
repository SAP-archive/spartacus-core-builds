/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { SiteContextConfig } from '../config/site-context-config';
import { ContextServiceMap } from '../providers/context-service-map';
import { getContextParameterDefault, getContextParameterValues, } from '../config/context-config-utils';
var SiteContextParamsService = /** @class */ (function () {
    function SiteContextParamsService(config, injector, serviceMap) {
        this.config = config;
        this.injector = injector;
        this.serviceMap = serviceMap;
    }
    /**
     * @return {?}
     */
    SiteContextParamsService.prototype.getContextParameters = /**
     * @return {?}
     */
    function () {
        if (this.config.context) {
            return Object.keys(this.config.context).filter((/**
             * @param {?} param
             * @return {?}
             */
            function (param) { return param !== 'urlParameters'; }));
        }
        return [];
    };
    /**
     * @return {?}
     */
    SiteContextParamsService.prototype.getUrlEncodingParameters = /**
     * @return {?}
     */
    function () {
        return (this.config.context && this.config.context.urlParameters) || [];
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
        return getContextParameterValues(this.config, param);
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
        return getContextParameterDefault(this.config, param);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIseUJBQXlCLEdBQzFCLE1BQU0sZ0NBQWdDLENBQUM7QUFFeEM7SUFFRSxrQ0FDVSxNQUF5QixFQUN6QixRQUFrQixFQUNsQixVQUE2QjtRQUY3QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQW1CO0lBQ3BDLENBQUM7Ozs7SUFFSix1REFBb0I7OztJQUFwQjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTTs7OztZQUM1QyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssS0FBSyxlQUFlLEVBQXpCLENBQXlCLEVBQ25DLENBQUM7U0FDSDtRQUNELE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQzs7OztJQUVELDJEQUF3Qjs7O0lBQXhCO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRSxDQUFDOzs7OztJQUVELGlEQUFjOzs7O0lBQWQsVUFBZSxLQUFhO1FBQzFCLE9BQU8seUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDOzs7OztJQUVELHVEQUFvQjs7OztJQUFwQixVQUFxQixLQUFhO1FBQ2hDLE9BQU8sMEJBQTBCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7OztJQUVELHdEQUFxQjs7OztJQUFyQixVQUFzQixLQUFhO1FBQ2pDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFtQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCwyQ0FBUTs7OztJQUFSLFVBQVMsS0FBYTs7WUFDaEIsS0FBYTs7WUFFWCxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQztRQUNqRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU87aUJBQ0osU0FBUyxFQUFFO2lCQUNYLFNBQVM7Ozs7WUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFiLENBQWEsRUFBQztpQkFDL0IsV0FBVyxFQUFFLENBQUM7U0FDbEI7UUFFRCxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hFLENBQUM7Ozs7OztJQUVELDJDQUFROzs7OztJQUFSLFVBQVMsS0FBYSxFQUFFLEtBQWE7O1lBQzdCLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7O2dCQXRERixVQUFVOzs7O2dCQVJGLGlCQUFpQjtnQkFETCxRQUFRO2dCQUdwQixpQkFBaUI7O0lBNkQxQiwrQkFBQztDQUFBLEFBdkRELElBdURDO1NBdERZLHdCQUF3Qjs7Ozs7O0lBRWpDLDBDQUFpQzs7Ozs7SUFDakMsNENBQTBCOzs7OztJQUMxQiw4Q0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4uL2ZhY2FkZS9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRleHRTZXJ2aWNlTWFwIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuaW1wb3J0IHtcbiAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQsXG4gIGdldENvbnRleHRQYXJhbWV0ZXJWYWx1ZXMsXG59IGZyb20gJy4uL2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlTWFwOiBDb250ZXh0U2VydmljZU1hcFxuICApIHt9XG5cbiAgZ2V0Q29udGV4dFBhcmFtZXRlcnMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb250ZXh0KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jb25maWcuY29udGV4dCkuZmlsdGVyKFxuICAgICAgICBwYXJhbSA9PiBwYXJhbSAhPT0gJ3VybFBhcmFtZXRlcnMnXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXRVcmxFbmNvZGluZ1BhcmFtZXRlcnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiAodGhpcy5jb25maWcuY29udGV4dCAmJiB0aGlzLmNvbmZpZy5jb250ZXh0LnVybFBhcmFtZXRlcnMpIHx8IFtdO1xuICB9XG5cbiAgZ2V0UGFyYW1WYWx1ZXMocGFyYW06IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZ2V0Q29udGV4dFBhcmFtZXRlclZhbHVlcyh0aGlzLmNvbmZpZywgcGFyYW0pO1xuICB9XG5cbiAgZ2V0UGFyYW1EZWZhdWx0VmFsdWUocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBwYXJhbSk7XG4gIH1cblxuICBnZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW06IHN0cmluZyk6IFNpdGVDb250ZXh0PGFueT4ge1xuICAgIGlmICh0aGlzLnNlcnZpY2VNYXBbcGFyYW1dKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8U2l0ZUNvbnRleHQ8YW55Pj4odGhpcy5zZXJ2aWNlTWFwW3BhcmFtXSwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW0pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgICAuc3Vic2NyaWJlKHZhbCA9PiAodmFsdWUgPSB2YWwpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdGhpcy5nZXRQYXJhbURlZmF1bHRWYWx1ZShwYXJhbSk7XG4gIH1cblxuICBzZXRWYWx1ZShwYXJhbTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgc2VydmljZS5zZXRBY3RpdmUodmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19