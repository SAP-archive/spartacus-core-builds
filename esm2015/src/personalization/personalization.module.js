var PersonalizationModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
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
    NgModule({})
], PersonalizationModule);
export { PersonalizationModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vcGVyc29uYWxpemF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUd6RCxJQUFhLHFCQUFxQiw2QkFBbEMsTUFBYSxxQkFBcUI7SUFDaEMsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLHVCQUFxQjtZQUMvQixTQUFTLEVBQUU7Z0JBQ1Qsb0JBQW9CLENBQUMsNEJBQTRCLENBQUM7Z0JBQ2xELEdBQUcsWUFBWTthQUNoQjtTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVZZLHFCQUFxQjtJQURqQyxRQUFRLENBQUMsRUFBRSxDQUFDO0dBQ0EscUJBQXFCLENBVWpDO1NBVlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdFBlcnNvbmFsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtcGVyc29uYWxpemF0aW9uLWNvbmZpZyc7XG5cbmltcG9ydCB7IGludGVyY2VwdG9ycyB9IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgUGVyc29uYWxpemF0aW9uTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxQZXJzb25hbGl6YXRpb25Nb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFBlcnNvbmFsaXphdGlvbk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0UGVyc29uYWxpemF0aW9uQ29uZmlnKSxcbiAgICAgICAgLi4uaW50ZXJjZXB0b3JzLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=