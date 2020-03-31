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
            .subscribe(function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQUtwRDtJQVFFLDBCQUNZLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLElBQVksRUFDWixNQUFpQjtRQUw3QixpQkF3QkM7UUF2QlcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1FBQ2hDLFNBQUksR0FBSixJQUFJLENBQVE7UUFDWixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBWHJCLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBYTVCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDdkIsSUFBTSxRQUFNLEdBQUcsTUFBTSxDQUFDLFlBQW1CLENBQUM7WUFDMUMsOENBQThDO1lB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c291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNtYXJ0RWRpdFNlcnZpY2Uge1xuICBwcml2YXRlIF9jbXNUaWNrZXRJZDogc3RyaW5nO1xuICBwcml2YXRlIGlzUHJldmlld1BhZ2UgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY3VycmVudFBhZ2VJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZTogc3RyaW5nO1xuICBwcml2YXRlIGRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7XG4gICAgdGhpcy5nZXRDbXNUaWNrZXQoKTtcblxuICAgIGlmICh3aW5SZWYubmF0aXZlV2luZG93KSB7XG4gICAgICBjb25zdCB3aW5kb3cgPSB3aW5SZWYubmF0aXZlV2luZG93IGFzIGFueTtcbiAgICAgIC8vIHJlcmVuZGVyIGNvbXBvbmVudHMgYW5kIHNsb3RzIGFmdGVyIGVkaXRpbmdcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQgPSB3aW5kb3cuc21hcnRlZGl0IHx8IHt9O1xuICAgICAgd2luZG93LnNtYXJ0ZWRpdC5yZW5kZXJDb21wb25lbnQgPSAoXG4gICAgICAgIGNvbXBvbmVudElkLFxuICAgICAgICBjb21wb25lbnRUeXBlLFxuICAgICAgICBwYXJlbnRJZFxuICAgICAgKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbXBvbmVudChjb21wb25lbnRJZCwgY29tcG9uZW50VHlwZSwgcGFyZW50SWQpO1xuICAgICAgfTtcblxuICAgICAgLy8gcmVwcm9jZXNzIHBhZ2VcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQucmVwcm9jZXNzUGFnZSA9IHRoaXMucmVwcm9jZXNzUGFnZTtcbiAgICB9XG4gIH1cblxuICBnZXQgY21zVGlja2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY21zVGlja2V0SWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q21zVGlja2V0KCkge1xuICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKCksXG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCksXG4gICAgXSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlV2hpbGUoKFtjbXNQYWdlXSkgPT4gY21zUGFnZSA9PT0gdW5kZWZpbmVkKSxcbiAgICAgICAgZmlsdGVyKChbLCByb3V0ZXJTdGF0ZV0pID0+IHtcbiAgICAgICAgICBpZiAocm91dGVyU3RhdGUubmV4dFN0YXRlICYmICF0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICAgICAgdGhpcy5fY21zVGlja2V0SWQgPVxuICAgICAgICAgICAgICByb3V0ZXJTdGF0ZS5uZXh0U3RhdGUucXVlcnlQYXJhbXNbJ2Ntc1RpY2tldElkJ107XG4gICAgICAgICAgICBpZiAodGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNtc1NlcnZpY2UubGF1bmNoSW5TbWFydEVkaXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdldERlZmF1bHRQcmV2aWV3Q29kZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFByZXZpZXdDb2RlKCkge1xuICAgIHRoaXMuYmFzZVNpdGVTZXJ2aWNlXG4gICAgICAuZ2V0QmFzZVNpdGVEYXRhKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHNpdGUpID0+IE9iamVjdC5rZXlzKHNpdGUpLmxlbmd0aCAhPT0gMCksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHNpdGUpID0+IHtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZSA9IHNpdGUuZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGU7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZSA9IHNpdGUuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZTtcblxuICAgICAgICB0aGlzLmFkZFBhZ2VDb250cmFjdCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkUGFnZUNvbnRyYWN0KCkge1xuICAgIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLnN1YnNjcmliZSgoY21zUGFnZSkgPT4ge1xuICAgICAgaWYgKGNtc1BhZ2UgJiYgdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2VJZCA9IGNtc1BhZ2UucGFnZUlkO1xuXG4gICAgICAgIC8vIGJlZm9yZSBhZGRpbmcgY29udHJhY3QgdG8gcGFnZSwgd2UgbmVlZCByZWRpcmVjdCB0byB0aGF0IHBhZ2VcbiAgICAgICAgdGhpcy5nb1RvUHJldmlld1BhZ2UoY21zUGFnZSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBwYWdlIGNvbnRyYWN0XG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29udHJhY3QgPSBbXTtcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdCkuZm9yRWFjaCgoYXR0cikgPT5cbiAgICAgICAgICBwcmV2aW91c0NvbnRyYWN0LnB1c2goYXR0cilcbiAgICAgICAgKTtcbiAgICAgICAgcHJldmlvdXNDb250cmFjdC5mb3JFYWNoKChhdHRyKSA9PlxuICAgICAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShhdHRyKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGFkZCBuZXcgcGFnZSBjb250cmFjdFxuICAgICAgICBpZiAoY21zUGFnZS5wcm9wZXJ0aWVzICYmIGNtc1BhZ2UucHJvcGVydGllcy5zbWFydGVkaXQpIHtcbiAgICAgICAgICBjb25zdCBzZUNsYXNzZXMgPSBjbXNQYWdlLnByb3BlcnRpZXMuc21hcnRlZGl0LmNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgICBzZUNsYXNzZXMuZm9yRWFjaCgoY2xhc3NJdGVtKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdvVG9QcmV2aWV3UGFnZShjbXNQYWdlOiBQYWdlKSB7XG4gICAgLy8gb25seSB0aGUgZmlyc3QgcGFnZSBpcyB0aGUgc21hcnRlZGl0IHByZXZpZXcgcGFnZVxuICAgIGlmICghdGhpcy5pc1ByZXZpZXdQYWdlKSB7XG4gICAgICB0aGlzLmlzUHJldmlld1BhZ2UgPSB0cnVlO1xuICAgICAgaWYgKFxuICAgICAgICBjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSAmJlxuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGVcbiAgICAgICkge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IHRoaXMuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZSwgbmFtZTogJycgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgJiZcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgIGN4Um91dGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IHRoaXMuZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGUgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbXBvbmVudChcbiAgICBjb21wb25lbnRJZDogc3RyaW5nLFxuICAgIGNvbXBvbmVudFR5cGU/OiBzdHJpbmcsXG4gICAgcGFyZW50SWQ/OiBzdHJpbmdcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKGNvbXBvbmVudElkKSB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgLy8gd2l0aG91dCBwYXJlbnRJZCwgaXQgaXMgc2xvdFxuICAgICAgICBpZiAoIXBhcmVudElkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQYWdlSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoUGFnZUJ5SWQodGhpcy5fY3VycmVudFBhZ2VJZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoTGF0ZXN0UGFnZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hDb21wb25lbnQoY29tcG9uZW50SWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXByb2Nlc3NQYWdlKCkge1xuICAgIC8vIFRPRE86IHJlcHJvY2VzcyBwYWdlIEFQSVxuICB9XG59XG4iXX0=