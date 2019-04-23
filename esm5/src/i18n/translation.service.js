/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
TranslationService = /** @class */ (function () {
    function TranslationService() {
    }
    return TranslationService;
}());
/**
 * @abstract
 */
export { TranslationService };
if (false) {
    /**
     * Translates given key with options.
     * If key is missing, it tries to load the chunk and emits a value when chunk is loaded.
     * If key is missing after loaded chunk, a fallback value is emitted
     *
     * \@param key translation key
     * \@param options values for interpolation in translation
     * \@param whitespaceUntilLoaded if true, immediately emits a non-breaking space
     * @type {?}
     */
    TranslationService.prototype.translate;
    /**
     * Loads chunks with translations
     *
     * \@param chunkNames array of chunk names to be loaded
     * @type {?}
     */
    TranslationService.prototype.loadChunks;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNsYXRpb24uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9pMThuL3RyYW5zbGF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUVBOzs7O0lBQUE7SUFzQkEsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQXRCRCxJQXNCQzs7Ozs7Ozs7Ozs7Ozs7OztJQVpDLHVDQUl3Qjs7Ozs7OztJQU94Qix3Q0FBNEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUcmFuc2xhdGlvblNlcnZpY2Uge1xuICAvKipcbiAgICogVHJhbnNsYXRlcyBnaXZlbiBrZXkgd2l0aCBvcHRpb25zLlxuICAgKiBJZiBrZXkgaXMgbWlzc2luZywgaXQgdHJpZXMgdG8gbG9hZCB0aGUgY2h1bmsgYW5kIGVtaXRzIGEgdmFsdWUgd2hlbiBjaHVuayBpcyBsb2FkZWQuXG4gICAqIElmIGtleSBpcyBtaXNzaW5nIGFmdGVyIGxvYWRlZCBjaHVuaywgYSBmYWxsYmFjayB2YWx1ZSBpcyBlbWl0dGVkXG4gICAqXG4gICAqIEBwYXJhbSBrZXkgdHJhbnNsYXRpb24ga2V5XG4gICAqIEBwYXJhbSBvcHRpb25zIHZhbHVlcyBmb3IgaW50ZXJwb2xhdGlvbiBpbiB0cmFuc2xhdGlvblxuICAgKiBAcGFyYW0gd2hpdGVzcGFjZVVudGlsTG9hZGVkIGlmIHRydWUsIGltbWVkaWF0ZWx5IGVtaXRzIGEgbm9uLWJyZWFraW5nIHNwYWNlXG4gICAqL1xuICB0cmFuc2xhdGU6IChcbiAgICBrZXk6IHN0cmluZyxcbiAgICBvcHRpb25zPzogYW55LFxuICAgIHdoaXRlc3BhY2VVbnRpbExvYWRlZD86IGJvb2xlYW5cbiAgKSA9PiBPYnNlcnZhYmxlPHN0cmluZz47XG5cbiAgLyoqXG4gICAqIExvYWRzIGNodW5rcyB3aXRoIHRyYW5zbGF0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gY2h1bmtOYW1lcyBhcnJheSBvZiBjaHVuayBuYW1lcyB0byBiZSBsb2FkZWRcbiAgICovXG4gIGxvYWRDaHVua3M6IChjaHVua05hbWVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4gUHJvbWlzZTxhbnk+O1xufVxuIl19