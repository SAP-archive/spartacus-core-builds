/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { StoreFinderAdapter } from '../../../store-finder/connectors/store-finder.adapter';
import { OccStoreFinderAdapter } from './occ-store-finder.adapter';
var StoreFinderOccModule = /** @class */ (function () {
    function StoreFinderOccModule() {
    }
    StoreFinderOccModule.decorators = [
        { type: NgModule, args: [{
                    providers: [{ provide: StoreFinderAdapter, useClass: OccStoreFinderAdapter }],
                },] }
    ];
    return StoreFinderOccModule;
}());
export { StoreFinderOccModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZmluZGVyLW9jYy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL3N0b3JlLWZpbmRlci9zdG9yZS1maW5kZXItb2NjLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUMzRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVuRTtJQUFBO0lBR21DLENBQUM7O2dCQUhuQyxRQUFRLFNBQUM7b0JBQ1IsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsUUFBUSxFQUFFLHFCQUFxQixFQUFFLENBQUM7aUJBQzlFOztJQUNrQywyQkFBQztDQUFBLEFBSHBDLElBR29DO1NBQXZCLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckFkYXB0ZXIgfSBmcm9tICcuLi8uLi8uLi9zdG9yZS1maW5kZXIvY29ubmVjdG9ycy9zdG9yZS1maW5kZXIuYWRhcHRlcic7XG5pbXBvcnQgeyBPY2NTdG9yZUZpbmRlckFkYXB0ZXIgfSBmcm9tICcuL29jYy1zdG9yZS1maW5kZXIuYWRhcHRlcic7XG5cbkBOZ01vZHVsZSh7XG4gIHByb3ZpZGVyczogW3sgcHJvdmlkZTogU3RvcmVGaW5kZXJBZGFwdGVyLCB1c2VDbGFzczogT2NjU3RvcmVGaW5kZXJBZGFwdGVyIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZUZpbmRlck9jY01vZHVsZSB7fVxuIl19