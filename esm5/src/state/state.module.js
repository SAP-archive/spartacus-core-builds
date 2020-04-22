import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
import { defaultStateConfig } from './config/default-state-config';
import { stateMetaReducers } from './reducers/index';
var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule_1 = StateModule;
    StateModule.forRoot = function () {
        return {
            ngModule: StateModule_1,
            providers: __spread(stateMetaReducers, [
                provideDefaultConfig(defaultStateConfig),
            ]),
        };
    };
    var StateModule_1;
    StateModule = StateModule_1 = __decorate([
        NgModule({})
    ], StateModule);
    return StateModule;
}());
export { StateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHckQ7SUFBQTtJQVVBLENBQUM7b0JBVlksV0FBVztJQUNmLG1CQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQVc7WUFDckIsU0FBUyxXQUNKLGlCQUFpQjtnQkFDcEIsb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7Y0FDekM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFUVSxXQUFXO1FBRHZCLFFBQVEsQ0FBQyxFQUFFLENBQUM7T0FDQSxXQUFXLENBVXZCO0lBQUQsa0JBQUM7Q0FBQSxBQVZELElBVUM7U0FWWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdFN0YXRlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgc3RhdGVNZXRhUmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIFN0YXRlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTdGF0ZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3RhdGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uc3RhdGVNZXRhUmVkdWNlcnMsXG4gICAgICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRTdGF0ZUNvbmZpZyksXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==