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
var OrganizationOccModule = /** @class */ (function () {
    function OrganizationOccModule() {
    }
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
    return OrganizationOccModule;
}());
export { OrganizationOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL29yZ2FuaXphdGlvbi9vcmdhbml6YXRpb24tb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQ3JHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSw0QkFBNEIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBb0JqRTtJQUFBO0lBQW9DLENBQUM7SUFBeEIscUJBQXFCO1FBbEJqQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsWUFBWTtnQkFDWixnQkFBZ0I7Z0JBQ2hCLFlBQVksQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUM7YUFDdEQ7WUFDRCxTQUFTLEVBQUU7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsUUFBUSxFQUFFLG9CQUFvQjtpQkFDL0I7Z0JBQ0Q7b0JBQ0UsT0FBTyxFQUFFLHVCQUF1QjtvQkFDaEMsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtTQUNGLENBQUM7T0FDVyxxQkFBcUIsQ0FBRztJQUFELDRCQUFDO0NBQUEsQUFBckMsSUFBcUM7U0FBeEIscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgQ09TVF9DRU5URVJTX05PUk1BTElaRVIgfSBmcm9tICcuLi8uLi8uLi9vcmdhbml6YXRpb24vY29ubmVjdG9ycy9jb3N0LWNlbnRlci9jb252ZXJ0ZXJzJztcbmltcG9ydCB7IENvc3RDZW50ZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vb3JnYW5pemF0aW9uL2Nvbm5lY3RvcnMvY29zdC1jZW50ZXIvY29zdC1jZW50ZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NDb3N0Q2VudGVyTGlzdE5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLWNvc3QtY2VudGVyLWxpc3Qtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjT3JnYW5pemF0aW9uQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy1vcmdhbml6YXRpb24tY29uZmlnJztcbmltcG9ydCB7IE9jY0Nvc3RDZW50ZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2MtY29zdC1jZW50ZXIuYWRhcHRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSHR0cENsaWVudE1vZHVsZSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0T2NjT3JnYW5pemF0aW9uQ29uZmlnKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQ29zdENlbnRlckFkYXB0ZXIsXG4gICAgICB1c2VDbGFzczogT2NjQ29zdENlbnRlckFkYXB0ZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBDT1NUX0NFTlRFUlNfTk9STUFMSVpFUixcbiAgICAgIHVzZUNsYXNzOiBPY2NDb3N0Q2VudGVyTGlzdE5vcm1hbGl6ZXIsXG4gICAgICBtdWx0aTogdHJ1ZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBPcmdhbml6YXRpb25PY2NNb2R1bGUge31cbiJdfQ==