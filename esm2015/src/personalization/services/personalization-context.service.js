/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { PersonalizationConfig } from '../config/personalization-config';
import { CmsService } from '../../cms/facade/cms.service';
import * as i0 from "@angular/core";
import * as i1 from "../config/personalization-config";
import * as i2 from "../../cms/facade/cms.service";
export class PersonalizationContextService {
    /**
     * @param {?} config
     * @param {?} cmsService
     */
    constructor(config, cmsService) {
        this.config = config;
        this.cmsService = cmsService;
    }
    /**
     * @return {?}
     */
    getPersonalizationContext() {
        return this.cmsService.getCurrentPage().pipe(filter(Boolean), map((/**
         * @param {?} page
         * @return {?}
         */
        (page) => page.slots[this.config.personalization.context.slotPosition])), filter(Boolean), map((/**
         * @param {?} slot
         * @return {?}
         */
        (slot) => slot.components.find((/**
         * @param {?} i
         * @return {?}
         */
        i => i.uid === this.config.personalization.context.componentId)))), filter(Boolean), map((/**
         * @param {?} component
         * @return {?}
         */
        (component) => this.buildPersonalizationContext(component.properties.script.data))));
    }
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    buildPersonalizationContext(data) {
        /** @type {?} */
        const context = JSON.parse(atob(data));
        context.actions.forEach((/**
         * @param {?} action
         * @return {?}
         */
        action => {
            Object.keys(action).forEach((/**
             * @param {?} key
             * @return {?}
             */
            key => {
                action[key] = atob(action[key]);
            }));
        }));
        for (let i = 0; i < context.segments.length; i++) {
            context.segments[i] = atob(context.segments[i]);
        }
        return context;
    }
}
PersonalizationContextService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
PersonalizationContextService.ctorParameters = () => [
    { type: PersonalizationConfig },
    { type: CmsService }
];
/** @nocollapse */ PersonalizationContextService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PersonalizationContextService_Factory() { return new PersonalizationContextService(i0.ɵɵinject(i1.PersonalizationConfig), i0.ɵɵinject(i2.CmsService)); }, token: PersonalizationContextService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @protected
     */
    PersonalizationContextService.prototype.config;
    /**
     * @type {?}
     * @protected
     */
    PersonalizationContextService.prototype.cmsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vc2VydmljZXMvcGVyc29uYWxpemF0aW9uLWNvbnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQVExRCxNQUFNLE9BQU8sNkJBQTZCOzs7OztJQUN4QyxZQUNZLE1BQTZCLEVBQzdCLFVBQXNCO1FBRHRCLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDL0IsQ0FBQzs7OztJQUVKLHlCQUF5QjtRQUN2QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRzs7OztRQUNELENBQUMsSUFBVSxFQUFFLEVBQUUsQ0FDYixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFDL0QsRUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRzs7OztRQUFDLENBQUMsSUFBcUIsRUFBRSxFQUFFLENBQzVCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSTs7OztRQUNsQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFDL0QsRUFDRixFQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQUMsQ0FBQyxTQUFtQyxFQUFFLEVBQUUsQ0FDMUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUNuRSxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTywyQkFBMkIsQ0FBQyxJQUFZOztjQUN4QyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDbEMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUMsQ0FBQztRQUNILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDakQ7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOzs7WUF4Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBVFEscUJBQXFCO1lBRXJCLFVBQVU7Ozs7Ozs7O0lBVWYsK0NBQXVDOzs7OztJQUN2QyxtREFBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFBlcnNvbmFsaXphdGlvbkNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9wZXJzb25hbGl6YXRpb24tY29uZmlnJztcbmltcG9ydCB7IFBlcnNvbmFsaXphdGlvbkNvbnRleHQgfSBmcm9tICcuLi9tb2RlbC9wZXJzb25hbGl6YXRpb24tY29udGV4dC5tb2RlbCc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgQ29udGVudFNsb3REYXRhIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL2NvbnRlbnQtc2xvdC1kYXRhLm1vZGVsJztcbmltcG9ydCB7IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9jb250ZW50LXNsb3QtY29tcG9uZW50LWRhdGEubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgUGVyc29uYWxpemF0aW9uQ29udGV4dFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBQZXJzb25hbGl6YXRpb25Db25maWcsXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2VcbiAgKSB7fVxuXG4gIGdldFBlcnNvbmFsaXphdGlvbkNvbnRleHQoKTogT2JzZXJ2YWJsZTxQZXJzb25hbGl6YXRpb25Db250ZXh0PiB7XG4gICAgcmV0dXJuIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLnBpcGUoXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoXG4gICAgICAgIChwYWdlOiBQYWdlKSA9PlxuICAgICAgICAgIHBhZ2Uuc2xvdHNbdGhpcy5jb25maWcucGVyc29uYWxpemF0aW9uLmNvbnRleHQuc2xvdFBvc2l0aW9uXVxuICAgICAgKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgoc2xvdDogQ29udGVudFNsb3REYXRhKSA9PlxuICAgICAgICBzbG90LmNvbXBvbmVudHMuZmluZChcbiAgICAgICAgICBpID0+IGkudWlkID09PSB0aGlzLmNvbmZpZy5wZXJzb25hbGl6YXRpb24uY29udGV4dC5jb21wb25lbnRJZFxuICAgICAgICApXG4gICAgICApLFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKChjb21wb25lbnQ6IENvbnRlbnRTbG90Q29tcG9uZW50RGF0YSkgPT5cbiAgICAgICAgdGhpcy5idWlsZFBlcnNvbmFsaXphdGlvbkNvbnRleHQoY29tcG9uZW50LnByb3BlcnRpZXMuc2NyaXB0LmRhdGEpXG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRQZXJzb25hbGl6YXRpb25Db250ZXh0KGRhdGE6IHN0cmluZyk6IFBlcnNvbmFsaXphdGlvbkNvbnRleHQge1xuICAgIGNvbnN0IGNvbnRleHQgPSBKU09OLnBhcnNlKGF0b2IoZGF0YSkpO1xuICAgIGNvbnRleHQuYWN0aW9ucy5mb3JFYWNoKGFjdGlvbiA9PiB7XG4gICAgICBPYmplY3Qua2V5cyhhY3Rpb24pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgYWN0aW9uW2tleV0gPSBhdG9iKGFjdGlvbltrZXldKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29udGV4dC5zZWdtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29udGV4dC5zZWdtZW50c1tpXSA9IGF0b2IoY29udGV4dC5zZWdtZW50c1tpXSk7XG4gICAgfVxuICAgIHJldHVybiBjb250ZXh0O1xuICB9XG59XG4iXX0=