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
/** @type {?} */
export var Config = new InjectionToken('Configuration');
/** @type {?} */
export var ConfigChunk = new InjectionToken('ConfigurationChunk');
/**
 * @param {?=} config
 * @return {?}
 */
export function provideConfig(config) {
    if (config === void 0) { config = {}; }
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
     * @param {?} config
     * @return {?}
     */
    ConfigModule.withConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfig(config)],
        };
    };
    /**
     * @param {?} configFactory
     * @param {?=} deps
     * @return {?}
     */
    ConfigModule.withConfigFactory = /**
     * @param {?} configFactory
     * @param {?=} deps
     * @return {?}
     */
    function (configFactory, deps) {
        return {
            ngModule: ConfigModule,
            providers: [provideConfigFactory(configFactory, deps)],
        };
    };
    /**
     * @param {?=} config
     * @return {?}
     */
    ConfigModule.forRoot = /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9jb25maWcvY29uZmlnLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxjQUFjLEVBRWQsUUFBUSxFQUVSLFFBQVEsR0FDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixZQUFZLEdBQ2IsTUFBTSwrQkFBK0IsQ0FBQztBQUN2QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDL0MsT0FBTyxFQUVMLG9CQUFvQixFQUNwQixjQUFjLEdBQ2YsTUFBTSwwQkFBMEIsQ0FBQzs7QUFFbEMsTUFBTSxLQUFPLE1BQU0sR0FBRyxJQUFJLGNBQWMsQ0FBQyxlQUFlLENBQUM7O0FBQ3pELE1BQU0sS0FBTyxXQUFXLEdBQUcsSUFBSSxjQUFjLENBQUMsb0JBQW9CLENBQUM7Ozs7O0FBRW5FLE1BQU0sVUFBVSxhQUFhLENBQUMsTUFBZ0I7SUFBaEIsdUJBQUEsRUFBQSxXQUFnQjtJQUM1QyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztBQUNqRSxDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLGFBQXVCLEVBQ3ZCLElBQVk7SUFFWixPQUFPO1FBQ0wsT0FBTyxFQUFFLFdBQVc7UUFDcEIsVUFBVSxFQUFFLGFBQWE7UUFDekIsS0FBSyxFQUFFLElBQUk7UUFDWCxJQUFJLEVBQUUsSUFBSTtLQUNYLENBQUM7QUFDSixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsb0JBQW9CLENBQ2xDLFlBQW1CLEVBQ25CLGdCQUFtQzs7UUFFN0IsTUFBTSxHQUFHLFNBQVMsaUNBQUMsRUFBRSxHQUFLLFlBQVksRUFBQztJQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtRQUN0QixjQUFjLENBQUMsTUFBTSxFQUFFLGdCQUFnQixJQUFJLEVBQUUsQ0FBQyxDQUFDO0tBQ2hEO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQztBQUVEO0lBQUE7SUFxQ0EsQ0FBQzs7Ozs7SUFoQ1EsdUJBQVU7Ozs7SUFBakIsVUFBa0IsTUFBYztRQUM5QixPQUFPO1lBQ0wsUUFBUSxFQUFFLFlBQVk7WUFDdEIsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTSw4QkFBaUI7Ozs7O0lBQXhCLFVBQ0UsYUFBdUIsRUFDdkIsSUFBWTtRQUVaLE9BQU87WUFDTCxRQUFRLEVBQUUsWUFBWTtZQUN0QixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDdkQsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRU0sb0JBQU87Ozs7SUFBZCxVQUFlLE1BQWdCO1FBQWhCLHVCQUFBLEVBQUEsV0FBZ0I7UUFDN0IsT0FBTztZQUNMLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFNBQVMsRUFBRTtnQkFDVCxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDOUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDO2dCQUNsQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUNyQjtvQkFDRSxPQUFPLEVBQUUsTUFBTTtvQkFDZixVQUFVLEVBQUUsb0JBQW9CO29CQUNoQyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLG9CQUFvQixDQUFDLENBQUM7aUJBQzVEO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBcENGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7b0JBQ3ZCLFlBQVksRUFBRSxFQUFFO2lCQUNqQjs7SUFrQ0QsbUJBQUM7Q0FBQSxBQXJDRCxJQXFDQztTQWpDWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIE1vZHVsZVdpdGhQcm92aWRlcnMsXG4gIE5nTW9kdWxlLFxuICBQcm92aWRlcixcbiAgT3B0aW9uYWwsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIGRlZmF1bHRTZXJ2ZXJDb25maWcsXG4gIFNlcnZlckNvbmZpZyxcbn0gZnJvbSAnLi9zZXJ2ZXItY29uZmlnL3NlcnZlci1jb25maWcnO1xuaW1wb3J0IHsgZGVlcE1lcmdlIH0gZnJvbSAnLi91dGlscy9kZWVwLW1lcmdlJztcbmltcG9ydCB7XG4gIENvbmZpZ1ZhbGlkYXRvcixcbiAgQ29uZmlnVmFsaWRhdG9yVG9rZW4sXG4gIHZhbGlkYXRlQ29uZmlnLFxufSBmcm9tICcuL3V0aWxzL2NvbmZpZy12YWxpZGF0b3InO1xuXG5leHBvcnQgY29uc3QgQ29uZmlnID0gbmV3IEluamVjdGlvblRva2VuKCdDb25maWd1cmF0aW9uJyk7XG5leHBvcnQgY29uc3QgQ29uZmlnQ2h1bmsgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ0NvbmZpZ3VyYXRpb25DaHVuaycpO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbmZpZyhjb25maWc6IGFueSA9IHt9KTogUHJvdmlkZXIge1xuICByZXR1cm4geyBwcm92aWRlOiBDb25maWdDaHVuaywgdXNlVmFsdWU6IGNvbmZpZywgbXVsdGk6IHRydWUgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb25maWdGYWN0b3J5KFxuICBjb25maWdGYWN0b3J5OiBGdW5jdGlvbixcbiAgZGVwcz86IGFueVtdXG4pOiBQcm92aWRlciB7XG4gIHJldHVybiB7XG4gICAgcHJvdmlkZTogQ29uZmlnQ2h1bmssXG4gICAgdXNlRmFjdG9yeTogY29uZmlnRmFjdG9yeSxcbiAgICBtdWx0aTogdHJ1ZSxcbiAgICBkZXBzOiBkZXBzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJhdGlvbkZhY3RvcnkoXG4gIGNvbmZpZ0NodW5rczogYW55W10sXG4gIGNvbmZpZ1ZhbGlkYXRvcnM6IENvbmZpZ1ZhbGlkYXRvcltdXG4pIHtcbiAgY29uc3QgY29uZmlnID0gZGVlcE1lcmdlKHt9LCAuLi5jb25maWdDaHVua3MpO1xuICBpZiAoIWNvbmZpZy5wcm9kdWN0aW9uKSB7XG4gICAgdmFsaWRhdGVDb25maWcoY29uZmlnLCBjb25maWdWYWxpZGF0b3JzIHx8IFtdKTtcbiAgfVxuICByZXR1cm4gY29uZmlnO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlnTW9kdWxlIHtcbiAgc3RhdGljIHdpdGhDb25maWcoY29uZmlnOiBvYmplY3QpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW3Byb3ZpZGVDb25maWcoY29uZmlnKV0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyB3aXRoQ29uZmlnRmFjdG9yeShcbiAgICBjb25maWdGYWN0b3J5OiBGdW5jdGlvbixcbiAgICBkZXBzPzogYW55W11cbiAgKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBDb25maWdNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtwcm92aWRlQ29uZmlnRmFjdG9yeShjb25maWdGYWN0b3J5LCBkZXBzKV0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogYW55ID0ge30pOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IENvbmZpZ01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IFNlcnZlckNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICBwcm92aWRlQ29uZmlnKGRlZmF1bHRTZXJ2ZXJDb25maWcpLFxuICAgICAgICBwcm92aWRlQ29uZmlnKGNvbmZpZyksXG4gICAgICAgIHtcbiAgICAgICAgICBwcm92aWRlOiBDb25maWcsXG4gICAgICAgICAgdXNlRmFjdG9yeTogY29uZmlndXJhdGlvbkZhY3RvcnksXG4gICAgICAgICAgZGVwczogW0NvbmZpZ0NodW5rLCBbbmV3IE9wdGlvbmFsKCksIENvbmZpZ1ZhbGlkYXRvclRva2VuXV0sXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==