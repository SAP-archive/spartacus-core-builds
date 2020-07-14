import { __decorate, __read, __spread } from "tslib";
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
export var Config = new InjectionToken('Configuration', {
    providedIn: 'root',
    factory: configurationFactoryProvidedInRoot,
});
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 */
export var ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the default configuration.
 * Should not be used directly, use `provideDefaultConfig` or `provideDefaultConfigFactory` instead.
 *
 * General rule is, that all config provided in libraries should be provided as default config.
 */
export var DefaultConfigChunk = new InjectionToken('DefaultConfigurationChunk');
/**
 * Helper function to provide configuration chunk using ConfigChunk token
 *
 * To provide default configuration in libraries provideDefaultConfig should be used instead.
 *
 * @param config Config object to merge with the global configuration
 */
export function provideConfig(config, defaultConfig) {
    if (config === void 0) { config = {}; }
    if (defaultConfig === void 0) { defaultConfig = false; }
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
export function provideConfigFactory(configFactory, deps, defaultConfig) {
    if (defaultConfig === void 0) { defaultConfig = false; }
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
export function provideDefaultConfig(config) {
    if (config === void 0) { config = {}; }
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
export function configurationFactory(configChunks, defaultConfigChunks) {
    if (configChunks === void 0) { configChunks = []; }
    if (defaultConfigChunks === void 0) { defaultConfigChunks = []; }
    var config = deepMerge.apply(void 0, __spread([{}], (defaultConfigChunks !== null && defaultConfigChunks !== void 0 ? defaultConfigChunks : []), (configChunks !== null && configChunks !== void 0 ? configChunks : [])));
    return config;
}
var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule_1 = ConfigModule;
    /**
     * Import ConfigModule and contribute config to the global configuration
     *
     * To provide default configuration in libraries provideDefaultConfig should be used instead.
     *
     * @param config Config object to merge with the global configuration
     */
    ConfigModule.withConfig = function (config) {
        return {
            ngModule: ConfigModule_1,
            providers: [provideConfig(config)],
        };
    };
    /**
     * Import ConfigModule and contribute config to the global configuration using factory function
     *
     * To provide default configuration in libraries provideDefaultConfigFactory should be used instead.
     *
     * @param configFactory Factory function that will generate configuration
     * @param deps Optional dependencies to factory function
     */
    ConfigModule.withConfigFactory = function (configFactory, deps) {
        return {
            ngModule: ConfigModule_1,
            providers: [provideConfigFactory(configFactory, deps)],
        };
    };
    /**
     * Module with providers, should be imported only once, if possible, at the root of the app.
     *
     * @param config
     */
    ConfigModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
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
    };
    var ConfigModule_1;
    ConfigModule = ConfigModule_1 = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [],
        })
    ], ConfigModule);
    return ConfigModule;
}());
export { ConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxNQUFNLEVBQ04sV0FBVyxFQUNYLGNBQWMsRUFFZCxRQUFRLEVBQ1IsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxpREFBaUQ7QUFDakQsTUFBTSxVQUFVLGtDQUFrQztJQUNoRCxPQUFPLG9CQUFvQixDQUN6QixNQUFNLENBQUMsV0FBVyxFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsRUFDekMsTUFBTSxDQUFDLGtCQUFrQixFQUFFLFdBQVcsQ0FBQyxRQUFRLENBQUMsQ0FDakQsQ0FBQztBQUNKLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxlQUFlLEVBQUU7SUFDeEQsVUFBVSxFQUFFLE1BQU07SUFDbEIsT0FBTyxFQUFFLGtDQUFrQztDQUM1QyxDQUFDLENBQUM7QUFFSDs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQVcsb0JBQW9CLENBQUMsQ0FBQztBQUU5RTs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxJQUFNLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUNsRCwyQkFBMkIsQ0FDNUIsQ0FBQztBQUVGOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxhQUFhLENBQzNCLE1BQWdCLEVBQ2hCLGFBQXFCO0lBRHJCLHVCQUFBLEVBQUEsV0FBZ0I7SUFDaEIsOEJBQUEsRUFBQSxxQkFBcUI7SUFFckIsT0FBTztRQUNMLE9BQU8sRUFBRSxhQUFhLENBQUMs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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBpbmplY3QsXG4gIEluamVjdEZsYWdzLFxuICBJbmplY3Rpb25Ub2tlbixcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIE9wdGlvbmFsLFxuICBQcm92aWRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuL3V0aWxzL2RlZXAtbWVyZ2UnO1xuXG4vLyBzZXBhcmF0ZSBmdW5jdGlvbiBuZWVkZWQgZm9yIHByb2R1Y3Rpb24gYnVpbGQ6XG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJhdGlvbkZhY3RvcnlQcm92aWRlZEluUm9vdCgpIHtcbiAgcmV0dXJuIGNvbmZpZ3VyYXRpb25GYWN0b3J5KFxuICAgIGluamVjdChDb25maWdDaHVuaywgSW5qZWN0RmxhZ3MuT3B0aW9uYWwpLFxuICAgIGluamVjdChEZWZhdWx0Q29uZmlnQ2h1bmssIEluamVjdEZsYWdzLk9wdGlvbmFsKVxuICApO1xufVxuXG4vKipcbiAqIEdsb2JhbCBDb25maWd1cmF0aW9uIGluamVjdGlvbiB0b2tlbiwgY2FuIGJlIHVzZWQgdG8gaW5qZWN0IGNvbmZpZ3VyYXRpb24gdG8gYW55IHBhcnQgb2YgdGhlIGFwcFxuICovXG5leHBvcnQgY29uc3QgQ29uZmlnID0gbmV3IEluamVjdGlvblRva2VuKCdDb25maWd1cmF0aW9uJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6IGNvbmZpZ3VyYXRpb25GYWN0b3J5UHJvdmlkZWRJblJvb3QsXG59KTtcblxuLyoqXG4gKiBDb25maWcgY2h1bmsgdG9rZW4sIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBjaHVuayBhbmQgY29udHJpYnV0ZSB0byB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5LCB1c2UgYHByb3ZpZGVDb25maWdgIG9yIGltcG9ydCBgQ29uZmlnTW9kdWxlLndpdGhDb25maWdgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBjb25zdCBDb25maWdDaHVuayA9IG5ldyBJbmplY3Rpb25Ub2tlbjxvYmplY3RbXT4oJ0NvbmZpZ3VyYXRpb25DaHVuaycpO1xuXG4vKipcbiAqIENvbmZpZyBjaHVuayB0b2tlbiwgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIGNodW5rIGFuZCBjb250cmlidXRlIHRvIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24uXG4gKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHksIHVzZSBgcHJvdmlkZURlZmF1bHRDb25maWdgIG9yIGBwcm92aWRlRGVmYXVsdENvbmZpZ0ZhY3RvcnlgIGluc3RlYWQuXG4gKlxuICogR2VuZXJhbCBydWxlIGlzLCB0aGF0IGFsbCBjb25maWcgcHJvdmlkZWQgaW4gbGlicmFyaWVzIHNob3VsZCBiZSBwcm92aWRlZCBhcyBkZWZhdWx0IGNvbmZpZy5cbiAqL1xuZXhwb3J0IGNvbnN0IERlZmF1bHRDb25maWdDaHVuayA9IG5ldyBJbmplY3Rpb25Ub2tlbjxvYmplY3RbXT4oXG4gICdEZWZhdWx0Q29uZmlndXJhdGlvbkNodW5rJ1xuKTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIGNodW5rIHVzaW5nIENvbmZpZ0NodW5rIHRva2VuXG4gKlxuICogVG8gcHJvdmlkZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gaW4gbGlicmFyaWVzIHByb3ZpZGVEZWZhdWx0Q29uZmlnIHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIGNvbmZpZyBDb25maWcgb2JqZWN0IHRvIG1lcmdlIHdpdGggdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29uZmlnKFxuICBjb25maWc6IGFueSA9IHt9LFxuICBkZWZhdWx0Q29uZmlnID0gZmFsc2Vcbik6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHtcbiAgICBwcm92aWRlOiBkZWZhdWx0Q29uZmlnID8gRGVmYXVsdENvbmZpZ0NodW5rIDogQ29uZmlnQ2h1bmssXG4gICAgdXNlVmFsdWU6IGNvbmZpZyxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIHdpdGggZmFjdG9yeSBmdW5jdGlvbiwgdXNpbmcgQ29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBUbyBwcm92aWRlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBpbiBsaWJyYXJpZXMgcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5IHNob3VsZCBiZSB1c2VkIGluc3RlYWQuXG4gKlxuICogQHBhcmFtIGNvbmZpZ0ZhY3RvcnkgRmFjdG9yeSBGdW5jdGlvbiB0aGF0IHdpbGwgZ2VuZXJhdGUgY29uZmlnIG9iamVjdFxuICogQHBhcmFtIGRlcHMgT3B0aW9uYWwgZGVwZW5kZW5jaWVzIHRvIGEgZmFjdG9yeSBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZ0ZhY3RvcnkoXG4gIGNvbmZpZ0ZhY3Rvcnk6IEZ1bmN0aW9uLFxuICBkZXBzPzogYW55W10sXG4gIGRlZmF1bHRDb25maWcgPSBmYWxzZVxuKTogUHJvdmlkZXIge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IGRlZmF1bHRDb25maWcgPyBEZWZhdWx0Q29uZmlnQ2h1bmsgOiBDb25maWdDaHVuayxcbiAgICB1c2VGYWN0b3J5OiBjb25maWdGYWN0b3J5LFxuICAgIG11bHRpOiB0cnVlLFxuICAgIGRlcHM6IGRlcHMsXG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHByb3ZpZGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIGNodW5rIHVzaW5nIERlZmF1bHRDb25maWdDaHVuayB0b2tlblxuICpcbiAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0byBtZXJnZSB3aXRoIHRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGNvbmZpZzogYW55ID0ge30pOiBQcm92aWRlciB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogRGVmYXVsdENvbmZpZ0NodW5rLFxuICAgIHVzZVZhbHVlOiBjb25maWcsXG4gICAgbXVsdGk6IHRydWUsXG4gIH07XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHByb3ZpZGUgZGVmYXVsdCBjb25maWd1cmF0aW9uIHdpdGggZmFjdG9yeSBmdW5jdGlvbiwgdXNpbmcgRGVmYXVsdENvbmZpZ0NodW5rIHRva2VuXG4gKlxuICogQHBhcmFtIGNvbmZpZ0ZhY3RvcnkgRmFjdG9yeSBGdW5jdGlvbiB0aGF0IHdpbGwgZ2VuZXJhdGUgY29uZmlnIG9iamVjdFxuICogQHBhcmFtIGRlcHMgT3B0aW9uYWwgZGVwZW5kZW5jaWVzIHRvIGEgZmFjdG9yeSBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZURlZmF1bHRDb25maWdGYWN0b3J5KFxuICBjb25maWdGYWN0b3J5OiBGdW5jdGlvbixcbiAgZGVwcz86IGFueVtdXG4pOiBQcm92aWRlciB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogRGVmYXVsdENvbmZpZ0NodW5rLFxuICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ0ZhY3RvcnksXG4gICAgbXVsdGk6IHRydWUsXG4gICAgZGVwczogZGVwcyxcbiAgfTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgbWVyZ2VzIGFsbCBjb25maWd1cmF0aW9ucyBjaHVua3MuIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSB3aXRob3V0IGV4cGxpY2l0IHJlYXNvbi5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmF0aW9uRmFjdG9yeShcbiAgY29uZmlnQ2h1bmtzOiBhbnlbXSA9IFtdLFxuICBkZWZhdWx0Q29uZmlnQ2h1bmtzOiBhbnlbXSA9IFtdXG4pIHtcbiAgY29uc3QgY29uZmlnID0gZGVlcE1lcmdlKFxuICAgIHt9LFxuICAgIC4uLihkZWZhdWx0Q29uZmlnQ2h1bmtzID8/IFtdKSxcbiAgICAuLi4oY29uZmlnQ2h1bmtzID8/IFtdKVxuICApO1xuICByZXR1cm4gY29uZmlnO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlnTW9kdWxlIHtcbiAgLyoqXG4gICAqIEltcG9ydCBDb25maWdNb2R1bGUgYW5kIGNvbnRyaWJ1dGUgY29uZmlnIHRvIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAgKlxuICAgKiBUbyBwcm92aWRlIGRlZmF1bHQgY29uZmlndXJhdGlvbiBpbiBsaWJyYXJpZXMgcHJvdmlkZURlZmF1bHRDb25maWcgc2hvdWxkIGJlIHVzZWQgaW5zdGVhZC5cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZyBDb25maWcgb2JqZWN0IHRvIG1lcmdlIHdpdGggdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICAqL1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc6IG9iamVjdCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IENvbmZpZ01vZHVsZSBhbmQgY29udHJpYnV0ZSBjb25maWcgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIHVzaW5nIGZhY3RvcnkgZnVuY3Rpb25cbiAgICpcbiAgICogVG8gcHJvdmlkZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gaW4gbGlicmFyaWVzIHByb3ZpZGVEZWZhdWx0Q29uZmlnRmFjdG9yeSBzaG91bGQgYmUgdXNlZCBpbnN0ZWFkLlxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnRmFjdG9yeSBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCBnZW5lcmF0ZSBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSBkZXBzIE9wdGlvbmFsIGRlcGVuZGVuY2llcyB0byBmYWN0b3J5IGZ1bmN0aW9uXG4gICAqL1xuICBzdGF0aWMgd2l0aENvbmZpZ0ZhY3RvcnkoXG4gICAgY29uZmlnRmFjdG9yeTogRnVuY3Rpb24sXG4gICAgZGVwcz86IGFueVtdXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnRmFjdG9yeShjb25maWdGYWN0b3J5LCBkZXBzKV0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb2R1bGUgd2l0aCBwcm92aWRlcnMsIHNob3VsZCBiZSBpbXBvcnRlZCBvbmx5IG9uY2UsIGlmIHBvc3NpYmxlLCBhdCB0aGUgcm9vdCBvZiB0aGUgYXBwLlxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqL1xuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IGFueSA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBwcm92aWRlQ29uZmlnKGNvbmZpZyksXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDb25maWcsXG4gICAgICAgICAgdXNlRmFjdG9yeTogY29uZmlndXJhdGlvbkZhY3RvcnksXG4gICAgICAgICAgZGVwczogW1xuICAgICAgICAgICAgW25ldyBPcHRpb25hbCgpLCBDb25maWdDaHVua10sXG4gICAgICAgICAgICBbbmV3IE9wdGlvbmFsKCksIERlZmF1bHRDb25maWdDaHVua10sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19