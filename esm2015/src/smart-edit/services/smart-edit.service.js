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
export class SmartEditService {
    constructor(cmsService, routingService, baseSiteService, zone, winRef) {
        this.cmsService = cmsService;
        this.routingService = routingService;
        this.baseSiteService = baseSiteService;
        this.zone = zone;
        this.winRef = winRef;
        this.isPreviewPage = false;
        this._launchedInSmartEdit = false;
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
            this._launchedInSmartEdit = true;
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
    /**
     * Whether the app launched in smart edit
     */
    isLaunchedInSmartEdit() {
        return this._launchedInSmartEdit;
    }
}
SmartEditService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SmartEditService_Factory() { return new SmartEditService(i0.ɵɵinject(i1.CmsService), i0.ɵɵinject(i2.RoutingService), i0.ɵɵinject(i3.BaseSiteService), i0.ɵɵinject(i0.NgZone), i0.ɵɵinject(i4.WindowRef)); }, token: SmartEditService, providedIn: "root" });
SmartEditService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
SmartEditService.ctorParameters = () => [
    { type: CmsService },
    { type: RoutingService },
    { type: BaseSiteService },
    { type: NgZone },
    { type: WindowRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic21hcnQtZWRpdC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY29yZS9zcmMvc21hcnQtZWRpdC9zZXJ2aWNlcy9zbWFydC1lZGl0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNyQyxPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUN0RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sNkNBQTZDLENBQUM7QUFDOUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7Ozs7QUFLcEQsTUFBTSxPQUFPLGdCQUFnQjtJQVMzQixZQUNZLFVBQXNCLEVBQ3RCLGNBQThCLEVBQzlCLGVBQWdDLEVBQ2hDLElBQVksRUFDWixNQUFpQjtRQUpqQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFdBQU0sR0FBTixNQUFNLENBQVc7UUFackIsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFFdEIseUJBQW9CLEdBQUcsS0FBSyxDQUFDO1FBWW5DLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUVwQixJQUFJLE1BQU0sQ0FBQyxZQUFZLEVBQUU7WUFDdkIsTUFBTSxNQUFN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ci9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgdGFrZSwgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zU2VydmljZSB9IGZyb20gJy4uLy4uL2Ntcy9mYWNhZGUvY21zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gJy4uLy4uL2Ntcy9tb2RlbC9wYWdlLm1vZGVsJztcbmltcG9ydCB7IFBhZ2VUeXBlIH0gZnJvbSAnLi4vLi4vbW9kZWwvY21zLm1vZGVsJztcbmltcG9ydCB7IFJvdXRpbmdTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcm91dGluZy9mYWNhZGUvcm91dGluZy5zZXJ2aWNlJztcbmltcG9ydCB7IEJhc2VTaXRlU2VydmljZSB9IGZyb20gJy4uLy4uL3NpdGUtY29udGV4dC9mYWNhZGUvYmFzZS1zaXRlLnNlcnZpY2UnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnLi4vLi4vd2luZG93L3dpbmRvdy1yZWYnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgU21hcnRFZGl0U2VydmljZSB7XG4gIHByaXZhdGUgX2Ntc1RpY2tldElkOiBzdHJpbmc7XG4gIHByaXZhdGUgaXNQcmV2aWV3UGFnZSA9IGZhbHNlO1xuICBwcml2YXRlIF9jdXJyZW50UGFnZUlkOiBzdHJpbmc7XG4gIHByaXZhdGUgX2xhdW5jaGVkSW5TbWFydEVkaXQgPSBmYWxzZTtcblxuICBwcml2YXRlIGRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGU6IHN0cmluZztcbiAgcHJpdmF0ZSBkZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByb3V0aW5nU2VydmljZTogUm91dGluZ1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGJhc2VTaXRlU2VydmljZTogQmFzZVNpdGVTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCB6b25lOiBOZ1pvbmUsXG4gICAgcHJvdGVjdGVkIHdpblJlZjogV2luZG93UmVmXG4gICkge1xuICAgIHRoaXMuZ2V0Q21zVGlja2V0KCk7XG5cbiAgICBpZiAod2luUmVmLm5hdGl2ZVdpbmRvdykge1xuICAgICAgY29uc3Qgd2luZG93ID0gd2luUmVmLm5hdGl2ZVdpbmRvdyBhcyBhbnk7XG4gICAgICAvLyByZXJlbmRlciBjb21wb25lbnRzIGFuZCBzbG90cyBhZnRlciBlZGl0aW5nXG4gICAgICB3aW5kb3cuc21hcnRlZGl0ID0gd2luZG93LnNtYXJ0ZWRpdCB8fCB7fTtcbiAgICAgIHdpbmRvdy5zbWFydGVkaXQucmVuZGVyQ29tcG9uZW50ID0gKFxuICAgICAgICBjb21wb25lbnRJZCxcbiAgICAgICAgY29tcG9uZW50VHlwZSxcbiAgICAgICAgcGFyZW50SWRcbiAgICAgICkgPT4ge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJDb21wb25lbnQoY29tcG9uZW50SWQsIGNvbXBvbmVudFR5cGUsIHBhcmVudElkKTtcbiAgICAgIH07XG5cbiAgICAgIC8vIHJlcHJvY2VzcyBwYWdlXG4gICAgICB3aW5kb3cuc21hcnRlZGl0LnJlcHJvY2Vzc1BhZ2UgPSB0aGlzLnJlcHJvY2Vzc1BhZ2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGNtc1RpY2tldElkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Ntc1RpY2tldElkO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldENtc1RpY2tldCgpIHtcbiAgICBjb21iaW5lTGF0ZXN0KFtcbiAgICAgIHRoaXMuY21zU2VydmljZS5nZXRDdXJyZW50UGFnZSgpLFxuICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nZXRSb3V0ZXJTdGF0ZSgpLFxuICAgIF0pXG4gICAgICAucGlwZShcbiAgICAgICAgdGFrZVdoaWxlKChbY21zUGFnZV0pID0+IGNtc1BhZ2UgPT09IHVuZGVmaW5lZCksXG4gICAgICAgIGZpbHRlcigoWywgcm91dGVyU3RhdGVdKSA9PiB7XG4gICAgICAgICAgaWYgKHJvdXRlclN0YXRlLm5leHRTdGF0ZSAmJiAhdGhpcy5fY21zVGlja2V0SWQpIHtcbiAgICAgICAgICAgIHRoaXMuX2Ntc1RpY2tldElkID1cbiAgICAgICAgICAgICAgcm91dGVyU3RhdGUubmV4dFN0YXRlLnF1ZXJ5UGFyYW1zWydjbXNUaWNrZXRJZCddO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Ntc1RpY2tldElkKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pLFxuICAgICAgICB0YWtlKDEpXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5fbGF1bmNoZWRJblNtYXJ0RWRpdCA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0RGVmYXVsdFByZXZpZXdDb2RlKCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXREZWZhdWx0UHJldmlld0NvZGUoKSB7XG4gICAgdGhpcy5iYXNlU2l0ZVNlcnZpY2VcbiAgICAgIC5nZXRCYXNlU2l0ZURhdGEoKVxuICAgICAgLnBpcGUoXG4gICAgICAgIGZpbHRlcigoc2l0ZSkgPT4gT2JqZWN0LmtleXMoc2l0ZSkubGVuZ3RoICE9PSAwKSxcbiAgICAgICAgdGFrZSgxKVxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoc2l0ZSkgPT4ge1xuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlID0gc2l0ZS5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlID0gc2l0ZS5kZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlO1xuXG4gICAgICAgIHRoaXMuYWRkUGFnZUNvbnRyYWN0KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBhZGRQYWdlQ29udHJhY3QoKSB7XG4gICAgdGhpcy5jbXNTZXJ2aWNlLmdldEN1cnJlbnRQYWdlKCkuc3Vic2NyaWJlKChjbXNQYWdlKSA9PiB7XG4gICAgICBpZiAoY21zUGFnZSAmJiB0aGlzLl9jbXNUaWNrZXRJZCkge1xuICAgICAgICB0aGlzLl9jdXJyZW50UGFnZUlkID0gY21zUGFnZS5wYWdlSWQ7XG5cbiAgICAgICAgLy8gYmVmb3JlIGFkZGluZyBjb250cmFjdCB0byBwYWdlLCB3ZSBuZWVkIHJlZGlyZWN0IHRvIHRoYXQgcGFnZVxuICAgICAgICB0aGlzLmdvVG9QcmV2aWV3UGFnZShjbXNQYWdlKTtcblxuICAgICAgICAvLyByZW1vdmUgb2xkIHBhZ2UgY29udHJhY3RcbiAgICAgICAgY29uc3QgcHJldmlvdXNDb250cmFjdCA9IFtdO1xuICAgICAgICBBcnJheS5mcm9tKHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0KS5mb3JFYWNoKChhdHRyKSA9PlxuICAgICAgICAgIHByZXZpb3VzQ29udHJhY3QucHVzaChhdHRyKVxuICAgICAgICApO1xuICAgICAgICBwcmV2aW91c0NvbnRyYWN0LmZvckVhY2goKGF0dHIpID0+XG4gICAgICAgICAgdGhpcy53aW5SZWYuZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKGF0dHIpXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gYWRkIG5ldyBwYWdlIGNvbnRyYWN0XG4gICAgICAgIGlmIChjbXNQYWdlLnByb3BlcnRpZXMgJiYgY21zUGFnZS5wcm9wZXJ0aWVzLnNtYXJ0ZWRpdCkge1xuICAgICAgICAgIGNvbnN0IHNlQ2xhc3NlcyA9IGNtc1BhZ2UucHJvcGVydGllcy5zbWFydGVkaXQuY2xhc3Nlcy5zcGxpdCgnICcpO1xuICAgICAgICAgIHNlQ2xhc3Nlcy5mb3JFYWNoKChjbGFzc0l0ZW0pID0+IHtcbiAgICAgICAgICAgIHRoaXMud2luUmVmLmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChjbGFzc0l0ZW0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZ29Ub1ByZXZpZXdQYWdlKGNtc1BhZ2U6IFBhZ2UpIHtcbiAgICAvLyBvbmx5IHRoZSBmaXJzdCBwYWdlIGlzIHRoZSBzbWFydGVkaXQgcHJldmlldyBwYWdlXG4gICAgaWYgKCF0aGlzLmlzUHJldmlld1BhZ2UpIHtcbiAgICAgIHRoaXMuaXNQcmV2aWV3UGFnZSA9IHRydWU7XG4gICAgICBpZiAoXG4gICAgICAgIGNtc1BhZ2UudHlwZSA9PT0gUGFnZVR5cGUuUFJPRFVDVF9QQUdFICYmXG4gICAgICAgIHRoaXMuZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZVxuICAgICAgKSB7XG4gICAgICAgIHRoaXMucm91dGluZ1NlcnZpY2UuZ28oe1xuICAgICAgICAgIGN4Um91dGU6ICdwcm9kdWN0JyxcbiAgICAgICAgICBwYXJhbXM6IHsgY29kZTogdGhpcy5kZWZhdWx0UHJldmlld1Byb2R1Y3RDb2RlLCBuYW1lOiAnJyB9LFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGNtc1BhZ2UudHlwZSA9PT0gUGFnZVR5cGUuQ0FURUdPUllfUEFHRSAmJlxuICAgICAgICB0aGlzLmRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlXG4gICAgICApIHtcbiAgICAgICAgdGhpcy5yb3V0aW5nU2VydmljZS5nbyh7XG4gICAgICAgICAgY3hSb3V0ZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICBwYXJhbXM6IHsgY29kZTogdGhpcy5kZWZhdWx0UHJldmlld0NhdGVnb3J5Q29kZSB9LFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgcmVuZGVyQ29tcG9uZW50KFxuICAgIGNvbXBvbmVudElkOiBzdHJpbmcsXG4gICAgY29tcG9uZW50VHlwZT86IHN0cmluZyxcbiAgICBwYXJlbnRJZD86IHN0cmluZ1xuICApOiBib29sZWFuIHtcbiAgICBpZiAoY29tcG9uZW50SWQpIHtcbiAgICAgIHRoaXMuem9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAvLyB3aXRob3V0IHBhcmVudElkLCBpdCBpcyBzbG90XG4gICAgICAgIGlmICghcGFyZW50SWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5fY3VycmVudFBhZ2VJZCkge1xuICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hQYWdlQnlJZCh0aGlzLl9jdXJyZW50UGFnZUlkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLnJlZnJlc2hMYXRlc3RQYWdlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudFR5cGUpIHtcbiAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UucmVmcmVzaENvbXBvbmVudChjb21wb25lbnRJZCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlcHJvY2Vzc1BhZ2UoKSB7XG4gICAgLy8gVE9ETzogcmVwcm9jZXNzIHBhZ2UgQVBJXG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYXBwIGxhdW5jaGVkIGluIHNtYXJ0IGVkaXRcbiAgICovXG4gIGlzTGF1bmNoZWRJblNtYXJ0RWRpdCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbGF1bmNoZWRJblNtYXJ0RWRpdDtcbiAgfVxufVxuIl19