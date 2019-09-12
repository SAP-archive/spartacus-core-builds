/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { Config, provideConfig } from '../config/config.module';
import { defaultStateConfig } from './config/default-state-config';
import { StateConfig } from './config/state-config';
import { stateMetaReducers } from './reducers/index';
export class StateModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: StateModule,
            providers: [
                ...stateMetaReducers,
                provideConfig(defaultStateConfig),
                { provide: StateConfig, useExisting: Config },
            ],
        };
    }
}
StateModule.decorators = [
    { type: NgModule, args: [{},] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFHckQsTUFBTSxPQUFPLFdBQVc7Ozs7SUFDdEIsTUFBTSxDQUFDLE9BQU87UUFDWixPQUFPO1lBQ0wsUUFBUSxFQUFFLFdBQVc7WUFDckIsU0FBUyxFQUFFO2dCQUNULEdBQUcsaUJBQWlCO2dCQUNwQixhQUFhLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2pDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2FBQzlDO1NBQ0YsQ0FBQztJQUNKLENBQUM7OztZQVhGLFFBQVEsU0FBQyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZUNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9jb25maWcubW9kdWxlJztcbmltcG9ydCB7IGRlZmF1bHRTdGF0ZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2RlZmF1bHQtc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IFN0YXRlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvc3RhdGUtY29uZmlnJztcbmltcG9ydCB7IHN0YXRlTWV0YVJlZHVjZXJzIH0gZnJvbSAnLi9yZWR1Y2Vycy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBTdGF0ZU1vZHVsZSB7XG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8U3RhdGVNb2R1bGU+IHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFN0YXRlTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIC4uLnN0YXRlTWV0YVJlZHVjZXJzLFxuICAgICAgICBwcm92aWRlQ29uZmlnKGRlZmF1bHRTdGF0ZUNvbmZpZyksXG4gICAgICAgIHsgcHJvdmlkZTogU3RhdGVDb25maWcsIHVzZUV4aXN0aW5nOiBDb25maWcgfSxcbiAgICAgIF0sXG4gICAgfTtcbiAgfVxufVxuIl19