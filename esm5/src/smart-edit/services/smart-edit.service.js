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
        this._launchedInSmartEdit = false;
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
            .subscribe(function () {
            _this._launchedInSmartEdit = true;
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
    /**
     * Whether the app launched in smart edit
     */
    SmartEditService.prototype.isLaunchedInSmartEdit = function () {
        return this._launchedInSmartEdit;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQUtwRDtJQVNFLDBCQUNZLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLElBQVksRUFDWixNQUFpQjtRQUw3QixpQkF3QkM7UUF2QlcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBWnJCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBRXRCLHlCQUFvQixHQUFHLEtBQUssQ0FBQztRQVluQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFcEIsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO1lBQ3ZCLElBQU0sUUFBTSxHQUFHLE1BQU0sQ0FB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WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZ0JBQWdCLENBb0s1QjsyQkFqTEQ7Q0FpTEMsQUFwS0QsSUFvS0M7U0FwS1ksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNtYXJ0RWRpdFNlcnZpY2Uge1xuICBwcml2YXRlIF9jbXNUaWNrZXRJZDogc3RyaW5nO1xuICBwcml2YXRlIGlzUHJldmlld1BhZ2UgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY3VycmVudFBhZ2VJZDogc3RyaW5nO1xuICBwcml2YXRlIF9sYXVuY2hlZEluU21hcnRFZGl0ID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBkZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlOiBzdHJpbmc7XG4gIHByaXZhdGUgZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY21zU2VydmljZTogQ21zU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcm91dGluZ1NlcnZpY2U6IFJvdXRpbmdTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBiYXNlU2l0ZVNlcnZpY2U6IEJhc2VTaXRlU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgem9uZTogTmdab25lLFxuICAgIHByb3RlY3RlZCB3aW5SZWY6IFdpbmRvd1JlZlxuICApIHtcbiAgICB0aGlzLmdldENtc1RpY2tldCgpO1xuXG4gICAgaWYgKHdpblJlZi5uYXRpdmVXaW5kb3cpIHtcbiAgICAgIGNvbnN0IHdpbmRvdyA9IHdpblJlZi5uYXRpdmVXaW5kb3cgYXMgYW55O1xuICAgICAgLy8gcmVyZW5kZXIgY29tcG9uZW50cyBhbmQgc2xvdHMgYWZ0ZXIgZWRpdGluZ1xuICAgICAgd2luZG93LnNtYXJ0ZWRpdCA9IHdpbmRvdy5zbWFydGVkaXQgfHwge307XG4gICAgICB3aW5kb3cuc21hcnRlZGl0LnJlbmRlckNvbXBvbmVudCA9IChcbiAgICAgICAgY29tcG9uZW50SWQsXG4gICAgICAgIGNvbXBvbmVudFR5cGUsXG4gICAgICAgIHBhcmVudElkXG4gICAgICApID0+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29tcG9uZW50KGNvbXBvbmVudElkLCBjb21wb25lbnRUeXBlLCBwYXJlbnRJZCk7XG4gICAgICB9O1xuXG4gICAgICAvLyByZXByb2Nlc3MgcGFnZVxuICAgICAgd2luZG93LnNtYXJ0ZWRpdC5yZXByb2Nlc3NQYWdlID0gdGhpcy5yZXByb2Nlc3NQYWdlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBjbXNUaWNrZXRJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9jbXNUaWNrZXRJZDtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRDbXNUaWNrZXQoKSB7XG4gICAgY29tYmluZUxhdGVzdChbXG4gICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0Q3VycmVudFBhZ2UoKSxcbiAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ2V0Um91dGVyU3RhdGUoKSxcbiAgICBdKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRha2VXaGlsZSgoW2Ntc1BhZ2VdKSA9PiBjbXNQYWdlID09PSB1bmRlZmluZWQpLFxuICAgICAgICBmaWx0ZXIoKFssIHJvdXRlclN0YXRlXSkgPT4ge1xuICAgICAgICAgIGlmIChyb3V0ZXJTdGF0ZS5uZXh0U3RhdGUgJiYgIXRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgICAgICB0aGlzLl9jbXNUaWNrZXRJZCA9XG4gICAgICAgICAgICAgIHJvdXRlclN0YXRlLm5leHRTdGF0ZS5xdWVyeVBhcmFtc1snY21zVGlja2V0SWQnXTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2xhdW5jaGVkSW5TbWFydEVkaXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdldERlZmF1bHRQcmV2aWV3Q29kZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFByZXZpZXdDb2RlKCkge1xuICAgIHRoaXMuYmFzZVNpdGVTZXJ2aWNlXG4gICAgICAuZ2V0QmFzZVNpdGVEYXRhKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHNpdGUpID0+IE9iamVjdC5rZXlzKHNpdGUpLmxlbmd0aCAhPT0gMCksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHNpdGUpID0+IHtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZSA9IHNpdGUuZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGU7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZSA9IHNpdGUuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZTtcblxuICAgICAgICB0aGlzLmFkZFBhZ2VDb250cmFjdCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkUGFnZUNvbnRyYWN0KCkge1xuICAgIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLnN1YnNjcmliZSgoY21zUGFnZSkgPT4ge1xuICAgICAgaWYgKGNtc1BhZ2UgJiYgdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2VJZCA9IGNtc1BhZ2UucGFnZUlkO1xuXG4gICAgICAgIC8vIGJlZm9yZSBhZGRpbmcgY29udHJhY3QgdG8gcGFnZSwgd2UgbmVlZCByZWRpcmVjdCB0byB0aGF0IHBhZ2VcbiAgICAgICAgdGhpcy5nb1RvUHJldmlld1BhZ2UoY21zUGFnZSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBwYWdlIGNvbnRyYWN0XG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29udHJhY3QgPSBbXTtcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdCkuZm9yRWFjaCgoYXR0cikgPT5cbiAgICAgICAgICBwcmV2aW91c0NvbnRyYWN0LnB1c2goYXR0cilcbiAgICAgICAgKTtcbiAgICAgICAgcHJldmlvdXNDb250cmFjdC5mb3JFYWNoKChhdHRyKSA9PlxuICAgICAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShhdHRyKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGFkZCBuZXcgcGFnZSBjb250cmFjdFxuICAgICAgICBpZiAoY21zUGFnZS5wcm9wZXJ0aWVzICYmIGNtc1BhZ2UucHJvcGVydGllcy5zbWFydGVkaXQpIHtcbiAgICAgICAgICBjb25zdCBzZUNsYXNzZXMgPSBjbXNQYWdlLnByb3BlcnRpZXMuc21hcnRlZGl0LmNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgICBzZUNsYXNzZXMuZm9yRWFjaCgoY2xhc3NJdGVtKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdvVG9QcmV2aWV3UGFnZShjbXNQYWdlOiBQYWdlKSB7XG4gICAgLy8gb25seSB0aGUgZmlyc3QgcGFnZSBpcyB0aGUgc21hcnRlZGl0IHByZXZpZXcgcGFnZVxuICAgIGlmICghdGhpcy5pc1ByZXZpZXdQYWdlKSB7XG4gICAgICB0aGlzLmlzUHJldmlld1BhZ2UgPSB0cnVlO1xuICAgICAgaWYgKFxuICAgICAgICBjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSAmJlxuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGVcbiAgICAgICkge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IHRoaXMuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZSwgbmFtZTogJycgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgJiZcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgIGN4Um91dGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IHRoaXMuZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGUgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbXBvbmVudChcbiAgICBjb21wb25lbnRJZDogc3RyaW5nLFxuICAgIGNvbXBvbmVudFR5cGU/OiBzdHJpbmcsXG4gICAgcGFyZW50SWQ/OiBzdHJpbmdcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKGNvbXBvbmVudElkKSB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgLy8gd2l0aG91dCBwYXJlbnRJZCwgaXQgaXMgc2xvdFxuICAgICAgICBpZiAoIXBhcmVudElkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQYWdlSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoUGFnZUJ5SWQodGhpcy5fY3VycmVudFBhZ2VJZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoTGF0ZXN0UGFnZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hDb21wb25lbnQoY29tcG9uZW50SWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXByb2Nlc3NQYWdlKCkge1xuICAgIC8vIFRPRE86IHJlcHJvY2VzcyBwYWdlIEFQSVxuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGFwcCBsYXVuY2hlZCBpbiBzbWFydCBlZGl0XG4gICAqL1xuICBpc0xhdW5jaGVkSW5TbWFydEVkaXQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xhdW5jaGVkSW5TbWFydEVkaXQ7XG4gIH1cbn1cbiJdfQ==