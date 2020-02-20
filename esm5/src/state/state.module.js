import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideConfig } from '../config/config.module';
import { defaultStateConfig } from './config/default-state-config';
import { StateConfig } from './config/state-config';
import { stateMetaReducers } from './reducers/index';
var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule_1 = StateModule;
    StateModule.forRoot = function () {
        return {
            ngModule: StateModule_1,
            providers: __spread(stateMetaReducers, [
                provideConfig(defaultStateConfig),
                { provide: StateConfig, useExisting: Config },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHckQ7SUFBQTtJQVdBLENBQUM7b0JBWFksV0FBVztJQUNmLG1CQUFPLEdBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGFBQVc7WUFDckIsU0FBUyxXQUNKLGlCQUFpQjtnQkFDcEIsYUFBYSxDQUFDLGtCQUFrQixDQUFDO2dCQUNqQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtjQUM5QztTQUNGLENBQUM7SUFDSixDQUFDOztJQVZVLFdBQVc7UUFEdkIsUUFBUSxDQUFDLEVBQUUsQ0FBQztPQUNBLFdBQVcsQ0FXdkI7SUFBRCxrQkFBQztDQUFBLEFBWEQsSUFXQztTQVhZLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29uZmlnLCBwcm92aWRlQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdFN0YXRlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgU3RhdGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgc3RhdGVNZXRhUmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuQE5nTW9kdWxlKHt9KVxuZXhwb3J0IGNsYXNzIFN0YXRlTW9kdWxlIHtcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxTdGF0ZU1vZHVsZT4ge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogU3RhdGVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgLi4uc3RhdGVNZXRhUmVkdWNlcnMsXG4gICAgICAgIHByb3ZpZGVDb25maWcoZGVmYXVsdFN0YXRlQ29uZmlnKSxcbiAgICAgICAgeyBwcm92aWRlOiBTdGF0ZUNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=