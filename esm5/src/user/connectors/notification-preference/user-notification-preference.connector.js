import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { UserNotificationPreferenceAdapter } from './user-notification-preference.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-notification-preference.adapter";
var UserNotificationPreferenceConnector = /** @class */ (function () {
    function UserNotificationPreferenceConnector(adapter) {
        this.adapter = adapter;
    }
    UserNotificationPreferenceConnector.prototype.loadAll = function (userId) {
        return this.adapter.loadAll(userId);
    };
    UserNotificationPreferenceConnector.prototype.update = function (userId, preferences) {
        return this.adapter.update(userId, preferences);
    };
    UserNotificationPreferenceConnector.ctorParameters = function () { return [
        { type: UserNotificationPreferenceAdapter }
    ]; };
    UserNotificationPreferenceConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserNotificationPreferenceConnector_Factory() { return new UserNotificationPreferenceConnector(i0.ɵɵinject(i1.UserNotificationPreferenceAdapter)); }, token: UserNotificationPreferenceConnector, providedIn: "root" });
    UserNotificationPreferenceConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UserNotificationPreferenceConnector);
    return UserNotificationPreferenceConnector;
}());
export { UserNotificationPreferenceConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlL3VzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuY29ubmVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHdDQUF3QyxDQUFDOzs7QUFNM0Y7SUFDRSw2Q0FBc0IsT0FBMEM7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBbUM7SUFBRyxDQUFDO0lBRXBFLHFEQUFPLEdBQVAsVUFBUSxNQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELG9EQUFNLEdBQU4sVUFBTyxNQUFjLEVBQUUsV0FBcUM7UUFDMUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBUjhCLGlDQUFpQzs7O0lBRHJELG1DQUFtQztRQUgvQyxVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csbUNBQW1DLENBVS9DOzhDQWxCRDtDQWtCQyxBQVZELElBVUM7U0FWWSxtQ0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBVc2VyTm90aWZpY2F0aW9uUHJlZmVyZW5jZUFkYXB0ZXIgfSBmcm9tICcuL3VzZXItbm90aWZpY2F0aW9uLXByZWZlcmVuY2UuYWRhcHRlcic7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25QcmVmZXJlbmNlIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbm90aWZpY2F0aW9uLXByZWZlcmVuY2UubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyKSB7fVxuXG4gIGxvYWRBbGwodXNlcklkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIubG9hZEFsbCh1c2VySWQpO1xuICB9XG5cbiAgdXBkYXRlKHVzZXJJZDogc3RyaW5nLCBwcmVmZXJlbmNlczogTm90aWZpY2F0aW9uUHJlZmVyZW5jZVtdKSB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci51cGRhdGUodXNlcklkLCBwcmVmZXJlbmNlcyk7XG4gIH1cbn1cbiJdfQ==