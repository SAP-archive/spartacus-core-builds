/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { Config, provideConfig } from '../config/config.module';
import { AuthConfig } from './config/auth-config';
import { defaultAuthConfig } from './config/default-auth-config';
import { interceptors } from './http-interceptors/index';
import { AuthServices } from './services/index';
import { AuthStoreModule } from './store/auth-store.module';
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    /**
     * @return {?}
     */
    AuthModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AuthModule,
            providers: tslib_1.__spread(interceptors, AuthServices, [
                { provide: AuthConfig, useExisting: Config },
                provideConfig(defaultAuthConfig),
            ]),
        };
    };
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, HttpClientModule, AuthStoreModule],
                },] }
    ];
    return AuthModule;
}());
export { AuthModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsTUFBTSxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNsRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNqRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDekQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUU1RDtJQUFBO0lBZUEsQ0FBQzs7OztJQVhRLGtCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLG1CQUNKLFlBQVksRUFDWixZQUFZO2dCQUNmLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2dCQUM1QyxhQUFhLENBQUMsaUJBQWlCLENBQUM7Y0FDakM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBZEYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBRSxlQUFlLENBQUM7aUJBQzNEOztJQWFELGlCQUFDO0NBQUEsQUFmRCxJQWVDO1NBWlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IEF1dGhDb25maWcgfSBmcm9tICcuL2NvbmZpZy9hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0QXV0aENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtYXV0aC1jb25maWcnO1xuaW1wb3J0IHsgaW50ZXJjZXB0b3JzIH0gZnJvbSAnLi9odHRwLWludGVyY2VwdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZXMgfSBmcm9tICcuL3NlcnZpY2VzL2luZGV4JztcbmltcG9ydCB7IEF1dGhTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvYXV0aC1zdG9yZS5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBIdHRwQ2xpZW50TW9kdWxlLCBBdXRoU3RvcmVNb2R1bGVdLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBdXRoTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBdXRoTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLmludGVyY2VwdG9ycyxcbiAgICAgICAgLi4uQXV0aFNlcnZpY2VzLFxuICAgICAgICB7IHByb3ZpZGU6IEF1dGhDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgICAgcHJvdmlkZUNvbmZpZyhkZWZhdWx0QXV0aENvbmZpZyksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==