/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { ConfigModule } from '../../../config/config.module';
import { StoreFinderAdapter } from '../../../store-finder/connectors/store-finder.adapter';
import { defaultOccStoreFinderConfig } from './default-occ-store-finder-config';
import { OccStoreFinderAdapter } from './occ-store-finder.adapter';
var StoreFinderOccModule = /** @class */ (function () {
    function StoreFinderOccModule() {
    }
    StoreFinderOccModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ConfigModule.withConfig(defaultOccStoreFinderConfig)],
                    providers: [{ provide: StoreFinderAdapter, useClass: OccStoreFinderAdapter }],
                },] }
    ];
    return StoreFinderOccModule;
}());
export { StoreFinderOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3N0b3JlLWZpbmRlci9zdG9yZS1maW5kZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFbkU7SUFBQTtJQUltQyxDQUFDOztnQkFKbkMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUMsQ0FBQztvQkFDL0QsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLENBQUM7aUJBQzlFOztJQUNrQywyQkFBQztDQUFBLEFBSnBDLElBSW9DO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS1maW5kZXIvY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjU3RvcmVGaW5kZXJDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtb2NjLXN0b3JlLWZpbmRlci1jb25maWcnO1xuaW1wb3J0IHsgT2NjU3RvcmVGaW5kZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2Mtc3RvcmUtZmluZGVyLmFkYXB0ZXInO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdE9jY1N0b3JlRmluZGVyQ29uZmlnKV0sXG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU3RvcmVGaW5kZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjU3RvcmVGaW5kZXJBZGFwdGVyIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlck9jY01vZHVsZSB7fVxuIl19