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
     * @private
     * @param {?} location location
     * @param {?} date date
     *
     * @return {?} payload describing the store's schedule for the given day.
     */
    StoreDataService.prototype.getSchedule = /**
     * Extracts schedule from the given location for the given date
     * @private
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBQUE7UUFHVyxhQUFRLEdBQUc7WUFDbEIsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7U0FDVCxDQUFDO0lBOEZKLENBQUM7SUE1RkM7OztPQUdHOzs7Ozs7SUFDSCwyQ0FBZ0I7Ozs7O0lBQWhCLFVBQWlCLFFBQWtCO1FBQ2pDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsNENBQWlCOzs7OztJQUFqQixVQUFrQixRQUFrQjtRQUNsQyxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsOENBQW1COzs7Ozs7SUFBbkIsVUFBb0IsUUFBa0IsRUFBRSxJQUFVOztZQUMxQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7O1lBQ3pELE1BQU0sR0FBUyxJQUFJO1FBRXZCLElBQUksb0JBQW9CLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTs7Z0JBQ25DLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FDdEUsR0FBRyxDQUNKLENBQUMsQ0FBQyxDQUFDOztnQkFDRSxhQUFhLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDN0QsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNsQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsOENBQW1COzs7Ozs7SUFBbkIsVUFBb0IsUUFBa0IsRUFBRSxJQUFVOztZQUMxQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7O1lBQ3pELE1BQU0sR0FBUyxJQUFJO1FBRXZCLElBQUksb0JBQW9CLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTs7Z0JBQ25DLFdBQVcsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FDdEUsR0FBRyxDQUNKLENBQUMsQ0FBQyxDQUFDOztnQkFDRSxjQUFjLEdBQUcsb0JBQW9CLENBQUMsV0FBVyxDQUFDLE1BQU07WUFDOUQsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0IsTUFBTSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUNuQztRQUVELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsc0NBQVc7Ozs7OztJQUFYLFVBQVksUUFBa0IsRUFBRSxJQUFVOztZQUNsQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7O1lBQ3pELE1BQU0sR0FBRyxLQUFLO1FBRWxCLElBQUksb0JBQW9CLENBQUMsTUFBTSxLQUFLLEtBQUssRUFBRTs7Z0JBQ25DLFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQzs7Z0JBQ3RELFdBQVcsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztZQUU1RCxNQUFNLEdBQUcsSUFBSSxHQUFHLFdBQVcsSUFBSSxJQUFJLEdBQUcsV0FBVyxDQUFDO1NBQ25EO1FBRUQsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7O0lBQ0ssc0NBQVc7Ozs7Ozs7O0lBQW5CLFVBQW9CLFFBQWtCLEVBQUUsSUFBVTs7WUFDMUMsT0FBTyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzVDLE9BQU8sUUFBUSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQ2xELFVBQUEsc0JBQXNCLElBQUksT0FBQSxzQkFBc0IsQ0FBQyxPQUFPLEtBQUssT0FBTyxFQUExQyxDQUEwQyxDQUNyRSxDQUFDO0lBQ0osQ0FBQzs7Z0JBeEdGLFVBQVU7O0lBeUdYLHVCQUFDO0NBQUEsQUF6R0QsSUF5R0M7U0F4R1ksZ0JBQWdCOzs7SUFDM0Isd0NBQTBCOztJQUMxQixvQ0FRRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnLi4vbW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmVEYXRhU2VydmljZSB7XG4gIHJlYWRvbmx5IERFQ0lNQUxfQkFTRTogMTA7XG4gIHJlYWRvbmx5IHdlZWtEYXlzID0ge1xuICAgIDA6ICdTdW4nLFxuICAgIDE6ICdNb24nLFxuICAgIDI6ICdUdWUnLFxuICAgIDM6ICdXZWQnLFxuICAgIDQ6ICdUaHUnLFxuICAgIDU6ICdGcmknLFxuICAgIDY6ICdTYXQnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHN0b3JlIGxhdGl0dWRlXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKi9cbiAgZ2V0U3RvcmVMYXRpdHVkZShsb2NhdGlvbjogTG9jYXRpb24pOiBudW1iZXIge1xuICAgIHJldHVybiBsb2NhdGlvbi5nZW9Qb2ludC5sYXRpdHVkZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHN0b3JlIGxvbmdpdHVkZVxuICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICovXG4gIGdldFN0b3JlTG9uZ2l0dWRlKGxvY2F0aW9uOiBMb2NhdGlvbik6IG51bWJlciB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLmdlb1BvaW50LmxvbmdpdHVkZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHN0b3JlIGNsb3NpbmcgdGltZVxuICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICogQHBhcmFtIGRhdGUgZGF0ZSB0byBjb21wYXJlXG4gICAqL1xuICBnZXRTdG9yZUNsb3NpbmdUaW1lKGxvY2F0aW9uOiBMb2NhdGlvbiwgZGF0ZTogRGF0ZSk6IERhdGUge1xuICAgIGNvbnN0IHJlcXVlc3RlZERheVNjaGVkdWxlID0gdGhpcy5nZXRTY2hlZHVsZShsb2NhdGlvbiwgZGF0ZSk7XG4gICAgbGV0IHJlc3VsdDogRGF0ZSA9IG51bGw7XG5cbiAgICBpZiAocmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2VkID09PSBmYWxzZSkge1xuICAgICAgY29uc3QgY2xvc2luZ0hvdXIgPSByZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zaW5nVGltZS5mb3JtYXR0ZWRIb3VyLnNwbGl0KFxuICAgICAgICAnOidcbiAgICAgIClbMF07XG4gICAgICBjb25zdCBjbG9zaW5nTWludXRlID0gcmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2luZ1RpbWUubWludXRlO1xuICAgICAgcmVzdWx0ID0gbmV3IERhdGUoZGF0ZS52YWx1ZU9mKCkpO1xuICAgICAgcmVzdWx0LnNldEhvdXJzKGNsb3NpbmdIb3VyKTtcbiAgICAgIHJlc3VsdC5zZXRNaW51dGVzKGNsb3NpbmdNaW51dGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBzdG9yZSBvcGVuaW5nIHRpbWVcbiAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBkYXRlIGRhdGUgdG8gY29tcGFyZVxuICAgKi9cbiAgZ2V0U3RvcmVPcGVuaW5nVGltZShsb2NhdGlvbjogTG9jYXRpb24sIGRhdGU6IERhdGUpOiBEYXRlIHtcbiAgICBjb25zdCByZXF1ZXN0ZWREYXlTY2hlZHVsZSA9IHRoaXMuZ2V0U2NoZWR1bGUobG9jYXRpb24sIGRhdGUpO1xuICAgIGxldCByZXN1bHQ6IERhdGUgPSBudWxsO1xuXG4gICAgaWYgKHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGNvbnN0IG9wZW5pbmdIb3VyID0gcmVxdWVzdGVkRGF5U2NoZWR1bGUub3BlbmluZ1RpbWUuZm9ybWF0dGVkSG91ci5zcGxpdChcbiAgICAgICAgJzonXG4gICAgICApWzBdO1xuICAgICAgY29uc3Qgb3BlbmluZ01pbnV0ZXMgPSByZXF1ZXN0ZWREYXlTY2hlZHVsZS5vcGVuaW5nVGltZS5taW51dGU7XG4gICAgICByZXN1bHQgPSBuZXcgRGF0ZShkYXRlLnZhbHVlT2YoKSk7XG4gICAgICByZXN1bHQuc2V0SG91cnMob3BlbmluZ0hvdXIpO1xuICAgICAgcmVzdWx0LnNldE1pbnV0ZXMob3BlbmluZ01pbnV0ZXMpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBpbmZvcm1hdGlvbiBhYm91dCBzdG9yZSBvcGVuIHN0YXR1c1xuICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICogQHBhcmFtIGRhdGUgZGF0ZSB0byBjb21wYXJlXG4gICAqL1xuICBpc1N0b3JlT3Blbihsb2NhdGlvbjogTG9jYXRpb24sIGRhdGU6IERhdGUpOiBib29sZWFuIHtcbiAgICBjb25zdCByZXF1ZXN0ZWREYXlTY2hlZHVsZSA9IHRoaXMuZ2V0U2NoZWR1bGUobG9jYXRpb24sIGRhdGUpO1xuICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgIGlmIChyZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zZWQgPT09IGZhbHNlKSB7XG4gICAgICBjb25zdCBvcGVuaW5nRGF0ZSA9IHRoaXMuZ2V0U3RvcmVPcGVuaW5nVGltZShsb2NhdGlvbiwgZGF0ZSk7XG4gICAgICBjb25zdCBjbG9zaW5nRGF0ZSA9IHRoaXMuZ2V0U3RvcmVDbG9zaW5nVGltZShsb2NhdGlvbiwgZGF0ZSk7XG5cbiAgICAgIHJlc3VsdCA9IGRhdGUgPiBvcGVuaW5nRGF0ZSAmJiBkYXRlIDwgY2xvc2luZ0RhdGU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyBzY2hlZHVsZSBmcm9tIHRoZSBnaXZlbiBsb2NhdGlvbiBmb3IgdGhlIGdpdmVuIGRhdGVcbiAgICogQHBhcmFtIGxvY2F0aW9uIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBkYXRlIGRhdGVcbiAgICpcbiAgICogQHJldHVybnMgcGF5bG9hZCBkZXNjcmliaW5nIHRoZSBzdG9yZSdzIHNjaGVkdWxlIGZvciB0aGUgZ2l2ZW4gZGF5LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTY2hlZHVsZShsb2NhdGlvbjogTG9jYXRpb24sIGRhdGU6IERhdGUpOiBhbnkge1xuICAgIGNvbnN0IHdlZWtkYXkgPSB0aGlzLndlZWtEYXlzW2RhdGUuZ2V0RGF5KCldO1xuICAgIHJldHVybiBsb2NhdGlvbi5vcGVuaW5nSG91cnMud2Vla0RheU9wZW5pbmdMaXN0LmZpbmQoXG4gICAgICB3ZWVrRGF5T3BlbmluZ0xpc3RJdGVtID0+IHdlZWtEYXlPcGVuaW5nTGlzdEl0ZW0ud2Vla0RheSA9PT0gd2Vla2RheVxuICAgICk7XG4gIH1cbn1cbiJdfQ==