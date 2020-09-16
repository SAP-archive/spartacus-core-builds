import { NgModule } from '@angular/core';
import { defaultPersonalizationConfig } from './config/default-personalization-config';
import { interceptors } from './http-interceptors/index';
import { provideDefaultConfig } from '../config/config-providers';
export class PersonalizationModule {
    static forRoot() {
        return {
            ngModule: PersonalizationModule,
            providers: [
                provideDefaultConfig(defaultPersonalizationConfig),
                ...interceptors,
            ],
        };
    }
}
PersonalizationModule.decorators = [
    { type: NgModule, args: [{},] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL3BlcnNvbmFsaXphdGlvbi9wZXJzb25hbGl6YXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXZGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUdsRSxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxxQkFBcUI7WUFDL0IsU0FBUyxFQUFFO2dCQUNULG9CQUFvQixDQUFDLDRCQUE0QixDQUFDO2dCQUNsRCxHQUFHLFlBQVk7YUFDaEI7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBVkYsUUFBUSxTQUFDLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGVmYXVsdFBlcnNvbmFsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtcGVyc29uYWxpemF0aW9uLWNvbmZpZyc7XG5cbmltcG9ydCB7IGludGVyY2VwdG9ycyB9IGZyb20gJy4vaHR0cC1pbnRlcmNlcHRvcnMvaW5kZXgnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXByb3ZpZGVycyc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBQZXJzb25hbGl6YXRpb25Nb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFBlcnNvbmFsaXphdGlvbk1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogUGVyc29uYWxpemF0aW9uTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRQZXJzb25hbGl6YXRpb25Db25maWcpLFxuICAgICAgICAuLi5pbnRlcmNlcHRvcnMsXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==