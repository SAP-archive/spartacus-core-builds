var StateModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
import { defaultStateConfig } from './config/default-state-config';
import { StateConfig } from './config/state-config';
import { stateMetaReducers } from './reducers/index';
let StateModule = StateModule_1 = class StateModule {
    static forRoot() {
        return {
            ngModule: StateModule_1,
            providers: [
                ...stateMetaReducers,
                provideDefaultConfig(defaultStateConfig),
                { provide: StateConfig, useExisting: Config },
            ],
        };
    }
};
StateModule = StateModule_1 = __decorate([
    NgModule({})
], StateModule);
export { StateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHckQsSUFBYSxXQUFXLG1CQUF4QixNQUFhLFdBQVc7SUFDdEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULEdBQUcsaUJBQWlCO2dCQUNwQixvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDeEMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7YUFDOUM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFYWSxXQUFXO0lBRHZCLFFBQVEsQ0FBQyxFQUFFLENBQUM7R0FDQSxXQUFXLENBV3ZCO1NBWFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVEZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdFN0YXRlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgU3RhdGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgc3RhdGVNZXRhUmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIFN0YXRlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTdGF0ZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3RhdGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uc3RhdGVNZXRhUmVkdWNlcnMsXG4gICAgICAgIHByb3ZpZGVEZWZhdWx0Q29uZmlnKGRlZmF1bHRTdGF0ZUNvbmZpZyksXG4gICAgICAgIHsgcHJvdmlkZTogU3RhdGVDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19