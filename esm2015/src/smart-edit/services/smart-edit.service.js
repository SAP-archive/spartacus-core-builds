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
        this.winRef = winRef;
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
                Array.from(this.winRef.document.body.classList).forEach((/**
                 * @param {?} attr
                 * @return {?}
                 */
                attr => previousContract.push(attr)));
                previousContract.forEach((/**
                 * @param {?} attr
                 * @return {?}
                 */
                attr => this.winRef.document.body.classList.remove(attr)));
                // add new page contract
                if (cmsPage.properties && cmsPage.properties.smartedit) {
                    /** @type {?} */
                    const seClasses = cmsPage.properties.smartedit.classes.split(' ');
                    seClasses.forEach((/**
                     * @param {?} classItem
                     * @return {?}
                     */
                    classItem => {
                        this.winRef.document.body.classList.add(classItem);
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
    /**
     * @type {?}
     * @protected
     */
    SmartEditService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDZDQUE2QyxDQUFDO0FBRTlFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNwRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQUtqRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7OztJQVEzQixZQUNZLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLElBQVksRUFDWixNQUFpQjtRQUpqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQVc7UUFYckIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFhNUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7O2tCQUNqQixNQUFN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QUU7aUJBQ2xELENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7OztJQUVTLGVBQWUsQ0FDdkIsV0FBbUIsRUFDbkIsYUFBc0IsRUFDdEIsUUFBaUI7UUFFakIsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUc7OztZQUFDLEdBQUcsRUFBRTtnQkFDakIsK0JBQStCO2dCQUMvQixJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3FCQUN0RDt5QkFBTTt3QkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7cUJBQ3JDO2lCQUNGO3FCQUFNLElBQUksYUFBYSxFQUFFO29CQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUMvQztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRVMsYUFBYTtRQUNyQiwyQkFBMkI7SUFDN0IsQ0FBQzs7O1lBckpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVJRLFVBQVU7WUFEVixjQUFjO1lBRWQsZUFBZTtZQU5ILE1BQU07WUFRbEIsU0FBUzs7Ozs7Ozs7SUFPaEIsd0NBQTZCOzs7OztJQUM3Qix5Q0FBOEI7Ozs7O0lBQzlCLDBDQUErQjs7Ozs7SUFFL0IscURBQTBDOzs7OztJQUMxQyxzREFBMkM7Ozs7O0lBR3pDLHNDQUFnQzs7Ozs7SUFDaEMsMENBQXdDOzs7OztJQUN4QywyQ0FBMEM7Ozs7O0lBQzFDLGdDQUFzQjs7Ozs7SUFDdEIsa0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlV2hpbGUsIHRha2UsIGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU21hcnRFZGl0U2VydmljZSB7XG4gIHByaXZhdGUgX2Ntc1RpY2tldElkOiBzdHJpbmc7XG4gIHByaXZhdGUgaXNQcmV2aWV3UGFnZSA9IGZhbHNlO1xuICBwcml2YXRlIF9jdXJyZW50UGFnZUlkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlOiBzdHJpbmc7XG4gIHByaXZhdGUgZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHtcbiAgICB0aGlzLmdldENtc1RpY2tldCgpO1xuICAgIHRoaXMuYWRkUGFnZUNvbnRyYWN0KCk7XG5cbiAgICBpZiAod2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgY29uc3Qgd2luZG93ID0gd2luUmVmLm5hdGl2ZVdpbmRvdyBhcyBhbnk7XG4gICAgICAvLyByZXJlbmRlciBjb21wb25lbnRzIGFuZCBzbG90cyBhZnRlciBlZGl0aW5nXG4gICAgICB3aW5kb3cuc21hcnRlZGl0ID0gd2luZG93LnNtYXJ0ZWRpdCB8fCB7fTtcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQucmVuZGVyQ29tcG9uZW50ID0gKFxuICAgICAgICBjb21wb25lbnRJZCxcbiAgICAgICAgY29tcG9uZW50VHlwZSxcbiAgICAgICAgcGFyZW50SWRcbiAgICAgICkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50SWQsIGNvbXBvbmVudFR5cGUsIHBhcmVudElkKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHJlcHJvY2VzcyBwYWdlXG4gICAgICB3aW5kb3cuc21hcnRlZGl0LnJlcHJvY2Vzc1BhZ2UgPSB0aGlzLnJlcHJvY2Vzc1BhZ2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNtc1RpY2tldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ntc1RpY2tldElkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENtc1RpY2tldCgpIHtcbiAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLFxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLFxuICAgIF0pXG4gICAgICAucGlwZSh0YWtlV2hpbGUoKFtjbXNQYWdlXSkgPT4gY21zUGFnZSA9PT0gdW5kZWZpbmVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKFssIHJvdXRlclN0YXRlXSkgPT4ge1xuICAgICAgICBpZiAocm91dGVyU3RhdGUubmV4dFN0YXRlICYmICF0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICAgIHRoaXMuX2Ntc1RpY2tldElkID0gcm91dGVyU3RhdGUubmV4dFN0YXRlLnF1ZXJ5UGFyYW1zWydjbXNUaWNrZXRJZCddO1xuICAgICAgICAgIGlmICh0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmxhdW5jaEluU21hcnRFZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RGVmYXVsdFByZXZpZXdDb2RlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXREZWZhdWx0UHJldmlld0NvZGUoKSB7XG4gICAgdGhpcy5iYXNlU2l0ZVNlcnZpY2VcbiAgICAgIC5nZXRCYXNlU2l0ZURhdGEoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihzaXRlID0+IE9iamVjdC5rZXlzKHNpdGUpLmxlbmd0aCAhPT0gMCksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoc2l0ZSA9PiB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGUgPSBzaXRlLmRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlO1xuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGUgPSBzaXRlLmRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGU7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRQYWdlQ29udHJhY3QoKSB7XG4gICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKCkuc3Vic2NyaWJlKGNtc1BhZ2UgPT4ge1xuICAgICAgaWYgKGNtc1BhZ2UgJiYgdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2VJZCA9IGNtc1BhZ2UucGFnZUlkO1xuXG4gICAgICAgIC8vIGJlZm9yZSBhZGRpbmcgY29udHJhY3QgdG8gcGFnZSwgd2UgbmVlZCByZWRpcmVjdCB0byB0aGF0IHBhZ2VcbiAgICAgICAgdGhpcy5nb1RvUHJldmlld1BhZ2UoY21zUGFnZSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBwYWdlIGNvbnRyYWN0XG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29udHJhY3QgPSBbXTtcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdCkuZm9yRWFjaChhdHRyID0+XG4gICAgICAgICAgcHJldmlvdXNDb250cmFjdC5wdXNoKGF0dHIpXG4gICAgICAgICk7XG4gICAgICAgIHByZXZpb3VzQ29udHJhY3QuZm9yRWFjaChhdHRyID0+XG4gICAgICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGF0dHIpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gYWRkIG5ldyBwYWdlIGNvbnRyYWN0XG4gICAgICAgIGlmIChjbXNQYWdlLnByb3BlcnRpZXMgJiYgY21zUGFnZS5wcm9wZXJ0aWVzLnNtYXJ0ZWRpdCkge1xuICAgICAgICAgIGNvbnN0IHNlQ2xhc3NlcyA9IGNtc1BhZ2UucHJvcGVydGllcy5zbWFydGVkaXQuY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIHNlQ2xhc3Nlcy5mb3JFYWNoKGNsYXNzSXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdvVG9QcmV2aWV3UGFnZShjbXNQYWdlOiBQYWdlKSB7XG4gICAgLy8gb25seSB0aGUgZmlyc3QgcGFnZSBpcyB0aGUgc21hcnRlZGl0IHByZXZpZXcgcGFnZVxuICAgIGlmICghdGhpcy5pc1ByZXZpZXdQYWdlKSB7XG4gICAgICB0aGlzLmlzUHJldmlld1BhZ2UgPSB0cnVlO1xuICAgICAgaWYgKFxuICAgICAgICBjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSAmJlxuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGVcbiAgICAgICkge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IHRoaXMuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZSB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGNtc1BhZ2UudHlwZSA9PT0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRSAmJlxuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgY3hSb3V0ZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICBwYXJhbXM6IHsgY29kZTogdGhpcy5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZSB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29tcG9uZW50KFxuICAgIGNvbXBvbmVudElkOiBzdHJpbmcsXG4gICAgY29tcG9uZW50VHlwZT86IHN0cmluZyxcbiAgICBwYXJlbnRJZD86IHN0cmluZ1xuICApOiBib29sZWFuIHtcbiAgICBpZiAoY29tcG9uZW50SWQpIHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAvLyB3aXRob3V0IHBhcmVudElkLCBpdCBpcyBzbG90XG4gICAgICAgIGlmICghcGFyZW50SWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFBhZ2VJZCkge1xuICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hQYWdlQnlJZCh0aGlzLl9jdXJyZW50UGFnZUlkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hMYXRlc3RQYWdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UucmVmcmVzaENvbXBvbmVudChjb21wb25lbnRJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlcHJvY2Vzc1BhZ2UoKSB7XG4gICAgLy8gVE9ETzogcmVwcm9jZXNzIHBhZ2UgQVBJXG4gIH1cbn1cbiJdfQ==