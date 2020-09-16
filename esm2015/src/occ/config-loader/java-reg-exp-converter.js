import { Injectable, isDevMode } from '@angular/core';
import * as i0 from "@angular/core";
export class JavaRegExpConverter {
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
}
JavaRegExpConverter.ɵprov = i0.ɵɵdefineInjectable({ factory: function JavaRegExpConverter_Factory() { return new JavaRegExpConverter(); }, token: JavaRegExpConverter, providedIn: "root" });
JavaRegExpConverter.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamF2YS1yZWctZXhwLWNvbnZlcnRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9jb25maWctbG9hZGVyL2phdmEtcmVnLWV4cC1jb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBR3RELE1BQU0sT0FBTyxtQkFBbUI7SUFEaEM7UUFFRTs7Ozs7Ozs7Ozs7OztXQWFHO1FBQ2Msa0NBQTZCLEdBQVcsd0JBQXdCLENBQUM7S0E4Qm5GO0lBNUJDOzs7Ozs7Ozs7O09BVUc7SUFDSCxVQUFVLENBQUMsVUFBa0I7UUFDM0IsTUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1YsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE1BQU0sQ0FBQyxFQUFFLEFBQUQsRUFBRyxTQUFTLEVBQUUsUUFBUSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLElBQUk7WUFDRixPQUFPLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUN4QztRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2QsSUFBSSxTQUFTLEVBQUUsRUFBRTtnQkFDZixPQUFPLENBQUMsSUFBSSxDQUNWLDRFQUE0RSxVQUFVLGVBQWUsS0FBSyxFQUFFLENBQzdHLENBQUM7YUFDSDtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7SUFDSCxDQUFDOzs7O1lBN0NGLFVBQVUsU0FBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBpc0Rldk1vZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcbmV4cG9ydCBjbGFzcyBKYXZhUmVnRXhwQ29udmVydGVyIHtcbiAgLyoqXG4gICAqIFBhdHRlcm4gdGhhdCBleHRyYWN0cyBtb2RpZmllcnMgZnJvbSB0aGUgSmF2YSByZWdleHAuXG4gICAqXG4gICAqIEphdmEgcmVnZXhwcyBNQVkgc3RhcnQgd2l0aCBPTkUgb3IgTUFOWSBtb2RpZmllcnMgbGlrZSBgKD9NT0RJRklFUlMpUEFUVEVSTmAuIEV4YW1wbGVzOlxuICAgKiAtIGAoP2kpYCBmb3IgQ2FzZSBJbnNlbnNpdGl2ZSBNb2RlOiBgKD9pKVBBVFRFUk5gXG4gICAqIC0gYCg/dSlgIGZvciBVbmljb2RlLUF3YXJlIENhc2UgRm9sZGluZzsgYCg/dSlQQVRURVJOYFxuICAgKiAtIG9yIG11bHRpcGxlIGNvbWJpbmVkOiAgYCg/aXUpUEFUVEVSTmBcbiAgICogLSAobW9yZSBtb2RpZmllcnMgaW4gdGhlIG9mZmljaWFsIEphdmEgZG9jcyBodHRwczovL2RvY3Mub3JhY2xlLmNvbS9qYXZhc2UvOC9kb2NzL2FwaS9qYXZhL3V0aWwvcmVnZXgvUGF0dGVybi5odG1sKVxuICAgKlxuICAgKiBUaGlzIHBhdHRlcm4gZXh0cmFjdHMgMyBwYXJ0cyBmcm9tIHRoZSBpbnB1dCBzdHJpbmcsIGkuZS4gZm9yIGAoP2l1KVBBVFRFUk5gOlxuICAgKiAgICAxLiBvcmlnaW5hbCBtb2RpZmllcnMgc3ludGF4LCBpLmUuIGAoP2l1KWAgKG9yIHVuZGVmaW5lZCBpZiBubyBtb2RpZmllcnMgcHJlc2VudClcbiAgICogICAgMi4gZXh0cmFjdGVkIG1vZGlmaWVycywgaS5lLiBgaXVgIChvciB1bmRlZmluZWQgaWYgbm8gbW9kaWZpZXJzIHByZXNlbnQpXG4gICAqICAgIDMuIHRoZSByZXN0IG9mIHRoZSByZWdleHAsIGkuZS4gYFBBVFRFUk5gXG4gICAqL1xuICBwcml2YXRlIHJlYWRvbmx5IEVYVFJBQ1RfSkFWQV9SRUdFWFBfTU9ESUZJRVJTOiBSZWdFeHAgPSAvXihcXChcXD8oW2Etel0rKVxcKSk/KC4qKS87XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIFJlZ0V4cCBmcm9tIEphdmEgc3ludGF4IHRvIEphdmFzY3JpcHQsIGJ5IHJlY29nbml6aW5nIEphdmEgcmVnZXhwIG1vZGlmaWVyc1xuICAgKiBhbmQgY29udmVydGluZyB0aGVtIHRvIHRoZSBKYXZhc2NyaXB0IG9uZXMgKGkuZS4gY2FzZSBpbnNlbnNpdGl2ZSBtb2RlOiBgKD9pKVBBVFRFUk5gIC0+IGAvcGF0dGVybi9pYClcbiAgICpcbiAgICogKipDQVVUSU9OISoqIE5vdCBhbGwgZmVhdHVyZXMgYW5kIG1vZGlmaWVycyBvZiBKYXZhIHJlZ2V4cHMgYXJlIHZhbGlkIGluIEphdmFzY3JpcHQhXG4gICAqIElmIHVuc3VwcG9ydGVkIGZlYXR1cmUgb3IgbW9kaWZpZXIgaXMgdXNlZCwgdGhlbiBgbnVsbGAgd2lsbCBiZSByZXR1cm5lZCBpbnN0ZWFkIG9mIEphdmFzY3JpcHQgUmVnRXhwLlxuICAgKlxuICAgKiBTZWUgZGlmZmVyZW5jZXMgYmV0d2VlbiBKYXZhIGFuZCBKYXZhc2NyaXB0IHJlZ2V4cHM6XG4gICAqIC0gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvODc1NDQ0NC9jb252ZXJ0LWphdmFzY3JpcHQtcmVndWxhci1leHByZXNzaW9uLXRvLWphdmEtc3ludGF4XG4gICAqIC0gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tcGFyaXNvbl9vZl9yZWd1bGFyX2V4cHJlc3Npb25fZW5naW5lcyNMYW5ndWFnZV9mZWF0dXJlc1xuICAgKi9cbiAgdG9Kc1JlZ0V4cChqYXZhU3ludGF4OiBzdHJpbmcpOiBSZWdFeHAge1xuICAgIGNvbnN0IHBhcnRzID0gamF2YVN5bnRheC5tYXRjaCh0aGlzLkVYVFJBQ1RfSkFWQV9SRUdFWFBfTU9ESUZJRVJTKTtcbiAgICBpZiAoIXBhcnRzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgWywgLCBtb2RpZmllcnMsIGpzU3ludGF4XSA9IHBhcnRzO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbmV3IFJlZ0V4cChqc1N5bnRheCwgbW9kaWZpZXJzKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGlzRGV2TW9kZSgpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICBgV0FSTklORzogQ291bGQgbm90IGNvbnZlcnQgSmF2YSByZWdleHAgaW50byBKYXZhc2NyaXB0LiBPcmlnaW5hbCByZWdleHA6ICR7amF2YVN5bnRheH0gXFxuTWVzc2FnZTogJHtlcnJvcn1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==