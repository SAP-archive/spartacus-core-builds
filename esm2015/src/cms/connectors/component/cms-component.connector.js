/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsStructureConfigService } from '../../services/cms-structure-config.service';
import { CmsComponentAdapter } from './cms-component.adapter';
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
                    .findComponentsByIds(missingIds, pageContext)
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdoRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUs5RCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUNoQyxZQUNZLHlCQUFvRCxFQUNwRCxPQUE0QjtRQUQ1Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELFlBQU8sR0FBUCxPQUFPLENBQXFCO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFSixHQUFHLENBQ0QsRUFBVSxFQUNWLFdBQXdCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUNsQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUM7YUFDMUIsSUFBSSxDQUNILFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQzlCLG1CQUFtQjtZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQ3ZDLENBQ0YsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxHQUFhLEVBQUUsV0FBd0I7UUFDN0MsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyRSxTQUFTLENBQUMsb0JBQW9CLENBQUMsRUFBRTs7O2tCQUV6QixVQUFVLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUM1QyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQ0QsRUFBRSxDQUNIO1lBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekIsT0FBTyxJQUFJLENBQUMsT0FBTztxQkFDaEIsbUJBQW1CLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztxQkFDNUMsSUFBSSxDQUNILEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7b0JBQ3RCLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDdkMsR0FBRyxnQkFBZ0I7aUJBQ3BCLENBQUMsQ0FDSCxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUNqQztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUFwREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEseUJBQXlCO1lBQ3pCLG1CQUFtQjs7Ozs7Ozs7SUFPeEIsMERBQThEOzs7OztJQUM5RCx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1zdHJ1Y3R1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50QWRhcHRlciB9IGZyb20gJy4vY21zLWNvbXBvbmVudC5hZGFwdGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc0NvbXBvbmVudENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlOiBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBDbXNDb21wb25lbnRBZGFwdGVyXG4gICkge31cblxuICBnZXQ8VCBleHRlbmRzIENtc0NvbXBvbmVudD4oXG4gICAgaWQ6IHN0cmluZyxcbiAgICBwYWdlQ29udGV4dDogUGFnZUNvbnRleHRcbiAgKTogT2JzZXJ2YWJsZTxUPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZVxuICAgICAgLmdldENvbXBvbmVudEZyb21Db25maWcoaWQpXG4gICAgICAucGlwZShcbiAgICAgICAgc3dpdGNoTWFwKGNvbmZpZ3VyZWRDb21wb25lbnQgPT5cbiAgICAgICAgICBjb25maWd1cmVkQ29tcG9uZW50XG4gICAgICAgICAgICA/IG9mKGNvbmZpZ3VyZWRDb21wb25lbnQpXG4gICAgICAgICAgICA6IHRoaXMuYWRhcHRlci5sb2FkKGlkLCBwYWdlQ29udGV4dClcbiAgICAgICAgKVxuICAgICAgKTtcbiAgfVxuXG4gIGdldExpc3QoaWRzOiBzdHJpbmdbXSwgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0KTogT2JzZXJ2YWJsZTxDbXNDb21wb25lbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLmNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UuZ2V0Q29tcG9uZW50c0Zyb21Db25maWcoaWRzKS5waXBlKFxuICAgICAgc3dpdGNoTWFwKGNvbmZpZ3VyZWRDb21wb25lbnRzID0+IHtcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgaGF2ZSBzb21lIGNvbXBvbmVudHMgdGhhdCBhcmUgbm90IGxvYWRlZCBmcm9tIGNvbmZpZ3VyYXRpb25cbiAgICAgICAgY29uc3QgbWlzc2luZ0lkcyA9IGNvbmZpZ3VyZWRDb21wb25lbnRzLnJlZHVjZShcbiAgICAgICAgICAoYWNjLCBjb21wb25lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgYWNjLnB1c2goaWRzW2luZGV4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgW11cbiAgICAgICAgKTtcblxuICAgICAgICBpZiAobWlzc2luZ0lkcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuYWRhcHRlclxuICAgICAgICAgICAgLmZpbmRDb21wb25lbnRzQnlJZHMobWlzc2luZ0lkcywgcGFnZUNvbnRleHQpXG4gICAgICAgICAgICAucGlwZShcbiAgICAgICAgICAgICAgbWFwKGxvYWRlZENvbXBvbmVudHMgPT4gW1xuICAgICAgICAgICAgICAgIC4uLmNvbmZpZ3VyZWRDb21wb25lbnRzLmZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICAgICAgICAuLi5sb2FkZWRDb21wb25lbnRzLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YoY29uZmlndXJlZENvbXBvbmVudHMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==