import { Injector } from '@angular/core';
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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SiteContextParamsService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<SiteContextParamsService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0LXBhcmFtcy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInNpdGUtY29udGV4dC1wYXJhbXMuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7OztBQVlBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTaXRlQ29udGV4dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IFNpdGVDb250ZXh0IH0gZnJvbSAnLi4vZmFjYWRlL3NpdGUtY29udGV4dC5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ29udGV4dFNlcnZpY2VNYXAgfSBmcm9tICcuLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLW1hcCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTaXRlQ29udGV4dFBhcmFtc1NlcnZpY2Uge1xuICAgIHByaXZhdGUgY29uZmlnO1xuICAgIHByaXZhdGUgaW5qZWN0b3I7XG4gICAgcHJpdmF0ZSBzZXJ2aWNlTWFwO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogU2l0ZUNvbnRleHRDb25maWcsIGluamVjdG9yOiBJbmplY3Rvciwgc2VydmljZU1hcDogQ29udGV4dFNlcnZpY2VNYXApO1xuICAgIGdldENvbnRleHRQYXJhbWV0ZXJzKCk6IHN0cmluZ1tdO1xuICAgIGdldFVybEVuY29kaW5nUGFyYW1ldGVycygpOiBzdHJpbmdbXTtcbiAgICBnZXRQYXJhbVZhbHVlcyhwYXJhbTogc3RyaW5nKTogc3RyaW5nW107XG4gICAgZ2V0UGFyYW1EZWZhdWx0VmFsdWUocGFyYW06IHN0cmluZyk6IHN0cmluZztcbiAgICBnZXRTaXRlQ29udGV4dFNlcnZpY2UocGFyYW06IHN0cmluZyk6IFNpdGVDb250ZXh0PGFueT47XG4gICAgZ2V0VmFsdWUocGFyYW06IHN0cmluZyk6IHN0cmluZztcbiAgICBzZXRWYWx1ZShwYXJhbTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcbn1cbiJdfQ==