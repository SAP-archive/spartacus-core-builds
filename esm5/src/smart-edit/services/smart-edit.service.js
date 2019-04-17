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
                    route: [{ name: 'product', params: { code: 2053367 } }],
                });
            }
            else if (cmsPage.type === PageType.CATEGORY_PAGE) {
                this.routingService.go({
                    route: [{ name: 'category', params: { code: 575 } }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7O0FBRXBEO0lBT0UsMEJBQ1UsVUFBc0IsRUFDdEIsY0FBOEIsRUFDdEMsTUFBaUI7UUFIbkIsaUJBdUJDO1FBdEJTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBSmhDLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBTzdCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFdkIsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFOztnQkFDakIsUUFBTSxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxZQUFZLEVBQU87WUFDekMsOENBQThDO1lBQzlDLFFBQU0sQ0FBQyxTQUFTLEdBQUcsUUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7WUFDMUMsUUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEdBQUcsVUFDakMsV0FBVyxFQUNYLGFBQWEsRUFDYixRQUFRO2dCQUVSLE9BQU8sS0FBSSxD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LFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQUUsQ0FBQztpQkFDeEQsQ0FBQyxDQUFDO2FBQ0o7aUJBQU0sSUFBSSxPQUFPLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO29CQUNyQixLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7aUJBQ3JELENBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7OztJQUVTLDBDQUFlOzs7Ozs7O0lBQXpCLFVBQ0UsV0FBbUIsRUFDbkIsYUFBc0IsRUFDdEIsUUFBaUI7UUFFakIsSUFBSSxXQUFXLEVBQUU7WUFDZiwrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDYixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDckM7aUJBQU0sSUFBSSxhQUFhLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDL0M7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFUyx3Q0FBYTs7OztJQUF2QjtRQUNFLDJCQUEyQjtJQUM3QixDQUFDOztnQkFoSEYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFQUSxVQUFVO2dCQURWLGNBQWM7Z0JBSWQsU0FBUzs7OzJCQVJsQjtDQTJIQyxBQWpIRCxJQWlIQztTQTlHWSxnQkFBZ0I7Ozs7OztJQUMzQix3Q0FBNkI7Ozs7O0lBQzdCLDBDQUErQjs7Ozs7SUFHN0Isc0NBQThCOzs7OztJQUM5QiwwQ0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vb2NjL29jYy1tb2RlbHMvaW5kZXgnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNtYXJ0RWRpdFNlcnZpY2Uge1xuICBwcml2YXRlIF9jbXNUaWNrZXRJZDogc3RyaW5nO1xuICBwcml2YXRlIGdldFByZXZpZXdQYWdlID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByaXZhdGUgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHdpblJlZjogV2luZG93UmVmXG4gICkge1xuICAgIHRoaXMuZ2V0Q21zVGlja2V0KCk7XG4gICAgdGhpcy5hZGRQYWdlQ29udHJhY3QoKTtcblxuICAgIGlmICh3aW5SZWYubmF0aXZlV2luZG93KSB7XG4gICAgICBjb25zdCB3aW5kb3cgPSB3aW5SZWYubmF0aXZlV2luZG93IGFzIGFueTtcbiAgICAgIC8vIHJlcmVuZGVyIGNvbXBvbmVudHMgYW5kIHNsb3RzIGFmdGVyIGVkaXRpbmdcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQgPSB3aW5kb3cuc21hcnRlZGl0IHx8IHt9O1xuICAgICAgd2luZG93LnNtYXJ0ZWRpdC5yZW5kZXJDb21wb25lbnQgPSAoXG4gICAgICAgIGNvbXBvbmVudElkLFxuICAgICAgICBjb21wb25lbnRUeXBlLFxuICAgICAgICBwYXJlbnRJZFxuICAgICAgKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbXBvbmVudChjb21wb25lbnRJZCwgY29tcG9uZW50VHlwZSwgcGFyZW50SWQpO1xuICAgICAgfTtcblxuICAgICAgLy8gcmVwcm9jZXNzIHBhZ2VcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQucmVwcm9jZXNzUGFnZSA9IHRoaXMucmVwcm9jZXNzUGFnZTtcbiAgICB9XG4gIH1cblxuICBnZXQgY21zVGlja2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY21zVGlja2V0SWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q21zVGlja2V0KCkge1xuICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0Q3VycmVudFBhZ2UoKSxcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKVxuICAgIClcbiAgICAgIC5waXBlKHRha2VXaGlsZSgoW2Ntc1BhZ2VdKSA9PiBjbXNQYWdlID09PSB1bmRlZmluZWQpKVxuICAgICAgLnN1YnNjcmliZSgoWywgcm91dGVyU3RhdGVdKSA9PiB7XG4gICAgICAgIGlmIChyb3V0ZXJTdGF0ZS5zdGF0ZSAmJiAhdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgICB0aGlzLl9jbXNUaWNrZXRJZCA9IHJvdXRlclN0YXRlLnN0YXRlLnF1ZXJ5UGFyYW1zWydjbXNUaWNrZXRJZCddO1xuICAgICAgICAgIGlmICh0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmxhdW5jaEluU21hcnRFZGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGFkZFBhZ2VDb250cmFjdCgpIHtcbiAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0Q3VycmVudFBhZ2UoKS5zdWJzY3JpYmUoY21zUGFnZSA9PiB7XG4gICAgICBpZiAoY21zUGFnZSAmJiB0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICAvLyBiZWZvcmUgYWRkaW5nIGNvbnRyYWN0LCB3ZSBuZWVkIHJlZGlyZWN0IHRvIHByZXZpZXcgcGFnZVxuICAgICAgICB0aGlzLmdvVG9QcmV2aWV3UGFnZShjbXNQYWdlKTtcblxuICAgICAgICAvLyByZW1vdmUgb2xkIHBhZ2UgY29udHJhY3RcbiAgICAgICAgY29uc3QgcHJldmlvdXNDb250cmFjdCA9IFtdO1xuICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KS5mb3JFYWNoKGF0dHIgPT5cbiAgICAgICAgICBwcmV2aW91c0NvbnRyYWN0LnB1c2goYXR0cilcbiAgICAgICAgKTtcbiAgICAgICAgcHJldmlvdXNDb250cmFjdC5mb3JFYWNoKGF0dHIgPT4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGF0dHIpKTtcblxuICAgICAgICAvLyBhZGQgbmV3IHBhZ2UgY29udHJhY3RcbiAgICAgICAgaWYgKGNtc1BhZ2UucHJvcGVydGllcyAmJiBjbXNQYWdlLnByb3BlcnRpZXMuc21hcnRlZGl0KSB7XG4gICAgICAgICAgY29uc3Qgc2VDbGFzc2VzID0gY21zUGFnZS5wcm9wZXJ0aWVzLnNtYXJ0ZWRpdC5jbGFzc2VzLnNwbGl0KCcgJyk7XG4gICAgICAgICAgc2VDbGFzc2VzLmZvckVhY2goY2xhc3NJdGVtID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChjbGFzc0l0ZW0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdvVG9QcmV2aWV3UGFnZShjbXNQYWdlOiBQYWdlKSB7XG4gICAgLy8gdGhlIGZpcnN0IHBhZ2UgaXMgdGhlIHNtYXJ0ZWRpdCBwcmV2aWV3IHBhZ2VcbiAgICBpZiAoIXRoaXMuZ2V0UHJldmlld1BhZ2UpIHtcbiAgICAgIHRoaXMuZ2V0UHJldmlld1BhZ2UgPSB0cnVlO1xuXG4gICAgICBpZiAoY21zUGFnZS50eXBlID09PSBQYWdlVHlwZS5QUk9EVUNUX1BBR0UpIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgcm91dGU6IFt7IG5hbWU6ICdwcm9kdWN0JywgcGFyYW1zOiB7IGNvZGU6IDIwNTMzNjcgfSB9XSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNtc1BhZ2UudHlwZSA9PT0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRSkge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICByb3V0ZTogW3sgbmFtZTogJ2NhdGVnb3J5JywgcGFyYW1zOiB7IGNvZGU6IDU3NSB9IH1dLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29tcG9uZW50KFxuICAgIGNvbXBvbmVudElkOiBzdHJpbmcsXG4gICAgY29tcG9uZW50VHlwZT86IHN0cmluZyxcbiAgICBwYXJlbnRJZD86IHN0cmluZ1xuICApOiBib29sZWFuIHtcbiAgICBpZiAoY29tcG9uZW50SWQpIHtcbiAgICAgIC8vIHdpdGhvdXQgcGFyZW50SWQsIGl0IGlzIHNsb3RcbiAgICAgIGlmICghcGFyZW50SWQpIHtcbiAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hMYXRlc3RQYWdlKCk7XG4gICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hDb21wb25lbnQoY29tcG9uZW50SWQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlcHJvY2Vzc1BhZ2UoKSB7XG4gICAgLy8gVE9ETzogcmVwcm9jZXNzIHBhZ2UgQVBJXG4gIH1cbn1cbiJdfQ==