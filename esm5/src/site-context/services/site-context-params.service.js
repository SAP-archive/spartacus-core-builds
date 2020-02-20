import { __decorate } from "tslib";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIseUJBQXlCLEdBQzFCLE1BQU0sZ0NBQWdDLENBQUM7QUFHeEM7SUFDRSxrQ0FDVSxNQUF5QixFQUN6QixRQUFrQixFQUNsQixVQUE2QjtRQUY3QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQW1CO0lBQ3BDLENBQUM7SUFFSix1REFBb0IsR0FBcEI7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FDNUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLEtBQUssZUFBZSxFQUF6QixDQUF5QixDQUNuQyxDQUFDO1NBQ0g7UUFDRCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCwyREFBd0IsR0FBeEI7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFFLENBQUM7SUFFRCxpREFBYyxHQUFkLFVBQWUsS0FBYTtRQUMxQixPQUFPLHlCQUF5QixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVELHVEQUFvQixHQUFwQixVQUFxQixLQUFhO1FBQ2hDLE9BQU8sMEJBQTBCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRUQsd0RBQXFCLEdBQXJCLFVBQXNCLEtBQWE7UUFDakMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDO0lBRUQsMkNBQVEsR0FBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxLQUFhLENBQUM7UUFFbEIsSUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTztpQkFDSixTQUFTLEVBQUU7aUJBQ1gsU0FBUyxDQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEVBQWIsQ0FBYSxDQUFDO2lCQUMvQixXQUFXLEVBQUUsQ0FBQztTQUNsQjtRQUVELE9BQU8sS0FBSyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVELDJDQUFRLEdBQVIsVUFBUyxLQUFhLEVBQUUsS0FBYTtRQUNuQyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxPQUFPLEVBQUU7WUFDWCxPQUFPLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO0lBQ0gsQ0FBQzs7Z0JBbkRpQixpQkFBaUI7Z0JBQ2YsUUFBUTtnQkFDTixpQkFBaUI7O0lBSjVCLHdCQUF3QjtRQURwQyxVQUFVLEVBQUU7T0FDQSx3QkFBd0IsQ0FzRHBDO0lBQUQsK0JBQUM7Q0FBQSxBQXRERCxJQXNEQztTQXREWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4uL2ZhY2FkZS9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRleHRTZXJ2aWNlTWFwIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuaW1wb3J0IHtcbiAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQsXG4gIGdldENvbnRleHRQYXJhbWV0ZXJWYWx1ZXMsXG59IGZyb20gJy4uL2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlTWFwOiBDb250ZXh0U2VydmljZU1hcFxuICApIHt9XG5cbiAgZ2V0Q29udGV4dFBhcmFtZXRlcnMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb250ZXh0KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jb25maWcuY29udGV4dCkuZmlsdGVyKFxuICAgICAgICBwYXJhbSA9PiBwYXJhbSAhPT0gJ3VybFBhcmFtZXRlcnMnXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cblxuICBnZXRVcmxFbmNvZGluZ1BhcmFtZXRlcnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiAodGhpcy5jb25maWcuY29udGV4dCAmJiB0aGlzLmNvbmZpZy5jb250ZXh0LnVybFBhcmFtZXRlcnMpIHx8IFtdO1xuICB9XG5cbiAgZ2V0UGFyYW1WYWx1ZXMocGFyYW06IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZ2V0Q29udGV4dFBhcmFtZXRlclZhbHVlcyh0aGlzLmNvbmZpZywgcGFyYW0pO1xuICB9XG5cbiAgZ2V0UGFyYW1EZWZhdWx0VmFsdWUocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGdldENvbnRleHRQYXJhbWV0ZXJEZWZhdWx0KHRoaXMuY29uZmlnLCBwYXJhbSk7XG4gIH1cblxuICBnZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW06IHN0cmluZyk6IFNpdGVDb250ZXh0PGFueT4ge1xuICAgIGlmICh0aGlzLnNlcnZpY2VNYXBbcGFyYW1dKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5nZXQ8U2l0ZUNvbnRleHQ8YW55Pj4odGhpcy5zZXJ2aWNlTWFwW3BhcmFtXSwgbnVsbCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IHZhbHVlOiBzdHJpbmc7XG5cbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW0pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlXG4gICAgICAgIC5nZXRBY3RpdmUoKVxuICAgICAgICAuc3Vic2NyaWJlKHZhbCA9PiAodmFsdWUgPSB2YWwpKVxuICAgICAgICAudW5zdWJzY3JpYmUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdGhpcy5nZXRQYXJhbURlZmF1bHRWYWx1ZShwYXJhbSk7XG4gIH1cblxuICBzZXRWYWx1ZShwYXJhbTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2VydmljZSA9IHRoaXMuZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtKTtcbiAgICBpZiAoc2VydmljZSkge1xuICAgICAgc2VydmljZS5zZXRBY3RpdmUodmFsdWUpO1xuICAgIH1cbiAgfVxufVxuIl19