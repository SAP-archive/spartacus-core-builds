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
    static ɵprov: ɵngcc0.ɵɵInjectableDef<StoreDataService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUtZGF0YS5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInN0b3JlLWRhdGEuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9pbnRPZlNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbC9wb2ludC1vZi1zZXJ2aWNlLm1vZGVsJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFN0b3JlRGF0YVNlcnZpY2Uge1xuICAgIHJlYWRvbmx5IERFQ0lNQUxfQkFTRTogMTA7XG4gICAgcmVhZG9ubHkgd2Vla0RheXM6IHtcbiAgICAgICAgMDogc3RyaW5nO1xuICAgICAgICAxOiBzdHJpbmc7XG4gICAgICAgIDI6IHN0cmluZztcbiAgICAgICAgMzogc3RyaW5nO1xuICAgICAgICA0OiBzdHJpbmc7XG4gICAgICAgIDU6IHN0cmluZztcbiAgICAgICAgNjogc3RyaW5nO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBzdG9yZSBsYXRpdHVkZVxuICAgICAqIEBwYXJhbSBsb2NhdGlvbiBzdG9yZSBsb2NhdGlvblxuICAgICAqL1xuICAgIGdldFN0b3JlTGF0aXR1ZGUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlKTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgc3RvcmUgbG9uZ2l0dWRlXG4gICAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAgICovXG4gICAgZ2V0U3RvcmVMb25naXR1ZGUobG9jYXRpb246IFBvaW50T2ZTZXJ2aWNlKTogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgc3RvcmUgY2xvc2luZyB0aW1lXG4gICAgICogQHBhcmFtIGxvY2F0aW9uIHN0b3JlIGxvY2F0aW9uXG4gICAgICogQHBhcmFtIGRhdGUgZGF0ZSB0byBjb21wYXJlXG4gICAgICovXG4gICAgZ2V0U3RvcmVDbG9zaW5nVGltZShsb2NhdGlvbjogUG9pbnRPZlNlcnZpY2UsIGRhdGU6IERhdGUpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBzdG9yZSBvcGVuaW5nIHRpbWVcbiAgICAgKiBAcGFyYW0gbG9jYXRpb24gc3RvcmUgbG9jYXRpb25cbiAgICAgKiBAcGFyYW0gZGF0ZSBkYXRlIHRvIGNvbXBhcmVcbiAgICAgKi9cbiAgICBnZXRTdG9yZU9wZW5pbmdUaW1lKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSwgZGF0ZTogRGF0ZSk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBFeHRyYWN0cyBzY2hlZHVsZSBmcm9tIHRoZSBnaXZlbiBsb2NhdGlvbiBmb3IgdGhlIGdpdmVuIGRhdGVcbiAgICAgKiBAcGFyYW0gbG9jYXRpb24gbG9jYXRpb25cbiAgICAgKiBAcGFyYW0gZGF0ZSBkYXRlXG4gICAgICpcbiAgICAgKiBAcmV0dXJucyBwYXlsb2FkIGRlc2NyaWJpbmcgdGhlIHN0b3JlJ3Mgc2NoZWR1bGUgZm9yIHRoZSBnaXZlbiBkYXkuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFNjaGVkdWxlKGxvY2F0aW9uOiBQb2ludE9mU2VydmljZSwgZGF0ZTogRGF0ZSk6IGFueTtcbn1cbiJdfQ==