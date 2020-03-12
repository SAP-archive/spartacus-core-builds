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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYi5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbImdsb2Iuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Ozs7QUFPQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWNsYXJlIGNsYXNzIEdsb2JTZXJ2aWNlIHtcbiAgICAvKipcbiAgICAgKiBGb3IgZ2l2ZW4gbGlzdCBvZiBnbG9iLWxpa2UgcGF0dGVybnMsIHJldHVybnMgYSB2YWxpZGF0b3IgZnVuY3Rpb24uXG4gICAgICpcbiAgICAgKiBUaGUgdmFsaWRhdG9yIHJldHVybnMgdHJ1ZSBmb3IgZ2l2ZW4gVVJMIG9ubHkgd2hlbiBBTlkgb2YgdGhlIHBvc2l0aXZlIHBhdHRlcm5zIGlzIG1hdGNoZWQgYW5kIE5PTkUgb2YgdGhlIG5lZ2F0aXZlIG9uZXMuXG4gICAgICovXG4gICAgZ2V0VmFsaWRhdG9yKHBhdHRlcm5zOiBzdHJpbmdbXSk6ICh1cmw6IHN0cmluZykgPT4gYm9vbGVhbjtcbn1cbiJdfQ==