import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConfigModule } from '../../../config/config.module';
import { COST_CENTERS_NORMALIZER, COST_CENTER_NORMALIZER, COST_CENTER_SERIALIZER, } from '../../../cost-center/connectors/cost-center/converters';
import { OccCostCenterListNormalizer } from './converters/occ-cost-center-list-normalizer';
import { OccCostCenterNormalizer } from './converters/occ-cost-center-normalizer';
import { OccCostCenterSerializer } from './converters/occ-cost-center-serializer';
import { defaultOccCostCentersConfig } from './default-occ-cost-centers-config';
export class CostCenterOccModule {
}
CostCenterOccModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, ConfigModule.withConfig(defaultOccCostCentersConfig)],
                providers: [
                    {
                        provide: COST_CENTERS_NORMALIZER,
                        useExisting: OccCostCenterListNormalizer,
                        multi: true,
                    },
                    {
                        provide: COST_CENTER_NORMALIZER,
                        useExisting: OccCostCenterNormalizer,
                        multi: true,
                    },
                    {
                        provide: COST_CENTER_SERIALIZER,
                        useExisting: OccCostCenterSerializer,
                        multi: true,
                    },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29zdC1jZW50ZXItb2NjLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9hZGFwdGVycy9jb3N0LWNlbnRlci9jb3N0LWNlbnRlci1vY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RCxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLHNCQUFzQixFQUN0QixzQkFBc0IsR0FDdkIsTUFBTSx3REFBd0QsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUMzRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQXNCaEYsTUFBTSxPQUFPLG1CQUFtQjs7O1lBcEIvQixRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDN0UsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSx1QkFBdUI7d0JBQ2hDLFdBQVcsRUFBRSwyQkFBMkI7d0JBQ3hDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxzQkFBc0I7d0JBQy9CLFdBQVcsRUFBRSx1QkFBdUI7d0JBQ3BDLEtBQUssRUFBRSxJQUFJO3FCQUNaO29CQUNEO3dCQUNFLE9BQU8sRUFBRSxzQkFBc0I7d0JBQy9CLFdBQVcsRUFBRSx1QkFBdUI7d0JBQ3BDLEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJy4uLy4uLy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7XG4gIENPU1RfQ0VOVEVSU19OT1JNQUxJWkVSLFxuICBDT1NUX0NFTlRFUl9OT1JNQUxJWkVSLFxuICBDT1NUX0NFTlRFUl9TRVJJQUxJWkVSLFxufSBmcm9tICcuLi8uLi8uLi9jb3N0LWNlbnRlci9jb25uZWN0b3JzL2Nvc3QtY2VudGVyL2NvbnZlcnRlcnMnO1xuaW1wb3J0IHsgT2NjQ29zdENlbnRlckxpc3ROb3JtYWxpemVyIH0gZnJvbSAnLi9jb252ZXJ0ZXJzL29jYy1jb3N0LWNlbnRlci1saXN0LW5vcm1hbGl6ZXInO1xuaW1wb3J0IHsgT2NjQ29zdENlbnRlck5vcm1hbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLWNvc3QtY2VudGVyLW5vcm1hbGl6ZXInO1xuaW1wb3J0IHsgT2NjQ29zdENlbnRlclNlcmlhbGl6ZXIgfSBmcm9tICcuL2NvbnZlcnRlcnMvb2NjLWNvc3QtY2VudGVyLXNlcmlhbGl6ZXInO1xuaW1wb3J0IHsgZGVmYXVsdE9jY0Nvc3RDZW50ZXJzQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy1jb3N0LWNlbnRlcnMtY29uZmlnJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdE9jY0Nvc3RDZW50ZXJzQ29uZmlnKV0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IENPU1RfQ0VOVEVSU19OT1JNQUxJWkVSLFxuICAgICAgdXNlRXhpc3Rpbmc6IE9jY0Nvc3RDZW50ZXJMaXN0Tm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ09TVF9DRU5URVJfTk9STUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NDb3N0Q2VudGVyTm9ybWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogQ09TVF9DRU5URVJfU0VSSUFMSVpFUixcbiAgICAgIHVzZUV4aXN0aW5nOiBPY2NDb3N0Q2VudGVyU2VyaWFsaXplcixcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvc3RDZW50ZXJPY2NNb2R1bGUge31cbiJdfQ==