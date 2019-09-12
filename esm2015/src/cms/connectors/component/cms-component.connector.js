/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
    /**
     * @param {?} cmsStructureConfigService
     * @param {?} adapter
     * @param {?} config
     */
    constructor(cmsStructureConfigService, adapter, config) {
        this.cmsStructureConfigService = cmsStructureConfigService;
        this.adapter = adapter;
        this.config = config;
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
            .pipe(switchMap((/**
         * @param {?} configuredComponent
         * @return {?}
         */
        configuredComponent => configuredComponent
            ? of(configuredComponent)
            : this.adapter.load(id, pageContext))));
    }
    /**
     * @param {?} ids
     * @param {?} pageContext
     * @return {?}
     */
    getList(ids, pageContext) {
        return this.cmsStructureConfigService.getComponentsFromConfig(ids).pipe(switchMap((/**
         * @param {?} configuredComponents
         * @return {?}
         */
        configuredComponents => {
            // check if we have some components that are not loaded from configuration
            /** @type {?} */
            const missingIds = configuredComponents.reduce((/**
             * @param {?} acc
             * @param {?} component
             * @param {?} index
             * @return {?}
             */
            (acc, component, index) => {
                if (component === undefined) {
                    acc.push(ids[index]);
                }
                return acc;
            }), []);
            if (missingIds.length > 0) {
                return (this.config.backend.occ.legacy
                    ? this.adapter.findComponentsByIdsLegacy(missingIds, pageContext)
                    : this.adapter.findComponentsByIds(missingIds, pageContext)).pipe(map((/**
                 * @param {?} loadedComponents
                 * @return {?}
                 */
                loadedComponents => [
                    ...configuredComponents.filter(Boolean),
                    ...loadedComponents,
                ])));
            }
            else {
                return of(configuredComponents);
            }
        })));
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
    { type: CmsComponentAdapter },
    { type: OccConfig }
];
/** @nocollapse */ CmsComponentConnector.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CmsComponentConnector_Factory() { return new CmsComponentConnector(i0.ɵɵinject(i1.CmsStructureConfigService), i0.ɵɵinject(i2.CmsComponentAdapter), i0.ɵɵinject(i3.OccConfig)); }, token: CmsComponentConnector, providedIn: "root" });
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
    /**
     * @type {?}
     * @protected
     */
    CmsComponentConnector.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLWNvbXBvbmVudC5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvY21zL2Nvbm5lY3RvcnMvY29tcG9uZW50L2Ntcy1jb21wb25lbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFM0QsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDeEYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBSzlELE1BQU0sT0FBTyxxQkFBcUI7Ozs7OztJQUNoQyxZQUNZLHlCQUFvRCxFQUNwRCxPQUE0QixFQUM1QixNQUFpQjtRQUZqQiw4QkFBeUIsR0FBekIseUJBQXlCLENBQTJCO1FBQ3BELFlBQU8sR0FBUCxPQUFPLENBQXFCO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFDMUIsQ0FBQzs7Ozs7OztJQUVKLEdBQUcsQ0FDRCxFQUFVLEVBQ1YsV0FBd0I7UUFFeEIsT0FBTyxJQUFJLENBQUMseUJBQXlCO2FBQ2xDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQzthQUMxQixJQUFJLENBQ0gsU0FBUzs7OztRQUFDLG1CQUFtQixDQUFDLEVBQUUsQ0FDOUIsbUJBQW1CO1lBQ2pCLENBQUMsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUM7WUFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFDdkMsQ0FDRixDQUFDO0lBQ04sQ0FBQzs7Ozs7O0lBRUQsT0FBTyxDQUFDLEdBQWEsRUFBRSxXQUF3QjtRQUM3QyxPQUFPLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyx1QkFBdUIsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQ3JFLFNBQVM7Ozs7UUFBQyxvQkFBb0IsQ0FBQyxFQUFFOzs7a0JBRXpCLFVBQVUsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNOzs7Ozs7WUFDNUMsQ0FBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUN4QixJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7b0JBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQ3RCO2dCQUNELE9BQU8sR0FBRyxDQUFDO1lBQ2IsQ0FBQyxHQUNELEVBQUUsQ0FDSDtZQUVELElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTTtvQkFDcEMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMseUJBQXlCLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQztvQkFDakUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUM1RCxDQUFDLElBQUksQ0FDSixHQUFHOzs7O2dCQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQztvQkFDdEIsR0FBRyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO29CQUN2QyxHQUFHLGdCQUFnQjtpQkFDcEIsRUFBQyxDQUNILENBQUM7YUFDSDtpQkFBTTtnQkFDTCxPQUFPLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxFQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7OztZQXRERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFMUSx5QkFBeUI7WUFDekIsbUJBQW1CO1lBSG5CLFNBQVM7Ozs7Ozs7O0lBVWQsMERBQThEOzs7OztJQUM5RCx3Q0FBc0M7Ozs7O0lBQ3RDLHVDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudCB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBPY2NDb25maWcgfSBmcm9tICcuLi8uLi8uLi9vY2MvY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgUGFnZUNvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9yb3V0aW5nL21vZGVscy9wYWdlLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgQ21zU3RydWN0dXJlQ29uZmlnU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2Ntcy1zdHJ1Y3R1cmUtY29uZmlnLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50QWRhcHRlciB9IGZyb20gJy4vY21zLWNvbXBvbmVudC5hZGFwdGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENtc0NvbXBvbmVudENvbm5lY3RvciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlOiBDbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhZGFwdGVyOiBDbXNDb21wb25lbnRBZGFwdGVyLFxuICAgIHByb3RlY3RlZCBjb25maWc6IE9jY0NvbmZpZ1xuICApIHt9XG5cbiAgZ2V0PFQgZXh0ZW5kcyBDbXNDb21wb25lbnQ+KFxuICAgIGlkOiBzdHJpbmcsXG4gICAgcGFnZUNvbnRleHQ6IFBhZ2VDb250ZXh0XG4gICk6IE9ic2VydmFibGU8VD4ge1xuICAgIHJldHVybiB0aGlzLmNtc1N0cnVjdHVyZUNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb21wb25lbnRGcm9tQ29uZmlnKGlkKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHN3aXRjaE1hcChjb25maWd1cmVkQ29tcG9uZW50ID0+XG4gICAgICAgICAgY29uZmlndXJlZENvbXBvbmVudFxuICAgICAgICAgICAgPyBvZihjb25maWd1cmVkQ29tcG9uZW50KVxuICAgICAgICAgICAgOiB0aGlzLmFkYXB0ZXIubG9hZChpZCwgcGFnZUNvbnRleHQpXG4gICAgICAgIClcbiAgICAgICk7XG4gIH1cblxuICBnZXRMaXN0KGlkczogc3RyaW5nW10sIHBhZ2VDb250ZXh0OiBQYWdlQ29udGV4dCk6IE9ic2VydmFibGU8Q21zQ29tcG9uZW50W10+IHtcbiAgICByZXR1cm4gdGhpcy5jbXNTdHJ1Y3R1cmVDb25maWdTZXJ2aWNlLmdldENvbXBvbmVudHNGcm9tQ29uZmlnKGlkcykucGlwZShcbiAgICAgIHN3aXRjaE1hcChjb25maWd1cmVkQ29tcG9uZW50cyA9PiB7XG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIGhhdmUgc29tZSBjb21wb25lbnRzIHRoYXQgYXJlIG5vdCBsb2FkZWQgZnJvbSBjb25maWd1cmF0aW9uXG4gICAgICAgIGNvbnN0IG1pc3NpbmdJZHMgPSBjb25maWd1cmVkQ29tcG9uZW50cy5yZWR1Y2UoXG4gICAgICAgICAgKGFjYywgY29tcG9uZW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGFjYy5wdXNoKGlkc1tpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtdXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKG1pc3NpbmdJZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHJldHVybiAodGhpcy5jb25maWcuYmFja2VuZC5vY2MubGVnYWN5XG4gICAgICAgICAgICA/IHRoaXMuYWRhcHRlci5maW5kQ29tcG9uZW50c0J5SWRzTGVnYWN5KG1pc3NpbmdJZHMsIHBhZ2VDb250ZXh0KVxuICAgICAgICAgICAgOiB0aGlzLmFkYXB0ZXIuZmluZENvbXBvbmVudHNCeUlkcyhtaXNzaW5nSWRzLCBwYWdlQ29udGV4dClcbiAgICAgICAgICApLnBpcGUoXG4gICAgICAgICAgICBtYXAobG9hZGVkQ29tcG9uZW50cyA9PiBbXG4gICAgICAgICAgICAgIC4uLmNvbmZpZ3VyZWRDb21wb25lbnRzLmZpbHRlcihCb29sZWFuKSxcbiAgICAgICAgICAgICAgLi4ubG9hZGVkQ29tcG9uZW50cyxcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gb2YoY29uZmlndXJlZENvbXBvbmVudHMpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cbn1cbiJdfQ==