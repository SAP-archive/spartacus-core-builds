import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '../../../config/config.module';
import { COST_CENTERS_NORMALIZER } from '../../../cost-center/connectors/cost-center/converters';
import { OccCostCenterListNormalizer } from './converters/occ-cost-center-list-normalizer';
import { defaultOccCostCentersConfig } from './default-occ-cost-centers-config';
export class CostCenterOccModule {
}
CostCenterOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ConfigModule.withConfig(defaultOccCostCentersConfig)],
                providers: [
                    {
                        provide: COST_CENTERS_NORMALIZER,
                        useClass: OccCostCenterListNormalizer,
                        multi: true,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC1jZW50ZXItb2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9jb3N0LWNlbnRlci9jb3N0LWNlbnRlci1vY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQVloRixNQUFNLE9BQU8sbUJBQW1COzs7WUFWL0IsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLENBQUM7Z0JBQzdFLFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsdUJBQXVCO3dCQUNoQyxRQUFRLEVBQUUsMkJBQTJCO3dCQUNyQyxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBDT1NUX0NFTlRFUlNfTk9STUFMSVpFUiB9IGZyb20gJy4uLy4uLy4uL2Nvc3QtY2VudGVyL2Nvbm5lY3RvcnMvY29zdC1jZW50ZXIvY29udmVydGVycyc7XG5pbXBvcnQgeyBPY2NDb3N0Q2VudGVyTGlzdE5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLWNvc3QtY2VudGVyLWxpc3Qtbm9ybWFsaXplcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjQ29zdENlbnRlcnNDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtb2NjLWNvc3QtY2VudGVycy1jb25maWcnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0T2NjQ29zdENlbnRlcnNDb25maWcpXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQ09TVF9DRU5URVJTX05PUk1BTElaRVIsXG4gICAgICB1c2VDbGFzczogT2NjQ29zdENlbnRlckxpc3ROb3JtYWxpemVyLFxuICAgICAgbXVsdGk6IHRydWUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29zdENlbnRlck9jY01vZHVsZSB7fVxuIl19