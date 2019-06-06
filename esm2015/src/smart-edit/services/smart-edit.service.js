/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
import { combineLatest } from 'rxjs';
import { takeWhile, take, filter } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { CmsService } from '../../cms/facade/cms.service';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { WindowRef } from '../../window/window-ref';
import { PageType } from '../../model/cms.model';
import * as i0 from "@angular/core";
import * as i1 from "../../cms/facade/cms.service";
import * as i2 from "../../routing/facade/routing.service";
import * as i3 from "../../site-context/facade/base-site.service";
import * as i4 from "../../window/window-ref";
export class SmartEditService {
    /**
     * @param {?} cmsService
     * @param {?} routingService
     * @param {?} baseSiteService
     * @param {?} zone
     * @param {?} winRef
     */
    constructor(cmsService, routingService, baseSiteService, zone, winRef) {
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.baseSiteService = baseSiteService;
        this.zone = zone;
        this.isPreviewPage = false;
        this.getCmsTicket();
        this.addPageContract();
        if (winRef.nativeWindow) {
            /** @type {?} */
            const window = (/** @type {?} */ (winRef.nativeWindow));
            // rerender components and slots after editing
            window.smartedit = window.smartedit || {};
            window.smartedit.renderComponent = (/**
             * @param {?} componentId
             * @param {?} componentType
             * @param {?} parentId
             * @return {?}
             */
            (componentId, componentType, parentId) => {
                return this.renderComponent(componentId, componentType, parentId);
            });
            // reprocess page
            window.smartedit.reprocessPage = this.reprocessPage;
        }
    }
    /**
     * @return {?}
     */
    get cmsTicketId() {
        return this._cmsTicketId;
    }
    /**
     * @protected
     * @return {?}
     */
    getCmsTicket() {
        combineLatest([
            this.cmsService.getCurrentPage(),
            this.routingService.getRouterState(),
        ])
            .pipe(takeWhile((/**
         * @param {?} __0
         * @return {?}
         */
        ([cmsPage]) => cmsPage === undefined)))
            .subscribe((/**
         * @param {?} __0
         * @return {?}
         */
        ([, routerState]) => {
            if (routerState.nextState && !this._cmsTicketId) {
                this._cmsTicketId = routerState.nextState.queryParams['cmsTicketId'];
                if (this._cmsTicketId) {
                    this.cmsService.launchInSmartEdit = true;
                    this.getDefaultPreviewCode();
                }
            }
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    getDefaultPreviewCode() {
        this.baseSiteService
            .getBaseSiteData()
            .pipe(filter((/**
         * @param {?} site
         * @return {?}
         */
        site => Object.keys(site).length !== 0)), take(1))
            .subscribe((/**
         * @param {?} site
         * @return {?}
         */
        site => {
            this.defaultPreviewCategoryCode = site.defaultPreviewCategoryCode;
            this.defaultPreviewProductCode = site.defaultPreviewProductCode;
        }));
    }
    /**
     * @protected
     * @return {?}
     */
    addPageContract() {
        this.cmsService.getCurrentPage().subscribe((/**
         * @param {?} cmsPage
         * @return {?}
         */
        cmsPage => {
            if (cmsPage && this._cmsTicketId) {
                this._currentPageId = cmsPage.pageId;
                // before adding contract to page, we need redirect to that page
                this.goToPreviewPage(cmsPage);
                // remove old page contract
                /** @type {?} */
                const previousContract = [];
                Array.from(document.body.classList).forEach((/**
                 * @param {?} attr
                 * @return {?}
                 */
                attr => previousContract.push(attr)));
                previousContract.forEach((/**
                 * @param {?} attr
                 * @return {?}
                 */
                attr => document.body.classList.remove(attr)));
                // add new page contract
                if (cmsPage.properties && cmsPage.properties.smartedit) {
                    /** @type {?} */
                    const seClasses = cmsPage.properties.smartedit.classes.split(' ');
                    seClasses.forEach((/**
                     * @param {?} classItem
                     * @return {?}
                     */
                    classItem => {
                        document.body.classList.add(classItem);
                    }));
                }
            }
        }));
    }
    /**
     * @protected
     * @param {?} cmsPage
     * @return {?}
     */
    goToPreviewPage(cmsPage) {
        // only the first page is the smartedit preview page
        if (!this.isPreviewPage) {
            this.isPreviewPage = true;
            if (cmsPage.type === PageType.PRODUCT_PAGE &&
                this.defaultPreviewProductCode) {
                this.routingService.go({
                    cxRoute: 'product',
                    params: { code: this.defaultPreviewProductCode },
                });
            }
            else if (cmsPage.type === PageType.CATEGORY_PAGE &&
                this.defaultPreviewCategoryCode) {
                this.routingService.go({
                    cxRoute: 'category',
                    params: { code: this.defaultPreviewCategoryCode },
                });
            }
        }
    }
    /**
     * @protected
     * @param {?} componentId
     * @param {?=} componentType
     * @param {?=} parentId
     * @return {?}
     */
    renderComponent(componentId, componentType, parentId) {
        if (componentId) {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                // without parentId, it is slot
                if (!parentId) {
                    if (this._currentPageId) {
                        this.cmsService.refreshPageById(this._currentPageId);
                    }
                    else {
                        this.cmsService.refreshLatestPage();
                    }
                }
                else if (componentType) {
                    this.cmsService.refreshComponent(componentId);
                }
            }));
        }
        return true;
    }
    /**
     * @protected
     * @return {?}
     */
    reprocessPage() {
        // TODO: reprocess page API
    }
}
SmartEditService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
SmartEditService.ctorParameters = () => [
    { type: CmsService },
    { type: RoutingService },
    { type: BaseSiteService },
    { type: NgZone },
    { type: WindowRef }
];
/** @nocollapse */ SmartEditService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i3.BaseSiteService), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i4.WindowRef)); }, token: SmartEditService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype._cmsTicketId;
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype.isPreviewPage;
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype._currentPageId;
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype.defaultPreviewProductCode;
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype.defaultPreviewCategoryCode;
    /**
     * @type {?}
     * @protected
     */
    SmartEditService.prototype.cmsService;
    /**
     * @type {?}
     * @protected
     */
    SmartEditService.prototype.routingService;
    /**
     * @type {?}
     * @protected
     */
    SmartEditService.prototype.baseSiteService;
    /**
     * @type {?}
     * @protected
     */
    SmartEditService.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQUtqRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7OztJQVEzQixZQUNZLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLElBQVksRUFDdEIsTUFBaUI7UUFKUCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVZoQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQWE1QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTs7a0JBQ2pCLE1BQU0sR0FBRyxtQkFBQSxNQUFNLENBQUMsWUFB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LFFBQWlCO1FBRWpCLElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2pCLCtCQUErQjtnQkFDL0IsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDdEQ7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3FCQUNyQztpQkFDRjtxQkFBTSxJQUFJLGFBQWEsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDL0M7WUFDSCxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVTLGFBQWE7UUFDckIsMkJBQTJCO0lBQzdCLENBQUM7OztZQW5KRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFSUSxVQUFVO1lBRFYsY0FBYztZQUVkLGVBQWU7WUFOSCxNQUFNO1lBUWxCLFNBQVM7Ozs7Ozs7O0lBT2hCLHdDQUE2Qjs7Ozs7SUFDN0IseUNBQThCOzs7OztJQUM5QiwwQ0FBK0I7Ozs7O0lBRS9CLHFEQUEwQzs7Ozs7SUFDMUMsc0RBQTJDOzs7OztJQUd6QyxzQ0FBZ0M7Ozs7O0lBQ2hDLDBDQUF3Qzs7Ozs7SUFDeEMsMkNBQTBDOzs7OztJQUMxQyxnQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VXaGlsZSwgdGFrZSwgZmlsdGVyIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTbWFydEVkaXRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY21zVGlja2V0SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBpc1ByZXZpZXdQYWdlID0gZmFsc2U7XG4gIHByaXZhdGUgX2N1cnJlbnRQYWdlSWQ6IHN0cmluZztcblxuICBwcml2YXRlIGRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBkZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7XG4gICAgdGhpcy5nZXRDbXNUaWNrZXQoKTtcbiAgICB0aGlzLmFkZFBhZ2VDb250cmFjdCgpO1xuXG4gICAgaWYgKHdpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIGNvbnN0IHdpbmRvdyA9IHdpblJlZi5uYXRpdmVXaW5kb3cgYXMgYW55O1xuICAgICAgLy8gcmVyZW5kZXIgY29tcG9uZW50cyBhbmQgc2xvdHMgYWZ0ZXIgZWRpdGluZ1xuICAgICAgd2luZG93LnNtYXJ0ZWRpdCA9IHdpbmRvdy5zbWFydGVkaXQgfHwge307XG4gICAgICB3aW5kb3cuc21hcnRlZGl0LnJlbmRlckNvbXBvbmVudCA9IChcbiAgICAgICAgY29tcG9uZW50SWQsXG4gICAgICAgIGNvbXBvbmVudFR5cGUsXG4gICAgICAgIHBhcmVudElkXG4gICAgICApID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudElkLCBjb21wb25lbnRUeXBlLCBwYXJlbnRJZCk7XG4gICAgICB9O1xuXG4gICAgICAvLyByZXByb2Nlc3MgcGFnZVxuICAgICAgd2luZG93LnNtYXJ0ZWRpdC5yZXByb2Nlc3NQYWdlID0gdGhpcy5yZXByb2Nlc3NQYWdlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjbXNUaWNrZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jbXNUaWNrZXRJZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbXNUaWNrZXQoKSB7XG4gICAgY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0Q3VycmVudFBhZ2UoKSxcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKSxcbiAgICBdKVxuICAgICAgLnBpcGUodGFrZVdoaWxlKChbY21zUGFnZV0pID0+IGNtc1BhZ2UgPT09IHVuZGVmaW5lZCkpXG4gICAgICAuc3Vic2NyaWJlKChbLCByb3V0ZXJTdGF0ZV0pID0+IHtcbiAgICAgICAgaWYgKHJvdXRlclN0YXRlLm5leHRTdGF0ZSAmJiAhdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgICB0aGlzLl9jbXNUaWNrZXRJZCA9IHJvdXRlclN0YXRlLm5leHRTdGF0ZS5xdWVyeVBhcmFtc1snY21zVGlja2V0SWQnXTtcbiAgICAgICAgICBpZiAodGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5sYXVuY2hJblNtYXJ0RWRpdCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdldERlZmF1bHRQcmV2aWV3Q29kZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFByZXZpZXdDb2RlKCkge1xuICAgIHRoaXMuYmFzZVNpdGVTZXJ2aWNlXG4gICAgICAuZ2V0QmFzZVNpdGVEYXRhKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoc2l0ZSA9PiBPYmplY3Qua2V5cyhzaXRlKS5sZW5ndGggIT09IDApLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHNpdGUgPT4ge1xuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlID0gc2l0ZS5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlID0gc2l0ZS5kZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkUGFnZUNvbnRyYWN0KCkge1xuICAgIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLnN1YnNjcmliZShjbXNQYWdlID0+IHtcbiAgICAgIGlmIChjbXNQYWdlICYmIHRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlSWQgPSBjbXNQYWdlLnBhZ2VJZDtcblxuICAgICAgICAvLyBiZWZvcmUgYWRkaW5nIGNvbnRyYWN0IHRvIHBhZ2UsIHdlIG5lZWQgcmVkaXJlY3QgdG8gdGhhdCBwYWdlXG4gICAgICAgIHRoaXMuZ29Ub1ByZXZpZXdQYWdlKGNtc1BhZ2UpO1xuXG4gICAgICAgIC8vIHJlbW92ZSBvbGQgcGFnZSBjb250cmFjdFxuICAgICAgICBjb25zdCBwcmV2aW91c0NvbnRyYWN0ID0gW107XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QpLmZvckVhY2goYXR0ciA9PlxuICAgICAgICAgIHByZXZpb3VzQ29udHJhY3QucHVzaChhdHRyKVxuICAgICAgICApO1xuICAgICAgICBwcmV2aW91c0NvbnRyYWN0LmZvckVhY2goYXR0ciA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYXR0cikpO1xuXG4gICAgICAgIC8vIGFkZCBuZXcgcGFnZSBjb250cmFjdFxuICAgICAgICBpZiAoY21zUGFnZS5wcm9wZXJ0aWVzICYmIGNtc1BhZ2UucHJvcGVydGllcy5zbWFydGVkaXQpIHtcbiAgICAgICAgICBjb25zdCBzZUNsYXNzZXMgPSBjbXNQYWdlLnByb3BlcnRpZXMuc21hcnRlZGl0LmNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgICBzZUNsYXNzZXMuZm9yRWFjaChjbGFzc0l0ZW0gPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNsYXNzSXRlbSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnb1RvUHJldmlld1BhZ2UoY21zUGFnZTogUGFnZSkge1xuICAgIC8vIG9ubHkgdGhlIGZpcnN0IHBhZ2UgaXMgdGhlIHNtYXJ0ZWRpdCBwcmV2aWV3IHBhZ2VcbiAgICBpZiAoIXRoaXMuaXNQcmV2aWV3UGFnZSkge1xuICAgICAgdGhpcy5pc1ByZXZpZXdQYWdlID0gdHJ1ZTtcbiAgICAgIGlmIChcbiAgICAgICAgY21zUGFnZS50eXBlID09PSBQYWdlVHlwZS5QUk9EVUNUX1BBR0UgJiZcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgY3hSb3V0ZTogJ3Byb2R1Y3QnLFxuICAgICAgICAgIHBhcmFtczogeyBjb2RlOiB0aGlzLmRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGUgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgJiZcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgIGN4Um91dGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IHRoaXMuZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGUgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbXBvbmVudChcbiAgICBjb21wb25lbnRJZDogc3RyaW5nLFxuICAgIGNvbXBvbmVudFR5cGU/OiBzdHJpbmcsXG4gICAgcGFyZW50SWQ/OiBzdHJpbmdcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKGNvbXBvbmVudElkKSB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgLy8gd2l0aG91dCBwYXJlbnRJZCwgaXQgaXMgc2xvdFxuICAgICAgICBpZiAoIXBhcmVudElkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQYWdlSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoUGFnZUJ5SWQodGhpcy5fY3VycmVudFBhZ2VJZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoTGF0ZXN0UGFnZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hDb21wb25lbnQoY29tcG9uZW50SWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXByb2Nlc3NQYWdlKCkge1xuICAgIC8vIFRPRE86IHJlcHJvY2VzcyBwYWdlIEFQSVxuICB9XG59XG4iXX0=