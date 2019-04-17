/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { InjectionToken, NgModule, Optional, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defaultServerConfig, ServerConfig, } from './server-config/server-config';
import { deepMerge } from './utils/deep-merge';
import { ConfigValidatorToken, validateConfig, } from './utils/config-validator';
/** @type {?} */
export const Config = new InjectionToken('Configuration');
/** @type {?} */
export const ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * @param {?=} config
 * @return {?}
 */
export function provideConfig(config = {}) {
    return { provide: ConfigChunk, useValue: config, multi: true };
}
/**
 * @param {?} configFactory
 * @param {?=} deps
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
     * @param {?} config
     * @return {?}
     */
    static withConfig(config) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfig(config)],
        };
    }
    /**
     * @param {?} configFactory
     * @param {?=} deps
     * @return {?}
     */
    static withConfigFactory(configFactory, deps) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfigFactory(configFactory, deps)],
        };
    }
    /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLGNBQWMsRUFFZCxRQUFRLEVBRVIsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLFlBQVksR0FDYixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBRUwsb0JBQW9CLEVBQ3BCLGNBQWMsR0FDZixNQUFNLDBCQUEwQixDQUFDOztBQUVsQyxNQUFNLE9BQU8sTUFBTSxHQUFHLElBQUksY0FBYyxDQUFDLGVBQWUsQ0FBQzs7QUFDekQsTUFBTSxPQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQzs7Ozs7QUFFbkUsTUFBTSxVQUFVLGFBQWEsQ0FBQyxTQUFjLEVBQUU7SUFDNUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7QUFDakUsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxhQUF1QixFQUN2QixJQUFZO0lBRVosT0FBTztRQUNMLE9BQU8sRUFBRSxXQUFXO1FBQ3BCLFVBQVUsRUFBRSxhQUFhO1FBQ3pCLEtBQUssRUFBRSxJQUFJO1FBQ1gsSUFBSSxFQUFFLElBQUk7S0FDWCxDQUFDO0FBQ0osQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxZQUFtQixFQUNuQixnQkFBbUM7O1VBRTdCLE1BQU0sR0FBRyxTQUFTLENBQUMsRUFBRSxFQUFFLEdBQUcsWUFBWSxDQUFDO0lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1FBQ3RCLGNBQWMsQ0FBQyxNQUFNLEVBQUUsZ0JBQWdCLElBQUksRUFBRSxDQUFDLENBQUM7S0FDaEQ7SUFDRCxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDO0FBTUQsTUFBTSxPQUFPLFlBQVk7Ozs7O0lBQ3ZCLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBYztRQUM5QixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsaUJBQWlCLENBQ3RCLGFBQXVCLEVBQ3ZCLElBQVk7UUFFWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3ZELENBQUM7SUFDSixDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBYyxFQUFFO1FBQzdCLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Z0JBQzlDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDbEMsYUFBYSxDQUFDLE1BQU0sQ0FBQztnQkFDckI7b0JBQ0UsT0FBTyxFQUFFLE1BQU07b0JBQ2YsVUFBVSxFQUFFLG9CQUFvQjtvQkFDaEMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxRQUFRLEVBQUUsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO2lCQUM1RDthQUNGO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQXBDRixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsRUFBRTthQUNqQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGlvblRva2VuLFxuICBNb2R1bGVXaXRoUHJvdmlkZXJzLFxuICBOZ01vZHVsZSxcbiAgUHJvdmlkZXIsXG4gIE9wdGlvbmFsLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBkZWZhdWx0U2VydmVyQ29uZmlnLFxuICBTZXJ2ZXJDb25maWcsXG59IGZyb20gJy4vc2VydmVyLWNvbmZpZy9zZXJ2ZXItY29uZmlnJztcbmltcG9ydCB7IGRlZXBNZXJnZSB9IGZyb20gJy4vdXRpbHMvZGVlcC1tZXJnZSc7XG5pbXBvcnQge1xuICBDb25maWdWYWxpZGF0b3IsXG4gIENvbmZpZ1ZhbGlkYXRvclRva2VuLFxuICB2YWxpZGF0ZUNvbmZpZyxcbn0gZnJvbSAnLi91dGlscy9jb25maWctdmFsaWRhdG9yJztcblxuZXhwb3J0IGNvbnN0IENvbmZpZyA9IG5ldyBJbmplY3Rpb25Ub2tlbignQ29uZmlndXJhdGlvbicpO1xuZXhwb3J0IGNvbnN0IENvbmZpZ0NodW5rID0gbmV3IEluamVjdGlvblRva2VuKCdDb25maWd1cmF0aW9uQ2h1bmsnKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWcoY29uZmlnOiBhbnkgPSB7fSk6IFByb3ZpZGVyIHtcbiAgcmV0dXJuIHsgcHJvdmlkZTogQ29uZmlnQ2h1bmssIHVzZVZhbHVlOiBjb25maWcsIG11bHRpOiB0cnVlIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwcm92aWRlQ29uZmlnRmFjdG9yeShcbiAgY29uZmlnRmFjdG9yeTogRnVuY3Rpb24sXG4gIGRlcHM/OiBhbnlbXVxuKTogUHJvdmlkZXIge1xuICByZXR1cm4ge1xuICAgIHByb3ZpZGU6IENvbmZpZ0NodW5rLFxuICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ0ZhY3RvcnksXG4gICAgbXVsdGk6IHRydWUsXG4gICAgZGVwczogZGVwcyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyYXRpb25GYWN0b3J5KFxuICBjb25maWdDaHVua3M6IGFueVtdLFxuICBjb25maWdWYWxpZGF0b3JzOiBDb25maWdWYWxpZGF0b3JbXVxuKSB7XG4gIGNvbnN0IGNvbmZpZyA9IGRlZXBNZXJnZSh7fSwgLi4uY29uZmlnQ2h1bmtzKTtcbiAgaWYgKCFjb25maWcucHJvZHVjdGlvbikge1xuICAgIHZhbGlkYXRlQ29uZmlnKGNvbmZpZywgY29uZmlnVmFsaWRhdG9ycyB8fCBbXSk7XG4gIH1cbiAgcmV0dXJuIGNvbmZpZztcbn1cblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW10sXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpZ01vZHVsZSB7XG4gIHN0YXRpYyB3aXRoQ29uZmlnKGNvbmZpZzogb2JqZWN0KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnKGNvbmZpZyldLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgd2l0aENvbmZpZ0ZhY3RvcnkoXG4gICAgY29uZmlnRmFjdG9yeTogRnVuY3Rpb24sXG4gICAgZGVwcz86IGFueVtdXG4gICk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQ29uZmlnTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbcHJvdmlkZUNvbmZpZ0ZhY3RvcnkoY29uZmlnRmFjdG9yeSwgZGVwcyldLFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IGFueSA9IHt9KTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgeyBwcm92aWRlOiBTZXJ2ZXJDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZyhkZWZhdWx0U2VydmVyQ29uZmlnKSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZyhjb25maWcpLFxuICAgICAgICB7XG4gICAgICAgICAgcHJvdmlkZTogQ29uZmlnLFxuICAgICAgICAgIHVzZUZhY3Rvcnk6IGNvbmZpZ3VyYXRpb25GYWN0b3J5LFxuICAgICAgICAgIGRlcHM6IFtDb25maWdDaHVuaywgW25ldyBPcHRpb25hbCgpLCBDb25maWdWYWxpZGF0b3JUb2tlbl1dLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=