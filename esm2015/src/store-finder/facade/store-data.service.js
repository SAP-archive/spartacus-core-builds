import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let StoreDataService = class StoreDataService {
    constructor() {
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
    getStoreLatitude(location) {
        return location.geoPoint.latitude;
    }
    /**
     * Returns store longitude
     * @param location store location
     */
    getStoreLongitude(location) {
        return location.geoPoint.longitude;
    }
    /**
     * Returns store closing time
     * @param location store location
     * @param date date to compare
     */
    getStoreClosingTime(location, date) {
        const requestedDaySchedule = this.getSchedule(location, date);
        if (requestedDaySchedule) {
            if (requestedDaySchedule.closed && requestedDaySchedule.closed === true) {
                return 'closed';
            }
            if (requestedDaySchedule.closingTime) {
                return requestedDaySchedule.closingTime.formattedHour;
            }
        }
    }
    /**
     * Returns store opening time
     * @param location store location
     * @param date date to compare
     */
    getStoreOpeningTime(location, date) {
        const requestedDaySchedule = this.getSchedule(location, date);
        if (requestedDaySchedule) {
            if (requestedDaySchedule.closed && requestedDaySchedule.closed === true) {
                return 'closed';
            }
            if (requestedDaySchedule.openingTime) {
                return requestedDaySchedule.openingTime.formattedHour;
            }
        }
    }
    /**
     * Extracts schedule from the given location for the given date
     * @param location location
     * @param date date
     *
     * @returns payload describing the store's schedule for the given day.
     */
    getSchedule(location, date) {
        const weekday = this.weekDays[date.getDay()];
        return location.openingHours.weekDayOpeningList.find(weekDayOpeningListItem => weekDayOpeningListItem.weekDay === weekday);
    }
};
StoreDataService = __decorate([
    Injectable()
], StoreDataService);
export { StoreDataService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQTdCO1FBRVcsYUFBUSxHQUFHO1lBQ2xCLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1NBQ1QsQ0FBQztJQXFFSixDQUFDO0lBbkVDOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLFFBQXdCO1FBQ3ZDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlCQUFpQixDQUFDLFFBQXdCO1FBQ3hDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQkFBbUIsQ0FBQyxRQUF3QixFQUFFLElBQVU7UUFDdEQsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5RCxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLElBQUksb0JBQW9CLENBQUMsTUFBTSxJQUFJLG9CQUFvQixDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZFLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO1lBRUQsSUFBSSxvQkFBb0IsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BDLE9BQU8sb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQzthQUN2RDtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQkFBbUIsQ0FBQyxRQUF3QixFQUFFLElBQVU7UUFDdEQsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5RCxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLElBQUksb0JBQW9CLENBQUMsTUFBTSxJQUFJLG9CQUFvQixDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZFLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO1lBRUQsSUFBSSxvQkFBb0IsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BDLE9BQU8sb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQzthQUN2RDtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNPLFdBQVcsQ0FBQyxRQUF3QixFQUFFLElBQVU7UUFDeEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM3QyxPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUNsRCxzQkFBc0IsQ0FBQyxFQUFFLENBQUMsc0JBQXNCLENBQUMsT0FBTyxLQUFLLE9BQU8sQ0FDckUsQ0FBQztJQUNKLENBQUM7Q0FDRixDQUFBO0FBL0VZLGdCQUFnQjtJQUQ1QixVQUFVLEVBQUU7R0FDQSxnQkFBZ0IsQ0ErRTVCO1NBL0VZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcG9pbnQtb2Ytc2VydmljZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yZURhdGFTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgREVDSU1BTF9CQVNFOiAxMDtcbiAgcmVhZG9ubHkgd2Vla0RheXMgPSB7XG4gICAgMDogJ1N1bicsXG4gICAgMTogJ01vbicsXG4gICAgMjogJ1R1ZScsXG4gICAgMzogJ1dlZCcsXG4gICAgNDogJ1RodScsXG4gICAgNTogJ0ZyaScsXG4gICAgNjogJ1NhdCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgbGF0aXR1ZGVcbiAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAqL1xuICBnZXRTdG9yZUxhdGl0dWRlKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLmdlb1BvaW50LmxhdGl0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgbG9uZ2l0dWRlXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKi9cbiAgZ2V0U3RvcmVMb25naXR1ZGUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbG9jYXRpb24uZ2VvUG9pbnQubG9uZ2l0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgY2xvc2luZyB0aW1lXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKiBAcGFyYW0gZGF0ZSBkYXRlIHRvIGNvbXBhcmVcbiAgICovXG4gIGdldFN0b3JlQ2xvc2luZ1RpbWUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlLCBkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCByZXF1ZXN0ZWREYXlTY2hlZHVsZSA9IHRoaXMuZ2V0U2NoZWR1bGUobG9jYXRpb24sIGRhdGUpO1xuXG4gICAgaWYgKHJlcXVlc3RlZERheVNjaGVkdWxlKSB7XG4gICAgICBpZiAocmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2VkICYmIHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NlZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gJ2Nsb3NlZCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zaW5nVGltZSkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2luZ1RpbWUuZm9ybWF0dGVkSG91cjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBzdG9yZSBvcGVuaW5nIHRpbWVcbiAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBkYXRlIGRhdGUgdG8gY29tcGFyZVxuICAgKi9cbiAgZ2V0U3RvcmVPcGVuaW5nVGltZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UsIGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlcXVlc3RlZERheVNjaGVkdWxlID0gdGhpcy5nZXRTY2hlZHVsZShsb2NhdGlvbiwgZGF0ZSk7XG5cbiAgICBpZiAocmVxdWVzdGVkRGF5U2NoZWR1bGUpIHtcbiAgICAgIGlmIChyZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zZWQgJiYgcmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2VkID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAnY2xvc2VkJztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlcXVlc3RlZERheVNjaGVkdWxlLm9wZW5pbmdUaW1lKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0ZWREYXlTY2hlZHVsZS5vcGVuaW5nVGltZS5mb3JtYXR0ZWRIb3VyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyBzY2hlZHVsZSBmcm9tIHRoZSBnaXZlbiBsb2NhdGlvbiBmb3IgdGhlIGdpdmVuIGRhdGVcbiAgICogQHBhcmFtIGxvY2F0aW9uIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBkYXRlIGRhdGVcbiAgICpcbiAgICogQHJldHVybnMgcGF5bG9hZCBkZXNjcmliaW5nIHRoZSBzdG9yZSdzIHNjaGVkdWxlIGZvciB0aGUgZ2l2ZW4gZGF5LlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldFNjaGVkdWxlKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSwgZGF0ZTogRGF0ZSk6IGFueSB7XG4gICAgY29uc3Qgd2Vla2RheSA9IHRoaXMud2Vla0RheXNbZGF0ZS5nZXREYXkoKV07XG4gICAgcmV0dXJuIGxvY2F0aW9uLm9wZW5pbmdIb3Vycy53ZWVrRGF5T3BlbmluZ0xpc3QuZmluZChcbiAgICAgIHdlZWtEYXlPcGVuaW5nTGlzdEl0ZW0gPT4gd2Vla0RheU9wZW5pbmdMaXN0SXRlbS53ZWVrRGF5ID09PSB3ZWVrZGF5XG4gICAgKTtcbiAgfVxufVxuIl19