import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ConfigModule } from '../../../config/config.module';
import { StoreFinderAdapter } from '../../../store-finder/connectors/store-finder.adapter';
import { defaultOccStoreFinderConfig } from './default-occ-store-finder-config';
import { OccStoreFinderAdapter } from './occ-store-finder.adapter';
var StoreFinderOccModule = /** @class */ (function () {
    function StoreFinderOccModule() {
    }
    StoreFinderOccModule = __decorate([
        NgModule({
            imports: [ConfigModule.withConfig(defaultOccStoreFinderConfig)],
            providers: [{ provide: StoreFinderAdapter, useClass: OccStoreFinderAdapter }],
        })
    ], StoreFinderOccModule);
    return StoreFinderOccModule;
}());
export { StoreFinderOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3N0b3JlLWZpbmRlci9zdG9yZS1maW5kZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFNbkU7SUFBQTtJQUFtQyxDQUFDO0lBQXZCLG9CQUFvQjtRQUpoQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDLENBQUM7WUFDL0QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLENBQUM7U0FDOUUsQ0FBQztPQUNXLG9CQUFvQixDQUFHO0lBQUQsMkJBQUM7Q0FBQSxBQUFwQyxJQUFvQztTQUF2QixvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJBZGFwdGVyIH0gZnJvbSAnLi4vLi4vLi4vc3RvcmUtZmluZGVyL2Nvbm5lY3RvcnMvc3RvcmUtZmluZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgZGVmYXVsdE9jY1N0b3JlRmluZGVyQ29uZmlnIH0gZnJvbSAnLi9kZWZhdWx0LW9jYy1zdG9yZS1maW5kZXItY29uZmlnJztcbmltcG9ydCB7IE9jY1N0b3JlRmluZGVyQWRhcHRlciB9IGZyb20gJy4vb2NjLXN0b3JlLWZpbmRlci5hZGFwdGVyJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbmZpZ01vZHVsZS53aXRoQ29uZmlnKGRlZmF1bHRPY2NTdG9yZUZpbmRlckNvbmZpZyldLFxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IFN0b3JlRmluZGVyQWRhcHRlciwgdXNlQ2xhc3M6IE9jY1N0b3JlRmluZGVyQWRhcHRlciB9XSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJPY2NNb2R1bGUge31cbiJdfQ==