/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsComponentAdapter } from './cms-component.adapter';
import { CmsStructureConfigService } from '../../services/cms-structure-config.service';
import * as i0 from "@angular/core";
import * as i1 from "../../services/cms-structure-config.service";
import * as i2 from "./cms-component.adapter";
export class CmsComponentConnector {
    /**
     * @param {?} cmsStructureConfigService
     * @param {?} adapter
     */
    constructor(cmsStructureConfigService, adapter) {
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.adapter = adapter;
    }
    /**
     * @template T
     * @param {?} id
     * @param {?} pageContext
     * @return {?}
     */
    get(id, pageContext) {
        return this.cmsStructureConfigService
            .getComponentFromConfig(id)
            .pipe(switchMap(configuredComponent => configuredComponent
            ? of(configuredComponent)
            : this.adapter.load(id, pageContext)));
    }
    /**
     * @param {?} ids
     * @param {?} pageContext
     * @return {?}
     */
    getList(ids, pageContext) {
        return this.cmsStructureConfigService.getComponentsFromConfig(ids).pipe(switchMap(configuredComponents => {
            // check if we have some components that are not loaded from configuration
            /** @type {?} */
            const missingIds = configuredComponents.reduce((acc, component, index) => {
                if (component === undefined) {
                    acc.push(ids[index]);
                }
                return acc;
            }, []);
            if (missingIds.length > 0) {
                return this.adapter
                    .loadList(missingIds, pageContext)
                    .pipe(map(loadedComponents => [
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
CmsComponentConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CmsComponentConnector.ctorParameters = () => [
    { type: CmsStructureConfigService },
    { type: CmsComponentAdapter }
];
/** @nocollapse */ CmsComponentConnector.ngInjectableDef = i0.defineInjectable({ factory: function CmsComponentConnector_Factory() { return new CmsComponentConnector(i0.inject(i1.CmsStructureConfigService), i0.inject(i2.CmsComponentAdapter)); }, token: CmsComponentConnector, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQzs7OztBQU14RixNQUFNLE9BQU8scUJBQXFCOzs7OztJQUNoQyxZQUNZLHlCQUFvRCxFQUNwRCxPQUE0QjtRQUQ1Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELFlBQU8sR0FBUCxPQUFPLENBQXFCO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFSixHQUFHLENBQ0QsRUFBVSxFQUNWLFdBQXdCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUNsQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUM7YUFDMUIsSUFBSSxDQUNILFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQzlCLG1CQUFtQjtZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQ3ZDLENBQ0YsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxHQUFhLEVBQUUsV0FBd0I7UUFDN0MsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyRSxTQUFTLENBQUMsb0JBQW9CLENBQUMsRUFBRTs7O2tCQUV6QixVQUFVLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUM1QyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQ0QsRUFBRSxDQUNIO1lBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekIsT0FBTyxJQUFJLENBQUMsT0FBTztxQkFDaEIsUUFBUSxDQUFDLFVBQVUsRUFBRSxXQUFXLENBQUM7cUJBQ2pDLElBQUksQ0FDSCxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDO29CQUN0QixHQUFHLG9CQUFvQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7b0JBQ3ZDLEdBQUcsZ0JBQWdCO2lCQUNwQixDQUFDLENBQ0gsQ0FBQzthQUNMO2lCQUFNO2dCQUNMLE9BQU8sRUFBRSxDQUFDLG9CQUFvQixDQUFDLENBQUM7YUFDakM7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7O1lBcERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQUxRLHlCQUF5QjtZQUR6QixtQkFBbUI7Ozs7Ozs7O0lBU3hCLDBEQUE4RDs7Ozs7SUFDOUQsd0NBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50QWRhcHRlciB9IGZyb20gJy4vY21zLWNvbXBvbmVudC5hZGFwdGVyJztcbmltcG9ydCB7IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jbXMtc3RydWN0dXJlLWNvbmZpZy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vcm91dGluZy9tb2RlbHMvcGFnZS1jb250ZXh0Lm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc0NvbXBvbmVudENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlOiBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBDbXNDb21wb25lbnRBZGFwdGVyXG4gICkge31cblxuICBnZXQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZVxuICAgICAgLmdldENvbXBvbmVudEZyb21Db25maWcoaWQpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGNvbmZpZ3VyZWRDb21wb25lbnQgPT5cbiAgICAgICAgICBjb25maWd1cmVkQ29tcG9uZW50XG4gICAgICAgICAgICA/IG9mKGNvbmZpZ3VyZWRDb21wb25lbnQpXG4gICAgICAgICAgICA6IHRoaXMuYWRhcHRlci5sb2FkKGlkLCBwYWdlQ29udGV4dClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldExpc3QoaWRzOiBzdHJpbmdbXSwgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLmNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UuZ2V0Q29tcG9uZW50c0Zyb21Db25maWcoaWRzKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNvbmZpZ3VyZWRDb21wb25lbnRzID0+IHtcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBzb21lIGNvbXBvbmVudHMgdGhhdCBhcmUgbm90IGxvYWRlZCBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uc3QgbWlzc2luZ0lkcyA9IGNvbmZpZ3VyZWRDb21wb25lbnRzLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBjb21wb25lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgYWNjLnB1c2goaWRzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW11cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAobWlzc2luZ0lkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlclxuICAgICAgICAgICAgLmxvYWRMaXN0KG1pc3NpbmdJZHMsIHBhZ2VDb250ZXh0KVxuICAgICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgIG1hcChsb2FkZWRDb21wb25lbnRzID0+IFtcbiAgICAgICAgICAgICAgICAuLi5jb25maWd1cmVkQ29tcG9uZW50cy5maWx0ZXIoQm9vbGVhbiksXG4gICAgICAgICAgICAgICAgLi4ubG9hZGVkQ29tcG9uZW50cyxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG9mKGNvbmZpZ3VyZWRDb21wb25lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG59XG4iXX0=