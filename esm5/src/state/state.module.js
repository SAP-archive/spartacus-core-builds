import { __decorate, __read, __spread } from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideDefaultConfig } from '../config/config.module';
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
                provideDefaultConfig(defaultStateConfig),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUdyRDtJQUFBO0lBV0EsQ0FBQztvQkFYWSxXQUFXO0lBQ2YsbUJBQU8sR0FBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBVztZQUNyQixTQUFTLFdBQ0osaUJBQWlCO2dCQUNwQixvQkFBb0IsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDeEMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUU7Y0FDOUM7U0FDRixDQUFDO0lBQ0osQ0FBQzs7SUFWVSxXQUFXO1FBRHZCLFFBQVEsQ0FBQyxFQUFFLENBQUM7T0FDQSxXQUFXLENBV3ZCO0lBQUQsa0JBQUM7Q0FBQSxBQVhELElBV0M7U0FYWSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbmZpZywgcHJvdmlkZURlZmF1bHRDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0U3RhdGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXN0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBzdGF0ZU1ldGFSZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgU3RhdGVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFN0YXRlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTdGF0ZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5zdGF0ZU1ldGFSZWR1Y2VycyxcbiAgICAgICAgcHJvdmlkZURlZmF1bHRDb25maWcoZGVmYXVsdFN0YXRlQ29uZmlnKSxcbiAgICAgICAgeyBwcm92aWRlOiBTdGF0ZUNvbmZpZywgdXNlRXhpc3Rpbmc6IENvbmZpZyB9LFxuICAgICAgXSxcbiAgICB9O1xuICB9XG59XG4iXX0=