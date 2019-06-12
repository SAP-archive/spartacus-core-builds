/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { StateModule } from '../state/index';
import { defaultSiteContextConfigFactory } from './config/default-site-context-config';
import { SiteContextConfig } from './config/site-context-config';
import { contextServiceMapProvider } from './providers/context-service-map';
import { contextServiceProviders } from './providers/context-service-providers';
import { siteContextParamsProviders } from './providers/site-context-params-providers';
import { SiteContextStoreModule } from './store/site-context-store.module';
// @dynamic
var SiteContextModule = /** @class */ (function () {
    function SiteContextModule() {
    }
    /**
     * @return {?}
     */
    SiteContextModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SiteContextModule,
            providers: tslib_1.__spread([
                contextServiceMapProvider
            ], contextServiceProviders, siteContextParamsProviders, [
                { provide: SiteContextConfig, useExisting: Config },
            ]),
        };
    };
    SiteContextModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ConfigModule.withConfigFactory(defaultSiteContextConfigFactory),
                        StateModule,
                        SiteContextStoreModule,
                    ],
                },] }
    ];
    return SiteContextModule;
}());
export { SiteContextModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2l0ZS1jb250ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zaXRlLWNvbnRleHQvc2l0ZS1jb250ZXh0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzVFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztBQUczRTtJQUFBO0lBbUJBLENBQUM7Ozs7SUFYUSx5QkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQixTQUFTO2dCQUNQLHlCQUF5QjtlQUN0Qix1QkFBdUIsRUFDdkIsMEJBQTBCO2dCQUM3QixFQUFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2NBQ3BEO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQWxCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQywrQkFBK0IsQ0FBQzt3QkFDL0QsV0FBVzt3QkFDWCxzQkFBc0I7cUJBQ3ZCO2lCQUNGOztJQWFELHdCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FaWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uL3N0YXRlL2luZGV4JztcbmltcG9ydCB7IGRlZmF1bHRTaXRlQ29udGV4dENvbmZpZ0ZhY3RvcnkgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXNpdGUtY29udGV4dC1jb25maWcnO1xuaW1wb3J0IHsgU2l0ZUNvbnRleHRDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zaXRlLWNvbnRleHQtY29uZmlnJztcbmltcG9ydCB7IGNvbnRleHRTZXJ2aWNlTWFwUHJvdmlkZXIgfSBmcm9tICcuL3Byb3ZpZGVycy9jb250ZXh0LXNlcnZpY2UtbWFwJztcbmltcG9ydCB7IGNvbnRleHRTZXJ2aWNlUHJvdmlkZXJzIH0gZnJvbSAnLi9wcm92aWRlcnMvY29udGV4dC1zZXJ2aWNlLXByb3ZpZGVycyc7XG5pbXBvcnQgeyBzaXRlQ29udGV4dFBhcmFtc1Byb3ZpZGVycyB9IGZyb20gJy4vcHJvdmlkZXJzL3NpdGUtY29udGV4dC1wYXJhbXMtcHJvdmlkZXJzJztcbmltcG9ydCB7IFNpdGVDb250ZXh0U3RvcmVNb2R1bGUgfSBmcm9tICcuL3N0b3JlL3NpdGUtY29udGV4dC1zdG9yZS5tb2R1bGUnO1xuXG4vLyBAZHluYW1pY1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnRmFjdG9yeShkZWZhdWx0U2l0ZUNvbnRleHRDb25maWdGYWN0b3J5KSxcbiAgICBTdGF0ZU1vZHVsZSxcbiAgICBTaXRlQ29udGV4dFN0b3JlTW9kdWxlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBTaXRlQ29udGV4dE1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U2l0ZUNvbnRleHRNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNpdGVDb250ZXh0TW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIGNvbnRleHRTZXJ2aWNlTWFwUHJvdmlkZXIsXG4gICAgICAgIC4uLmNvbnRleHRTZXJ2aWNlUHJvdmlkZXJzLFxuICAgICAgICAuLi5zaXRlQ29udGV4dFBhcmFtc1Byb3ZpZGVycyxcbiAgICAgICAgeyBwcm92aWRlOiBTaXRlQ29udGV4dENvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=