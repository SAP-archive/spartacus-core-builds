import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
import { AnonymousConsentsConfig } from './config/anonymous-consents-config';
import { defaultAnonymousConsentsConfig } from './config/default-anonymous-consents-config';
import { AnonymousConsentsService } from './facade/anonymous-consents.service';
import { interceptors } from './http-interceptors/index';
import { AnonymousConsentsStoreModule } from './store/anonymous-consents-store.module';
var AnonymousConsentsModule = /** @class */ (function () {
    function AnonymousConsentsModule() {
    }
    AnonymousConsentsModule_1 = AnonymousConsentsModule;
    AnonymousConsentsModule.forRoot = function () {
        return {
            ngModule: AnonymousConsentsModule_1,
            providers: __spread(interceptors, [
                AnonymousConsentsService,
                { provide: AnonymousConsentsConfig, useExisting: Config },
                provideDefaultConfig(defaultAnonymousConsentsConfig),
            ]),
        };
    };
    var AnonymousConsentsModule_1;
    AnonymousConsentsModule = AnonymousConsentsModule_1 = __decorate([
        NgModule({
            imports: [AnonymousConsentsStoreModule],
        })
    ], AnonymousConsentsModule);
    return AnonymousConsentsModule;
}());
export { AnonymousConsentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQzVGLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUt2RjtJQUFBO0lBWUEsQ0FBQztnQ0FaWSx1QkFBdUI7SUFDM0IsK0JBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXVCO1lBQ2pDLFNBQVMsV0FDSixZQUFZO2dCQUNmLHdCQUF3QjtnQkFDeEIsRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtnQkFDekQsb0JBQW9CLENBQUMsOEJBQThCLENBQUM7Y0FDckQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFYVSx1QkFBdUI7UUFIbkMsUUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMsNEJBQTRCLENBQUM7U0FDeEMsQ0FBQztPQUNXLHVCQUF1QixDQVluQztJQUFELDhCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWlksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2Fub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdEFub255bW91c0NvbnNlbnRzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1hbm9ueW1vdXMtY29uc2VudHMtY29uZmlnJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2Fub255bW91cy1jb25zZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IGludGVyY2VwdG9ycyB9IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtBbm9ueW1vdXNDb25zZW50c1N0b3JlTW9kdWxlXSxcbn0pXG5leHBvcnQgY2xhc3MgQW5vbnltb3VzQ29uc2VudHNNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPEFub255bW91c0NvbnNlbnRzTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBBbm9ueW1vdXNDb25zZW50c01vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5pbnRlcmNlcHRvcnMsXG4gICAgICAgIEFub255bW91c0NvbnNlbnRzU2VydmljZSxcbiAgICAgICAgeyBwcm92aWRlOiBBbm9ueW1vdXNDb25zZW50c0NvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0QW5vbnltb3VzQ29uc2VudHNDb25maWcpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=