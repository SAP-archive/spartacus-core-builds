import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var StoreDataService = /** @class */ (function () {
    function StoreDataService() {
        this.weekDays = {
            0: 'Sun',
            1: 'Mon',
            2: 'Tue',
            3: 'Wed',
            4: 'Thu',
            5: 'Fri',
            6: 'Sat',
        };
    }
    /**
     * Returns store latitude
     * @param location store location
     */
    StoreDataService.prototype.getStoreLatitude = function (location) {
        return location.geoPoint.latitude;
    };
    /**
     * Returns store longitude
     * @param location store location
     */
    StoreDataService.prototype.getStoreLongitude = function (location) {
        return location.geoPoint.longitude;
    };
    /**
     * Returns store closing time
     * @param location store location
     * @param date date to compare
     */
    StoreDataService.prototype.getStoreClosingTime = function (location, date) {
        var requestedDaySchedule = this.getSchedule(location, date);
        if (requestedDaySchedule) {
            if (requestedDaySchedule.closed && requestedDaySchedule.closed === true) {
                return 'closed';
            }
            if (requestedDaySchedule.closingTime) {
                return requestedDaySchedule.closingTime.formattedHour;
            }
        }
    };
    /**
     * Returns store opening time
     * @param location store location
     * @param date date to compare
     */
    StoreDataService.prototype.getStoreOpeningTime = function (location, date) {
        var requestedDaySchedule = this.getSchedule(location, date);
        if (requestedDaySchedule) {
            if (requestedDaySchedule.closed && requestedDaySchedule.closed === true) {
                return 'closed';
            }
            if (requestedDaySchedule.openingTime) {
                return requestedDaySchedule.openingTime.formattedHour;
            }
        }
    };
    /**
     * Extracts schedule from the given location for the given date
     * @param location location
     * @param date date
     *
     * @returns payload describing the store's schedule for the given day.
     */
    StoreDataService.prototype.getSchedule = function (location, date) {
        var weekday = this.weekDays[date.getDay()];
        return location.openingHours.weekDayOpeningList.find(function (weekDayOpeningListItem) { return weekDayOpeningListItem.weekDay === weekday; });
    };
    StoreDataService.ɵprov = i0.ɵɵdefineInjectable({ factory: function StoreDataService_Factory() { return new StoreDataService(); }, token: StoreDataService, providedIn: "root" });
    StoreDataService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], StoreDataService);
    return StoreDataService;
}());
export { StoreDataService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQztJQUFBO1FBRVcsYUFBUSxHQUFHO1lBQ2xCLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1NBQ1QsQ0FBQztLQXFFSDtJQW5FQzs7O09BR0c7SUFDSCwyQ0FBZ0IsR0FBaEIsVUFBaUIsUUFBd0I7UUFDdkMsT0FBTyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsNENBQWlCLEdBQWpCLFVBQWtCLFFBQXdCO1FBQ3hDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4Q0FBbUIsR0FBbkIsVUFBb0IsUUFBd0IsRUFBRSxJQUFVO1FBQ3RELElBQU0sb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFFOUQsSUFBSSxvQkFBb0IsRUFBRTtZQUN4QixJQUFJLG9CQUFvQixDQUFDLE1BQU0sSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUN2RSxPQUFPLFFBQVEsQ0FBQzthQUNqQjtZQUVELElBQUksb0JBQW9CLENBQUMsV0FBVyxFQUFFO2dCQUNwQyxPQUFPLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7YUFDdkQ7U0FDRjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsOENBQW1CLEdBQW5CLFVBQW9CLFFBQXdCLEVBQUUsSUFBVTtRQUN0RCxJQUFNLG9CQUFvQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRTlELElBQUksb0JBQW9CLEVBQUU7WUFDeEIsSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLElBQUksb0JBQW9CLENBQUMsTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDdkUsT0FBTyxRQUFRLENBQUM7YUFDakI7WUFFRCxJQUFJLG9CQUFvQixDQUFDLFdBQVcsRUFBRTtnQkFDcEMsT0FBTyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDO2FBQ3ZEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ08sc0NBQVcsR0FBckIsVUFBc0IsUUFBd0IsRUFBRSxJQUFVO1FBQ3hELElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFDN0MsT0FBTyxRQUFRLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FDbEQsVUFBQyxzQkFBc0IsSUFBSyxPQUFBLHNCQUFzQixDQUFDLE9BQU8sS0FBSyxPQUFPLEVBQTFDLENBQTBDLENBQ3ZFLENBQUM7SUFDSixDQUFDOztJQTlFVSxnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQStFNUI7MkJBckZEO0NBcUZDLEFBL0VELElBK0VDO1NBL0VZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcG9pbnQtb2Ytc2VydmljZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBTdG9yZURhdGFTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgREVDSU1BTF9CQVNFOiAxMDtcbiAgcmVhZG9ubHkgd2Vla0RheXMgPSB7XG4gICAgMDogJ1N1bicsXG4gICAgMTogJ01vbicsXG4gICAgMjogJ1R1ZScsXG4gICAgMzogJ1dlZCcsXG4gICAgNDogJ1RodScsXG4gICAgNTogJ0ZyaScsXG4gICAgNjogJ1NhdCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgbGF0aXR1ZGVcbiAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAqL1xuICBnZXRTdG9yZUxhdGl0dWRlKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLmdlb1BvaW50LmxhdGl0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgbG9uZ2l0dWRlXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKi9cbiAgZ2V0U3RvcmVMb25naXR1ZGUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbG9jYXRpb24uZ2VvUG9pbnQubG9uZ2l0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgY2xvc2luZyB0aW1lXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKiBAcGFyYW0gZGF0ZSBkYXRlIHRvIGNvbXBhcmVcbiAgICovXG4gIGdldFN0b3JlQ2xvc2luZ1RpbWUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlLCBkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCByZXF1ZXN0ZWREYXlTY2hlZHVsZSA9IHRoaXMuZ2V0U2NoZWR1bGUobG9jYXRpb24sIGRhdGUpO1xuXG4gICAgaWYgKHJlcXVlc3RlZERheVNjaGVkdWxlKSB7XG4gICAgICBpZiAocmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2VkICYmIHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NlZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gJ2Nsb3NlZCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zaW5nVGltZSkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2luZ1RpbWUuZm9ybWF0dGVkSG91cjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBzdG9yZSBvcGVuaW5nIHRpbWVcbiAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBkYXRlIGRhdGUgdG8gY29tcGFyZVxuICAgKi9cbiAgZ2V0U3RvcmVPcGVuaW5nVGltZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UsIGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlcXVlc3RlZERheVNjaGVkdWxlID0gdGhpcy5nZXRTY2hlZHVsZShsb2NhdGlvbiwgZGF0ZSk7XG5cbiAgICBpZiAocmVxdWVzdGVkRGF5U2NoZWR1bGUpIHtcbiAgICAgIGlmIChyZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zZWQgJiYgcmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2VkID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAnY2xvc2VkJztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlcXVlc3RlZERheVNjaGVkdWxlLm9wZW5pbmdUaW1lKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0ZWREYXlTY2hlZHVsZS5vcGVuaW5nVGltZS5mb3JtYXR0ZWRIb3VyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyBzY2hlZHVsZSBmcm9tIHRoZSBnaXZlbiBsb2NhdGlvbiBmb3IgdGhlIGdpdmVuIGRhdGVcbiAgICogQHBhcmFtIGxvY2F0aW9uIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBkYXRlIGRhdGVcbiAgICpcbiAgICogQHJldHVybnMgcGF5bG9hZCBkZXNjcmliaW5nIHRoZSBzdG9yZSdzIHNjaGVkdWxlIGZvciB0aGUgZ2l2ZW4gZGF5LlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFNjaGVkdWxlKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSwgZGF0ZTogRGF0ZSk6IGFueSB7XG4gICAgY29uc3Qgd2Vla2RheSA9IHRoaXMud2Vla0RheXNbZGF0ZS5nZXREYXkoKV07XG4gICAgcmV0dXJuIGxvY2F0aW9uLm9wZW5pbmdIb3Vycy53ZWVrRGF5T3BlbmluZ0xpc3QuZmluZChcbiAgICAgICh3ZWVrRGF5T3BlbmluZ0xpc3RJdGVtKSA9PiB3ZWVrRGF5T3BlbmluZ0xpc3RJdGVtLndlZWtEYXkgPT09IHdlZWtkYXlcbiAgICApO1xuICB9XG59XG4iXX0=