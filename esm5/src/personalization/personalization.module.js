import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { Config, ConfigModule } from '../config/config.module';
import { PersonalizationConfig } from './config/personalization-config';
import { defaultPersonalizationConfig } from './config/default-personalization-config';
import { interceptors } from './http-interceptors/index';
var PersonalizationModule = /** @class */ (function () {
    function PersonalizationModule() {
    }
    PersonalizationModule_1 = PersonalizationModule;
    PersonalizationModule.forRoot = function () {
        return {
            ngModule: PersonalizationModule_1,
            providers: __spread(interceptors),
        };
    };
    var PersonalizationModule_1;
    PersonalizationModule = PersonalizationModule_1 = __decorate([
        NgModule({
            imports: [ConfigModule.withConfig(defaultPersonalizationConfig)],
            providers: [{ provide: PersonalizationConfig, useExisting: Config }],
        })
    ], PersonalizationModule);
    return PersonalizationModule;
}());
export { PersonalizationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vcGVyc29uYWxpemF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUV2RixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFNekQ7SUFBQTtJQU9BLENBQUM7OEJBUFkscUJBQXFCO0lBQ3pCLDZCQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUFxQjtZQUMvQixTQUFTLFdBQU0sWUFBWSxDQUFDO1NBQzdCLENBQUM7SUFDSixDQUFDOztJQU5VLHFCQUFxQjtRQUpqQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFDaEUsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxDQUFDO1NBQ3JFLENBQUM7T0FDVyxxQkFBcUIsQ0FPakM7SUFBRCw0QkFBQztDQUFBLEFBUEQsSUFPQztTQVBZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIENvbmZpZ01vZHVsZSB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IFBlcnNvbmFsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3BlcnNvbmFsaXphdGlvbi1jb25maWcnO1xuaW1wb3J0IHsgZGVmYXVsdFBlcnNvbmFsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtcGVyc29uYWxpemF0aW9uLWNvbmZpZyc7XG5cbmltcG9ydCB7IGludGVyY2VwdG9ycyB9IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFBlcnNvbmFsaXphdGlvbkNvbmZpZyldLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFBlcnNvbmFsaXphdGlvbkNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9XSxcbn0pXG5leHBvcnQgY2xhc3MgUGVyc29uYWxpemF0aW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxQZXJzb25hbGl6YXRpb25Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFBlcnNvbmFsaXphdGlvbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLmludGVyY2VwdG9yc10sXG4gICAgfTtcbiAgfVxufVxuIl19