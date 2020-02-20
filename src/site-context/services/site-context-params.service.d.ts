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

//# sourceMappingURL=site-context-params.service.d.ts.map