import { Injectable } from '@angular/core';
import { UserNotificationPreferenceAdapter } from './user-notification-preference.adapter';
import * as i0 from "@angular/core";
import * as i1 from "./user-notification-preference.adapter";
export class UserNotificationPreferenceConnector {
    constructor(adapter) {
        this.adapter = adapter;
    }
    loadAll(userId) {
        return this.adapter.loadAll(userId);
    }
    update(userId, preferences) {
        return this.adapter.update(userId, preferences);
    }
}
UserNotificationPreferenceConnector.ɵprov = i0.ɵɵdefineInjectable({ factory: function UserNotificationPreferenceConnector_Factory() { return new UserNotificationPreferenceConnector(i0.ɵɵinject(i1.UserNotificationPreferenceAdapter)); }, token: UserNotificationPreferenceConnector, providedIn: "root" });
UserNotificationPreferenceConnector.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
UserNotificationPreferenceConnector.ctorParameters = () => [
    { type: UserNotificationPreferenceAdapter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5jb25uZWN0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jb3JlL3NyYy91c2VyL2Nvbm5lY3RvcnMvbm90aWZpY2F0aW9uLXByZWZlcmVuY2UvdXNlci1ub3RpZmljYXRpb24tcHJlZmVyZW5jZS5jb25uZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQzs7O0FBTTNGLE1BQU0sT0FBTyxtQ0FBbUM7SUFDOUMsWUFBc0IsT0FBMEM7UUFBMUMsWUFBTyxHQUFQLE9BQU8sQ0FBbUM7SUFBRyxDQUFDO0lBRXBFLE9BQU8sQ0FBQyxNQUFjO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELE1BQU0sQ0FBQyxNQUFjLEVBQUUsV0FBcUM7UUFDMUQsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7OztZQVpGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTFEsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgVXNlck5vdGlmaWNhdGlvblByZWZlcmVuY2VBZGFwdGVyIH0gZnJvbSAnLi91c2VyLW5vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLmFkYXB0ZXInO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uUHJlZmVyZW5jZSB9IGZyb20gJy4uLy4uLy4uL21vZGVsL25vdGlmaWNhdGlvbi1wcmVmZXJlbmNlLm1vZGVsJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQ29ubmVjdG9yIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGFkYXB0ZXI6IFVzZXJOb3RpZmljYXRpb25QcmVmZXJlbmNlQWRhcHRlcikge31cblxuICBsb2FkQWxsKHVzZXJJZDogc3RyaW5nKTogT2JzZXJ2YWJsZTxOb3RpZmljYXRpb25QcmVmZXJlbmNlW10+IHtcbiAgICByZXR1cm4gdGhpcy5hZGFwdGVyLmxvYWRBbGwodXNlcklkKTtcbiAgfVxuXG4gIHVwZGF0ZSh1c2VySWQ6IHN0cmluZywgcHJlZmVyZW5jZXM6IE5vdGlmaWNhdGlvblByZWZlcmVuY2VbXSkge1xuICAgIHJldHVybiB0aGlzLmFkYXB0ZXIudXBkYXRlKHVzZXJJZCwgcHJlZmVyZW5jZXMpO1xuICB9XG59XG4iXX0=