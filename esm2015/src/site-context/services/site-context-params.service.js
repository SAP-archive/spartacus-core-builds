import { __decorate } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { SiteContextConfig } from '../config/site-context-config';
import { ContextServiceMap } from '../providers/context-service-map';
import { getContextParameterDefault, getContextParameterValues, } from '../config/context-config-utils';
let SiteContextParamsService = class SiteContextParamsService {
    constructor(config, injector, serviceMap) {
        this.config = config;
        this.injector = injector;
        this.serviceMap = serviceMap;
    }
    getContextParameters() {
        if (this.config.context) {
            return Object.keys(this.config.context).filter(param => param !== 'urlParameters');
        }
        return [];
    }
    getUrlEncodingParameters() {
        return (this.config.context && this.config.context.urlParameters) || [];
    }
    getParamValues(param) {
        return getContextParameterValues(this.config, param);
    }
    getParamDefaultValue(param) {
        return getContextParameterDefault(this.config, param);
    }
    getSiteContextService(param) {
        if (this.serviceMap[param]) {
            return this.injector.get(this.serviceMap[param], null);
        }
    }
    getValue(param) {
        let value;
        const service = this.getSiteContextService(param);
        if (service) {
            service
                .getActive()
                .subscribe(val => (value = val))
                .unsubscribe();
        }
        return value !== undefined ? value : this.getParamDefaultValue(param);
    }
    setValue(param, value) {
        const service = this.getSiteContextService(param);
        if (service) {
            service.setActive(value);
        }
    }
};
SiteContextParamsService.ctorParameters = () => [
    { type: SiteContextConfig },
    { type: Injector },
    { type: ContextServiceMap }
];
SiteContextParamsService = __decorate([
    Injectable()
], SiteContextParamsService);
export { SiteContextParamsService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3JFLE9BQU8sRUFDTCwwQkFBMEIsRUFDMUIseUJBQXlCLEdBQzFCLE1BQU0sZ0NBQWdDLENBQUM7QUFHeEMsSUFBYSx3QkFBd0IsR0FBckMsTUFBYSx3QkFBd0I7SUFDbkMsWUFDVSxNQUF5QixFQUN6QixRQUFrQixFQUNsQixVQUE2QjtRQUY3QixXQUFNLEdBQU4sTUFBTSxDQUFtQjtRQUN6QixhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLGVBQVUsR0FBVixVQUFVLENBQW1CO0lBQ3BDLENBQUM7SUFFSixvQkFBb0I7UUFDbEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN2QixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQzVDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxLQUFLLGVBQWUsQ0FDbkMsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsd0JBQXdCO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUUsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLE9BQU8seUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsS0FBYTtRQUNoQyxPQUFPLDBCQUEwQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHFCQUFxQixDQUFDLEtBQWE7UUFDakMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxLQUFhLENBQUM7UUFFbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTztpQkFDSixTQUFTLEVBQUU7aUJBQ1gsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7aUJBQy9CLFdBQVcsRUFBRSxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWEsRUFBRSxLQUFhO1FBQ25DLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxJQUFJLE9BQU8sRUFBRTtZQUNYLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDMUI7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7WUFwRG1CLGlCQUFpQjtZQUNmLFFBQVE7WUFDTixpQkFBaUI7O0FBSjVCLHdCQUF3QjtJQURwQyxVQUFVLEVBQUU7R0FDQSx3QkFBd0IsQ0FzRHBDO1NBdERZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vZmFjYWRlL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udGV4dFNlcnZpY2VNYXAgfSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLW1hcCc7XG5pbXBvcnQge1xuICBnZXRDb250ZXh0UGFyYW1ldGVyRGVmYXVsdCxcbiAgZ2V0Q29udGV4dFBhcmFtZXRlclZhbHVlcyxcbn0gZnJvbSAnLi4vY29uZmlnL2NvbnRleHQtY29uZmlnLXV0aWxzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNpdGVDb250ZXh0UGFyYW1zU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY29uZmlnOiBTaXRlQ29udGV4dENvbmZpZyxcbiAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvcixcbiAgICBwcml2YXRlIHNlcnZpY2VNYXA6IENvbnRleHRTZXJ2aWNlTWFwXG4gICkge31cblxuICBnZXRDb250ZXh0UGFyYW1ldGVycygpOiBzdHJpbmdbXSB7XG4gICAgaWYgKHRoaXMuY29uZmlnLmNvbnRleHQpIHtcbiAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZy5jb250ZXh0KS5maWx0ZXIoXG4gICAgICAgIHBhcmFtID0+IHBhcmFtICE9PSAndXJsUGFyYW1ldGVycydcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldFVybEVuY29kaW5nUGFyYW1ldGVycygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuICh0aGlzLmNvbmZpZy5jb250ZXh0ICYmIHRoaXMuY29uZmlnLmNvbnRleHQudXJsUGFyYW1ldGVycykgfHwgW107XG4gIH1cblxuICBnZXRQYXJhbVZhbHVlcyhwYXJhbTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBnZXRDb250ZXh0UGFyYW1ldGVyVmFsdWVzKHRoaXMuY29uZmlnLCBwYXJhbSk7XG4gIH1cblxuICBnZXRQYXJhbURlZmF1bHRWYWx1ZShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQodGhpcy5jb25maWcsIHBhcmFtKTtcbiAgfVxuXG4gIGdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbTogc3RyaW5nKTogU2l0ZUNvbnRleHQ8YW55PiB7XG4gICAgaWYgKHRoaXMuc2VydmljZU1hcFtwYXJhbV0pIHtcbiAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxTaXRlQ29udGV4dDxhbnk+Pih0aGlzLnNlcnZpY2VNYXBbcGFyYW1dLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgIC5zdWJzY3JpYmUodmFsID0+ICh2YWx1ZSA9IHZhbCkpXG4gICAgICAgIC51bnN1YnNjcmliZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLmdldFBhcmFtRGVmYXVsdFZhbHVlKHBhcmFtKTtcbiAgfVxuXG4gIHNldFZhbHVlKHBhcmFtOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gdGhpcy5nZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW0pO1xuICAgIGlmIChzZXJ2aWNlKSB7XG4gICAgICBzZXJ2aWNlLnNldEFjdGl2ZSh2YWx1ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=