import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { SmartEditService } from '../services/smart-edit.service';
import * as i0 from "@angular/core";
import * as i1 from "../services/smart-edit.service";
let CmsTicketInterceptor = class CmsTicketInterceptor {
    constructor(service) {
        this.service = service;
    }
    intercept(request, next) {
        if (request.url.includes('/cms/') && this.service.cmsTicketId) {
            request = request.clone({
                setParams: {
                    cmsTicketId: this.service.cmsTicketId,
                },
            });
        }
        return next.handle(request);
    }
};
CmsTicketInterceptor.ctorParameters = () => [
    { type: SmartEditService }
];
CmsTicketInterceptor.ɵprov = i0.ɵɵdefineInjectable({ factory: function CmsTicketInterceptor_Factory() { return new CmsTicketInterceptor(i0.ɵɵinject(i1.SmartEditService)); }, token: CmsTicketInterceptor, providedIn: "root" });
CmsTicketInterceptor = __decorate([
    Injectable({ providedIn: 'root' })
], CmsTicketInterceptor);
export { CmsTicketInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21zLXRpY2tldC5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9zbWFydC1lZGl0L2h0dHAtaW50ZXJjZXB0b3JzL2Ntcy10aWNrZXQuaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQUdsRSxJQUFhLG9CQUFvQixHQUFqQyxNQUFhLG9CQUFvQjtJQUMvQixZQUFvQixPQUF5QjtRQUF6QixZQUFPLEdBQVAsT0FBTyxDQUFrQjtJQUFHLENBQUM7SUFFakQsU0FBUyxDQUNQLE9BQXlCLEVBQ3pCLElBQWlCO1FBRWpCLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7WUFDN0QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7Z0JBQ3RCLFNBQVMsRUFBRTtvQkFDVCxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXO2lCQUN0QzthQUNGLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBOztZQWhCOEIsZ0JBQWdCOzs7QUFEbEMsb0JBQW9CO0lBRGhDLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixvQkFBb0IsQ0FpQmhDO1NBakJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIEh0dHBSZXF1ZXN0LFxuICBIdHRwSGFuZGxlcixcbiAgSHR0cEV2ZW50LFxuICBIdHRwSW50ZXJjZXB0b3IsXG59IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgU21hcnRFZGl0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL3NtYXJ0LWVkaXQuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXG5leHBvcnQgY2xhc3MgQ21zVGlja2V0SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFNtYXJ0RWRpdFNlcnZpY2UpIHt9XG5cbiAgaW50ZXJjZXB0KFxuICAgIHJlcXVlc3Q6IEh0dHBSZXF1ZXN0PGFueT4sXG4gICAgbmV4dDogSHR0cEhhbmRsZXJcbiAgKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmIChyZXF1ZXN0LnVybC5pbmNsdWRlcygnL2Ntcy8nKSAmJiB0aGlzLnNlcnZpY2UuY21zVGlja2V0SWQpIHtcbiAgICAgIHJlcXVlc3QgPSByZXF1ZXN0LmNsb25lKHtcbiAgICAgICAgc2V0UGFyYW1zOiB7XG4gICAgICAgICAgY21zVGlja2V0SWQ6IHRoaXMuc2VydmljZS5jbXNUaWNrZXRJZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBuZXh0LmhhbmRsZShyZXF1ZXN0KTtcbiAgfVxufVxuIl19