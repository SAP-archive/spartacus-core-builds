import { InjectionToken, ModuleWithProviders, Provider } from '@angular/core';
import { ConfigValidator } from './utils/config-validator';
/**
 * Global Configuration injection token, can be used to inject configuration to any part of the app
 */
export declare const Config: InjectionToken<unknown>;
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 */
export declare const ConfigChunk: InjectionToken<unknown>;
/**
 * Helper function to provide configuration chunk using ConfigChunk token
 *
 * @param config Config object to merge with the global configuration
 */
export declare function provideConfig(config?: any): Provider;
/**
 * Helper function to provide configuration with factory function, using ConfigChunk token
 *
 * @param configFactory Factory Function that will generate config object
 * @param deps Optional dependencies to a factory function
 */
export declare function provideConfigFactory(configFactory: Function, deps?: any[]): Provider;
/**
 * Factory function that merges all configurations chunks. Should not be used directly without explicit reason.
 *
 */
export declare function configurationFactory(configChunks: any[], configValidators: ConfigValidator[]): any;
export declare class ConfigModule {
    /**
     * Import ConfigModule and contribute config to the global configuration
     *
     * @param config Config object to merge with the global configuration
     */
    static withConfig(config: object): ModuleWithProviders<ConfigModule>;
    /**
     * Import ConfigModule and contribute config to the global configuration using factory function
     *
     * @param configFactory Factory function that will generate configuration
     * @param deps Optional dependencies to factory function
     */
    static withConfigFactory(configFactory: Function, deps?: any[]): ModuleWithProviders<ConfigModule>;
    /**
     * Module with providers, should be imported only once, if possible, at the root of the app.
     *
     * @param config
     */
    static forRoot(config?: any): ModuleWithProviders<ConfigModule>;
}
