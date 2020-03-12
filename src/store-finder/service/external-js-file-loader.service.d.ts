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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJleHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztBQWVBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlY2xhcmUgY2xhc3MgRXh0ZXJuYWxKc0ZpbGVMb2FkZXIge1xuICAgIHByb3RlY3RlZCBkb2N1bWVudDogYW55O1xuICAgIGNvbnN0cnVjdG9yKGRvY3VtZW50OiBhbnkpO1xuICAgIC8qKlxuICAgICAqIExvYWRzIGEgamF2YXNjcmlwdCBmcm9tIGFuIGV4dGVybmFsIFVSTFxuICAgICAqIEBwYXJhbSBzcmMgVVJMIGZvciB0aGUgc2NyaXB0IHRvIGJlIGxvYWRlZFxuICAgICAqIEBwYXJhbSBwYXJhbXMgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBnaXZlbiBVUkxcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgYSBmdW5jdGlvbiB0byBiZSBpbnZva2VkIGFmdGVyIHRoZSBzY3JpcHQgaGFzIGJlZW4gbG9hZGVkXG4gICAgICovXG4gICAgbG9hZChzcmM6IHN0cmluZywgcGFyYW1zPzogT2JqZWN0LCBjYWxsYmFjaz86IEV2ZW50TGlzdGVuZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFBhcnNlcyB0aGUgZ2l2ZW4gb2JqZWN0IHdpdGggcGFyYW1ldGVycyB0byBhIHN0cmluZyBcInBhcmFtMT12YWx1ZTEmcGFyYW0yPXZhbHVlMlwiXG4gICAgICogQHBhcmFtIHBhcmFtcyBvYmplY3QgY29udGFpbmluZyBwYXJhbWV0ZXJzXG4gICAgICovXG4gICAgcHJpdmF0ZSBwYXJzZVBhcmFtcztcbn1cbiJdfQ==