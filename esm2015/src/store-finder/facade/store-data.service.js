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
     * @private
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE1BQU0sT0FBTyxnQkFBZ0I7SUFEN0I7UUFHVyxhQUFRLEdBQUc7WUFDbEIsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7U0FDVCxDQUFDO0lBOEZKLENBQUM7Ozs7OztJQXhGQyxnQkFBZ0IsQ0FBQyxRQUFrQjtRQUNqQyxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQU1ELGlCQUFpQixDQUFDLFFBQWtCO1FBQ2xDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQzs7Ozs7OztJQU9ELG1CQUFtQixDQUFDLFFBQWtCLEVBQUUsSUFBVTs7Y0FDMUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDOztZQUN6RCxNQUFNLEdBQVMsSUFBSTtRQUV2QixJQUFJLG9CQUFvQixDQUFDLE1BQU0sS0FBSyxLQUFLLEVBQUU7O2tCQUNuQyxXQUFXLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQ3RFLEdBQUcsQ0FDSixDQUFDLENBQUMsQ0FBQzs7a0JBQ0UsYUFBYSxHQUFHLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxNQUFNO1lBQzdELE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzdCLE1BQU0sQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEM7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBT0QsbUJBQW1CLENBQUMsUUFBa0IsRUFBRSxJQUFVOztjQUMxQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7O1lBQ3pELE1BQU0sR0FBUyxJQUFJO1FBRXZCLElBQUksb0JBQW9CLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTs7a0JBQ25DLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FDdEUsR0FBRyxDQUNKLENBQUMsQ0FBQyxDQUFDOztrQkFDRSxjQUFjLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDOUQsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7SUFPRCxXQUFXLENBQUMsUUFBa0IsRUFBRSxJQUFVOztjQUNsQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7O1lBQ3pELE1BQU0sR0FBRyxLQUFLO1FBRWxCLElBQUksb0JBQW9CLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTs7a0JBQ25DLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQzs7a0JBQ3RELFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztZQUU1RCxNQUFNLEdBQUcsSUFBSSxHQUFHLFdBQVcsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO1NBQ25EO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7O0lBU08sV0FBVyxDQUFDLFFBQWtCLEVBQUUsSUFBVTs7Y0FDMUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVDLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQ2xELHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUNyRSxDQUFDO0lBQ0osQ0FBQzs7O1lBeEdGLFVBQVU7Ozs7SUFFVCx3Q0FBMEI7O0lBQzFCLG9DQVFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICcuLi9tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yZURhdGFTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgREVDSU1BTF9CQVNFOiAxMDtcbiAgcmVhZG9ubHkgd2Vla0RheXMgPSB7XG4gICAgMDogJ1N1bicsXG4gICAgMTogJ01vbicsXG4gICAgMjogJ1R1ZScsXG4gICAgMzogJ1dlZCcsXG4gICAgNDogJ1RodScsXG4gICAgNTogJ0ZyaScsXG4gICAgNjogJ1NhdCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgbGF0aXR1ZGVcbiAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAqL1xuICBnZXRTdG9yZUxhdGl0dWRlKGxvY2F0aW9uOiBMb2NhdGlvbik6IG51bWJlciB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLmdlb1BvaW50LmxhdGl0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgbG9uZ2l0dWRlXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKi9cbiAgZ2V0U3RvcmVMb25naXR1ZGUobG9jYXRpb246IExvY2F0aW9uKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbG9jYXRpb24uZ2VvUG9pbnQubG9uZ2l0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgY2xvc2luZyB0aW1lXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKiBAcGFyYW0gZGF0ZSBkYXRlIHRvIGNvbXBhcmVcbiAgICovXG4gIGdldFN0b3JlQ2xvc2luZ1RpbWUobG9jYXRpb246IExvY2F0aW9uLCBkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgY29uc3QgcmVxdWVzdGVkRGF5U2NoZWR1bGUgPSB0aGlzLmdldFNjaGVkdWxlKGxvY2F0aW9uLCBkYXRlKTtcbiAgICBsZXQgcmVzdWx0OiBEYXRlID0gbnVsbDtcblxuICAgIGlmIChyZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zZWQgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBjbG9zaW5nSG91ciA9IHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NpbmdUaW1lLmZvcm1hdHRlZEhvdXIuc3BsaXQoXG4gICAgICAgICc6J1xuICAgICAgKVswXTtcbiAgICAgIGNvbnN0IGNsb3NpbmdNaW51dGUgPSByZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zaW5nVGltZS5taW51dGU7XG4gICAgICByZXN1bHQgPSBuZXcgRGF0ZShkYXRlLnZhbHVlT2YoKSk7XG4gICAgICByZXN1bHQuc2V0SG91cnMoY2xvc2luZ0hvdXIpO1xuICAgICAgcmVzdWx0LnNldE1pbnV0ZXMoY2xvc2luZ01pbnV0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHN0b3JlIG9wZW5pbmcgdGltZVxuICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICogQHBhcmFtIGRhdGUgZGF0ZSB0byBjb21wYXJlXG4gICAqL1xuICBnZXRTdG9yZU9wZW5pbmdUaW1lKGxvY2F0aW9uOiBMb2NhdGlvbiwgZGF0ZTogRGF0ZSk6IERhdGUge1xuICAgIGNvbnN0IHJlcXVlc3RlZERheVNjaGVkdWxlID0gdGhpcy5nZXRTY2hlZHVsZShsb2NhdGlvbiwgZGF0ZSk7XG4gICAgbGV0IHJlc3VsdDogRGF0ZSA9IG51bGw7XG5cbiAgICBpZiAocmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2VkID09PSBmYWxzZSkge1xuICAgICAgY29uc3Qgb3BlbmluZ0hvdXIgPSByZXF1ZXN0ZWREYXlTY2hlZHVsZS5vcGVuaW5nVGltZS5mb3JtYXR0ZWRIb3VyLnNwbGl0KFxuICAgICAgICAnOidcbiAgICAgIClbMF07XG4gICAgICBjb25zdCBvcGVuaW5nTWludXRlcyA9IHJlcXVlc3RlZERheVNjaGVkdWxlLm9wZW5pbmdUaW1lLm1pbnV0ZTtcbiAgICAgIHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUudmFsdWVPZigpKTtcbiAgICAgIHJlc3VsdC5zZXRIb3VycyhvcGVuaW5nSG91cik7XG4gICAgICByZXN1bHQuc2V0TWludXRlcyhvcGVuaW5nTWludXRlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0IHN0b3JlIG9wZW4gc3RhdHVzXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKiBAcGFyYW0gZGF0ZSBkYXRlIHRvIGNvbXBhcmVcbiAgICovXG4gIGlzU3RvcmVPcGVuKGxvY2F0aW9uOiBMb2NhdGlvbiwgZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcXVlc3RlZERheVNjaGVkdWxlID0gdGhpcy5nZXRTY2hlZHVsZShsb2NhdGlvbiwgZGF0ZSk7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IG9wZW5pbmdEYXRlID0gdGhpcy5nZXRTdG9yZU9wZW5pbmdUaW1lKGxvY2F0aW9uLCBkYXRlKTtcbiAgICAgIGNvbnN0IGNsb3NpbmdEYXRlID0gdGhpcy5nZXRTdG9yZUNsb3NpbmdUaW1lKGxvY2F0aW9uLCBkYXRlKTtcblxuICAgICAgcmVzdWx0ID0gZGF0ZSA+IG9wZW5pbmdEYXRlICYmIGRhdGUgPCBjbG9zaW5nRGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHNjaGVkdWxlIGZyb20gdGhlIGdpdmVuIGxvY2F0aW9uIGZvciB0aGUgZ2l2ZW4gZGF0ZVxuICAgKiBAcGFyYW0gbG9jYXRpb24gbG9jYXRpb25cbiAgICogQHBhcmFtIGRhdGUgZGF0ZVxuICAgKlxuICAgKiBAcmV0dXJucyBwYXlsb2FkIGRlc2NyaWJpbmcgdGhlIHN0b3JlJ3Mgc2NoZWR1bGUgZm9yIHRoZSBnaXZlbiBkYXkuXG4gICAqL1xuICBwcml2YXRlIGdldFNjaGVkdWxlKGxvY2F0aW9uOiBMb2NhdGlvbiwgZGF0ZTogRGF0ZSk6IGFueSB7XG4gICAgY29uc3Qgd2Vla2RheSA9IHRoaXMud2Vla0RheXNbZGF0ZS5nZXREYXkoKV07XG4gICAgcmV0dXJuIGxvY2F0aW9uLm9wZW5pbmdIb3Vycy53ZWVrRGF5T3BlbmluZ0xpc3QuZmluZChcbiAgICAgIHdlZWtEYXlPcGVuaW5nTGlzdEl0ZW0gPT4gd2Vla0RheU9wZW5pbmdMaXN0SXRlbS53ZWVrRGF5ID09PSB3ZWVrZGF5XG4gICAgKTtcbiAgfVxufVxuIl19