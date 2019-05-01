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
import { PageType } from '../../occ/occ-models/index';
import { WindowRef } from '../../window/window-ref';
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztBQUVwRDtJQVFFLDBCQUNVLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLElBQVksRUFDcEIsTUFBaUI7UUFKbkIsaUJBd0JDO1FBdkJTLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFNBQUksR0FBSixJQUFJLENBQVE7UUFOZCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQVM3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTs7Z0JBQ2pCLFFBQU0sR0FBRyxtQkFBQSxNQUFNLENBQUMsWUFBWSxFQUFPO1lBQ3pDLDhDQUE4QztZQUM5QyxRQUFNLENBQUMsU0FBUyxHQUFHLFFBQU0sQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO1lBQzFDLFFBQU0sQ0FBQyxTQUFTLENBQUMsZUFBZSxHQUFHLFVB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O2dCQVBRLFVBQVU7Z0JBRFYsY0FBYztnQkFKRixNQUFNO2dCQVFsQixTQUFTOzs7MkJBUmxCO0NBdUlDLEFBN0hELElBNkhDO1NBMUhZLGdCQUFnQjs7Ozs7O0lBQzNCLHdDQUE2Qjs7Ozs7SUFDN0IsMENBQStCOzs7OztJQUMvQiwwQ0FBK0I7Ozs7O0lBRzdCLHNDQUE4Qjs7Ozs7SUFDOUIsMENBQXNDOzs7OztJQUN0QyxnQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9vY2Mvb2NjLW1vZGVscy9pbmRleCc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU21hcnRFZGl0U2VydmljZSB7XG4gIHByaXZhdGUgX2Ntc1RpY2tldElkOiBzdHJpbmc7XG4gIHByaXZhdGUgZ2V0UHJldmlld1BhZ2UgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY3VycmVudFBhZ2VJZDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcml2YXRlIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSxcbiAgICB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHtcbiAgICB0aGlzLmdldENtc1RpY2tldCgpO1xuICAgIHRoaXMuYWRkUGFnZUNvbnRyYWN0KCk7XG5cbiAgICBpZiAod2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgY29uc3Qgd2luZG93ID0gd2luUmVmLm5hdGl2ZVdpbmRvdyBhcyBhbnk7XG4gICAgICAvLyByZXJlbmRlciBjb21wb25lbnRzIGFuZCBzbG90cyBhZnRlciBlZGl0aW5nXG4gICAgICB3aW5kb3cuc21hcnRlZGl0ID0gd2luZG93LnNtYXJ0ZWRpdCB8fCB7fTtcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQucmVuZGVyQ29tcG9uZW50ID0gKFxuICAgICAgICBjb21wb25lbnRJZCxcbiAgICAgICAgY29tcG9uZW50VHlwZSxcbiAgICAgICAgcGFyZW50SWRcbiAgICAgICkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50SWQsIGNvbXBvbmVudFR5cGUsIHBhcmVudElkKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHJlcHJvY2VzcyBwYWdlXG4gICAgICB3aW5kb3cuc21hcnRlZGl0LnJlcHJvY2Vzc1BhZ2UgPSB0aGlzLnJlcHJvY2Vzc1BhZ2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNtc1RpY2tldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ntc1RpY2tldElkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENtc1RpY2tldCgpIHtcbiAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKCksXG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKClcbiAgICApXG4gICAgICAucGlwZSh0YWtlV2hpbGUoKFtjbXNQYWdlXSkgPT4gY21zUGFnZSA9PT0gdW5kZWZpbmVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKFssIHJvdXRlclN0YXRlXSkgPT4ge1xuICAgICAgICBpZiAocm91dGVyU3RhdGUuc3RhdGUgJiYgIXRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgICAgdGhpcy5fY21zVGlja2V0SWQgPSByb3V0ZXJTdGF0ZS5zdGF0ZS5xdWVyeVBhcmFtc1snY21zVGlja2V0SWQnXTtcbiAgICAgICAgICBpZiAodGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5sYXVuY2hJblNtYXJ0RWRpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRQYWdlQ29udHJhY3QoKSB7XG4gICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKCkuc3Vic2NyaWJlKGNtc1BhZ2UgPT4ge1xuICAgICAgaWYgKGNtc1BhZ2UgJiYgdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2VJZCA9IGNtc1BhZ2UucGFnZUlkO1xuXG4gICAgICAgIC8vIGJlZm9yZSBhZGRpbmcgY29udHJhY3QsIHdlIG5lZWQgcmVkaXJlY3QgdG8gcHJldmlldyBwYWdlXG4gICAgICAgIHRoaXMuZ29Ub1ByZXZpZXdQYWdlKGNtc1BhZ2UpO1xuXG4gICAgICAgIC8vIHJlbW92ZSBvbGQgcGFnZSBjb250cmFjdFxuICAgICAgICBjb25zdCBwcmV2aW91c0NvbnRyYWN0ID0gW107XG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QpLmZvckVhY2goYXR0ciA9PlxuICAgICAgICAgIHByZXZpb3VzQ29udHJhY3QucHVzaChhdHRyKVxuICAgICAgICApO1xuICAgICAgICBwcmV2aW91c0NvbnRyYWN0LmZvckVhY2goYXR0ciA9PiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoYXR0cikpO1xuXG4gICAgICAgIC8vIGFkZCBuZXcgcGFnZSBjb250cmFjdFxuICAgICAgICBpZiAoY21zUGFnZS5wcm9wZXJ0aWVzICYmIGNtc1BhZ2UucHJvcGVydGllcy5zbWFydGVkaXQpIHtcbiAgICAgICAgICBjb25zdCBzZUNsYXNzZXMgPSBjbXNQYWdlLnByb3BlcnRpZXMuc21hcnRlZGl0LmNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgICBzZUNsYXNzZXMuZm9yRWFjaChjbGFzc0l0ZW0gPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNsYXNzSXRlbSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ29Ub1ByZXZpZXdQYWdlKGNtc1BhZ2U6IFBhZ2UpIHtcbiAgICAvLyB0aGUgZmlyc3QgcGFnZSBpcyB0aGUgc21hcnRlZGl0IHByZXZpZXcgcGFnZVxuICAgIGlmICghdGhpcy5nZXRQcmV2aWV3UGFnZSkge1xuICAgICAgdGhpcy5nZXRQcmV2aWV3UGFnZSA9IHRydWU7XG5cbiAgICAgIGlmIChjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSkge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICByb3V0ZTogJ3Byb2R1Y3QnLFxuICAgICAgICAgIHBhcmFtczogeyBjb2RlOiAyMDUzMzY3IH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UpIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgcm91dGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IDU3NSB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29tcG9uZW50KFxuICAgIGNvbXBvbmVudElkOiBzdHJpbmcsXG4gICAgY29tcG9uZW50VHlwZT86IHN0cmluZyxcbiAgICBwYXJlbnRJZD86IHN0cmluZ1xuICApOiBib29sZWFuIHtcbiAgICBpZiAoY29tcG9uZW50SWQpIHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAvLyB3aXRob3V0IHBhcmVudElkLCBpdCBpcyBzbG90XG4gICAgICAgIGlmICghcGFyZW50SWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFBhZ2VJZCkge1xuICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hQYWdlQnlJZCh0aGlzLl9jdXJyZW50UGFnZUlkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hMYXRlc3RQYWdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UucmVmcmVzaENvbXBvbmVudChjb21wb25lbnRJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlcHJvY2Vzc1BhZ2UoKSB7XG4gICAgLy8gVE9ETzogcmVwcm9jZXNzIHBhZ2UgQVBJXG4gIH1cbn1cbiJdfQ==