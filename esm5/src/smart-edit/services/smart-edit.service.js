/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
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
var SmartEditService = /** @class */ (function () {
    function SmartEditService(cmsService, routingService, winRef) {
        var _this = this;
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.getPreviewPage = false;
        this.getCmsTicket();
        this.addPageContract();
        if (winRef.nativeWindow) {
            /** @type {?} */
            var window_1 = (/** @type {?} */ (winRef.nativeWindow));
            // rerender components and slots after editing
            window_1.smartedit = window_1.smartedit || {};
            window_1.smartedit.renderComponent = function (componentId, componentType, parentId) {
                return _this.renderComponent(componentId, componentType, parentId);
            };
            // reprocess page
            window_1.smartedit.reprocessPage = this.reprocessPage;
        }
    }
    Object.defineProperty(SmartEditService.prototype, "cmsTicketId", {
        get: /**
         * @return {?}
         */
        function () {
            return this._cmsTicketId;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @protected
     * @return {?}
     */
    SmartEditService.prototype.getCmsTicket = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        combineLatest(this.cmsService.getCurrentPage(), this.routingService.getRouterState())
            .pipe(takeWhile(function (_a) {
            var _b = tslib_1.__read(_a, 1), cmsPage = _b[0];
            return cmsPage === undefined;
        }))
            .subscribe(function (_a) {
            var _b = tslib_1.__read(_a, 2), routerState = _b[1];
            if (routerState.state && !_this._cmsTicketId) {
                _this._cmsTicketId = routerState.state.queryParams['cmsTicketId'];
                if (_this._cmsTicketId) {
                    _this.cmsService.launchInSmartEdit = true;
                }
            }
        });
    };
    /**
     * @protected
     * @return {?}
     */
    SmartEditService.prototype.addPageContract = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.cmsService.getCurrentPage().subscribe(function (cmsPage) {
            if (cmsPage && _this._cmsTicketId) {
                // before adding contract, we need redirect to preview page
                _this.goToPreviewPage(cmsPage);
                // remove old page contract
                /** @type {?} */
                var previousContract_1 = [];
                Array.from(document.body.classList).forEach(function (attr) {
                    return previousContract_1.push(attr);
                });
                previousContract_1.forEach(function (attr) { return document.body.classList.remove(attr); });
                // add new page contract
                if (cmsPage.properties && cmsPage.properties.smartedit) {
                    /** @type {?} */
                    var seClasses = cmsPage.properties.smartedit.classes.split(' ');
                    seClasses.forEach(function (classItem) {
                        document.body.classList.add(classItem);
                    });
                }
            }
        });
    };
    /**
     * @private
     * @param {?} cmsPage
     * @return {?}
     */
    SmartEditService.prototype.goToPreviewPage = /**
     * @private
     * @param {?} cmsPage
     * @return {?}
     */
    function (cmsPage) {
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
    };
    /**
     * @protected
     * @param {?} componentId
     * @param {?=} componentType
     * @param {?=} parentId
     * @return {?}
     */
    SmartEditService.prototype.renderComponent = /**
     * @protected
     * @param {?} componentId
     * @param {?=} componentType
     * @param {?=} parentId
     * @return {?}
     */
    function (componentId, componentType, parentId) {
        if (componentId) {
            // without parentId, it is slot
            if (!parentId) {
                this.cmsService.refreshLatestPage();
            }
            else if (componentType) {
                this.cmsService.refreshComponent(componentId);
            }
        }
        return true;
    };
    /**
     * @protected
     * @return {?}
     */
    SmartEditService.prototype.reprocessPage = /**
     * @protected
     * @return {?}
     */
    function () {
        // TODO: reprocess page API
    };
    SmartEditService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    SmartEditService.ctorParameters = function () { return [
        { type: CmsService },
        { type: RoutingService },
        { type: WindowRef }
    ]; };
    /** @nocollapse */ SmartEditService.ngInjectableDef = i0.defineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(i0.inject(i1.CmsService), i0.inject(i2.RoutingService), i0.inject(i3.WindowRef)); }, token: SmartEditService, providedIn: "root" });
    return SmartEditService;
}());
export { SmartEditService };
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
    SmartEditService.prototype.cmsService;
    /**
     * @type {?}
     * @private
     */
    SmartEditService.prototype.routingService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBRXBEO0lBT0UsMEJBQ1UsVUFBc0IsRUFDdEIsY0FBOEIsRUFDdEMsTUFBaUI7UUFIbkIsaUJBdUJDO1FBdEJTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSmhDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBTzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFOztnQkFDakIsUUFBTSxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxZQUFZLEVBQU87WUFDekMsOENBQThDO1lBQzlDLFFBQU0sQ0FBQyxTQUFTLEdBQUcsUUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7WUFDMUMsUUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsVUFDakMsV0FBVyxFQUNYLGFBQWEsRUFDYixRQUFRO2dCQUVSLE9BQU8sS0FBSSxD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QUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFO2lCQUMxQixDQUFDLENBQUM7YUFDSjtpQkFBTSxJQUFJLE9BQU8sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLGFBQWEsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ3JCLEtBQUssRUFBRSxVQUFVO29CQUNqQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO2lCQUN0QixDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFUywwQ0FBZTs7Ozs7OztJQUF6QixVQUNFLFdBQW1CLEVBQ25CLGFBQXNCLEVBQ3RCLFFBQWlCO1FBRWpCLElBQUksV0FBVyxFQUFFO1lBQ2YsK0JBQStCO1lBQy9CLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ3JDO2lCQUFNLElBQUksYUFBYSxFQUFFO2dCQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRVMsd0NBQWE7Ozs7SUFBdkI7UUFDRSwyQkFBMkI7SUFDN0IsQ0FBQzs7Z0JBbEhGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUFEsVUFBVTtnQkFEVixjQUFjO2dCQUlkLFNBQVM7OzsyQkFSbEI7Q0E2SEMsQUFuSEQsSUFtSEM7U0FoSFksZ0JBQWdCOzs7Ozs7SUFDM0Isd0NBQTZCOzs7OztJQUM3QiwwQ0FBK0I7Ozs7O0lBRzdCLHNDQUE4Qjs7Ozs7SUFDOUIsMENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL29jYy9vY2MtbW9kZWxzL2luZGV4JztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTbWFydEVkaXRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY21zVGlja2V0SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBnZXRQcmV2aWV3UGFnZSA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHtcbiAgICB0aGlzLmdldENtc1RpY2tldCgpO1xuICAgIHRoaXMuYWRkUGFnZUNvbnRyYWN0KCk7XG5cbiAgICBpZiAod2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgY29uc3Qgd2luZG93ID0gd2luUmVmLm5hdGl2ZVdpbmRvdyBhcyBhbnk7XG4gICAgICAvLyByZXJlbmRlciBjb21wb25lbnRzIGFuZCBzbG90cyBhZnRlciBlZGl0aW5nXG4gICAgICB3aW5kb3cuc21hcnRlZGl0ID0gd2luZG93LnNtYXJ0ZWRpdCB8fCB7fTtcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQucmVuZGVyQ29tcG9uZW50ID0gKFxuICAgICAgICBjb21wb25lbnRJZCxcbiAgICAgICAgY29tcG9uZW50VHlwZSxcbiAgICAgICAgcGFyZW50SWRcbiAgICAgICkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50SWQsIGNvbXBvbmVudFR5cGUsIHBhcmVudElkKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHJlcHJvY2VzcyBwYWdlXG4gICAgICB3aW5kb3cuc21hcnRlZGl0LnJlcHJvY2Vzc1BhZ2UgPSB0aGlzLnJlcHJvY2Vzc1BhZ2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNtc1RpY2tldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ntc1RpY2tldElkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENtc1RpY2tldCgpIHtcbiAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKCksXG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKClcbiAgICApXG4gICAgICAucGlwZSh0YWtlV2hpbGUoKFtjbXNQYWdlXSkgPT4gY21zUGFnZSA9PT0gdW5kZWZpbmVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKFssIHJvdXRlclN0YXRlXSkgPT4ge1xuICAgICAgICBpZiAocm91dGVyU3RhdGUuc3RhdGUgJiYgIXRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgICAgdGhpcy5fY21zVGlja2V0SWQgPSByb3V0ZXJTdGF0ZS5zdGF0ZS5xdWVyeVBhcmFtc1snY21zVGlja2V0SWQnXTtcbiAgICAgICAgICBpZiAodGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5sYXVuY2hJblNtYXJ0RWRpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRQYWdlQ29udHJhY3QoKSB7XG4gICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKCkuc3Vic2NyaWJlKGNtc1BhZ2UgPT4ge1xuICAgICAgaWYgKGNtc1BhZ2UgJiYgdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgLy8gYmVmb3JlIGFkZGluZyBjb250cmFjdCwgd2UgbmVlZCByZWRpcmVjdCB0byBwcmV2aWV3IHBhZ2VcbiAgICAgICAgdGhpcy5nb1RvUHJldmlld1BhZ2UoY21zUGFnZSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBwYWdlIGNvbnRyYWN0XG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29udHJhY3QgPSBbXTtcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNsYXNzTGlzdCkuZm9yRWFjaChhdHRyID0+XG4gICAgICAgICAgcHJldmlvdXNDb250cmFjdC5wdXNoKGF0dHIpXG4gICAgICAgICk7XG4gICAgICAgIHByZXZpb3VzQ29udHJhY3QuZm9yRWFjaChhdHRyID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShhdHRyKSk7XG5cbiAgICAgICAgLy8gYWRkIG5ldyBwYWdlIGNvbnRyYWN0XG4gICAgICAgIGlmIChjbXNQYWdlLnByb3BlcnRpZXMgJiYgY21zUGFnZS5wcm9wZXJ0aWVzLnNtYXJ0ZWRpdCkge1xuICAgICAgICAgIGNvbnN0IHNlQ2xhc3NlcyA9IGNtc1BhZ2UucHJvcGVydGllcy5zbWFydGVkaXQuY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIHNlQ2xhc3Nlcy5mb3JFYWNoKGNsYXNzSXRlbSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnb1RvUHJldmlld1BhZ2UoY21zUGFnZTogUGFnZSkge1xuICAgIC8vIHRoZSBmaXJzdCBwYWdlIGlzIHRoZSBzbWFydGVkaXQgcHJldmlldyBwYWdlXG4gICAgaWYgKCF0aGlzLmdldFByZXZpZXdQYWdlKSB7XG4gICAgICB0aGlzLmdldFByZXZpZXdQYWdlID0gdHJ1ZTtcblxuICAgICAgaWYgKGNtc1BhZ2UudHlwZSA9PT0gUGFnZVR5cGUuUFJPRFVDVF9QQUdFKSB7XG4gICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgIHJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IDIwNTMzNjcgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNtc1BhZ2UudHlwZSA9PT0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRSkge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICByb3V0ZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICBwYXJhbXM6IHsgY29kZTogNTc1IH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb21wb25lbnQoXG4gICAgY29tcG9uZW50SWQ6IHN0cmluZyxcbiAgICBjb21wb25lbnRUeXBlPzogc3RyaW5nLFxuICAgIHBhcmVudElkPzogc3RyaW5nXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChjb21wb25lbnRJZCkge1xuICAgICAgLy8gd2l0aG91dCBwYXJlbnRJZCwgaXQgaXMgc2xvdFxuICAgICAgaWYgKCFwYXJlbnRJZCkge1xuICAgICAgICB0aGlzLmNtc1NlcnZpY2UucmVmcmVzaExhdGVzdFBhZ2UoKTtcbiAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50VHlwZSkge1xuICAgICAgICB0aGlzLmNtc1NlcnZpY2UucmVmcmVzaENvbXBvbmVudChjb21wb25lbnRJZCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVwcm9jZXNzUGFnZSgpIHtcbiAgICAvLyBUT0RPOiByZXByb2Nlc3MgcGFnZSBBUElcbiAgfVxufVxuIl19