/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/index';
import { AnonymousConsentsConfig } from './config/anonymous-consents-config';
import { defaultAnonymousConsentsConfig } from './config/default-anonymous-consents-config';
import { AnonymousConsentsService } from './facade/anonymous-consents.service';
import { interceptors } from './http-interceptors/index';
import { AnonymousConsentsStoreModule } from './store/anonymous-consents-store.module';
var AnonymousConsentsModule = /** @class */ (function () {
    function AnonymousConsentsModule() {
    }
    /**
     * @return {?}
     */
    AnonymousConsentsModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: AnonymousConsentsModule,
            providers: tslib_1.__spread(interceptors, [
                AnonymousConsentsService,
                { provide: AnonymousConsentsConfig, useExisting: Config },
            ]),
        };
    };
    AnonymousConsentsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        AnonymousConsentsStoreModule,
                        ConfigModule.withConfig(defaultAnonymousConsentsConfig),
                    ],
                },] }
    ];
    return AnonymousConsentsModule;
}());
export { AnonymousConsentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDN0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXZGO0lBQUE7SUFpQkEsQ0FBQzs7OztJQVZRLCtCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsdUJBQXVCO1lBQ2pDLFNBQVMsbUJBQ0osWUFBWTtnQkFDZix3QkFBd0I7Z0JBQ3hCLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Y0FDMUQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBaEJGLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsNEJBQTRCO3dCQUM1QixZQUFZLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDO3FCQUN4RDtpQkFDRjs7SUFZRCw4QkFBQztDQUFBLEFBakJELElBaUJDO1NBWFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlnL2luZGV4JztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvYW5vbnltb3VzLWNvbnNlbnRzLWNvbmZpZyc7XG5pbXBvcnQgeyBkZWZhdWx0QW5vbnltb3VzQ29uc2VudHNDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LWFub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTZXJ2aWNlIH0gZnJvbSAnLi9mYWNhZGUvYW5vbnltb3VzLWNvbnNlbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgaW50ZXJjZXB0b3JzIH0gZnJvbSAnLi9odHRwLWludGVyY2VwdG9ycy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c1N0b3JlTW9kdWxlIH0gZnJvbSAnLi9zdG9yZS9hbm9ueW1vdXMtY29uc2VudHMtc3RvcmUubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEFub255bW91c0NvbnNlbnRzU3RvcmVNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdEFub255bW91c0NvbnNlbnRzQ29uZmlnKSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFub255bW91c0NvbnNlbnRzTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbm9ueW1vdXNDb25zZW50c01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5pbnRlcmNlcHRvcnMsXG4gICAgICAgIEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=