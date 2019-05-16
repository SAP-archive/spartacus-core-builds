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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHaEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7QUFFOUQ7SUFJRSwrQkFDWSx5QkFBb0QsRUFDcEQsT0FBNEI7UUFENUIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCxZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUNyQyxDQUFDOzs7Ozs7O0lBRUosbUNBQUc7Ozs7OztJQUFILFVBQ0UsRUFBVSxFQUNWLFdBQXdCO1FBRjFCLGlCQWFDO1FBVEMsT0FBTyxJQUFJLENBQUMseUJBQXlCO2FBQ2xDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQzthQUMxQixJQUFJLENBQ0gsU0FBUyxDQUFDLFVBQUEsbUJBQW1CO1lBQzNCLE9BQUEsbUJBQW1CO2dCQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUN6QixDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQztRQUZ0QyxDQUVzQyxDQUN2QyxDQUNGLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFFRCx1Q0FBTzs7Ozs7SUFBUCxVQUFRLEdBQWEsRUFBRSxXQUF3QjtRQUEvQyxpQkE0QkM7UUEzQkMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyRSxTQUFTLENBQUMsVUFBQSxvQkFBb0I7OztnQkFFdEIsVUFBVSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FDNUMsVUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUs7Z0JBQ3BCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQ0QsRUFBRSxDQUNIO1lBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekIsT0FBTyxLQUFJLENBQUMsT0FBTztxQkFDaEIsbUJBQW1CLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztxQkFDNUMsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFBLGdCQUFnQixJQUFJLHdCQUNuQixvQkFBb0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ3BDLGdCQUFnQixHQUZHLENBR3ZCLENBQUMsQ0FDSCxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUNqQztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFwREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFMUSx5QkFBeUI7Z0JBQ3pCLG1CQUFtQjs7O2dDQU41QjtDQTZEQyxBQXJERCxJQXFEQztTQWxEWSxxQkFBcUI7Ozs7OztJQUU5QiwwREFBOEQ7Ozs7O0lBQzlELHdDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbXMtc3RydWN0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudEFkYXB0ZXIgfSBmcm9tICcuL2Ntcy1jb21wb25lbnQuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNDb21wb25lbnRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU3RydWN0dXJlQ29uZmlnU2VydmljZTogQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogQ21zQ29tcG9uZW50QWRhcHRlclxuICApIHt9XG5cbiAgZ2V0PFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb21wb25lbnRGcm9tQ29uZmlnKGlkKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChjb25maWd1cmVkQ29tcG9uZW50ID0+XG4gICAgICAgICAgY29uZmlndXJlZENvbXBvbmVudFxuICAgICAgICAgICAgPyBvZihjb25maWd1cmVkQ29tcG9uZW50KVxuICAgICAgICAgICAgOiB0aGlzLmFkYXB0ZXIubG9hZChpZCwgcGFnZUNvbnRleHQpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICBnZXRMaXN0KGlkczogc3RyaW5nW10sIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLmdldENvbXBvbmVudHNGcm9tQ29uZmlnKGlkcykucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb25maWd1cmVkQ29tcG9uZW50cyA9PiB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgc29tZSBjb21wb25lbnRzIHRoYXQgYXJlIG5vdCBsb2FkZWQgZnJvbSBjb25maWd1cmF0aW9uXG4gICAgICAgIGNvbnN0IG1pc3NpbmdJZHMgPSBjb25maWd1cmVkQ29tcG9uZW50cy5yZWR1Y2UoXG4gICAgICAgICAgKGFjYywgY29tcG9uZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGFjYy5wdXNoKGlkc1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtdXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKG1pc3NpbmdJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmFkYXB0ZXJcbiAgICAgICAgICAgIC5maW5kQ29tcG9uZW50c0J5SWRzKG1pc3NpbmdJZHMsIHBhZ2VDb250ZXh0KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcChsb2FkZWRDb21wb25lbnRzID0+IFtcbiAgICAgICAgICAgICAgICAuLi5jb25maWd1cmVkQ29tcG9uZW50cy5maWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgICAgICAgLi4ubG9hZGVkQ29tcG9uZW50cyxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKGNvbmZpZ3VyZWRDb21wb25lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=