import { __decorate } from "tslib";
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
let SmartEditService = class SmartEditService {
    constructor(cmsService, routingService, baseSiteService, zone, winRef) {
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.baseSiteService = baseSiteService;
        this.zone = zone;
        this.winRef = winRef;
        this.isPreviewPage = false;
        this.getCmsTicket();
        if (winRef.nativeWindow) {
            const window = winRef.nativeWindow;
            // rerender components and slots after editing
            window.smartedit = window.smartedit || {};
            window.smartedit.renderComponent = (componentId, componentType, parentId) => {
                return this.renderComponent(componentId, componentType, parentId);
            };
            // reprocess page
            window.smartedit.reprocessPage = this.reprocessPage;
        }
    }
    get cmsTicketId() {
        return this._cmsTicketId;
    }
    getCmsTicket() {
        combineLatest([
            this.cmsService.getCurrentPage(),
            this.routingService.getRouterState(),
        ])
            .pipe(takeWhile(([cmsPage]) => cmsPage === undefined), filter(([, routerState]) => {
            if (routerState.nextState && !this._cmsTicketId) {
                this._cmsTicketId =
                    routerState.nextState.queryParams['cmsTicketId'];
                if (this._cmsTicketId) {
                    return true;
                }
            }
            return false;
        }), take(1))
            .subscribe(() => {
            this.cmsService.launchInSmartEdit = true;
            this.getDefaultPreviewCode();
        });
    }
    getDefaultPreviewCode() {
        this.baseSiteService
            .getBaseSiteData()
            .pipe(filter((site) => Object.keys(site).length !== 0), take(1))
            .subscribe((site) => {
            this.defaultPreviewCategoryCode = site.defaultPreviewCategoryCode;
            this.defaultPreviewProductCode = site.defaultPreviewProductCode;
            this.addPageContract();
        });
    }
    addPageContract() {
        this.cmsService.getCurrentPage().subscribe((cmsPage) => {
            if (cmsPage && this._cmsTicketId) {
                this._currentPageId = cmsPage.pageId;
                // before adding contract to page, we need redirect to that page
                this.goToPreviewPage(cmsPage);
                // remove old page contract
                const previousContract = [];
                Array.from(this.winRef.document.body.classList).forEach((attr) => previousContract.push(attr));
                previousContract.forEach((attr) => this.winRef.document.body.classList.remove(attr));
                // add new page contract
                if (cmsPage.properties && cmsPage.properties.smartedit) {
                    const seClasses = cmsPage.properties.smartedit.classes.split(' ');
                    seClasses.forEach((classItem) => {
                        this.winRef.document.body.classList.add(classItem);
                    });
                }
            }
        });
    }
    goToPreviewPage(cmsPage) {
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
    }
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
    reprocessPage() {
        // TODO: reprocess page API
    }
};
SmartEditService.ctorParameters = () => [
    { type: CmsService },
    { type: RoutingService },
    { type: BaseSiteService },
    { type: NgZone },
    { type: WindowRef }
];
SmartEditService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i3.BaseSiteService), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i4.WindowRef)); }, token: SmartEditService, providedIn: "root" });
SmartEditService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], SmartEditService);
export { SmartEditService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3NtYXJ0LWVkaXQvc2VydmljZXMvc21hcnQtZWRpdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3JDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7OztBQUtwRCxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtJQVEzQixZQUNZLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLElBQVksRUFDWixNQUFpQjtRQUpqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQVc7UUFYckIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFhNUIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBRXBCLElBQUksTUFBTSxDQUFDLFlBQVksRUFBRTtZQUN2QixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsWUFBbUIsQ0FB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QUksQ0FBQywwQkFBMEIsRUFDL0I7Z0JBQ0EsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7b0JBQ3JCLE9BQU8sRUFBRSxVQUFVO29CQUNuQixNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLDBCQUEwQixFQUFFO2lCQUNsRCxDQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQztJQUVTLGVBQWUsQ0FDdkIsV0FBbUIsRUFDbkIsYUFBc0IsRUFDdEIsUUFBaUI7UUFFakIsSUFBSSxXQUFXLEVBQUU7WUFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2pCLCtCQUErQjtnQkFDL0IsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztxQkFDdEQ7eUJBQU07d0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO3FCQUNyQztpQkFDRjtxQkFBTSxJQUFJLGFBQWEsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztpQkFDL0M7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBRVMsYUFBYTtRQUNyQiwyQkFBMkI7SUFDN0IsQ0FBQztDQUNGLENBQUE7O1lBbkp5QixVQUFVO1lBQ04sY0FBYztZQUNiLGVBQWU7WUFDMUIsTUFBTTtZQUNKLFNBQVM7OztBQWJsQixnQkFBZ0I7SUFINUIsVUFBVSxDQUFDO1FBQ1YsVUFBVSxFQUFFLE1BQU07S0FDbkIsQ0FBQztHQUNXLGdCQUFnQixDQTRKNUI7U0E1SlksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRha2UsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc1NlcnZpY2UgfSBmcm9tICcuLi8uLi9jbXMvZmFjYWRlL2Ntcy5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICcuLi8uLi9jbXMvbW9kZWwvcGFnZS5tb2RlbCc7XG5pbXBvcnQgeyBQYWdlVHlwZSB9IGZyb20gJy4uLy4uL21vZGVsL2Ntcy5tb2RlbCc7XG5pbXBvcnQgeyBSb3V0aW5nU2VydmljZSB9IGZyb20gJy4uLy4uL3JvdXRpbmcvZmFjYWRlL3JvdXRpbmcuc2VydmljZSc7XG5pbXBvcnQgeyBCYXNlU2l0ZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zaXRlLWNvbnRleHQvZmFjYWRlL2Jhc2Utc2l0ZS5zZXJ2aWNlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJy4uLy4uL3dpbmRvdy93aW5kb3ctcmVmJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNtYXJ0RWRpdFNlcnZpY2Uge1xuICBwcml2YXRlIF9jbXNUaWNrZXRJZDogc3RyaW5nO1xuICBwcml2YXRlIGlzUHJldmlld1BhZ2UgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY3VycmVudFBhZ2VJZDogc3RyaW5nO1xuXG4gIHByaXZhdGUgZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZTogc3RyaW5nO1xuICBwcml2YXRlIGRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNtc1NlcnZpY2U6IENtc1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJvdXRpbmdTZXJ2aWNlOiBSb3V0aW5nU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgYmFzZVNpdGVTZXJ2aWNlOiBCYXNlU2l0ZVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHpvbmU6IE5nWm9uZSxcbiAgICBwcm90ZWN0ZWQgd2luUmVmOiBXaW5kb3dSZWZcbiAgKSB7XG4gICAgdGhpcy5nZXRDbXNUaWNrZXQoKTtcblxuICAgIGlmICh3aW5SZWYubmF0aXZlV2luZG93KSB7XG4gICAgICBjb25zdCB3aW5kb3cgPSB3aW5SZWYubmF0aXZlV2luZG93IGFzIGFueTtcbiAgICAgIC8vIHJlcmVuZGVyIGNvbXBvbmVudHMgYW5kIHNsb3RzIGFmdGVyIGVkaXRpbmdcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQgPSB3aW5kb3cuc21hcnRlZGl0IHx8IHt9O1xuICAgICAgd2luZG93LnNtYXJ0ZWRpdC5yZW5kZXJDb21wb25lbnQgPSAoXG4gICAgICAgIGNvbXBvbmVudElkLFxuICAgICAgICBjb21wb25lbnRUeXBlLFxuICAgICAgICBwYXJlbnRJZFxuICAgICAgKSA9PiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlckNvbXBvbmVudChjb21wb25lbnRJZCwgY29tcG9uZW50VHlwZSwgcGFyZW50SWQpO1xuICAgICAgfTtcblxuICAgICAgLy8gcmVwcm9jZXNzIHBhZ2VcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQucmVwcm9jZXNzUGFnZSA9IHRoaXMucmVwcm9jZXNzUGFnZTtcbiAgICB9XG4gIH1cblxuICBnZXQgY21zVGlja2V0SWQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fY21zVGlja2V0SWQ7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0Q21zVGlja2V0KCkge1xuICAgIGNvbWJpbmVMYXRlc3QoW1xuICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKCksXG4gICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdldFJvdXRlclN0YXRlKCksXG4gICAgXSlcbiAgICAgIC5waXBlKFxuICAgICAgICB0YWtlV2hpbGUoKFtjbXNQYWdlXSkgPT4gY21zUGFnZSA9PT0gdW5kZWZpbmVkKSxcbiAgICAgICAgZmlsdGVyKChbLCByb3V0ZXJTdGF0ZV0pID0+IHtcbiAgICAgICAgICBpZiAocm91dGVyU3RhdGUubmV4dFN0YXRlICYmICF0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICAgICAgdGhpcy5fY21zVGlja2V0SWQgPVxuICAgICAgICAgICAgICByb3V0ZXJTdGF0ZS5uZXh0U3RhdGUucXVlcnlQYXJhbXNbJ2Ntc1RpY2tldElkJ107XG4gICAgICAgICAgICBpZiAodGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLmNtc1NlcnZpY2UubGF1bmNoSW5TbWFydEVkaXQgPSB0cnVlO1xuICAgICAgICB0aGlzLmdldERlZmF1bHRQcmV2aWV3Q29kZSgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2V0RGVmYXVsdFByZXZpZXdDb2RlKCkge1xuICAgIHRoaXMuYmFzZVNpdGVTZXJ2aWNlXG4gICAgICAuZ2V0QmFzZVNpdGVEYXRhKClcbiAgICAgIC5waXBlKFxuICAgICAgICBmaWx0ZXIoKHNpdGUpID0+IE9iamVjdC5rZXlzKHNpdGUpLmxlbmd0aCAhPT0gMCksXG4gICAgICAgIHRha2UoMSlcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKHNpdGUpID0+IHtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZSA9IHNpdGUuZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGU7XG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZSA9IHNpdGUuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZTtcblxuICAgICAgICB0aGlzLmFkZFBhZ2VDb250cmFjdCgpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgYWRkUGFnZUNvbnRyYWN0KCkge1xuICAgIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLnN1YnNjcmliZSgoY21zUGFnZSkgPT4ge1xuICAgICAgaWYgKGNtc1BhZ2UgJiYgdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgdGhpcy5fY3VycmVudFBhZ2VJZCA9IGNtc1BhZ2UucGFnZUlkO1xuXG4gICAgICAgIC8vIGJlZm9yZSBhZGRpbmcgY29udHJhY3QgdG8gcGFnZSwgd2UgbmVlZCByZWRpcmVjdCB0byB0aGF0IHBhZ2VcbiAgICAgICAgdGhpcy5nb1RvUHJldmlld1BhZ2UoY21zUGFnZSk7XG5cbiAgICAgICAgLy8gcmVtb3ZlIG9sZCBwYWdlIGNvbnRyYWN0XG4gICAgICAgIGNvbnN0IHByZXZpb3VzQ29udHJhY3QgPSBbXTtcbiAgICAgICAgQXJyYXkuZnJvbSh0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdCkuZm9yRWFjaCgoYXR0cikgPT5cbiAgICAgICAgICBwcmV2aW91c0NvbnRyYWN0LnB1c2goYXR0cilcbiAgICAgICAgKTtcbiAgICAgICAgcHJldmlvdXNDb250cmFjdC5mb3JFYWNoKChhdHRyKSA9PlxuICAgICAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZShhdHRyKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIGFkZCBuZXcgcGFnZSBjb250cmFjdFxuICAgICAgICBpZiAoY21zUGFnZS5wcm9wZXJ0aWVzICYmIGNtc1BhZ2UucHJvcGVydGllcy5zbWFydGVkaXQpIHtcbiAgICAgICAgICBjb25zdCBzZUNsYXNzZXMgPSBjbXNQYWdlLnByb3BlcnRpZXMuc21hcnRlZGl0LmNsYXNzZXMuc3BsaXQoJyAnKTtcbiAgICAgICAgICBzZUNsYXNzZXMuZm9yRWFjaCgoY2xhc3NJdGVtKSA9PiB7XG4gICAgICAgICAgICB0aGlzLndpblJlZi5kb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoY2xhc3NJdGVtKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdvVG9QcmV2aWV3UGFnZShjbXNQYWdlOiBQYWdlKSB7XG4gICAgLy8gb25seSB0aGUgZmlyc3QgcGFnZSBpcyB0aGUgc21hcnRlZGl0IHByZXZpZXcgcGFnZVxuICAgIGlmICghdGhpcy5pc1ByZXZpZXdQYWdlKSB7XG4gICAgICB0aGlzLmlzUHJldmlld1BhZ2UgPSB0cnVlO1xuICAgICAgaWYgKFxuICAgICAgICBjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLlBST0RVQ1RfUEFHRSAmJlxuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGVcbiAgICAgICkge1xuICAgICAgICB0aGlzLnJvdXRpbmdTZXJ2aWNlLmdvKHtcbiAgICAgICAgICBjeFJvdXRlOiAncHJvZHVjdCcsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IHRoaXMuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZSwgbmFtZTogJycgfSxcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjbXNQYWdlLnR5cGUgPT09IFBhZ2VUeXBlLkNBVEVHT1JZX1BBR0UgJiZcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgIGN4Um91dGU6ICdjYXRlZ29yeScsXG4gICAgICAgICAgcGFyYW1zOiB7IGNvZGU6IHRoaXMuZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGUgfSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlckNvbXBvbmVudChcbiAgICBjb21wb25lbnRJZDogc3RyaW5nLFxuICAgIGNvbXBvbmVudFR5cGU/OiBzdHJpbmcsXG4gICAgcGFyZW50SWQ/OiBzdHJpbmdcbiAgKTogYm9vbGVhbiB7XG4gICAgaWYgKGNvbXBvbmVudElkKSB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgLy8gd2l0aG91dCBwYXJlbnRJZCwgaXQgaXMgc2xvdFxuICAgICAgICBpZiAoIXBhcmVudElkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQYWdlSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoUGFnZUJ5SWQodGhpcy5fY3VycmVudFBhZ2VJZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY21zU2VydmljZS5yZWZyZXNoTGF0ZXN0UGFnZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChjb21wb25lbnRUeXBlKSB7XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hDb21wb25lbnQoY29tcG9uZW50SWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZXByb2Nlc3NQYWdlKCkge1xuICAgIC8vIFRPRE86IHJlcHJvY2VzcyBwYWdlIEFQSVxuICB9XG59XG4iXX0=