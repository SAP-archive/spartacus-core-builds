import { PointOfService } from '../../model/point-of-service.model';
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
    getStoreClosingTime(location: PointOfService, date: Date): Date;
    /**
     * Returns store opening time
     * @param location store location
     * @param date date to compare
     */
    getStoreOpeningTime(location: PointOfService, date: Date): Date;
    /**
     * Returns information about store open status
     * @param location store location
     * @param date date to compare
     */
    isStoreOpen(location: PointOfService, date: Date): boolean;
    /**
     * Extracts schedule from the given location for the given date
     * @param location location
     * @param date date
     *
     * @returns payload describing the store's schedule for the given day.
     */
    private getSchedule;
}
