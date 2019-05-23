/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
export class StoreDataService {
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
     * @param {?} location store location
     * @return {?}
     */
    getStoreLatitude(location) {
        return location.geoPoint.latitude;
    }
    /**
     * Returns store longitude
     * @param {?} location store location
     * @return {?}
     */
    getStoreLongitude(location) {
        return location.geoPoint.longitude;
    }
    /**
     * Returns store closing time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    getStoreClosingTime(location, date) {
        /** @type {?} */
        const requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        let result = null;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            const closingHour = requestedDaySchedule.closingTime.formattedHour.split(':')[0];
            /** @type {?} */
            const closingMinute = requestedDaySchedule.closingTime.minute;
            result = new Date(date.valueOf());
            result.setHours(closingHour);
            result.setMinutes(closingMinute);
        }
        return result;
    }
    /**
     * Returns store opening time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    getStoreOpeningTime(location, date) {
        /** @type {?} */
        const requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        let result = null;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            const openingHour = requestedDaySchedule.openingTime.formattedHour.split(':')[0];
            /** @type {?} */
            const openingMinutes = requestedDaySchedule.openingTime.minute;
            result = new Date(date.valueOf());
            result.setHours(openingHour);
            result.setMinutes(openingMinutes);
        }
        return result;
    }
    /**
     * Returns information about store open status
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    isStoreOpen(location, date) {
        /** @type {?} */
        const requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        let result = false;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            const openingDate = this.getStoreOpeningTime(location, date);
            /** @type {?} */
            const closingDate = this.getStoreClosingTime(location, date);
            result = date > openingDate && date < closingDate;
        }
        return result;
    }
    /**
     * Extracts schedule from the given location for the given date
     * @protected
     * @param {?} location location
     * @param {?} date date
     *
     * @return {?} payload describing the store's schedule for the given day.
     */
    getSchedule(location, date) {
        /** @type {?} */
        const weekday = this.weekDays[date.getDay()];
        return location.openingHours.weekDayOpeningList.find(weekDayOpeningListItem => weekDayOpeningListItem.weekDay === weekday);
    }
}
StoreDataService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    StoreDataService.prototype.DECIMAL_BASE;
    /** @type {?} */
    StoreDataService.prototype.weekDays;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7UUFHVyxhQUFRLEdBQUc7WUFDbEIsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7U0FDVCxDQUFDO0lBOEZKLENBQUM7Ozs7OztJQXhGQyxnQkFBZ0IsQ0FBQyxRQUF3QjtRQUN2QyxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQU1ELGlCQUFpQixDQUFDLFFBQXdCO1FBQ3hDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQzs7Ozs7OztJQU9ELG1CQUFtQixDQUFDLFFBQXdCLEVBQUUsSUFBVTs7Y0FDaEQsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDOztZQUN6RCxNQUFNLEdBQVMsSUFBSTtRQUV2QixJQUFJLG9CQUFvQixDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7O2tCQUNuQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQ3RFLEdBQUcsQ0FDSixDQUFDLENBQUMsQ0FBQzs7a0JBQ0UsYUFBYSxHQUFHLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxNQUFNO1lBQzdELE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBT0QsbUJBQW1CLENBQUMsUUFBd0IsRUFBRSxJQUFVOztjQUNoRCxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7O1lBQ3pELE1BQU0sR0FBUyxJQUFJO1FBRXZCLElBQUksb0JBQW9CLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTs7a0JBQ25DLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FDdEUsR0FBRyxDQUNKLENBQUMsQ0FBQyxDQUFDOztrQkFDRSxjQUFjLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDOUQsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFPRCxXQUFXLENBQUMsUUFBd0IsRUFBRSxJQUFVOztjQUN4QyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7O1lBQ3pELE1BQU0sR0FBRyxLQUFLO1FBRWxCLElBQUksb0JBQW9CLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTs7a0JBQ25DLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQzs7a0JBQ3RELFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztZQUU1RCxNQUFNLEdBQUcsSUFBSSxHQUFHLFdBQVcsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO1NBQ25EO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7O0lBU1MsV0FBVyxDQUFDLFFBQXdCLEVBQUUsSUFBVTs7Y0FDbEQsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVDLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQ2xELHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUNyRSxDQUFDO0lBQ0osQ0FBQzs7O1lBeEdGLFVBQVU7Ozs7SUFFVCx3Q0FBMEI7O0lBQzFCLG9DQVFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9pbnRPZlNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wb2ludC1vZi1zZXJ2aWNlLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b3JlRGF0YVNlcnZpY2Uge1xuICByZWFkb25seSBERUNJTUFMX0JBU0U6IDEwO1xuICByZWFkb25seSB3ZWVrRGF5cyA9IHtcbiAgICAwOiAnU3VuJyxcbiAgICAxOiAnTW9uJyxcbiAgICAyOiAnVHVlJyxcbiAgICAzOiAnV2VkJyxcbiAgICA0OiAnVGh1JyxcbiAgICA1OiAnRnJpJyxcbiAgICA2OiAnU2F0JyxcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBzdG9yZSBsYXRpdHVkZVxuICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICovXG4gIGdldFN0b3JlTGF0aXR1ZGUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbG9jYXRpb24uZ2VvUG9pbnQubGF0aXR1ZGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBzdG9yZSBsb25naXR1ZGVcbiAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAqL1xuICBnZXRTdG9yZUxvbmdpdHVkZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UpOiBudW1iZXIge1xuICAgIHJldHVybiBsb2NhdGlvbi5nZW9Qb2ludC5sb25naXR1ZGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBzdG9yZSBjbG9zaW5nIHRpbWVcbiAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBkYXRlIGRhdGUgdG8gY29tcGFyZVxuICAgKi9cbiAgZ2V0U3RvcmVDbG9zaW5nVGltZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UsIGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgICBjb25zdCByZXF1ZXN0ZWREYXlTY2hlZHVsZSA9IHRoaXMuZ2V0U2NoZWR1bGUobG9jYXRpb24sIGRhdGUpO1xuICAgIGxldCByZXN1bHQ6IERhdGUgPSBudWxsO1xuXG4gICAgaWYgKHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IGNsb3NpbmdIb3VyID0gcmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2luZ1RpbWUuZm9ybWF0dGVkSG91ci5zcGxpdChcbiAgICAgICAgJzonXG4gICAgICApWzBdO1xuICAgICAgY29uc3QgY2xvc2luZ01pbnV0ZSA9IHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NpbmdUaW1lLm1pbnV0ZTtcbiAgICAgIHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUudmFsdWVPZigpKTtcbiAgICAgIHJlc3VsdC5zZXRIb3VycyhjbG9zaW5nSG91cik7XG4gICAgICByZXN1bHQuc2V0TWludXRlcyhjbG9zaW5nTWludXRlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgb3BlbmluZyB0aW1lXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKiBAcGFyYW0gZGF0ZSBkYXRlIHRvIGNvbXBhcmVcbiAgICovXG4gIGdldFN0b3JlT3BlbmluZ1RpbWUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlLCBkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgY29uc3QgcmVxdWVzdGVkRGF5U2NoZWR1bGUgPSB0aGlzLmdldFNjaGVkdWxlKGxvY2F0aW9uLCBkYXRlKTtcbiAgICBsZXQgcmVzdWx0OiBEYXRlID0gbnVsbDtcblxuICAgIGlmIChyZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zZWQgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBvcGVuaW5nSG91ciA9IHJlcXVlc3RlZERheVNjaGVkdWxlLm9wZW5pbmdUaW1lLmZvcm1hdHRlZEhvdXIuc3BsaXQoXG4gICAgICAgICc6J1xuICAgICAgKVswXTtcbiAgICAgIGNvbnN0IG9wZW5pbmdNaW51dGVzID0gcmVxdWVzdGVkRGF5U2NoZWR1bGUub3BlbmluZ1RpbWUubWludXRlO1xuICAgICAgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZS52YWx1ZU9mKCkpO1xuICAgICAgcmVzdWx0LnNldEhvdXJzKG9wZW5pbmdIb3VyKTtcbiAgICAgIHJlc3VsdC5zZXRNaW51dGVzKG9wZW5pbmdNaW51dGVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgaW5mb3JtYXRpb24gYWJvdXQgc3RvcmUgb3BlbiBzdGF0dXNcbiAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBkYXRlIGRhdGUgdG8gY29tcGFyZVxuICAgKi9cbiAgaXNTdG9yZU9wZW4obG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlLCBkYXRlOiBEYXRlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcmVxdWVzdGVkRGF5U2NoZWR1bGUgPSB0aGlzLmdldFNjaGVkdWxlKGxvY2F0aW9uLCBkYXRlKTtcbiAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG5cbiAgICBpZiAocmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2VkID09PSBmYWxzZSkge1xuICAgICAgY29uc3Qgb3BlbmluZ0RhdGUgPSB0aGlzLmdldFN0b3JlT3BlbmluZ1RpbWUobG9jYXRpb24sIGRhdGUpO1xuICAgICAgY29uc3QgY2xvc2luZ0RhdGUgPSB0aGlzLmdldFN0b3JlQ2xvc2luZ1RpbWUobG9jYXRpb24sIGRhdGUpO1xuXG4gICAgICByZXN1bHQgPSBkYXRlID4gb3BlbmluZ0RhdGUgJiYgZGF0ZSA8IGNsb3NpbmdEYXRlO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdHMgc2NoZWR1bGUgZnJvbSB0aGUgZ2l2ZW4gbG9jYXRpb24gZm9yIHRoZSBnaXZlbiBkYXRlXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBsb2NhdGlvblxuICAgKiBAcGFyYW0gZGF0ZSBkYXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHBheWxvYWQgZGVzY3JpYmluZyB0aGUgc3RvcmUncyBzY2hlZHVsZSBmb3IgdGhlIGdpdmVuIGRheS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRTY2hlZHVsZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UsIGRhdGU6IERhdGUpOiBhbnkge1xuICAgIGNvbnN0IHdlZWtkYXkgPSB0aGlzLndlZWtEYXlzW2RhdGUuZ2V0RGF5KCldO1xuICAgIHJldHVybiBsb2NhdGlvbi5vcGVuaW5nSG91cnMud2Vla0RheU9wZW5pbmdMaXN0LmZpbmQoXG4gICAgICB3ZWVrRGF5T3BlbmluZ0xpc3RJdGVtID0+IHdlZWtEYXlPcGVuaW5nTGlzdEl0ZW0ud2Vla0RheSA9PT0gd2Vla2RheVxuICAgICk7XG4gIH1cbn1cbiJdfQ==