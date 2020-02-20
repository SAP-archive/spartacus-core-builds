var AnonymousConsentsModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/index';
import { AnonymousConsentsConfig } from './config/anonymous-consents-config';
import { defaultAnonymousConsentsConfig } from './config/default-anonymous-consents-config';
import { AnonymousConsentsService } from './facade/anonymous-consents.service';
import { interceptors } from './http-interceptors/index';
import { AnonymousConsentsStoreModule } from './store/anonymous-consents-store.module';
let AnonymousConsentsModule = AnonymousConsentsModule_1 = class AnonymousConsentsModule {
    static forRoot() {
        return {
            ngModule: AnonymousConsentsModule_1,
            providers: [
                ...interceptors,
                AnonymousConsentsService,
                { provide: AnonymousConsentsConfig, useExisting: Config },
            ],
        };
    }
};
AnonymousConsentsModule = AnonymousConsentsModule_1 = __decorate([
    NgModule({
        imports: [
            AnonymousConsentsStoreModule,
            ConfigModule.withConfig(defaultAnonymousConsentsConfig),
        ],
    })
], AnonymousConsentsModule);
export { AnonymousConsentsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvYW5vbnltb3VzLWNvbnNlbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdkQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDN0UsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDNUYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBUXZGLElBQWEsdUJBQXVCLCtCQUFwQyxNQUFhLHVCQUF1QjtJQUNsQyxNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUseUJBQXVCO1lBQ2pDLFNBQVMsRUFBRTtnQkFDVCxHQUFHLFlBQVk7Z0JBQ2Ysd0JBQXdCO2dCQUN4QixFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2FBQzFEO1NBQ0YsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBWFksdUJBQXVCO0lBTm5DLFFBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLDRCQUE0QjtZQUM1QixZQUFZLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDO1NBQ3hEO0tBQ0YsQ0FBQztHQUNXLHVCQUF1QixDQVduQztTQVhZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy9pbmRleCc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50c0NvbmZpZyB9IGZyb20gJy4vY29uZmlnL2Fub255bW91cy1jb25zZW50cy1jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdEFub255bW91c0NvbnNlbnRzQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1hbm9ueW1vdXMtY29uc2VudHMtY29uZmlnJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRzU2VydmljZSB9IGZyb20gJy4vZmFjYWRlL2Fub255bW91cy1jb25zZW50cy5zZXJ2aWNlJztcbmltcG9ydCB7IGludGVyY2VwdG9ycyB9IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudHNTdG9yZU1vZHVsZSB9IGZyb20gJy4vc3RvcmUvYW5vbnltb3VzLWNvbnNlbnRzLXN0b3JlLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBbm9ueW1vdXNDb25zZW50c1N0b3JlTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRBbm9ueW1vdXNDb25zZW50c0NvbmZpZyksXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRzTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxBbm9ueW1vdXNDb25zZW50c01vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogQW5vbnltb3VzQ29uc2VudHNNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uaW50ZXJjZXB0b3JzLFxuICAgICAgICBBbm9ueW1vdXNDb25zZW50c1NlcnZpY2UsXG4gICAgICAgIHsgcHJvdmlkZTogQW5vbnltb3VzQ29uc2VudHNDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19