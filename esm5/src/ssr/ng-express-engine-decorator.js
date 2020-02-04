/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { SERVER_REQUEST_ORIGIN, SERVER_REQUEST_URL } from './ssr.providers';
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
        {
            provide: SERVER_REQUEST_ORIGIN,
            useValue: getRequestOrigin(options.req),
        },
    ];
}
/**
 * @param {?} req
 * @return {?}
 */
function getRequestUrl(req) {
    return getRequestOrigin(req) + req.originalUrl;
}
/**
 * @param {?} req
 * @return {?}
 */
function getRequestOrigin(req) {
    return req.protocol + '://' + req.get('host');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZXhwcmVzcy1lbmdpbmUtZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Nzci9uZy1leHByZXNzLWVuZ2luZS1kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7QUFLNUUsb0NBR0M7OztJQUZDLG1DQUEwQzs7SUFDMUMsbUNBQTZCOzs7Ozs7QUFNL0IsbUNBU0M7OztJQVJDLDRCQUlFOztJQUNGLDRCQUFVOztJQUNWLDRCQUFhOztJQUNiLGlDQUFrQjs7Ozs7O0FBaUJwQjs7Ozs7SUFBQTtJQXVCQSxDQUFDO0lBdEJDOzs7O09BSUc7Ozs7Ozs7SUFDSSw0QkFBRzs7Ozs7O0lBQVYsVUFBVyxlQUFnQzs7WUFDbkMsTUFBTTs7OztRQUFHLFNBQVMsaUJBQWlCLENBQ3ZDLFlBQTRCO1lBRTVCOzs7Ozs7WUFBTyxVQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUTs7b0JBQzNCLGNBQWMsR0FBRyxlQUFlLHNCQUNqQyxZQUFZLElBQ2YsU0FBUyxtQkFDSix5QkFBeUIsQ0FBQyxPQUFPLENBQUMsRUFDbEMsQ0FBQyxZQUFZLENBQUMsU0FBUyxJQUFJLEVBQUUsQ0FBQyxLQUVuQztnQkFDRixPQUFPLGNBQWMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1lBQ3JELENBQUMsRUFBQztRQUNKLENBQUMsQ0FBQTtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7SUFDSCwrQkFBQztBQUFELENBQUMsQUF2QkQsSUF1QkM7Ozs7Ozs7Ozs7OztBQU9ELE1BQU0sVUFBVSx5QkFBeUIsQ0FDdkMsT0FBc0I7SUFFdEIsT0FBTztRQUNMO1lBQ0UsT0FBTyxFQUFFLGtCQUFrQjtZQUMzQixRQUFRLEVBQUUsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDckM7UUFDRDtZQUNFLE9BQU8sRUFBRSxxQkFBcUI7WUFDOUIsUUFBUSxFQUFFLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7U0FDeEM7S0FDRixDQUFDO0FBQ0osQ0FBQzs7Ozs7QUFFRCxTQUFTLGFBQWEsQ0FBQyxHQUFRO0lBQzdCLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLFdBQVcsQ0FBQztBQUNqRCxDQUFDOzs7OztBQUVELFNBQVMsZ0JBQWdCLENBQUMsR0FBUTtJQUNoQyxPQUFPLEdBQUcsQ0FBQyxRQUFRLEdBQUcsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDaEQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlRmFjdG9yeSwgU3RhdGljUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNFUlZFUl9SRVFVRVNUX09SSUdJTiwgU0VSVkVSX1JFUVVFU1RfVVJMIH0gZnJvbSAnLi9zc3IucHJvdmlkZXJzJztcblxuLyoqXG4gKiBUaGVzZSBhcmUgdGhlIGFsbG93ZWQgb3B0aW9ucyBmb3IgdGhlIGVuZ2luZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5nU2V0dXBPcHRpb25zIHtcbiAgYm9vdHN0cmFwOiBUeXBlPHt9PiB8IE5nTW9kdWxlRmFjdG9yeTx7fT47XG4gIHByb3ZpZGVycz86IFN0YXRpY1Byb3ZpZGVyW107XG59XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBhbGxvd2VkIG9wdGlvbnMgZm9yIHRoZSByZW5kZXJcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZW5kZXJPcHRpb25zIGV4dGVuZHMgTmdTZXR1cE9wdGlvbnMge1xuICByZXE6IHtcbiAgICBwcm90b2NvbDogc3RyaW5nO1xuICAgIG9yaWdpbmFsVXJsOiBzdHJpbmc7XG4gICAgZ2V0OiAoXzogc3RyaW5nKSA9PiBzdHJpbmc7XG4gIH07IC8vIFJlcXVlc3Q7XG4gIHJlcz86IGFueTsgLy8gUmVzcG9uc2U7XG4gIHVybD86IHN0cmluZztcbiAgZG9jdW1lbnQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIE5nRXhwcmVzc0VuZ2luZUluc3RhbmNlID0gKFxuICBmaWxlUGF0aDogc3RyaW5nLFxuICBvcHRpb25zOiBSZW5kZXJPcHRpb25zLFxuICBjYWxsYmFjazogKGVycj86IEVycm9yIHwgbnVsbCB8IHVuZGVmaW5lZCwgaHRtbD86IHN0cmluZyB8IHVuZGVmaW5lZCkgPT4gdm9pZFxuKSA9PiB2b2lkO1xuXG5leHBvcnQgdHlwZSBOZ0V4cHJlc3NFbmdpbmUgPSAoXG4gIHNldHVwT3B0aW9uczogTmdTZXR1cE9wdGlvbnNcbikgPT4gTmdFeHByZXNzRW5naW5lSW5zdGFuY2U7XG5cbi8qKlxuICogVGhlIHdyYXBwZXIgb3ZlciB0aGUgc3RhbmRhcmQgbmdFeHByZXNzRW5naW5lLCB0aGF0IHByb3ZpZGVzIHRva2VucyBmb3IgU3BhcnRhY3VzXG4gKiBAcGFyYW0gbmdFeHByZXNzRW5naW5lXG4gKi9cbmV4cG9ydCBjbGFzcyBOZ0V4cHJlc3NFbmdpbmVEZWNvcmF0b3Ige1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgaGlnaGVyIG9yZGVyIG5nRXhwcmVzc0VuZ2luZSB3aXRoIHByb3ZpZGVkIHRva2VucyBmb3IgU3BhcnRhY3VzXG4gICAqXG4gICAqIEBwYXJhbSBuZ0V4cHJlc3NFbmdpbmVcbiAgICovXG4gIHN0YXRpYyBnZXQobmdFeHByZXNzRW5naW5lOiBOZ0V4cHJlc3NFbmdpbmUpOiBOZ0V4cHJlc3NFbmdpbmUge1xuICAgIGNvbnN0IHJlc3VsdCA9IGZ1bmN0aW9uIGN4TmdFeHByZXNzRW5naW5lKFxuICAgICAgc2V0dXBPcHRpb25zOiBOZ1NldHVwT3B0aW9uc1xuICAgICk6IE5nRXhwcmVzc0VuZ2luZUluc3RhbmNlIHtcbiAgICAgIHJldHVybiAoZmlsZVBhdGgsIG9wdGlvbnMsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IGVuZ2luZUluc3RhbmNlID0gbmdFeHByZXNzRW5naW5lKHtcbiAgICAgICAgICAuLi5zZXR1cE9wdGlvbnMsXG4gICAgICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgICAgICAuLi5nZXRTZXJ2ZXJSZXF1ZXN0UHJvdmlkZXJzKG9wdGlvbnMpLFxuICAgICAgICAgICAgLi4uKHNldHVwT3B0aW9ucy5wcm92aWRlcnMgfHwgW10pLFxuICAgICAgICAgIF0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gZW5naW5lSW5zdGFuY2UoZmlsZVBhdGgsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgIH07XG4gICAgfTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBTcGFydGFjdXMnIHByb3ZpZGVycyB0byBiZSBwYXNzZWQgdG8gdGhlIEFuZ3VsYXIgZXhwcmVzcyBlbmdpbmUgKGluIFNTUilcbiAqXG4gKiBAcGFyYW0gb3B0aW9uc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0U2VydmVyUmVxdWVzdFByb3ZpZGVycyhcbiAgb3B0aW9uczogUmVuZGVyT3B0aW9uc1xuKTogU3RhdGljUHJvdmlkZXJbXSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogU0VSVkVSX1JFUVVFU1RfVVJMLFxuICAgICAgdXNlVmFsdWU6IGdldFJlcXVlc3RVcmwob3B0aW9ucy5yZXEpLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogU0VSVkVSX1JFUVVFU1RfT1JJR0lOLFxuICAgICAgdXNlVmFsdWU6IGdldFJlcXVlc3RPcmlnaW4ob3B0aW9ucy5yZXEpLFxuICAgIH0sXG4gIF07XG59XG5cbmZ1bmN0aW9uIGdldFJlcXVlc3RVcmwocmVxOiBhbnkpOiBzdHJpbmcge1xuICByZXR1cm4gZ2V0UmVxdWVzdE9yaWdpbihyZXEpICsgcmVxLm9yaWdpbmFsVXJsO1xufVxuXG5mdW5jdGlvbiBnZXRSZXF1ZXN0T3JpZ2luKHJlcTogYW55KTogc3RyaW5nIHtcbiAgcmV0dXJuIHJlcS5wcm90b2NvbCArICc6Ly8nICsgcmVxLmdldCgnaG9zdCcpO1xufVxuIl19