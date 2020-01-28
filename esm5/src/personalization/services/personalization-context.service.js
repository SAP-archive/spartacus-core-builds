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
var PersonalizationContextService = /** @class */ (function () {
    function PersonalizationContextService(config, cmsService) {
        this.config = config;
        this.cmsService = cmsService;
    }
    /**
     * @return {?}
     */
    PersonalizationContextService.prototype.getPersonalizationContext = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.cmsService.getCurrentPage().pipe(filter(Boolean), map((/**
         * @param {?} page
         * @return {?}
         */
        function (page) {
            return page.slots[_this.config.personalization.context.slotPosition];
        })), filter(Boolean), map((/**
         * @param {?} slot
         * @return {?}
         */
        function (slot) {
            return slot.components.find((/**
             * @param {?} i
             * @return {?}
             */
            function (i) { return i.uid === _this.config.personalization.context.componentId; }));
        })), filter(Boolean), map((/**
         * @param {?} component
         * @return {?}
         */
        function (component) {
            return _this.buildPersonalizationContext(component.properties.script.data);
        })));
    };
    /**
     * @private
     * @param {?} data
     * @return {?}
     */
    PersonalizationContextService.prototype.buildPersonalizationContext = /**
     * @private
     * @param {?} data
     * @return {?}
     */
    function (data) {
        /** @type {?} */
        var context = JSON.parse(atob(data));
        context.actions.forEach((/**
         * @param {?} action
         * @return {?}
         */
        function (action) {
            Object.keys(action).forEach((/**
             * @param {?} key
             * @return {?}
             */
            function (key) {
                action[key] = atob(action[key]);
            }));
        }));
        for (var i = 0; i < context.segments.length; i++) {
            context.segments[i] = atob(context.segments[i]);
        }
        return context;
    };
    PersonalizationContextService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    PersonalizationContextService.ctorParameters = function () { return [
        { type: PersonalizationConfig },
        { type: CmsService }
    ]; };
    /** @nocollapse */ PersonalizationContextService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function PersonalizationContextService_Factory() { return new PersonalizationContextService(i0.ɵɵinject(i1.PersonalizationConfig), i0.ɵɵinject(i2.CmsService)); }, token: PersonalizationContextService, providedIn: "root" });
    return PersonalizationContextService;
}());
export { PersonalizationContextService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVyc29uYWxpemF0aW9uLWNvbnRleHQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9wZXJzb25hbGl6YXRpb24vc2VydmljZXMvcGVyc29uYWxpemF0aW9uLWNvbnRleHQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRXpFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQzs7OztBQUsxRDtJQUlFLHVDQUNZLE1BQTZCLEVBQzdCLFVBQXNCO1FBRHRCLFdBQU0sR0FBTixNQUFNLENBQXVCO1FBQzdCLGVBQVUsR0FBVixVQUFVLENBQVk7SUFDL0IsQ0FBQzs7OztJQUVKLGlFQUF5Qjs7O0lBQXpCO1FBQUEsaUJBa0JDO1FBakJDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQzFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFDZixHQUFHOzs7O1FBQ0QsVUFBQyxJQUFVO1lBQ1QsT0FBQSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFBNUQsQ0FBNEQsRUFDL0QsRUFDRCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQ2YsR0FBRzs7OztRQUFDLFVBQUMsSUFBcUI7WUFDeEIsT0FBQSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUk7Ozs7WUFDbEIsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQXpELENBQXlELEVBQy9EO1FBRkQsQ0FFQyxFQUNGLEVBQ0QsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUNmLEdBQUc7Ozs7UUFBQyxVQUFDLFNBQW1DO1lBQ3RDLE9BQUEsS0FBSSxDQUFDLDJCQUEyQixDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUFsRSxDQUFrRSxFQUNuRSxDQUNGLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxtRUFBMkI7Ozs7O0lBQW5DLFVBQW9DLElBQVk7O1lBQ3hDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLE1BQU07WUFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPOzs7O1lBQUMsVUFBQSxHQUFHO2dCQUM3QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBQyxDQUFDO1FBQ0wsQ0FBQyxFQUFDLENBQUM7UUFDSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2pEO1FBQ0QsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Z0JBeENGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVFEscUJBQXFCO2dCQUVyQixVQUFVOzs7d0NBTG5CO0NBbURDLEFBekNELElBeUNDO1NBdENZLDZCQUE2Qjs7Ozs7O0lBRXRDLCtDQUF1Qzs7Ozs7SUFDdkMsbURBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBQZXJzb25hbGl6YXRpb25Db25maWcgfSBmcm9tICcuLi9jb25maWcvcGVyc29uYWxpemF0aW9uLWNvbmZpZyc7XG5pbXBvcnQgeyBQZXJzb25hbGl6YXRpb25Db250ZXh0IH0gZnJvbSAnLi4vbW9kZWwvcGVyc29uYWxpemF0aW9uLWNvbnRleHQubW9kZWwnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IENvbnRlbnRTbG90RGF0YSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9jb250ZW50LXNsb3QtZGF0YS5tb2RlbCc7XG5pbXBvcnQgeyBDb250ZW50U2xvdENvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvY29udGVudC1zbG90LWNvbXBvbmVudC1kYXRhLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFBlcnNvbmFsaXphdGlvbkNvbnRleHRTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbmZpZzogUGVyc29uYWxpemF0aW9uQ29uZmlnLFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlXG4gICkge31cblxuICBnZXRQZXJzb25hbGl6YXRpb25Db250ZXh0KCk6IE9ic2VydmFibGU8UGVyc29uYWxpemF0aW9uQ29udGV4dD4ge1xuICAgIHJldHVybiB0aGlzLmNtc1NlcnZpY2UuZ2V0Q3VycmVudFBhZ2UoKS5waXBlKFxuICAgICAgZmlsdGVyKEJvb2xlYW4pLFxuICAgICAgbWFwKFxuICAgICAgICAocGFnZTogUGFnZSkgPT5cbiAgICAgICAgICBwYWdlLnNsb3RzW3RoaXMuY29uZmlnLnBlcnNvbmFsaXphdGlvbi5jb250ZXh0LnNsb3RQb3NpdGlvbl1cbiAgICAgICksXG4gICAgICBmaWx0ZXIoQm9vbGVhbiksXG4gICAgICBtYXAoKHNsb3Q6IENvbnRlbnRTbG90RGF0YSkgPT5cbiAgICAgICAgc2xvdC5jb21wb25lbnRzLmZpbmQoXG4gICAgICAgICAgaSA9PiBpLnVpZCA9PT0gdGhpcy5jb25maWcucGVyc29uYWxpemF0aW9uLmNvbnRleHQuY29tcG9uZW50SWRcbiAgICAgICAgKVxuICAgICAgKSxcbiAgICAgIGZpbHRlcihCb29sZWFuKSxcbiAgICAgIG1hcCgoY29tcG9uZW50OiBDb250ZW50U2xvdENvbXBvbmVudERhdGEpID0+XG4gICAgICAgIHRoaXMuYnVpbGRQZXJzb25hbGl6YXRpb25Db250ZXh0KGNvbXBvbmVudC5wcm9wZXJ0aWVzLnNjcmlwdC5kYXRhKVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkUGVyc29uYWxpemF0aW9uQ29udGV4dChkYXRhOiBzdHJpbmcpOiBQZXJzb25hbGl6YXRpb25Db250ZXh0IHtcbiAgICBjb25zdCBjb250ZXh0ID0gSlNPTi5wYXJzZShhdG9iKGRhdGEpKTtcbiAgICBjb250ZXh0LmFjdGlvbnMuZm9yRWFjaChhY3Rpb24gPT4ge1xuICAgICAgT2JqZWN0LmtleXMoYWN0aW9uKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgICAgIGFjdGlvbltrZXldID0gYXRvYihhY3Rpb25ba2V5XSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbnRleHQuc2VnbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnRleHQuc2VnbWVudHNbaV0gPSBhdG9iKGNvbnRleHQuc2VnbWVudHNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gY29udGV4dDtcbiAgfVxufVxuIl19