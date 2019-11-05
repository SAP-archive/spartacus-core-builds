/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { InjectionToken, isDevMode, NgModule, Optional, } from '@angular/core';
import { ConfigValidatorToken, validateConfig, } from './config-validator/config-validator';
import { deepMerge } from './utils/deep-merge';
import { CONFIG_INITIALIZER_FORROOT_GUARD } from './config-initializer/config-initializer';
/**
 * Global Configuration injection token, can be used to inject configuration to any part of the app
 * @type {?}
 */
export var Config = new InjectionToken('Configuration');
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 * @type {?}
 */
export var ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * Helper function to provide configuration chunk using ConfigChunk token
 *
 * @param {?=} config Config object to merge with the global configuration
 * @return {?}
 */
export function provideConfig(config) {
    if (config === void 0) { config = {}; }
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
    var config = deepMerge.apply(void 0, tslib_1.__spread([{}], configChunks));
    // TODO: remove as validators should run independently, deprecated since 1.3, issue #5279
    if (isDevMode() && !configInitializerGuard) {
        validateConfig(config, configValidators || []);
    }
    return config;
}
var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    /**
     * Import ConfigModule and contribute config to the global configuration
     *
     * @param config Config object to merge with the global configuration
     */
    /**
     * Import ConfigModule and contribute config to the global configuration
     *
     * @param {?} config Config object to merge with the global configuration
     * @return {?}
     */
    ConfigModule.withConfig = /**
     * Import ConfigModule and contribute config to the global configuration
     *
     * @param {?} config Config object to merge with the global configuration
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfig(config)],
        };
    };
    /**
     * Import ConfigModule and contribute config to the global configuration using factory function
     *
     * @param configFactory Factory function that will generate configuration
     * @param deps Optional dependencies to factory function
     */
    /**
     * Import ConfigModule and contribute config to the global configuration using factory function
     *
     * @param {?} configFactory Factory function that will generate configuration
     * @param {?=} deps Optional dependencies to factory function
     * @return {?}
     */
    ConfigModule.withConfigFactory = /**
     * Import ConfigModule and contribute config to the global configuration using factory function
     *
     * @param {?} configFactory Factory function that will generate configuration
     * @param {?=} deps Optional dependencies to factory function
     * @return {?}
     */
    function (configFactory, deps) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfigFactory(configFactory, deps)],
        };
    };
    /**
     * Module with providers, should be imported only once, if possible, at the root of the app.
     *
     * @param config
     */
    /**
     * Module with providers, should be imported only once, if possible, at the root of the app.
     *
     * @param {?=} config
     * @return {?}
     */
    ConfigModule.forRoot = /**
     * Module with providers, should be imported only once, if possible, at the root of the app.
     *
     * @param {?=} config
     * @return {?}
     */
    function (config) {
        if (config === void 0) { config = {}; }
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
    };
    ConfigModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [],
                },] }
    ];
    return ConfigModule;
}());
export { ConfigModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFNBQVMsRUFFVCxRQUFRLEVBQ1IsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxvQkFBb0IsRUFDcEIsY0FBYyxHQUNmLE1BQU0scUNBQXFDLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7OztBQUszRixNQUFNLEtBQU8sTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQzs7Ozs7O0FBTXpELE1BQU0sS0FBTyxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQUMsb0JBQW9CLENBQUM7Ozs7Ozs7QUFPbkUsTUFBTSxVQUFVLGFBQWEsQ0FBQyxNQUFnQjtJQUFoQix1QkFBQSxFQUFBLFdBQWdCO0lBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ2pFLENBQUM7Ozs7Ozs7O0FBUUQsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxhQUF1QixFQUN2QixJQUFZO0lBRVosT0FBTztRQUNMLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDO0FBQ0osQ0FBQzs7Ozs7Ozs7O0FBTUQsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxZQUFtQixFQUNuQixnQkFBbUMsRUFBRSxrREFBa0Q7QUFDdkYsc0JBQWdDLENBQUMsa0RBQWtEOzs7UUFFN0UsTUFBTSxHQUFHLFNBQVMsaUNBQUMsRUFBRSxHQUFLLFlBQVksRUFBQztJQUM3Qyx5RkFBeUY7SUFDekYsSUFBSSxTQUFTLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFO1FBQzFDLGNBQWMsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLElBQUksRUFBRSxDQUFDLENBQUM7S0FDaEQ7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBRUQ7SUFBQTtJQXVEQSxDQUFDO0lBbERDOzs7O09BSUc7Ozs7Ozs7SUFDSSx1QkFBVTs7Ozs7O0lBQWpCLFVBQWtCLE1BQWM7UUFDOUIsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHOzs7Ozs7OztJQUNJLDhCQUFpQjs7Ozs7OztJQUF4QixVQUNFLGFBQXVCLEVBQ3ZCLElBQVk7UUFFWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRzs7Ozs7OztJQUNJLG9CQUFPOzs7Ozs7SUFBZCxVQUFlLE1BQWdCO1FBQWhCLHVCQUFBLEVBQUEsV0FBZ0I7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUNyQjtvQkFDRSxPQUFPLEVBQUUsTUFBTTtvQkFDZixVQUFVLEVBQUUsb0JBQW9CO29CQUNoQyxJQUFJLEVBQUU7d0JBQ0osV0FBVzt3QkFDWCxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsb0JBQW9CLENBQUM7d0JBQ3RDLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxnQ0FBZ0MsQ0FBQztxQkFDbkQ7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkF0REYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLEVBQUU7aUJBQ2pCOztJQW9ERCxtQkFBQztDQUFBLEFBdkRELElBdURDO1NBbkRZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIGlzRGV2TW9kZSxcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIE9wdGlvbmFsLFxuICBQcm92aWRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBDb25maWdWYWxpZGF0b3IsXG4gIENvbmZpZ1ZhbGlkYXRvclRva2VuLFxuICB2YWxpZGF0ZUNvbmZpZyxcbn0gZnJvbSAnLi9jb25maWctdmFsaWRhdG9yL2NvbmZpZy12YWxpZGF0b3InO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7IENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJEIH0gZnJvbSAnLi9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyJztcblxuLyoqXG4gKiBHbG9iYWwgQ29uZmlndXJhdGlvbiBpbmplY3Rpb24gdG9rZW4sIGNhbiBiZSB1c2VkIHRvIGluamVjdCBjb25maWd1cmF0aW9uIHRvIGFueSBwYXJ0IG9mIHRoZSBhcHBcbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZpZyA9IG5ldyBJbmplY3Rpb25Ub2tlbignQ29uZmlndXJhdGlvbicpO1xuXG4vKipcbiAqIENvbmZpZyBjaHVuayB0b2tlbiwgY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIGNodW5rIGFuZCBjb250cmlidXRlIHRvIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiBvYmplY3QuXG4gKiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHksIHVzZSBgcHJvdmlkZUNvbmZpZ2Agb3IgaW1wb3J0IGBDb25maWdNb2R1bGUud2l0aENvbmZpZ2AgaW5zdGVhZC5cbiAqL1xuZXhwb3J0IGNvbnN0IENvbmZpZ0NodW5rID0gbmV3IEluamVjdGlvblRva2VuKCdDb25maWd1cmF0aW9uQ2h1bmsnKTtcblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIGNodW5rIHVzaW5nIENvbmZpZ0NodW5rIHRva2VuXG4gKlxuICogQHBhcmFtIGNvbmZpZyBDb25maWcgb2JqZWN0IHRvIG1lcmdlIHdpdGggdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29uZmlnKGNvbmZpZzogYW55ID0ge30pOiBQcm92aWRlciB7XG4gIHJldHVybiB7IHByb3ZpZGU6IENvbmZpZ0NodW5rLCB1c2VWYWx1ZTogY29uZmlnLCBtdWx0aTogdHJ1ZSB9O1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gd2l0aCBmYWN0b3J5IGZ1bmN0aW9uLCB1c2luZyBDb25maWdDaHVuayB0b2tlblxuICpcbiAqIEBwYXJhbSBjb25maWdGYWN0b3J5IEZhY3RvcnkgRnVuY3Rpb24gdGhhdCB3aWxsIGdlbmVyYXRlIGNvbmZpZyBvYmplY3RcbiAqIEBwYXJhbSBkZXBzIE9wdGlvbmFsIGRlcGVuZGVuY2llcyB0byBhIGZhY3RvcnkgZnVuY3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWdGYWN0b3J5KFxuICBjb25maWdGYWN0b3J5OiBGdW5jdGlvbixcbiAgZGVwcz86IGFueVtdXG4pOiBQcm92aWRlciB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogQ29uZmlnQ2h1bmssXG4gICAgdXNlRmFjdG9yeTogY29uZmlnRmFjdG9yeSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgICBkZXBzOiBkZXBzLFxuICB9O1xufVxuXG4vKipcbiAqIEZhY3RvcnkgZnVuY3Rpb24gdGhhdCBtZXJnZXMgYWxsIGNvbmZpZ3VyYXRpb25zIGNodW5rcy4gU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5IHdpdGhvdXQgZXhwbGljaXQgcmVhc29uLlxuICpcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyYXRpb25GYWN0b3J5KFxuICBjb25maWdDaHVua3M6IGFueVtdLFxuICBjb25maWdWYWxpZGF0b3JzOiBDb25maWdWYWxpZGF0b3JbXSwgLy8gVE9ETzogcmVtb3ZlLCBkZXByZWNhdGVkIHNpbmNlIDEuMywgaXNzdWUgIzUyNzlcbiAgY29uZmlnSW5pdGlhbGl6ZXJHdWFyZD86IGJvb2xlYW4gLy8gVE9ETzogcmVtb3ZlLCBkZXByZWNhdGVkIHNpbmNlIDEuMywgaXNzdWUgIzUyNzlcbikge1xuICBjb25zdCBjb25maWcgPSBkZWVwTWVyZ2Uoe30sIC4uLmNvbmZpZ0NodW5rcyk7XG4gIC8vIFRPRE86IHJlbW92ZSBhcyB2YWxpZGF0b3JzIHNob3VsZCBydW4gaW5kZXBlbmRlbnRseSwgZGVwcmVjYXRlZCBzaW5jZSAxLjMsIGlzc3VlICM1Mjc5XG4gIGlmIChpc0Rldk1vZGUoKSAmJiAhY29uZmlnSW5pdGlhbGl6ZXJHdWFyZCkge1xuICAgIHZhbGlkYXRlQ29uZmlnKGNvbmZpZywgY29uZmlnVmFsaWRhdG9ycyB8fCBbXSk7XG4gIH1cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ01vZHVsZSB7XG4gIC8qKlxuICAgKiBJbXBvcnQgQ29uZmlnTW9kdWxlIGFuZCBjb250cmlidXRlIGNvbmZpZyB0byB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZyBDb25maWcgb2JqZWN0IHRvIG1lcmdlIHdpdGggdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICAqL1xuICBzdGF0aWMgd2l0aENvbmZpZyhjb25maWc6IG9iamVjdCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogSW1wb3J0IENvbmZpZ01vZHVsZSBhbmQgY29udHJpYnV0ZSBjb25maWcgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIHVzaW5nIGZhY3RvcnkgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZ0ZhY3RvcnkgRmFjdG9yeSBmdW5jdGlvbiB0aGF0IHdpbGwgZ2VuZXJhdGUgY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0gZGVwcyBPcHRpb25hbCBkZXBlbmRlbmNpZXMgdG8gZmFjdG9yeSBmdW5jdGlvblxuICAgKi9cbiAgc3RhdGljIHdpdGhDb25maWdGYWN0b3J5KFxuICAgIGNvbmZpZ0ZhY3Rvcnk6IEZ1bmN0aW9uLFxuICAgIGRlcHM/OiBhbnlbXVxuICApOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZ0ZhY3RvcnkoY29uZmlnRmFjdG9yeSwgZGVwcyldLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTW9kdWxlIHdpdGggcHJvdmlkZXJzLCBzaG91bGQgYmUgaW1wb3J0ZWQgb25seSBvbmNlLCBpZiBwb3NzaWJsZSwgYXQgdGhlIHJvb3Qgb2YgdGhlIGFwcC5cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBhbnkgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnM8Q29uZmlnTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgcHJvdmlkZUNvbmZpZyhjb25maWcpLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ29uZmlnLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ3VyYXRpb25GYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtcbiAgICAgICAgICAgIENvbmZpZ0NodW5rLFxuICAgICAgICAgICAgW25ldyBPcHRpb25hbCgpLCBDb25maWdWYWxpZGF0b3JUb2tlbl0sIC8vIFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBzaW5jZSAxLjMsIGlzc3VlICM1Mjc5XG4gICAgICAgICAgICBbbmV3IE9wdGlvbmFsKCksIENPTkZJR19JTklUSUFMSVpFUl9GT1JST09UX0dVQVJEXSwgLy8gVE9ETzogcmVtb3ZlLCBkZXByZWNhdGVkIHNpbmNlIDEuMywgaXNzdWUgIzUyNzlcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=