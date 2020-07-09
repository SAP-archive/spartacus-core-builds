import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { AnonymousConsentTemplatesAdapter } from './anonymous-consent-templates.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./anonymous-consent-templates.adapter";
var AnonymousConsentTemplatesConnector = /** @class */ (function () {
    function AnonymousConsentTemplatesConnector(adapter) {
        this.adapter = adapter;
    }
    AnonymousConsentTemplatesConnector.prototype.loadAnonymousConsentTemplates = function () {
        return this.adapter.loadAnonymousConsentTemplates();
    };
    AnonymousConsentTemplatesConnector.prototype.loadAnonymousConsents = function () {
        // TODO{#8158} - remove the conditional check, and just `return this.adapter.loadAnonymousConsents()`
        return this.adapter.loadAnonymousConsents
            ? this.adapter.loadAnonymousConsents()
            : null;
    };
    AnonymousConsentTemplatesConnector.ctorParameters = function () { return [
        { type: AnonymousConsentTemplatesAdapter }
    ]; };
    AnonymousConsentTemplatesConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function AnonymousConsentTemplatesConnector_Factory() { return new AnonymousConsentTemplatesConnector(i0.ɵɵinject(i1.AnonymousConsentTemplatesAdapter)); }, token: AnonymousConsentTemplatesConnector, providedIn: "root" });
    AnonymousConsentTemplatesConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], AnonymousConsentTemplatesConnector);
    return AnonymousConsentTemplatesConnector;
}());
export { AnonymousConsentTemplatesConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvY29ubmVjdG9ycy9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFLekY7SUFDRSw0Q0FBc0IsT0FBeUM7UUFBekMsWUFBTyxHQUFQLE9BQU8sQ0FBa0M7SUFBRyxDQUFDO0lBRW5FLDBFQUE2QixHQUE3QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0lBQ3RELENBQUM7SUFFRCxrRUFBcUIsR0FBckI7UUFDRSxxR0FBcUc7UUFDckcsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLHFCQUFxQjtZQUN2QyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRTtZQUN0QyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ1gsQ0FBQzs7Z0JBWDhCLGdDQUFnQzs7O0lBRHBELGtDQUFrQztRQUg5QyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csa0NBQWtDLENBYTlDOzZDQXJCRDtDQXFCQyxBQWJELElBYUM7U0FiWSxrQ0FBa0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBbm9ueW1vdXNDb25zZW50LCBDb25zZW50VGVtcGxhdGUgfSBmcm9tICcuLi8uLi9tb2RlbC9jb25zZW50Lm1vZGVsJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyIH0gZnJvbSAnLi9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuYWRhcHRlcic7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNBZGFwdGVyKSB7fVxuXG4gIGxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKCk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRBbm9ueW1vdXNDb25zZW50VGVtcGxhdGVzKCk7XG4gIH1cblxuICBsb2FkQW5vbnltb3VzQ29uc2VudHMoKTogT2JzZXJ2YWJsZTxBbm9ueW1vdXNDb25zZW50W10+IHwgbnVsbCB7XG4gICAgLy8gVE9ET3sjODE1OH0gLSByZW1vdmUgdGhlIGNvbmRpdGlvbmFsIGNoZWNrLCBhbmQganVzdCBgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkQW5vbnltb3VzQ29uc2VudHMoKWBcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRBbm9ueW1vdXNDb25zZW50c1xuICAgICAgPyB0aGlzLmFkYXB0ZXIubG9hZEFub255bW91c0NvbnNlbnRzKClcbiAgICAgIDogbnVsbDtcbiAgfVxufVxuIl19