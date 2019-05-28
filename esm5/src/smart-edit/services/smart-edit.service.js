/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var SmartEditService = /** @class */ (function () {
    function SmartEditService(cmsService, routingService, baseSiteService, zone, winRef) {
        var _this = this;
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.baseSiteService = baseSiteService;
        this.zone = zone;
        this.isPreviewPage = false;
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
                    _this.getDefaultPreviewCode();
                }
            }
        });
    };
    /**
     * @protected
     * @return {?}
     */
    SmartEditService.prototype.getDefaultPreviewCode = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        this.baseSiteService
            .getBaseSiteData()
            .pipe(filter(function (site) { return Object.keys(site).length !== 0; }), take(1))
            .subscribe(function (site) {
            _this.defaultPreviewCategoryCode = site.defaultPreviewCategoryCode;
            _this.defaultPreviewProductCode = site.defaultPreviewProductCode;
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
                // before adding contract to page, we need redirect to that page
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
        { type: BaseSiteService },
        { type: NgZone },
        { type: WindowRef }
    ]; };
    /** @nocollapse */ SmartEditService.ngInjectableDef = i0.defineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(i0.inject(i1.CmsService), i0.inject(i2.RoutingService), i0.inject(i3.BaseSiteService), i0.inject(i0.NgZone), i0.inject(i4.WindowRef)); }, token: SmartEditService, providedIn: "root" });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzFELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUU5RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7QUFFakQ7SUFXRSwwQkFDWSxVQUFzQixFQUN0QixjQUE4QixFQUM5QixlQUFnQyxFQUNoQyxJQUFZLEVBQ3RCLE1BQWlCO1FBTG5CLGlCQXlCQztRQXhCVyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQVZoQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQWE1QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBRXZCLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTs7Z0JBQ2pCLFFBQU0sR0FBRyxtQkFBQSxNQUFNLENBQUMsWUFBWSxFQUFPO1lB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QUNGO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFUywwQ0FBZTs7Ozs7OztJQUF6QixVQUNFLFdBQW1CLEVBQ25CLGFBQXNCLEVBQ3RCLFFBQWlCO1FBSG5CLGlCQXFCQztRQWhCQyxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2dCQUNaLCtCQUErQjtnQkFDL0IsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixJQUFJLEtBQUksQ0FBQyxjQUFjLEVBQUU7d0JBQ3ZCLEtBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDdEQ7eUJBQU07d0JBQ0wsS0FBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3FCQUNyQztpQkFDRjtxQkFBTSxJQUFJLGFBQWEsRUFBRTtvQkFDeEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDL0M7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVTLHdDQUFhOzs7O0lBQXZCO1FBQ0UsMkJBQTJCO0lBQzdCLENBQUM7O2dCQW5KRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVJRLFVBQVU7Z0JBRFYsY0FBYztnQkFFZCxlQUFlO2dCQU5ILE1BQU07Z0JBUWxCLFNBQVM7OzsyQkFSbEI7Q0ErSkMsQUFwSkQsSUFvSkM7U0FqSlksZ0JBQWdCOzs7Ozs7SUFDM0Isd0NBQTZCOzs7OztJQUM3Qix5Q0FBOEI7Ozs7O0lBQzlCLDBDQUErQjs7Ozs7SUFFL0IscURBQTBDOzs7OztJQUMxQyxzREFBMkM7Ozs7O0lBR3pDLHNDQUFnQzs7Ozs7SUFDaEMsMENBQXdDOzs7OztJQUN4QywyQ0FBMEM7Ozs7O0lBQzFDLGdDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVdoaWxlLCB0YWtlLCBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNtYXJ0RWRpdFNlcnZpY2Uge1xuICBwcml2YXRlIF9jbXNUaWNrZXRJZDogc3RyaW5nO1xuICBwcml2YXRlIGlzUHJldmlld1BhZ2UgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY3VycmVudFBhZ2VJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZTogc3RyaW5nO1xuICBwcml2YXRlIGRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHtcbiAgICB0aGlzLmdldENtc1RpY2tldCgpO1xuICAgIHRoaXMuYWRkUGFnZUNvbnRyYWN0KCk7XG5cbiAgICBpZiAod2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgY29uc3Qgd2luZG93ID0gd2luUmVmLm5hdGl2ZVdpbmRvdyBhcyBhbnk7XG4gICAgICAvLyByZXJlbmRlciBjb21wb25lbnRzIGFuZCBzbG90cyBhZnRlciBlZGl0aW5nXG4gICAgICB3aW5kb3cuc21hcnRlZGl0ID0gd2luZG93LnNtYXJ0ZWRpdCB8fCB7fTtcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQucmVuZGVyQ29tcG9uZW50ID0gKFxuICAgICAgICBjb21wb25lbnRJZCxcbiAgICAgICAgY29tcG9uZW50VHlwZSxcbiAgICAgICAgcGFyZW50SWRcbiAgICAgICkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50SWQsIGNvbXBvbmVudFR5cGUsIHBhcmVudElkKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHJlcHJvY2VzcyBwYWdlXG4gICAgICB3aW5kb3cuc21hcnRlZGl0LnJlcHJvY2Vzc1BhZ2UgPSB0aGlzLnJlcHJvY2Vzc1BhZ2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNtc1RpY2tldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ntc1RpY2tldElkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENtc1RpY2tldCgpIHtcbiAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKCksXG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKClcbiAgICApXG4gICAgICAucGlwZSh0YWtlV2hpbGUoKFtjbXNQYWdlXSkgPT4gY21zUGFnZSA9PT0gdW5kZWZpbmVkKSlcbiAgICAgIC5zdWJzY3JpYmUoKFssIHJvdXRlclN0YXRlXSkgPT4ge1xuICAgICAgICBpZiAocm91dGVyU3RhdGUubmV4dFN0YXRlICYmICF0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICAgIHRoaXMuX2Ntc1RpY2tldElkID0gcm91dGVyU3RhdGUubmV4dFN0YXRlLnF1ZXJ5UGFyYW1zWydjbXNUaWNrZXRJZCddO1xuICAgICAgICAgIGlmICh0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmxhdW5jaEluU21hcnRFZGl0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RGVmYXVsdFByZXZpZXdDb2RlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXREZWZhdWx0UHJldmlld0NvZGUoKSB7XG4gICAgdGhpcy5iYXNlU2l0ZVNlcnZpY2VcbiAgICAgIC5nZXRCYXNlU2l0ZURhdGEoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcihzaXRlID0+IE9iamVjdC5rZXlzKHNpdGUpLmxlbmd0aCAhPT0gMCksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoc2l0ZSA9PiB7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGUgPSBzaXRlLmRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlO1xuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGUgPSBzaXRlLmRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGU7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRQYWdlQ29udHJhY3QoKSB7XG4gICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKCkuc3Vic2NyaWJlKGNtc1BhZ2UgPT4ge1xuICAgICAgaWYgKGNtc1BhZ2UgJiYgdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2VJZCA9IGNtc1BhZ2UucGFnZUlkO1xuXG4gICAgICAgIC8vIGJlZm9yZSBhZGRpbmcgY29udHJhY3QgdG8gcGFnZSwgd2UgbmVlZCByZWRpcmVjdCB0byB0aGF0IHBhZ2VcbiAgICAgICAgdGhpcy5nb1RvUHJldmlld1BhZ2UoY21zUGFnZSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBwYWdlIGNvbnRyYWN0XG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29udHJhY3QgPSBbXTtcbiAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNsYXNzTGlzdCkuZm9yRWFjaChhdHRyID0+XG4gICAgICAgICAgcHJldmlvdXNDb250cmFjdC5wdXNoKGF0dHIpXG4gICAgICAgICk7XG4gICAgICAgIHByZXZpb3VzQ29udHJhY3QuZm9yRWFjaChhdHRyID0+IGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShhdHRyKSk7XG5cbiAgICAgICAgLy8gYWRkIG5ldyBwYWdlIGNvbnRyYWN0XG4gICAgICAgIGlmIChjbXNQYWdlLnByb3BlcnRpZXMgJiYgY21zUGFnZS5wcm9wZXJ0aWVzLnNtYXJ0ZWRpdCkge1xuICAgICAgICAgIGNvbnN0IHNlQ2xhc3NlcyA9IGNtc1BhZ2UucHJvcGVydGllcy5zbWFydGVkaXQuY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIHNlQ2xhc3Nlcy5mb3JFYWNoKGNsYXNzSXRlbSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdvVG9QcmV2aWV3UGFnZShjbXNQYWdlOiBQYWdlKSB7XG4gICAgLy8gb25seSB0aGUgZmlyc3QgcGFnZSBpcyB0aGUgc21hcnRlZGl0IHByZXZpZXcgcGFnZVxuICAgIGlmICghdGhpcy5pc1ByZXZpZXdQYWdlKSB7XG4gICAgICB0aGlzLmlzUHJldmlld1BhZ2UgPSB0cnVlO1xuICAgICAgaWYgKFxuICAgICAgICBjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSAmJlxuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGVcbiAgICAgICkge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IHRoaXMuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZSB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGNtc1BhZ2UudHlwZSA9PT0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRSAmJlxuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgY3hSb3V0ZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICBwYXJhbXM6IHsgY29kZTogdGhpcy5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZSB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29tcG9uZW50KFxuICAgIGNvbXBvbmVudElkOiBzdHJpbmcsXG4gICAgY29tcG9uZW50VHlwZT86IHN0cmluZyxcbiAgICBwYXJlbnRJZD86IHN0cmluZ1xuICApOiBib29sZWFuIHtcbiAgICBpZiAoY29tcG9uZW50SWQpIHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAvLyB3aXRob3V0IHBhcmVudElkLCBpdCBpcyBzbG90XG4gICAgICAgIGlmICghcGFyZW50SWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFBhZ2VJZCkge1xuICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hQYWdlQnlJZCh0aGlzLl9jdXJyZW50UGFnZUlkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hMYXRlc3RQYWdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UucmVmcmVzaENvbXBvbmVudChjb21wb25lbnRJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlcHJvY2Vzc1BhZ2UoKSB7XG4gICAgLy8gVE9ETzogcmVwcm9jZXNzIHBhZ2UgQVBJXG4gIH1cbn1cbiJdfQ==