import { ModuleWithProviders } from '@angular/core';
import { ConfigurationService } from './services/configuration.service';
export declare class ConfigModule {
    constructor(_configurationService: ConfigurationService);
    /**
     * Import ConfigModule and contribute config to the global configuration
     *
     * To provide default configuration in libraries provideDefaultConfig should be used instead.
     *
     * @param config Config object to merge with the global configuration
     */
    static withConfig(config: object): ModuleWithProviders<ConfigModule>;
    /**
     * Import ConfigModule and contribute config to the global configuration using factory function
     *
     * To provide default configuration in libraries provideDefaultConfigFactory should be used instead.
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
