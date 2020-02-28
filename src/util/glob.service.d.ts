import * as ɵngcc0 from '@angular/core';
export declare class GlobService {
    /**
     * For given list of glob-like patterns, returns a validator function.
     *
     * The validator returns true for given URL only when ANY of the positive patterns is matched and NONE of the negative ones.
     */
    getValidator(patterns: string[]): (url: string) => boolean;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<GlobService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImdsb2Iuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7QUFPQTsiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVjbGFyZSBjbGFzcyBHbG9iU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogRm9yIGdpdmVuIGxpc3Qgb2YgZ2xvYi1saWtlIHBhdHRlcm5zLCByZXR1cm5zIGEgdmFsaWRhdG9yIGZ1bmN0aW9uLlxuICAgICAqXG4gICAgICogVGhlIHZhbGlkYXRvciByZXR1cm5zIHRydWUgZm9yIGdpdmVuIFVSTCBvbmx5IHdoZW4gQU5ZIG9mIHRoZSBwb3NpdGl2ZSBwYXR0ZXJucyBpcyBtYXRjaGVkIGFuZCBOT05FIG9mIHRoZSBuZWdhdGl2ZSBvbmVzLlxuICAgICAqL1xuICAgIGdldFZhbGlkYXRvcihwYXR0ZXJuczogc3RyaW5nW10pOiAodXJsOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG4iXX0=