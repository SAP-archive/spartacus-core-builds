/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { InjectionToken, NgModule, Optional, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defaultServerConfig, ServerConfig, } from './server-config/server-config';
import { deepMerge } from './utils/deep-merge';
import { ConfigValidatorToken, validateConfig, } from './utils/config-validator';
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
 * @return {?}
 */
export function configurationFactory(configChunks, configValidators) {
    /** @type {?} */
    var config = deepMerge.apply(void 0, tslib_1.__spread([{}], configChunks));
    if (!config.production) {
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
                { provide: ServerConfig, useExisting: Config },
                provideConfig(defaultServerConfig),
                provideConfig(config),
                {
                    provide: Config,
                    useFactory: configurationFactory,
                    deps: [ConfigChunk, [new Optional(), ConfigValidatorToken]],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxjQUFjLEVBRWQsUUFBUSxFQUVSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixZQUFZLEdBQ2IsTUFBTSwrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixjQUFjLEdBQ2YsTUFBTSwwQkFBMEIsQ0FBQzs7Ozs7QUFLbEMsTUFBTSxLQUFPLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxlQUFlLENBQUM7Ozs7OztBQU16RCxNQUFNLEtBQU8sV0FBVyxHQUFHLElBQUksY0FBYyxDQUFDLG9CQUFvQixDQUFDOzs7Ozs7O0FBT25FLE1BQU0sVUFBVSxhQUFhLENBQUMsTUFBZ0I7SUFBaEIsdUJBQUEsRUFBQSxXQUFnQjtJQUM1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNqRSxDQUFDOzs7Ozs7OztBQVFELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsYUFBdUIsRUFDdkIsSUFBWTtJQUVaLE9BQU87UUFDTCxPQUFPLEVBQUUsV0FBVztRQUNwQixVQUFVLEVBQUUsYUFBYTtRQUN6QixLQUFLLEVBQUUsSUFBSTtRQUNYLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQztBQUNKLENBQUM7Ozs7Ozs7O0FBTUQsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxZQUFtQixFQUNuQixnQkFBbUM7O1FBRTdCLE1BQU0sR0FBRyxTQUFTLGlDQUFDLEVBQUUsR0FBSyxZQUFZLEVBQUM7SUFDN0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7UUFDdEIsY0FBYyxDQUFDLE1BQU0sRUFBRSxnQkFBZ0IsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUNoRDtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFFRDtJQUFBO0lBcURBLENBQUM7SUFoREM7Ozs7T0FJRzs7Ozs7OztJQUNJLHVCQUFVOzs7Ozs7SUFBakIsVUFBa0IsTUFBYztRQUM5QixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7Ozs7Ozs7O0lBQ0ksOEJBQWlCOzs7Ozs7O0lBQXhCLFVBQ0UsYUFBdUIsRUFDdkIsSUFBWTtRQUVaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkQsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0ksb0JBQU87Ozs7OztJQUFkLFVBQWUsTUFBZ0I7UUFBaEIsdUJBQUEsRUFBQSxXQUFnQjtRQUM3QixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUM5QyxhQUFhLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2xDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JCO29CQUNFLE9BQU8sRUFBRSxNQUFNO29CQUNmLFVBQVUsRUFBRSxvQkFBb0I7b0JBQ2hDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztpQkFDNUQ7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztnQkFwREYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLEVBQUU7aUJBQ2pCOztJQWtERCxtQkFBQztDQUFBLEFBckRELElBcURDO1NBakRZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3Rpb25Ub2tlbixcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIFByb3ZpZGVyLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgZGVmYXVsdFNlcnZlckNvbmZpZyxcbiAgU2VydmVyQ29uZmlnLFxufSBmcm9tICcuL3NlcnZlci1jb25maWcvc2VydmVyLWNvbmZpZyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHtcbiAgQ29uZmlnVmFsaWRhdG9yLFxuICBDb25maWdWYWxpZGF0b3JUb2tlbixcbiAgdmFsaWRhdGVDb25maWcsXG59IGZyb20gJy4vdXRpbHMvY29uZmlnLXZhbGlkYXRvcic7XG5cbi8qKlxuICogR2xvYmFsIENvbmZpZ3VyYXRpb24gaW5qZWN0aW9uIHRva2VuLCBjYW4gYmUgdXNlZCB0byBpbmplY3QgY29uZmlndXJhdGlvbiB0byBhbnkgcGFydCBvZiB0aGUgYXBwXG4gKi9cbmV4cG9ydCBjb25zdCBDb25maWcgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0NvbmZpZ3VyYXRpb24nKTtcblxuLyoqXG4gKiBDb25maWcgY2h1bmsgdG9rZW4sIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBjaHVuayBhbmQgY29udHJpYnV0ZSB0byB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5LCB1c2UgYHByb3ZpZGVDb25maWdgIG9yIGltcG9ydCBgQ29uZmlnTW9kdWxlLndpdGhDb25maWdgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBjb25zdCBDb25maWdDaHVuayA9IG5ldyBJbmplY3Rpb25Ub2tlbignQ29uZmlndXJhdGlvbkNodW5rJyk7XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBjaHVuayB1c2luZyBDb25maWdDaHVuayB0b2tlblxuICpcbiAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0byBtZXJnZSB3aXRoIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZyhjb25maWc6IGFueSA9IHt9KTogUHJvdmlkZXIge1xuICByZXR1cm4geyBwcm92aWRlOiBDb25maWdDaHVuaywgdXNlVmFsdWU6IGNvbmZpZywgbXVsdGk6IHRydWUgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIHdpdGggZmFjdG9yeSBmdW5jdGlvbiwgdXNpbmcgQ29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBAcGFyYW0gY29uZmlnRmFjdG9yeSBGYWN0b3J5IEZ1bmN0aW9uIHRoYXQgd2lsbCBnZW5lcmF0ZSBjb25maWcgb2JqZWN0XG4gKiBAcGFyYW0gZGVwcyBPcHRpb25hbCBkZXBlbmRlbmNpZXMgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29uZmlnRmFjdG9yeShcbiAgY29uZmlnRmFjdG9yeTogRnVuY3Rpb24sXG4gIGRlcHM/OiBhbnlbXVxuKTogUHJvdmlkZXIge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IENvbmZpZ0NodW5rLFxuICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ0ZhY3RvcnksXG4gICAgbXVsdGk6IHRydWUsXG4gICAgZGVwczogZGVwcyxcbiAgfTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgbWVyZ2VzIGFsbCBjb25maWd1cmF0aW9ucyBjaHVua3MuIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSB3aXRob3V0IGV4cGxpY2l0IHJlYXNvbi5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmF0aW9uRmFjdG9yeShcbiAgY29uZmlnQ2h1bmtzOiBhbnlbXSxcbiAgY29uZmlnVmFsaWRhdG9yczogQ29uZmlnVmFsaWRhdG9yW11cbikge1xuICBjb25zdCBjb25maWcgPSBkZWVwTWVyZ2Uoe30sIC4uLmNvbmZpZ0NodW5rcyk7XG4gIGlmICghY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICB2YWxpZGF0ZUNvbmZpZyhjb25maWcsIGNvbmZpZ1ZhbGlkYXRvcnMgfHwgW10pO1xuICB9XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWdNb2R1bGUge1xuICAvKipcbiAgICogSW1wb3J0IENvbmZpZ01vZHVsZSBhbmQgY29udHJpYnV0ZSBjb25maWcgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0byBtZXJnZSB3aXRoIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAgKi9cbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBvYmplY3QpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKV0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbXBvcnQgQ29uZmlnTW9kdWxlIGFuZCBjb250cmlidXRlIGNvbmZpZyB0byB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gdXNpbmcgZmFjdG9yeSBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0gY29uZmlnRmFjdG9yeSBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgd2lsbCBnZW5lcmF0ZSBjb25maWd1cmF0aW9uXG4gICAqIEBwYXJhbSBkZXBzIE9wdGlvbmFsIGRlcGVuZGVuY2llcyB0byBmYWN0b3J5IGZ1bmN0aW9uXG4gICAqL1xuICBzdGF0aWMgd2l0aENvbmZpZ0ZhY3RvcnkoXG4gICAgY29uZmlnRmFjdG9yeTogRnVuY3Rpb24sXG4gICAgZGVwcz86IGFueVtdXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZ0ZhY3RvcnkoY29uZmlnRmFjdG9yeSwgZGVwcyldLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogTW9kdWxlIHdpdGggcHJvdmlkZXJzLCBzaG91bGQgYmUgaW1wb3J0ZWQgb25seSBvbmNlLCBpZiBwb3NzaWJsZSwgYXQgdGhlIHJvb3Qgb2YgdGhlIGFwcC5cbiAgICpcbiAgICogQHBhcmFtIGNvbmZpZ1xuICAgKi9cbiAgc3RhdGljIGZvclJvb3QoY29uZmlnOiBhbnkgPSB7fSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogU2VydmVyQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICAgIHByb3ZpZGVDb25maWcoZGVmYXVsdFNlcnZlckNvbmZpZyksXG4gICAgICAgIHByb3ZpZGVDb25maWcoY29uZmlnKSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENvbmZpZyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbQ29uZmlnQ2h1bmssIFtuZXcgT3B0aW9uYWwoKSwgQ29uZmlnVmFsaWRhdG9yVG9rZW5dXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19