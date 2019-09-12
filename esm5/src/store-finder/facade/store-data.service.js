/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        return location.openingHours.weekDayOpeningList.find((/**
         * @param {?} weekDayOpeningListItem
         * @return {?}
         */
        function (weekDayOpeningListItem) { return weekDayOpeningListItem.weekDay === weekday; }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDO0lBQUE7UUFHVyxhQUFRLEdBQUc7WUFDbEIsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7U0FDVCxDQUFDO0lBcUVKLENBQUM7SUFuRUM7OztPQUdHOzs7Ozs7SUFDSCwyQ0FBZ0I7Ozs7O0lBQWhCLFVBQWlCLFFBQXdCO1FBQ3ZDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRzs7Ozs7O0lBQ0gsNENBQWlCOzs7OztJQUFqQixVQUFrQixRQUF3QjtRQUN4QyxPQUFPLFFBQVEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsOENBQW1COzs7Ozs7SUFBbkIsVUFBb0IsUUFBd0IsRUFBRSxJQUFVOztZQUNoRCxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7UUFFN0QsSUFBSSxvQkFBb0IsRUFBRTtZQUN4QixJQUFJLG9CQUFvQixDQUFDLE1BQU0sSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUN2RSxPQUFPLFFBQVEsQ0FBQzthQUNqQjtZQUVELElBQUksb0JBQW9CLENBQUMsV0FBVyxFQUFFO2dCQUNwQyxPQUFPLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7YUFDdkQ7U0FDRjtJQUNILENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsOENBQW1COzs7Ozs7SUFBbkIsVUFBb0IsUUFBd0IsRUFBRSxJQUFVOztZQUNoRCxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7UUFFN0QsSUFBSSxvQkFBb0IsRUFBRTtZQUN4QixJQUFJLG9CQUFvQixDQUFDLE1BQU0sSUFBSSxvQkFBb0IsQ0FBQyxNQUFNLEtBQUssSUFBSSxFQUFFO2dCQUN2RSxPQUFPLFFBQVEsQ0FBQzthQUNqQjtZQUVELElBQUksb0JBQW9CLENBQUMsV0FBVyxFQUFFO2dCQUNwQyxPQUFPLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUM7YUFDdkQ7U0FDRjtJQUNILENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNPLHNDQUFXOzs7Ozs7OztJQUFyQixVQUFzQixRQUF3QixFQUFFLElBQVU7O1lBQ2xELE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUM1QyxPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSTs7OztRQUNsRCxVQUFBLHNCQUFzQixJQUFJLE9BQUEsc0JBQXNCLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBMUMsQ0FBMEMsRUFDckUsQ0FBQztJQUNKLENBQUM7O2dCQS9FRixVQUFVOztJQWdGWCx1QkFBQztDQUFBLEFBaEZELElBZ0ZDO1NBL0VZLGdCQUFnQjs7O0lBQzNCLHdDQUEwQjs7SUFDMUIsb0NBUUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQb2ludE9mU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVsL3BvaW50LW9mLXNlcnZpY2UubW9kZWwnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RvcmVEYXRhU2VydmljZSB7XG4gIHJlYWRvbmx5IERFQ0lNQUxfQkFTRTogMTA7XG4gIHJlYWRvbmx5IHdlZWtEYXlzID0ge1xuICAgIDA6ICdTdW4nLFxuICAgIDE6ICdNb24nLFxuICAgIDI6ICdUdWUnLFxuICAgIDM6ICdXZWQnLFxuICAgIDQ6ICdUaHUnLFxuICAgIDU6ICdGcmknLFxuICAgIDY6ICdTYXQnLFxuICB9O1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHN0b3JlIGxhdGl0dWRlXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKi9cbiAgZ2V0U3RvcmVMYXRpdHVkZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UpOiBudW1iZXIge1xuICAgIHJldHVybiBsb2NhdGlvbi5nZW9Qb2ludC5sYXRpdHVkZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHN0b3JlIGxvbmdpdHVkZVxuICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICovXG4gIGdldFN0b3JlTG9uZ2l0dWRlKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGxvY2F0aW9uLmdlb1BvaW50LmxvbmdpdHVkZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHN0b3JlIGNsb3NpbmcgdGltZVxuICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICogQHBhcmFtIGRhdGUgZGF0ZSB0byBjb21wYXJlXG4gICAqL1xuICBnZXRTdG9yZUNsb3NpbmdUaW1lKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSwgZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgcmVxdWVzdGVkRGF5U2NoZWR1bGUgPSB0aGlzLmdldFNjaGVkdWxlKGxvY2F0aW9uLCBkYXRlKTtcblxuICAgIGlmIChyZXF1ZXN0ZWREYXlTY2hlZHVsZSkge1xuICAgICAgaWYgKHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NlZCAmJiByZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zZWQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuICdjbG9zZWQnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2luZ1RpbWUpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NpbmdUaW1lLmZvcm1hdHRlZEhvdXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgc3RvcmUgb3BlbmluZyB0aW1lXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgKiBAcGFyYW0gZGF0ZSBkYXRlIHRvIGNvbXBhcmVcbiAgICovXG4gIGdldFN0b3JlT3BlbmluZ1RpbWUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlLCBkYXRlOiBEYXRlKTogc3RyaW5nIHtcbiAgICBjb25zdCByZXF1ZXN0ZWREYXlTY2hlZHVsZSA9IHRoaXMuZ2V0U2NoZWR1bGUobG9jYXRpb24sIGRhdGUpO1xuXG4gICAgaWYgKHJlcXVlc3RlZERheVNjaGVkdWxlKSB7XG4gICAgICBpZiAocmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2VkICYmIHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NlZCA9PT0gdHJ1ZSkge1xuICAgICAgICByZXR1cm4gJ2Nsb3NlZCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXF1ZXN0ZWREYXlTY2hlZHVsZS5vcGVuaW5nVGltZSkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdGVkRGF5U2NoZWR1bGUub3BlbmluZ1RpbWUuZm9ybWF0dGVkSG91cjtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdHMgc2NoZWR1bGUgZnJvbSB0aGUgZ2l2ZW4gbG9jYXRpb24gZm9yIHRoZSBnaXZlbiBkYXRlXG4gICAqIEBwYXJhbSBsb2NhdGlvbiBsb2NhdGlvblxuICAgKiBAcGFyYW0gZGF0ZSBkYXRlXG4gICAqXG4gICAqIEByZXR1cm5zIHBheWxvYWQgZGVzY3JpYmluZyB0aGUgc3RvcmUncyBzY2hlZHVsZSBmb3IgdGhlIGdpdmVuIGRheS5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRTY2hlZHVsZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UsIGRhdGU6IERhdGUpOiBhbnkge1xuICAgIGNvbnN0IHdlZWtkYXkgPSB0aGlzLndlZWtEYXlzW2RhdGUuZ2V0RGF5KCldO1xuICAgIHJldHVybiBsb2NhdGlvbi5vcGVuaW5nSG91cnMud2Vla0RheU9wZW5pbmdMaXN0LmZpbmQoXG4gICAgICB3ZWVrRGF5T3BlbmluZ0xpc3RJdGVtID0+IHdlZWtEYXlPcGVuaW5nTGlzdEl0ZW0ud2Vla0RheSA9PT0gd2Vla2RheVxuICAgICk7XG4gIH1cbn1cbiJdfQ==