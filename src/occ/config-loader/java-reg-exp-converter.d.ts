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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<JavaRegExpConverter>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamF2YS1yZWctZXhwLWNvbnZlcnRlci5kLnRzIiwic291cmNlcyI6WyJqYXZhLXJlZy1leHAtY29udmVydGVyLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRCQTsiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVjbGFyZSBjbGFzcyBKYXZhUmVnRXhwQ29udmVydGVyIHtcbiAgICAvKipcbiAgICAgKiBQYXR0ZXJuIHRoYXQgZXh0cmFjdHMgbW9kaWZpZXJzIGZyb20gdGhlIEphdmEgcmVnZXhwLlxuICAgICAqXG4gICAgICogSmF2YSByZWdleHBzIE1BWSBzdGFydCB3aXRoIE9ORSBvciBNQU5ZIG1vZGlmaWVycyBsaWtlIGAoP01PRElGSUVSUylQQVRURVJOYC4gRXhhbXBsZXM6XG4gICAgICogLSBgKD9pKWAgZm9yIENhc2UgSW5zZW5zaXRpdmUgTW9kZTogYCg/aSlQQVRURVJOYFxuICAgICAqIC0gYCg/dSlgIGZvciBVbmljb2RlLUF3YXJlIENhc2UgRm9sZGluZzsgYCg/dSlQQVRURVJOYFxuICAgICAqIC0gb3IgbXVsdGlwbGUgY29tYmluZWQ6ICBgKD9pdSlQQVRURVJOYFxuICAgICAqIC0gKG1vcmUgbW9kaWZpZXJzIGluIHRoZSBvZmZpY2lhbCBKYXZhIGRvY3MgaHR0cHM6Ly9kb2NzLm9yYWNsZS5jb20vamF2YXNlLzgvZG9jcy9hcGkvamF2YS91dGlsL3JlZ2V4L1BhdHRlcm4uaHRtbClcbiAgICAgKlxuICAgICAqIFRoaXMgcGF0dGVybiBleHRyYWN0cyAzIHBhcnRzIGZyb20gdGhlIGlucHV0IHN0cmluZywgaS5lLiBmb3IgYCg/aXUpUEFUVEVSTmA6XG4gICAgICogICAgMS4gb3JpZ2luYWwgbW9kaWZpZXJzIHN5bnRheCwgaS5lLiBgKD9pdSlgIChvciB1bmRlZmluZWQgaWYgbm8gbW9kaWZpZXJzIHByZXNlbnQpXG4gICAgICogICAgMi4gZXh0cmFjdGVkIG1vZGlmaWVycywgaS5lLiBgaXVgIChvciB1bmRlZmluZWQgaWYgbm8gbW9kaWZpZXJzIHByZXNlbnQpXG4gICAgICogICAgMy4gdGhlIHJlc3Qgb2YgdGhlIHJlZ2V4cCwgaS5lLiBgUEFUVEVSTmBcbiAgICAgKi9cbiAgICBwcml2YXRlIHJlYWRvbmx5IEVYVFJBQ1RfSkFWQV9SRUdFWFBfTU9ESUZJRVJTO1xuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFJlZ0V4cCBmcm9tIEphdmEgc3ludGF4IHRvIEphdmFzY3JpcHQsIGJ5IHJlY29nbml6aW5nIEphdmEgcmVnZXhwIG1vZGlmaWVyc1xuICAgICAqIGFuZCBjb252ZXJ0aW5nIHRoZW0gdG8gdGhlIEphdmFzY3JpcHQgb25lcyAoaS5lLiBjYXNlIGluc2Vuc2l0aXZlIG1vZGU6IGAoP2kpUEFUVEVSTmAgLT4gYC9wYXR0ZXJuL2lgKVxuICAgICAqXG4gICAgICogKipDQVVUSU9OISoqIE5vdCBhbGwgZmVhdHVyZXMgYW5kIG1vZGlmaWVycyBvZiBKYXZhIHJlZ2V4cHMgYXJlIHZhbGlkIGluIEphdmFzY3JpcHQhXG4gICAgICogSWYgdW5zdXBwb3J0ZWQgZmVhdHVyZSBvciBtb2RpZmllciBpcyB1c2VkLCB0aGVuIGBudWxsYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgSmF2YXNjcmlwdCBSZWdFeHAuXG4gICAgICpcbiAgICAgKiBTZWUgZGlmZmVyZW5jZXMgYmV0d2VlbiBKYXZhIGFuZCBKYXZhc2NyaXB0IHJlZ2V4cHM6XG4gICAgICogLSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy84NzU0NDQ0L2NvbnZlcnQtamF2YXNjcmlwdC1yZWd1bGFyLWV4cHJlc3Npb24tdG8tamF2YS1zeW50YXhcbiAgICAgKiAtIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbXBhcmlzb25fb2ZfcmVndWxhcl9leHByZXNzaW9uX2VuZ2luZXMjTGFuZ3VhZ2VfZmVhdHVyZXNcbiAgICAgKi9cbiAgICB0b0pzUmVnRXhwKGphdmFTeW50YXg6IHN0cmluZyk6IFJlZ0V4cDtcbn1cbiJdfQ==