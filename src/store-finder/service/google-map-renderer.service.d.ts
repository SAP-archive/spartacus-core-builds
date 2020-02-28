import { ExternalJsFileLoader } from './external-js-file-loader.service';
import { StoreDataService } from '../facade/store-data.service';
import { StoreFinderConfig } from '../config/store-finder-config';
import * as ɵngcc0 from '@angular/core';
export declare class GoogleMapRendererService {
    protected config: StoreFinderConfig;
    protected externalJsFileLoader: ExternalJsFileLoader;
    protected storeDataService: StoreDataService;
    private googleMap;
    private markers;
    constructor(config: StoreFinderConfig, externalJsFileLoader: ExternalJsFileLoader, storeDataService: StoreDataService);
    /**
     * Renders google map on the given element and draws markers on it.
     * If map already exists it will use an existing map otherwise it will create one
     * @param mapElement HTML element inside of which the map will be displayed
     * @param locations array containign geo data to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    renderMap(mapElement: HTMLElement, locations: any[], selectMarkerHandler?: Function): void;
    /**
     * Centers the map to the given point
     * @param latitute latitude of the new center
     * @param longitude longitude of the new center
     */
    centerMap(latitute: number, longitude: number): void;
    /**
     * Defines and returns {@link google.maps.LatLng} representing a point where the map will be centered
     * @param locations list of locations
     */
    private defineMapCenter;
    /**
     * Creates google map inside if the given HTML element centered to the given point
     * @param mapElement {@link HTMLElement} inside of which the map will be created
     * @param mapCenter {@link google.maps.LatLng} the point where the map will be centered
     */
    private initMap;
    /**
     * Erases the current map's markers and create a new one based on the given locations
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    private createMarkers;
    /**
     * Initialize and draw the map
     * @param mapElement {@link HTMLElement} inside of which the map will be drawn
     * @param locations array of locations to be displayed on the map
     * @param selectMarkerHandler function to handle whenever a marker on a map is clicked
     */
    private drawMap;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GoogleMapRendererService>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<GoogleMapRendererService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1yZW5kZXJlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImdvb2dsZS1tYXAtcmVuZGVyZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dGVybmFsSnNGaWxlTG9hZGVyIH0gZnJvbSAnLi9leHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9mYWNhZGUvc3RvcmUtZGF0YS5zZXJ2aWNlJztcbmltcG9ydCB7IFN0b3JlRmluZGVyQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL3N0b3JlLWZpbmRlci1jb25maWcnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgR29vZ2xlTWFwUmVuZGVyZXJTZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBTdG9yZUZpbmRlckNvbmZpZztcbiAgICBwcm90ZWN0ZWQgZXh0ZXJuYWxKc0ZpbGVMb2FkZXI6IEV4dGVybmFsSnNGaWxlTG9hZGVyO1xuICAgIHByb3RlY3RlZCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlO1xuICAgIHByaXZhdGUgZ29vZ2xlTWFwO1xuICAgIHByaXZhdGUgbWFya2VycztcbiAgICBjb25zdHJ1Y3Rvcihjb25maWc6IFN0b3JlRmluZGVyQ29uZmlnLCBleHRlcm5hbEpzRmlsZUxvYWRlcjogRXh0ZXJuYWxKc0ZpbGVMb2FkZXIsIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgZ29vZ2xlIG1hcCBvbiB0aGUgZ2l2ZW4gZWxlbWVudCBhbmQgZHJhd3MgbWFya2VycyBvbiBpdC5cbiAgICAgKiBJZiBtYXAgYWxyZWFkeSBleGlzdHMgaXQgd2lsbCB1c2UgYW4gZXhpc3RpbmcgbWFwIG90aGVyd2lzZSBpdCB3aWxsIGNyZWF0ZSBvbmVcbiAgICAgKiBAcGFyYW0gbWFwRWxlbWVudCBIVE1MIGVsZW1lbnQgaW5zaWRlIG9mIHdoaWNoIHRoZSBtYXAgd2lsbCBiZSBkaXNwbGF5ZWRcbiAgICAgKiBAcGFyYW0gbG9jYXRpb25zIGFycmF5IGNvbnRhaW5pZ24gZ2VvIGRhdGEgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBtYXBcbiAgICAgKiBAcGFyYW0gc2VsZWN0TWFya2VySGFuZGxlciBmdW5jdGlvbiB0byBoYW5kbGUgd2hlbmV2ZXIgYSBtYXJrZXIgb24gYSBtYXAgaXMgY2xpY2tlZFxuICAgICAqL1xuICAgIHJlbmRlck1hcChtYXBFbGVtZW50OiBIVE1MRWxlbWVudCwgbG9jYXRpb25zOiBhbnlbXSwgc2VsZWN0TWFya2VySGFuZGxlcj86IEZ1bmN0aW9uKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDZW50ZXJzIHRoZSBtYXAgdG8gdGhlIGdpdmVuIHBvaW50XG4gICAgICogQHBhcmFtIGxhdGl0dXRlIGxhdGl0dWRlIG9mIHRoZSBuZXcgY2VudGVyXG4gICAgICogQHBhcmFtIGxvbmdpdHVkZSBsb25naXR1ZGUgb2YgdGhlIG5ldyBjZW50ZXJcbiAgICAgKi9cbiAgICBjZW50ZXJNYXAobGF0aXR1dGU6IG51bWJlciwgbG9uZ2l0dWRlOiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIERlZmluZXMgYW5kIHJldHVybnMge0BsaW5rIGdvb2dsZS5tYXBzLkxhdExuZ30gcmVwcmVzZW50aW5nIGEgcG9pbnQgd2hlcmUgdGhlIG1hcCB3aWxsIGJlIGNlbnRlcmVkXG4gICAgICogQHBhcmFtIGxvY2F0aW9ucyBsaXN0IG9mIGxvY2F0aW9uc1xuICAgICAqL1xuICAgIHByaXZhdGUgZGVmaW5lTWFwQ2VudGVyO1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgZ29vZ2xlIG1hcCBpbnNpZGUgaWYgdGhlIGdpdmVuIEhUTUwgZWxlbWVudCBjZW50ZXJlZCB0byB0aGUgZ2l2ZW4gcG9pbnRcbiAgICAgKiBAcGFyYW0gbWFwRWxlbWVudCB7QGxpbmsgSFRNTEVsZW1lbnR9IGluc2lkZSBvZiB3aGljaCB0aGUgbWFwIHdpbGwgYmUgY3JlYXRlZFxuICAgICAqIEBwYXJhbSBtYXBDZW50ZXIge0BsaW5rIGdvb2dsZS5tYXBzLkxhdExuZ30gdGhlIHBvaW50IHdoZXJlIHRoZSBtYXAgd2lsbCBiZSBjZW50ZXJlZFxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdE1hcDtcbiAgICAvKipcbiAgICAgKiBFcmFzZXMgdGhlIGN1cnJlbnQgbWFwJ3MgbWFya2VycyBhbmQgY3JlYXRlIGEgbmV3IG9uZSBiYXNlZCBvbiB0aGUgZ2l2ZW4gbG9jYXRpb25zXG4gICAgICogQHBhcmFtIGxvY2F0aW9ucyBhcnJheSBvZiBsb2NhdGlvbnMgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBtYXBcbiAgICAgKiBAcGFyYW0gc2VsZWN0TWFya2VySGFuZGxlciBmdW5jdGlvbiB0byBoYW5kbGUgd2hlbmV2ZXIgYSBtYXJrZXIgb24gYSBtYXAgaXMgY2xpY2tlZFxuICAgICAqL1xuICAgIHByaXZhdGUgY3JlYXRlTWFya2VycztcbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIGFuZCBkcmF3IHRoZSBtYXBcbiAgICAgKiBAcGFyYW0gbWFwRWxlbWVudCB7QGxpbmsgSFRNTEVsZW1lbnR9IGluc2lkZSBvZiB3aGljaCB0aGUgbWFwIHdpbGwgYmUgZHJhd25cbiAgICAgKiBAcGFyYW0gbG9jYXRpb25zIGFycmF5IG9mIGxvY2F0aW9ucyB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIG1hcFxuICAgICAqIEBwYXJhbSBzZWxlY3RNYXJrZXJIYW5kbGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSB3aGVuZXZlciBhIG1hcmtlciBvbiBhIG1hcCBpcyBjbGlja2VkXG4gICAgICovXG4gICAgcHJpdmF0ZSBkcmF3TWFwO1xufVxuIl19