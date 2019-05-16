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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdoRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUN4RixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7OztBQUs5RCxNQUFNLE9BQU8scUJBQXFCOzs7OztJQUNoQyxZQUNZLHlCQUFvRCxFQUNwRCxPQUE0QjtRQUQ1Qiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELFlBQU8sR0FBUCxPQUFPLENBQXFCO0lBQ3JDLENBQUM7Ozs7Ozs7SUFFSixHQUFHLENBQ0QsRUFBVSxFQUNWLFdBQXdCO1FBRXhCLE9BQU8sSUFBSSxDQUFDLHlCQUF5QjthQUNsQyxzQkFBc0IsQ0FBQyxFQUFFLENBQUM7YUFDMUIsSUFBSSxDQUNILFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFLENBQzlCLG1CQUFtQjtZQUNqQixDQUFDLENBQUMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1lBQ3pCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQ3ZDLENBQ0YsQ0FBQztJQUNOLENBQUM7Ozs7OztJQUVELE9BQU8sQ0FBQyxHQUFhLEVBQUUsV0FBd0I7UUFDN0MsT0FBTyxJQUFJLENBQUMseUJBQXlCLENBQUMsdUJBQXVCLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNyRSxTQUFTLENBQUMsb0JBQW9CLENBQUMsRUFBRTs7O2tCQUV6QixVQUFVLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUM1QyxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3hCLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtvQkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDdEI7Z0JBQ0QsT0FBTyxHQUFHLENBQUM7WUFDYixDQUFDLEVBQ0QsRUFBRSxDQUNIO1lBRUQsSUFBSSxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDekIsT0FBTyxJQUFJLENBQUMsT0FBTztxQkFDaEIsbUJBQW1CLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztxQkFDNUMsSUFBSSxDQUNILEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUM7b0JBQ3RCLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQztvQkFDdkMsR0FBRyxnQkFBZ0I7aUJBQ3BCLENBQUMsQ0FDSCxDQUFDO2FBQ0w7aUJBQU07Z0JBQ0wsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUMsQ0FBQzthQUNqQztRQUNILENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7WUFwREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTFEseUJBQXlCO1lBQ3pCLG1CQUFtQjs7Ozs7Ozs7SUFPeEIsMERBQThEOzs7OztJQUM5RCx3Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnQgfSBmcm9tICcuLi8uLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBQYWdlQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL3JvdXRpbmcvbW9kZWxzL3BhZ2UtY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY21zLXN0cnVjdHVyZS1jb25maWcuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnRBZGFwdGVyIH0gZnJvbSAnLi9jbXMtY29tcG9uZW50LmFkYXB0ZXInO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ21zQ29tcG9uZW50Q29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2U6IENtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFkYXB0ZXI6IENtc0NvbXBvbmVudEFkYXB0ZXJcbiAgKSB7fVxuXG4gIGdldDxUIGV4dGVuZHMgQ21zQ29tcG9uZW50PihcbiAgICBpZDogc3RyaW5nLFxuICAgIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dFxuICApOiBPYnNlcnZhYmxlPFQ+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29tcG9uZW50RnJvbUNvbmZpZyhpZClcbiAgICAgIC5waXBlKFxuICAgICAgICBzd2l0Y2hNYXAoY29uZmlndXJlZENvbXBvbmVudCA9PlxuICAgICAgICAgIGNvbmZpZ3VyZWRDb21wb25lbnRcbiAgICAgICAgICAgID8gb2YoY29uZmlndXJlZENvbXBvbmVudClcbiAgICAgICAgICAgIDogdGhpcy5hZGFwdGVyLmxvYWQoaWQsIHBhZ2VDb250ZXh0KVxuICAgICAgICApXG4gICAgICApO1xuICB9XG5cbiAgZ2V0TGlzdChpZHM6IHN0cmluZ1tdLCBwYWdlQ29udGV4dDogUGFnZUNvbnRleHQpOiBPYnNlcnZhYmxlPENtc0NvbXBvbmVudFtdPiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU3RydWN0dXJlQ29uZmlnU2VydmljZS5nZXRDb21wb25lbnRzRnJvbUNvbmZpZyhpZHMpLnBpcGUoXG4gICAgICBzd2l0Y2hNYXAoY29uZmlndXJlZENvbXBvbmVudHMgPT4ge1xuICAgICAgICAvLyBjaGVjayBpZiB3ZSBoYXZlIHNvbWUgY29tcG9uZW50cyB0aGF0IGFyZSBub3QgbG9hZGVkIGZyb20gY29uZmlndXJhdGlvblxuICAgICAgICBjb25zdCBtaXNzaW5nSWRzID0gY29uZmlndXJlZENvbXBvbmVudHMucmVkdWNlKFxuICAgICAgICAgIChhY2MsIGNvbXBvbmVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBhY2MucHVzaChpZHNbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChtaXNzaW5nSWRzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5hZGFwdGVyXG4gICAgICAgICAgICAuZmluZENvbXBvbmVudHNCeUlkcyhtaXNzaW5nSWRzLCBwYWdlQ29udGV4dClcbiAgICAgICAgICAgIC5waXBlKFxuICAgICAgICAgICAgICBtYXAobG9hZGVkQ29tcG9uZW50cyA9PiBbXG4gICAgICAgICAgICAgICAgLi4uY29uZmlndXJlZENvbXBvbmVudHMuZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgICAgICAgICAgIC4uLmxvYWRlZENvbXBvbmVudHMsXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBvZihjb25maWd1cmVkQ29tcG9uZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufVxuIl19