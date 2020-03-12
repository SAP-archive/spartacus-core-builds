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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ29vZ2xlLW1hcC1yZW5kZXJlci5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImdvb2dsZS1tYXAtcmVuZGVyZXIuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0ZXJuYWxKc0ZpbGVMb2FkZXIgfSBmcm9tICcuL2V4dGVybmFsLWpzLWZpbGUtbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVEYXRhU2VydmljZSB9IGZyb20gJy4uL2ZhY2FkZS9zdG9yZS1kYXRhLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVGaW5kZXJDb25maWcgfSBmcm9tICcuLi9jb25maWcvc3RvcmUtZmluZGVyLWNvbmZpZyc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBHb29nbGVNYXBSZW5kZXJlclNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjb25maWc6IFN0b3JlRmluZGVyQ29uZmlnO1xuICAgIHByb3RlY3RlZCBleHRlcm5hbEpzRmlsZUxvYWRlcjogRXh0ZXJuYWxKc0ZpbGVMb2FkZXI7XG4gICAgcHJvdGVjdGVkIHN0b3JlRGF0YVNlcnZpY2U6IFN0b3JlRGF0YVNlcnZpY2U7XG4gICAgcHJpdmF0ZSBnb29nbGVNYXA7XG4gICAgcHJpdmF0ZSBtYXJrZXJzO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogU3RvcmVGaW5kZXJDb25maWcsIGV4dGVybmFsSnNGaWxlTG9hZGVyOiBFeHRlcm5hbEpzRmlsZUxvYWRlciwgc3RvcmVEYXRhU2VydmljZTogU3RvcmVEYXRhU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmVuZGVycyBnb29nbGUgbWFwIG9uIHRoZSBnaXZlbiBlbGVtZW50IGFuZCBkcmF3cyBtYXJrZXJzIG9uIGl0LlxuICAgICAqIElmIG1hcCBhbHJlYWR5IGV4aXN0cyBpdCB3aWxsIHVzZSBhbiBleGlzdGluZyBtYXAgb3RoZXJ3aXNlIGl0IHdpbGwgY3JlYXRlIG9uZVxuICAgICAqIEBwYXJhbSBtYXBFbGVtZW50IEhUTUwgZWxlbWVudCBpbnNpZGUgb2Ygd2hpY2ggdGhlIG1hcCB3aWxsIGJlIGRpc3BsYXllZFxuICAgICAqIEBwYXJhbSBsb2NhdGlvbnMgYXJyYXkgY29udGFpbmlnbiBnZW8gZGF0YSB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIG1hcFxuICAgICAqIEBwYXJhbSBzZWxlY3RNYXJrZXJIYW5kbGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSB3aGVuZXZlciBhIG1hcmtlciBvbiBhIG1hcCBpcyBjbGlja2VkXG4gICAgICovXG4gICAgcmVuZGVyTWFwKG1hcEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBsb2NhdGlvbnM6IGFueVtdLCBzZWxlY3RNYXJrZXJIYW5kbGVyPzogRnVuY3Rpb24pOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIENlbnRlcnMgdGhlIG1hcCB0byB0aGUgZ2l2ZW4gcG9pbnRcbiAgICAgKiBAcGFyYW0gbGF0aXR1dGUgbGF0aXR1ZGUgb2YgdGhlIG5ldyBjZW50ZXJcbiAgICAgKiBAcGFyYW0gbG9uZ2l0dWRlIGxvbmdpdHVkZSBvZiB0aGUgbmV3IGNlbnRlclxuICAgICAqL1xuICAgIGNlbnRlck1hcChsYXRpdHV0ZTogbnVtYmVyLCBsb25naXR1ZGU6IG51bWJlcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRGVmaW5lcyBhbmQgcmV0dXJucyB7QGxpbmsgZ29vZ2xlLm1hcHMuTGF0TG5nfSByZXByZXNlbnRpbmcgYSBwb2ludCB3aGVyZSB0aGUgbWFwIHdpbGwgYmUgY2VudGVyZWRcbiAgICAgKiBAcGFyYW0gbG9jYXRpb25zIGxpc3Qgb2YgbG9jYXRpb25zXG4gICAgICovXG4gICAgcHJpdmF0ZSBkZWZpbmVNYXBDZW50ZXI7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBnb29nbGUgbWFwIGluc2lkZSBpZiB0aGUgZ2l2ZW4gSFRNTCBlbGVtZW50IGNlbnRlcmVkIHRvIHRoZSBnaXZlbiBwb2ludFxuICAgICAqIEBwYXJhbSBtYXBFbGVtZW50IHtAbGluayBIVE1MRWxlbWVudH0gaW5zaWRlIG9mIHdoaWNoIHRoZSBtYXAgd2lsbCBiZSBjcmVhdGVkXG4gICAgICogQHBhcmFtIG1hcENlbnRlciB7QGxpbmsgZ29vZ2xlLm1hcHMuTGF0TG5nfSB0aGUgcG9pbnQgd2hlcmUgdGhlIG1hcCB3aWxsIGJlIGNlbnRlcmVkXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbml0TWFwO1xuICAgIC8qKlxuICAgICAqIEVyYXNlcyB0aGUgY3VycmVudCBtYXAncyBtYXJrZXJzIGFuZCBjcmVhdGUgYSBuZXcgb25lIGJhc2VkIG9uIHRoZSBnaXZlbiBsb2NhdGlvbnNcbiAgICAgKiBAcGFyYW0gbG9jYXRpb25zIGFycmF5IG9mIGxvY2F0aW9ucyB0byBiZSBkaXNwbGF5ZWQgb24gdGhlIG1hcFxuICAgICAqIEBwYXJhbSBzZWxlY3RNYXJrZXJIYW5kbGVyIGZ1bmN0aW9uIHRvIGhhbmRsZSB3aGVuZXZlciBhIG1hcmtlciBvbiBhIG1hcCBpcyBjbGlja2VkXG4gICAgICovXG4gICAgcHJpdmF0ZSBjcmVhdGVNYXJrZXJzO1xuICAgIC8qKlxuICAgICAqIEluaXRpYWxpemUgYW5kIGRyYXcgdGhlIG1hcFxuICAgICAqIEBwYXJhbSBtYXBFbGVtZW50IHtAbGluayBIVE1MRWxlbWVudH0gaW5zaWRlIG9mIHdoaWNoIHRoZSBtYXAgd2lsbCBiZSBkcmF3blxuICAgICAqIEBwYXJhbSBsb2NhdGlvbnMgYXJyYXkgb2YgbG9jYXRpb25zIHRvIGJlIGRpc3BsYXllZCBvbiB0aGUgbWFwXG4gICAgICogQHBhcmFtIHNlbGVjdE1hcmtlckhhbmRsZXIgZnVuY3Rpb24gdG8gaGFuZGxlIHdoZW5ldmVyIGEgbWFya2VyIG9uIGEgbWFwIGlzIGNsaWNrZWRcbiAgICAgKi9cbiAgICBwcml2YXRlIGRyYXdNYXA7XG59XG4iXX0=