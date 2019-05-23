/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
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
    /**
     * Returns store latitude
     * @param {?} location store location
     * @return {?}
     */
    StoreDataService.prototype.getStoreLatitude = /**
     * Returns store latitude
     * @param {?} location store location
     * @return {?}
     */
    function (location) {
        return location.geoPoint.latitude;
    };
    /**
     * Returns store longitude
     * @param location store location
     */
    /**
     * Returns store longitude
     * @param {?} location store location
     * @return {?}
     */
    StoreDataService.prototype.getStoreLongitude = /**
     * Returns store longitude
     * @param {?} location store location
     * @return {?}
     */
    function (location) {
        return location.geoPoint.longitude;
    };
    /**
     * Returns store closing time
     * @param location store location
     * @param date date to compare
     */
    /**
     * Returns store closing time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    StoreDataService.prototype.getStoreClosingTime = /**
     * Returns store closing time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    function (location, date) {
        /** @type {?} */
        var requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        var result = null;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            var closingHour = requestedDaySchedule.closingTime.formattedHour.split(':')[0];
            /** @type {?} */
            var closingMinute = requestedDaySchedule.closingTime.minute;
            result = new Date(date.valueOf());
            result.setHours(closingHour);
            result.setMinutes(closingMinute);
        }
        return result;
    };
    /**
     * Returns store opening time
     * @param location store location
     * @param date date to compare
     */
    /**
     * Returns store opening time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    StoreDataService.prototype.getStoreOpeningTime = /**
     * Returns store opening time
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    function (location, date) {
        /** @type {?} */
        var requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        var result = null;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            var openingHour = requestedDaySchedule.openingTime.formattedHour.split(':')[0];
            /** @type {?} */
            var openingMinutes = requestedDaySchedule.openingTime.minute;
            result = new Date(date.valueOf());
            result.setHours(openingHour);
            result.setMinutes(openingMinutes);
        }
        return result;
    };
    /**
     * Returns information about store open status
     * @param location store location
     * @param date date to compare
     */
    /**
     * Returns information about store open status
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    StoreDataService.prototype.isStoreOpen = /**
     * Returns information about store open status
     * @param {?} location store location
     * @param {?} date date to compare
     * @return {?}
     */
    function (location, date) {
        /** @type {?} */
        var requestedDaySchedule = this.getSchedule(location, date);
        /** @type {?} */
        var result = false;
        if (requestedDaySchedule.closed === false) {
            /** @type {?} */
            var openingDate = this.getStoreOpeningTime(location, date);
            /** @type {?} */
            var closingDate = this.getStoreClosingTime(location, date);
            result = date > openingDate && date < closingDate;
        }
        return result;
    };
    /**
     * Extracts schedule from the given location for the given date
     * @param location location
     * @param date date
     *
     * @returns payload describing the store's schedule for the given day.
     */
    /**
     * Extracts schedule from the given location for the given date
     * @protected
     * @param {?} location location
     * @param {?} date date
     *
     * @return {?} payload describing the store's schedule for the given day.
     */
    StoreDataService.prototype.getSchedule = /**
     * Extracts schedule from the given location for the given date
     * @protected
     * @param {?} location location
     * @param {?} date date
     *
     * @return {?} payload describing the store's schedule for the given day.
     */
    function (location, date) {
        /** @type {?} */
        var weekday = this.weekDays[date.getDay()];
        return location.openingHours.weekDayOpeningList.find(function (weekDayOpeningListItem) { return weekDayOpeningListItem.weekDay === weekday; });
    };
    StoreDataService.decorators = [
        { type: Injectable }
    ];
    return StoreDataService;
}());
export { StoreDataService };
if (false) {
    /** @type {?} */
    StoreDataService.prototype.DECIMAL_BASE;
    /** @type {?} */
    StoreDataService.prototype.weekDays;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBQUE7UUFHVyxhQUFRLEdBQUc7WUFDbEIsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7U0FDVCxDQUFDO0lBOEZKLENBQUM7SUE1RkM7OztPQUdHOzs7Ozs7SUFDSCwyQ0FBZ0I7Ozs7O0lBQWhCLFVBQWlCLFFBQXdCO1FBQ3ZDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsNENBQWlCOzs7OztJQUFqQixVQUFrQixRQUF3QjtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsOENBQW1COzs7Ozs7SUFBbkIsVUFBb0IsUUFBd0IsRUFBRSxJQUFVOztZQUNoRCxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7O1lBQ3pELE1BQU0sR0FBUyxJQUFJO1FBRXZCLElBQUksb0JBQW9CLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTs7Z0JBQ25DLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FDdEUsR0FBRyxDQUNKLENBQUMsQ0FBQyxDQUFDOztnQkFDRSxhQUFhLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDN0QsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsOENBQW1COzs7Ozs7SUFBbkIsVUFBb0IsUUFBd0IsRUFBRSxJQUFVOztZQUNoRCxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7O1lBQ3pELE1BQU0sR0FBUyxJQUFJO1FBRXZCLElBQUksb0JBQW9CLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTs7Z0JBQ25DLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FDdEUsR0FBRyxDQUNKLENBQUMsQ0FBQyxDQUFDOztnQkFDRSxjQUFjLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDOUQsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsc0NBQVc7Ozs7OztJQUFYLFVBQVksUUFBd0IsRUFBRSxJQUFVOztZQUN4QyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7O1lBQ3pELE1BQU0sR0FBRyxLQUFLO1FBRWxCLElBQUksb0JBQW9CLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTs7Z0JBQ25DLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQzs7Z0JBQ3RELFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztZQUU1RCxNQUFNLEdBQUcsSUFBSSxHQUFHLFdBQVcsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO1NBQ25EO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBQ08sc0NBQVc7Ozs7Ozs7O0lBQXJCLFVBQXNCLFFBQXdCLEVBQUUsSUFBVTs7WUFDbEQsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVDLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQ2xELFVBQUEsc0JBQXNCLElBQUksT0FBQSxzQkFBc0IsQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUExQyxDQUEwQyxDQUNyRSxDQUFDO0lBQ0osQ0FBQzs7Z0JBeEdGLFVBQVU7O0lBeUdYLHVCQUFDO0NBQUEsQUF6R0QsSUF5R0M7U0F4R1ksZ0JBQWdCOzs7SUFDM0Isd0NBQTBCOztJQUMxQixvQ0FRRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcG9pbnQtb2Ytc2VydmljZS5tb2RlbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdG9yZURhdGFTZXJ2aWNlIHtcbiAgcmVhZG9ubHkgREVDSU1BTF9CQVNFOiAxMDtcbiAgcmVhZG9ubHkgd2Vla0RheXMgPSB7XG4gICAgMDogJ1N1bicsXG4gICAgMTogJ01vbicsXG4gICAgMjogJ1R1ZScsXG4gICAgMzogJ1dlZCcsXG4gICAgNDogJ1RodScsXG4gICAgNTogJ0ZyaScsXG4gICAgNjogJ1NhdCcsXG4gIH07XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgbGF0aXR1ZGVcbiAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAqL1xuICBnZXRTdG9yZUxhdGl0dWRlKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLmdlb1BvaW50LmxhdGl0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgbG9uZ2l0dWRlXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKi9cbiAgZ2V0U3RvcmVMb25naXR1ZGUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbG9jYXRpb24uZ2VvUG9pbnQubG9uZ2l0dWRlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgY2xvc2luZyB0aW1lXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKiBAcGFyYW0gZGF0ZSBkYXRlIHRvIGNvbXBhcmVcbiAgICovXG4gIGdldFN0b3JlQ2xvc2luZ1RpbWUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlLCBkYXRlOiBEYXRlKTogRGF0ZSB7XG4gICAgY29uc3QgcmVxdWVzdGVkRGF5U2NoZWR1bGUgPSB0aGlzLmdldFNjaGVkdWxlKGxvY2F0aW9uLCBkYXRlKTtcbiAgICBsZXQgcmVzdWx0OiBEYXRlID0gbnVsbDtcblxuICAgIGlmIChyZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zZWQgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBjbG9zaW5nSG91ciA9IHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NpbmdUaW1lLmZvcm1hdHRlZEhvdXIuc3BsaXQoXG4gICAgICAgICc6J1xuICAgICAgKVswXTtcbiAgICAgIGNvbnN0IGNsb3NpbmdNaW51dGUgPSByZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zaW5nVGltZS5taW51dGU7XG4gICAgICByZXN1bHQgPSBuZXcgRGF0ZShkYXRlLnZhbHVlT2YoKSk7XG4gICAgICByZXN1bHQuc2V0SG91cnMoY2xvc2luZ0hvdXIpO1xuICAgICAgcmVzdWx0LnNldE1pbnV0ZXMoY2xvc2luZ01pbnV0ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHN0b3JlIG9wZW5pbmcgdGltZVxuICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICogQHBhcmFtIGRhdGUgZGF0ZSB0byBjb21wYXJlXG4gICAqL1xuICBnZXRTdG9yZU9wZW5pbmdUaW1lKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSwgZGF0ZTogRGF0ZSk6IERhdGUge1xuICAgIGNvbnN0IHJlcXVlc3RlZERheVNjaGVkdWxlID0gdGhpcy5nZXRTY2hlZHVsZShsb2NhdGlvbiwgZGF0ZSk7XG4gICAgbGV0IHJlc3VsdDogRGF0ZSA9IG51bGw7XG5cbiAgICBpZiAocmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2VkID09PSBmYWxzZSkge1xuICAgICAgY29uc3Qgb3BlbmluZ0hvdXIgPSByZXF1ZXN0ZWREYXlTY2hlZHVsZS5vcGVuaW5nVGltZS5mb3JtYXR0ZWRIb3VyLnNwbGl0KFxuICAgICAgICAnOidcbiAgICAgIClbMF07XG4gICAgICBjb25zdCBvcGVuaW5nTWludXRlcyA9IHJlcXVlc3RlZERheVNjaGVkdWxlLm9wZW5pbmdUaW1lLm1pbnV0ZTtcbiAgICAgIHJlc3VsdCA9IG5ldyBEYXRlKGRhdGUudmFsdWVPZigpKTtcbiAgICAgIHJlc3VsdC5zZXRIb3VycyhvcGVuaW5nSG91cik7XG4gICAgICByZXN1bHQuc2V0TWludXRlcyhvcGVuaW5nTWludXRlcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGluZm9ybWF0aW9uIGFib3V0IHN0b3JlIG9wZW4gc3RhdHVzXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKiBAcGFyYW0gZGF0ZSBkYXRlIHRvIGNvbXBhcmVcbiAgICovXG4gIGlzU3RvcmVPcGVuKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSwgZGF0ZTogRGF0ZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJlcXVlc3RlZERheVNjaGVkdWxlID0gdGhpcy5nZXRTY2hlZHVsZShsb2NhdGlvbiwgZGF0ZSk7XG4gICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgaWYgKHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IG9wZW5pbmdEYXRlID0gdGhpcy5nZXRTdG9yZU9wZW5pbmdUaW1lKGxvY2F0aW9uLCBkYXRlKTtcbiAgICAgIGNvbnN0IGNsb3NpbmdEYXRlID0gdGhpcy5nZXRTdG9yZUNsb3NpbmdUaW1lKGxvY2F0aW9uLCBkYXRlKTtcblxuICAgICAgcmVzdWx0ID0gZGF0ZSA+IG9wZW5pbmdEYXRlICYmIGRhdGUgPCBjbG9zaW5nRGF0ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHNjaGVkdWxlIGZyb20gdGhlIGdpdmVuIGxvY2F0aW9uIGZvciB0aGUgZ2l2ZW4gZGF0ZVxuICAgKiBAcGFyYW0gbG9jYXRpb24gbG9jYXRpb25cbiAgICogQHBhcmFtIGRhdGUgZGF0ZVxuICAgKlxuICAgKiBAcmV0dXJucyBwYXlsb2FkIGRlc2NyaWJpbmcgdGhlIHN0b3JlJ3Mgc2NoZWR1bGUgZm9yIHRoZSBnaXZlbiBkYXkuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U2NoZWR1bGUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlLCBkYXRlOiBEYXRlKTogYW55IHtcbiAgICBjb25zdCB3ZWVrZGF5ID0gdGhpcy53ZWVrRGF5c1tkYXRlLmdldERheSgpXTtcbiAgICByZXR1cm4gbG9jYXRpb24ub3BlbmluZ0hvdXJzLndlZWtEYXlPcGVuaW5nTGlzdC5maW5kKFxuICAgICAgd2Vla0RheU9wZW5pbmdMaXN0SXRlbSA9PiB3ZWVrRGF5T3BlbmluZ0xpc3RJdGVtLndlZWtEYXkgPT09IHdlZWtkYXlcbiAgICApO1xuICB9XG59XG4iXX0=