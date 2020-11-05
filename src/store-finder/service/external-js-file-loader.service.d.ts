import * as ɵngcc0 from '@angular/core';
export declare class ExternalJsFileLoader {
    protected document: any;
    constructor(document: any);
    /**
     * Loads a javascript from an external URL
     * @param src URL for the script to be loaded
     * @param params additional parameters to be attached to the given URL
     * @param callback a function to be invoked after the script has been loaded
     * @param errorCallback function to be invoked after error during script loading
     */
    load(src: string, params?: Object, callback?: EventListener, errorCallback?: EventListener): void;
    /**
     * Parses the given object with parameters to a string "param1=value1&param2=value2"
     * @param params object containing parameters
     */
    private parseParams;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ExternalJsFileLoader, never>;
}

//# sourceMappingURL=external-js-file-loader.service.d.ts.map