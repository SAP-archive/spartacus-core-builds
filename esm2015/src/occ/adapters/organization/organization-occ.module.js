import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ConfigModule } from '../../../config/config.module';
import { COST_CENTERS_NORMALIZER } from '../../../organization/connectors/cost-center/converters';
import { CostCenterAdapter } from '../../../organization/connectors/cost-center/cost-center.adapter';
import { OccCostCenterListNormalizer } from './converters/occ-cost-center-list-normalizer';
import { defaultOccOrganizationConfig } from './default-occ-organization-config';
import { OccCostCenterAdapter } from './occ-cost-center.adapter';
let OrganizationOccModule = class OrganizationOccModule {
};
OrganizationOccModule = __decorate([
    NgModule({
        imports: [
            CommonModule,
            HttpClientModule,
            ConfigModule.withConfig(defaultOccOrganizationConfig),
        ],
        providers: [
            {
                provide: CostCenterAdapter,
                useClass: OccCostCenterAdapter,
            },
            {
                provide: COST_CENTERS_NORMALIZER,
                useClass: OccCostCenterListNormalizer,
                multi: true,
            },
        ],
    })
], OrganizationOccModule);
export { OrganizationOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24tb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBb0JqRSxJQUFhLHFCQUFxQixHQUFsQyxNQUFhLHFCQUFxQjtDQUFHLENBQUE7QUFBeEIscUJBQXFCO0lBbEJqQyxRQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCxZQUFZO1lBQ1osZ0JBQWdCO1lBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUM7U0FDdEQ7UUFDRCxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixRQUFRLEVBQUUsb0JBQW9CO2FBQy9CO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLHVCQUF1QjtnQkFDaEMsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsS0FBSyxFQUFFLElBQUk7YUFDWjtTQUNGO0tBQ0YsQ0FBQztHQUNXLHFCQUFxQixDQUFHO1NBQXhCLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IENPU1RfQ0VOVEVSU19OT1JNQUxJWkVSIH0gZnJvbSAnLi4vLi4vLi4vb3JnYW5pemF0aW9uL2Nvbm5lY3RvcnMvY29zdC1jZW50ZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBDb3N0Q2VudGVyQWRhcHRlciB9IGZyb20gJy4uLy4uLy4uL29yZ2FuaXphdGlvbi9jb25uZWN0b3JzL2Nvc3QtY2VudGVyL2Nvc3QtY2VudGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgT2NjQ29zdENlbnRlckxpc3ROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1jb3N0LWNlbnRlci1saXN0LW5vcm1hbGl6ZXInO1xuaW1wb3J0IHsgZGVmYXVsdE9jY09yZ2FuaXphdGlvbkNvbmZpZyB9IGZyb20gJy4vZGVmYXVsdC1vY2Mtb3JnYW5pemF0aW9uLWNvbmZpZyc7XG5pbXBvcnQgeyBPY2NDb3N0Q2VudGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLWNvc3QtY2VudGVyLmFkYXB0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIEh0dHBDbGllbnRNb2R1bGUsXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdE9jY09yZ2FuaXphdGlvbkNvbmZpZyksXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IENvc3RDZW50ZXJBZGFwdGVyLFxuICAgICAgdXNlQ2xhc3M6IE9jY0Nvc3RDZW50ZXJBZGFwdGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ09TVF9DRU5URVJTX05PUk1BTElaRVIsXG4gICAgICB1c2VDbGFzczogT2NjQ29zdENlbnRlckxpc3ROb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgT3JnYW5pemF0aW9uT2NjTW9kdWxlIHt9XG4iXX0=