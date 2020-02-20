import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { UserAdapter } from './user.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user.adapter";
var UserConnector = /** @class */ (function () {
    function UserConnector(adapter) {
        this.adapter = adapter;
    }
    UserConnector.prototype.get = function (userId) {
        return this.adapter.load(userId);
    };
    UserConnector.prototype.update = function (username, user) {
        return this.adapter.update(username, user);
    };
    UserConnector.prototype.register = function (user) {
        return this.adapter.register(user);
    };
    UserConnector.prototype.registerGuest = function (guid, password) {
        return this.adapter.registerGuest(guid, password);
    };
    UserConnector.prototype.requestForgotPasswordEmail = function (userEmailAddress) {
        return this.adapter.requestForgotPasswordEmail(userEmailAddress);
    };
    UserConnector.prototype.resetPassword = function (token, newPassword) {
        return this.adapter.resetPassword(token, newPassword);
    };
    UserConnector.prototype.updateEmail = function (userId, currentPassword, newUserId) {
        return this.adapter.updateEmail(userId, currentPassword, newUserId);
    };
    UserConnector.prototype.updatePassword = function (userId, oldPassword, newPassword) {
        return this.adapter.updatePassword(userId, oldPassword, newPassword);
    };
    UserConnector.prototype.remove = function (userId) {
        return this.adapter.remove(userId);
    };
    UserConnector.prototype.getTitles = function () {
        return this.adapter.loadTitles();
    };
    UserConnector.ctorParameters = function () { return [
        { type: UserAdapter }
    ]; };
    UserConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserConnector_Factory() { return new UserConnector(i0.ɵɵinject(i1.UserAdapter)); }, token: UserConnector, providedIn: "root" });
    UserConnector = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], UserConnector);
    return UserConnector;
}());
export { UserConnector };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvdXNlci9jb25uZWN0b3JzL3VzZXIvdXNlci5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLN0M7SUFDRSx1QkFBc0IsT0FBb0I7UUFBcEIsWUFBTyxHQUFQLE9BQU8sQ0FBYTtJQUFHLENBQUM7SUFFOUMsMkJBQUcsR0FBSCxVQUFJLE1BQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLFFBQWdCLEVBQUUsSUFBVTtRQUNqQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsZ0NBQVEsR0FBUixVQUFTLElBQWdCO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxJQUFZLEVBQUUsUUFBZ0I7UUFDMUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGtEQUEwQixHQUExQixVQUEyQixnQkFBd0I7UUFDakQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUVELHFDQUFhLEdBQWIsVUFBYyxLQUFhLEVBQUUsV0FBbUI7UUFDOUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFDRSxNQUFjLEVBQ2QsZUFBdUIsRUFDdkIsU0FBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3RFLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQ0UsTUFBYyxFQUNkLFdBQW1CLEVBQ25CLFdBQW1CO1FBRW5CLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsOEJBQU0sR0FBTixVQUFPLE1BQWM7UUFDbkIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsaUNBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDOztnQkFoRDhCLFdBQVc7OztJQUQvQixhQUFhO1FBSHpCLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7T0FDVyxhQUFhLENBa0R6Qjt3QkExREQ7Q0EwREMsQUFsREQsSUFrREM7U0FsRFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFRpdGxlLCBVc2VyLCBVc2VyU2lnblVwIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWwvbWlzYy5tb2RlbCc7XG5pbXBvcnQgeyBVc2VyQWRhcHRlciB9IGZyb20gJy4vdXNlci5hZGFwdGVyJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJDb25uZWN0b3Ige1xuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgYWRhcHRlcjogVXNlckFkYXB0ZXIpIHt9XG5cbiAgZ2V0KHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkKHVzZXJJZCk7XG4gIH1cblxuICB1cGRhdGUodXNlcm5hbWU6IHN0cmluZywgdXNlcjogVXNlcik6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnVwZGF0ZSh1c2VybmFtZSwgdXNlcik7XG4gIH1cblxuICByZWdpc3Rlcih1c2VyOiBVc2VyU2lnblVwKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5yZWdpc3Rlcih1c2VyKTtcbiAgfVxuXG4gIHJlZ2lzdGVyR3Vlc3QoZ3VpZDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxVc2VyPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5yZWdpc3Rlckd1ZXN0KGd1aWQsIHBhc3N3b3JkKTtcbiAgfVxuXG4gIHJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8e30+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLnJlcXVlc3RGb3Jnb3RQYXNzd29yZEVtYWlsKHVzZXJFbWFpbEFkZHJlc3MpO1xuICB9XG5cbiAgcmVzZXRQYXNzd29yZCh0b2tlbjogc3RyaW5nLCBuZXdQYXNzd29yZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIucmVzZXRQYXNzd29yZCh0b2tlbiwgbmV3UGFzc3dvcmQpO1xuICB9XG5cbiAgdXBkYXRlRW1haWwoXG4gICAgdXNlcklkOiBzdHJpbmcsXG4gICAgY3VycmVudFBhc3N3b3JkOiBzdHJpbmcsXG4gICAgbmV3VXNlcklkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIudXBkYXRlRW1haWwodXNlcklkLCBjdXJyZW50UGFzc3dvcmQsIG5ld1VzZXJJZCk7XG4gIH1cblxuICB1cGRhdGVQYXNzd29yZChcbiAgICB1c2VySWQ6IHN0cmluZyxcbiAgICBvbGRQYXNzd29yZDogc3RyaW5nLFxuICAgIG5ld1Bhc3N3b3JkOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIudXBkYXRlUGFzc3dvcmQodXNlcklkLCBvbGRQYXNzd29yZCwgbmV3UGFzc3dvcmQpO1xuICB9XG5cbiAgcmVtb3ZlKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTx7fT4ge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIucmVtb3ZlKHVzZXJJZCk7XG4gIH1cblxuICBnZXRUaXRsZXMoKTogT2JzZXJ2YWJsZTxUaXRsZVtdPiB7XG4gICAgcmV0dXJuIHRoaXMuYWRhcHRlci5sb2FkVGl0bGVzKCk7XG4gIH1cbn1cbiJdfQ==