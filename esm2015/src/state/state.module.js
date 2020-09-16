var StateModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { defaultStateConfig } from './config/default-state-config';
import { stateMetaReducers } from './reducers/index';
import { provideDefaultConfig } from '../config/config-providers';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBR2xFLElBQWEsV0FBVyxtQkFBeEIsTUFBYSxXQUFXO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLGlCQUFpQjtnQkFDcEIsb0JBQW9CLENBQUMsa0JBQWtCLENBQUM7YUFDekM7U0FDRixDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUFWWSxXQUFXO0lBRHZCLFFBQVEsQ0FBQyxFQUFFLENBQUM7R0FDQSxXQUFXLENBVXZCO1NBVlksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWZhdWx0U3RhdGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXN0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBzdGF0ZU1ldGFSZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuaW1wb3J0IHsgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLXByb3ZpZGVycyc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBTdGF0ZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U3RhdGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFN0YXRlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLnN0YXRlTWV0YVJlZHVjZXJzLFxuICAgICAgICBwcm92aWRlRGVmYXVsdENvbmZpZyhkZWZhdWx0U3RhdGVDb25maWcpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=