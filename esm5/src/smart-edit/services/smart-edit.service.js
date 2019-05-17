/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { combineLatest } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { RoutingService } from '../../routing/facade/routing.service';
import { CmsService } from '../../cms/facade/cms.service';
import { WindowRef } from '../../window/window-ref';
import { PageType } from '../../model/cms.model';
import * as i0 from "@angular/core";
import * as i1 from "../../cms/facade/cms.service";
import * as i2 from "../../routing/facade/routing.service";
import * as i3 from "../../window/window-ref";
var SmartEditService = /** @class */ (function () {
    function SmartEditService(cmsService, routingService, zone, winRef) {
        var _this = this;
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.zone = zone;
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
            if (routerState.nextState && !_this._cmsTicketId) {
                _this._cmsTicketId = routerState.nextState.queryParams['cmsTicketId'];
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
                _this._currentPageId = cmsPage.pageId;
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
     * @protected
     * @param {?} cmsPage
     * @return {?}
     */
    SmartEditService.prototype.goToPreviewPage = /**
     * @protected
     * @param {?} cmsPage
     * @return {?}
     */
    function (cmsPage) {
        // the first page is the smartedit preview page
        if (!this.getPreviewPage) {
            this.getPreviewPage = true;
            if (cmsPage.type === PageType.PRODUCT_PAGE) {
                this.routingService.go({
                    cxRoute: 'product',
                    params: { code: 2053367 },
                });
            }
            else if (cmsPage.type === PageType.CATEGORY_PAGE) {
                this.routingService.go({
                    cxRoute: 'category',
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
        var _this = this;
        if (componentId) {
            this.zone.run(function () {
                // without parentId, it is slot
                if (!parentId) {
                    if (_this._currentPageId) {
                        _this.cmsService.refreshPageById(_this._currentPageId);
                    }
                    else {
                        _this.cmsService.refreshLatestPage();
                    }
                }
                else if (componentType) {
                    _this.cmsService.refreshComponent(componentId);
                }
            });
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
        { type: NgZone },
        { type: WindowRef }
    ]; };
    /** @nocollapse */ SmartEditService.ngInjectableDef = i0.defineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(i0.inject(i1.CmsService), i0.inject(i2.RoutingService), i0.inject(i0.NgZone), i0.inject(i3.WindowRef)); }, token: SmartEditService, providedIn: "root" });
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
    SmartEditService.prototype._currentPageId;
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
    SmartEditService.prototype.zone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7OztBQUVqRDtJQVFFLDBCQUNZLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLElBQVksRUFDdEIsTUFBaUI7UUFKbkIsaUJBd0JDO1FBdkJXLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQVE7UUFOaEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFTN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUV2QixJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7O2dCQUNqQixRQUFNLEdBQUcsbUJBQUEsTUFBTSxDQUFDLFlBQVksRUFBTztZQUN6Qyw4Q0FBOEM7WUFDOUMsUUFBTSxDQUFDLFNBQVMsR0FBRyxRQUFNLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQztZQUMxQyxRQUFNLENBQUMsU0FBUyxDQUFDLGVBQWUsR0FBRyxV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OztnQkFQUSxVQUFVO2dCQURWLGNBQWM7Z0JBSkYsTUFBTTtnQkFPbEIsU0FBUzs7OzJCQVBsQjtDQXVJQyxBQTdIRCxJQTZIQztTQTFIWSxnQkFBZ0I7Ozs7OztJQUMzQix3Q0FBNkI7Ozs7O0lBQzdCLDBDQUErQjs7Ozs7SUFDL0IsMENBQStCOzs7OztJQUc3QixzQ0FBZ0M7Ozs7O0lBQ2hDLDBDQUF3Qzs7Ozs7SUFDeEMsZ0NBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTbWFydEVkaXRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY21zVGlja2V0SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBnZXRQcmV2aWV3UGFnZSA9IGZhbHNlO1xuICBwcml2YXRlIF9jdXJyZW50UGFnZUlkOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHdpblJlZjogV2luZG93UmVmXG4gICkge1xuICAgIHRoaXMuZ2V0Q21zVGlja2V0KCk7XG4gICAgdGhpcy5hZGRQYWdlQ29udHJhY3QoKTtcblxuICAgIGlmICh3aW5SZWYubmF0aXZlV2luZG93KSB7XG4gICAgICBjb25zdCB3aW5kb3cgPSB3aW5SZWYubmF0aXZlV2luZG93IGFzIGFueTtcbiAgICAgIC8vIHJlcmVuZGVyIGNvbXBvbmVudHMgYW5kIHNsb3RzIGFmdGVyIGVkaXRpbmdcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQgPSB3aW5kb3cuc21hcnRlZGl0IHx8IHt9O1xuICAgICAgd2luZG93LnNtYXJ0ZWRpdC5yZW5kZXJDb21wb25lbnQgPSAoXG4gICAgICAgIGNvbXBvbmVudElkLFxuICAgICAgICBjb21wb25lbnRUeXBlLFxuICAgICAgICBwYXJlbnRJZFxuICAgICAgKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbXBvbmVudChjb21wb25lbnRJZCwgY29tcG9uZW50VHlwZSwgcGFyZW50SWQpO1xuICAgICAgfTtcblxuICAgICAgLy8gcmVwcm9jZXNzIHBhZ2VcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQucmVwcm9jZXNzUGFnZSA9IHRoaXMucmVwcm9jZXNzUGFnZTtcbiAgICB9XG4gIH1cblxuICBnZXQgY21zVGlja2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY21zVGlja2V0SWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q21zVGlja2V0KCkge1xuICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0Q3VycmVudFBhZ2UoKSxcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKVxuICAgIClcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoW2Ntc1BhZ2VdKSA9PiBjbXNQYWdlID09PSB1bmRlZmluZWQpKVxuICAgICAgLnN1YnNjcmliZSgoWywgcm91dGVyU3RhdGVdKSA9PiB7XG4gICAgICAgIGlmIChyb3V0ZXJTdGF0ZS5uZXh0U3RhdGUgJiYgIXRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgICAgdGhpcy5fY21zVGlja2V0SWQgPSByb3V0ZXJTdGF0ZS5uZXh0U3RhdGUucXVlcnlQYXJhbXNbJ2Ntc1RpY2tldElkJ107XG4gICAgICAgICAgaWYgKHRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UubGF1bmNoSW5TbWFydEVkaXQgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkUGFnZUNvbnRyYWN0KCkge1xuICAgIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLnN1YnNjcmliZShjbXNQYWdlID0+IHtcbiAgICAgIGlmIChjbXNQYWdlICYmIHRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlSWQgPSBjbXNQYWdlLnBhZ2VJZDtcblxuICAgICAgICAvLyBiZWZvcmUgYWRkaW5nIGNvbnRyYWN0LCB3ZSBuZWVkIHJlZGlyZWN0IHRvIHByZXZpZXcgcGFnZVxuICAgICAgICB0aGlzLmdvVG9QcmV2aWV3UGFnZShjbXNQYWdlKTtcblxuICAgICAgICAvLyByZW1vdmUgb2xkIHBhZ2UgY29udHJhY3RcbiAgICAgICAgY29uc3QgcHJldmlvdXNDb250cmFjdCA9IFtdO1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KS5mb3JFYWNoKGF0dHIgPT5cbiAgICAgICAgICBwcmV2aW91c0NvbnRyYWN0LnB1c2goYXR0cilcbiAgICAgICAgKTtcbiAgICAgICAgcHJldmlvdXNDb250cmFjdC5mb3JFYWNoKGF0dHIgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGF0dHIpKTtcblxuICAgICAgICAvLyBhZGQgbmV3IHBhZ2UgY29udHJhY3RcbiAgICAgICAgaWYgKGNtc1BhZ2UucHJvcGVydGllcyAmJiBjbXNQYWdlLnByb3BlcnRpZXMuc21hcnRlZGl0KSB7XG4gICAgICAgICAgY29uc3Qgc2VDbGFzc2VzID0gY21zUGFnZS5wcm9wZXJ0aWVzLnNtYXJ0ZWRpdC5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgc2VDbGFzc2VzLmZvckVhY2goY2xhc3NJdGVtID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChjbGFzc0l0ZW0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ29Ub1ByZXZpZXdQYWdlKGNtc1BhZ2U6IFBhZ2UpIHtcbiAgICAvLyB0aGUgZmlyc3QgcGFnZSBpcyB0aGUgc21hcnRlZGl0IHByZXZpZXcgcGFnZVxuICAgIGlmICghdGhpcy5nZXRQcmV2aWV3UGFnZSkge1xuICAgICAgdGhpcy5nZXRQcmV2aWV3UGFnZSA9IHRydWU7XG5cbiAgICAgIGlmIChjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSkge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IDIwNTMzNjcgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNtc1BhZ2UudHlwZSA9PT0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRSkge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICBjeFJvdXRlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgIHBhcmFtczogeyBjb2RlOiA1NzUgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbXBvbmVudChcbiAgICBjb21wb25lbnRJZDogc3RyaW5nLFxuICAgIGNvbXBvbmVudFR5cGU/OiBzdHJpbmcsXG4gICAgcGFyZW50SWQ/OiBzdHJpbmdcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKGNvbXBvbmVudElkKSB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgLy8gd2l0aG91dCBwYXJlbnRJZCwgaXQgaXMgc2xvdFxuICAgICAgICBpZiAoIXBhcmVudElkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQYWdlSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoUGFnZUJ5SWQodGhpcy5fY3VycmVudFBhZ2VJZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoTGF0ZXN0UGFnZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hDb21wb25lbnQoY29tcG9uZW50SWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXByb2Nlc3NQYWdlKCkge1xuICAgIC8vIFRPRE86IHJlcHJvY2VzcyBwYWdlIEFQSVxuICB9XG59XG4iXX0=