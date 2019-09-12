/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { Config, provideConfig } from '../config/config.module';
import { defaultStateConfig } from './config/default-state-config';
import { StateConfig } from './config/state-config';
import { stateMetaReducers } from './reducers/index';
var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    /**
     * @return {?}
     */
    StateModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: StateModule,
            providers: tslib_1.__spread(stateMetaReducers, [
                provideConfig(defaultStateConfig),
                { provide: StateConfig, useExisting: Config },
            ]),
        };
    };
    StateModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return StateModule;
}());
export { StateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBdUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3BELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXJEO0lBQUE7SUFZQSxDQUFDOzs7O0lBVlEsbUJBQU87OztJQUFkO1FBQ0UsT0FBTztZQUNMLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsbUJBQ0osaUJBQWlCO2dCQUNwQixhQUFhLENBQUMsa0JBQWtCLENBQUM7Z0JBQ2pDLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2NBQzlDO1NBQ0YsQ0FBQztJQUNKLENBQUM7O2dCQVhGLFFBQVEsU0FBQyxFQUFFOztJQVlaLGtCQUFDO0NBQUEsQUFaRCxJQVlDO1NBWFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vZHVsZVdpdGhQcm92aWRlcnMsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWcsIHByb3ZpZGVDb25maWcgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0U3RhdGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXN0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBTdGF0ZUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL3N0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBzdGF0ZU1ldGFSZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe30pXG5leHBvcnQgY2xhc3MgU3RhdGVNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFN0YXRlTW9kdWxlPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBTdGF0ZU1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAuLi5zdGF0ZU1ldGFSZWR1Y2VycyxcbiAgICAgICAgcHJvdmlkZUNvbmZpZyhkZWZhdWx0U3RhdGVDb25maWcpLFxuICAgICAgICB7IHByb3ZpZGU6IFN0YXRlQ29uZmlnLCB1c2VFeGlzdGluZzogQ29uZmlnIH0sXG4gICAgICBdLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==