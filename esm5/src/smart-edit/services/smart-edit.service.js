/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable, NgZone } from '@angular/core';
import { combineLatest } from 'rxjs';
import { filter, take, takeWhile } from 'rxjs/operators';
import { CmsService } from '../../cms/facade/cms.service';
import { PageType } from '../../model/cms.model';
import { RoutingService } from '../../routing/facade/routing.service';
import { BaseSiteService } from '../../site-context/facade/base-site.service';
import { WindowRef } from '../../window/window-ref';
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
        this.winRef = winRef;
        this.isPreviewPage = false;
        this.getCmsTicket();
        if (winRef.nativeWindow) {
            /** @type {?} */
            var window_1 = (/** @type {?} */ (winRef.nativeWindow));
            // rerender components and slots after editing
            window_1.smartedit = window_1.smartedit || {};
            window_1.smartedit.renderComponent = (/**
             * @param {?} componentId
             * @param {?} componentType
             * @param {?} parentId
             * @return {?}
             */
            function (componentId, componentType, parentId) {
                return _this.renderComponent(componentId, componentType, parentId);
            });
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
        combineLatest([
            this.cmsService.getCurrentPage(),
            this.routingService.getRouterState(),
        ])
            .pipe(takeWhile((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 1), cmsPage = _b[0];
            return cmsPage === undefined;
        })), filter((/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var _b = tslib_1.__read(_a, 2), routerState = _b[1];
            if (routerState.nextState && !_this._cmsTicketId) {
                _this._cmsTicketId =
                    routerState.nextState.queryParams['cmsTicketId'];
                if (_this._cmsTicketId) {
                    return true;
                }
            }
            return false;
        })), take(1))
            .subscribe((/**
         * @param {?} _
         * @return {?}
         */
        function (_) {
            _this.cmsService.launchInSmartEdit = true;
            _this.getDefaultPreviewCode();
        }));
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
            .pipe(filter((/**
         * @param {?} site
         * @return {?}
         */
        function (site) { return Object.keys(site).length !== 0; })), take(1))
            .subscribe((/**
         * @param {?} site
         * @return {?}
         */
        function (site) {
            _this.defaultPreviewCategoryCode = site.defaultPreviewCategoryCode;
            _this.defaultPreviewProductCode = site.defaultPreviewProductCode;
            _this.addPageContract();
        }));
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
        this.cmsService.getCurrentPage().subscribe((/**
         * @param {?} cmsPage
         * @return {?}
         */
        function (cmsPage) {
            if (cmsPage && _this._cmsTicketId) {
                _this._currentPageId = cmsPage.pageId;
                // before adding contract to page, we need redirect to that page
                _this.goToPreviewPage(cmsPage);
                // remove old page contract
                /** @type {?} */
                var previousContract_1 = [];
                Array.from(_this.winRef.document.body.classList).forEach((/**
                 * @param {?} attr
                 * @return {?}
                 */
                function (attr) {
                    return previousContract_1.push(attr);
                }));
                previousContract_1.forEach((/**
                 * @param {?} attr
                 * @return {?}
                 */
                function (attr) {
                    return _this.winRef.document.body.classList.remove(attr);
                }));
                // add new page contract
                if (cmsPage.properties && cmsPage.properties.smartedit) {
                    /** @type {?} */
                    var seClasses = cmsPage.properties.smartedit.classes.split(' ');
                    seClasses.forEach((/**
                     * @param {?} classItem
                     * @return {?}
                     */
                    function (classItem) {
                        _this.winRef.document.body.classList.add(classItem);
                    }));
                }
            }
        }));
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
                    params: { code: this.defaultPreviewProductCode, name: '' },
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
            this.zone.run((/**
             * @return {?}
             */
            function () {
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
            }));
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
    /** @nocollapse */ SmartEditService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i3.BaseSiteService), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i4.WindowRef)); }, token: SmartEditService, providedIn: "root" });
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
    /**
     * @type {?}
     * @protected
     */
    SmartEditService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7QUFFcEQ7SUFXRSwwQkFDWSxVQUFzQixFQUN0QixjQUE4QixFQUM5QixlQUFnQyxFQUNoQyxJQUFZLEVBQ1osTUFBaUI7UUFMN0IsaUJBd0JDO1FBdkJXLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osV0FBTSxHQUFOLE1BQU0sQ0FBVztRQVhyQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQWE1QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFOztnQkFDakIsUUFBTSxHQUFHLG1CQUFBLE1BQU0sQ0FBQyxZQUFZLEVBQU87WUFDekMsOENBQThDO1lBQzlDLFFBQU0sQ0FBQyxTQUFTLEdBQUcsUUFBTSxDQUFDLFNBQVMsSUFBSSxFQUFFLENBQUM7WUFDMUMsUUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlOzs7Ozs7WUFBRyxVQUNqQyxXQUFXLEVBQ1gsYUFBYSxFQUNiLFFBQVE7Z0JBRVIsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsRUFBRSxhQUFhLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFBLENBQUM7WUFFRixpQkFBaUI7WUFDakIsUUFBTSxDQUFDLFNBQVMsQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUNyRDtJQUNILENBQUM7SUFFRCxzQkFBSSx5Q0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7OztJQUVTLHVDQUFZOzs7O0lBQXRCO1FBQUEsaUJBdUJDO1FBdEJDLGFBQWEsQ0FBQztZQUNaLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxFQUFFO1NBQ3JDLENBQUM7YUFDQyxJQUFJLENBQ0gsU0FBUzs7OztRQUFDLFVBQUMsRUFBUztnQkFBVCwwQkFBUyxFQUFSLGVBQU87WUFBTSxPQUFBLE9BQU8sS0FBSyxTQUFTO1FBQXJCLENBQXFCLEVBQUMsRUFDL0MsTUFBTTs7OztRQUFDLFVBQUMsRUFBZTtnQkFBZiwwQkFBZSxFQUFaLG1CQUFXO1lBQ3BCLElBQUksV0FBVyxDQUFDLFNBQVMsSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQy9DLEtBQUksQ0FBQyxZQUFZO29CQUNmLFdBQVcsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO2dCQUNuRCxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3JCLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUMsRUFBQyxFQUNGLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FDUjthQUNBLFNBQVM7Ozs7UUFBQyxVQUFBLENBQUM7WUFDVixLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQztZQUN6QyxLQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMvQixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRVMsZ0RBQXFCOzs7O0lBQS9CO1FBQUEsaUJBYUM7UUFaQyxJQUFJLENBQUMsZUFBZTthQUNqQixlQUFlLEVBQUU7YUFDakIsSUFBSSxDQUNILE1BQU07Ozs7UUFBQyxVQUFBLElBQUksSUFBSSxPQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBOUIsQ0FBOEIsRUFBQyxFQUM5QyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQ1I7YUFDQSxTQUFTOzs7O1FBQUMsVUFBQSxJQUFJO1lBQ2IsS0FBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQztZQUNsRSxLQUFJLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLHlCQUF5QixDQUFDO1lBRWhFLEtBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUN6QixDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7Ozs7O0lBRVMsMENBQWU7Ozs7SUFBekI7UUFBQSxpQkEwQkM7UUF6QkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQ2hELElBQUksT0FBTyxJQUFJLEtBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ2hDLEtBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQztnQkFFckMsZ0VBQWdFO2dCQUNoRSxLQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDOzs7b0JBR3hCLGtCQUFnQixHQUFHLEVBQUU7Z0JBQzNCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLE9BQU87Ozs7Z0JBQUMsVUFBQSxJQUFJO29CQUMxRCxPQUFBLGtCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQTNCLENBQTJCLEVBQzVCLENBQUM7Z0JBQ0Ysa0JBQWdCLENBQUMsT0FBTzs7OztnQkFBQyxVQUFBLElBQUk7b0JBQzNCLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUFoRCxDQUFnRCxFQUNqRCxDQUFDO2dCQUVGLHdCQUF3QjtnQkFDeEIsSUFBSSxPQUFPLENBQUMsVUFBVSxJQUFJLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxFQUFFOzt3QkFDaEQsU0FBUyxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO29CQUNqRSxTQUFTLENBQUMsT0FBTzs7OztvQkFBQyxVQUFBLFNBQVM7d0JBQ3pCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNyRCxDQUFDLEVBQUMsQ0FBQztpQkFDSjthQUNGO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7Ozs7SUFFUywwQ0FBZTs7Ozs7SUFBekIsVUFBMEIsT0FBYTtRQUNyQyxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7WUFDMUIsSUFDRSxPQUFPLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyxZQUFZO2dCQUN0QyxJQUFJLENBQUMseUJBQXlCLEVBQzlCO2dCQUNBLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDO29CQUNyQixPQUFPLEVBQUUsU0FBUztvQkFDbEIsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFO2lCQUMzRCxDQUFDLENBQUM7YUFDSjtpQkFBTSxJQUNMLE9BQU8sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLGFBQWE7Z0JBQ3ZDLElBQUksQ0FBQywwQkFBMEIsRUFDL0I7Z0JBQ0EsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ3JCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixFQUFFO2lCQUNsRCxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFUywwQ0FBZTs7Ozs7OztJQUF6QixVQUNFLFdBQW1CLEVBQ25CLGFBQXNCLEVBQ3RCLFFBQWlCO1FBSG5CLGlCQXFCQztRQWhCQyxJQUFJLFdBQVcsRUFBRTtZQUNmLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRzs7O1lBQUM7Z0JBQ1osK0JBQStCO2dCQUMvQixJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNiLElBQUksS0FBSSxDQUFDLGNBQWMsRUFBRTt3QkFDdkIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3FCQUN0RDt5QkFBTTt3QkFDTCxLQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLENBQUM7cUJBQ3JDO2lCQUNGO3FCQUFNLElBQUksYUFBYSxFQUFFO29CQUN4QixLQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUMvQztZQUNILENBQUMsRUFBQyxDQUFDO1NBQ0o7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7Ozs7O0lBRVMsd0NBQWE7Ozs7SUFBdkI7UUFDRSwyQkFBMkI7SUFDN0IsQ0FBQzs7Z0JBOUpGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVFEsVUFBVTtnQkFHVixjQUFjO2dCQUNkLGVBQWU7Z0JBUEgsTUFBTTtnQkFRbEIsU0FBUzs7OzJCQVJsQjtDQXlLQyxBQS9KRCxJQStKQztTQTVKWSxnQkFBZ0I7Ozs7OztJQUMzQix3Q0FBNkI7Ozs7O0lBQzdCLHlDQUE4Qjs7Ozs7SUFDOUIsMENBQStCOzs7OztJQUUvQixxREFBMEM7Ozs7O0lBQzFDLHNEQUEyQzs7Ozs7SUFHekMsc0NBQWdDOzs7OztJQUNoQywwQ0FBd0M7Ozs7O0lBQ3hDLDJDQUEwQzs7Ozs7SUFDMUMsZ0NBQXNCOzs7OztJQUN0QixrQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSwgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU21hcnRFZGl0U2VydmljZSB7XG4gIHByaXZhdGUgX2Ntc1RpY2tldElkOiBzdHJpbmc7XG4gIHByaXZhdGUgaXNQcmV2aWV3UGFnZSA9IGZhbHNlO1xuICBwcml2YXRlIF9jdXJyZW50UGFnZUlkOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlOiBzdHJpbmc7XG4gIHByaXZhdGUgZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHtcbiAgICB0aGlzLmdldENtc1RpY2tldCgpO1xuXG4gICAgaWYgKHdpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIGNvbnN0IHdpbmRvdyA9IHdpblJlZi5uYXRpdmVXaW5kb3cgYXMgYW55O1xuICAgICAgLy8gcmVyZW5kZXIgY29tcG9uZW50cyBhbmQgc2xvdHMgYWZ0ZXIgZWRpdGluZ1xuICAgICAgd2luZG93LnNtYXJ0ZWRpdCA9IHdpbmRvdy5zbWFydGVkaXQgfHwge307XG4gICAgICB3aW5kb3cuc21hcnRlZGl0LnJlbmRlckNvbXBvbmVudCA9IChcbiAgICAgICAgY29tcG9uZW50SWQsXG4gICAgICAgIGNvbXBvbmVudFR5cGUsXG4gICAgICAgIHBhcmVudElkXG4gICAgICApID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudElkLCBjb21wb25lbnRUeXBlLCBwYXJlbnRJZCk7XG4gICAgICB9O1xuXG4gICAgICAvLyByZXByb2Nlc3MgcGFnZVxuICAgICAgd2luZG93LnNtYXJ0ZWRpdC5yZXByb2Nlc3NQYWdlID0gdGhpcy5yZXByb2Nlc3NQYWdlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjbXNUaWNrZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jbXNUaWNrZXRJZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbXNUaWNrZXQoKSB7XG4gICAgY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0Q3VycmVudFBhZ2UoKSxcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKSxcbiAgICBdKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VXaGlsZSgoW2Ntc1BhZ2VdKSA9PiBjbXNQYWdlID09PSB1bmRlZmluZWQpLFxuICAgICAgICBmaWx0ZXIoKFssIHJvdXRlclN0YXRlXSkgPT4ge1xuICAgICAgICAgIGlmIChyb3V0ZXJTdGF0ZS5uZXh0U3RhdGUgJiYgIXRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgICAgICB0aGlzLl9jbXNUaWNrZXRJZCA9XG4gICAgICAgICAgICAgIHJvdXRlclN0YXRlLm5leHRTdGF0ZS5xdWVyeVBhcmFtc1snY21zVGlja2V0SWQnXTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShfID0+IHtcbiAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmxhdW5jaEluU21hcnRFZGl0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXREZWZhdWx0UHJldmlld0NvZGUoKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldERlZmF1bHRQcmV2aWV3Q29kZSgpIHtcbiAgICB0aGlzLmJhc2VTaXRlU2VydmljZVxuICAgICAgLmdldEJhc2VTaXRlRGF0YSgpXG4gICAgICAucGlwZShcbiAgICAgICAgZmlsdGVyKHNpdGUgPT4gT2JqZWN0LmtleXMoc2l0ZSkubGVuZ3RoICE9PSAwKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZShzaXRlID0+IHtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZSA9IHNpdGUuZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGU7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZSA9IHNpdGUuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZTtcblxuICAgICAgICB0aGlzLmFkZFBhZ2VDb250cmFjdCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkUGFnZUNvbnRyYWN0KCkge1xuICAgIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLnN1YnNjcmliZShjbXNQYWdlID0+IHtcbiAgICAgIGlmIChjbXNQYWdlICYmIHRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRQYWdlSWQgPSBjbXNQYWdlLnBhZ2VJZDtcblxuICAgICAgICAvLyBiZWZvcmUgYWRkaW5nIGNvbnRyYWN0IHRvIHBhZ2UsIHdlIG5lZWQgcmVkaXJlY3QgdG8gdGhhdCBwYWdlXG4gICAgICAgIHRoaXMuZ29Ub1ByZXZpZXdQYWdlKGNtc1BhZ2UpO1xuXG4gICAgICAgIC8vIHJlbW92ZSBvbGQgcGFnZSBjb250cmFjdFxuICAgICAgICBjb25zdCBwcmV2aW91c0NvbnRyYWN0ID0gW107XG4gICAgICAgIEFycmF5LmZyb20odGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QpLmZvckVhY2goYXR0ciA9PlxuICAgICAgICAgIHByZXZpb3VzQ29udHJhY3QucHVzaChhdHRyKVxuICAgICAgICApO1xuICAgICAgICBwcmV2aW91c0NvbnRyYWN0LmZvckVhY2goYXR0ciA9PlxuICAgICAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShhdHRyKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGFkZCBuZXcgcGFnZSBjb250cmFjdFxuICAgICAgICBpZiAoY21zUGFnZS5wcm9wZXJ0aWVzICYmIGNtc1BhZ2UucHJvcGVydGllcy5zbWFydGVkaXQpIHtcbiAgICAgICAgICBjb25zdCBzZUNsYXNzZXMgPSBjbXNQYWdlLnByb3BlcnRpZXMuc21hcnRlZGl0LmNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgICBzZUNsYXNzZXMuZm9yRWFjaChjbGFzc0l0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKGNsYXNzSXRlbSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnb1RvUHJldmlld1BhZ2UoY21zUGFnZTogUGFnZSkge1xuICAgIC8vIG9ubHkgdGhlIGZpcnN0IHBhZ2UgaXMgdGhlIHNtYXJ0ZWRpdCBwcmV2aWV3IHBhZ2VcbiAgICBpZiAoIXRoaXMuaXNQcmV2aWV3UGFnZSkge1xuICAgICAgdGhpcy5pc1ByZXZpZXdQYWdlID0gdHJ1ZTtcbiAgICAgIGlmIChcbiAgICAgICAgY21zUGFnZS50eXBlID09PSBQYWdlVHlwZS5QUk9EVUNUX1BBR0UgJiZcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgY3hSb3V0ZTogJ3Byb2R1Y3QnLFxuICAgICAgICAgIHBhcmFtczogeyBjb2RlOiB0aGlzLmRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGUsIG5hbWU6ICcnIH0sXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgY21zUGFnZS50eXBlID09PSBQYWdlVHlwZS5DQVRFR09SWV9QQUdFICYmXG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGVcbiAgICAgICkge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICBjeFJvdXRlOiAnY2F0ZWdvcnknLFxuICAgICAgICAgIHBhcmFtczogeyBjb2RlOiB0aGlzLmRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlIH0sXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXJDb21wb25lbnQoXG4gICAgY29tcG9uZW50SWQ6IHN0cmluZyxcbiAgICBjb21wb25lbnRUeXBlPzogc3RyaW5nLFxuICAgIHBhcmVudElkPzogc3RyaW5nXG4gICk6IGJvb2xlYW4ge1xuICAgIGlmIChjb21wb25lbnRJZCkge1xuICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB7XG4gICAgICAgIC8vIHdpdGhvdXQgcGFyZW50SWQsIGl0IGlzIHNsb3RcbiAgICAgICAgaWYgKCFwYXJlbnRJZCkge1xuICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50UGFnZUlkKSB7XG4gICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UucmVmcmVzaFBhZ2VCeUlkKHRoaXMuX2N1cnJlbnRQYWdlSWQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UucmVmcmVzaExhdGVzdFBhZ2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50VHlwZSkge1xuICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoQ29tcG9uZW50KGNvbXBvbmVudElkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVwcm9jZXNzUGFnZSgpIHtcbiAgICAvLyBUT0RPOiByZXByb2Nlc3MgcGFnZSBBUElcbiAgfVxufVxuIl19