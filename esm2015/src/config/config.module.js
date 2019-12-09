/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { InjectionToken, isDevMode, NgModule, Optional, } from '@angular/core';
import { ConfigValidatorToken, validateConfig, } from './config-validator/config-validator';
import { deepMerge } from './utils/deep-merge';
import { CONFIG_INITIALIZER_FORROOT_GUARD } from './config-initializer/config-initializer';
/**
 * Global Configuration injection token, can be used to inject configuration to any part of the app
 * @type {?}
 */
export const Config = new InjectionToken('Configuration');
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 * @type {?}
 */
export const ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * Helper function to provide configuration chunk using ConfigChunk token
 *
 * @param {?=} config Config object to merge with the global configuration
 * @return {?}
 */
export function provideConfig(config = {}) {
    return { provide: ConfigChunk, useValue: config, multi: true };
}
/**
 * Helper function to provide configuration with factory function, using ConfigChunk token
 *
 * @param {?} configFactory Factory Function that will generate config object
 * @param {?=} deps Optional dependencies to a factory function
 * @return {?}
 */
export function provideConfigFactory(configFactory, deps) {
    return {
        provide: ConfigChunk,
        useFactory: configFactory,
        multi: true,
        deps: deps,
    };
}
/**
 * Factory function that merges all configurations chunks. Should not be used directly without explicit reason.
 *
 * @param {?} configChunks
 * @param {?} configValidators
 * @param {?=} configInitializerGuard
 * @return {?}
 */
export function configurationFactory(configChunks, configValidators, // TODO: remove, deprecated since 1.3, issue #5279
configInitializerGuard // TODO: remove, deprecated since 1.3, issue #5279
) {
    /** @type {?} */
    const config = deepMerge({}, ...configChunks);
    // TODO: remove as validators should run independently, deprecated since 1.3, issue #5279
    if (isDevMode() && !configInitializerGuard) {
        validateConfig(config, configValidators || []);
    }
    return config;
}
export class ConfigModule {
    /**
     * Import ConfigModule and contribute config to the global configuration
     *
     * @param {?} config Config object to merge with the global configuration
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfig(config)],
        };
    }
    /**
     * Import ConfigModule and contribute config to the global configuration using factory function
     *
     * @param {?} configFactory Factory function that will generate configuration
     * @param {?=} deps Optional dependencies to factory function
     * @return {?}
     */
    static withConfigFactory(configFactory, deps) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfigFactory(configFactory, deps)],
        };
    }
    /**
     * Module with providers, should be imported only once, if possible, at the root of the app.
     *
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config = {}) {
        return {
            ngModule: ConfigModule,
            providers: [
                provideConfig(config),
                {
                    provide: Config,
                    useFactory: configurationFactory,
                    deps: [
                        ConfigChunk,
                        [new Optional(), ConfigValidatorToken],
                        [new Optional(), CONFIG_INITIALIZER_FORROOT_GUARD],
                    ],
                },
            ],
        };
    }
}
ConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxjQUFjLEVBQ2QsU0FBUyxFQUVULFFBQVEsRUFDUixRQUFRLEdBRVQsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixjQUFjLEdBQ2YsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7O0FBSzNGLE1BQU0sT0FBTyxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsZUFBZSxDQUFDOzs7Ozs7QUFNekQsTUFBTSxPQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQzs7Ozs7OztBQU9uRSxNQUFNLFVBQVUsYUFBYSxDQUFDLFNBQWMsRUFBRTtJQUM1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNqRSxDQUFDOzs7Ozs7OztBQVFELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsYUFBdUIsRUFDdkIsSUFBWTtJQUVaLE9BQU87UUFDTCxPQUFPLEVBQUUsV0FBVztRQUNwQixVQUFVLEVBQUUsYUFBYTtRQUN6QixLQUFLLEVBQUUsSUFBSTtRQUNYLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7OztBQU1ELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsWUFBbUIsRUFDbkIsZ0JBQW1DLEVBQUUsa0RBQWtEO0FBQ3ZGLHNCQUFnQyxDQUFDLGtEQUFrRDs7O1VBRTdFLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsWUFBWSxDQUFDO0lBQzdDLHlGQUF5RjtJQUN6RixJQUFJLFNBQVMsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7UUFDMUMsY0FBYyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNoRDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFNRCxNQUFNLE9BQU8sWUFBWTs7Ozs7OztJQU12QixNQUFNLENBQUMsVUFBVSxDQUFDLE1BQWM7UUFDOUIsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7SUFRRCxNQUFNLENBQUMsaUJBQWlCLENBQ3RCLGFBQXVCLEVBQ3ZCLElBQVk7UUFFWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZELENBQUM7SUFDSixDQUFDOzs7Ozs7O0lBT0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFjLEVBQUU7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUNyQjtvQkFDRSxPQUFPLEVBQUUsTUFBTTtvQkFDZixVQUFVLEVBQUUsb0JBQW9CO29CQUNoQyxJQUFJLEVBQUU7d0JBQ0osV0FBVzt3QkFDWCxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsb0JBQW9CLENBQUM7d0JBQ3RDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxnQ0FBZ0MsQ0FBQztxQkFDbkQ7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUF0REYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLEVBQUU7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIGlzRGV2TW9kZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIE9wdGlvbmFsLFxuICBQcm92aWRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25maWdWYWxpZGF0b3IsXG4gIENvbmZpZ1ZhbGlkYXRvclRva2VuLFxuICB2YWxpZGF0ZUNvbmZpZyxcbn0gZnJvbSAnLi9jb25maWctdmFsaWRhdG9yL2NvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJEIH0gZnJvbSAnLi9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyJztcblxuLyoqXG4gKiBHbG9iYWwgQ29uZmlndXJhdGlvbiBpbmplY3Rpb24gdG9rZW4sIGNhbiBiZSB1c2VkIHRvIGluamVjdCBjb25maWd1cmF0aW9uIHRvIGFueSBwYXJ0IG9mIHRoZSBhcHBcbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZpZyA9IG5ldyBJbmplY3Rpb25Ub2tlbignQ29uZmlndXJhdGlvbicpO1xuXG4vKipcbiAqIENvbmZpZyBjaHVuayB0b2tlbiwgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIGNodW5rIGFuZCBjb250cmlidXRlIHRvIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHksIHVzZSBgcHJvdmlkZUNvbmZpZ2Agb3IgaW1wb3J0IGBDb25maWdNb2R1bGUud2l0aENvbmZpZ2AgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZpZ0NodW5rID0gbmV3IEluamVjdGlvblRva2VuKCdDb25maWd1cmF0aW9uQ2h1bmsnKTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIGNodW5rIHVzaW5nIENvbmZpZ0NodW5rIHRva2VuXG4gKlxuICogQHBhcmFtIGNvbmZpZyBDb25maWcgb2JqZWN0IHRvIG1lcmdlIHdpdGggdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29uZmlnKGNvbmZpZzogYW55ID0ge30pOiBQcm92aWRlciB7XG4gIHJldHVybiB7IHByb3ZpZGU6IENvbmZpZ0NodW5rLCB1c2VWYWx1ZTogY29uZmlnLCBtdWx0aTogdHJ1ZSB9O1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gd2l0aCBmYWN0b3J5IGZ1bmN0aW9uLCB1c2luZyBDb25maWdDaHVuayB0b2tlblxuICpcbiAqIEBwYXJhbSBjb25maWdGYWN0b3J5IEZhY3RvcnkgRnVuY3Rpb24gdGhhdCB3aWxsIGdlbmVyYXRlIGNvbmZpZyBvYmplY3RcbiAqIEBwYXJhbSBkZXBzIE9wdGlvbmFsIGRlcGVuZGVuY2llcyB0byBhIGZhY3RvcnkgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWdGYWN0b3J5KFxuICBjb25maWdGYWN0b3J5OiBGdW5jdGlvbixcbiAgZGVwcz86IGFueVtdXG4pOiBQcm92aWRlciB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogQ29uZmlnQ2h1bmssXG4gICAgdXNlRmFjdG9yeTogY29uZmlnRmFjdG9yeSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgICBkZXBzOiBkZXBzLFxuICB9O1xufVxuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdGhhdCBtZXJnZXMgYWxsIGNvbmZpZ3VyYXRpb25zIGNodW5rcy4gU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IHdpdGhvdXQgZXhwbGljaXQgcmVhc29uLlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyYXRpb25GYWN0b3J5KFxuICBjb25maWdDaHVua3M6IGFueVtdLFxuICBjb25maWdWYWxpZGF0b3JzOiBDb25maWdWYWxpZGF0b3JbXSwgLy8gVE9ETzogcmVtb3ZlLCBkZXByZWNhdGVkIHNpbmNlIDEuMywgaXNzdWUgIzUyNzlcbiAgY29uZmlnSW5pdGlhbGl6ZXJHdWFyZD86IGJvb2xlYW4gLy8gVE9ETzogcmVtb3ZlLCBkZXByZWNhdGVkIHNpbmNlIDEuMywgaXNzdWUgIzUyNzlcbikge1xuICBjb25zdCBjb25maWcgPSBkZWVwTWVyZ2Uoe30sIC4uLmNvbmZpZ0NodW5rcyk7XG4gIC8vIFRPRE86IHJlbW92ZSBhcyB2YWxpZGF0b3JzIHNob3VsZCBydW4gaW5kZXBlbmRlbnRseSwgZGVwcmVjYXRlZCBzaW5jZSAxLjMsIGlzc3VlICM1Mjc5XG4gIGlmIChpc0Rldk1vZGUoKSAmJiAhY29uZmlnSW5pdGlhbGl6ZXJHdWFyZCkge1xuICAgIHZhbGlkYXRlQ29uZmlnKGNvbmZpZywgY29uZmlnVmFsaWRhdG9ycyB8fCBbXSk7XG4gIH1cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ01vZHVsZSB7XG4gIC8qKlxuICAgKiBJbXBvcnQgQ29uZmlnTW9kdWxlIGFuZCBjb250cmlidXRlIGNvbmZpZyB0byB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZyBDb25maWcgb2JqZWN0IHRvIG1lcmdlIHdpdGggdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICAqL1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc6IG9iamVjdCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IENvbmZpZ01vZHVsZSBhbmQgY29udHJpYnV0ZSBjb25maWcgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIHVzaW5nIGZhY3RvcnkgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZ0ZhY3RvcnkgRmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgZ2VuZXJhdGUgY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0gZGVwcyBPcHRpb25hbCBkZXBlbmRlbmNpZXMgdG8gZmFjdG9yeSBmdW5jdGlvblxuICAgKi9cbiAgc3RhdGljIHdpdGhDb25maWdGYWN0b3J5KFxuICAgIGNvbmZpZ0ZhY3Rvcnk6IEZ1bmN0aW9uLFxuICAgIGRlcHM/OiBhbnlbXVxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZ0ZhY3RvcnkoY29uZmlnRmFjdG9yeSwgZGVwcyldLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTW9kdWxlIHdpdGggcHJvdmlkZXJzLCBzaG91bGQgYmUgaW1wb3J0ZWQgb25seSBvbmNlLCBpZiBwb3NzaWJsZSwgYXQgdGhlIHJvb3Qgb2YgdGhlIGFwcC5cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBhbnkgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZUNvbmZpZyhjb25maWcpLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ29uZmlnLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ3VyYXRpb25GYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtcbiAgICAgICAgICAgIENvbmZpZ0NodW5rLFxuICAgICAgICAgICAgW25ldyBPcHRpb25hbCgpLCBDb25maWdWYWxpZGF0b3JUb2tlbl0sIC8vIFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBzaW5jZSAxLjMsIGlzc3VlICM1Mjc5XG4gICAgICAgICAgICBbbmV3IE9wdGlvbmFsKCksIENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJEXSwgLy8gVE9ETzogcmVtb3ZlLCBkZXByZWNhdGVkIHNpbmNlIDEuMywgaXNzdWUgIzUyNzlcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=