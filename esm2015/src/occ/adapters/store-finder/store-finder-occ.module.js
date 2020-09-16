import { NgModule } from '@angular/core';
import { StoreFinderAdapter } from '../../../store-finder/connectors/store-finder.adapter';
import { defaultOccStoreFinderConfig } from './default-occ-store-finder-config';
import { OccStoreFinderAdapter } from './occ-store-finder.adapter';
import { provideDefaultConfig } from '../../../config/config-providers';
export class StoreFinderOccModule {
}
StoreFinderOccModule.decorators = [
    { type: NgModule, args: [{
                providers: [
                    provideDefaultConfig(defaultOccStoreFinderConfig),
                    { provide: StoreFinderAdapter, useClass: OccStoreFinderAdapter },
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9vY2MvYWRhcHRlcnMvc3RvcmUtZmluZGVyL3N0b3JlLWZpbmRlci1vY2MubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDM0YsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDaEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFReEUsTUFBTSxPQUFPLG9CQUFvQjs7O1lBTmhDLFFBQVEsU0FBQztnQkFDUixTQUFTLEVBQUU7b0JBQ1Qsb0JBQW9CLENBQUMsMkJBQTJCLENBQUM7b0JBQ2pELEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRTtpQkFDakU7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS1maW5kZXIvY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBkZWZhdWx0T2NjU3RvcmVGaW5kZXJDb25maWcgfSBmcm9tICcuL2RlZmF1bHQtb2NjLXN0b3JlLWZpbmRlci1jb25maWcnO1xuaW1wb3J0IHsgT2NjU3RvcmVGaW5kZXJBZGFwdGVyIH0gZnJvbSAnLi9vY2Mtc3RvcmUtZmluZGVyLmFkYXB0ZXInO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi8uLi8uLi9jb25maWcvY29uZmlnLXByb3ZpZGVycyc7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRPY2NTdG9yZUZpbmRlckNvbmZpZyksXG4gICAgeyBwcm92aWRlOiBTdG9yZUZpbmRlckFkYXB0ZXIsIHVzZUNsYXNzOiBPY2NTdG9yZUZpbmRlckFkYXB0ZXIgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVGaW5kZXJPY2NNb2R1bGUge31cbiJdfQ==