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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GoogleMapRendererService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1yZW5kZXJlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImdvb2dsZS1tYXAtcmVuZGVyZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRlcm5hbEpzRmlsZUxvYWRlciB9IGZyb20gJy4vZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yZURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vZmFjYWRlL3N0b3JlLWRhdGEuc2VydmljZSc7XG5pbXBvcnQgeyBTdG9yZUZpbmRlckNvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9zdG9yZS1maW5kZXItY29uZmlnJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEdvb2dsZU1hcFJlbmRlcmVyU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogU3RvcmVGaW5kZXJDb25maWc7XG4gICAgcHJvdGVjdGVkIGV4dGVybmFsSnNGaWxlTG9hZGVyOiBFeHRlcm5hbEpzRmlsZUxvYWRlcjtcbiAgICBwcm90ZWN0ZWQgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZTtcbiAgICBwcml2YXRlIGdvb2dsZU1hcDtcbiAgICBwcml2YXRlIG1hcmtlcnM7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBTdG9yZUZpbmRlckNvbmZpZywgZXh0ZXJuYWxKc0ZpbGVMb2FkZXI6IEV4dGVybmFsSnNGaWxlTG9hZGVyLCBzdG9yZURhdGFTZXJ2aWNlOiBTdG9yZURhdGFTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGdvb2dsZSBtYXAgb24gdGhlIGdpdmVuIGVsZW1lbnQgYW5kIGRyYXdzIG1hcmtlcnMgb24gaXQuXG4gICAgICogSWYgbWFwIGFscmVhZHkgZXhpc3RzIGl0IHdpbGwgdXNlIGFuIGV4aXN0aW5nIG1hcCBvdGhlcndpc2UgaXQgd2lsbCBjcmVhdGUgb25lXG4gICAgICogQHBhcmFtIG1hcEVsZW1lbnQgSFRNTCBlbGVtZW50IGluc2lkZSBvZiB3aGljaCB0aGUgbWFwIHdpbGwgYmUgZGlzcGxheWVkXG4gICAgICogQHBhcmFtIGxvY2F0aW9ucyBhcnJheSBjb250YWluaWduIGdlbyBkYXRhIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbWFwXG4gICAgICogQHBhcmFtIHNlbGVjdE1hcmtlckhhbmRsZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHdoZW5ldmVyIGEgbWFya2VyIG9uIGEgbWFwIGlzIGNsaWNrZWRcbiAgICAgKi9cbiAgICByZW5kZXJNYXAobWFwRWxlbWVudDogSFRNTEVsZW1lbnQsIGxvY2F0aW9uczogYW55W10sIHNlbGVjdE1hcmtlckhhbmRsZXI/OiBGdW5jdGlvbik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ2VudGVycyB0aGUgbWFwIHRvIHRoZSBnaXZlbiBwb2ludFxuICAgICAqIEBwYXJhbSBsYXRpdHV0ZSBsYXRpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgICAqIEBwYXJhbSBsb25naXR1ZGUgbG9uZ2l0dWRlIG9mIHRoZSBuZXcgY2VudGVyXG4gICAgICovXG4gICAgY2VudGVyTWFwKGxhdGl0dXRlOiBudW1iZXIsIGxvbmdpdHVkZTogbnVtYmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBEZWZpbmVzIGFuZCByZXR1cm5zIHtAbGluayBnb29nbGUubWFwcy5MYXRMbmd9IHJlcHJlc2VudGluZyBhIHBvaW50IHdoZXJlIHRoZSBtYXAgd2lsbCBiZSBjZW50ZXJlZFxuICAgICAqIEBwYXJhbSBsb2NhdGlvbnMgbGlzdCBvZiBsb2NhdGlvbnNcbiAgICAgKi9cbiAgICBwcml2YXRlIGRlZmluZU1hcENlbnRlcjtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGdvb2dsZSBtYXAgaW5zaWRlIGlmIHRoZSBnaXZlbiBIVE1MIGVsZW1lbnQgY2VudGVyZWQgdG8gdGhlIGdpdmVuIHBvaW50XG4gICAgICogQHBhcmFtIG1hcEVsZW1lbnQge0BsaW5rIEhUTUxFbGVtZW50fSBpbnNpZGUgb2Ygd2hpY2ggdGhlIG1hcCB3aWxsIGJlIGNyZWF0ZWRcbiAgICAgKiBAcGFyYW0gbWFwQ2VudGVyIHtAbGluayBnb29nbGUubWFwcy5MYXRMbmd9IHRoZSBwb2ludCB3aGVyZSB0aGUgbWFwIHdpbGwgYmUgY2VudGVyZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGluaXRNYXA7XG4gICAgLyoqXG4gICAgICogRXJhc2VzIHRoZSBjdXJyZW50IG1hcCdzIG1hcmtlcnMgYW5kIGNyZWF0ZSBhIG5ldyBvbmUgYmFzZWQgb24gdGhlIGdpdmVuIGxvY2F0aW9uc1xuICAgICAqIEBwYXJhbSBsb2NhdGlvbnMgYXJyYXkgb2YgbG9jYXRpb25zIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbWFwXG4gICAgICogQHBhcmFtIHNlbGVjdE1hcmtlckhhbmRsZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHdoZW5ldmVyIGEgbWFya2VyIG9uIGEgbWFwIGlzIGNsaWNrZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZU1hcmtlcnM7XG4gICAgLyoqXG4gICAgICogSW5pdGlhbGl6ZSBhbmQgZHJhdyB0aGUgbWFwXG4gICAgICogQHBhcmFtIG1hcEVsZW1lbnQge0BsaW5rIEhUTUxFbGVtZW50fSBpbnNpZGUgb2Ygd2hpY2ggdGhlIG1hcCB3aWxsIGJlIGRyYXduXG4gICAgICogQHBhcmFtIGxvY2F0aW9ucyBhcnJheSBvZiBsb2NhdGlvbnMgdG8gYmUgZGlzcGxheWVkIG9uIHRoZSBtYXBcbiAgICAgKiBAcGFyYW0gc2VsZWN0TWFya2VySGFuZGxlciBmdW5jdGlvbiB0byBoYW5kbGUgd2hlbmV2ZXIgYSBtYXJrZXIgb24gYSBtYXAgaXMgY2xpY2tlZFxuICAgICAqL1xuICAgIHByaXZhdGUgZHJhd01hcDtcbn1cbiJdfQ==