import { __decorate } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { getContextParameterDefault, getContextParameterValues, } from '../config/context-config-utils';
import { SiteContextConfig } from '../config/site-context-config';
import { ContextServiceMap } from '../providers/context-service-map';
var SiteContextParamsService = /** @class */ (function () {
    function SiteContextParamsService(config, injector, serviceMap) {
        this.config = config;
        this.injector = injector;
        this.serviceMap = serviceMap;
    }
    SiteContextParamsService.prototype.getContextParameters = function () {
        if (this.config.context) {
            return Object.keys(this.config.context).filter(function (param) { return param !== 'urlParameters'; });
        }
        return [];
    };
    SiteContextParamsService.prototype.getUrlEncodingParameters = function () {
        return (this.config.context && this.config.context.urlParameters) || [];
    };
    SiteContextParamsService.prototype.getParamValues = function (param) {
        return getContextParameterValues(this.config, param);
    };
    SiteContextParamsService.prototype.getParamDefaultValue = function (param) {
        return getContextParameterDefault(this.config, param);
    };
    SiteContextParamsService.prototype.getSiteContextService = function (param) {
        if (this.serviceMap[param]) {
            return this.injector.get(this.serviceMap[param], null);
        }
    };
    SiteContextParamsService.prototype.getValue = function (param) {
        var value;
        var service = this.getSiteContextService(param);
        if (service) {
            service
                .getActive()
                .subscribe(function (val) { return (value = val); })
                .unsubscribe();
        }
        return value !== undefined ? value : this.getParamDefaultValue(param);
    };
    SiteContextParamsService.prototype.setValue = function (param, value) {
        var service = this.getSiteContextService(param);
        if (service) {
            service.setActive(value);
        }
    };
    /**
     * Get active values for all provided context parameters
     *
     * @param params Context parameters
     *
     * @returns Observable emitting array of all passed active context values
     */
    SiteContextParamsService.prototype.getValues = function (params) {
        var _this = this;
        if (params.length === 0) {
            return of([]);
        }
        return combineLatest(params.map(function (param) {
            return _this.getSiteContextService(param)
                .getActive()
                .pipe(distinctUntilChanged());
        })).pipe(filter(function (value) { return value.every(function (param) { return !!param; }); }));
    };
    SiteContextParamsService.ctorParameters = function () { return [
        { type: SiteContextConfig },
        { type: Injector },
        { type: ContextServiceMap }
    ]; };
    SiteContextParamsService = __decorate([
        Injectable()
    ], SiteContextParamsService);
    return SiteContextParamsService;
}());
export { SiteContextParamsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLHlCQUF5QixHQUMxQixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR3JFO0lBQ0Usa0NBQ1UsTUFBeUIsRUFDekIsUUFBa0IsRUFDbEIsVUFBNkI7UUFGN0IsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUNwQyxDQUFDO0lBRUosdURBQW9CLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN2QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQzVDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxLQUFLLGVBQWUsRUFBekIsQ0FBeUIsQ0FDbkMsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsMkRBQXdCLEdBQXhCO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxRSxDQUFDO0lBRUQsaURBQWMsR0FBZCxVQUFlLEtBQWE7UUFDMUIsT0FBTyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCx1REFBb0IsR0FBcEIsVUFBcUIsS0FBYTtRQUNoQyxPQUFPLDBCQUEwQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHdEQUFxQixHQUFyQixVQUFzQixLQUFhO1FBQ2pDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFtQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzFFO0lBQ0gsQ0FBQztJQUVELDJDQUFRLEdBQVIsVUFBUyxLQUFhO1FBQ3BCLElBQUksS0FBYSxDQUFDO1FBRWxCLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU87aUJBQ0osU0FBUyxFQUFFO2lCQUNYLFNBQVMsQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxFQUFiLENBQWEsQ0FBQztpQkFDL0IsV0FBVyxFQUFFLENBQUM7U0FDbEI7UUFFRCxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCwyQ0FBUSxHQUFSLFVBQVMsS0FBYSxFQUFFLEtBQWE7UUFDbkMsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCw0Q0FBUyxHQUFULFVBQVUsTUFBZ0I7UUFBMUIsaUJBWUM7UUFYQyxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ2Y7UUFFRCxPQUFPLGFBQWEsQ0FDbEIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFBLEtBQUs7WUFDZCxPQUFBLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUM7aUJBQzlCLFNBQVMsRUFBRTtpQkFDWCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUYvQixDQUUrQixDQUNoQyxDQUNGLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxFQUFQLENBQU8sQ0FBQyxFQUE3QixDQUE2QixDQUFDLENBQUMsQ0FBQztJQUN6RCxDQUFDOztnQkF4RWlCLGlCQUFpQjtnQkFDZixRQUFRO2dCQUNOLGlCQUFpQjs7SUFKNUIsd0JBQXdCO1FBRHBDLFVBQVUsRUFBRTtPQUNBLHdCQUF3QixDQTJFcEM7SUFBRCwrQkFBQztDQUFBLEFBM0VELElBMkVDO1NBM0VZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0LFxuICBnZXRDb250ZXh0UGFyYW1ldGVyVmFsdWVzLFxufSBmcm9tICcuLi9jb25maWcvY29udGV4dC1jb25maWctdXRpbHMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4uL2ZhY2FkZS9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRleHRTZXJ2aWNlTWFwIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgc2VydmljZU1hcDogQ29udGV4dFNlcnZpY2VNYXBcbiAgKSB7fVxuXG4gIGdldENvbnRleHRQYXJhbWV0ZXJzKCk6IHN0cmluZ1tdIHtcbiAgICBpZiAodGhpcy5jb25maWcuY29udGV4dCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY29uZmlnLmNvbnRleHQpLmZpbHRlcihcbiAgICAgICAgcGFyYW0gPT4gcGFyYW0gIT09ICd1cmxQYXJhbWV0ZXJzJ1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgZ2V0VXJsRW5jb2RpbmdQYXJhbWV0ZXJzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gKHRoaXMuY29uZmlnLmNvbnRleHQgJiYgdGhpcy5jb25maWcuY29udGV4dC51cmxQYXJhbWV0ZXJzKSB8fCBbXTtcbiAgfVxuXG4gIGdldFBhcmFtVmFsdWVzKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIGdldENvbnRleHRQYXJhbWV0ZXJWYWx1ZXModGhpcy5jb25maWcsIHBhcmFtKTtcbiAgfVxuXG4gIGdldFBhcmFtRGVmYXVsdFZhbHVlKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCh0aGlzLmNvbmZpZywgcGFyYW0pO1xuICB9XG5cbiAgZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtOiBzdHJpbmcpOiBTaXRlQ29udGV4dDxhbnk+IHtcbiAgICBpZiAodGhpcy5zZXJ2aWNlTWFwW3BhcmFtXSkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuZ2V0PFNpdGVDb250ZXh0PGFueT4+KHRoaXMuc2VydmljZU1hcFtwYXJhbV0sIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIGdldFZhbHVlKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGxldCB2YWx1ZTogc3RyaW5nO1xuXG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgc2VydmljZVxuICAgICAgICAuZ2V0QWN0aXZlKClcbiAgICAgICAgLnN1YnNjcmliZSh2YWwgPT4gKHZhbHVlID0gdmFsKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHRoaXMuZ2V0UGFyYW1EZWZhdWx0VmFsdWUocGFyYW0pO1xuICB9XG5cbiAgc2V0VmFsdWUocGFyYW06IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2Uuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjdGl2ZSB2YWx1ZXMgZm9yIGFsbCBwcm92aWRlZCBjb250ZXh0IHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyBDb250ZXh0IHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZSBlbWl0dGluZyBhcnJheSBvZiBhbGwgcGFzc2VkIGFjdGl2ZSBjb250ZXh0IHZhbHVlc1xuICAgKi9cbiAgZ2V0VmFsdWVzKHBhcmFtczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPEFycmF5PHN0cmluZz4+IHtcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHBhcmFtcy5tYXAocGFyYW0gPT5cbiAgICAgICAgdGhpcy5nZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW0pXG4gICAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgICAgLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSlcbiAgICAgIClcbiAgICApLnBpcGUoZmlsdGVyKHZhbHVlID0+IHZhbHVlLmV2ZXJ5KHBhcmFtID0+ICEhcGFyYW0pKSk7XG4gIH1cbn1cbiJdfQ==