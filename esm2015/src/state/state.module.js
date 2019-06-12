/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ConfigModule } from '../config/config.module';
import { defaultStateConfig } from './config/default-state-config';
import { stateMetaReducers } from './reducers/index';
export class StateModule {
}
StateModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    StoreModule.forRoot({}),
                    EffectsModule.forRoot([]),
                    ConfigModule.withConfig(defaultStateConfig),
                ],
                providers: [...stateMetaReducers],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFDMUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBVXJELE1BQU0sT0FBTyxXQUFXOzs7WUFSdkIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxXQUFXLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztvQkFDdkIsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7b0JBQ3pCLFlBQVksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUM7aUJBQzVDO2dCQUNELFNBQVMsRUFBRSxDQUFDLEdBQUcsaUJBQWlCLENBQUM7YUFDbEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRWZmZWN0c01vZHVsZSB9IGZyb20gJ0BuZ3J4L2VmZmVjdHMnO1xuaW1wb3J0IHsgU3RvcmVNb2R1bGUgfSBmcm9tICdAbmdyeC9zdG9yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0U3RhdGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXN0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBzdGF0ZU1ldGFSZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgU3RvcmVNb2R1bGUuZm9yUm9vdCh7fSksXG4gICAgRWZmZWN0c01vZHVsZS5mb3JSb290KFtdKSxcbiAgICBDb25maWdNb2R1bGUud2l0aENvbmZpZyhkZWZhdWx0U3RhdGVDb25maWcpLFxuICBdLFxuICBwcm92aWRlcnM6IFsuLi5zdGF0ZU1ldGFSZWR1Y2Vyc10sXG59KVxuZXhwb3J0IGNsYXNzIFN0YXRlTW9kdWxlIHt9XG4iXX0=