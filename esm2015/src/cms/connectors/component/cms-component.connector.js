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
export class CmsComponentConnector {
    constructor(cmsStructureConfigService, cmsComponentAdapter, config) {
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.cmsComponentAdapter = cmsComponentAdapter;
        this.config = config;
    }
    get(id, pageContext) {
        return this.cmsStructureConfigService
            .getComponentFromConfig(id)
            .pipe(switchMap((configuredComponent) => configuredComponent
            ? of(configuredComponent)
            : this.cmsComponentAdapter.load(id, pageContext)));
    }
    getList(ids, pageContext) {
        return this.cmsStructureConfigService.getComponentsFromConfig(ids).pipe(switchMap((configuredComponents) => {
            // check if we have some components that are not loaded from configuration
            const missingIds = configuredComponents.reduce((acc, component, index) => {
                if (component === undefined) {
                    acc.push(ids[index]);
                }
                return acc;
            }, []);
            if (missingIds.length > 0) {
                return this.cmsComponentAdapter
                    .findComponentsByIds(missingIds, pageContext)
                    .pipe(map((loadedComponents) => [
                    ...configuredComponents.filter(Boolean),
                    ...loadedComponents,
                ]));
            }
            else {
                return of(configuredComponents);
            }
        }));
    }
}
CmsComponentConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsComponentConnector_Factory() { return new CmsComponentConnector(i0.ɵɵinject(i1.CmsStructureConfigService), i0.ɵɵinject(i2.CmsComponentAdapter), i0.ɵɵinject(i3.OccConfig)); }, token: CmsComponentConnector, providedIn: "root" });
CmsComponentConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CmsComponentConnector.ctorParameters = () => [
    { type: CmsStructureConfigService },
    { type: CmsComponentAdapter },
    { type: OccConfig }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy9jbXMvY29ubmVjdG9ycy9jb21wb25lbnQvY21zLWNvbXBvbmVudC5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RDLE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTNELE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBQ3hGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztBQUs5RCxNQUFNLE9BQU8scUJBQXFCO0lBQ2hDLFlBQ1kseUJBQW9ELEVBQ3BELG1CQUF3QyxFQUN4QyxNQUFpQjtRQUZqQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFDeEMsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUMxQixDQUFDO0lBRUosR0FBRyxDQUNELEVBQVUsRUFDVixXQUF3QjtRQUV4QixPQUFPLElBQUksQ0FBQyx5QkFBeUI7YUFDbEMsc0JBQXNCLENBQUMsRUFBRSxDQUFDO2FBQzFCLElBQUksQ0FDSCxTQUFTLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQ2hDLG1CQUFtQjtZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsQ0FDbkQsQ0FDRixDQUFDO0lBQ04sQ0FBQztJQUVELE9BQU8sQ0FBQyxHQUFhLEVBQUUsV0FBd0I7UUFDN0MsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyRSxTQUFTLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFO1lBQ2pDLDBFQUEwRTtZQUMxRSxNQUFNLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQzVDLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO29CQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsRUFDRCxFQUFFLENBQ0gsQ0FBQztZQUVGLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDLG1CQUFtQjtxQkFDNUIsbUJBQW1CLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztxQkFDNUMsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsQ0FBQztvQkFDeEIsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUN2QyxHQUFHLGdCQUFnQjtpQkFDcEIsQ0FBQyxDQUNILENBQUM7YUFDTDtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7WUFyREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFMUSx5QkFBeUI7WUFDekIsbUJBQW1CO1lBSG5CLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vb2NjL2NvbmZpZy9vY2MtY29uZmlnJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbXMtc3RydWN0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc0NvbXBvbmVudEFkYXB0ZXIgfSBmcm9tICcuL2Ntcy1jb21wb25lbnQuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDbXNDb21wb25lbnRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU3RydWN0dXJlQ29uZmlnU2VydmljZTogQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgY21zQ29tcG9uZW50QWRhcHRlcjogQ21zQ29tcG9uZW50QWRhcHRlcixcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBPY2NDb25maWdcbiAgKSB7fVxuXG4gIGdldDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICBpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29tcG9uZW50RnJvbUNvbmZpZyhpZClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoKGNvbmZpZ3VyZWRDb21wb25lbnQpID0+XG4gICAgICAgICAgY29uZmlndXJlZENvbXBvbmVudFxuICAgICAgICAgICAgPyBvZihjb25maWd1cmVkQ29tcG9uZW50KVxuICAgICAgICAgICAgOiB0aGlzLmNtc0NvbXBvbmVudEFkYXB0ZXIubG9hZChpZCwgcGFnZUNvbnRleHQpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICBnZXRMaXN0KGlkczogc3RyaW5nW10sIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLmdldENvbXBvbmVudHNGcm9tQ29uZmlnKGlkcykucGlwZShcbiAgICAgIHN3aXRjaE1hcCgoY29uZmlndXJlZENvbXBvbmVudHMpID0+IHtcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBzb21lIGNvbXBvbmVudHMgdGhhdCBhcmUgbm90IGxvYWRlZCBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uc3QgbWlzc2luZ0lkcyA9IGNvbmZpZ3VyZWRDb21wb25lbnRzLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBjb21wb25lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgYWNjLnB1c2goaWRzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW11cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAobWlzc2luZ0lkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuY21zQ29tcG9uZW50QWRhcHRlclxuICAgICAgICAgICAgLmZpbmRDb21wb25lbnRzQnlJZHMobWlzc2luZ0lkcywgcGFnZUNvbnRleHQpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKChsb2FkZWRDb21wb25lbnRzKSA9PiBbXG4gICAgICAgICAgICAgICAgLi4uY29uZmlndXJlZENvbXBvbmVudHMuZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgICAgICAgIC4uLmxvYWRlZENvbXBvbmVudHMsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihjb25maWd1cmVkQ29tcG9uZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19