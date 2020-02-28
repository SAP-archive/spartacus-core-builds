import { PointOfService } from '../../model/point-of-service.model';
import * as ɵngcc0 from '@angular/core';
export declare class StoreDataService {
    readonly DECIMAL_BASE: 10;
    readonly weekDays: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
    };
    /**
     * Returns store latitude
     * @param location store location
     */
    getStoreLatitude(location: PointOfService): number;
    /**
     * Returns store longitude
     * @param location store location
     */
    getStoreLongitude(location: PointOfService): number;
    /**
     * Returns store closing time
     * @param location store location
     * @param date date to compare
     */
    getStoreClosingTime(location: PointOfService, date: Date): string;
    /**
     * Returns store opening time
     * @param location store location
     * @param date date to compare
     */
    getStoreOpeningTime(location: PointOfService, date: Date): string;
    /**
     * Extracts schedule from the given location for the given date
     * @param location location
     * @param date date
     *
     * @returns payload describing the store's schedule for the given day.
     */
    protected getSchedule(location: PointOfService, date: Date): any;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreDataService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<StoreDataService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGF0YS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInN0b3JlLWRhdGEuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBvaW50T2ZTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWwvcG9pbnQtb2Ytc2VydmljZS5tb2RlbCc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBTdG9yZURhdGFTZXJ2aWNlIHtcbiAgICByZWFkb25seSBERUNJTUFMX0JBU0U6IDEwO1xuICAgIHJlYWRvbmx5IHdlZWtEYXlzOiB7XG4gICAgICAgIDA6IHN0cmluZztcbiAgICAgICAgMTogc3RyaW5nO1xuICAgICAgICAyOiBzdHJpbmc7XG4gICAgICAgIDM6IHN0cmluZztcbiAgICAgICAgNDogc3RyaW5nO1xuICAgICAgICA1OiBzdHJpbmc7XG4gICAgICAgIDY6IHN0cmluZztcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgc3RvcmUgbGF0aXR1ZGVcbiAgICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICAgKi9cbiAgICBnZXRTdG9yZUxhdGl0dWRlKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHN0b3JlIGxvbmdpdHVkZVxuICAgICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgICAqL1xuICAgIGdldFN0b3JlTG9uZ2l0dWRlKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHN0b3JlIGNsb3NpbmcgdGltZVxuICAgICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgICAqIEBwYXJhbSBkYXRlIGRhdGUgdG8gY29tcGFyZVxuICAgICAqL1xuICAgIGdldFN0b3JlQ2xvc2luZ1RpbWUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlLCBkYXRlOiBEYXRlKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgc3RvcmUgb3BlbmluZyB0aW1lXG4gICAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIGRhdGUgZGF0ZSB0byBjb21wYXJlXG4gICAgICovXG4gICAgZ2V0U3RvcmVPcGVuaW5nVGltZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UsIGRhdGU6IERhdGUpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogRXh0cmFjdHMgc2NoZWR1bGUgZnJvbSB0aGUgZ2l2ZW4gbG9jYXRpb24gZm9yIHRoZSBnaXZlbiBkYXRlXG4gICAgICogQHBhcmFtIGxvY2F0aW9uIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIGRhdGUgZGF0ZVxuICAgICAqXG4gICAgICogQHJldHVybnMgcGF5bG9hZCBkZXNjcmliaW5nIHRoZSBzdG9yZSdzIHNjaGVkdWxlIGZvciB0aGUgZ2l2ZW4gZGF5LlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnZXRTY2hlZHVsZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UsIGRhdGU6IERhdGUpOiBhbnk7XG59XG4iXX0=