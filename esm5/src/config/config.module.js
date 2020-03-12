import { __decorate, __read, __spread } from "tslib";
import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule, } from '@angular/core';
import { deepMerge } from './utils/deep-merge';
/**
 * Global Configuration injection token, can be used to inject configuration to any part of the app
 */
export var Config = new InjectionToken('Configuration');
/**
 * Config chunk token, can be used to provide configuration chunk and contribute to the global configuration object.
 * Should not be used directly, use `provideConfig` or import `ConfigModule.withConfig` instead.
 */
export var ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * Helper function to provide configuration chunk using ConfigChunk token
 *
 * @param config Config object to merge with the global configuration
 */
export function provideConfig(config) {
    if (config === void 0) { config = {}; }
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
export function configurationFactory(configChunks) {
    var config = deepMerge.apply(void 0, __spread([{}], configChunks));
    return config;
}
var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule_1 = ConfigModule;
    /**
     * Import ConfigModule and contribute config to the global configuration
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
                    deps: [ConfigChunk],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxjQUFjLEVBRWQsUUFBUSxHQUVULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQzs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUUxRDs7O0dBR0c7QUFDSCxNQUFNLENBQUMsSUFBTSxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUVwRTs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLGFBQWEsQ0FBQyxNQUFnQjtJQUFoQix1QkFBQSxFQUFBLFdBQWdCO0lBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ2pFLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsYUFBdUIsRUFDdkIsSUFBWTtJQUVaLE9BQU87UUFDTCxPQUFPLEVBQUUsV0FBVztRQUNwQixVQUFVLEVBQUUsYUFBYTtRQUN6QixLQUFLLEVBQUUsSUFBSTtRQUNYLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQztBQUNKLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsWUFBbUI7SUFDdEQsSUFBTSxNQUFNLEdBQUcsU0FBUyx5QkFBQyxFQUFFLEdBQUssWUFBWSxFQUFDLENBQUM7SUFDOUMsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQU1EO0lBQUE7SUErQ0EsQ0FBQztxQkEvQ1ksWUFBWTtJQUN2Qjs7OztPQUlHO0lBQ0ksdUJBQVUsR0FBakIsVUFBa0IsTUFBYztRQUM5QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSw4QkFBaUIsR0FBeEIsVUFDRSxhQUF1QixFQUN2QixJQUFZO1FBRVosT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUN2RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxvQkFBTyxHQUFkLFVBQWUsTUFBZ0I7UUFBaEIsdUJBQUEsRUFBQSxXQUFnQjtRQUM3QixPQUFPO1lBQ0wsUUFBUSxFQUFFLGNBQVk7WUFDdEIsU0FBUyxFQUFFO2dCQUNULGFBQWEsQ0FBQyxNQUFNLENBQUM7Z0JBQ3JCO29CQUNFLE9BQU8sRUFBRSxNQUFNO29CQUNmLFVBQVUsRUFBRSxvQkFBb0I7b0JBQ2hDLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQztpQkFDcEI7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDOztJQTlDVSxZQUFZO1FBSnhCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztZQUN2QixZQUFZLEVBQUUsRUFBRTtTQUNqQixDQUFDO09BQ1csWUFBWSxDQStDeEI7SUFBRCxtQkFBQztDQUFBLEFBL0NELElBK0NDO1NBL0NZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBQcm92aWRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuL3V0aWxzL2RlZXAtbWVyZ2UnO1xuXG4vKipcbiAqIEdsb2JhbCBDb25maWd1cmF0aW9uIGluamVjdGlvbiB0b2tlbiwgY2FuIGJlIHVzZWQgdG8gaW5qZWN0IGNvbmZpZ3VyYXRpb24gdG8gYW55IHBhcnQgb2YgdGhlIGFwcFxuICovXG5leHBvcnQgY29uc3QgQ29uZmlnID0gbmV3IEluamVjdGlvblRva2VuKCdDb25maWd1cmF0aW9uJyk7XG5cbi8qKlxuICogQ29uZmlnIGNodW5rIHRva2VuLCBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gY2h1bmsgYW5kIGNvbnRyaWJ1dGUgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSwgdXNlIGBwcm92aWRlQ29uZmlnYCBvciBpbXBvcnQgYENvbmZpZ01vZHVsZS53aXRoQ29uZmlnYCBpbnN0ZWFkLlxuICovXG5leHBvcnQgY29uc3QgQ29uZmlnQ2h1bmsgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0NvbmZpZ3VyYXRpb25DaHVuaycpO1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gY2h1bmsgdXNpbmcgQ29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBAcGFyYW0gY29uZmlnIENvbmZpZyBvYmplY3QgdG8gbWVyZ2Ugd2l0aCB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWcoY29uZmlnOiBhbnkgPSB7fSk6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHsgcHJvdmlkZTogQ29uZmlnQ2h1bmssIHVzZVZhbHVlOiBjb25maWcsIG11bHRpOiB0cnVlIH07XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiB3aXRoIGZhY3RvcnkgZnVuY3Rpb24sIHVzaW5nIENvbmZpZ0NodW5rIHRva2VuXG4gKlxuICogQHBhcmFtIGNvbmZpZ0ZhY3RvcnkgRmFjdG9yeSBGdW5jdGlvbiB0aGF0IHdpbGwgZ2VuZXJhdGUgY29uZmlnIG9iamVjdFxuICogQHBhcmFtIGRlcHMgT3B0aW9uYWwgZGVwZW5kZW5jaWVzIHRvIGEgZmFjdG9yeSBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZ0ZhY3RvcnkoXG4gIGNvbmZpZ0ZhY3Rvcnk6IEZ1bmN0aW9uLFxuICBkZXBzPzogYW55W11cbik6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHtcbiAgICBwcm92aWRlOiBDb25maWdDaHVuayxcbiAgICB1c2VGYWN0b3J5OiBjb25maWdGYWN0b3J5LFxuICAgIG11bHRpOiB0cnVlLFxuICAgIGRlcHM6IGRlcHMsXG4gIH07XG59XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0aGF0IG1lcmdlcyBhbGwgY29uZmlndXJhdGlvbnMgY2h1bmtzLiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgd2l0aG91dCBleHBsaWNpdCByZWFzb24uXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJhdGlvbkZhY3RvcnkoY29uZmlnQ2h1bmtzOiBhbnlbXSkge1xuICBjb25zdCBjb25maWcgPSBkZWVwTWVyZ2Uoe30sIC4uLmNvbmZpZ0NodW5rcyk7XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWdNb2R1bGUge1xuICAvKipcbiAgICogSW1wb3J0IENvbmZpZ01vZHVsZSBhbmQgY29udHJpYnV0ZSBjb25maWcgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0byBtZXJnZSB3aXRoIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAgKi9cbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBvYmplY3QpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBDb25maWdNb2R1bGUgYW5kIGNvbnRyaWJ1dGUgY29uZmlnIHRvIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiB1c2luZyBmYWN0b3J5IGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdGYWN0b3J5IEZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGdlbmVyYXRlIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIGRlcHMgT3B0aW9uYWwgZGVwZW5kZW5jaWVzIHRvIGZhY3RvcnkgZnVuY3Rpb25cbiAgICovXG4gIHN0YXRpYyB3aXRoQ29uZmlnRmFjdG9yeShcbiAgICBjb25maWdGYWN0b3J5OiBGdW5jdGlvbixcbiAgICBkZXBzPzogYW55W11cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWdGYWN0b3J5KGNvbmZpZ0ZhY3RvcnksIGRlcHMpXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZHVsZSB3aXRoIHByb3ZpZGVycywgc2hvdWxkIGJlIGltcG9ydGVkIG9ubHkgb25jZSwgaWYgcG9zc2libGUsIGF0IHRoZSByb290IG9mIHRoZSBhcHAuXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogYW55ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVDb25maWcoY29uZmlnKSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENvbmZpZyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbQ29uZmlnQ2h1bmtdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=