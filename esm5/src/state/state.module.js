/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigModule } from '../config/config.module';
import { defaultStateConfig } from './config/default-state-config';
import { stateMetaReducers } from './reducers/index';
var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        StoreModule.forRoot({}),
                        EffectsModule.forRoot([]),
                        ConfigModule.withConfig(defaultStateConfig),
                    ],
                    providers: tslib_1.__spread(stateMetaReducers),
                },] }
    ];
    return StateModule;
}());
export { StateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQzFDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNuRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVyRDtJQUFBO0lBUTBCLENBQUM7O2dCQVIxQixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3dCQUN2QixhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQzt3QkFDekIsWUFBWSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztxQkFDNUM7b0JBQ0QsU0FBUyxtQkFBTSxpQkFBaUIsQ0FBQztpQkFDbEM7O0lBQ3lCLGtCQUFDO0NBQUEsQUFSM0IsSUFRMkI7U0FBZCxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVmZmVjdHNNb2R1bGUgfSBmcm9tICdAbmdyeC9lZmZlY3RzJztcbmltcG9ydCB7IFN0b3JlTW9kdWxlIH0gZnJvbSAnQG5ncngvc3RvcmUnO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnLi4vY29uZmlnL2NvbmZpZy5tb2R1bGUnO1xuaW1wb3J0IHsgZGVmYXVsdFN0YXRlQ29uZmlnIH0gZnJvbSAnLi9jb25maWcvZGVmYXVsdC1zdGF0ZS1jb25maWcnO1xuaW1wb3J0IHsgc3RhdGVNZXRhUmVkdWNlcnMgfSBmcm9tICcuL3JlZHVjZXJzL2luZGV4JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIFN0b3JlTW9kdWxlLmZvclJvb3Qoe30pLFxuICAgIEVmZmVjdHNNb2R1bGUuZm9yUm9vdChbXSksXG4gICAgQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFN0YXRlQ29uZmlnKSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbLi4uc3RhdGVNZXRhUmVkdWNlcnNdLFxufSlcbmV4cG9ydCBjbGFzcyBTdGF0ZU1vZHVsZSB7fVxuIl19