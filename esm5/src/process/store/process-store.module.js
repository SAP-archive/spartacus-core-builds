import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StateModule } from '../../state/state.module';
import { PROCESS_FEATURE } from './process-state';
import { reducerProvider, reducerToken } from './reducers/index';
var ProcessStoreModule = /** @class */ (function () {
    function ProcessStoreModule() {
    }
    ProcessStoreModule = __decorate([
        NgModule({
            imports: [StateModule, StoreModule.forFeature(PROCESS_FEATURE, reducerToken)],
            providers: [reducerProvider],
        })
    ], ProcessStoreModule);
    return ProcessStoreModule;
}());
export { ProcessStoreModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvY2Vzcy1zdG9yZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvcHJvY2Vzcy9zdG9yZS9wcm9jZXNzLXN0b3JlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQU1qRTtJQUFBO0lBQWlDLENBQUM7SUFBckIsa0JBQWtCO1FBSjlCLFFBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsVUFBVSxDQUFDLGVBQWUsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUM3RSxTQUFTLEVBQUUsQ0FBQyxlQUFlLENBQUM7U0FDN0IsQ0FBQztPQUNXLGtCQUFrQixDQUFHO0lBQUQseUJBQUM7Q0FBQSxBQUFsQyxJQUFrQztTQUFyQixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBTdGF0ZU1vZHVsZSB9IGZyb20gJy4uLy4uL3N0YXRlL3N0YXRlLm1vZHVsZSc7XG5pbXBvcnQgeyBQUk9DRVNTX0ZFQVRVUkUgfSBmcm9tICcuL3Byb2Nlc3Mtc3RhdGUnO1xuaW1wb3J0IHsgcmVkdWNlclByb3ZpZGVyLCByZWR1Y2VyVG9rZW4gfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1N0YXRlTW9kdWxlLCBTdG9yZU1vZHVsZS5mb3JGZWF0dXJlKFBST0NFU1NfRkVBVFVSRSwgcmVkdWNlclRva2VuKV0sXG4gIHByb3ZpZGVyczogW3JlZHVjZXJQcm92aWRlcl0sXG59KVxuZXhwb3J0IGNsYXNzIFByb2Nlc3NTdG9yZU1vZHVsZSB7fVxuIl19