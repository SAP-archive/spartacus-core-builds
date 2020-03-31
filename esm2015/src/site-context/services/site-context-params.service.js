import { __decorate } from "tslib";
import { Injectable, Injector } from '@angular/core';
import { combineLatest, of } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { getContextParameterDefault, getContextParameterValues, } from '../config/context-config-utils';
import { SiteContextConfig } from '../config/site-context-config';
import { ContextServiceMap } from '../providers/context-service-map';
let SiteContextParamsService = class SiteContextParamsService {
    constructor(config, injector, serviceMap) {
        this.config = config;
        this.injector = injector;
        this.serviceMap = serviceMap;
    }
    getContextParameters() {
        if (this.config.context) {
            return Object.keys(this.config.context).filter((param) => param !== 'urlParameters');
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
                .subscribe((val) => (value = val))
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
    /**
     * Get active values for all provided context parameters
     *
     * @param params Context parameters
     *
     * @returns Observable emitting array of all passed active context values
     */
    getValues(params) {
        if (params.length === 0) {
            return of([]);
        }
        return combineLatest(params.map((param) => this.getSiteContextService(param)
            .getActive()
            .pipe(distinctUntilChanged()))).pipe(filter((value) => value.every((param) => !!param)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NpdGUtY29udGV4dC9zZXJ2aWNlcy9zaXRlLWNvbnRleHQtcGFyYW1zLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxhQUFhLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQ0wsMEJBQTBCLEVBQzFCLHlCQUF5QixHQUMxQixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRWxFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBR3JFLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBQ25DLFlBQ1UsTUFBeUIsRUFDekIsUUFBa0IsRUFDbEIsVUFBNkI7UUFGN0IsV0FBTSxHQUFOLE1BQU0sQ0FBbUI7UUFDekIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQUNsQixlQUFVLEdBQVYsVUFBVSxDQUFtQjtJQUNwQyxDQUFDO0lBRUosb0JBQW9CO1FBQ2xCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUM1QyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLGVBQWUsQ0FDckMsQ0FBQztTQUNIO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQsd0JBQXdCO1FBQ3RCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUUsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUFhO1FBQzFCLE9BQU8seUJBQXlCLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsS0FBYTtRQUNoQyxPQUFPLDBCQUEwQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELHFCQUFxQixDQUFDLEtBQWE7UUFDakMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDMUU7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxLQUFhLENBQUM7UUFFbEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTztpQkFDSixTQUFTLEVBQUU7aUJBQ1gsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztpQkFDakMsV0FBVyxFQUFFLENBQUM7U0FDbEI7UUFFRCxPQUFPLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBYSxFQUFFLEtBQWE7UUFDbkMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksT0FBTyxFQUFFO1lBQ1gsT0FBTyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSCxTQUFTLENBQUMsTUFBZ0I7UUFDeEIsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUN2QixPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNmO1FBRUQsT0FBTyxhQUFhLENBQ2xCLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUNuQixJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDO2FBQzlCLFNBQVMsRUFBRTthQUNYLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLENBQ2hDLENBQ0YsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzdELENBQUM7Q0FDRixDQUFBOztZQXpFbUIsaUJBQWlCO1lBQ2YsUUFBUTtZQUNOLGlCQUFpQjs7QUFKNUIsd0JBQXdCO0lBRHBDLFVBQVUsRUFBRTtHQUNBLHdCQUF3QixDQTJFcEM7U0EzRVksd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0b3IgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQsXG4gIGdldENvbnRleHRQYXJhbWV0ZXJWYWx1ZXMsXG59IGZyb20gJy4uL2NvbmZpZy9jb250ZXh0LWNvbmZpZy11dGlscyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vZmFjYWRlL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udGV4dFNlcnZpY2VNYXAgfSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLW1hcCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWcsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgcHJpdmF0ZSBzZXJ2aWNlTWFwOiBDb250ZXh0U2VydmljZU1hcFxuICApIHt9XG5cbiAgZ2V0Q29udGV4dFBhcmFtZXRlcnMoKTogc3RyaW5nW10ge1xuICAgIGlmICh0aGlzLmNvbmZpZy5jb250ZXh0KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jb25maWcuY29udGV4dCkuZmlsdGVyKFxuICAgICAgICAocGFyYW0pID0+IHBhcmFtICE9PSAndXJsUGFyYW1ldGVycydcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGdldFVybEVuY29kaW5nUGFyYW1ldGVycygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuICh0aGlzLmNvbmZpZy5jb250ZXh0ICYmIHRoaXMuY29uZmlnLmNvbnRleHQudXJsUGFyYW1ldGVycykgfHwgW107XG4gIH1cblxuICBnZXRQYXJhbVZhbHVlcyhwYXJhbTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBnZXRDb250ZXh0UGFyYW1ldGVyVmFsdWVzKHRoaXMuY29uZmlnLCBwYXJhbSk7XG4gIH1cblxuICBnZXRQYXJhbURlZmF1bHRWYWx1ZShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2V0Q29udGV4dFBhcmFtZXRlckRlZmF1bHQodGhpcy5jb25maWcsIHBhcmFtKTtcbiAgfVxuXG4gIGdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbTogc3RyaW5nKTogU2l0ZUNvbnRleHQ8YW55PiB7XG4gICAgaWYgKHRoaXMuc2VydmljZU1hcFtwYXJhbV0pIHtcbiAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmdldDxTaXRlQ29udGV4dDxhbnk+Pih0aGlzLnNlcnZpY2VNYXBbcGFyYW1dLCBudWxsKTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBsZXQgdmFsdWU6IHN0cmluZztcblxuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZSgpXG4gICAgICAgIC5zdWJzY3JpYmUoKHZhbCkgPT4gKHZhbHVlID0gdmFsKSlcbiAgICAgICAgLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHRoaXMuZ2V0UGFyYW1EZWZhdWx0VmFsdWUocGFyYW0pO1xuICB9XG5cbiAgc2V0VmFsdWUocGFyYW06IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xuICAgIGNvbnN0IHNlcnZpY2UgPSB0aGlzLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSk7XG4gICAgaWYgKHNlcnZpY2UpIHtcbiAgICAgIHNlcnZpY2Uuc2V0QWN0aXZlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFjdGl2ZSB2YWx1ZXMgZm9yIGFsbCBwcm92aWRlZCBjb250ZXh0IHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHBhcmFtIHBhcmFtcyBDb250ZXh0IHBhcmFtZXRlcnNcbiAgICpcbiAgICogQHJldHVybnMgT2JzZXJ2YWJsZSBlbWl0dGluZyBhcnJheSBvZiBhbGwgcGFzc2VkIGFjdGl2ZSBjb250ZXh0IHZhbHVlc1xuICAgKi9cbiAgZ2V0VmFsdWVzKHBhcmFtczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPEFycmF5PHN0cmluZz4+IHtcbiAgICBpZiAocGFyYW1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIG9mKFtdKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY29tYmluZUxhdGVzdChcbiAgICAgIHBhcmFtcy5tYXAoKHBhcmFtKSA9PlxuICAgICAgICB0aGlzLmdldFNpdGVDb250ZXh0U2VydmljZShwYXJhbSlcbiAgICAgICAgICAuZ2V0QWN0aXZlKClcbiAgICAgICAgICAucGlwZShkaXN0aW5jdFVudGlsQ2hhbmdlZCgpKVxuICAgICAgKVxuICAgICkucGlwZShmaWx0ZXIoKHZhbHVlKSA9PiB2YWx1ZS5ldmVyeSgocGFyYW0pID0+ICEhcGFyYW0pKSk7XG4gIH1cbn1cbiJdfQ==