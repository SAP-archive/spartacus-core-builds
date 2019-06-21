/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, NgModule, Optional, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defaultServerConfig, ServerConfig, } from './server-config/server-config';
import { deepMerge } from './utils/deep-merge';
import { ConfigValidatorToken, validateConfig, } from './utils/config-validator';
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
 * @return {?}
 */
export function configurationFactory(configChunks, configValidators) {
    /** @type {?} */
    const config = deepMerge({}, ...configChunks);
    if (!config.production) {
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
    }
}
ConfigModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGNBQWMsRUFFZCxRQUFRLEVBRVIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFlBQVksR0FDYixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLGNBQWMsR0FDZixNQUFNLDBCQUEwQixDQUFDOzs7OztBQUtsQyxNQUFNLE9BQU8sTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQzs7Ozs7O0FBTXpELE1BQU0sT0FBTyxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQUMsb0JBQW9CLENBQUM7Ozs7Ozs7QUFPbkUsTUFBTSxVQUFVLGFBQWEsQ0FBQyxTQUFjLEVBQUU7SUFDNUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDakUsQ0FBQzs7Ozs7Ozs7QUFRRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLGFBQXVCLEVBQ3ZCLElBQVk7SUFFWixPQUFPO1FBQ0wsT0FBTyxFQUFFLFdBQVc7UUFDcEIsVUFBVSxFQUFFLGFBQWE7UUFDekIsS0FBSyxFQUFFLElBQUk7UUFDWCxJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUM7QUFDSixDQUFDOzs7Ozs7OztBQU1ELE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsWUFBbUIsRUFDbkIsZ0JBQW1DOztVQUU3QixNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxHQUFHLFlBQVksQ0FBQztJQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUN0QixjQUFjLENBQUMsTUFBTSxFQUFFLGdCQUFnQixJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQU1ELE1BQU0sT0FBTyxZQUFZOzs7Ozs7O0lBTXZCLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBYztRQUM5QixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7Ozs7OztJQVFELE1BQU0sQ0FBQyxpQkFBaUIsQ0FDdEIsYUFBdUIsRUFDdkIsSUFBWTtRQUVaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkQsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7SUFPRCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQWMsRUFBRTtRQUM3QixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUM5QyxhQUFhLENBQUMsbUJBQW1CLENBQUM7Z0JBQ2xDLGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JCO29CQUNFLE9BQU8sRUFBRSxNQUFNO29CQUNmLFVBQVUsRUFBRSxvQkFBb0I7b0JBQ2hDLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksUUFBUSxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztpQkFDNUQ7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOzs7WUFwREYsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLEVBQUU7YUFDakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3Rpb25Ub2tlbixcbiAgTW9kdWxlV2l0aFByb3ZpZGVycyxcbiAgTmdNb2R1bGUsXG4gIFByb3ZpZGVyLFxuICBPcHRpb25hbCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgZGVmYXVsdFNlcnZlckNvbmZpZyxcbiAgU2VydmVyQ29uZmlnLFxufSBmcm9tICcuL3NlcnZlci1jb25maWcvc2VydmVyLWNvbmZpZyc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuL3V0aWxzL2RlZXAtbWVyZ2UnO1xuaW1wb3J0IHtcbiAgQ29uZmlnVmFsaWRhdG9yLFxuICBDb25maWdWYWxpZGF0b3JUb2tlbixcbiAgdmFsaWRhdGVDb25maWcsXG59IGZyb20gJy4vdXRpbHMvY29uZmlnLXZhbGlkYXRvcic7XG5cbi8qKlxuICogR2xvYmFsIENvbmZpZ3VyYXRpb24gaW5qZWN0aW9uIHRva2VuLCBjYW4gYmUgdXNlZCB0byBpbmplY3QgY29uZmlndXJhdGlvbiB0byBhbnkgcGFydCBvZiB0aGUgYXBwXG4gKi9cbmV4cG9ydCBjb25zdCBDb25maWcgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0NvbmZpZ3VyYXRpb24nKTtcblxuLyoqXG4gKiBDb25maWcgY2h1bmsgdG9rZW4sIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBjaHVuayBhbmQgY29udHJpYnV0ZSB0byB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5LCB1c2UgYHByb3ZpZGVDb25maWdgIG9yIGltcG9ydCBgQ29uZmlnTW9kdWxlLndpdGhDb25maWdgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBjb25zdCBDb25maWdDaHVuayA9IG5ldyBJbmplY3Rpb25Ub2tlbignQ29uZmlndXJhdGlvbkNodW5rJyk7XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBjaHVuayB1c2luZyBDb25maWdDaHVuayB0b2tlblxuICpcbiAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0byBtZXJnZSB3aXRoIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZyhjb25maWc6IGFueSA9IHt9KTogUHJvdmlkZXIge1xuICByZXR1cm4geyBwcm92aWRlOiBDb25maWdDaHVuaywgdXNlVmFsdWU6IGNvbmZpZywgbXVsdGk6IHRydWUgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIHdpdGggZmFjdG9yeSBmdW5jdGlvbiwgdXNpbmcgQ29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBAcGFyYW0gY29uZmlnRmFjdG9yeSBGYWN0b3J5IEZ1bmN0aW9uIHRoYXQgd2lsbCBnZW5lcmF0ZSBjb25maWcgb2JqZWN0XG4gKiBAcGFyYW0gZGVwcyBPcHRpb25hbCBkZXBlbmRlbmNpZXMgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29uZmlnRmFjdG9yeShcbiAgY29uZmlnRmFjdG9yeTogRnVuY3Rpb24sXG4gIGRlcHM/OiBhbnlbXVxuKTogUHJvdmlkZXIge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IENvbmZpZ0NodW5rLFxuICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ0ZhY3RvcnksXG4gICAgbXVsdGk6IHRydWUsXG4gICAgZGVwczogZGVwcyxcbiAgfTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgbWVyZ2VzIGFsbCBjb25maWd1cmF0aW9ucyBjaHVua3MuIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSB3aXRob3V0IGV4cGxpY2l0IHJlYXNvbi5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmF0aW9uRmFjdG9yeShcbiAgY29uZmlnQ2h1bmtzOiBhbnlbXSxcbiAgY29uZmlnVmFsaWRhdG9yczogQ29uZmlnVmFsaWRhdG9yW11cbikge1xuICBjb25zdCBjb25maWcgPSBkZWVwTWVyZ2Uoe30sIC4uLmNvbmZpZ0NodW5rcyk7XG4gIGlmICghY29uZmlnLnByb2R1Y3Rpb24pIHtcbiAgICB2YWxpZGF0ZUNvbmZpZyhjb25maWcsIGNvbmZpZ1ZhbGlkYXRvcnMgfHwgW10pO1xuICB9XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWdNb2R1bGUge1xuICAvKipcbiAgICogSW1wb3J0IENvbmZpZ01vZHVsZSBhbmQgY29udHJpYnV0ZSBjb25maWcgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0byBtZXJnZSB3aXRoIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAgKi9cbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBvYmplY3QpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBDb25maWdNb2R1bGUgYW5kIGNvbnRyaWJ1dGUgY29uZmlnIHRvIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiB1c2luZyBmYWN0b3J5IGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdGYWN0b3J5IEZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGdlbmVyYXRlIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIGRlcHMgT3B0aW9uYWwgZGVwZW5kZW5jaWVzIHRvIGZhY3RvcnkgZnVuY3Rpb25cbiAgICovXG4gIHN0YXRpYyB3aXRoQ29uZmlnRmFjdG9yeShcbiAgICBjb25maWdGYWN0b3J5OiBGdW5jdGlvbixcbiAgICBkZXBzPzogYW55W11cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWdGYWN0b3J5KGNvbmZpZ0ZhY3RvcnksIGRlcHMpXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZHVsZSB3aXRoIHByb3ZpZGVycywgc2hvdWxkIGJlIGltcG9ydGVkIG9ubHkgb25jZSwgaWYgcG9zc2libGUsIGF0IHRoZSByb290IG9mIHRoZSBhcHAuXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogYW55ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogU2VydmVyQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICAgIHByb3ZpZGVDb25maWcoZGVmYXVsdFNlcnZlckNvbmZpZyksXG4gICAgICAgIHByb3ZpZGVDb25maWcoY29uZmlnKSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENvbmZpZyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbQ29uZmlnQ2h1bmssIFtuZXcgT3B0aW9uYWwoKSwgQ29uZmlnVmFsaWRhdG9yVG9rZW5dXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19