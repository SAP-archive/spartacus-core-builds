import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { UserConsentAdapter } from './user-consent.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-consent.adapter";
var UserConsentConnector = /** @class */ (function () {
    function UserConsentConnector(adapter) {
        this.adapter = adapter;
    }
    UserConsentConnector.prototype.loadConsents = function (userId) {
        return this.adapter.loadConsents(userId);
    };
    UserConsentConnector.prototype.giveConsent = function (userId, consentTemplateId, consentTemplateVersion) {
        return this.adapter.giveConsent(userId, consentTemplateId, consentTemplateVersion);
    };
    UserConsentConnector.prototype.withdrawConsent = function (userId, consentCode) {
        return this.adapter.withdrawConsent(userId, consentCode);
    };
    UserConsentConnector.ctorParameters = function () { return [
        { type: UserConsentAdapter }
    ]; };
    UserConsentConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserConsentConnector_Factory() { return new UserConsentConnector(i0.ɵɵinject(i1.UserConsentAdapter)); }, token: UserConsentConnector, providedIn: "root" });
    UserConsentConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UserConsentConnector);
    return UserConsentConnector;
}());
export { UserConsentConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb25zZW50LmNvbm5lY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy91c2VyL2Nvbm5lY3RvcnMvY29uc2VudC91c2VyLWNvbnNlbnQuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7QUFNNUQ7SUFDRSw4QkFBc0IsT0FBMkI7UUFBM0IsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7SUFBRyxDQUFDO0lBRXJELDJDQUFZLEdBQVosVUFBYSxNQUFjO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELDBDQUFXLEdBQVgsVUFDRSxNQUFjLEVBQ2QsaUJBQXlCLEVBQ3pCLHNCQUE4QjtRQUU5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUM3QixNQUFNLEVBQ04saUJBQWlCLEVBQ2pCLHNCQUFzQixDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVELDhDQUFlLEdBQWYsVUFBZ0IsTUFBYyxFQUFFLFdBQW1CO1FBQ2pELE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzNELENBQUM7O2dCQXBCOEIsa0JBQWtCOzs7SUFEdEMsb0JBQW9CO1FBSGhDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxvQkFBb0IsQ0FzQmhDOytCQTlCRDtDQThCQyxBQXRCRCxJQXNCQztTQXRCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyQ29uc2VudEFkYXB0ZXIgfSBmcm9tICcuL3VzZXItY29uc2VudC5hZGFwdGVyJztcbmltcG9ydCB7IENvbnNlbnRUZW1wbGF0ZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL2NvbnNlbnQubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlckNvbnNlbnRDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogVXNlckNvbnNlbnRBZGFwdGVyKSB7fVxuXG4gIGxvYWRDb25zZW50cyh1c2VySWQ6IHN0cmluZyk6IE9ic2VydmFibGU8Q29uc2VudFRlbXBsYXRlW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRDb25zZW50cyh1c2VySWQpO1xuICB9XG5cbiAgZ2l2ZUNvbnNlbnQoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY29uc2VudFRlbXBsYXRlSWQ6IHN0cmluZyxcbiAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uOiBudW1iZXJcbiAgKTogT2JzZXJ2YWJsZTxDb25zZW50VGVtcGxhdGU+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmdpdmVDb25zZW50KFxuICAgICAgdXNlcklkLFxuICAgICAgY29uc2VudFRlbXBsYXRlSWQsXG4gICAgICBjb25zZW50VGVtcGxhdGVWZXJzaW9uXG4gICAgKTtcbiAgfVxuXG4gIHdpdGhkcmF3Q29uc2VudCh1c2VySWQ6IHN0cmluZywgY29uc2VudENvZGU6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLndpdGhkcmF3Q29uc2VudCh1c2VySWQsIGNvbnNlbnRDb2RlKTtcbiAgfVxufVxuIl19