/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NgExpressEngineDecorator {
    /**
     * Returns the higher order ngExpressEngine with provided tokens for Spartacus
     *
     * @param {?} ngExpressEngine
     * @return {?}
     */
    static get(ngExpressEngine) {
        /** @type {?} */
        const result = (/**
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
            (filePath, options, callback) => {
                /** @type {?} */
                const engineInstance = ngExpressEngine(Object.assign({}, setupOptions, { providers: [
                        ...getServerRequestProviders(options),
                        ...(setupOptions.providers || []),
                    ] }));
                return engineInstance(filePath, options, callback);
            });
        });
        return result;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctZXhwcmVzcy1lbmdpbmUtZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL3Nzci9uZy1leHByZXNzLWVuZ2luZS1kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztBQUtyRCxvQ0FHQzs7O0lBRkMsbUNBQTBDOztJQUMxQyxtQ0FBNkI7Ozs7OztBQU0vQixtQ0FTQzs7O0lBUkMsNEJBSUU7O0lBQ0YsNEJBQVU7O0lBQ1YsNEJBQWE7O0lBQ2IsaUNBQWtCOzs7Ozs7QUFpQnBCLE1BQU0sT0FBTyx3QkFBd0I7Ozs7Ozs7SUFNbkMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFnQzs7Y0FDbkMsTUFBTTs7OztRQUFHLFNBQVMsaUJBQWlCLENBQ3ZDLFlBQTRCO1lBRTVCOzs7Ozs7WUFBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUU7O3NCQUMvQixjQUFjLEdBQUcsZUFBZSxtQkFDakMsWUFBWSxJQUNmLFNBQVMsRUFBRTt3QkFDVCxHQUFHLHlCQUF5QixDQUFDLE9BQU8sQ0FBQzt3QkFDckMsR0FBRyxDQUFDLFlBQVksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDO3FCQUNsQyxJQUNEO2dCQUNGLE9BQU8sY0FBYyxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDckQsQ0FBQyxFQUFDO1FBQ0osQ0FBQyxDQUFBO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztDQUNGOzs7Ozs7O0FBT0QsTUFBTSxVQUFVLHlCQUF5QixDQUN2QyxPQUFzQjtJQUV0QixPQUFPO1FBQ0w7WUFDRSxPQUFPLEVBQUUsa0JBQWtCO1lBQzNCLFFBQVEsRUFBRSxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQztTQUNyQztLQUNGLENBQUM7QUFDSixDQUFDOzs7OztBQUVELFNBQVMsYUFBYSxDQUFDLEdBQVE7SUFDN0IsT0FBTyxHQUFHLENBQUMsUUFBUSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxXQUFXLENBQUM7QUFDbEUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlRmFjdG9yeSwgU3RhdGljUHJvdmlkZXIsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFNFUlZFUl9SRVFVRVNUX1VSTCB9IGZyb20gJy4vc3NyLnByb3ZpZGVycyc7XG5cbi8qKlxuICogVGhlc2UgYXJlIHRoZSBhbGxvd2VkIG9wdGlvbnMgZm9yIHRoZSBlbmdpbmVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ1NldHVwT3B0aW9ucyB7XG4gIGJvb3RzdHJhcDogVHlwZTx7fT4gfCBOZ01vZHVsZUZhY3Rvcnk8e30+O1xuICBwcm92aWRlcnM/OiBTdGF0aWNQcm92aWRlcltdO1xufVxuXG4vKipcbiAqIFRoZXNlIGFyZSB0aGUgYWxsb3dlZCBvcHRpb25zIGZvciB0aGUgcmVuZGVyXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVuZGVyT3B0aW9ucyBleHRlbmRzIE5nU2V0dXBPcHRpb25zIHtcbiAgcmVxOiB7XG4gICAgcHJvdG9jb2w6IHN0cmluZztcbiAgICBvcmlnaW5hbFVybDogc3RyaW5nO1xuICAgIGdldDogKF86IHN0cmluZykgPT4gc3RyaW5nO1xuICB9OyAvLyBSZXF1ZXN0O1xuICByZXM/OiBhbnk7IC8vIFJlc3BvbnNlO1xuICB1cmw/OiBzdHJpbmc7XG4gIGRvY3VtZW50Pzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBOZ0V4cHJlc3NFbmdpbmVJbnN0YW5jZSA9IChcbiAgZmlsZVBhdGg6IHN0cmluZyxcbiAgb3B0aW9uczogUmVuZGVyT3B0aW9ucyxcbiAgY2FsbGJhY2s6IChlcnI/OiBFcnJvciB8IG51bGwgfCB1bmRlZmluZWQsIGh0bWw/OiBzdHJpbmcgfCB1bmRlZmluZWQpID0+IHZvaWRcbikgPT4gdm9pZDtcblxuZXhwb3J0IHR5cGUgTmdFeHByZXNzRW5naW5lID0gKFxuICBzZXR1cE9wdGlvbnM6IE5nU2V0dXBPcHRpb25zXG4pID0+IE5nRXhwcmVzc0VuZ2luZUluc3RhbmNlO1xuXG4vKipcbiAqIFRoZSB3cmFwcGVyIG92ZXIgdGhlIHN0YW5kYXJkIG5nRXhwcmVzc0VuZ2luZSwgdGhhdCBwcm92aWRlcyB0b2tlbnMgZm9yIFNwYXJ0YWN1c1xuICogQHBhcmFtIG5nRXhwcmVzc0VuZ2luZVxuICovXG5leHBvcnQgY2xhc3MgTmdFeHByZXNzRW5naW5lRGVjb3JhdG9yIHtcbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGhpZ2hlciBvcmRlciBuZ0V4cHJlc3NFbmdpbmUgd2l0aCBwcm92aWRlZCB0b2tlbnMgZm9yIFNwYXJ0YWN1c1xuICAgKlxuICAgKiBAcGFyYW0gbmdFeHByZXNzRW5naW5lXG4gICAqL1xuICBzdGF0aWMgZ2V0KG5nRXhwcmVzc0VuZ2luZTogTmdFeHByZXNzRW5naW5lKTogTmdFeHByZXNzRW5naW5lIHtcbiAgICBjb25zdCByZXN1bHQgPSBmdW5jdGlvbiBjeE5nRXhwcmVzc0VuZ2luZShcbiAgICAgIHNldHVwT3B0aW9uczogTmdTZXR1cE9wdGlvbnNcbiAgICApOiBOZ0V4cHJlc3NFbmdpbmVJbnN0YW5jZSB7XG4gICAgICByZXR1cm4gKGZpbGVQYXRoLCBvcHRpb25zLCBjYWxsYmFjaykgPT4ge1xuICAgICAgICBjb25zdCBlbmdpbmVJbnN0YW5jZSA9IG5nRXhwcmVzc0VuZ2luZSh7XG4gICAgICAgICAgLi4uc2V0dXBPcHRpb25zLFxuICAgICAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICAgICAgLi4uZ2V0U2VydmVyUmVxdWVzdFByb3ZpZGVycyhvcHRpb25zKSxcbiAgICAgICAgICAgIC4uLihzZXR1cE9wdGlvbnMucHJvdmlkZXJzIHx8IFtdKSxcbiAgICAgICAgICBdLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGVuZ2luZUluc3RhbmNlKGZpbGVQYXRoLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgU3BhcnRhY3VzJyBwcm92aWRlcnMgdG8gYmUgcGFzc2VkIHRvIHRoZSBBbmd1bGFyIGV4cHJlc3MgZW5naW5lIChpbiBTU1IpXG4gKlxuICogQHBhcmFtIG9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNlcnZlclJlcXVlc3RQcm92aWRlcnMoXG4gIG9wdGlvbnM6IFJlbmRlck9wdGlvbnNcbik6IFN0YXRpY1Byb3ZpZGVyW10ge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNFUlZFUl9SRVFVRVNUX1VSTCxcbiAgICAgIHVzZVZhbHVlOiBnZXRSZXF1ZXN0VXJsKG9wdGlvbnMucmVxKSxcbiAgICB9LFxuICBdO1xufVxuXG5mdW5jdGlvbiBnZXRSZXF1ZXN0VXJsKHJlcTogYW55KTogc3RyaW5nIHtcbiAgcmV0dXJuIHJlcS5wcm90b2NvbCArICc6Ly8nICsgcmVxLmdldCgnaG9zdCcpICsgcmVxLm9yaWdpbmFsVXJsO1xufVxuIl19