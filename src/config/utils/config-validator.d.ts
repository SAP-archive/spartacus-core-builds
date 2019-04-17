import { InjectionToken, Provider } from '@angular/core';
export declare const ConfigValidatorToken: InjectionToken<{}>;
export declare type ConfigValidator = (config: any) => string | void;
export declare function provideConfigValidator(configValidator: ConfigValidator): Provider;
export declare function validateConfig(config: any, configValidators: ConfigValidator[]): void;
