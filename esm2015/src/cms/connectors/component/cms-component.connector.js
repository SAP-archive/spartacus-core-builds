import { __decorate } from "tslib";
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
let CmsComponentConnector = class CmsComponentConnector {
    constructor(cmsStructureConfigService, adapter, config) {
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.adapter = adapter;
        this.config = config;
    }
    get(id, pageContext) {
        return this.cmsStructureConfigService
            .getComponentFromConfig(id)
            .pipe(switchMap(configuredComponent => configuredComponent
            ? of(configuredComponent)
            : this.adapter.load(id, pageContext)));
    }
    getList(ids, pageContext) {
        return this.cmsStructureConfigService.getComponentsFromConfig(ids).pipe(switchMap(configuredComponents => {
            // check if we have some components that are not loaded from configuration
            const missingIds = configuredComponents.reduce((acc, component, index) => {
                if (component === undefined) {
                    acc.push(ids[index]);
                }
                return acc;
            }, []);
            if (missingIds.length > 0) {
                return (this.config.backend.occ.legacy
                    ? this.adapter.findComponentsByIdsLegacy(missingIds, pageContext)
                    : this.adapter.findComponentsByIds(missingIds, pageContext)).pipe(map(loadedComponents => [
                    ...configuredComponents.filter(Boolean),
                    ...loadedComponents,
                ]));
            }
            else {
                return of(configuredComponents);
            }
        }));
    }
};
CmsComponentConnector.ctorParameters = () => [
    { type: CmsStructureConfigService },
    { type: CmsComponentAdapter },
    { type: OccConfig }
];
CmsComponentConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsComponentConnector_Factory() { return new CmsComponentConnector(i0.ɵɵinject(i1.CmsStructureConfigService), i0.ɵɵinject(i2.CmsComponentAdapter), i0.ɵɵinject(i3.OccConfig)); }, token: CmsComponentConnector, providedIn: "root" });
CmsComponentConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CmsComponentConnector);
export { CmsComponentConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFM0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBSzlELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBQ2hDLFlBQ1kseUJBQW9ELEVBQ3BELE9BQTRCLEVBQzVCLE1BQWlCO1FBRmpCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUMxQixDQUFDO0lBRUosR0FBRyxDQUNELEVBQVUsRUFDVixXQUF3QjtRQUV4QixPQUFPLElBQUksQ0FBQyx5QkFBeUI7YUFDbEMsc0JBQXNCLENBQUMsRUFBRSxDQUFDO2FBQzFCLElBQUksQ0FDSCxTQUFTLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUM5QixtQkFBbUI7WUFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztZQUN6QixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUN2QyxDQUNGLENBQUM7SUFDTixDQUFDO0lBRUQsT0FBTyxDQUFDLEdBQWEsRUFBRSxXQUF3QjtRQUM3QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3JFLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQy9CLDBFQUEwRTtZQUMxRSxNQUFNLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQzVDLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDeEIsSUFBSSxTQUFTLEtBQUssU0FBUyxFQUFFO29CQUMzQixHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxPQUFPLEdBQUcsQ0FBQztZQUNiLENBQUMsRUFDRCxFQUFFLENBQ0gsQ0FBQztZQUVGLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTTtvQkFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztvQkFDakUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUM1RCxDQUFDLElBQUksQ0FDSixHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO29CQUN0QixHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQ3ZDLEdBQUcsZ0JBQWdCO2lCQUNwQixDQUFDLENBQ0gsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBbER3Qyx5QkFBeUI7WUFDM0MsbUJBQW1CO1lBQ3BCLFNBQVM7OztBQUpsQixxQkFBcUI7SUFIakMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHFCQUFxQixDQW9EakM7U0FwRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRBZGFwdGVyIH0gZnJvbSAnLi9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zQ29tcG9uZW50Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U6IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IENtc0NvbXBvbmVudEFkYXB0ZXIsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnXG4gICkge31cblxuICBnZXQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZVxuICAgICAgLmdldENvbXBvbmVudEZyb21Db25maWcoaWQpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGNvbmZpZ3VyZWRDb21wb25lbnQgPT5cbiAgICAgICAgICBjb25maWd1cmVkQ29tcG9uZW50XG4gICAgICAgICAgICA/IG9mKGNvbmZpZ3VyZWRDb21wb25lbnQpXG4gICAgICAgICAgICA6IHRoaXMuYWRhcHRlci5sb2FkKGlkLCBwYWdlQ29udGV4dClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldExpc3QoaWRzOiBzdHJpbmdbXSwgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLmNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UuZ2V0Q29tcG9uZW50c0Zyb21Db25maWcoaWRzKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNvbmZpZ3VyZWRDb21wb25lbnRzID0+IHtcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBzb21lIGNvbXBvbmVudHMgdGhhdCBhcmUgbm90IGxvYWRlZCBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uc3QgbWlzc2luZ0lkcyA9IGNvbmZpZ3VyZWRDb21wb25lbnRzLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBjb21wb25lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgYWNjLnB1c2goaWRzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW11cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAobWlzc2luZ0lkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuICh0aGlzLmNvbmZpZy5iYWNrZW5kLm9jYy5sZWdhY3lcbiAgICAgICAgICAgID8gdGhpcy5hZGFwdGVyLmZpbmRDb21wb25lbnRzQnlJZHNMZWdhY3kobWlzc2luZ0lkcywgcGFnZUNvbnRleHQpXG4gICAgICAgICAgICA6IHRoaXMuYWRhcHRlci5maW5kQ29tcG9uZW50c0J5SWRzKG1pc3NpbmdJZHMsIHBhZ2VDb250ZXh0KVxuICAgICAgICAgICkucGlwZShcbiAgICAgICAgICAgIG1hcChsb2FkZWRDb21wb25lbnRzID0+IFtcbiAgICAgICAgICAgICAgLi4uY29uZmlndXJlZENvbXBvbmVudHMuZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgICAgICAuLi5sb2FkZWRDb21wb25lbnRzLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihjb25maWd1cmVkQ29tcG9uZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19