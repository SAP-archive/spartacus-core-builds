import { Injector } from '@angular/core';
import { ContextParamPersistence, SiteContextConfig } from '../config/site-context-config';
import { SiteContext } from '../facade/site-context.interface';
import { ContextServiceMap } from '../providers/context-service-map';
export declare class SiteContextParamsService {
    private config;
    private injector;
    private serviceMap;
    constructor(config: SiteContextConfig, injector: Injector, serviceMap: ContextServiceMap);
    getContextParameters(persistence?: ContextParamPersistence): string[];
    getParamValues(param: string): string[];
    getParamDefaultValue(param: string): string;
    getSiteContextService(param: string): SiteContext<any>;
    getValue(param: string): string;
    setValue(param: string, value: string): void;
}
