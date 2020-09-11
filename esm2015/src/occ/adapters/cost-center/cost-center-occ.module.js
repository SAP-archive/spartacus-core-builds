import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '../../../config/config.module';
import { COST_CENTERS_NORMALIZER } from '../../../cost-center/connectors/cost-center/converters';
import { OccCostCenterListNormalizer } from './converters/occ-cost-center-list-normalizer';
import { defaultOccCostCentersConfig } from './default-occ-cost-centers-config';
let CostCenterOccModule = class CostCenterOccModule {
};
CostCenterOccModule = __decorate([
    NgModule({
        imports: [CommonModule, ConfigModule.withConfig(defaultOccCostCentersConfig)],
        providers: [
            {
                provide: COST_CENTERS_NORMALIZER,
                useClass: OccCostCenterListNormalizer,
                multi: true,
            },
        ],
    })
], CostCenterOccModule);
export { CostCenterOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC1jZW50ZXItb2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvYWRhcHRlcnMvY29zdC1jZW50ZXIvY29zdC1jZW50ZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzdELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHdEQUF3RCxDQUFDO0FBQ2pHLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQzNGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBWWhGLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0NBQUcsQ0FBQTtBQUF0QixtQkFBbUI7SUFWL0IsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUMsQ0FBQztRQUM3RSxTQUFTLEVBQUU7WUFDVDtnQkFDRSxPQUFPLEVBQUUsdUJBQXVCO2dCQUNoQyxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7S0FDRixDQUFDO0dBQ1csbUJBQW1CLENBQUc7U0FBdEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBDT1NUX0NFTlRFUlNfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2Nvc3QtY2VudGVyL2Nvbm5lY3RvcnMvY29zdC1jZW50ZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBPY2NDb3N0Q2VudGVyTGlzdE5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLWNvc3QtY2VudGVyLWxpc3Qtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjQ29zdENlbnRlcnNDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtb2NjLWNvc3QtY2VudGVycy1jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0T2NjQ29zdENlbnRlcnNDb25maWcpXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQ09TVF9DRU5URVJTX05PUk1BTElaRVIsXG4gICAgICB1c2VDbGFzczogT2NjQ29zdENlbnRlckxpc3ROb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29zdENlbnRlck9jY01vZHVsZSB7fVxuIl19