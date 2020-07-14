var ConfigModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { inject, InjectFlags, InjectionToken, NgModule, Optional, } from '@angular/core';
import { deepMerge } from './utils/deep-merge';
// separate function needed for production build:
export function configurationFactoryProvidedInRoot() {
    return configurationFactory(inject(ConfigChunk, InjectFlags.Optional), inject(DefaultConfigChunk, InjectFlags.Optional));
}
/**
 * Global Configuration injection token, can be used to inject configuration to any part of the app
 */
export const Config = new InjectionToken('Configuration', {
    providedIn: 'root',
    factory: configurationFactoryProvidedInRoot,
});
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 */
export const ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the default configuration.
 * Should not be used directly, use `provideDefaultConfig` or `provideDefaultConfigFactory` instead.
 *
 * General rule is, that all config provided in libraries should be provided as default config.
 */
export const DefaultConfigChunk = new InjectionToken('DefaultConfigurationChunk');
/**
 * Helper function to provide configuration chunk using ConfigChunk token
 *
 * To provide default configuration in libraries provideDefaultConfig should be used instead.
 *
 * @param config Config object to merge with the global configuration
 */
export function provideConfig(config = {}, defaultConfig = false) {
    return {
        provide: defaultConfig ? DefaultConfigChunk : ConfigChunk,
        useValue: config,
        multi: true,
    };
}
/**
 * Helper function to provide configuration with factory function, using ConfigChunk token
 *
 * To provide default configuration in libraries provideDefaultConfigFactory should be used instead.
 *
 * @param configFactory Factory Function that will generate config object
 * @param deps Optional dependencies to a factory function
 */
export function provideConfigFactory(configFactory, deps, defaultConfig = false) {
    return {
        provide: defaultConfig ? DefaultConfigChunk : ConfigChunk,
        useFactory: configFactory,
        multi: true,
        deps: deps,
    };
}
/**
 * Helper function to provide default configuration chunk using DefaultConfigChunk token
 *
 * @param config Config object to merge with the default configuration
 */
export function provideDefaultConfig(config = {}) {
    return {
        provide: DefaultConfigChunk,
        useValue: config,
        multi: true,
    };
}
/**
 * Helper function to provide default configuration with factory function, using DefaultConfigChunk token
 *
 * @param configFactory Factory Function that will generate config object
 * @param deps Optional dependencies to a factory function
 */
export function provideDefaultConfigFactory(configFactory, deps) {
    return {
        provide: DefaultConfigChunk,
        useFactory: configFactory,
        multi: true,
        deps: deps,
    };
}
/**
 * Factory function that merges all configurations chunks. Should not be used directly without explicit reason.
 *
 */
export function configurationFactory(configChunks = [], defaultConfigChunks = []) {
    const config = deepMerge({}, ...(defaultConfigChunks !== null && defaultConfigChunks !== void 0 ? defaultConfigChunks : []), ...(configChunks !== null && configChunks !== void 0 ? configChunks : []));
    return config;
}
let ConfigModule = ConfigModule_1 = class ConfigModule {
    /**
     * Import ConfigModule and contribute config to the global configuration
     *
     * To provide default configuration in libraries provideDefaultConfig should be used instead.
     *
     * @param config Config object to merge with the global configuration
     */
    static withConfig(config) {
        return {
            ngModule: ConfigModule_1,
            providers: [provideConfig(config)],
        };
    }
    /**
     * Import ConfigModule and contribute config to the global configuration using factory function
     *
     * To provide default configuration in libraries provideDefaultConfigFactory should be used instead.
     *
     * @param configFactory Factory function that will generate configuration
     * @param deps Optional dependencies to factory function
     */
    static withConfigFactory(configFactory, deps) {
        return {
            ngModule: ConfigModule_1,
            providers: [provideConfigFactory(configFactory, deps)],
        };
    }
    /**
     * Module with providers, should be imported only once, if possible, at the root of the app.
     *
     * @param config
     */
    static forRoot(config = {}) {
        return {
            ngModule: ConfigModule_1,
            providers: [
                provideConfig(config),
                {
                    provide: Config,
                    useFactory: configurationFactory,
                    deps: [
                        [new Optional(), ConfigChunk],
                        [new Optional(), DefaultConfigChunk],
                    ],
                },
            ],
        };
    }
};
ConfigModule = ConfigModule_1 = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [],
    })
], ConfigModule);
export { ConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsTUFBTSxFQUNOLFdBQVcsRUFDWCxjQUFjLEVBRWQsUUFBUSxFQUNSLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0MsaURBQWlEO0FBQ2pELE1BQU0sVUFBVSxrQ0FBa0M7SUFDaEQsT0FBTyxvQkFBb0IsQ0FDekIsTUFBTSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLEVBQ3pDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQ2pELENBQUM7QUFDSixDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsZUFBZSxFQUFFO0lBQ3hELFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSxrQ0FBa0M7Q0FDNUMsQ0FBQyxDQUFDO0FBRUg7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLElBQUksY0FBYyxDQUFXLG9CQUFvQixDQUFDLENBQUM7QUFFOUU7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGNBQWMsQ0FDbEQsMkJBQTJCLENBQzVCLENBQUM7QUFFRjs7Ozs7O0dBTUc7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUMzQixTQUFjLEVBQUUsRUFDaEIsYUFBYSxHQUFHLEtBQUs7SUFFckIsT0FBTztRQUNMLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxXQUFXO1FBQ3pELFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxJQUFJO0tBQ1osQ0FBQztBQUNKLENBQUM7QUFFRDs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxhQUF1QixFQUN2QixJQUFZLEVBQ1osYUFBYSxHQUFHLEtBQUs7SUFFckIsT0FBTztRQUNMLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxXQUFXO1FBQ3pELFVBQVUsRUFBRSxhQUFhO1FBQ3pCLEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsU0FBYyxFQUFFO0lBQ25ELE9BQU87UUFDTCxPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLEtBQUssRUFBRSxJQUFJO0tBQ1osQ0FBQztBQUNKLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSwyQkFBMkIsQ0FDekMsYUFBdUIsRUFDdkIsSUFBWTtJQUVaLE9BQU87UUFDTCxPQUFPLEVBQUUsa0JBQWtCO1FBQzNCLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDO0FBQ0osQ0FBQztBQUVEOzs7R0FHRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsZUFBc0IsRUFBRSxFQUN4QixzQkFBNkIsRUFBRTtJQUUvQixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQ3RCLEVBQUUsRUFDRixHQUFHLENBQUMsbUJBQW1CLGFBQW5CLG1CQUFtQixjQUFuQixtQkFBbUIsR0FBSSxFQUFFLENBQUMsRUFDOUIsR0FBRyxDQUFDLFlBQVksYUFBWixZQUFZLGNBQVosWUFBWSxHQUFJLEVBQUUsQ0FBQyxDQUN4QixDQUFDO0lBQ0YsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQU1ELElBQWEsWUFBWSxvQkFBekIsTUFBYSxZQUFZO0lBQ3ZCOzs7Ozs7T0FNRztJQUNILE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBYztRQUM5QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FDdEIsYUFBdUIsRUFDdkIsSUFBWTtRQUVaLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkQsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFjLEVBQUU7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUNyQjtvQkFDRSxPQUFPLEVBQUUsTUFBTTtvQkFDZixVQUFVLEVBQUUsb0JBQW9CO29CQUNoQyxJQUFJLEVBQUU7d0JBQ0osQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLFdBQVcsQ0FBQzt3QkFDN0IsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLGtCQUFrQixDQUFDO3FCQUNyQztpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBdERZLFlBQVk7SUFKeEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLFlBQVksRUFBRSxFQUFFO0tBQ2pCLENBQUM7R0FDVyxZQUFZLENBc0R4QjtTQXREWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIGluamVjdCxcbiAgSW5qZWN0RmxhZ3MsXG4gIEluamVjdGlvblRva2VuLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgT3B0aW9uYWwsXG4gIFByb3ZpZGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4vdXRpbHMvZGVlcC1tZXJnZSc7XG5cbi8vIHNlcGFyYXRlIGZ1bmN0aW9uIG5lZWRlZCBmb3IgcHJvZHVjdGlvbiBidWlsZDpcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmF0aW9uRmFjdG9yeVByb3ZpZGVkSW5Sb290KCkge1xuICByZXR1cm4gY29uZmlndXJhdGlvbkZhY3RvcnkoXG4gICAgaW5qZWN0KENvbmZpZ0NodW5rLCBJbmplY3RGbGFncy5PcHRpb25hbCksXG4gICAgaW5qZWN0KERlZmF1bHRDb25maWdDaHVuaywgSW5qZWN0RmxhZ3MuT3B0aW9uYWwpXG4gICk7XG59XG5cbi8qKlxuICogR2xvYmFsIENvbmZpZ3VyYXRpb24gaW5qZWN0aW9uIHRva2VuLCBjYW4gYmUgdXNlZCB0byBpbmplY3QgY29uZmlndXJhdGlvbiB0byBhbnkgcGFydCBvZiB0aGUgYXBwXG4gKi9cbmV4cG9ydCBjb25zdCBDb25maWcgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0NvbmZpZ3VyYXRpb24nLCB7XG4gIHByb3ZpZGVkSW46ICdyb290JyxcbiAgZmFjdG9yeTogY29uZmlndXJhdGlvbkZhY3RvcnlQcm92aWRlZEluUm9vdCxcbn0pO1xuXG4vKipcbiAqIENvbmZpZyBjaHVuayB0b2tlbiwgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIGNodW5rIGFuZCBjb250cmlidXRlIHRvIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHksIHVzZSBgcHJvdmlkZUNvbmZpZ2Agb3IgaW1wb3J0IGBDb25maWdNb2R1bGUud2l0aENvbmZpZ2AgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZpZ0NodW5rID0gbmV3IEluamVjdGlvblRva2VuPG9iamVjdFtdPignQ29uZmlndXJhdGlvbkNodW5rJyk7XG5cbi8qKlxuICogQ29uZmlnIGNodW5rIHRva2VuLCBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gY2h1bmsgYW5kIGNvbnRyaWJ1dGUgdG8gdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvbi5cbiAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSwgdXNlIGBwcm92aWRlRGVmYXVsdENvbmZpZ2Agb3IgYHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeWAgaW5zdGVhZC5cbiAqXG4gKiBHZW5lcmFsIHJ1bGUgaXMsIHRoYXQgYWxsIGNvbmZpZyBwcm92aWRlZCBpbiBsaWJyYXJpZXMgc2hvdWxkIGJlIHByb3ZpZGVkIGFzIGRlZmF1bHQgY29uZmlnLlxuICovXG5leHBvcnQgY29uc3QgRGVmYXVsdENvbmZpZ0NodW5rID0gbmV3IEluamVjdGlvblRva2VuPG9iamVjdFtdPihcbiAgJ0RlZmF1bHRDb25maWd1cmF0aW9uQ2h1bmsnXG4pO1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gY2h1bmsgdXNpbmcgQ29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBUbyBwcm92aWRlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBpbiBsaWJyYXJpZXMgcHJvdmlkZURlZmF1bHRDb25maWcgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0gY29uZmlnIENvbmZpZyBvYmplY3QgdG8gbWVyZ2Ugd2l0aCB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWcoXG4gIGNvbmZpZzogYW55ID0ge30sXG4gIGRlZmF1bHRDb25maWcgPSBmYWxzZVxuKTogUHJvdmlkZXIge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IGRlZmF1bHRDb25maWcgPyBEZWZhdWx0Q29uZmlnQ2h1bmsgOiBDb25maWdDaHVuayxcbiAgICB1c2VWYWx1ZTogY29uZmlnLFxuICAgIG11bHRpOiB0cnVlLFxuICB9O1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gd2l0aCBmYWN0b3J5IGZ1bmN0aW9uLCB1c2luZyBDb25maWdDaHVuayB0b2tlblxuICpcbiAqIFRvIHByb3ZpZGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIGluIGxpYnJhcmllcyBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3Rvcnkgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAqXG4gKiBAcGFyYW0gY29uZmlnRmFjdG9yeSBGYWN0b3J5IEZ1bmN0aW9uIHRoYXQgd2lsbCBnZW5lcmF0ZSBjb25maWcgb2JqZWN0XG4gKiBAcGFyYW0gZGVwcyBPcHRpb25hbCBkZXBlbmRlbmNpZXMgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29uZmlnRmFjdG9yeShcbiAgY29uZmlnRmFjdG9yeTogRnVuY3Rpb24sXG4gIGRlcHM/OiBhbnlbXSxcbiAgZGVmYXVsdENvbmZpZyA9IGZhbHNlXG4pOiBQcm92aWRlciB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogZGVmYXVsdENvbmZpZyA/IERlZmF1bHRDb25maWdDaHVuayA6IENvbmZpZ0NodW5rLFxuICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ0ZhY3RvcnksXG4gICAgbXVsdGk6IHRydWUsXG4gICAgZGVwczogZGVwcyxcbiAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvdmlkZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gY2h1bmsgdXNpbmcgRGVmYXVsdENvbmZpZ0NodW5rIHRva2VuXG4gKlxuICogQHBhcmFtIGNvbmZpZyBDb25maWcgb2JqZWN0IHRvIG1lcmdlIHdpdGggdGhlIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZURlZmF1bHRDb25maWcoY29uZmlnOiBhbnkgPSB7fSk6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHtcbiAgICBwcm92aWRlOiBEZWZhdWx0Q29uZmlnQ2h1bmssXG4gICAgdXNlVmFsdWU6IGNvbmZpZyxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvdmlkZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gd2l0aCBmYWN0b3J5IGZ1bmN0aW9uLCB1c2luZyBEZWZhdWx0Q29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBAcGFyYW0gY29uZmlnRmFjdG9yeSBGYWN0b3J5IEZ1bmN0aW9uIHRoYXQgd2lsbCBnZW5lcmF0ZSBjb25maWcgb2JqZWN0XG4gKiBAcGFyYW0gZGVwcyBPcHRpb25hbCBkZXBlbmRlbmNpZXMgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnkoXG4gIGNvbmZpZ0ZhY3Rvcnk6IEZ1bmN0aW9uLFxuICBkZXBzPzogYW55W11cbik6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHtcbiAgICBwcm92aWRlOiBEZWZhdWx0Q29uZmlnQ2h1bmssXG4gICAgdXNlRmFjdG9yeTogY29uZmlnRmFjdG9yeSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgICBkZXBzOiBkZXBzLFxuICB9O1xufVxuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdGhhdCBtZXJnZXMgYWxsIGNvbmZpZ3VyYXRpb25zIGNodW5rcy4gU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IHdpdGhvdXQgZXhwbGljaXQgcmVhc29uLlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyYXRpb25GYWN0b3J5KFxuICBjb25maWdDaHVua3M6IGFueVtdID0gW10sXG4gIGRlZmF1bHRDb25maWdDaHVua3M6IGFueVtdID0gW11cbikge1xuICBjb25zdCBjb25maWcgPSBkZWVwTWVyZ2UoXG4gICAge30sXG4gICAgLi4uKGRlZmF1bHRDb25maWdDaHVua3MgPz8gW10pLFxuICAgIC4uLihjb25maWdDaHVua3MgPz8gW10pXG4gICk7XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWdNb2R1bGUge1xuICAvKipcbiAgICogSW1wb3J0IENvbmZpZ01vZHVsZSBhbmQgY29udHJpYnV0ZSBjb25maWcgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIFRvIHByb3ZpZGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIGluIGxpYnJhcmllcyBwcm92aWRlRGVmYXVsdENvbmZpZyBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZyBvYmplY3QgdG8gbWVyZ2Ugd2l0aCB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgICovXG4gIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogb2JqZWN0KTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKV0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgQ29uZmlnTW9kdWxlIGFuZCBjb250cmlidXRlIGNvbmZpZyB0byB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gdXNpbmcgZmFjdG9yeSBmdW5jdGlvblxuICAgKlxuICAgKiBUbyBwcm92aWRlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBpbiBsaWJyYXJpZXMgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5IHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdGYWN0b3J5IEZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGdlbmVyYXRlIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIGRlcHMgT3B0aW9uYWwgZGVwZW5kZW5jaWVzIHRvIGZhY3RvcnkgZnVuY3Rpb25cbiAgICovXG4gIHN0YXRpYyB3aXRoQ29uZmlnRmFjdG9yeShcbiAgICBjb25maWdGYWN0b3J5OiBGdW5jdGlvbixcbiAgICBkZXBzPzogYW55W11cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWdGYWN0b3J5KGNvbmZpZ0ZhY3RvcnksIGRlcHMpXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZHVsZSB3aXRoIHByb3ZpZGVycywgc2hvdWxkIGJlIGltcG9ydGVkIG9ubHkgb25jZSwgaWYgcG9zc2libGUsIGF0IHRoZSByb290IG9mIHRoZSBhcHAuXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogYW55ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVDb25maWcoY29uZmlnKSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENvbmZpZyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbXG4gICAgICAgICAgICBbbmV3IE9wdGlvbmFsKCksIENvbmZpZ0NodW5rXSxcbiAgICAgICAgICAgIFtuZXcgT3B0aW9uYWwoKSwgRGVmYXVsdENvbmZpZ0NodW5rXSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=