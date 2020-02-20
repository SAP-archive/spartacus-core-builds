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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5vbnltb3VzLWNvbnNlbnQtdGVtcGxhdGVzLmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9hbm9ueW1vdXMtY29uc2VudHMvY29ubmVjdG9ycy9hbm9ueW1vdXMtY29uc2VudC10ZW1wbGF0ZXMuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFLekY7SUFDRSw0Q0FBc0IsT0FBeUM7UUFBekMsWUFBTyxHQUFQLE9BQU8sQ0FBa0M7SUFBRyxDQUFDO0lBRW5FLDBFQUE2QixHQUE3QjtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0lBQ3RELENBQUM7O2dCQUo4QixnQ0FBZ0M7OztJQURwRCxrQ0FBa0M7UUFIOUMsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGtDQUFrQyxDQU05Qzs2Q0FkRDtDQWNDLEFBTkQsSUFNQztTQU5ZLGtDQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuaW1wb3J0IHsgQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIgfSBmcm9tICcuL2Fub255bW91cy1jb25zZW50LXRlbXBsYXRlcy5hZGFwdGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXNDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogQW5vbnltb3VzQ29uc2VudFRlbXBsYXRlc0FkYXB0ZXIpIHt9XG5cbiAgbG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGVbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEFub255bW91c0NvbnNlbnRUZW1wbGF0ZXMoKTtcbiAgfVxufVxuIl19