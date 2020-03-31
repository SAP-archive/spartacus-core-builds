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
        return location.openingHours.weekDayOpeningList.find((weekDayOpeningListItem) => weekDayOpeningListItem.weekDay === weekday);
    }
};
StoreDataService = __decorate([
    Injectable()
], StoreDataService);
export { StoreDataService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGF0YS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3N0b3JlLWZpbmRlci9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQTdCO1FBRVcsYUFBUSxHQUFHO1lBQ2xCLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1lBQ1IsQ0FBQyxFQUFFLEtBQUs7WUFDUixDQUFDLEVBQUUsS0FBSztZQUNSLENBQUMsRUFBRSxLQUFLO1NBQ1QsQ0FBQztJQXFFSixDQUFDO0lBbkVDOzs7T0FHRztJQUNILGdCQUFnQixDQUFDLFFBQXdCO1FBQ3ZDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlCQUFpQixDQUFDLFFBQXdCO1FBQ3hDLE9BQU8sUUFBUSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQkFBbUIsQ0FBQyxRQUF3QixFQUFFLElBQVU7UUFDdEQsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5RCxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLElBQUksb0JBQW9CLENBQUMsTUFBTSxJQUFJLG9CQUFvQixDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZFLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO1lBRUQsSUFBSSxvQkFBb0IsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BDLE9BQU8sb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQzthQUN2RDtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxtQkFBbUIsQ0FBQyxRQUF3QixFQUFFLElBQVU7UUFDdEQsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUU5RCxJQUFJLG9CQUFvQixFQUFFO1lBQ3hCLElBQUksb0JBQW9CLENBQUMsTUFBTSxJQUFJLG9CQUFvQixDQUFDLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ3ZFLE9BQU8sUUFBUSxDQUFDO2FBQ2pCO1lBRUQsSUFBSSxvQkFBb0IsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3BDLE9BQU8sb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQzthQUN2RDtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNPLFdBQVcsQ0FBQyxRQUF3QixFQUFFLElBQVU7UUFDeEQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztRQUM3QyxPQUFPLFFBQVEsQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUNsRCxDQUFDLHNCQUFzQixFQUFFLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxPQUFPLEtBQUssT0FBTyxDQUN2RSxDQUFDO0lBQ0osQ0FBQztDQUNGLENBQUE7QUEvRVksZ0JBQWdCO0lBRDVCLFVBQVUsRUFBRTtHQUNBLGdCQUFnQixDQStFNUI7U0EvRVksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUG9pbnRPZlNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wb2ludC1vZi1zZXJ2aWNlLm1vZGVsJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFN0b3JlRGF0YVNlcnZpY2Uge1xuICByZWFkb25seSBERUNJTUFMX0JBU0U6IDEwO1xuICByZWFkb25seSB3ZWVrRGF5cyA9IHtcbiAgICAwOiAnU3VuJyxcbiAgICAxOiAnTW9uJyxcbiAgICAyOiAnVHVlJyxcbiAgICAzOiAnV2VkJyxcbiAgICA0OiAnVGh1JyxcbiAgICA1OiAnRnJpJyxcbiAgICA2OiAnU2F0JyxcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyBzdG9yZSBsYXRpdHVkZVxuICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICovXG4gIGdldFN0b3JlTGF0aXR1ZGUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbG9jYXRpb24uZ2VvUG9pbnQubGF0aXR1ZGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBzdG9yZSBsb25naXR1ZGVcbiAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAqL1xuICBnZXRTdG9yZUxvbmdpdHVkZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UpOiBudW1iZXIge1xuICAgIHJldHVybiBsb2NhdGlvbi5nZW9Qb2ludC5sb25naXR1ZGU7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBzdG9yZSBjbG9zaW5nIHRpbWVcbiAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAqIEBwYXJhbSBkYXRlIGRhdGUgdG8gY29tcGFyZVxuICAgKi9cbiAgZ2V0U3RvcmVDbG9zaW5nVGltZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UsIGRhdGU6IERhdGUpOiBzdHJpbmcge1xuICAgIGNvbnN0IHJlcXVlc3RlZERheVNjaGVkdWxlID0gdGhpcy5nZXRTY2hlZHVsZShsb2NhdGlvbiwgZGF0ZSk7XG5cbiAgICBpZiAocmVxdWVzdGVkRGF5U2NoZWR1bGUpIHtcbiAgICAgIGlmIChyZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zZWQgJiYgcmVxdWVzdGVkRGF5U2NoZWR1bGUuY2xvc2VkID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiAnY2xvc2VkJztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NpbmdUaW1lKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zaW5nVGltZS5mb3JtYXR0ZWRIb3VyO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHN0b3JlIG9wZW5pbmcgdGltZVxuICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICogQHBhcmFtIGRhdGUgZGF0ZSB0byBjb21wYXJlXG4gICAqL1xuICBnZXRTdG9yZU9wZW5pbmdUaW1lKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSwgZGF0ZTogRGF0ZSk6IHN0cmluZyB7XG4gICAgY29uc3QgcmVxdWVzdGVkRGF5U2NoZWR1bGUgPSB0aGlzLmdldFNjaGVkdWxlKGxvY2F0aW9uLCBkYXRlKTtcblxuICAgIGlmIChyZXF1ZXN0ZWREYXlTY2hlZHVsZSkge1xuICAgICAgaWYgKHJlcXVlc3RlZERheVNjaGVkdWxlLmNsb3NlZCAmJiByZXF1ZXN0ZWREYXlTY2hlZHVsZS5jbG9zZWQgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuICdjbG9zZWQnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVxdWVzdGVkRGF5U2NoZWR1bGUub3BlbmluZ1RpbWUpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RlZERheVNjaGVkdWxlLm9wZW5pbmdUaW1lLmZvcm1hdHRlZEhvdXI7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEV4dHJhY3RzIHNjaGVkdWxlIGZyb20gdGhlIGdpdmVuIGxvY2F0aW9uIGZvciB0aGUgZ2l2ZW4gZGF0ZVxuICAgKiBAcGFyYW0gbG9jYXRpb24gbG9jYXRpb25cbiAgICogQHBhcmFtIGRhdGUgZGF0ZVxuICAgKlxuICAgKiBAcmV0dXJucyBwYXlsb2FkIGRlc2NyaWJpbmcgdGhlIHN0b3JlJ3Mgc2NoZWR1bGUgZm9yIHRoZSBnaXZlbiBkYXkuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U2NoZWR1bGUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlLCBkYXRlOiBEYXRlKTogYW55IHtcbiAgICBjb25zdCB3ZWVrZGF5ID0gdGhpcy53ZWVrRGF5c1tkYXRlLmdldERheSgpXTtcbiAgICByZXR1cm4gbG9jYXRpb24ub3BlbmluZ0hvdXJzLndlZWtEYXlPcGVuaW5nTGlzdC5maW5kKFxuICAgICAgKHdlZWtEYXlPcGVuaW5nTGlzdEl0ZW0pID0+IHdlZWtEYXlPcGVuaW5nTGlzdEl0ZW0ud2Vla0RheSA9PT0gd2Vla2RheVxuICAgICk7XG4gIH1cbn1cbiJdfQ==