var ConfigModule_1;
import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { InjectionToken, NgModule, } from '@angular/core';
import { deepMerge } from './utils/deep-merge';
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
export function configurationFactory(configChunks) {
    const config = deepMerge({}, ...configChunks);
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
                    deps: [ConfigChunk],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsY0FBYyxFQUVkLFFBQVEsR0FFVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFL0M7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQUMsZUFBZSxDQUFDLENBQUM7QUFFMUQ7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLElBQUksY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFcEU7Ozs7R0FJRztBQUNILE1BQU0sVUFBVSxhQUFhLENBQUMsU0FBYyxFQUFFO0lBQzVDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0FBQ2pFLENBQUM7QUFFRDs7Ozs7R0FLRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsYUFBdUIsRUFDdkIsSUFBWTtJQUVaLE9BQU87UUFDTCxPQUFPLEVBQUUsV0FBVztRQUNwQixVQUFVLEVBQUUsYUFBYTtRQUN6QixLQUFLLEVBQUUsSUFBSTtRQUNYLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQztBQUNKLENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsb0JBQW9CLENBQUMsWUFBbUI7SUFDdEQsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLEVBQUUsRUFBRSxHQUFHLFlBQVksQ0FBQyxDQUFDO0lBQzlDLE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFNRCxJQUFhLFlBQVksb0JBQXpCLE1BQWEsWUFBWTtJQUN2Qjs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLFVBQVUsQ0FBQyxNQUFjO1FBQzlCLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkMsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILE1BQU0sQ0FBQyxpQkFBaUIsQ0FDdEIsYUFBdUIsRUFDdkIsSUFBWTtRQUVaLE9BQU87WUFDTCxRQUFRLEVBQUUsY0FBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkQsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLE9BQU8sQ0FBQyxTQUFjLEVBQUU7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxjQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUNyQjtvQkFDRSxPQUFPLEVBQUUsTUFBTTtvQkFDZixVQUFVLEVBQUUsb0JBQW9CO29CQUNoQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLENBQUM7aUJBQ3BCO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUEvQ1ksWUFBWTtJQUp4QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdkIsWUFBWSxFQUFFLEVBQUU7S0FDakIsQ0FBQztHQUNXLFlBQVksQ0ErQ3hCO1NBL0NZLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBQcm92aWRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWVwTWVyZ2UgfSBmcm9tICcuL3V0aWxzL2RlZXAtbWVyZ2UnO1xuXG4vKipcbiAqIEdsb2JhbCBDb25maWd1cmF0aW9uIGluamVjdGlvbiB0b2tlbiwgY2FuIGJlIHVzZWQgdG8gaW5qZWN0IGNvbmZpZ3VyYXRpb24gdG8gYW55IHBhcnQgb2YgdGhlIGFwcFxuICovXG5leHBvcnQgY29uc3QgQ29uZmlnID0gbmV3IEluamVjdGlvblRva2VuKCdDb25maWd1cmF0aW9uJyk7XG5cbi8qKlxuICogQ29uZmlnIGNodW5rIHRva2VuLCBjYW4gYmUgdXNlZCB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gY2h1bmsgYW5kIGNvbnRyaWJ1dGUgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uIG9iamVjdC5cbiAqIFNob3VsZCBub3QgYmUgdXNlZCBkaXJlY3RseSwgdXNlIGBwcm92aWRlQ29uZmlnYCBvciBpbXBvcnQgYENvbmZpZ01vZHVsZS53aXRoQ29uZmlnYCBpbnN0ZWFkLlxuICovXG5leHBvcnQgY29uc3QgQ29uZmlnQ2h1bmsgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0NvbmZpZ3VyYXRpb25DaHVuaycpO1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gY2h1bmsgdXNpbmcgQ29uZmlnQ2h1bmsgdG9rZW5cbiAqXG4gKiBAcGFyYW0gY29uZmlnIENvbmZpZyBvYmplY3QgdG8gbWVyZ2Ugd2l0aCB0aGUgZ2xvYmFsIGNvbmZpZ3VyYXRpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWcoY29uZmlnOiBhbnkgPSB7fSk6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHsgcHJvdmlkZTogQ29uZmlnQ2h1bmssIHVzZVZhbHVlOiBjb25maWcsIG11bHRpOiB0cnVlIH07XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiB3aXRoIGZhY3RvcnkgZnVuY3Rpb24sIHVzaW5nIENvbmZpZ0NodW5rIHRva2VuXG4gKlxuICogQHBhcmFtIGNvbmZpZ0ZhY3RvcnkgRmFjdG9yeSBGdW5jdGlvbiB0aGF0IHdpbGwgZ2VuZXJhdGUgY29uZmlnIG9iamVjdFxuICogQHBhcmFtIGRlcHMgT3B0aW9uYWwgZGVwZW5kZW5jaWVzIHRvIGEgZmFjdG9yeSBmdW5jdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZ0ZhY3RvcnkoXG4gIGNvbmZpZ0ZhY3Rvcnk6IEZ1bmN0aW9uLFxuICBkZXBzPzogYW55W11cbik6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHtcbiAgICBwcm92aWRlOiBDb25maWdDaHVuayxcbiAgICB1c2VGYWN0b3J5OiBjb25maWdGYWN0b3J5LFxuICAgIG11bHRpOiB0cnVlLFxuICAgIGRlcHM6IGRlcHMsXG4gIH07XG59XG5cbi8qKlxuICogRmFjdG9yeSBmdW5jdGlvbiB0aGF0IG1lcmdlcyBhbGwgY29uZmlndXJhdGlvbnMgY2h1bmtzLiBTaG91bGQgbm90IGJlIHVzZWQgZGlyZWN0bHkgd2l0aG91dCBleHBsaWNpdCByZWFzb24uXG4gKlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJhdGlvbkZhY3RvcnkoY29uZmlnQ2h1bmtzOiBhbnlbXSkge1xuICBjb25zdCBjb25maWcgPSBkZWVwTWVyZ2Uoe30sIC4uLmNvbmZpZ0NodW5rcyk7XG4gIHJldHVybiBjb25maWc7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtdLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maWdNb2R1bGUge1xuICAvKipcbiAgICogSW1wb3J0IENvbmZpZ01vZHVsZSBhbmQgY29udHJpYnV0ZSBjb25maWcgdG8gdGhlIGdsb2JhbCBjb25maWd1cmF0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWcgQ29uZmlnIG9iamVjdCB0byBtZXJnZSB3aXRoIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvblxuICAgKi9cbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBvYmplY3QpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZyhjb25maWcpXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEltcG9ydCBDb25maWdNb2R1bGUgYW5kIGNvbnRyaWJ1dGUgY29uZmlnIHRvIHRoZSBnbG9iYWwgY29uZmlndXJhdGlvbiB1c2luZyBmYWN0b3J5IGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdGYWN0b3J5IEZhY3RvcnkgZnVuY3Rpb24gdGhhdCB3aWxsIGdlbmVyYXRlIGNvbmZpZ3VyYXRpb25cbiAgICogQHBhcmFtIGRlcHMgT3B0aW9uYWwgZGVwZW5kZW5jaWVzIHRvIGZhY3RvcnkgZnVuY3Rpb25cbiAgICovXG4gIHN0YXRpYyB3aXRoQ29uZmlnRmFjdG9yeShcbiAgICBjb25maWdGYWN0b3J5OiBGdW5jdGlvbixcbiAgICBkZXBzPzogYW55W11cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVyczxDb25maWdNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWdGYWN0b3J5KGNvbmZpZ0ZhY3RvcnksIGRlcHMpXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIE1vZHVsZSB3aXRoIHByb3ZpZGVycywgc2hvdWxkIGJlIGltcG9ydGVkIG9ubHkgb25jZSwgaWYgcG9zc2libGUsIGF0IHRoZSByb290IG9mIHRoZSBhcHAuXG4gICAqXG4gICAqIEBwYXJhbSBjb25maWdcbiAgICovXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogYW55ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzPENvbmZpZ01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVDb25maWcoY29uZmlnKSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3ZpZGU6IENvbmZpZyxcbiAgICAgICAgICB1c2VGYWN0b3J5OiBjb25maWd1cmF0aW9uRmFjdG9yeSxcbiAgICAgICAgICBkZXBzOiBbQ29uZmlnQ2h1bmtdLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=