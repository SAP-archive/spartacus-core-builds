import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AnonymousConsentTemplatesAdapter } from './anonymous-consent-templates.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./anonymous-consent-templates.adapter";
let AnonymousConsentTemplatesConnector = class AnonymousConsentTemplatesConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    loadAnonymousConsentTemplates() {
        return this.adapter.loadAnonymousConsentTemplates();
    }
    loadAnonymousConsents() {
        // TODO{#8158} - remove the conditional check, and just `return this.adapter.loadAnonymousConsents()`
        return this.adapter.loadAnonymousConsents
            ? this.adapter.loadAnonymousConsents()
            : null;
    }
};
AnonymousConsentTemplatesConnector.ctorParameters = () => [
    { type: AnonymousConsentTemplatesAdapter }
];
AnonymousConsentTemplatesConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentTemplatesConnector_Factory() { return new AnonymousConsentTemplatesConnector(i0.ɵɵinject(i1.AnonymousConsentTemplatesAdapter)); }, token: AnonymousConsentTemplatesConnector, providedIn: "root" });
AnonymousConsentTemplatesConnector = __decorate([
    Injectable({
        providedIn: 'root',
    })
], AnonymousConsentTemplatesConnector);
export { AnonymousConsentTemplatesConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvY29ubmVjdG9ycy9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFLekYsSUFBYSxrQ0FBa0MsR0FBL0MsTUFBYSxrQ0FBa0M7SUFDN0MsWUFBc0IsT0FBeUM7UUFBekMsWUFBTyxHQUFQLE9BQU8sQ0FBa0M7SUFBRyxDQUFDO0lBRW5FLDZCQUE2QjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLHFHQUFxRztRQUNyRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCO1lBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFO1lBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDO0NBQ0YsQ0FBQTs7WUFaZ0MsZ0NBQWdDOzs7QUFEcEQsa0NBQWtDO0lBSDlDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxrQ0FBa0MsQ0FhOUM7U0FiWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyIH0gZnJvbSAnLi9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyKSB7fVxuXG4gIGxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKCk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKCk7XG4gIH1cblxuICBsb2FkQW5vbnltb3VzQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50W10+IHwgbnVsbCB7XG4gICAgLy8gVE9ET3sjODE1OH0gLSByZW1vdmUgdGhlIGNvbmRpdGlvbmFsIGNoZWNrLCBhbmQganVzdCBgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQW5vbnltb3VzQ29uc2VudHMoKWBcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRBbm9ueW1vdXNDb25zZW50c1xuICAgICAgPyB0aGlzLmFkYXB0ZXIubG9hZEFub255bW91c0NvbnNlbnRzKClcbiAgICAgIDogbnVsbDtcbiAgfVxufVxuIl19