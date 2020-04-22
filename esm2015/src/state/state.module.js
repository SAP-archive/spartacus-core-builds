var StateModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { provideDefaultConfig } from '../config/config.module';
import { defaultStateConfig } from './config/default-state-config';
import { stateMetaReducers } from './reducers/index';
let StateModule = StateModule_1 = class StateModule {
    static forRoot() {
        return {
            ngModule: StateModule_1,
            providers: [
                ...stateMetaReducers,
                provideDefaultConfig(defaultStateConfig),
            ],
        };
    }
};
StateModule = StateModule_1 = __decorate([
    NgModule({})
], StateModule);
export { StateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR3JELElBQWEsV0FBVyxtQkFBeEIsTUFBYSxXQUFXO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLGlCQUFpQjtnQkFDcEIsb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7YUFDekM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFWWSxXQUFXO0lBRHZCLFFBQVEsQ0FBQyxFQUFFLENBQUM7R0FDQSxXQUFXLENBVXZCO1NBVlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwcm92aWRlRGVmYXVsdENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRTdGF0ZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IHN0YXRlTWV0YVJlZHVjZXJzIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBTdGF0ZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U3RhdGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFN0YXRlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLnN0YXRlTWV0YVJlZHVjZXJzLFxuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0U3RhdGVDb25maWcpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=