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
            .pipe(switchMap((configuredComponent) => configuredComponent
            ? of(configuredComponent)
            : this.adapter.load(id, pageContext)));
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
                return (this.config.backend.occ.legacy
                    ? this.adapter.findComponentsByIdsLegacy(missingIds, pageContext)
                    : this.adapter.findComponentsByIds(missingIds, pageContext)).pipe(map((loadedComponents) => [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFM0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBSzlELElBQWEscUJBQXFCLEdBQWxDLE1BQWEscUJBQXFCO0lBQ2hDLFlBQ1kseUJBQW9ELEVBQ3BELE9BQTRCLEVBQzVCLE1BQWlCO1FBRmpCLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFDcEQsWUFBTyxHQUFQLE9BQU8sQ0FBcUI7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUMxQixDQUFDO0lBRUosR0FBRyxDQUNELEVBQVUsRUFDVixXQUF3QjtRQUV4QixPQUFPLElBQUksQ0FBQyx5QkFBeUI7YUFDbEMsc0JBQXNCLENBQUMsRUFBRSxDQUFDO2FBQzFCLElBQUksQ0FDSCxTQUFTLENBQUMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLENBQ2hDLG1CQUFtQjtZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQ3ZDLENBQ0YsQ0FBQztJQUNOLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBYSxFQUFFLFdBQXdCO1FBQzdDLE9BQU8sSUFBSSxDQUFDLHlCQUF5QixDQUFDLHVCQUF1QixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FDckUsU0FBUyxDQUFDLENBQUMsb0JBQW9CLEVBQUUsRUFBRTtZQUNqQywwRUFBMEU7WUFDMUUsTUFBTSxVQUFVLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUM1QyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQ0QsRUFBRSxDQUNILENBQUM7WUFFRixJQUFJLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QixPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07b0JBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUM7b0JBQ2pFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLG1CQUFtQixDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FDNUQsQ0FBQyxJQUFJLENBQ0osR0FBRyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsRUFBRSxDQUFDO29CQUN4QixHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQ3ZDLEdBQUcsZ0JBQWdCO2lCQUNwQixDQUFDLENBQ0gsQ0FBQzthQUNIO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7O1lBbER3Qyx5QkFBeUI7WUFDM0MsbUJBQW1CO1lBQ3BCLFNBQVM7OztBQUpsQixxQkFBcUI7SUFIakMsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLHFCQUFxQixDQW9EakM7U0FwRFkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IE9jY0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uL29jYy9jb25maWcvb2NjLWNvbmZpZyc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRBZGFwdGVyIH0gZnJvbSAnLi9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zQ29tcG9uZW50Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U6IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IENtc0NvbXBvbmVudEFkYXB0ZXIsXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnXG4gICkge31cblxuICBnZXQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZVxuICAgICAgLmdldENvbXBvbmVudEZyb21Db25maWcoaWQpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKChjb25maWd1cmVkQ29tcG9uZW50KSA9PlxuICAgICAgICAgIGNvbmZpZ3VyZWRDb21wb25lbnRcbiAgICAgICAgICAgID8gb2YoY29uZmlndXJlZENvbXBvbmVudClcbiAgICAgICAgICAgIDogdGhpcy5hZGFwdGVyLmxvYWQoaWQsIHBhZ2VDb250ZXh0KVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgZ2V0TGlzdChpZHM6IHN0cmluZ1tdLCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZS5nZXRDb21wb25lbnRzRnJvbUNvbmZpZyhpZHMpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoKGNvbmZpZ3VyZWRDb21wb25lbnRzKSA9PiB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgc29tZSBjb21wb25lbnRzIHRoYXQgYXJlIG5vdCBsb2FkZWQgZnJvbSBjb25maWd1cmF0aW9uXG4gICAgICAgIGNvbnN0IG1pc3NpbmdJZHMgPSBjb25maWd1cmVkQ29tcG9uZW50cy5yZWR1Y2UoXG4gICAgICAgICAgKGFjYywgY29tcG9uZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGFjYy5wdXNoKGlkc1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtdXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKG1pc3NpbmdJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiAodGhpcy5jb25maWcuYmFja2VuZC5vY2MubGVnYWN5XG4gICAgICAgICAgICA/IHRoaXMuYWRhcHRlci5maW5kQ29tcG9uZW50c0J5SWRzTGVnYWN5KG1pc3NpbmdJZHMsIHBhZ2VDb250ZXh0KVxuICAgICAgICAgICAgOiB0aGlzLmFkYXB0ZXIuZmluZENvbXBvbmVudHNCeUlkcyhtaXNzaW5nSWRzLCBwYWdlQ29udGV4dClcbiAgICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBtYXAoKGxvYWRlZENvbXBvbmVudHMpID0+IFtcbiAgICAgICAgICAgICAgLi4uY29uZmlndXJlZENvbXBvbmVudHMuZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgICAgICAuLi5sb2FkZWRDb21wb25lbnRzLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihjb25maWd1cmVkQ29tcG9uZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19