/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsStructureConfigService } from '../../services/cms-structure-config.service';
import { CmsComponentAdapter } from './cms-component.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../../services/cms-structure-config.service";
import * as i2 from "./cms-component.adapter";
var CmsComponentConnector = /** @class */ (function () {
    function CmsComponentConnector(cmsStructureConfigService, adapter) {
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.adapter = adapter;
    }
    /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    CmsComponentConnector.prototype.get = /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    function (id, pageContext) {
        var _this = this;
        return this.cmsStructureConfigService
            .getComponentFromConfig(id)
            .pipe(switchMap(function (configuredComponent) {
            return configuredComponent
                ? of(configuredComponent)
                : _this.adapter.load(id, pageContext);
        }));
    };
    /**
     * @param {?} ids
     * @param {?} pageContext
     * @return {?}
     */
    CmsComponentConnector.prototype.getList = /**
     * @param {?} ids
     * @param {?} pageContext
     * @return {?}
     */
    function (ids, pageContext) {
        var _this = this;
        return this.cmsStructureConfigService.getComponentsFromConfig(ids).pipe(switchMap(function (configuredComponents) {
            // check if we have some components that are not loaded from configuration
            /** @type {?} */
            var missingIds = configuredComponents.reduce(function (acc, component, index) {
                if (component === undefined) {
                    acc.push(ids[index]);
                }
                return acc;
            }, []);
            if (missingIds.length > 0) {
                return _this.adapter
                    .findComponentsByIds(missingIds, pageContext)
                    .pipe(map(function (loadedComponents) { return tslib_1.__spread(configuredComponents.filter(Boolean), loadedComponents); }));
            }
            else {
                return of(configuredComponents);
            }
        }));
    };
    CmsComponentConnector.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CmsComponentConnector.ctorParameters = function () { return [
        { type: CmsStructureConfigService },
        { type: CmsComponentAdapter }
    ]; };
    /** @nocollapse */ CmsComponentConnector.ngInjectableDef = i0.defineInjectable({ factory: function CmsComponentConnector_Factory() { return new CmsComponentConnector(i0.inject(i1.CmsStructureConfigService), i0.inject(i2.CmsComponentAdapter)); }, token: CmsComponentConnector, providedIn: "root" });
    return CmsComponentConnector;
}());
export { CmsComponentConnector };
if (false) {
    /**
     * @type {?}
     * @protected
     */
    CmsComponentConnector.prototype.cmsStructureConfigService;
    /**
     * @type {?}
     * @protected
     */
    CmsComponentConnector.prototype.adapter;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHaEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFOUQ7SUFJRSwrQkFDWSx5QkFBb0QsRUFDcEQsT0FBNEI7UUFENUIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCxZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUNyQyxDQUFDOzs7Ozs7O0lBRUosbUNBQUc7Ozs7OztJQUFILFVBQ0UsRUFBVSxFQUNWLFdBQXdCO1FBRjFCLGlCQWFDO1FBVEMsT0FBTyxJQUFJLENBQUMseUJBQXlCO2FBQ2xDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQzthQUMxQixJQUFJLENBQ0gsU0FBUyxDQUFDLFVBQUEsbUJBQW1CO1lBQzNCLE9BQUEsbUJBQW1CO2dCQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUN6QixDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQztRQUZ0QyxDQUVzQyxDQUN2QyxDQUNGLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFFRCx1Q0FBTzs7Ozs7SUFBUCxVQUFRLEdBQWEsRUFBRSxXQUF3QjtRQUEvQyxpQkE0QkM7UUEzQkMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyRSxTQUFTLENBQUMsVUFBQSxvQkFBb0I7OztnQkFFdEIsVUFBVSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FDNUMsVUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUs7Z0JBQ3BCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQ0QsRUFBRSxDQUNIO1lBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekIsT0FBTyxLQUFJLENBQUMsT0FBTztxQkFDaEIsbUJBQW1CLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztxQkFDNUMsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLGdCQUFnQixJQUFJLHdCQUNuQixvQkFBb0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ3BDLGdCQUFnQixHQUZHLENBR3ZCLENBQUMsQ0FDSCxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUNqQztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFwREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSx5QkFBeUI7Z0JBQ3pCLG1CQUFtQjs7O2dDQU41QjtDQTZEQyxBQXJERCxJQXFEQztTQWxEWSxxQkFBcUI7Ozs7OztJQUU5QiwwREFBOEQ7Ozs7O0lBQzlELHdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRBZGFwdGVyIH0gZnJvbSAnLi9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zQ29tcG9uZW50Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U6IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IENtc0NvbXBvbmVudEFkYXB0ZXJcbiAgKSB7fVxuXG4gIGdldDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICBpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29tcG9uZW50RnJvbUNvbmZpZyhpZClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoY29uZmlndXJlZENvbXBvbmVudCA9PlxuICAgICAgICAgIGNvbmZpZ3VyZWRDb21wb25lbnRcbiAgICAgICAgICAgID8gb2YoY29uZmlndXJlZENvbXBvbmVudClcbiAgICAgICAgICAgIDogdGhpcy5hZGFwdGVyLmxvYWQoaWQsIHBhZ2VDb250ZXh0KVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgZ2V0TGlzdChpZHM6IHN0cmluZ1tdLCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZS5nZXRDb21wb25lbnRzRnJvbUNvbmZpZyhpZHMpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY29uZmlndXJlZENvbXBvbmVudHMgPT4ge1xuICAgICAgICAvLyBjaGVjayBpZiB3ZSBoYXZlIHNvbWUgY29tcG9uZW50cyB0aGF0IGFyZSBub3QgbG9hZGVkIGZyb20gY29uZmlndXJhdGlvblxuICAgICAgICBjb25zdCBtaXNzaW5nSWRzID0gY29uZmlndXJlZENvbXBvbmVudHMucmVkdWNlKFxuICAgICAgICAgIChhY2MsIGNvbXBvbmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBhY2MucHVzaChpZHNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChtaXNzaW5nSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXG4gICAgICAgICAgICAuZmluZENvbXBvbmVudHNCeUlkcyhtaXNzaW5nSWRzLCBwYWdlQ29udGV4dClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtYXAobG9hZGVkQ29tcG9uZW50cyA9PiBbXG4gICAgICAgICAgICAgICAgLi4uY29uZmlndXJlZENvbXBvbmVudHMuZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgICAgICAgIC4uLmxvYWRlZENvbXBvbmVudHMsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihjb25maWd1cmVkQ29tcG9uZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19