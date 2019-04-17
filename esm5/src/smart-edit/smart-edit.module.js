/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { interceptors } from './http-interceptors/index';
var SmartEditModule = /** @class */ (function () {
    function SmartEditModule() {
    }
    /**
     * @return {?}
     */
    SmartEditModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: SmartEditModule,
            providers: tslib_1.__spread(interceptors),
        };
    };
    SmartEditModule.decorators = [
        { type: NgModule, args: [{},] }
    ];
    return SmartEditModule;
}());
export { SmartEditModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvc21hcnQtZWRpdC9zbWFydC1lZGl0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLE1BQU0sZUFBZSxDQUFDO0FBRTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RDtJQUFBO0lBUUEsQ0FBQzs7OztJQU5RLHVCQUFPOzs7SUFBZDtRQUNFLE9BQU87WUFDTCxRQUFRLEVBQUUsZUFBZTtZQUN6QixTQUFTLG1CQUFNLFlBQVksQ0FBQztTQUM3QixDQUFDO0lBQ0osQ0FBQzs7Z0JBUEYsUUFBUSxTQUFDLEVBQUU7O0lBUVosc0JBQUM7Q0FBQSxBQVJELElBUUM7U0FQWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaW50ZXJjZXB0b3JzIH0gZnJvbSAnLi9odHRwLWludGVyY2VwdG9ycy9pbmRleCc7XG5cbkBOZ01vZHVsZSh7fSlcbmV4cG9ydCBjbGFzcyBTbWFydEVkaXRNb2R1bGUge1xuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge1xuICAgICAgbmdNb2R1bGU6IFNtYXJ0RWRpdE1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogWy4uLmludGVyY2VwdG9yc10sXG4gICAgfTtcbiAgfVxufVxuIl19