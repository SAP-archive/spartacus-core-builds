import * as ɵngcc0 from '@angular/core';
export declare class JavaRegExpConverter {
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
    private readonly EXTRACT_JAVA_REGEXP_MODIFIERS;
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
    toJsRegExp(javaSyntax: string): RegExp;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JavaRegExpConverter, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamF2YS1yZWctZXhwLWNvbnZlcnRlci5kLnRzIiwic291cmNlcyI6WyJqYXZhLXJlZy1leHAtY29udmVydGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWNsYXJlIGNsYXNzIEphdmFSZWdFeHBDb252ZXJ0ZXIge1xuICAgIC8qKlxuICAgICAqIFBhdHRlcm4gdGhhdCBleHRyYWN0cyBtb2RpZmllcnMgZnJvbSB0aGUgSmF2YSByZWdleHAuXG4gICAgICpcbiAgICAgKiBKYXZhIHJlZ2V4cHMgTUFZIHN0YXJ0IHdpdGggT05FIG9yIE1BTlkgbW9kaWZpZXJzIGxpa2UgYCg/TU9ESUZJRVJTKVBBVFRFUk5gLiBFeGFtcGxlczpcbiAgICAgKiAtIGAoP2kpYCBmb3IgQ2FzZSBJbnNlbnNpdGl2ZSBNb2RlOiBgKD9pKVBBVFRFUk5gXG4gICAgICogLSBgKD91KWAgZm9yIFVuaWNvZGUtQXdhcmUgQ2FzZSBGb2xkaW5nOyBgKD91KVBBVFRFUk5gXG4gICAgICogLSBvciBtdWx0aXBsZSBjb21iaW5lZDogIGAoP2l1KVBBVFRFUk5gXG4gICAgICogLSAobW9yZSBtb2RpZmllcnMgaW4gdGhlIG9mZmljaWFsIEphdmEgZG9jcyBodHRwczovL2RvY3Mub3JhY2xlLmNvbS9qYXZhc2UvOC9kb2NzL2FwaS9qYXZhL3V0aWwvcmVnZXgvUGF0dGVybi5odG1sKVxuICAgICAqXG4gICAgICogVGhpcyBwYXR0ZXJuIGV4dHJhY3RzIDMgcGFydHMgZnJvbSB0aGUgaW5wdXQgc3RyaW5nLCBpLmUuIGZvciBgKD9pdSlQQVRURVJOYDpcbiAgICAgKiAgICAxLiBvcmlnaW5hbCBtb2RpZmllcnMgc3ludGF4LCBpLmUuIGAoP2l1KWAgKG9yIHVuZGVmaW5lZCBpZiBubyBtb2RpZmllcnMgcHJlc2VudClcbiAgICAgKiAgICAyLiBleHRyYWN0ZWQgbW9kaWZpZXJzLCBpLmUuIGBpdWAgKG9yIHVuZGVmaW5lZCBpZiBubyBtb2RpZmllcnMgcHJlc2VudClcbiAgICAgKiAgICAzLiB0aGUgcmVzdCBvZiB0aGUgcmVnZXhwLCBpLmUuIGBQQVRURVJOYFxuICAgICAqL1xuICAgIHByaXZhdGUgcmVhZG9ubHkgRVhUUkFDVF9KQVZBX1JFR0VYUF9NT0RJRklFUlM7XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgUmVnRXhwIGZyb20gSmF2YSBzeW50YXggdG8gSmF2YXNjcmlwdCwgYnkgcmVjb2duaXppbmcgSmF2YSByZWdleHAgbW9kaWZpZXJzXG4gICAgICogYW5kIGNvbnZlcnRpbmcgdGhlbSB0byB0aGUgSmF2YXNjcmlwdCBvbmVzIChpLmUuIGNhc2UgaW5zZW5zaXRpdmUgbW9kZTogYCg/aSlQQVRURVJOYCAtPiBgL3BhdHRlcm4vaWApXG4gICAgICpcbiAgICAgKiAqKkNBVVRJT04hKiogTm90IGFsbCBmZWF0dXJlcyBhbmQgbW9kaWZpZXJzIG9mIEphdmEgcmVnZXhwcyBhcmUgdmFsaWQgaW4gSmF2YXNjcmlwdCFcbiAgICAgKiBJZiB1bnN1cHBvcnRlZCBmZWF0dXJlIG9yIG1vZGlmaWVyIGlzIHVzZWQsIHRoZW4gYG51bGxgIHdpbGwgYmUgcmV0dXJuZWQgaW5zdGVhZCBvZiBKYXZhc2NyaXB0IFJlZ0V4cC5cbiAgICAgKlxuICAgICAqIFNlZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIEphdmEgYW5kIEphdmFzY3JpcHQgcmVnZXhwczpcbiAgICAgKiAtIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzg3NTQ0NDQvY29udmVydC1qYXZhc2NyaXB0LXJlZ3VsYXItZXhwcmVzc2lvbi10by1qYXZhLXN5bnRheFxuICAgICAqIC0gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tcGFyaXNvbl9vZl9yZWd1bGFyX2V4cHJlc3Npb25fZW5naW5lcyNMYW5ndWFnZV9mZWF0dXJlc1xuICAgICAqL1xuICAgIHRvSnNSZWdFeHAoamF2YVN5bnRheDogc3RyaW5nKTogUmVnRXhwO1xufVxuIl19