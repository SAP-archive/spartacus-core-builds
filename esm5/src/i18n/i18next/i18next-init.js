/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import i18next from 'i18next';
import i18nextXhrBackend from 'i18next-xhr-backend';
/**
 * @param {?} configInit
 * @param {?} languageService
 * @param {?} httpClient
 * @return {?}
 */
export function i18nextInit(configInit, languageService, httpClient) {
    return (/**
     * @return {?}
     */
    function () {
        return configInit.getStableConfig('i18n').then((/**
         * @param {?} config
         * @return {?}
         */
        function (config) {
            /** @type {?} */
            var i18nextConfig = {
                ns: [],
                // don't preload any namespaces
                fallbackLng: config.i18n.fallbackLang,
                debug: config.i18n.debug,
                interpolation: {
                    escapeValue: false,
                },
            };
            if (config.i18n.backend) {
                i18next.use(i18nextXhrBackend);
                /** @type {?} */
                var backend = {
                    loadPath: config.i18n.backend.loadPath || undefined,
                    ajax: i18nextGetHttpClient(httpClient),
                };
                i18nextConfig = tslib_1.__assign({}, i18nextConfig, { backend: backend });
            }
            return i18next.init(i18nextConfig, (/**
             * @return {?}
             */
            function () {
                // Don't use i18next's 'resources' config key for adding static translations,
                // because it will disable loading chunks from backend. We add resources here, in the init's callback.
                i18nextAddTranslations(config.i18n.resources);
                syncI18nextWithSiteContext(languageService);
            }));
        }));
    });
}
/**
 * @param {?=} resources
 * @return {?}
 */
export function i18nextAddTranslations(resources) {
    if (resources === void 0) { resources = {}; }
    Object.keys(resources).forEach((/**
     * @param {?} lang
     * @return {?}
     */
    function (lang) {
        Object.keys(resources[lang]).forEach((/**
         * @param {?} chunkName
         * @return {?}
         */
        function (chunkName) {
            i18next.addResourceBundle(lang, chunkName, resources[lang][chunkName], true, true);
        }));
    }));
}
/**
 * @param {?} language
 * @return {?}
 */
export function syncI18nextWithSiteContext(language) {
    // always update language of i18next on site context (language) change
    language.getActive().subscribe((/**
     * @param {?} lang
     * @return {?}
     */
    function (lang) { return i18next.changeLanguage(lang); }));
}
/**
 * Returns a function appropriate for i18next to make http calls for JSON files.
 * See docs for `i18next-xhr-backend`: https://github.com/i18next/i18next-xhr-backend#backend-options
 *
 * It uses Angular HttpClient under the hood, so it works in SSR.
 * @param {?} httpClient Angular http client
 * @return {?}
 */
export function i18nextGetHttpClient(httpClient) {
    return (/**
     * @param {?} url
     * @param {?} _options
     * @param {?} callback
     * @param {?} _data
     * @return {?}
     */
    function (url, _options, callback, _data) {
        httpClient
            .get(url, { responseType: 'text' })
            .subscribe((/**
         * @param {?} data
         * @return {?}
         */
        function (data) { return callback(data, { status: 200 }); }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) { return callback(null, { status: error.status }); }));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaTE4bmV4dC1pbml0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9jb3JlLyIsInNvdXJjZXMiOlsic3JjL2kxOG4vaTE4bmV4dC9pMThuZXh0LWluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxPQUFPLE9BQU8sTUFBTSxTQUFTLENBQUM7QUFDOUIsT0FBTyxpQkFBaUIsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7OztBQUtwRCxNQUFNLFVBQVUsV0FBVyxDQUN6QixVQUFvQyxFQUNwQyxlQUFnQyxFQUNoQyxVQUFzQjtJQUV0Qjs7O0lBQU87UUFDTCxPQUFBLFVBQVUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsTUFBTTs7Z0JBQ3hDLGFBQWEsR0FBd0I7Z0JBQ3ZDLEVBQUUsRUFBRSxFQUFFOztnQkFDTixXQUFXLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZO2dCQUNyQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLO2dCQUN4QixhQUFhLEVBQUU7b0JBQ2IsV0FBVyxFQUFFLEtBQUs7aUJBQ25CO2FBQ0Y7WUFDRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O29CQUN6QixPQUFPLEdBQUc7b0JBQ2QsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSxTQUFTO29CQUNuRCxJQUFJLEVBQUUsb0JBQW9CLENBQUMsVUFBVSxDQUFDO2lCQUN2QztnQkFDRCxhQUFhLHdCQUFRLGFBQWEsSUFBRSxPQUFPLFNBQUEsR0FBRSxDQUFDO2FBQy9DO1lBRUQsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWE7OztZQUFFO2dCQUNqQyw2RUFBNkU7Z0JBQzdFLHNHQUFzRztnQkFDdEcsc0JBQXNCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDOUMsMEJBQTBCLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDOUMsQ0FBQyxFQUFDLENBQUM7UUFDTCxDQUFDLEVBQUM7SUF4QkYsQ0F3QkUsRUFBQztBQUNQLENBQUM7Ozs7O0FBRUQsTUFBTSxVQUFVLHNCQUFzQixDQUFDLFNBQW9DO0lBQXBDLDBCQUFBLEVBQUEsY0FBb0M7SUFDekUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPOzs7O0lBQUMsVUFBQSxJQUFJO1FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTzs7OztRQUFDLFVBQUEsU0FBUztZQUM1QyxPQUFPLENBQUMsaUJBQWlCLENBQ3ZCLElBQUksRUFDSixTQUFTLEVBQ1QsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUMxQixJQUFJLEVBQ0osSUFBSSxDQUNMLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUMsRUFBQyxDQUFDO0FBQ0wsQ0FBQzs7Ozs7QUFFRCxNQUFNLFVBQVUsMEJBQTBCLENBQUMsUUFBeUI7SUFDbEUsc0VBQXNFO0lBQ3RFLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTOzs7O0lBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxPQUFPLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUE1QixDQUE0QixFQUFDLENBQUM7QUFDdkUsQ0FBQzs7Ozs7Ozs7O0FBU0QsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxVQUFzQjtJQUV0Qjs7Ozs7OztJQUFPLFVBQUMsR0FBVyxFQUFFLFFBQWdCLEVBQUUsUUFBa0IsRUFBRSxLQUFhO1FBQ3RFLFVBQVU7YUFDUCxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxDQUFDO2FBQ2xDLFNBQVM7Ozs7UUFDUixVQUFBLElBQUksSUFBSSxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBL0IsQ0FBK0I7Ozs7UUFDdkMsVUFBQSxLQUFLLElBQUksT0FBQSxRQUFRLENBQUMsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUF4QyxDQUF3QyxFQUNsRCxDQUFDO0lBQ04sQ0FBQyxFQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgaTE4bmV4dCBmcm9tICdpMThuZXh0JztcbmltcG9ydCBpMThuZXh0WGhyQmFja2VuZCBmcm9tICdpMThuZXh0LXhoci1iYWNrZW5kJztcbmltcG9ydCB7IENvbmZpZ0luaXRpYWxpemVyU2VydmljZSB9IGZyb20gJy4uLy4uL2NvbmZpZy9jb25maWctaW5pdGlhbGl6ZXIvY29uZmlnLWluaXRpYWxpemVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2l0ZS1jb250ZXh0L2ZhY2FkZS9sYW5ndWFnZS5zZXJ2aWNlJztcbmltcG9ydCB7IFRyYW5zbGF0aW9uUmVzb3VyY2VzIH0gZnJvbSAnLi4vdHJhbnNsYXRpb24tcmVzb3VyY2VzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG5leHRJbml0KFxuICBjb25maWdJbml0OiBDb25maWdJbml0aWFsaXplclNlcnZpY2UsXG4gIGxhbmd1YWdlU2VydmljZTogTGFuZ3VhZ2VTZXJ2aWNlLFxuICBodHRwQ2xpZW50OiBIdHRwQ2xpZW50XG4pOiAoKSA9PiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gKCkgPT5cbiAgICBjb25maWdJbml0LmdldFN0YWJsZUNvbmZpZygnaTE4bicpLnRoZW4oY29uZmlnID0+IHtcbiAgICAgIGxldCBpMThuZXh0Q29uZmlnOiBpMThuZXh0LkluaXRPcHRpb25zID0ge1xuICAgICAgICBuczogW10sIC8vIGRvbid0IHByZWxvYWQgYW55IG5hbWVzcGFjZXNcbiAgICAgICAgZmFsbGJhY2tMbmc6IGNvbmZpZy5pMThuLmZhbGxiYWNrTGFuZyxcbiAgICAgICAgZGVidWc6IGNvbmZpZy5pMThuLmRlYnVnLFxuICAgICAgICBpbnRlcnBvbGF0aW9uOiB7XG4gICAgICAgICAgZXNjYXBlVmFsdWU6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGlmIChjb25maWcuaTE4bi5iYWNrZW5kKSB7XG4gICAgICAgIGkxOG5leHQudXNlKGkxOG5leHRYaHJCYWNrZW5kKTtcbiAgICAgICAgY29uc3QgYmFja2VuZCA9IHtcbiAgICAgICAgICBsb2FkUGF0aDogY29uZmlnLmkxOG4uYmFja2VuZC5sb2FkUGF0aCB8fCB1bmRlZmluZWQsXG4gICAgICAgICAgYWpheDogaTE4bmV4dEdldEh0dHBDbGllbnQoaHR0cENsaWVudCksXG4gICAgICAgIH07XG4gICAgICAgIGkxOG5leHRDb25maWcgPSB7IC4uLmkxOG5leHRDb25maWcsIGJhY2tlbmQgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGkxOG5leHQuaW5pdChpMThuZXh0Q29uZmlnLCAoKSA9PiB7XG4gICAgICAgIC8vIERvbid0IHVzZSBpMThuZXh0J3MgJ3Jlc291cmNlcycgY29uZmlnIGtleSBmb3IgYWRkaW5nIHN0YXRpYyB0cmFuc2xhdGlvbnMsXG4gICAgICAgIC8vIGJlY2F1c2UgaXQgd2lsbCBkaXNhYmxlIGxvYWRpbmcgY2h1bmtzIGZyb20gYmFja2VuZC4gV2UgYWRkIHJlc291cmNlcyBoZXJlLCBpbiB0aGUgaW5pdCdzIGNhbGxiYWNrLlxuICAgICAgICBpMThuZXh0QWRkVHJhbnNsYXRpb25zKGNvbmZpZy5pMThuLnJlc291cmNlcyk7XG4gICAgICAgIHN5bmNJMThuZXh0V2l0aFNpdGVDb250ZXh0KGxhbmd1YWdlU2VydmljZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGkxOG5leHRBZGRUcmFuc2xhdGlvbnMocmVzb3VyY2VzOiBUcmFuc2xhdGlvblJlc291cmNlcyA9IHt9KSB7XG4gIE9iamVjdC5rZXlzKHJlc291cmNlcykuZm9yRWFjaChsYW5nID0+IHtcbiAgICBPYmplY3Qua2V5cyhyZXNvdXJjZXNbbGFuZ10pLmZvckVhY2goY2h1bmtOYW1lID0+IHtcbiAgICAgIGkxOG5leHQuYWRkUmVzb3VyY2VCdW5kbGUoXG4gICAgICAgIGxhbmcsXG4gICAgICAgIGNodW5rTmFtZSxcbiAgICAgICAgcmVzb3VyY2VzW2xhbmddW2NodW5rTmFtZV0sXG4gICAgICAgIHRydWUsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc3luY0kxOG5leHRXaXRoU2l0ZUNvbnRleHQobGFuZ3VhZ2U6IExhbmd1YWdlU2VydmljZSkge1xuICAvLyBhbHdheXMgdXBkYXRlIGxhbmd1YWdlIG9mIGkxOG5leHQgb24gc2l0ZSBjb250ZXh0IChsYW5ndWFnZSkgY2hhbmdlXG4gIGxhbmd1YWdlLmdldEFjdGl2ZSgpLnN1YnNjcmliZShsYW5nID0+IGkxOG5leHQuY2hhbmdlTGFuZ3VhZ2UobGFuZykpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiBhcHByb3ByaWF0ZSBmb3IgaTE4bmV4dCB0byBtYWtlIGh0dHAgY2FsbHMgZm9yIEpTT04gZmlsZXMuXG4gKiBTZWUgZG9jcyBmb3IgYGkxOG5leHQteGhyLWJhY2tlbmRgOiBodHRwczovL2dpdGh1Yi5jb20vaTE4bmV4dC9pMThuZXh0LXhoci1iYWNrZW5kI2JhY2tlbmQtb3B0aW9uc1xuICpcbiAqIEl0IHVzZXMgQW5ndWxhciBIdHRwQ2xpZW50IHVuZGVyIHRoZSBob29kLCBzbyBpdCB3b3JrcyBpbiBTU1IuXG4gKiBAcGFyYW0gaHR0cENsaWVudCBBbmd1bGFyIGh0dHAgY2xpZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpMThuZXh0R2V0SHR0cENsaWVudChcbiAgaHR0cENsaWVudDogSHR0cENsaWVudFxuKTogKHVybDogc3RyaW5nLCBvcHRpb25zOiBvYmplY3QsIGNhbGxiYWNrOiBGdW5jdGlvbiwgZGF0YTogb2JqZWN0KSA9PiB2b2lkIHtcbiAgcmV0dXJuICh1cmw6IHN0cmluZywgX29wdGlvbnM6IG9iamVjdCwgY2FsbGJhY2s6IEZ1bmN0aW9uLCBfZGF0YTogb2JqZWN0KSA9PiB7XG4gICAgaHR0cENsaWVudFxuICAgICAgLmdldCh1cmwsIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfSlcbiAgICAgIC5zdWJzY3JpYmUoXG4gICAgICAgIGRhdGEgPT4gY2FsbGJhY2soZGF0YSwgeyBzdGF0dXM6IDIwMCB9KSxcbiAgICAgICAgZXJyb3IgPT4gY2FsbGJhY2sobnVsbCwgeyBzdGF0dXM6IGVycm9yLnN0YXR1cyB9KVxuICAgICAgKTtcbiAgfTtcbn1cbiJdfQ==