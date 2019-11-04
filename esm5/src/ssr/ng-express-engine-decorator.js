/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SERVER_REQUEST_URL } from './ssr.providers';
/**
 * These are the allowed options for the engine
 * @record
 */
export function NgSetupOptions() { }
if (false) {
    /** @type {?} */
    NgSetupOptions.prototype.bootstrap;
    /** @type {?|undefined} */
    NgSetupOptions.prototype.providers;
}
/**
 * These are the allowed options for the render
 * @record
 */
export function RenderOptions() { }
if (false) {
    /** @type {?} */
    RenderOptions.prototype.req;
    /** @type {?|undefined} */
    RenderOptions.prototype.res;
    /** @type {?|undefined} */
    RenderOptions.prototype.url;
    /** @type {?|undefined} */
    RenderOptions.prototype.document;
}
/**
 * The wrapper over the standard ngExpressEngine, that provides tokens for Spartacus
 * @param ngExpressEngine
 */
var /**
 * The wrapper over the standard ngExpressEngine, that provides tokens for Spartacus
 * @param ngExpressEngine
 */
NgExpressEngineDecorator = /** @class */ (function () {
    function NgExpressEngineDecorator() {
    }
    /**
     * Returns the higher order ngExpressEngine with provided tokens for Spartacus
     *
     * @param ngExpressEngine
     */
    /**
     * Returns the higher order ngExpressEngine with provided tokens for Spartacus
     *
     * @param {?} ngExpressEngine
     * @return {?}
     */
    NgExpressEngineDecorator.get = /**
     * Returns the higher order ngExpressEngine with provided tokens for Spartacus
     *
     * @param {?} ngExpressEngine
     * @return {?}
     */
    function (ngExpressEngine) {
        /** @type {?} */
        var result = (/**
         * @param {?} setupOptions
         * @return {?}
         */
        function cxNgExpressEngine(setupOptions) {
            return (/**
             * @param {?} filePath
             * @param {?} options
             * @param {?} callback
             * @return {?}
             */
            function (filePath, options, callback) {
                /** @type {?} */
                var engineInstance = ngExpressEngine(tslib_1.__assign({}, setupOptions, { providers: tslib_1.__spread(getServerRequestProviders(options), (setupOptions.providers || [])) }));
                return engineInstance(filePath, options, callback);
            });
        });
        return result;
    };
    return NgExpressEngineDecorator;
}());
/**
 * The wrapper over the standard ngExpressEngine, that provides tokens for Spartacus
 * @param ngExpressEngine
 */
export { NgExpressEngineDecorator };
/**
 * Returns Spartacus' providers to be passed to the Angular express engine (in SSR)
 *
 * @param {?} options
 * @return {?}
 */
export function getServerRequestProviders(options) {
    return [
        {
            provide: SERVER_REQUEST_URL,
            useValue: getRequestUrl(options.req),
        },
    ];
}
/**
 * @param {?} req
 * @return {?}
 */
function getRequestUrl(req) {
    return req.protocol + '://' + req.get('host') + req.originalUrl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZXhwcmVzcy1lbmdpbmUtZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Nzci9uZy1leHByZXNzLWVuZ2luZS1kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFLckQsb0NBR0M7OztJQUZDLG1DQUEwQzs7SUFDMUMsbUNBQTZCOzs7Ozs7QUFNL0IsbUNBU0M7OztJQVJDLDRCQUlFOztJQUNGLDRCQUFVOztJQUNWLDRCQUFhOztJQUNiLGlDQUFrQjs7Ozs7O0FBaUJwQjs7Ozs7SUFBQTtJQXVCQSxDQUFDO0lBdEJDOzs7O09BSUc7Ozs7Ozs7SUFDSSw0QkFBRzs7Ozs7O0lBQVYsVUFBVyxlQUFnQzs7WUFDbkMsTUFBTTs7OztRQUFHLFNBQVMsaUJBQWlCLENBQ3ZDLFlBQTRCO1lBRTVCOzs7Ozs7WUFBTyxVQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUTs7b0JBQzNCLGNBQWMsR0FBRyxlQUFlLHNCQUNqQyxZQUFZLElBQ2YsU0FBUyxtQkFDSix5QkFBeUIsQ0FBQyxPQUFPLENBQUMsRUFDbEMsQ0FBQyxZQUFZLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxLQUVuQztnQkFDRixPQUFPLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELENBQUMsRUFBQztRQUNKLENBQUMsQ0FBQTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7Ozs7Ozs7Ozs7OztBQU9ELE1BQU0sVUFBVSx5QkFBeUIsQ0FDdkMsT0FBc0I7SUFFdEIsT0FBTztRQUNMO1lBQ0UsT0FBTyxFQUFFLGtCQUFrQjtZQUMzQixRQUFRLEVBQUUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDckM7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxHQUFRO0lBQzdCLE9BQU8sR0FBRyxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsV0FBVyxDQUFDO0FBQ2xFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZUZhY3RvcnksIFN0YXRpY1Byb3ZpZGVyLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTRVJWRVJfUkVRVUVTVF9VUkwgfSBmcm9tICcuL3Nzci5wcm92aWRlcnMnO1xuXG4vKipcbiAqIFRoZXNlIGFyZSB0aGUgYWxsb3dlZCBvcHRpb25zIGZvciB0aGUgZW5naW5lXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdTZXR1cE9wdGlvbnMge1xuICBib290c3RyYXA6IFR5cGU8e30+IHwgTmdNb2R1bGVGYWN0b3J5PHt9PjtcbiAgcHJvdmlkZXJzPzogU3RhdGljUHJvdmlkZXJbXTtcbn1cblxuLyoqXG4gKiBUaGVzZSBhcmUgdGhlIGFsbG93ZWQgb3B0aW9ucyBmb3IgdGhlIHJlbmRlclxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlbmRlck9wdGlvbnMgZXh0ZW5kcyBOZ1NldHVwT3B0aW9ucyB7XG4gIHJlcToge1xuICAgIHByb3RvY29sOiBzdHJpbmc7XG4gICAgb3JpZ2luYWxVcmw6IHN0cmluZztcbiAgICBnZXQ6IChfOiBzdHJpbmcpID0+IHN0cmluZztcbiAgfTsgLy8gUmVxdWVzdDtcbiAgcmVzPzogYW55OyAvLyBSZXNwb25zZTtcbiAgdXJsPzogc3RyaW5nO1xuICBkb2N1bWVudD86IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTmdFeHByZXNzRW5naW5lSW5zdGFuY2UgPSAoXG4gIGZpbGVQYXRoOiBzdHJpbmcsXG4gIG9wdGlvbnM6IFJlbmRlck9wdGlvbnMsXG4gIGNhbGxiYWNrOiAoZXJyPzogRXJyb3IgfCBudWxsIHwgdW5kZWZpbmVkLCBodG1sPzogc3RyaW5nIHwgdW5kZWZpbmVkKSA9PiB2b2lkXG4pID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIE5nRXhwcmVzc0VuZ2luZSA9IChcbiAgc2V0dXBPcHRpb25zOiBOZ1NldHVwT3B0aW9uc1xuKSA9PiBOZ0V4cHJlc3NFbmdpbmVJbnN0YW5jZTtcblxuLyoqXG4gKiBUaGUgd3JhcHBlciBvdmVyIHRoZSBzdGFuZGFyZCBuZ0V4cHJlc3NFbmdpbmUsIHRoYXQgcHJvdmlkZXMgdG9rZW5zIGZvciBTcGFydGFjdXNcbiAqIEBwYXJhbSBuZ0V4cHJlc3NFbmdpbmVcbiAqL1xuZXhwb3J0IGNsYXNzIE5nRXhwcmVzc0VuZ2luZURlY29yYXRvciB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBoaWdoZXIgb3JkZXIgbmdFeHByZXNzRW5naW5lIHdpdGggcHJvdmlkZWQgdG9rZW5zIGZvciBTcGFydGFjdXNcbiAgICpcbiAgICogQHBhcmFtIG5nRXhwcmVzc0VuZ2luZVxuICAgKi9cbiAgc3RhdGljIGdldChuZ0V4cHJlc3NFbmdpbmU6IE5nRXhwcmVzc0VuZ2luZSk6IE5nRXhwcmVzc0VuZ2luZSB7XG4gICAgY29uc3QgcmVzdWx0ID0gZnVuY3Rpb24gY3hOZ0V4cHJlc3NFbmdpbmUoXG4gICAgICBzZXR1cE9wdGlvbnM6IE5nU2V0dXBPcHRpb25zXG4gICAgKTogTmdFeHByZXNzRW5naW5lSW5zdGFuY2Uge1xuICAgICAgcmV0dXJuIChmaWxlUGF0aCwgb3B0aW9ucywgY2FsbGJhY2spID0+IHtcbiAgICAgICAgY29uc3QgZW5naW5lSW5zdGFuY2UgPSBuZ0V4cHJlc3NFbmdpbmUoe1xuICAgICAgICAgIC4uLnNldHVwT3B0aW9ucyxcbiAgICAgICAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgICAgIC4uLmdldFNlcnZlclJlcXVlc3RQcm92aWRlcnMob3B0aW9ucyksXG4gICAgICAgICAgICAuLi4oc2V0dXBPcHRpb25zLnByb3ZpZGVycyB8fCBbXSksXG4gICAgICAgICAgXSxcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBlbmdpbmVJbnN0YW5jZShmaWxlUGF0aCwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgfTtcbiAgICB9O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIFNwYXJ0YWN1cycgcHJvdmlkZXJzIHRvIGJlIHBhc3NlZCB0byB0aGUgQW5ndWxhciBleHByZXNzIGVuZ2luZSAoaW4gU1NSKVxuICpcbiAqIEBwYXJhbSBvcHRpb25zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXJ2ZXJSZXF1ZXN0UHJvdmlkZXJzKFxuICBvcHRpb25zOiBSZW5kZXJPcHRpb25zXG4pOiBTdGF0aWNQcm92aWRlcltdIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBTRVJWRVJfUkVRVUVTVF9VUkwsXG4gICAgICB1c2VWYWx1ZTogZ2V0UmVxdWVzdFVybChvcHRpb25zLnJlcSksXG4gICAgfSxcbiAgXTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVxdWVzdFVybChyZXE6IGFueSk6IHN0cmluZyB7XG4gIHJldHVybiByZXEucHJvdG9jb2wgKyAnOi8vJyArIHJlcS5nZXQoJ2hvc3QnKSArIHJlcS5vcmlnaW5hbFVybDtcbn1cbiJdfQ==