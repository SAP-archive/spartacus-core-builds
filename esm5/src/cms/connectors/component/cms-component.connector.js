import { __decorate, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { OccConfig } from '../../../occ/config/occ-config';
import { CmsStructureConfigService } from '../../services/cms-structure-config.service';
import { CmsComponentAdapter } from './cms-component.adapter';
import * as i0 from "@angular/core";
import * as i1 from "../../services/cms-structure-config.service";
import * as i2 from "./cms-component.adapter";
import * as i3 from "../../../occ/config/occ-config";
var CmsComponentConnector = /** @class */ (function () {
    function CmsComponentConnector(cmsStructureConfigService, adapter, config) {
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.adapter = adapter;
        this.config = config;
    }
    CmsComponentConnector.prototype.get = function (id, pageContext) {
        var _this = this;
        return this.cmsStructureConfigService
            .getComponentFromConfig(id)
            .pipe(switchMap(function (configuredComponent) {
            return configuredComponent
                ? of(configuredComponent)
                : _this.adapter.load(id, pageContext);
        }));
    };
    CmsComponentConnector.prototype.getList = function (ids, pageContext) {
        var _this = this;
        return this.cmsStructureConfigService.getComponentsFromConfig(ids).pipe(switchMap(function (configuredComponents) {
            // check if we have some components that are not loaded from configuration
            var missingIds = configuredComponents.reduce(function (acc, component, index) {
                if (component === undefined) {
                    acc.push(ids[index]);
                }
                return acc;
            }, []);
            if (missingIds.length > 0) {
                return (_this.config.backend.occ.legacy
                    ? _this.adapter.findComponentsByIdsLegacy(missingIds, pageContext)
                    : _this.adapter.findComponentsByIds(missingIds, pageContext)).pipe(map(function (loadedComponents) { return __spread(configuredComponents.filter(Boolean), loadedComponents); }));
            }
            else {
                return of(configuredComponents);
            }
        }));
    };
    CmsComponentConnector.ctorParameters = function () { return [
        { type: CmsStructureConfigService },
        { type: CmsComponentAdapter },
        { type: OccConfig }
    ]; };
    CmsComponentConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsComponentConnector_Factory() { return new CmsComponentConnector(i0.ɵɵinject(i1.CmsStructureConfigService), i0.ɵɵinject(i2.CmsComponentAdapter), i0.ɵɵinject(i3.OccConfig)); }, token: CmsComponentConnector, providedIn: "root" });
    CmsComponentConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CmsComponentConnector);
    return CmsComponentConnector;
}());
export { CmsComponentConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFM0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBSzlEO0lBQ0UsK0JBQ1kseUJBQW9ELEVBQ3BELE9BQTRCLEVBQzVCLE1BQWlCO1FBRmpCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUMxQixDQUFDO0lBRUosbUNBQUcsR0FBSCxVQUNFLEVBQVUsRUFDVixXQUF3QjtRQUYxQixpQkFhQztRQVRDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUNsQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUM7YUFDMUIsSUFBSSxDQUNILFNBQVMsQ0FBQyxVQUFDLG1CQUFtQjtZQUM1QixPQUFBLG1CQUFtQjtnQkFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUM7UUFGdEMsQ0FFc0MsQ0FDdkMsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVELHVDQUFPLEdBQVAsVUFBUSxHQUFhLEVBQUUsV0FBd0I7UUFBL0MsaUJBNkJDO1FBNUJDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDckUsU0FBUyxDQUFDLFVBQUMsb0JBQW9CO1lBQzdCLDBFQUEwRTtZQUMxRSxJQUFNLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQzVDLFVBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLO2dCQUNwQixJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7b0JBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3RCO2dCQUNELE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxFQUNELEVBQUUsQ0FDSCxDQUFDO1lBRUYsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekIsT0FBTyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNO29CQUNwQyxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDO29CQUNqRSxDQUFDLENBQUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLEVBQUUsV0FBVyxDQUFDLENBQzVELENBQUMsSUFBSSxDQUNKLEdBQUcsQ0FBQyxVQUFDLGdCQUFnQixJQUFLLGdCQUNyQixvQkFBb0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ3BDLGdCQUFnQixHQUZLLENBR3pCLENBQUMsQ0FDSCxDQUFDO2FBQ0g7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUNqQztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOztnQkFqRHNDLHlCQUF5QjtnQkFDM0MsbUJBQW1CO2dCQUNwQixTQUFTOzs7SUFKbEIscUJBQXFCO1FBSGpDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxxQkFBcUIsQ0FvRGpDO2dDQWhFRDtDQWdFQyxBQXBERCxJQW9EQztTQXBEWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbXMtc3RydWN0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudEFkYXB0ZXIgfSBmcm9tICcuL2Ntcy1jb21wb25lbnQuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNDb21wb25lbnRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU3RydWN0dXJlQ29uZmlnU2VydmljZTogQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYWRhcHRlcjogQ21zQ29tcG9uZW50QWRhcHRlcixcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWdcbiAgKSB7fVxuXG4gIGdldDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICBpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29tcG9uZW50RnJvbUNvbmZpZyhpZClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGNvbmZpZ3VyZWRDb21wb25lbnQpID0+XG4gICAgICAgICAgY29uZmlndXJlZENvbXBvbmVudFxuICAgICAgICAgICAgPyBvZihjb25maWd1cmVkQ29tcG9uZW50KVxuICAgICAgICAgICAgOiB0aGlzLmFkYXB0ZXIubG9hZChpZCwgcGFnZUNvbnRleHQpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICBnZXRMaXN0KGlkczogc3RyaW5nW10sIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLmdldENvbXBvbmVudHNGcm9tQ29uZmlnKGlkcykucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY29uZmlndXJlZENvbXBvbmVudHMpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBzb21lIGNvbXBvbmVudHMgdGhhdCBhcmUgbm90IGxvYWRlZCBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uc3QgbWlzc2luZ0lkcyA9IGNvbmZpZ3VyZWRDb21wb25lbnRzLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBjb21wb25lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgYWNjLnB1c2goaWRzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW11cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAobWlzc2luZ0lkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5sZWdhY3lcbiAgICAgICAgICAgID8gdGhpcy5hZGFwdGVyLmZpbmRDb21wb25lbnRzQnlJZHNMZWdhY3kobWlzc2luZ0lkcywgcGFnZUNvbnRleHQpXG4gICAgICAgICAgICA6IHRoaXMuYWRhcHRlci5maW5kQ29tcG9uZW50c0J5SWRzKG1pc3NpbmdJZHMsIHBhZ2VDb250ZXh0KVxuICAgICAgICAgICkucGlwZShcbiAgICAgICAgICAgIG1hcCgobG9hZGVkQ29tcG9uZW50cykgPT4gW1xuICAgICAgICAgICAgICAuLi5jb25maWd1cmVkQ29tcG9uZW50cy5maWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgICAgIC4uLmxvYWRlZENvbXBvbmVudHMsXG4gICAgICAgICAgICBdKVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKGNvbmZpZ3VyZWRDb21wb25lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=