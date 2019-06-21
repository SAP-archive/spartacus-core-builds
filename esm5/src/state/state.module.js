/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { ConfigModule } from '../config/config.module';
import { defaultStateConfig } from './config/default-state-config';
import { stateMetaReducers } from './reducers/index';
var StateModule = /** @class */ (function () {
    function StateModule() {
    }
    StateModule.decorators = [
        { type: NgModule, args: [{
                    imports: [ConfigModule.withConfig(defaultStateConfig)],
                    providers: tslib_1.__spread(stateMetaReducers),
                },] }
    ];
    return StateModule;
}());
export { StateModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0YXRlL3N0YXRlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBRXJEO0lBQUE7SUFJMEIsQ0FBQzs7Z0JBSjFCLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLENBQUM7b0JBQ3RELFNBQVMsbUJBQU0saUJBQWlCLENBQUM7aUJBQ2xDOztJQUN5QixrQkFBQztDQUFBLEFBSjNCLElBSTJCO1NBQWQsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICcuLi9jb25maWcvY29uZmlnLm1vZHVsZSc7XG5pbXBvcnQgeyBkZWZhdWx0U3RhdGVDb25maWcgfSBmcm9tICcuL2NvbmZpZy9kZWZhdWx0LXN0YXRlLWNvbmZpZyc7XG5pbXBvcnQgeyBzdGF0ZU1ldGFSZWR1Y2VycyB9IGZyb20gJy4vcmVkdWNlcnMvaW5kZXgnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29uZmlnTW9kdWxlLndpdGhDb25maWcoZGVmYXVsdFN0YXRlQ29uZmlnKV0sXG4gIHByb3ZpZGVyczogWy4uLnN0YXRlTWV0YVJlZHVjZXJzXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RhdGVNb2R1bGUge31cbiJdfQ==