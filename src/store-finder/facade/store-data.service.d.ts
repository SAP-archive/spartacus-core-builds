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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<StoreDataService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGF0YS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInN0b3JlLWRhdGEuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2ludE9mU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVsL3BvaW50LW9mLXNlcnZpY2UubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgU3RvcmVEYXRhU2VydmljZSB7XG4gICAgcmVhZG9ubHkgREVDSU1BTF9CQVNFOiAxMDtcbiAgICByZWFkb25seSB3ZWVrRGF5czoge1xuICAgICAgICAwOiBzdHJpbmc7XG4gICAgICAgIDE6IHN0cmluZztcbiAgICAgICAgMjogc3RyaW5nO1xuICAgICAgICAzOiBzdHJpbmc7XG4gICAgICAgIDQ6IHN0cmluZztcbiAgICAgICAgNTogc3RyaW5nO1xuICAgICAgICA2OiBzdHJpbmc7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHN0b3JlIGxhdGl0dWRlXG4gICAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAgICovXG4gICAgZ2V0U3RvcmVMYXRpdHVkZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBzdG9yZSBsb25naXR1ZGVcbiAgICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICAgKi9cbiAgICBnZXRTdG9yZUxvbmdpdHVkZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UpOiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBzdG9yZSBjbG9zaW5nIHRpbWVcbiAgICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICAgKiBAcGFyYW0gZGF0ZSBkYXRlIHRvIGNvbXBhcmVcbiAgICAgKi9cbiAgICBnZXRTdG9yZUNsb3NpbmdUaW1lKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSwgZGF0ZTogRGF0ZSk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHN0b3JlIG9wZW5pbmcgdGltZVxuICAgICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgICAqIEBwYXJhbSBkYXRlIGRhdGUgdG8gY29tcGFyZVxuICAgICAqL1xuICAgIGdldFN0b3JlT3BlbmluZ1RpbWUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlLCBkYXRlOiBEYXRlKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEV4dHJhY3RzIHNjaGVkdWxlIGZyb20gdGhlIGdpdmVuIGxvY2F0aW9uIGZvciB0aGUgZ2l2ZW4gZGF0ZVxuICAgICAqIEBwYXJhbSBsb2NhdGlvbiBsb2NhdGlvblxuICAgICAqIEBwYXJhbSBkYXRlIGRhdGVcbiAgICAgKlxuICAgICAqIEByZXR1cm5zIHBheWxvYWQgZGVzY3JpYmluZyB0aGUgc3RvcmUncyBzY2hlZHVsZSBmb3IgdGhlIGdpdmVuIGRheS5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0U2NoZWR1bGUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlLCBkYXRlOiBEYXRlKTogYW55O1xufVxuIl19