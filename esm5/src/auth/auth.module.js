/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Config, ConfigModule } from '../config/config.module';
import { RoutingModule } from '../routing/routing.module';
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
            providers: tslib_1.__spread(interceptors),
        };
    };
    AuthModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        HttpClientModule,
                        RoutingModule,
                        AuthStoreModule,
                        ConfigModule.withConfig(defaultAuthConfig),
                    ],
                    providers: tslib_1.__spread(AuthServices, [{ provide: AuthConfig, useExisting: Config }]),
                },] }
    ];
    return AuthModule;
}());
export { AuthModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvYXV0aC9hdXRoLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFNUQ7SUFBQTtJQWlCQSxDQUFDOzs7O0lBTlEsa0JBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFNBQVMsbUJBQU0sWUFBWSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDOztnQkFoQkYsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3dCQUNaLGdCQUFnQjt3QkFDaEIsYUFBYTt3QkFDYixlQUFlO3dCQUNmLFlBQVksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLENBQUM7cUJBQzNDO29CQUNELFNBQVMsbUJBQU0sWUFBWSxHQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEVBQUM7aUJBQzNFOztJQVFELGlCQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FQWSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuXG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuLi9yb3V0aW5nL3JvdXRpbmcubW9kdWxlJztcblxuaW1wb3J0IHsgQXV0aENvbmZpZyB9IGZyb20gJy4vY29uZmlnL2F1dGgtY29uZmlnJztcbmltcG9ydCB7IGRlZmF1bHRBdXRoQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1hdXRoLWNvbmZpZyc7XG5pbXBvcnQgeyBpbnRlcmNlcHRvcnMgfSBmcm9tICcuL2h0dHAtaW50ZXJjZXB0b3JzL2luZGV4JztcbmltcG9ydCB7IEF1dGhTZXJ2aWNlcyB9IGZyb20gJy4vc2VydmljZXMvaW5kZXgnO1xuaW1wb3J0IHsgQXV0aFN0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9hdXRoLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBSb3V0aW5nTW9kdWxlLFxuICAgIEF1dGhTdG9yZU1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0QXV0aENvbmZpZyksXG4gIF0sXG4gIHByb3ZpZGVyczogWy4uLkF1dGhTZXJ2aWNlcywgeyBwcm92aWRlOiBBdXRoQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBdXRoTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBdXRoTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbLi4uaW50ZXJjZXB0b3JzXSxcbiAgICB9O1xuICB9XG59XG4iXX0=