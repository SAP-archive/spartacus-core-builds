import { InjectionToken, ModuleWithProviders, Provider } from '@angular/core';
import { ConfigValidator } from './config-validator/config-validator';
/**
 * Global Configuration injection token, can be used to inject configuration to any part of the app
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
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
export declare function configurationFactory(configChunks: any[], configValidators: ConfigValidator[], // TODO: remove, deprecated since 1.3, issue #5279
configInitializerGuard?: boolean): any;
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
    static ɵmod: ɵngcc0.ɵɵNgModuleDefWithMeta<ConfigModule, never, [typeof ɵngcc1.CommonModule], never>;
    static ɵinj: ɵngcc0.ɵɵInjectorDef<ConfigModule>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5kLnRzIiwic291cmNlcyI6WyJjb25maWcubW9kdWxlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0aW9uVG9rZW4sIE1vZHVsZVdpdGhQcm92aWRlcnMsIFByb3ZpZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdWYWxpZGF0b3IgfSBmcm9tICcuL2NvbmZpZy12YWxpZGF0b3IvY29uZmlnLXZhbGlkYXRvcic7XG4vKipcbiAqIEdsb2JhbCBDb25maWd1cmF0aW9uIGluamVjdGlvbiB0b2tlbiwgY2FuIGJlIHVzZWQgdG8gaW5qZWN0IGNvbmZpZ3VyYXRpb24gdG8gYW55IHBhcnQgb2YgdGhlIGFwcFxuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBDb25maWc6IEluamVjdGlvblRva2VuPHVua25vd24+O1xuLyoqXG4gKiBDb25maWcgY2h1bmsgdG9rZW4sIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBjaHVuayBhbmQgY29udHJpYnV0ZSB0byB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5LCB1c2UgYHByb3ZpZGVDb25maWdgIG9yIGltcG9ydCBgQ29uZmlnTW9kdWxlLndpdGhDb25maWdgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNvbnN0IENvbmZpZ0NodW5rOiBJbmplY3Rpb25Ub2tlbjx1bmtub3duPjtcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBjaHVuayB1c2luZyBDb25maWdDaHVuayB0b2tlblxuICpcbiAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0byBtZXJnZSB3aXRoIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBwcm92aWRlQ29uZmlnKGNvbmZpZz86IGFueSk6IFByb3ZpZGVyO1xuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIHdpdGggZmFjdG9yeSBmdW5jdGlvbiwgdXNpbmcgQ29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBAcGFyYW0gY29uZmlnRmFjdG9yeSBGYWN0b3J5IEZ1bmN0aW9uIHRoYXQgd2lsbCBnZW5lcmF0ZSBjb25maWcgb2JqZWN0XG4gKiBAcGFyYW0gZGVwcyBPcHRpb25hbCBkZXBlbmRlbmNpZXMgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGZ1bmN0aW9uIHByb3ZpZGVDb25maWdGYWN0b3J5KGNvbmZpZ0ZhY3Rvcnk6IEZ1bmN0aW9uLCBkZXBzPzogYW55W10pOiBQcm92aWRlcjtcbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0aGF0IG1lcmdlcyBhbGwgY29uZmlndXJhdGlvbnMgY2h1bmtzLiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgd2l0aG91dCBleHBsaWNpdCByZWFzb24uXG4gKlxuICovXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBjb25maWd1cmF0aW9uRmFjdG9yeShjb25maWdDaHVua3M6IGFueVtdLCBjb25maWdWYWxpZGF0b3JzOiBDb25maWdWYWxpZGF0b3JbXSwgLy8gVE9ETzogcmVtb3ZlLCBkZXByZWNhdGVkIHNpbmNlIDEuMywgaXNzdWUgIzUyNzlcbmNvbmZpZ0luaXRpYWxpemVyR3VhcmQ/OiBib29sZWFuKTogYW55O1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ29uZmlnTW9kdWxlIHtcbiAgICAvKipcbiAgICAgKiBJbXBvcnQgQ29uZmlnTW9kdWxlIGFuZCBjb250cmlidXRlIGNvbmZpZyB0byB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0byBtZXJnZSB3aXRoIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAgICAqL1xuICAgIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogb2JqZWN0KTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdNb2R1bGU+O1xuICAgIC8qKlxuICAgICAqIEltcG9ydCBDb25maWdNb2R1bGUgYW5kIGNvbnRyaWJ1dGUgY29uZmlnIHRvIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiB1c2luZyBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnRmFjdG9yeSBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCBnZW5lcmF0ZSBjb25maWd1cmF0aW9uXG4gICAgICogQHBhcmFtIGRlcHMgT3B0aW9uYWwgZGVwZW5kZW5jaWVzIHRvIGZhY3RvcnkgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgd2l0aENvbmZpZ0ZhY3RvcnkoY29uZmlnRmFjdG9yeTogRnVuY3Rpb24sIGRlcHM/OiBhbnlbXSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnTW9kdWxlPjtcbiAgICAvKipcbiAgICAgKiBNb2R1bGUgd2l0aCBwcm92aWRlcnMsIHNob3VsZCBiZSBpbXBvcnRlZCBvbmx5IG9uY2UsIGlmIHBvc3NpYmxlLCBhdCB0aGUgcm9vdCBvZiB0aGUgYXBwLlxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ1xuICAgICAqL1xuICAgIHN0YXRpYyBmb3JSb290KGNvbmZpZz86IGFueSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnTW9kdWxlPjtcbn1cbiJdfQ==