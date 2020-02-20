var ConfigModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { InjectionToken, isDevMode, NgModule, Optional, } from '@angular/core';
import { ConfigValidatorToken, validateConfig, } from './config-validator/config-validator';
import { deepMerge } from './utils/deep-merge';
import { CONFIG_INITIALIZER_FORROOT_GUARD } from './config-initializer/config-initializer';
/**
 * Global Configuration injection token, can be used to inject configuration to any part of the app
 */
export const Config = new InjectionToken('Configuration');
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 */
export const ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * Helper function to provide configuration chunk using ConfigChunk token
 *
 * @param config Config object to merge with the global configuration
 */
export function provideConfig(config = {}) {
    return { provide: ConfigChunk, useValue: config, multi: true };
}
/**
 * Helper function to provide configuration with factory function, using ConfigChunk token
 *
 * @param configFactory Factory Function that will generate config object
 * @param deps Optional dependencies to a factory function
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
 */
export function configurationFactory(configChunks, configValidators, // TODO: remove, deprecated since 1.3, issue #5279
configInitializerGuard // TODO: remove, deprecated since 1.3, issue #5279
) {
    const config = deepMerge({}, ...configChunks);
    // TODO: remove as validators should run independently, deprecated since 1.3, issue #5279
    if (isDevMode() && !configInitializerGuard) {
        validateConfig(config, configValidators || []);
    }
    return config;
}
let ConfigModule = ConfigModule_1 = class ConfigModule {
    /**
     * Import ConfigModule and contribute config to the global configuration
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
                        ConfigChunk,
                        [new Optional(), ConfigValidatorToken],
                        [new Optional(), CONFIG_INITIALIZER_FORROOT_GUARD],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsY0FBYyxFQUNkLFNBQVMsRUFFVCxRQUFRLEVBQ1IsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFFTCxvQkFBb0IsRUFDcEIsY0FBYyxHQUNmLE1BQU0scUNBQXFDLENBQUM7QUFDN0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNGOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0FBRTFEOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0FBRXBFOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsYUFBYSxDQUFDLFNBQWMsRUFBRTtJQUM1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNqRSxDQUFDO0FBRUQ7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLGFBQXVCLEVBQ3ZCLElBQVk7SUFFWixPQUFPO1FBQ0wsT0FBTyxFQUFFLFdBQVc7UUFDcEIsVUFBVSxFQUFFLGFBQWE7UUFDekIsS0FBSyxFQUFFLElBQUk7UUFDWCxJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUM7QUFDSixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxZQUFtQixFQUNuQixnQkFBbUMsRUFBRSxrREFBa0Q7QUFDdkYsc0JBQWdDLENBQUMsa0RBQWtEOztJQUVuRixNQUFNLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsWUFBWSxDQUFDLENBQUM7SUFDOUMseUZBQXlGO0lBQ3pGLElBQUksU0FBUyxFQUFFLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtRQUMxQyxjQUFjLENBQUMsTUFBTSxFQUFFLGdCQUFnQixJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQU1ELElBQWEsWUFBWSxvQkFBekIsTUFBYSxZQUFZO0lBQ3ZCOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsVUFBVSxDQUFDLE1BQWM7UUFDOUIsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsTUFBTSxDQUFDLGlCQUFpQixDQUN0QixhQUF1QixFQUN2QixJQUFZO1FBRVosT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxNQUFNLENBQUMsT0FBTyxDQUFDLFNBQWMsRUFBRTtRQUM3QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JCO29CQUNFLE9BQU8sRUFBRSxNQUFNO29CQUNmLFVBQVUsRUFBRSxvQkFBb0I7b0JBQ2hDLElBQUksRUFBRTt3QkFDSixXQUFXO3dCQUNYLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQzt3QkFDdEMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLGdDQUFnQyxDQUFDO3FCQUNuRDtpQkFDRjthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBbkRZLFlBQVk7SUFKeEIsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO1FBQ3ZCLFlBQVksRUFBRSxFQUFFO0tBQ2pCLENBQUM7R0FDVyxZQUFZLENBbUR4QjtTQW5EWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIEluamVjdGlvblRva2VuLFxuICBpc0Rldk1vZGUsXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBPcHRpb25hbCxcbiAgUHJvdmlkZXIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgQ29uZmlnVmFsaWRhdG9yLFxuICBDb25maWdWYWxpZGF0b3JUb2tlbixcbiAgdmFsaWRhdGVDb25maWcsXG59IGZyb20gJy4vY29uZmlnLXZhbGlkYXRvci9jb25maWctdmFsaWRhdG9yJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4vdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQgeyBDT05GSUdfSU5JVElBTElaRVJfRk9SUk9PVF9HVUFSRCB9IGZyb20gJy4vY29uZmlnLWluaXRpYWxpemVyL2NvbmZpZy1pbml0aWFsaXplcic7XG5cbi8qKlxuICogR2xvYmFsIENvbmZpZ3VyYXRpb24gaW5qZWN0aW9uIHRva2VuLCBjYW4gYmUgdXNlZCB0byBpbmplY3QgY29uZmlndXJhdGlvbiB0byBhbnkgcGFydCBvZiB0aGUgYXBwXG4gKi9cbmV4cG9ydCBjb25zdCBDb25maWcgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0NvbmZpZ3VyYXRpb24nKTtcblxuLyoqXG4gKiBDb25maWcgY2h1bmsgdG9rZW4sIGNhbiBiZSB1c2VkIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBjaHVuayBhbmQgY29udHJpYnV0ZSB0byB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb24gb2JqZWN0LlxuICogU2hvdWxkIG5vdCBiZSB1c2VkIGRpcmVjdGx5LCB1c2UgYHByb3ZpZGVDb25maWdgIG9yIGltcG9ydCBgQ29uZmlnTW9kdWxlLndpdGhDb25maWdgIGluc3RlYWQuXG4gKi9cbmV4cG9ydCBjb25zdCBDb25maWdDaHVuayA9IG5ldyBJbmplY3Rpb25Ub2tlbignQ29uZmlndXJhdGlvbkNodW5rJyk7XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBjaHVuayB1c2luZyBDb25maWdDaHVuayB0b2tlblxuICpcbiAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0byBtZXJnZSB3aXRoIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZyhjb25maWc6IGFueSA9IHt9KTogUHJvdmlkZXIge1xuICByZXR1cm4geyBwcm92aWRlOiBDb25maWdDaHVuaywgdXNlVmFsdWU6IGNvbmZpZywgbXVsdGk6IHRydWUgfTtcbn1cblxuLyoqXG4gKiBIZWxwZXIgZnVuY3Rpb24gdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIHdpdGggZmFjdG9yeSBmdW5jdGlvbiwgdXNpbmcgQ29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBAcGFyYW0gY29uZmlnRmFjdG9yeSBGYWN0b3J5IEZ1bmN0aW9uIHRoYXQgd2lsbCBnZW5lcmF0ZSBjb25maWcgb2JqZWN0XG4gKiBAcGFyYW0gZGVwcyBPcHRpb25hbCBkZXBlbmRlbmNpZXMgdG8gYSBmYWN0b3J5IGZ1bmN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29uZmlnRmFjdG9yeShcbiAgY29uZmlnRmFjdG9yeTogRnVuY3Rpb24sXG4gIGRlcHM/OiBhbnlbXVxuKTogUHJvdmlkZXIge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IENvbmZpZ0NodW5rLFxuICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ0ZhY3RvcnksXG4gICAgbXVsdGk6IHRydWUsXG4gICAgZGVwczogZGVwcyxcbiAgfTtcbn1cblxuLyoqXG4gKiBGYWN0b3J5IGZ1bmN0aW9uIHRoYXQgbWVyZ2VzIGFsbCBjb25maWd1cmF0aW9ucyBjaHVua3MuIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSB3aXRob3V0IGV4cGxpY2l0IHJlYXNvbi5cbiAqXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmF0aW9uRmFjdG9yeShcbiAgY29uZmlnQ2h1bmtzOiBhbnlbXSxcbiAgY29uZmlnVmFsaWRhdG9yczogQ29uZmlnVmFsaWRhdG9yW10sIC8vIFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBzaW5jZSAxLjMsIGlzc3VlICM1Mjc5XG4gIGNvbmZpZ0luaXRpYWxpemVyR3VhcmQ/OiBib29sZWFuIC8vIFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBzaW5jZSAxLjMsIGlzc3VlICM1Mjc5XG4pIHtcbiAgY29uc3QgY29uZmlnID0gZGVlcE1lcmdlKHt9LCAuLi5jb25maWdDaHVua3MpO1xuICAvLyBUT0RPOiByZW1vdmUgYXMgdmFsaWRhdG9ycyBzaG91bGQgcnVuIGluZGVwZW5kZW50bHksIGRlcHJlY2F0ZWQgc2luY2UgMS4zLCBpc3N1ZSAjNTI3OVxuICBpZiAoaXNEZXZNb2RlKCkgJiYgIWNvbmZpZ0luaXRpYWxpemVyR3VhcmQpIHtcbiAgICB2YWxpZGF0ZUNvbmZpZyhjb25maWcsIGNvbmZpZ1ZhbGlkYXRvcnMgfHwgW10pO1xuICB9XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWdNb2R1bGUge1xuICAvKipcbiAgICogSW1wb3J0IENvbmZpZ01vZHVsZSBhbmQgY29udHJpYnV0ZSBjb25maWcgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0byBtZXJnZSB3aXRoIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAgKi9cbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBvYmplY3QpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBDb25maWdNb2R1bGUgYW5kIGNvbnRyaWJ1dGUgY29uZmlnIHRvIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiB1c2luZyBmYWN0b3J5IGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdGYWN0b3J5IEZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGdlbmVyYXRlIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIGRlcHMgT3B0aW9uYWwgZGVwZW5kZW5jaWVzIHRvIGZhY3RvcnkgZnVuY3Rpb25cbiAgICovXG4gIHN0YXRpYyB3aXRoQ29uZmlnRmFjdG9yeShcbiAgICBjb25maWdGYWN0b3J5OiBGdW5jdGlvbixcbiAgICBkZXBzPzogYW55W11cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWdGYWN0b3J5KGNvbmZpZ0ZhY3RvcnksIGRlcHMpXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZHVsZSB3aXRoIHByb3ZpZGVycywgc2hvdWxkIGJlIGltcG9ydGVkIG9ubHkgb25jZSwgaWYgcG9zc2libGUsIGF0IHRoZSByb290IG9mIHRoZSBhcHAuXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogYW55ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVDb25maWcoY29uZmlnKSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENvbmZpZyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbXG4gICAgICAgICAgICBDb25maWdDaHVuayxcbiAgICAgICAgICAgIFtuZXcgT3B0aW9uYWwoKSwgQ29uZmlnVmFsaWRhdG9yVG9rZW5dLCAvLyBUT0RPOiByZW1vdmUsIGRlcHJlY2F0ZWQgc2luY2UgMS4zLCBpc3N1ZSAjNTI3OVxuICAgICAgICAgICAgW25ldyBPcHRpb25hbCgpLCBDT05GSUdfSU5JVElBTElaRVJfRk9SUk9PVF9HVUFSRF0sIC8vIFRPRE86IHJlbW92ZSwgZGVwcmVjYXRlZCBzaW5jZSAxLjMsIGlzc3VlICM1Mjc5XG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19