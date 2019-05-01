/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, NgZone } from '@angular/core';
import { combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { CmsService } from '../../cms/facade/cms.service';
import { PageType } from '../../occ/occ-models/index';
import { WindowRef } from '../../window/window-ref';
import * as i0 from "@angular/core";
import * as i1 from "../../cms/facade/cms.service";
import * as i2 from "../../routing/facade/routing.service";
import * as i3 from "../../window/window-ref";
export class SmartEditService {
    /**
     * @param {?} cmsService
     * @param {?} routingService
     * @param {?} zone
     * @param {?} winRef
     */
    constructor(cmsService, routingService, zone, winRef) {
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.zone = zone;
        this.getPreviewPage = false;
        this.getCmsTicket();
        this.addPageContract();
        if (winRef.nativeWindow) {
            /** @type {?} */
            const window = (/** @type {?} */ (winRef.nativeWindow));
            // rerender components and slots after editing
            window.smartedit = window.smartedit || {};
            window.smartedit.renderComponent = (componentId, componentType, parentId) => {
                return this.renderComponent(componentId, componentType, parentId);
            };
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
        combineLatest(this.cmsService.getCurrentPage(), this.routingService.getRouterState())
            .pipe(takeWhile(([cmsPage]) => cmsPage === undefined))
            .subscribe(([, routerState]) => {
            if (routerState.state && !this._cmsTicketId) {
                this._cmsTicketId = routerState.state.queryParams['cmsTicketId'];
                if (this._cmsTicketId) {
                    this.cmsService.launchInSmartEdit = true;
                }
            }
        });
    }
    /**
     * @protected
     * @return {?}
     */
    addPageContract() {
        this.cmsService.getCurrentPage().subscribe(cmsPage => {
            if (cmsPage && this._cmsTicketId) {
                this._currentPageId = cmsPage.pageId;
                // before adding contract, we need redirect to preview page
                this.goToPreviewPage(cmsPage);
                // remove old page contract
                /** @type {?} */
                const previousContract = [];
                Array.from(document.body.classList).forEach(attr => previousContract.push(attr));
                previousContract.forEach(attr => document.body.classList.remove(attr));
                // add new page contract
                if (cmsPage.properties && cmsPage.properties.smartedit) {
                    /** @type {?} */
                    const seClasses = cmsPage.properties.smartedit.classes.split(' ');
                    seClasses.forEach(classItem => {
                        document.body.classList.add(classItem);
                    });
                }
            }
        });
    }
    /**
     * @private
     * @param {?} cmsPage
     * @return {?}
     */
    goToPreviewPage(cmsPage) {
        // the first page is the smartedit preview page
        if (!this.getPreviewPage) {
            this.getPreviewPage = true;
            if (cmsPage.type === PageType.PRODUCT_PAGE) {
                this.routingService.go({
                    route: 'product',
                    params: { code: 2053367 },
                });
            }
            else if (cmsPage.type === PageType.CATEGORY_PAGE) {
                this.routingService.go({
                    route: 'category',
                    params: { code: 575 },
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
            this.zone.run(() => {
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
            });
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
    { type: NgZone },
    { type: WindowRef }
];
/** @nocollapse */ SmartEditService.ngInjectableDef = i0.defineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(i0.inject(i1.CmsService), i0.inject(i2.RoutingService), i0.inject(i0.NgZone), i0.inject(i3.WindowRef)); }, token: SmartEditService, providedIn: "root" });
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
    SmartEditService.prototype.getPreviewPage;
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype._currentPageId;
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype.cmsService;
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype.routingService;
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBS3BELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7Ozs7SUFLM0IsWUFDVSxVQUFzQixFQUN0QixjQUE4QixFQUM5QixJQUFZLEVBQ3BCLE1BQWlCO1FBSFQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsU0FBSSxHQUFKLElBQUksQ0FBUTtRQU5kLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBUzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFOztrQkFDakIsTUFBTSxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxZQUFZLEVBQU87WUFDekMsOENBQThDO1lBQzlDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7WUFDMUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFl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Q0FBOEI7Ozs7O0lBQzlCLDBDQUFzQzs7Ozs7SUFDdEMsZ0NBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNtYXJ0RWRpdFNlcnZpY2Uge1xuICBwcml2YXRlIF9jbXNUaWNrZXRJZDogc3RyaW5nO1xuICBwcml2YXRlIGdldFByZXZpZXdQYWdlID0gZmFsc2U7XG4gIHByaXZhdGUgX2N1cnJlbnRQYWdlSWQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXG4gICAgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7XG4gICAgdGhpcy5nZXRDbXNUaWNrZXQoKTtcbiAgICB0aGlzLmFkZFBhZ2VDb250cmFjdCgpO1xuXG4gICAgaWYgKHdpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIGNvbnN0IHdpbmRvdyA9IHdpblJlZi5uYXRpdmVXaW5kb3cgYXMgYW55O1xuICAgICAgLy8gcmVyZW5kZXIgY29tcG9uZW50cyBhbmQgc2xvdHMgYWZ0ZXIgZWRpdGluZ1xuICAgICAgd2luZG93LnNtYXJ0ZWRpdCA9IHdpbmRvdy5zbWFydGVkaXQgfHwge307XG4gICAgICB3aW5kb3cuc21hcnRlZGl0LnJlbmRlckNvbXBvbmVudCA9IChcbiAgICAgICAgY29tcG9uZW50SWQsXG4gICAgICAgIGNvbXBvbmVudFR5cGUsXG4gICAgICAgIHBhcmVudElkXG4gICAgICApID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudElkLCBjb21wb25lbnRUeXBlLCBwYXJlbnRJZCk7XG4gICAgICB9O1xuXG4gICAgICAvLyByZXByb2Nlc3MgcGFnZVxuICAgICAgd2luZG93LnNtYXJ0ZWRpdC5yZXByb2Nlc3NQYWdlID0gdGhpcy5yZXByb2Nlc3NQYWdlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjbXNUaWNrZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jbXNUaWNrZXRJZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbXNUaWNrZXQoKSB7XG4gICAgY29tYmluZUxhdGVzdChcbiAgICAgIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLFxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpXG4gICAgKVxuICAgICAgLnBpcGUodGFrZVdoaWxlKChbY21zUGFnZV0pID0+IGNtc1BhZ2UgPT09IHVuZGVmaW5lZCkpXG4gICAgICAuc3Vic2NyaWJlKChbLCByb3V0ZXJTdGF0ZV0pID0+IHtcbiAgICAgICAgaWYgKHJvdXRlclN0YXRlLnN0YXRlICYmICF0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICAgIHRoaXMuX2Ntc1RpY2tldElkID0gcm91dGVyU3RhdGUuc3RhdGUucXVlcnlQYXJhbXNbJ2Ntc1RpY2tldElkJ107XG4gICAgICAgICAgaWYgKHRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UubGF1bmNoSW5TbWFydEVkaXQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkUGFnZUNvbnRyYWN0KCkge1xuICAgIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLnN1YnNjcmliZShjbXNQYWdlID0+IHtcbiAgICAgIGlmIChjbXNQYWdlICYmIHRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlSWQgPSBjbXNQYWdlLnBhZ2VJZDtcblxuICAgICAgICAvLyBiZWZvcmUgYWRkaW5nIGNvbnRyYWN0LCB3ZSBuZWVkIHJlZGlyZWN0IHRvIHByZXZpZXcgcGFnZVxuICAgICAgICB0aGlzLmdvVG9QcmV2aWV3UGFnZShjbXNQYWdlKTtcblxuICAgICAgICAvLyByZW1vdmUgb2xkIHBhZ2UgY29udHJhY3RcbiAgICAgICAgY29uc3QgcHJldmlvdXNDb250cmFjdCA9IFtdO1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KS5mb3JFYWNoKGF0dHIgPT5cbiAgICAgICAgICBwcmV2aW91c0NvbnRyYWN0LnB1c2goYXR0cilcbiAgICAgICAgKTtcbiAgICAgICAgcHJldmlvdXNDb250cmFjdC5mb3JFYWNoKGF0dHIgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGF0dHIpKTtcblxuICAgICAgICAvLyBhZGQgbmV3IHBhZ2UgY29udHJhY3RcbiAgICAgICAgaWYgKGNtc1BhZ2UucHJvcGVydGllcyAmJiBjbXNQYWdlLnByb3BlcnRpZXMuc21hcnRlZGl0KSB7XG4gICAgICAgICAgY29uc3Qgc2VDbGFzc2VzID0gY21zUGFnZS5wcm9wZXJ0aWVzLnNtYXJ0ZWRpdC5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgc2VDbGFzc2VzLmZvckVhY2goY2xhc3NJdGVtID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChjbGFzc0l0ZW0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdvVG9QcmV2aWV3UGFnZShjbXNQYWdlOiBQYWdlKSB7XG4gICAgLy8gdGhlIGZpcnN0IHBhZ2UgaXMgdGhlIHNtYXJ0ZWRpdCBwcmV2aWV3IHBhZ2VcbiAgICBpZiAoIXRoaXMuZ2V0UHJldmlld1BhZ2UpIHtcbiAgICAgIHRoaXMuZ2V0UHJldmlld1BhZ2UgPSB0cnVlO1xuXG4gICAgICBpZiAoY21zUGFnZS50eXBlID09PSBQYWdlVHlwZS5QUk9EVUNUX1BBR0UpIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgcm91dGU6ICdwcm9kdWN0JyxcbiAgICAgICAgICBwYXJhbXM6IHsgY29kZTogMjA1MzM2NyB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY21zUGFnZS50eXBlID09PSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFKSB7XG4gICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgIHJvdXRlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgIHBhcmFtczogeyBjb2RlOiA1NzUgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbXBvbmVudChcbiAgICBjb21wb25lbnRJZDogc3RyaW5nLFxuICAgIGNvbXBvbmVudFR5cGU/OiBzdHJpbmcsXG4gICAgcGFyZW50SWQ/OiBzdHJpbmdcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKGNvbXBvbmVudElkKSB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgLy8gd2l0aG91dCBwYXJlbnRJZCwgaXQgaXMgc2xvdFxuICAgICAgICBpZiAoIXBhcmVudElkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQYWdlSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoUGFnZUJ5SWQodGhpcy5fY3VycmVudFBhZ2VJZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoTGF0ZXN0UGFnZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hDb21wb25lbnQoY29tcG9uZW50SWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXByb2Nlc3NQYWdlKCkge1xuICAgIC8vIFRPRE86IHJlcHJvY2VzcyBwYWdlIEFQSVxuICB9XG59XG4iXX0=