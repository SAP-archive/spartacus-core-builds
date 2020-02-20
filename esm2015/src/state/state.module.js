var StateModule_1;
import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideConfig } from '../config/config.module';
import { defaultStateConfig } from './config/default-state-config';
import { StateConfig } from './config/state-config';
import { stateMetaReducers } from './reducers/index';
let StateModule = StateModule_1 = class StateModule {
    static forRoot() {
        return {
            ngModule: StateModule_1,
            providers: [
                ...stateMetaReducers,
                provideConfig(defaultStateConfig),
                { provide: StateConfig, useExisting: Config },
            ],
        };
    }
};
StateModule = StateModule_1 = __decorate([
    NgModule({})
], StateModule);
export { StateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBR3JELElBQWEsV0FBVyxtQkFBeEIsTUFBYSxXQUFXO0lBQ3RCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxhQUFXO1lBQ3JCLFNBQVMsRUFBRTtnQkFDVCxHQUFHLGlCQUFpQjtnQkFDcEIsYUFBYSxDQUFDLGtCQUFrQixDQUFDO2dCQUNqQyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTthQUM5QztTQUNGLENBQUM7SUFDSixDQUFDO0NBQ0YsQ0FBQTtBQVhZLFdBQVc7SUFEdkIsUUFBUSxDQUFDLEVBQUUsQ0FBQztHQUNBLFdBQVcsQ0FXdkI7U0FYWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRTdGF0ZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IHN0YXRlTWV0YVJlZHVjZXJzIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBTdGF0ZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U3RhdGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFN0YXRlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLnN0YXRlTWV0YVJlZHVjZXJzLFxuICAgICAgICBwcm92aWRlQ29uZmlnKGRlZmF1bHRTdGF0ZUNvbmZpZyksXG4gICAgICAgIHsgcHJvdmlkZTogU3RhdGVDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19