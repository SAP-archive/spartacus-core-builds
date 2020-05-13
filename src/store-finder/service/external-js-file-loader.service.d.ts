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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExternalJsFileLoader, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtanMtZmlsZS1sb2FkZXIuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJleHRlcm5hbC1qcy1maWxlLWxvYWRlci5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZUEiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVjbGFyZSBjbGFzcyBFeHRlcm5hbEpzRmlsZUxvYWRlciB7XG4gICAgcHJvdGVjdGVkIGRvY3VtZW50OiBhbnk7XG4gICAgY29uc3RydWN0b3IoZG9jdW1lbnQ6IGFueSk7XG4gICAgLyoqXG4gICAgICogTG9hZHMgYSBqYXZhc2NyaXB0IGZyb20gYW4gZXh0ZXJuYWwgVVJMXG4gICAgICogQHBhcmFtIHNyYyBVUkwgZm9yIHRoZSBzY3JpcHQgdG8gYmUgbG9hZGVkXG4gICAgICogQHBhcmFtIHBhcmFtcyBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIGdpdmVuIFVSTFxuICAgICAqIEBwYXJhbSBjYWxsYmFjayBhIGZ1bmN0aW9uIHRvIGJlIGludm9rZWQgYWZ0ZXIgdGhlIHNjcmlwdCBoYXMgYmVlbiBsb2FkZWRcbiAgICAgKi9cbiAgICBsb2FkKHNyYzogc3RyaW5nLCBwYXJhbXM/OiBPYmplY3QsIGNhbGxiYWNrPzogRXZlbnRMaXN0ZW5lcik6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUGFyc2VzIHRoZSBnaXZlbiBvYmplY3Qgd2l0aCBwYXJhbWV0ZXJzIHRvIGEgc3RyaW5nIFwicGFyYW0xPXZhbHVlMSZwYXJhbTI9dmFsdWUyXCJcbiAgICAgKiBAcGFyYW0gcGFyYW1zIG9iamVjdCBjb250YWluaW5nIHBhcmFtZXRlcnNcbiAgICAgKi9cbiAgICBwcml2YXRlIHBhcnNlUGFyYW1zO1xufVxuIl19