/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector } from '@angular/core';
import { SiteContextConfig, } from '../config/site-context-config';
import { ContextServiceMap } from '../providers/context-service-map';
import { getContextParameter, getContextParameterDefault, } from '../config/context-config-utils';
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
        var contextConfig = this.config.context && this.config.context.parameters;
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
    SiteContextParamsService.prototype.getParameter = /**
     * @param {?} param
     * @return {?}
     */
    function (param) {
        return getContextParameter(this.config, param);
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
        return this.getParameter(param).values || [];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFHTCxpQkFBaUIsR0FDbEIsTUFBTSwrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNyRSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLDBCQUEwQixHQUMzQixNQUFNLGdDQUFnQyxDQUFDO0FBRXhDO0lBRUUsa0NBQ1UsTUFBeUIsRUFDekIsUUFBa0IsRUFDbEIsVUFBNkI7UUFGN0IsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUNwQyxDQUFDOzs7OztJQUVKLHVEQUFvQjs7OztJQUFwQixVQUFxQixXQUF5Qzs7WUFDdEQsYUFBYSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQVU7UUFDM0UsSUFBSSxhQUFhLEVBQUU7O2dCQUNYLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztZQUN6QyxJQUFJLFdBQVcsRUFBRTtnQkFDZixPQUFPLE1BQU0sQ0FBQyxNQUFNOzs7O2dCQUNsQixVQUFBLEdBQUcsSUFBSSxPQUFBLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEtBQUssV0FBVyxFQUE5QyxDQUE4QyxFQUN0RCxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxNQUFNLENBQUM7YUFDZjtTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7OztJQUVELCtDQUFZOzs7O0lBQVosVUFBYSxLQUFhO1FBQ3hCLE9BQU8sbUJBQW1CLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNqRCxDQUFDOzs7OztJQUVELGlEQUFjOzs7O0lBQWQsVUFBZSxLQUFhO1FBQzFCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO0lBQy9DLENBQUM7Ozs7O0lBRUQsdURBQW9COzs7O0lBQXBCLFVBQXFCLEtBQWE7UUFDaEMsT0FBTywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7O0lBRUQsd0RBQXFCOzs7O0lBQXJCLFVBQXNCLEtBQWE7UUFDakMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDOzs7OztJQUVELDJDQUFROzs7O0lBQVIsVUFBUyxLQUFhOztZQUNoQixLQUFhOztZQUVYLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTztpQkFDSixTQUFTLEVBQUU7aUJBQ1gsU0FBUzs7OztZQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQWIsQ0FBYSxFQUFDO2lCQUMvQixXQUFXLEVBQUUsQ0FBQztTQUNsQjtRQUVELE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQzs7Ozs7O0lBRUQsMkNBQVE7Ozs7O0lBQVIsVUFBUyxLQUFhLEVBQUUsS0FBYTs7WUFDN0IsT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Z0JBNURGLFVBQVU7Ozs7Z0JBVFQsaUJBQWlCO2dCQUpFLFFBQVE7Z0JBT3BCLGlCQUFpQjs7SUFtRTFCLCtCQUFDO0NBQUEsQUE3REQsSUE2REM7U0E1RFksd0JBQXdCOzs7Ozs7SUFFakMsMENBQWlDOzs7OztJQUNqQyw0Q0FBMEI7Ozs7O0lBQzFCLDhDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb250ZXh0UGFyYW1ldGVyLFxuICBDb250ZXh0UGVyc2lzdGVuY2UsXG4gIFNpdGVDb250ZXh0Q29uZmlnLFxufSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4uL2ZhY2FkZS9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRleHRTZXJ2aWNlTWFwIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuaW1wb3J0IHtcbiAgZ2V0Q29udGV4dFBhcmFtZXRlcixcbiAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQsXG59IGZyb20gJy4uL2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlTWFwOiBDb250ZXh0U2VydmljZU1hcFxuICApIHt9XG5cbiAgZ2V0Q29udGV4dFBhcmFtZXRlcnMocGVyc2lzdGVuY2U/OiBDb250ZXh0UGVyc2lzdGVuY2UgfCBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgY29udGV4dENvbmZpZyA9IHRoaXMuY29uZmlnLmNvbnRleHQgJiYgdGhpcy5jb25maWcuY29udGV4dC5wYXJhbWV0ZXJzO1xuICAgIGlmIChjb250ZXh0Q29uZmlnKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhjb250ZXh0Q29uZmlnKTtcbiAgICAgIGlmIChwZXJzaXN0ZW5jZSkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmZpbHRlcihcbiAgICAgICAgICBrZXkgPT4gY29udGV4dENvbmZpZ1trZXldLnBlcnNpc3RlbmNlID09PSBwZXJzaXN0ZW5jZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0UGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpOiBDb250ZXh0UGFyYW1ldGVyIHtcbiAgICByZXR1cm4gZ2V0Q29udGV4dFBhcmFtZXRlcih0aGlzLmNvbmZpZywgcGFyYW0pO1xuICB9XG5cbiAgZ2V0UGFyYW1WYWx1ZXMocGFyYW06IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQYXJhbWV0ZXIocGFyYW0pLnZhbHVlcyB8fCBbXTtcbiAgfVxuXG4gIGdldFBhcmFtRGVmYXVsdFZhbHVlKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCh0aGlzLmNvbmZpZywgcGFyYW0pO1xuICB9XG5cbiAgZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtOiBzdHJpbmcpOiBTaXRlQ29udGV4dDxhbnk+IHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlTWFwW3BhcmFtXSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFNpdGVDb250ZXh0PGFueT4+KHRoaXMuc2VydmljZU1hcFtwYXJhbV0sIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgc2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlKClcbiAgICAgICAgLnN1YnNjcmliZSh2YWwgPT4gKHZhbHVlID0gdmFsKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHRoaXMuZ2V0UGFyYW1EZWZhdWx0VmFsdWUocGFyYW0pO1xuICB9XG5cbiAgc2V0VmFsdWUocGFyYW06IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2Uuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==