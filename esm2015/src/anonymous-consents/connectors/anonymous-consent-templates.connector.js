import { Injectable } from '@angular/core';
import { AnonymousConsentTemplatesAdapter } from './anonymous-consent-templates.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./anonymous-consent-templates.adapter";
export class AnonymousConsentTemplatesConnector {
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
}
AnonymousConsentTemplatesConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentTemplatesConnector_Factory() { return new AnonymousConsentTemplatesConnector(i0.ɵɵinject(i1.AnonymousConsentTemplatesAdapter)); }, token: AnonymousConsentTemplatesConnector, providedIn: "root" });
AnonymousConsentTemplatesConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
AnonymousConsentTemplatesConnector.ctorParameters = () => [
    { type: AnonymousConsentTemplatesAdapter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2Fub255bW91cy1jb25zZW50cy9jb25uZWN0b3JzL2Fub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O0FBS3pGLE1BQU0sT0FBTyxrQ0FBa0M7SUFDN0MsWUFBc0IsT0FBeUM7UUFBekMsWUFBTyxHQUFQLE9BQU8sQ0FBa0M7SUFBRyxDQUFDO0lBRW5FLDZCQUE2QjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLHFHQUFxRztRQUNyRyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMscUJBQXFCO1lBQ3ZDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQixFQUFFO1lBQ3RDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDWCxDQUFDOzs7O1lBZkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7WUFKUSxnQ0FBZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyIH0gZnJvbSAnLi9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyKSB7fVxuXG4gIGxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKCk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKCk7XG4gIH1cblxuICBsb2FkQW5vbnltb3VzQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50W10+IHwgbnVsbCB7XG4gICAgLy8gVE9ET3sjODE1OH0gLSByZW1vdmUgdGhlIGNvbmRpdGlvbmFsIGNoZWNrLCBhbmQganVzdCBgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQW5vbnltb3VzQ29uc2VudHMoKWBcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRBbm9ueW1vdXNDb25zZW50c1xuICAgICAgPyB0aGlzLmFkYXB0ZXIubG9hZEFub255bW91c0NvbnNlbnRzKClcbiAgICAgIDogbnVsbDtcbiAgfVxufVxuIl19