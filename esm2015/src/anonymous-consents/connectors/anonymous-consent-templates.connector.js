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
        return this.adapter.loadAnonymousConsents();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL2Fub255bW91cy1jb25zZW50cy9jb25uZWN0b3JzL2Fub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUczQyxPQUFPLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQzs7O0FBS3pGLE1BQU0sT0FBTyxrQ0FBa0M7SUFDN0MsWUFBc0IsT0FBeUM7UUFBekMsWUFBTyxHQUFQLE9BQU8sQ0FBa0M7SUFBRyxDQUFDO0lBRW5FLDZCQUE2QjtRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsNkJBQTZCLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0lBQzlDLENBQUM7Ozs7WUFaRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7OztZQUpRLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFub255bW91c0NvbnNlbnQsIENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIgfSBmcm9tICcuL2Fub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5hZGFwdGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIpIHt9XG5cbiAgbG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKTtcbiAgfVxuXG4gIGxvYWRBbm9ueW1vdXNDb25zZW50cygpOiBPYnNlcnZhYmxlPEFub255bW91c0NvbnNlbnRbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEFub255bW91c0NvbnNlbnRzKCk7XG4gIH1cbn1cbiJdfQ==