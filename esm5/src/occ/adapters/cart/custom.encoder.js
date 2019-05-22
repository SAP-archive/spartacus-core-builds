/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomEncoder = /** @class */ (function () {
    function CustomEncoder() {
    }
    /**
     * @param {?} key
     * @return {?}
     */
    CustomEncoder.prototype.encodeKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return encodeURIComponent(key);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CustomEncoder.prototype.encodeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return encodeURIComponent(value);
    };
    /**
     * @param {?} key
     * @return {?}
     */
    CustomEncoder.prototype.decodeKey = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return decodeURIComponent(key);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CustomEncoder.prototype.decodeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return decodeURIComponent(value);
    };
    return CustomEncoder;
}());
export { CustomEncoder };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tLmVuY29kZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL2NvcmUvIiwic291cmNlcyI6WyJzcmMvb2NjL2FkYXB0ZXJzL2NhcnQvY3VzdG9tLmVuY29kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQVNBO0lBQUE7SUFnQkEsQ0FBQzs7Ozs7SUFmQyxpQ0FBUzs7OztJQUFULFVBQVUsR0FBVztRQUNuQixPQUFPLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsbUNBQVc7Ozs7SUFBWCxVQUFZLEtBQWE7UUFDdkIsT0FBTyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUVELGlDQUFTOzs7O0lBQVQsVUFBVSxHQUFXO1FBQ25CLE9BQU8sa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxtQ0FBVzs7OztJQUFYLFVBQVksS0FBYTtRQUN2QixPQUFPLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFoQkQsSUFnQkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEFuZ3VsYXIgdXNlcyB0aGUgbmF0aXZlIGVuY29kZVVSSUNvbXBvbmVudCBmdW5jdGlvbixcbiAqIGJ1dCB0aGVuIHVuLWVuY29kZWQgc29tZSBjaGFyYWN0ZXJzIHRoYXQgYXJlIGFsbG93ZWRcbiAqIHRvIGJlIHBhcnQgb2YgdGhlIHF1ZXJ5IGFjY29yZGluZyB0byBJRVRGIFJGQyAzOTg2LlxuICogU28sIHRvIG1ha2UgdGhlc2UgY2hhcmFjdGVycyBzdGlsbCBlbmNvZGVkLCB0aGlzIGVuY29kZXIgb25seVxuICogdXNlcyB0aGUgZW5jb2RlVVJJQ29tcG9uZW50LlxuICovXG5pbXBvcnQgeyBIdHRwUGFyYW1ldGVyQ29kZWMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5cbmV4cG9ydCBjbGFzcyBDdXN0b21FbmNvZGVyIGltcGxlbWVudHMgSHR0cFBhcmFtZXRlckNvZGVjIHtcbiAgZW5jb2RlS2V5KGtleTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSk7XG4gIH1cblxuICBlbmNvZGVWYWx1ZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKTtcbiAgfVxuXG4gIGRlY29kZUtleShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChrZXkpO1xuICB9XG5cbiAgZGVjb2RlVmFsdWUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==