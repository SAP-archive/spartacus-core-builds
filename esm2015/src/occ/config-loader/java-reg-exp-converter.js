import { __decorate } from "tslib";
import { Injectable, isDevMode } from '@angular/core';
import * as i0 from "@angular/core";
let JavaRegExpConverter = class JavaRegExpConverter {
    constructor() {
        /**
         * Pattern that extracts modifiers from the Java regexp.
         *
         * Java regexps MAY start with ONE or MANY modifiers like `(?MODIFIERS)PATTERN`. Examples:
         * - `(?i)` for Case Insensitive Mode: `(?i)PATTERN`
         * - `(?u)` for Unicode-Aware Case Folding; `(?u)PATTERN`
         * - or multiple combined:  `(?iu)PATTERN`
         * - (more modifiers in the official Java docs https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html)
         *
         * This pattern extracts 3 parts from the input string, i.e. for `(?iu)PATTERN`:
         *    1. original modifiers syntax, i.e. `(?iu)` (or undefined if no modifiers present)
         *    2. extracted modifiers, i.e. `iu` (or undefined if no modifiers present)
         *    3. the rest of the regexp, i.e. `PATTERN`
         */
        this.EXTRACT_JAVA_REGEXP_MODIFIERS = /^(\(\?([a-z]+)\))?(.*)/;
    }
    /**
     * Converts RegExp from Java syntax to Javascript, by recognizing Java regexp modifiers
     * and converting them to the Javascript ones (i.e. case insensitive mode: `(?i)PATTERN` -> `/pattern/i`)
     *
     * **CAUTION!** Not all features and modifiers of Java regexps are valid in Javascript!
     * If unsupported feature or modifier is used, then `null` will be returned instead of Javascript RegExp.
     *
     * See differences between Java and Javascript regexps:
     * - https://stackoverflow.com/questions/8754444/convert-javascript-regular-expression-to-java-syntax
     * - https://en.wikipedia.org/wiki/Comparison_of_regular_expression_engines#Language_features
     */
    toJsRegExp(javaSyntax) {
        const parts = javaSyntax.match(this.EXTRACT_JAVA_REGEXP_MODIFIERS);
        if (!parts) {
            return null;
        }
        const [, , modifiers, jsSyntax] = parts;
        try {
            return new RegExp(jsSyntax, modifiers);
        }
        catch (error) {
            if (isDevMode()) {
                console.warn(`WARNING: Could not convert Java regexp into Javascript. Original regexp: ${javaSyntax} \nMessage: ${error}`);
            }
            return null;
        }
    }
};
JavaRegExpConverter.ɵprov = i0.ɵɵdefineInjectable({ factory: function JavaRegExpConverter_Factory() { return new JavaRegExpConverter(); }, token: JavaRegExpConverter, providedIn: "root" });
JavaRegExpConverter = __decorate([
    Injectable({ providedIn: 'root' })
], JavaRegExpConverter);
export { JavaRegExpConverter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamF2YS1yZWctZXhwLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2MvY29uZmlnLWxvYWRlci9qYXZhLXJlZy1leHAtY29udmVydGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFHdEQsSUFBYSxtQkFBbUIsR0FBaEMsTUFBYSxtQkFBbUI7SUFBaEM7UUFDRTs7Ozs7Ozs7Ozs7OztXQWFHO1FBQ2Msa0NBQTZCLEdBQVcsd0JBQXdCLENBQUM7S0E4Qm5GO0lBNUJDOzs7Ozs7Ozs7O09BVUc7SUFDSCxVQUFVLENBQUMsVUFBa0I7UUFDM0IsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE1BQU0sQ0FBQyxFQUFFLEFBQUQsRUFBRyxTQUFTLEVBQUUsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLElBQUk7WUFDRixPQUFPLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN4QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxTQUFTLEVBQUUsRUFBRTtnQkFDZixPQUFPLENBQUMsSUFBSSxDQUNWLDRFQUE0RSxVQUFVLGVBQWUsS0FBSyxFQUFFLENBQzdHLENBQUM7YUFDSDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDO0NBQ0YsQ0FBQTs7QUE3Q1ksbUJBQW1CO0lBRC9CLFVBQVUsQ0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsQ0FBQztHQUN0QixtQkFBbUIsQ0E2Qy9CO1NBN0NZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIGlzRGV2TW9kZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIEphdmFSZWdFeHBDb252ZXJ0ZXIge1xuICAvKipcbiAgICogUGF0dGVybiB0aGF0IGV4dHJhY3RzIG1vZGlmaWVycyBmcm9tIHRoZSBKYXZhIHJlZ2V4cC5cbiAgICpcbiAgICogSmF2YSByZWdleHBzIE1BWSBzdGFydCB3aXRoIE9ORSBvciBNQU5ZIG1vZGlmaWVycyBsaWtlIGAoP01PRElGSUVSUylQQVRURVJOYC4gRXhhbXBsZXM6XG4gICAqIC0gYCg/aSlgIGZvciBDYXNlIEluc2Vuc2l0aXZlIE1vZGU6IGAoP2kpUEFUVEVSTmBcbiAgICogLSBgKD91KWAgZm9yIFVuaWNvZGUtQXdhcmUgQ2FzZSBGb2xkaW5nOyBgKD91KVBBVFRFUk5gXG4gICAqIC0gb3IgbXVsdGlwbGUgY29tYmluZWQ6ICBgKD9pdSlQQVRURVJOYFxuICAgKiAtIChtb3JlIG1vZGlmaWVycyBpbiB0aGUgb2ZmaWNpYWwgSmF2YSBkb2NzIGh0dHBzOi8vZG9jcy5vcmFjbGUuY29tL2phdmFzZS84L2RvY3MvYXBpL2phdmEvdXRpbC9yZWdleC9QYXR0ZXJuLmh0bWwpXG4gICAqXG4gICAqIFRoaXMgcGF0dGVybiBleHRyYWN0cyAzIHBhcnRzIGZyb20gdGhlIGlucHV0IHN0cmluZywgaS5lLiBmb3IgYCg/aXUpUEFUVEVSTmA6XG4gICAqICAgIDEuIG9yaWdpbmFsIG1vZGlmaWVycyBzeW50YXgsIGkuZS4gYCg/aXUpYCAob3IgdW5kZWZpbmVkIGlmIG5vIG1vZGlmaWVycyBwcmVzZW50KVxuICAgKiAgICAyLiBleHRyYWN0ZWQgbW9kaWZpZXJzLCBpLmUuIGBpdWAgKG9yIHVuZGVmaW5lZCBpZiBubyBtb2RpZmllcnMgcHJlc2VudClcbiAgICogICAgMy4gdGhlIHJlc3Qgb2YgdGhlIHJlZ2V4cCwgaS5lLiBgUEFUVEVSTmBcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgRVhUUkFDVF9KQVZBX1JFR0VYUF9NT0RJRklFUlM6IFJlZ0V4cCA9IC9eKFxcKFxcPyhbYS16XSspXFwpKT8oLiopLztcblxuICAvKipcbiAgICogQ29udmVydHMgUmVnRXhwIGZyb20gSmF2YSBzeW50YXggdG8gSmF2YXNjcmlwdCwgYnkgcmVjb2duaXppbmcgSmF2YSByZWdleHAgbW9kaWZpZXJzXG4gICAqIGFuZCBjb252ZXJ0aW5nIHRoZW0gdG8gdGhlIEphdmFzY3JpcHQgb25lcyAoaS5lLiBjYXNlIGluc2Vuc2l0aXZlIG1vZGU6IGAoP2kpUEFUVEVSTmAgLT4gYC9wYXR0ZXJuL2lgKVxuICAgKlxuICAgKiAqKkNBVVRJT04hKiogTm90IGFsbCBmZWF0dXJlcyBhbmQgbW9kaWZpZXJzIG9mIEphdmEgcmVnZXhwcyBhcmUgdmFsaWQgaW4gSmF2YXNjcmlwdCFcbiAgICogSWYgdW5zdXBwb3J0ZWQgZmVhdHVyZSBvciBtb2RpZmllciBpcyB1c2VkLCB0aGVuIGBudWxsYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgSmF2YXNjcmlwdCBSZWdFeHAuXG4gICAqXG4gICAqIFNlZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIEphdmEgYW5kIEphdmFzY3JpcHQgcmVnZXhwczpcbiAgICogLSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84NzU0NDQ0L2NvbnZlcnQtamF2YXNjcmlwdC1yZWd1bGFyLWV4cHJlc3Npb24tdG8tamF2YS1zeW50YXhcbiAgICogLSBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9Db21wYXJpc29uX29mX3JlZ3VsYXJfZXhwcmVzc2lvbl9lbmdpbmVzI0xhbmd1YWdlX2ZlYXR1cmVzXG4gICAqL1xuICB0b0pzUmVnRXhwKGphdmFTeW50YXg6IHN0cmluZyk6IFJlZ0V4cCB7XG4gICAgY29uc3QgcGFydHMgPSBqYXZhU3ludGF4Lm1hdGNoKHRoaXMuRVhUUkFDVF9KQVZBX1JFR0VYUF9NT0RJRklFUlMpO1xuICAgIGlmICghcGFydHMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBbLCAsIG1vZGlmaWVycywganNTeW50YXhdID0gcGFydHM7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKGpzU3ludGF4LCBtb2RpZmllcnMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgIGBXQVJOSU5HOiBDb3VsZCBub3QgY29udmVydCBKYXZhIHJlZ2V4cCBpbnRvIEphdmFzY3JpcHQuIE9yaWdpbmFsIHJlZ2V4cDogJHtqYXZhU3ludGF4fSBcXG5NZXNzYWdlOiAke2Vycm9yfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxufVxuIl19