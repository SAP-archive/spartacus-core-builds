import { InjectionToken, ModuleWithProviders, Provider } from '@angular/core';
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
export declare function configurationFactory(configChunks: any[]): any;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5kLnRzIiwic291cmNlcyI6WyJjb25maWcubW9kdWxlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNENBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBQcm92aWRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLyoqXG4gKiBHbG9iYWwgQ29uZmlndXJhdGlvbiBpbmplY3Rpb24gdG9rZW4sIGNhbiBiZSB1c2VkIHRvIGluamVjdCBjb25maWd1cmF0aW9uIHRvIGFueSBwYXJ0IG9mIHRoZSBhcHBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY29uc3QgQ29uZmlnOiBJbmplY3Rpb25Ub2tlbjx1bmtub3duPjtcbi8qKlxuICogQ29uZmlnIGNodW5rIHRva2VuLCBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gY2h1bmsgYW5kIGNvbnRyaWJ1dGUgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSwgdXNlIGBwcm92aWRlQ29uZmlnYCBvciBpbXBvcnQgYENvbmZpZ01vZHVsZS53aXRoQ29uZmlnYCBpbnN0ZWFkLlxuICovXG5leHBvcnQgZGVjbGFyZSBjb25zdCBDb25maWdDaHVuazogSW5qZWN0aW9uVG9rZW48dW5rbm93bj47XG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gY2h1bmsgdXNpbmcgQ29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBAcGFyYW0gY29uZmlnIENvbmZpZyBvYmplY3QgdG8gbWVyZ2Ugd2l0aCB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZyhjb25maWc/OiBhbnkpOiBQcm92aWRlcjtcbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiB3aXRoIGZhY3RvcnkgZnVuY3Rpb24sIHVzaW5nIENvbmZpZ0NodW5rIHRva2VuXG4gKlxuICogQHBhcmFtIGNvbmZpZ0ZhY3RvcnkgRmFjdG9yeSBGdW5jdGlvbiB0aGF0IHdpbGwgZ2VuZXJhdGUgY29uZmlnIG9iamVjdFxuICogQHBhcmFtIGRlcHMgT3B0aW9uYWwgZGVwZW5kZW5jaWVzIHRvIGEgZmFjdG9yeSBmdW5jdGlvblxuICovXG5leHBvcnQgZGVjbGFyZSBmdW5jdGlvbiBwcm92aWRlQ29uZmlnRmFjdG9yeShjb25maWdGYWN0b3J5OiBGdW5jdGlvbiwgZGVwcz86IGFueVtdKTogUHJvdmlkZXI7XG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdGhhdCBtZXJnZXMgYWxsIGNvbmZpZ3VyYXRpb25zIGNodW5rcy4gU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IHdpdGhvdXQgZXhwbGljaXQgcmVhc29uLlxuICpcbiAqL1xuZXhwb3J0IGRlY2xhcmUgZnVuY3Rpb24gY29uZmlndXJhdGlvbkZhY3RvcnkoY29uZmlnQ2h1bmtzOiBhbnlbXSk6IGFueTtcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENvbmZpZ01vZHVsZSB7XG4gICAgLyoqXG4gICAgICogSW1wb3J0IENvbmZpZ01vZHVsZSBhbmQgY29udHJpYnV0ZSBjb25maWcgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gY29uZmlnIENvbmZpZyBvYmplY3QgdG8gbWVyZ2Ugd2l0aCB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgICAgKi9cbiAgICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc6IG9iamVjdCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnTW9kdWxlPjtcbiAgICAvKipcbiAgICAgKiBJbXBvcnQgQ29uZmlnTW9kdWxlIGFuZCBjb250cmlidXRlIGNvbmZpZyB0byB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gdXNpbmcgZmFjdG9yeSBmdW5jdGlvblxuICAgICAqXG4gICAgICogQHBhcmFtIGNvbmZpZ0ZhY3RvcnkgRmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgZ2VuZXJhdGUgY29uZmlndXJhdGlvblxuICAgICAqIEBwYXJhbSBkZXBzIE9wdGlvbmFsIGRlcGVuZGVuY2llcyB0byBmYWN0b3J5IGZ1bmN0aW9uXG4gICAgICovXG4gICAgc3RhdGljIHdpdGhDb25maWdGYWN0b3J5KGNvbmZpZ0ZhY3Rvcnk6IEZ1bmN0aW9uLCBkZXBzPzogYW55W10pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT47XG4gICAgLyoqXG4gICAgICogTW9kdWxlIHdpdGggcHJvdmlkZXJzLCBzaG91bGQgYmUgaW1wb3J0ZWQgb25seSBvbmNlLCBpZiBwb3NzaWJsZSwgYXQgdGhlIHJvb3Qgb2YgdGhlIGFwcC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBjb25maWdcbiAgICAgKi9cbiAgICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBhbnkpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT47XG59XG4iXX0=