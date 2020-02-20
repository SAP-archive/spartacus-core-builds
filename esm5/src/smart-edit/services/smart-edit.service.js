import { __decorate, __read } from "tslib";
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
            var window_1 = winRef.nativeWindow;
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
        get: function () {
            return this._cmsTicketId;
        },
        enumerable: true,
        configurable: true
    });
    SmartEditService.prototype.getCmsTicket = function () {
        var _this = this;
        combineLatest([
            this.cmsService.getCurrentPage(),
            this.routingService.getRouterState(),
        ])
            .pipe(takeWhile(function (_a) {
            var _b = __read(_a, 1), cmsPage = _b[0];
            return cmsPage === undefined;
        }), filter(function (_a) {
            var _b = __read(_a, 2), routerState = _b[1];
            if (routerState.nextState && !_this._cmsTicketId) {
                _this._cmsTicketId =
                    routerState.nextState.queryParams['cmsTicketId'];
                if (_this._cmsTicketId) {
                    return true;
                }
            }
            return false;
        }), take(1))
            .subscribe(function (_) {
            _this.cmsService.launchInSmartEdit = true;
            _this.getDefaultPreviewCode();
        });
    };
    SmartEditService.prototype.getDefaultPreviewCode = function () {
        var _this = this;
        this.baseSiteService
            .getBaseSiteData()
            .pipe(filter(function (site) { return Object.keys(site).length !== 0; }), take(1))
            .subscribe(function (site) {
            _this.defaultPreviewCategoryCode = site.defaultPreviewCategoryCode;
            _this.defaultPreviewProductCode = site.defaultPreviewProductCode;
            _this.addPageContract();
        });
    };
    SmartEditService.prototype.addPageContract = function () {
        var _this = this;
        this.cmsService.getCurrentPage().subscribe(function (cmsPage) {
            if (cmsPage && _this._cmsTicketId) {
                _this._currentPageId = cmsPage.pageId;
                // before adding contract to page, we need redirect to that page
                _this.goToPreviewPage(cmsPage);
                // remove old page contract
                var previousContract_1 = [];
                Array.from(_this.winRef.document.body.classList).forEach(function (attr) {
                    return previousContract_1.push(attr);
                });
                previousContract_1.forEach(function (attr) {
                    return _this.winRef.document.body.classList.remove(attr);
                });
                // add new page contract
                if (cmsPage.properties && cmsPage.properties.smartedit) {
                    var seClasses = cmsPage.properties.smartedit.classes.split(' ');
                    seClasses.forEach(function (classItem) {
                        _this.winRef.document.body.classList.add(classItem);
                    });
                }
            }
        });
    };
    SmartEditService.prototype.goToPreviewPage = function (cmsPage) {
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
    SmartEditService.prototype.renderComponent = function (componentId, componentType, parentId) {
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
    SmartEditService.prototype.reprocessPage = function () {
        // TODO: reprocess page API
    };
    SmartEditService.ctorParameters = function () { return [
        { type: CmsService },
        { type: RoutingService },
        { type: BaseSiteService },
        { type: NgZone },
        { type: WindowRef }
    ]; };
    SmartEditService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i3.BaseSiteService), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i4.WindowRef)); }, token: SmartEditService, providedIn: "root" });
    SmartEditService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SmartEditService);
    return SmartEditService;
}());
export { SmartEditService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQUtwRDtJQVFFLDBCQUNZLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLElBQVksRUFDWixNQUFpQjtRQUw3QixpQkF3QkM7UUF2QlcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBWHJCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBYTVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDdkIsSUFBTSxRQUFNLEdBQUcsTUFBTSxDQUFDLFlBQW1CLENBQUM7WUFDMUMsOENBQThDO1lB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LGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZmlsdGVyLCB0YWtlLCB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vY21zL2ZhY2FkZS9jbXMuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAnLi4vLi4vY21zL21vZGVsL3BhZ2UubW9kZWwnO1xuaW1wb3J0IHsgUGFnZVR5cGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jbXMubW9kZWwnO1xuaW1wb3J0IHsgUm91dGluZ1NlcnZpY2UgfSBmcm9tICcuLi8uLi9yb3V0aW5nL2ZhY2FkZS9yb3V0aW5nLnNlcnZpY2UnO1xuaW1wb3J0IHsgQmFzZVNpdGVTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9iYXNlLXNpdGUuc2VydmljZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICcuLi8uLi93aW5kb3cvd2luZG93LXJlZic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTbWFydEVkaXRTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBfY21zVGlja2V0SWQ6IHN0cmluZztcbiAgcHJpdmF0ZSBpc1ByZXZpZXdQYWdlID0gZmFsc2U7XG4gIHByaXZhdGUgX2N1cnJlbnRQYWdlSWQ6IHN0cmluZztcblxuICBwcml2YXRlIGRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBkZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge1xuICAgIHRoaXMuZ2V0Q21zVGlja2V0KCk7XG5cbiAgICBpZiAod2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgY29uc3Qgd2luZG93ID0gd2luUmVmLm5hdGl2ZVdpbmRvdyBhcyBhbnk7XG4gICAgICAvLyByZXJlbmRlciBjb21wb25lbnRzIGFuZCBzbG90cyBhZnRlciBlZGl0aW5nXG4gICAgICB3aW5kb3cuc21hcnRlZGl0ID0gd2luZG93LnNtYXJ0ZWRpdCB8fCB7fTtcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQucmVuZGVyQ29tcG9uZW50ID0gKFxuICAgICAgICBjb21wb25lbnRJZCxcbiAgICAgICAgY29tcG9uZW50VHlwZSxcbiAgICAgICAgcGFyZW50SWRcbiAgICAgICkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50SWQsIGNvbXBvbmVudFR5cGUsIHBhcmVudElkKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHJlcHJvY2VzcyBwYWdlXG4gICAgICB3aW5kb3cuc21hcnRlZGl0LnJlcHJvY2Vzc1BhZ2UgPSB0aGlzLnJlcHJvY2Vzc1BhZ2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNtc1RpY2tldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ntc1RpY2tldElkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENtc1RpY2tldCgpIHtcbiAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLFxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLFxuICAgIF0pXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVdoaWxlKChbY21zUGFnZV0pID0+IGNtc1BhZ2UgPT09IHVuZGVmaW5lZCksXG4gICAgICAgIGZpbHRlcigoWywgcm91dGVyU3RhdGVdKSA9PiB7XG4gICAgICAgICAgaWYgKHJvdXRlclN0YXRlLm5leHRTdGF0ZSAmJiAhdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Ntc1RpY2tldElkID1cbiAgICAgICAgICAgICAgcm91dGVyU3RhdGUubmV4dFN0YXRlLnF1ZXJ5UGFyYW1zWydjbXNUaWNrZXRJZCddO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKF8gPT4ge1xuICAgICAgICB0aGlzLmNtc1NlcnZpY2UubGF1bmNoSW5TbWFydEVkaXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdldERlZmF1bHRQcmV2aWV3Q29kZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFByZXZpZXdDb2RlKCkge1xuICAgIHRoaXMuYmFzZVNpdGVTZXJ2aWNlXG4gICAgICAuZ2V0QmFzZVNpdGVEYXRhKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoc2l0ZSA9PiBPYmplY3Qua2V5cyhzaXRlKS5sZW5ndGggIT09IDApLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKHNpdGUgPT4ge1xuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlID0gc2l0ZS5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlID0gc2l0ZS5kZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlO1xuXG4gICAgICAgIHRoaXMuYWRkUGFnZUNvbnRyYWN0KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRQYWdlQ29udHJhY3QoKSB7XG4gICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKCkuc3Vic2NyaWJlKGNtc1BhZ2UgPT4ge1xuICAgICAgaWYgKGNtc1BhZ2UgJiYgdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2VJZCA9IGNtc1BhZ2UucGFnZUlkO1xuXG4gICAgICAgIC8vIGJlZm9yZSBhZGRpbmcgY29udHJhY3QgdG8gcGFnZSwgd2UgbmVlZCByZWRpcmVjdCB0byB0aGF0IHBhZ2VcbiAgICAgICAgdGhpcy5nb1RvUHJldmlld1BhZ2UoY21zUGFnZSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBwYWdlIGNvbnRyYWN0XG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29udHJhY3QgPSBbXTtcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdCkuZm9yRWFjaChhdHRyID0+XG4gICAgICAgICAgcHJldmlvdXNDb250cmFjdC5wdXNoKGF0dHIpXG4gICAgICAgICk7XG4gICAgICAgIHByZXZpb3VzQ29udHJhY3QuZm9yRWFjaChhdHRyID0+XG4gICAgICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGF0dHIpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gYWRkIG5ldyBwYWdlIGNvbnRyYWN0XG4gICAgICAgIGlmIChjbXNQYWdlLnByb3BlcnRpZXMgJiYgY21zUGFnZS5wcm9wZXJ0aWVzLnNtYXJ0ZWRpdCkge1xuICAgICAgICAgIGNvbnN0IHNlQ2xhc3NlcyA9IGNtc1BhZ2UucHJvcGVydGllcy5zbWFydGVkaXQuY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIHNlQ2xhc3Nlcy5mb3JFYWNoKGNsYXNzSXRlbSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdvVG9QcmV2aWV3UGFnZShjbXNQYWdlOiBQYWdlKSB7XG4gICAgLy8gb25seSB0aGUgZmlyc3QgcGFnZSBpcyB0aGUgc21hcnRlZGl0IHByZXZpZXcgcGFnZVxuICAgIGlmICghdGhpcy5pc1ByZXZpZXdQYWdlKSB7XG4gICAgICB0aGlzLmlzUHJldmlld1BhZ2UgPSB0cnVlO1xuICAgICAgaWYgKFxuICAgICAgICBjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSAmJlxuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGVcbiAgICAgICkge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IHRoaXMuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZSwgbmFtZTogJycgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgJiZcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgIGN4Um91dGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IHRoaXMuZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGUgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbXBvbmVudChcbiAgICBjb21wb25lbnRJZDogc3RyaW5nLFxuICAgIGNvbXBvbmVudFR5cGU/OiBzdHJpbmcsXG4gICAgcGFyZW50SWQ/OiBzdHJpbmdcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKGNvbXBvbmVudElkKSB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgLy8gd2l0aG91dCBwYXJlbnRJZCwgaXQgaXMgc2xvdFxuICAgICAgICBpZiAoIXBhcmVudElkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQYWdlSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoUGFnZUJ5SWQodGhpcy5fY3VycmVudFBhZ2VJZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoTGF0ZXN0UGFnZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hDb21wb25lbnQoY29tcG9uZW50SWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXByb2Nlc3NQYWdlKCkge1xuICAgIC8vIFRPRE86IHJlcHJvY2VzcyBwYWdlIEFQSVxuICB9XG59XG4iXX0=