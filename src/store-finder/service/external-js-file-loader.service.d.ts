import * as ɵngcc0 from '@angular/core';
export declare class ExternalJsFileLoader {
    protected document: any;
    constructor(document: any);
    /**
     * Loads a javascript from an external URL
     * @param src URL for the script to be loaded
     * @param params additional parameters to be attached to the given URL
     * @param callback a function to be invoked after the script has been loaded
     */
    load(src: string, params?: Object, callback?: EventListener): void;
    /**
     * Parses the given object with parameters to a string "param1=value1&param2=value2"
     * @param params object containing parameters
     */
    private parseParams;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExternalJsFileLoader>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ExternalJsFileLoader>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJleHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBOyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWNsYXJlIGNsYXNzIEV4dGVybmFsSnNGaWxlTG9hZGVyIHtcbiAgICBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueTtcbiAgICBjb25zdHJ1Y3Rvcihkb2N1bWVudDogYW55KTtcbiAgICAvKipcbiAgICAgKiBMb2FkcyBhIGphdmFzY3JpcHQgZnJvbSBhbiBleHRlcm5hbCBVUkxcbiAgICAgKiBAcGFyYW0gc3JjIFVSTCBmb3IgdGhlIHNjcmlwdCB0byBiZSBsb2FkZWRcbiAgICAgKiBAcGFyYW0gcGFyYW1zIGFkZGl0aW9uYWwgcGFyYW1ldGVycyB0byBiZSBhdHRhY2hlZCB0byB0aGUgZ2l2ZW4gVVJMXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIGEgZnVuY3Rpb24gdG8gYmUgaW52b2tlZCBhZnRlciB0aGUgc2NyaXB0IGhhcyBiZWVuIGxvYWRlZFxuICAgICAqL1xuICAgIGxvYWQoc3JjOiBzdHJpbmcsIHBhcmFtcz86IE9iamVjdCwgY2FsbGJhY2s/OiBFdmVudExpc3RlbmVyKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBQYXJzZXMgdGhlIGdpdmVuIG9iamVjdCB3aXRoIHBhcmFtZXRlcnMgdG8gYSBzdHJpbmcgXCJwYXJhbTE9dmFsdWUxJnBhcmFtMj12YWx1ZTJcIlxuICAgICAqIEBwYXJhbSBwYXJhbXMgb2JqZWN0IGNvbnRhaW5pbmcgcGFyYW1ldGVyc1xuICAgICAqL1xuICAgIHByaXZhdGUgcGFyc2VQYXJhbXM7XG59XG4iXX0=