import { InjectionToken } from '@angular/core';
/**
 * Global Configuration injection token, can be used to inject configuration to any part of the app
 */
export declare const Config: InjectionToken<any>;
/**
 * Default Configuration token, used to build Global Configuration, built from DefaultConfigChunks
 */
export declare const DefaultConfig: InjectionToken<any>;
/**
 * Root Configuration token, used to build Global Configuration, built from ConfigChunks
 */
export declare const RootConfig: InjectionToken<any>;
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 */
export declare const ConfigChunk: InjectionToken<object[]>;
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the default configuration.
 * Should not be used directly, use `provideDefaultConfig` or `provideDefaultConfigFactory` instead.
 *
 * General rule is, that all config provided in libraries should be provided as default config.
 */
export declare const DefaultConfigChunk: InjectionToken<object[]>;
