import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { SiteContextConfig } from '../config/site-context-config';
import { SiteContext } from '../facade/site-context.interface';
import { ContextServiceMap } from '../providers/context-service-map';
import * as ɵngcc0 from '@angular/core';
export declare class SiteContextParamsService {
    private config;
    private injector;
    private serviceMap;
    constructor(config: SiteContextConfig, injector: Injector, serviceMap: ContextServiceMap);
    getContextParameters(): string[];
    getUrlEncodingParameters(): string[];
    getParamValues(param: string): string[];
    getParamDefaultValue(param: string): string;
    getSiteContextService(param: string): SiteContext<any>;
    getValue(param: string): string;
    setValue(param: string, value: string): void;
    /**
     * Get active values for all provided context parameters
     *
     * @param params Context parameters
     *
     * @returns Observable emitting array of all passed active context values
     */
    getValues(params: string[]): Observable<Array<string>>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SiteContextParamsService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<SiteContextParamsService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInNpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9CQTsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvc2l0ZS1jb250ZXh0LWNvbmZpZyc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dCB9IGZyb20gJy4uL2ZhY2FkZS9zaXRlLWNvbnRleHQuaW50ZXJmYWNlJztcbmltcG9ydCB7IENvbnRleHRTZXJ2aWNlTWFwIH0gZnJvbSAnLi4vcHJvdmlkZXJzL2NvbnRleHQtc2VydmljZS1tYXAnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU2l0ZUNvbnRleHRQYXJhbXNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIGNvbmZpZztcbiAgICBwcml2YXRlIGluamVjdG9yO1xuICAgIHByaXZhdGUgc2VydmljZU1hcDtcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFNpdGVDb250ZXh0Q29uZmlnLCBpbmplY3RvcjogSW5qZWN0b3IsIHNlcnZpY2VNYXA6IENvbnRleHRTZXJ2aWNlTWFwKTtcbiAgICBnZXRDb250ZXh0UGFyYW1ldGVycygpOiBzdHJpbmdbXTtcbiAgICBnZXRVcmxFbmNvZGluZ1BhcmFtZXRlcnMoKTogc3RyaW5nW107XG4gICAgZ2V0UGFyYW1WYWx1ZXMocGFyYW06IHN0cmluZyk6IHN0cmluZ1tdO1xuICAgIGdldFBhcmFtRGVmYXVsdFZhbHVlKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgZ2V0U2l0ZUNvbnRleHRTZXJ2aWNlKHBhcmFtOiBzdHJpbmcpOiBTaXRlQ29udGV4dDxhbnk+O1xuICAgIGdldFZhbHVlKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmc7XG4gICAgc2V0VmFsdWUocGFyYW06IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogR2V0IGFjdGl2ZSB2YWx1ZXMgZm9yIGFsbCBwcm92aWRlZCBjb250ZXh0IHBhcmFtZXRlcnNcbiAgICAgKlxuICAgICAqIEBwYXJhbSBwYXJhbXMgQ29udGV4dCBwYXJhbWV0ZXJzXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBPYnNlcnZhYmxlIGVtaXR0aW5nIGFycmF5IG9mIGFsbCBwYXNzZWQgYWN0aXZlIGNvbnRleHQgdmFsdWVzXG4gICAgICovXG4gICAgZ2V0VmFsdWVzKHBhcmFtczogc3RyaW5nW10pOiBPYnNlcnZhYmxlPEFycmF5PHN0cmluZz4+O1xufVxuIl19