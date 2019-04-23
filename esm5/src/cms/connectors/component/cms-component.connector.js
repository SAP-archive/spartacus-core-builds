/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsComponentAdapter } from './cms-component.adapter';
import { CmsStructureConfigService } from '../../services/cms-structure-config.service';
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
                    .loadList(missingIds, pageContext)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7Ozs7QUFHeEY7SUFJRSwrQkFDWSx5QkFBb0QsRUFDcEQsT0FBNEI7UUFENUIsOEJBQXlCLEdBQXpCLHlCQUF5QixDQUEyQjtRQUNwRCxZQUFPLEdBQVAsT0FBTyxDQUFxQjtJQUNyQyxDQUFDOzs7Ozs7O0lBRUosbUNBQUc7Ozs7OztJQUFILFVBQ0UsRUFBVSxFQUNWLFdBQXdCO1FBRjFCLGlCQWFDO1FBVEMsT0FBTyxJQUFJLENBQUMseUJBQXlCO2FBQ2xDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQzthQUMxQixJQUFJLENBQ0gsU0FBUyxDQUFDLFVBQUEsbUJBQW1CO1lBQzNCLE9BQUEsbUJBQW1CO2dCQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUN6QixDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQztRQUZ0QyxDQUVzQyxDQUN2QyxDQUNGLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFFRCx1Q0FBTzs7Ozs7SUFBUCxVQUFRLEdBQWEsRUFBRSxXQUF3QjtRQUEvQyxpQkE0QkM7UUEzQkMsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyRSxTQUFTLENBQUMsVUFBQSxvQkFBb0I7OztnQkFFdEIsVUFBVSxHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FDNUMsVUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUs7Z0JBQ3BCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQ0QsRUFBRSxDQUNIO1lBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekIsT0FBTyxLQUFJLENBQUMsT0FBTztxQkFDaEIsUUFBUSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUM7cUJBQ2pDLElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQSxnQkFBZ0IsSUFBSSx3QkFDbkIsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNwQyxnQkFBZ0IsR0FGRyxDQUd2QixDQUFDLENBQ0gsQ0FBQzthQUNMO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Z0JBcERGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBTFEseUJBQXlCO2dCQUR6QixtQkFBbUI7OztnQ0FKNUI7Q0E2REMsQUFyREQsSUFxREM7U0FsRFkscUJBQXFCOzs7Ozs7SUFFOUIsMERBQThEOzs7OztJQUM5RCx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRBZGFwdGVyIH0gZnJvbSAnLi9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1zdHJ1Y3R1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zQ29tcG9uZW50Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U6IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IENtc0NvbXBvbmVudEFkYXB0ZXJcbiAgKSB7fVxuXG4gIGdldDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICBpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29tcG9uZW50RnJvbUNvbmZpZyhpZClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoY29uZmlndXJlZENvbXBvbmVudCA9PlxuICAgICAgICAgIGNvbmZpZ3VyZWRDb21wb25lbnRcbiAgICAgICAgICAgID8gb2YoY29uZmlndXJlZENvbXBvbmVudClcbiAgICAgICAgICAgIDogdGhpcy5hZGFwdGVyLmxvYWQoaWQsIHBhZ2VDb250ZXh0KVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgZ2V0TGlzdChpZHM6IHN0cmluZ1tdLCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZS5nZXRDb21wb25lbnRzRnJvbUNvbmZpZyhpZHMpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY29uZmlndXJlZENvbXBvbmVudHMgPT4ge1xuICAgICAgICAvLyBjaGVjayBpZiB3ZSBoYXZlIHNvbWUgY29tcG9uZW50cyB0aGF0IGFyZSBub3QgbG9hZGVkIGZyb20gY29uZmlndXJhdGlvblxuICAgICAgICBjb25zdCBtaXNzaW5nSWRzID0gY29uZmlndXJlZENvbXBvbmVudHMucmVkdWNlKFxuICAgICAgICAgIChhY2MsIGNvbXBvbmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBhY2MucHVzaChpZHNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChtaXNzaW5nSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXG4gICAgICAgICAgICAubG9hZExpc3QobWlzc2luZ0lkcywgcGFnZUNvbnRleHQpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKGxvYWRlZENvbXBvbmVudHMgPT4gW1xuICAgICAgICAgICAgICAgIC4uLmNvbmZpZ3VyZWRDb21wb25lbnRzLmZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICAgICAgICAuLi5sb2FkZWRDb21wb25lbnRzLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YoY29uZmlndXJlZENvbXBvbmVudHMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==