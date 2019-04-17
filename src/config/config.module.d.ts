import { InjectionToken, ModuleWithProviders, Provider } from '@angular/core';
import { ConfigValidator } from './utils/config-validator';
export declare const Config: InjectionToken<{}>;
export declare const ConfigChunk: InjectionToken<{}>;
export declare function provideConfig(config?: any): Provider;
export declare function provideConfigFactory(configFactory: Function, deps?: any[]): Provider;
export declare function configurationFactory(configChunks: any[], configValidators: ConfigValidator[]): any;
export declare class ConfigModule {
    static withConfig(config: object): ModuleWithProviders;
    static withConfigFactory(configFactory: Function, deps?: any[]): ModuleWithProviders;
    static forRoot(config?: any): ModuleWithProviders;
}
