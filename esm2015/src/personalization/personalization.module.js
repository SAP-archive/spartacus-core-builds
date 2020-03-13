var PersonalizationModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
import { PersonalizationConfig } from './config/personalization-config';
import { defaultPersonalizationConfig } from './config/default-personalization-config';
import { interceptors } from './http-interceptors/index';
let PersonalizationModule = PersonalizationModule_1 = class PersonalizationModule {
    static forRoot() {
        return {
            ngModule: PersonalizationModule_1,
            providers: [
                provideDefaultConfig(defaultPersonalizationConfig),
                ...interceptors,
            ],
        };
    }
};
PersonalizationModule = PersonalizationModule_1 = __decorate([
    NgModule({
        providers: [{ provide: PersonalizationConfig, useExisting: Config }],
    })
], PersonalizationModule);
export { PersonalizationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vcGVyc29uYWxpemF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUV2RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLekQsSUFBYSxxQkFBcUIsNkJBQWxDLE1BQWEscUJBQXFCO0lBQ2hDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSx1QkFBcUI7WUFDL0IsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDLDRCQUE0QixDQUFDO2dCQUNsRCxHQUFHLFlBQVk7YUFDaEI7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFWWSxxQkFBcUI7SUFIakMsUUFBUSxDQUFDO1FBQ1IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO0tBQ3JFLENBQUM7R0FDVyxxQkFBcUIsQ0FVakM7U0FWWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFBlcnNvbmFsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3BlcnNvbmFsaXphdGlvbi1jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdFBlcnNvbmFsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtcGVyc29uYWxpemF0aW9uLWNvbmZpZyc7XG5cbmltcG9ydCB7IGludGVyY2VwdG9ycyB9IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFBlcnNvbmFsaXphdGlvbkNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9XSxcbn0pXG5leHBvcnQgY2xhc3MgUGVyc29uYWxpemF0aW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxQZXJzb25hbGl6YXRpb25Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFBlcnNvbmFsaXphdGlvbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0UGVyc29uYWxpemF0aW9uQ29uZmlnKSxcbiAgICAgICAgLi4uaW50ZXJjZXB0b3JzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=